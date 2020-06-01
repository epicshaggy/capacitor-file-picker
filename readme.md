# Capacitor File Picker

## Description

Presents the device's native file picking ui and returns the selected file's uri.

## Installation

- `npm i capacitor-file-picker`

## Usage

```ts
import { Plugins } from "@capacitor/core";

const { FilePicker } = Plugins;

FilePicker.showFilePicker({
  fileTypes: ["image/*", "application/pdf"],
}).then(
  (fileResult: FilePickerResult) => {
    const fileUri = fileResult.uri;
    const fileName = fileResult.name;
    const fileMimeType = fileResult.mimeType;
    const fileExtension = fileResult.extension;
  },
  (error) => {
    console.log(error);
  }
);
```

## Methods

| Method                                         | Default | Type                        | Description                                                                       |
| ---------------------------------------------- | ------- | --------------------------- | --------------------------------------------------------------------------------- |
| showFilePicker(options: {fileTypes: string[]}) |         | `Promise<FilePickerResult>` | Presents the device's native file picking ui and returns the selected file's uri. |

## Interfaces

FilePickerResult

| Properties | Default | Type     | Description                               |
| ---------- | ------- | -------- | ----------------------------------------- |
| uri        |         | `string` | Uri string pointing to the selected file. |
| name       |         | `string` | The name of the selected file.            |
| mimeType   |         | `string` | The MIME type of the selected file.       |
| extension  |         | `string` | The extension of the selected file.       |

## Notes

The file picker only accpets:

- application/pdf
- image/\*

This is because it was developed to meet the need to meet a specific need, but feel free to contribute to the plugin's development. :)
