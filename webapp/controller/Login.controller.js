sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], function (Controller) {
    "use strict";
  
    return Controller.extend("project4.controller.Login", {
      onLogin: function () {
        const username = this.byId("usernamelogin").getValue();
        const password = this.byId("passwordlogin").getValue();
        
        // Add your auth logic here
        if (username && password) {
          sap.m.MessageToast.show("Logged in as " + username);
          
          // Navigate to Home route after successful login
          this.getOwnerComponent().getRouter().navTo("Home");
        } else {
          sap.m.MessageToast.show("Please enter credentials");
        }
      },
  
      onNavigateToSignup: function () {
        this.getOwnerComponent().getRouter().navTo("Signup");
      }
    });
  });