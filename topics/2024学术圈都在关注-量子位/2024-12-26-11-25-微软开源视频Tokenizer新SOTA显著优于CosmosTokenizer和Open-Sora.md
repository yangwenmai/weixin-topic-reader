# 微软开源视频Tokenizer新SOTA！显著优于Cosmos Tokenizer和Open-Sora

文章作者: 量子位
发布时间: 2024-12-26 11:25
发布地: 北京
原文链接: http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247769299&idx=4&sn=94e488e0aa6e655ff82dafd0b49de6e1&chksm=e8dc6ba1dfabe2b7747161d27686a29199d55c9f226d57813be577ba333e60f07d66b64d633d#rd

封面图链接: https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtB4L2XuuY1kF3FpY17wzSWLeicHjVibDuOlDoDzMbMZ2TiczpSMbz1QWFxYlEZKcUULhNIlQzUEEsdibg/300

##### VidTok团队 投稿  
量子位 | 公众号 QbitAI

Sora、Genie等模型会都用到的Tokenizer，微软下手了——

开源了一套全能的Video Tokenizer，名为**VidTok** 。

Sora等视频生成模型工作中，都会利用Tokenizer将原始的高维视频数据（如图像和视频帧）转换为更为紧凑的视觉Token，再以视觉Token为目标训练生成模型。

而最新的VidTok，**在连续和离散、不同压缩率等多种设定下** ，各项指标均显著优于SOTA模型。

以下是涵盖PSNR、SSIM、FVD、LPIPS指标的性能比较雷达图，面积越大表示性能越好。

从图中可以看出对于离散Tokenizer，VidTok显著优于英伟达Cosmos Tokenizer；对于连续Tokenizer，VidTok也比Open-
Sora、CogVideoX有更高的性能。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtB4L2XuuY1kF3FpY17wzSWLsibPlTGZEcYqQKNibEe2jtLRTbnDqXo5TxCmyx2ygErD5CQnjIMdsP1Q/640?wx_fmt=png&from=appmsg)

这项研究由来自微软亚研院、上海交通大学、北京大学的研究人员共同完成。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtB4L2XuuY1kF3FpY17wzSWLcG9one8J7Cw0JmUcX0G65HtyLqXUJxGia0OqQ9K8pXWIATtNVfn6Emg/640?wx_fmt=png&from=appmsg)

目前，VidTok代码不仅开源了，还支持用户在自定义数据集上的微调，为研究者和开发者提供了一个高性能、易用的工具平台。

## 性能全面领先，适用各种场景

近年来，视频生成以及基于此的世界模型已经成为人工智能领域的热门研究方向，这两者的核心在于对视频内容的高效建模。

视频中蕴含了丰富的视觉信息，不仅能够提供真实的视觉体验，更能作为具身场景中模型理解世界的中间媒介。

然而，由于视频像素级表示信息高度冗余，如何通过Tokenizer对视频数据进行高效压缩和表示成为关键课题。

当下很多工作如Sora，Genie等都会通过Tokenizer将原始的高维视频数据（如图像和视频帧）转换为更为紧凑的视觉Token，再以视觉Token为目标训练生成模型。

可以说，视觉Token的表示能力对于最终的效果至关重要，甚至决定了模型能力的上限。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtB4L2XuuY1kF3FpY17wzSWLnqWPBMgKFNYkYLWzWpegSswvreVYk7Es7Ogn8m9A7pGFBdhjKN4IRQ/640?wx_fmt=png&from=appmsg)

Tokenizer的主要作用是将高维的原始数据转换为隐空间中高效的压缩表示，使得信息的生成和处理可以在该隐空间中进行。上图展示了一个视频的Token化过程，通过转换为Token建模，能够有效降低模型训练和推理时的计算需求。

