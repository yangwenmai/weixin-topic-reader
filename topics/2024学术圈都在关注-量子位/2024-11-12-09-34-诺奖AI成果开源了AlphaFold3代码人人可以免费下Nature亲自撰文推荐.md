# 诺奖AI成果开源了！AlphaFold3代码人人可以免费下，Nature亲自撰文推荐

文章作者: 量子位
发布时间: 2024-11-12 09:34
发布地: 未知地区
原文链接: http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247757652&idx=1&sn=ceb803f5c72c6ac3183d4039aefcd729&chksm=e8dc5826dfabd130d858d47c4a0bca499aa322e703892d0be6f5e551450023f2c51dd725a3ac#rd

封面图链接: https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtB40qicMicRJlKucibdREPpLqVS9mwAhhUJdquVmnM4Q64ViauAW0cFBavhYDLP6LA9c6VDg9P3t9Atkg/300

##### 白小交 发自 凹非寺  
量子位 | 公众号 QbitAI

刚刚，谷歌开源了自己的诺奖模型AlphaFold3！

至此来自生物医药、生命科学等各个领域的科学家们都可以免费下载模型代码，自行运行模型开展工作。

此举直接获得了Nature亲自撰文推荐。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtB40qicMicRJlKucibdREPpLqVicFcKHGG4vO7ZicJ0kLmOjDzkbH8xiaaGowXWIxWw8VUCspdiaKJF4yJrw/640?wx_fmt=png&from=appmsg)

与前两个版本仅可以预测蛋白质结构不同， AlphaFold3能够预测**所有生命分子**
的相互作用。这相当于打开了整个生命科学研究的新大门，生命的基本过程被了解，直接推动了药物发现和疾病治疗。

以往这些工作往往需要数月的实验室工作和数百万资金才可以搞定，还无法保证成功。而现在科学家免费拥有了一把强大的利器。

科学家们也是大为兴奋，甚至已经在搓搓手期待怎么用了。比如研究一下人体肌肉生长过程。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtB40qicMicRJlKucibdREPpLqV6LXottmdYGFs0w7QI6H4GiaiaOLKKptdib5bUeEmTKF2rAT1trHImyqDA/640?wx_fmt=png&from=appmsg)  
![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtB40qicMicRJlKucibdREPpLqVAamox172ksWdlLFQCnibDOyRSK3TV4pQp0KoWzwgWR7nCKc81ibKprgA/640?wx_fmt=png&from=appmsg)

诺奖得主、DeepMind AlphaFold 团队负责人John Jumper表示，我们非常兴奋地看到人们用这个技术能做些什么。

短短几小时，GitHub官网已经收获了1.5k星。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtB40qicMicRJlKucibdREPpLqVa6ZX7mUbOJ5oBa2ZicsMF0O3t2NG7L9EqnpbqWnmqakP71Z7lnkW7wQ/640?wx_fmt=png&from=appmsg)

## 谷歌说到做到：6个月前曾因没有开源而受争议

今年5月，AlphaFold3发布，并直接登上Nature。

除了将预测范围扩大到了蛋白质、DNA、RNA以及一系列配体、离子和化学修饰等更多生物分子结构，还创新性地用上了扩散模型，可以生成每个原子的3D坐标。

用另一位诺奖得主、DeepMind联创兼CEO哈撒比斯的话来说：

> AlphaFold 3是人类了解生物学动态系统历史性的第一步。

在不输入任何结构信息的情况下，AlphaFold3预测准确度比现有方法提高了50%，对于部分相互作用类别甚至提高了1倍。

这使得AlphaFold 3成为首个超越基于真实生物分子结构预测工具的AI系统。

当时官方说的是，全球科学家通过AlphaFold服务器即可免费访问使用AlphaFold 3进行非商业研究（开放大部分功能）。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtB40qicMicRJlKucibdREPpLqV9CnftVFceR7QXHoibzLP2iaY7T5xVO1gtwvqpHicRbwibibnHaRwdGictf6w/640?wx_fmt=png&from=appmsg)

换句话说，没有像AlphaFold2那样开放底层代码，而是通过网络服务器提供访问权限。官方还推出了免费的工具AlphaFold
Server，科学家只需点击几下就模拟由蛋白质、DNA、RNA 以及一系列配体、离子和化学修饰组成的结构。

