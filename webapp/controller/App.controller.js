sap.ui.define([
  'sap/ui/core/mvc/Controller'
], function (Controller) {
  'use strict';

  return Controller.extend('opensap.movies.controller.App', {
    onInit: function () {

    },

    onPress: function (sValue) {
      sap.ui.require(['sap/m/MessageToast'], function (oMessage) {
        oMessage.show('Searching...' + ' ' + sValue);
      });
    }
  });
});
