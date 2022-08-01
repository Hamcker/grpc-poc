"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const code_gen_1 = require("./code-gen");
const fieldTypes_1 = __importDefault(require("./fieldTypes"));
const templates_1 = __importDefault(require("./templates"));
const FIELD_COUNT = 40;
const fields = [];
for (let i = 0; i <= FIELD_COUNT; i++) {
    let fieldType = fieldTypes_1.default[i % fieldTypes_1.default.length];
    fieldType = fieldType.replace('<SELF>', 'ActualData4');
    const field = (0, code_gen_1.generateCode)(templates_1.default.fieldTemplate, {
        type: fieldType,
        name: `Field4${i}`,
        fseq: i + 1,
    });
    fields.push(field);
}
const packs = (0, code_gen_1.generateCode)(templates_1.default.packTemplate, { seq: 4, fields: fields.join('\n  ') });
const services = (0, code_gen_1.generateCode)(templates_1.default.serviceTemplate, { seq: 4 });
const file = (0, code_gen_1.generateCode)(templates_1.default.fileTemplate, { services, packs });
(0, fs_1.writeFileSync)('../contracts/data-generator.proto', file, 'utf-8');
//# sourceMappingURL=index.js.map