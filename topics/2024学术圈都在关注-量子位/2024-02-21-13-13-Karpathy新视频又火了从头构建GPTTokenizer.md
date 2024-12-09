# Karpathy新视频又火了：从头构建GPT Tokenizer

文章作者: 量子位
发布时间: 2024-02-21 13:13
发布地: 北京
原文链接: http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247717737&idx=3&sn=b63f09bb88e338c60503cb870e4c1e98&chksm=e8df241bdfa8ad0d560e2dc6ab565cdb45bdf9c9aa6c6901863d09ea176a341086d476f52ed6#rd

封面图链接: https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtCve16v1MbAjGf96H4f6cLXJQGLX8k1SrwrM7icAtJwKtRMnIX4Keg3viaB6eSjBT7GqIWTIicGfqxAg/300

##### 丰色 鱼羊 发自 凹非寺  
量子位 | 公众号 QbitAI

技术大神卡帕西离职OpenAI以后，营业可谓相当积极啊。

这不，前脚新项目刚上线，后脚全新的教学视频又给大伙整出来了：

这次，是手把手教咱构建一个**GPT Tokenizer** （分词器），还是熟悉的时长（足足2小时13分钟）。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCve16v1MbAjGf96H4f6cLXErzsKbMs7N0mHpeiaeia6CoMrZGCfv0EJ3ZibxpSOpZTZxsaAPHa25yoQ/640?wx_fmt=png&from=appmsg)

Ps. 上次讲课还是俩月前的大模型科普。

所谓**“卡帕西出手，必属精品”** ，大伙火速码码码：

> 今晚的约会取消，卡帕西来了我要去上课（狗头）

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCve16v1MbAjGf96H4f6cLXNYicJWKzzMsOearDyUia8ClCHRHWnvergsKHnjLfOJt0crYlTd16OUBw/640?wx_fmt=png&from=appmsg)

> 再说一遍，付费都买不到的这样高质量的课程，冲。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCve16v1MbAjGf96H4f6cLX4Gxhye6MEIyiaL5JbjXSt6pmXVialQYCOaTZ6hFVR6AgicP7NRHqFhOZw/640?wx_fmt=png&from=appmsg)

具体都有哪些干货？

**“太长不看版”** 已为大家准备好。

## 为什么要关注Tokenizer

如大神介绍：

> Tokenizer即分词器是大语言模型pipeline中一个完全独立的阶段。
>
> 它们有自己的训练集、算法（比如BPE，字节对编码），并在训练完成后实现两个功能：  
> 从字符串编码到token，以及从token解码回字符串。

为什么我们需要关注它？

卡帕西指出：

**因为LLM中的很多奇怪行为和问题都可以追溯到它。**

比如：

  * 为什么大模型不能处理简单的字符串处理任务，例如反转？

  * 为什么大模型在非英语语言任务方面的性能更差？

  * 为什么大模型不擅长简单的算术？

  * 为什么我的模型在看到字符串“”后就突然“宕机”了？

  * 为什么大模型实际上并不是端到端的语言建模？

  * ……

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCve16v1MbAjGf96H4f6cLXKlpFvQyyXCalja4ohkkKVp0BiaGdQiatZ5TibaZFJribf4XIibN9XqfTFMA/640?wx_fmt=png&from=appmsg)  

所以为了弄清这些问题，便有了今天的课程——尽管大神本人对这部分内容其实也不太喜欢。

> **上这门课大家会注意到我的表情全程都很凝重** 。不过，其中的细节真的太重要了（大家还是忍忍吧）。

以下为视频主要内容文字版。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCve16v1MbAjGf96H4f6cLXQNSI8o6dwjpJg0UUQ8FxicvztWXWibEVPTWx7sZhxjSjhELflWVna9kw/640?wx_fmt=png&from=appmsg)

## 从头构建OpenAI大模型中使用的分词器

视频的最开始主要是对分词器的一些介绍。

包括最简单的字符级分词操作（即每个字符是一个token)以及更为复杂和常用的chunk级操作（即多个字符也会组成一个token）。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCve16v1MbAjGf96H4f6cLX9mSeKk1hFd3AxBgfm4Cb4cbOffISe84zPoL4RofKdxAvFmUqkLWUmg/640?wx_fmt=png&from=appmsg)

在这之中，业内最常用的算法是BPE，即byte pair encoding，字节对编码，因此我们要想构建自己的分词器，最重要的是了解这个算法。

卡帕西介绍：

BPE可以更好地处理非英语语言、对词汇表大小进行调整，对于模型的性能有显著影响。

比如GPT-4分词器通过改进BPE算法，最终在处理Python代码时更加高效，因为它能够将多个空格合并为单个标记，从而减少序列长度，使得模型能够关注更长更多的代码。

需要注意的是，尽管BPE算法可以处理UTF-8编码的字节序列，但直接使用这些序列会导致词汇表过大、序列过长，从而影响模型的注意力机制和上下文长度，因此需要压缩处理。

