"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const envs_1 = require("./config/envs");
app_1.default.listen(envs_1.PORT, () => {
    console.log(`Servidor corriendo en: http://localhost:${envs_1.PORT}`);
});
