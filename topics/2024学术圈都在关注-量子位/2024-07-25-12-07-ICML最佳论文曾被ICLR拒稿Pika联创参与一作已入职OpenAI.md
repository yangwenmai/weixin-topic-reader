# ICML最佳论文曾被ICLR拒稿，Pika联创参与，一作已入职OpenAI

文章作者: 量子位
发布时间: 2024-07-25 12:07
发布地: 北京
原文链接: http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247740461&idx=2&sn=d6532e7553abf535c8da846682ed1ae6&chksm=e8df9b5fdfa812499546b88c94dbd1b18cbfb3dbe5b6f4d1dcc2fe851a73346044163a3d46d7#rd

封面图链接: https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtB3jFtfWecDWYMSseiceOolvYxh92U4p9NPfexYKibeBsc3UWIwTn5G8HVMMway3fgjdYT2ibf7aYxsA/300

##### 明敏 发自 凹非寺  
量子位 | 公众号 QbitAI

ICML 2024最佳论文出炉，结果发现其中一篇曾被ICLR 2024拒稿？

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtB3jFtfWecDWYMSseiceOolvHpMjpbFLdaeVM8crf8hj0nlN4GQdnibbibjpzdVFeb3PEtcbHjiaXIQLQ/640?wx_fmt=png&from=appmsg)

这篇论文来自斯坦福，Pika创始人之一孟晨琳（Chenlin Meng）也参与了。

它提出了一种新的离散扩散语言建模方法，通过引入分数熵损失函数，提高了离散扩散模型在语言建模任务中的性能。

实验结果和GPT-2比较，在多数任务中都完胜。

生成效果be like：

![](https://mmbiz.qpic.cn/mmbiz_gif/YicUhk5aAGtB3jFtfWecDWYMSseiceOolvp7icR3n2Tv2Dwe9DS8wQOOSf4VrW6Dr2yfbDkbrGCczIqfIeQ0ia9ltQ/640?wx_fmt=gif&from=appmsg)

5位审稿人给出的分数分别是：88665。

但还是被AC一锤定音，最终reject……

这不禁让人想起Mamba。作为Transformer架构挑战者，它开创了大模型的一个新流派。结果却被ICLR拒稿。

当时这引发不小争议，包括ICLR创始人之一LeCun都下场表示不满：

> 很遗憾，历届程序委员会主席慢慢把它变成了一个与传统评审流程差不多的会议。
>
> 只有一些小胜利：OpenReview平台现在被大多数ML/AI会议使用，以及论文提交后立刻就能被所有人阅读（尽管匿名）。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtB3jFtfWecDWYMSseiceOolvia0zq8pO9AbeDlry6zzBPmiaMj8JxMLS4NchOhFymEwicK76cNqmPw5HQ/640?wx_fmt=png&from=appmsg)

还有人说：

> 如果搜索ICML 2024接收的论文，就会发现很多都被ICLR 2024拒了。

![](https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtB3jFtfWecDWYMSseiceOolvvDcg1wm4jlTxmvjwyUIaTpYv5kIBv5dla1dNtR5qAJITklO8hj1RVw/640?wx_fmt=jpeg)

这回又是咋回事？

## 又栽在实验不完善上？

这篇论文关注了扩散模型在文本等离散数据领域表现一直不佳的问题。

团队认为，标准扩散模型依赖于分数匹配（score matching）理论，但是这一机制推广到离散数据领域后效果不佳。

为了填补这一空白，他们提出了一种新的损失函数**分数熵** （score
entropy），并构建了[分数熵扩散模型](http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247725683&idx=3&sn=17ac80bc191ee4900b66d06c69a66fe5&chksm=e8dfc501dfa84c1712fa93db860d042ef776caabf325c89e952c8618ca8f63010d8c8cae2b66&scene=21#wechat_redirect)（SEDD）。

在主要语言建模任务上，SEDD在目前所有语言扩散模型中表现最佳，和同规模自回归语言模型不相上下，在零样本困惑度任务上击败GPT-2。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtB3jFtfWecDWYMSseiceOolvnYPUOHBgwtic8ibEF6ibJsUyWsxTfoUrqKUyMbFo1YQQia5Kd3qEc0k8hg/640?wx_fmt=png&from=appmsg)

同时SEDD可生成高质量无条件样本，可以方便在计算量和生成质量之间做权衡。通过直接参数化概率比，SEDD高度可控，可以使用提示词微调而无需专门训练。

