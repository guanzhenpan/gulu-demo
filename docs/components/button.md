---
title: Button
---

# 按钮
- 单个按钮、多个按钮
- 点击按钮出现交互
- 按钮可以添加图标，设置图标位置
## 使用方法


<ClientOnly>
<button-demos></button-demos>
</ClientOnly>

::: details 点击查看代码
```bash
<g-button>默认按钮</g-button>
<g-button icon="settings">默认按钮</g-button>
<g-button :loading="true">默认按钮</g-button>
<g-button disabled>默认按钮</g-button>
<g-button icon="thumbs-up">点赞</g-button>
<g-button icon="download" icon-position="right">下载</g-button>
```
:::


## 浏览


<ClientOnly>
<button-demos-1></button-demos-1>
</ClientOnly>


::: details 点击查看代码
```bash
<g-button-group>
<g-button icon="left" icon-position="left" >上一页</g-button>
<g-button icon="right" icon-position="right" >下一页</g-button>
</g-button-group>
```
:::