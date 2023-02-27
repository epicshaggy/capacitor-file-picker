export class FiletTypes {
  static PDF = "pdf"; // For .pdf files
  static IMAGE = "image"; // For any type of image file
  static VIDEO = "video"; // For .pdf files
}

export interface FilePickerResult {
  uri: string;
  name: string;
  mimeType: string;
  extension: string;
}

export interface FilePickerPlugin {
  showFilePicker(options?: { fileTypes?: string[] }): Promise<FilePickerResult>;
}
