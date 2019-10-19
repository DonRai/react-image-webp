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

    if (!!(elem.getContext && elem.getContext('2d'))) {
        // was able or not to get WebP representation
        support = elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
        return support;
    } else {
        // very old browser like IE 8, canvas not supported
        support = false;
        return support;
    }
};