# 大神Karpathy强推，分词领域必读：自动钓鱼让大模型“发疯”的token，来自Transformer作者创业公司

文章作者: 量子位
发布时间: 2024-05-13 12:29
发布地: 北京
原文链接: http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247728719&idx=3&sn=e8ee669a82055895ad89fc59144e62ab&chksm=e8dfc93ddfa8402b753aeca7364b03a6ba6273c314b7aa6fc6d148f6097802b6c864e51b8a06#rd

封面图链接: https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtAWDvHQZYCXwfz7fV5ECkoZsPboiamNXSqnSYtogwaSpNkGupliboY1Wb4Hq2xp7zuxiauH77EicJEY0w/300

##### 鱼羊 发自 凹非寺  
量子位 | 公众号 QbitAI

关于大模型分词（tokenization），大神Karpathy刚刚推荐了一篇必读新论文。

主题是：自动检测大模型中那些会导致“故障”的token。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAWDvHQZYCXwfz7fV5ECkoZQvaM61HBn6IVUNnAkBRibyOfEjic6QkwG9H4oSRpGSJPdQnKTVZ69gfQ/640?wx_fmt=png&from=appmsg)

简单来说，由于大模型tokenizer的创建和模型训练是分开的，可能导致某些token在训练中很少、甚至完全没出现过。这些“训练不足”（under-
trained）的token会导致模型产生异常输出。

最经典的例子，就是SolidGoldMagikarp——

这个单词一度让ChatGPT“胡言乱语”。只要prompt里包含这个词，ChatGPT就开始文不对题，生成一些混乱的输出：

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAWDvHQZYCXwfz7fV5ECkoZyvYtmADHdXL9xIyazNvbLfngl2uQiak0kHA5gskepPKqDG1e0CbDS3g/640?wx_fmt=png&from=appmsg)

现在，来自Cohere的研究人员针对这个问题，提出检测“故障”token的有效方法，他们还发现：在多个主流开源大语言模型上，包括Llama系列、Mistral系列在内，训练不足的token都在不同程度上普遍存在。

p.s. Cohere是Transformer最年轻作者Aidan Gomez创办的公司，此前推出了Command
R系列开源大模型。去年6月，该公司估值达到了22亿美元。

## 自动检测LLM中训练不足的token

研究人员提出的方法主要包括三个步骤。

首先，通过检查tokenizer词汇表并观察其编码/解码行为，来分析tokenizer，找出其中特殊类别的token，比如不完整的UTF-8序列等。

然后，根据模型架构计算识别指标，找出嵌入向量异常的token，列入“训练不足”候选名单。

举个例子，对于tied embedding模型，利用一组已知的未使用的embedding，通过主成分分析去除unembedding矩阵中的常数成分。

接着计算其余token和这些未使用embedding的余弦距离，作为“训练不足”指标。

而对于non-tied embedding的模型，可以直接采用embedding向量的L2范数来检测。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAWDvHQZYCXwfz7fV5ECkoZAnYeWKzoXyOeRf7ouT1IQdcuvmIlZJ4aIu11NBeTWBicaGxMspGsHyQ/640?wx_fmt=png&from=appmsg)

最后，通过特定prompt来进行验证，看看候选token们是否确实超出了训练数据的分布，会引发异常输出。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAWDvHQZYCXwfz7fV5ECkoZVqyjfsFqPwCB0616Tq1GXmg28NSC0HpD63KYybX0EicyvB3o9j62lfg/640?wx_fmt=png&from=appmsg)

将该方法应用于多个主流的开源大语言模型后，研究人员发现，训练不足能让大模型“发疯”的token在这些大模型上普遍存在，他们一口气就挖出了数千个。

![](https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtAWDvHQZYCXwfz7fV5ECkoZsibT2bHfiaSzicG8KrzE1r5HQMxELPyic7uicO0hQicFqEGYqGvWHyMMAsJQ/640?wx_fmt=jpeg&from=appmsg)

常见类型包括：

  * 单字节token，尤其是UTF-8标准中未使用的字节，如0xF5-0xFF；

  * 字节对编码（Byte-Pair Encoding，BPE）过程中，出现的一些未充分训练的中间token。

  * 一些特殊字符，如<pad>、<unk>等。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAWDvHQZYCXwfz7fV5ECkoZ7QJkYdNSpicOuQAVoLrrswPSGop9GU6z9w1y8VwOPSAbIunqd7rS0rw/640?wx_fmt=png&from=appmsg)

研究人员还发现，词汇表较大的模型，“训练不足”token的数量也会明显增多。

因为大词汇表意味着更稀疏的token分布和更细粒度的token切分，这必然会导致更多低频token和无意义的token残片，增加“训练不足”token的比例。同时，大词汇表也给模型训练带来了更大的优化难度。

值得注意的是，论文提到，基于相同tokenizer的模型表现相似，而不同的tokenizer实现、配置、训练数据，会导致不同模型间“训练不足”token的明显差异。

论文认为，优化词汇表结构和tokenizer算法，是解决token训练不足问题的关键。

他们也提出了一些建议：

  * 确保tokenizer训练数据、模型训练数据和模型推理中输入数据的预处理完全相同。

  * 确保模型训练数据和tokenizer对齐，尤其是在从头训练新的基础模型时。

  * 对于单字节token，要么词汇表包含所有256个字符且不允许重复，要么排除13个UTF-8中不出现的字符（0xC0/0xC1，0xF5-0xFF）。

  * 训练tokenizer后，通过对词汇表进行编码和解码来检查无法访问的token，以确保正确处理手动添加的token。

  * 在Hugging Face上发表tokenizer的“快速”和“慢速”版本时，确保它们输出相同。

  * 训练基础模型时，在小型测试中检查训练不足的token，重新考虑分词方法和数据。在不同语料库上运行测试，也可以发现导致主训练数据中“故障”输入的预处理错误。

论文地址：  
https://arxiv.org/abs/2405.05417

— **完** —

**点这里 👇关注我，记得标星哦～**

**一键三连「分享」、「点赞」和「在看」**

**科技前沿进展日日相见 ~**

![](https://mmbiz.qpic.cn/mmbiz_svg/g9RQicMD01M0tYoRQT2cMQRmPS5ZDyrrfzeksiay90KaDzlGBH61icqHxmgFKfvfXtVuwTHV740CDLAaXU1LIfZyoJEpYKcRIiaE/640?wx_fmt=svg)

