# 提速199倍！清华&哈佛发布三维语义高斯泼溅LangSplat｜CVPR‘24 Highlight

文章作者: 量子位
发布时间: 2024-06-23 11:35
发布地: 北京
原文链接: http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247735118&idx=3&sn=805abbc11e0d1305ceaefbfd3cebfb13&chksm=e8dfe03cdfa8692aab3f7c173ba17b5a4026f48ce068e957df6d47494d186e5d20bbd9fa0d06#rd

封面图链接: https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtCic5s5xNYGvHXwg5FOje4o0AmCOiaPBQoPRpdGDE72pftdlC71lcvBmbdrKjumZFlYKjy8x9DWmEhQ/300

##### LangSplat团队 投稿  
量子位 | 公众号 QbitAI

入选CVPR 2024 Highlight的三维语义高斯泼溅最新成果，查询速度比之前的SOTA方法LERF快了**199倍** ！

清华&哈佛团队提出**LangSplat** ，在开放文本目标定位和语义分割任务上达到SOTA性能。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCic5s5xNYGvHXwg5FOje4o07RxVmCZklXmCs6Nmdm9P07LxBUzgJ8quribTy7VyjTCjiboRiakjfhicaA/640?wx_fmt=png&from=appmsg)

该工作目前在𝕏（Twitter）上受到广泛关注，论文视频累计浏览量超过100,000，论文代码已开源。  

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCic5s5xNYGvHXwg5FOje4o0TAGX4qh7KLicyvoSOGT9lMicRFhaOSNDiakJZFlibkJDJRDIalCq7sQGkA/640?wx_fmt=png&from=appmsg)

  

## 结合三维高斯泼溅技术重建三维语义场

人类生活在一个三维世界中，并通过文本语言描述三维场景。构建三维语义场以支持在三维空间中的开放文本查询最近越来越受到关注。

LangSplat方法结合三维高斯泼溅技术重建三维语义场，能够实现准确高效的开放文本查询。

现有方法在NeRF的基础上嵌入CLIP语义特征，LangSplat则通过结合三维高斯泼溅，在每个高斯点上编码了从CLIP提取的语义特征。

LangSpla采用tile-based的三维高斯泼溅技术来渲染语义特征，从而避免了NeRF中计算成本高昂的渲染过程。

首先训练特定场景下的语义自编码器，然后在场景特定的低维latent space上学习语义特征，而不是直接学习高维的CLIP语义特征，从而降低了计算量。

现有基于NeRF的方法的三维语义场比较模糊，无法清晰地区分目标的边界。本文深入研究了这一问题，提出使用SAM学习多层次语义，在不引入DINO特征的情况下获得了更准确的语义场。

广泛的实验结果表明，LangSplat在开放文本目标定位和语义分割任务上的性能显著超过了之前的SOTA方法LERF。值得注意的是，LangSplat在1440×1080分辨率的图像上，查询速度比LERF快了199倍。

**团队强烈推荐查看在项目主页中的更多视频结果。**

https://langsplat.github.io/  

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCic5s5xNYGvHXwg5FOje4o0bvQ1JzWclGfjlqnUCx7edQsibKp1scQAM9Yj3z6xtW40HkWcpm5r3vg/640?wx_fmt=png&from=appmsg)

  

## 具体方法

首先来看LangSplat的主要贡献，分别为：

  * 通过引入带有语义特征的3D高斯泼溅来进行三维场景感知。

  * 与以前的方法相比，实现了显著的速度提升，使其适合实时应用。

  * 通过采用层次语义和新的渲染技术，LangSplat提高了3D语义场的精确度。

  * 通过使用场景特定的自动编码器，减少了处理高维数据所需的计算和内存开销。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCic5s5xNYGvHXwg5FOje4o0SINq9oCZsLd2zwXMtYGcna2ArYTsJ5vHuN0h967ic07UJxqDQJETEnw/640?wx_fmt=png&from=appmsg)

  

具体来说，采用了如下方法：

