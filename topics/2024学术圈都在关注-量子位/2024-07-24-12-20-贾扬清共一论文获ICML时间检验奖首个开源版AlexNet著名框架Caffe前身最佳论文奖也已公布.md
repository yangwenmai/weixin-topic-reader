# 贾扬清共一论文获ICML时间检验奖：首个开源版AlexNet，著名框架Caffe前身，最佳论文奖也已公布

文章作者: 量子位
发布时间: 2024-07-24 12:20
发布地: 北京
原文链接: http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247740300&idx=5&sn=a8696c75ac347f4c49ee4b274af99b6f&chksm=e8df9cfedfa815e8707d8cf72a4f56026bb40688cfb685b3dff50b43ea6dd5a760537453eb2e#rd

封面图链接: https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtDdUavvXOkbD3Df2xmty0PlemQiaj5W6ct7iadcygs1MzQp43vmm6Oic4CFuuXcOcUkzdCUGXGcIL5lg/300

##### 西风 发自 凹非寺  
量子位 | 公众号 QbitAI

ICML 2024时间检验奖出炉，贾扬清共同一作论文获奖！

论文题为“**DeCAF: A Deep Convolutional Activation Feature for Generic Visual
Recognition** ”，是贾扬清及其团队10年前在UC伯克利期间完成的工作。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDdUavvXOkbD3Df2xmty0Plq0CFKnrPZbPLluiaQGTGSibJUk9eoopx119YTDbS5Pd6mPN0Vf9npGog/640?wx_fmt=png&from=appmsg)

ICML官方第一时间发推文表示祝贺，贾扬清回应道“深感荣幸DeCAF获ICML2024时间检验奖，这是人工智能发展惊人的十年”，并把其他作者艾特了个遍。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDdUavvXOkbD3Df2xmty0Pl6yZzobYE9nZUsxF1yhBuNFXjH7XutgJaHuibM43jlrzVj92TXEE2NOQ/640?wx_fmt=png&from=appmsg)

作者之一、现谷歌DeepMind副总裁、Gemini项目联合负责人**Oriol Vinyals** 也开麦表示“非常感谢这个奖（让我感觉自己老了）”：

>
> DeCAF是AlexNet的首个开源版本，我们通过它测试了这个卓越的ImageNet分类器学习到的特征是否能广泛应用于其他视觉任务。事实证明，这个想法在今天仍然与最好的多模态模型非常相关！

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDdUavvXOkbD3Df2xmty0PlSThzdOApapWiaibPWqT2KmSgMRpJSP3YMMeZ1ezlfcWdygrdfLoH5xyA/640?wx_fmt=png&from=appmsg)

两位老搭档也在评论区叙上了旧：

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDdUavvXOkbD3Df2xmty0Plh2QbgYhAuWbibbjtzbxu0Mr6OicPHe1mlQbLq5hEArwY8OTkwJwm8JgQ/640?wx_fmt=png&from=appmsg)

ICML今年是其举办的第41届，投稿量9000+，接受率27.5%。除了时间检验奖，**最佳论文奖也已出炉，Stable Diffusion
3论文等上榜** 。

获得时间检验奖的这篇论文，目前谷歌学术被引6012次：

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDdUavvXOkbD3Df2xmty0PlibibLNSKVRxrnfrJE2xQt4jlLM9MjhyEw1Lcpy4SXvxCCU1FIXiaGeBKQ/640?wx_fmt=png&from=appmsg)

先来看这篇论文都讲了什么。

## 著名框架Caffe的前身

这篇论文提出了一种名为**DeCAF** （Deep Convolutional Activation
Feature）的深度卷积激活特征，用于解决通用视觉识别问题。

主要是探索了在ImageNet等大规模标记数据集上预训练的深度卷积神经网络，其中间层特征是否能够有效迁移到其他视觉任务中，即**transfer
learning的可行性** 。

作者采用了Geoffrey Hinton、Alex Krizhevsky、Ilya Sutskever**** 2012年提出的**AlexNet**
卷积神经网络架构，包含5个卷积层和3个全连接层。在ImageNet数据集上进行预训练后，冻结网络权重。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDdUavvXOkbD3Df2xmty0PlRQadY3ZWCNxFdK47bUiaKkIIHEc3ia2YmRIAwsSu4DiaeCtQR0SIBaoFA/640?wx_fmt=png&from=appmsg)

提取了不同层的激活作为特征，具体包括DeCAF5、DeCAF6和DeCAF7（最后一个隐藏层的激活）。并在新任务上仅训练简单的线性分类器，同时保持DeCAF特征不变。

为了验证这种方法的有效性，作者在多个标准计算机视觉基准测试上进行了实验，包括对象识别（Caltech-101）、域适应（Office数据集）、细粒度识别（Caltech-
UCSD鸟类数据集）和场景识别（SUN-397）。

实验结果显示，DeCAF在所有这些任务上都取得了优秀的表现，常常超越当时的最佳方法。

使用t-SNE算法将高维特征映射到2D空间，展示了DeCAF特征在语义聚类方面优于GIST和LLC等传统特征。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDdUavvXOkbD3Df2xmty0PlZ4S2pgyT4ChAbxuEkDM2CoeJPGXgV2rEbjibm5tKHpibeODu57smnQYg/640?wx_fmt=png&from=appmsg)  
![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDdUavvXOkbD3Df2xmty0PluFqpOoSEzzBJMNZODqpsYjiaicPvib3n4e4IWMARU4TaqibuhR3vHEnupA/640?wx_fmt=png&from=appmsg)

