# OpenAI 联创 IIya 是谁，为什么要离开 OpenAI？

文章作者: 投资实习所
发布时间: 2024-05-17 12:58
发布地: 河北
原文链接: http://mp.weixin.qq.com/s?__biz=MzIyMDA3MjMwNw==&mid=2455853887&idx=1&sn=cb3307edc4e5c83b23e46a934932e159&chksm=80446b23b733e235297229d0cdc14ff2e6bd76bf7913620d5fc5b96021386d4f07f0fd6f3364#rd

封面图链接: https://mmbiz.qpic.cn/sz_mmbiz_jpg/sBQys0vjP4p2ZUuNwgDUZlm3Ed51SBZZsnHyLF1mgWdVXVE5O7q7KAI5aGEC2NIu6mq3TciczLxcFud5RYzl1TQ/300

前天，OpenAI 联合创始人兼首席科学家 [IIya Sutskever
宣布离职](http://mp.weixin.qq.com/s?__biz=MzIyMDA3MjMwNw==&mid=2455853860&idx=1&sn=8b69224cab296d654551c85c8c89f91e&chksm=80446b38b733e22eed97fe0d996e92740f98c19f7252dbfa0ed9662ca79442a0f86d3ebf502c&scene=21#wechat_redirect)，随后又有不少人宣布离开
OpenAI，包括超级对齐团队联合负责人 Jan Leike。今天，我又看到了至少 4 位 OpenAI 团队成员宣布离职。

其中有的去创业了，有的是对 OpenAI 和 Sam Altman 不满，比方说 Evan Morikawa 就是去创业了，而 Harrison
Kinsley 则是对 Sam Altman 不满：

> 我为什么离开 OpenAI，是因为在过去的几周时间里，没有人能跟 Sam Altman
> 说上话。因为他最近每天不是在这个播客、会议直播里，就是在飞往某个会议或者与一些政府开会。

另一位叫 Bojan Tunguz 也差不多，他说他已经辞职离开 OpenAI，他们用 XGBoost
重新训练所有模型的速度太慢，即使有太多的鞭笞也无法提高士气。

还有一位叫 signull 的也说自己已从 OpenAI 离职了，其现在的 title 是 Sequoia 的 GP。在前一天的一个推文中，signull
对 Sam Altman 的战略能力和执行力给出了高度评价：

> Sam Altman 是一个天才的高手级战略家——他完美地运用了“敌人的敌人就是朋友”的原则。

  * 他彻底消除了马斯克的威胁；

  * 与微软 CEO Satya 达成了一笔令人难以置信的交易，获得了无限计算资源和永远的客户；

  * 现在又与苹果谈判，让 OpenAI 成为 iPhone 上的原生应用，抓住消费者的潮流和使用习惯；

> OpenAI 现在正好位于消费者和企业领域最大的两家公司之间，当世界上任何人想到“AI”时，他永远巩固了 OpenAI 作为事实上的名字，并将
> OpenAI 的每一个弱点都变成了一种优势——他是唯一一个可以让 Google 摇摆不定并处于非常不舒服的位置的人。绝对令人难以置信的执行力。

但在今天，他又发了一个很有意思的推文：

> 大多数人不理解或没有意识到的是， Sam Altman 在与微软的交易中谈了一个非常有趣的条款。一旦 OpenAI 进入AGI（通用人工智能），微软的
> IP（知识产权）几乎就是零，其拥有 49% 的股份也无法控制。那谁来声明何时/是否实现 AGI？答案当然是 OpenAI 和 Sam Altman。

再加上我昨天整理最近离职的 6 位员工和高管（参见 Memo 网站快讯），**OpenAI 近期离开的人已经达到 12 位了** 。当然这里影响力最大的还是
IIya Sutskever，此次离职的不少也是超级对齐团队的成员。

**那么为什么 IIya 要离开 OpenAI，他的过往经历是怎么样的，大家也一直在关注他到底看到了什么** 。一位叫 Chinmaya Joshi
的机器学习工程师在去年底写了一篇关于 IIya 的文章，讲述了 IIya 在联合创立 OpenAI 之前、期间以及发布 ChatGPT
之后的整个经历和思考，或许 IIya 的这些经历可以告诉我们一些他离开的答案。

这篇文章有点长，也有一小部分技术术语，这里借助 AI
的能力做了一下编译，在尽量保持原文的情况下一些地方略微做了一点删减，如果有精力非常建议大家去阅读一下原文（https://www.linkedin.com/pulse/story-
ilya-sutskever-before-during-after-co-founding-openai-joshi-xhc9f/）：

* * *

Ilya 是谁？Ilya Sutskever 是 OpenAI 的首席科学家和联合创始人之一。对于那些不了解人工智能的人来说，OpenAI 是构建
ChatGPT 的公司。但这些都是 IIya 太过正式的经历。我对 Ilya Sutskever 这个人更好奇：

  * 他曾在多伦多大学师从 Geoff Hinton 博士攻读博士学位；

  * 他在 2012 年与人合著了关于 AlexNet 的计算机视觉领域的开创性论文《使用深度卷积神经网络进行 ImageNet 分类》；

  * 2012 年毕业后，他在斯坦福大学跟随吴恩达博士（Google Brain 的联合创始人）做博士后研究；

  * 他是 2016 年 AlphaGo 在强化学习领域的开创性论文《AlphaGoon Reinforcement Learning》的共同作者（唯一一位来自 Google DeepMind 之外的作者；

  * 当然还有 OpenAI 的联合创始人兼首席科学家。

很少有人能成为人工智能领域取得突破时的一部分，而 Ilya
在他人生的多个阶段都参与了这些突破性成果，仅这一点就足以使他成为一个令人着迷的人物。这里我想更深入地了解他的生活，了解是什么让他成为 OpenAI
的联合创始人，以及在 ChatGPT 之后他在做什么。

下面将分成 4 部分来探讨 IIya，包括

  1. IIya 的年轻时代

  2. IIya 的早期研究生涯

  3. 作为 OpenAI 联合创始人的 IIya

  4. ChatGPT 之后的 IIya

**年轻时代的 IIya**

IIya 出生于上个世纪 80 年代中期的俄罗斯（当时的苏联）。5
岁时，他的家人移民到以色列，这在当时是许多欧洲犹太家庭的选择。当他读到八年级时，他开始在以色列的开放大学攻读计算机科学学士学位。

因为以色列开放大学接受任何人入学，不论是否有高中学历，所以即使他才 8
年级也可以入学。另外，那里的主要学习方式是远程教育。在一次接受以色列开放大学的采访时，他是这样描述这段经历的：

> 我没有把自己逼得太紧。我通常只选 2-3 门课，从不选更多的课程。在初中和高中时，我不太在意自己的成绩。

他认为，远程学习非常适合他，因为他可以按照自己的节奏学习。他还特别提到了大学（通过邮件）提供给他的书籍的质量：

> 如果书的质量不那么好，那就很难了。

**IIya 的早期研究生涯**

IIya 之后去了加拿大学习数学，在 2005 年他获得了学士学位以及硕士学位，最后在多伦多大学师从 Geoff Hinton
博士获得了博士学位。他的博士论文是：“训练循环神经网络（Training Recurrent Neural Networks）”。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sBQys0vjP4p2ZUuNwgDUZlm3Ed51SBZZ67IXmCWQoEpNLMmItHITCiaepj86IGNFEe0VslkIdvhpMVsvJ9Japvg/640?wx_fmt=png&from=appmsg)