根据不同的使用需求，视频Tokenizer通常有如下分类：

  * **连续型和离****散型。** 根据隐空间的数值分布，Tokenizer可以分为连续型和离散型，分别适用于从连续分布中采样的模型（如扩散模型等）和从离散分布中采样的模型（如语言模型等）。

  * **因果型和非因果型。** 因果结构使得模型只依赖历史帧来对当前帧进行Tokenization，这与真实世界系统的因果性质保持一致。非因果模型则可以同时根据历史帧和未来帧对当前帧进行Tokenization，通常具有更优的重建质量。

  * **不同的****压缩率模型。** Sora等众多工作采用了如4x8x8的视频压缩率（时间压缩4倍、空间压缩8倍），实现更高的视频压缩率而保持高质量的视频重建是目前的研究趋势。

目前业界领先的视频模型多为闭源状态，而**开源的视频Tokenizer大多受限于单一的模型设定或欠佳的重建质量** ，导致可用性较差。

由此，来自微软亚研院、上海交通大学和北京大学的研究人员最近正式发布了开源视频Tokenizer——VidTok。

在测试中，VidTok性能全面领先，适用各种场景。

如下表所示，VidTok**支持多样化的隐空间且具有灵活的压缩率** ，同时**支持因果和非因果模型** ，以适应不同的使用需求。

  * 对于连续型Tokenizer，支持不同的视频压缩率、不同的隐空间通道数，同时支持因果和非因果模型。

  * 对于离散型Tokenizer，支持不同的视频压缩率、不同的码本大小，同时支持因果和非因果模型。

更多模型在持续更新中。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtB4L2XuuY1kF3FpY17wzSWLEZaSA8L0byTeZIuU5UEIYq2ZDdXCyJdF5E2Lbk0Jfm4OCqZB7d1N8w/640?wx_fmt=png&from=appmsg)

为了全面评估VidTok在各个设定下的重建性能，作者将VidTok与最先进的连续和离散视频Tokenizer分别进行了对齐设定下的比较。所有模型均为4x8x8倍视频压缩率的因果模型，主要包含以下三种设定：

  * **VidTok-FSQ：** 离散型，码本大小各异。基线方法包括MAGVIT-v2，OmniTokenizer，Cosmos-DV等。

  * **VidTok-KL-4chn：** 连续型，隐空间通道数为4。基线方法包括CV-VAE，Open-Sora-v1.2，Open-Sora-Plan-v1.2等。

  * **VidTok-KL-16chn：** 连续型，隐空间通道数为16。基线方法包括CogVideoX，Cosmos-CV等。

定量实验结果表明，VidTok在上述三种设定下均达到了SOTA性能，在常见的视频质量评估指标PSNR、SSIM、FVD、LPIPS上具有全面的优势。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtB4L2XuuY1kF3FpY17wzSWLqcVUFvMkgFwqTMkvz2A8MpibgvLVkoM0aq6xZVrFQ8zJGPdibA1RSNrw/640?wx_fmt=png&from=appmsg)

与现有的离散Tokenizer相比，VidTok即使在使用更小的码本大小时（例如32,768），也展现出了更优的重建性能。

在连续Tokenizer的设定下，无论隐空间通道数是4还是16，VidTok在所有评估指标上相比基线方法均取得了全面的提升。值得注意的是，这些提升是在没有模型大小优势的情况下达成的。

除此之外，团队还进行了定性分析。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtB4L2XuuY1kF3FpY17wzSWL03bRKLNjCfNlltntxspSMBBLO1QEj7OfuYSLiciaJ9SUClgK1cmssS1g/640?wx_fmt=png&from=appmsg)

上图中展示了以上三种设定下的与基线方法的对比结果。

从视频帧的重建质量可以看出，与现有的方法相比，VidTok在各种模型设定下，均展现出了最优的重建细节保真度和主观视觉质量。证明了VidTok作为多功能视频Tokenizer的有效性。

所以VidTok是如何做到的？

## VidTok的技术亮点解析

相对于现有的视频Tokenizer，VidTok在模型架构、量化技术、训练策略上分别做了创新。

**高效的混合模型架构设计**

VidTok采用经典的3D编码器-解码器结构，同时创新性地结合了3D、2D和1D卷积，有效地解耦空间和时间采样。

