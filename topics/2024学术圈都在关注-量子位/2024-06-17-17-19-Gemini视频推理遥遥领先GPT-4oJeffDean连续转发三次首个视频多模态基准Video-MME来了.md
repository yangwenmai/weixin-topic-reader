# Gemini视频推理遥遥领先GPT-4o，Jeff Dean连续转发三次，首个视频多模态基准Video-MME来了

文章作者: 量子位
发布时间: 2024-06-17 17:19
发布地: 北京
原文链接: http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247734145&idx=4&sn=ed14adc731c7a7ba71d8881679a889cc&chksm=e8dfe4f3dfa86de5675ef3dac1a3448f20c0e14fa9522110c48966e114b2b90b525ca5bf9a4d#rd

封面图链接: https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtAOEp3RibI2lRNy4ticxtmFt0LqmjPSwJhMyUAzcRSliaYpfleGjFkCzSiaUlcEg3AbWwhLFycSntzMtg/300

##### 梦晨 发自 凹非寺  
量子位 | 公众号 QbitAI

OpenAI和谷歌接连两场发布会，把AI视频推理卷到新高度。

但业界还缺少可以全面评估大模型视频推理能力的基准。

终于，多模态大模型视频分析综合评估基准**Video-MME** ，**全面评估多模态大模型的综合视频理解能力** ，填补了这一领域的空白。

Gemini 1.5 Pro在这份榜单中遥遥领先，显示出在视频理解领域的“霸主”地位。Video-MME一经推出，被**谷歌首席科学家Jeff
Dean连续转发了三次** 。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAOEp3RibI2lRNy4ticxtmFt0iczdibG48lgt0rewXiaEoIYopD38eKFPpKOOAfC2ib3aia4nSa0Uxa1qowA/640?wx_fmt=png&from=appmsg)

GPT-4o、谷歌Gemini 1.5 Pro标榜的视频推理能力终于在全新的、更复杂的多模态基准Video-MME上首次得到了验证。

同时，各大公司以及研究机构，例如NVIDIA、ByteDance等模型也加入了混战。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAOEp3RibI2lRNy4ticxtmFt0xdMw2FojgDEqzFow1aDMJS7kULAleBASqAuGpwMjXRczBMNrDG0bpw/640?wx_fmt=png&from=appmsg)

Video-MME由中科大、厦大、港中文等高校联合推出，代码和数据集均已开源。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAOEp3RibI2lRNy4ticxtmFt0kvnErj6ojq4RajyqP1kiatraLmG9jjrsGnkO9pIOT8enrocuaBa1KSQ/640?wx_fmt=png&from=appmsg)

## 全人工标注高质量数据集

该基准采取**全人工标注**
，具有区别于现有数据集的显著特点。在以下的例子中，准确回答该问题需要同时从视觉、字幕以及音频中同时获取信息，有效信息直接横跨30分钟的间隔：

![](https://mmbiz.qpic.cn/mmbiz_jpg/YicUhk5aAGtAOEp3RibI2lRNy4ticxtmFt0LJ8KYSApBD97hU4ysHTTicFwtQyiaHibTJBavuOyg6JqHZqtRyB7F4AgA/640?wx_fmt=jpeg&from=appmsg)

Video-MME具有以下显著特点：

**时间维度的广泛性** ：视频时长从**11秒到1小时** 不等，涵盖**短（
<2分钟）、中（4-15分钟）、长（30-60分钟）**三种不同的视频时长，全面评估模型在不同时间跨度下的上下文多模态理解能力；

**数据模态的丰富性** ：除了视频帧，Video-MME还整合了**字幕和音频模态输入** ，全面评估大模型的多模态处理能力；

**视频类型的多样性** ：覆盖了知识、影视、体育、艺术、生活记录和多语言6个主要领域，涉及**30个细粒度子领域** ；

**注释质量的高标准** ：900个视频，共**254小时的内容**
由具备大模型背景的专业人员手动标注与验证，产生了2,700个问答对。问题类型涵盖感知、认知和总结概括等**12种类型** ；

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAOEp3RibI2lRNy4ticxtmFt0ZI8hzmqZFZrOFmic34qwGHUT9G4kib6jxKu0b5pLXDW0bJeQdtKpD0ZA/640?wx_fmt=png&from=appmsg)

