sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("supplier.SupplierApp.controller.SupplierDetail", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf supplier.SupplierApp.view.SupplierDetail
		 */
		onInit: function () {
			var oOwnerComponent = this.getOwnerComponent();
			this.oRouter = oOwnerComponent.getRouter();
			this.oModel = oOwnerComponent.getModel();
			this.oRouter.getRoute("master").attachPatternMatched(this._onSupplierMatched, this);
			this.oRouter.getRoute("detail").attachPatternMatched(this._onSupplierMatched, this);

		},

		_onSupplierMatched: function (oEvent) {
			this._supplier = oEvent.getParameter("arguments").supplier || this._supplier || "0";
			this.byId("productsTable").bindItems({
				path: "/" + this._supplier + "/Products",
				template: this.byId("productsTable").getBindingInfo("items").template
			});
			this.getView().bindElement({
				path: "/" + this._supplier
			})
		},

		onEditToggleButtonPress: function () {
			var oObjectPage = this.getView().byId("ObjectPageLayout"),
				bCurrentShowFooterState = oObjectPage.getShowFooter();

			oObjectPage.setShowFooter(!bCurrentShowFooterState);
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf supplier.SupplierApp.view.SupplierDetail
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf supplier.SupplierApp.view.SupplierDetail
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf supplier.SupplierApp.view.SupplierDetail
		 */
		onExit: function () {
			this.oRouter.getRoute("master").detachPatternMatched(this._onSupplierMatched, this);
			this.oRouter.getRoute("detail").detachPatternMatched(this._onSupplierMatched, this);

		}

	});

});