webpackHotUpdate("static/development/pages/house/[name].js",{

/***/ "./pages/house/[name].jsx":
/*!********************************!*\
  !*** ./pages/house/[name].jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Layout/Layout */ "./components/Layout/Layout.jsx");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../client */ "./client/index.js");
/* harmony import */ var _components_Character__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Character */ "./components/Character/index.jsx");



var _jsxFileName = "/Users/ahmedosama/Workspace/ASOAF/pages/house/[name].jsx";







var House = function House(_ref) {
  var houseDetails = _ref.houseDetails,
      houseCharacters = _ref.houseCharacters;
  var id = houseDetails.houseId,
      seat = houseDetails.seat,
      allegiance = houseDetails.allegiance,
      region = houseDetails.region,
      religion = houseDetails.religion,
      name = houseDetails.name,
      words = houseDetails.words,
      sigil = houseDetails.sigil,
      logoURL = houseDetails.logoURL;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_6__["Layout"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, name), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "seat : ", seat), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, words), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: logoURL,
    width: "150",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, sigil), allegiance.length && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Alliance : "), " ", allegiance.map(function (ally) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/house/[ally]",
      as: "/house/".concat(ally),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, ally), ",", " ");
  })), religion.length && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Religions : "), " ", religion.map(function (relig) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, relig, ", ");
  })), houseCharacters.length && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "characters"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, houseCharacters.map(function (_char) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Character__WEBPACK_IMPORTED_MODULE_8__["Character"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _char, {
      key: _char.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    })));
  }))));
};

House.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var name, houseDetails, houseCharacters;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            name = context.query.name;
            _context.next = 3;
            return Object(_client__WEBPACK_IMPORTED_MODULE_7__["getHouseByName"])(name);

          case 3:
            houseDetails = _context.sent;
            _context.next = 6;
            return Object(_client__WEBPACK_IMPORTED_MODULE_7__["getHouseCharacters"])(name);

          case 6:
            houseCharacters = _context.sent;
            return _context.abrupt("return", {
              houseDetails: houseDetails,
              houseCharacters: houseCharacters
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (House);

/***/ })

})
//# sourceMappingURL=[name].js.js.8e50d6838515005080db.hot-update.js.map