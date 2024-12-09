# 国产开源Sora上新：全面支持国产AI算力，可用ReVideo视频编辑，北大-兔展团队出品

文章作者: 量子位
发布时间: 2024-05-28 12:29
发布地: 北京
原文链接: http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247730904&idx=4&sn=03db9d470a5b4d417dc3fca78d8c5866&chksm=e8dff1aadfa878bc5351219b6f2477ca8e2fcaea44ba2c65c141c87de006a5766eb5a6008143#rd

封面图链接: https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtD0q6TVwOiaSibNANsvia2NtfQXqkWwrUvbgHsE0XW3SGdqic6wjSDiaY8IQ6hiac7AxAJ0zibCfFwTnuncw/300

##### 衡宇 发自 凹非寺  
量子位 | 公众号 QbitAI

北大-兔展联合发起的Sora开源复现计划**Open-Sora-Plan** ，今起可以生成**最长约21秒** 的视频了！

生成的视频水平，如下展示。先看这个长一点的，9.2s：

下面这段人形机器人种花要短一点，是2.7s：

![](https://mmbiz.qpic.cn/mmbiz_gif/YicUhk5aAGtD0q6TVwOiaSibNANsvia2NtfQvvHsorVZTWsTxncZfWCoLBrSBBypC7hiaaC3GIbJlKRFibSgPrBn7gPA/640?wx_fmt=gif&from=appmsg)

当然了，老规矩，这一次的所有数据、代码和模型，继续开源。

目前，Open-Sora-Plan在GitHub上有10.4k颗星星，大家**可以选择去抱抱脸上激情试玩** 。

该说不说，版本迭代速度还挺快——上个月，Open-Sora-Plan就在开源社区上新过一波。

当时能支持单镜头16秒的视频生成，分辨率最高720p，能满足的生成需求也比较多样。

这次版本更新，背后主要是两个方面有了进步：

  * **采用了更高质量视觉数据与caption**

  * **优化了CausalVideoVAE的结构**

团队还表示，Open-Sora-Plan已经**支持使用国产AI计算系统** （华为昇腾，期待更多国产算力芯片）**进行完整的训练和推理** 。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtD0q6TVwOiaSibNANsvia2NtfQJZZ8RIjkuiby87CYXP8UQhJjmslgyNdsdvYbQxPHyXBgDOYDzU2I5FA/640?wx_fmt=png&from=appmsg)

## Open-Sora-Plan v1.1.0展示

此次更新的版本是Open-Sora-Plan v1.1.0。

项目团队对Open-Sora-Plan的现阶段能力进行了三个层面的展示，并注明演示背后是用3k小时视频数据。

首先展示的是**10秒版文生视频（10s×512×512）** 。

这张图的Prompt是，“蓝色时刻圣托里尼岛的鸟瞰图，展示了令人惊叹的建筑”。

