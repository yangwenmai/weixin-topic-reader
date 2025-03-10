# Google 工程师告诉你什么是AI的提示工程？我们又如何编写能产生有用输出的提示词（Prompt）呢？

文章作者: AI深度研究员
发布时间: 2024-06-23 10:01
发布地: 上海
原文链接: http://mp.weixin.qq.com/s?__biz=Mzg5NTc4ODkzOA==&mid=2247491335&idx=2&sn=ee6d477adcca7630797ca7964af3c046&chksm=c00bade2f77c24f49b7bf3f14caf108fe6242418dcbf28e7f1f81d57a640c47a8be0ea157dce#rd

封面图链接: https://mmbiz.qpic.cn/mmbiz_jpg/iaqv2tagPYAhBKIib9olHAZpiaAMEHNbEpEBzzSADX4wBMaiaXqsXHZcyvO2EUMcmGLic3g2ib93dyP8yfDe0g2J50zg/300

提示工程是为了设计出最佳提示词（Prompt），以获得理想的输出结果。想象一下你在日常生活中是如何运用语言的。语言可以用于很多目的，比如建立联系，表达观点，解释想法。有时，你可能需要用语言引导他人以某种特定的方式进行回应。可能你希望别人给你一些建议，或者对某件事情进行解释。在这些情况下，你表达的方式会影响别人的回应。向会话式
AI 工具提问或者请求时也是如此。

提示词是一种文字输入方式，它为 AI 模型提供了如何生成输出的指示。比如，有个服装店的老板可能希望 AI
模型能给出一些新的营销他们衣服的想法。这个店主可能会写下这样的提示词：“我有一家服装店。我们销售高级女装。帮我想一些营销的点子。”在这门课程的这一部分，你将关注如何设计有效的提示词，以便从会话式
AI 工具中得到更有用的结果。

这段视频是Coursera上的Google AI
Essentials课程。在这个模块中，你将学习如何编写有效的提示，从而获得理想的输出结果。你将学会如何将提示技术（例如少样本提示）应用到工作中，并理解大语言模型（LLM）生成输出的原理，以及在使用前评估输出的重要性。

# 视频文本整理

## 介绍

我叫 Yufeng，我在 Google 担任工程师。我对设计提示词感兴趣的最初动机是因为从语言模型中获取有用的回应需要花费大量时间。有时候，我们甚至在不使用
AI 的情况下也能更快地完成工作。我希望能使我们的工具更加高效，而不是效率更低。我很高兴能帮助你更深入地了解如何设计有效的提示词。

首先，你会了解大语言模型如何根据提示词产生回应，然后你将探讨提示词设计在提高输出质量方面的作用。提示工程就是为了从生成式 AI
中获取有用输出而设计有效提示词的过程。你会学到如何创建明确且具体的提示词，这是提示词设计中最重要的部分之一。你的提示词越明确且具体，就越有可能得到有用的输出。提示词设计的另一个重要环节是迭代。你会学习如何评估输出结果并对你的提示词进行修订。这样也会在你在职场上使用对话式
AI 工具时帮助你得到你需要的结果。我们还会探讨一种特殊的提示词技巧，也就是少样本提示。

撰写有效的提示词需要批判思维和创造力。这个过程也可能是有趣的，如果你想在职场上有效利用
AI，这种技巧是非常重要的。你是否对开始学习提示词设计感到兴奋？我们开始吧。

## 了解大语言模型的运作

了解大语言模型（LLM）是如何运作的，对我们来说十分有益，以及它的局限性。大语言模型，简称 LLM，是一种 AI
模型。它通过大量的文本学习，识别单词、概念和词组之间的模式，以便能够对提示词产生反应。那么，大语言模型是如何学习生成有益的提示词反应的呢？

一个大语言模型会基于数以百万计的文本资源进行学习，这些资源包括书籍、文章、网站等等。这个学习过程帮助模型掌握人类语言中的模式和关系。一般来说，模型接收到的高质量数据越多，其表现就会越好。由于大语言模型可以识别语言中的众多模式，他们也能预测在一系列词语中哪个词最有可能作为下一个词出现。

## 示例

