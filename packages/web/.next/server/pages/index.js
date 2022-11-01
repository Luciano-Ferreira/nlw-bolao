"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Home(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: [\n            \"Contagem de bol\\xf5es \",\n            props.count\n        ]\n    }, void 0, true, {\n        fileName: \"/home/luciano/2k22/nlwbolao/packages/web/pages/index.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\nconst getServerSideProps = async ()=>{\n    const response = await fetch(\"http://localhost:3333/pools/count\");\n    const data = await response.json();\n    console.log(data);\n    return {\n        props: {\n            count: data.count\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBSUEsU0FBU0EsS0FBS0MsS0FBWSxFQUFlO0lBRXZDLHFCQUNFLDhEQUFDQzs7WUFBRztZQUFvQkQsTUFBTUUsS0FBSzs7Ozs7OztBQUV2QztBQUVPLE1BQU1DLHFCQUFxQixVQUFZO0lBQzVDLE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtJQUM3QixNQUFNQyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7SUFFaENDLFFBQVFDLEdBQUcsQ0FBQ0g7SUFDWixPQUFPO1FBQ0xOLE9BQU87WUFDTEUsT0FBT0ksS0FBS0osS0FBSztRQUNuQjtJQUNGO0FBQ0YsRUFBQztBQUVELGlFQUFlSCxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQG5sd2JvbGFvL3dlYi8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBQcm9wcyB7XG4gIGNvdW50OiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIEhvbWUocHJvcHM6IFByb3BzKTogSlNYLkVsZW1lbnQge1xuXG4gIHJldHVybiAoXG4gICAgPGgxPkNvbnRhZ2VtIGRlIGJvbMO1ZXMge3Byb3BzLmNvdW50fTwvaDE+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMzMzL3Bvb2xzL2NvdW50Jyk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuICBjb25zb2xlLmxvZyhkYXRhKVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBjb3VudDogZGF0YS5jb3VudFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJuYW1lcyI6WyJIb21lIiwicHJvcHMiLCJoMSIsImNvdW50IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();