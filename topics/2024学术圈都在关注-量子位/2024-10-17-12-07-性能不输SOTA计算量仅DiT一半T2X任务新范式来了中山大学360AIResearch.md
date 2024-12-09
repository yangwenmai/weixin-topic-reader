# 性能不输SOTA，计算量仅DiT一半！T2X任务新范式来了 | 中山大学&360 AI Research

文章作者: 量子位
发布时间: 2024-10-17 12:07
发布地: 未知地区
原文链接: http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247753061&idx=5&sn=ac41c3c348ca227ac1a7ba258b254d03&chksm=e8dfaa17dfa82301300e2b320b7927d55c3f49fcbad606fe27d84eb1286ad825480a62183765#rd

封面图链接: https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtArVwYP4jsJAgia7G7bXcasIF14cOgNXnHeAHQPyBic5n6BGKLLKBM71vwrB1jYDY3XShqa4r96cwGQ/300

##### Qihoo-T2X团队 投稿  
量子位 | 公众号 QbitAI

**性能不输SOTA模型，计算开销却更低了——**

中山大学和360 AI Research联合推出**PT-DiT** ，同参数规模下，计算量仅为DiT的51.4%，Lumina-Next的17.5%。

具体来说，PT-DiT基于Proxy
token机制，能用于文生图（Qihoo-T2I）、文生视频（Qihoo-T2V）和文生多视图（Qihoo-T2MV）等多种任务。

（Qihoo-T2X指文本到任意视觉任务）

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtArVwYP4jsJAgia7G7bXcasIhf6RRUpCXm8IAT053pn4Qp5cDlFxjIs1roPsIibickRyYo2yy6gOr7rA/640?wx_fmt=png&from=appmsg)

话不多说，我们直接看几个最终生成效果，文生图be like：

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtArVwYP4jsJAgia7G7bXcasIUZdWSTP5TDEuhdXkRUZWz45Z73C3rIsJgf86Hb6v4UEmwURWt3Dalg/640?wx_fmt=png&from=appmsg)

接下来是今年火热的视频生成，prompt如下：

> Sunset cityscape with spires, buildings, clouds, warm glow, and
> trees.(夕阳下的城市景观，有尖塔、建筑物、云朵、温暖的光芒和树木。)

最后是多视图生成，宝剑、小黄鸭等任意素材均可实现转3D效果。

![](https://mmbiz.qpic.cn/mmbiz_gif/YicUhk5aAGtArVwYP4jsJAgia7G7bXcasIqlb4icc3Pks9SAXfa3LHr3jfdLdLbibaopFarcISLcIS6phVIfdxUdXQ/640?wx_fmt=gif&from=appmsg)

目前该研究已经开放了论文、项目主页和代码仓库，即将开源。

## 研究动机

当前，基于Diffusion Transformer的模型（Sora , Vidu,
Flux等）能够生成高保真图像或视频，并与文本指令具有强一致性，极大促进了视觉生成的进步。

然而，global self-attention关于序列长度的二次复杂度增加了Diffusion
Transformer的计算开销，导致了实际应用时**更长的生成时间和更高的训练成本** 。

这个问题也阻碍了Diffusion Transformer在高质量和长时间视频生成中的应用。

例如，优于2D spatial attention+ 1D temporal attention的**3D full attention**
却由于计算开销的限制而难以进行更高分辨率和更长时间视频生成的探索。

一些视觉理解和识别领域的研究发现，由于视觉信息的稀疏和重复性质，global self-attention具有一定的冗余性。

研究团队通过可视化注意力图发现：

> **同一窗口内的不同token对于空间上距离较远的token的关注程度是相似的，对于空间上相近的token的关注程度是不同的。**

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtArVwYP4jsJAgia7G7bXcasIFjOAiaqibBecCDcrReFYuG2ejJ2jWr5EGI4RYqIEquqlCv2ZaEPNWH7A/640?wx_fmt=png&from=appmsg)

如上图所示，研究团队分析了PixArt-𝓪在分辨率为512x512情况下self-attention中的注意力图。

然后将位于同一个空间窗口token的注意力图组合到一起，如图右侧所示，其中垂直轴表示窗口中的不同token，水平轴表示窗口内token与所有token的关联程度。

