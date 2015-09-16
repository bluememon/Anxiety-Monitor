function InvokeService(path, method, data, cb) {
    if ("function" == typeof data) {
        cb = data;
        data = null;
    }
    if ("function" != typeof cb) throw new Error("callback must be provided!");
    var xhr = Ti.Network.createHTTPClient();
    xhr.onerror = function(e) {
        cb(e.error);
    };
    xhr.onload = function() {
        var r = this.responseText;
        try {
            -1 != xhr.getResponseHeader("content-type").indexOf("json") && (r = JSON.parse(r));
        } catch (E) {}
        cb(null, r);
    };
    "/" == exports.URL.match("/$") && 0 == path.indexOf("/") ? xhr.open(method, exports.URL + path.substring(1)) : xhr.open(method, exports.URL + path);
    xhr.send(data);
}

var url = Ti.App.Properties.getString("acs-service-baseurl-Anxiety Monitor");

if (!url) throw new Error("Url not found by acs-service-baseurl-Anxiety Monitor.");

exports.URL = url.replace(/^\s+|\s+$/g, "") ? url.replace(/^\s+|\s+$/g, "") : "http://localhost:8080";

exports.application_index = function(data, cb) {
    var path = [];
    path.push("/");
    InvokeService(path.join(""), "GET", data, cb);
};