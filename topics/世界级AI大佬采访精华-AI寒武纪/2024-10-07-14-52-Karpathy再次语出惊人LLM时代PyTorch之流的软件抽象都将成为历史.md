# Karpathy 再次语出惊人：LLM 时代，PyTorch 之流的软件抽象都将成为历史

文章作者: AI寒武纪
发布时间: 2024-10-07 14:52
发布地: 江苏
原文链接: http://mp.weixin.qq.com/s?__biz=Mzg3MTkxMjYzOA==&mid=2247497735&idx=1&sn=1d3aeffb082f74d24da0f4fd082d1793&chksm=cef5fdd6f98274c01b33c377ad657651791094f6b73dd574d4e9741fe8a557dc5f80686735c0#rd

封面图链接: https://mmbiz.qpic.cn/sz_mmbiz_jpg/ICgnAptln0V7xSFRhed9asGia976sia15BhN1unEib6Q450jZEpia5Ol2bRtC1H6XDqIezvrXD5220ERzB7yicpianXg/300

![](https://mmbiz.qpic.cn/sz_mmbiz_png/ICgnAptln0V7xSFRhed9asGia976sia15BfiaL7Pbg3VWicT4kj65PRaibIdh2DP6h6icG80rh9kXOu2Iaew5NUvVAkA/640?wx_fmt=png&from=appmsg)

  

Andrej Karpathy，这位 OpenAI 创始成员、特斯拉前 AI 总监、斯坦福大学 CS231n 讲师，最近在 GPU MODE
研讨会上发表了一场主题为 **“llm.c”** 的演讲，再次语出惊人：**LLM 时代，Python/PyTorch 之类的软件抽象都将成为历史！** 🤯

![](https://mmbiz.qpic.cn/sz_mmbiz_png/ICgnAptln0V7xSFRhed9asGia976sia15BcNRR9KcS20DaKwvSGH17G2RxyM9n29Cxe1MSScSsY0zVmcJ8oCMlnw/640?wx_fmt=png&from=appmsg)

### llm.c 是什么？

llm.c 是 Karpathy 用 C 语言（外加一点点 C++）从零开始写的一个 Transformer 训练框架

### 为什么要写 llm.c？

事情是这样的：一年前，Karpathy 想在他的视频系列（Karpathy非常喜欢分享AI技术）中添加一个关于 LLM 训练的视频，于是他开始用
PyTorch 写代码。结果，他被 PyTorch 的各种抽象概念搞得晕头转向，什么设备、数据类型、编译、分布式…… 各种问题层出不穷，代码出了 bug
都找不到原因！ 🤬

![](https://mmbiz.qpic.cn/sz_mmbiz_png/ICgnAptln0V7xSFRhed9asGia976sia15BX53BYUEGv0WkDeBnq0QbLheUia9mzuhuUBomDhx6ZcDibSLJ2PngicDGA/640?wx_fmt=png&from=appmsg)

Karpathy 被折磨得不行，一怒之下决定： **“老子自己写一个！”** 于是，llm.c 就诞生了！

### llm.c 的开发过程：

**抛弃 PyTorch 的抽象，直面底层：** Karpathy 决定抛弃 PyTorch
提供的各种便捷功能，例如自动微分、设备管理、数据类型转换等等，直接用 C 语言操作数组和指针

**逐层移植，确保正确性：** Karpathy 首先用 Python 写出每一层的 forward 和 backward 函数，然后将其移植到 C
语言，并与 PyTorch 的实现进行比较，确保结果一致

**预先规划内存，提高效率：** llm.c 会在程序开始时一次性分配所有内存，避免了动态内存分配的开销，从而提高了运行效率

**单文件，无依赖，极致简洁：** llm.c 只有一个 C 文件，没有任何外部依赖，编译和运行速度极快，甚至可以在非常低端的硬件上运行

**GPU 加速，性能更上一层楼：** Karpathy 将 llm.c 移植到了 GPU 上，并使用 cuBLAS 和 cuDNN 等库进行了优化，性能比
PyTorch 还要好！

**分布式训练，支持多 GPU 和多节点：** llm.c 还支持多 GPU 和多节点训练，可以处理更大规模的数据和模型

**开源协作，吸引各路大神：** llm.c 采用 MIT 开源协议，吸引了来自世界各地的开发者贡献代码和优化方案

### llm.c 的性能：

在 8 张 H100 GPU 的单节点上，llm.c 可以在 24 小时内完成 GPT-2 (16 亿参数) 的训练，成本约为 672 美元

与 PyTorch 相比，llm.c 的内存占用减少了 30%，训练速度提高了 20%，编译和运行速度也更快

### Karpathy 的思考：软件抽象的本质

Karpathy 认为， **Python、PyTorch 等软件抽象的存在，是因为人类的知识、智力和注意力都是有限的。**

随着 AI 能力的不断提升，LLM 或许可以直接为任何应用生成定制的二进制文件（就像 llm.c 一样），从而**打破并重构所有软件抽象！**

**这意味着，未来的软件开发模式可能会发生根本性的改变！** 程序员将不再需要编写 Python 或 C++ 代码，而是直接用 LLM 来生成可执行文件！
🤯

**Karpathy 的 llm.c 项目，或许就是 AI 驱动软件开发的未来！ 🚀**

  

  

**⭐星标AI寒武纪，好内容不错过**⭐****

**用你的****赞****和****在看****告诉我～**

  

  

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/ICgnAptln0X53k92kQa8BeRQk0S3ZibtTFrf0vHLrLXqJpB3miaFf0HDXX1YjWgfQ3GdhgYuKAQTg746xfnBxxcg/640?wx_fmt=png)

👇👇

