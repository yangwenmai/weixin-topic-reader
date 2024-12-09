# 刚刚，Ilya的Seq2Seq、Ian的GAN获NeurIPS时间检验奖

文章作者: 机器之心
发布时间: 2024-11-28 08:42
发布地: 北京
原文链接: http://mp.weixin.qq.com/s?__biz=MzA3MzI4MjgzMw==&mid=2650944738&idx=1&sn=02967486af45e23ad4adb8fac54aabfc&chksm=84e7f09cb390798a3391aeb1bf690329b8f6f9b7ab3600d1b867caedd53df1484d4e795b98e3#rd

封面图链接: https://mmbiz.qpic.cn/sz_mmbiz_jpg/KmXPKA19gWicSsPVaibrPB4Bu1ficnRibqhm0MtucQA68hAibc9qI9g523oQvMBzAqiaN5pb6naiaicWaicpRkahWMkhibjQ/300

机器之心报道**机器之心编辑部**  
刚刚，NeurIPS 官方公布了 2024 年度的时间检验奖，破天荒的颁给了两篇论文。  
一篇是 Ian Goodfellow 的生成对抗网络（GAN），一篇是 Ilya Sutskever 的 Seq2Seq。  
但 10 年前的这两篇论文获得时间检验奖，也可以说是实至名归。
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWicSsPVaibrPB4Bu1ficnRibqhmDBKeDGgfNH3qicThoRnriaBw23xHumqDhA3rD8uCHicTUMsyicm3iaddPlQ/640?wx_fmt=png&from=appmsg)  
「今年，我们破例颁发了两篇时间检验论文奖，因为这两篇论文对整个领域的影响毋庸置疑。」  
Jeff Dean 也发来祝贺：  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWicSsPVaibrPB4Bu1ficnRibqhmp4GJkrqf8kypoAhUMGQfD9kZFCEV0dFHX7BZv94DIRHofCOicQlykvA/640?wx_fmt=png&from=appmsg)  
**论文 1：Generative Adversarial Nets**  
获得 NeurIPS 时间检验奖的其中一篇论文是《Generative Adversarial Nets》，作者阵容非常豪华，AI 圈知名大佬 Ian J.
Goodfellow 、 Yoshua Bengio 等都在内。  
Ian Goodfellow 本科与硕士就读于斯坦福大学，师从吴恩达，博士阶段则跟随 Yoshua Bengio 研究机器学习。他最引人注目的成就是在
2014 年 6 月提出了生成对抗网络（GAN）。  
GAN 在图像生成领域取得了重大突破，可以突破性地生成动物、风景以及人脸等高度逼真的合成图像。这一概念衍生出众多变体，成为机器学习界最火热的讨论话题，与
GAN 有关的论文不断涌现。  
Ian Goodfellow 的履历涉及 OpenAI、谷歌、苹果等多家科技公司。在最近一次 2022 年离开苹果后，他回到了 Google
DeepMind 担任研究科学家。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWicSsPVaibrPB4Bu1ficnRibqhmJ66Iayrfd0iadVKelwFHTibzDpr7MVhayOicibMbQZbYRIdyglibj2K8ftg/640?wx_fmt=png&from=appmsg)  

  * 论文地址：https://arxiv.org/pdf/1406.2661
  * 作者：Ian Goodfellow, Jean Pouget-Abadie, Mehdi Mirza, Bing Xu, David Warde-Farley, Sherjil Ozair, Aaron Courville, Yoshua Bengio
  * 机构：蒙特利尔大学

  
