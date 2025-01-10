# Ilya Sutskever在NeurIPS炸裂宣判：预训练将结束，数据压榨到头了（全文+视频）

文章作者: 机器之心
发布时间: 2024-12-14 11:45
发布地: 北京
原文链接: http://mp.weixin.qq.com/s?__biz=MzA3MzI4MjgzMw==&mid=2650947130&idx=1&sn=6808fab944a856e84131da7be46e47fa&chksm=84e7fa44b3907352b99efa02eabaedfe63927e6c765a9ecc3566c05b878a5028ca6dee06ee7f#rd

封面图链接: https://mmbiz.qpic.cn/sz_mmbiz_jpg/KmXPKA19gW9PQFxbvSm2Oq9HsbL86NQ5HqVe4sBlkBefoibvk33o2iaRhWZAmkefYmVItWRlttD0Qo6LTJXvvUUQ/300

机器之心报道

**机器之心编辑部**

> 「推理是不可预测的，所以我们必须从令人难以置信的，不可预测的 AI 系统开始。」

  
Ilya 终于现身了，而且一上来就有惊人之语。  
本周五，OpenAI 的前首席科学家 Ilya Sutskever 在全球 AI 顶会上表示：「我们能获得的数据已经到头，不会再有更多了。」  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gW9PQFxbvSm2Oq9HsbL86NQ52sxvrxNOUscpMJcnhj2ue8ctWkdrxTxROCHGqM1fto7FubviaKbMRgg/640?wx_fmt=png&from=appmsg)  
OpenAI 的联合创始人兼前首席科学家 Ilya Sutskever 今年 5 月离开公司，创办了自己的人工智能实验室 Safe
Superintelligence，成为头条新闻。自离开 OpenAI 后他一直远离媒体，但本周五在温哥华举行的神经信息处理系统会议 NeurIPS
2024 上，他罕见地公开露面了。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gW9PQFxbvSm2Oq9HsbL86NQ5NRyV5cfBFDcxFiaaUTKxicGOheAfsbYIUk8iaQHTKb5B1j8Z2ygEn8urQ/640?wx_fmt=png&from=appmsg)  
「我们所熟悉的预训练无疑会结束，」Sutskever 在台上说。  
在人工智能领域里，BERT 、GPT 等大规模预训练模型（Pre-Training
Model）近年来取得了巨大成功，已经成为技术进步道路上的一个[里程碑](https://mp.weixin.qq.com/s?__biz=MzA3MzI4MjgzMw==&mid=2650825489&idx=1&sn=0182d2a1c21c1f38ce78a919a35548d8&scene=21#wechat_redirect)。  
由于复杂的预训练目标和巨大的模型参数，大规模预训练可以有效地从大量标记和未标记的数据中获取知识。通过将知识存储到巨大的参数中并对特定任务进行微调，巨大参数中隐式编码的丰富知识可以使各种下游任务受益。现在
AI 社区的共识是采用预训练作为下游任务的主干，而不是从头开始学习模型。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gW9PQFxbvSm2Oq9HsbL86NQ5VD7icVWF5ZWDsr0ziav62X0x60Yuu6dCoDMxhWvwtUVibB0ZmJkp8LANg/640?wx_fmt=png&from=appmsg)  
然而，在他的 NeurIPS 演讲中，Ilya Sutskever
表示，尽管现有数据仍能推动人工智能的发展，但这个行业里称得上可用的新数据上已经接近枯竭。他指出，这一趋势最终将迫使行业改变当前的模型训练方式。  
Sutskever 将这一状况比作化石燃料的消耗：正如石油是有限资源一样，互联网中由人类生成的内容也是有限的。  
「我们已经达到了数据的峰值，未来不会再有更多数据，」Sutskever 说道。「我们必须利用现有的数据，因为互联网只有一个。」  
Sutskever 预测，下一代模型将会「以真正的方式表现出自主性」。另一方面，智能体（Agent）已成为 AI 领域的热词。  
除了具有「自主性」，他还提到未来的系统将具备推理能力。与当今的 AI 主要依赖的模式匹配（基于模型以前见过的内容）不同，未来的 AI
系统将能够以类似于「思考」的方式逐步解决问题。  
Sutskever 表示，系统的推理能力越强，其行为就越「不可预测」。他将「真正具备推理能力的系统」的不可预测性与高级 AI 在国际象棋中的表现进行了比较
——「即使是最优秀的人类棋手也无法预测它们的动作。」  
他说：「这些系统将能够从有限的数据中理解事物，并且不会感到困惑。」  
在演讲中，他将 AI 系统的 Scaling 与进化生物学进行了比较，并引用了研究中不同物种之间的大脑与体重的比例关系。他指出，大多数哺乳动物遵循一种特定的
Scaling 模式，而人类科（人类祖先）的脑体比在对数尺度上展现出截然不同的增长趋势。  
Sutskever 提议，就像进化为人类科大脑找到了一种新的 Scaling 模式一样，AI 可能也会超越现有的预训练方法，发现全新的扩展路径。  
  