我们来看一个简单的例子，以基础理解大语言模型是如何预测一系列词语中的下一个词的。比如这个不完整的句子，“雨后，街道变得……”大语言模型可以通过计算不同单词的可能性来预测接下来出现什么词。根据现有的数据，单词“湿润”可能有很高的概率作为下一个词，单词“干净”则可能性较低，而单词“干燥”的可能性则极低。在这种情况下，大语言模型可能会选择概率最高的词“湿润”来完成这句话，或者可能是另一个概率较高的词，例如“潮湿”。

你每次使用大语言模型时，它对同一提示词的反应可能会有所不同。大语言模型利用统计学分析给定序列中所有词汇之间的关系，并计算序列中下一个词是成千上万个可能词汇的概率。这种预测性使得大语言模型能够回应问题和请求，无论是完成一个简单的句子，还是为新产品发布或广告活动制定一部引人入胜的故事。

尽管大语言模型很强大，但你可能并不总能得到你想要的输出。有时，这是因为大语言模型的训练数据有一些局限性。例如，大语言模型的输出可能会有偏见，因为其训练数据中存在偏见。这些数据可能包括反映社会不公正偏见的新闻文章和网站。由于接受的训练数据的影响，大语言模型可能更容易产生将专业职业与特定性别角色关联的输出。

## 局限性

大语言模型的训练数据在其他方面也可能存在局限性。例如，如果训练数据中没有足够的关于某一主题的信息，大语言模型可能无法产生足够的关于该主题的内容。会影响大语言模型输出的另一个因素是它们有时会生成不真实的信息，这种现象我们称之为"幻觉"。"幻觉"是
AI
输出的不真实信息。虽然大语言模型很擅长回应各种问题和指令，但有时它们可能会产生事实上不准确的文本。比如说，你正在研究一家公司，并使用大语言模型帮你总结公司的历史，但大语言模型可能会幻觉，产生一些不准确的信息，如公司的成立日期或者当前的员工人数等细节。

产生这种"幻觉"的原因有很多，如大语言模型的训练数据质量，提示词的措辞，或者大语言模型分析文本和预测序列中下一个词的方法等。因此，对于大语言模型的输出，我们必须批判性地评估，以确定它们是否事实准确，是否无偏见，是否与你的特定请求相关，并且是否提供了足够的信息。

无论你是使用 AI
来总结一份长篇报告，为营销一个产品创造想法，还是梳理一个项目计划，都需要仔细检查输出的质量。最后，我们不能对大语言模型的能力做出假设。比如，它可能曾为一封说服客户的信件产生了高质量的输出，但这并不意味着你未来再次使用同样的提示词时，就一定能得到相同质量的输出。大语言模型是强大的工具但要想有效使用，需要人类的指导。了解它的局限性能帮助你获取最好的结果。

## 编写有用的提示词

如何编写能产生有用输出的提示词呢？一般来说，你的起点质量极大地影响你的成果质量。以烹饪为例。假设你正在准备晚餐。如果你有新鲜、高质量的食材，那么，你就更可能做出一顿美味的餐。反之，如果你缺少某种食材，或者食材的质量不高，那么做出的餐可能就没那么好吃。同样的道理，你输入到会话
AI
工具中的提示词的质量会影响该工具的输出质量。这就是提示工程的重要性。提示工程就是设计最佳的提示词，以获取你想要的大语言模型的输出。这包括编写明确、具体的提示词，提供相关的上下文。

为了更好地理解大语言模型所需的上下文，我们可以比较一下一个人和一个大语言模型对同一问题的反应。假设一个素食者问他的朋友：“我应该去旧金山的哪些餐厅？”朋友可能会推荐一些有好的素食菜单的餐厅。然而，如果用同样的问题提示大语言模型，它可能推荐的餐厅并不适合素食者。人们在回答这类问题时会自然而然地考虑到朋友是素食者这一点。但是，大语言模型并不具备这种先验知识。因此，要从大语言模型中获取所需信息，提示词需要更具体。在这种情况下，提示词需要明确提到餐厅应该有良好的素食选择。

### 示例

下面我们通过一个例子来看一下如何运用提示工程提高大语言模型输出的质量。假设你正在规划一次公司活动，并需要为即将举行的会议确定一个主题。我们可以给
Gemini 写一个提示词，让它生成五个可能的活动主题。你也可以在 ChatGPT，Microsoft Copilot 或者其他的会话 AI
工具中使用类似的提示词。现在，我们来看看得到的回应。

