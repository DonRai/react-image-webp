'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Default class for Image webp
 */
var Image = function (_Component) {
    _inherits(Image, _Component);

    function Image() {
        _classCallCheck(this, Image);

        return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
    }

    _createClass(Image, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (sessionStorage.getItem('react-webp') === null) {
                this.testWebP(this.setToSession());
            }
        }
    }, {
        key: 'setToSession',
        value: function setToSession(support) {
            sessionStorage.setItem('react-webp', support ? '1' : '0');
        }
    }, {
        key: 'testWebP',
        value: function testWebP(callback) {
            var webP = new Image();
            webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
            webP.onload = webP.onerror = function () {
                callback(webP.height === 2);
            };
        }
    }, {
        key: 'render',


        /**
         * Render jsx to html
         * @returns {XML}
         */
        value: function render() {
            var _props = this.props,
                src = _props.src,
                webp = _props.webp,
                alt = _props.alt,
                title = _props.title;

            var webpSupport = sessionStorage.getItem('react-webp');
            var image = null;

            if (webpSupport === '1') {
                image = _react2.default.createElement('img', { src: webp, alt: alt, title: title });
            } else if (webpSupport === '0') {
                image = _react2.default.createElement('img', { src: src, alt: alt, title: title });
            }

            return image;
        }
    }]);

    return Image;
}(_react.Component);

exports.default = Image;