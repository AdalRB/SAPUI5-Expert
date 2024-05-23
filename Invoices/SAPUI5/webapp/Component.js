// @ts-nocheck
sap.ui.define([
    "sap/ui/core/UIComponent",
    "alfa02/SAPUI5/model/models",
    "sap/ui/model/resource/ResourceModel"
],
    /**
     * @param {typeof sap.ui.core.UIComponent} UIComponent
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */
    function (UIComponent, models, ResourceModel) {

        return UIComponent.extend("alfa02.SAPUI5.Component", {

            metadata: {
                manifest : "json"
                // "rootView": {
                //     "viewName" : "alfa02.SAPUI5.view.App",
                //     "type" : "XML",
                //     "async" : true,
                //     "id" : "app"
                // }
            },

            init: function () {
                //call the init function of the parent
                UIComponent.prototype.init.apply(this, arguments);

                // set data model on the view
                this.setModel(models.createRecipient());
                // set i18n model on the view
                var i18nModel = new ResourceModel({ bundleName: "alfa02.SAPUI5.i18n.i18n" });
                this.setModel(i18nModel, "i18n");
            }

        });

    });