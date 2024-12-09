# LeCun锐评诺奖：出于压力才颁给AI，但两个成果已经完全无用，玻尔兹曼机和Hopefield网络

文章作者: 量子位
发布时间: 2024-10-25 12:15
发布地: 北京
原文链接: http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247754756&idx=3&sn=0bbded499d93361dd9e827fdfd6dd914&chksm=e8dc5376dfabda60e1c77adcf0a190b4da423a7559ac575d96a5cb136b87defc7634854035ab#rd

封面图链接: https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtBGfJOKZNWuuw8ia4FboQU1h2yOcEG2z4ibnK4dg4Iibcmc5VRztvzX9vXm89iasI9BpWJU95uicmB6DGA/300

##### 西风 发自 凹非寺  
量子位 | 公众号 QbitAI

LeCun最新演讲，公开表示：

> 今年诺贝尔奖颁给AI，是诺奖委员会感到压力的结果，需要承认深度学习的影响。
>
> 但物理奖颁给Hinton和Hopefield，获奖成果**玻尔兹曼机** 和**Hopefield网络** 现在**完全无用** 。

言语间不乏调侃“化学奖塞不下更多人，所以只能选了物理”，“Hopefield是生物物理学家，Hinton的模型以物理学家命名，勉强合理”。

台下观众也蚌埠住了，爆发阵阵笑声。

众所周知，今年的诺贝尔物理学奖颁给了机器学习先驱Hopfield、Hinton，前者因其“提出了Hopfield神经网络，以相当于物理学中自旋系统能量的方式进行描述”，后者因其“提出的玻尔兹曼机，使用了统计物理学中的工具”。

有人把视频发在了X上，网友看到LeCun此番发言一时间炸开了锅。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBGfJOKZNWuuw8ia4FboQU1hMUoQ6lTHNUEb5WibUvmlho3ZIShzh8bUSAOfdM0tkbmHibA6ufiaiaWlNQ/640?wx_fmt=png&from=appmsg)

有人觉得LeCun这是酸了。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBGfJOKZNWuuw8ia4FboQU1hl2xd5CicAlAe54RaHK5PfOmveZcuz6u8DYR9D6VSwptl8fyya6TrU3g/640?wx_fmt=png&from=appmsg)

也有人认为LeCun说的不无道理。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBGfJOKZNWuuw8ia4FboQU1hIk3rgW6bjlUkkvpTo5nVaibD97kvXpImjf8oNAiciaPr8m7NNicibNyFTeg/640?wx_fmt=png&from=appmsg)  
![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBGfJOKZNWuuw8ia4FboQU1hSmRs0uHibqnP2siaGYE5xsB7Q1Zvw3ft7icPsoFHnLlU8DSROLx9SKQZg/640?wx_fmt=png&from=appmsg)

## 具体怎么回事？

最近，LeCun参加了题为“机器如何达到人类水平智能”的主题讲座。

就在活动将要结束的时候，回答了大家提出的一些感兴趣的问题。

一开始的问题是：这些人工智能模型，**实体化** 的角色是什么，以实现真正的智能。

LeCun是这样回答的：

> 我认为这非常关键。
>
> 过去五六年中，对世界模型及类似概念做出有趣贡献的人是**机器人**
> 科学家，他们尝试将机器学习应用于机器人技术，因为你无法在机器人技术上作弊。你真的需要一个了解物理世界运作方式的系统。
>
> 所以几年前，当我们在讨论开设AI研究实验室时，我询问是否有我们不应该研究的AI领域，当时得到的回答是Facebook没有理由从事机器人技术。
>
> 因此，两年来我们并未涉及机器人技术。
>
>
> 但两三年后，我意识到在机器人技术中有很多有趣的事情可以做，可以推动AI的发展。因此，我们成立了一个小规模的机器人技术团队，后来逐渐发展，现在我们有一个大团队。
>
>
> 机器人技术现在已成为行业的热门话题。因此，研究实验室的角色是提前五年预见此类趋势，这样当你的上司来找你，问我们在X方面做了什么时，你可以说，我们过去五年一直在研究X。