**可靠的有效时长** （Certificate Length准确回答问题所需的最短时长）：对于短视频、中视频和长视频，Video-
MME数据集的有效时长中位数分别为26.0秒、164.7秒和890.7秒，要求模型**消化更长的视频内容才能回答问题** ；

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAOEp3RibI2lRNy4ticxtmFt0GqeKjgrJNclBhzMicnVhAuEcHGjRTDm3xxymxZDibkVTicx9rkdSEj5vw/640?wx_fmt=png&from=appmsg)

**全面的实验评估：** 文章选取了6种代表性的开源视频语言模型以及闭源模型Gemini 1.5 Pro和GPT-4V/o进行**全面的实验分析**
。同时文章还选取了基于图片的多模态大模型进行评测（泛化到多图输入），证明其同时适用于图片&视频多模态大模型。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAOEp3RibI2lRNy4ticxtmFt0cZxcCRfQCCmSyZ4uZ6ic1TtxwLO8ZPe6VkwS8V0vLmxWRMvMFnjd9Tg/640?wx_fmt=png&from=appmsg)

文章选取了多种代表性的开源视频多模态大模型，包括ST-LLM、VideoChat2-Mistral、Chat-UniVi-V1.5、LLaVA-NeXT-
Video和VILA-1.5，以及闭源模型Gemini和GPT-4V/o 。同时，基于图片的多模态大模型包括Qwen-VL-Chat、Qwen-VL-
Max和InternVL-Chat-V1.5。

在商业模型中，Gemini 1.5 Pro在视频理解方面表现突出，在加以字幕辅助的情况下以81.3%的准确率领先，并在与GPT-4V和GPT-
o的对比中分别超出18%和4.1%。

**尽管随着视频时长增加，其表现略有下降，但在长视频上的表现（加字幕）优于所有开源模型在短视频上的表现** 。

同时，Gemini 1.5
Pro还支持音频模态的输入，模态支持的更广。而在开源模型中，来自NVIDIA的VILA-1.5以59.4%的准确率表现最佳。然而，相比Gemini 1.5
Pro，VILA-1.5在计数问题、动作识别和时间感知方面仍然存在显著差距。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAOEp3RibI2lRNy4ticxtmFt0GMI1wX5BwK3sA7vELMiaQGnSBUeaxGg3GeLobj5AlQaZfSZvGLzpO9g/640?wx_fmt=png&from=appmsg)

同时，随着视频时长的增加，所有模型的表现均呈现明显的下降趋势，这也说明面对更长的上下文记忆以及更为复杂的任务时模型还有很大的提升空间。此外，实验还揭示了字幕和音频信息能显著增强视频理解能力，尤其是对于长视频的理解。

![](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtAOEp3RibI2lRNy4ticxtmFt0aCUnwwP9vicZ5zrWbj5p8FwOC8tGZneicw5Ivz6dm9AFpibm4TKia1ZUDQ/640?wx_fmt=png&from=appmsg)

在三十种不同类型的视频上，Gemini 1.5
Pro展现出不同的性能。例如，有的任务对字幕和语音的依赖程度更高，如Basketball的长视频，加上字幕和语音能够显著提升性能。详细的实验结果请参照论文原文。

综合实验结果可以看出，当前的多模态大模型在视频理解，尤其是长视频理解方向仍然有很长进步空间，一方面是要提升模型的多模态长上下文理解能力，Gemini 1.5
Pro最高支持百万长度的上下文窗口，这是其表现优异的依仗，另一方面也亟需构建相应的高质量长视频理解数据集，这方面当下仍处于空白。

论文链接：https://arxiv.org/pdf/2405.21075  
项目主页：https://video-mme.github.io  
项目仓库：https://github.com/BradyFU/Video-MME

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

