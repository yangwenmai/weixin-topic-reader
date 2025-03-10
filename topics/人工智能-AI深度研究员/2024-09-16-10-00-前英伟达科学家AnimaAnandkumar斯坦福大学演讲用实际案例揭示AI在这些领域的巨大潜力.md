# 前英伟达科学家Anima Anandkumar斯坦福大学演讲，用实际案例揭示AI在这些领域的巨大潜力

文章作者: AI深度研究员
发布时间: 2024-09-16 10:00
发布地: 上海
原文链接: http://mp.weixin.qq.com/s?__biz=Mzg5NTc4ODkzOA==&mid=2247493185&idx=1&sn=288ebece41c82ad5ea876f3de313dd42&chksm=c00854a4f77fddb20dbdc45d867a12027a756448e5cc2b7fb20ea57d207fdf28fd96d078f1cf#rd

封面图链接: https://mmbiz.qpic.cn/mmbiz_jpg/iaqv2tagPYAiaLG41TJ0mk35ERWYoI2ziaAMGYjQm8cibsozWWHMs34iabnuyPY64APrnFfHS3icHmkgRInGK0jI69Lg/300

**（关注公众号并设为🌟标，获取最新人工智能资讯和产品）**

全文18,000 字，阅读约需36分钟

斯坦福大学人工智能（AI）课程上，作为NVIDIA前机器学习高级总监和亚马逊云服务前首席科学家，现在则重新回归加州理工学院的Bren计算机学院教授Anima
Anandkumar分享了她对这一领域的个人思考。  
Anandkumar教授在AI应用于科学研究方面是公认的先驱。她强调，在AI模型开发中，创造性和灵活性至关重要。她指出："我们在给模型加入理论或结构时需要非常有创造性和灵活性。你不能以一种僵化的方式加入结构，限制了模型的表达能力或根据数据学习更好特征的能力。"这一观点挑战了传统的AI开发方法，强调了数据驱动方法的重要性。

教授进一步解释道："如果你有足够的数据，应该始终优先考虑数据，而不是为了强加某种结构而牺牲数据的优势。"她指出，过去在语言模型开发中，人们试图强制加入语法规则，但这种方法往往忽视了实际语言使用的复杂性和多样性，尤其是在互联网环境中。

Anandkumar教授的研究团队采用了一种更为平衡的方法。她说："对于我们的模型，我们有足够的灵活性，类似于Transformer，但它被应用到了连续域中。如果数据足够多，你甚至不需要再加任何结构，它可以自动学习。"这种方法不仅提高了模型的学习能力，还保持了其灵活性和适应性。

对于AI发展的新方向。她提到："随着下一代GPT-5、GPT-6的出现，未来的发展方向非常明确，就是智能代理。"这些新模型不仅能进行更复杂的推理和决策，还能通过反复的交互和对齐来提高表现。这种进步不仅仅是数据量的增加，更是质的飞跃。

  

# 课程要点总结

  1. **张量算法的核心：**

介绍张量分解在机器学习中的应用。此算法适合大规模数据处理，可有效分解复杂结构。具有避免局部最优解、并行性和可扩展性等优势。

  2. **非凸优化与鞍点问题：**

如何在非凸优化中避开鞍点。她的团队提出新方法加速优化过程，在深度学习和复杂模型训练中得到应用。

  3. **AI与创造力的结合：**

Anandkumar教授探讨了AI在创造性领域的应用。她认为AI不仅能用于科学计算和数据分析，还能在艺术、设计等领域带来新可能。随着技术进步，我们将看到更多机器与人类共同创造的案例。

  4. **AI的社会影响与未来展望：**

讨论了AI的发展趋势及其社会影响。她指出AI具有推动技术进步和经济增长的潜力，但也伴随着社会和伦理挑战。她呼吁技术开发者和政策制定者合作，确保AI对社会产生积极影响。

# 课堂文稿整理

主持人教授Erik Brynjolfsson：
让我先简单介绍一下。Anima，你们可能已经听说了，她是加州理工学院的Bren计算教授。她之前曾是NVIDIA的机器学习高级总监，也担任过亚马逊云服务的首席科学家。她是将AI应用于科学的先锋，她的研究涵盖了张量代数方法、深度学习以及非凸问题的研究。今天她会进行一场大约20分钟的简短演讲，之后我们会进行一场炉边对话，并回答大家的问题。欢迎Anima！

### 1、简短演讲

我想你们大家肯定都在或多或少地思考生成式AI。我刚刚听到了关于AI工具的使用讨论，所以你们对语言模型已经非常熟悉了。但我认为革命不仅仅局限于语言，而是这些广泛的生成模型学习框架在许多科学领域中也有着深远的影响。

首先，我想快速介绍一下，为什么生成式AI如此重要，它的核心在于能够生成高维分布的样本。这意味着生成的内容不仅仅是复杂的大段文本或图像，还有分子、蛋白质，甚至可能是新的病毒突变基因组。你可以想象，这种能力不仅仅是理解给定的输入，还能生成新的样本，这是生成式AI与过去十年主导的判别式AI的主要区别。

过去的AI主要专注于判别任务，例如给一张图片，让AI判断图片中的物体是猫还是狗。这属于判别式AI，因为它是在理解现有的样本并做出区分。而生成式AI则更进一步，通过足够的计算资源，我们可以从简单的低维描述（如简单的提示或分子的愿望清单）生成复杂的输出，例如具体的分子。这是一个非常困难的过程，但如今我们可以通过大量的数据和规模来实现。语言模型就是一个很好的例子，它们的训练过程非常简单：给定上下文，预测下一个词。我们通过预训练在大规模数据上学习这个过程，然后通过人类反馈的微调，也就是通过强化学习实现对齐，使模型能够理解我们的指令并做出适当的响应。同时，我们也会确保模型不会输出仇恨言论等不当内容。

虽然语言模型在许多应用中表现出色，但它们也有局限性，主要是缺乏“体现性”（embodiment）。文字需要转化为与物理世界互动的行为，这就需要一个“具体化的智能体”（embodied
agent）。这些智能体可以根据文本指令执行一系列任务，甚至在没有特定训练的情况下，泛化到新的任务。我们早期在NVIDIA的工作，尤其是与斯坦福的合作，展示了如何通过文本和图像指令让机器人执行不同的任务。文本成为让机器人从特定任务转向泛化任务的重要工具，不仅是在物理世界中，也包括虚拟世界。我们在“Voyager”项目中展示了如何使用语言模型在各种环境中持续学习技能，比如在《Minecraft》（动作角色扮演类游戏）中学习。你可以逐步从简单到复杂地学习技能，并且利用之前学到的技能。这也是我们人类学习的方式。我们先学习某些基础知识，然后按照学习计划逐步攻克更难的问题。而这正是我们希望智能体能够做到的：通过语言模型产生可以在《Minecraft》中执行的动作，并决定下一步要做什么。

