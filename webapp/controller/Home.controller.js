sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
  ], function (Controller, MessageToast) {
    "use strict";
  
    return Controller.extend("project4.controller.Home", {
      onSalesPress: function () {
        MessageToast.show("Navigating to Sales");
        // Add navigation logic here
      },
      onInventoryPress: function () {
        MessageToast.show("Navigating to Inventory");
        // Add navigation logic here
      },
      onReportsPress: function () {
        MessageToast.show("Navigating to Reports");
        // Add navigation logic here
      },
      onSettingsPress: function () {
        MessageToast.show("Navigating to Settings");
        // Add navigation logic here
      }
    });
  });