**层次语义学习：** LangSplat利用Segment Anything Model（SAM）学习层次语义，解决了三维语义场的边界模糊问题。

**3D语义高斯泼溅：** LangSplat引入了一种新的技术，即3D高斯泼溅，它使用包含语义特征嵌入的3D高斯来表示3D场景。这种方法比NeRF-
based的方法渲染过程更快。

**特定场景的语义自编码器：** 为了缓解高维语义特征嵌入导致的内存out of
memory问题，LangSplat构建特定场景的语义自编码器将这些文本语义特征降维。

### 层次语义学习

在本文中，团队利用SAM来获得实例级的精确对象掩码，然后用这些掩码对应的图像区域提取像素对齐的特征。团队还明确地建模了SAM定义的语义层次，以解决点模糊性问题。

具体来说，团队将一个32×32点提示的常规网格输入SAM，以获得三个不同语义层次下的掩码，分别代表子部分、部分和整体层次的掩码。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCic5s5xNYGvHXwg5FOje4o0ImMMofmwl7WulBdXOwA5ia2aIRuKvDcG2FDdRopoZl3JKdJJHM6wiaow/640?wx_fmt=png&from=appmsg)  

然后基于SAM预测的IoU分值、稳定性分值和掩码之间的重叠率，为每一组掩码去除冗余的掩码。  

每个过滤后的掩码集合独立地根据其各自的语义层次做全图分割，从而得到三个分割图： Ms,Mp,Mw。

这些分割图准确地勾勒出对象在其层次结构中的边界，有效地将场景划分为语义上有意义的区域。通过获得的分割图，团队继续为每个分割区域提取CLIP特征。数学上，得到的像素对齐的语义嵌入是：  
![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCic5s5xNYGvHXwg5FOje4o0OekdFNM6GasKuVakicJtQHfxeYttjFDRgqKWULJibxF6ZWsMPiboosIZQ/640?wx_fmt=png&from=appmsg)  
如此，从三维语义场景渲染的每个像素都具有与其精确语义上下文相匹配的CLIP特征。这种匹配减少了模糊性，提高了基于语义的查询的准确性。

此外，由于团队在“整体”、“部分”和“子部分”层次上都有不同的分割图，团队可以直接在这些预定义的尺度上查询三维语义场。这消除了在多个绝对尺度上进行密集搜索的需要，使查询过程更加高效。

### 3D语义高斯泼溅

在一组2D图像上获得语义嵌入后，团队可以通过建模3D点和2D像素之间的关系来学习一个3D语义场。大多数现有方法使用NeRFs进行3D建模，但它们面临着耗时的渲染过程。

为了解决这个问题，团队提出了基于3D高斯散射的3D语义场建模方法。这种3D高斯散射方法明确地将3D场景表示为各向异性的3D高斯分布的集合，每个高斯分布G(x)由均值μ∈R^3和协方差矩阵∑描述：】  
![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCic5s5xNYGvHXwg5FOje4o0Oiby1oGWFsvX8bQ1h0jFicicpXCYuyeFy45LMUTia0VGGu1LhPxzDjgEWg/640?wx_fmt=png&from=appmsg)  
3D高斯投影到2D图像平面上后，用基于tile的光栅化策略进行渲染：

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCic5s5xNYGvHXwg5FOje4o0Bl8aTBC1w8zIIoHRt2YnfJbw9cMHdgmDiaey2iacKXsgtwqrV5uHwCJg/640?wx_fmt=png&from=appmsg)

其中， ci是第i个高斯的颜色，N表示瓦片中的高斯数量， C(v)是在像素 v 处渲染的颜色。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCic5s5xNYGvHXwg5FOje4o05ibbib7se12sYAsau5Yv1b2ARr8rXzNaU3Cib2FMwUJZljl4JERkn6Nfw/640?wx_fmt=png&from=appmsg)

这里是oi第i个高斯的不透明度，Gi2D (⋅)代表投影到二维上的第 i 个高斯的函数。

