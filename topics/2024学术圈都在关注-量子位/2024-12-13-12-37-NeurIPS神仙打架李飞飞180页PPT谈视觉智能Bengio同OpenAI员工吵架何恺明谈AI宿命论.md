# NeurIPS神仙打架：李飞飞180页PPT谈视觉智能，Bengio同OpenAI员工吵架，何恺明谈AI宿命论

文章作者: 量子位
发布时间: 2024-12-13 12:37
发布地: 北京
原文链接: http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247766764&idx=3&sn=8a44b650945a0c718c27b8825201d62a&chksm=e8dc659edfabec88d70e04eb8cae322d224752a44d4b235e97e50e322acb246fd2059fe12ca4#rd

封面图链接: https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtDFjGx3L9oiawPZkI3bbPk6jTMHdweX7dqsrPqSZjoO7P8J99xnq21jfFhyeYUwyTcUrfU6Qy7gXeQ/300

##### 白小交 发自 凹非寺  
量子位 | 公众号 QbitAI

> 我们无法忽视世界是三维的，解决三维智能是根本性的。

李飞飞最新采访来了，继续延伸她在NeurIPS有关视觉智能的话题。

她表示，解决空间智能问题是迈向全面智能化的基础和关键一步。

不过从现场传出的NeurIPS演讲PPT中竟然有写：AI将取代人类？！

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDFjGx3L9oiawPZkI3bbPk6jIibleL5FSnbrw8AfwfQVqV7ZJV76S3SOFpGjtXjIibkNC3oSA4HzWMWw/640?wx_fmt=png&from=appmsg)

这究竟是怎么一回事？！

有网友表示，当她看到这页时，她的表情be like：

![](https://mmbiz.qpic.cn/mmbiz_gif/YicUhk5aAGtDFjGx3L9oiawPZkI3bbPk6jqj0bZcPqNvgkDa09MUEXicE31t3Pfxic8DvWrxJuoLicHLuJZm0Xmk9UQ/640?wx_fmt=gif&from=appmsg)

有一说一，今年NeurIPS好不热闹，大佬们聚在一起，就是容易制造各种话题（Doge）。

比如，疑似Bengio和OpenAI o1的人吵起来了。

何恺明竟然探讨起了AI宿命论？？？

来来来，来看看一个吃瓜汇总。

## 李飞飞180页PPT谈视觉智能

今年李飞飞在NeurIPS演讲的话题是《从看到到做：攀登视觉智能的阶梯》。

![](https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtDFjGx3L9oiawPZkI3bbPk6jePLVDhr0FhZz7tRSYpsibhLlUTHPG85bG9OzFN9XAwiasJzibcoKIjUcg/640?wx_fmt=jpeg&from=appmsg)

她自曝准备了180页ppt，从各种路透图来看，确实是干货满满。

![](https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtDFjGx3L9oiawPZkI3bbPk6jJQEbENk3hgaRdoC1LUiaoESibRHZic8bcfrxLtMiaulfZib0lhh3lzzx7pA/640?wx_fmt=jpeg&from=appmsg)  
![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDFjGx3L9oiawPZkI3bbPk6jwOiaxbP5k77SF6dicVaHc4dXkIicJS8vuNuiccmg8ZckaFwGchnjHEzicLw/640?wx_fmt=png&from=appmsg)  
![](https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtDFjGx3L9oiawPZkI3bbPk6jyzFnicP1ibicwfyLZ6Uhm1Vmu5SUpfnTb65NE4TTiaT3sO0oYiaFELGdEEQ/640?wx_fmt=jpeg&from=appmsg)

而在最新IEEE Spectrum采访中，她进一步揭示了相关细节。（该采访是在NeurIPS演讲前进行）

**采访实录：**

**Q：为什么演讲题目是“攀登视觉智能的阶梯（Ascending the Ladder of Visual Intelligence）”？**

**李飞飞**
：我认为，直觉告诉我们，智能具有不同的复杂度和精密度。在演讲中，我想传达这样一种感觉：在过去的几十年里，尤其是过去十多年的深度学习革命中，我们在视觉智能方面所取得的成就令人惊叹。我们越来越擅长使用这项技术。我还受到了
Judea Pearl 的“因果关系阶梯”的启发。（收录于2020年出版的《the Book of Why》）

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDFjGx3L9oiawPZkI3bbPk6jibe5GIgvQaWmSVurLykynECFJlU3NX0QOOicyRdR7yuE6NuBdUz3Sofg/640?wx_fmt=png&from=appmsg)

