// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    //"sap/m/MessageToast"
],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * 
     */
    function (Controller) {
        "use strict";
        return Controller.extend("alfa02.SAPUI5.controller.App", {
            onInit: function() {
                
            },

            onOpenDialogHeader: function() {
                this.getOwnerComponent().openHelloDialog();
            }
            // onShowHello: function () {
            //     // read text from i18n model
            //     var oBundle = this.getView().getModel("i18n").getResourceBundle();
            //     // read property from data model
            //     var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            //     var sMsg = oBundle.getText("helloMsg",[sRecipient]);
            //     MessageToast.show(sMsg);
            // }
        });

    });