即使在训练样本稀缺的情况下，如单样本学习，DeCAF仍然表现出色。论文还详细分析了网络各层的计算时间分布，发现全连接层占用了大部分计算时间。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDdUavvXOkbD3Df2xmty0Pl8wqwUianI0ibq0nMVbeTMfNh0a7JZtl853wQGYxJVRgxGEklicmdnWTzw/640?wx_fmt=png&from=appmsg)

此外，论文还探讨了dropout等正则化技术的影响，特别是在DeCAF6和DeCAF7层上的应用。

最终作者开源了DeCAF特征提取工具和预训练模型。

有网友看到这篇论文在十年后的今天获奖后，突然反应过来“这是不是Caffe的起源？”

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDdUavvXOkbD3Df2xmty0PlkmXsHx9Ref8YvPbGhTpgVbwqkQbckqaIY2WWUCGaRfyIicX5QbPVXtQ/640?wx_fmt=png&from=appmsg)

贾扬清也做出了回复：

> DeCAF的**训练速度不够快**
> （我们估计训练时间需要超过一个月），因此我们转而使用了Caffe。这就是为什么一个名字中含caffeine（咖啡因）成分为零而另一个有的原因——无论是人还是机器，含caffeine都运行得更快。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDdUavvXOkbD3Df2xmty0PlmMB5dcicqFdYicbIEuaTxHCBKXIUO1yxEJAWqN4MZvY0LbdZMOZZMStQ/640?wx_fmt=png&from=appmsg)

## 最佳论文奖

除时间检验奖，ICML 2024最佳论文奖也出炉了，今年获奖论文共有10篇。

其中包括Stable Diffusion 3论文“**Scaling Rectified Flow Transformers for High-
Resolution Image Synthesis** ”。

Pika联合创始人兼CTO Chenlin Meng参与的“**Discrete Diffusion Modeling by Estimating the
Ratios of the Data Distribution** ”这项工作也获奖了。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDdUavvXOkbD3Df2xmty0PlReEBAt6ibBgNcAMSgVCAzNxCrd5feRIEzTO8qJ35Lj9ibdyNGzHIm27w/640?wx_fmt=png&from=appmsg)  
![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDdUavvXOkbD3Df2xmty0PlwPGnuGZNyP0PpDK2XgwykofX0QxXiaoLWZqh3Gz0PJaZ09eibCZIJ6iaA/640?wx_fmt=png&from=appmsg)  
![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDdUavvXOkbD3Df2xmty0PltPGxgcv16oD5DJleFpP8pdhImmsAEsTgqRLFs8rsgaFYYMr2YdDgwA/640?wx_fmt=png&from=appmsg)  
![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDdUavvXOkbD3Df2xmty0PlicHYOiaxEfEATKLuqfJd5a2Io66sj42GkNXWGjPJbU2K4VBACrI2vgMg/640?wx_fmt=png&from=appmsg)  
![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDdUavvXOkbD3Df2xmty0PlicFRmoRCtZNibIS6kR28BZdiaX7zicvYvpyLw9JX8MGX0ibykvb5KEIRHGg/640?wx_fmt=png&from=appmsg)  
![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDdUavvXOkbD3Df2xmty0PlqkiakjrlNX0ZEIo2ZsE0TzfOH86V8wA4JsRcqzic1xplIB54KW3MZS0A/640?wx_fmt=png&from=appmsg)  
![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDdUavvXOkbD3Df2xmty0Pl7R6PCibDibwzBTZOAOL2FIaPuhLiaqRcsFZ9RUEZS00780sQlvicM9kicSg/640?wx_fmt=png&from=appmsg)  
![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDdUavvXOkbD3Df2xmty0Plicjib5XmwxeNRE6ibflHWp8Hplmf4cLuvicVU8JiazPqviclqu1UB3nibbvdw/640?wx_fmt=png&from=appmsg)  
![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDdUavvXOkbD3Df2xmty0PlD1xePKuHeHAusG0AMMVA0vxeNGjNfv4NGkuaLO8YNSJeQu9Ldw32FQ/640?wx_fmt=png&from=appmsg)  
![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDdUavvXOkbD3Df2xmty0PllkKMumxTbibOEiboia1BkMk4rbdSckVfan553ic1Zb1sbdLo6M1hKbkalw/640?wx_fmt=png&from=appmsg)

参考链接：  
[1]https://icml.cc/virtual/2024/awards_detail  
[2]https://arxiv.org/abs/1310.1531  
[3]https://x.com/jiayq/status/1815653822028738667  
[4]https://x.com/jiayq/status/1815862939569774796

— **完** —

**量子位年度AI主题策划** 正在征集中！

欢迎投稿专题 **一千零一个AI应****用** ，**365行AI落地方案**

或与我们分享你在**寻找的AI产品** ，或发现的**AI新动向**

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDpTavEwUl8aOlFLGHaPnaKXJcMUeJtGXVLliac6P6XxYHIKhnz0NPUgVvlrXAvJC33ibh8aYDdyudA/640?wx_fmt=png&from=appmsg)

  

**点这里 👇关注我，记得标星哦～**

**一键三连「分享」、「点赞」和「在看」**

**科技前沿进展日日相见 ~**

![](https://mmbiz.qpic.cn/mmbiz_svg/g9RQicMD01M0tYoRQT2cMQRmPS5ZDyrrfzeksiay90KaDzlGBH61icqHxmgFKfvfXtVuwTHV740CDLAaXU1LIfZyoJEpYKcRIiaE/640?wx_fmt=svg)