“为酒店业关于客户体验的专业会议生成五个可能的主题。”这个提示词更加详细，明确说明这是一个关于酒店业客户体验的专业会议。我们来看看这个回应。现在好多了。我们巧妙地设计了提示词，加入了具体且相关的上下文信息，这使得
Gemini
能够产生有用的输出。当你提供明确且具体的指示，并包含必要的上下文信息，你就赋予了大语言模型生成有用输出的能力。不过要记住，由于大语言模型的一些限制，有时候不论提示词的质量如何，都有可能无法得到高质量的输出。例如，如果你希望大语言模型找到某个

当前事件的信息，但是模型无法获取到这些信息，那么它就无法提供你需要的输出。

就像设计中的其他领域一样，提示工程通常是一个反复迭代的过程。有时，即使你提供了明确而具体的指示，也可能无法在第一次得到你想要的输出。当我们的第一次提示没有得到我们想要的回应时，我们修订了提示词以改善输出。第二次迭代提供了更清晰且更具体的指示，从而产生了更有用的输出。

利用大语言模型在工作中提升生产力和创造力的方式有很多。其中最常见的一种就是内容创作。你可以利用大语言模型创建电子邮件、规划、想法等。例如，你可以请大语言模型帮你撰写一篇关于工作相关主题的文章。让我们引导
Gemini
为一篇文章创建大纲，这篇文章是关于数据可视化最佳实践的。这篇文章是为初级商业分析师准备的。可以注意到，我们的引导语以动词“创建”开头。在你的引导语中使用动词通常是有益的，它可以引领大语言模型为你的预期任务生成有用的结果。得到的结果为我们的文章初稿提供了有用的大纲。

你也可以用大语言模型来进行内容概括。大语言模型可以概括出一篇冗长文档的主要内容。例如，你可以要求 Gemini
对一段详细的关于项目管理策略的段落进行概括。我们先以“概括”这个动词作为引导语，并明确我们想要的结果是一句话的内容。然后我们将要概括的段落内容包含进去。最后得到的结果是对该段落的简洁、一句话的概述。尽管这个例子展示了怎样概括一个单独的段落，你也可以要求大语言模型概括更长的文本和文档。

分类也是另一个可能的用途。例如，你或许可以引导大语言模型对一组客户评论的情绪进行分类，如正向、负向或中性。现在我们来引导 Gemini
对一家零售网站新设计的客户评论进行正向、负向或中性的分类吧。提示词引导了分类的输出。提示词中还包含了评论。在这个例子中，有四条评论。输出准确地将前两条评论分类为负面的，第三条为正面的，第四条为中性的。考虑一下你如何能有效地利用大语言模型来完成大规模的分类任务。

或者你可以用大语言模型来进行提取，这涉及从文本中提取数据，并将其转化为更易于理解的结构化格式。假设你有一份报告，提供了一个全球组织的信息。你可以提示
Gemini
提取报告中所有提到的城市和收入，并将它们放在一个表格中。然后我们将报告包含在我们的提示词中。请注意，你不应该将机密信息输入到大语言模型中，但在这个例子中，报告不是机密的。输出显示了一个有城市和收入列的表格。这种方式将信息以整洁的格式展现出来，便于查看。

另一种用法是翻译。你可以利用大语言模型来翻译不同语言之间的文本。例如，你可能会要求 Gemini
将一个培训课程的标题从英文翻译成西班牙文。输出包含了多种可供选择的西班牙文翻译，并解释了每种翻译背后的原理。这些信息可以帮助你为你的受众选择最有用的选项。

或者，你可以使用大语言模型进行编辑，如将一段文本的语气从正式改为随意，或检查文本是否语法正确。例如，Gemini
可以帮助你修改关于电动汽车的技术分析文本。通过使用更易于非技术受众理解的语言，我们将用“编辑”作为提示词的开头，并指定语言应该易于非技术受众理解。然后，我们将包含这份技术分析。这个输出提供了一份分析的版本，使得不太熟悉技术细节的受众也能理解。这只是大语言模型可以帮助你编辑文档的一个例子。大语言模型可以快速定制文档的语气、长度和格式，以满足你的需求。

## 大语言模型的应用

我们将讨论的大语言模型的另一个用途是解决问题。你可以利用大语言模型生成各种工作场所挑战的解决方案。例如，在计划公司活动时，你可以提示大语言模型找到菜单解决方案既符合多位客人的食物限制又符合节日主题。

