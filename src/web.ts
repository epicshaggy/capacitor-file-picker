import { WebPlugin } from "@capacitor/core";
import { FilePickerPlugin } from "./definitions";

export class FilePickerWeb extends WebPlugin implements FilePickerPlugin {
  constructor() {
    super({
      name: "FilePicker",
      platforms: ["web"],
    });
  }

  async test(options: { value: string }): Promise<{ value: string }> {
    console.log("ECHO", options);
    return options;
  }

  async showPicker() {
    return new Promise(() => {});
  }
}

const FilePicker = new FilePickerWeb();

export { FilePicker };

import { registerWebPlugin } from "@capacitor/core";
registerWebPlugin(FilePicker);
