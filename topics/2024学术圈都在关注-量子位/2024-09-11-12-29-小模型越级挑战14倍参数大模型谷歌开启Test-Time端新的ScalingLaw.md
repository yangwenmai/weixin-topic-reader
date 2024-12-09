# 小模型越级挑战14倍参数大模型，谷歌开启Test-Time端新的Scaling Law

文章作者: 量子位
发布时间: 2024-09-11 12:29
发布地: 未知地区
原文链接: http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247748364&idx=4&sn=a189aa8c3f786fb9d629a85ed22c65bb&chksm=e8dfbc7edfa835681d29eecd8f83c5032bd2a3a98cf7d18a96964747cdac115e4d97165be9f9#rd

封面图链接: https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtBCnRMEPlNDlYNnlJe3yJB2Gaic37YJ0v8o1B8Diaxkw7jVuTdelywdhyApacSH94jFL4jvFPYh9ONg/300

##### 西风 发自 凹非寺  
量子位 | 公众号 QbitAI

不必增加模型参数，计算资源相同，小模型性能超过比它大**14倍** 的模型！

谷歌DeepMind最新研究引发热议，甚至有人表示这可能就是OpenAI即将发布的新模型草莓所用的方法。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBCnRMEPlNDlYNnlJe3yJB2KqZialGX5BHWXFJRg3ATJ4EK9mpBGkLPPjLBDHRlR00UvoPt4ibqeK7Q/640?wx_fmt=png&from=appmsg)

研究团队探究了在大模型推理时进行计算优化的方法，根据给定的prompt难度，动态地分配测试时（Test-Time）的计算资源。

结果发现这种方法在一些情况下**比单纯扩展模型参数更经济有效。**

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBCnRMEPlNDlYNnlJe3yJB2EWZoEDJJUfZINqxBWpYxQtWph4GiabNKNC9vODibd4D9AYZwJ7yNL39A/640?wx_fmt=png&from=appmsg)

换句话说，在预训练阶段花费更少的计算资源，而在推理阶段花费更多，这种策略可能更好。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBCnRMEPlNDlYNnlJe3yJB2t3seqW29jHfsO8SYXpHaH8YGyQASE3uaveiabwUicJOxn0sS0kibDdjoA/640?wx_fmt=png&from=appmsg)

## 推理时用额外计算来改进输出

这项研究的核心问题是——

在一定计算预算内解决prompt问题，不同的计算策略对于不同问题的有效性有显著差异。我们应如何评估并选择最适合当前问题的测试时计算策略？这种策略与仅仅使用一个更大的预训练模型相比，效果如何？

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBCnRMEPlNDlYNnlJe3yJB2AZiadM8dWCrM3Kqj3jiaG5024FR5OZiah8MNQNOSCTTdYHWw1wgtiaDq6A/640?wx_fmt=png&from=appmsg)

DeepMind研究团队探究了两种主要机制来扩展测试时的计算。

一种是**针对基于过程的密集验证器奖励模型** （PRM）**进行搜索** 。

PRM可以在模型生成答案过程中的每个步骤都提供评分，用于引导搜索算法，动态调整搜索策略，通过在生成过程中识别错误或低效的路径，帮助避免在这些路径上浪费计算资源。

另一种方法是**在测试时根据prompt自适应地更****新模型的响应分布** 。

模型不是一次性生成最终答案，而是逐步修改和改进它之前生成的答案，按顺序进行修订。

以下是并行采样与顺序修订的比较。并行采样独立生成N个答案，而顺序修订则是每个答案依赖于前一次生成的结果，逐步修订。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBCnRMEPlNDlYNnlJe3yJB2eIJHHEWQxJ0r0R3RISNSe7hTiaPk3amVX4UofvLTGQxibrmqeRiaGAR3w/640?wx_fmt=png&from=appmsg)

通过对这两种策略的研究，团队发现不同方法的有效性高度依赖于prompt的难度。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBCnRMEPlNDlYNnlJe3yJB2pwEriarS6TlbiabXtice6ic0BlpfJHGpD318g7SPlqYIrdYbNHyKgOFzfA/640?wx_fmt=png&from=appmsg)

由此，团队提出了**“计算最优”扩展策略** ，根据prompt难度**自适应地分配测试时的计算资源** 。

他们将问题分为五个难度等级并为每个等级选择最佳策略。

如下图左侧，可以看到，在修订场景中，标准的best-of-
N方法（生成多个答案后，从中选出最优的一个）与计算最优扩展相比，它们之间的差距逐渐扩大，使得计算最优扩展在使用少4倍的测试计算资源的情况下，能够超越best-
of-N方法。

