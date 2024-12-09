# Notion 如何构建 Notion AI

文章作者: 投资实习所
发布时间: 2023-11-23 13:40
发布地: 河北
原文链接: http://mp.weixin.qq.com/s?__biz=MzIyMDA3MjMwNw==&mid=2455852549&idx=1&sn=de55fc993cd3c81767867f981da7198e&chksm=80446619b733ef0f1895d674a76953ba8764ab375944604b4d21a782d5fbe0007c72cf5ea504#rd

封面图链接: https://mmbiz.qpic.cn/sz_mmbiz_jpg/sBQys0vjP4p8ea1lyAFHB1pjvztForMQ4C6MhQzJcSGW81SLyvumNJrXCt7jzkK2e1X72Pbf2fea7xfortaQLw/300

Notion 是比较早跟 AI 结合推出 AI 功能的产品之一，并且也取得了非常不错的成绩，其去年底推出 Notion AI 测试版今年 2
月份正式上线，[到 3
月份就已经有消息](http://mp.weixin.qq.com/s?__biz=MzIyMDA3MjMwNw==&mid=2455850548&idx=1&sn=42bdb77751b36e981cda2e08677d7df2&chksm=80447e28b733f73eddd1cbdab64583a0a971fffb5ca5296f74dc9f9a9a71bc6bbcead41ceb61&scene=21#wechat_redirect)称
**AI 功能为 Notion 额外带来了 1000-3000 万美金左右的 ARR** 。

4 月份的时候 Notion 正式对外宣称 [Notion AI 用户突破 400
万](http://mp.weixin.qq.com/s?__biz=MzIyMDA3MjMwNw==&mid=2455850656&idx=1&sn=68fb88c9a0d5c8aad9b7beadeaa71094&chksm=80447ebcb733f7aa8715670ccd4a8974bed83b4dadf4c072263b7d59d58b94c2c145abea6fca&scene=21#wechat_redirect)，到今天
Notion AI 差不多快 1 年时间了，这期间 Notion AI 还推出了比较重要的 AutoFill 功能和刚刚推出的 Q&A 功能，而 **Q
&A 功能推出仅 24 小时，预约的 Workspace 就突破了 20 万**。

这个 Q&A 功能本质上和很多 AI 助理有点类似，就是迅速帮你在整个 Notion 里找到想要的信息，无论这些信息是在 Wiki 里、Doc 里还是各种
Project 里，它都能非常快速且准确的找到。**传统搜索查找公司数据库里某个信息可能需要你 10 多分钟，现在通过 Q &A
只需要几秒的时间就可以帮你找到。因此 Notion 给 Q&A 的比喻是：Less searching, more doing**。

为了防止 AI 胡编乱造产生幻觉，其给出的每个信息都标注了信息源，保证这些信息都来自于你 Notion 的数据库。因此，本质上它是为 Notion
上的每个私有数据库提供了 AI 时代获取信息的新方式，就跟搜索引擎 Perplexity.ai 的机制一样，只不过它只能获取你在 Notion
数据库里的内容。

同时为了让获取的数据更多，**Notion
正在打算连接更多的数据，但这目前还是一个比较大的挑战；而另一个挑战是如何让公司内拥有不同权限的人看到其所该看到的内容**
，一般来说如果权限低的员工是看不到需要高权限才能看到的信息，但很多时候 Q&A 出来的信息可能你甚至都不知道它的存在。

Ivan Zhao 在关于 Q&A 的博客里说，使用 Q&A 功能的方式非常便捷，你甚至都不需要在 Notion 里，只要你的 Notion
是打开的，通过快捷键 Ctrl/cmd + shift + K 就可以在任何页面使用 Q&A 功能，比方说产品和工程团队不需要离开
Github，设计师和营销人员不需要离开 Figma。

而整个 Notion AI 的打造过程，也非常有意思，我们可能不了解的是，Notion AI 的第一个测试版本主要是两位联合创始人 Ivan Zhao 和
Simon Last 一起打造的，并且他们当时也是为了玩一下刚推出不久的 GPT-3，看看它能跟 Notion
有什么结合的地方，在公司的一个外出活动期间，他们把自己关在酒店房间里以类似黑客马拉松的形式写出了第一个 Notion AI 的版本。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sBQys0vjP4p8ea1lyAFHB1pjvztForMQCpNJDPVIjiaibNA3Mk04punick0oJBssqOicuj7JEwUrY5a8QEk2Pn5KNA/640?wx_fmt=png&from=appmsg)

到现在，Notion 已经为其 AI 构建了一个 12 人的团队，其 AI 负责人 Linus 也是在 Notion AI
第一个版本出现后才加入的，不过在此之前，**他已经在其博客写了 50 多万字的内容，做了 100 多个各种类型的业余项目**
，涉及到了编程语言、编译器、3D 渲染器、交互式学习环境和 UI 库，同时他还**构建了一套他自己每天都在使用的个人生产力工具** 。

下面简单梳理了一下 Notion 打造 Notion AI 过程中的一些细节，包括第一个版本的打造、Notion 是如何构建其 12 个人 AI
团队、推出新 AI 功能时遇到的最大困难以及 Notion 对大模型的选择。

**Notion 如何打造 Notion AI**

上面提到，Notion AI 的第一个版本是两位联合创始人 Ivan Zhao 和 Simon Last
在公司一次外出活动期间在酒店里以类似黑客马拉松的方式做出来的，当时 GPT-3
刚推出不久，他们看到了市场上一些有趣的写作工具，并且市场上很多其它公司也在研究通过 AI 提高写作效率，因此就想研究一下 AI 与 Notion
是否可以结合在一起。

Simon 带着 18 瓶水开始在酒店里编程，很快就做出了 Notion AI 的第一个版本，因为当时其主要功能是帮助写作，因此 Notion 内部将其称为
Notion AI Writer，于是有了去年底推出的测试版，经过不断迭代后在 2 月份正式上线……

全文共3732字**后续内容为付费会员专属** 加入 Memo 解锁更多内容  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/sBQys0vjP4p8ea1lyAFHB1pjvztForMQKaxBaVPcct7lUHRU10U7uePW6Ea6GJg5CFI1rHjiaMnTzKiclA2VicQiaw/640?wx_fmt=png&from=appmsg)  