虽说免费，但实则限制不少，每天只能进行10次预测，而且不可能获得可能与药物结合的蛋白质结构。

不免让人怀疑之所以不开源，是因为谷歌Deepmind自己用来进行药物开发。当时他们成立的公司Isomorphic
Labs使用AlphaFold3通过自己的管道或与其他制药公司合作开发药物。

结果这操作直接受到了科学家们的批评，他们称此举破坏了可重复性。

于是DeepMind 迅速改变了方针，并表示将在半年内推出该工具的开源版本。

如今半年过去，应该算是说到做到。不过模型权重需要单独申请，填写表单，同不同意由DeepMind决定。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtB40qicMicRJlKucibdREPpLqVMbnN0XCWCukicWia8I2ao7IxXOmk92ShHLk7Kcx3GpmkpZAeoicmWwD9A/640?wx_fmt=png&from=appmsg)

## AlphaFold3

最后再来简单回顾一下AlphaFold3吧。

在AlphaFold 2的基础上，AlphaFold 3在架构和训练过程上有很大改进：

  * 遗传特征编码器(MSA module)被大幅简化，聚焦提取更关键的进化信息。

  * 成对残基关系编码器(Pairformer)取代了原有的进化特征处理单元(Evoformer)，增强了复杂相互作用模式的建模能力

  * 结构生成器从以氨基酸为中心，改为直接预测原子坐标，增加了处理通用分子结构的灵活性。

为了避免扩散方法在一些无结构区域产生幻觉，还引入了一种新的交叉蒸馏方法，通过AlphaFold-Multimer v2预测的结构数据来丰富训练数据。

![](https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtB40qicMicRJlKucibdREPpLqVjOn0eI8XZzsZ6tGAaQoFicjxicIibicPxddMQhwFk6vOErqricNErSRDZUQ/640?wx_fmt=other&from=appmsg)

更让人惊叹的是，AlphaFold
3即便在训练数据极度匮乏的领域，也展现出了惊人的泛化能力。举个例子，在CASP15的RNA预测任务中，它在10个公开靶点上的平均表现超过了专门的RNA结构预测模型。要知道，这可是在几乎没有RNA训练数据的情况下实现的。

好了，现在AlphaFold3终于开源，有需要的可以去官网下载。

值得一提的是，DeepMind 科学AI主管Pushmeet
Kohli还说了一嘴，AlphaFold3各种复现版本都有了。这说明该模型即使没有开源也是可以复制的。（好好好![](https://res.wx.qq.com/t/wx_fed/we-
emoji/res/v1.3.10/assets/newemoji/Yellowdog.png)）

GitHub链接：  
https://github.com/google-deepmind/alphafold3?tab=readme-ov-file  
参考链接：  
[1]https://www.nature.com/articles/d41586-024-03708-4  
[2]https://x.com/maxjaderberg/status/1855943552745845095

— **完** —

**报名即将截止！**

**「2024人工智能年度评选」**

量子位2024人工智能年度评选将于11月15日截止报名，评选从**企业** 、**人物** 、**产品** 三大维度设立了5类奖项。

**欢迎扫码报名评选！**
评选结果将于12月[MEET2025智能未来大会](http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247757040&idx=1&sn=cc815025a945a0ea4f815a000c6e49ab&chksm=e8dc5b82dfabd294afe9c58b3a9016adacb91f5cdf5d5bcbfe2ac9aa63fd232835f7ecb17f6f&scene=21#wechat_redirect)公布，期待与数百万从业者共同见证荣誉时刻。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAOVibXbw5eUnvqbCic6T1OKtFJzFhIdiauXic5xgYVG2LogYPX94d9GO5yiaQKicPFPUwgM30w350XNfIQ/640?wx_fmt=png&from=appmsg)

**点这里 👇关注我，记得标星哦～**

**一键三连「点赞」、「分享」和「在看」**

**科技前沿进展日日相见 ~**

![](https://mmbiz.qpic.cn/mmbiz_svg/g9RQicMD01M0tYoRQT2cMQRmPS5ZDyrrfzeksiay90KaDzlGBH61icqHxmgFKfvfXtVuwTHV740CDLAaXU1LIfZyoJEpYKcRIiaE/640?wx_fmt=svg)

  