### 示例

假设你是一位最近刚推出了新的编辑服务的创业家。让我们请 Gemini
帮忙解决一些问题，这些问题与文本编辑服务相关。我们需要一些增加客户群的建议。Gemini
给出了一些具体的建议，如如何吸引新的客户，如何优化服务，以及如何扩大业务规模。让我们请 Gemini
草拟一封电子邮件，这样我们就可以方便地与他人分享这些想法。大语言模型可以帮助你为各种类型的问题提出解决方案。我对此感到非常兴奋，我们可以灵活利用大语言模型来完成各种工作任务。这是一个非常重要的技能，如果你想在工作中有效使用
AI，就需要熟练掌握这个技能。

接下来，我们将更加关注如何评价大语言模型的输出结果并如何迭代你的提示词。你是否曾经为客户创建过演示文稿，或者为你的新业务设计过网站？如果有，你可能使用了迭代的过程来实现你的目标。在一个迭代的过程中，你首先创建了初稿，然后对其进行评估，并在下一个版本中进行改进。你重复这个过程，直到你得到满意的结果。比如，如果你正在为同事准备一份报告或者其他需要分享的文档，你可能会创建多个草稿，并在每个草稿上不断进行改进，直到你对结果感到满意。

## 迭代设计

迭代方式通常是解决问题或开发产品的最有效方法，这同样适用于提示词的设计中。设计提示词往往需要多次尝试才能达到最优效果。在大多数情况下，你第一次尝试可能并不能得到最好的结果。如果你的尝试并未成功，不要灰心，反过来，仔细分析输出结果，看看为何没有得到你想要的回答，然后优化你的提示词，以期待更好的结果。

现在，我们来探讨一下你可能在提出了明确的提示词后，仍未得到有效回复的一些可能原因。首先，大语言模型间的差异会影响输出。每种大语言模型都有其独特的训练数据和算法，对于特定领域的理解也各不相同，因此，不同的模型对相同的提示词可能会有不同的反应，有时候可能无法给出满意的回答。对于你正在使用的大语言模型，采用迭代的方式将会得到最好的效果。

其次，大语言模型的局限性。你可能已经了解到，大语言模型的输出有时可能是不准确的、有偏见的或者可能不足、不相关，甚至是不一致的。你需要对所有大语言模型的输出进行批判性评估，提出以下问题：输出是否准确无误？输出是否公正无偏？输出是否信息充足？输出是否与我正在进行的项目或任务相关？最后，我是否多次使用同一提示词得到了一致的输出？如果在评估输出时发现问题，改进你最初的提示词通常可以帮助你解决这些问题，得到更好的输出。

## 提示词优化

首先，如果你发现提示词中缺少某些上下文信息，那就补充进去。你选择的词语会大大影响大语言模型的输出。在提示词中使用不同的词语或表述方式，常常会得到模型不同的回应。通过尝试不同的表述方式，你可以得到最有用的输出。

现在你已经对迭代式提示词有了更深的了解，那么让我们来看一个例子。假设你是一家视频制作公司的人力资源协调员。该公司希望为对动画和动态图形设计领域有兴趣的学生开发一个实习项目。公司位于我的家乡，美国宾夕法尼亚州。你的团队希望与宾州当地的大学合作，为在校学生提供实习机会。

### 示例

首先，你需要制作一个包含宾夕法尼亚州开设动画课程的大学的名单。这份名单需要包含大学的重要详情，并且需要以一种方便你的团队快速查看的方式进行整理。我们以
Gemini
为例进行演示。"帮我找到宾夕法尼亚州有动画课程的大学。"接下来我们来看看输出结果。输出结果中列出了在宾夕法尼亚州提供动画课程的大学，并提供了与这些课程相关的额外信息。虽然这是有用的信息，但是它的结构并不利于你的团队在联系这些大学时进行快速参考。

将信息整理成表格的形式会使其更易于阅读和理解，特别是对于那些时间有限的相关人士，比如你的经理。我们可以改进指导信息，添加具体的上下文来明确我们希望的输出格式。我们会输入："将这些选项以表格的形式显示出来。"输出的结果是一个表格，其中包含了每所大学的位置以及提供的具体学

位类型等有用信息。现在，这个名单展示得更为清晰，团队成员更容易理解。

