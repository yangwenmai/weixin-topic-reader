import requests
from bs4 import BeautifulSoup
import html2text
import json
import re
import time
from datetime import datetime
from urllib.parse import urljoin

class WeixinCrawler:
    def __init__(self):
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        self.biz = None  # 初始化为 None
        self.converter = html2text.HTML2Text()
        self.converter.ignore_links = False
        self.init_db()  # 添加数据库初始化

    def init_db(self):
        """初始化 SQLite 数据库"""
        import sqlite3
        self.conn = sqlite3.connect('weixin_crawler.db')
        self.cursor = self.conn.cursor()
        # 创建文章记录表
        self.cursor.execute('''
            CREATE TABLE IF NOT EXISTS articles (
                url TEXT PRIMARY KEY,
                title TEXT,
                publisher TEXT,
                publish_time TEXT,
                crawl_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        self.conn.commit()

    def is_article_crawled(self, url):
        """检查文章是否已经抓取过"""
        self.cursor.execute('SELECT url FROM articles WHERE url = ?', (url,))
        return self.cursor.fetchone() is not None

    def mark_article_crawled(self, article_data):
        """标记文章为已抓取"""
        self.cursor.execute('''
            INSERT INTO articles (url, title, publisher, publish_time)
            VALUES (?, ?, ?, ?)
        ''', (
            article_data['url'],
            article_data['title'],
            article_data['publisher'],
            article_data['publish_time']
        ))
        self.conn.commit()

    def __del__(self):
        """析构函数中关闭数据库连接"""
        if hasattr(self, 'conn'):
            self.conn.close()

    def get_article_links(self, album_url):
        """获取话题中的所有文章链接"""
        try:
            response = requests.get(album_url, headers=self.headers)
            soup = BeautifulSoup(response.text, 'html.parser')
            
            # 提取文章链接
            links = []
            articles = soup.find_all('li', class_='album__list-item')
            for article in articles:
                if 'data-link' in article.attrs:
                    url = article['data-link']
                    # 处理 HTML 实体编码
                    url = url.replace('&amp;', '&')
                    links.append(url)
                    
            return links
        except Exception as e:
            print(f"获取文章链接失败: {str(e)}")
            return []

    def handle_img_tags(self, content):
        """处理 HTML 中的图片标签，将 data-src 转换为 src"""
        if not content:
            return None
    
        try:
            soup = BeautifulSoup(content, 'html.parser')
            for img in soup.find_all('img'):
                # 获取 data-src 属性
                data_src = img.get('data-src')
                if data_src:
                    # 设置 src 属性
                    img['src'] = data_src
                    # 可选：删除 data-src 属性
                    del img['data-src']
            
            return str(soup)
        except Exception as e:
            print(f"处理图片标签失败: {str(e)}")
            return None

    def parse_article(self, url):
        """解析单篇文章并转换为markdown"""
        try:
            response = requests.get(url, headers=self.headers)
            # 从源码中提取 createTime
            create_time_match = re.search(r"var createTime = '([^']+)'", response.text)
            if create_time_match:
                create_time = create_time_match.group(1)
                # 直接解析日期字符串
                time_obj = datetime.strptime(create_time, '%Y-%m-%d %H:%M')
                publish_time = time_obj.strftime('%Y-%m-%d-%H-%M')
            else:
                print("警告：未找到创建时间，使用当前时间")
                publish_time = datetime.now().strftime('%Y-%m-%d-%H-%M')

            # 提取发布地的省份
            province_match = re.search(r"provinceName: '([^']+)'", response.text)
            province = province_match.group(1) if province_match else "未知地区"

            soup = BeautifulSoup(response.text, 'html.parser')
            
            # 提取标题
            title_elem = soup.find('h1', class_='rich_media_title')
            if not title_elem:
                raise ValueError("未找到文章标题")
            title = title_elem.get_text().strip()
            
            # 提取发布人
            publisher_elem = soup.find('a', id='js_name')
            if not publisher_elem:
                raise ValueError("未找到发布人信息")
            publisher = publisher_elem.get_text().strip()
            
            # 提取正文
            content = soup.find('div', class_='rich_media_content')
            if not content:
                raise ValueError("未找到文章内容")
            
            # 先处理图片标签
            processed_content = self.handle_img_tags(str(content))
            if not processed_content:
                raise ValueError("处理图片标签失败")

            # 转换为markdown
            markdown = self.converter.handle(str(processed_content))
            
            return {
                'title': title,
                'content': markdown,
                'url': url,
                'publisher': publisher,
                'publish_province': province,
                'publish_time': publish_time
            }
        except Exception as e:
            print(f"解析文章失败 {url}: {str(e)}")
            return None

    def save_to_markdown(self, article_data, output_dir='output'):
        """保存为markdown文件"""
        import os
        if not os.path.exists(output_dir):
            os.makedirs(output_dir)
        
        # 构建文件名（移除文件名中的非法字符）
        safe_title = re.sub(r'[\\/:*?"<>|]', '', article_data['title'])  # 移除 Windows/Unix 非法字符
        filename = f"{output_dir}/{article_data['publish_time']}-{safe_title}.md"
        # 确保父目录存在
        os.makedirs(os.path.dirname(filename), exist_ok=True)
        # 处理文件名中的非法字符
        filename = "".join(char for char in filename if char.isalnum() or char in ('-', '_', '/', '.'))
        
        time_obj = datetime.strptime(article_data['publish_time'], '%Y-%m-%d-%H-%M')
        formatted_time = time_obj.strftime('%Y-%m-%d %H:%M')
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(f"# {article_data['title']}\n\n")
            f.write(f"文章作者: {article_data['publisher']}\n")
            f.write(f"发布时间: {formatted_time}\n")
            f.write(f"发布地: {article_data['publish_province']}\n")
            f.write(f"原文链接: {article_data['url']}\n\n")
            f.write(f"封面图链接: {article_data['cover']}\n\n")
            f.write(article_data['content'])

    def get_more_topic_articles(self, topic_id, begin_msgid=None, begin_itemidx=None, count=10):
        """获取话题下更多文章
        topic_id: 话题ID
        begin_msgid: 开始的文章 id
        begin_itemidx: 开始的元素值
        count: 每次获取数量
        """
        
        url = "https://mp.weixin.qq.com/mp/appmsgalbum"
        params = {
            "action": "getalbum",
            "album_id": topic_id,
            "count": count,
            "f": "json",
        }
        # 如果有 biz 参数就添加
        if self.biz:
            params["__biz"] = self.biz
        
        # 如果有上一篇文章的信息，添加到参数中
        if begin_msgid and begin_itemidx:
            params.update({
                "begin_msgid": begin_msgid,
                "begin_itemidx": begin_itemidx
            })
        
        headers = {
            # "User-Agent": self.user_agent,
            # "Cookie": self.cookie,
            "Referer": f"https://mp.weixin.qq.com/mp/appmsgalbum?__biz={self.biz}&action=getalbum&album_id={topic_id}"
        }

        try:
            response = requests.get(url, params=params, headers=headers)
            data = response.json()
            # 如果返回数据中包含 biz，保存下来
            if not self.biz and "__biz" in response.url:
                self.biz = re.search(r'__biz=([^&]+)', response.url).group(1)

            if data.get("base_resp").get("ret") == 0:
                article_list = data.get("getalbum_resp", {}).get("article_list", [])
                # 获取最后一篇文章的信息，用于下一次请求
                if article_list:
                    last_article = article_list[-1]
                    next_msgid = last_article.get("msgid")
                    next_itemidx = last_article.get("itemidx", 1)
                else:
                    next_msgid = None
                    next_itemidx = None
                
                has_more = data.get("getalbum_resp", {}).get("continue_flag", 0)
                return article_list, has_more, next_msgid, next_itemidx
            return [], 0, None, None
        except Exception as e:
            print(f"获取更多文章失败: {e}")
            return [], 0, None, None

    def extract_biz_from_url(self, url):
        """从 URL 中提取 biz 参数"""
        match = re.search(r'__biz=([^&]+)', url)
        if match:
            self.biz = match.group(1)
            return True
        return False

    def get_all_topic_articles(self, topic_id):
        """获取话题下所有文章"""
        all_articles = []
        batch_size = 10
        has_more = 1
        next_msgid = None
        next_itemidx = None
        
        # 用集合来存储已处理的文章URL，避免重复
        processed_urls = set()

        print(f"开始获取话题文章列表...")
        
        while has_more:
            articles, has_more, next_msgid, next_itemidx = self.get_more_topic_articles(
                topic_id, 
                begin_msgid=next_msgid,
                begin_itemidx=next_itemidx,
                count=batch_size
            )
            
            new_articles = 0
            # print(f"获取到 {len(articles)} 篇文章，是否还有更多: {bool(has_more)}")
            
            if articles:
                for article in articles:
                    url = article.get("url")
                    # 检查文章是否已经处理过
                    if url and url not in processed_urls:
                        article_data = {
                            "title": article.get("title"),
                            "url": article.get("url"),
                            "cover": article.get("cover_img_1_1"),
                            "publish_time": article.get("create_time")
                        }
                        all_articles.append(article_data)
                        processed_urls.add(url)
                        new_articles += 1
                
                print(f"本次获取到 {len(articles)} 篇文章，新增 {new_articles} 篇，是否还有更多: {bool(has_more)}")

                if new_articles == 0:
                    print("没有新文章，停止获取")
                    break
                
                time.sleep(2)  # 添加延时避免被封
            else:
                print("本次请求没有获取到文章")
                break
        
        print(f"话题文章列表获取完成，共 {len(all_articles)} 篇")
        return all_articles

    def process_topic_articles(self, topic_id, topic_name):
        """处理话题下的所有文章并返回统计信息"""
        stats = {
            'total': 0,        # 总文章数
            'processed': 0,    # 成功处理数
            'skipped': 0,      # 跳过数（已抓取）
            'failed': 0        # 处理失败数
        }
        
        print(f"\n开始处理话题: {topic_name}")
        articles = self.get_all_topic_articles(topic_id)
        stats['total'] = len(articles)
        
        for article in articles:
            if not article["url"]:
                stats['failed'] += 1
                continue
                
            # 检查是否已经抓取过
            if self.is_article_crawled(article["url"]):
                print(f"文章已抓取，跳过: {article['title']}")
                stats['skipped'] += 1
                continue
                
            print(f"正在处理: {article['title']}")
            article_data = self.parse_article(article["url"])

            if article_data:
                article_data['cover'] = article.get('cover')
                self.save_to_markdown(article_data, f"./topics/{topic_name}")
                self.mark_article_crawled(article_data)
                stats['processed'] += 1
                time.sleep(2)
            else:
                stats['failed'] += 1
        
        return stats

def print_stats(stats):
    """打印统计信息"""
    print("\n统计信息:")
    print(f"总文章数: {stats['total']}")
    print(f"成功处理: {stats['processed']}")
    print(f"已有跳过: {stats['skipped']}")
    print(f"处理失败: {stats['failed']}")
    # 添加除数为零的检查
    if stats['total'] > 0:
        completion_rate = (stats['processed'] + stats['skipped']) / stats['total'] * 100
        print(f"处理完成率: {completion_rate:.1f}%")
    else:
        print("处理完成率: 0% (没有找到文章)")
    
def main():
    from config import TOPICS
    crawler = WeixinCrawler()
    
    all_stats = {}
    for topic in TOPICS:
        topic_name = topic["topic_name"]
        album_url = topic["album_url"]
        
        print(f"\n开始处理话题: {topic_name}")
        print(f"话题链接: {album_url}")
        
        crawler.extract_biz_from_url(album_url)  # 尝试从URL中提取biz

        # 从话题URL中提取topic_id
        topic_id = re.search(r'album_id=([^&]+)', album_url).group(1)
        
        # 处理话题文章并获取统计信息
        stats = crawler.process_topic_articles(topic_id, topic_name)
        all_stats[topic_name] = stats

        # 打印统计信息
        print_stats(stats)
        # 控制频率，避免被封
        time.sleep(5)
    
    # 打印所有话题的统计信息
    print("\n=== 所有话题统计 ===")
    total_articles = 0
    total_processed = 0
    total_skipped = 0
    total_failed = 0

    for topic_name, stats in all_stats.items():
        print(f"\n话题: {topic_name}")
        print_stats(stats)
        total_articles += stats['total']
        total_processed += stats['processed']
        total_skipped += stats['skipped']
        total_failed += stats['failed']
    
    print("\n=== 总计 ===")
    print(f"总文章数: {total_articles}")
    print(f"总成功处理: {total_processed}")
    print(f"总已有跳过: {total_skipped}")
    print(f"总处理失败: {total_failed}")
    # 添加除数为零的检查
    if total_articles > 0:
        completion_rate = (total_processed + total_skipped) / total_articles * 100
        print(f"处理完成率: {completion_rate:.1f}%")
    else:
        print("处理完成率: 0% (没有找到文章)")

if __name__ == "__main__":
    main()