在本文中，团队提出了3D语义高斯，为每个高斯增加三个语义嵌入{fs, fp, fw}
。这些嵌入源自CLIP特征，捕捉了SAM提供的层次语义。增强后的高斯被命名为3D语义高斯。并采用基于tile的光栅化器以保持渲染效率：

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCic5s5xNYGvHXwg5FOje4o0t87F1Z2buJp4C7tH5OoktUTTjYiakmNfMSsVEx9XpTUIByC4k4hIz5A/640?wx_fmt=png&from=appmsg)

其中， Fl(v)代表在像素 处以语义层次l渲染的语义嵌入。通过直接将语义信息引入高斯中，团队使三维语义场能够响应基于文本的查询。

### 特定场景的语义自编码器

作为一种显式建模方法，表征一个复杂场景可能需要数百万个3D点。直接在高维的CLIP潜空间直接学习高斯的语义特征会显著增加内存消耗，容易导致“内存不足”的问题。

为降低内存消耗并提高效率，团队引入了基于场景的语义自编码器，将场景中的CLIP嵌入映射到低维潜在空间。CLIP模型是通过4亿对（图像，文本）训练的，其D维潜在空间可能非常紧凑。

然而，团队在这里训练的语义场Φ是特定于场景的，这意味着团队可以利用场景先验知识压缩CLIP特征。事实上，对于每个输入图像，团队将获得由SAM分割的数百个掩码，这显著少于CLIP训练中使用的图像数量。因此，场景中的所有分割区域在CLIP潜在空间中稀疏分布，使团队能够通过基于场景的自编码器进一步压缩这些CLIP特征。

## 实验结果

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCic5s5xNYGvHXwg5FOje4o0PeLTofKL2Otr0x4yUmSUH7wiaWxkCanq7nu9Oua8OXu5qQibInWCoYOA/640?wx_fmt=png&from=appmsg)

  

实验设置：实验测试了该方法在开放词汇3D对象定位和语义分割任务上的性能，使用的数据集包括LERF和3D-OVS。

结果：LangSplat显著优于先前的最先进方法。特别是，它在1440×1080分辨率下比LERF快199倍，显示出在速度和效率上的显著提高。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCic5s5xNYGvHXwg5FOje4o0XsNr11VdUiagaruTqXW1cLIicGRS7tfpibl8g0tOoEkT2E2MnXPbAWjXQ/640?wx_fmt=png&from=appmsg)

可视化和消融研究：论文包括了详细的可视化和消融研究，展示了LangSplat各组成部分的有效性。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCic5s5xNYGvHXwg5FOje4o0uhz5Wtx82FHO7T9XUUq8BVdja6Ked9NeOKkTCgzfDW5ZgSe2Jhp4RA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCic5s5xNYGvHXwg5FOje4o0jYOhoXZqHNnvliciaxR5QPTrwER2niazkt6cCGYjs4J0qKl6wfKtWUNZg/640?wx_fmt=png&from=appmsg)

项目主页: https://langsplat.github.io/  
论文: https://arxiv.org/pdf/2312.16084.pdf  
视频: https://youtu.be/K_9BBS1ODAc?si=gfo5TrLK-htyWyuT  
开源代码: https://github.com/minghanqin/LangSplat

— **完** —

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCic5s5xNYGvHXwg5FOje4o0H8FCAC42V9icPgXP13rSTjgPAqzicutIptiax3vwBcMzvufrwgWnkDbZA/640?wx_fmt=png&from=appmsg)

  

**点这里 👇关注我，记得标星哦～**

**一键三连「分享」、「点赞」和「在看」**

**科技前沿进展日日相见 ~**

![](https://mmbiz.qpic.cn/mmbiz_svg/g9RQicMD01M0tYoRQT2cMQRmPS5ZDyrrfzeksiay90KaDzlGBH61icqHxmgFKfvfXtVuwTHV740CDLAaXU1LIfZyoJEpYKcRIiaE/640?wx_fmt=svg)

