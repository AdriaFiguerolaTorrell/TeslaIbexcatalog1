'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.climate_state = function climate_state (req, res, next) {
  Default.climate_state(req.swagger.params, res, next);
};

module.exports.drive_state = function drive_state (req, res, next) {
  Default.drive_state(req.swagger.params, res, next);
};

module.exports.set_temp = function set_temp (req, res, next) {
  Default.set_temp(req.swagger.params, res, next);
};

module.exports.vehicleGET = function vehicleGET (req, res, next) {
  Default.vehicleGET(req.swagger.params, res, next);
};