Memo: Signal, not noise!

扫码或点击「阅读原文」继续阅读

**说明：** 这是我的新产品**Memo（vcsmemo.com）** ，除了公众号的内容，未来也会把更多其它内容放到网站上。

目前还是一个非常简单的内测版本（0.99），还有不少 Bug，大家多多担待，内测阶段为早鸟价（399
RMB/年），**付费会员可以解锁之前以及未来一年的所有付费内容。** 如果这些内容给你带来了一些启发，欢迎分享给更多朋友。  

另外我们已经支持开发票，如果付费用户有开票的需求，请在公众号对话框发送**“发票”** ，获得入口。

![](https://mmbiz.qpic.cn/mmbiz_png/mrJibAziaMQhQGoNHniac6wGOyRe172dlS0HCYicyjiaCTtly2pULIz6YPNsXeRjoQFSuDYezsia4ibhbAc1X3GKtVRyw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)[![](https://mmbiz.qpic.cn/mmbiz_jpg/sBQys0vjP4rjHRozGcXfhKWtB2LNTafrGB68F42gOicBg9agOMCJHHIf3IbQs3SSQsU7Nac2NO9jpJPDMjP3VMA/640?wx_fmt=jpeg)Notion
AI 用户已经超过 400
万了](https://mp.weixin.qq.com/s?__biz=MzIyMDA3MjMwNw==&mid=2455850656&idx=1&sn=68fb88c9a0d5c8aad9b7beadeaa71094&chksm=80447ebcb733f7aa8715670ccd4a8974bed83b4dadf4c072263b7d59d58b94c2c145abea6fca&scene=21#wechat_redirect)  
[![](https://mmbiz.qpic.cn/mmbiz_jpg/sBQys0vjP4oVTiceykia4oQcmZiaFRDVhzxLZH0qcuibmRfwaZxNfg8ciaMgURRU6eZibDPVdF72Q4BHfG2to3iboJ5Yw/640?wx_fmt=jpeg)据说AI一个月为Notion至少带来了1000万美金ARR](https://mp.weixin.qq.com/s?__biz=MzIyMDA3MjMwNw==&mid=2455850548&idx=1&sn=42bdb77751b36e981cda2e08677d7df2&chksm=80447e28b733f73eddd1cbdab64583a0a971fffb5ca5296f74dc9f9a9a71bc6bbcead41ceb61&scene=21#wechat_redirect)  
[![](https://mmbiz.qpic.cn/mmbiz_jpg/sBQys0vjP4pMPPFiav6ay8zq5DekfxPicK0snbmcs7YzTRIHcmibQRp2nldQtymyUJvwDUwGaTFKq2VN8BEkJTiaRw/640?wx_fmt=jpeg)](https://mp.weixin.qq.com/s?__biz=MzIyMDA3MjMwNw==&mid=2455850419&idx=1&sn=ead809f2808afe0c2dadc37a728276de&chksm=80447dafb733f4b91578ea9d50681ccd4bad42ea22f32374105b0505bc81ae41df221a05ef6a&scene=21#wechat_redirect)

[Notion AI
可以用了](https://mp.weixin.qq.com/s?__biz=MzIyMDA3MjMwNw==&mid=2455850419&idx=1&sn=ead809f2808afe0c2dadc37a728276de&chksm=80447dafb733f4b91578ea9d50681ccd4bad42ea22f32374105b0505bc81ae41df221a05ef6a&scene=21#wechat_redirect)

