# 多样任务真实数据，大模型在线购物基准Shopping MMLU开源｜NeurIPS&KDD Cup 2024

文章作者: 量子位
发布时间: 2024-11-20 11:59
发布地: 未知地区
原文链接: http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247759836&idx=4&sn=85b872c3aed7b9d91c12663eb9928086&chksm=e8dc40aedfabc9b80d6b5b7855e6052e62a0e53c0a570a5c20de5178554836885791400466f8#rd

封面图链接: https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtCHZeKELrd9PwAVf11m8rSQ4PQqKQScIrEicicjIFqUw6N9cUZX2DIgeRh0TibGKic6zKpHxtsDrus4xQ/300

##### 港科大博士金逸伦 投稿  
量子位 | 公众号 QbitAI

谁是**在线购物领域** 最强大模型？也有评测基准了。

基于真实在线购物数据，电商巨头亚马逊终于“亮剑”——

联合香港科技大学、圣母大学构建了一个大规模、多任务评测基准**Shopping MMLU** ，用以评估大语言模型在在线购物领域的能力与潜力。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCHZeKELrd9PwAVf11m8rSQhU4Wv8le6YLp3cKDTga1IzBzoJ14ml3OSnSWLRnobM5Zic6EwBuYz5A/640?wx_fmt=png&from=appmsg)

一直以来，想要完整建模在线购物相当复杂，主要痛点是：

  * **多任务性：** 在线购物中存在多样的实体（例如商品、属性、评论、查询关键词等）、关系（例如关键字和商品的匹配度，商品和商品之间的兼容性、互补性）和用户行为（浏览、查询、和购买）。

对这些实体、关系和行为和联合建模与理解构成一个复杂的**多任务（multi-task）学习问题** 。

  * **少样本性：** 在线购物平台会不断面临新用户、新商品、新商品品类等带来的冷启动（cold-start）场景。在冷启动场景下，在线购物平台需要解决少样本（few-shot）学习问题。

不过，诸如GPT，T5，LLaMA等的大语言模型（LLM）已经展现出了强大的多任务和少样本学习能力，因而有潜力在在线购物领域中得到广泛应用。

而为了进一步找出最强、最具潜力的LLM，测试基准Shopping MMLU应运而生——

与现有数据集相比，Shopping MMLU覆盖了更多的能力（四项）和任务（57个）。

同时，基于Shopping MMLU，亚马逊举办了KDD Cup 2024数据挖掘竞赛，吸引了全球超过500支队伍参赛。

![](https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtCHZeKELrd9PwAVf11m8rSQ3pIcr1Qbicj6d6mFiceLcIYg2xY4IDpK1yszltImiatbKxeSBZ41TUsAg/640?wx_fmt=jpeg&from=appmsg)

## 广泛的能力和任务覆盖

为了全面、充分评估大语言模型在在线购物领域中的能力，研究首先分析了在线购物领域的独特性：

  * **特定领域的短文本** ：在线购物中存在大量的特定领域名词，例如品牌、产品名、产品线等。此外，这些特定领域名词往往出现于短文本中，例如查询关键词、属性名-值对等。因此，在缺乏上下文的短文本中理解特定领域名词，是在线购物领域的一个独特挑战。

  * **商品的隐含知识** ：大部分商品都隐含特定的知识，例如AirPods使用蓝牙连接，不需要转接线；碳纤维制品一般重量很轻等。如何准确理解不同商品隐含的知识并且进行推理，是在线购物领域的另一个独特挑战。

  * **异质且隐式的用户行为** ：在线购物平台上存在多种多样的用户行为，例如浏览、查询、加购物车、购买等。这些行为大部分都不以语言表达，因此如何全面理解这些异质的用户行为，是在线购物所必须解决的问题。

  * **多语言任务** ：在线购物平台往往在不止一个地区运营，因此需要模型能同时理解多种语言描述下的商品和用户问题。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCHZeKELrd9PwAVf11m8rSQHwMIPtosFvatlaZzo3LzgSr01TxFEZYSr1Dp5PYibXYUtwxB3GLTHSg/640?wx_fmt=png&from=appmsg)

基于以上分析，研究构造了Shopping MMLU，**覆盖四项在线购物能力，共计57个任务** ：

  * 在线购物概念理解

  * 在线购物知识推理

  * 用户行为理解

  * 多语言能力

下表可见，Shopping MMLU相比现有数据集覆盖了更多的能力和任务。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCHZeKELrd9PwAVf11m8rSQQ3FGCMlFP6ElQphicFNA8wsT0D0XgN4eevGo1ojAPL21LDlxXxZCJnQ/640?wx_fmt=png&from=appmsg)

能力和任务构成如下图所示。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCHZeKELrd9PwAVf11m8rSQamdAmFIVGe9yibyFQSiaZyZtQyxBRXiaygY7niaKvfldLT1Dbq3uPzfPRg/640?wx_fmt=png&from=appmsg)

Shopping MMLU大部分由**真实的** 亚马逊在线购物数据构造，并且经过人工检验，尽可能排除低质量数据，例如标注错误，缺乏必要信息等。

部分问题示例如下。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCHZeKELrd9PwAVf11m8rSQ2Bmb5QUvuBwbRHiabBQ5P0hSrib7sCUvCNibG8U8jMOtfGMO1PK6Hx7ibQ/640?wx_fmt=png&from=appmsg)  
![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCHZeKELrd9PwAVf11m8rSQiaNFUEXZvtKtsdvXvrsjia4fCHpgpGo95t7vHToSyLUftuCBTSnOPXCw/640?wx_fmt=png&from=appmsg)  
![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCHZeKELrd9PwAVf11m8rSQIlhdwBt2Hu4vWicyVianqELHSw6t5VlqP58X5mY1HaMX8z0rY9Jkjk0Q/640?wx_fmt=png&from=appmsg)

