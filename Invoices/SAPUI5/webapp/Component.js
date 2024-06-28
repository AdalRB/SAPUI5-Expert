// @ts-nocheck
sap.ui.define([
    "sap/ui/core/UIComponent",
    "alfa02/SAPUI5/model/models",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog",
    "sap/ui/Device"
],
    /**
     * @param {typeof sap.ui.core.UIComponent} UIComponent
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     * @param {typeof sap.ui.Device} Device
     */
    function (UIComponent, models, ResourceModel, HelloDialog, Device) {

        return UIComponent.extend("alfa02.SAPUI5.Component", {

            metadata: {
                manifest : "json"
            },

            init: function () {
                //call the init function of the parent
                UIComponent.prototype.init.apply(this, arguments);

                // set data model on the view
                this.setModel(models.createRecipient());
                // set i18n model on the view
                // var i18nModel = new ResourceModel({ bundleName: "alfa02.SAPUI5.i18n.i18n" });
                // this.setModel(i18nModel, "i18n");

                //set the device model
                this.setModel(models.createDeviceModel(), "device");

                this._helloDialog = new HelloDialog(this.getRootControl());

                //Create the views based on the uri
                this.getRouter().initialize();
            },

            exit: function(){
                this._helloDialog.destroy();
                delete this._helloDialog;
            },

            openHelloDialog: function(){
                this._helloDialog.open();
            }, 

            getContentDensityClass: function(){
                if (!Device.support.touch){
                    this._sContentDensityClass = "sapUiSizeCompact"
                } else{
                    this._sContentDensityClass = "sapUiSizeCozy"
                }
                return this._sContentDensityClass;
            }

        });

    });