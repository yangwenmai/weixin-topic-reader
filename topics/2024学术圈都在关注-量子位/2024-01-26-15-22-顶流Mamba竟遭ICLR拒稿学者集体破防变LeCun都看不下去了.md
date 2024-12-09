# 顶流Mamba竟遭ICLR拒稿，学者集体破防变🤡，LeCun都看不下去了

文章作者: 量子位
发布时间: 2024-01-26 15:22
发布地: 北京
原文链接: http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247714782&idx=3&sn=c7b031a33c8b27b89c53e0a8483be266&chksm=e8df30acdfa8b9ba661f2ae3e1d03b4d8fcb101404323049cdf86abdc259bc4a1eff170bc6c2#rd

封面图链接: https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtBZ0kSP9kyj9xZnXSWJ63Ip6wZlYbmeUniaAcYMHYiaT1icsjfmZLJfVcCgojeEhbt5J7yzsJfiacTLEw/300

##### 梦晨 西风 发自 凹非寺  
量子位 | 公众号 QbitAI

一项**ICLR拒稿结果**
让AI研究者集体破防，纷纷刷起小丑符号![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBZ0kSP9kyj9xZnXSWJ63IpSe12oglcxZhOTvrccYf1b1aTslaazauaL5yKZpyK9fQlhThzQ1CtBA/640?wx_fmt=png&from=appmsg)。

争议论文为Transformer架构挑战者**Mamba** ，开创了大模型的一个新流派。发布两个月不到，后续研究MoE版本、多模态版本等都已跟上。‍‍

但面对ICRL给出的结果，康奈尔副教授Alexander Rush都表示看不懂怎么回事了，**“如果这都被拒了，那我们小丑们还有什么机会”** 。‍

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBZ0kSP9kyj9xZnXSWJ63IpZbpHkx2WADQKdViacf3xcBB72orQaz88n9c6LWgVGurNWj9IJvzWKSQ/640?wx_fmt=png&from=appmsg)

在评论区和转发区，不少研究者带上小丑面具前来报道。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBZ0kSP9kyj9xZnXSWJ63IpcMU8odiaibMdk5Rqa4UhOAnIp4jiblnwEq56OLPzaujCWiaBgSZQUicgaWA/640?wx_fmt=png&from=appmsg)  
![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBZ0kSP9kyj9xZnXSWJ63Ipb29iaQFF8wdERVt2z4rkmUvrib2qO71V6c5v1ib9wwZreIwYCGUjblzFw/640?wx_fmt=png&from=appmsg)

具体来说，四位审稿人打出**8/8/6/3** 的分数，这样被拒很多人就已经觉得不正常。

其中一位审稿人提的问题是**“有没有训练更大的模型，和10b参数的Transformer比较如何？”** 。

对此，有人表示已经开始向审稿人提及实验成本了。

> 审稿人可能不知道他们要求的实验会花费**50000美元** 。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBZ0kSP9kyj9xZnXSWJ63IpEn0OgqBp2ft81iavCy2hKt7ibt62tYVbdMgx0q8ibVHt2ZakjApCknib5Q/640?wx_fmt=png&from=appmsg)

ICLR会议创办的初衷正是优化同行评审过程，**LeCun** 作为会议创始人之一，也表达了不满：

> 很遗憾，历届程序委员会主席慢慢把它变成了一个与传统评审流程差不多的会议。
>
> 只有一些小胜利：OpenReview平台现在被大多数ML/AI会议使用，以及论文提交后立刻就能被所有人阅读（尽管匿名）。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBZ0kSP9kyj9xZnXSWJ63IpTobyibtdWaA1nO48LCwFKSPnca2ibmqf7PNiasMRYZmU67iarr7opDYk3Q/640?wx_fmt=png&from=appmsg)

LeCun还举例自己也有一篇从未被接受、ArXiv独占的论文，现在被引用次数已超过1880次。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBZ0kSP9kyj9xZnXSWJ63Ipl6TpoI8y7mIEoICEh5jXJo1RDZTfzLyCIqJG8rfLX266lvYz9oUVUg/640?wx_fmt=png&from=appmsg)