这与传统的强化学习不同。当AlphaGo在大约十年前击败世界顶级围棋冠军时，大家都感到非常惊讶，因为AI能够在如此多的可能性中找到比人类更优的最佳解。但是，那时它的焦点仅仅在于一个游戏和一个任务，目标就是赢得比赛，已经是预先设定好的。而《Minecraft》——不知在场的各位有多少人玩过——则更注重创造力。你不会只专注于一件事，你可以建造那些令人惊叹的城堡，我听说甚至有人在《Minecraft》中建造了CPU和GPU。这个游戏的可能性是无限的，而这正是我认为AI智能体的潜力所在。语言模型不应只是孤立的工具，它们可以为智能体提供持续的查询和帮助。而这些智能体最终要自己决定如何继续积累技能，并在环境中解决越来越复杂的问题。《Minecraft》便是这种应用的一个展示。你可以想象，类似的软件应用可以用于所有类型的软件编程。当然，仅靠语言模型还存在一个问题，那就是应对“幻觉”（hallucination）。这些模型目前并不完全基于事实。毕竟，如果你在整个互联网的数据上进行训练，所有信息都会混杂在一起——从笑话、诗歌、软件代码到数学事实都有。当你要求语言模型去证明一个定理时，你不能期望它每次都能100%正确。它可能会声称这个证明是正确的，但ChatGPT很多时候会出错。

因此，在我们这个项目中——我之前建议大家阅读的参考材料中提到的——我们将验证机制加入到语言模型中，以检查语言模型的陈述是否正确。其实我们不需要重新开发这一部分，几十年来已经有许多“formal
verifiers”存在。Lean是其中的一个重要工具，许多数学家，包括著名的数学家陶哲轩，都使用Lean，还有一个庞大的社区在将数学形式化为Lean语言。这意味着，当你阅读一篇数学论文时，可能并不确定其中的证明是否正确。作为一名数学专家，你可能会一个个步骤去验证，但如果有一个程序可以确保每一步都是正确的，那么首先你就不需要担心证明的正确性。这一概念在许多领域，特别是那些对安全性要求极高的领域非常有用。比如飞机、无人机、火箭的控制程序中，都必须确保每一个步骤的正确性，否则使用这些程序会非常不安全。我们可以将同样的思路应用于数学领域，将Lean和语言模型结合起来。语言模型可以提出想法，比如说“我认为为了证明这个最大公约数（GCD），我们应该采取这一步骤”。然后，Lean作为验证器可以检查这一步是否正确。通过这种方式，语言模型的每一个证明都可以被100%地确认，这样就没有“幻觉”了。在数学领域，我们可以通过这种方式验证和确认每一步的正确性，而在其他领域，尤其是涉及社会信念或道德问题时，则不能这么做。因此，我认为语言模型的领域专用应用前景广阔，尤其是在有明确验证机制的领域，比如数学中，我们可以彻底消除幻觉。这种逻辑推理对于AI在许多科学领域中的成功至关重要。

我已经谈到了语言模型如何应用于各种不同的领域。但是，除了语言，你还可以扩展到其他模态和数据类型。一个典型的例子就是利用基因组数据，而不是英语或其他自然语言。那么这意味着你现在有了核苷酸序列，ATGC，如果你还记得DNA的结构，我们可以输入这些序列，然后让基因组语言模型预测下一组核苷酸序列。通过这种方式，模型可以学习基因的潜在功能，正如它学习自然语言中的单词含义一样。这个类比是相同的，并且我们也是在大规模数据上进行训练。我们首次建立了基因组语言模型，训练了超过1.1亿条已知病毒和细菌的基因组序列。这些数据来自英国生物银行，它拥有已知病毒和细菌突变的最大数据库，从流感病毒、大肠杆菌到冠状病毒，几乎所有你能想到的病毒和细菌都包含在内。而通常情况下，生物学家往往只研究某一种特定的病毒，比如流感病毒，研究它如何突变。疾病控制与预防中心（CDC）也会尝试预测最佳突变路径并制作相应的疫苗来应对这些突变。然而，通过使用大规模生成式AI模型，我们可以全面观察不同病毒和细菌随时间的进化过程。由于模型可以学习所有突变过程，它可以帮助我们预测哪些突变更有可能发生，从而提出新的变异体预测方法。在这个项目中，我们专门针对冠状病毒进行了模型微调。在训练过程中，我们只输入了疫情第一年出现的变异株，如阿尔法和贝塔变异株，当时其他变异株尚未出现。然而，这个基因组语言模型能够准确预测后来出现的变异株，比如德尔塔和奥密克戎。通过这种方式，模型成功学习了病毒的进化动态，预测了病毒可能的突变方向，这对我们应对未来的流行病具有重要帮助。

主持人: 我可以问个问题吗？这太令人惊叹了。那么他们是否能够提前制作疫苗，还是说这个想法是要在变异出现之前就开发出疫苗？

**Anima Anandkumar:**
是的，正是这个想法。我们训练这个模型时，德尔塔和奥密克戎的疫情浪潮刚刚过去，所以对于这次疫情来说，有点晚了。但希望未来能够提前进行预测。

****主持人: 那么在预测之后，你们能不能开始预判这些变异的特性呢？或者这是否超出了你们的研究范围？

**Anima Anandkumar:**
正是下一个问题。你可以生成这些基因组序列，但问题是它们的影响是什么？哪些变异更加令人担忧？哪些变异更具威胁性？比如说某些碱基对的组合可能导致更致命的变异？

但我们如何研究这一点呢？为了研究这一点，我这里展示的是冠状病毒的刺突蛋白（蓝色）如何与人体内的蛋白靶点相互作用。你需要了解哪里结合力强，哪里结合力弱。如果一种病毒株更加致命或更令人担忧，通常它的结合力更强，进而对人体的破坏性更大。因此，仅仅通过基因组序列，你无法获取所有应该关注的变异信息。另一方面，如果你深入研究生物过程本身，比如病毒如何进入人体并与体内蛋白靶点结合，以及其他相关因素，我们还研究了它如何通过呼吸气溶胶传播，哪些分子有助于其在气溶胶中的传播，以及病毒的复制过程受哪些因素影响，这些都有助于研究病毒的传染性。因此，研究这些过程不仅仅是查看离散数据或序列数据。我做了一个类比，基因组就像语言，虽然不像英语有26个字母，但基因组只有四个字母：ATGC。你可以利用这些序列训练模型，架构与语言模型类似，使用的是Transformer模型。然而，要研究这些在空间和时间维度上的过程，比如分子如何结合、分子动力学如何随时间变化，这需要更深入的研究。

