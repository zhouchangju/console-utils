import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  // 注册插入 console.log 命令
  let insertLog = vscode.commands.registerCommand(
    'console-logger.insertLog',
    () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        return;
      }

      const selection = editor.selection;
      const document = editor.document;
      const text = document.getText(selection);

      // 获取当前行的缩进
      const currentLine = document.lineAt(selection.active.line);
      const indent = currentLine.text.match(/^\s*/)?.[0] || '';

      // 创建编辑
      const edit = new vscode.WorkspaceEdit();

      if (text) {
        // 如果有选中文本，在新行插入带变量的 console.log
        const position = new vscode.Position(selection.end.line + 1, 0);
        edit.insert(
          document.uri,
          position,
          `${indent}console.log('${text}: ', ${text});\n`
        );
      } else {
        // 如果没有选中文本，在当前行插入空的 console.log
        const position = new vscode.Position(
          selection.active.line,
          selection.active.character
        );
        edit.insert(document.uri, position, 'console.log();');
      }

      vscode.workspace.applyEdit(edit);
    }
  );

  // 注册删除所有 console.log 命令
  let removeLogs = vscode.commands.registerCommand(
    'console-logger.removeLogs',
    () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        return;
      }

      const document = editor.document;
      const text = document.getText();

      // 使用正则表达式匹配所有 console.log、console.warn 和 console.error 语句
      const regex = /^\s*console\.(log|warn|error)\([^)]*\);?\s*$/gm;
      const newText = text.replace(regex, '');

      const edit = new vscode.WorkspaceEdit();
      const fullRange = new vscode.Range(
        document.positionAt(0),
        document.positionAt(text.length)
      );
      edit.replace(document.uri, fullRange, newText);

      vscode.workspace.applyEdit(edit);
    }
  );

  context.subscriptions.push(insertLog, removeLogs);
}

export function deactivate() {}
