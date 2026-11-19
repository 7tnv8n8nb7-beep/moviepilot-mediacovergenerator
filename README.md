# MoviePilot 动态封面工坊（新前端框架适配版）

基于 wio-ki/MoviePilot-Plugins 的 MediaCoverGenerator 0.18.1，适配 MoviePilot 新前端框架（Vue Module Federation / 前端联盟）。

## 改动
- 新增 get_render_mode / get_sidebar_nav，侧边栏可打开「动态封面工坊」页面
- get_api 增加 /state、/config 端点，前端可实时查看状态并手动生成/预览封面
- 前端用 Vite Federation 编译，暴露 Page / Config 组件

## 安装
在 MoviePilot 插件市场添加本仓库地址，或手动上传 plugins.v2/mediacovergenerator 目录。
