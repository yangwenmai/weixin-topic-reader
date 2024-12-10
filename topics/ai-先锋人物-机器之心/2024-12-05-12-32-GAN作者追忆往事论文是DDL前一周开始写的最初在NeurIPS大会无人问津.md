# GAN作者追忆往事：论文是DDL前一周开始写的，最初在NeurIPS大会无人问津

文章作者: 机器之心
发布时间: 2024-12-05 12:32
发布地: 北京
原文链接: http://mp.weixin.qq.com/s?__biz=MzA3MzI4MjgzMw==&mid=2650945862&idx=1&sn=9bb6e89fdf0ed8be0e156b104c50f91f&chksm=84e7fd38b390742ea3cfe0a427b475649188871df5784e7fa077567f387f1772ee031b04aaab#rd

封面图链接: https://mmbiz.qpic.cn/sz_mmbiz_jpg/KmXPKA19gWicbWGj7s7BVlzJLWPmh03XiaKgQPqMNcvLn0eg1eENJcrUdCPB1VpCCZENMuFAljRibGaBFH2oZWhSQ/300

机器之心报道**机器之心编辑部**  
上个月底，NeurIPS 官方公布了 2024 年度时间检验奖，而且破天荒地同时颁给了两篇论文。  
一篇是 Ilya Sutskever 的 Seq2Seq，另一篇是一篇是 Ian Goodfellow 的生成对抗网络（GAN）。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWicbWGj7s7BVlzJLWPmh03XiaqSkZtc5GJjKXuwp6e2Uxcyia1ZIOqthYVx8tkRgEBriaQfu4hCzt6S9A/640?wx_fmt=png&from=appmsg)  

  * 论文地址：https://arxiv.org/pdf/1406.2661
  * 作者：Ian Goodfellow, Jean Pouget-Abadie, Mehdi Mirza, Bing Xu, David Warde-Farley, Sherjil Ozair, Aaron Courville, Yoshua Bengio
  * 机构：蒙特利尔大学

  
弹指一挥间，距离 GAN 被提出竟然已经过了十年了。  
截至 NeurIPS 揭晓奖项时，「GAN」的论文已被引用超过 85000 次，这篇生成模型领域的奠基之作，在过去 10
年间推动了众多研究进展。除了在学术界的影响，它还使生成模型在视觉数据及其他领域的应用中产生了深远影响。  
《Generative Adversarial Nets》，作者阵容非常豪华，AI 圈知名大佬 Ian J. Goodfellow 、 Yoshua
Bengio 等都在内。  
今天，GAN 作者之一 Sherjil Ozair 在 X 平台发布长文，追忆了十年前的往事。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWicbWGj7s7BVlzJLWPmh03XiaXy8YKBia7peQGia9UE53JibGfBZlpBXOQ0ERzEYkCYM5cNdlgT1wLjTUg/640?wx_fmt=png&from=appmsg)  

> 很高兴听到 GAN 在 NeurIPS 2024 上获得时间检验奖。NeurIPS 时间检验奖授予那些经受住了十年时间考验的论文。我花了一些时间来回忆
> GAN 是如何诞生的，以及人工智能在过去十年中是如何发展的。

