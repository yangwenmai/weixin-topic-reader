# AI一键解析九大生物医学成像模式，用户只需文字prompt交互，微软UW等新研究登Nature Methods

文章作者: 量子位
发布时间: 2024-11-18 20:49
发布地: 北京
原文链接: http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247758947&idx=5&sn=b043fb2a17be0dfe1449950846eb3577&chksm=e8dc4311dfabca07e6db8dd54266442f3c4e374f62d23c5e0219ea9c78992b4853d91ced2a54#rd

封面图链接: https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtA5dFQ8hqVWibsvZ4YI9UOVrxstNrib471UdIyIbiblTLaVsibuBgibTMVe6k85yUufoorHicoVP8c7qoow/300

##### BiomedParse团队 投稿  
量子位 | 公众号 QbitAI

用AI大模型一键解析MRI、CT和病理学等**九大生物医学成像模式** 。

不仅复杂、不规则形状对象能高精度识别：

![](https://mmbiz.qpic.cn/mmbiz_gif/YicUhk5aAGtA5dFQ8hqVWibsvZ4YI9UOVrrn7z4X5UALF8nNtzXBjmVsx7LDOOylxC4aOgvCKhvU29jykIFBmN2g/640?wx_fmt=gif&from=appmsg)

而且通过对象识别阈值建模，模型能够检测无效的提示请求，并在图像中不存在指定对象时**拒绝分割** 。

用户更是无需手动进行标注或边界框操作——

只需通过简单的临床**语言提示** 指定目标对象，例如“肿瘤边界”或“免疫细胞”，便能让AI准确识别、检测并分割图像中的相关区域。

![](https://mmbiz.qpic.cn/mmbiz_gif/YicUhk5aAGtA5dFQ8hqVWibsvZ4YI9UOVrDZfALTxnbH4FT0a1F6bzPD9w2CLdU7SOsAZQFiaQPFC8sOes08uS5Aw/640?wx_fmt=gif&from=appmsg)

还可**一次性同时分割和标记** 所有感兴趣的生物医学对象：

![](https://mmbiz.qpic.cn/mmbiz_gif/YicUhk5aAGtA5dFQ8hqVWibsvZ4YI9UOVrzQNlGFhjMjs3ibackZmzlcUKqZhNoktu1W5hXYU22c73zuMMmwCYnTQ/640?wx_fmt=gif&from=appmsg)

这就是来自微软、华盛顿大学等的研究团队最新发布的基础模型**BiomedParse** ，已登****Nature Methods。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAYicDNUomVkrAG8BQ1x0SXqMk6jIrRQ1OsFfXibwqe3oeLXesv7UVztAPOPbtFKxZRv6E8blvic7ScA/640?wx_fmt=png&from=appmsg)

医学图像的成像模式差异巨大（如CT、MRI、病理切片、显微镜图像等），传统上需要**训练专家模型** 进行处理。

而BiomedParse，通过文本驱动图像解析将九种医学成像模式整合于一个统一的模型中，联合预训练处理**对象识别、检测与分割任务** 。

无论是影像级别的器官扫描，还是细胞级别的显微镜图像，BiomedParse都可以直接利用临床术语进行跨模式操作，为科学家和临床医生提供了更统一、更智能的多模式图像解析方案。

在分割不规则形状的生物医学对象方面，BiomedParse相较传统模型表现卓越。通过将图像区域与临床概念关联，**相比手动框选分割精度提升39.6%**
，提高了在关键任务中的可靠性。

目前，研究团队已将BiomedParse开源并提供Apache 2.0许可，相关演示demo和Azure API均已上线。****

## 只需文字提示，精度超越SOTA

为支持BiomedParse的预训练，研究团队利用**GPT-4**
从45个公开的医学图像分割数据集生成了首个覆盖对象识别、检测和分割任务的数据集BiomedParseData。

该数据集包含超过600万个图像、分割标注与文字描述三元组，涵盖**64种主要生物医学对象类型** 及**82个细分类别**
，涉及CT、MRI、病理切片等**九种成像模式** 。

通过GPT-4的自然语言生成能力，研究人员将散落在各种现有数据集中的分割任务用统一的医学概念和语言描述整合起来，让BiomedParse能在更大，更多样的数据中融会贯通。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtA5dFQ8hqVWibsvZ4YI9UOVriamXP9D4Eicvfk5Y1Hx4c99lCalgT5kGhegW8gibC7RDsT3AzzRpiaBdog/640?wx_fmt=png&from=appmsg)

在测试集上，BiomedParse在Dice系数上显著超越了当前最优方法MedSAM和SAM，并且无需对每个对象手动提供边界框提示。

**即使在给MedSAM和SAM提供精准边界框的情况下** ，BiomedParse的纯文本提示分割性能仍能超越5-15个百分点。

此外，BiomedParse的性能还优于SEEM、SegVol、SAT、CellViT、Swin
UNETR等多个模型，尤其在复杂不规则的对象识别上表现突出。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtA5dFQ8hqVWibsvZ4YI9UOVrrOCdpRY5ib32WlpxeAVcqFDblYKpxbuXrD50PHyKicmZNBfZIaR7YQpw/640?wx_fmt=png&from=appmsg)

