# 新架构Mamba更新二代！作者：别争了，数学上Transformer和SSM是一回事

文章作者: 量子位
发布时间: 2024-06-04 12:43
发布地: 北京
原文链接: http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247732015&idx=2&sn=cf65219788c4abd4b120bd316e6c9f75&chksm=e8dffc5ddfa8754b94fa86f1cdff8e77cd57a786df3ce1497dfce96ad22706983d4f8446e821#rd

封面图链接: https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtCK6jOEbduN8kibAGhvDiaicm2MHQH5x5XHM5z50FFoL9IWAGVjib1ibc0d7ZADZiaWJ2JcpupsNWFplt6Q/300

##### 梦晨 发自 凹非寺  
量子位 | 公众号 QbitAI

Transformer挑战者、新架构Mamba，刚刚更新了第二代：

> **Mamba-2** ，状态空间扩大8倍，训练速度提高50%！

更重要的是，团队研究发现原来**Transformer和状态空间模型** （SSM）**竟然是近亲****？？** ‍

两大主流序列建模架构，在此统一了。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCK6jOEbduN8kibAGhvDiaicm2Uc5wGrmy7fUc6cH8pS4yDPRb4zZ3r4tR8MPlX1wVcxX82qrQMwh08w/640?wx_fmt=png&from=appmsg)

没错，这篇论文的提出的重磅发现：**Transformer中的****注意力机制与SSM存在着非常紧密的数学联系。**

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCK6jOEbduN8kibAGhvDiaicm2K74oAFDzSfsTljSWePuiaXUk0GMc0sQI50pRZXWEy8FjApKKjS2V1ng/640?wx_fmt=png&from=appmsg)

团队通过提出一个叫**结构化状态空间二元性** （Structured State Space
Duality，SSD）的理论框架，把这两大模型家族统一了起来。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCK6jOEbduN8kibAGhvDiaicm2nXiakic7V9knOibysvicrGzhff6MU8kiaibC1fjOJVEYQyGlXlicLGeE2lWjg/640?wx_fmt=png&from=appmsg)

Mamba一代论文年初被ICLR拒稿，当时还[让许多学者集体破防，引起一阵热议](http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247714782&idx=3&sn=c7b031a33c8b27b89c53e0a8483be266&chksm=e8df30acdfa8b9ba661f2ae3e1d03b4d8fcb101404323049cdf86abdc259bc4a1eff170bc6c2&scene=21#wechat_redirect)。

这次二代论文在理论和实验上都更丰富了，成功入选ICML 2024。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCK6jOEbduN8kibAGhvDiaicm2zOnm5zEiblcDTySAHFIiahRAuS5IEEk4VAmY0EoWK5Tm6aj7fcicoSCGg/640?wx_fmt=png&from=appmsg)

作者依然是**Albert Gu** 和**Tri Dao** 两位。

他们透露，论文题目中“Transformers are SSMs”是致敬了4年前的线性注意力经典论文“Transformers are RNNs”。  

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCK6jOEbduN8kibAGhvDiaicm2NZVhsYibvfMt9ONt9qA9XRwnib1PI1P9bJpBx8tWqcIfQc1aMHxCkpXA/640?wx_fmt=png&from=appmsg)

那么，SSM和注意力机制究竟是怎么联系起来的，Mamba-2模型层面又做出哪些改进？

## 统一SSM和注意力机制

Transformer的核心组件是**注意力机制** ，SSM模型的核心则是一个**线性时变系统** 。

两者看似不相关，但论文指出：它们都可以表示成**可半分离矩阵** （Semiseparable Matrices）的变换。

**先从SSM的视角来看。**

SSM本身就定义了一个线性映射，恰好对应了一个半可分离矩阵。

半可分离矩阵有着特殊的低秩结构，这种结构又恰好对应了SSM模型中的状态变量。

于是，矩阵乘法就相当于SSM的线性时变系统了。**带选择性的SSM本质上就是一种广义线性注意力机制** 。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCK6jOEbduN8kibAGhvDiaicm2ZBibIM6OS7a4oHOatPCCfLwibx35SEerz1rjCI4IWclTbhTMdJCbsmwg/640?wx_fmt=png&from=appmsg)

**从注意力的视角看又如何？**

团队试图以更抽象方式来刻画注意力机制的本质，毕竟“Softmax自注意力”只是众多可能形式中的一种。

更一般地，**任意带掩码的注意力机制，都可以表示为4个张量的缩并**(Contraction)。

其中QKV对应注意力中的query，key，value，L对应掩码矩阵。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCK6jOEbduN8kibAGhvDiaicm2KM2LqD6mu40AzOKPTo6un4veXfEkMr4DfTp7viaVW8JWNo6l7ib07STw/640?wx_fmt=png&from=appmsg)

借助这一联系，它们在线性注意力的基础上提出了**结构化掩码注意力SMA** （Structured Masked Attention）。

**当注意力的掩码矩阵是半可分离的，就与SSM等价了。**

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCK6jOEbduN8kibAGhvDiaicm2M0f7yeZCHJfjBxDIqVsyNYBtxNfeuq5eBNCA3wAiaSz17ZwcdVyL8ww/640?wx_fmt=png&from=appmsg)

基于这个发现，作者进一步推导出两种等价的计算形式，这就是本文核心思想”状态空间二元性”SSD的由来。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCK6jOEbduN8kibAGhvDiaicm2TyV7j0SZNjHyp6u9ZyaHkia7C9VVm3eiaibQ0yKOplrNOaVAt11psO8cg/640?wx_fmt=png&from=appmsg)