尽管这个表格包含了团队所需的大部分信息，但它并未包含一项关键的信息，那就是这些学校是公立还是私立学校。你们公司打算向学生提供实习机会，这些学生来自公立和私立大学。我们将为
Gemini 提出新的请求，要求在表格中加入相关信息。"你能否在表格中加一列，标明学校是公立还是私立？"现在，表格已经增加了一列来标识大学是公立还是私立。

为了方便团队查阅这些信息，你可以使用"导出到表格"功能。这将使团队能够轻松访问和分析数据，并根据结果作出明智的决策。对于进一步的任务，你也应该采取同样的反复试验和修改的方法。当你为更多任务编写提示词时，要意识到同一次对话中之前编写的提示词可能会影响你最新编写的提示词的输出。如果你发现这种情况，你可能需要开始新的对话。反复试验和修改是编写提示词的关键部分。通过这种方式，你可以使大语言模型更好地满足你的需求。

## 少样本提示

你是否曾经在之前的例子的基础上创造出新的东西？也许你在写一份类似的报告时，参考了一份反响良好的报告，或者在设计你自己的网站时，参照了一个相关且引人入胜的网站。示例对大语言模型来说十分重要。在提示语中加入示例可以帮助大语言模型更准确地回应你的请求，这是一种特别有效的策略获取你想要的输出。

我们将探讨如何在提示语中使用示例，但首先，我们简单讨论一下我们所说的"样本"这个术语。在构建提示语时，"样本"经常作为"示例"的代名词。根据给大语言模型的示例数，我们有不同的命名方式。"零样本"提示是指提示语中不包含任何示例，"单样本"提示提供一个示例，而"少样本"提示则在提示语中包含两个或更多的示例。

由于零样本提示无法提供示例，我们期望模型仅根据它的训练数据和提示语中的任务描述来完成任务。当你需要简单且直接的回答时，零样本提示最有可能有效。对于需要大语言模型以更具体、微妙的方式回应的任务，零样本提示可能无法达到预期效果。少样本提示通过在你的提示语中增加更多的上下文和示例，可以提升大语言模型的表现。这些额外的示例可以有助于澄清期望的格式，用词或总体模式。少样本提示可以应用于各种任务中。例如，你可以利用少样本学习进行提示以生成具有某种特定“风格”的内容。

### 示例

假设你在一家网上零售商工作。你需要为一款新的滑板撰写产品描述。你已经有了一些现有产品的描述，如自行车和轮滑鞋。你希望滑板的描述能与此类似。我们首先从一些通用的指示开始进行提示。"请撰写一句产品描述。其中应包含两个描述产品的形容词。”我们还特别指定，我们希望
Gemini
参考我们给出的例子，并用相同的方式撰写滑板的描述。由于这是一个少样本学习提示，我们需要提供一些能够呈现出我们期望的方式的例子。每个例子都包括一个标签，指示被描述的产品是自行车和轮滑鞋，每个描述都只有一句话，且包含两个形容词，自行车是"流畅且耐用"，轮滑鞋是"顺滑且时尚"。接下来，我们输入"滑板"这个标签。当我们添加这个标签并将产品描述留空时，就表明我们希望
Gemini 像填写其他两个产品描述那样来完成滑板的描述。

让我们回顾一下输出结果。输出的结果是一个满足我们要求的、风格与我们提示中的示例一致的滑板产品描述。在这种情况下，两个示例就足够得到有用的结果，但并没有固定的规则来确定在提示中应包含多少个示例才是最佳的。有些大语言模型只需要几个示例就能准确地复制出模式，而其他的大语言模型则需要更多。同时，如果你包含的示例太多，大语言模型的回应可能会变得缺乏灵活性和创新性，它们可能会过于严格地复制示例。试着调整包含的示例数量以找到适合你特定任务的最佳结果。

现在，你掌握了一个可以帮助你得到更高质量输出的提示技术。少样本提示是一种有效的策略，它可以帮助你引导大语言模型生成更有用的回应。你已经学到了很多写提示的技巧，可以在工作中运用。在这一部分，我们讨论了大语言模型的输出。我们探讨了大语言模型是如何产生输出的，以及你可能在输出中遇到的一些问题。之后，我们专注于提示工程的一个关键原则，即创建明确和具体的提示。你明白了明确指定你想让大语言模型做什么以及提供帮助其提供更好输出的上下文信息是多么重要。接下来，我们深入探讨了如何通过反复迭代来提升
AI 的输出质量。对你的输出进行评估，然后根据需要修改你的提示，这是非常重要的。最后，我们学习了少样本提示，其中涉及到提供示例来引导大语言模型。