之后LeCun又回答了这样的一个问题：

Surya Ganguli预测，这个世纪将是我们**真正理解人工智能** 并构建像上个世纪我们构建通信理论那样的人工智能理论的时代。你对此有何看法？

LeCun：

> 我没有一个确切的答案，我认为有许多不同的方式可以从不同的角度理解深度学习，特别是自监督学习等。比如我的一个博士后是一位信息理论家，也是一位统计物理学家。
>
>
> 实际上，统计物理学家在1980年代对神经网络很感兴趣，但在90年代这种兴趣有所减弱，现在由于深度学习及其数学基础，如我多次讨论的基于能量的模型框架，他们又重新回到了这一领域。
>
> 我的这个博士后试图通过分析和建模自我监督的运行，使用诸如信息内容和互信息之类的量度进行理论研究。我们一起写了很多论文，主要是他在这个话题上的工作。
>
> **也许下一个突破会来自统计物理学** ，我对传统理论计算机科学并不抱有太大希望。

借此话茬，LeCun突然被问到“**你怎么看最近的物理诺贝尔奖呢** ”。

于是就有了开头的那一幕，LeCun的完整回答是这样婶儿的：

> 我对此的印象是，诺贝尔委员会受到了一些压力，需要奖励深度学习领域的贡献。
>
> 这一点可以从瑞典电视台的纪录片和电视新闻节目中看出，有人认为诺贝尔奖应该颁给对AI领域有重大影响的人士，而非只是物理学领域的不为人知的贡献者。
>
> 因此，委员会明显倾向于表彰从事蛋白质结构预测的科学家，如AlphaFold团队和David Baker的实验室。
>
> 所以他们可能决定这么做，但随后他们也决定应该同样奖励那些为基础科学理念做出贡献的人。
>
> 因化学奖项的人数限制，他们选择了物理学奖项，并且选择了物理生物学家John Hopfield。
>
> 即便Geoffery
> Hinton不是物理学家，但他的模型被称为“Boltzmann机器”，而Boltzmann在科学物理中是传奇，这整件事在这种情境下说得通。
>
>
> 但你必须意识到，尽管我对诺贝尔奖颁给从事神经网络研究的人感到非常兴奋和振奋，认为这很棒，但Hopfield网络和Boltzmann机已经不再被使用，它们在概念上很有趣，但实际上完全无用，没人使用它们了。
>
> 我们现在使用的是反向传播。这是一个有趣的概念，但我对此无可厚非。

## LSTM之父也有异议

和LeCun的观点不太一样，LSTM之父**Jürgen Schmidhuber**
在X上连发推文，观点和用词更加犀利，直接表示这“涉及计算机科学领域的抄袭和错误归属问题”。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBGfJOKZNWuuw8ia4FboQU1hiaW49FERibSu1SEX9lwp0PvLG2ecfpkO0Aib9LhFwPHS2PvvVcdiag4VHg/640?wx_fmt=png&from=appmsg)

Jürgen Schmidhuber咋说的，给大家放在这儿了：

