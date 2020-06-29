"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.t = exports.DEFAULT_LANG = void 0;
__exportStar(require("./localisation.interface"), exports);
__exportStar(require("./utils/getVscodeLang"), exports);
__exportStar(require("./utils/loadTranslations"), exports);
var loadTranslations_1 = require("./utils/loadTranslations");
exports.DEFAULT_LANG = 'en';
var deepCache = {};
exports.t = function (key, placeholders) {
    var e_1, _a;
    if (placeholders === void 0) { placeholders = null; }
    var translation = loadTranslations_1.translations[key] || key;
    // Deep check if no flat translation exists...
    if (key.includes('.') && !loadTranslations_1.translations[key]) {
        if (deepCache[key]) {
            translation = deepCache[key];
        }
        else {
            deepCache[key] = key;
            var paths = key.split('.');
            var finalPath = paths.pop();
            var translationPath = loadTranslations_1.translations;
            var path = void 0;
            while ((path = paths.shift())) {
                if (typeof translationPath !== 'string' && translationPath[path]) {
                    translationPath = translationPath[path];
                }
            }
            if (finalPath && typeof translationPath !== 'string') {
                if (translationPath[finalPath] && typeof translationPath[finalPath] === 'string') {
                    translation = translationPath[finalPath];
                    deepCache[key] = translation;
                }
            }
        }
    }
    if (translation !== key && placeholders !== null) {
        try {
            for (var _b = __values(Object.entries(placeholders)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), k = _d[0], v = _d[1];
                translation = translation.replace("{{" + k + "}}", v);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    return translation;
};
//# sourceMappingURL=index.js.map