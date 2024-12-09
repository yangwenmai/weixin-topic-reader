# 北大AI奥数评测，o1-mini比o1-preview分数还高

文章作者: 量子位
发布时间: 2024-09-22 14:52
发布地: 北京
原文链接: http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247750459&idx=3&sn=a402e55810f6ebd1845045d466eeb24d&chksm=e8dfa449dfa82d5fef6098fa7031f06e187b1475ae5ec0e53a5bf1158cdd14f57356ab11544f#rd

封面图链接: https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtAOVibXbw5eUnvqbCic6T1OKtgWgskOYbhR4ia6NXzIjZ7x6LEm0sVNeFp8bbyF89ibxXVOhYqkBvJaVg/300

##### Omni-MATH团队 投稿  
量子位 | 公众号 QbitAI

OpenAI的o1系列一发布，传统数学评测基准都显得不够用了。

**MATH-500** ，满血版o1模型直接拿下**94.8** 分。

更难的**奥数邀请赛AIME 2024** ，o1也获得**83.3%** 的准确率。

随着现有的数学评测集逐渐被攻克，大家不禁开始好奇：大模型能否胜任更具挑战性的数学竞赛，甚至是奥林匹克数学竞赛？

为此，北京大学与阿里巴巴的研究团队联合打造了一个专门用于数学竞赛的奥林匹克评测基准——**Omni-MATH** 。

Omni-MATH专门用于评估大型语言模型在奥林匹克水平的数学推理能力。评测集共收录了 4428 道竞赛级别的问题。这些问题经过精心分类，涵盖了 33
个（及更多）子领域，并且分为 10 个不同的难度级别，使得我们能够对模型在各种数学学科和复杂程度上的表现进行细致分析。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAOVibXbw5eUnvqbCic6T1OKtYzVna0tUNPsF30jlHhT5sHD0WDTPPQJAhMzgOPbNokXicKN5e8KOZ1g/640?wx_fmt=png&from=appmsg)

最新排行榜，竞争非常激烈：  

除去o1满血版暂时还没有放出API，**作为小模型的o1-mini的表现最好，平均分比o1-preview还要高8%左右** 。  

**开源模型最好的是****Qwen2-MATH-72b** ，甚至超过了GPT-4o的表现。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAOVibXbw5eUnvqbCic6T1OKtgKHsUwYMVSChQngdqpWcCf5NpvltcN22SYmRQt9VJOCC7CiaguBROLw/640?wx_fmt=png&from=appmsg)

总的来说，o1-mini这种只关注少部分能力、放弃存储广泛世界知识路线的优势，再次得到验证。

## Omni-MATH：难度大、领域广

Omni-MATH作为一个数学奥林匹克评测基准，它的特点有三个维度：

**人工验证答案的可靠性：**
4428道评测问题来自不同的数学竞赛和论坛数据，人工参与验证答案准确性；并且考虑到奥赛难度问题答案的多样性提供了基于GPT4o和评测模型的评价方式，方便一键启动评测。

**清晰合理的难度分类：**
评测集整体比较有挑战性，并且难度跨越非常大。从奥林匹克预备级别（T4）竞赛CEMC到最顶级的奥林匹克数学竞赛（T0）如IMO、IMC、普特南等等。这些比赛不仅需要选手具备扎实的数学基础，还需要超高的逻辑推理能力和创造力。数据显示，只有极少数智商接近顶尖的人才能在这些比赛中取得优异成绩。

**题目类型非常广：**
共有多于33个子领域的数学问题。根据数学领域的特性，团队打造了树状的领域分类，每个题目涉及一到多个领域，也就是多条树的路径，使得我们能够对模型在各种数学学科和困难程度上的表现进行细致的分析。”

![](https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtAOVibXbw5eUnvqbCic6T1OKtrywndiaoRbEMiaZiadUic5Do6fypN6MqCxr6bJMkMVCwxT0UYlVVpV0yTg/640?wx_fmt=jpeg&from=appmsg)

## 评测集Omni-MATH的构造

### 数据构造

研究团队首先对国内国外基本的奥林匹克数学竞赛进行了细致的调研。从中了解到，一个学生从竞赛预备到顶级竞赛，中间要经过层层选拔的。

比如对于英国体系，要经过JMC → IMC → SMC → BMO 1 → BMO 2 → IMO整个一层链路的选拔（这个IMC(Intermediate
Mathematical Challenge)和上述IMC(international mathematical competition for
university students)并不是一个比赛）；

然而在美国体系中，要经过AMC 8 → AMC 10 → AMC 12 → AIME→ USA(J)MO → IMO整个一层体系的选拔。