理解BPE算法后，如何构建自己的分词器？

简单来说，主要包括以下几个步骤：

1、初始化词汇表

基于UTF-8编码的字节。

2、合并字节对并不断迭代，直到词汇表大小达到预设值

在实际演示中，卡帕西通过20次合并，将文本的token数量减少了约27%。

3、处理特殊字符和不同语言的字符

4、整体优化

词汇表过大可能会导致模型训练困难，过小则可能无法捕捉到足够的语言细节。

5、选择一个包含丰富语言特征的数据集来训练

在此，卡帕西提到了SentencePiece库，它支持多种分词算法包括今天提到的BPE。

我们可以用它进行分词器的训练，包括配置选项和如何处理罕见字符。

训练好的分词器用于编码和解码文本也讲了。

6、最后就是评估+集成到模型中了。

当然，后续我们还需要根据模型的表现进行持续调整。

**具体道每一步，大神都给咱配了详细的Python实现** ，包括如何找到最频繁的字节对、如何合并这些对以及如何构建合并字典等等，具体大家就请参阅视频吧。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCve16v1MbAjGf96H4f6cLXXDlxiaTMDsnXTYXvIc9z8sQtZEjYbQxHeyg9b6ladjGbrMdZHgiawZFQ/640?wx_fmt=png&from=appmsg)

在这之中，卡帕西也提醒了n个细节，比如：

在解码过程中，如果遇到无效的UTF-8字节序列，可以使用“errors=’replace’”来替换；使用“end of
text”特殊标记来在训练数据中分隔文档等等。

## 实际远比此复杂

毫无疑问，卡帕西带大家实现的是比较基础的一个分词器版本，实际模型中远比这要复杂得多。

比如OpenAI官方提供的BPE分词器——**tiktoken** 。

它用了**正则表达式** 来分割文本，以此来保证某些类型的字符也不会被合并。在GPT-2中，它就在某些方面表现得不错了。

到了GPT-4，官方也对其进行了一些调整。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCve16v1MbAjGf96H4f6cLXEauEOjP4qMAqMx2McgfxrU600BAZjZMEUluboIDhOEBOzPzwsEicnDg/640?wx_fmt=png&from=appmsg)

主要的改变在于：

  1. GPT-4会将空格合并；

  2. 大小写不敏感；

  3. GPT-4最多只合并3位数字，避免了长数字序列token。

不过由于官方并没有公开具体训练细节，所以我们也无法知道其详细的实现。

而除了更复杂的算法，分词器本身在处理长字符串、非英语语言、数字和特殊字符时都可能遇到问题。

因此，讲来讲去，大神在视频中还是表达了一个“朴素的愿望”：

> **非常希望有一天能够不需要分词，直接将字节流输入到语言模型中。**
>
> 不过由于这就需要我们对Transfomer架构进行重大修改了，所以现阶段，构建和优化分词器仍然是实现高效大模型的关键步骤。

完整视频见：  
https://weibo.com/6105753431/O1BQB96Yg

传送门：  
[1]https://www.youtube.com/watch?v=zduSFxRajkE  
[2]https://twitter.com/karpathy/status/1759996549109776702/quotes

— **完** —

**报名中！**

**2024年值得关注的AIGC企业 &产品**

量子位正在评选**2024年最值得关注的AIGC企业** 、 **2024年最值得期待的AIGC产品** 两类奖项，欢迎[报名评选]()！

评选报名**截至2024年3月31日![](https://res.wx.qq.com/t/wx_fed/we-
emoji/res/v1.3.10/assets/newemoji/LetMeSee.png)**

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtC7IzBlicP1jwLsfiaw2A2ibBoWRgd47kXexFUOSSzXn5f9fDcza39rny2BgqyDQkDrSoLCDh3Ag7XwA/640?wx_fmt=png&from=appmsg)

**中国AIGC产业峰会**
同步火热筹备中，了解更多请戳：[在这里，看见生成式AI的应用未来！中国AIGC产业峰会来啦！](http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247717398&idx=1&sn=bb6e373ad0ff839c524094ebdb83e918&chksm=e8df2564dfa8ac7277a76ca2c9e4793d08729828edfaf96a5283daaacd497375630c911b1661&scene=21#wechat_redirect)

商务合作请联络微信：18600164356 徐峰  

活动合作请联络微信：18801103170 王琳玉

  

**点这里 👇关注我，记得标星噢**

**一键三连「分享」、「点赞」和「在看」**

**科技前沿进展日日相见 ~**

![](https://mmbiz.qpic.cn/mmbiz_svg/g9RQicMD01M0tYoRQT2cMQRmPS5ZDyrrfzeksiay90KaDzlGBH61icqHxmgFKfvfXtVuwTHV740CDLAaXU1LIfZyoJEpYKcRIiaE/640?wx_fmt=svg)

