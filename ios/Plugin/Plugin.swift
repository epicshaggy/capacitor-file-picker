import Foundation
import Capacitor
import MobileCoreServices



/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitor.ionicframework.com/docs/plugins/ios
 */
@objc(FilePicker)
public class FilePicker: CAPPlugin {
    
    @objc func test(_ call: CAPPluginCall){
        print("test")
        call.resolve()
    }
    
    @objc func showPicker(_ call: CAPPluginCall) {
        print("Show Pickerrrrr")
        let documentPicker = UIDocumentPickerViewController(documentTypes: [kUTTypePlainText as String], in: .import)
        documentPicker.delegate = self
        documentPicker.allowsMultipleSelection = false
        DispatchQueue.main.async {
            self.bridge.viewController.present(documentPicker, animated: true, completion: nil)
        }
        call.resolve()
    }
    
    
}

extension FilePicker: UIDocumentPickerDelegate {
    public func documentPicker(_ controller: UIDocumentPickerViewController, didPickDocumentsAt urls: [URL]) {
        print("picked")
    }
}
