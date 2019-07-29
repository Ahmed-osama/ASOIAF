webpackHotUpdate("static/development/pages/house/[name].js",{

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/*! exports provided: getAllCharacters, getCharacterBySlug, getAllHouses, getHouseByName, getHouseCharacters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCharacters", function() { return getAllCharacters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCharacterBySlug", function() { return getCharacterBySlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllHouses", function() { return getAllHouses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHouseByName", function() { return getHouseByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHouseCharacters", function() { return getHouseCharacters; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _formatters_character__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../formatters/character */ "./formatters/character.js");
/* harmony import */ var _formatters_House__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../formatters/House */ "./formatters/House.js");





var apiUrl = "https://api.got.show/api/";
var getAllCharacters =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var url, res, _ref2, data, formattedData;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = apiUrl + "map/characters";
            _context.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url);

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            _ref2 = _context.sent;
            data = _ref2.data;
            _context.next = 10;
            return data.map(function (_char) {
              return new _formatters_character__WEBPACK_IMPORTED_MODULE_3__["Character"](_char);
            });

          case 10:
            formattedData = _context.sent;
            return _context.abrupt("return", formattedData);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getAllCharacters() {
    return _ref.apply(this, arguments);
  };
}();
var getCharacterBySlug =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(slug) {
    var url, res, _ref4, data, formattedData;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = apiUrl + "general/characters/bySlug/" + slug;
            _context2.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url);

          case 3:
            res = _context2.sent;
            _context2.next = 6;
            return res.json();

          case 6:
            _ref4 = _context2.sent;
            data = _ref4.data;
            _context2.next = 10;
            return data.map(function (_char2) {
              return new _formatters_character__WEBPACK_IMPORTED_MODULE_3__["Character"](_char2);
            });

          case 10:
            formattedData = _context2.sent;
            return _context2.abrupt("return", formattedData);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getCharacterBySlug(_x) {
    return _ref3.apply(this, arguments);
  };
}();
var getAllHouses =
/*#__PURE__*/
function () {
  var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
    var url, res, data, formattedData;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            url = apiUrl + "show/houses";
            _context3.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url);

          case 3:
            res = _context3.sent;
            _context3.next = 6;
            return res.json();

          case 6:
            data = _context3.sent;
            _context3.next = 9;
            return data.map(function (house) {
              return new _formatters_House__WEBPACK_IMPORTED_MODULE_4__["House"](house);
            });

          case 9:
            formattedData = _context3.sent;
            return _context3.abrupt("return", formattedData);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getAllHouses() {
    return _ref5.apply(this, arguments);
  };
}();
var getHouseByName =
/*#__PURE__*/
function () {
  var _ref6 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(name) {
    var url, res, data, formattedData;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            url = apiUrl + "show/houses/" + name;
            _context4.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url);

          case 3:
            res = _context4.sent;
            _context4.next = 6;
            return res.json();

          case 6:
            data = _context4.sent;
            _context4.next = 9;
            return data.map(function (house) {
              return new _formatters_House__WEBPACK_IMPORTED_MODULE_4__["House"](house);
            });

          case 9:
            formattedData = _context4.sent;
            return _context4.abrupt("return", formattedData[0]);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getHouseByName(_x2) {
    return _ref6.apply(this, arguments);
  };
}();
var getHouseCharacters =
/*#__PURE__*/
function () {
  var _ref7 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(name) {
    var url, res, data, formattedData;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            url = apiUrl + "book/characters/byHouse/" + name;
            _context5.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url);

          case 3:
            res = _context5.sent;
            _context5.next = 6;
            return res.json();

          case 6:
            data = _context5.sent;
            _context5.next = 9;
            return data.map(function (_char3) {
              return new _formatters_character__WEBPACK_IMPORTED_MODULE_3__["Character"](_char3);
            });

          case 9:
            formattedData = _context5.sent;
            return _context5.abrupt("return", formattedData);

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function getHouseCharacters(_x3) {
    return _ref7.apply(this, arguments);
  };
}();

/***/ })

})
//# sourceMappingURL=[name].js.js.718b8fce7954d565d284.hot-update.js.map