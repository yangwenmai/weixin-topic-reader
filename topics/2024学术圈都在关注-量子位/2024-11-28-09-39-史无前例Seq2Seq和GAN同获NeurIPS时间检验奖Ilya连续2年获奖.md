# 史无前例！Seq2Seq和GAN同获NeurIPS时间检验奖，Ilya连续2年获奖

文章作者: 量子位
发布时间: 2024-11-28 09:39
发布地: 北京
原文链接: http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247761961&idx=1&sn=fa05e2531ebf03ca9dd7601a938edff4&chksm=e8dc775bdfabfe4d22711f767f3acf5fccec1319552c75d332349cfb20f5db1b51c449822258#rd

封面图链接: https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtAslXt2ZHMXrSx8b4JAn1dhZU9iaTSdaeCXH57y5bkvOgbrPm9sRAeC6y8FSzYMrNMOKLibURKl35BQ/300

##### 金磊 发自 凹非寺  
量子位 | 公众号 QbitAI

罕见，着实罕见。

今年的**NeurIPS** ，竟然一口气颁发了**两个** 时间检验奖（Test of Time Awards）！

用官方的话来说就是：

> 这两篇论文对整个领域的影响是不可否认的。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAslXt2ZHMXrSx8b4JAn1dh4ytKO3NvvUBsliaibWj486IuItOQUuQ4icRl2MCgo0wqsiaoBRwjLdGAVA/640?wx_fmt=png&from=appmsg)

第一篇，很经典——**GAN** 。

出自Yoshua Bengio、lan Goodfellow等一众大佬之后，引用超过**85,000次** 。官方的评价是：

> 它是生成建模的基础部分之一，在过去10年中激发了许多研究进展。
>
> 除了研究之外，它还使生成建模在考虑视觉数据和其他领域的各种应用中产生影响。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAslXt2ZHMXrSx8b4JAn1dhrJtsHQntpH5NibV5oVbcZEgsML8OUs6AWXDibagOLMqb9Gzryts5eib1A/640?wx_fmt=png&from=appmsg)

第二篇，也很经典——**Seq2Seq** 。

作者包括Ilya、Oriol Vinyals和Quoc V. Le，引用超过**27,000次** 。官方也给出了对应评价：

> 随着当前大型语言模型和基础模型的快速发展，人工智能和应用领域发生了范式转变，该领域受益于这项工作奠定的基础。
>
> 这是建立编码器-解码器架构的基础工作，启发了后来基于注意力的改进，导致了今天的基础模型研究。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAslXt2ZHMXrSx8b4JAn1dhic83W29jeho52G1NL9pnIQuR1kFibLyvB2IsP63CCpwgaKXdXzmZWepw/640?wx_fmt=png&from=appmsg)

值得一提的是，三人的另一项工作——**word2vec**
，[也斩获了去年的NeurIPS时间检验奖](https://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247709722&idx=4&sn=c7529290b446ac2bcc07ba75d35bbfa6&scene=21#wechat_redirect)。

谷歌首席科学家**Jeff Dean** 闻讯也发来祝贺：

> 如此殊荣，实至名归。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAslXt2ZHMXrSx8b4JAn1dhksTOTajkiatuO5aMtqN2eibA73mAjq8xQ3Mq6E1WVqWo7pv6CXyZwVVA/640?wx_fmt=png&from=appmsg)

接下来，我们一起重温一下经典。

## GAN

生成对抗网络的核心概念是在2014年被提出，通过两个神经网络的对抗来实现高质量的数据生成。

这两个网络分别是生成器（Generator）和判别器（Discriminator）。

这种对抗式的训练方式，不仅让GAN在图像生成、音乐创作等领域大放异彩，还深刻地影响了AI创作的方式。

GAN的工作机制可以类比为“造假者与鉴定师”的较量。

生成器就像一位造假者，它不断学习如何根据随机噪声生成逼真的数据；而判别器就像鉴定师，学会辨别哪些是“真品”（真实的数据），哪些是“赝品”（生成器造出的数据）。

两者之间相互竞争，生成器不断改进以欺骗判别器，而判别器也不断提高辨别能力。在这种博弈中，最终生成器能够产生几乎与真实数据无异的样本。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAslXt2ZHMXrSx8b4JAn1dhyWYa5UQ5lG66wNbAm6PO5pOib3Up6tt6VtwHibjoO81cf0wskDJFp8eQ/640?wx_fmt=png&from=appmsg)

GAN的训练过程本质上是一个“零和游戏”。

生成器和判别器之间的竞争关系可以看作一个两人博弈的极小极大问题：生成器的目标是最小化判别器的成功率，而判别器的目标则是最大化辨别真实数据与生成数据的正确性。

最终，当生成器生成的数据足够真实，使得判别器无法区分真实数据和生成数据时，博弈达到平衡，GAN的训练成功。

这篇论文提出的GAN并不依赖于复杂的马尔科夫链（Markov Chain）或者近似推断网络，这使得训练过程更为高效。

与其他生成模型（例如深度玻尔兹曼机）相比，GAN的优势在于它不需要进行复杂的推断操作，只需通过简单的前向传播就可以生成样本，并且可以使用标准的反向传播算法来训练。

