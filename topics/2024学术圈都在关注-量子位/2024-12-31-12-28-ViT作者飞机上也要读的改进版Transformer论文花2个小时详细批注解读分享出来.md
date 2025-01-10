# ViT作者飞机上也要读的改进版Transformer论文，花2个小时详细批注解读分享出来

文章作者: 量子位
发布时间: 2024-12-31 12:28
发布地: 北京
原文链接: http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247770341&idx=4&sn=bea876033c38541fe42fbef3b0e2a38b&chksm=e8dc1797dfab9e81eb3900156594df2d16d407968ed3ba533527e5362d1a694c9f24af377d26#rd

封面图链接: https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtCjDYdCohJWqGx9X1Uu7SkWqgA200Jc8Z7XkF22TicVeazt2nICDmARFaXKDrBuGSukmVYL7aDEbeg/300

##### 梦晨 发自 凹非寺  
量子位 | 公众号 QbitAI

ViT核心作者**Lucas Beyer** ，长文分析了一篇改进Transformer架构的论文，引起推荐围观。

他前不久从谷歌跳槽到OpenAI，这次是在飞机上阅读论文并写下了分析。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCjDYdCohJWqGx9X1Uu7SkW9icSOTowyaT00R8thhVx4pUaAQeXWMZV5yu4KYVSngYQWkibg6HVd8yw/640?wx_fmt=png&from=appmsg)

这篇论文被他简写为DiffTranformer，不过不是Sora底层架构的那个Diffusion
Transformer，而是不久前来自微软的**Differencial Transforme** r。

论文中介绍，整体思路类似**差分放大电路或降噪耳机** ，用两个信号的差值来滤除共模噪声，解决Transformer模型信噪比低的问题。

这篇论文发布时引起大量关注，但也面对一些质疑，在弹幕版alphaXiv上作者与读者进行了很多讨论。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCjDYdCohJWqGx9X1Uu7SkWHuk9z561Vo3s3wzfUT1vDFVAnqqE8vwBrCsj3ibpLEOCad9Iwhm2gTg/640?wx_fmt=png&from=appmsg)

Beyer起初也对这篇文章持保留态度，觉得“难道MHA中的两个注意力头不能学习到这些吗？”。

但经过近期和同行的一些互动，觉得不应该轻易下定论，重新看了一遍论文后，他改变了看法![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCjDYdCohJWqGx9X1Uu7SkWQDSxdHFM3VOLzXLkLHviaoTEaWDXciajicEqFuLPPsEibKEc0Po0zfWJ6Q/640?wx_fmt=png&from=appmsg)

> 我的最初印象被团队的实验彻底打破了，他们的实验非常公平和谨慎。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCjDYdCohJWqGx9X1Uu7SkWM5gh2WlD5ccqicjNtBib7I6euib9ryGiaQHLeczaj9DPL2xokODIz89YRg/640?wx_fmt=png&from=appmsg)

此外还有一个彩蛋：

大佬通常会用坐飞机的时间来打4把Dota 2游戏快速模式。

现在写这个帖子也不能当论文评审工作写进简历，是纯纯的贡献个人时间了，以后也不会常写。

总之先给大佬点赞。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCjDYdCohJWqGx9X1Uu7SkWbib84rAam24Ekh85CSy2yTFEE7jLibU2hEk5XUHX5Hxic3yQqQT0HHicNA/640?wx_fmt=png&from=appmsg)

## 大佬解读热点论文

Beyer评价这篇论文的核心创新非常**simple和nice** ，可以用一句话概括。

将两个注意力头配对，然后执行(softmax(Q1K1) - λ*softmax(Q2K2)) V，其中λ是一个可学习的标量。  
![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCjDYdCohJWqGx9X1Uu7SkWVcPv6PJH7MIgYvHD4icAicZic6wTqibyflJWApyaCOI1tsKdQpQeE1TjPA/640?wx_fmt=png&from=appmsg)

他认为这项研究的动机非常充分：随着上下文变长，（微小的）对不相关token的注意力之和可能超过对少数相关token的注意力，从而淹没它们。

这一洞见表明，随着输入长度的增加，经典Transformer可能越来越难以捕捉到关键信息。DIFF Transformer试图解决这一问题。

但他仍不确定对于训练充分的模型来说这是个多大的问题，希望在DIFF
Transformer论文中有一些关于attention分布/熵的图表，以实际证明这个插图的合理性。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCjDYdCohJWqGx9X1Uu7SkWXZ41CsfY64b1QPr3ibOWOfLE73brvFfCH5NASQJPMm1VPod5kMmFxMg/640?wx_fmt=png&from=appmsg)

接下来，他指出了几个容易被忽视的细节：

  * 与Figure1不同，DiffAttn实际上并没有对差值重新归一化。那么它究竟如何放大”相关”的分数呢？

Beyer建议论文中能提供更多实际训练的DIFF Transformer的分析图表。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCjDYdCohJWqGx9X1Uu7SkWg6LoQJE0XDKgN1Xejptnfib6SqSj5THa16eibLmibAayLjpTFzdJeXXDQ/640?wx_fmt=png&from=appmsg)

  * λ的计算相当复杂，涉及两个可学习的指数函数之差，加上一些基线λ_init，在早期的层是0.1，后面又是0.8。