在现有研究中普遍认为，尽管计算成本较高，完全的3D架构提供了更优的重建质量。然而，VidTok发现将部分3D卷积替换为2D和1D卷积的组合，可以有效地解耦空间和时间采样，在降低计算需求的同时，保持了高水平的重建质量。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtB4L2XuuY1kF3FpY17wzSWL23cKPpv7zba4cQpK41ic31Hy0D4FpGumeCr5yaG3zFP9pVYgDicibvFFg/640?wx_fmt=png&from=appmsg)

详细的网络架构如上图所示。VidTok分别处理空间采样和时间采样模块，并在时间采样模块中引入了AlphaBlender操作符。其余组件，包括输入/输出层和瓶颈层，则利用3D卷积来促进信息融合。此外，整个架构中引入了层归一化以增强稳定性和性能。实验证明该架构在重建质量和计算量之间取得了平衡。

**先进的量化技术**

VidTok引入了有限标量量化（FSQ）技术，无需显式学习码本，显著提高了模型的训练稳定性和重建性能。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtB4L2XuuY1kF3FpY17wzSWLcq2yDBOFRkfkiaOf5X1C3wI5WOPFsdWGcpgIqLiaAO28YFyVxdnA0gRw/640?wx_fmt=png&from=appmsg)

有限标量量化（FSQ）由「Finite scalar quantization: Vq-vae made
simple」提出，其核心原理是，在隐空间表征中，每个标量条目通过四舍五入独立量化到最近的预定义标量值。

与传统VQ相比，FSQ无需学习显式的码本，从而提高了训练的稳定性。实验表明，FSQ在码本利用率、重建质量和训练稳定性方面具有显著优势，作为一种先进的量化技术，有效提升了离散Tokenizer的性能。

**增强的训练策略**

VidTok采用分阶段训练策略，训练时间减少了50%，而重建质量不受影响。

视频Tokenizer的训练通常是计算密集的，要求大量计算资源（例如对于256x256分辨率的视频需要3,072GPU小时的训练时长）。这就需要开发有效的策略来降低计算成本，同时保持模型性能。

VidTok采用一种两阶段训练方法来应对这一挑战：首先在低分辨率视频上对完整模型进行预训练，然后仅在高分辨率视频上微调解码器。这种训练策略显著降低了计算成本——训练时间减少了一半（从3,072GPU小时降至1,536GPU
小时），而保持重建视频质量不变。

该两阶段训练的另一优势是，由于第二阶段只会微调解码器，因此模型可以快速适应到新的领域数据中，而不会影响隐空间数据分布。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtB4L2XuuY1kF3FpY17wzSWL9fqfPdVy1OXKAaPic0hibEibB1GVtYia9zjtJrkDoic34HGhgr8YlTMa3ww/640?wx_fmt=png&from=appmsg)

此外，由于视频Tokenizer旨在建模输入视频的运动动态，因此在模型中有效表示这些动态至关重要。VidTok使用较低帧率的数据进行训练，显著增强了模型捕捉和表示运动动态的能力，获得了更好的重建质量。

VidTok的开源为视频生成、世界模型领域提供了新的工具，特别是在当前业内许多领先模型仍未开源的背景下。

团队表示，VidTok支持后续微调也为其他应用提供了更广阔的使用空间，研究者可轻松将VidTok应用于特定领域数据集，为目标场景优化性能。

更多细节内容感兴趣的童鞋可参阅原论文。

论文地址：https://arxiv.org/abs/2412.13061  
项目地址：https://github.com/microsoft/vidtok

— **完** —

**点这里 👇关注我，记得标星哦～**

**一键三连「分享」、「点赞」和「在看」**

**科技前沿进展日日相见 ~**

![](https://mmbiz.qpic.cn/mmbiz_svg/g9RQicMD01M0tYoRQT2cMQRmPS5ZDyrrfzeksiay90KaDzlGBH61icqHxmgFKfvfXtVuwTHV740CDLAaXU1LIfZyoJEpYKcRIiaE/640?wx_fmt=svg)

