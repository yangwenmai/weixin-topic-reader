# Mamba架构第一次做大！混合Transformer，打败Transformer

文章作者: 量子位
发布时间: 2024-03-29 17:37
发布地: 未知地区
原文链接: http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247723398&idx=5&sn=d877ff6c411c942729a05fa7cad3a902&chksm=e8dfdef4dfa857e2385b34c77ccf190af41a3a3138c05260cfb6e46f9063168b4fccd38ba6a7#rd

封面图链接: https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtDXjlq5abmMcqD1W3XxYW8BBz1E4SL0kZbOR1n3HZ3dOdBuPMarjDhibepH9NCn93HHZxTLzkajygA/300

##### 丰色 发自 凹非寺  
量子位 | 公众号 QbitAI

精彩精彩，第一个把**爆火Mamba架构** 真正扩展到**足够****大** 的工作来了。

**520亿** 参数，还是**Mamba+Transformer** 混合架构。

它的名字叫**Jamba** 。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDXjlq5abmMcqD1W3XxYW8BLpASibLzviaEL8BUF13SC2d2srhnsauEFS7iaGbGiaRg5anKdcRXERTF9Q/640?wx_fmt=png&from=appmsg)

取两种架构之长，模型质量和效率兼得，要吞吐量有吞吐量，要低内存有低内存。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDXjlq5abmMcqD1W3XxYW8BmmQVgmibTAKJ6nTVQ4622T7oOKMpw1ibF40y8tKslkQAOaicYswhlDSqw/640?wx_fmt=png&from=appmsg)

初步跑分显示：

  * Jamba性能总体接近**Mixtral 8x-7B** ，处理128k长上下文时**吞吐量却是其3倍** 。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDXjlq5abmMcqD1W3XxYW8BT678410DcSNv3jImPk9kZYAaEicdEnDgg9tYJHXG1PdttICzNLOfjBw/640?wx_fmt=png&from=appmsg)

  * 一共支持256k上下文，而**单张A100 GPU即可处理140k** ，直接拿下同等规模模型之最，高效又经济。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDXjlq5abmMcqD1W3XxYW8B6uib1VztKUicNTtZwnky8YhuOogEPpnakqzMAz6yT2nyYNka88fbnu6A/640?wx_fmt=png&from=appmsg)

这项成果，来自以色列AI公司**AI21labs** 。

**Mamba原作者** 看了之后都激动转发：

> 绝对的“大新闻”。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDXjlq5abmMcqD1W3XxYW8BayJm86IH7ickgUfnmaZBUmUqERElj8x4G8p9s4TQRebQzyGzCVL2I4Q/640?wx_fmt=png&from=appmsg)

## Mamba、Transformer，合体

由CMU和普林斯顿大学提出的Mamba，解决了Transformer的局限性（随着推理上下文越长，模型内存占用量越大，同时推理速度变慢，由此导致算力消耗巨大）。

但它也有自己的**缺点** ——

在不关注整个上下文的情况下，Mamba的**输出质量很差** ，尤其是在召回相关的任务上。

本着“既要也要”的原则，Jamba站出来提供两全其美之作。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDXjlq5abmMcqD1W3XxYW8BcmzoKibWF9Fzdv3JtoA0Dn951V5iayrdjo7DKPe62xpDvuoxmELIWb5Q/640?wx_fmt=png&from=appmsg)

Jamba由Transformer、Mamba和MoE层组成，可同时优化内存、吞吐量和性能。

如下图所示，为了集成两种架构，Jamba采用块层（blocks-and-layers）组合的创新方法。

简单来说，就是每个Jamba块包含一个注意力层或一个Mamba层，再跟一个多层感知器MLP，总体比例保证为**每八层一个Transformer层** 。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDXjlq5abmMcqD1W3XxYW8BQjz1WOT3hcwDrHGeASOJtwOUn6MSvJe8sjw00wniaHYHlEONDE69VHA/640?wx_fmt=png&from=appmsg)

其次，Jamba利用MoE来增加模型参数的总量，同时简化推理中使用的活动参数量。

最终模型容量高了，计算需求也没有相应的增加。

而为了在单张GPU（80GB）上最大限度地提高模型吞吐量，Jamba还优化了所用MoE层和专家数量，最终为日常推理工作负载留出足够内存。

值得一提的是，在推理时，Jamba的MoE层仅需520亿可用参数中的120亿，就能同时保证比同等大小的仅Transformer模型更高效。

要知道，此前有人光是尝试过扩展Mamba，就没能做到30亿参数之上。

