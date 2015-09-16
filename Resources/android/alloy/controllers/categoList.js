function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function loadData() {
        var sendit = Ti.Network.createHTTPClient({
            onerror: function(e) {
                Ti.API.debug(e.error);
                alert("There was an error during the connection");
            },
            timeout: 3e3
        });
        sendit.open("POST", "http://app.bluecoreservices.com/webservices/getMoodInfo.php");
        var params = {
            idPaciente: idPaciente
        };
        sendit.send(params);
        sendit.onload = function() {
            var json = JSON.parse(this.responseText);
            var json = json.lineData;
            0 == json.length && $.noInfoView.show();
            for (var i = 0; i < json.length; i++) {
                arrayTemp = [];
                arrayTemp.push(json[i].name);
                arrayTemp.push(json[i].y);
                dataArrayCatego.push(arrayTemp);
            }
        };
    }
    function agregarColor(resultado) {
        if (resultado > 80) return "#800000";
        if (80 >= resultado && resultado > 50) return "#FF6600";
        if (50 >= resultado) return "#66CCFF";
    }
    function getTodoList(idPatient) {
        var sendit = Ti.Network.createHTTPClient({
            onerror: function(e) {
                Ti.API.debug(e.error);
                alert("There was an error during the connection");
                $.connectionError.show();
            },
            timeout: 3e3
        });
        sendit.open("POST", "http://app.bluecoreservices.com/webservices/ListCatego.php");
        var params = {
            idPaciente: idPatient
        };
        sendit.send(params);
        sendit.onload = function() {
            var json = JSON.parse(this.responseText);
            var json = json.DasList;
            0 == json.length && $.noInfoView.show();
            dataArray = [];
            for (var i = 0; i < json.length; i++) {
                var wrapper = Titanium.UI.createView({
                    className: "cardWrapper",
                    layout: "vertical",
                    height: Titanium.UI.SIZE,
                    width: Titanium.UI.FILL,
                    backgroundColor: "#C4C4C4",
                    bottom: 0,
                    top: "10sp",
                    borderRadius: "5sp"
                });
                var row = Titanium.UI.createView({
                    className: "elementRow",
                    layout: "horizontal",
                    height: Titanium.UI.SIZE,
                    width: Titanium.UI.FILL,
                    backgroundColor: "#FFFFFF",
                    top: 0,
                    bottom: "2sp",
                    borderRadius: "5sp"
                });
                var viewResult = Titanium.UI.createView({
                    className: "rowResult",
                    height: Titanium.UI.SIZE,
                    width: Titanium.UI.SIZE,
                    bubbleParent: true,
                    layout: "composite"
                });
                var viewResultColor = Titanium.UI.createView({
                    className: "rowResult",
                    height: "60sp",
                    width: "60sp",
                    borderRadius: "30sp",
                    backgroundColor: agregarColor(json[i].severidad),
                    top: "10sp",
                    bottom: "10sp",
                    left: "10sp",
                    right: "10sp",
                    bubbleParent: true,
                    layout: "composite"
                });
                var viewDate = Titanium.UI.createView({
                    className: "rowDate",
                    height: Titanium.UI.SIZE,
                    width: Titanium.UI.SIZE,
                    left: "10sp",
                    bubbleParent: true
                });
                var resultLabel = Titanium.UI.createLabel({
                    text: Math.round(json[i].severidad),
                    font: {
                        fontSize: "20sp"
                    },
                    color: "#FFFFFF"
                });
                var dateLabel = Titanium.UI.createLabel({
                    text: json[i].nombre,
                    font: {
                        fontSize: "20sp"
                    },
                    color: "#000000"
                });
                viewResult.add(resultLabel);
                viewDate.add(dateLabel);
                viewResultColor.add(viewResult);
                wrapper.add(row);
                row.add(viewResultColor);
                row.add(viewDate);
                $.DASCatego.add(wrapper);
            }
            $.activityIndicator.hide();
        };
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "categoList";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.__views.tempnomames = Ti.UI.createWindow({
        backgroundColor: "#eeeeee",
        id: "tempnomames"
    });
    $.__views.loadingWrapper = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        layout: "composite",
        id: "loadingWrapper"
    });
    $.__views.tempnomames.add($.__views.loadingWrapper);
    $.__views.activityIndicator = Ti.UI.createActivityIndicator({
        left: "10px",
        message: "Cargando...",
        height: Titanium.UI.FILL,
        width: Titanium.UI.FILL,
        id: "activityIndicator"
    });
    $.__views.loadingWrapper.add($.__views.activityIndicator);
    $.__views.scrollViewDASList = Ti.UI.createScrollView({
        layout: "vertical",
        zIndex: "1",
        id: "scrollViewDASList",
        showVerticalScrollIndicator: "true",
        showHorizontalScrollIndicator: "false"
    });
    $.__views.tempnomames.add($.__views.scrollViewDASList);
    $.__views.__alloyId78 = Ti.UI.createView({
        layout: "vertical",
        height: Titanium.UI.SIZE,
        width: Titanium.UI.FILL,
        left: "10sp",
        right: "10sp",
        top: "10sp",
        bottom: "10sp",
        id: "__alloyId78"
    });
    $.__views.scrollViewDASList.add($.__views.__alloyId78);
    $.__views.__alloyId79 = Ti.UI.createView({
        layout: "vertical",
        height: Titanium.UI.SIZE,
        width: Titanium.UI.FILL,
        backgroundColor: "#C4C4C4",
        bottom: 0,
        borderRadius: "5sp",
        id: "__alloyId79"
    });
    $.__views.__alloyId78.add($.__views.__alloyId79);
    $.__views.__alloyId80 = Ti.UI.createView({
        layout: "vertical",
        height: Titanium.UI.SIZE,
        width: Titanium.UI.FILL,
        backgroundColor: "#FFFFFF",
        bottom: "2sp",
        borderRadius: "5sp",
        id: "__alloyId80"
    });
    $.__views.__alloyId79.add($.__views.__alloyId80);
    $.__views.chartWebView = Ti.UI.createWebView({
        height: Titanium.UI.SIZE,
        DisableBounce: true,
        touchEnabled: false,
        borderRadius: "5sp",
        id: "chartWebView",
        url: "/html/PIE.html",
        bubbleParent: "false",
        cacheMode: Titanium.UI.Android.WEBVIEW_LOAD_NO_CACHE
    });
    $.__views.__alloyId80.add($.__views.chartWebView);
    $.__views.DASCatego = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        layout: "vertical",
        id: "DASCatego"
    });
    $.__views.__alloyId78.add($.__views.DASCatego);
    $.__views.buttonswrapper = Ti.UI.createView({
        zIndex: 2,
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        bottom: 0,
        right: 0,
        id: "buttonswrapper"
    });
    $.__views.tempnomames.add($.__views.buttonswrapper);
    $.__views.buttonBackground = Ti.UI.createView({
        layout: "composite",
        opacity: 0,
        width: 0,
        height: 0,
        backgroundColor: "#000000",
        visible: "false",
        id: "buttonBackground"
    });
    $.__views.buttonswrapper.add($.__views.buttonBackground);
    $.__views.buttonSpace = Ti.UI.createView({
        bottom: "20sp",
        right: "20sp",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        zIndex: 2,
        id: "buttonSpace"
    });
    $.__views.buttonswrapper.add($.__views.buttonSpace);
    $.__views.__alloyId81 = Ti.UI.createView({
        width: "61sp",
        height: "80sp",
        borderRadius: "30sp",
        backgroundImage: "none",
        zIndex: 3,
        bottom: 0,
        id: "__alloyId81"
    });
    $.__views.buttonSpace.add($.__views.__alloyId81);
    $.__views.expandButtons = Ti.UI.createButton({
        color: "#ffffff",
        font: {
            fontSize: "30sp"
        },
        backgroundColor: "#009933",
        borderWidth: 0,
        borderColor: "#009933",
        width: "60sp",
        height: "60sp",
        borderRadius: "30sp",
        backgroundImage: "none",
        zIndex: 2,
        bottom: "2sp",
        left: "1sp",
        title: "+",
        id: "expandButtons"
    });
    $.__views.__alloyId81.add($.__views.expandButtons);
    $.__views.__alloyId82 = Ti.UI.createView({
        backgroundColor: "#333333",
        borderWidth: 0,
        borderColor: "#333333",
        opacity: .3,
        width: "60sp",
        height: "60sp",
        borderRadius: "30sp",
        backgroundImage: "none",
        zIndex: 1,
        bottom: 0,
        id: "__alloyId82"
    });
    $.__views.__alloyId81.add($.__views.__alloyId82);
    $.__views.addDAS = Ti.UI.createButton({
        color: "#ffffff",
        font: {
            fontSize: "30sp"
        },
        backgroundColor: "#CC6600",
        width: "60sp",
        height: "60sp",
        borderRadius: "30sp",
        zIndex: 2,
        bottom: 0,
        opacity: 0,
        title: "+",
        id: "addDAS"
    });
    $.__views.buttonSpace.add($.__views.addDAS);
    $.__views.addShort = Ti.UI.createButton({
        color: "#ffffff",
        font: {
            fontSize: "30sp"
        },
        backgroundColor: "#0066FF",
        width: "60sp",
        height: "60sp",
        borderRadius: "30sp",
        zIndex: 1,
        bottom: 0,
        opacity: 0,
        title: "+",
        id: "addShort"
    });
    $.__views.buttonSpace.add($.__views.addShort);
    $.__views.noInfoView = Ti.UI.createView({
        visible: false,
        id: "noInfoView"
    });
    $.__views.tempnomames.add($.__views.noInfoView);
    $.__views.__alloyId83 = Ti.UI.createLabel({
        text: "No exsisten registros",
        id: "__alloyId83"
    });
    $.__views.noInfoView.add($.__views.__alloyId83);
    $.__views.connectionError = Ti.UI.createView({
        visible: false,
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        top: 0,
        zIndex: 2,
        id: "connectionError"
    });
    $.__views.tempnomames.add($.__views.connectionError);
    $.__views.__alloyId84 = Ti.UI.createView({
        layout: "vertical",
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        id: "__alloyId84"
    });
    $.__views.connectionError.add($.__views.__alloyId84);
    $.__views.__alloyId85 = Ti.UI.createLabel({
        text: "Hubo un error en la conección",
        id: "__alloyId85"
    });
    $.__views.__alloyId84.add($.__views.__alloyId85);
    $.__views.reintentar = Ti.UI.createButton({
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        title: "Reintentar",
        id: "reintentar"
    });
    $.__views.__alloyId84.add($.__views.reintentar);
    $.__views.tab1 = Ti.UI.createTab({
        window: $.__views.tempnomames,
        id: "tab1",
        title: "Categorias"
    });
    $.__views.tab1 && $.addTopLevelView($.__views.tab1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var idPaciente = arguments[0].idPatient;
    var dataArrayCatego = [];
    var buttonToggle = false;
    getTodoList(idPaciente);
    $.activityIndicator.show();
    loadData();
    $.addDAS.addEventListener("click", function() {
        Alloy.createController("DASInstrument", {
            idPatient: idPaciente
        }).getView();
    });
    $.addShort.addEventListener("click", function() {
        Alloy.createController("respirationGame", {
            idPatient: idPaciente
        }).getView();
    });
    $.chartWebView.addEventListener("load", function() {
        $.chartWebView.evalJS("crearGrafica(" + JSON.stringify(dataArrayCatego) + ")");
    });
    $.reintentar.addEventListener("click", function() {
        loadData();
    });
    $.expandButtons.addEventListener("click", function() {
        if (false == buttonToggle) {
            var m = Ti.UI.create2DMatrix({
                rotate: 45
            });
            var a1 = Ti.UI.createAnimation();
            a1.transform = m;
            a1.duration = 200;
            $.expandButtons.animate(a1);
            $.buttonBackground.setHeight(Titanium.UI.FILL);
            $.buttonBackground.setWidth(Titanium.UI.FILL);
            $.buttonBackground.show();
            $.buttonBackground.animate({
                opacity: ".5",
                duration: 200
            });
            $.addShort.animate({
                bottom: "80sp",
                opacity: "1",
                duration: 200
            });
            $.addDAS.animate({
                bottom: "160sp",
                opacity: "1",
                duration: 200
            }, function() {
                buttonToggle = true;
            });
        } else {
            var m = Ti.UI.create2DMatrix({
                rotate: 0
            });
            var a1 = Ti.UI.createAnimation();
            a1.transform = m;
            a1.duration = 200;
            $.expandButtons.animate(a1);
            $.buttonBackground.animate({
                opacity: "0",
                duration: 200
            }, function() {
                $.buttonBackground.setHeight(0);
                $.buttonBackground.setWidth(0);
                $.buttonBackground.hide();
            });
            $.addShort.animate({
                bottom: "0",
                opacity: "0",
                duration: 200
            });
            $.addDAS.animate({
                bottom: "0",
                opacity: "0",
                duration: 200
            }, function() {
                buttonToggle = false;
            });
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;