"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const fileTemplate = (0, fs_1.readFileSync)(path_1.default.resolve(__dirname, '../templates/file.txt'), 'utf-8');
const packTemplate = (0, fs_1.readFileSync)(path_1.default.resolve(__dirname, '../templates/pack.txt'), 'utf-8');
const serviceTemplate = (0, fs_1.readFileSync)(path_1.default.resolve(__dirname, '../templates/service.txt'), 'utf-8');
const fieldTemplate = (0, fs_1.readFileSync)(path_1.default.resolve(__dirname, '../templates/field.txt'), 'utf-8');
exports.default = {
    fileTemplate,
    packTemplate,
    serviceTemplate,
    fieldTemplate,
};
//# sourceMappingURL=templates.js.map