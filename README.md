# Copy Editors Extension

## Description
copy-editors is a Visual Studio Code extension that copies the content of all open text editors to the clipboard. This provides a quick way to archive or share the contents of multiple files.

## Features
- Copies content from all currently opened text editors.
- Formats output with file boundaries and relative paths.
- Supports working with workspace and non-workspace files.

## How to Use
1. Open several text editors in VS Code.
2. Open the Command Palette (Cmd+Shift+P or Ctrl+Shift+P).
3. Run the command "Copy Open Editors".
4. The content of all open text editors will be copied to your clipboard.

## Prerequisites
- Visual Studio Code version 1.97.0 or later.
- A workspace with at least one open text file (for relative paths to be determined).

## Examples
After running the command, the copied text will include:
```
================================================
File: src/extension.ts
================================================
<file content here>

================================================
File: anotherFile.js
================================================
<file content here>
```

## Contributing and License
Contributions are welcome! Please fork this repository and submit pull requests with improvements.
This project is licensed under the MIT License. See the LICENSE file for details.