这种相对简洁的结构为GAN在图像、视频和音频生成等任务中开辟了广阔的应用前景。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAslXt2ZHMXrSx8b4JAn1dhycia5iaRTbAWpxwm4bfX60bKiarFd66emGs6SRicCjxVspCicDiaAGYcxINQ/640?wx_fmt=png&from=appmsg)

尽管GAN具有许多优势，但其训练过程也面临挑战。

例如，生成器和判别器的训练需要保持一种微妙的平衡。如果生成器过于强大，判别器将无法有效学习，从而影响训练效果；反之亦然。

为了应对这些挑战，后续的研究人员提出了许多改进方案，如条件GAN（cGAN）、WGAN等，使得GAN的训练更加稳定，生成效果更加优秀。

生成对抗网络的提出为深度学习领域开启了新的可能性，让计算机在生成内容的能力上迈上了一个新的台阶。

如今，GAN被广泛应用于艺术创作、图像修复、风格转换等多个领域，成为了现代人工智能工具箱中不可或缺的一部分。

## Seq2Seq

Seq2Seq也是于2014年被提出，是一种能够将输入序列映射到输出序列的深度学习方法。

传统的深度神经网络（DNN）虽然在很多任务中表现出色，但它们无法直接处理输入和输出长度不定的序列数据。

而Seq2Seq模型通过使用两个长短期记忆网络（LSTM）来实现这一目标：一个LSTM将输入序列编码成固定维度的向量，另一个LSTM再从这个向量解码出目标序列。

具体而言：

  * 编码器（Encoder）：将输入序列逐步编码为一个固定长度的上下文向量。编码器逐一接收输入序列的元素（例如单词），并通过LSTM的隐藏状态逐渐生成该上下文向量。

  * 解码器（Decoder）：基于编码器生成的上下文向量，解码器逐步生成目标序列的输出。解码器在生成每一个输出时，也会参考先前生成的输出内容，以确保生成的序列是符合逻辑的。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAslXt2ZHMXrSx8b4JAn1dhbaXRDE50Qh2ic3qyib5C1LiaxnqFk82Ff5q3CRib5yHM4rcyqZEibNyOhsg/640?wx_fmt=png&from=appmsg)

一个有趣的技巧是在训练过程中将输入序列的单词顺序反转，这种做法能够显著提高模型的性能。

这是因为反转后的输入序列能够引入更多短期依赖关系，从而让模型更容易捕捉到源语言和目标语言之间的关联。

通过这种方法，研究者在WMT’14英语到法语的翻译任务上取得了34.8的BLEU得分，超过了基于短语的统计机器翻译（SMT）系统的表现。

在实验中，Seq2Seq模型展示了对长句子的强大处理能力，这使它在机器翻译中具有很大的优势。

与传统的基于短语的统计机器翻译相比，Seq2Seq模型能够自动学习到句子级别的特征表示，并且对主动语态和被动语态等变化具有较强的鲁棒性。

此外，研究团队还发现，利用Seq2Seq模型对SMT系统生成的候选翻译进行重新排序，可以进一步提高翻译质量，使得BLEU得分达到了36.5。

而Seq2Seq作者之一Oriol Vinyals刚刚也在社交平台中发文回忆：

> 在我看来，2014 年的演讲也经受了时间的考验。
>
> 这是一张当时演讲的PPT（今天的强大模型==大型Transformer）。
>
> 信不信由你，这个演讲当时颇具争议（我在 NeurIPS 上收到了很多负面反馈）。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAslXt2ZHMXrSx8b4JAn1dhoKdXZNQjsjHlb4fiadoyiblHYNo6xiaxaxjpxLoEXHAkaahUO003mAQKg/640?wx_fmt=png&from=appmsg)

NeurIPS官方还表示，两篇时间检验奖的作者将在当地时间12月13日（北京时间12月14日）进行Q&A。

以及本届NeurIPS更多奖项，量子位会继续保持关注。

## One More Thing

弹指十年间，两篇经典论文的关键人物的变动也是值得说道说道。

例如Ilya和lanGoodfellow都从谷歌投奔到了OpenAI，目前也都离开了OpenAI。

前不久，lanGoodfellow还被曝出双重顽疾，正在与疾病抗争。

而Ilya这边，目前则是忙于创业，主打就是安全超级智能（Safe Superintelligence）。

GAN论文地址：  
https://arxiv.org/abs/1406.2661

Seq2Seq论文地址：  
https://arxiv.org/abs/1409.3215

参考链接：  
[1]https://blog.neurips.cc/2024/11/27/announcing-the-neurips-2024-test-of-
time-paper-awards/  
[2]https://x.com/NeurIPSConf/status/1861778593036075029  
[3]https://x.com/OriolVinyalsML/status/1861838125800054929

— **完** —

**「MEET2025智能未来大会」  
火热****报名中**

**定档12月11日！李开复** 博士、**周志华** 教授、智源研究院**王仲远** 院长都来量子位**MEET2025智能未来大会**
探讨行业破局之道了！

