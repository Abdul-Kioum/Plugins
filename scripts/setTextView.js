log("Script loaded for package: " + lpparam.packageName);

try {
    XposedHelpers.findAndHookMethod(
        "android.widget.TextView",          
        lpparam.classLoader,                
        "setText",                          
        "java.lang.CharSequence",           
        createHook({                        
            beforeHookedMethod: function(param) {
                log("Setting Text: " + param.args[0]);
                param.args[0] = "TextView Text Hacked!";
            }
        })
    );
    
    log("Hook attached successfully!");
} catch(e) {
    log("Error: " + e);
}