>
> 2024年诺贝尔物理学奖因科学中的剽窃行为及错误归因而颁给Hopfield和Hinton。这主要涉及Amari的“Hopfield网络”和“Boltzmann机”。
>
> 1、1925年发布的Lenz-
> Ising循环架构采用类神经元元素[L20][I24][I25]。1972年，申一Amari使其具备自适应性，能够通过改变连接权重学习输入模式与输出模式的关联[AMH1]。然而，在“2024年诺贝尔物理学奖科学背景”中，Amari仅被简略提及。不幸的是，Amari的网络后来被称为“Hopfield网络”。Hopfield在十年后重新发表此网络[AMH2]，却未引用Amari，后续论文亦然。
>
>
> 2、Ackley、Hinton和Sejnowski在1985年关于Boltzmann机的论文[BM]讨论了神经网络隐藏单元中内部表示的学习[S20]。它未引用Ivakhnenko和Lapa在1965年对内部表示深度学习的首个工作算法[DEEP1-2][HIN]，也未引用Amari在1967-68年通过随机梯度下降（SGD）端到端学习深度神经网络内部表示的独立工作[GD1-2]。作者的后续调查[S20][DL3][DLP]及“2024年诺贝尔物理学奖科学背景”均未提及这些深度学习的起源。([BM]也未引用Sherrington和Kirkpatrick[SK75]以及Glauber[G63]的相关先驱工作。)
>
>
> 3、诺贝尔委员会还称赞了Hinton等人在2006年的深度神经网络分层预训练方法[UN4]。然而，这项工作既未引用Ivakhnenko和Lapa在1965年的原始深度神经网络分层训练[DEEP1-2]，也未引用1991年深度神经网络无监督预训练的原始工作[UN0-1][DLP]。
>
> 4、Popular
> information称：“1960年代末，一些令人沮丧的理论结果使许多研究者怀疑这些神经网络永远不会有任何实际用途。”然而，深度学习研究在1960-70年代显然是活跃的，尤其是在英语世界之外。[DEEP1-2][GD1-3][CNN1][DL1-2][DLP][DLH]。
>
> 5、在以下参考文献[DLP]中，可以找到更多剽窃和错误归因的案例，该文献也包含了上述其他参考。可以从第3节开始阅读：  
> [DLP] J. Schmidhuber (2023).
> 三位图灵奖得主如何重新发表他们未曾归功于原创者的关键方法和想法。技术报告IDSIA-23-23，瑞士AI实验室IDSIA，2023年12月14日。  
> 参见以下参考文献[DLH]了解该领域的历史：  
> [DLH] J. Schmidhuber (2022).
> 现代AI与深度学习的注释历史。技术报告IDSIA-22-22，IDSIA，瑞士卢加诺，2022年。预印本 arXiv:2212.11279。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBGfJOKZNWuuw8ia4FboQU1hPFvbbWDryDMzzhzJeDuTnuz3iauXRoGQbe7bhH6hHKPZib2oaickxJKiaQ/640?wx_fmt=png&from=appmsg)

参考链接：  
[1]https://x.com/tsarnick/status/1849291803444621390  
[2]https://x.com/SchmidhuberAI/status/1849095954428784986

— **完** —

**评选征集中**

**「2024人工智能年度评选」**

量子位2024人工智能年度评选已开启报名通道，评选从**企业** 、**人物** 、**产品** 三大维度设立了5类奖项。

**欢迎扫码报名评选！**
评选结果将于12月[MEET2025智能未来大会](http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247752188&idx=2&sn=c1bc1e4d987c3a10cfef338059b3dfb1&chksm=e8dfae8edfa82798657f4fcb6469d47175940482fd452f1aff146be45890942a2385a2533344&scene=21#wechat_redirect)公布，期待与数百万从业者共同见证荣誉时刻。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAOVibXbw5eUnvqbCic6T1OKtFJzFhIdiauXic5xgYVG2LogYPX94d9GO5yiaQKicPFPUwgM30w350XNfIQ/640?wx_fmt=png&from=appmsg)

**点这里 👇关注我，记得标星哦～**

**一键三连「点赞」、「分享」和「在看」**

**科技前沿进展日日相见 ~**

![](https://mmbiz.qpic.cn/mmbiz_svg/g9RQicMD01M0tYoRQT2cMQRmPS5ZDyrrfzeksiay90KaDzlGBH61icqHxmgFKfvfXtVuwTHV740CDLAaXU1LIfZyoJEpYKcRIiaE/640?wx_fmt=svg)

