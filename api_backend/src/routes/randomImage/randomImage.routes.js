"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const randomImage_controller_1 = require("../../controller/randomImage/randomImage.controller");
const router = (0, express_1.Router)();
router.route("/").get(randomImage_controller_1.RandomImageGanarator);
router.route("/auto").get(randomImage_controller_1.RandomImageGanarator);
router.route("/:query").get(randomImage_controller_1.RandomImageGanaratorQuery);
exports.default = router;