这些过程在自然界中随处可见。你可以从原子和分子层面一直研究到行星尺度。以行星尺度为例，你可以想象，明天的天气会是怎样的？会有暴风雨吗？会下雨吗？为了预测这些，你需要研究从云中引发降水的微小颗粒，到像大气河流这样的大规模现象。大气河流对于加利福尼亚非常重要，因为它们在冬季引发暴风雨，其范围可能宽达数千英里。所以从微观到宏观的现象都在相互作用，最终决定了地球上的天气。这就是仅靠语言模型不足以应对的领域。语言是一种对某些现象的高层次描述，正如数学也是一种高层次的描述。事实上，你可以通过数学方程式来描述这些过程。

比如说，如果你研究的是分子动力学，你可以使用牛顿运动定律来描述分子的伸展和运动。你还可以深入到量子效应，使用薛定谔方程及其各种近似法。所以，我们对这些系统的描述方程是完全了解的。但是，挑战在于如何在大规模上进行模拟。实际上，要对量子模拟进行计算，模拟一个含有100个原子的分子所需的计算量可能超过宇宙的年龄，这就是我们面临的瓶颈。在这种情况下，我们与语言模型处于不同的领域。对于语言来说，试图描述规则非常困难，因为例外太多，无法通过一个数学方程来描述所有的英语文本。然而，我们可以从互联网上的大量数据中学习。另一方面，如果你想学习这些物理现象，数据是有限的。当然，我们有一些观测数据，你可以通过显微镜观察病毒，了解蛋白质之间的相互作用；你也可以使用卫星数据，评估我们大气中的风和其他模式。然而，这些数据量是有限的。那么问题来了，生成式AI或者大规模AI模型是否可以应用于科学现象？我们可以通过将数学方程的知识整合到模型中来实现这一点。我们可以使用现有的模拟器生成数据，或者直接将物理定律和方程知识嵌入模型中。但要做到这一点的挑战在于捕捉非常精细的尺度。如果你想了解大气中的云如何移动，你需要非常精细的尺度，这也是传统数值求解器使这些模拟变得非常昂贵的原因。

举例来说，如果你要模拟云，所需的分辨率大约是100米的量级，甚至在斯坦福校园内部，你也需要多个网格点，而这些网格点非常多。现在，想象一下你要在全球范围内进行模拟，这将是一幅极其精细的地球分辨率图像。而且，你还需要在时间上也采取非常小的时间步长来获得准确的模拟。这使得用传统的模拟方法来实现这一目标几乎是不可能的。传统的模拟方法尝试的是直接求解方程，没有利用任何数据的学习。它们的做法是说：“好吧，我来试着求解这些方程。”但要做到这一点，我只能迈出小步，而且需要进行大量的小步，这样会变得非常昂贵。同时，如果研究的区域本身很大，我还需要大容量的内存来让网格足够精细，使求解器收敛。这就是AI潜力所在的领域，而现在我们已经有证据表明，AI可以加速这些数学方程的求解，速度远远超过以往的传统方法。这个类比类似于计算机视觉领域的变化。在深度学习之前，人们手工设计特征。如果你要分类一张人脸，某些特征会被认为更重要。正如你尝试去寻找人的眼睛一样。

你可以手动设计每个特征，但问题在于变化太多。你无法为每一种面部变化、每个角度、每种光线都手动设计特征。数值求解器也是同样的道理。你可以试着手动设计特征来让它们收敛，但你并不知道这些特征是否是最优的。即使我们可能需要一个非常精细的网格，如果我们试图直接求解所有这些点，也许可以通过非线性变换找到一个更粗的潜在空间网格，从而加快速度。这正是我们通过使用“神经算子”（Neural
Operators）技术所实现的。神经算子扩展了神经网络的概念，比如Transformer，但它们现在被应用于连续空间。如果你还记得之前提到的云的例子，你可以尝试以某个分辨率来建模云。如果选择的分辨率太粗糙，结果就会是模糊的垃圾信息，无法提供足够有用的信息来预测云的变化。这是很多物理问题的挑战所在：如果你的网格不够精细，就无法准确预测流体如何流动。

这和计算机视觉有些不同。在视觉领域，如果图像看上去足够好就可以了，但在流体流动等物理问题中，你需要准确预测其行为。在这种情况下，神经算子并不需要将分辨率固定在某个值上，而是类似于图形学中的矢量图和栅格图的区别。栅格图的分辨率是预先设定的，像素数量是固定的，如果你放大图片，图像会变得模糊，因为像素数没有增加。而矢量图则是用形状参数化的，无论你放大多少，图像都能保持清晰。神经算子也是这样，它学习了这些形状，所以它输出的结果是连续函数，可以任意放大，而不会失去精度。你不需要预先手动编写这些函数，它们是从数据中学习的。你可以提供各种流体动力学场景的数据，或天气数据，甚至是材料拉伸的数据，模型会从中学习，而不需要你预先指定分辨率。你还可以在多个分辨率下训练它，模型会根据数据自动适应不同的分辨率。与传统的Transformer不同，语言模型中你要预先定义词汇表，每个词都有一个固定的Token。而在神经算子中，我们并不需要在固定的分辨率下定义Token，而是允许它们在任何分辨率下无限制地定义。这种灵活性使得我们可以捕捉到更精细的细节。

那么，神经算子学习的是函数，而不是你预先编程的神经网络。它是从数据中学习的。比如说，你可以输入流体动力学的数据或天气数据，模型从中学习，不需要你预先设置分辨率。而且，神经网络可以拟合任意函数，所以你可以让它变得非常精细。

### 2、神经网络函数拟合

**学生1:** 那这些函数是如何定义的？它们会随着数据的不同而变化吗？

**Anima Anandkumar:**
这是它的优势所在。这些模型是从数据中学习的，你不需要预先定义它们的形式。比如说，如果我固定函数为正弦波，这就是傅里叶变换所做的事情，但这太有限了。如果我的模型在正弦波上不是稀疏的，我就无法准确地表示它。而神经算子可以从数据中学习出什么样的函数应该被使用。它通过神经网络中的非线性变换进行学习，类似于Transformer的工作原理。通过这种方式，它能够比传统的数值求解器更高效地解决这些偏微分方程。

**学生2:** 这可以被理解为降维处理，但是对函数进行降维对吗？

**Anima Anandkumar:**
正确。传统的神经网络是对固定分辨率进行降维，而在神经算子中，我们处理的是连续空间中的函数。你可以在训练时决定分辨率，而在测试时你也被迫使用相同的分辨率。但我们现在取消了这个限制，允许输入和输出可以在任意分辨率下进行，同时仍然可以进行降维。