生物医学图像中的不规则对象一直是传统模型的难题，而BiomedParse通过联合对象识别和检测任务，通过文本理解实现了对对象特定形状的建模。对复杂对象的识别精度远超传统模型，且在多模态数据集中进一步凸显了其优势。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtA5dFQ8hqVWibsvZ4YI9UOVrjr3sibnqRee35nweXPzfIm2C5LIYOyujyzbicNF1TxCyNOL89oO7w8YA/640?wx_fmt=png&from=appmsg)

展望未来，团队表示BiomedParse拥有广阔的发展潜力，可进一步扩展至更多成像模式和对象类型，并与LLaVA-
Med等高级多模态框架集成，支持“对话式”图像分析，实现数据交互式探索。

## 作者简介

论文共同一作及通讯作者均为华人学者，分别来自微软和华盛顿大学。

**赵正德** （Theodore Zhao），论文一作，为该研究作出主要技术贡献。

![](https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtA5dFQ8hqVWibsvZ4YI9UOVrTwUWiaJ3ImjVicsaTsdXOX6VibicTXRbkt1foUr7N1RU0OZV21jwJA4lLg/640?wx_fmt=jpeg&from=appmsg)

微软高级应用科学家，现主要研究方向包括多模态医疗AI模型，图像分割与处理，大模型的安全性分析。

本科毕业于复旦大学物理系，博士毕业于华盛顿大学应用数学系，期间研究希尔伯特-黄变换和分数布朗运动的多尺度特征，以及随机优化在医疗领域的应用。

**顾禹** （Aiden Gu），论文一作。

![](https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtA5dFQ8hqVWibsvZ4YI9UOVrft4jo1XBTw6iaVKPL1m0k3iaCSavvmDJWVZ5sO5WpjLVMXJQzFKKxt4w/640?wx_fmt=jpeg&from=appmsg)

微软高级应用科学家。本科毕业于北京大学微电子与经济专业。

其研究方向专注于医疗健康、生物医学，以及机器人多模态模型。代表性工作包括创建首个医学领域特定的大语言模型PubMedBERT，以及患者旅程模拟模型BiomedJourney。

**潘海峰** （Hoifung Poon），论文通讯作者。

![](https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtAWsfRtwJfDPnq24dgw841GOeUU5LEEyxnj1Bntq61GiaDFztviccJeIvQtnXLBKTdRm5cicWawgFtug/640?wx_fmt=jpeg&from=appmsg)

微软研究院健康未来（Health Futures）General
Manager，华盛顿大学（西雅图）计算机博士。研究方向为生成式AI基础研究以及精准医疗应用。在多个顶级AI会议上获得最佳论文奖，在HuggingFace上发布的生物医学开源大模型总下载量已达数千万次，在《自然》上发表首个全切片数字病理学模型GigaPath，部分研究成果开始在合作的医疗机构和制药公司中转化为应用。

**王晟** （Sheng Wang），论文通讯作者。

![](https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtA5dFQ8hqVWibsvZ4YI9UOVr0C2icIevv1upCQHktib8MMSM6MlYPj9yY5kHwqkl7RpgL5zcDzEDuvug/640?wx_fmt=jpeg&from=appmsg)

华盛顿大学计算机科学与工程系助理教授，微软研究院访问学者。

他专注于人工智能与医学的交叉研究，利用生成式AI解决生物医学问题。其科研成果已在《Nature》《Science》《Nature
Biotechnology》《Nature Methods》和《The Lancet Oncology》等顶级期刊上发表十余篇论文，并被Mayo
Clinic、Chan Zuckerberg Biohub、UW Medicine、Providence等多家知名医疗机构广泛应用。

**Mu Wei** ，论文通讯作者。

![](https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtA5dFQ8hqVWibsvZ4YI9UOVrr6sbNPtZhY83UxDla3lwY8Khw4HAsHVqauWiaUsCSNmT1aTrKkyDNkA/640?wx_fmt=jpeg&from=appmsg)

微软Health and Life Sciences首席应用科学家，拥有十余年医疗与金融领域的AI模型研发与部署经验。

他的团队聚焦于健康领域的多模态AI模型，研究成果涵盖生物医学图像解析、数字病理学基础模型、临床文档结构化的大模型应用以及大模型错误率估计等方向。

感兴趣的童鞋可自行查阅～

论文地址：https://www.nature.com/articles/s41592-024-02499-w  
项目网页：https://microsoft.github.io/BiomedParse/  
代码：https://aka.ms/biomedparse-release  
Azure
API网页：https://ai.azure.com/explore/models/MedImageParse/version/3/registry/azureml?flight=ModelCatalogIndustryFilters&tid=72f988bf-86f1-41af-91ab-2d7cd011db47

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

