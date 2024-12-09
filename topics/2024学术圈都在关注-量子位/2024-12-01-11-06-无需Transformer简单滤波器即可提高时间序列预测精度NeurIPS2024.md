# 无需Transformer，简单滤波器即可提高时间序列预测精度 | NeurIPS 2024

文章作者: 量子位
发布时间: 2024-12-01 11:06
发布地: 北京
原文链接: http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247762828&idx=4&sn=e43f3e680304dbe4b2cbdec349aa1a1f&chksm=e8dc74fedfabfde89be029b5d19a91dc56af20b1e48be34aa221e765e256664e5c8cb2d96527#rd

封面图链接: https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtCVlQQnHDzSB3veUaiaBQdy86Ha1OJFlCyxuPykRk5vvKI7Kr4TNUySZ6UkYgpPicia5SUlMIKCu6pdw/300

##### 范玮 投稿  
量子位 | 公众号 QbitAI

无需Transformer，简单滤波器即可提高时间序列预测精度。

由国家信息中心、牛津大学、北京理工大学、同济大学、中国科学技术大学等机构的团队提出了一个**FilterNet** 。

目前已被NeurlPS 2024接收。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCVlQQnHDzSB3veUaiaBQdy828rViapXiazWfIG57Pjd0z3xb862hicmFhQdgVMZeF6Q4rmM3OKSbnLnw/640?wx_fmt=png&from=appmsg)

准确**预测时间序列** ，对于能源、气象、医疗等领域中来说都非常重要。

目前很受欢迎的一类预测模式是基于Transformer网络进行建构的。

但是，Transformer并不是万能的，尤其是对于时间序列预测这样的问题来说，它的结构显得有点过于复杂。

以iTransformer模型为例，它存在很多问题，比如对高频信号的响应较弱从而导致全频段信息利用受限、计算效率低下等，这些问题会大大影响模型的预测精度。

那么，FilterNet有哪些创新之处？

## 研究动机：现有模型架构存在频段信息利用瓶颈

时间序列信号往往由不同频段信号组成，为了探究**现有模型能否对频域信号进行准确捕捉** ，团队设计一个简单的模拟验证实验。

首先，他们利用低频、中频和高频分量合成的信号作为实验数据（见图1(a)）来测试时序模型的预测性能。从图1(b)可以看出，当前时序预测的先进模型iTransformer表现不佳。

这表明，即使是由三种不同频率成分组成的简单信号，当前先进的基于Transformer的模型仍无法充分学到相对应的频谱信息。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCVlQQnHDzSB3veUaiaBQdy8QW8nzwmvd8bWAPE46MML6ykEIyL4C4uafbrbrComcnBv77eYUywibhg/640?wx_fmt=png&from=appmsg)

相比之下，在传统的信号处理（signal
processing）领域，简单的频率滤波器具备许多优秀特性，例如频率选择性、信号调制和多速率处理。这些特性有望显著提升模型在时间序列预测中提取关键信息频率模式的能力。

因此，受信号处理中**滤波过程** 的启发，研究团队提出了一种非常简单并且高效的学习框架—-FilterNet，用于时间序列预测任务。

## 研究方法：滤波器网络（FilterNet）

FilterNet的设计**极其简单** ，整体框架如下图所示：

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCVlQQnHDzSB3veUaiaBQdy8ibQ9cTALuelSTDf6w7tn09hrLXVoFPicI9R3USicjPLBvW62W52Viao71g/640?wx_fmt=png&from=appmsg)

FilterNet的核心模块是**频率滤波模块（Frequency Filter Block）** ，包含团队设计的2种可学习滤波器：

**1.Plain Shaping Filter** ：使用最简洁的、可学习的频率滤波器，实现信号滤波与时间关系的建模。

**2.Contextual Shaping Filter** ：针对利用滤波后的频率与原始输入信号的兼容性，进行依赖关系的学习。

具体来说，FilterNet的各个组件有：

**1.实例归一化（Instance Normalization）**

时间序列数据通常是在较长时间跨度内收集的，这些非平稳序列不可避免地使预测模型面临随时间变化的分布偏移。像很多时序预测模型一样，团队采用了可逆Instance
Normalization，如下所示：

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCVlQQnHDzSB3veUaiaBQdy8aupxKARLHuicR3l1DL2TpUOCvDibXhxZSichn2pcYl6fYmskCDeDiaPydg/640?wx_fmt=png&from=appmsg)  
![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCVlQQnHDzSB3veUaiaBQdy8aRDaibyfF9bgDPAZibz01v5OPI8vEFTA0sgwCFjctKCw5EMhKWXYSicXw/640?wx_fmt=png&from=appmsg)

**2.频率滤波模块（Frequency Filter Block）**

时间序列预测器可以视为针对关键信号的捕捉，从某种程度上，也可以看作在频域上进行了一次滤波过程。

基于此，研究人员直接设计了一个滤波器模块来建模相应的关系，具体为：

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCVlQQnHDzSB3veUaiaBQdy8icyKjxAVE4rdN5cqzgd9x82HJUHMoiajKsJsdLrahkdVtX8ozp5fLHyA/640?wx_fmt=png&from=appmsg)

