# 微软打破Decoder-Only架构！大幅降低GPU内存需求，网友：把Llama3 70B弄20GB GPU上运行

文章作者: 量子位
发布时间: 2024-05-11 21:07
发布地: 北京
原文链接: http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247728476&idx=3&sn=c7f934a27797a9e32ab5d5f0fd92f500&chksm=e8dfca2edfa84338939db7376c337e27f663df0e15a04b8ae42c92aaccd40ef6b1da17b4d285#rd

封面图链接: https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtAWyE0SUoIJhUjxG4rljvDHwYZxJs9jWKxBuvnU7oezKet85IibtTSosNVZptXDr6QdVthVDKlv7fg/300

##### 西风 发自 凹非寺  
量子位 | 公众号 QbitAI

微软&清华最新研究，打破GPT系列开创的Decoder-Only架构——

**提出Decoder-Decoder新型架构，名为YOCO** （You Only Cache Once）。

YOCO**仅缓存一次键值对** ，可大幅降低GPU内存需求，且保留全局注意力能力。

一张图来看YOCO和标准Transformer的比较。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAWyE0SUoIJhUjxG4rljvDH5Qyad8ZFmZ4efvteVmCczZO3l5bRiaLbQxVxK775icrDSPZ89TkEcuGg/640?wx_fmt=png&from=appmsg)

在处理512K上下文长度时，标准Transformer内存使用是YOCO的6.4倍，预填充延迟是YOCO的30.3倍，而YOCO的吞吐量提升到标准Transformer的9.6倍。

去年一张“大语言模型进化树”动图在学术圈疯转，模型架构还只有三大类：Decoder-Only、Encoder-Only、Encoder-Decoder。

![](https://mmbiz.qpic.cn/mmbiz_gif/YicUhk5aAGtAWyE0SUoIJhUjxG4rljvDHlW3fgYkCXg4iazVW3MfAlRwgxyOEC5nhKTdO5zXcHrobepwETxXaiaHw/640?wx_fmt=gif&from=appmsg)

那么这个新出的Decoder-Decoder架构到底长啥样？

嗯，如网友所言，要读的论文又增加了。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAWyE0SUoIJhUjxG4rljvDHKUxe6I8ErpDahe4BMY38GWWBqSuQRviaQszMO0hEmUm1KjJOgH78ndQ/640?wx_fmt=png&from=appmsg)  
![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAWyE0SUoIJhUjxG4rljvDH4HVlV8cibALENSyFOzaBSs0Eic7vhO7Niah1MS5LiaqTdPlOV5utibrpppg/640?wx_fmt=png&from=appmsg)

话不多说，一起来看。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAWyE0SUoIJhUjxG4rljvDHq7P4quxvSv0SnKeDmgMHRGhN6kpNIxGwshOawGK1M1sYDWtH9IOE5A/640?wx_fmt=png&from=appmsg)

## 打破Decoder-Only

YOCO整体架构设计如下，分为**自解码器** （Self-Decoder）和**交叉解码器** （Cross-Decoder）两部分。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAWyE0SUoIJhUjxG4rljvDHL0QtotagozxKdyXTAom2XdibXgqwYWDJCIVH5nEQqnYDDj3HHg3Kohw/640?wx_fmt=png&from=appmsg)

具体来说，YOCO由L个块堆叠而成，其中前L/2层是自解码器，其余模块是交叉解码器。

**自解码器利用高效自注意****力** （efficient self-attention）**机制来获取键值** （KV）**缓存** ：

接收输入序列的嵌入表示，并使用高效自注意力来生成中间向量表示；使用因果掩码（causal
masking）保证解码的自回归特性；自解码器的输出用于生成全局KV缓存。

**而****交叉解码器使用交叉注意力** （cross-attention）**来重用自解码器生成的共享KV缓存** ：

在自解码器生成的KV缓存基础上进行堆叠，以获得最终的输出向量；同样使用因果掩码来维持自回归生成；允许交叉解码器层间高效地重用KV缓存，减少了对GPU内存的需求。

总的来说，自解码器和交叉解码器的模块设计与Transformer的解码器层类似，包含交错注意力和前馈网络子层。不过，研究人员还进行了预RMSNorm、SwiGLU和分组查询注意力等改进。

两部分之间的区别在于注意力模块。

自解码器使用**高效自注意力** ，如**滑动窗口注意力** （Sliding-Window Attention）或**门控保留** （gated
retention）。

而交叉解码器使用**标准的****多头交叉注意力** ，Query向量通过注意力与自解码器产生的全局键值缓存相关联。

## 推理大幅度省 省 省

实验阶段，研究人员将YOCO模型与同体量的Transformer模型进行比较。

分析维度有四个：语言建模评估、与Transformer比较的可扩展性、长上下文评估、推理优势。

**语言建模评估**

研究人员训练了一个3B参数的YOCO语言模型，并根据训练token数量（1T和1.6T）进行评估。

在LM Eval Harness的多个下游任务上，YOCO与Transformer模型OpenLLaMA-3B-v2、StableLM-base-
alpha-3B-v2、StableLM-3B-4E1T打得有来有回。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAWyE0SUoIJhUjxG4rljvDH5yvXtOFHSpp4iaa6mDyQzHS7iaAPdMo0szSXiaAd1qtibicnW9f0qepwmyw/640?wx_fmt=png&from=appmsg)

**可扩展性对比**

接着，研究人员在160M到13B参数规模范围内，分别训练了YOCO（门控保留和滑动窗口注意力版本）和Transformer语言模型。

