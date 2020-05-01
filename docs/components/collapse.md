---
title: Collapse 
---

# 折叠面板

 通过折叠面板收纳内容区域。
## 使用方法

可同时展开多个面板，面板之间不影响。

<ClientOnly>
<collapse-demo-1></collapse-demo-1>
</ClientOnly>

::: details 点击查看代码
```bash
<g-collapse :selected.sync="selectedTab">
<g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
<g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
<g-collapse-item title="标题3" name="3">内容2</g-collapse-item>
</g-collapse>
```
:::


## 手风琴效果

每次只能展开一个面板，就像手风琴一样

<ClientOnly>
<collapse-demo-2></collapse-demo-2>
</ClientOnly>

::: details 点击查看代码
```bash
<g-collapse :selected.sync="selectedTab" single>
<g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
<g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
<g-collapse-item title="标题3" name="3">内容2</g-collapse-item>
</g-collapse>
```
:::