**学生3: **
我有一个问题。对于数值模拟，最大的限制似乎是计算成本。能否给我们一些有关启用这些技术后的计算改进的概念？我知道在不同领域可能有所不同，提升是10倍，100倍，还是更大？

**Anima Anandkumar:**
是的，可能是百万倍。对于等离子体演变的模拟，提升了百万倍，尤其是在核聚变的等离子体演变方面。而在天气预测中，提升了数万倍。真正决定这些计算改进的因素是，求解器需要在多大程度上达到最精细的尺度。例如，托卡马克反应堆中的等离子体可能变得极不稳定，科学家需要将网格做得非常精细，才能理解何时等离子体会突然失去约束并变得不稳定，导致破坏。因此，模拟越困难，改进越明显。而像推动一个球这样简单的模拟，我们可能不会有明显的加速，因为这太容易直接求解了。在这种情况下，我不需要使用这些方法。

******学生4:
**你之前提到，关于数学证明，我们可以使用验证器来检查输出。那么，如果我们用神经算子来求解一些偏微分方程系统，如何将这些验证器扩展到该应用中？

**Anima Anandkumar:**
这是个好问题，我认为这是未来我们可以结合所有方法的领域。目前，定理证明器是纯符号化的，也就是说，你在查看变量时，会将这些语句形式化，并逐步证明这些语句。这其中没有涉及数值求解，因此你不会将变量带入具体的数值并进行求解。而神经算子目前是完全数值化的。如果你给我流体动力学中的Navier-
Stokes方程，我会直接尝试数值求解，没有进行符号化的操作或任何进一步的修改。但将来，我们可能会开发出神经符号方法，试图做出有效的变换，使方程变得更简单。或许不是针对Navier-
Stokes方程，而是针对耦合方程系统，通过符号化方式简化它们，同时也进行更好的数值求解。目前的主要瓶颈在于，像Lean这样的验证器并没有很好地支持微积分或微分方程，因为这些领域更加复杂，比如拓扑学是完全符号化的，更多的精力也集中在那里。但是未来，神经符号方法可能会是一个结合数值求解和符号操作的方式。

### 3、神经算子和传统机器学习

******学生5: **那么，神经算子和传统机器学习框架中的输入有什么区别？我可以想象，我们也可以训练一个模型在高低分辨率下工作，但它还是一样的原理。

**Anima Anandkumar:**
其实基本思路是一样的。你可以将其想象成一个视频模型，像Sora或其他任何视频模型。它可以处理空间和时间上的三维数据，或者像这个例子中的二维数据。因此，这个方法和视觉模型是一样的。唯一的不同点在于，神经算子现在有了灵活性，可以在训练和测试时直接输入多种分辨率。

******学生6: ** 那么，你是否需要对标准的层进行任何修改，以适应不同的形状或结构呢？

**Anima Anandkumar:**
主要的变化是在输入和输出的处理上，使其更加灵活。至于中间层，你仍然可以使用Transformer模型，仍然可以将其转换为一个更粗的网格，并使用任何标准的方法。所以主要的变化发生在输入和输出层。而在架构方面，神经算子可以将现有的架构（如卷积神经网络或Transformer）扩展到能够处理多种分辨率。这并不是一种全新的架构，而是现有架构的一个超集。

******学生7:
**你好，我是一名博士生，研究形式化方法。我想回到你之前提到的计算增益问题。你提到了一些你们使用的模型，能否进一步谈谈它们的架构？这些是基于大型Transformer模型的吗？还是来自普通的全连接网络之类的？

**Anima Anandkumar:**
正如我之前提到的，神经算子是对任何神经网络的一种扩展。你给我一个神经网络，我可以将其转化为神经算子，这意味着它的层可以处理任意分辨率的输入和输出。当然，问题在于哪个架构最适合特定应用。在这个例子中，我们使用了傅里叶神经算子，它有傅里叶层，也有非线性层，比如MLP层，甚至可以加入注意力层。所以它是多种方法的结合。而傅里叶方法在很多应用中表现很好，尤其是流体动力学，因为它涉及多个尺度的相互作用，傅里叶域对此的描述更为出色。但与传统方法不同的是，这并不仅仅是基于傅里叶变换的，我们在中间加入了非线性层，这样可以学习到比纯傅里叶基底更具表现力的基础。

******学生8: **你们是如何选择傅里叶作为架构的？这个过程有没有什么微调？

**Anima Anandkumar:**
这个想法其实来自于我们与应用数学和数值求解器领域的合作者的讨论。事实证明，在流体动力学中，常用的求解器是伪谱法求解器，它会在傅里叶域和标准域之间来回切换。我们意识到，在这个过程中可以加入很多非线性层，包括非线性编码器和解码器。这样一来，模型就变得更加有表现力了。从某种意义上说，这种做法的特例还是数值求解器。如果这些模型只学习到恒等变换，那么它们回到了原来的求解器上，这也是一种有效的解决方案。但你可以做得更好。因此，我们的目标是保留数值求解器已有的性质，同时扩展这些模型的表现力。此外，这种方法与Transformer等神经网络也有不错的关联，结合了传统模拟方法和神经网络。

****学生9: ****
我是一名计算机科学专业的本科生，我对这个特定网络的机制很好奇。当它输出下一个时间帧的预测时，它会将这个预测重新输入模型来生成下一个时间帧吗？还是有其他方式？

**Anima Anandkumar:**
是的，我们有多种选择。这被称为自回归方法（autoregressive），即将输出重新输入并逐帧生成预测。对于像天气模型这样的应用，我们就是这样做的。但我们也有一些模型可以在潜在空间中展开模拟，而不需要在观测域中进行。另外，还有一些模型可以在任何时间点直接输出结果，使用傅里叶或其他方法处理任何时间分辨率。所以具体的选择取决于具体的用例。我想展示一些我们使用神经算子的实际案例。天气模型是我们首先应用这一技术的复杂领域之一。天气预测的挑战在于，它的数据分辨率很高，比如全球范围内每25公里采样一次的数据。而我们有几十年的历史数据，大约有5万条样本数据。相对于语言模型来说，5万条样本其实不算多。天气数据包含的是初始条件到下一步的时间对数据，每条样本对应一组初始条件和下一步的预测。

**主持人:** 如果每隔25公里采样一次，这样全球范围内有多少网格点？