以下是 Ilya Sutskever 的演讲全文：  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gW9PQFxbvSm2Oq9HsbL86NQ5BUj4D2FmTY53qEUcpXluN0IczVlxNyib9r3rjvxjaU9ORkYicShEicSwQ/640?wx_fmt=png&from=appmsg)  
我要感谢大会组织者为这个奖项选择了一篇论文（Ilya Sutskever 等人的 Seq2Seq 论文入选了 NeurIPS 2024
时间检验奖）。太好了。我也想感谢我不可思议的合著者 Oriol Vinyals 和 Quoc V. Le，他们刚才就站在你们面前。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gW9PQFxbvSm2Oq9HsbL86NQ5BKrMZgmaFaE9O26QFLUJFYurOTDY1BxzSoIUOibgcO6BuuLHtOBtic2g/640?wx_fmt=png&from=appmsg)  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gW9PQFxbvSm2Oq9HsbL86NQ56dztwcUiavBJ6SgQC0f03RRr4MfoJvcTE9icFGOZVYA5icHZbmaHfVo0w/640?wx_fmt=png&from=appmsg)  
你这里有一张图片，一张截图。10 年前在蒙特利尔的 NIPS 2014
也有类似的演讲。那是一个更加纯真的时代。在这里，我们出现在照片中。顺便说一下，那是上次，下面这张是这次。  
现在我们有了更多的经验，希望现在更聪明一点了。但是在这里，我想谈一下这项工作本身，也许还想做一个 10
年的回顾，因为这项工作中的很多事情是正确的，但有些则不太正确。我们可以回顾它们，看看发生了什么，以及它是如何把我们引向今天的。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gW9PQFxbvSm2Oq9HsbL86NQ5wev8sjauKV7IibOTNuRwbbmmmdDW3Qn3mpWnPMuTrg1IMGpBAe9Auew/640?wx_fmt=png&from=appmsg)  
所以让我们开始谈谈我们所做的事情。我们要做的第一件事就是展示 10
年前同一个演讲的幻灯片。总结起来就是三个要点。一个基于文本训练的自回归模型，它是一个大型神经网络，它是一个大型数据集，就是这样。  
现在让我们再深入一些细节。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gW9PQFxbvSm2Oq9HsbL86NQ5iawtXA6nkPQ92yBqR1F4BB1MrSS7icZ0BGf4wvGPTjEXQAJibrzfnH4cw/640?wx_fmt=png&from=appmsg)  
这是 10 年前的一张幻灯片，看起来不错，「深度学习假说」。我们在这里说的是，如果你有一个具有 10
层的大型神经网络，但它可以在几分之一秒内完成人类可以做的任何事情。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gW9PQFxbvSm2Oq9HsbL86NQ57KVK0Sa9Pe1MNrticZv6DfeSlYyP66fqsV9oCkc5FwcMhFCyZYD91Wg/640?wx_fmt=png&from=appmsg)  
为什么我们要强调「人类可以在几分之一秒内完成的事情」？为什么是这件事？  
好吧，如果你相信深度学习的教条，人工神经元和生物神经元是相似的，或者至少不是太不同，并且你相信三个真正的神经元是缓慢的，那么人类可以快速处理任何事情。我甚至指的是假如全世界只有一个人。如果全世界有一个人可以在几分之一秒内完成某些任务，那么
10 层神经网络也可以做到，对吧？  
接下来，你只需将它们的连接嵌入到一个人工神经网络中。 这就是动机。任何人类可以在几分之一秒内完成的事情，那么 10 层神经网络也可以做到。  
我们专注于 10 层神经网络，因为这是当年我们所知道的训练方式，如果你能以某种方式超越这个层数，那么你可以做更多的事情。但在那时，我们只能做 10
层，这就是为什么我们强调人类可以在几分之一秒内做的任何事情。  
当年的另一张幻灯片说明了我们的主要思想，你可能能够识别两件事情，或者至少一件事情，你可能能够识别出这里正在发生自回归的事情。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gW9PQFxbvSm2Oq9HsbL86NQ5dNQcJmiaN02xiaECkNAlOxxB0IXFOMg1Uibj5cKrCiaaDficUGJiauso5NTg/640?wx_fmt=png&from=appmsg)  
它到底在说什么？这张幻灯片到底说了什么？这张幻灯片说，如果你有一个自回归模型，并且它预测下一个 token
足够好，那么它实际上会抓取、捕捉并掌握接下来出现的任何序列的正确分布。  
这是一个相对较新的东西，它并不是第一个自回归网络，但我认为这是第一个自动回归神经网络。我们真正相信，如果你训练得很好，那么你就会得到你想要的任何东西。在我们的案例中，是现在看来很保守，当时看来非常大胆的机器翻译任务。现在我将向你们展示一些你们中许多人可能从未见过的古老历史，它被称为
LSTM。 对于那些不熟悉的人来说，LSTM 是可怜的深度学习研究者们在 Transformer 之前所做的事情。  
它基本上是 ResNet，但旋转 90 度。所以这是一个 LSTM。LSTM 就像是一个稍微复杂的 ResNet。你可以看到
integrator，它现在被称为 residual stream。但是你有一些乘法正在进行中。这有点复杂，但这就是我们所做的。这是一个旋转 90 度的
ResNet。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gW9PQFxbvSm2Oq9HsbL86NQ50z8azxzauGnoCvdOGG5Htsj2ROpe3u1CbutxAayklhVk2OCXxw98Uw/640?wx_fmt=png&from=appmsg)  
那个老演讲中我想强调的另一个重点是我们使用了并行化，但不仅仅是并行化。  
我们使用了流水线，每层神经网络分配一块 GPU。正如我们现在所知，流水线策略并不明智，但我们当时并不聪明。所以我们使用它，使用 8 块 GPU 获得了
3.5 倍的速度。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gW9PQFxbvSm2Oq9HsbL86NQ5icmSMk927p6ucKaTYp63P13aYib3IocMCyGM5Nru2PMwxVRk7p2b50ZA/640?wx_fmt=png&from=appmsg)  
最后的结论，那是最重要的一张幻灯片。它阐明了可能是 Scaling Laws
的开始。如果你有一个非常大的数据集并且你训练了一个非常大的神经网络，那么成功就是有保证的。人们可以争辩说，如果一个人是慷慨的，这确实是正在发生的事情。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gW9PQFxbvSm2Oq9HsbL86NQ5w7NCpB4ZdgKBwicKF8WLr1UKuicic5KFnxOa3MS5fhHnwZPVYYa8uQZ7g/640?wx_fmt=png&from=appmsg)  
现在，我想提另一个想法，我认为这个想法真正经得起时间的考验。这是深度学习本身的核心思想。这就是联结主义的思想。这个想法是，如果你相信人工神经元有点像生物神经元。如果你相信其中一个有点像另一个，然后它让你有信心相信超大规模神经网络。它们不需要真的是人类大脑规模，它们可能会小一点，但你可以配置它们来完成我们所做的几乎所有事情。  
但这与人类仍然存在差异，因为人类大脑会弄清楚如何重新配置自己，我们正在使用我们拥有的最好的学习算法，这需要与参数一样多的数据点。人类在这方面做得更好。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gW9PQFxbvSm2Oq9HsbL86NQ5dNscskx5z93wQYweDbJ45qEGeLib2z2anxtqMXjEWBNWZNM44pADdpQ/640?wx_fmt=png&from=appmsg)
所有这些都导向了，我可以说是，预训练时代。  
进而就是我们所说的 GPT-2 模型、GPT-3 模型，Scaling Laws。我想特别提到我的前合作者 Alec Radford，还有 Jared
Kaplan 和 Dario Amodei，是他们的努力实现了这些工作。
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gW9PQFxbvSm2Oq9HsbL86NQ5vdMSgWag97Gj20ggqBalgeUTgnfhPoToJXcdklJd2Y7ZFl6kH6hRBQ/640?wx_fmt=png&from=appmsg)
这就是预训练的时代，这就是所有进步的驱动力，我们今天看到的所有进步，超大神经网络，在巨大的数据集上训练的超大神经网络。
但我们所知道的预训练路线无疑会结束。为什么会结束？因为计算机通过更好的硬件、更好的算法和逻辑集群不断增长，所有这些事情都在不断增加你的计算能力，而数据没有增长，因为我们只有一个互联网。
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gW9PQFxbvSm2Oq9HsbL86NQ5r1Lyf5UL6t8Od04Olzk4wh9BVicgbibSshZjLszdrUFeYnRqibPkP0B4g/640?wx_fmt=png&from=appmsg)  
你甚至可以说数据是 AI
的化石燃料。它就像是以某种方式创建的，现在我们使用它，我们已经实现了数据的最大化利用，不能再更好了。我们想办法必须处理现在拥有的数据。我仍然会努力，这仍然让我们走得很远，但问题在于，只有一个互联网。
所以在这里，我会大胆第推测一下接下来会发生什么。  
实际上，我都不需要推测，因为许多人也在猜测，我会提到他们的猜测。  

  * 你可能听过「智能体 Agent」这个短语，这很常见，我相信最终会发生一些事情，人们觉得智能体是未来。
  * 更具体地说，但也有些模糊的合成数据。但合成数据是什么意思？弄清楚这一点是一个巨大的挑战，我相信不同的人在那里有各种有趣的进展。
  * 还有推理时间计算，或者可能是最近（OpenAI 的）o1，o1 模型最生动地展示了人们在预训练后试图弄清楚该做什么事情。

  
