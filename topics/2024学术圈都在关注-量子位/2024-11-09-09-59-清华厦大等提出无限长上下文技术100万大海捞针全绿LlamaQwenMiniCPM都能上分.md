# 清华厦大等提出“无限长上下文”技术，100万大海捞针全绿，Llama\Qwen\MiniCPM都能上分

文章作者: 量子位
发布时间: 2024-11-09 09:59
发布地: 北京
原文链接: http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247757407&idx=3&sn=1fd6be389a78556afa77d5214e3e26e8&chksm=e8dc592ddfabd03b67bbdc4b31566062ed1842c0af5e59f07053c48b9c238a82636db79c3d96#rd

封面图链接: https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtDjBRkkaD4Mq1hRNqZZWNCic7grdeaEMo8oU0dGV0BOs5Ca9SKXicPGCD5og1ia3J7QWy1CdSVW1nQwQ/300

##### LLMxMapReduce团队 投稿  
量子位 | 公众号 QbitAI

大模型的记忆限制被打破了，变相实现“无限长”上下文。

最新成果，来自清华、厦大等联合提出的**LLMxMapReduce长本文分帧处理** 技术。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDjBRkkaD4Mq1hRNqZZWNCic9cXVT05gicvmYk29kLOXIy3Qqo7EEnrKgzKILy2gPI7MT4Bh7OsiafGA/640?wx_fmt=png&from=appmsg)

LLMxMapReduce技术通过将长上下文切分为多个片段，可以让模型并行处理多个片段，并从不同片段中提取关键信息，然后汇总成为最终的答案。

特别地，团队提出结构化通信协议和上下文置信度校准机制，实现对跨片段信息更有效的处理。这项技术可以打破大模型的记忆限制，实现上下文长度无限稳定拓展。

LLMxMapReduce技术可作为**大模型的长文本上分神器**
——它对大模型长文本能力具有普遍增强作用，且在文本不断加长的情况下，仍能保持稳定性能、减少长文本的掉分情况。

比如结合了LLMxMapReduce框架之后的Llama3-70B-Instruct x
MapReduce模型得分超越了包含Kimi、GPT-4在内的知名闭源和开源模型以及其他基于Llama3-70B-Instruct的分治方法（即LongAgent和Chain-
of-Agents）。

此外，LLMxMapReduce框架展现出较强的通用性，结合Qwen2-72B和MiniCPM3也取得了优异的成绩。

## LLMxMapReduce无限长文本技术原理

在大数据领域，MapReduce是一种分布式并行编程框架，具有横向扩展的数据处理能力。受到MapReduce所体现的“分而治之”思想的启发，研究人员设计了一种面向大模型的采用分治策略的长文本处理框架，称为LLMxMapReduce。  
通过将长上下文切分为多个片段，LLMxMapReduce让模型并行处理多个片段，并从不同片段中提取关键信息，然后汇总成为最终的答案，从而实现无限长文本。这一技术对模型长文本能力具有普遍增强作用，且在文本不断加长的情况下，仍能保持稳定性能、减少长文本的掉分情况。

最近，也有一些同类型的分治式长文本处理方法，比如LongAgent和Chain-of-
Agents。相比于模型一次处理完整长文档，这类分治式长文本处理既有优势，也有不足。

**优势主要在于：** 长度可扩展，不受限于模型本身的窗口大小，理论上可以支持任意长度输入。

**劣势主要在于：**
将一个完整的长文档切分为多个片段，可能会破坏跨片段的关键信息，导致模型根据某个片段“断章取义”，产生错误结论。团队分析，会被切分片段影响的信息有两类：

  * **跨片段依赖** （Inter-Chunk Dependency）：多个片段的信息相互依赖，综合起来，才能产生一个完整的答案。比如要总结一个事件的时间脉络，需要从很多个片段中提取关键的信息，才能形成一个完整的时间线。

  * **跨片段冲突** （Inter-Chunk Conflict）：多个片段的信息存在冲突，对于相同的问题，看不同的片段时可能得出不同的结论。比如要问一位导演一生最伟大的作品是什么，在看他青年时期片段时，得出的是青年时的最大成就，而在看老年时期的片段，又会得出不同的结论。

为了解决这两类问题，LLMxMapReduce分别设计了以下方案：

  * **结构化通信协议** （Structured Information Protocol）：针对用户的问题，模型在处理每个片段时，不是仅仅输出中间答案，而是输出结构体，包含丰富的相关信息。在Reduce阶段，模型根据各个片段输出的结构化信息，汇总得出最终结果。通过在Map和Reduce阶段的结构化通信协议，希望能够更好地处理跨片段依赖的问题，更好地得出综合性答案。

  *   *   *   *   *   * 

    
    
    {    Extracted Information: XXX # 与问题相关的关键信息    Rationale: XXX # 得出中间结果的推理过程    Answer: XXX # 根据当前片段的中间结果    Confidence Score: XXX # 模型对当前片段的结果的置信度，范围为1到5之间}

  * **上下文置信度校准** （In-Context Confidence Calibration）：模型在Reduce阶段，会参考Confidence的值来汇总不同阶段的信息，高Confidence的结果占据更多的主导权。为了让模型在处理不同片段时具有一致的置信度评估标准，通过上下文学习的方式让模型学会一个统一的置信度评估准则，让置信度信息更加准确可靠，从而帮助模型在Reduce阶段更好的处理跨片段冲突问题。

LLMxMapReduce方法的流程图如下所示：整体分为**Map** 、**Collapse** 和**Reduce** 三个阶段。

首先要将长文本切分成多个小片段，这些片段可以并行处理，从而提高效率。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDjBRkkaD4Mq1hRNqZZWNCicqLcTIqzJzBNJcjDYchEFiaYUmLVlicXzdbkLEwvOLytHsDTGDvTqAKuA/640?wx_fmt=png&from=appmsg)

