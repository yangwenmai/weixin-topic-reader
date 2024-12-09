# “在线版FLUX”已支持ControlNet，无需部署开箱即用，还能在线训练LoRA模块

文章作者: 量子位
发布时间: 2024-08-16 13:05
发布地: 北京
原文链接: http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247744165&idx=4&sn=e9384f3c3d339f8f681745f1553f4602&chksm=e8df8dd7dfa804c174583a5b15da554e49a7f315e668e366c789ee68fb4266d4025bcb2bd298#rd

封面图链接: https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtDkycQrw5HBhtv3u6wpfsgLsicPD6C9QoyiaovnprIAbFw2QLN8chuhQuqyLS0o9QySZBxR8SGaicNfQ/300

##### 克雷西 发自 凹非寺  
量子位 | 公众号 QbitAI

“FLUX在线版”，新增一系列重磅功能！

ControlNet、LoRA等重要模块都悉数到齐，而且开箱即用，无需自行配置工作流。

甚至还可以在线训练自己的LoRA模型，并通过链接进行分享。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDkycQrw5HBhtv3u6wpfsgLQDnFhlmexAISiccVD8z8DULT3lYZYVT0ZF1sweNb9ynf1klo7wBx1Mw/640?wx_fmt=png&from=appmsg)

Stale Diffusion原班人马打造的最强绘图模型——FLUX上线之后，在线推理服务平台fal.ai就立即进行了跟进。

后续第三方开发的ControlNet、LoRA等新功能，也被fal迅速地加入到了自己的平台当中。

得益于fal开箱即用、支持一键分享的优势，LoRA和ControlNet加持的FLUX很快被网友们玩出了花。

比如给下面这个名场面当中的任务修改一下面部表情。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDkycQrw5HBhtv3u6wpfsgLP22XOpJOaYoib57tQKsSJhNH7rfSBchxqhxK0knSe6dVbJszIpleVIg/640?wx_fmt=png&from=appmsg)

实际上，fal也是FLUX开发团队黑森林实验室官方合作的两个在线推理平台之一（另一个是Replicate）。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDkycQrw5HBhtv3u6wpfsgLz4Jdrx2B0qbLtM4445uCXhPaOiaIznGccQaraoPDBxTvRuedR8zS5QA/640?wx_fmt=png&from=appmsg)

fal.ai团队成员Jonathan Fischoff也在推特上大量转发网友利用其平台创作的作品和LoRA模型。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDkycQrw5HBhtv3u6wpfsgL9GDXicaE4qcW8WryAu0uibzCKnl3Mh77BKsKwiaFyIgBrfIicgWMHTTicXA/640?wx_fmt=png&from=appmsg)

有网友在Fischoff的评论区许愿，希望fal能将ControlNet和LoRA与图生图结合。

对此Fischoff表示，已经在做了。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDkycQrw5HBhtv3u6wpfsgL8p1ZIiaLSWfyicrFN0jyNLkIForEmsmQ7NKmsYlRSN2oZcCumrOjaZ3A/640?wx_fmt=png&from=appmsg)

## FLUX+LoRA被网友玩出花

先来看下史上最强的FLUX模型叠加上LoRA和ControlNet后的效果~

Fischoff展示了在fal上使用ControlNet轮廓控制的FLUX生成的图像。

控制轮廓大概是这个样子，直观看上去是卧室的场景，包含了床、椅子、绿植等物体。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDkycQrw5HBhtv3u6wpfsgLws6ydcB3bjG8oj2iaajqAMUNe5qOribEicgnmC6eiaXUWDjYHDYY9CnYPg/640?wx_fmt=png&from=appmsg)

作者用FLUX把这个轮廓绘制成了赛博朋克风，看上去确实挺有赛博朋克的感觉，也能较好地遵循控制条件。

> Futuristic cyberpunk bedroom, neon lights, glowing porcelain sculpture above
> bedframe  
> 未来风格的赛博朋克卧室，霓虹灯，床架上方发光的瓷器雕塑

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDkycQrw5HBhtv3u6wpfsgLxo4beg25VKclqfic8YRwmSpVhp2PK1MOI0UpBkOcwn3WplE6JLfPQtw/640?wx_fmt=png&from=appmsg)

我们通过PS把两张图叠加到一起观察下细节，贴合程度可以说是比较高的。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDkycQrw5HBhtv3u6wpfsgLGhTX7GElIBzibJPH2XyyB4ibYvYrz6ZfgJHPqJrfjMiajfmwyp1I8ibXhw/640?wx_fmt=png&from=appmsg)

另外利用fal的分享页面，我们可以使用相同的ControlNet等配置，直接改一下提示词生成新的图像。

比如把这个赛博朋克风格的卧室改成中国风。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDkycQrw5HBhtv3u6wpfsgLxffLkLva7KwsJ1jicau9x2pTkyNSPfzks5QP6sbju2mRR8rKAxaLlgw/640?wx_fmt=png&from=appmsg)