[最新嘉宾阵容在此](http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247760478&idx=1&sn=a962f5ec367464f7b1ef4226ee14d668&chksm=e8dc4d2cdfabc43ab0920bec233071efae9ab69992a093e7b9f8e1629f27a3c3ef111e4268cd&scene=21#wechat_redirect)，**观众报名通道已开启！**
欢迎来到MEET智能未来大会，期待与您一起预见智能科技新未来 ![](https://res.wx.qq.com/t/wx_fed/we-
emoji/res/v1.3.10/assets/newemoji/LetMeSee.png)

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtA5bCZGsBl4S3Q4VI79equdTcekibDava7hppVtY8hxWqhKzRxOmKbYd09cEO3bfk2JuIcav35jw5g/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtA5bCZGsBl4S3Q4VI79equdhDk6xvEJ6ibQice7ppGnCcoS8TicWtJw634DluqCcRjkBzuRkCVibicxdUg/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtA5bCZGsBl4S3Q4VI79equdDHrHJB28PoK9oBsEsVVuMgiaknXhibT8Z6nRY6PFmGNz1xW2vPBUb2VQ/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtA5bCZGsBl4S3Q4VI79equdVhwpEAib5iaeshJblSzuH1bBvvXKZYYOm3e9sxTeBYPHVCcsJMuvSvsQ/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtA5bCZGsBl4S3Q4VI79equd008NKxBHR1CarXmSp97H7CxJ69icPKT4xdNPpz5vRo0lzQmgsjnjcpw/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtA5bCZGsBl4S3Q4VI79equdV0WHtNcQWz2JuujKDsbyjDnjhdMtRIuX4RLBoUIonp4OJRoALzkmuA/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtA5bCZGsBl4S3Q4VI79equdYIIF7DclCJvhtlOTo024Cz8kuUbseNYefx4GI9ia1vBHx4oqlLOTG6w/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtA5bCZGsBl4S3Q4VI79equdl6pVJHMLkBUjEyfM643rttQkuse7CRu2pr0jov28r3aI1bPhvPj6cQ/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtA5bCZGsBl4S3Q4VI79equds6c0frfTRvKMRZ8v48w7faeM40gwcmEeZUWgpHyfCZxaYqyjiankNIQ/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtA5bCZGsBl4S3Q4VI79equdWyZzfribFianScib3q3nxKcBqkrGeTjrhmAj3WAa8c0ftiaUQFcicazgCEQ/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtA5bCZGsBl4S3Q4VI79equdXviaPFXiaOxcPQ7ic6x6sdIt4OXCghaMX4L54DgicpSib8kicwibMPW4BY71A/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtA5bCZGsBl4S3Q4VI79equd7tsL8wMHclxHgPJcgJ6FjPCyqiccuGfznRjsmxcnxxupobxLsULScAA/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtA5bCZGsBl4S3Q4VI79equdkMQFebchTPSLe2PWOc3PCnzD8L0bWYSOZdiciaZ044W5kYTre9LP2CEw/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtA5bCZGsBl4S3Q4VI79equdh2erzp91Hb7DAk9iahFLjXWlyiaBJh0KmYiaQoRMNJA8RuzCI6GSbabLQ/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtA5bCZGsBl4S3Q4VI79equduPrMzEQjTjleUEicNvzlsECYL8OV5j0ZLD8vMawFHlian5Jicl2Dh62BA/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtA5bCZGsBl4S3Q4VI79equdd0EfKtd6dL0YvUF6EjHtoPs7ibSQXxwzibwA5GiaFiaon4XtS0oCb981Ew/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtA5bCZGsBl4S3Q4VI79equdGoHlxhHPKibDvkGCH43ulticjP9iageercvj0Ctmy4PhZAw5cEFRmoTGg/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtA5bCZGsBl4S3Q4VI79equd9ibPiabLKiazSZVHgJwzFYSQVzd3EC1VGqJnQM91QPiaMhnWm6sA1k62Sg/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_svg/g9RQicMD01M1vIWlXly8hwMNSichJ0JdicLmxeeic74yN5nUSbQBN6RENeFrjnniakyz4iatoNUwKVLbRpYUrfrf5oMOLIfPCQIGp4/640?wx_fmt=svg&from=appmsg)

左右滑动查看最新嘉宾阵容

![](https://mmbiz.qpic.cn/mmbiz_svg/g9RQicMD01M1vIWlXly8hwMNSichJ0JdicLmxeeic74yN5nUSbQBN6RENeFrjnniakyz4iatoNUwKVLbRpYUrfrf5oMOLIfPCQIGp4/640?wx_fmt=svg&from=appmsg)

**  
**

**点这里 👇关注我，记得标星哦～**

**一键三连「点赞」、「分享」和「在看」**

**科技前沿进展日日相见 ~**

![](https://mmbiz.qpic.cn/mmbiz_svg/g9RQicMD01M0tYoRQT2cMQRmPS5ZDyrrfzeksiay90KaDzlGBH61icqHxmgFKfvfXtVuwTHV740CDLAaXU1LIfZyoJEpYKcRIiaE/640?wx_fmt=svg)