然后在Map阶段，使用大模型对每个片段进行分析，然后应用上文所述的结构化通信协议，将提取的信息整合成结构体形式，以便后续处理。

接下来，在Collapse阶段，如果所有片段的结果总长度超过模型的最大处理限制，模型将多个结构体压缩为一个结构体，以减少上下文长度。在处理冲突信息时，模型会考虑置信度进行整合。

最后，在Reduce阶段，模型根据压缩后的信息汇总出最终的答案。它会优先考虑置信度较高的结果，从而确保得到的答案准确无误。

通过以上工作流程，LLMxMapReduce能够更有效地处理长文本，避免因切分导致的信息丢失或错误结论，从而提高最终结果的准确性。

## 大模型长文本上分神器

为了验证LLMxMapReduce技术的有效性，研究人员在业内权威的长文本评测InfiniteBench榜单上对不同模型进行了评测，InfiniteBench是一个综合性榜单，最长长度超过2000k
token。

研究人员和很多方法进行了对比，其中对比的基线共有三类：

**闭源模型：**

包括GPT-4、Claude 2、Kimi-Chat，其中GPT-4和Claude 2的得分参照InfiniteBench原文，Kimi-
Chat为重新测量的得分；

**开源模型：**

包括YaRN-Mistral、Yi-6B-200K、Yi-34B-200K和Qwen2-72B-Instruct，其中YaRN-
Mistral、Yi-6B-200K、Yi-34B-200K的得分参照InfiniteBench原文，Qwen2-72B-Instruct是自行测量的得分；

其他基于分治的长文本处理框架：

包括LongAgent和Chain-of-Agents。这两个分治框架的不同点在于处理跨片段信息的方式不同。

LongAgent构建了一个Leader Agent来处理跨片段冲突。当不同的Chunk得出的答案不同时，Leader
Agent会组织重新阅读冲突的片段，得出最终答案。

这种重复阅读的机制带来较大的时间开销，并且LongAgent的通信内容比较单一，Leader
Agent处理冲突的能力有限。相比之下，LLMxMapReduce的结构化通信协议包含的信息更为丰富。

Chain-of-Agents通过顺序逐一读取各个Chunk来阅读全文。

由于没有显式地处理冲突信息，可能会导致后续Chunk的信息覆盖历史Chunk中的关键信息。相比之下，LLMxMapReduce利用校准后的置信度来更好的处理跨片段冲突。

具体实验结果如下：

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDjBRkkaD4Mq1hRNqZZWNCicgvyQKmsJ66aQCcZ0QsbsHKgnibn4LaXVicoqngpjGDpXwqQpeabia5xQw/640?wx_fmt=png&from=appmsg)

可以看到，结合 LLMxMapReduce 框架之后，Llama3-70B-Instruct x MapReduce 以 68.66
的最高平均分数，超越了闭源、开源模型以及其他基于 Llama3-70B-Instruct 的分治策略（即LongAgent和Chain-of-
Agents）。

此外，LLMxMapReduce 框架展现出较强的通用性，结合 Qwen2-72B 和 MiniCPM3 也取得了优异的成绩。

研究人员同样分析上下文置信度校准和结构化通信协议对框架性能的影响，在实验中逐步将这两个机制移除。实验结果显示，去除上下文置信度校准机制导致所有任务的性能下降。如果没有这两个机制，性能将会显著下降。这些结果证明了这两个机制在
LLMxMapReduce 框架中的关键作用。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDjBRkkaD4Mq1hRNqZZWNCiczcmdKLGibOm5RUiaE1nVFmQibRc9fOiaicEYu7rBhCwjicadnhcetWKyaVYA/640?wx_fmt=png&from=appmsg)

## 100万上下文大海捞针全绿

大海捞针（Needle-in-a-haystack )
是一个在大模型领域广泛应用的测试，用于评估大语言模型在处理长文本时识别特定事实的能力。为了评估LLMxMapReduce
框架在处理极长文本方面的表现，研究人员将大海捞针测试的文本长度扩展至1280K个token。

测试结果显示全绿：

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDjBRkkaD4Mq1hRNqZZWNCic99RoFLSFLVqicjJJcibeh9j2vtPQsABNsYTm5B5p4riaKuUicJ2CZ9IgjQ/640?wx_fmt=png&from=appmsg)

实验结果表明，采用 LLMxMapReduce 方法的 Llama3-70B-Instruct 能够有效处理长度达到 1280K token
的序列，展示了该框架在处理超长序列时的卓越能力。

为了评估不同方法在处理长文本时的响应速度，研究人员进行了一项速度实验，使用 20
个测试示例，每个示例包含128K个token。实验结果显示，因为更好地利用了分段并行，LLMxMapReduce 的处理速度比 128K 模型标准解码更快。

而且，由于结构化通信协议和上下文置信度校准机制不影响框架的并行推理，相比于LongAgent 和 Chain-of-Agents
这两个同类型的分治框架，LLMxMapReduce 也具有明显的速度优势。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDjBRkkaD4Mq1hRNqZZWNCicp919Y8iacmwLkDo8TyMN9KiaeJDKR4IuHunMmCGTG93GmOt7E8dmSmVw/640?wx_fmt=png&from=appmsg)

论文链接：https://arxiv.org/pdf/2410.09342  
Github链接：https://github.com/thunlp/LLMxMapReduce  
InfiniteBench：https://github.com/OpenBMB/InfiniteBench?tab=readme-ov-file

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

