import { WebPlugin } from "@capacitor/core";
export class FilePickerWeb extends WebPlugin {
    constructor() {
        super({
            name: "FilePicker",
            platforms: ["web"],
        });
    }
    showFilePicker(options) {
        console.log(options);
        return Promise.resolve(null);
    }
}
const FilePicker = new FilePickerWeb();
export { FilePicker };
import { registerWebPlugin } from "@capacitor/core";
registerWebPlugin(FilePicker);
//# sourceMappingURL=web.js.map