在此期间，Alex K、Ilya 以及 G. Hinton 一起完成了题为 "ImageNet Classification with Deep
Convolutional Neural Networks "的著名 AlexNet 论文。

这篇论文的特别之处在于，尽管 Yann LeCun 和 Yoshua Bengiol 在 1995 年发表的题为 "Convolutional
Networks for Images, Speech, and Time-Series
"的论文中为深度学习提供了基础理论，但这是第一次使用深度学习解决有监督的计算机视觉问题。

2012 年 12 月，IIya 和其他人（包括 Hinton 博士）一起成立了一家名为 "DNNresearch Inc "的公司，该公司本质上是
Hinton 在多伦多大学从事的研究工作的衍生项目。仅仅四个月后，这家公司就被 Google 收购了，随后的 3 年时间，他一直在 Google
工作。用他自己的话说：

> 我是 Google 的一名研究员，当时我正在研究深度学习。我当时非常开心。

然后在 2014 年的一天，他收到了一封陌生邮件，邀请他与 Sam Altman、Greg Brockman 以及 Elon Musk
共进晚餐，讨论的主题是：

> 用 IIya 的话说，"你怎么能创办一个能与 Google 和 Deepmind 竞争的人工智能实验室呢？

> 马斯克当时是这么说的：Google 的对立面是什么？一个开源的、非盈利的组织。因为 Google 是闭源的，以盈利性为目的的。

一开始创办一个新的人工智能实验室的想法就对 IIya 很有吸引力，即使在 2014 年的时候，IIya 就已经是深度学习的忠实信徒，但他对 AI
的野心更大、更深，IIya 曾说：

