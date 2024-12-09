# OpenAI创始大神手搓千行C代码训练GPT，附PyTorch迁移教程

文章作者: 量子位
发布时间: 2024-04-09 15:13
发布地: 北京
原文链接: http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247724415&idx=3&sn=166ad19c0fc237b9f9fb5a7c4545397d&chksm=e8dfda0ddfa8531bfa598b70e3b3ec5f2fdc2d76b557df8018dea8ba988665b031f84ad0ac8c#rd

封面图链接: https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtAwQ4hbsRN9u66kXjYmVpBxMx1tUqoaZF2dRvDeuMic7EORxoYZHBSpswZFbCKriae9aJXr0DvXZH9w/300

##### 明敏 发自 凹非寺  
量子位 | 公众号 QbitiAI

大神卡帕西（Andrej Karpathy）刚“复工”，立马带来神作：

**纯C语言训练GPT，1000行代码搞定！** ，不用现成的深度学习框架，纯手搓。

发布仅几个小时，已经揽星2.3k。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAwQ4hbsRN9u66kXjYmVpBx3iaUoX3icGz1dxF1wiaYQSnCRvyRibOgRqrcTxE5IbHHPric37836hn7CKQ/640?wx_fmt=png&from=appmsg)

它可以立即编译和运行，和PyTorch完全兼容。

卡帕西使用的示例是GPT-2，但Llama 2和Gemma等也适用。

项目发布后，他还给出了从PyTorch迁移到C的教程。

网友们直呼：他甚至都不用C++……

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAwQ4hbsRN9u66kXjYmVpBx2mgOfug6F04V78QhwvZpicbBK70anRBGxibClmdytq7r4UcekL6VWhIg/640?wx_fmt=png&from=appmsg)

而且就连怎么让大模型如法炮制的**提示词** ，他也放了出来。现在已经有人在用Devin尝试ing。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAwQ4hbsRN9u66kXjYmVpBxkQJBMK8geLSibibC8FwLvTd5oYNTtDNLYqmOOFMqxN9n0ibHZhuuwMicbQ/640?wx_fmt=png&from=appmsg)

## 手动实现每个层前向/反向传播

选择用GPT-2的原因很简单，有模型权重，采用了堆栈式的Transformer模型结构。

项目核心的重点包括：

  * 直接在C/CUDA上训练LLM，速度接近PyTorch

  * 通过在CPU版本中使用SIMD指令（如AVX2和NEON）聊加速CPU版本

  * 支持更先进的架构，比如Llama2和Gemma

卡帕西解释，他在开始时分配了所有所需内存，训练期间内存占用保持不变，只是数据在不同批次之间动态流动。

关键在于手动实现每个单独层的前向传播和反向传播，并将它们串联起来。例如，下面是层归一化（layernorm）的前向传播和反向传播。

![](https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtAwQ4hbsRN9u66kXjYmVpBx42srialgdsjibV2XjaCekybCUW74dYPy2rojg64B2p7BoBOuoQlib1RBQ/640?wx_fmt=jpeg&from=appmsg)

一旦有了所有的层，把它们全部串联在一起。

卡帕西表示这写起来非常乏味且痛苦，因为过程中必须保证所有pointer和张量都正确排列。

下图中左边是分配一个单一的一维内存数组，然后将所有模型权重和激活函数都指向它。

右图为非常小心地进行pointer计算。

![](https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtAwQ4hbsRN9u66kXjYmVpBx6do1qgtFW5m6ClsibUzsWdQc7ncoXZHInxEjGDaQvUBMs223ZEYKpAw/640?wx_fmt=jpeg&from=appmsg)

一旦建立好了正向/反向传播，其他的都好说了。

但是到这部分，卡帕西觉得到了最有趣的部分。

> 我正在将其逐层移植到CUDA，使其更加高效，甚至可能和PyTorch效率差不多，但不会有过多依赖。

从这里开始还有一些扩展，比如精度从fp32下降到fp16或更低，以及一些更多的层（比如RoFE）来支持更先进的架构。

卡帕西表示，后面还将出一个视频进行更加详细的讲解。

更多的代码在GitHub项目页中有更具体展示。

后面他还加了一个如何从PyTorch迁移到C的教程。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAwQ4hbsRN9u66kXjYmVpBxJJxXvYeQeAY7F5nXLVjyBYoNib7vBvxYIQ5jpL8PINYBMXQps8gsGbQ/640?wx_fmt=png&from=appmsg)

## 网友：这和LLM OS有关吗？

前几天，“消失”了一段时间的卡帕西突然发推特，表示自己前段时间戒网去了，总体来说感觉害行![](https://res.wx.qq.com/t/wx_fed/we-
emoji/res/v1.3.10/assets/newemoji/Yellowdog.png)。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAwQ4hbsRN9u66kXjYmVpBx3AwF8c9qXelPUFnRxcPbkPaB3Xj3eOLmzMYx7rUlH8JrFjH7TGxXyw/640?wx_fmt=png&from=appmsg)

和互联网世界通上信号第4天，他就发布了这一新项目。给网友们来了点小震撼。

在一系列常规的amazing、great之外，大家对新项目主要关心三个方面。

**第一，为啥不用Rust？**

卡帕西表示他也在学习Rust，但是仍旧认为C语言已经很好了。

> 它简单、干净、轻便、美观，是最好的语言。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAwQ4hbsRN9u66kXjYmVpBxk58tIqZRcwUVGujXomAnLumicB7kOdsLrPia3WZA3MvaoUwQ5c5Tic2ng/640?wx_fmt=png&from=appmsg)

