# 模型合并就进化，直接拿下SOTA！Transformer作者创业新成果火了

文章作者: 量子位
发布时间: 2024-03-25 12:50
发布地: 北京
原文链接: http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247722594&idx=4&sn=ba5e9a7be7e951f31149ec58b61ef53a&chksm=e8dfd110dfa858060eed9dddfd0b619618ec0a93bc167782f503eddee569fece3eae6d8eb457#rd

封面图链接: https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtCLu131b2oiaP3s9ntNfib33iaibWVWia8wTaicdStr22fzichRkknoV6oQwrNpjHPCOuhiclzGDFvlNyVCZQ/300

##### 丰色 发自 凹非寺  
量子位 | 公众号 QbitAI

把Huggingface上的**现成模型** 拿来“攒一攒”——

直接就能组合出新的强大模型？！

日本大模型公司sakana.ai脑洞大开（正是“Transformer八子”之一所创办的公司），想出了这么一个进化合并模型的妙招。

![](https://mmbiz.qpic.cn/mmbiz_gif/YicUhk5aAGtCLu131b2oiaP3s9ntNfib33iaXFjIcW6sCSwoeTtnZgj3Ip1yfStEeqL7RnRmnpvaZwoEkY2EYz3OaA/640?wx_fmt=gif&from=appmsg)

该方法不仅能自动生成新的基础模型，而且**性能绝不赖** ：

他们得到的一个70亿参数的日语数学大模型，直接在相关基准测试上取得了SOTA，打败了700亿参数的Llama-2等前辈。

最重要的是，得出这样的模型**不需要任何梯度训练** ，因此需要的计算资源大大减少。

英伟达科学家Jim Fan看完大赞：

> 这是我最近读过的最有想象力的论文之一。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCLu131b2oiaP3s9ntNfib33ia9oXMw0Q2zQasFkRJzggJx6u0HASzWNZEkeck5K0d8u3MBYpyZVEsOQ/640?wx_fmt=png&from=appmsg)

## 合并进化，自动生成新基础模型

从开源大模型排行榜上表现最好的模型，大多不再是LLaMA或Mistral这种“原始”模型，而是一些微调或合并模型之后，我们就能看出：

一种新的趋势出现了。

Sakana.ai介绍，开源基础模型很容易在数百个不同的方向上进行扩展和微调，然后产生在新的领域表现出色的新模型。

而在这之中，**模型合并** 显现出了巨大前景。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCLu131b2oiaP3s9ntNfib33iahicIzn7xy4r0Mnibje4E0dXTe4xZ1KZctwKCjiau9yibwr9eqo7wBibTnMg/640?wx_fmt=png&from=appmsg)

但，它可能是一种“黑魔法”，严重依赖直觉和专业知识。

因此，我们需要更为**系统性** 的方法。

受自然界的自然选择启发，Sakana.ai盯上了进化算法，引入“进化模型合并”（Evolutionary Model
Merge）的概念，提出一种可以发现最佳模型组合的通用方法。

该方法结合了两种不同的思路：

（1）合并数据流空间（层）中的模型，以及（2）合并参数空间（权重）中的模型。

具体而言，第一种数据流空间方法是通过进化来发现不同模型层的最佳组合，以此形成新模型。

在社区以往的做法中，都是靠直觉来确定如何以及模型哪些层可以与另一个模型的层结合。

但其实，Sakana.ai介绍，这个问题有一个组合数量巨大的搜索空间，最适合由优化算法如进化算法来搜索。

其操作示例如下：