很明显，同一窗口内不同token的注意力对于空间上距离较远的token几乎是一致的，即在相同的水平位置，垂直值几乎相同；而空间相邻的token表现出不同的关注。

这表明**计算所有token的注意力是冗余的** ，而对计算空间相邻token的注意力至关重要。

所以，研究团队提出了一种**基于proxy token的稀疏注意力策略** ，从每个窗口采样有限的proxy
token来执行自注意力，从而减少冗余并降低复杂性。

## Qihoo-T2X方法

如下图所示，研究团队提出的PT-DiT引入了proxy token来减少计算global self-
attention所涉及的token数量，高效地建立全局视觉信息的关联。

PT-DiT包含的**两个核心模块** 是：

  * Global Information Interaction Module (GIIM)

  * Texture Complement Module (TCM)

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtArVwYP4jsJAgia7G7bXcasICniaBNDtJn4IMW6eXhkpxI3DPxf6u3XiavVblHY3CPsYwibUYFAaJLvicA/640?wx_fmt=png&from=appmsg)

其中，GIIM使用稀疏proxy
token机制促进所有潜在代码之间的高效交互，而空间相邻token的关联是不可忽略的，特别是对于细节纹理要求高的图像生成任务。

为此研究团队设计了TCM，其通过window attention和shift window attention进一步细化局部细节。

下面将详细介绍这两个部分：

### Global Information Interaction Module

给定一系列latent token，首先根据空间和时间先验（即位于同一个空间窗口）通过计算平均token得到一系列proxy tokens。

每个proxy token代表图像或视频内的一个局部区域的信息，并与其他局部区域中的proxy token通过self-
attention进行交互以建立全局视觉关联。

随后，proxy tokens中蕴含的信息被通过与latent token的cross-attention传播到全部latent
token中，从而实现高效的全局视觉信息交互。

### Texture Complement Module

由于稀疏proxy tokens交互的特点并且缺乏空间邻近token的相互关联，生成模型对于建模细节纹理的能力有限，难以满足生成任务的高质量需求。

为了解决这个问题，研究团队引入了局部window attention，补充模型的细节建模和平滑能力。

不过仅有window attention会导致窗口间token缺乏联系，导致生成图像格子现象明显。

因此，TCM中还引入了shift window attention，缓解局部window attention引起的问题。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtArVwYP4jsJAgia7G7bXcasInf1Cod70kvQ3mJP4YhlHqa8DCpN6tfUDjrVrVZotNrMgIR2a2owmWw/640?wx_fmt=png&from=appmsg)

由于计算window attention涉及的token数量较少，所以模型的计算复杂度并没有大规模增加。

### 压缩比例

对于图像生成任务，研究团队发现在不同分辨率下保持相同数量的窗口对于确保一致的语义层次结构至关重要，这有助于从低分辨率到高分辨率的训练过程。

同时，窗口应该维持较多的数量以防止窗口内的语义信息太过丰富，导致单个token不足以表示局部区域完成全局信息建模。

因此，研究团队将**压缩比（𝑝
𝑓，𝑝ℎ，𝑝𝑤）**设置为(1,2,2)、(1,4,4)、(1,8,8)和(1,16,16)分别在256、512、1024和2048分辨率。

当输入是图像时，𝑓和𝑝𝑓将被设置为1。

对于视频生成任务，研究团队在不同分辨率下均设置**𝑝 𝑓=4**以保持时间压缩一致。

由于帧、高度和宽度维度上的token压缩，PT-DiT可以训练更长视频的生成器。

### 计算复杂度分析

PT-DiT仅使用少量的代表性token注意力，就降低了原始全token自注意力的计算冗余度。

研究团队进一步从理论上分析PT-DiT在计算复杂度方面的优势。

自注意力的计算复杂度为2N2D，计算如下：

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtArVwYP4jsJAgia7G7bXcasIXmW0iaYyufWK2KrRjfiblDZEFiaHCScnUibZ7YDZmBN1euNFibG9miblz2Hw/640?wx_fmt=png&from=appmsg)

其中N表示潜在标记的长度，D表示特征维度。

类似地，GIIM和TCM的计算复杂度计算如下：

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtArVwYP4jsJAgia7G7bXcasIia4vq6yTxpRPtlJw49icboCCQm5iarbHokxsJl9znD8J31LGVGQFJ8BNA/640?wx_fmt=png&from=appmsg)

