var qrsInteract = require('qrs-interact');
var config = require('../config/testConfig');

var qrsInstance = new qrsInteract(config.qrs);

module.exports = qrsInstance;