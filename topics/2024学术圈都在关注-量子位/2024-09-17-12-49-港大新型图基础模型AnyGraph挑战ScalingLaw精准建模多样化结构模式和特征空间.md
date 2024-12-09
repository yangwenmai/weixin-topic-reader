# 港大新型图基础模型AnyGraph：挑战Scaling Law，精准建模多样化结构模式和特征空间

文章作者: 量子位
发布时间: 2024-09-17 12:49
发布地: 内蒙古
原文链接: http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247749648&idx=3&sn=84fa6880d985cb8edbaed9567c10a205&chksm=e8dfa762dfa82e7484b53f7410433a8894fe029872edf7b820c90a2a924ff2028137312f1dfa#rd

封面图链接: https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtDibGBISthl9lCzfjuYpFUiafFDUG3XRHNibg2srWkA2hz3EXlYyQjt3VxLBkHB8axkEr7luJPsE7MkA/300

##### AnyGraph团队 投稿  
量子位 | 公众号 QbitAI

新型图基础模型来了——

**AnyGraph** ，基于图混合专家（MoE）架构，专门为实现图模型跨场景泛化而生。

通过MoE架构、路由算法、SVD方法和MLP网络等，AnyGraph解决了跨域和域内图异构性问题，并进行了高效跨域模型训练。

能够精准建模**多样化的结构模式和特征空间** 。

![](https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtDibGBISthl9lCzfjuYpFUiaf3ibs1yC8BYPQYElSDSUlGFjknD0zlflHQUhNVy9EstxzRwVKxnYQrmw/640?wx_fmt=jpeg&from=appmsg)

在**38个****不同领域数据集** 上进行实验，AnyGraph在零样本预测、扩展定律、消融实验和效率实验等方面均表现出色。

AnyGraph由来自香港大学的研究人员完成。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDibGBISthl9lCzfjuYpFUiafhBwbmhPMfo05Dhb3vS0GWG8BUt0Ggm4cIcquMSuWklpPI0382gpf2g/640?wx_fmt=png&from=appmsg)

关于AnyGraph的更多细节我们接着往下看。

## AnyGraph长啥样？

随着图结构数据在各个领域的日益普及，对具有出色泛化能力的图学习模型的需求愈发迫切。

现实应用中，图学习模型需有效应对分布偏移并适应新的图领域，但当前的先进模型在真正的泛化性能方面往往表现不足，严重依赖繁重的微调过程，难以适应实际应用中多样的图结构和分布。

受成功的基础模型在理解视觉和语言数据方面的启发，通用的图基础模型具有巨大潜力，可从多样的图结构数据中学习可迁移的表示，从而高效适应各种图领域和任务。

然而，构建有效的自适应图基础模型面临诸多挑战，包括：

  * **结构异质性** ：不同图数据集的结构特性和数据分布多样，如节点度分布和图结构复杂度的差异，有效处理这种多样性对开发统一模型至关重要。

  * **特征异****质性** ：图的节点和边特征具有异质性，包括特征的类型、维度和语义的差异，有效处理特征异质性对构建通用图模型至关重要。

  * **快速适应能力** ：有效图基础模型应能快速适应新的图数据集和领域，无需大量重新训练或微调，能快速调整参数和学习策略以应对新图数据的结构和分布特征。

  * **扩展定律** ：像计算机视觉和自然语言处理领域的成功基础模型一样，图基础模型应能展现出扩展定律，即性能随着模型规模或训练数据集的增加而系统提升，通过利用这一现象，图基础模型能解锁前所未有的能力和泛化能力。

为应对这些挑战，该论文提出了基于混合专家（MoE）架构的 AnyGraph****模型。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDibGBISthl9lCzfjuYpFUiafKlvmoichiamFiaIExWGx48MTOozicRGoQWOmrqlGORKRtxNuX2tdCyklKQ/640?wx_fmt=png&from=appmsg)

### 图混合专家框架

#### 解决跨域图异构性

为了建模不同应用领域之间的异构图结构模式，AnyGraph采用了一种混合专家（Mixture-of-Expert，MoE）的模型架构。

该架构由多个图专家模型组成，每个模型都可以**独立对输入的图数据进行预测** 。

在设计中，不同的专家模型应当负责处理具有**特定模式** 的图数据。

AnyGraph设计了一种路由算法，用于将输入的图数据分配给最善于处理它的专家模型，进行训练或者预测。

#### 图专家路由算法

基于图自监督学习任务的有效性，AnyGraph的路由算法采用一种**自监督的损失函数**
，通过计算专家模型在输入图上的自监督损失大小，来衡量模型与该输入数据的匹配程度。

