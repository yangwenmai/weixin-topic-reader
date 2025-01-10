# Just keep scaling！思维链作者Jason Wei 40分钟讲座剖析LLM扩展范式

文章作者: 机器之心
发布时间: 2025-01-04 12:30
发布地: 辽宁
原文链接: http://mp.weixin.qq.com/s?__biz=MzA3MzI4MjgzMw==&mid=2650950264&idx=1&sn=336399cae4d696a9d1305a0701cdfef9&chksm=84e78e06b39007109408490b9334babf58a43f4b13dc469c9700fd1da874a2c80cb040c75856#rd

封面图链接: https://mmbiz.qpic.cn/sz_mmbiz_jpg/KmXPKA19gWibyg4uITrAsseQNEk4cMePkQKSRmZKjibxia4T1xHasFcvwQeKqvVT7FCyT0pNuSYr1odSkCb1bJzVQ/300

机器之心报道**机器之心编辑部**  
关注 AI 领域的人对 Jason Wei 这个名字一定不陌生。他是 OpenAI 的一位资深研究科学家，也常在 OpenAI
的发布活动中露脸。更重要的是，他是思维链概念开山之作《Chain-of-Thought Prompting Elicits Reasoning in
Large Language Models》的第一作者。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWibyg4uITrAsseQNEk4cMePkeXd4J17ItZzwlfOxfDTfZqwr3Yia3kHavujhAyqm28fPoILqYzcQtibw/640?wx_fmt=png&from=appmsg)  
他本科毕业就加入了谷歌。在那里，他推广了思维链提示概念，共同领导了指令微调的早期工作，并和 Yi Tay、Jeff Dean
等人合著了关于大模型涌现能力的论文。2023 年初，他加入了 OpenAI，参与了 ChatGPT 的构建以及 o1
等重大项目。他的工作使思维链提示、指令微调和涌现现象等技术和概念变得广为人知。  
去年 11 月 20 日，Jason Wei 在宾夕法尼亚大学计算机与信息科学系 Mayur Naik 教授的「CIS 7000：大型语言模型（2024
秋季）」课程中进行了一场约 40 分钟的客座讲座，主题为「大型语言模型的扩展范式」。Jason Wei 从扩展（scaling）的定义谈起，介绍了 LLM
的扩展范式从规模扩展到以思维链和强化学习为代表的推理扩展的转变。真可谓内容丰富、干货满满！  
近日，Naik 教授在自己的 YouTube 频道放出了 Jason Wei 的演讲视频和幻灯片。机器之心整理了其中的主要内容。  
  

  * 视频地址：https://www.youtube.com/watch?v=yhpjpNXJDco
  * 幻灯片：https://llm-class.github.io/slides/Jason_Wei.pdf

  
以下是演讲内容的概要：  
一、扩展的定义与重要性  

  * 扩展一般是指通过增加模型规模、数据量和 GPU 数量来持续改进 AI 能力。不过，Jason Wei 给出了一个更具体的定义：扩展就是你把自己放在一个可以沿着连续轴移动并期望获得持续改进的情况下。
  * 虽然扩展需要克服技术和心理挑战，但它是 AI 进步的关键引擎，并将继续主导这个领域的发展方向。

  
二、扩展范式一：下一词预测（2018 年至今）  

  * 下一词预测实际上是一个大规模多任务学习过程。
  * 通过预测下一词，模型可以学习语法、世界知识、情感分析、翻译等多种能力。
  * 你可以把下一词预测的准确率看作多个子任务的加权和，这样你就能理解为什么会有所谓的「涌现」现象。
  * 仅仅通过下一词预测也许可以实现 AGI，但会非常困难，我们需要继续大量扩展。

  
三、扩展范式二：基于思维链扩展强化学习  

  * 纯粹的下一词预测在处理复杂任务时存在局限性。
  * 思维链（CoT）让模型能够像人类一样展示推理过程。
  * OpenAI 通过强化学习优化了模型的思维链能力，使其能更好地解决复杂问题。

  
四、AI 文化的变革  

  * 研究重点从改进算法转向改进数据质量。
  * 基准测试被「饱和」的速度太快。
  * 从单任务模型朝着高度多任务模型（highly multi-task models）的方向转变。
  * 智能和用户体验是两个可以分别改进的维度。
  * 需要更大的团队合作来推进 AI 发展。

  
五、未来展望  

  * AI 在科学和医疗健康方面的应用前景。
  * 提高事实准确性，减少虚假信息。
  * 发展多模态 AI 能力。
  * 增强工具使用能力。
  * 扩大 AI 应用范围。

  
