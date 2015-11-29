module.exports = SmartWatch;

var Watch = require("./watch.js");
var Tablet = require("./tablet.js");

function SmartWatch() {

}
Watch.call(SmartWatch.prototype, "wrist");
Tablet.call(SmartWatch.prototype);
