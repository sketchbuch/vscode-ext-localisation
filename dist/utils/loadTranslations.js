"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadTranslations = exports.translations = void 0;
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var __1 = require("..");
var getLangFileName_1 = require("./getLangFileName");
exports.translations = {};
exports.loadTranslations = function (lang, extensionPath) {
    var defaultLangFile = path.join(extensionPath, getLangFileName_1.getLangFileName(__1.DEFAULT_LANG));
    var langFile = path.join(extensionPath, getLangFileName_1.getLangFileName(lang));
    var fileToLoad = defaultLangFile;
    try {
        fs.lstatSync(defaultLangFile).isFile();
    }
    catch (_a) {
        throw Error("Default translations could not be read (" + defaultLangFile + ")");
    }
    try {
        if (fs.lstatSync(langFile).isFile()) {
            fileToLoad = langFile;
        }
    }
    catch (_b) { }
    try {
        exports.translations = JSON.parse(fs.readFileSync(fileToLoad, 'utf-8'));
    }
    catch (_c) {
        throw Error("Unable to read translation file (" + fileToLoad + ")");
    }
};
//# sourceMappingURL=loadTranslations.js.map