var args = arguments[0] || {};

var idPaciente = arguments[0].idPatient;

$.grupodeTabs.open();

var tab1 = Alloy.createController('categoList', { idPatient: idPaciente }).getView();
var tab2 = Alloy.createController('DASList', { idPatient: idPaciente }).getView();

$.grupodeTabs.addTab(tab1);
$.grupodeTabs.addTab(tab2);
