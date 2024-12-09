# 谷歌&MIT何恺明团队：视觉大模型像LLM一样高效Scaling，指路连续token+随机生成顺序

文章作者: 量子位
发布时间: 2024-10-20 10:58
发布地: 北京
原文链接: http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247753475&idx=1&sn=4138cb671d473d45f700baed033490d9&chksm=e8dfa871dfa82167ff9d352394224e97a547f4b3034b7a500baa2155bd8f82d01d8225fbc17f#rd

封面图链接: https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtCApyiaO4v2FUyJjfhzgvLDN3OsIHxl13l6LVPBV8BpU6oD9mHutZJQUgic06TgpsXyiaIJ87V7lmAAg/300

##### 梦晨 发自 凹非寺  
量子位 | 公众号 QbitAI

视觉自回归模型的Scaling，往往不像在语言模型里那样有效。

**谷歌 &MIT何恺明团队**联手，有望打破这一局面，为自回归文生图模型的扩展指出一个方向：

  * **基于****连续token** 的模型比离散token模型在视觉质量上更好。

  * **随机顺序生成** 与光栅顺序相比在GenEval测试上得分明显更好。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCApyiaO4v2FUyJjfhzgvLDNRRXewtE8CwcnP3XBASkINdcOR398IAdXwYy9QXav4sl7nA1HcEe4xw/640?wx_fmt=png&from=appmsg)

受到这些发现启发，团队训练了**Fluid** ，一个基于连续标记的随机顺序自回归模型。

扩展至百亿参数的Fluid在MS-COCO 30K上zero-
shot条件下实现了6.16的FID分数，并在GenEval基准测试中获得了0.69的整体得分。

团队希望这些发现和结果能够鼓励未来进一步弥合视觉和语言模型之间的规模差距。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCApyiaO4v2FUyJjfhzgvLDNT5KkByJfhSPoQPJumM39riakasTnTSEia65W4YS8byPokAKl6Gef7tLw/640?wx_fmt=png&from=appmsg)

## 100亿参数自回归文生图模型

回顾过去，两个关键设计因素限制了自回归图像生成模型的性能表现:

  * **离散token。** 大多数此类模型借鉴NLP的做法，先用vector-quantized（VQ）方法将图像离散化为一组token，每个token只能取有限的离散值。这种量化难免损失大量信息。

  * **光栅顺序。** 即按从左到右、从上到下的固定顺序生成token。这种方式虽有利于推理加速，但也影响了生成质量。

Fluid继承了团队在[今年6月份研究《Autoregressive Image Generation without Vector
Quantization》](http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247735118&idx=1&sn=aff615799152d56097b19b3cc26df045&chksm=e8dfe03cdfa8692ad643b8f5aefba07f727749d1e2e8745c1cd708a16524f4ea3a4bdb2e29ac&scene=21#wechat_redirect)的思路，抛弃离散token，改用连续token。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCApyiaO4v2FUyJjfhzgvLDNW7JmIG1WnVSZjASry2Zr1QHGtQjANVswYJZNrYRkmMPvMic5DgurJug/640?wx_fmt=png&from=appmsg)

它借鉴了扩散模型，用一个小型去噪网络近似每个token的连续分布。

具体而言，模型为每个位置的token生成一个向量z作为条件，输入一个小型去噪网络。这个去噪网络定义了token
x在给定z时的条件分布p（x|z）。训练时，该网络与自回归模型联合优化；推理时，从p（x|z）中采样即可得到token。整个过程无需离散化，避免了量化损失。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCApyiaO4v2FUyJjfhzgvLDNS4qI43C1XiazQaxd8kt2uRaS12y9lAOW43sIUGPJTC4ib1N8eG5s7axA/640?wx_fmt=png&from=appmsg)

再来看看生成token的顺序。按固定的光栅顺序逐个生成token，推理时虽然可以用kv缓存加速，但因果关系的限制也影响了生成质量。

Fluid另辟蹊径，**随机选择要生成的token** ，并用**类似BERT双向注意力** 的机制捕捉全局信息。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCApyiaO4v2FUyJjfhzgvLDN5TMtic3cn11badB1YhU7smeozv0Drsy1reGJ3GQv5k6afCmslMT5mgg/640?wx_fmt=png&from=appmsg)

在推理时采用完全随机顺序，训练和推理过程的序列分布更一致；同时还能对每个token进行**类似GPT的temperature采样**
，进一步提升了生成多样性。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCApyiaO4v2FUyJjfhzgvLDNmnaCtyD6p7ia1fyubQfcqCjZHiaaR6o9CLh0xEW4WlxTH1ck8nNuhW6g/640?wx_fmt=png&from=appmsg)

得益于扩散损失和MAR范式的双重加持，作者将模型参数量扩展到超过100亿，在MS-COCO和GenEval数据集上取得领先结果。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCApyiaO4v2FUyJjfhzgvLDNdYtxzib4RsQ9dwoplrO1ZUKkUHAGnfhB1dGEZTemT9Sou5x8iaGZ08ng/640?wx_fmt=png&from=appmsg)

更重要的是，随着参数量和训练轮数的增加，模型在验证损失、FID、GenEval
Score等指标上表现出良好的可扩展性，为进一步扩大规模提供了理论支撑。这与语言模型的Scaling现象非常类似，表明视觉大模型的潜力尚未被充分挖掘。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCApyiaO4v2FUyJjfhzgvLDNVzglfEzgSiaKqzyVxx7FB8dibQibOk0QP7RsJ95rAtTX61J7nnpRpanhA/640?wx_fmt=png&from=appmsg)

更多Fuild模型生成图像精选：

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCApyiaO4v2FUyJjfhzgvLDNur9b15Hn5IgtdTFccpXkj4xubGXiaV3nDZtJjDhIIIaxRLQan6N3Ymw/640?wx_fmt=png&from=appmsg)

论文地址：  
https://arxiv.org/abs/2410.13863v1

— **完** —

**评选征集中**

**「2024人工智能年度评选」**

量子位2024人工智能年度评选已开启报名通道，评选从**企业** 、**人物** 、**产品** 三大维度设立了5类奖项。

**欢迎扫码报名评选！**
评选结果将于12月[MEET2025智能未来大会](http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247752188&idx=2&sn=c1bc1e4d987c3a10cfef338059b3dfb1&chksm=e8dfae8edfa82798657f4fcb6469d47175940482fd452f1aff146be45890942a2385a2533344&scene=21#wechat_redirect)公布，期待与数百万从业者共同见证荣誉时刻。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAOVibXbw5eUnvqbCic6T1OKtFJzFhIdiauXic5xgYVG2LogYPX94d9GO5yiaQKicPFPUwgM30w350XNfIQ/640?wx_fmt=png&from=appmsg)

**点这里 👇关注我，记得标星哦～**

**一键三连「点赞」、「分享」和「在看」**

**科技前沿进展日日相见 ~**

![](https://mmbiz.qpic.cn/mmbiz_svg/g9RQicMD01M0tYoRQT2cMQRmPS5ZDyrrfzeksiay90KaDzlGBH61icqHxmgFKfvfXtVuwTHV740CDLAaXU1LIfZyoJEpYKcRIiaE/640?wx_fmt=svg)