2012 年初，当我还是印度理工学院德里分校的一名本科生时，我在 Coursera 上发现了一门深度学习课程，由 Geoffrey Hinton
讲授。深度学习（在当时）是机器学习的一个边缘和小众子领域，它有望更加「端到端」并且更加受人脑启发。  
课程非常棒。不仅很好地解释了深度学习的原理，还充满了 Hinton 古怪的英式幽默和标新立异的思维。例如，他建议我们把高维空间可视化。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWicbWGj7s7BVlzJLWPmh03XiaZt2r3B2xYFfsOM6jSXwXyUmicCoQQo09RJI3bgImypBqiaKtGuOG9OAg/640?wx_fmt=png&from=appmsg)  
出于对了解更多信息的好奇和兴奋，我开始仔细阅读我能找到的所有内容，当时这些都是由少数伟大研究人员发表的学术论文，例如 Yoshua
Bengio，其中许多内容由他的实验室网站 http://deeplearning.net 维护。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWicbWGj7s7BVlzJLWPmh03XiaW5Yys1K3iaAwEIduIPgiaNpfH8EibdeSHqfYqU1DKP6p0ZGlqlRGv3phg/640?wx_fmt=png&from=appmsg)  
2012 年，Yoshua 经常在 Quora 上回答有关深度学习的问题。我衷心感谢他帮助像我这样的年轻本科生理解深度学习。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWicbWGj7s7BVlzJLWPmh03Xiahszpljn71VV3xscoOVzaNcuCRqXW6WT8rsjMGPfx5RJN4DhmXfxxMQ/640?wx_fmt=png&from=appmsg)  
我申请在他的实验室实习，并且非常惊喜地收到了回复和邀请！  
这是一次「与命运的幽会」，当时我对这次即将展开的交流旅程的意义和影响只有一丝丝了解。  
我非常感谢并感谢 Yoshua Bengio 为世界和我所做的一切。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWicbWGj7s7BVlzJLWPmh03Xia0v1xLuZwgbtBTqTBFBb05ZicCAufYvUfjibOmbh1ej8xoTNeUC8N2yHQ/640?wx_fmt=png&from=appmsg)  
我参加面试并拿到了 offer。2014 年夏天，我原本打算在 Yoshua 的实验室 (LISA) 实习。  
2014 年 5 月，我飞往蒙特利尔，并前往实验室。Yoshua 一看到我，立刻就把我拉进了一个房间。房间里还有 Ian Goodfellow 和
Aaron Courville。Yoshua 继续解释他一直在思考的一个新想法。  
他设想了一个确定性生成器网络 g，该网络仅在输入 z 中具有随机噪声。该网络的输出 x = g (z) 是某个分布 p (x)
的样本，可以是任何东西：图像、音频、文本。他强调这就是我们需要训练的。  
但怎么做呢？在这种「隐式」网络中，概率 p (x)
在任何地方都不是显式的。他说，我们应该对生成器的输出（生成的分布）和某个样本数据集（也可以是图像、音频等）进行「双样本分布匹配」。  
但如何进行分布匹配仍不清楚。作为一名年轻幼稚的本科生，我提出了矩匹配（moment
matching），但我们知道矩匹配很可能无法扩展到高维数据。小组里还讨论了其他想法，但都不太乐观。  
但是，Yoshua 对于训练一个确定性噪声消耗采样生成器神经网络的愿景和热情是明确的，也是鼓舞人心的。小组决定进一步思考这个问题。  
就在 Les Trois Brasseurs 实验室的一次晚宴上，Ian Goodfellow
被一个在当时看来近乎无稽之谈的想法打动了：「如果你能让另一个神经网络充当判别器呢？」在这一刻，新的前沿被开拓出来了。  
当时，神经网络的训练非常「普通」：你建立一个主神经网络，输入数据，得到预测结果，应用数学损失函数，然后使用梯度下降法优化这个网络。  
Ian
的想法是将损失函数设想为一个学习型神经网络。另一个判别器神经网络提供损失和梯度来训练生成器神经网络，而不是优化一个固定的方法损失。怀疑是很自然的：怎么不会全部崩溃为退化输出？鸡生蛋蛋生鸡的困境比比皆是。判别器从何而来？  
但 Ian 对此也有自己的想法。判别器和生成器要进行零和博弈，生成器要努力做到与数据无差别，而判别器要努力弄清显示的是生成样本还是真实样本。或许，这可行？  
第二天，实验室的每个人都收到了这封邮件：  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWicbWGj7s7BVlzJLWPmh03Xia4icIKkYmJg3MzctZMLOZb8Vupk0pR9mnGXtgOIDzgvbWSBFwO1KvvlQ/640?wx_fmt=png&from=appmsg)  
在一个晚上的编码和运行实验中，Ian 使第一个生成式对抗网开始工作。这些是 MNIST 上的第一批样本。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWicbWGj7s7BVlzJLWPmh03Xia989wMxGibcWiaKNu8Ixn1Ix8P6ELWKib3MQaKJoc5TE17ygts4H8BBg5g/640?wx_fmt=png&from=appmsg)  
我当时正在研究类似的东西，用非神经判别器进行训练，但效果远远不够。我决定帮助 Ian 开发 GAN。当时，NeurIPS 2014
的提交截止日期只剩一周了。我们决定，如果我们能抓紧时间，我们就能提交一篇论文。  
在接下来的几天里，我们设立了评估标准来与现有的生成模型进行比较，尝试了不同的架构、噪声函数和博弈公式。Jean、Yoshua
和我发现了生成对抗网络（GAN）的博弈是收敛的，并且在均衡状态下最小化了 JS 散度（Jensen-Shannon Divergence）。  
我们克服了重重困难，向 NeurIPS 提交了一篇论文，其中包含了我们上一周完成的所有工作。GAN 作为 posted presentation 被接受。  
我记得，在我们兴奋不已的同时，也知道 GAN 的训练动态是出了名的不稳定。大多数合著者开始研究其他模型架构，试图解决我们在 GAN 上发现的问题。GAN
论文在 12 月份进行了展示，但大部分时间都是被忽视的。  
几个月后的 2015 年 8 月，Alec Radford 开始发布他一直在玩的卷积 GAN 的样本。没错，这就是几乎是 OpenAI 所有突破的幕后功臣
Alec Radford。2015 年，他正在捣鼓卷积网络、BatchNorm 和 GAN。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWicbWGj7s7BVlzJLWPmh03Xiasw8KCSYMxSWA37iaYYPGqp0yUASZhZvR9LrypLWwqf0rhnGd1CqQ0cA/640?wx_fmt=png&from=appmsg)  
我无法客观地描述 DCGAN 之后人们对 GAN 兴趣的激增。但我想强调的是，GAN 的发展如何被恰当地用作人工智能整体进步的象征。  
以前，大家会用下面这张图表达图像生成领域的突破性演变，但现在已经过时了，因为现在的图像生成模型已经能够生成百万像素的图片，甚至电影。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/KmXPKA19gWicbWGj7s7BVlzJLWPmh03XiaWouBW9a4XGCic5ErJYdFT5R2PQB5BUhw3MWGibhbicRuibKHfM5uSZJPrQ/640?wx_fmt=png&from=appmsg)  
至于我的个人经历，GAN 作为我的第一篇学术论文既是福音也是诅咒。一位 DeepMind
研究员曾开玩笑说，我可能已经完成了我最伟大的工作，所以我还不如退休。  
人们常常误以为当前的技术突破是最终的创新，我们总是倾向于认为「就是这样，这是最后的发明」。但事实并非如此。  
CNN 感觉像是最后的发明，但事实并非如此。  
GAN 感觉像是最后的发明，也非如此。  
LSTM 同样也是。  
还有 ResNets、DQN、AlphaGo、AlphaZero、MuZero 等等，这些都不是最后的发明。  
事后看来，「这是最后的发明」总是有点滑稽。想想现在，Transformer 和大型语言模型现在被认为是最后一项发明，但并不是。  
我最近离开了前沿人工智能实验室，创办了一家公司，打造一些非常棒的东西。我将很快分享更多关于这方面的信息。敬请期待。  
对于获得 NeurIPS 时间检验奖的那篇论文《Generative Adversarial Nets》，我非常感谢 Ian Goodfellow,
Jean Pouget-Abadie, Mehdi Mirza, Bing Xu, David Warde-Farley, Aaron Courville,
Yoshua Bengio。  
 _参考链接：https://x.com/sherjilozair/status/1864013618721001710_  
© THE END 转载请联系本公众号获得授权投稿或寻求报道：liyazhou@jiqizhixin.com  

