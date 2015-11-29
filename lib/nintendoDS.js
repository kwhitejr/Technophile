module.exports = NintendoDS;

var GameConsole = require("./gameConsole.js");
var WebBrowser = require("./webBrowser.js");
// var extend = require("./extend.js");

function NintendoDS() {

}
GameConsole.call(NintendoDS.prototype, "Nintendo DS");
WebBrowser.call(NintendoDS.prototype);

// extend(NintendoDS.prototype, GameConsole.prototype);
// extend(NintendoDS.prototype, WebBrowser.prototype);