也有研究者认为，这次很多高分被接受论文与Mamba比起来充其量只能算增量研究，更令人遗憾了。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBZ0kSP9kyj9xZnXSWJ63Iprwd2zM79X5uPm4oCQhWLricYM3mP5DcfKt3VTL52Nia9VfsCbdCBJFCg/640?wx_fmt=png&from=appmsg)

## 这届ICLR混乱重重

先来借用给6分审稿人的意见，简单介绍一下Mamba论文的主要贡献。

  * 提出了基于**SSM状态空间模型** 的新架构，可实现Transformer质量的性能，同时线性缩放序列长度。

  * 提出了一种**硬件感知算法** ，通过扫描而不是卷积来循环计算模型，避免具体化扩展状态以减少内存使用。

  * 将先前的深度序列模型架构**简化为同构架构** ，具有快速推理、线性缩放和改进的长序列性能。

  * 在多种模态（语言、音频和基因组学）上都取得SOTA性能，成为**跨模态通用序列模型主干的有力候选者** 。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBZ0kSP9kyj9xZnXSWJ63IpHlXRUIbChWwxpoFysfTAwMRgGdOod0mosd2P6NjgnpCpPdYjKJugNg/640?wx_fmt=png&from=appmsg)

但这位审稿人提出的**二次内存需求问题** ，不少熟悉这篇论文的人都表示不认可。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBZ0kSP9kyj9xZnXSWJ63Ipkic9ddNLrIuCiazYNzslWawibUpyswzVrcXODTogfQ1hePuJT4taOb7Lw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBZ0kSP9kyj9xZnXSWJ63Ip3cK8eVy5IBnTzvtJ34woGvOHMRqrrebTzQG6VzMqwfACMYicXydkcTw/640?wx_fmt=png&from=appmsg)

对此，作者也在Rebuttal中给出了解释，**内存需求实际上是随序列长度线性增长的。**

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBZ0kSP9kyj9xZnXSWJ63IppVeoiaicJAHDkpQlh8roZTMkUDlmG5f1KOdYjNpNibwZSah7wldbkGQpg/640?wx_fmt=png&from=appmsg)

另外一位打3分的审稿人，还被吃瓜群众指出可能根本不熟悉什么是RNN。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBZ0kSP9kyj9xZnXSWJ63IpANAicqQSH1SYFlMdFEsRyyC7X235sn10Bpz3icO8v01uuA6MRzWDkSNg/640?wx_fmt=png&from=appmsg)

作者针对这位审稿人的Rebuttal太长，足足分了4条才发完。

![](https://mmbiz.qpic.cn/mmbiz_gif/YicUhk5aAGtBZ0kSP9kyj9xZnXSWJ63IpJIZjm2QQ1FQXBgNZCfG4LPQPcAlmUgrAUThyBLozonFVNKrwu6TA1A/640?wx_fmt=gif&from=appmsg)

然鹅，这位对自己评分给出5级置信度的审稿人，**根本没有回复** 。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBZ0kSP9kyj9xZnXSWJ63IpRoEV9uewnyLf9J6xt945Iia3BA8rhJrWq56AhVbxvMKh4LmryaMlHfw/640?wx_fmt=png&from=appmsg)

这就让人更担心会不会影响领域主席的判断了。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBZ0kSP9kyj9xZnXSWJ63IpncRbrwoWPMA9oicOpHVrIGsYwiaCtZ1xjLQO8BOeXkcw4VYRZs5xibhTw/640?wx_fmt=png&from=appmsg)

正如这位研究者所说，这届ICLR出现的争议还不止一例。

8/8/6/3如果被拒还算事出有因，知乎相关讨论上还有**得分8/8/8被AC拒** ，就更离谱了。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBZ0kSP9kyj9xZnXSWJ63IpFwXhSkh9Q81dlS7juf9iaTTYl9DMCWYza7hWx8PuwbCrzLNWRMAm08w/640?wx_fmt=png&from=appmsg)

还有作者和审稿人吵起来，以至于要讨论礼貌问题的。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBZ0kSP9kyj9xZnXSWJ63Ipz4N4YQJQsDAWYxHx98wWLCiaeqMJnACgOiaxibJuxSjxCiah2zl6Otftxw/640?wx_fmt=png&from=appmsg)

## 投稿接不接收全靠随机？