## 主流大语言模型成绩单

研究选取了共**27个** 主流大语言模型进行实验分析，其中包括：

  * 闭源模型（Claude-3, Claude-2, GPT）

  * 开源通用领域模型（LLaMA2、LLaMA3、QWen、Mistral）

  * 开源特定领域模型（eCeLLM，经过在线购物领域数据进行微调）

实验结果如下表所示。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCHZeKELrd9PwAVf11m8rSQIIllsg93YSMLoyiamLh3hdBib7gxZNzrgTfQSMBmyeBWCtBsy1HOqnkA/640?wx_fmt=png&from=appmsg)

研究发现，虽然闭源模型仍然处于领先（例如Claude-3 Sonnet整体排名第一），但开源模型已经能够赶上闭源模型的性能（例如QWen和LLaMA3）。

此外，特定领域模型eCeLLM并未在同参数量级下取得最好成绩，说明Shopping MMLU是一个有相当难度的评测基准，无法通过简单的微调取得好成绩。

## 如何打造在线购物领域大模型

基于Shopping MMLU，研究分析常用的大模型增强手段，进一步探究如何打造强大的在线购物领域大模型。

首先，如下图所示，模型在不同能力和任务上的得分**高度正相关**
。这说明了在线购物领域的不同任务之间存在共同的知识，可以使用大语言模型进行**整体性的建模和能力提升** 。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCHZeKELrd9PwAVf11m8rSQcsuicUpWbkViaqOdic5X0gdG3ommVPCKMRqvpQCAVOAfBOicDljqu9QvWA/640?wx_fmt=png&from=appmsg)

其次，如下图所示，模型的Shopping MMLU得分和模型在通用大模型基准测试的得分（Open LLM Leaderboard）同样高度相关。

另外，随着同一个模型家族内模型增大，其Shopping MMLU得分同样增加。

这表明大语言模型的通用能力可以很好地迁移到在线购物领域中，构造特定领域大模型的基础是**强大的通用能力** 。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCHZeKELrd9PwAVf11m8rSQlaicqwfmHMMgqPxKSokcKIic8qUI5ZYsHRXWibD68WWI9ickqYP4sEdoVg/640?wx_fmt=png&from=appmsg)

随后，研究分析了微调对模型在Shopping MMLU得分的影响。

**通用领域的微调一般对模型在Shopping MMLU上有提升** 。不过，这一结论也与基础模型的能力，微调的数据质量等因素存在关系。

例如，在LLaMA2-70B上，研究观察到经过微调的LLaMA2-70B-chat得分低于LLaMA2-70B，而在LLaMA3-70B上没有观察到这一现象。

**可能的原因是** ，相对较小的微调数据使得LLaMA2-70B过拟合，导致通用能力的部分丢失，进而导致Shopping MMLU上得分下降。

反之，LLaMA3使用了更高质量的微调数据，所以能够保留通用能力，同时增强模型回答问题的能力，得到更高的分数。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCHZeKELrd9PwAVf11m8rSQd8fymeQUvqp6Xkd8X3c6r7ibIeUvugg9VRWMRnksaB1M4NI9tWRlEzA/640?wx_fmt=png&from=appmsg)

**特定领域微调（如eCeLLM）并未能在Shopping MMLU上取得最高得分。**

为了探究其中原因，研究测试了eCeLLM与其基础模型在通用能力上的对比。结果表明，经过特定领域微调的eCeLLM相比其基础模型的通用能力一般有所下降。

这可能是导致eCeLLM未能取得最高得分的原因，也同时强调了通用能力对于对特定领域的重要性。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCHZeKELrd9PwAVf11m8rSQAm1RnldZBtEVDvic5XkXKniapN4wiaHqxPeaQ6Zu269YNBItSenhUejdA/640?wx_fmt=png&from=appmsg)

## 总结

Shopping
MMLU是一个针对大语言模型和在线购物领域设计的评测指标。其包含广泛的任务和能力覆盖（4项重要能力，共计57个任务），可以全面评估大语言模型在在线购物领域的能力和潜力。

Shopping MMLU基于亚马逊的真实购物数据打造，经过人工筛选，保证数据质量。基于Shopping
MMLU，研究展开了大量实验分析，为这一领域后续的研究和实际应用提供了有价值的结论。

目前，Shopping MMLU以及其对应的资源**全部开源** 并将持续维护，方便研究人员和开发者进行深入探索和应用。

Shopping MMLU的数据以及对应评测代码已经于GitHub公开。

同时，为了构造开放、开源的评测体系，研究基于Shopping MMLU建立了一个**排行榜** 。

官方表示，Shopping MMLU欢迎新模型加入排行榜，如果有兴趣的话可以于GitHub上与Shopping MMLU维护者进行联系。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtCHZeKELrd9PwAVf11m8rSQ6vSk3uHx5JHIJWOCXUPC5T0fYgrMXUIKj4JbFBGuMLDI5FZS40Wg3g/640?wx_fmt=png&from=appmsg)

论文：  
https://arxiv.org/pdf/2410.20745  
数据及评测代码：  
https://github.com/KL4805/ShoppingMMLU  
KDD Cup 2024 Workshop及获奖队伍解法：  
https://amazon-kddcup24.github.io/  
评估榜单：  
https://huggingface.co/spaces/KL4805/shopping_mmlu_leaderboard

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