5位审稿人中，有2位都给出8分高分。

大家普遍肯定了提出的论点。一位评审觉得论文推导过程写得也很不错，实验结果非常令人信服。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtB3jFtfWecDWYMSseiceOolvPYricE8X0ppzxe8sGic3I2O2vgicgocVBE3Zjy07uKVvXeElwQ3ClqGYA/640?wx_fmt=png&from=appmsg)

不过也有很多小问题被提出，比如拼写错误、忽略了对一些实验细节的解释。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtB3jFtfWecDWYMSseiceOolvOLUxAib1CKErWL2ezNKtBeQALAVic4ibpLnGy6uGEodHS9TBgwUEaic9ww/640?wx_fmt=png&from=appmsg)

从记录中可以看到，作者针对评审提出的问题进行了详尽的说明和修改（有的分2条才发完）。

![](https://mmbiz.qpic.cn/mmbiz_gif/YicUhk5aAGtB3jFtfWecDWYMSseiceOolvEibPiahHIttAlgyglszbsKNcFORS83LamCFJsPIiaSox2GC6KoiaUHcicOQ/640?wx_fmt=gif&from=appmsg)

有评审看到调整后的内容，也相应调整了分数。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtB3jFtfWecDWYMSseiceOolvPCLJqbH9gnF9ktCkpDXM73BXIWhGz7icXiaHFuG0hc2fmeeuN0KhWLYg/640?wx_fmt=png&from=appmsg)

不过最终AC还是拒收了这篇论文。

反驳的点就主要在于**实验部分不完整** 。

> 所有审稿人都认为，该论文只将GPT-2作为主要基线，缺少和其他扩散模型基线。一些审稿人认为，论文提交时实验部分不完整。

尽管作者后续增加了一些实验，但是AC仍然认为不够完善，而且论文中提到此前扩散模型表现不及自回归模型的说法可能不够准确。

###### **  
**

###### **‍
‍![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtB3jFtfWecDWYMSseiceOolv31kZPmlUHduIJlxT9jqR2Z60pDdkqJMaBewRmEywXxDrXTlYf0Gvdg/640?wx_fmt=png&from=appmsg)‍**

###### **△** 作者后续补充内容

比如SSD-LM、TESS等模型的表现都比GPT-2表现更好，但是论文中却没有和这些结果做对比。

总之，AC认为论文提出了很好的idea，但是在实验和对比上不够完善。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtB3jFtfWecDWYMSseiceOolvAiaMSQzuZu4kFeyHX7icfvzjhzV7GybXLKWZp9sfp8YkJia2MbbqlYcXg/640?wx_fmt=png&from=appmsg)

有人表示，之前Mamba被拒也是类似的原因，后面完善了论文再拿best paper也很合理。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtB3jFtfWecDWYMSseiceOolvTyCU8BkmLKNia3UAlKKrTgTu7SGu16KR0a4kntsiboC4PqwmkibLicQPhA/640?wx_fmt=png&from=appmsg)

## One More Thing

值得一提的是，这篇研究的作者中不光有Pika创始人之一孟晨琳。

一作最近也加入OpenAI，更近距离感受AGI了。他将在最近的ICML 2024上进一步讲解这项工作。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtB3jFtfWecDWYMSseiceOolveolcYHbbbw8wRtZgPJkNTZOFXdZXjHFGx3O2yov2L5dd2QORiabpk4A/640?wx_fmt=png&from=appmsg)

论文地址：  
https://arxiv.org/abs/2310.16834

— **完** —

**量子位年度AI主题策划** 正在征集中！

欢迎投稿专题 **一千零一个AI应****用** ，**365行AI落地方案**

或与我们分享你在**寻找的AI产品** ，或发现的**AI新动向**

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDpTavEwUl8aOlFLGHaPnaKXJcMUeJtGXVLliac6P6XxYHIKhnz0NPUgVvlrXAvJC33ibh8aYDdyudA/640?wx_fmt=png&from=appmsg)

  

**点这里 👇关注我，记得标星哦～**

**一键三连「分享」、「点赞」和「在看」**

**科技前沿进展日日相见 ~**

![](https://mmbiz.qpic.cn/mmbiz_svg/g9RQicMD01M0tYoRQT2cMQRmPS5ZDyrrfzeksiay90KaDzlGBH61icqHxmgFKfvfXtVuwTHV740CDLAaXU1LIfZyoJEpYKcRIiaE/640?wx_fmt=svg)

  