我们顺便体验了一下其他模式的ControlNet，比如姿势（pose）控制。

利用左边的图像作为参照，绘制一个跳舞的马斯克，虽然和马斯克不太像，但是该有的姿势倒是完美迁移过去了。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDkycQrw5HBhtv3u6wpfsgLqm4p7rpzHLduBBCYick3ajKMBD40Gg3rgG3P6yTiaE4rNAY3J1qEbAOA/640?wx_fmt=png&from=appmsg)

除了ControlNet，被分享更多的是各种各样的LoRA模块。

利用这些LoRA模块，可以把人物修改成剪纸、绘画、赛博朋克等各种不同风格。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDkycQrw5HBhtv3u6wpfsgLbicNrKNKUPJEvDZJVLg0m5zVrO9LiaSXPAo244B1wcAcO2XmkN0pURicg/640?wx_fmt=png&from=appmsg)

还有网友把LoRA模型玩出了新花样，把可乐、TED演讲，甚至机器学习都搬到了1920年代的塔罗牌当中。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDkycQrw5HBhtv3u6wpfsgLGWA7g5urCRiaMRJoUWxFBE4MCRnqo0xy5QMsKCGTTOyGYpnOMe4a0vQ/640?wx_fmt=png&from=appmsg)

而且现在，无需研究如何部署模型、搭建工作流，通过fal这个在线平台就能开箱即用式地应用这些功能。

## 开箱即用的FLUX

在fal（L的小写）平台中目前一共有5个模型和FLUX相关，其中三个是FLUX的官方原版。

最新支持ControlNet和LoRA的，是[dev] with LoRAs这个版本（下图最后一个）。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDkycQrw5HBhtv3u6wpfsgLvPTxm4O3ib9jpfZC25uic4JIvpTicRlOnicrGOcVt8Oiayy9htG6TbCicyGw/640?wx_fmt=png&from=appmsg)

基础功能上，除了支持FLUX官方的文生图和图生图，这个模型还可以进行图像修复（inpainting）。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDkycQrw5HBhtv3u6wpfsgLhvNTOvTsibp5BKHWJiaJwpSZfOibxqAMOSgdcbFSpUCJmZXDhsgwRRRAg/640?wx_fmt=png&from=appmsg)

其中ControlNet的部分，使用的是来自小红书的**InstantX** 团队为FLUX开发的ControlNet合集。

InstantX团队一开始发布了线条（Canny）控制模块，后来又上线了支持了线条、景深、姿势等七种控制模式的合集。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDkycQrw5HBhtv3u6wpfsgLHqUMqeRwSGtRxibXhsal6udb5z2t4I8zX01vsR6TXIWH1WSic1RSkiaWg/640?wx_fmt=png&from=appmsg)

顺带提一句，InstantX团队还新建了一个IPadapter模型的页面，估计很快就会上线。

与此同时，另一家叫Xlabs的工作室也做了适用于FLUX的ControlNet，不过目前支持的模式比InstantX的少一些，在线体验地点是隔壁的Replicate。

回到fal，另一项重磅功能就是LoRA了，今早刚刚更新的版本还新增了**多个LoRA模块叠加** 的功能。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDkycQrw5HBhtv3u6wpfsgLPvUVG5Qq8YibOlDaIrn5fK4mQTUPkmjbQtMrGPsRn0pMeXRgNRh2Hzg/640?wx_fmt=png&from=appmsg)

在fal当中，还可以**在线训练自己的FLUX LoRA模块，做完之后可以通过链接进行分享** 。

不过，fal平台并不免费，使用[dev] with
LoRAs版本的价格是每百万像素0.075美元（约合人民币五毛四），新注册时会赠送1美元余额，大概可以画13张图。

当然，FLUX本身是免费开源的，可以自行下载搭建，fal收费是因为提供了推理服务，以及背后的计算资源。

传送门：  
https://fal.ai/models/fal-ai/flux-general  
参考链接：  
[1]https://x.com/jfischoff/status/1823849383156441379  
[2]https://x.com/jfischoff/status/1824205839550517576

— **完** —

**量子位年度AI主题策划** 正在征集中！

欢迎投稿专题 **一千零一个AI应****用** ，**365行AI落地方案**

或与我们分享你在**寻找的AI产品** ，或发现的**AI新动向**

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtDpTavEwUl8aOlFLGHaPnaKXJcMUeJtGXVLliac6P6XxYHIKhnz0NPUgVvlrXAvJC33ibh8aYDdyudA/640?wx_fmt=png&from=appmsg)

  

**点这里 👇关注我，记得标星哦～**

**一键三连「分享」、「点赞」和「在看」**

**科技前沿进展日日相见 ~**

![](https://mmbiz.qpic.cn/mmbiz_svg/g9RQicMD01M0tYoRQT2cMQRmPS5ZDyrrfzeksiay90KaDzlGBH61icqHxmgFKfvfXtVuwTHV740CDLAaXU1LIfZyoJEpYKcRIiaE/640?wx_fmt=svg)