文中包含两类滤波器，分别为plain shaping filter (PaiFilter)和contextual shapingfilter
(TexFilter)。PaiFilter直接通过初始化一个权重参数𝓗𝜙来模拟对应的滤波器，具体为：

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCVlQQnHDzSB3veUaiaBQdy8e2q3Hv7kU8WibjA32nD48lnJ1gctwcIIWiamvPc2qic3Kk1wYXs4Clmibg/640?wx_fmt=png&from=appmsg)

相对应的，TexFilter则通过一个可学习的神经网络来生成相应的滤波器，完成对应的滤波学习，具体为：

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCVlQQnHDzSB3veUaiaBQdy8KRvOhhdfmAm4KmO7qX3Z2aJdKmobOsKK7I3YS0VNLLqoGYH6daKVkQ/640?wx_fmt=png&from=appmsg)

**3.前馈神经网络（Feed-forward Network）**

频率滤波模块建模了时间序列数据中的一些主要时间依赖关系，随后他们利用前馈神经网络（Feed-Forward
Network）建立这些时间依赖关系和未来τ个时刻数据的关系，最后进行预测，并对预测值进行反归一化操作。

## FilterNet在各种场景下都表现优越

**1.预测结果**

实验在八个时间序列预测基准数据集上进行了广泛的测试，结果表明，与最新的预测算法相比，FilterNet模型**在不同预测场景中均表现出卓越的性能** 。

其中，PaiFilter在小数据集上（变量数较小，如ETT、Exchange数据集）表现更好，而TexFilter则在大数据集上（变量数较多，关系更为复杂，如Traffic、Weather数据集）表现出强有力的竞争力。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCVlQQnHDzSB3veUaiaBQdy80GHUAQTeBXqibVEyn3lwKaChLv3CSDRUljBTthp9yWdp2soDWUicPylA/640?wx_fmt=png&from=appmsg)

**2.频率滤波器的可视化**

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCVlQQnHDzSB3veUaiaBQdy8oNZGNPvnEFoicxhzqWoRQ8bqlvKbKA2KrBv4J4Hsn6OpVjeDcgWmAmg/640?wx_fmt=png&from=appmsg)

图7是学习到的滤波器的频率响应特性的可视化图表，表明FilterNet具备**全频段** 的信号处理能力。

此外，如图8所示，在ETTm1数据集上针对**不同预测长度** 进行的可视化实验进一步证明了FilterNet的强大处理能力。

**3.预测结果的可视化**

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCVlQQnHDzSB3veUaiaBQdy8LfaadTN6ibOgV6IXoGDP5PyNEZibhOIdVBfcWHA7c6Prr1dIEyQThxrw/640?wx_fmt=png&from=appmsg)

与其他最新模型相比，FilterNet在**预测未来序列变化** 方面展现了出色的准确性，充分证明了其卓越的性能。

**4.效率分析**

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCVlQQnHDzSB3veUaiaBQdy8akDFvnO7kGISZdo4GwwCwdtB1iapkOot8xE9ykkoysz1HibroCMJ8Ccw/640?wx_fmt=png&from=appmsg)

团队还在两个不同的数据集上对FilterNet进行了相应的效率分析实验，实验结果表明，无论数据集大小，FilterNet都表现出比Transformer方法更高的效率。

虽然在每个epoch训练时间上，FilterNet比DLinear略差，但是FilterNet效果比DLinear要好。

## 为时间序列预测提供新思路

这篇论文是**首次** 尝试将频率滤波器直接应用于时间序列预测的工作，从信号处理的角度切入是一个非常有趣的新思路。

研究团队提出了一种简单而高效的架构——FilterNet，该架构基于他们设计的两类频率滤波器来实现预测目标。在八个基准数据集上的全面实验证明了FilterNet在效果和效率方面的优越性。

此外，团队成员还对FilterNet及其内部滤波器进行了细致深入的模型分析，展示了其诸多优秀特性。

他们表示，希望这项工作能够推动更多研究，将信号处理技术或滤波过程与深度学习相结合，提高时间序列建模与精确预测的效果。

Paper Link：https://arxiv.org/abs/2411.01623  
Code Repository：https://github.com/aikunyi/FilterNet

— **完** —

  

投稿请发邮件到：

**ai@qbitai.com**

标题注明【投稿】，告诉我们：

你是谁，从哪来，投稿内容‍

附上论文/项目主页链接，以及联系方式哦

我们会（尽量）及时回复你

![](https://mmbiz.qpic.cn/mmbiz_gif/YicUhk5aAGtC5nGy7YMGhQ0ZJeyibWyL0KVCtiaLEPMyd4Bszuo0bFIOxZOvdmqdxnOosYXyu5aI7MXpyUrUWfz6g/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

  

**点这里 👇关注我，记得标星哦～**

**一键三连「分享」、「点赞」和「在看」**

**科技前沿进展日日相见 ~**

![](https://mmbiz.qpic.cn/mmbiz_svg/g9RQicMD01M0tYoRQT2cMQRmPS5ZDyrrfzeksiay90KaDzlGBH61icqHxmgFKfvfXtVuwTHV740CDLAaXU1LIfZyoJEpYKcRIiaE/640?wx_fmt=svg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

