---
title:快速上手
---
# 快速上手

## 全局安装
如果你只是想尝试一下，你可以全局安装它：
```bash
# 安装
yarn global add gulu-demo # 或者：npm install -g gulu-demo

# 创建项目目录
mkdir vuepress-starter && cd vuepress-starter

# 新建一个 markdown 文件
echo '# Hello VuePress!' > README.md

# 开始写作
vuepress dev .

# 构建静态文件
vuepress build .

```


## 现有项目
如果你想在一个现有项目中使用
```bash
# 将 VuePress 作为一个本地依赖安装
yarn add -D gulu-demo # 或者：npm install -D gulu-demo

# 新建一个 docs 文件夹
mkdir docs

# 新建一个 markdown 文件
echo '# Hello !' > docs/README.md

# 开始写作
npx gulu-demo dev docs
```

::: warning
目前该 UI 仍然是半成品，切勿在生产环境中使用
:::