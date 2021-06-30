import { WebPlugin } from "@capacitor/core";
import { FilePickerPlugin, FilePickerResult } from "./definitions";

export class FilePickerWeb extends WebPlugin implements FilePickerPlugin {
  constructor() {
    super({
      name: "FilePicker",
      platforms: ["web"],
    });
  }

  showFilePicker(options?: {
    fileTypes?: string[];
  }): Promise<FilePickerResult> {
    console.log(options);
    return Promise.resolve(null);
  }
}

const FilePicker = new FilePickerWeb();

export { FilePicker };
