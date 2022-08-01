"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCode = void 0;
function generateCode(template, data) {
    return template.replace(/\{\{(?<path>[\w+\.*]+)\}\}/gim, (value) => { var _a; return (_a = extractData(value.replace('{{', '').replace('}}', ''), data)) !== null && _a !== void 0 ? _a : value; });
}
exports.generateCode = generateCode;
function extractData(key, data) {
    var _a;
    if (key in data)
        return String(data[key]);
    if (key.includes('.')) {
        return extractData(key.split('.').slice(1).join('.'), data[(_a = key.split('.').pop()) !== null && _a !== void 0 ? _a : 'notFound']);
    }
    else {
        return null;
    }
}
//# sourceMappingURL=code-gen.js.map