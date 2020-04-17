declare module "@capacitor/core" {
    interface PluginRegistry {
        FilePicker: FilePickerPlugin;
    }
}
export interface FilePickerPlugin {
    test(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    showPicker(): Promise<any>;
}
