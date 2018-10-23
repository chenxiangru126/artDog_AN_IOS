(function(w) {
    var cfg = {};
    var _fns = {};
    var config = function(c) {
        for (k in c) {
        cfg[k] = c[k];
    };
 };
    var exec = (function() {
        var execute = (function() {
            var os = -1;
                if (/(iPhone|iPad|iPod|iOS)/.test(navigator.userAgent)) {
                    os = 1;
                } else if (/(Android)/.test(navigator.userAgent)) {
                    os = 0;
                };
                return function(cb) {
                    if (os == 0) {
                        window.oatongJSBridge.invoke(cb);
                    } else if (os == 1) {
                        window.location.href = "oatongJSBridge.invoke('" + cb + "')";
                    console.log(cb)
                };
            };
        })();
    var genfnName = (function() {
        var prefix = "zntfn";
        var aw = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        var len = aw.length;
        var m = 5;
        var fn = function() {
            var n = Math.floor(m + Math.random() * len);
            var arr = [];
            for (var i = 0; i < n; i++) {
                var x = Math.floor(Math.random() * len);
                arr.push(aw[x]);
            };
            return prefix + arr.join('');
            };
            return function() {
            
            var nm;
            do {
                nm = fn();
            } while (nm in _fns);
                return nm;
        };
    }());
             return function(cmd, co) {
             
                var name = genfnName();
                
                _fns[name] = function(resp) {
                    var data = JSON.parse(resp)
                    if (data.code) {
                        if (co.success && typeof co.success == "function") {
                            co.success(data.data);
                            alert(data.data);
                        };
                    } else {
                        if (isNull(data.error)) {
                            if (co.fail && typeof co.fail == "function") {
                            co.fail(data.error);
                            };
                        }
                        else{
                            if (co.cancel && typeof co.cancel == "function") {
                            co.cancel();
                        };
                }
             };
             if(data.nonstop == '0'){
//             console.log("删除函数")
                delete _fns[name];
                }
            };
                var p = {
                    m: name,
                    cmd: cmd
                };
                var nm;
                for (nm in co) {
                    if (typeof co[nm] !== "function") {
                    p[nm] = co[nm];
                    };
                };
                    execute(JSON.stringify(p));
                };
             }());
    var cacheUserInfo = function(cfg) {
    exec("CacheUserInfo", cfg);
    };
    var getCacheUserInfo = function(cfg) {
    exec("GetCacheUserInfo", cfg);
    };
    var cacheFile = function(cfg){
    exec("CacheFile",cfg);
    };
    var netWorkStatus = function(cfg){
    exec("NetworkStatus",cfg);
    };
    var call = function(cfg){
    exec("Call",cfg);
    };
    var uniquelyIdentifies = function(cfg){
    exec("UniquelyIdentifies",cfg);
    };
    var gyro = function(cfg){
    exec("Gyro",cfg);
    };
    var playSound = function(cfg){
    exec("PlaySound",cfg);
    };
    var closeGyro = function(cfg){
    exec("CloseGyro",cfg);
    };
    var fingerprintVerification = function(cfg){
    exec("FingerprintVerification",cfg);
    };
    var getLocation = function(cfg){
    exec("GetLocation",cfg);
    };
    var thirdLogin = function(cfg){
    exec("ThirdLogin",cfg);
    };
    var alipay = function(cfg){
    exec("Alipay",cfg);
    }
    var  selectImage = function(cfg){
    exec("SelectImage",cfg)
    }
    var  phoneVibration = function(cfg){
    exec("PhoneVibration",cfg)
    }
    var  scanCode = function(cfg){
    exec("ScanCode",cfg)
    }
    var  cacheUserAccount = function(cfg){
    exec("CacheUserAccount",cfg)
    }
    var  logout = function(cfg){
    exec("Logout",cfg)
    }
    var  deleteUserAccount = function(cfg){
    exec("DeleteUserAccount",cfg)
    }
    var  share = function(cfg){
    exec("Share",cfg)
    }
    var  contactList = function(cfg){
    exec("ContactList",cfg)
    }
    var znt = {
        config: config,
        fn: _fns,
        cacheUserInfo: cacheUserInfo,
        getCacheUserInfo: getCacheUserInfo,
        cacheFile:cacheFile,
        netWorkStatus: netWorkStatus,
        call: call,
        uniquelyIdentifies:uniquelyIdentifies,
        playSound:playSound,
        gyro:gyro,
        closeGyro:closeGyro,
        fingerprintVerification: fingerprintVerification,
        getLocation: getLocation,
        thirdLogin: thirdLogin,
        alipay: alipay,
        selectImage: selectImage,
        phoneVibration:phoneVibration,
        scanCode:scanCode,
        cacheUserAccount:cacheUserAccount,
        logout:logout,
        deleteUserAccount:deleteUserAccount,
        share:share,
        contactList:contactList,
    };
 w.znt = znt;
 }(window));
 
 function isNull(data) {
    return (data == "" || data == undefined || data == null) ? false : true;
}
 
function alert111(res){
    alert("1111111"+res)
    console.log(res)
}
 console.log = function(log){
    postConsoleMessage(log);
}
 
function postConsoleMessage(msg){
    var iframe = document.createElement("IFRAME");
    iframe.setAttribute("src", "ios-log:#iOS#" + msg);
    document.documentElement.appendChild(iframe);
    iframe.parentNode.removeChild(iframe);
    iframe = null;
}
 
 onerror = function(msg, url, line){
    var errormsg = "message:" + msg + "\n url:" + url + "\n line:" + line;
    postConsoleMessage(">>>>>>>>>>ERROR<<<<<<<<<<\n" + errormsg);
}