因此，除了成功合体Mamba和Transformer，Jamba也达成了第二大成就：

同类中第一个达到**生产级规模和质量** 的混合架构（SSM混Transformer）（ps. Mamba就是一种状态空间模型SSM）。

## 吞吐量和效率up

初步评估显示，Jamba在吞吐量和效率等关键指标上表现出色。

首先，Jamba可以在**长上下文中提供3倍吞吐量** ，比Mixtral 8x7B等大小相当的Transformer模型都要高效。

如下图所示，当上下文窗口达到128k时，Jamba的每秒token数近乎1500，而此时表现最好的Mixtral 8x7B应该才在500往上的样子。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDXjlq5abmMcqD1W3XxYW8BT678410DcSNv3jImPk9kZYAaEicdEnDgg9tYJHXG1PdttICzNLOfjBw/640?wx_fmt=png&from=appmsg)

其次，在单张GPU上，Jamba最多可以容纳140k上下文，经济又高效。

相比之下，Mixtral 8x7B为64k，Llama2 70B则仅为16k。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDXjlq5abmMcqD1W3XxYW8B6uib1VztKUicNTtZwnky8YhuOogEPpnakqzMAz6yT2nyYNka88fbnu6A/640?wx_fmt=png&from=appmsg)

第三，Jamba的输出质量也得到了保证。

在如下一系列推理基准上，4项中有3项它都拿下了SOTA。同时，在GSM8K等基准上，Jamba即使没有夺魁，也和SOTA模型打了个不相上下。

总体来说，Jamba的性能接近Mixtral 8x7B。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDXjlq5abmMcqD1W3XxYW8BmTb0FXu0YZs7hJofaHNuBaohbpyoe9aJhOqeswBVjxnsSeYAzibyt7g/640?wx_fmt=png&from=appmsg)

最后，作者提示，别忘了，这些都还只是初步改造后的结果，后续还有很多优化空间（比如MoE并行、更快的Mamba实现）。所以到时性能会更强。

好消息：Jamba现在已经上线Hugging Face，并且**划重点：采用apache-2.0许可** 。

（Jamba的指令版本则将很快通过AI21labs平台上线。）

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDXjlq5abmMcqD1W3XxYW8BY4uvyTRAsoC3ITqR13veUabiclicicsBpC7ib0Kg5ciamUXHmQY4frIgrNw/640?wx_fmt=png&from=appmsg)

网友看完都感动哭了。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDXjlq5abmMcqD1W3XxYW8BbcnRTxHaKoYM43V1BqxhsbicZTjBxq6cC9bcXNXDMmqPIhOHf26cX7Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtDXjlq5abmMcqD1W3XxYW8B0bn8MLRQoaIKIS4ks0K2BpSRWqvBWQOKEOiaQUlknQz5rK6eibH9G5BA/640?wx_fmt=jpeg&from=appmsg)

传送门：  
https://huggingface.co/ai21labs/Jamba-v0.1

参考链接：  
[1]https://www.ai21.com/blog/announcing-jamba  
[2]https://www.ai21.com/jamba  
[3]https://twitter.com/AI21Labs/status/1773350888427438424?s=20  
[4]https://twitter.com/tri_dao/status/1773418926518734957?s=20

— **完** —

**评选报名即将截止！**

**2024年值得关注的AIGC企业 &产品**

量子位正在评选**2024年最值得关注的AIGC企业** 、 **2024年最值得期待的AIGC产品** 两类奖项，欢迎[报名评选]()！评选报名
**截至2024年3月31日![](https://res.wx.qq.com/t/wx_fed/we-
emoji/res/v1.3.10/assets/newemoji/LetMeSee.png)**![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtC7IzBlicP1jwLsfiaw2A2ibBoWRgd47kXexFUOSSzXn5f9fDcza39rny2BgqyDQkDrSoLCDh3Ag7XwA/640?wx_fmt=png&from=appmsg)

**中国AIGC产业峰会「你好，新应用！」****已开启报名！**[点击报名参会]() 同时，峰会将进行线上直播 ⬇️

  

**点这里 👇关注我，记得标星噢**

**一键三连「分享」、「点赞」和「在看」**

**科技前沿进展日日相见 ~**

![](https://mmbiz.qpic.cn/mmbiz_svg/g9RQicMD01M0tYoRQT2cMQRmPS5ZDyrrfzeksiay90KaDzlGBH61icqHxmgFKfvfXtVuwTHV740CDLAaXU1LIfZyoJEpYKcRIiaE/640?wx_fmt=svg)

