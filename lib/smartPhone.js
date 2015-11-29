module.exports = SmartPhone;

var Phone = require("./phone.js");
var Tablet = require("./tablet.js");
var GameConsole = require("./gameConsole.js");
var WebBrowser = require("./webBrowser.js");

function SmartPhone(phoneNumber) {
  this.phoneNumber = phoneNumber;
}

Phone.call(SmartPhone.prototype);
GameConsole.call(SmartPhone.prototype, "Smart Phone");
WebBrowser.call(SmartPhone.prototype);
Tablet.call(SmartPhone.prototype);