这也引发了网友们对整体学术评审现状的讨论。其中一个主要讨论点是评审过程有缺陷“接不接受真的很随机，和论文本身的质量关系不大”：

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBZ0kSP9kyj9xZnXSWJ63IpFbPanVrFaKXgMMbNNSh6xvTbicYicnJ8nOxTYXVfUeU2Bsjf4hKTuhHg/640?wx_fmt=png&from=appmsg)

网友也是缓缓打出一个问号：

> 既然评审流程存在问题，那解决方案是什么？就靠运气？

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBZ0kSP9kyj9xZnXSWJ63IptuibgPSbwuzxqYRnYicicNM3APKMfm0Yy11WmVqC0qVz2AiccluE8XgsVQ/640?wx_fmt=png&from=appmsg)

对此，康奈尔副教授Alexander Rush甚至还提出了这样的建议(手动狗头)：

> 如果你读博已经读到了第六年的那种，应该提交两篇糟糕的论文，而不是一篇好的。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBZ0kSP9kyj9xZnXSWJ63IpvWjgjLcx1E0ILDf5ASWNUWZpm7xDXIakAMIe5BaEhMXBs8u2Ynrqhg/640?wx_fmt=png&from=appmsg)

不只一位学者分享了类似的建议：

> 我的教授曾说，论文被接受的过程就像掷一个四面骰子，如果这次运气不好，就再掷一次……

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBZ0kSP9kyj9xZnXSWJ63IpEMvA6J4M2vBb71WvbDq51tGLLff4pdZx5c7dsialcK4MJFNeIicbBfsA/640?wx_fmt=png&from=appmsg)

当然，也有人抱有不同的观点，认为会议作为一种认可，已出名的作品其实已经不需要了，可以给其他未被发掘的论文更多机会，所以已经出名的论文被学术会议拒绝也是完全可以接受的。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBZ0kSP9kyj9xZnXSWJ63IplDKia38C9fUAtDEREUiaxlX0LHGBEJibHEyd8yu4gKGCIAKlSFdcN2KPw/640?wx_fmt=png&from=appmsg)

值得一提的是，还有不少人建议大家转投新生代会议**CoLM** ，Alexander Rush自己也参与了这个会议的创办：

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBZ0kSP9kyj9xZnXSWJ63IpjDwL42ibiaIhB94nqrjesYXrEGPdtLaoOYq14XFHxiajTSW84axkyPQsA/640?wx_fmt=png&from=appmsg)

而大家提到的CoLM会议，全称Conference On Language
Modeling，专注于语言模型领域。CoLM刚创立不久，第一届大会将在今年10月份举办。

其中七位组织者均是来自业界学界的大佬，其中有三位是华人学者谷歌周登勇、普林斯顿陈丹琦、Meta的Angela Fan。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBZ0kSP9kyj9xZnXSWJ63IpmUVARCXich8xG8gToz0FbEjVlRwibaWIEz1b8YBbvHNCficPAjBhiaysxw/640?wx_fmt=png&from=appmsg)

与ICLR类似，COLM将采用双盲审核，并使用OpenReview管理投稿。

会议征稿主题包括但不限于语言建模及大模型语境下的对齐、数据、评估、社会影响、安全、科学、高效计算、工程、学习和推理算法等17个方向。

据说，COLM还是在ACL 2024主席公开抨击称“arXiv是科研的毒瘤”而后引发争论的背景下，催生出来的。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBZ0kSP9kyj9xZnXSWJ63IponOqh3xBOwYQqoiclbapf5xWXgGrpgjWqIzBBjN9bdcGrSPn2QkicKtA/640?wx_fmt=png&from=appmsg)

参考链接：  
[1]https://twitter.com/srush_nlp/status/1750526956452577486  
[2]https://x.com/ylecun/status/1750594387141369891  
[3]https://openreview.net/forum?id=AL1fq05o7H

— **完** —

**点这里 👇关注我，记得标星哦～**

**一键三连「分享」、「点赞」和「在看」**

**科技前沿进展日日相见 ~**

![](https://mmbiz.qpic.cn/mmbiz_svg/g9RQicMD01M0tYoRQT2cMQRmPS5ZDyrrfzeksiay90KaDzlGBH61icqHxmgFKfvfXtVuwTHV740CDLAaXU1LIfZyoJEpYKcRIiaE/640?wx_fmt=svg)

