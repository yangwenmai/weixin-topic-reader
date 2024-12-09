# 人大附高中生中NeurIPS，入选高中赛道Spotlight，顶会真卷到中学了

文章作者: 量子位
发布时间: 2024-09-29 12:18
发布地: 北京
原文链接: http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247751618&idx=2&sn=307d985a2bdc7bb49689cbe290bc1820&chksm=e8dfa0b0dfa829a6600c7ab97fb0a256690d33c28e0db63c2a31ab140eca29a6eea3ceba4b55#rd

封面图链接: https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtBcicr4mtMw93ic89fOucRw2YkBYsTDZhMiboSRFWW9VscFvIm1LOkRNibNuqyVibVoQiampmA7W1ya0ibLA/300

##### 鱼羊 发自 凹非寺  
量子位 | 公众号 QbitAI

NeurIPS 2024放榜，人大附中有高中生一作入选。

今年，NeurIPS率先把AI顶会卷到了高中里，正式面向高中生征集论文，还为此专门设置了高中生赛道（High School Projects Track）。

现在结果终于出炉，北京大学计算机学院的张铭教授分享了一则入围消息：

人大附中吴悠，有一篇一作论文入选该赛道，还被选为了Spotlight Project。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBcicr4mtMw93ic89fOucRw2YzzMGWo5sHWvep5HfBvx6xUXicrhreekxY5ibnH8TgW5ibSrZOGIsGjc0w/640?wx_fmt=png&from=appmsg)

论文题为《Vision-Braille：An End-to-End Tool for Chinese Braille Image-to-Text
Translation》，提出了一种中文盲文图像到文本的端到端翻译工具。

据张铭教授介绍，吴悠在2022年高一加入她的课题组时，就提出了这个项目的想法。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBcicr4mtMw93ic89fOucRw2Y0qfcBWc7N7KwsvtJkVXtfPlw8VXD7Vm7H9o3WTECFqAsY0cYrv2CIg/640?wx_fmt=png&from=appmsg)

## 端到端中文盲文图像到文本翻译工具

具体来说，该项目基于谷歌的mT5模型，采用Curriculum Learning（课程学习）方法微调出了一个盲文翻译模型。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBcicr4mtMw93ic89fOucRw2YWzBQhb3ic1ZsStoCPodOcL0xU5OFYGgtcRGragYzwR1bhziawWiaDmYag/640?wx_fmt=png&from=appmsg)

其中的难点主要包括几个方面：

  * 缺少数据集：中文盲文翻译数据集非常稀缺，数据的采集也比较困难，需要耗费大量人力。

  * 盲文数据的特殊性：盲文通过最多三个单元格来表示每个汉字的发音，即声母、韵母和音调。但在实际使用中，盲文使用者通常会省略大部分声调符号，这给盲文翻译带来了挑战。

  * 同音字混淆：中文中存在大量同音字，并且由于声调符号经常被省略，同音字的区分变得更加困难。

为此，论文作者们首先构建了一组中文-盲文数据集，包括Chinese-Braille-Full-Tone、Chinese-Braille-No-
Tone和Chinese-Braille-10per-Tone。

作者从莱比锡数据集中收集了100万个不同的中文句子，使用中文盲文在线平台提供的工具，将收集到的中文句子转换为“全音”盲文。

而后，为了模拟真实世界中盲文使用者省略声调的情况，作者识别出这些盲文中代表声调的部分，并随机去除了其中90%的声调，创建Chinese-
Braille-10per-Tone以反映现实世界中中文盲文的使用情况。

数据按照8:1:1的比例被划分为训练集、验证集和测试集。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBcicr4mtMw93ic89fOucRw2Y3Ic5u3nZThQicoXBWcpO8iawibkxhvGO8dbPscswWicmia8gONx4BGvF2xQ/640?wx_fmt=png&from=appmsg)

训练方法方面，作者使用RetinaNet来执行盲文OCR任务，将盲文图像转换为数字盲文字符。

接着，采用课程学习策略——即从简单到复杂地安排训练任务，分三个阶段微调了多语言Transformer模型mT5：

第一阶段：使用Chinese-Braille-Full-Tone数据集作为训练的简单部分，让模型学习基本的翻译规则。这个数据集中的盲文包含完整的声调信息。

