"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _user = _interopRequireDefault(require("../../controllers/user/user.controller"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var AdminRouter = (0, _express.Router)();
AdminRouter.post('/register', _user["default"].register);
var _default = AdminRouter;
exports["default"] = _default;