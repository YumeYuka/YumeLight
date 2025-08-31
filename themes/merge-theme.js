/**
 * 合并脚本 - 同时执行 JSON 修复和主题合并功能
 * 作用：
 * 1. 修复 token-colors 目录下所有 JSON 文件的格式
 * 2. 将修复后的文件合并到主题文件 my-theme-color-theme.json
 */

const fs = require('fs');
const path = require('path');

// 基础路径
const themePath = path.join(__dirname, 'color-theme.json');
const tokenDir = path.join(__dirname, 'token-colors');
const tokenFiles = fs.readdirSync(tokenDir).filter(f => f.endsWith('.json'));

console.log('===== 开始执行主题合并流程 =====');

// 步骤1: 修复 JSON 文件
console.log(`\n[第一步] 修复 ${tokenFiles.length} 个 JSON 文件...`);

for (const file of tokenFiles) {
    try {
        const filePath = path.join(tokenDir, file);
        let content = fs.readFileSync(filePath, 'utf-8');

        // 移除可能的 BOM 标记和其他不可见字符
        content = content.replace(/^\uFEFF/, '');

        // 移除单行注释
        content = content.replace(/\/\/.*$/gm, '');

        // 确保是有效的 JSON
        try {
            const jsonObj = JSON.parse(content);

            // 重新格式化并写回
            fs.writeFileSync(filePath, JSON.stringify(jsonObj, null, 2));
            console.log(`  ✅ 已修复: ${file}`);
        } catch (parseError) {
            // 如果解析失败，可能是格式问题，针对特定文件进行特殊处理
            if (file === 'token-cmake.json') {
                // 重新创建正确的 JSON 结构
                const fixedJson = [
                    {
                        "scope": "entity.source.cmake, string.source.cmake",
                        "settings": {
                            "foreground": "#A7BEC6"
                        }
                    },
                    {
                        "scope": "storage.source.cmake",
                        "settings": {
                            "foreground": "#D8B0B0"
                        }
                    }
                ];

                fs.writeFileSync(filePath, JSON.stringify(fixedJson, null, 2));
                console.log(`  🔧 为 ${file} 创建了新的正确内容`);
            } else {
                console.error(`  ❌ 无法解析 ${file}: ${parseError.message}`);
            }
        }
    } catch (error) {
        console.error(`  ❌ 处理 ${file} 时出错:`, error.message);
    }
}

console.log('[第一步] JSON 文件修复完成！');

// 步骤2: 合并 tokens 到主题文件
console.log('\n[第二步] 开始合并 tokenColors 到主题文件...');

try {
    // 读取主题文件
    const theme = JSON.parse(fs.readFileSync(themePath, 'utf-8'));
    const originalColors = theme.colors;  // 保留原有的 colors 配置

    let allTokens = [];
    console.log(`找到 ${tokenFiles.length} 个 token 文件：`);

    // 读取所有 token 文件并合并
    for (const file of tokenFiles) {
        try {
            console.log(`  - 处理 ${file}`);
            const fileContent = fs.readFileSync(path.join(tokenDir, file), 'utf-8');
            const tokens = JSON.parse(fileContent);
            allTokens = allTokens.concat(tokens);
        } catch (error) {
            console.error(`  ❌ 处理 ${file} 时出错:`, error.message);
        }
    }

    // 更新 theme 对象
    theme.tokenColors = allTokens;

    // 写回主题文件
    fs.writeFileSync(themePath, JSON.stringify(theme, null, 2));
    console.log(`[第二步] ✅ 合并完成，总共有 ${allTokens.length} 条 tokenColors 规则`);

    console.log('\n===== 主题合并流程执行完毕 =====');
} catch (error) {
    console.error(`\n❌ 合并过程中出错: ${error.message}`);
    process.exit(1);
}