![](https://mmbiz.qpic.cn/mmbiz_gif/YicUhk5aAGtCLu131b2oiaP3s9ntNfib33iafiaevRZyzqsIjylDQslkia5NU7R8zfUZnvo07jKYIiaMiagibh13Ev5kJcw/640?wx_fmt=gif&from=appmsg)

至于第二个参数空间方法则混合多个模型权重来形成新模型。

这种方法其实很无数种实现，再加上混合的每一层原则上可以使用不同的混合比例，就更多了。

而这，利用进化方法就可以有效地找出更为新颖的混合策略。

以下是将两个不同模型的权重进行混合得到新模型的操作示例：

![](https://mmbiz.qpic.cn/mmbiz_gif/YicUhk5aAGtCLu131b2oiaP3s9ntNfib33iaMARH9TEiaaawsicQrdt9J5O2G8WhzWXnZlJXMPQa0lBd5K5SUdIdUb0g/640?wx_fmt=gif&from=appmsg)

将以上这两种方法合并，就是这样的：

![](https://mmbiz.qpic.cn/mmbiz_gif/YicUhk5aAGtCLu131b2oiaP3s9ntNfib33iaPDgw7HJngGv05zmlLrpYIgqPzF376dJ8IBMNXdeibGkOYicX8ib3JUhjA/640?wx_fmt=gif&from=appmsg)

作者介绍，他们希望在相距较远的领域，例如数学和非英语语言、视觉和非英语语言，来组成之前大家不曾探索过的新兴组合。

结果，还真有点让人惊喜。

## 新模型轻松拿下SOTA

用以上进化合并方法，团队得到了3个基础模型：

  * **大语言模型EvoLLM-JP**

由日语大模型Shisa-Gamma和数学大模型WizardMath/Abel合并而成，擅长解决日语数学问题，进化了100-150代。

  * **视觉语言模型EvoVLM-JP**

日语大模型Shisa Gamma 7B v1+LLaVa-1.6-Mistral-7B，是具有日语能力的VLM。

  * **图像生成模型EvoSDXL-JP**

支持日语的SDXL扩散模型。

前两个已在Hugging Face和GitHub上发布，最后一个也即将推出。

具体来看。

**1、EvoLLM-JP**

它在GSM8K数据集的多语言版本——MGSM的日语评估集上取得成绩如下：

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCLu131b2oiaP3s9ntNfib33iarxsCnx27riaDq4X8FTibzibiaTQlWhC2RTf0wyARfOx7vrX1aAicxm4rYyA/640?wx_fmt=png&from=appmsg)

可以看到，EvoLLM-JP用日语解决数学问题的表现超过了它们的原始模型，也超过了Llama-2、GPT-3.5等高性能模型。

其中模型4是仅在参数空间进行了优化，模型6是使用模型4在数据流空间中进一步优化的结果。

在既评估数据能力也评估一般日语能力的日语lm-evaluation-harness基准上，EvoLLM-
JP则在9个任务上的平均得分最高达到了70.5——只用70亿参数，它就打败了700亿的Llama-2等模型。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCLu131b2oiaP3s9ntNfib33iaUUlHtGSsbn6IfWVOa4XHY5dSKPB4FUvKGdFJpibg2LWzlG0uCOMORBQ/640?wx_fmt=png&from=appmsg)

团队表示，EvoLLM-JP已经足够优秀，可以作为通用日语大模型，并解决一些有趣的例子：

比如需要特定日本文化知识的数学问题，或者用关西方言讲日本笑话。

**2、EvoVLM-JP**

在以下两个图像问答的基准数据集上，分数越高，代表模型用日语回答的描述越准确。

结果，它不仅比其所基于的英语VLM LLaVa-1.6-Mistral-7B更出色，也比现有的日语VLM更厉害。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCLu131b2oiaP3s9ntNfib33iaDcLibzWaBMGNkdRo4wuV1PWbFFAht0VUPm4VSXEU0HnIamSeLiacQ7Uw/640?wx_fmt=png&from=appmsg)

如下图所示，在回答图中的信号灯为什么颜色之时，只有EvoVLM-JP答对：蓝色。（日本的习俗就是把红绿灯称为红蓝灯）

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCLu131b2oiaP3s9ntNfib33ian33al0O0T3KtaUQmb44wBibFluBAHO7x4bdtByMoGeoP4qQ8eRpfnoQ/640?wx_fmt=png&from=appmsg)