> 研究人员在某种程度上被训练成要从小处着手。由于工作的性质，这种小思维是会得到奖励的...，而在 OpenAI，我们有幸能够着眼于更大的宏图。

这个 AI 实验室的最终目标是认真对待通用人工智能（AGI）的理念。因此在 2015 年，一群人在另一群人的投资下，成立了一个名为 OpenAI
的非营利人工智能实验室。

而 IIya 的加入非常重要，马斯克在最近的一次采访中是这么说的：

> 我在招募关键科学家和工程师方面发挥了重要作用，尤其是 IIya。事实上，IIya 来来回回犹豫了好几次。他曾说他要加入 OpenAI，然后
> Demis（现在 DeepMind CEO）又说服他不要加入。这种情况来回发生了好几次，最终他决定加入 OpenAI。IIya 的加入是 OpenAI
> 最终能取得成功的关键。

**作为 OpenAI 联合创始人的 IIya**

作为 OpenAI 的首席科学家，他有多项突破性研究成果，但最重要的是两个：

  1. 2017 年的 Sentiment Neuron Paper 

  2. 2022 年的 ChatGPT

**首先看 Sentiment Neuron 论文** 。这个想法是训练一个 AI
模型去成功完成一项特定的任务，然后尝试了解该模型是如何擅长完成这个任务的。想象一只猴子（经过进化训练）喜欢吃某些水果，但不喜欢其他水果。我们能否对它的大脑做一些神经科学研究，单纯通过观察猴子的大脑活动来弄清楚并解释这个决策是如何做出的？IIya
和团队发现，如果我们试图解决这样的问题，我们可能会在猴子的大脑中发现一个单一的神经元，它决定猴子是否喜欢芒果。

当猴子吃水果时，这个特定的神经元被激活。想象猴子大脑中的一个神经元，当食用甜食或含糖水果时，它会被激活。以完全相同的方式，Ilya 和他的团队训练了一个
AI 模型（人工神经网络）来生成亚马逊评论，并发现有一个单一的神经元（模型的一小部分）可以“恢复情感（sentiment）的概念”。

这篇题为“Learning to Generate Reviews and Discovering
Sentiment（2017）”的论文首先训练了一个递归神经网络语言模型 （LSTM），为各种在线产品（亚马逊、IMDB
等）生成用户评论（一次一个字符）。一旦他们在这个模型上取得了良好的性能，他们就观察单个神经元的激活，并发现了一些令人着迷的东西。有一个神经元学会了对每次向前传递的情绪分析任务进行分类。这种奇异情绪神经元的情绪分析任务的表现优于大多数最先进的模型。

>
> 直接引用论文中的内容：“为什么我们的模型（为生成评论而训练）以如此精确、解开(disentangled,)、可解释和可操纵的方式恢复情感概念，这是一个悬而未决的问题。

于是一个假设形成了：

> 如果我们训练一个 AI 模型来执行任务 A，为了解决任务 A，该模型有能力学习解决更简单的任务 B。这显示了模型具有学习泛化的潜在能力。

lIya 已经对监督式深度学习有了坚定的信念，但这让他对无监督式深度学习更加充满希望。就像任何优秀的深度学习研究人员一样，Ilya 和他在 OpenAI
的团队开始用更大的模型和更复杂的任务来测试这个假设。

**其次是 ChatGPT。** ChatGPT 是 OpenAI 在 2018
年开始的一项工作的成果，旨在将工作从情感神经元论文扩展到更复杂的任务。这一次，他们没有像上次那样生成评论，而是专注于更一般的任务，比方说问答、语义相似性评估、文档分类等。这次迭代的第
3 （4th*） 版本最终形成了我们现在所知道的 ChatGPT。

  * GPT：GPT 的原始论文发表于 2018 年，标题为“Improving Language Understanding by Generative Pre-Training”，该论文引入并建立在 Google 一年前于 2017 年推出的自我注意力机制之上，将模型预训练作为“学习”（文本）信息的手段。

  * GPT-2：GPT-2 的新版本于 2019 年发布。请注意，这是 OpenAI 最后一个完全以开源方式发布的模型，同时也公开了模型权重。

  * GPT-3：该模型于 2020 年 6 月发布。这次我们只拿到了一个论文，由于潜在的危险，他们已经开始规范人工智能的访问。

  * GPT-3.5 （ChatGPT）：2021 年 6 月，GPT-3.5（或者有些人可能知道的 bytext-davinci-002）终于在 2022 年 11 月以 ChatGPT（Chat Generative Pre-trained Transformer）的名义向公众发布（仅作为博客、网络服务、网站界面）。这有什么特别之处？为什么是 3.5 而不是 4？这是一个建立在 GPT-3 之上的混合模型，带有 RLHF（人类反馈的强化学习），即主要针对聊天格式的回答进行了微调。

  * GPT-4：此版本于 2023 年 3 月 14 日首次发布，作为“技术报告”，它没有模型架构的实际技术规范。该模型显然已经在 2022 年 8 月进行了训练，但在 2023 年初中期（通过 ChatGPT Plus 订阅）提供给消费者。这一次，OpenAI 的AI 监管措施既包括信息压制，也包括信息延迟发布（information suppression and information delay）。

