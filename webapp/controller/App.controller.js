sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("supplier.SupplierApp.controller.App", {
		onInit: function () {
			this.oOwnerComponent = this.getOwnerComponent();
			this.oRouter = this.oOwnerComponent.getRouter();
			this.oRouter.attachRouteMatched(this.onRouteMatched, this);
		},
		onRouteMatched: function (oEvent) {
			var sRouteName = oEvent.getParameter("name"),
				oArguments = oEvent.getParameter("arguments");

			this.currentRouteName = sRouteName;
			this.supplier = oArguments.supplier;

		},

		onStateChanged: function (oEvent) {
			var bIsNavigationArrow = oEvent.getParameter("isNavigationArrow"),
				sLayout = oEvent.getParameter("layoout");
			if (bIsNavigationArrow) {
				this.oRouter.navTO(this.currentRouterName, {
					layout: sLayout,
					supplier: this.supplier
				}, true);

			}

		},
		onExit: function () {
			this.oRouter.detachRouteMatched(this.onRouteMatched, this);
		}

	});
});