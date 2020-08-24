sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"supplier/SupplierApp/model/models",
	"sap/ui/model/json/JSONModel",
	"sap/f/library"

], function (UIComponent, Device, models, JSONModel, firoriLibrary) {
	"use strict";

	return UIComponent.extend("supplier.SupplierApp.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {

			var oModel,
				oRouter;
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			oModel = new JSONModel();
			this.setModel(oModel, "lay");

			// enable routing
			oRouter = this.getRouter();
			oRouter.attachBeforeRouteMatched(this._onBeforeRouteMatched, this);

			oRouter.initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		},
		_onBeforeRouteMatched: function (oEvent) {
			var oModel = this.getModel("lay"),
				sLayout = oEvent.getParameters().arguments.layout;
			if (!sLayout) {

				sLayout = firoriLibrary.LayoutType.OneColumn;
			}
			oModel.setProperty("/layout", sLayout);

		}

	});
});