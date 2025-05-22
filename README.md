# YumeLight

YumeLight 是一款清爽、优雅的 VS Code 主题，以纯净的白色为主基调，精心点缀粉色元素，带来清新舒适的视觉体验。适合喜欢明亮、简洁界面的用户

## 特点
- 以白色为主基调，提供清晰、明亮的编辑环境
- 粉色点缀UI元素，营造温柔优雅的视觉感受
- 精心优化的代码高亮方案，增强代码可读性
- 支持丰富的编程语言语法高亮，包括C/C++、JavaScript、TypeScript、Python、Go、Java、C#、Rust、PHP、Swift、Ruby、Shell、FVV等

## 支持的语言
主题提供了以下编程语言的语法高亮支持:
- C/C++
- JavaScript/TypeScript
- Python
- Go
- Java
- C#
- Rust
- Kotlin
- PHP
- Swift
- Ruby
- Shell/Bash
- HTML/CSS
- Markdown
- CMake
- Makefile
- PowerShell
- FVV (特别支持 需要安装扩展 [FVV Language Support](https://marketplace.cursorapi.com/items?itemName=TianwanAyana.fvv))
## 使用方法
1. 在 VS Code 扩展市场搜索 "YumeLight" 并安装。
2. 在主题设置中选择 "YumeLight"。

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
- 按 F5 或点击"运行扩展"按钮，VS Code 会自动合并 token 文件并启动开发者扩展窗口。
- 在新窗口中切换到 "Yume Light" 主题即可实时预览效果。

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

版权所有 (c) 2025 YumeYuka

特此授予任何人自由复制、分发、修改、合并、销售、出版、再授权或以其他方式使用本作品的权限，但须满足以下条件：

1. 所有副本或本作品的重要部分必须包含"YumeYuka"作为原始作者的姓名。
2. 使用本作品的所有风险和责任由使用者自行承担。

作者YumeYuka将本作品"按原样"提供，不提供任何明示或暗示的担保，包括但不限于适销性、特定用途的适用性及不侵权的担保。本作品可能运行，也可能完全失效，不存在中间状态。

            条款和条件

0. 作者对因使用本作品而产生的任何索赔、损害或问题不承担任何责任，无论是在合同、侵权或其他情况下。

星空之下，自由归于你