**第二，AI程序员能写出同样的项目吗？**

值得一提的是卡帕西还给出了一段提示词，表示大家可以用LLM Agent试试看。

> 目前的模型生成结果没那么好，但也许1、2年之后可以再看看。如果成功了……

“可能就是AGI到来了？”

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAwQ4hbsRN9u66kXjYmVpBxj5XS8z3Z5BQLJtdrvx9JTdTicbIuNMuHAXibD0QUXAYqTuTBALgvnj0w/640?wx_fmt=png&from=appmsg)

现在已经有网友开始用Devin尝试了。

他担心Devin搜到了卡帕西的项目，然后直接抄下来。目前为止Devin还没有这么做。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAwQ4hbsRN9u66kXjYmVpBxXT2ic22R1kO9ZuccL6EFUwPtrIcZwSMpcIITPjiaxAic6mqicIibqx4ca2Q/640?wx_fmt=png&from=appmsg)

不过卡帕西表示相比于这个，他更担心LLM
Agent在1-2年后确实可以解决这个问题了，但是那时各种代码和讨论会以一种别样的方式渗透到训练数据里，导致结果不够令人满意。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAwQ4hbsRN9u66kXjYmVpBxVRMqFRagTvr2ibzA56Yv5AFLdfdXhWNQl1S5rRtWd3YiaDibYhNA7e8Vg/640?wx_fmt=png&from=appmsg)

有人补充说，要加强数据管理了。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAwQ4hbsRN9u66kXjYmVpBxcyNORGAg9zaa5NKRM5MxQqnDVLM3icaRRzCv8XPKWXA5AZO6R4IDQNA/640?wx_fmt=png&from=appmsg)

**第三个讨论比较多的话题则是，这个项目和LLM OS有关吗？**

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAwQ4hbsRN9u66kXjYmVpBx76ab9uF6GX7pGic83ZdyIouYRHDiarbulM1NkKQ5b23XEyQposAdQtuA/640?wx_fmt=png&from=appmsg)

前段时间卡帕西从OpenAI离职，计划要开始推进个人项目。

当时大家都猜测，他要做LLM OS。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAwQ4hbsRN9u66kXjYmVpBxjW5iayMjWpICibiaTUv7bw8QKsmywEhqVlZJnB3NLX2sNxmpibVdQCOQCA/640?wx_fmt=png&from=appmsg)

3月底在访谈中，他也再次聊了这个话题。

他表示，现在AGI的路线已经相对清晰了，大家都在如火如荼推进工作，大致来说，每个人都在努力构建“大模型操作系统（LLM OS）”.

>
> 我喜欢把它比作一个操作系统。你要准备好各种外围设备，然后把他们连接在一个新的CPU上。**这些外围设备包括文本、图像、音频等各种模态。CPU就是语言模型本身。它还要与我们已经构建的所有Software
> 1.0基础设施相连** 。
>
> 我认为大家都在努力构建这样一个东西，然后把它定制成适用于各个经济领域的产品。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAwQ4hbsRN9u66kXjYmVpBxp4lqz5mhvN8YhQWjIucOFJEfic3zsjZbWh1OsgGrJYxRg6L7TlI249A/640?wx_fmt=png&from=appmsg)

现在随着新项目推出，卡帕西的个人项目大概是已经提上日程了。

后续关于LLM.C的项目还会推出更详细的视频讲解版本，大家可以期待一波了~

GitHub地址：  
https://github.com/karpathy/llm.c

参考链接：  
[1]https://twitter.com/karpathy/status/1777427944971083809  
[2]https://twitter.com/karpathy/status/1777493157485437009  
[3]https://twitter.com/karpathy/status/1777481372636246491?s=46&t=iTysI4vQLQqCNJjSmBODPw

— **完** —

**【🔥 火热报名中】中国AIGC产业峰会  
**

**定档4月17日**

峰会已经邀请到数位代表技术、产品、投资、用户等领域嘉宾，共论生成式AI产业最新变革趋势。

最新确认嘉宾包括：**商汤科技****杨帆** 、**轻松集团****高玉石** 、**印象笔记****唐毅** 、**蚂蚁集团****李建国**
等，[了解更多嘉宾详情](http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247723923&idx=2&sn=ef85f4d2209e62f02d343b7bf88f731a&chksm=e8dfdce1dfa855f71838d3e8a8e9abdb997ddaa45547793f0a373b8baeb7211e2f11365b5f39&scene=21#wechat_redirect)。

[点击报名参会 ⬇️]()

[![](https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtDlvmVssxqp6Jf7C6ZIwt76oeI4gxNbx0FeUWTz1cCt7LSj2n8f0C2qxYHA6odjoROc20D0ujkVRg/640?wx_fmt=jpeg&from=appmsg)]()峰会将全程线上下同步直播，欢迎预约直播
⬇️

**  
**

**点这里 👇关注我，记得标星噢**

**一键三连「分享」、「点赞」和「在看」**

**科技前沿进展日日相见 ~**

![](https://mmbiz.qpic.cn/mmbiz_svg/g9RQicMD01M0tYoRQT2cMQRmPS5ZDyrrfzeksiay90KaDzlGBH61icqHxmgFKfvfXtVuwTHV740CDLAaXU1LIfZyoJEpYKcRIiaE/640?wx_fmt=svg)

