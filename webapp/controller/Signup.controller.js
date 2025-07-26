sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
  ], function(Controller, MessageToast) {
    "use strict";
  
    return Controller.extend("project4.controller.Signup", {
      onSignup: function () {
        const username = this.byId("username").getValue();
        const email = this.byId("emailsignup").getValue();
        const password = this.byId("passwordsignup").getValue();
        const confirmPassword = this.byId("confirmPassword").getValue();
  
        if (!username || !email || !password || !confirmPassword) {
          MessageToast.show("Please fill all fields");
          return;
        }
  
        if (password !== confirmPassword) {
          MessageToast.show("Passwords do not match");
          return;
        }
  
        MessageToast.show("User " + username + " registered!");
      },
  
      onNavigateToLogin: function () {
        this.getOwnerComponent().getRouter().navTo("Login");
      }
    });
  });