**Anima Anandkumar:**
全球大约有一千多，具体我不太记得了，你可以算一下。这就像是一个计算机视觉中的高分辨率图像。但是，我们的样本量并不大。另外，天气数据不仅仅像图像那样只有RGB通道，你还有风速、湿度、大气层的不同层次等，所以我们处理的变量超过100个。这就是天气预测中的高维挑战之一。当我们在2020年末开始研究神经算子时，我们希望能应用到一些具有挑战性的实际案例上。流体动力学已经被认为是一个挑战了，但我们还希望能触及一些直接影响现实世界的问题，而天气模型就是一个非常好的应用领域。许多人曾认为我们疯了，因为气象预测领域有几十年的方法积累。我记得小时候，超级计算机的一个经典应用就是用于天气预测，大家都说天气预测需要强大的计算能力。所以我们的问题是：通过使用神经算子和完全基于深度学习的方法，我们能做得多好？具体来说，就是我获取初始条件后，利用神经算子预测下一步，比如每六小时预测一次天气。我们采用自回归方法来预测，结果我们可以提供长达两周的天气预测。而事实证明，速度快了很多。第一次运行这个模型时，比数值模型快了大约4.5万倍。

传统上，这需要依赖基于CPU的超级计算机，而现在，你只需要一台普通的游戏电脑就能运行。只要有一块消费者级别的GPU，你就可以运行自己的天气模型。我们已经开源了这个模型，使用的是宽松的许可协议，你可以下载模型并运行自己的天气预测。这展示了这些模型的潜力和能力，即将复杂的物理计算微型化，并且表现得相当不错。这个模型现在已经在ECMWF（欧洲中期天气预报中心）中运行，你可以获取实时天气预测数据。这些是不同天气变量的预测图表，模型在去年对一些飓风的预测比数值模型还要准确。因此，不仅仅是速度快了数万倍，准确性也得到了保证。通常，速度和准确性之间是存在权衡的，但我们能够做到两者兼得是因为我们在从数据中学习。当你使用传统的数值求解器进行天气预测时，你假设使用的是Navier-
Stokes方程，并假设了一个特定的雷诺数（Reynolds
number）。这些都是建模假设，而你不能完全基于数据来调整这些假设。你可能能够校准一些参数，但数量有限，你无法根据所有可用的数据去调整更大范围的变量。而神经网络模型允许我们适应数据，特别是在建模误差较大的情况下，从数据中学习有助于我们获得更好的科学结果。

### 4、模型中物理现象

**主持人:** 这是否意味着天气中的某些潜在物理现象尚未被写入方程中？换句话说，这些模型是否在发现一些新的物理现象？

**Anima Anandkumar:** 这是个很难回答的问题。可能是Navier-Stokes方程本身并不完全正确——确实有一些研究指出Navier-
Stokes在某些边缘案例中可能并不完美。更可能的答案是，我们不知道准确的参数设定，比如这里的雷诺数是多少，或者Navier-
Stokes方程与其他因素如何相互作用。我们也面临着不完美的观测数据，比如卫星数据不规则，尤其是在全球南部，预测的准确性更差。相比发达国家可以进行长达两周的天气预测，全球南部的天气预测在三到四天之后就很难准确了，原因是缺乏足够的传感器和卫星覆盖。但这些模型可以帮助我们更好地适应有限的区域性数据。你可以使用气象气球或其他低成本的数据收集手段，通过这些数据进一步精细化预测。相比标准模型，这种方法更具适应性。

主持人: 听起来主要是学习到更精确的数据，而不是物理模型本身有问题，对吗？

**Anima Anandkumar:**
是的，我们并没有完全分离这两种影响。它既可能是因为数据不同，也可能是其他因素共同作用。当前我们还没有完全解开这个谜题，因为你有部分观测数据，数值模型的参数设定可能不精确，这会导致模拟结果不准确。或者方程本身就是错误的。我个人认为，更多的原因在于前者，因为这些方程已经经过了各种风洞测试，大体上是没问题的。但如果地球上不同地区的雷诺数发生了各种变化，而我们不知道如何建模这些变化，可能会因为这些建模选择导致大的误差。

******学生10:
**我来自MBA项目。我在思考这些技术的机构采纳问题。在这门课上，我们经常讨论技术的极端颠覆性。但在你们的案例中，像是传统的气象预测机构采纳了提升了4.5万倍的技术。你能不能谈谈这些技术是如何在现有渠道中被采纳的，是否没有带来太多变化？还是说随着这些技术的兴起，行业内部发生了很大的转变？

**Anima Anandkumar:**
这是个很好的问题。我一开始稍微提到过，有很多怀疑的声音。事实上，巧合的是，在我们发布模型之前，甚至有一篇评论文章讨论了“深度学习是否能超越数值天气模型”，结论是否定的：还需要很多年的努力，甚至可能几十年才能实现。所以，我必须说，很多传统上不喜欢机器学习这种“黑箱”性质的人一开始非常怀疑他们能否做好，因为有一些罕见的事件，比如飓风，你不会期望机器学习能在这种情况下表现得很好。大家普遍认为机器学习擅长应对的是常规事件，比如像斯坦福这里每天都是阳光明媚的天气。但结果表明，机器学习模型不仅能够准确捕捉这些常规事件，有时甚至在罕见事件上表现得更好。

**主持人:** 那么，它可以在没有见过飓风的情况下预测飓风吗？

**Anima Anandkumar:**
它确实见过一些飓风，所以在这方面表现得更好。而且，我们还进行了更极端的压力测试，比如在赤道附近人为设置一个大块的热源，这几乎是反物理的，因为你不可能在这么有限的区域内将海洋加热到3到4度。我们进行了这些极端测试，虽然希望这种情况永远不会发生在地球上，但测试结果与我们预期的一致：热量扩散到了其他区域，当然也导致其他地方变热了，但它的表现符合物理规律，尽管我们给它设定了如此极端的条件。

主持人: 你们是否在机构内得到了很大的反对？还是他们很快就接受了？

**Anima Anandkumar:**
回到你的问题，当时的确有很多怀疑的声音。但是我们的态度是，有数据就去试，而不是先讨论它能否成功。我认为这才是我们真正的起点。一旦我们展示了它与数值天气模型的竞争力，其他团队也纷纷加入进来。正如在计算机视觉或语言模型领域一样，不是一个团队独占这个领域，而是整个领域都开始活跃起来。令我感到惊讶的是，像欧洲中期天气预报中心（ECMWF）和美国国家海洋和大气管理局（NOAA）这样的传统机构也快速采纳了这些模型。他们正在进一步训练自己的数据，并不断改进这些模型。所以，我必须说，我对他们如此快速地接受并应用这些技术感到有些惊讶。但一旦我们展示了确凿的证据，特别是我们使用了他们惯用的指标，不仅仅是风速或气温这样的单一变量，甚至像飓风、台风等极端天气事件的预测数据，我们都进行了详细的统计分析，并与他们进行了大量的交流。这是与气象和气候科学家们合作完成的，这也确保了我们做的事情是正确的。

