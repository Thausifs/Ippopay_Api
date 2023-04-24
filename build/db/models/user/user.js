"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var _validator = require("validator");
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var userSchema = new _mongoose.Schema({
  email: {
    type: String
  },
  password: {
    type: String,
    unique: true
  }
});
var _default = (0, _mongoose.model)('users', userSchema);
exports["default"] = _default;