具体来说，AnyGraph在输入图数据中采样一定的边作为正例，并随机采样同样数量的节点对作为负例。

通过计算专家模型对两种边预测分数的差值，可以看出模型对正例的识别能力，用于代表模型与数据的匹配程度。

#### 基于训练频率的路由修正

尽管上述方法可以高效、准确地找到最善于处理输入数据的专家模型，但该方法常常造成一种“赢者通吃”的次优结果：

由于训练早期的各种随机因素，极少数专家模型，甚至一个模型，形成了对其他专家模型的优势，路由算法因此不再将训练数据分配给其他模型，造成了其他模型基本未经训练、而最优模型过于通用无法专精的结果。

这种情况与原本的设计不同，无法做到每个模型专注于处理特定类别的图数据。

因此，AnyGraph维护每个专家的训练次数信息，将其纳入匹配分数的计算中去，为较少经历训练的专家模型提供更多的训练机会。

#### AnyGraph的快速适应能力

值得注意的是，基于上述MoE架构，AnyGraph在每次训练和测试的过程中，仅需要激活它1/K的模型参数。

这意味着计算时间和存储开销上的极大优化，使其相对于同参数的其它非MoE模型具有极大的效率和适应性优势。

因此，AnyGraph在应对新数据时可以进行高效的微调；当面临和一些原始训练数据差距极大的情况时，还可以避免新数据对原本的模型参数产生过大的影响。

### 自适应且高效的图专家模型

#### 解决域内图异构性

不同图数据的邻接矩阵和特征通常具有不同的维度，为了弥合这一差距，AnyGraph的图专家模型进行结构和特征统一，具有不同维度的邻接矩阵和节点特征矩阵被映射为具有固定维度的初始节点表征。

基于奇异值分解（SVD）在提取重要隐特征方面的有效性，AnyGraph利用SVD方法来构建这一统一映射过程。

具体来说，研究人员使用SVD对邻接矩阵和特征矩阵分别进行特征分解，每次得到两个具有固定维度的节点特征矩阵，以及一个特征值对焦矩阵。

研究人员将这些信息进行整合、归一化，得到具有相同维度的节点初始特征矩阵，而这些矩阵记录了原始邻接矩阵和特征矩阵的信息，又具有了相同的维度。

使用SVD进行这一过程**具有一些潜在的优势** 。

SVD这种压缩方法会按照隐含特征维度的重要程度进行排序，也就是说，其结果的第一个特征维度是SVD认为最重要的维度，而最后一个维度是其认为最不重要的特征维度。

这一特性潜在地规整了不同数据集之间的SVD特征，后续模型可以根据这一特点更容易地学习通用的预测网络。

#### 高效且强大的特征编码

为了在保持效率的同时获得对图特征建模的强大能力，AnyGraph的图专家模型采用多层感知机网络（MLP）进行可学习的预测。

值得注意的是，每个专家模型都只采用了**简单的MLP网络**
，这种设计无法进行复杂的图关系建模，例如GAT和GraphTransformer中的结构学习能力。

但AnyGraph在顶层采用了MoE架构，它的设计初衷是通过多样化但简单的特征变换来处理总体上复杂的图学习任务。通过集成多个特征变换MLP，AnyGraph可以成功覆盖不同的图数据子集，达到强大的图预测能力。

### 高效的跨域模型训练

为了最大化AnyGraph的跨图泛化能力，AnyGraph的训练样本是由不同数据集的训练样本**混合并随机排序得到** 。

每个批次的训练样本包含一个图、该图当中一个批次的边、该图的预处理信息（初始节点表征和分配的最佳专家模型）。

AnyGraph采用广泛应用的边预测任务作为预训练任务，使用交叉熵损失作为优化目标。在训练过程中，研究人员会进行定期的特征和结构扩充，包括重新进行基于SVD的表征初始化、在专家路由时进行结构采样。

## AnyGraph效果如何？

AnyGraph的实验验证采用了**38个来自不同应用领域的图数据集**
，包括链路预测和节点分类两个类别，涵盖电商场景（用户的购买、浏览和评分行为，商品间的共现关系），学术网络（论文的引用关系及学者的合作关系），生物信息网络（药品、蛋白质之间的相互影响关系），以及诸如邮件网络、网站之间的链接关系、以及道路网络。

为了更好地进行跨数据集的综合性评价，实验将所有数据集划分为两个数据集集合Link1和Link2，它们在总体上和单个领域内都具有相近数量的边，但各自包含的数据集不具有相同来源和相同的特征构建方法。

