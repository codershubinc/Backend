"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json({
    limit: '16kb'
}));
app.use(express_1.default.urlencoded({
    extended: true,
    limit: "16kb"
}));
app.use(express_1.default.static('public'));
function helloworld() {
    return 'hello world test';
}
app.use('/', helloworld);
const randomImage_routes_js_1 = __importDefault(require("./src/routes/randomImage/randomImage.routes.js"));
app.use('/v0.1/random_image', randomImage_routes_js_1.default);
const randomUser_routes_js_1 = __importDefault(require("./src/routes/randomUser/randomUser.routes.js"));
app.use('/v0.1/random_user', randomUser_routes_js_1.default);
app.listen(3000, () => {
    console.log('server is running on port 3000');
});
exports.default = app;
