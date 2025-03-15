import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "copy-editors.copyAll",
    async () => {
      const workspaceFolders = vscode.workspace.workspaceFolders;
      const workspaceRoot =
        workspaceFolders && workspaceFolders.length > 0
          ? workspaceFolders[0].uri.fsPath
          : null;

      let output = "";
      const tabs = vscode.window.tabGroups.all
        .flatMap((group) => group.tabs)
        .filter((tab) => tab.input && tab.input instanceof vscode.TabInputText);

      for (const tab of tabs) {
        if (tab.input instanceof vscode.TabInputText) {
          const uri = tab.input.uri;
          console.log(uri);
          if (uri.scheme === "file") {
            const doc = await vscode.workspace.openTextDocument(uri);
            let relativePath = workspaceRoot
              ? vscode.workspace.asRelativePath(doc.uri.fsPath)
              : doc.uri.fsPath;
            output += "================================================\n";
            output += `File: ${relativePath}\n`;
            output += "================================================\n";
            output += doc.getText() + "\n\n";
          }
        }
      }

      if (!output) {
        vscode.window.showInformationMessage(
          "Nenhum arquivo aberto para copiar."
        );
        return;
      }

      try {
        await vscode.env.clipboard.writeText(output);
        vscode.window.showInformationMessage(
          "Conteúdo copiado para a área de transferência."
        );
      } catch (error) {
        vscode.window.showErrorMessage(
          "Falha ao copiar o conteúdo para a área de transferência."
        );
      }
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