**3、EvoSDXL-JP**

这个支持日语的SDXL模型只需4个扩散模型即可执行推理，生成速度相当快。

具体跑分还没出来，但团队透露也是“相当有希望的”。

可以欣赏一些示例：

提示词包括：味噌ラーメン、最高品質の浮世絵、葛飾北斎、江戸時代。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCLu131b2oiaP3s9ntNfib33iaPlx7kXBZ7hy7ic4cQTX72Gt9nUIONOFVF0NhVQSRbvwoH0VcN8Egd6w/640?wx_fmt=png&from=appmsg)

对于以上3个新模型，团队指出：

原则上，我们可以采用基于梯度的反向传播来进一步提高以上这些模型的性能。

**但我们不用** ，因为现在的目的就是表明，即使没有反向传播，我们仍然可以得到足够先进的基础模型，挑战当前的“昂贵范式”。

对此，网友们纷纷点赞。

Jim Fan也补充：

在基础模型领域，**目前社区几乎完全专注于让模型去学习，而不太重视搜索** ，但后者在训练（也就是本文提出的进化算法）和推理阶段其实都有巨大的潜力。

######
![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCLu131b2oiaP3s9ntNfib33ia6RwHY0PPCY0ianfpibnYM1Zpt3AJOILxNz88mw96eFeU5QAz9iauK4pQw/640?wx_fmt=png&from=appmsg)

###### **△** 马斯克点赞

所以，如网友所说：

我们现在已经处于模型的寒武纪大爆发时代了吗？

![](https://mmbiz.qpic.cn/sz_mmbiz_png/YicUhk5aAGtCLu131b2oiaP3s9ntNfib33iahKWGerHHGibUG1T8tgkqT5KANkS9YyEvEgvL8kRqzBIHPFskEQtnVwA/640?wx_fmt=png&from=appmsg)

论文地址：  
https://arxiv.org/abs/2403.13187  
参考链接：  
[1]https://sakana.ai/evolutionary-model-merge/  
[2]https://twitter.com/DrJimFan/status/1771927650883522899?s=20  
[3]https://twitter.com/SakanaAILabs/status/1770613032198279663

— **完** —

**评选报名即将截止！**

**2024年值得关注的AIGC企业 &产品**

量子位正在评选**2024年最值得关注的AIGC企业** 、 **2024年最值得期待的AIGC产品** 两类奖项，欢迎[报名评选]()！

评选报名**截至2024年3月31日![](https://res.wx.qq.com/t/wx_fed/we-
emoji/res/v1.3.10/assets/newemoji/LetMeSee.png)**

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtC7IzBlicP1jwLsfiaw2A2ibBoWRgd47kXexFUOSSzXn5f9fDcza39rny2BgqyDQkDrSoLCDh3Ag7XwA/640?wx_fmt=png&from=appmsg)

**中国AIGC产业峰会**
同步火热筹备中，了解更多请戳：[Sora时代，我们该如何关注新应用？一切尽在中国AIGC产业峰会](http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247718372&idx=3&sn=b89d20b431d783c185143da7c8948372&chksm=e8df2296dfa8ab8021659abb68c594c4ebe5b2907d12777771057499c61143c2cdaa8b3269b3&scene=21#wechat_redirect)

商务合作请联络微信：18600164356 徐峰  

活动合作请联络微信：18801103170 王琳玉

  

**点这里 👇关注我，记得标星噢**

**一键三连「分享」、「点赞」和「在看」**

**科技前沿进展日日相见 ~**

![](https://mmbiz.qpic.cn/mmbiz_svg/g9RQicMD01M0tYoRQT2cMQRmPS5ZDyrrfzeksiay90KaDzlGBH61icqHxmgFKfvfXtVuwTHV740CDLAaXU1LIfZyoJEpYKcRIiaE/640?wx_fmt=svg)