## Mamba-2：更强学习能力，更快训练推理

基于SSD思想的新算法，Mamba-2支持**更大的状态维度** （从16扩大到256），从而学习更强的表示能力。

新方法基于块分解矩阵乘法，利用了GPU的存储层次结构，提高训练速度。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCK6jOEbduN8kibAGhvDiaicm2mEWsGGXOZiclIFWL4gOGsApJeZuicwDmptdK9ZXrPguDialscjppE2VBA/640?wx_fmt=png&from=appmsg)

架构设计上，Mamba-2**简化了块的设计** ，同时受注意力启发做出一些改动，借鉴多头注意力创建了多输入SSM。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCK6jOEbduN8kibAGhvDiaicm2NZx7JlJdvXT8b9xcw6Dsd4cTUs1U4nDVT5GH84IgG94RZvJNs7Mibdg/640?wx_fmt=png&from=appmsg)

有了与注意力之间的联系，SSD还可以轻松**将Transformer架构多年来积累起来的优化方法引入SSM** 。

比如引入**张量并行和序列并行** ，扩展到更大的模型和更长的序列。

又比如引入**可变序列长度** ，以实现更快的微调和推理。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCK6jOEbduN8kibAGhvDiaicm23DrQspwSiaAZ7XNKcf6IRhyichapYwtgG4TQBruRM5FqLlMbnZxeC38Q/640?wx_fmt=png&from=appmsg)

Mamba-2的SSD层比Mamba-1中的关联扫描快很多，使团队能够增加状态维度并提高模型质量。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCK6jOEbduN8kibAGhvDiaicm2k5D2LdCuXmJiagl0xibg0l5Myj3txjW861reFTOJbf5spkmlxORW6A7w/640?wx_fmt=png&from=appmsg)

实验中，3B参数规模的Mamba-2，在300B tokens训练，**超越了相同规模的Mamba-1和Transformer** 。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCK6jOEbduN8kibAGhvDiaicm2LErPCjdIThoIGHCtKl2ibwiaHOpFCGBBViazpQCKyHF7Ce5MzpsAaNqeg/640?wx_fmt=png&from=appmsg)

Mamba-2在需要更大状态容量的任务上比Mamba-1有了显著改进，例如**硬关联召回任务** (MQAR)。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCK6jOEbduN8kibAGhvDiaicm2Vz48RbKGwFiaIEkymbZref2JXwGf4o41qvXYs5BGVpV0TGiaHQboWolQ/640?wx_fmt=png&from=appmsg)

团队还对Mamba-2+注意力的混合架构模型做了一些实验。发现**4-6个注意力层与Mamba-2层混合模型**
的性能，甚至优于Transformer++（原版结构+现代最佳实践）和纯Mamba-2。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCK6jOEbduN8kibAGhvDiaicm2iaQbgkKPaIEY2S1OlqGYuTxDSm6pyALnwbW5qTv9SnZr6sF6aPIRkjg/640?wx_fmt=png&from=appmsg)

作者Tri Dao认为，这说明了**Attention和SSM两种机制可以互为补充** ，另外他还提出了对未来研究方向的思考。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCK6jOEbduN8kibAGhvDiaicm2AYpmx4vCRdSaUyevdps2HFk3lKVqfbaNryic3nhB5tDbzcWypzLEYiaw/640?wx_fmt=png&from=appmsg)

最后，除了52页的论文之外，两位作者还撰写了四篇更易读的系列博客文章。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCK6jOEbduN8kibAGhvDiaicm2VeAhXl0uW5spy78yorwd61Wd034q6WAk6r8y4gpfOYkLW5Mx9LbzKg/640?wx_fmt=png&from=appmsg)

他们特别建议：**先看博客，再看论文。**

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCK6jOEbduN8kibAGhvDiaicm2bHM0ymdPbiaY3ZssmZo38W9k1xPagicQhBqsmUzxic0aictLMNYA5NeViag/640?wx_fmt=png&from=appmsg)

对Mamba-2模型或者状态空间二元性理论感兴趣的，可以读起来了～

博客（两个地址内容一样）：  
https://tridao.me/blog/  
https://goombalab.github.io/blog/

论文：  
https://arxiv.org/abs/2405.21060

代码和模型权重：  
https://github.com/state-spaces/mamba

参考链接：  
[1]https://x.com/_albertgu/status/1797651240396144758  
[2]https://x.com/tri_dao/status/1797650443218436165

— **完** —

**量子位年度AI主题策划** 正在征集中！

欢迎投稿专题 **一千零一个AI应****用** ，**365行AI落地方案**

或与我们分享你在**寻找的AI产品** ，或发现的**AI新动向**

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDpTavEwUl8aOlFLGHaPnaKXJcMUeJtGXVLliac6P6XxYHIKhnz0NPUgVvlrXAvJC33ibh8aYDdyudA/640?wx_fmt=png&from=appmsg)

  

**点这里 👇关注我，记得标星哦～**

**一键三连「分享」、「点赞」和「在看」**

**科技前沿进展日日相见 ~**

![](https://mmbiz.qpic.cn/mmbiz_svg/g9RQicMD01M0tYoRQT2cMQRmPS5ZDyrrfzeksiay90KaDzlGBH61icqHxmgFKfvfXtVuwTHV740CDLAaXU1LIfZyoJEpYKcRIiaE/640?wx_fmt=svg)

