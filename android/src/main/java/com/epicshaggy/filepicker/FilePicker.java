package com.epicshaggy.filepicker;

import android.content.Intent;
import android.util.Log;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

@NativePlugin(requestCodes = {FilePicker.FILE_PICK})
public class FilePicker extends Plugin {

    protected static final int FILE_PICK = 1010;

    @PluginMethod()
    public void test(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", value);
        call.resolve(ret);
    }

    @PluginMethod()
    public void showPicker(PluginCall call){
        Intent intent = new Intent(Intent.ACTION_GET_CONTENT);
        intent.setType("*/*");
        startActivityForResult(call, intent, FILE_PICK);
        call.resolve();
    }

    @Override
    protected void handleOnActivityResult(int requestCode, int resultCode, Intent data) {
        super.handleOnActivityResult(requestCode, resultCode, data);
        Log.i("resultofactivity", String.valueOf(requestCode));
    }
}
