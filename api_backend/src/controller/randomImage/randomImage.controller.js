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
exports.RandomImageGanaratorQuery = exports.RandomImageGeneratorError = exports.RandomImageGanarator = void 0;
const randImage_1 = __importDefault(require("../../lib/func/randImage"));
const asyncHandler_1 = require("../../utils/asyncHandler");
const error_api_1 = require("../../utils/responce/api/error.api");
const responce_api_1 = require("../../utils/responce/api/responce.api");
const RandomImageGanarator = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const randomImage = randImage_1.default.Avatar({
        avatarStyle: 'auto'
    });
    const randomImageData = {
        imageUrl: randomImage,
        imageType: 'svg'
    };
    return res.status(200).json(new responce_api_1.ApiResponse(200, randomImageData));
}));
exports.RandomImageGanarator = RandomImageGanarator;
const RandomImageGeneratorError = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.status(400).json(new error_api_1.ApiError(400, 'Bad Request', [
        'Fatal Error',
        'General Access prohibited by policy'
    ]));
}));
exports.RandomImageGeneratorError = RandomImageGeneratorError;
const RandomImageGanaratorQuery = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { query } = req.params;
    if (!query) {
        return res.status(400).json(new error_api_1.ApiError(400, 'Bad Request', [
            'Fatal Error',
            'Must provide query'
        ]));
    }
    let imageType;
    if (['png',
        'jpg',
        'jpeg',
        'svg',
        'auto',].includes(query)) {
        imageType = query;
    }
    else {
        return res.status(400).json(new error_api_1.ApiError(400, 'Bad Request', [
            'Fatal Error',
            'Invalid image type'
        ]));
    }
    const randomImage = randImage_1.default.Avatar({
        avatarStyle: 'auto',
        imageType: imageType,
    });
    const randomImageData = {
        imageUrl: randomImage,
        imageType: imageType,
        query: query
    };
    return res.status(200).json(new responce_api_1.ApiResponse(200, randomImageData));
}));
exports.RandomImageGanaratorQuery = RandomImageGanaratorQuery;
