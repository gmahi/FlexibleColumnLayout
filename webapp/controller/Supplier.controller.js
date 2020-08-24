sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/f/library'
], function (Controller, fioriLibrary) {
	"use strict";

	return Controller.extend("supplier.SupplierApp.controller.Supplier", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf supplier.SupplierApp.view.Supplier
		 */
		onInit: function () {
			this.oView = this.getView();
			this.oRouter = this.getOwnerComponent().getRouter();

		},
		onSelectionChange: function (oEvent) {
				// var oFCL = this.oView.getParent().getParent();
				// oFCL.setLayout(fioriLibrary.LayoutType.TwoColumnsMidExpanded);
				var supplierPath = oEvent.getParameter("listItem").getBindingContext().getPath();
				var supplier = supplierPath.split("/").slice(-1).pop();
				this.oRouter.navTo("detail", {
					layout: fioriLibrary.LayoutType.TwoColumnsMidExpanded,
					supplier: supplier
				});

			}
			/**
			 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
			 * (NOT before the first rendering! onInit() is used for that one!).
			 * @memberOf supplier.SupplierApp.view.Supplier
			 */
			//	onBeforeRendering: function() {
			//
			//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf supplier.SupplierApp.view.Supplier
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf supplier.SupplierApp.view.Supplier
		 */
		//	onExit: function() {
		//
		//	}

	});

});