这些都是非常好的事情。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gW9PQFxbvSm2Oq9HsbL86NQ5f3ANbibKAgtw7nTt6y20RdJLfNuwrt055dJexQ9qRFUd3POB8jbqcnQ/640?wx_fmt=png&from=appmsg)  
我想提到生物学中的另一个例子，我认为这真的很酷。很多年前在这个会议上我也看到了一个演讲，有人展示了这张图，其中显示了哺乳动物身体大小和大脑大小之间的关系。在这种情况下，它是大规模的。那个演讲，我清楚地记得，他们说，在生物学中，一切都很混乱，但在这里，你有一个罕见的例子，动物身体的大小与它们的大脑之间存在非常紧密的关系。  
出于偶然，我对这张图产生了好奇。
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gW9PQFxbvSm2Oq9HsbL86NQ5VibKcbWX0UgMV1ETpaibGk2oj27lGXIqgXK68XrzVKicOsv7h4ObGgqicQ/640?wx_fmt=png&from=appmsg)  
所以我去谷歌以图搜图了一下。
这张图片里，列出了多种哺乳动物，也有非灵长类动物，但大体一样，还有原始人。据我所知，原始人在进化过程中，像尼安德特人一样是人类的近亲。比如「能人」。有趣的是，他们的大脑与身体比例指数的斜率不同。很有意思。
这意味着有一个案例，有一个生物学找出某种不同尺度的例子。显然，有些事情是不同的。顺便说一下，我想强调一下这个 x 轴是对数刻度。这是
100、1000、10000、100000，同样以克为单位，1 克、10 克、100 克、一千克。所以事情有可能不同。  
我们正在做的事情，到目前为止我们一直在做扩展的事，实际上我们发现如何扩展成了第一要务。毫无疑问在这个领域，每个在这里工作的人都会想出该做什么。但我想在这里谈谈。我想花几分钟的时间来对长期进行预测，我们所有人都要面临这样的事，对不对？
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gW9PQFxbvSm2Oq9HsbL86NQ5F7eYd2yicwvH6ud2bKgZfaB6ynDf6WAhVtW6KHibLJgCKdPopkjDTdqA/640?wx_fmt=png&from=appmsg)  
我们正在取得的所有进展，是惊人的进步。我的意思是，10
年前在这个领域工作的人，你们还记得一切都是多么无能为力。如果你是在过去两年里加入了深度学习这个领域，你或许都无法感同身受。  
我想稍微谈谈「超级智能」，因为这显然是这个领域的发展方向，是这个领域努力构建的东西。  
尽管语言模型现在拥有令人难以置信的能力，但它们也有点不可靠。目前还不清楚如何调和这一点，但最终，迟早会实现目标：这些系统将以真正的方式成为智能体。现在，这些系统并不是强大的有意义的感知智能体，实际上它们刚刚开始会推理。顺便说一句，一个系统推理的越多，它就变得越不可预测。
我们已经习惯所有深度学习都是非常可预测的。因为如果你一直在研究复制人类直觉，回到 0.1 秒的反应时间，我们的大脑会进行什么样的处理？这就是直觉，我们赋予了
AIS 一些这种直觉。
但是推理，你看到了一些早期的迹象：推理是不可预测的。例如，国际象棋对于最好的人类棋手来说都是不可预测的。因此，我们将不得不处理非常不可预测的 AI
系统。它们将从有限的数据中理解事物，并且不会感到困惑。
所有这些都是非常大的限制。顺便说一句，我没有说怎么做，也没有说什么时候会以及什么时候所有这些事情都会与「自我意识」一起发生，因为为什么「自我意识」不能是有用的呢？我们自己也是我们自己世界模型的一部分。  
当所有这些东西结合在一起时，我们将拥有与今天存在的质量和属性完全不同的系统。当然，它们将拥有令人难以置信和惊人的能力。但是像这样的系统所带来的问题，我猜想它将非常与众不同。  
我会说，预测未来肯定也是不可能的。真的，各种各样的事情都是可能发生的。谢谢大家。  
Neurlps 大会上一阵掌声过后，Ilya 回答了几位提问者简短的问题。  
提问：在 2024 年，请问您认为是否还有其他与人类认知相关的生物结构值得以类似的方式进行探索，或者还有您感兴趣的领域吗？  
**Ilya：** 我会这样回答这个问题：如果你或者某个人对某个具体问题有独到的见解，比如
“嘿，我们明显忽略了大脑在做某些事情，而我们并没有做到”，并且这是可以实现的，那么他们就应该去深入研究这个方向。我个人没有这样的见解。当然，这也取决于你关注的研究抽象层级。
很多人都渴望开发受生物启发的人工智能。从某种程度上来说，可以认为由生物启发的 AI 已经取得了巨大的成功，毕竟整个深度学习的基础就是由生物启发的
AI。但另一方面，这种生物启发其实非常、非常有限。基本上只是 “让我们使用神经元”——
这就是生物启发的全部内涵。更详细、更深层次的生物启发却很难实现，但我不会排除这种可能性。我认为，如果有人拥有特别的洞察力，能够发现某些新的角度，这或许会非常有价值。
提问：我想提问一个关于自动更正的问题。  
您提到推理可能是未来模型的核心发展方向之一，也可能是一个差异化的特点。在一些海报展示环节中，我们看到当前模型存在 “幻觉”
现象。我们目前分析模型是否出现幻觉的方法（如果我理解有误请您纠正，您才是这方面的专家）主要是基于统计分析，例如通过某些标准差的偏离来判断是否偏离均值。未来，您是否认为如果模型具备了推理能力，它能够像
“自动更正”（autocorrect）一样自我纠正，从而成为未来模型的一个核心功能？这样模型就不会出现那么多的幻觉，因为它能识别出自己生成幻觉内容的情况。这可能是一个比较复杂的问题，但您认为未来的模型是否能够通过推理理解并发现幻觉的发生？  
**Ilya：** 答案：是的。  
我认为你描述的这种情况是非常有可能的。尽管我不确定，但我建议你去查证一下，这种情况可能已经在一些早期的推理模型中出现了。但从长期来看，为什么不可能呢？  
提问：我的意思是，这就像微软 Word 里的自动更正（autocorrect）功能一样，它是一个核心功能。  
**Ilya：** 是的，我只是觉得称之为 “自动更正” 其实有点低估了它的意义。当你提到 “自动更正”
时，会让人联想到一些相对简单的功能，但这个概念远远超越了自动更正。不过，总的来说，答案是肯定的。  
提问：谢谢。 接下来是第二位提问者。  
提问：嗨，Ilya。我很喜欢那个神秘留白的结局。人工智能们是否会取代我们，还是说它们比我们更优越？它们是否需要权利？这是一个全新的物种。智人（Homo
sapiens）孕育了这种智能，我觉得强化学习那边的人可能认为我们需要为这些存在争取权利。  
我有一个与此无关的问题：我们如何创造正确的激励机制，让人类以一种方式来创造它们，使它们能享有与我们智人相同的自由？  
**Ilya：**
我觉得这些问题在某种意义上是人们应该更多思考和反思的。但对于你提到的关于我们应该创造什么样的激励机制的问题，我觉得我无法自信地回答这样的问题。这听起来像是在讨论创建某种自上而下的结构或治理模式，但对此我确实不太确定。  
接下来是最后一位提问者。  
提问：嗨，Ilya，谢谢你的精彩演讲。我来自多伦多大学。感谢你所做的一切工作。我想请教一下，你认为 LLMs 是否能够在分布外进行多跳推理的泛化？  
**Ilya：** 好的，这个问题假设答案是 “是” 或
“否”，但实际上不应该这样回答。因为我们需要先弄清楚：分布外泛化到底是什么意思？什么是分布内？什么是分布外？ 因为这是一次关于 “时间检验”
的演讲。我想说，在很久很久以前，人们在还未使用深度学习时，是用字符串匹配和 n-grams
来做机器翻译的。当时人们依靠的是统计短语表。你能想象吗？这些方法的代码复杂度达到了数万行，真的是难以想象的复杂。而在那个时候，泛化的定义是：翻译结果是否和数据集中的短语表述字面上不完全相同。
现在我们可能会说：“我的模型在数学竞赛中取得了很高的分数，但也许这些数学题的某些想法曾经在互联网上的某个论坛中被讨论过，因此模型可能只是记住了这些内容。”
好吧，你可以说这可能是分布内的，或者可能是记忆化的结果。但我认为，我们对泛化的标准确实已经大幅提高 —— 甚至可以说是显著地、不可想象地提高了。  
所以，我的答案是：在某种程度上，模型的泛化能力可能还远不及人类。我确实认为人类在泛化方面要优秀得多。但与此同时，AI
模型也确实在某种程度上能够进行分布外泛化。我希望这个答案对你来说算是有用的，尽管它听起来有些赘述了。  
提问：谢谢。  
 _参考内容：_ _https://www.theverge.com/2024/12/13/24320811/what-ilya-sutskever-
sees-openai-model-data-training_ _  
_© THE END 转载请联系本公众号获得授权投稿或寻求报道：liyazhou@jiqizhixin.com  

