"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomBig0UserGanarator = exports.RandomBigUserGanarator = exports.RandomUserGeneratorError = exports.RandomUserGanarator = void 0;
const randImage_1 = __importDefault(require("../../lib/func/randImage"));
const userData0_1 = __importDefault(require("../../lib/func/userData0"));
const userData1_1 = __importDefault(require("../../lib/func/userData1"));
const userData2_1 = __importDefault(require("../../lib/func/userData2"));
const asyncHandler_1 = require("../../utils/asyncHandler");
const error_api_1 = require("../../utils/responce/api/error.api");
const responce_api_1 = require("../../utils/responce/api/responce.api");
const RandomUserGanarator = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const randomUser = randImage_1.default.FromAnArray(userData0_1.default);
    const randomUserData = {
        user: randomUser
    };
    return res.status(200).json(new responce_api_1.ApiResponse(200, randomUserData, 'Successfully fetched random user'));
}));
exports.RandomUserGanarator = RandomUserGanarator;
const RandomUserGeneratorError = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.status(400).json(new error_api_1.ApiError(400, 'Bad Request', [
        'Fatal Error',
        'General Access prohibited by policy'
    ]));
}));
exports.RandomUserGeneratorError = RandomUserGeneratorError;
const RandomBigUserGanarator = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const randomUser = randImage_1.default.FromAnArray(userData1_1.default);
    const randomUserData = {
        user: randomUser
    };
    return res.status(200).json(new responce_api_1.ApiResponse(200, randomUserData, 'Successfully fetched random user'));
}));
exports.RandomBigUserGanarator = RandomBigUserGanarator;
const RandomBig0UserGanarator = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const randomUser = randImage_1.default.FromAnArray(userData2_1.default);
    const randomUserData = {
        user: randomUser
    };
    return res.status(200).json(new responce_api_1.ApiResponse(200, randomUserData, 'Successfully fetched random user'));
}));
exports.RandomBig0UserGanarator = RandomBig0UserGanarator;