这启发了团队能否给模型评测同样也设置一个这种难度层级的体现。因此研究团队调研了世界范围内不同难度层级的比赛，使得Omni-
MATH在奥林匹克级别的数学测试中，难度上仍然多元化。

另外在奥林匹克级别的数学测试中，实际上涉及的数学领域是非常多的。研究团队考虑到在模型训练时，不同领域之间的数据是否有会有化学反应，比如领域A的数据能否让模型泛化到领域B的提升，这种方向的数据工程是非常有意义的。

为了给这个方向的研究打下基础，研究人员参考了相关竞赛教辅书，在这个评测集中给数据的领域进行了非常细致的划分，从数学大类上比如数论、代数、几何等等开始，一直到领域下面具体的小领域或者知识点。

评测集数据的来源主要有两个，一个是各种比赛的题目和题解，另外一个是著名数学网站Art of Problem
Solving。对于想要的比赛，优先从题解中寻找答案。

如果想要的比赛并未公开题解，团队从AoPS网站的论坛上爬取回复。考虑到回复都是真实用户书写，有一定概率是有问题的，需要进行严格的筛选。

研究团队选取了AoPS网站上候选的并且答案规整的数目大于3的题目，并且选取了3个答案全部一致的题目作为最终标准。团队在筛选问题时采用人工筛选，进一步保证了准确性。

### 数据处理

**数据本身的处理：**

在爬取到PDF格式的题解后，开发者们使用了Mathpix将其转换成Latex格式作为题解。在爬取到论坛答案之后，首先用GPT-4o重新format成规整的回复，之后手动检查是否和原本问题的答案一致。

对于这两类来源的数据，团队人员最后都是用了人工检查是否和数据源的信息是一致的。

**难度分类：**

参考了AoPS网站中关于题目难度分类的情况。

具体而言，不同级别的比赛题目难度有着本质的不同，比如CEMC和IMO之间的题目相差非常大，然而，每个比赛的不同题目也有着不同，比如一次IMO比赛中既有简单题也有难题。因此评测集的难度分类严格按照AoPS网站上给出的不同比赛的每一道题的难度系数（从1到10之间，大多是整数，少数有.5、.25这种难度）。

对于网站上未覆盖的内容，团队人员将网页上的内容整理成了few-shot
prompt，并使用了GPT4o给题目难度进行了标注。整体难度的分布和不同比赛题目的分布如下：

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAOVibXbw5eUnvqbCic6T1OKt5grsqSTjfIpbRozHQicfD9AtfQFT4eF8jrRFLL9hAJwLQDwOc6BCYZw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAOVibXbw5eUnvqbCic6T1OKtyYzvcpsjmdsPd8bicnl1HhXCER2Hl3DgeAbqnBOfbN2Bd84JRkgq7dg/640?wx_fmt=png&from=appmsg)

**领域分类：**

和传统的数学测试基准的分类不同，在奥数这个难度上的题目涉及的领域更多，知识面更广。

为了更好地组织统一起奥数这些题目以及后续的对于数学领域之间数据的关系的探究，团队构建了一个更为全面的树状分类体系。研究团队参考了相关竞赛教辅书，将奥数相关的领域分为了几何、代数、数论、应用数学等等领域，之后从这些领域出发，继续细分成各个领域的小领域，细微的知识点。

这种树状分类体系更有助于帮助理解不同题目之间的关系，以及模型在不同领域上的表现。团队将这一树状分类体系作为模板，并结合竞赛辅导书中的实例，构建了few-
shot的提示（具体的树状结构和提示内容可参考文章末尾的代码仓库）。

随后，团队利用GPT-4o给每道题目分类到一到多个类别当中。

开源的答案验证器

Omni-
Judge是微调Llama3-Instruct得到的验证器，用于验证待测的答案和给定的答案是否一致。由于数学奥赛级别的题目回答的种类非常丰富，用规则评测实际上非常困难。在获得模型的预测之后，需要判断模型的输出是否和标准答案是一致的。在使用GPT-4o评测之外，我们还提供了一种更简便的评测方法，利用了GPT4o评测模型时产生的COT数据微调Llama3-Instruct得到了一个开源的验证器，评测一致率和GPT-4o高达95%。

参考链接：

**Project Page：** https://omni-math.github.io/  
**Github：** https://github.com/KbsdJames/Omni-MATH/  
**Dataset：** https://huggingface.co/datasets/KbsdJames/Omni-MATH/  
**Omni-Judge：** https://huggingface.co/KbsdJames/Omni-Judge/

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

