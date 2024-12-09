# ARR呈直线增长上百个VC蜂拥而至，加入AI的Rewind太火了

文章作者: 投资实习所
发布时间: 2023-04-17 11:52
发布地: 北京
原文链接: http://mp.weixin.qq.com/s?__biz=MzIyMDA3MjMwNw==&mid=2455850632&idx=1&sn=02c7951777204abb6de2367b45f2ae65&chksm=80447e94b733f78246277d5497187312b30e999ab2d1bac145cb8848a3d7999cd08373ef6e88#rd

封面图链接: https://mmbiz.qpic.cn/mmbiz_jpg/sBQys0vjP4qMKDiadjmsz0T4tYYuWiaUVK480Nmqs4nsUEhhQfMKAjXgFWC4dNAROiaZILicqCE1LjyramnBkNNUNQ/300

我在[去年底第一次介绍了 Rewind
这个产品](http://mp.weixin.qq.com/s?__biz=MzIyMDA3MjMwNw==&mid=2455850260&idx=1&sn=3ab1cc0f21c7d16e427e9085c899a81c&chksm=80447d08b733f41e532249d6cc26050c09416a644f17c8da363613a4df757da3bfa95abe5253&scene=21#wechat_redirect)，当时其种子轮拿了
a16z 和 The First Round 等投资的 1000 万美金，估值 7500 万，加上一些个人天使的钱，总计融资金额超过了 1500 万美金。

而在接入 AI 能力后，Rewind 最近可以说非常的火爆，**其 ARR 营收数据在这几个月几乎是呈直线式增长** ，达到了 70.7
万美金，尽管绝对值不算大，但增长趋势非常快。以至于**上百个 VC 投资人蜂拥而至** ，为了不耽误太多时间，创始人 Dan Siroker
直接录了一个视频，将面向 VC 的 Picth Deck 直接公开了，让真正感兴趣的投资人填写表格后再细聊。

在这个视频里，Dan Siroker 再次介绍了自己创立 Rewind 的初衷，目前在产品、融资和营收各方面的进展以及对于未来的计划。我之前曾详细介绍过
Rewind（[看这里](http://mp.weixin.qq.com/s?__biz=MzIyMDA3MjMwNw==&mid=2455850260&idx=1&sn=3ab1cc0f21c7d16e427e9085c899a81c&chksm=80447d08b733f41e532249d6cc26050c09416a644f17c8da363613a4df757da3bfa95abe5253&scene=21#wechat_redirect)），相比于
Google、百度这种通用型搜索引擎，[Sourcegraph](http://mp.weixin.qq.com/s?__biz=MzIyMDA3MjMwNw==&mid=2455849072&idx=1&sn=b736e0c79b85e7dff629b656f075de8e&chksm=8044786cb733f17a778b46922f034039a4e4ccfcc3f6b698c770299a8a0bf85a5afacc3ec4fb&scene=21#wechat_redirect)
这样的代码搜索引擎，以及 Algolia 和 Glean 这样的企业内部搜索引擎，Rewind 的目标是解决人类记忆问题。  

  

比方说对于我们日常生活中说过的话、看过的东西以及听过的内容，我们的记忆是很难都记住的。特别是**当我们想要重新审视一个想法时，我们很难快速记起更精细的细节，也不记得我们在哪里读过、看到过、说过、听到或分享过它**
，因此 Rewind 一推出来的时候，给自身的定位是：

> The Search Engine For Your Life

它能快速搜索你曾经看过、说过或者听过的任何内容。不过随着 AI 的快速发展以及基于 GPT-4 推出 AI 产品 Ask Rewind 后，Rewind
现在将自身的定位做了一下修正：**A Copilot for your mind** ，也就是你思想的副驾，其愿景是赋予人类完美的记忆（**Give
humans perfect memory** ）。

Rewind 这个产品最大的特色是完全基于本地，因此在最大程度上可以保证隐私，这也是其一直强调的基于隐私第一来做的产品：  

  1. 基于本地和隐私保护而设计：其保存的所有内容都只保存在你的 Mac 本机上；

  2. 将压缩做到了极致：Rewind 可以将录音文件压缩到 3750 倍，并且不会有质量方面的问题，比方说 10.5GB 的文件可以压缩成 2.8MB，因此即使是非常小的硬盘资源，也可以保存你很多年的内容；

  3. 无需做任何云端和 IT 集成：Rewind 采用了原生 macOS API 和 OCR 来识别和索引你屏幕上出现的所有文字，你不需要与 Gmail、Dropbox 或者 Slack 等产品做集成，之前一些类似产品需要你集成获得授权才可能搜索到这些产品里的内容；

  4. 视频内容：为了能搜索到你说过或者听过的任何内容，Rewind 采用了最先进的 ASR（自动语音识别技术）来帮你搜索这里面的任何内容；

  5. 不占用 CPU 资源：Rewind 创始人说让这个产品成为可能的核心是苹果的 Silicon 芯片，Rewind 利用了 SoC 上的每一个部分，因此在运行 Rewind 时，它不会占用系统资源（CPU 和内存）。

在这次的视频里，Dan Siroker 也再次解释了其原理（如下图），接入 AI 后，其能力得到了大大提升，相当于你所有的数据成为了一个小小的 LLM
数据库，而这些数据都是每个人所特有，它不对外共享，这也属于[**定义明确、高价值的 Specialized AI
System**](http://mp.weixin.qq.com/s?__biz=MzIyMDA3MjMwNw==&mid=2455850616&idx=1&sn=efbef90b87a77c8b0edd7f64150c25d8&chksm=80447e64b733f772ec9c6071de219b3a8f917430bf750b6d78055e48bd6d1f90b430a359cf74&scene=21#wechat_redirect)，我觉得这是其最独特也是很大的一个优势。![](https://mmbiz.qpic.cn/mmbiz_jpg/sBQys0vjP4qMKDiadjmsz0T4tYYuWiaUVKIB5KmfobZiaB8ITWd8XeWgARMVWibwBfHlJ16icDQhjDFGSNQHS2cNByw/640?wx_fmt=jpeg)在演示
Demo 里所展示的案例，正是基于其本地所存储的数据来帮你解决实际问题，因为这些数据是你所有看过、听过以及说过的记录，这是**完全真正意义上更宽泛的
Personal Data** ，因此 Dan Siroker 将 Rewind 的产品定位于 Personal Data 领域的 Google
还是很有道理的。

另外从目前公布的用户数据画像来看，也非常符合这个定位，目前排名前四的用户主要是高管、工程师、咨询师和投资人，这些都是高强度知识工作者。![](https://mmbiz.qpic.cn/mmbiz_jpg/sBQys0vjP4qMKDiadjmsz0T4tYYuWiaUVKAuf5cr1Sbejxoye3S2ArK1WzkkWqg3pIfQofMPPkgC2SSK1zibtCflw/640?wx_fmt=jpeg)除了搜索结果本身外，Rewind
这个产品真正在唤醒一些记忆，它可以让你回到当时发生的那个时刻，比方说搜索视频会议的某个关键词，它可以快速回到那个关键词出现的时刻，这样你可以迅速回到上下文。

尽管当下大家主要将其作为一款个人助手或者效率工具来使用，但我觉得这让其有了更多一些的人文价值，特别是对于老年人来说，如果它能让你复现回到你人生的任何时刻，可能就会有更多的意义，或许这块在未来的产品中会得到更多体现。

Rewind 的省钱（Capital efficient）和产品发布速度也非常令人印象深刻，在这个视频里，Dan Siroker 说他们之前从 a16z 和
The First Round 融的 1000 万美金现在还有 950 万现金没有使用，这 950 万美金足以再支撑 3
年的时间，而在发布产品这块，几乎每天会更新 11 个版本。

为了卖自家的产品，创始人 Dan Siroker 也是把自己的手机号都放到付费套餐里了，如果购买 Rewind Pro 专业版，是可以直接得到其手机号的。而
Dan Siroker 在这个视频里，也透露了**苹果即将在今年夏天的 WWDC 上发布 Apple Glass 的产品** 。关于 Rewind
的详细介绍，可以看我之前的文章（[a16z种子轮投1000万美金，Rewind要帮你搜索你的人生](http://mp.weixin.qq.com/s?__biz=MzIyMDA3MjMwNw==&mid=2455850260&idx=1&sn=3ab1cc0f21c7d16e427e9085c899a81c&chksm=80447d08b733f41e532249d6cc26050c09416a644f17c8da363613a4df757da3bfa95abe5253&scene=21#wechat_redirect)）。

延伸阅读：

  1. [a16z种子轮投1000万美金，Rewind要帮你搜索你的人生](http://mp.weixin.qq.com/s?__biz=MzIyMDA3MjMwNw==&mid=2455850260&idx=1&sn=3ab1cc0f21c7d16e427e9085c899a81c&chksm=80447d08b733f41e532249d6cc26050c09416a644f17c8da363613a4df757da3bfa95abe5253&scene=21#wechat_redirect)

  2. [未来的 AI 格局不会被单一的通用 AI 模型所主导](http://mp.weixin.qq.com/s?__biz=MzIyMDA3MjMwNw==&mid=2455850616&idx=1&sn=efbef90b87a77c8b0edd7f64150c25d8&chksm=80447e64b733f772ec9c6071de219b3a8f917430bf750b6d78055e48bd6d1f90b430a359cf74&scene=21#wechat_redirect)

  

