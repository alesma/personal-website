webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/typewriter.jsx":
/*!***********************************!*\
  !*** ./components/typewriter.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/alessandro.maruccia/dev/alesmaru/components/typewriter.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var typewriter =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(typewriter, _React$PureComponent);

  function typewriter() {
    _classCallCheck(this, typewriter);

    return _possibleConstructorReturn(this, _getPrototypeOf(typewriter).apply(this, arguments));
  }

  _createClass(typewriter, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, "ciao");
    }
  }]);

  return typewriter;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["default"] = (typewriter);

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scss_reset_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/reset.scss */ "./scss/reset.scss");
/* harmony import */ var _scss_reset_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_reset_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scss_global_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/global.scss */ "./scss/global.scss");
/* harmony import */ var _scss_global_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_global_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_typewriter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/typewriter */ "./components/typewriter.jsx");
var _jsxFileName = "/Users/alessandro.maruccia/dev/alesmaru/pages/index.jsx";





/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1094000008" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1094000008" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Alessandro Maruccia ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1094000008" + " " + "pipe",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "|")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("typewriter", {
    className: "jsx-1094000008",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1094000008" + " " + "hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "I'm", " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "mailto:alesmaru@gmail.com",
    className: "jsx-1094000008" + " " + "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "available"), " ", "for freelance design projects & collaborations"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1094000008",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "I\u2019m a web developer & designer, working in the digital world since 2006.", " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1094000008",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), " I have worked with media agencies in Rome, startups in Berlin, iGaming companies in Malta.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1094000008",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), "I\u2019m currently employed as Senior Front End Developer at Gaming Innovation Group. ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1094000008",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), "If you wish, you can get in touch with me via email at", " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "mailto:alesmaru@gmail.com",
    className: "jsx-1094000008" + " " + "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "alesmaru@gmail.com"), "."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1094000008" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://github.com/alesma",
    target: "_blank",
    className: "jsx-1094000008",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1094000008",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://github.com/alesma",
    target: "_blank",
    className: "jsx-1094000008",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "github"), " ", "-", " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.linkedin.com/in/alesma/",
    target: "_blank",
    className: "jsx-1094000008",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "linkedIn"), " ", "-", " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.instagram.com/alesmaru/",
    target: "_blank",
    className: "jsx-1094000008",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "instagram")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1094000008",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Based in Malta"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1094000008",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "From Galatina, Italy")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1094000008",
    css: ".title.jsx-1094000008{font-size:2.2rem;}.content.jsx-1094000008{text-align:center;}.sub.jsx-1094000008{font-size:1.4rem;}.hero.jsx-1094000008{margin-top:50px;}.footer.jsx-1094000008{margin-top:200px;color:#ccc;}.pipe.jsx-1094000008{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-name:pipe-jsx-1094000008;animation-name:pipe-jsx-1094000008;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-functino:cubic-bezier(0.0,0.0,0.2,1);animation-timing-functino:cubic-bezier(0.0,0.0,0.2,1);}@-webkit-keyframes pipe-jsx-1094000008{from{opacity:1;}to{opacity:0;}}@keyframes pipe-jsx-1094000008{from{opacity:1;}to{opacity:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVzc2FuZHJvLm1hcnVjY2lhL2Rldi9hbGVzbWFydS9wYWdlcy9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcURPLEFBRzRCLEFBSUMsQUFJRCxBQUlELEFBSUMsQUFRSyxBQVFWLEFBSUEsVUFIWixBQUlBLE1BeEJGLENBWkEsQUFRQSxBQVFhLENBWmIsVUFhQSx3QkFPc0IsOEVBQ2UsOEVBQ3NCLG9IQUMzRCIsImZpbGUiOiIvVXNlcnMvYWxlc3NhbmRyby5tYXJ1Y2NpYS9kZXYvYWxlc21hcnUvcGFnZXMvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc2Nzcy9yZXNldC5zY3NzXCI7XG5pbXBvcnQgXCIuLi9zY3NzL2dsb2JhbC5zY3NzXCI7XG5pbXBvcnQgdHlwZXdyaXRlciBmcm9tIFwiLi4vY29tcG9uZW50cy90eXBld3JpdGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+QWxlc3NhbmRybyBNYXJ1Y2NpYSA8c3BhbiBjbGFzc05hbWU9XCJwaXBlXCI+fDwvc3Bhbj48L2gxPlxuICAgIDx0eXBld3JpdGVyIC8+XG5cbiAgICA8cCBjbGFzc05hbWU9XCJoZXJvXCI+XG4gICAgICBJJ217XCIgXCJ9XG4gICAgICA8YSBjbGFzc05hbWU9XCJsaW5rXCIgaHJlZj1cIm1haWx0bzphbGVzbWFydUBnbWFpbC5jb21cIj5cbiAgICAgICAgYXZhaWxhYmxlXG4gICAgICA8L2E+e1wiIFwifVxuICAgICAgZm9yIGZyZWVsYW5jZSBkZXNpZ24gcHJvamVjdHMgJiBjb2xsYWJvcmF0aW9uc1xuICAgIDwvcD5cbiAgICA8cD5cbiAgICAgIEnigJltIGEgd2ViIGRldmVsb3BlciAmIGRlc2lnbmVyLCB3b3JraW5nIGluIHRoZSBkaWdpdGFsIHdvcmxkIHNpbmNlIDIwMDYue1wiIFwifVxuICAgICAgPGJyIC8+IEkgaGF2ZSB3b3JrZWQgd2l0aCBtZWRpYSBhZ2VuY2llcyBpbiBSb21lLCBzdGFydHVwcyBpbiBCZXJsaW4sXG4gICAgICBpR2FtaW5nIGNvbXBhbmllcyBpbiBNYWx0YS48YnIgLz5cbiAgICAgIEnigJltIGN1cnJlbnRseSBlbXBsb3llZCBhcyBTZW5pb3IgRnJvbnQgRW5kIERldmVsb3BlciBhdCBHYW1pbmcgSW5ub3ZhdGlvblxuICAgICAgR3JvdXAuIDxiciAvPlxuICAgICAgSWYgeW91IHdpc2gsIHlvdSBjYW4gZ2V0IGluIHRvdWNoIHdpdGggbWUgdmlhIGVtYWlsIGF0e1wiIFwifVxuICAgICAgPGEgY2xhc3NOYW1lPVwibGlua1wiIGhyZWY9XCJtYWlsdG86YWxlc21hcnVAZ21haWwuY29tXCI+XG4gICAgICAgIGFsZXNtYXJ1QGdtYWlsLmNvbVxuICAgICAgPC9hPlxuICAgICAgLlxuICAgIDwvcD5cblxuICAgIHsvKiA8cD5cbiAgICAgIDxhIGhyZWY9XCIvbG9nby1kZXNpZ25cIj5sb2dvczwvYT4gYW5kIDxhIGhyZWY9XCIvdHNoaXJ0c1wiPnRzaGlydHM8L2E+XG4gICAgPC9wPiAqL31cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2FsZXNtYVwiIHRhcmdldD1cIl9ibGFua1wiIC8+XG4gICAgICA8cD5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9hbGVzbWFcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICBnaXRodWJcbiAgICAgICAgPC9hPntcIiBcIn1cbiAgICAgICAgLXtcIiBcIn1cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9hbGVzbWEvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgbGlua2VkSW5cbiAgICAgICAgPC9hPntcIiBcIn1cbiAgICAgICAgLXtcIiBcIn1cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vYWxlc21hcnUvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgaW5zdGFncmFtXG4gICAgICAgIDwvYT5cbiAgICAgIDwvcD5cbiAgICAgIDxwPkJhc2VkIGluIE1hbHRhPC9wPlxuICAgICAgPHA+RnJvbSBHYWxhdGluYSwgSXRhbHk8L3A+XG4gICAgPC9kaXY+XG5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDIuMnJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuc3ViIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZXJvIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjAwcHg7XG4gICAgICAgICAgY29sb3I6ICNjY2M7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9vdGVyIHAge1xuICAgICAgICB9XG5cbiAgICAgICAgLnBpcGUge1xuICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHBpcGU7XG4gICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlubzogY3ViaWMtYmV6aWVyKDAuMCwgMC4wLCAwLjIsIDEpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBAa2V5ZnJhbWVzIHBpcGUge1xuICAgICAgICAgIGZyb20ge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcbiJdfQ== */\n/*@ sourceURL=/Users/alessandro.maruccia/dev/alesmaru/pages/index.jsx */",
    __self: this
  }));
});
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.e44720039d8623116e47.hot-update.js.map