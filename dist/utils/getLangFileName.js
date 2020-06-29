"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLangFileName = void 0;
var __1 = require("..");
exports.getLangFileName = function (lang) {
    if (lang === __1.DEFAULT_LANG) {
        return 'package.nls.json';
    }
    return "package.nls." + lang + ".json";
};
//# sourceMappingURL=getLangFileName.js.map