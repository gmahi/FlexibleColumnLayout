function initModel() {
	var sUrl = "/northwind/V2/Odata/Odata.svc/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}