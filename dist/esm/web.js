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
//# sourceMappingURL=web.js.map