对比了它们在验证集上的语言模型损失，YOCO的表现与Transformer基本持平：

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAWyE0SUoIJhUjxG4rljvDH5Fjw2381F7W8nhWMfqibNcBVBPa1f7aXLh2NQX2XGAmO6qp7B0YjQUA/640?wx_fmt=png&from=appmsg)

结果证明YOCO在模型大小扩展方面具有很强的可扩展性。

**长上下文评估**

将3B的YOCO模型扩展到上下文为1M，在“大海捞针”等长序列的needle retrieval任务上，YOCO-3B-1M的准确率接近100%。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAWyE0SUoIJhUjxG4rljvDHDEuafdwnKK4HFbeOqxgmDxnk35VF8a87Cp2EuIg7KQe3cujoP5uNlw/640?wx_fmt=png&from=appmsg)

在多针检索任务上，YOCO-3B-1M的性能优于一些超3B的Transformer模型：

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAWyE0SUoIJhUjxG4rljvDHYjibJ3iastYia5F82lfbqEbEqFtjIeeiapfWe1HiaDJ1hreuVlicy49zDqEw/640?wx_fmt=png&from=appmsg)

此外，YOCO模型在长序列上的NLL随着上下文长度的增加而一致下降，表明YOCO能够有效地利用长距离依赖信息进行语言建模：

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAWyE0SUoIJhUjxG4rljvDHlibU40nWkb8q9icibY6CK3icHfZdMD2rchJNcw2osaEOeibTSMw3B9M6H0A/640?wx_fmt=png&from=appmsg)

综上，可见YOCO在性能上完全不输Transformer，关键来看YOCO在推理效率上取得的显著提升。

**推理优势**

研究人员评估了YOCO在GPU内存占用、prefilling延迟、吞吐量和服务容量等方面的优势，评估上下文范围为32K至1M。

如下图所示，与Transformer相比，YOCO大幅度降低了GPU内存占用，且YOCO的内存消耗随上下文长度增加，增长幅度很小。

例如，在1M长度下，整体推理内存使用量仅为12.4GB，而传统的Transformer则占用了9.38倍的GPU内存。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAWyE0SUoIJhUjxG4rljvDHutSQXWKxbiaFQuXlFQnkjZWvCduEmBVL7wcPbta2bf43uODlsdOZtTA/640?wx_fmt=png&from=appmsg)

下面展示了token的KV缓存对GPU内存的占用情况。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAWyE0SUoIJhUjxG4rljvDHrJTPdylH0rUvXD3w9pFry5vZKI7zM1MUVZypdQQZHZIibNBI3UQYMbA/640?wx_fmt=png&from=appmsg)

YOCO模型只缓存一层全局的键值对，因此与Transformer模型相比，它需要的内存约少了L（指模型的层数）倍。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAWyE0SUoIJhUjxG4rljvDHtZxanJVQ12Miar1bxibvOxUZ0SEpg6Z3Q4CYC8Nia13ibvJkKHnXhawibWA/640?wx_fmt=png&from=appmsg)

例如，YOCO模型可以使用1GB的GPU内存来处理128K token。而具有GQA的Transformer 65B大小模型，仅能支持1.6K token。

也就是说，**模型越大，YOCO可以节省更多** 。

在预填充阶段，模型并行编码输入token。对于512K和1M长度的输入，Transformer分别需要大约180秒和300秒。Transformer的计算复杂度为O(N^2)，处理长上下文需要大量的浮点运算操作。

相比之下，YOCO的预填充时间为O(N)，随序列长度线性增长。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAWyE0SUoIJhUjxG4rljvDHHgpFPNXu7rNjAAdpayTWbYRsOZukrfGb1iaQHgrYThDbhFJZoAIibezw/640?wx_fmt=png&from=appmsg)

YOCO将Transformer的512K上下文预填充时间从180秒减少到不到6秒。

预填充阶段可以在进入交叉解码器之前提前退出。因此，即使对于短上下文，预填充延迟的加速至少是两倍。例如，对于32K长度，YOCO比Transformer快2.87倍。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAWyE0SUoIJhUjxG4rljvDHMT8mQj1CcXHNOib7icQg1U0g8jicqlsSZOsGTfUw7INIczAia8yo1dSTKw/640?wx_fmt=png&from=appmsg)

吞吐量表示模型每秒可以处理多少个token，涵盖了预填充和生成时间。如下图所示，与Transformer相比，YOCO在不同上下文长度下实现了更高的吞吐量。

以512K查询为例，Transformer的吞吐量为4.5 token/秒，而YOCO达到了43.1token/秒，即实现了9.6倍的加速。

吞吐量提高的原因如前所述，YOCO减少了预填充所需的时间。其次，由于内存消耗减少，因此可以在推理时使用更大的批量大小，这也有助于提高吞吐量。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAWyE0SUoIJhUjxG4rljvDHmpKApE3VXMbibL0mQeL3ZpjYJ6Sap7Q0ibOKXc3Gn4SyTQOZstlR5lmg/640?wx_fmt=png&from=appmsg)

详细细节，感兴趣的家人们可以查看原论文。

论文链接：https://arxiv.org/abs/2405.05254

— **完** —

**点这里 👇关注我，记得标星哦～**

**一键三连「分享」、「点赞」和「在看」**

**科技前沿进展日日相见 ~**

![](https://mmbiz.qpic.cn/mmbiz_svg/g9RQicMD01M0tYoRQT2cMQRmPS5ZDyrrfzeksiay90KaDzlGBH61icqHxmgFKfvfXtVuwTHV740CDLAaXU1LIfZyoJEpYKcRIiaE/640?wx_fmt=svg)