研究人员使用其中一个训练模型，并在另一个集合上进行零样本测试。此外，所有数据集还按照应用领域划分成了电商、学术网络和其他三种类别，以进行更细致的领域测试，其他类别主要由生物信息网络组成，包含了其他较小的类别。

### 零样本预测能力

首先进行了AnyGraph和基线方法的对比实验，基线方法包括图神经网络、图预训练方法、图提示微调方法、以及两种图基础模型。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDibGBISthl9lCzfjuYpFUiaf3dQMXohklzzX6A7JYbdfydwtyUnF3oZiaNo2eQTw9nnWLft5WqZGZIg/640?wx_fmt=png&from=appmsg)  
![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDibGBISthl9lCzfjuYpFUiafxZZBZ3GjibM7ZuZChkKouIedR2h7MBMPmRXWUfTNLcT3Glp6u4vKiaHQ/640?wx_fmt=png&from=appmsg)

可以观察到在不同数据集上的零样本预测优势。

此外，图预训练和提示微调方法在跨数据集场景下常常表现出更差的效果，这凸显了跨数据、跨场景进行预训练的困难，这样做很难提取具有通用性的不变特征。

### AnyGraph的扩展定律

在调整模型参数量和训练数据量的情况下，实验测试了AnyGraph的零样本和全样本预测性能。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDibGBISthl9lCzfjuYpFUiafLzZy2YMDOzDsOSyknp7dplLBntVv6VuryT38oic50k6utFNX4BGwxOg/640?wx_fmt=png&from=appmsg)

可以观察到，尽管全样本预测性能很早就出现了收敛，但零样本预测能力却能够随着参数量和数据量的增长而不断增长，并出现了一些突变性的增长。

这体现了AnyGraph的零样本预测能力**符合扩展定律的特点** ，并提示了它的涌现能力。

研究人员认为，这种图模型的扩展定律有两个关键因素。

首先，测试任务需要具有一定的难度，而全样本的图监督学习任务过于容易，模型的扩展定律很容易遇到边际效应。

其次，对于跨场景、跨图的图预测来说，它固有的特征和结构异质性问题使得MoE这样的松散模型结构更容易捕捉通用的不变性特征。

此外，研究人员观测到当训练数据总量不足时，引入新的训练数据反而可能造成模型效果的下降，这源于训练数据具有特别的分布特点、在模型中引入了bias。当模型训练数据充足时，这一问题就自然消解了。

### 消融实验

消融实验验证了AnyGraph的以下关键性设计：MoE架构、对节点特征的利用、路由算法中的训练频率正则、训练过程中的数据扩充。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDibGBISthl9lCzfjuYpFUiaf3OVhXkSuVdRWbSOYO8g7pRlyWCQUdsPuPQhjlPhY4occrJl5hjuZJg/640?wx_fmt=png&from=appmsg)

结果显示了这些设计对模型的零样本和全样本预测性能存在显著的正面影响。

### 路由算法研究

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDibGBISthl9lCzfjuYpFUiaficArPAghVBj8X4FBWiaC1Hkzx5SSib7SNFpiabj7CnRxqS52M1HDnAoClw/640?wx_fmt=png&from=appmsg)

上图展示了AnyGraph路由机制的分配结果。

可以看到，具有相同来源（例如ML1M和ML10M）、具有相同特征构建方法（例如arxiv-
ta、Photo、GReads、Fitness）的数据集，通常会被分配给相同的专家模型，这体现了路由机制能够准确捕捉数据集的不同特点，分配给不同的专家模型进行处理。

### 效率实验

为了验证模型的效率和快速适应能力，研究人员测试了AnyGraph在微调时的效果增长曲线，以及固定训练步数的时间开销。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDibGBISthl9lCzfjuYpFUiafQKje72gj2kScAqN4byz14h1GkArf9c4YUcNUnDydOae2VrJYwF3Tmg/640?wx_fmt=png&from=appmsg)  
![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDibGBISthl9lCzfjuYpFUiafNB6hZ95yINP4UAhcKuVib5HV3O6opvnTGnvXvlvdP9GAIib7y0Lxuiccw/640?wx_fmt=png&from=appmsg)

可以看到，由于AnyGraph采用了MoE架构，它仅需要激活小部份的参数进行训练，这极大地减少了模型的训练时间。

同时，由于AnyGraph出色的零样本预测能力，以及它基于MoE架构的快速调整能力，AnyGraph可以更快、更好地进行模型微调。

项目地址：https://github.com/HKUDS/AnyGraph  
论文链接：https://arxiv.org/pdf/2408.10700  
实验室主页：https://sites.google.com/view/chaoh

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

