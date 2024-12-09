# CVPR‘24：与任务无关的多模态数据也能提升Transformer性能｜港中文&腾讯

文章作者: 量子位
发布时间: 2024-05-04 10:47
发布地: 内蒙古
原文链接: http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247727674&idx=3&sn=963e4325b19ba5ae0fa81355ef16cfb0&chksm=e8dfcd48dfa8445e8df94660a931d807eae016f408573d87ea22dab45e02b00a0f9b657cf877#rd

封面图链接: https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtCdhVGADQySQ6un6RWSNaHye0GWZm4yOicmZO4icsgOEFNYX4xja6SUYWZM2HNEeqgBNrRDwvpiasVTw/300

##### Yiyuan 投稿  
量子位 | 公众号 QbitAI

万万没想到，**与任务无直接关联的多模态数据也能提升Transformer模型性能** 。

比如训练一个图像分类模型，除了标注好类别的图像数据集，增加视频、音频、点云等模态数据，也能显著提升模型在图像分类上的性能。

这样一来，在AI训练阶段就可以减少与特定任务直接相关的标注数据需求，可以节省大量成本，或在数据有限的任务上提供新解决思路。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCdhVGADQySQ6un6RWSNaHylnNXpDrnBibVALBpOMwO9MyYOffWTfQREDSUQH3B4bkuliaAIg0aBFog/640?wx_fmt=png&from=appmsg)

这个神奇的发现来自**港中文MMLab和腾讯AI Lab** 的合作研究，相关论文已被CVPR 2024接收，引起广泛关注。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCdhVGADQySQ6un6RWSNaHyXW74iaJZYq3SDicvZLVQG5G2RVFYanAD6riaZOjcwTHhLt3jQVsdLLGkA/640?wx_fmt=png&from=appmsg)

## 从无关数据中学习有用知识

具体来说，团队提出了一种称为**多模态通路** （Multimodal Pathway）的新框架。  

该框架允许Transformer模型在处理特定模态的数据时，同时利用其他模态中的无关数据进行训练，从而在不增加额外推理成本的前提下显著提升模型性能。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCdhVGADQySQ6un6RWSNaHyic5N2TeRZ64Dahw404r9vsrKibICUkybTpMBJTkl2lVJ8nBqWhMjzTlw/640?wx_fmt=png&from=appmsg)

多模态通路的核心技术是**跨模态重参数化** （Cross-Modal Re-parameterization）*。

这一技术的创新之处在于，它通过结构上的智能重组，使得模型能够在保持原有计算成本的同时，增加从其他模态学习的能力。

对于已经被广泛运用到多模态特征提取的Vision Transformer，团队关心的是这些神经网络中的主要线性层。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCdhVGADQySQ6un6RWSNaHyMB7XstKc9MvFokrBtYgAWWKhZQiasknqsOVnfh5VdJcPNficANGeFKJw/640?wx_fmt=png&from=appmsg)

具体来说，这一技术在模型的每一个线性层中引入了辅助模态的权重，这些权重通过可学习的参数进行调节，从而在不增加推理时间的情况下，实现模态间的知识迁移。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCdhVGADQySQ6un6RWSNaHym9vtonegojwIxaM4VorRTiacR2REypsxHSfbJicibASPzZoly2To9d4jg/640?wx_fmt=png&from=appmsg)

如图所示，比如有不同模态的两个线性层**FC和FC’** ，
那么跨模态结构重参数化就是要通过构建一个运算完全等价的线性层来承载两个模态的运算，在这里直接将来自不同模态的两部分权重 **（W和W’）**
做线性组合**（W+λ W’）**来平衡两个模态的权重对于目标模态的贡献。

## 实验结果：跨模态增益挖掘Transformer潜力

在论文中，研究团队详细介绍了他们的实验设计和结果。

在图像识别、点云处理、视频理解和音频分析等多个任务上应用了多模态通路技术，观察到**多模态通路****能够在12种不同的模态相互帮助的关系中实现一致的性能提升**
。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCdhVGADQySQ6un6RWSNaHyg2Ug01sZxBVUtE2CflQxLztJSJhXu8ub5CXJIxo9BPfy4lWaDnKJkw/640?wx_fmt=png&from=appmsg)  
  

例如，在ImageNet图像识别任务中，结合了点云数据的多模态通路Transformer模型，比传统的Transformer模型在识别准确率上提高了0.7%。

与MAE预训练方法的各种改进相比，该方法无需高昂的计算成本来预训练1600
Epoch，而是直接在下游任务中微调，就能显著地提升模型性能。这充分展示了多模态学习在处理大规模复杂数据集时的强大潜力。

研究人员还发现，**跨模态知识迁移的效果不仅与模型参数规模有关，还可能与层次表示** （Hierarchical
Representation）**能力密切相关** 。也就是越擅长学习层次化的抽象表示的模型，迁移效果就越好。

更值得注意的是，该方法有效地证明了即使毫不相关的多模态数据之间，仍能存在着明显的多模态增益效果，这充分说明我们现在对多模态学习的理解与认知还有很大的提升空间。

![](https://mmbiz.qpic.cn/mmbiz_gif/YicUhk5aAGtCdhVGADQySQ6un6RWSNaHycqG89wdsB46cED2nCR7ypPXJLuUXu7SaicgseloFrGsQeSSTpLHSPWw/640?wx_fmt=gif&from=appmsg)

总的来说，这项研究不仅能够启发多模态学习在学术领域的发展，也为工业界提供了新的思路。通过利用现有的海量数据资源，即使这些数据与当前任务不直接相关，也能够为AI模型的训练带来积极的影响。

这种方法为数据资源有限或难以标注的领域提供了新的解决方案，特别是在自动驾驶、医疗影像分析、自然语言处理等技术要求极高的领域，多模态通路技术的应用前景广阔。

此外，这一研究还揭示了AI跨模态学习的新机制，推动了学界对于不同数据模态间交互和协同处理的深入理解。研究团队表示，未来他们将探索将多模态通路技术应用于卷积神经网络（CNN）和其他跨架构的AI系统，以进一步挖掘这一技术的潜力。

论文地址：https://arxiv.org/abs/2401.14405  
项目网页：https://ailab-cvc.github.io/M2PT/  
开源代码：https://github.com/AILab-CVC/M2PT  
讲解视频：https://www.bilibili.com/video/BV1Sm41127eW/

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