第二阶段：使用Chinese-Braille-No-Tone数据集，让模型在没有声调信息的情况下，学会根据上下文猜测正确的中文字符。

第三阶段：使用Chinese-Braille-10per-Tone数据集，让模型更好地适应实际应用场景。

实验结果显示，在验证集和测试集上，该模型的BLEU得分分别达到了62.4和62.3，显著提高了盲文翻译的准确度。

论文作者已经放出了项目Demo，效果是酱婶的，感兴趣的小伙伴们可以戳文末链接自行测试：

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBcicr4mtMw93ic89fOucRw2Y0U5qAbeRLPB4zMRoBf2GUMA0ytia4wBIT3Mnia1PqkMEQV4iaAQFsP6icw/640?wx_fmt=png&from=appmsg)

（正确答案：不过，对于自己外向的性格，埃托奥说，“这就是真实的我，我不会为此改变。）

该项目是在吴悠高三时完成。张铭教授透露，他目前已进入康奈尔大学就读计算机和生物医药工程专业。

论文致谢中提到，吴悠主要是在张铭教授博士生、论文第二作者袁野的指导下完成了这项研究。

张铭，北京大学计算机学院教授，博士生导师，研究领域包括文本挖掘、知识图谱、图神经网络和计算机教育研究等。她合作发表的科研学术论文曾获ICML
2014最佳论文、ICDM 2022最佳论文提名等荣誉。Google Scholar显示，她的论文引用量接近2万，h指数为48。

## NeurIPS高中生赛道

NeurIPS是今年刚设的“高中生赛道”，主要征集“机器学习的社会影响”方向的论文。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBcicr4mtMw93ic89fOucRw2YWJJ0UfEDN5LmqbgV7QhbpgGbgELG6Jc7Mb8uEXZaK3m9Smn9cTyPqQ/640?wx_fmt=png&from=appmsg)

公告是这样写的：

> 提交项目必须说明完全由高中生作者独立完成的工作。希望每个提交的项目都能突出显示积极的社会影响，或者使用机器学习产生积极社会影响的潜力。

详细来说，就是允许高中生们找外部导师来合作完成项目，但必须把导师以及合作者的贡献，和高中生作者的贡献区分开来。

公告中还规定了，作者需要提交高中在读证明，所有补充材料均应完全由作者完成，包括视频、Demo、海报、网站或源代码。

值得一提的是，其他顶会也有积极接触和影响高中生的趋势。

比如，CVPR的做法是和高中合作，开展CV领域的专业讲座等课外活动。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBcicr4mtMw93ic89fOucRw2YcicQP7onTN50mSamsIL0PMADILlbIU3XmgR8l9k0sh9aGAPleaRmd5w/640?wx_fmt=png&from=appmsg)

论文地址：  
https://arxiv.org/abs/2407.06048  
Demo地址：  
https://vision-braille.com/

— **完** —

**评选征集中**

**「2024人工智能年度评选」**

量子位2024人工智能年度评选已开启报名通道，评选从**企业** 、**人物** 、**产品** 三大维度设立了5类奖项。

**欢迎扫码报名评选！**
评选结果将于12月[MEET2025智能未来大会](http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247749708&idx=1&sn=0e6ac7c30e9cbc392d126127ffc5e2fc&chksm=e8dfa73edfa82e28c84ec0e4eeaabbae6634626284f0b830e5fa097dc98e9acb04e7ad060608&scene=21#wechat_redirect)公布，期待与数百万从业者共同见证荣誉时刻。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAOVibXbw5eUnvqbCic6T1OKtFJzFhIdiauXic5xgYVG2LogYPX94d9GO5yiaQKicPFPUwgM30w350XNfIQ/640?wx_fmt=png&from=appmsg)

**点这里 👇关注我，记得标星哦～**

**一键三连「点赞」、「分享」和「在看」**

**科技前沿进展日日相见 ~**

![](https://mmbiz.qpic.cn/mmbiz_svg/g9RQicMD01M0tYoRQT2cMQRmPS5ZDyrrfzeksiay90KaDzlGBH61icqHxmgFKfvfXtVuwTHV740CDLAaXU1LIfZyoJEpYKcRIiaE/640?wx_fmt=svg)

