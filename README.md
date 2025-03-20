# Console Utils

这是一个 VSCode/Cursor 扩展，用于快速插入 console.log 语句和删除所有 console 语句。

## 灵感来源

源自这个项目：https://github.com/whtouche/vscode-js-console-utils
这个项目在 Cursor 里面用不了，因此我自己写了一个。

## 开发方式

全部代码都是用 Cursor 的 AI 助手帮我写的，以下是 Prompt，内容其实就是[灵感来源](https://github.com/whtouche/vscode-js-console-utils)项目的功能介绍：

```shell
帮我写一个VSCode和Cursor的插件，实现如下功能，并提供构建、发布、使用的文档：

With selection:
Highlight a variable (or really any text)
Press Cmd+Shift+D
The output (on a new line) will be: console.log('variable: ', variable);

Without selection:
Press Alt+Shift+D
The output (on the same line) will be: console.log();
To remove console.logs:

Press Alt+Shift+D
This will delete all console.log statements in the current document

Add support for other console.* methods (warn, error)
```

## 功能

- 快速插入 console.log 语句
- 支持选中文本时自动添加变量名
- 一键删除所有 console.log、、console.warn 和 console.error 语句

## 使用方法

### 插入 console.log

1. 选中要打印的变量或文本
2. 按下 `Cmd+Shift+D`（Mac）或 `Ctrl+Shift+D`（Windows/Linux）
3. 扩展会在新行插入带有变量名的 console.log 语句

如果没有选中文本：

1. 将光标放在想要插入 console.log 的位置
2. 按下 `Cmd+Shift+D`（Mac）或 `Ctrl+Shift+D`（Windows/Linux）
3. 扩展会在当前光标位置插入空的 console.log 语句

### 删除所有 console 信息

1. 打开要清理的文件
2. 按下 `Option+Shift+D`（Mac）或 `Alt+Shift+D`（Windows/Linux）
3. 扩展会删除文件中所有的 console.log、console.warn 和 console.error 语句

## 安装方法

### 从源码安装

1. 克隆此仓库
2. 运行 `npm install` 安装依赖
3. 运行 `npm run compile` 编译代码
4. 按 F5 启动调试，或使用 `vsce package` 打包扩展
5. 在 VSCode/Cursor 中安装生成的 .vsix 文件

### 从 VSCode Marketplace 安装（待发布）

1. 打开 VSCode/Cursor
2. 转到扩展面板
3. 搜索 "Console Logger"
4. 点击安装

## 开发

### 构建

```bash
npm install
npm run compile
```

### 调试

1. 按 F5 启动调试
2. 在新打开的 VSCode 窗口中测试扩展

### 打包

```bash
npm install -g @vscode/vsce
vsce package
```

## 许可证

MIT