******学生11:
**我在想，这些神经算子应该被视为现有算法的加速器，还是它们属于一个全新的算法类别？它们的计算复杂度与传统算法相同吗，还是仅仅是更快？

**Anima Anandkumar:**
与数值求解器相比，神经算子通常更快，因为数值求解器可以被看作是这个架构类别中的一个特例。如果你正确选择了架构并进行了良好的训练，你可以期望它更快、更好。我们在很多领域都看到了这一点。主要的问题是速度提升的程度。通常的经验法则是，如果你的数值求解器需要非常精细的网格，并且现象越非线性、越不稳定，我们的模型往往会获得更大的加速效果。

****学生12: **** 你好，我是计算机科学系的博士生。你的模型与DeepMind的GraphCast模型相比如何？

**Anima Anandkumar:**
GraphCast是基于我们的工作发展出来的模型之一。GraphCast通过图的方式来处理邻近网格点之间的关系，并以分层的方式进行处理。而我们的方法是将地球看作一个球体，然后在球面上进行傅里叶变换，使用球面基底并学习这些基底的系数，再与非线性层结合。我们即将发布一个更新的架构，它既基于图，也有局部连接，同时也包含全局信息，依然将几何体视为球体。如果你进行长时间的预测，比如多年气候预测时，使用球面几何的模型比将地球视为矩形的模型更加稳定。因为如果将地球视为矩形，随着预测时间的延长，预测结果会变得不再一致，模型可能会发散，变得不稳定。这个问题在科学领域应用时尤为重要，因为通常不仅仅是单一的目标函数。即便目标是准确预测未来六小时的天气，这也通常是不够的。对于天气模型，你还需要考虑长期预测能力以及对罕见的极端天气事件的预测能力。这些目标有时甚至无法明确定义为损失函数。因此，我们试图将更多的领域知识和约束条件整合进来，以确保模型表现良好。

### 5、特定场景模型

****学生13: ****
你提到了不同模型的多种目标函数。我想了解当前天气建模领域的现状，比如是否有针对特定使用场景或气候的多种模型？例如，沙漠地区是否有专门的沙漠模型？目前的情况是什么样的？

**Anima Anandkumar:**
目前我们使用的是全球模型，它学习了全球范围内的依赖关系，我们将其视为一个球体。我们并没有为不同的地理区域或气候条件建立专门的模型。这些条件是由不同的变量隐式确定的，比如温度、湿度、气压等变量，所以模型会自动识别出热带雨林和沙漠等区域，而不需要我们显式地为每个区域创建模型。这是关于不确定性的下一个话题。实际上，对于像飓风这样的极端天气，最重要的不确定性是当前条件。如果你稍微改变当前飓风路径的预测，飓风仍然在墨西哥湾中，但你需要尽早预测它是否会登陆佛罗里达州。越早做出准确预测越好，但如果你在墨西哥湾稍微扰动当前条件，预测结果可能会发生巨大变化。这就是所谓的“混沌现象”。如果你听说过蝴蝶效应（无论是电影还是概念），你就会知道，微小的变化可能会带来巨大的影响。我们关心的是这些不确定性，因此我们不仅需要飓风可能路径的预测，还需要知道路径对当前条件的敏感性。如果我稍微扰动当前条件，它会改变多少？这将帮助我们确定飓风击中佛罗里达州的概率。基于这些预测，我们可以采取行动。比如，是否需要进行撤离，是否需要加强某些防护措施。这也是这些模型比传统天气模型更好的地方。

我想你可能会感到惊讶，如果你看看传统的天气模型，你能猜到为了确定敏感性，通常会进行多少次扰动实验吗？你想猜一下吗？当前ECMWF（欧洲中期天气预报中心）会进行多少次这样的实验？

****学生14: **:** 10次？

**Anima Anandkumar:**
50次。所以数量并不多。如果你只是用50个样本来计算标准差，这显然是不够的。而原因是每次模拟都需要庞大的超级计算机，政府的资源是有限的。而现在使用这些新的模型，你可以在单个GPU上运行数千甚至数百万次模拟。这样你可以达到所需的统计界限，不再需要仅仅依赖50次模拟来做出判断。对于气候模型来说，情况更糟糕。很多气候预测实际上只进行了一次模拟。可是气候是关于几十年后会发生什么的，你不能只进行一次模拟然后得出结论。你需要进行很多次模拟，而降低成本能够显著提升不确定性量化的准确性。在极端天气预测中，极值往往比中位数更重要，这就是为什么极端天气事件的预测如此重要。如果你没有足够的模拟广度，你甚至无法预测到极端事件的发生。我们不仅在飓风上证明了这一点，在热浪和其他极端事件上也是如此。一旦增加模拟的次数，我们就能捕捉到这些事件。如果你一只手在冰箱里，另一只手在烤箱里，平均温度可能看似正常，但其实并不行。正是如此，你需要考虑到范围的分布。

******学生15: **
我在学习经济学。我对你提到的基因组学、病毒和细菌突变预测的工作非常感兴趣。我父亲是一名病毒学家，所以这些内容对我来说非常有趣。我想问一下，作为来自工业界和学术界的专家，你如何看待学术界对这项新技术的态度？他们是否开放接受，还是存在某种新旧势力的对抗？他们是否在拥抱这项技术？

**Anima Anandkumar:**
这有点类似于我之前提到的关于天气模型的情况。但有趣的是，我觉得生物学家比物理学家更开放。不过这种情况正在快速改变。也许是因为生物学的模型更加不确定，没有那么多的固定规则。虽然你可以在分子层面提出一些假设，比如分子间的作用力，但当你进入更高层次的系统，比如人类或临床水平时，不确定性太多了。而且很明显，获取不同实验层面的更多数据有助于提高预测准确性。实际上，不仅是基因组模型，我们在加速量子化学和分子结合过程中的一些技术已经被用于一个正进入临床试验的药物，这是我帮助指导的一家初创公司正在推进的项目。因此，这项技术正在快速进入现实世界。我认为学术界现在不再争论是否应该使用这项技术，问题在于如何在使用它的同时，满足传统方法的一些要求。如果传统的模拟方法表现得很好，那么我们希望AI能够做得更好。如果它不能达到这个标准，那它就是不合格的。所以我们需要在保留传统方法优点的基础上，做到更好。

****学生16: **** 输入模型的数据质量有多重要？你如何确保全球范围内的数据质量一致？

