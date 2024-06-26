// @ts-nocheck
sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    '../model/InvoicesFormatter',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator'
], 
/**
 * @param {type sap.ui.core.mvc.Controller} Controller 
 * @param {type sap.ui.model.json.JSONModel} JSONModel 
 * @param {type sap.ui.model.Filter} Filter 
 * @param {type sap.ui.model.FilterOperator} FilterOperator
 */
function(Controller, JSONModel, InvoicesFormatter, Filter, FilterOperator){
    return Controller.extend("alfa02.SAPUI5.controller.InvoicesList", {
        
        formatter: InvoicesFormatter,

        onInit: function () {
            var oViewModel = new JSONModel({
                usd: "USD",
                eur: "EUR"
            });
            this.getView().setModel(oViewModel, "currency");
        },
        onFilterInvoices: function (oEvent) {
            const aFilter = [];
            const sQuery = oEvent.getParameter("query");
            if (sQuery){
                aFilter.push( new Filter("ProductName", FilterOperator.Contains, sQuery));
            };
            const oList = this.byId("invoiceList");
            const oBinding = oList.getBinding("items");
            oBinding.filter(aFilter);
        },
        navigateToDetails: function (oEvent){
            const oItem = oEvent.getSource();
            const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("Details", {
                invoicePath: window.encodeURIComponent(oItem.getBindingContext("northwind").getPath().substr(1))
            });
        }
    });
});