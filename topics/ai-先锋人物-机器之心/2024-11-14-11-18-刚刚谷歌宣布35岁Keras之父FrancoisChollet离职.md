# 刚刚，谷歌宣布35岁Keras之父Francois Chollet离职

文章作者: 机器之心
发布时间: 2024-11-14 11:18
发布地: 北京
原文链接: http://mp.weixin.qq.com/s?__biz=MzA3MzI4MjgzMw==&mid=2650942949&idx=1&sn=ec2297854747bbe53dae63279e07f7e9&chksm=84e7e99bb390608d9406117c919cbdef4add294c92d4f93e8d9021987dfb27a1b6d9180c207c#rd

机器之心报道**编辑：蛋酱**  
「再见，并感谢您一直以来的合作，Francois Chollet！」  
今天，一封发布于 Google for Developers 网站的公开信，让很多人略微震惊。  
「今天，我们宣布 Keras 的创始人、人工智能领域的领军人物 Francois Chollet 将离开
Google，开始他职业生涯的新篇章。虽然我们对他的离去感到悲伤，但我们为他的巨大贡献感到无比自豪，并很高兴看到他的下一个成就。」  
公开信之外，再没有与 Francois Chollet 离职相关的更多信息，他本人也尚未在任何渠道进行回应。  
  

> Keras 拥有 200 多万用户，已成为人工智能开发的基石，它简化了复杂的工作流程，并使顶尖技术的获取更加民主化。从 Waymo
> 自动驾驶汽车，到你每天的 YouTube、Netflix 和 Spotify 推荐，它为谷歌和全球的众多应用提供了动力。  
> 重要的是，Francois 将继续致力于 Keras 的未来，并继续支持 JAX、TensorFlow 和
> PyTorch。他将继续为该项目做出贡献，并监督其路线图。Google 的 Keras 团队将继续在开源社区与 Francois
> 合作，并祝愿他在未来的工作中一切顺利。

> Google 对 Keras 3 的持续投入表明了我们支持主要 ML 框架并为 ML 开发人员提供框架可选性的承诺。我们最近推出的 Keras Hub
> 也是朝着实现强大人工智能工具访问民主化和加速创新多模态应用开发迈出的重要一步。  
> Francois，感谢你所做的一切。你的贡献为机器学习框架和更广泛的人工智能领域留下了不可磨灭的印记。我们鼓励大家继续关注 Francois。

  
  
Francois Chollet 1989 年出生于法国，2012 年毕业于巴黎理工学院，获得工程硕士学位，目前 35 岁。  
2015 年 3 月 27 日，身为谷歌软件工程师的 Francois Chollet 在其 GitHub 上提交并公布了 Keras
的首个版本。一开始，Francois 开发 Keras
是为了方便自己的研究和实验。但随着深度学习的普及，许多开发人员、程序员和机器学习从业人员都因其易于使用的 API 而涌向 Keras。  
  
为使用纯 Python 编写的深度学习框架，Keras 的代码更加简单方便，适用于初学者。此外，Keras
具有很强的易扩展性，能够直观地定义神经网络，函数式 API 的使用令用户可以将层定义为函数。  
为了训练自己的自定义神经网络，Keras 需要一个后端。在 v1.1.0 之前，Keras 的默认后端都是 Theano。谷歌发布 TensorFlow
后，Keras 开始支持 TensorFlow 作为后端。TensorFlow 2.0 发布时，谷歌宣布 Keras 成为 TensorFlow 的官方高级
API。  
不过，领域内的很多开发者指出，二者的合并不是一个双赢的结果，甚至表示[「Keras
已经被谷歌杀死了」](http://mp.weixin.qq.com/s?__biz=MzA3MzI4MjgzMw==&mid=2650812248&idx=1&sn=da9fa67d1aae70a29dd55f9d4467fe4a&chksm=84e5eb26b39262308f82f104f049039ed348212476acdc86e190f69d49be97fffa4bdbca5321&scene=21#wechat_redirect)。后续是：在
2021 年，[Francois 将 Keras 的代码从 TensorFlow
代码库中分离出来](http://mp.weixin.qq.com/s?__biz=MzA3MzI4MjgzMw==&mid=2650818609&idx=3&sn=003281c20f17b8b3d3d8e2a9ddcb7882&chksm=84e58c4fb3920559ae6a56c4293311ddc816e3cf01f1a865b82799fb5b39c0b15d718b5e7e7b&scene=21#wechat_redirect)，移回到了自己的
repo。  
在 Keras 之外，Francois 从未停止过对前沿技术的探索。  
2019 年，Francois 发布了通用人工智能抽象与推理语料库 (ARC-AGI) 基准，该基准衡量人工智能系统解决新颖推理问题的能力。  
ARC 看起来很像 IQ 测试，它是一组推理任务，其中每一个任务通过少量展示（通常是三个）来解释，你能够基于这些展示学习如何完成任务。ARC
主张评估系统所用的每一个任务都应当是全新的，且只能使用类似人类先天知识的知识类型。  
  
人类可以解决所有 ARC 任务，且无需任何文字解释或先验训练，但当时的所有 AI 技术都无法解决 ARC 任务。2024 年，Francois 发起了
ARC Prize，这是一项奖金 100 万美元的竞赛，旨在解决 ARC-AGI 基准。  
这几年，伴随着 Scaling Law 等概念的验证，大模型的推理能力也在突飞猛进。但即使对于最新的 OpenAI o1 来说，ARC Prize
测试仍然是可望不可及的高峰。这也再次印证了 Francois 当初提出 ARC 基准的前瞻性。就在今年的 9 月，Francois
还被《时代》杂志评为人工智能领域最具影响力的 100 人之一。  
  
或许，现在正是 Francois 告别谷歌的好时机。对于 Francois 来说，ARC Prize 会是他接下来全身心投入的事业吗？  
  
© THE END 转载请联系本公众号获得授权投稿或寻求报道：liyazhou@jiqizhixin.com  
  
  

