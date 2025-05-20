# Yume Light

Yume Light 是一款明亮、柔和的 VS Code 主题，主色调为粉色和浅色，带来清新温柔的视觉体验。适合喜欢明亮、少女风格配色的用户。

## 特点
- 明亮、温柔的配色方案
- 粉色为主，搭配浅色背景
- 适合日常编程和长时间使用

## 使用方法
1. 在 VS Code 扩展市场搜索 “Yume Light” 并安装。
2. 在主题设置中选择 “Yume Light”。

## 本地开发与构建

### 1. 自动合并 token 文件
本主题的语法高亮规则（tokenColors）已按语言拆分为多个 JSON 文件，存放于 `themes/token-colors/` 目录。每次调试或打包前，需自动合并所有 token 文件到主主题文件 `themes/my-theme-color-theme.json`。

- **自动合并脚本**：
  - 运行 `pnpm  build` 或在 VS Code 调试前会自动执行 `themes/merge-theme.js`，无需手动操作。
  - 你也可以在 VS Code 命令面板或终端运行：
    ```sh
    node themes/merge-theme.js
    ```

### 2. 本地调试主题
- 按 F5 或点击“运行扩展”按钮，VS Code 会自动合并 token 文件并启动开发者扩展窗口。
- 在新窗口中切换到 “Yume Light” 主题即可实时预览效果。

### 3. 打包与发布
- 打包扩展：
  ```sh
  vsce package
  ```
- 发布扩展：
  ```sh
  vsce publish
  ```
- 发布前请确保已运行合并脚本，`my-theme-color-theme.json` 已包含所有 token 配置。

## License
``` 
YumeYuka Starry Oath

Copyright (c) 2025 YumeYuka

Permission is hereby granted to any person to freely copy, distribute, modify, incorporate, sell, publish, sublicense, or otherwise use this work, provided the following conditions are met:

1. all copies or significant portions of this work must contain the name ‘YumeYuka’ as the original author. 2. all risks of use of this work will be borne by you.
2. All use of this work is at the user's sole risk and responsibility.

The author, YumeYuka, provides this work ‘as is’ without warranty of any kind, either express or implied, including, but not limited to, warranties of merchantability, fitness for a particular purpose, and non-infringement. This work may function or fail completely, there is no intermediate state.

            Terms and Conditions

0. The author assumes no responsibility for any claims, damages, or problems arising from the use of this work, whether in contract, tort, or otherwise.

Under the Stars, Freedom to You
```