同样在PRM搜索环境中，计算最优扩展在初期相比best-of-N有显著的提升，甚至在一些情况下，以少4倍的计算资源接近或超过best-of-N的表现。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBCnRMEPlNDlYNnlJe3yJB2MJy6icicypE0ee9cHib1GwAbgFKk2nia3PFXJzEFreTTwgVGhJqY6Of0iaQ/640?wx_fmt=png&from=appmsg)

上图右侧比较了在测试阶段进行计算最优扩展的PaLM 2-S模型与不使用额外测试计算的预训练模型之间的表现，后者是一个*大14倍的预训练模型。

研究人员考虑了在两种模型中都预期会有𝑋 tokens的预训练和𝑌 tokens的推理。可以看到，在修订场景中（右上），当𝑌 <<
𝑋时，测试阶段的计算通常优于额外的预训练。

然而，随着推理与预训练token比率的增加，在简单问题上测试阶段计算仍然是首选。而在较难的问题上，预训练在这些情况下更为优越，研究人员在PRM搜索场景中也观察到了类似的趋势。

研究还比较了测试时计算与增加预训练的效果，在计算量匹配的情况下，对简单和中等难度的问题，额外的测试时计算通常优于增加预训练。

而对于难度较大的问题，增加预训练计算更为有效。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBCnRMEPlNDlYNnlJe3yJB2aBr2m694ICaPFk2rKVxibpFs7tAkhc802aUCUkew6icswcLUWib7rEcqg/640?wx_fmt=png&from=appmsg)

总的来说，研究揭示了当前的测试时计算扩展方法可能无法完全替代预训练的扩展，但已显示出在某些情况下的优势。

## 引发网友热议

这项研究被网友po出来后，引发热议。

有网友甚至表示这解释了OpenAI“草莓”模型的推理方法。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBCnRMEPlNDlYNnlJe3yJB2sZE5Z4mP62ibqKUw3xhzecicvkWCFGSxcmic4ibvqFSasAa1qheBv8piaEg/640?wx_fmt=png&from=appmsg)

为什么这么说？

原来就在昨晚半夜，外媒The Information放出消息，爆料OpenAI新模型草莓计划未来两周内发布，推理能力大幅提高，用户输入无需额外的提示词。

草莓没有一味追求Scaling Law，与其它模型的最大区别就是会在回答前进行“思考”。

所以草莓响应需要**10-20秒** 。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBCnRMEPlNDlYNnlJe3yJB2pd8DMzoslKbHjYARLOs3rugb8pHy8Nw0ppgibsWTE0exoA5vFNnTbrg/640?wx_fmt=png&from=appmsg)

这位网友猜测，草莓可能就是用了类似谷歌DeepMind这项研究的方法（doge）：

> 如果你不认同，给个替代推理方法解释！

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBCnRMEPlNDlYNnlJe3yJB2g2GCK5Y28GC5iagkEH1OMiaAyLCOwCeTzxa5oxsSAOj8QoW7gdXhVNBA/640?wx_fmt=png&from=appmsg)

解释就解释：

> 本文探讨了 best-of-n 采样和蒙特卡洛树搜索（MCTS）。
>
> 草莓可能是一种具有特殊tokens（例如回溯、规划等）的混合深度模型。它可能会通过人类数据标注员和来自容易验证领域（如数学/编程）的强化学习进行训练。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBCnRMEPlNDlYNnlJe3yJB2RWglTXdib0JwB1hukGf3iaGWibsd9GQN6dSmkw6j20ZZibXkLdPXsq9Oqw/640?wx_fmt=png&from=appmsg)  
![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBCnRMEPlNDlYNnlJe3yJB2nvC0REqNic62ibAKYHLd1CtxvDFTiajvj1Ux2fw1njMGHTqXVWHqiafV2g/640?wx_fmt=png&from=appmsg)

论文链接：https://arxiv.org/pdf/2408.03314

参考链接：  
[1]https://x.com/deedydas/status/1833539735853449360  
[2]https://x.com/rohanpaul_ai/status/1833648489898594815

— **完** —

**量子位年度AI主题策划** 正在征集中！

欢迎投稿专题 **一千零一个AI应****用** ，**365行AI落地方案**

或与我们分享你在**寻找的AI产品** ，或发现的**AI新动向**

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDpTavEwUl8aOlFLGHaPnaKXJcMUeJtGXVLliac6P6XxYHIKhnz0NPUgVvlrXAvJC33ibh8aYDdyudA/640?wx_fmt=png&from=appmsg)

  

**点这里 👇关注我，记得标星哦～**

**一键三连「分享」、「点赞」和「在看」**

**科技前沿进展日日相见 ~**

![](https://mmbiz.qpic.cn/mmbiz_svg/g9RQicMD01M0tYoRQT2cMQRmPS5ZDyrrfzeksiay90KaDzlGBH61icqHxmgFKfvfXtVuwTHV740CDLAaXU1LIfZyoJEpYKcRIiaE/640?wx_fmt=svg)