Jason Wei 强调，尽管 AI 在过去五年取得了巨大进步，但通过持续扩展，未来五年还会有更大的发展空间。他用「just keep
scaling」（继续扩展）作为演讲的结束语，表达了对扩展策略的信心。  
以下是 Jason Wei 的演讲内容图文版。  
**扩展是 AI 进步的引擎****并且还将发挥主导作用**  
今天的主题是大型语言模型的扩展范式。首先我想说，在过去五年里，AI 取得了惊人的进步。就在 5 年前的 2019 年，AI
几乎无法写出连贯的段落，也无法进行任何推理。而今天，AI
可以写出几乎任何主题的文章，也成为了竞赛级别的程序员和数学家。那么我们是如何如此快速地达到这一步的呢？  
**我今天要阐述的观点是扩展一直是推动 AI 进步的引擎，并将继续主导这个领域的发展方向。**  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWibyg4uITrAsseQNEk4cMePke9891PUNjwBvlGOxLibeBtfJUso4ic9do06h6tLmARTXtlibfUYQGTibUA/640?wx_fmt=png&from=appmsg)  
这里是一个简短的大纲 —— 我会讲大约 40
分钟，之后很乐意回答问题。首先我会讲什么是扩展以及为什么要做扩展。然后我会讲第一个扩展范式，即下一词预测。我会讲这个范式面临的挑战。接着我会讲我们最近进入的第二个范式，即在思维链上进行强化学习。最后我会总结
AI 文化是如何被扩展改变的，以及我们接下来想看到什么。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWibyg4uITrAsseQNEk4cMePkKcQkYeZ8eyFLFYhGP66dic604HQVWfLibUialh3HRLDVdm4r2hDAxwdJw/640?wx_fmt=png&from=appmsg)  
我想先花几分钟讲讲在第一个扩展范式之前我们在做什么。原因是，除非你研究过历史，否则你可能不会意识到当前时刻有什么特别之处。  
我认为从 2010 年到 2017 年，也就是在 Transformer 之前的深度学习时代，AI 进展是这样的：你会有一个基准测试，比如
ImageNet，然后你会尝试各种方法来改进基线表现。比如可能添加更好的架构，添加一些归纳偏置，构建更好的优化器，进行超参数调优。所有这些东西叠加在一起，让你能够提升在基准测试上的表现。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWibyg4uITrAsseQNEk4cMePk52uXzMF9ewriavd7ORJdnXuicdicNfe38rFy1InIDyRmyj3Yg5ib2sB8lA/640?wx_fmt=png&from=appmsg)  
比如你有一些要学习的 XY 关系，目标就是尽可能好地学习这个关系。在 2017 年之前，我们可能这样描述一项成功的研究：「在 ImageNet
数据集上，我们的方法用一半的计算量就把基线性能提升了 5%。」  
但是随着 Transformer 的出现，我们有了一个很好的方法来学习各种不同类型的 XY 关系。如果我们不再受限于学习本身，那我们该做什么呢？  
事实证明，答案就是扩展。扩展简单来说就是训练更大的模型，使用更多的数据和更多的
GPU。但我这里有一个更具体的定义：**扩展就是你把自己放在一个可以沿着连续轴移动并期望获得持续改进的情况下。**  
这个定义中有一个重要的部分，即扩展是一个主动的过程。你必须把自己放在这个情况下，这通常涉及解决一些瓶颈或了解你的设置的一些细节，才能真正让扩展发挥作用。  
这是一个典型的扩展图表。你的 x 轴通常是计算量、数据量或模型大小，y 轴是你试图改进的某种能力。你想看到的是这条蓝线，随着你沿 x
轴移动，性能持续提升。你想避免的是这条红线，在 x 轴的某个阈值之后，性能就饱和了，不再提升。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWibyg4uITrAsseQNEk4cMePkUQuepIJHx7y8NbFcia8THRp6icQpCo6QD00z7JtsV3ZmfOgC5paI71uQ/640?wx_fmt=png&from=appmsg)  
简单来说，就是这样：  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWibyg4uITrAsseQNEk4cMePkQ3J2MTDQzwAia6BFgcnkow4UFGEic9qgrCPjR7BVkRy5W8z9vgf6528w/640?wx_fmt=png&from=appmsg)  
如果你看大语言模型领域的论文，你会发现扩展无处不在。这里有一些来自 OpenAI、Google Brain、DeepMind
的论文，你可以在这些不同的论文中找到这些扩展图表。有时你需要把图表上下翻转才能找到它，因为画的是损失而不是性能。这些图表真的是扩展的标志，它们可以非常有力。至少在
OpenAI，如果你带着这样一个图表走进会议室，会议结束时你会得到你想要的。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWibyg4uITrAsseQNEk4cMePkdDt9JicQSvgvQCaXSycxefYG0eeWiahYXUBCSp5MAicTrUmkAxrLVjcsw/640?wx_fmt=png&from=appmsg)  
需要注意的是，我们现在把扩展范式视为理所当然，但在当时扩展是非常不明显的。它之所以不明显有很多原因。  
首先是伴随着规模而来的技术和运营挑战。首先，分布式训练需要大量专业知识，你需要雇佣很多基础设施工程师来构建这个分布式训练系统。其次，你需要机器学习研究人员来对抗可能出现的损失发散和硬件故障。第三点是计算非常昂贵。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWibyg4uITrAsseQNEk4cMePkjX86cVhqTngy3jmCqKulvv7kjQcoMU6STjbZ3s04ZfsLv2CYNne6XA/640?wx_fmt=png&from=appmsg)  
除了技术挑战之外，还有一些心理挑战，这让扩展在当时变得相当困难。一个心理挑战是研究人员喜欢归纳偏置。对于如何改进算法有一个假设，然后真的看到任务性能提升，这其中有一种固有的快乐。所以研究人员喜欢做那种改变算法的工作。  
第二，总是有一种论点说人类学习比扩展效率高得多。你知道，一个人不需要读 GPT-3
训练时读过的那么多文本就能学会写一段英语。所以有一个问题是：如果人类能做到，为什么机器需要从这么多数据中学习？  
第三，长期以来，科学研究的激励机制和扩展所需的工程工作并不完全匹配。你知道，当你向会议提交论文时，他们想看到一些「创新」，而不仅仅是你把数据集做得更大或者用了更多
GPU。  
那么，既然扩展如此具有挑战性，我们为什么要做扩展呢？  
我想说，**如果你不依赖扩展范式，那么几乎每一个改进都需要新的创造力。你必须投入研究人员来实现模型的进步，而且不一定能成功，这需要一定程度的创造力。**  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWibyg4uITrAsseQNEk4cMePkDic3pibcjSQib2DRc4WWogAvVx3gg5D0KDDdQcTzm6QsQNKIVicvlaDDlg/640?wx_fmt=png&from=appmsg)  
第二个挑战是，我们希望 AI 能做很多任务，如果你想在每个任务上单独训练 AI，那将是很大的挑战。  
而在以扩展为中心的 AI 中，从定义上来说，你有一个可靠的方法来提升模型的能力。现在重要的是要注意，这通常非常昂贵。你会看到很多扩展图表中 x
轴是对数刻度的，所以提升性能实际上是极其昂贵的。但好消息是，如果你的能力度量（也就是 y 轴）非常通用，那么这种极端的财务投资通常可以证明是合理的。  
当然，谈到扩展就不能不提 Rich Sutton 的这篇文章《The Bitter
Lesson》。如果你还没读过，我推荐阅读，写得非常好。文章的主要观点是利用计算能力的通用方法是最有效的，能扩展的方法最终会胜出。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWibyg4uITrAsseQNEk4cMePkTbuaWicLvPFd39y0GUt7Mhqj26Pj0TQ2hMU8enxJo4RrlqNJ67671Ug/640?wx_fmt=png&from=appmsg)  
**扩展范式一：预测下一词**  
现在我想谈谈第一个扩展范式，也就是预测下一词。这个范式始于 2018 年，我们今天仍在继续，它非常简单 —— 就是在预测下一词方面变得非常非常擅长。  
我认为要完全理解这一点并不简单。问题是为什么仅仅通过预测下一词就能得到这么多？我的答案是：**预测下一词实际上是一个大规模的多任务学习。**  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWibyg4uITrAsseQNEk4cMePkvDReAZjHGRQkVXZJGD8iaVzVmib1F2nkjcpTv9AAWwyCwow2kaw536tA/640?wx_fmt=png&from=appmsg)  
让我们快速回顾一下下一词预测是如何工作的。你有一个句子，比如「 On weekends, Dartmouth students like to ___
」。然后语言模型对词汇表中的每个词 —— 从「a」、「aardvark」一直到「zucchini」——
都分配一个概率。然后模型的好坏取决于其对实际下一词的预测有多接近 1.0。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWibyg4uITrAsseQNEk4cMePkmEUia0qsy4ibfQ8RPwBbh15eNzWV1U4icJ90ZyPFia32s2TmCsawTUHMNg/640?wx_fmt=png&from=appmsg)  
在这个例子中，假设「drink」是实际的下一词。当语言模型从中学习时，它会试图增加「drink」的概率，并降低其他所有词的概率。  
我想展示一些例子来说明仅仅通过在足够大的数据库上做下一词预测就能学到什么。  
首先，模型肯定会很好地学习语法。比如在预训练数据中有一句话说「In my free time, I like to {code, banana}
」，下一词是「code」而不是「banana」，所以语言模型学会了在这里动词应该比名词有更高的权重。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWibyg4uITrAsseQNEk4cMePkCkicXGcNHmcKcFfBs1RQSO2XCBJAwb8fuf0H7xzsiaoB8oC9lRGQwfMQ/640?wx_fmt=png&from=appmsg)  
模型会学到世界知识。比如互联网上可能有一句话说「The capital of Azerbaijan is {Baku, London}
」，然后模型学会了给「Baku」比「London」更高的权重，所以模型学到了一些关于这个世界的知识。  
模型可以学习经典的自然语言处理任务，比如情感分析。互联网上某处可能有一句话说「I was engaged and on the edge of my
seat the whole time. The movie was {good, bad}
」，然后通过学会给「good」比「bad」更高的权重，语言模型学到了一些关于情感分析的东西。  
模型可以学习如何翻译。预训练中可能有一句话说「The word for “neural network” in Russian is {нейронная
сеть, привет} 」，然后通过给正确的俄语单词更高的权重，模型学到了一些关于俄语的知识。  
模型可以学习空间推理。互联网上可能有一句话说「Iroh went into the kitchen to make tea. Standing next
to Iroh, Zuko pondered his destiny. Zuko left the {kitchen, store}
」，然后通过给「kitchen」比「store」更高的权重，模型学到了一些关于 Zuko 在哪里的空间推理。  
最后，模型甚至可以期望学习数学这样的东西。训练中可能有一句「Arithmetic exam answer key: 3 + 8 + 4 = {15, 11}
」，然后通过学会正确预测 15，模型学到了一些数学知识。  
你可以想象，还有数百万种类似的任务。**通过在庞大的语料库上仅训练下一词的预测，模型实际上是在进行极其大量的多任务学习。**  
在 2020 年，Kaplan 等人发表的一篇论文普及了这种扩展范式。它普及了 scaling law
这个概念，这个概念主要是说，语言模型预测下一词的能力或性能会随着我们增加模型大小、数据集大小和训练计算量而平滑提升。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWibyg4uITrAsseQNEk4cMePklBo6Aia4CgA3twNYboIWbict48Au97EyVUzTzVkYo3N7ibWWFjYbvP7NA/640?wx_fmt=png&from=appmsg)  
这里 x 轴是训练计算量，也就是你训练的数据量乘以模型大小，你可以看到模型预测下一词的能力在提升。  
之所以称之为 scaling law，是因为他们可以看到这个趋势跨越了 7 个数量级。他们用 7 个数量级的计算量训练语言模型，发现这个趋势一直持续。  
这里最重要的是它不会饱和。这点之所以重要，是因为如果你扩大计算量，你可以期望得到一个更好的语言模型。这某种程度上给了研究人员继续扩大规模的信心。  
这里有一个自然的问题：为什么扩展效果这么好？作为一个领域，我认为我们还没有一个很好的答案，但我可以给出一个大致的解释，说明扩展可以带来的两个优势。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWibyg4uITrAsseQNEk4cMePkzS38B5vKMVHNeHIicdgyOFR2dflCic15NwCAl0sXsUruf82nxeMNyEfw/640?wx_fmt=png&from=appmsg)  
首先，如果是一个小型语言模型，那它的记忆是非常昂贵的。因为参数很少，你必须非常谨慎地选择要在参数中编码什么样的知识。而大型语言模型有很多参数，所以在学习长尾知识和记忆大量事实方面可以更慷慨。  
其次，如果是一个小型语言模型，它在单次前向传播中的能力要低得多。所以它可能主要学习一阶相关性。而如果是一个大型语言模型，它在单次前向传播中会获得更多的计算能力，当它有额外的计算能力时，学习复杂性要容易得多。  
现在你可能会说，如果 scaling law 如此可预测，为什么这么多人对 ChatGPT
在扩展范式中的成功感到惊讶？我的回答是，下一词预测实际上是大规模的多任务处理，而且在不同任务上的性能提升速度各不相同，所以一些能力的涌现可能会让人感到惊讶。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWibyg4uITrAsseQNEk4cMePk8AhCIfktIes2QrvGibPWek8jnQR0Tfy1ibTeeabbxRY9HAUuSM7dtKPg/640?wx_fmt=png&from=appmsg)  
我建议你这样看待下一词预测的准确率：它是很多个体子任务的加权和。这些数字是我编的，但你可以把总体准确率计算为：某个小系数乘以语法准确率，加上某个小系数乘以世界知识准确率，加上情感分析、数学能力、推理等等。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWibyg4uITrAsseQNEk4cMePkc2UtFPhm3UIj4QtX4qR8EdalUec5GqL7f5LmT8yzDCGakw7I4C5kLA/640?wx_fmt=png&from=appmsg)  
当你这样看时，你可以问自己这个问题：如果准确率从 70% 提升到比如 80%，是所有任务都均匀提升吗？比如语法从 70 提升到 80，数学也从 70 提升到
80?  
我认为可能不是这样。你可以这样看：总体能力在平滑提升。对于一些简单的任务，在某个点之后你实际上并没有提升性能。例如，GPT-3.5
基本上已经有完美的语法了，所以当你训练 GPT-4 时，你可能实际上并没有优化语法方面的损失。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWibyg4uITrAsseQNEk4cMePkVcYgdv0cvaNXkl4nPPn7TmtYBhSiaGt1UsRtatJ3mNWeCy44GUT93Ww/640?wx_fmt=png&from=appmsg)  
另一方面，你可能有一些任务出现了能力的大幅提升。比如，你可以说 GPT-3 和 GPT-2 的数学能力都很差，甚至不能做算术，但 GPT-4
真的很擅长数学。所以你可能会看到数学能力以这种方式提升。  
人们经常用「涌现能力」或「相变」这两个术语来描述这种现象。  
可以看到，这里有两个阶段：在阈值之前，模型的性能不佳或增长平缓；而一旦超过某个阈值，模型的性能就会迅速提升。下面展示了一个简单示例。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWibyg4uITrAsseQNEk4cMePku3RIcRFZDict2kvwgjydzgcTNRyuFGicRq8cBm1HxA45I1R3aZmQGibZw/640?wx_fmt=png&from=appmsg)  
这里的提示词是想要把一句话翻译成西班牙语。可以看到，图中展示了三个模型的输出结果。ada 和 babbage
只是重复了输入，因为它们并不真正理解这里应该执行翻译。而最大的模型 curie 突然就学会了完美地完成这个任务。  
重点在于，如果你只训练了 ada 和 babbage，并试图预测 curie 能否完成这个任务，那么你可能会得到消极的答案，认为 curie
也无法做到。但实际情况却并非如此。  
因此，我们可以绘制一张我们希望 AI
完成的任务图谱。一开始是最基础的任务（比如返回基本事实或保证语法正确），到翻译、写代码和写诗等中等难度任务，再到写小说或做科研等最难的任务。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWibyg4uITrAsseQNEk4cMePkfSNhPMcfUicTAKarcmr5Um8fCPCWV6GLqmMy2THicNf5qWkfh3N1mphw/640?wx_fmt=png&from=appmsg)  
随着模型增大，它们能完成的任务也越来越多，比如 GPT-2 只能做这些任务中的一小部分，GPT-3 能做更多任务，而 GPT-4
则涌现出了更多能力，比如调试代码、写诗等。  
于是，问题来了：既然下一词预测效果这么好，那么能否仅仅通过扩展下一词预测就达到 AGI 呢？  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWibyg4uITrAsseQNEk4cMePksTlCT4aPlJDXhR4t6OwPFZ5LyxyaPlkhtgGFkVDr9ibmcvWmqUIRzVw/640?wx_fmt=png&from=appmsg)  
我的回答是：也许可以，但会非常困难，我们需要继续大量扩展。  
**仅仅做下一词预测确实存在一个根本性的瓶颈：有些词非常难预测，需要大量工作。**  
比如下图左侧就给出了一个下一词预测效果很好的例子，这里很容易预测出最后一个词是 models。而对于右侧的数学题，仅仅通过下一词预测很难得到正确答案是
A、B、C 中的哪一个。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWibyg4uITrAsseQNEk4cMePkIS8TkMZoAMVicDPpxS8JwYeJ10XP4F4TJILEbv3dZuzFXUNy9hUb2MA/640?wx_fmt=png&from=appmsg)  
这里要强调的是，任务是有难度区分的。如果单纯使用下一词预测，那就是使用相同的计算量来解决非常简单的任务和非常困难的任务。  
而我们想要的实际上是：对于简单的问题使用少量计算，对于困难的问题则使用大量计算（比如得到竞赛数学多选题的答案）。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWibyg4uITrAsseQNEk4cMePkbU0UVoDcfhOBS9QI0WysTAamebqAzkiavEsFKibia0q5U28ITNsMf0ozA/640?wx_fmt=png&from=appmsg)  
一个方法是思维链提示，这是我们在过去几年一直在做的事情。这个方法很简单：只需要提示语言模型给出推理链，就像你向老师展示你的解题过程一样。然后语言模型就可以在给出最终答案之前实际输出这个推理链。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWibyg4uITrAsseQNEk4cMePkQeNGqpvCibAwNX0Uu53425618P9ibexx1Fz311vXItSy95ZxbvHebdqg/640?wx_fmt=png&from=appmsg)  
事实证明该方法的效果相当不错。如果你有一个数学应用题基准测试，你会看到如果使用思维链而不是直接回答，随着模型增大，性能会有巨大的提升。  
另一个角度是基于这本书《思考，快与慢》，其中分出了所谓的 System 1 和 System 2 思维。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWibyg4uITrAsseQNEk4cMePkVgY4Owj6XwoWxTJoOqMfCkYK2WQia5FJ0n7JXoBH92LKIQHARNBmRzQ/640?wx_fmt=png&from=appmsg)  
System 1 思维就是下一词预测，它是自动的、不费力的、直觉式的，比如重复一个基本事实或认出一张脸。  
思维链则属于 System 2 思维，这是有意识的、费力的、受控的。  
不过，思维链提示也有一个关键问题：当你在大多数互联网数据上训练模型时，模型训练的推理大多看起来是下图左侧这样的。这个例子来自一个大学数学作业，你可以需要花一个小时做题，然后再用
10 分钟将其转录成 LaTeX。格式上，可以看到，其一开始就给出了答案，之后是进行证明。所以这实际上是对内部推理过程的事后总结。  
这是我的一个大学数学作业解答的例子。你会注意到，如果你想想这是从哪里来的，我可能花了一个小时在纸上做这个问题，然后花了 10 分钟把它转录成
LaTeX。你可以看到，你知道，证明在开头，答案在开头等等。所以它实际上是对实际内部推理过程的事后总结。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWibyg4uITrAsseQNEk4cMePkEXlE2WQDNxvxRTIjNwuQTX4hAgzfHzHlBqPQUo8ZdoqojYzB4Iuchw/640?wx_fmt=png&from=appmsg)  
但实际上，思维链是想要模型像我们的内心独白一样思考。如上右图所示，我们希望模型说：「让我们先看看应该采用什么方法；我要试试这个；这个实际上不对，我再试试别的……」  
**扩展范式二：基于思维链扩展强化学习**  
这就引出了第二个范式：基于思维链扩展强化学习。这种范式的思路是训练语言模型，使之在给出答案之前会进行思考。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWibyg4uITrAsseQNEk4cMePkkLfHiaBhcBPKwDpjTErKKaPscPqCbicEZxA67qmZKrXMibHG2E5e2mdDg/640?wx_fmt=png&from=appmsg)  
研究者发现，除了扩大训练的计算规模之外（这是过去几十年的主流做法），还有另一个可能性：延长语言模型在执行推理时的思考时间。  
基于此思路，OpenAI 打造了 o1。其相关博客已经介绍了相关技术，值得一读，这里总结了其中几个关键点。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWibyg4uITrAsseQNEk4cMePkvSH8BeCXekwFic3sw3LZq88ibem7wJoKjYKEMsnoibghH3bFCpy3KlZ6g/640?wx_fmt=png&from=appmsg)  
这篇博客展示了一些 o1 给出的思维链，从中我们可以学到不少东西。  
![](https://mmbiz.qpic.cn/sz_mmbiz_gif/KmXPKA19gWibyg4uITrAsseQNEk4cMePkk0eVR2GEza9fe9NfzZahqhibU8EHEj82QC4NEYThzQFAM3iacV7HU8sg/640?wx_fmt=gif&from=appmsg)  
如上图所示，o1 正在解决一个化学问题。首先它会说：「让我们理解一下问题是什么」，这是它在尝试正确理解问题。然后它会尝试确定有哪些离子以及哪些离子会对 pH
值产生影响。结果发现，其中既有弱酸，也有弱碱。于是 o1 又想出了一个策略，通过 Ka、Kb 值来计算 pH 值。然后它进行了一些回溯，发现使用 Kb
更好。它再继续思考：正确的公式是什么，如何计算它。最后，它得到了最终答案。  
思维链大有作用的另一类问题是存在验证不对称的问题，即验证一个解比生成一个解容易得多的情况，比如填字游戏、数独或写一首符合某些约束条件的诗。下图给出了一个填字游戏例子。  
![](https://mmbiz.qpic.cn/sz_mmbiz_gif/KmXPKA19gWibyg4uITrAsseQNEk4cMePk7T29Q6MLvBOtk490ZdBbIcrMsAALicwzXVEGfpOO9lhWGlEfHsicRmkw/640?wx_fmt=gif&from=appmsg)  
另外，如果有些问题需要大量思考，思维链也会很有用，比如竞赛数学或竞赛编程。事实上，思维链带来的效果非常明显，GPT-4o
在竞赛数学和竞赛编程上只能达到百分之十几的水平，而 o1-preview 和 o1
能够解决大部分问题。所以这是「基本上不能完成任务」与「能够解决大多数问题」的差异。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWibyg4uITrAsseQNEk4cMePkUMic5Gul6DHWZ5kzRic6lxmWTzYaTVcfmUebdxZXam3LNomFAfc16Iqw/640?wx_fmt=png&from=appmsg)  
o1
博客中还提到了在竞赛数学数据集上的一次通过准确率。随着训练计算量增多，一次通过准确率也会提升。而第二张图表明，如果给模型更多时间思考推理，那么在数学基准测试上也能有一个正向的扩展趋势。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWibyg4uITrAsseQNEk4cMePkXkelkzotQibARA5QC3SxagVUampleCD130oRGeQlFWxb6rJtpTFmrbg/640?wx_fmt=png&from=appmsg)  
现在我想谈谈为什么这种范式如此特别。我认为，对许多人来说，我们对 AI 如此兴奋的原因是，我们希望有一天 AI
能够帮助我们解决人类面临的最具挑战性的问题，比如医疗、疾病、环境等等。  
因此，理想情况下，未来的方向是：你可以提出一个非常具有挑战性的问题（比如撰写一篇关于如何制造 AI
的研究论文），然后语言模型可以在推理时花费大量的计算资源来尝试解决这个问题。也许你提出问题后，成千上万的 GPU
运行一个月，最终它会返回一个完整的答案，比如这是关于如何制造 AI 的一整套研究成果。  
我们想要推断的是，目前 AI 可能只能思考几秒或几分钟，但最终我们希望 AI 能够思考几小时、几天、几周甚至几个月，以帮助我们解决一些最具挑战性的问题。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWibyg4uITrAsseQNEk4cMePkJUzia84bhpfycZKsGCJhkJWgscDbKcbGIyAXDzRukxf2NFjXUBJ9HmQ/640?wx_fmt=png&from=appmsg)  
**扩展如何改变了 AI 研究文化**  
接下来，我想谈谈扩展如何改变了 AI 研究文化。其中**一个重要的转变是对数据的重视。****  
****![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWibyg4uITrAsseQNEk4cMePkTcyic7klIwWbLfC1vRpZS4wZrvjIHL5N4J1JibaMNBHvuQDzfFEQ80qQ/640?wx_fmt=png&from=appmsg)**  
过去，从 2010 年到 2017 年，甚至更早，目标是让神经网络尽可能好地学习某种 X 和 Y 的关系，也就是追求最佳的性能。而如今，目标变成了如何让 X
和 Y 尽可能好，因为我们已经有了一种有效的学习方法。  
总结来说，AI 的潜力在于它能够通过大量的计算资源和时间来帮助我们解决复杂问题，**而研究文化的转变则体现在从单纯优化模型转向优化数据本身。这种变化正在推动
AI 向更深远的方向发展。**  
这个例子很好地说明了**现代机器学习研究重点的转变** 。过去，研究人员通常会专注于在现有数据集（如
ImageNet）上训练出最好的模型，以追求更高的评分（如准确率）。当时的目标是优化模型本身，而不是考虑扩展或改进数据集，比如将 ImageNet 扩大
10 倍，再训练模型。  
然而，如今的研究趋势表明，通过改进数据集（X 和 Y）的质量或领域相关性，可以显著提升模型的表现。一个典型的例子是 Google 两年前发布的
Minerva 模型。Minerva 的研究团队并没有从头设计一个新的模型，而是基于现有的语言模型，通过在大量数学相关数据（如 arXiv
上的论文）上继续训练，显著提升了模型在数学任务上的表现。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWibyg4uITrAsseQNEk4cMePkhWQOE66G25TXjYcAxoDhVnrK0Hw2mLswtmqOZSSWpTlMpGzWxj5ia1w/640?wx_fmt=png&from=appmsg)  
AI 文化的另一个转变是，我们某种程度上存在一种滞后现象，即我们没有真正能够捕捉到语言模型能力极限的评估标准。这是我从 David Ryan
的一次演讲中提取的一张图表。这张图表基本上展示了**基准测试被「饱和」的速度有多快** 。你可以看到，大约 8
年前，一个基准测试可能需要几年时间才会被饱和。而最近一些具有挑战性的基准测试，比如问答（QA），可能在大约 0.1 年（约 1 个月）内就被饱和了。当
David 被问到是否会设计一个更难的基准测试时，他的回答是，他正在着手设计一个最难的基准测试。这听起来非常有趣。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWibyg4uITrAsseQNEk4cMePkR8NnJJo3iclY7M7U9NLkewdPDccpIkMmOmCtnKGiaic11YMEpLXtOf71g/640?wx_fmt=png&from=appmsg)  
此外，人工智能文化的另一个变化是朝着**高度多任务模型** （highly multi-task models）的方向发展。过去，每个 NLP
任务都需要一个单独的模型。而现在，我们有一个单一的模型试图完成许多不同的任务。这导致了一些奇怪的现象，比如模型可能是一个竞赛级别的程序员和数学家，但当你问它
9.11 和 9.8 哪个更大时，它却会说 9.11 更大。  
这里的挑战在于，我们需要从多个维度来衡量语言模型的表现。由于有如此多的评估基准和方法，模型的应用场景也非常广泛，因此很难说一个模型是否严格优于另一个模型。通常情况下，**没有一个模型能在所有方面都严格优于其他模型**
。  
有时候我听到的一种观点是，AI 无法做到某些事情，因此它没有用。但我的看法是，**AI 并不需要在所有方面都达到人类水平**
。它只需要在少数几个用例中表现出色，就能对人类非常有用。  
最后我想说的是，**智能和用户体验是两个可以分别改进的维度**
。通常，人们会尝试通过让语言模型在数学和编码等方面表现更好来改进它，但这并不意味着你会得到一个用户体验更好的模型。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWibyg4uITrAsseQNEk4cMePkq3arXONG6sXLQpkCMQlB3C1IOY1WZ4Wl6UbKAfK2PcPHFkVdqZINWA/640?wx_fmt=png&from=appmsg)  
也许我们文化中的最后一个转变是朝着**更大规模的团队** 合作发展。比如在 2015
年，两个人可以写出一篇开创性的论文，这篇论文甚至可能是被引用次数最多的之一。而如今，你需要一个团队来完成这样的工作。比如谷歌的 Gemini
开发团队，人员名单就占满了一整页。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWibyg4uITrAsseQNEk4cMePkvqfLOhZLrqOEOiakny1ZYuE56UeCibEMDD5jbdABiciaHOVdCelU6sppkA/640?wx_fmt=png&from=appmsg)  
**未来展望**  
接下来我来谈谈**人工智能未来会继续发展的方向** 。  
其中一个让我非常兴奋的方向是 **AI 在科学和医疗领域的应用** 。我认为，作为人类，我们在研究方面还算不错，但我们有很多局限性。  
比如，我们无法记住互联网上的所有信息，我们会感到疲倦，会分心等等。我认为 AI
在科学和医疗创新方面确实有很大的潜力，因为它几乎可以学习任何东西，而且不会感到疲倦，可以长时间工作，对吧？  
另一个方向是**更加注重事实的 AI** 。目前，像 ChatGPT
这样的模型仍然会出现比我们预期更多的幻觉（即生成不准确或虚构的内容）。最终，我认为我们有可能开发出一种几乎不会产生幻觉的模型，它非常擅长引用来源，并且非常精确。  
总的来说，AI 在科学、医疗以及提高事实准确性方面的潜力巨大，这些领域将继续推动 AI 技术的发展。  
我认为我们将朝着**多模态 AI** 的方向发展。文本是一个非常好的学习媒介，因为它是对我们世界的高度压缩表示。但我们将朝着更融入我们世界的 AI
发展，比如 Sora 和高级语音模式。  
我认为**工具使用** 也将成为另一个重要的方向。  
目前，AI 更像是一个聊天助手，你可以向它提问并获取答案。但我认为，最终我们希望达到的状态是 AI 能够代表用户执行操作，并且能够主动为用户提供服务。  
最后，我认为我们将看到**许多 AI 应用落地** 。我感觉在技术的研究阶段和实际部署之间总是存在一定的滞后。例如，Waymo
在旧金山这样的复杂驾驶环境中已经运行得很好，但谷歌还没有将 Waymo 推广到全球大部分地区。另一个例子是，我觉得现在的 AI
已经足够好，如在餐厅为你点餐，但这一应用还没有被广泛采用。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWibyg4uITrAsseQNEk4cMePkxakiagmD1vk5KXespauesNoOpNVyOKiaicKDmHASYYXHD06JiaYEsSVZbQ/640?wx_fmt=png&from=appmsg)  
好的，接下来我将回到第一张图，也就是 2019 年和 2024 年，下面我们加上一个五年预测。过去 AI 的能力非常有限，但如今它已经非常强大。我对未来五年
AI 的发展感到非常兴奋，并鼓励大家都去思考这个问题。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWibyg4uITrAsseQNEk4cMePkUDGfB7e485GTt2b1MDYbsibWEsiadquplA5ey1nJj1bDWLxv0vRLpaGA/640?wx_fmt=png&from=appmsg)  
最后，我想用这句话结束：当《海底总动员》中的 Nemo 不知道下一步该做什么并陷入困境时，Dory 说：你只需要继续游下去。我想说的是，**你只需要继续
Scaling** 。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWibyg4uITrAsseQNEk4cMePkOh2jxxqDibeeuBwxWVBvCjyarx8MqgL7ibH8MYcwXTwGH4HTyFHOjd4g/640?wx_fmt=png&from=appmsg)  
© THE END 转载请联系本公众号获得授权投稿或寻求报道：liyazhou@jiqizhixin.com  