### 结语

在结束前，我想给你们一个最后的建议。我们的重点是如何给大语言模型设定提示。当你试图给其他类型的 AI
模型设置提示时，也可以参考这些通用原则。比如，下次你想要用 AI
来生成一幅图像时，尝试把你的需求表达得尽可能清楚和具体，然后通过迭代调整，使得输出尽可能接近你想要的结果。很高兴能够引导你理解提示工程的过程。我希望你能在工作中继续使用和提升这些技能，从而更好地利用对话式
AI 工具。

为了进一步学习，我建议你探索一下作为 Google AI Essentials 一部分的，如何负责任地使用 AI 这个话题。

点击此处访问其他视频：https://goo.gle/49yq5h5

# 往期回顾

[1、[卷起来！Luma AI全新推出Dream
Machine，基于文本和图像的AI视频创作工具，今日向免费开放]![](https://mmbiz.qpic.cn/mmbiz_png/iaqv2tagPYAhBKIib9olHAZpiaAMEHNbEpExMRYrVdkKxGG34pB9mL1GYt606qqX0TQIUMQSNkoEyHRlhGsjnBETg/640?wx_fmt=png&from=appmsg)](https://mp.weixin.qq.com/s?__biz=Mzg5NTc4ODkzOA==&mid=2247489851&idx=1&sn=f4e1c4dfa2d68a58803a396ba97bb199&chksm=c00babdef77c22c884e2ffae214e03e57fd78bb3b1e7b849671c7491e3eab7857c269c0fa0c2&scene=21#wechat_redirect)

[2、[吴恩达教授AI视频课：《多AI智能体系统》——我们如何通过协作智能体解决复杂问题]![](https://mmbiz.qpic.cn/mmbiz_png/iaqv2tagPYAhBKIib9olHAZpiaAMEHNbEpEB6iaucDgHylbHtQVnlcf1GUgjU6hNpD41DQzRDIuvDMLgLUtsR4GJDg/640?wx_fmt=png&from=appmsg)](https://mp.weixin.qq.com/s?__biz=Mzg5NTc4ODkzOA==&mid=2247490750&idx=1&sn=5eb33074061910a48f5db7908cbe282d&chksm=c00bae5bf77c274d5aab24f2555f661465511ec0929ce6a0671cc0eb3d9d10ba467b58a7a351&scene=21#wechat_redirect)

[3、[微软发布2024年工作趋势指数：全球75%的打工人已经在工作中直接或者间接使用生成式AI工具]![](https://mmbiz.qpic.cn/mmbiz_png/iaqv2tagPYAhBKIib9olHAZpiaAMEHNbEpEz5HCvOBCbJoSmPN2CdU5tKj2lJq8bibPQXJDchGqGefJs5nicZWoBxIA/640?wx_fmt=png&from=appmsg)](https://mp.weixin.qq.com/s?__biz=Mzg5NTc4ODkzOA==&mid=2247490033&idx=1&sn=893b941889ee7b83b9dabe60fab4a87a&chksm=c00bab14f77c2202e1ce2673a75aab7581d28f97fe3e24ab5459858743a415a89c78474dd2c7&scene=21#wechat_redirect)

* * *

![](https://mmbiz.qpic.cn/mmbiz_png/iaqv2tagPYAhtRhTOjz2QwH4dIlC3YUcYbaicMEwjqQqh06Yhdd7EH3r9wiaMRArLz0a6Zhx6uiaUD7hguPfbY0nAg/640?wx_fmt=png&from=appmsg)

****

**我们的AI团队现向外界开放服务，旨在助力每个企业与个人引领时代潮流，将先进科技与创新想法完美融合!**

##  告别昂贵服务费和缺人烦恼,再见漫长交付周期

## 无限创意风格,分分钟生成专业级作品

## 感受 AI 带来的全新工作体验！

**_欢迎各大品牌方、媒体、科技企业、知名IP等合作_**

** _合作请联系负责人微信：Milo-1101_**

** _\--END--_**

