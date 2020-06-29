"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVscodeLang = void 0;
var __1 = require("..");
exports.getVscodeLang = function (vscodeLangConfig) {
    var lang = __1.DEFAULT_LANG;
    if (vscodeLangConfig) {
        var locale = JSON.parse(vscodeLangConfig).locale;
        lang = locale || lang;
    }
    return lang;
};
//# sourceMappingURL=getVscodeLang.js.map