![](https://mmbiz.qpic.cn/mmbiz_gif/YicUhk5aAGtD0q6TVwOiaSibNANsvia2NtfQ36ZbE9I24L8BAUZdkmBD6eZcIc8RrsY99HcEJvRQbggthemwPzq2Cw/640?wx_fmt=gif&from=appmsg)

这张图的Prompt是，“摄像机对准一大堆老式电视机，所有电视机都显示不同的画面”。

![](https://mmbiz.qpic.cn/mmbiz_gif/YicUhk5aAGtD0q6TVwOiaSibNANsvia2NtfQLtIVWEKAYLcyibfAlMthONOrWGVHTBI1mM0FCSaIiaxWia5Aw9KeBa52A/640?wx_fmt=gif&from=appmsg)

其次展示的是**2秒版文生视频（2s×512×512）** 。

给出的效果展示，有经典的小狗子，“一只戴着贝雷帽和黑色高领毛衣的柴犬”。

![](https://mmbiz.qpic.cn/mmbiz_gif/YicUhk5aAGtD0q6TVwOiaSibNANsvia2NtfQlKbTB0lDpnz35CbSib4afK4ZxSaWibl2n4G5yAbMxPajQkPePXYnmfSA/640?wx_fmt=gif&from=appmsg)

还有一幅画，画面上航船前行，波涛拍打：

![](https://mmbiz.qpic.cn/mmbiz_gif/YicUhk5aAGtD0q6TVwOiaSibNANsvia2NtfQwa1hbIKncrUJxE5OVicef0lnZzLDk6MkD4JEtK2cNic2DPrcYicXfRAbQ/640?wx_fmt=gif&from=appmsg)

团队展示的第三类，是用Open-Sora-Plan v1.1.0进行**视频编辑** （2s×512×512）。

据了解，这部分内容采用的是联合团队刚提出来的ReVideo模型。

不论是小猫戴墨镜：

![](https://mmbiz.qpic.cn/mmbiz_gif/YicUhk5aAGtD0q6TVwOiaSibNANsvia2NtfQF17DEYrIehPpU08T3DhJypMNHLib5FS0Byreruic3eLHqUd4rG3KjeibQ/640?wx_fmt=gif&from=appmsg)

还是天空飘气球：

![](https://mmbiz.qpic.cn/mmbiz_gif/YicUhk5aAGtD0q6TVwOiaSibNANsvia2NtfQzz9tQSkQeVGeKiadJOUH5H3cc4wAZfxxnzy9lDUNjkacTTcDNaJBUxg/640?wx_fmt=gif&from=appmsg)

在画面连续性和角色一致性方面都表现得还算不错。

当然，团队承认“但我们仍然离Sora有一段距离”，同时给出了失败案例展示。

例如，团队对比了4倍时间和2倍时间下采样的重建视频，发现视频在重建细粒度特征时，画面都会发生抖动。

这表明减少时间下采样并不能完全解决抖动问题。

并且用v1.1.0生成的雪地里的小狗，视频中的小狗头出现了Semantic distortion的问题，似乎模型不能很好的判断哪个头是哪个狗的。

这个问题其实在OpenAI的Sora的早期基座模型也会出现……

因此Open-Sora-Plan的团队成员认为，**也许可以通过扩大模型和数据量来解决问题，达到更好的效果。**

团队还提到，视频生成与图片生成最大的不同，在于其动态性，即物体在连续的镜头中发生一系列动态变化。

然而v1.1.0生成的视频仍然存在许多有限动态的视频。

团队通过翻看大量的训练视频发现，这些素材网爬取的视频虽然画面质量很好，然而充斥着一些无意义的特写镜头；而这些特写镜头往往变化幅度很小，甚至处于静止状态。

同时，团队还发现negative prompt可以显著提高视频质量——这意味着也许需要在训练数据中加入更多先验知识。‍

![](https://mmbiz.qpic.cn/mmbiz_gif/YicUhk5aAGtD0q6TVwOiaSibNANsvia2NtfQogRlM9asFhiaMsGgR56nIeyMu4Ne4hhNZCPYZgjViaXp4YQvwGXaXBfA/640?wx_fmt=gif&from=appmsg)

###### **△** without negative prompt生成的小狗视频

除了对方给出的展示，目前大家都可以在Hugging Face上试玩。

需要注意啦，由于视频生成可能需要150个左右的步骤才能产生良好的结果，试玩时生成每个视频大约需要4-5mins。

## 背后技术

整体框架上，Open-Sora-Plan由三部分组成：

  * Video VAE

  * Denoising Diffusion Transformer（去噪扩散型Transformer）

  * Condition Encoder（条件编码器）

这和Sora技术报告的内容基本差不多。

此次更新的Open-Sora-Plan v1.1.0是一个基于Transformer的文本到视频模型，经过T5文本嵌入的训练。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtD0q6TVwOiaSibNANsvia2NtfQSm8MtzFy1RG0NIf2BPTewzElicniaFEmfqZCtSmJunm8SOibRJamiaV6Kw/640?wx_fmt=png&from=appmsg)

与之前的工作类似，整个训练过程采用多阶段的级联的训练方法，分三个阶段。

其中，**第二阶段采用了华为昇腾算力进行训练，该阶段的训练、推理完全由国产芯片支持** 。

目前，仍然在训练和不断观察第三阶段的模型——增加帧数到513帧，大约是24FPS的21秒的视频。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtD0q6TVwOiaSibNANsvia2NtfQZVJ36Wu3icKKvicNfCHRPzg5OW8S83J8iaEzCUGGMkXwic04knn4iaEQEyA/640?wx_fmt=png&from=appmsg)

相比上个月发布的前作Open-Sora-Plan v1.0.0，最新版本主要**2个方面的优化** 。

一是优化了CausalVideoVAE的结构，二是采用了更高质量的视觉数据与captions。

### \- 优化CausalVideoVAE的结构

**优化CausalVideoVAE的结构** ，让Open-Sora-Plan v1.1.0拥有比前作更强的性能、更高的推理效率。

来看过程：

#### 模型结构

随着生成视频帧数不断增加，CausalVideoVAE的encoder开销逐渐增加；当训练257帧时，80G的显存不足以让VAE encode视频。

因此，团队减少CausalConv3D的数量，只保留encoder的最后两个stage的CausalConv3D。

它能够几乎保持原有的性能的情况下大幅度降低开销。

注意，这里只修改encoder，decoder的仍然保留所有的CausalConv3D，因为训练Diffusion Model不需要decoder。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtD0q6TVwOiaSibNANsvia2NtfQDCNsg8s3JvPFxFDU3pFEF74Sicjd70E5Mv9JlXaYc6hOwZ0h6oHicysg/640?wx_fmt=png&from=appmsg)

#### Temoral Module

而在v1.0.0，Open-Sora-Plan的temporal
module只有一个TimeAvgPool，AvgPool会导致视频中的高频信息（如细节和边缘）丢失。

为了解决这个问题，团队在v1.1.0中改进该模块，引入了卷积并增加了可学习的权重，以期望不同分支能够解耦不同特征。

当忽略CasualConv3D时，视频将会被重建得非常模糊；同样的，当忽略TemporalAvgPool，视频会变得非常锐利。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtD0q6TVwOiaSibNANsvia2NtfQibP2MhoGjulIsQltSXhV3hJP8nxuX7ic8g4XkTJXBvk5jzAao5LNOnicQ/640?wx_fmt=png&from=appmsg)

#### 训练细节

同时，和v1.0.0一样，团队从Latent Diffusion的VAE初始化，采用tail initialization。

对于CasualVideoVAE，研究人员在第一阶段训练100k steps with the video shape of 9×256×256。

进一步，研究人员将9帧提高到25帧，发现增加视频帧数还能显著提高模型性能。

需要特别澄清的是，第一阶段和第二阶段团队开启mixed factor，在训练结束时a(sigmoid(mixed
factor))的值为0.88，这意味着模型倾向于保留低频信息。

研究人员在第三阶段将mixed factor初始化为0.5（sigmoid(0.5)=0.6225），最终模型能力得到进一步提升。

#### 损失函数

研究人员发现GAN Loss能够保留高频信息和缓解网格效应。

同时还发现将2D GAN改成3D GAN能有进一步提升。

#### Inference Tricks

在v1.0.0中，团队采用spatial tiled convolution，它能够以几乎恒定的内存推理任意分辨率的视频。

然而随着帧数变多，VAE encoder的开销不断增加。

因此新版本引入一个方法叫做**temporal rollback tiled convolution**
，它是专门为了CausalVideoVAE而设计的一种tiled方法。

具体来说，除了第一个窗口以外的窗口都将抛弃第一帧，因为窗口内的第一帧被看作图片，然而其余帧都应该被当作视频帧。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtD0q6TVwOiaSibNANsvia2NtfQcd1wpFvXMlpwGvHCDLQ34IE3mmREk2bpkAB8dWkA3MfZiapPEhtc9rQ/640?wx_fmt=png&from=appmsg)

### \- 采用更高质量的视觉数据与caption

接下来介绍第二个优化部分，即Open-Sora-Plan v1.1.0**采用了更高质量的视觉数据与caption**
，这使得模型对世界运行规律有了更好的理解。

由于Open-Sora-Plan支持图片视频联合训练，因此数据收集分为图片和视频2个部分，且图片数据集和视频数据集是两个独立的数据集。

团队注明，大概花费了32×240个H100 hours生成image and video captions——这些也全部开源。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtD0q6TVwOiaSibNANsvia2NtfQWPbd5Oq5MUvEMcAXfiaicKzJdVibGrs4Py8xqjwO7jRXA3UFCxHmiaGyuQ/640?wx_fmt=png&from=appmsg)

#### 图片收集管道

研究人员从Pixart-Alpha获取了11M个图像文本对，他们的caption由LLaVA生成。

团队还注意到了高质量的OCR数据集Anytext-3M，这个数据集每一个图片都配对了相对应的OCR字符。但这些caption不足以描述整个图片。因此，团队采用InternVL-1.5进行补充描述。

由于T5只支持英文，所以研究人员筛选了英文数据参与训练，这约有完整数据的一半。

另外还从Laion-5B中筛选高质量图片以提高生成人类的质量，筛选规则主要包括：高分辨率、高美学分数、无水印的包含人的图片。

#### 视频收集管道

在v1.0.0中，团队对视频采样1帧来生成caption。

然而随着视频时长增加，一帧图片无法描述整个视频的内容，也无法描述时序上的镜头移动。

因此现在采用video captioner对整个video
clip生成caption——具体地，采用ShareGPT4Video，它能够很好的覆盖时间信息并且描述整个视频内容。

值得注意的是，v1.1.0的视频数据集大约有3k小时，而v1.0.0版本仅有0.3k小时。

与之前一样，团队开源所有的文本注释和视频（均为CC0协议）。

## One More Thing

最后，Open-Sora-Plan表示，接下来的工作主要围绕两个方面进行。

**一是数据缩放** ，重点关注数据来源和数据体量。

**二是模型设计** ，主要会对CasualVideoVAE和扩散模型下手。

不变的是，无论如何更迭，所有数据、代码和模型都会继续开源。

![](https://mmbiz.qpic.cn/mmbiz_gif/YicUhk5aAGtD0q6TVwOiaSibNANsvia2NtfQmQ0NzIV4j1a7efHtxfOVZVHrRR2g1icCrWpDKZ3Cbtb7ib9Vf5Oibj7UA/640?wx_fmt=gif&from=appmsg)

有上抱抱脸手动体验了的朋友们，欢迎在评论区分享试玩感受呀～

GitHub：

https://github.com/PKU-YuanGroup/Open-Sora-Plan

抱抱脸：

https://huggingface.co/spaces/LanguageBind/Open-Sora-Plan-v1.1.0

ReVideo模型：

https://github.com/MC-E/ReVideo?tab=readme-ov-file

— **完** —

**量子位年度AI主题策划** 正在征集中！

欢迎投稿专题 **一千零一个AI应****用** ，**365行AI落地方案**

或与我们分享你在**寻找的AI产品** ，或发现的**AI新动向**

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDpTavEwUl8aOlFLGHaPnaKXJcMUeJtGXVLliac6P6XxYHIKhnz0NPUgVvlrXAvJC33ibh8aYDdyudA/640?wx_fmt=png&from=appmsg)

  

**点这里 👇关注我，记得标星哦～**

**一键三连「分享」、「点赞」和「在看」**

**科技前沿进展日日相见 ~**

![](https://mmbiz.qpic.cn/mmbiz_svg/g9RQicMD01M0tYoRQT2cMQRmPS5ZDyrrfzeksiay90KaDzlGBH61icqHxmgFKfvfXtVuwTHV740CDLAaXU1LIfZyoJEpYKcRIiaE/640?wx_fmt=svg)

