import { registerPlugin } from "@capacitor/core";

const FilePicker = registerPlugin("FilePicker", {
  web: () => import("./web").then((m) => m.FilePickerWeb),
});

export * from "./definitions";
export { FilePicker };
