# Andrej Karpathy：神奇大模型不存在的，只是对人类标注的拙劣模仿

文章作者: 机器之心
发布时间: 2024-12-01 12:25
发布地: 北京
原文链接: http://mp.weixin.qq.com/s?__biz=MzA3MzI4MjgzMw==&mid=2650945050&idx=2&sn=fc6f4eaae865df842cc2eda1f5ef3dd1&chksm=84e7f264b3907b72383c16a07a86687fca478318dfbda7a9a8f62ce44007777ef5e0c493a93e#rd

封面图链接: https://mmbiz.qpic.cn/sz_mmbiz_jpg/KmXPKA19gWibXwHZmwXlhMpiamHCCjGXmeRmAdlXIaIKBiaV0YDkGDshuicVY1metySia8f79GoOVbvmMjck2d8FZJw/300

机器之心报道

**机器之心编辑部**

> 也许是时候寻找新的方法了？

大模型回答人类的对话内容，究竟有多少「智能」成分在里面？  
本周五，知名 AI 领域学者，OpenAI 创始成员、特斯拉前 AI 高级总监 Andrej Karpathy
发表观点：「人们对『向人工智能询问某件事』的解释过于夸张」，引发网友热议。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWibXwHZmwXlhMpiamHCCjGXmeY06Bia2xLFRDupiaicL4VmOS5bCWPG9DEsCqfjCXBxI2fLl4Nwaj2WkYg/640?wx_fmt=png&from=appmsg)Karpathy
称：人工智能基本上是通过模仿人工标注数据来进行训练的语言模型。所以不要将对话视为「询问人工智能」的神秘主义，而应将其更多地视为「询问互联网上的平均数据标注者」。  
例如，当你问「阿姆斯特丹十大景点」之类的问题时，一些受雇的数据标签员可能在某个时候看到了类似的问题，使用谷歌等软件研究了 20 分钟，列出了 10
个景点的列表，然后字面意思就变成了正确答案，训练人工智能给出该问题的答案。如果有问题的确切位置不在微调训练集中，神经网络会根据从预训练阶段（互联网文档的语言建模）获得的知识来进行估计。  
当有网友评论称：「RLHF 可以创造超越人类的结果」，Karpathy 表示：「RLHF 仍然是来自人类反馈的 RL，所以我不会这么说」。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWibXwHZmwXlhMpiamHCCjGXmenUiaunnR5h3zghIQtTZsE7qZAruMsU0NxfFxs00ZPJOiaHK81mSibXugQ/640?wx_fmt=png&from=appmsg)Karpathy
认为：RLHF 将模型性能从 SFT
的「人工生成」级别提升到「人工判别」级别。但这与其说是「原则上」，不如说是「实践上」，因为「判别」对于普通人来说比「生成」更容易（例如，判断这 5 首关于
X 的诗中哪一首最好，而不是写一首关于 X 的诗）。  
另外，还可以从群体智慧效应中获得单独的提升，即 LLM 的性能不是达到人类水平，而是达到人类整体水平。因此，原则上，对于
RLHF，所能期望的最好结果就是达到专家水平。  
所以从某种意义上来说，这算是「超人」，但 Karpathy 认为：要按照人们默认的方式成为真正的「超人」，要去 RL 而不是 RLHF。  
其实，这已不是 Andrej Karpathy 第一次批判 RLHF 了。作为前 OpenAI 重要成员，他在今年 8 月就和 Yann LeCun
等人一起质疑过由 GPT 系列模型发扬光大的 RLHF 强化学习的意义。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWibXwHZmwXlhMpiamHCCjGXmeTuo6JSibJSnvGxL8RtF3uN1r8lmuiaqCGLle0dSEL3NHFf5ibdhicpxyUA/640?wx_fmt=png&from=appmsg)
_「RLHF 只是勉强算强化学习。」_  
他当时使用 DeepMind 的 AlphaGo 作为例子。如果我们当时用 RLHF 的方法训练 AlphaGo
会是什么样子？可能会既无法构成有效的奖励，又会形成偏离正常轨道的优化，那就势必无法创造出「打败人类世界冠军」的历史了。  
出于同样的原因，Karpathy 对 RLHF 竟然适用于 LLM 感到「有点惊讶」。因为我们为 LLM 训练的 RM（Reward
Model）只是以完全相同的方式进行直觉检查。它会对人类标注者可能喜欢的判断给出高分，它不是正确解决问题的「实际」目标，而是人类认为好的替代目标。  
其次，你甚至不能运行 RLHF 太长时间，因为你的模型很快就会学会适应游戏奖励模型，再推理出一些不正常的 Token。这在人类看来很荒谬，但出于某种原因
RM 会认为看起来很棒。  
无独有偶，今年 9 月，一篇来自 VRAIN、剑桥大学研究人员的 Nature 论文对 o1-preview
等模型进行了评测，发现很多对于人类来说简单的任务，大模型却根本无法解决。而在一些复杂的任务上，LLM
也根本不知道「回避」，而是会装模作样的思考一通之后，给出一个错误的答案。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWibXwHZmwXlhMpiamHCCjGXme4sU4RVaH4PSyldKN7llpBOZcwPTzibVrANjrHyVOQdt3KErFFhzcpQQ/640?wx_fmt=png&from=appmsg)虽然随着时间的推移，大模型的参数体量越来越大，训练的数据也越来越多，性能也不断提升，但从基础机制的角度来说，它们似乎并不靠谱。  
如果 RLHF 不管用，还能有什么样的奖励机制能帮助大模型「准确遵循指令」呢？  
今年 7 月，OpenAI 就公布了一种教导 AI 模型遵守安全政策的新方法，称为基于规则的奖励（Rule-Based Rewards，RBR）。RBR
不仅限于安全训练，它们可以适应各种任务，其中明确的规则可以定义所需的行为，例如为特定应用程序定制模型响应的个性或格式。这或许为大模型下一步性能突破提供了新的思路。  
参考内容： _https://x.com/karpathy/status/1821277264996352246_ _  
_© THE END 转载请联系本公众号获得授权投稿或寻求报道：liyazhou@jiqizhixin.com