纯粹关于这些模型系列的文章可以写一整篇（可能很多篇），但目前这篇文章是关于参与这些研发工作的科学家的。一个明显的规律是，OpenAI
越来越倾向于规范其模型发布，甚至不提及 GPT-4 的 LLM 的相对无意义的 "参数总数"。(有兴趣的朋友可以看看：这里有一本由 Clint Morris
撰写的很棒的 Jupyter Notebook（https://github.com/clint-kristopher-
morris/Tutorials/blob/main/mixture-of-experts/MoE-Paper-Review.ipynb），解释了
GPT-4 模型架构据称使用的专家混合技术（Mixture of Experts），我觉得非常有用）。

那么，这一切与 IIya 的思维过程有什么关系呢？这里强调 2 点：

**1.模型的性能。** 大型语言模型（LLM）（如 ChatGPT）具有解决任务的能力，这是由于大型模型的性质导致了在模型架构内的一个
"迷你世界"（mini-world）模型，该模型用于生成输出。正如 IIya 自己所说的那样：

> 足够好地预测下一个 Token 意味着什么？意味着你了解导致该 Token 的潜在现实（What does it mean to predict the
> next token well enough? Predicting the next token well means that you
> understand the underlying reality that led to that token。）

**2.公开表示对 AI 的担忧。** OpenAI 内部的团队通过他们的行动非常公开地承认人工智能的潜在危险，特别是像 ChatGPT
这样的消费者人工智能；并且会（已经）很乐意监管哪怕是最微小的信息，这些信息可能会阻止团队外部的人员在人工智能潜在危险的前提下重新创建或改进他们的工作（他们有权选择这样做）。

这两点结合起来，就引出了下面这一部分：**后 ChatGPT 时代的 IIya**

让我们退后一步，试着从 IIya 的角度来看这张照片。OpenAI 向公众发布了
ChatGPT，它成为历史上采用最快的消费软件工具。新闻文章、公开采访、炉边谈话、参议院听证会（现在甚至政府也参与其中）——突然之间，每个人都对人工智能有了看法。

有许多讨论正在发生，从一个极端的《[技术乐观主义宣言](http://mp.weixin.qq.com/s?__biz=MzIyMDA3MjMwNw==&mid=2455852256&idx=1&sn=6ca00a8158b546a67eca043d25c9e043&chksm=804464fcb733edea4d189ceb482b596cf0b1f15abc0392113d19a0f19455fae383b98a7fcae6&scene=21#wechat_redirect)》（注：由
a16z
发布）要求更有效的加速（e/acc），到另一个极端，即在人工智能的威胁中生存的唯一方法是通过空袭摧毁一个数据中心；一封公开信甚至要求暂停大型人工智能实验 6
个月。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/sBQys0vjP4p2ZUuNwgDUZlm3Ed51SBZZhAUClicqpl8DPHicGSDUiaqYASiaEPkG4TOczfYDJe6w5Q59oOIOwK3m1w/640?wx_fmt=jpeg&from=appmsg)

在世界上最重要的人工智能实验室之一担任首席科学家并不是一个理想的选择。那么，IIya（以及 OpenAI 的其他人）决定怎么做呢？2023 年 8 月 14
日，IIya 在西蒙斯计算理论研究所（theSimons Institute for the Theory of Computing）发表了演讲；他以
OpenAI 典型的缄默语调暗示了以下内容：

> 我们在 OpenAI 所做的很多技术工作我都不能说。现在，甚至从不久前开始，我把所有的研究重点都转到了人工智能对齐上（AI alignment）。

这表明，OpenAI 似乎正在努力履行最初于 2023 年 3 月 22 日发布的暂停大型人工智能实验 6 个月的倡议。对于 IIya
来说，还有什么比将研究重点转向人工智能对齐（AI Alignment）更适合他的方式呢？

如果我们对这一行动信以为真（为了这篇文章的目的，我打算这样做），那么对于 OpenAI
内部来说，对危险的人工智能出错的担忧程度似乎已经足够严重，以至于他们决定需要他们的首席科学家专注于努力在人工智能对齐方面取得进展。在 2023 年 San
Fransisco Alignment Workshop 研讨会的开幕致辞中，IIya 说道：

> 解决对齐问题并不是一件小事。

OpenAI 在 2023 年 7 月 5 日题为“Introducing Superalignment”（Ilya 联合作者）的博客中指出：

> 我们将在未来四年内将 20% 的计算资源用于解决超级智能对齐问题。

在不深入探讨“迄今为止的安全保障”的情况下，这仍然相当于他们在智能对齐方面的大量内部计算基础设施——特别是如果我们假设剩余的大部分计算资源都用于支持
ChatGPT（以及他们的 API）的后端基础设施。

我把 IIya 在 2023 年 8 月底举行的 SF Alignment Workshop 上的开场白 PPT 留给大家。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sBQys0vjP4p2ZUuNwgDUZlm3Ed51SBZZZKSdOXARxJgWEJFCickZPK8sam6I9e8aeicD1LFfevZ5SSCic3ic54rWPw/640?wx_fmt=png&from=appmsg)

