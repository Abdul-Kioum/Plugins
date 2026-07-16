console.log("Applying hook on Pairip Protection");

XposedHelpers.findAndHookMethod(
    "com.pairip.licensecheck.LicenseClient", 
    lpparam.classLoader, 
    "initializeLicenseCheck", 
    createHook({
        beforeHookedMethod: function(param) {
            param.setResult(null);
            console.log("Pairip bypassed successfully");
        }
    })
);