**Anima Anandkumar:**
这是个很好的问题。在某种程度上，我们比语言模型的情况要好。语言模型依赖于互联网上的数据，虽然有一些数据清洗的过程，但你看到过很多小模型通过更好的数据管理取得了不错的结果，比如微软的Phi模型系列。在我们的领域，数据质量确实非常重要，不过这里我们讨论的是高度整理的数据。比如基因组数据的Biobank，这是科学家精心整理的数据集。甚至蛋白质折叠的成功也得益于科学家们几十年来精心创建的数据库。关于天气数据，所有的历史数据都是通过卫星获取的，但进一步还有所谓的“再分析”（reanalysis）过程。也就是利用物理模型来完善网格，并消除某些偏差，因为卫星的覆盖并不均匀。当然，像流体动力学等模拟，你可以从现有的数值求解器中生成数据。所以，我们的世界虽然数据量较小，但这些数据是经过精心策划、清理和实验验证的高质量数据。对于天气模型，这些数据经过了与实际世界预测的仔细比对。因此，任何改动都需要经过深思熟虑。我们现在有了少量但高质量的数据，并且我们可以在物理模型的使用上更加灵活和富有创造性。

### 6、GPT-5或者GPT-6的形态

****学生17: **** 我是政治学专业的本科生。我想知道，随着下一代GPT-5、GPT-6的出现，你认为我们将能够解决哪些目前还无法解决的前沿问题？

**Anima Anandkumar:**
未来的发展方向非常明确，就是智能代理。网上也有一些关于新模型的讨论，比如它们能够进行更复杂的推理和决策——比如Q星（Q-star）。GPT-2也有类似的事情发生，人们称其为GPT-2的突破。有人说它解决了一些以往模型无法解决的数学竞赛问题。

**主持人:** 但Yann LeCun表示这些模型只是在记忆这些问题。

**Anima Anandkumar:** Yann
LeCun确实持怀疑态度，而且他很多时候是对的。所以，我们很快就会知道真相。现在的问题已经不再是增加大量数据，而是通过反复的交互和对齐来提高模型表现。你可以通过给模型设定奖励函数，使它在解决像数学奥林匹克竞赛这样复杂的多步骤问题时表现更好。这不再是只关注单一步骤的优化，而是要在更长的过程中表现出色。这在计算上非常昂贵，但OpenAI有足够的计算资源来支持。

**主持人:** 关于数据和理论之间的关系，这非常基础。Rich Sutton提出了一个《苦涩的教训》（bitter
lesson），即更多的数据往往是更好的。我看到Andre
Karpathy讨论了特斯拉正在用机器学习替代数十万甚至数百万行代码。语言模型领域以前非常强调语法规则，但现在则变得更倾向于统计方法。这是否意味着我们会越来越依赖数据，而放弃理论？

**Anima Anandkumar:**
我认为我们在给模型加入理论或结构时需要非常有创造性和灵活性。你不能以一种僵化的方式加入结构，限制了模型的表达能力或根据数据学习更好特征的能力。问题是，如果你有足够的数据，应该始终优先考虑数据，而不是为了强加某种结构而牺牲数据的优势。过去的很多失败就在于这种问题。在语言模型中，是的，你可以尝试构建语法树，但它并不总是完美的，尤其是在互联网上，很多人使用的语言并不符合语法规则，所以没有一个完美匹配的规则。而且如果你强行加入这些规则，优化的过程可能变得更加复杂。即使这些规则在某个领域是正确的，但你可能无法让模型学习，因为你强加的条件太苛刻了。对于我们的模型也是一样，我们有足够的灵活性，类似于Transformer，但它被应用到了连续域中。如果数据足够多，你甚至不需要再加任何结构，它可以自动学习。因为数据有限，我们会通过加入结构来辅助数据，这与数据是互补的，依然可以很好地学习。我认为这就是为什么这需要更多的艺术性，并且要非常小心。所以大多数时候，我们从数据开始。事实上，在天气的例子中，我们只使用了数据。唯一涉及物理的部分是假设地球是一个球体，并加以约束。我们从未仔细尝试去引入物理守恒定律，或者模拟温度如何移动。

****主持人:** ：** 当你描述卫星数据时，它们可能会使用一些物理方法来填补空白并平滑数据，所以在数据整理时已经加入了一些物理知识？

**Anima Anandkumar:**
没错，但这都是隐式的。我们并没有明确地要求模型一直遵循某些物理定律，因为如果你在优化过程中施加太多限制，会使优化变得更加困难。

****主持人:**** 如果你有一些数据点看起来完全不合理，模型会怎么处理？它会尝试平滑这些数据吗？

**Anima Anandkumar:**
这是任何深度学习模型的通性。如果只是一个异常数据点，通常会被忽略；如果有足够多的类似数据点，模型会试图捕捉它们的结构。像飓风这样的现象就很异常，冷热空气以一种奇怪的方式混合，这是非正常条件。但即使这种情况很少见，也有足够的特征让模型可以捕捉到这些信号，因为我们给模型足够的灵活性，不会强制它只学习平滑的气流，这样它就能捕捉到这些异常现象。

****主持人:****
你提到的DNA、病毒和蛋白质折叠的问题，有几种不同的理论可以用来预测这些序列的下一个元素。比如从序列到蛋白质结构的预测，最后再到其功能的预测，每一步都在不断连接在一起。这其实与智能代理有关，它们的系统彼此连接，互相输入信息。未来我们会看到越来越多这种方式的应用。

**Anima Anandkumar:**
事实上，我们在后续的研究中已经实现了这一点，现在你可以给模型设置奖励函数，而不仅仅是依赖人工反馈。对于语言模型，你可以问用户是否喜欢生成的结果，但在这里，奖励函数可能是看它是否具有良好的分子结合功能，或者蛋白质是否正确折叠。我们不希望有无序的蛋白质，而是希望有良好结构的蛋白质。所有这些都可以用作奖励函数，然后通过强化学习或直接偏好优化（DPO）来训练模型，这也是斯坦福大学开发的技术。这些技术让我们能够训练既生成离散序列、又能进行连续预测的模型，比如分子结合功能的预测。通过这些方法，AI不仅变得更快，还可以产生有实际功能的蛋白质，这在现实世界中具有巨大的影响。

还有其他的应用案例，比如二氧化碳储存。我不会深入讨论细节，只是说你可以模拟如果将二氧化碳注入地下井，如何预测压力的变化，几十年后二氧化碳是否还会留在井中，或者是否会扩散回大气层。如果是后者，我们当然不希望这么做。这有助于我们为实现净零排放的未来做好规划。还有许多领域的应用，比如材料变形、核聚变（如托卡马克中等离子体的演变），以及成像中的反问题。你只看到传感器接收到的波，但你需要知道的是人体内部的情况。这些反问题可以通过更快的方式来解决。我还想强调一点，不仅仅是模拟或预测，还可以用于逆向设计。我们能否生成更好的设计？如果你让DALL-
E或其他图像模型绘制一架飞机或无人机，它可能会生成一些无法实际制造的设计。而在我们展示的例子中，有一个是在加州理工学院设计的医疗导管，这是我们可以实际制造和使用的设计。