> IIya：变化是唯一的不变。

  

**·END****·******  
**加入 Memo****Pro****会员，获取更多趋势****信号**  
  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/sBQys0vjP4p2ZUuNwgDUZlm3Ed51SBZZyibVabvnOic4q5BxD2nBf9XBRLSyeYNXVx8tibuU7iazibKlOy3ViauFicF7w/640?wx_fmt=png&from=appmsg)  

Memo: Signal, not noise!

扫码或点击「阅读原文」继续阅读

**订阅 Memo****Pro**  
Memo（vcsmemo.com）是一个基于付费订阅模式的创投内容平台，已得到大量 VC、企业 CEO
以及高管的支持，我们希望帮助你捕捉最具价值的趋势信号、过滤噪音（Signal,Not Noise）。  
**订阅 Memo****Pro****你将获得：**  
1.解锁未来一年以及之前的所有会员专属内容2.[**邮件订阅功能**](http://mp.weixin.qq.com/s?__biz=MzIyMDA3MjMwNw==&mid=2455853781&idx=1&sn=b6f8e3ddc87e9531f3f8c3e9cd98bd9f&chksm=80446ac9b733e3df93b89c17e905182bda7f4d132f3ac468961dfd70badeb92b9fcdf9f7083b&scene=21#wechat_redirect)：付费内容+最新行业快讯+...3.优先体验
Memo 新产品和新功能4.后台回复“发票”获得开票入口**  
****限时 599
元/年，扫码立即订阅**[![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/sBQys0vjP4qklI9cubkfzW4X3EOtBRwVPz76ct17EU44C5Lnias4LvqmnbboXXbvzZYvTZSlk9iafI1z3LLfOg4Q/640?wx_fmt=jpeg)
OpenAI 联创 IIya 离职创业，首款实时交互式 AI
播客来了](https://mp.weixin.qq.com/s?__biz=MzIyMDA3MjMwNw==&mid=2455853860&idx=1&sn=8b69224cab296d654551c85c8c89f91e&chksm=80446b38b733e22eed97fe0d996e92740f98c19f7252dbfa0ed9662ca79442a0f86d3ebf502c&scene=21#wechat_redirect)  
[![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/sBQys0vjP4pkE2HLu4da5U1Pnh1xw20xyPiccYmgSqXarWFI3FplzStHpnJhQvQgdriaib6tPwYThV14s6NezsrTA/640?wx_fmt=jpeg)Marc
Andreessen 发布技术乐观主义者宣言：AI
是我们的炼金术](https://mp.weixin.qq.com/s?__biz=MzIyMDA3MjMwNw==&mid=2455852256&idx=1&sn=6ca00a8158b546a67eca043d25c9e043&chksm=804464fcb733edea4d189ceb482b596cf0b1f15abc0392113d19a0f19455fae383b98a7fcae6&scene=21#wechat_redirect)  
[![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/sBQys0vjP4rf3dePcibU9q5Dcmic32M3q241KO1I86vlibA5cwO8V5TQGjLDPIiamtiaQr2sWdV430Qib5XmJPNDj3oA/640?wx_fmt=jpeg)这个给
VC 用的
AI，可能要取代投资经理了](https://mp.weixin.qq.com/s?__biz=MzIyMDA3MjMwNw==&mid=2455853839&idx=1&sn=52c59fb52a5ccb31f7d5807935ecd420&chksm=80446b13b733e20565aa11b3088865ec0e8fdee69a74e69ec021f229612bbf07651f237d74d8&scene=21#wechat_redirect)

  

