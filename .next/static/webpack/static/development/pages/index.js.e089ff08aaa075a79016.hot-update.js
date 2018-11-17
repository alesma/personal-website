webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/typewriter.jsx":
/*!***********************************!*\
  !*** ./components/typewriter.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var timers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! timers */ "./node_modules/timers-browserify/main.js");
/* harmony import */ var timers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(timers__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/alessandro.maruccia/dev/alesmaru/components/typewriter.jsx";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Typewriter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Typewriter, _React$Component);

  function Typewriter() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Typewriter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Typewriter)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      text: ""
    });

    return _this;
  }

  _createClass(Typewriter, [{
    key: "startTyping",
    value: function startTyping() {
      if (!this.props.text) {
        return;
      }

      if (this.props.text.length === this.textIndex) {
        return;
      }

      this.timeout = Object(timers__WEBPACK_IMPORTED_MODULE_2__["setTimeout"])(function () {
        this.setState({
          text: "".concat(this.state.text).concat(this.props.text.substring(this.textIndex, this.textIndex + 1))
        });
        this.textIndex++;
        this.startTyping();
      }.bind(this), Math.random() * (200 - 50) + 50);
    }
  }, {
    key: "stopTyping",
    value: function stopTyping() {
      Object(timers__WEBPACK_IMPORTED_MODULE_2__["clearTimeout"])(this.timeout);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.textIndex = 0;
      this.startTyping();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopTyping();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, this.state.text, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-1287516901" + " " + "pipe",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "|"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1287516901",
        css: ".pipe.jsx-1287516901{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-name:pipe-jsx-1287516901;animation-name:pipe-jsx-1287516901;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-functino:cubic-bezier(0,0,0.2,1);animation-timing-functino:cubic-bezier(0,0,0.2,1);}@-webkit-keyframes pipe-jsx-1287516901{from{opacity:1;}to{opacity:0;}}@keyframes pipe-jsx-1287516901{from{opacity:1;}to{opacity:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVzc2FuZHJvLm1hcnVjY2lhL2Rldi9hbGVzbWFydS9jb21wb25lbnRzL3R5cGV3cml0ZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9EVyxBQUdxQyxBQVFWLEFBSUEsVUFIWixBQUlBLDBDQVpvQiw4RUFDZSw4RUFDa0IsNEdBQ3ZEIiwiZmlsZSI6Ii9Vc2Vycy9hbGVzc2FuZHJvLm1hcnVjY2lhL2Rldi9hbGVzbWFydS9jb21wb25lbnRzL3R5cGV3cml0ZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc2V0VGltZW91dCwgY2xlYXJUaW1lb3V0IH0gZnJvbSBcInRpbWVyc1wiO1xuXG5jbGFzcyBUeXBld3JpdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgdGV4dDogXCJcIlxuICB9O1xuXG4gIHN0YXJ0VHlwaW5nKCkge1xuICAgIGlmICghdGhpcy5wcm9wcy50ZXh0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMudGV4dC5sZW5ndGggPT09IHRoaXMudGV4dEluZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChcbiAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB0ZXh0OiBgJHt0aGlzLnN0YXRlLnRleHR9JHt0aGlzLnByb3BzLnRleHQuc3Vic3RyaW5nKFxuICAgICAgICAgICAgdGhpcy50ZXh0SW5kZXgsXG4gICAgICAgICAgICB0aGlzLnRleHRJbmRleCArIDFcbiAgICAgICAgICApfWBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy50ZXh0SW5kZXgrKztcbiAgICAgICAgdGhpcy5zdGFydFR5cGluZygpO1xuICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgTWF0aC5yYW5kb20oKSAqICgyMDAgLSA1MCkgKyA1MFxuICAgICk7XG4gIH1cblxuICBzdG9wVHlwaW5nKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy50ZXh0SW5kZXggPSAwO1xuICAgIHRoaXMuc3RhcnRUeXBpbmcoKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuc3RvcFR5cGluZygpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIHt0aGlzLnN0YXRlLnRleHR9IDxzcGFuIGNsYXNzTmFtZT1cInBpcGVcIj58PC9zcGFuPlxuXG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5waXBlIHtcbiAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHBpcGU7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW5vOiBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQGtleWZyYW1lcyBwaXBlIHtcbiAgICAgICAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUeXBld3JpdGVyO1xuIl19 */\n/*@ sourceURL=/Users/alessandro.maruccia/dev/alesmaru/components/typewriter.jsx */",
        __self: this
      }));
    }
  }]);

  return Typewriter;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Typewriter);

/***/ })

})
//# sourceMappingURL=index.js.e089ff08aaa075a79016.hot-update.js.map