我们的想法是，在标准的医疗导管中，它只是一个从人体中抽出液体的管子，但细菌往往会沿着管壁逆流而上，因为那里的流速较低，容易导致感染。实际上，医院里有超过50万例与医疗相关的感染，尤其是住院时间较长的患者更容易感染。我们有一个非常简单的想法，就是在导管内增加一些小的凸起或三角形结构，非常微小，可以通过3D打印来实现，并对其形状进行优化。我们的直觉是，这些三角形结构可以形成涡流。由于这种尖锐的形状，液体流动会形成漩涡，细菌无法逆流而上，从而减少了感染的可能性。你可以看到我们3D打印的导管，在液体流动中，颗粒物不能逆流进入人体。结果显示，我们测得的细菌污染减少了100倍。这个设计已经进入了临床研究，并且是在非常短的时间内完成的。AI提出了设计，我们只3D打印了一次，结果就成功了。这传达了一个信息：使用AI可以大大减少实验次数。当然，仍然存在一些不确定性。如果模型无法很好地模拟实际情况，就需要进行物理实验。但你可以根据实验结果不断改进模型，逐步减少实验次数，并通过AI加速整个过程。

### 7、AI的科学应用实例

****主持人:****
这只是一个早期的例子，展示了未来将会发生的巨大变革。我们不仅可以设计出漂亮、创造性的东西，如房屋、桥梁或导管，更重要的是它们功能齐全，并且在物理世界中是可行的。你可以打印出来，实际制造它们。

**Anima Anandkumar:**
另一个快速的例子是光刻中面罩设计的优化，这在芯片制造中非常重要。随着物理尺寸的缩小，尤其是在制造最新的GPU时，光的衍射效应变得至关重要，因此需要设计出正确的面罩。这又是一个可以通过逆向问题解决的场景。

那么，这一切的未来方向是什么呢？我讲了很多科学应用，主要是关于基于特定领域数据学习的模型。但最终，我们现在正在思考的是，能否有一天开发出一个可以理解所有科学的模型。从某种意义上说，你可以说ChatGPT已经理解了所有科学，因为它阅读了各种教科书。如果你问它任何科学领域的问题，它都会给出不错的回答。如果你问它设计分子，它甚至可以提出一些建议。实际上，我们曾用它为直接空气捕获技术设计了分子连接器的建议。但另一方面，如果你让它实际模拟分子是否会以某种方式结合，或者预测明天的天气，它并不能在内部模拟这些物理现象。而像Sora这样的模型，它通过学习视频来理解物理，但物理学对它来说几乎是偶然学到的，它只学习了视频中展示的物理现象。

那么，能不能将所有这些模型直接基于物理学来训练呢？我们现在已经训练了一个大约与GPT-2规模相当的模型，这个模型涵盖了多种不同的物理学领域，比如流体、波动方程、材料等。想象一下，一个模型能够学习如何模拟和设计许多此类现象，而且不仅仅是简单的物理现象，还包括多物理现象。如果你在设计飞机时，模型不仅要考虑空气动力学，还要考虑噪音问题，或者在高温下材料是否会过度拉伸。现实世界中的物理现象并不是由单一方程来定义的，而是由多个方程共同描述的复杂现象。天气就是一个很好的例子，它高度依赖于多物理现象，而不是一个简化的方程。

最终，我们能否开发出一个能够学习大量耦合物理现象的模型，为AI提供更好的物理基础？我认为这是一个非常令人兴奋的未来。

****主持人:**** 这确实非常激动人心。非常感谢你，Anima。

**Anima Anandkumar:** 谢谢！

****主持人:**** 谢谢！

* * *

斯坦福大学人工智能课程链接：https://www.youtube.com/watch?v=6houmprGB-I&t=3s

 _**对了，喜欢就别忘了点赞、收藏、转发支持一下！期待在评论区听到你的观点和看法!**_

##  往期回顾

[1、[斯坦福讲座：LinkedIn创始人Reid
Hoffman告别"一万小时理论"，用AI无需深入学习即可掌握专业工具]](https://mp.weixin.qq.com/s?__biz=Mzg5NTc4ODkzOA==&mid=2247493053&idx=1&sn=0ed4e6610e82c70f9a33307a468ff9d2&chksm=c0085758f77fde4e4966f2e090b8bf812a78d3832d181205f5be229395b8d8d0d790c0712e82&scene=21#wechat_redirect)

[2、[演讲总结：未来学家凯文·凯利刚刚亮相2024上海外滩大会，预言AI时代三大趋势，未来所有工作都会使用人工智能]](https://mp.weixin.qq.com/s?__biz=Mzg5NTc4ODkzOA==&mid=2247492984&idx=1&sn=616407aa8bc793fa2d229105b577706b&chksm=c008579df77fde8b15f2b32b6582d8049b63654aeb5e90a2fc7e6646b52fb5678fe0ce2beb07&scene=21#wechat_redirect)

[3、[Google 前 CEO
埃里克·施密特在斯坦福2万字讲座实录：AI明年三大趋势，第一个趋势将彻底改变你获取信息的方式](https://mp.weixin.qq.com/s?__biz=Mzg5NTc4ODkzOA==&mid=2247492675&idx=1&sn=0a10f92f41666fb4096475b505cf6206&chksm=c00856a6f77fdfb04c7ab490bd01bf68506c11fe124c3127c1961473ff2e1ca00cf7a361967d&scene=21#wechat_redirect)

* * *

![](https://mmbiz.qpic.cn/mmbiz_png/iaqv2tagPYAhtRhTOjz2QwH4dIlC3YUcYbaicMEwjqQqh06Yhdd7EH3r9wiaMRArLz0a6Zhx6uiaUD7hguPfbY0nAg/640?wx_fmt=png&from=appmsg)

****

**我们旨在将先进科技与创新想法完美融合!**

**想要掌握人工智能，但不知从何开始？告诉我们你的需求，学习AI让你抓住这波浪潮******

## 告别昂贵服务和缺人烦恼,再见漫长交付周期

##  无限创意,分分钟生成专业级产品

## 感受 AI 带来的全新工作体验！

** _欢迎各大品牌方、媒体、企业和个人等_**

** _请联系负责人微信：Milo-1101_**

** _\--END--_**

****未经许可不得转载，务必保留公众号原文链接和公众号按钮****

