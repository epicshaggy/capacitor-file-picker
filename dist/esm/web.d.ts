import { WebPlugin } from "@capacitor/core";
import { FilePickerPlugin } from "./definitions";
export declare class FilePickerWeb extends WebPlugin implements FilePickerPlugin {
    constructor();
    test(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    showPicker(): Promise<unknown>;
}
declare const FilePicker: FilePickerWeb;
export { FilePicker };
