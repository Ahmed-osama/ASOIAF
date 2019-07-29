webpackHotUpdate("static/development/pages/character/[slug].js",{

/***/ "./pages/character/[slug].jsx":
/*!************************************!*\
  !*** ./pages/character/[slug].jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout/Layout */ "./components/Layout/Layout.jsx");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../client */ "./client/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "/Users/ahmedosama/Workspace/ASOAF/pages/character/[slug].jsx";






var CharacterPage = function CharacterPage(_ref) {
  var id = _ref.id,
      gender = _ref.gender,
      titles = _ref.titles,
      name = _ref.name,
      allegiance = _ref.allegiance,
      slug = _ref.slug,
      image = _ref.image,
      alive = _ref.alive,
      spouse = _ref.spouse,
      placeOfDeath = _ref.placeOfDeath,
      death = _ref.death,
      children = _ref.children,
      pagerank = _ref.pagerank,
      house = _ref.house,
      culture = _ref.culture,
      birth = _ref.birth;
  var subject = ["male", ""].some(function (gen) {
    return gen === gender;
  }) ? "he" : "she";
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__["Layout"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, titles[0], " ", name, " Of", " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/house/[name]",
    as: "/house/".concat(house),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, house))), image && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), gender && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, subject, " is ", gender), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, subject, " was born in ", Math.abs(birth), " ", birth > 0 ? "A.C" : "B.C"), culture && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, subject, " is ", culture), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, alive ? "".concat(subject, " still alive") : "".concat(subject, " passed away"), " "), placeOfDeath && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, subject, " died in ", placeOfDeath, " on ", death), death && birth && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, subject, " lived for ", death - birth, " years"), spouse.length > 0 && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, subject, " ", alive ? "is" : "was", " married to", " ", spouse.map(function (spous) {
    return "".concat(spous, ", ");
  })), children.length > 0 && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, subject, " has ", children.length, " children :", children.map(function (child) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, child, ", ");
  })));
};

CharacterPage.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var slug, character;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            slug = context.query.slug;
            _context.next = 3;
            return Object(_client__WEBPACK_IMPORTED_MODULE_5__["getCharacterBySlug"])(slug);

          case 3:
            character = _context.sent;
            return _context.abrupt("return", character);

          case 5:
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

/* harmony default export */ __webpack_exports__["default"] = (CharacterPage);

/***/ })

})
//# sourceMappingURL=[slug].js.6abfa47e036454545e1f.hot-update.js.map