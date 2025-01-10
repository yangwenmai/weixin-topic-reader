# 为多模态LLM引入ControlNet理念，开源插件解决灾难性遗忘 | AAAI

文章作者: 量子位
发布时间: 2024-12-17 12:04
发布地: 北京
原文链接: http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247767501&idx=5&sn=1a099a127fd49e35e3cad8b87acc5066&chksm=e8dc62bfdfabeba9f13451478b56a8f83838c741c5140533c647bda2489b6a3044da83fc2ce5#rd

封面图链接: https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtDvJ0KKiaS4vF4qGPgQvZuoibpTSNnDKrXJx0XfsQicF700ILUukz0KZBxcdDIcNfO89prtpF0z4AtTw/300

##### 冷大炜 投稿  
量子位 | 公众号 QbitAI

多模态大模型内嵌语言模型总是出现灾难性遗忘怎么办？

像文生图那样有ControlNet即可解决。

这就是由360人工智能研究院提出的**IAA** 的核心思路。该研究成果已被AAAI接收，并且开源。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDvJ0KKiaS4vF4qGPgQvZuoibCABqZzIl5S367sl8E98DYoJlVrzz9nLfiaexk4iaLcZtpoz1WwXMaWuQ/640?wx_fmt=png&from=appmsg)

IAA工作的思路，就是希望能把多模态理解能力像文生图领域中的ControlNet一样，**作为插件添加到基座的语言模型之上**
，从而实现在完全不影响语言模型原有能力的前提下，实现多模态能力的插件化，并进一步形成一种全新的语言模型生态体系。

## 针对语言模型研究全新插件控制机制

当前的多模态大模型（LMM：Large Multimodal
Model）主流采取的是以LLaVA系列为代表的桥接式结构：**视觉编码器与LLM之间通过模态桥接器projector进行连接实现多模态理解能力** 。

桥接式结构的优点是结构简单，训练成本低（几十万微调数据即可实现基本的图像理解能力），目前主流的LMM模型包括QwenVL、DeepSeekVL、internVL以及研究院自研的360VL（https://github.com/360CVGroup/360VL）等都是采用这种结构。

但桥接式结构一直存在一个难以克服的缺点：**模型多模态能力的提升不可避免地带来原有文本能力的下降** 。

这背后的深层原因是，为了尽可能提升LMM在多模态理解任务上的性能表现，主流模型中内嵌的LLM语言模型参数都要在多模态训练中打开参与学习，这样虽然可以比较容易刷高多模态任务上的指标，但语言模型原有的文本理解能力会因为参与多模态训练而发生灾难性遗忘的问题。

> 这也是为什么当前主流的多模态模型都独立于语言模型之外存在，并冠以-VL进行区分的原因。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDvJ0KKiaS4vF4qGPgQvZuoib0ibXm7jS4zN5GlHRahZXRmXCap4XCxFkT76bhI89iaXVmrYlhwya4b1g/640?wx_fmt=png&from=appmsg)

上图清晰地比较了多模态训练前后，内嵌语言模型在文本任务（MMLU和C-eval）上因为灾难性遗忘的发生而出现的能力下滑情况。

另外从实用的角度来说，当前的多模态模型需要独立于语言模型之外单独部署，意味着应用时需要翻倍的部署成本，从经济的角度来说也亟待新技术的突破。

“IAA工作的灵感来自于我们同时负责的多模态生成方向的研究。”冷大炜博士表示。

“文生图领域有着与语言模型领域完全不同的繁荣生态。在文生图领域中，大家是围绕着一个基座模型，通过接入不同的插件来完成不同的任务，而不是像语言模型领域这样要求一个模型完成所有任务。IAA工作借用了这一思路。”

在IAA的研究中作者发现，**简单地将文生图领域的ControlNet结构复制到语言模型上的表现并不好**
，背后的原因是当前语言模型主流是Transformer堆叠的结构，这与文生图模型中的UNet结构有着很大的差异，为此针对语言模型需要研究全新的插件控制机制。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDvJ0KKiaS4vF4qGPgQvZuoibO6IY6asMGHwfVdnvKZdlW3DnDJbrJtYhLoefqTtA2dkGSl52s4G25w/640?wx_fmt=png&from=appmsg)

在实验比较了一系列不同的结构后，最终形成了v1版的IAA插件网络结构如下：

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDvJ0KKiaS4vF4qGPgQvZuoibR5LMjN9holmeUqLHG6rS4MRxVOmibLhqOdt7NxnAFb9ibY91gmj5vsoA/640?wx_fmt=png&from=appmsg)

与主流的LLaVA结构相比，**IAA在网络设计上保持基座语言模型参数不变，从而避免了灾难性遗忘问题的发生**
；对于多模态知识的学习，则是通过多个新增的插入层进行专门处理。

推理时，IAA网络只需要部署一套模型权重，text-only任务走text-only workflow，而多模态任务则走multimodal
workflow，从而避免了既要部署一套语言模型还要另外部署一套多模态模型的成本难题。

此外，IAA插件结构不仅适用于多模态任务，对于需要在基座模型能力上特别加强的任务，如code、math等任务，一样可以通过插件的方式进行专门增强，实现“基座模型+专业插件”处理专业任务的全新用法和生态。

在通用多模态benchmark上比较了IAA与其它相关工作的表现，验证了IAA在保持模型原有能力的同时，能有效提升其在多模态任务上的表现。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDvJ0KKiaS4vF4qGPgQvZuoibXAcLBaE355EVEOlYDIU5mnLlRz0Jn7j4acAwZfC4zqdssb2CEAickVQ/640?wx_fmt=png&from=appmsg)

## 关于****360人工智能研究院

在360集团All in
AI的大背景下，360人工智能研究院发挥自身的智力优势，承担多模态理解和多模态生成大模型（俗称图生文和文生图）的战略研发任务，并在两个方向上持续发力，陆续研发了360VL多模态大模型，BDM文生图模型，可控布局HiCo模型，以及新一代DiT架构Qihoo-T2X等一系列工作。

近日，研究院在多模态理解方向的工作IAA和在多模态生成方向的工作BDM分别被AI领域的top会议AAAI接收，这两项工作的研发负责人为冷大炜博士。

据悉本届AAAI 2025会议收到近1.3万份投稿，接收3032份工作，接收率仅为23.4%。

Arxiv: https://www.arxiv.org/abs/2408.12902  
Github: https://github.com/360CVGroup/Inner-Adaptor-Architecture

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

  

