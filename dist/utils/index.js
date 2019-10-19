'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var support = undefined;

/**
 * Check browser webp support
 * @returns {boolean}
 */
var isWebpSupported = exports.isWebpSupported = function isWebpSupported() {

    if (support !== undefined) return support;

    var elem = (typeof document === 'undefined' ? 'undefined' : _typeof(document)) === 'object' ? document.createElement('canvas') : {};

    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};