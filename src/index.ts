import { registerPlugin } from "@capacitor/core";
import { FilePickerPlugin } from "./definitions";

const FilePicker = registerPlugin<FilePickerPlugin>("FilePicker", {
  web: () => import("./web").then((m) => m.FilePickerWeb),
});

export * from "./definitions";
export { FilePicker };