（这里插一嘴，Judea Pearl本人还特意纠正了一下，他表示因果关系阶梯所定义的等级是第一定律的数学结果，而不是一种判断性的建构。）  
![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDFjGx3L9oiawPZkI3bbPk6jVV3rAnrctDbp5f0ZiaKrlvqzoJtSwibhRFa9UNPe0wqxQeGwwgv9eiamA/640?wx_fmt=png&from=appmsg)

**李飞飞** ：演讲还有一个副标题，即“从看到到做（From Seeing to Doing）”。这是人们没有足够重视的一点：“看 ”都与互动和 “做
”密切相关，无论是对于动物，还是AI Agents来说都是如此。**这与语言是不同的**
。语言从根本上说是一种交流工具，用来传递思想。在我看来，这些都是非常互补但同样深刻的智能模式。

**Q：你的意思是说，我们会对某些景象做出本能的反应？**

**李飞飞**
：我说的不仅仅是本能。如果你看一下感知力的进化和动物智力的进化，就会发现这两者之间有着深刻的联系。每当我们能够从环境中获得更多信息时，进化的力量就会推动能力和智力的发展。如果你不能感知环境，你与世界的关系就会非常被动；你是吃还是被吃，都是非常被动的行为。但是，一旦你能够通过感知从环境中获取线索，进化的压力就会真正增强，从而推动智力向前发展。

**Q：你认为这就是我们创造更深入的机器智能的方式吗？让机器感知更多的环境？**

**李飞飞** ：我不知道 “深度
”是不是我想用的形容词。我认为我们正在创造更多的能力。我认为它正变得越来越复杂，越来越有能力。**我认为，解决空间智能问题是迈向全面智能化的基础和关键一步**
，这是绝对正确的。

**Q：我看过世界实验室的演示。你为什么要研究空间智能并构建这些三维世界？**

**李飞飞**
：我认为空间智能是视觉智能的发展方向。如果我们真的要破解视觉问题，并将其与做事联系起来，那么有一个极其简单、一目了然的事实：**世界是三维的**
。我们生活的世界不是平面的。我们的物理Agent，无论是机器人还是设备，都将生活在三维世界中。就连虚拟世界也变得越来越3D化。如果你与艺术家、游戏开发者、设计师、建筑师、医生交谈，即使他们是在虚拟世界中工作，其中大部分也是三维的。如果你能花点时间认识到这个简单而深刻的事实，那么毫无疑问，**解决3D智能问题就是根本所在**
。

一旦你尊重了世界的三维性，很多事情就自然而然地发生了。例如，在我们发布在社交媒体上的一个视频中，篮球被投放到一个场景中。因为它是三维的，所以你可以拥有这种能力。如果场景只是
2D 生成的像素，篮球将无处可去。

**Q：或者，就像Sora中那样，它可能会去到某个地方，但随后就消失了。在你尝试推进这项技术的过程中，最大的技术挑战是什么？**

**李飞飞**
：没有人解决过这个问题，对吧？这非常非常难。在世界实验室的演示视频中，你可以看到我们将一幅梵高的画作，以一致的风格生成了它周围的整个场景：艺术风格、灯光，甚至是那个社区会有什么样的建筑。如果你转过身去，它就变成了摩天大楼，那就完全没有说服力了，对吗？它必须是
3D 的。你必须进入其中。所以它不仅仅是像素。

**Q：你能说说你用来训练它的数据吗？**

**李飞飞** ：很多。

**Q：你们在计算负担方面遇到过技术挑战吗？**

**李飞飞**
：计算量很大。这是公共部门负担不起的计算量。这也是我很高兴能休假，以私营部门的方式来做这件事的部分原因。我的亲身经历强调了在获得充足资源的情况下进行创新的重要性。

知识的发现需要资源的支持，对吧？在伽利略时代，是最好的望远镜让天文学家观测到了新的天体。是虎克意识到放大镜可以变成显微镜，发现了细胞。每一次新技术工具的出现，都有助于知识的探寻。而现在，在人工智能时代，技术工具涉及计算和数据。我们必须认识到这一点。

**Q：假设我们能让人工智能系统真正理解三维世界，这会给我们带来什么？**