显然，由于代理标记化策略，PT-DiT具有显著的优势，**尤其是在压缩比（𝑝 𝑓，𝑝ℎ，𝑝𝑤）较大和序列长度（N）较长的情况下。**

当（𝑝𝑓，𝑝ℎ，𝑝𝑤）为(1,2,2)、(1,4,4)、(1,8,8)和(1,16,16)且图像分辨率为256（N=256）、512（N=1024）
、1024（N=4096）和2048（N=16384）时，PT-DiT的计算复杂度仅为全局自注意力的**34.3%、9.7%、4.7%、2.3%。**

此外，PT-DiT对于序列长度较长的视频生成任务提供了更大的好处。

## 实验

作者在**T2I、T2V和T2MV任务上** 进行了定性和定量实验来评估Qihoo-T2X。

#### 定性分析

对于**Text-to-Image** ，如图所示，Qihoo-T2I能够生成与提供的文本提示非常匹配的逼真图像。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtArVwYP4jsJAgia7G7bXcasIK2STbKngVbolRlib68K01HZiatB5G9tV3LicJMdjvYY5rRCCDjFHOeOcg/640?wx_fmt=png&from=appmsg)

对于**Text-to-Video**
，研究人员将Qihoo-T2V与最近发布的开源文本转视频模型（即EasyAnimateV4和CogVideoX）在512分辨率下进行了比较，如图取得了更好的效果。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtArVwYP4jsJAgia7G7bXcasIq6TUQPA8JUxibdvqSoicq0KY8O9L1BpzYHicj93jDVxXX7Mv54R1t9ceQ/640?wx_fmt=png&from=appmsg)

最后，作者进一步探索了PT-DiT在**文本到多视图 (T2MV)** 任务中的有效性。

经过训练的Qihoo-T2MV能够根据提供的文本指令从各个视点生成512x512x24图像，表现出**强空间一致性** 。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtArVwYP4jsJAgia7G7bXcasIGjCncxqDadb8PkxthYguKCRlWBAKDXuCAZJcO4pe15hAeaDocajqqg/640?wx_fmt=png&from=appmsg)

#### 定量分析

研究团队在MS-COCO FID-30K, UCF-101和MSR-VTT等benchmark上定量评估Qihoo-T2I和Qihoo-T2V。

结果显示，Qihoo-T2I和Qihoo-T2V均能实现有竞争力的性能，证明了PT-DiT的有效性。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtArVwYP4jsJAgia7G7bXcasIicg6zdIIVv6py3Yzv6XvqMNE7iaDsut2ibET5xYWm0FfEUFe7lzv1nCow/640?wx_fmt=png&from=appmsg)

#### 计算复杂度分析

如图所示，无论是图像或视频生成任务，在相同参数规模下，PT-DiT相比现有Diffusion Transformer方法，均有大幅度的计算复杂度优势。

同时对比3D full attention建模的EasyanimateV4，其训练显存随着帧数的增加而爆炸增长，而PT-
DiT的显存仅有微弱增长，表明**PT-DiT有潜力完成更长时间的视频生成任务** 。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtArVwYP4jsJAgia7G7bXcasIaSCDxWeW9ogIwbHdCgmbGiav3UqXMWJSf93sHsFiczQtMSv3NnFXvZaQ/640?wx_fmt=png&from=appmsg)  
![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtArVwYP4jsJAgia7G7bXcasIwYoALS4qt4m0ib3sCdcxPHzkYaJSyGVrvoNoVPXcuIpoLCo44gl75IA/640?wx_fmt=png&from=appmsg)

最后的**消融实验** 也验证了PT-DiT中关键设计的合理性。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtArVwYP4jsJAgia7G7bXcasILQR2b2YZ6YjAQAqGgeaYDrsJac5cSIjZf5BJJQ3bctEe1osJnnJ7nw/640?wx_fmt=png&from=appmsg)

更多细节欢迎查阅原论文。

论文地址：  
https://arxiv.org/pdf/2409.04005  
项目主页：  
https://360cvgroup.github.io/Qihoo-T2X  
代码仓库：  
https://github.com/360CVGroup/Qihoo-T2X

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