Beyer认为λ不一定需要是正值，并建议提供更多对可学习λ参数的分析。

  * 每个注意力头的输出都经过了层归一化并乘以(1-λ_init)，然后再concat并乘以WO，这里也需要更多图表来证明。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCjDYdCohJWqGx9X1Uu7SkWooT4XAHNI1WEwuPy3gZLMwcaaYH59RdLR4XCCEhAyEPcwPBtDVicAAw/640?wx_fmt=png&from=appmsg)

接下来看论文中大量的实验。研究者基本上分叉了了StableLM-3B-4E1T，称之为Diff-3B，作为基线模型进行比较。

可惜的是，基线模型只在其中3个数据集上报告了结果，其中2个Diff-3B的表现都相当好。

Beyer怀疑这个StableLM-3B是否真的是一个强基线。  
![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCjDYdCohJWqGx9X1Uu7SkW78GaaJuL5R6uV6uJY2Q6maprRvZVNicJ6Fe3wicPto6ajzjic4zAiacxmA/640?wx_fmt=png&from=appmsg)

在参数量和token数的缩放曲线上，DIFF Transformer乍一看很有前景。但仔细观察后，Beyer提出了两点质疑：

  * 缩放曲线明显分为两组，在它们之间画一条线有点牵强。查看附录可知，研究者为较大的两个模型降低了学习率。这是否意味着他们遇到了不稳定性问题？

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCjDYdCohJWqGx9X1Uu7SkWyIUtKgINLyEVicamlX8Q3OxnETl7qNRoqtp3SZq1qkzbaUL5mg1u5aw/640?wx_fmt=png&from=appmsg)

  * 每次实验只用了10B个token训练，这个数量非常小。Beyer理解其中的计算资源限制，但仍然感到有点不安。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCjDYdCohJWqGx9X1Uu7SkWV60UqSWlkxicLQEdiaAfqCjwiaDsRTCUIaN7NiaRCPJoiav9SOOeXpOE8gA/640?wx_fmt=png&from=appmsg)

这些实验表明，在相同大小的情况下，DIFF Transformer性能会更好一些，并且训练时间相同。

然而，它的的推理速度也会慢一些(慢5-10%)。

Beyer提出最好能看到以计算量或实际时间为横轴的缩放曲线。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCjDYdCohJWqGx9X1Uu7SkWnSrfB9uIly9DEXwQibMic4ibQELVktnI9uB896n020qNxushibeP0vZN2g/640?wx_fmt=png&from=appmsg)

在长文本评测和对输入样本顺序的鲁棒性方面，DIFF Transformer表现出了明显的优势。

特别是在上下文学习的鲁棒性实验中，DIFF Transformer在不同的样本排列顺序下，性能方差远小于经典Transformer。

这表明它更不容易被输入的细微变化扰乱，而经典Transformer容易受到样本顺序的影响，在最好和最坏情况下表现相差很大。

总的来说，Beyer对这篇论文的看法有所改观：

研究者的实验非常全面和谨慎，的确**展现了DIFF Transformer比单纯的”两个注意力头相减”更多的潜力** 。

> 这项工作展现了一些有前景的火花。它在其他人的训练任务中能否很好地复现、或带来帮助，还有待进一步观察。

## Lucas Beyer是谁

12月初，Lucas Beyer与Xiaohua Zhai、Alexander Kolesnikov集体从谷歌被挖到OpenAI。

他们曾共同提出Vision Transformer，开创了Transformer在CV领域应用的先河。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCjDYdCohJWqGx9X1Uu7SkW89Z3FRlCcwVlNMYXqIS3TNMmpIHPSOnsC0c1VnKKL6ymPxAGT9JbTQ/640?wx_fmt=png&from=appmsg)

据他个人官网中介绍，他在比利时长大，曾梦想制作电子游戏以及从事AI研究。

他在德国亚琛工业大学学习机械工程，并在那里获得了机器人感知和计算机视觉博士学位，2018年加入谷歌。

![](https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtCjDYdCohJWqGx9X1Uu7SkWakZ0Cglyj0H8zywk8Qaghx13TIaDZqlb03SRD5DG77ibZ9757jj7LcA/640?wx_fmt=other&from=appmsg)

除了这次长文分析DIFF Transformer之外，他还经常对新研究发表一些短的评论，比如最近火爆的DeepSeek v3，他也提出自己的建议。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCjDYdCohJWqGx9X1Uu7SkWQfD3sOCcz91z3BWibEic24dAW4ic5CqHyhORNbic4I0KzDk07TRn9KszAA/640?wx_fmt=png&from=appmsg)

总之是一位非常值得关注的学者。

DIFF Transformer论文：  
https://arxiv.org/abs/2410.05258

参考链接：  
[1]https://x.com/giffmana/status/1873869654252544079

— **完** —

**点这里 👇关注我，记得标星哦～**

**一键三连「分享」、「点赞」和「在看」**

**科技前沿进展日日相见 ~**

![](https://mmbiz.qpic.cn/mmbiz_svg/g9RQicMD01M0tYoRQT2cMQRmPS5ZDyrrfzeksiay90KaDzlGBH61icqHxmgFKfvfXtVuwTHV740CDLAaXU1LIfZyoJEpYKcRIiaE/640?wx_fmt=svg)