**李飞飞**
：它将为人们释放大量的创造力和生产力。我希望能以更高效的方式设计我的房子。我知道，许多医疗用途都涉及到理解一个非常特殊的三维世界，那就是人体。我们总在谈论未来人类将创造机器人来帮助我们，但机器人是在三维世界中航行的，它们需要空间智能作为大脑的一部分。我们也在谈论虚拟世界，它能让人们参观景点、学习概念或娱乐。这些虚拟世界使用三维技术，尤其是混合技术，也就是我们所说的
AR（增强现实技术）。我很想戴着一副眼镜在国家公园里漫步，它能为我提供有关树木、道路和云彩的信息。我还想通过空间智能学习不同的技能。

**Q：什么样的技能？**

**李飞飞** ：我举个蹩脚的例子，如果我在高速公路上爆胎了，我该怎么办？现在，我打开了一个 “如何换轮胎
”的视频。但如果我能戴上眼镜，看到我的车发生了什么，然后在指导下完成这个过程，那就很酷了。但这只是个蹩脚的例子。你可以考虑烹饪，可以考虑雕刻—有趣的事情。

**Q：你认为我们在有生之年能在这方面取得多大进展？**

**李飞飞** ：哦，我认为这将在我们有生之年实现，因为科技进步的步伐真的很快。你已经看到了过去 10 年所带来的变化。这无疑预示着下一步会发生什么。

## 今年NeurIPS好热闹

NeurIPS整个会议期间，可以说是好不热闹。

比如，Bengio和OpenAI的人吵起来了。

据在场的人爆料，在今年因果关系小组讨论中，OpenAI o1的主创表示，我们最终应该训练Agent来优化对世界的理解，来解决科学问题。

Bengio还有一位谷歌AGI安全研究员Tom
Everitt则指出这样做很可怕！他们表示不应该制造这样强大的Agent，还有其他方法可以增强人类的能力，并进行科学研究，比如让模型学习因果图。

而就在刚才，Bengio还进一步回应了，再次强调了AI Agent潜在的风险。

> 如果我们不解决调整和控制问题，随着我们赋予系统越来越多的代理权，人工智能的风险将继续增长。在此之前，我们需要在科学和政策两方面取得重大进展。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDFjGx3L9oiawPZkI3bbPk6jBrDqxGC60H3wQYOAcjU0wrQicJVM3k7Mr6mQ8XgmlxvCv0lRB4xFlKw/640?wx_fmt=png&from=appmsg)

而何恺明竟然探讨起了AI宿命论？！

据热心网友们的爆料，他是在被问到AI属于发明还是发现的时候。

他表示这要看你相不相信宿命论了。（Doge）

![](https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtDFjGx3L9oiawPZkI3bbPk6jjBnPd6ibKjxsHekBsPwOjB6r8wB8ibFq8iaCYsLwTM5rvFXX5Gpz7XMvw/640?wx_fmt=jpeg&from=appmsg)

除此之外，他在演讲中探讨了AI未来的发展：Super-human AI？

据小红书网友爆料，他提到一个有意思的观点，他将人类比作大模型的传感器：

人类感知，理解，压缩了世界的所有的知识并用文本和语言记录下来。大语言模型吸取，学习这些内容并将其建模为一个强大而丰富的空间。但是就像你只用RGB观测宇宙一样，总会有紫外，红外这样看不到，看不清的东西。

![](https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtDFjGx3L9oiawPZkI3bbPk6jibBNNSr4uFYVK6NtKL5ae5j3VjucRkKQKuFZd7WLzYIJUfrNJ7HaQ1g/640?wx_fmt=jpeg&from=appmsg)

###### **△** 授权自博主@时间煮雨我主Q

好了，NeurIPS期间还有没有发生什么有意思的事情，欢迎小伙伴们跟我们爆料。

参考链接：  
[1]https://spectrum.ieee.org/fei-fei-li-world-labs  
[2]https://x.com/connoraxiotes/status/1866921924703498412  
[3]https://x.com/kyliebytes/status/1866987524805234785  
[4]https://www.xiaohongshu.com/explore/6759be860000000001029429  
[5]http://xhslink.com/a/IFIoiN1IoRy1  
[6]https://x.com/yoshua_bengio/status/1867274312941523193?s=46&t=iTysI4vQLQqCNJjSmBODPw

— **完** —

**点这里 👇关注我，记得标星哦～**

**一键三连「分享」、「点赞」和「在看」**

**科技前沿进展日日相见 ~**

![](https://mmbiz.qpic.cn/mmbiz_svg/g9RQicMD01M0tYoRQT2cMQRmPS5ZDyrrfzeksiay90KaDzlGBH61icqHxmgFKfvfXtVuwTHV740CDLAaXU1LIfZyoJEpYKcRIiaE/640?wx_fmt=svg)

  

