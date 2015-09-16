function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function insertData(idPaciente) {
        if ("" != $.question1.value && null != $.question1.value) {
            var request = Ti.Network.createHTTPClient({
                onload: function() {
                    alert("Gracias por llenar el Diario!");
                    $.tempaversijala.close();
                },
                onerror: function(e) {
                    Ti.API.debug(e.error);
                    $.dialogError.show();
                },
                timeout: 3e3
            });
            request.open("POST", "http://app.bluecoreservices.com/webservices/addDAS-A.php");
            var params = {
                id: idPaciente,
                question1: $.question1.value,
                question2: $.question2.value,
                question3: $.question3.value,
                question4: $.question4.value,
                question5: $.question5.value,
                question6: $.question6.value,
                question7: $.question7.value,
                question8: $.question8.value
            };
            request.send(params);
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "DASInstrument";
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
    $.__views.tempaversijala = Ti.UI.createWindow({
        id: "tempaversijala"
    });
    $.__views.tempaversijala && $.addTopLevelView($.__views.tempaversijala);
    $.__views.scrollView = Ti.UI.createScrollView({
        layout: "vertical",
        id: "scrollView",
        showVerticalScrollIndicator: "true",
        showHorizontalScrollIndicator: "false",
        zIndex: "1"
    });
    $.__views.tempaversijala.add($.__views.scrollView);
    $.__views.__alloyId0 = Ti.UI.createView({
        layout: "vertical",
        top: "20sp",
        left: "10sp",
        right: "10sp",
        height: Titanium.UI.SIZE,
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 5,
        id: "__alloyId0"
    });
    $.__views.scrollView.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        height: Titanium.UI.SIZE,
        top: "30sp",
        bottom: "10sp",
        left: "10sp",
        right: "10sp",
        font: {
            fontSize: "20sp"
        },
        textAlign: "left",
        zIndex: 1,
        text: "Durante las últimas 24 horas, ¿cuánta ansiedad ha sentido en promedio?",
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.question1 = Ti.UI.createSlider({
        left: "10sp",
        right: "10sp",
        bottom: "10sp",
        min: 0,
        max: 10,
        value: "5",
        zIndex: 2,
        id: "question1"
    });
    $.__views.__alloyId0.add($.__views.question1);
    $.__views.__alloyId2 = Ti.UI.createView({
        bottom: "20sp",
        id: "__alloyId2"
    });
    $.__views.__alloyId0.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        left: "5sp",
        width: "20%",
        bottom: "30sp",
        font: {
            fontSize: "12sp"
        },
        textAlign: "center",
        text: "Sin ansiedad",
        id: "__alloyId3"
    });
    $.__views.__alloyId2.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        width: "20%",
        font: {
            fontSize: "12sp"
        },
        textAlign: "center",
        text: "Ansiedad moderada",
        id: "__alloyId4"
    });
    $.__views.__alloyId2.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        right: "5sp",
        width: "20%",
        font: {
            fontSize: "12sp"
        },
        textAlign: "center",
        text: "Ansiedad extrema",
        id: "__alloyId5"
    });
    $.__views.__alloyId2.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createView({
        layout: "vertical",
        top: "20sp",
        left: "10sp",
        right: "10sp",
        height: Titanium.UI.SIZE,
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 5,
        id: "__alloyId6"
    });
    $.__views.scrollView.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        height: Titanium.UI.SIZE,
        top: "30sp",
        bottom: "10sp",
        left: "10sp",
        right: "10sp",
        font: {
            fontSize: "20sp"
        },
        textAlign: "left",
        zIndex: 1,
        text: "Durante las últimas 24 horas, ¿cuánta ansiedad ha sentido en su momento de mayor ansiedad?",
        id: "__alloyId7"
    });
    $.__views.__alloyId6.add($.__views.__alloyId7);
    $.__views.question2 = Ti.UI.createSlider({
        left: "10sp",
        right: "10sp",
        bottom: "10sp",
        min: 0,
        max: 10,
        value: "5",
        zIndex: 2,
        id: "question2"
    });
    $.__views.__alloyId6.add($.__views.question2);
    $.__views.__alloyId8 = Ti.UI.createView({
        bottom: "20sp",
        id: "__alloyId8"
    });
    $.__views.__alloyId6.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createLabel({
        left: "5sp",
        width: "20%",
        bottom: "30sp",
        font: {
            fontSize: "12sp"
        },
        textAlign: "center",
        text: "Sin ansiedad",
        id: "__alloyId9"
    });
    $.__views.__alloyId8.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createLabel({
        width: "20%",
        font: {
            fontSize: "12sp"
        },
        textAlign: "center",
        text: "Ansiedad moderada",
        id: "__alloyId10"
    });
    $.__views.__alloyId8.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        right: "5sp",
        width: "20%",
        font: {
            fontSize: "12sp"
        },
        textAlign: "center",
        text: "Ansiedad extrema",
        id: "__alloyId11"
    });
    $.__views.__alloyId8.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createView({
        layout: "vertical",
        top: "20sp",
        left: "10sp",
        right: "10sp",
        height: Titanium.UI.SIZE,
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 5,
        id: "__alloyId12"
    });
    $.__views.scrollView.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createLabel({
        height: Titanium.UI.SIZE,
        top: "30sp",
        bottom: "10sp",
        left: "10sp",
        right: "10sp",
        font: {
            fontSize: "20sp"
        },
        textAlign: "left",
        zIndex: 1,
        text: "Durante las últimas 24 horas, ¿cuánta preocupación ha sentido en promedio?",
        id: "__alloyId13"
    });
    $.__views.__alloyId12.add($.__views.__alloyId13);
    $.__views.question3 = Ti.UI.createSlider({
        left: "10sp",
        right: "10sp",
        bottom: "10sp",
        min: 0,
        max: 10,
        value: "5",
        zIndex: 2,
        id: "question3"
    });
    $.__views.__alloyId12.add($.__views.question3);
    $.__views.__alloyId14 = Ti.UI.createView({
        bottom: "20sp",
        id: "__alloyId14"
    });
    $.__views.__alloyId12.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createLabel({
        left: "5sp",
        width: "20%",
        bottom: "30sp",
        font: {
            fontSize: "12sp"
        },
        textAlign: "center",
        text: "Sin preocupación",
        id: "__alloyId15"
    });
    $.__views.__alloyId14.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        width: "20%",
        font: {
            fontSize: "12sp"
        },
        textAlign: "center",
        text: "Preocupación moderada",
        id: "__alloyId16"
    });
    $.__views.__alloyId14.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        right: "5sp",
        width: "20%",
        font: {
            fontSize: "12sp"
        },
        textAlign: "center",
        text: "Preocupación extrema",
        id: "__alloyId17"
    });
    $.__views.__alloyId14.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createView({
        layout: "vertical",
        top: "20sp",
        left: "10sp",
        right: "10sp",
        height: Titanium.UI.SIZE,
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 5,
        id: "__alloyId18"
    });
    $.__views.scrollView.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createLabel({
        height: Titanium.UI.SIZE,
        top: "30sp",
        bottom: "10sp",
        left: "10sp",
        right: "10sp",
        font: {
            fontSize: "20sp"
        },
        textAlign: "left",
        zIndex: 1,
        text: "Durante las últimas 24 horas, ¿con qué frecuencia se sintió tenso (cuando estaba despierto)?",
        id: "__alloyId19"
    });
    $.__views.__alloyId18.add($.__views.__alloyId19);
    $.__views.question4 = Ti.UI.createSlider({
        left: "10sp",
        right: "10sp",
        bottom: "10sp",
        min: 0,
        max: 10,
        value: "5",
        zIndex: 2,
        id: "question4"
    });
    $.__views.__alloyId18.add($.__views.question4);
    $.__views.__alloyId20 = Ti.UI.createView({
        bottom: "20sp",
        id: "__alloyId20"
    });
    $.__views.__alloyId18.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createLabel({
        left: "5sp",
        width: "20%",
        bottom: "30sp",
        font: {
            fontSize: "12sp"
        },
        textAlign: "center",
        text: "Nunca",
        id: "__alloyId21"
    });
    $.__views.__alloyId20.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createLabel({
        width: "20%",
        font: {
            fontSize: "12sp"
        },
        textAlign: "center",
        text: "Como la mitad de las veces",
        id: "__alloyId22"
    });
    $.__views.__alloyId20.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createLabel({
        right: "5sp",
        width: "20%",
        font: {
            fontSize: "12sp"
        },
        textAlign: "center",
        text: "Siempre",
        id: "__alloyId23"
    });
    $.__views.__alloyId20.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createView({
        layout: "vertical",
        top: "20sp",
        left: "10sp",
        right: "10sp",
        height: Titanium.UI.SIZE,
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 5,
        id: "__alloyId24"
    });
    $.__views.scrollView.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createLabel({
        height: Titanium.UI.SIZE,
        top: "30sp",
        bottom: "10sp",
        left: "10sp",
        right: "10sp",
        font: {
            fontSize: "20sp"
        },
        textAlign: "left",
        zIndex: 1,
        text: "Durante las últimas 24 horas, ¿cuánta irritabilidad sintió en su momento de mayor irritabilidad?",
        id: "__alloyId25"
    });
    $.__views.__alloyId24.add($.__views.__alloyId25);
    $.__views.question5 = Ti.UI.createSlider({
        left: "10sp",
        right: "10sp",
        bottom: "10sp",
        min: 0,
        max: 10,
        value: "5",
        zIndex: 2,
        id: "question5"
    });
    $.__views.__alloyId24.add($.__views.question5);
    $.__views.__alloyId26 = Ti.UI.createView({
        bottom: "20sp",
        id: "__alloyId26"
    });
    $.__views.__alloyId24.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createLabel({
        left: "5sp",
        width: "20%",
        bottom: "30sp",
        font: {
            fontSize: "12sp"
        },
        textAlign: "center",
        text: "Sin irritabilidad",
        id: "__alloyId27"
    });
    $.__views.__alloyId26.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createLabel({
        width: "20%",
        font: {
            fontSize: "12sp"
        },
        textAlign: "center",
        text: "Irritabilidad moderada",
        id: "__alloyId28"
    });
    $.__views.__alloyId26.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createLabel({
        right: "5sp",
        width: "20%",
        font: {
            fontSize: "12sp"
        },
        textAlign: "center",
        text: "Irritabilidad extrema",
        id: "__alloyId29"
    });
    $.__views.__alloyId26.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createView({
        layout: "vertical",
        top: "20sp",
        left: "10sp",
        right: "10sp",
        height: Titanium.UI.SIZE,
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 5,
        id: "__alloyId30"
    });
    $.__views.scrollView.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createLabel({
        height: Titanium.UI.SIZE,
        top: "30sp",
        bottom: "10sp",
        left: "10sp",
        right: "10sp",
        font: {
            fontSize: "20sp"
        },
        textAlign: "left",
        zIndex: 1,
        text: "Durante las últimas 24 horas, ¿con qué frecuencia se sintió tranquilo o relajado (cuando estaba despierto)?",
        id: "__alloyId31"
    });
    $.__views.__alloyId30.add($.__views.__alloyId31);
    $.__views.question6 = Ti.UI.createSlider({
        left: "10sp",
        right: "10sp",
        bottom: "10sp",
        min: 0,
        max: 10,
        value: "5",
        zIndex: 2,
        id: "question6"
    });
    $.__views.__alloyId30.add($.__views.question6);
    $.__views.__alloyId32 = Ti.UI.createView({
        bottom: "20sp",
        id: "__alloyId32"
    });
    $.__views.__alloyId30.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createLabel({
        left: "5sp",
        width: "20%",
        bottom: "30sp",
        font: {
            fontSize: "12sp"
        },
        textAlign: "center",
        text: "Nunca",
        id: "__alloyId33"
    });
    $.__views.__alloyId32.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createLabel({
        width: "20%",
        font: {
            fontSize: "12sp"
        },
        textAlign: "center",
        text: "Como la mitad de las veces",
        id: "__alloyId34"
    });
    $.__views.__alloyId32.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createLabel({
        right: "5sp",
        width: "20%",
        font: {
            fontSize: "12sp"
        },
        textAlign: "center",
        text: "Siempre",
        id: "__alloyId35"
    });
    $.__views.__alloyId32.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createView({
        layout: "vertical",
        top: "20sp",
        left: "10sp",
        right: "10sp",
        height: Titanium.UI.SIZE,
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 5,
        id: "__alloyId36"
    });
    $.__views.scrollView.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createLabel({
        height: Titanium.UI.SIZE,
        top: "30sp",
        bottom: "10sp",
        left: "10sp",
        right: "10sp",
        font: {
            fontSize: "20sp"
        },
        textAlign: "left",
        zIndex: 1,
        text: "Durante las últimas 24 horas, ¿con qué frecuencia tuvo dificultades para concentrarse o enfocarse en lo que estaba haciendo (cuando estaba despierto)?",
        id: "__alloyId37"
    });
    $.__views.__alloyId36.add($.__views.__alloyId37);
    $.__views.question7 = Ti.UI.createSlider({
        left: "10sp",
        right: "10sp",
        bottom: "10sp",
        min: 0,
        max: 10,
        value: "5",
        zIndex: 2,
        id: "question7"
    });
    $.__views.__alloyId36.add($.__views.question7);
    $.__views.__alloyId38 = Ti.UI.createView({
        bottom: "20sp",
        id: "__alloyId38"
    });
    $.__views.__alloyId36.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createLabel({
        left: "5sp",
        width: "20%",
        bottom: "30sp",
        font: {
            fontSize: "12sp"
        },
        textAlign: "center",
        text: "Nunca",
        id: "__alloyId39"
    });
    $.__views.__alloyId38.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createLabel({
        width: "20%",
        font: {
            fontSize: "12sp"
        },
        textAlign: "center",
        text: "Como la mitad de las veces",
        id: "__alloyId40"
    });
    $.__views.__alloyId38.add($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createLabel({
        right: "5sp",
        width: "20%",
        font: {
            fontSize: "12sp"
        },
        textAlign: "center",
        text: "Siempre",
        id: "__alloyId41"
    });
    $.__views.__alloyId38.add($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createView({
        layout: "vertical",
        top: "20sp",
        left: "10sp",
        right: "10sp",
        height: Titanium.UI.SIZE,
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 5,
        id: "__alloyId42"
    });
    $.__views.scrollView.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createLabel({
        height: Titanium.UI.SIZE,
        top: "30sp",
        bottom: "10sp",
        left: "10sp",
        right: "10sp",
        font: {
            fontSize: "20sp"
        },
        textAlign: "left",
        zIndex: 1,
        text: "¿Cuánta dificultad tuvo para quedarse dormido anoche?",
        id: "__alloyId43"
    });
    $.__views.__alloyId42.add($.__views.__alloyId43);
    $.__views.question8 = Ti.UI.createSlider({
        left: "10sp",
        right: "10sp",
        bottom: "10sp",
        min: 0,
        max: 10,
        value: "5",
        zIndex: 2,
        id: "question8"
    });
    $.__views.__alloyId42.add($.__views.question8);
    $.__views.__alloyId44 = Ti.UI.createView({
        bottom: "20sp",
        id: "__alloyId44"
    });
    $.__views.__alloyId42.add($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createLabel({
        left: "5sp",
        width: "20%",
        bottom: "30sp",
        font: {
            fontSize: "12sp"
        },
        textAlign: "center",
        text: "Sin dificultad",
        id: "__alloyId45"
    });
    $.__views.__alloyId44.add($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createLabel({
        width: "20%",
        font: {
            fontSize: "12sp"
        },
        textAlign: "center",
        text: "Dificultad moderada",
        id: "__alloyId46"
    });
    $.__views.__alloyId44.add($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createLabel({
        right: "5sp",
        width: "20%",
        font: {
            fontSize: "12sp"
        },
        textAlign: "center",
        text: "Dificultad extrema",
        id: "__alloyId47"
    });
    $.__views.__alloyId44.add($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createView({
        top: "30sp",
        bottom: "30sp",
        left: "10sp",
        right: "10sp",
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        font: {
            fontSize: "12sp"
        },
        textAlign: "center",
        id: "__alloyId48"
    });
    $.__views.scrollView.add($.__views.__alloyId48);
    $.__views.sendDASA = Ti.UI.createButton({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        font: {
            fontSize: "12sp"
        },
        textAlign: "center",
        title: "Enviar",
        id: "sendDASA"
    });
    $.__views.__alloyId48.add($.__views.sendDASA);
    $.__views.__alloyId49 = Ti.UI.createView({
        id: "__alloyId49"
    });
    $.__views.__alloyId50 = Ti.UI.createLabel({
        text: "Hubo un error en la conexión",
        id: "__alloyId50"
    });
    $.__views.__alloyId49.add($.__views.__alloyId50);
    var __alloyId52 = [];
    __alloyId52.push("Reintentar");
    __alloyId52.push("Cancelar");
    $.__views.dialogError = Ti.UI.createAlertDialog({
        androidView: $.__views.__alloyId49,
        buttonNames: __alloyId52,
        id: "dialogError",
        title: "Error Conexión",
        cancel: "1"
    });
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.tempaversijala.open();
    var idPaciente = arguments[0].idPatient;
    $.sendDASA.addEventListener("click", function() {
        insertData(idPaciente);
    });
    $.dialogError.addEventListener("click", function(ev) {
        0 == ev.index ? insertData(idPaciente) : 1 == ev.index;
    });
    $.question1.addEventListener("stop", function(e) {
        $.question1.value = e.value < 1.5 ? 1 : e.value < 2.5 ? 2 : e.value < 3.5 ? 3 : e.value < 4.5 ? 4 : e.value < 5.5 ? 5 : e.value < 6.5 ? 6 : e.value < 7.5 ? 7 : e.value < 8.5 ? 8 : e.value < 9.5 ? 9 : 10;
    });
    $.question2.addEventListener("stop", function(e) {
        $.question2.value = e.value < 1.5 ? 1 : e.value < 2.5 ? 2 : e.value < 3.5 ? 3 : e.value < 4.5 ? 4 : e.value < 5.5 ? 5 : e.value < 6.5 ? 6 : e.value < 7.5 ? 7 : e.value < 8.5 ? 8 : e.value < 9.5 ? 9 : 10;
    });
    $.question3.addEventListener("stop", function(e) {
        $.question3.value = e.value < 1.5 ? 1 : e.value < 2.5 ? 2 : e.value < 3.5 ? 3 : e.value < 4.5 ? 4 : e.value < 5.5 ? 5 : e.value < 6.5 ? 6 : e.value < 7.5 ? 7 : e.value < 8.5 ? 8 : e.value < 9.5 ? 9 : 10;
    });
    $.question4.addEventListener("stop", function(e) {
        $.question4.value = e.value < 1.5 ? 1 : e.value < 2.5 ? 2 : e.value < 3.5 ? 3 : e.value < 4.5 ? 4 : e.value < 5.5 ? 5 : e.value < 6.5 ? 6 : e.value < 7.5 ? 7 : e.value < 8.5 ? 8 : e.value < 9.5 ? 9 : 10;
    });
    $.question5.addEventListener("stop", function(e) {
        $.question5.value = e.value < 1.5 ? 1 : e.value < 2.5 ? 2 : e.value < 3.5 ? 3 : e.value < 4.5 ? 4 : e.value < 5.5 ? 5 : e.value < 6.5 ? 6 : e.value < 7.5 ? 7 : e.value < 8.5 ? 8 : e.value < 9.5 ? 9 : 10;
    });
    $.question6.addEventListener("stop", function(e) {
        $.question6.value = e.value < 1.5 ? 1 : e.value < 2.5 ? 2 : e.value < 3.5 ? 3 : e.value < 4.5 ? 4 : e.value < 5.5 ? 5 : e.value < 6.5 ? 6 : e.value < 7.5 ? 7 : e.value < 8.5 ? 8 : e.value < 9.5 ? 9 : 10;
    });
    $.question7.addEventListener("stop", function(e) {
        $.question7.value = e.value < 1.5 ? 1 : e.value < 2.5 ? 2 : e.value < 3.5 ? 3 : e.value < 4.5 ? 4 : e.value < 5.5 ? 5 : e.value < 6.5 ? 6 : e.value < 7.5 ? 7 : e.value < 8.5 ? 8 : e.value < 9.5 ? 9 : 10;
    });
    $.question8.addEventListener("stop", function(e) {
        $.question8.value = e.value < 1.5 ? 1 : e.value < 2.5 ? 2 : e.value < 3.5 ? 3 : e.value < 4.5 ? 4 : e.value < 5.5 ? 5 : e.value < 6.5 ? 6 : e.value < 7.5 ? 7 : e.value < 8.5 ? 8 : e.value < 9.5 ? 9 : 10;
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;