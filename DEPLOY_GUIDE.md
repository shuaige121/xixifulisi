# Cloudflare Pages 部署指南

这是一个 **静态 HTML** 项目。因为它使用的是原生 JavaScript、CSS 和 HTML，所以**不需要**任何构建步骤（如 `npm run build`）。

## 配置设置 (Configuration Settings)
当您在 Cloudflare Pages 创建新项目并连接 GitHub 仓库时，请按以下方式填写：

1.  **项目名称 (Project Name)**: 任意您喜欢的名称 (例如 `renee-portfolio`)
2.  **框架预设 (Framework Preset)**: `None` (选择 "None" 或者保持默认)
3.  **构建命令 (Build Command)**: **留空** (不要输入任何内容)
4.  **构建输出目录 (Build Output Directory)**: **留空** (如果必须填，请输入 `.`)

## 环境变量 (Environment Variables)
本项目运行**不需要**任何环境变量。

## 自定义域名 (Custom Domain)
部署完成后，您可以进入 Cloudflare Pages 的 "Custom Domains" (自定义域名) 选项卡来绑定您的域名 (例如 `www.reneepang.com`)。