截至 NeurIPS 揭晓奖项时，「GAN」的论文已被引用超过 85000 次，是生成模型领域的奠基之作，在过去 10
年间推动了众多研究进展。除了在学术界的影响，它还使生成模型在视觉数据及其他领域的应用中产生了深远影响。  
论文介绍：本文提出了一个新的框架，通过对抗过程来估计生成模型，他们同时训练两个模型：一个生成模型 G，用于捕捉数据分配；一个判别模型
D，用于估计某个样本是来自训练数据的概率，还是来自 G 生成的概率。生成模型 G 的训练目标是最大化判别模型 D 出错的概率。  
该框架对应于极小极大双人博弈。在任意函数 G 和 D 的空间中，存在唯一解，其中 G 恢复训练数据分布，而 D 处处等于 1/2。在 G 和 D
由多层感知器定义的情况下，整个系统可以用反向传播进行训练。在训练或生成样本期间不需要任何马尔可夫链或展开的近似推理网络。  
生成对抗网络的小批量随机梯度下降训练算法如下：  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWicSsPVaibrPB4Bu1ficnRibqhm9wDibZJj7otjttQCibveOxwsw91UsK5iav42kSwvGsnk6C9cfSiamhd4IA/640?wx_fmt=png&from=appmsg)  
下图展示了经过对抗训练之后从生成器网络中提取的样本，凸显了对抗框架的潜力。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWicSsPVaibrPB4Bu1ficnRibqhmJfUAvZZv5vxibWwWI224ElfibibMyWvqmfCeAC1m6piaIsLECrqo3aWWzQ/640?wx_fmt=png&from=appmsg)  
**论文 2: Sequence to Sequence Learning with Neural Networks**  
获得今年 NeurIPS 时间检验奖的另外一篇论文是 Ilya Sutskever、Oriol Vinyals、Quoc V. Le 三人在谷歌合作完成的。  
当时，谷歌收购了 Hinton 的公司 DNNResearch，并聘请 Ilya Sutskever 担任谷歌大脑研究科学家。加入谷歌的 Sutskever
全身心地投入到序列建模问题中，它可以应用于语音，文本和视频，其中的一个非常实际的应用就是机器翻译。  
2014 年，Sutskever 与谷歌研究员 Oriol Vinyals 和 Quoc Le 一起提出了 Seq2seq 学习（Sequence to
Sequence Learning）。它输入比如一句英文的序列结构，再将其映射到也具有序列结构的一句法文上。该方法就此开启了 RNN
广泛应用于语言任务的时代。这项研究被应用于机器翻译，在大型数据集上的表现优于基于短语的统计机器翻译基线。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWicSsPVaibrPB4Bu1ficnRibqhmlicicLUVMZdscaWHQEyR7ZCoMTbFOoNUI72rsmuJSpMTicicy01ia5b5UlQ/640?wx_fmt=png&from=appmsg)  

  * 论文链接：https://arxiv.org/pdf/1409.3215
  * 作者：Ilya Sutskever, Oriol Vinyals, Quoc V. Le
  * 机构：谷歌

  
论文介绍：深度神经网络 (DNN) 是强大的模型，在困难的学习任务上取得了优异的性能。尽管只要有大型标记训练集可用，DNN
就能很好地工作，但它们不能用于将序列映射到序列。  
该论文提出了一种通用的端到端序列学习方法，该方法对序列结构做出最少的假设，使用多层长短期记忆 (LSTM)
将输入序列映射到固定维度的向量，然后使用另一个深度 LSTM 从向量解码目标序列。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWicSsPVaibrPB4Bu1ficnRibqhm48kCPc3DWw9D6b27LY59R807AOLuib0AXB01S1X5WUnt9pahXUHlkVQ/640?wx_fmt=png&from=appmsg)  
主要研究结果是，在 WMT'14 数据集的英语到法语翻译任务中，LSTM 生成的翻译在整个测试集上的 BLEU 得分为 34.8，其中 LSTM 的
BLEU 得分因词汇外的内容而受到惩罚。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWicSsPVaibrPB4Bu1ficnRibqhmO26iaAwSayVftmFuPZsL7WCvrpicFDiaoyJUfLPvbquHu3vweuAKB16xQ/640?wx_fmt=png&from=appmsg)  
此外，LSTM 在处理长句子时没有困难。作为比较，基于短语的 SMT 系统在同一数据集上的 BLEU 得分为 33.3。当使用 LSTM 对上述 SMT
系统产生的 1000 个假设进行重新排序时，其 BLEU 得分增加到 36.5，这接近于之前在该任务上的最佳结果。LSTM
还学习了对词序敏感且对主动语态和被动语态相对不变的敏感短语和句子表征。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWicSsPVaibrPB4Bu1ficnRibqhmaliboqv2KT4D2DRMURRxhI2rfueNnrjH5zVDgeZ94vRy4WUibymdY79Q/640?wx_fmt=png&from=appmsg)  
最后，作者发现反转所有源句子（不是目标句子）中的单词顺序可以显著提高 LSTM
的性能，因为这样做会在源句子和目标句子之间引入许多短期依赖关系，从而使优化问题变得更容易。  
随着大型语言模型和基础模型的快速发展，人工智能及其应用正在经历范式转变，整个领域受益于 Seq2Seq 奠定的基础。至今，论文的引用量超过 27000 次。  
它为编码器 - 解码器架构的提出奠定了基石，并启发了后续基于注意力机制的研究，推动了如今基础模型研究的蓬勃发展。  
 _参考链接：https://blog.neurips.cc/2024/11/27/announcing-the-neurips-2024-test-of-
time-paper-awards/__  
_© THE END 转载请联系本公众号获得授权投稿或寻求报道：liyazhou@jiqizhixin.com  
  

