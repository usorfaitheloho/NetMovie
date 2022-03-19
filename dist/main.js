/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/thunder.jpg */ \"./src/images/thunder.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  /* primary colors */\\r\\n  --black: #000;\\r\\n  --white: #fff;\\r\\n  --gray: #d3d3d3;\\r\\n  --red: red;\\r\\n}\\r\\n\\r\\n/* global styling  */\\r\\n*,\\r\\n::before,\\r\\n::after {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  scroll-behavior: smooth;\\r\\n}\\r\\n\\r\\nhtml {\\r\\n  font-size: 1rem;\\r\\n  font-family: 'poppins', sans-serif;\\r\\n  font-style: normal;\\r\\n  font-weight: normal;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  width: 100%;\\r\\n  min-height: 100vh;\\r\\n  background-color: var(--black);\\r\\n  overflow-x: hidden;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nli {\\r\\n  list-style-type: none;\\r\\n}\\r\\n\\r\\nimg {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  object-fit: cover;\\r\\n}\\r\\n\\r\\n/* header styling starts here */\\r\\n\\r\\n.nav-element {\\r\\n  width: 100%;\\r\\n  padding: 5% 8%;\\r\\n  z-index: 2;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.logo img {\\r\\n  width: 120px;\\r\\n}\\r\\n\\r\\n.nav-items {\\r\\n  display: flex;\\r\\n  gap: 10px;\\r\\n  justify-content: flex-end;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.nav-items li {\\r\\n  font-size: 0.9rem;\\r\\n  line-height: 20px;\\r\\n  color: var(--white);\\r\\n  padding: 8px;\\r\\n  border-radius: 10px;\\r\\n  text-align: center;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.nav-items li:hover {\\r\\n  color: var(--red);\\r\\n}\\r\\n\\r\\n/* main section styling starts here */\\r\\n\\r\\nmain {\\r\\n  width: 85%;\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\nmain h1 {\\r\\n  color: var(--white);\\r\\n  padding: 20px 0;\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n\\r\\n.movies {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  gap: 50px;\\r\\n  flex-direction: column;\\r\\n  padding: 20px 0;\\r\\n}\\r\\n\\r\\n.movie {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  gap: 20px;\\r\\n  flex-direction: column;\\r\\n  box-shadow: 2px 2px 2px rgba(58, 57, 57, 0.2);\\r\\n  border-radius: 10px;\\r\\n  flex-wrap: wrap;\\r\\n  transition: all 1s ease;\\r\\n}\\r\\n\\r\\n.movie:hover {\\r\\n  transform: scale(1.05);\\r\\n}\\r\\n\\r\\n.movie img {\\r\\n  height: 150px;\\r\\n  width: 200px;\\r\\n}\\r\\n\\r\\n.movie-description {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  color: var(--white);\\r\\n  font-size: 0.8rem;\\r\\n  gap: 20px;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.btn {\\r\\n  background-color: var(--white);\\r\\n  padding: 7px 10px;\\r\\n  border-radius: 5px;\\r\\n  color: var(--black);\\r\\n  outline: none;\\r\\n  box-shadow: 1px 1px 2px rgba(248, 246, 246, 0.2);\\r\\n}\\r\\n\\r\\n.footer-element {\\r\\n  width: 90%;\\r\\n  margin: auto;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  padding: 20px;\\r\\n  bottom: 0;\\r\\n  left: 0;\\r\\n  font-weight: bolder;\\r\\n  color: var(--white);\\r\\n  margin-top: 40px;\\r\\n  border-top: 2px solid var(--white);\\r\\n  font-size: 1.2rem;\\r\\n}\\r\\n\\r\\n.footer-element a {\\r\\n  padding: 0 20px;\\r\\n  color: var(--white);\\r\\n}\\r\\n\\r\\n/* comment section styling starts here */\\r\\n\\r\\n.comment-section {\\r\\n  position: fixed;\\r\\n\\ttop: 0;\\r\\n\\tleft: 0;\\r\\n\\tright: 0;\\r\\n\\tbottom: 0;\\r\\n\\toverflow: auto;\\r\\n\\tz-index: 2;\\r\\n\\tanimation: modalopen 1s ease-out;\\r\\n\\tdisplay: \\\"none\\\";\\r\\n  transition: all 1s ease;\\r\\n}\\r\\n\\r\\n@keyframes modalopen {\\r\\n\\tfrom {\\r\\n\\t\\topacity: 0;\\r\\n\\t}\\r\\n\\r\\n\\tto {\\r\\n\\t\\topacity: 1;\\r\\n\\t}\\r\\n}\\r\\n\\r\\n.movie-detail {\\r\\n  width: 90%;\\r\\n  margin: 20px auto;\\r\\n  border: 2px solid var(--white);\\r\\n  border-radius: 10px;\\r\\n  position: relative;\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat;\\r\\n  background-size: cover;\\r\\n  background-color: gray;\\r\\n  background-blend-mode: multiply;\\r\\n}\\r\\n\\r\\n.movie-likes {\\r\\n  width: 25px;\\r\\n}\\r\\n\\r\\n.countLikes {\\r\\n  pointer-events: none;\\r\\n  background: none;\\r\\n  border: none;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.close i {\\r\\n  color: var(--white);\\r\\n  position: absolute;\\r\\n  top: 20px;\\r\\n  right: 20px;\\r\\n  font-size: 32px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.movie-image {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  padding: 50px 0;\\r\\n}\\r\\n\\r\\n.movie-image img{\\r\\n  width: 30%;\\r\\n}\\r\\n\\r\\n.comment-description {\\r\\n  color: var(--white);\\r\\n  padding: 50px;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.comment-description h2 {\\r\\n  font-size: 3rem;\\r\\n  padding: 10px 0;\\r\\n}\\r\\n\\r\\n.comment-description p {\\r\\n  font-size: 1.2rem;\\r\\n  line-height: 32px;\\r\\n  text-align: justify;\\r\\n}\\r\\n\\r\\nform {\\r\\n  align-self: center;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  gap: 20px;\\r\\n  width: 50%;\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\n.input-name {\\r\\n  padding: 20px;\\r\\n\\r\\n}\\r\\n\\r\\ntextarea {\\r\\n  padding: 5px;\\r\\n  border-radius: 5px;\\r\\n  border: 2px solid #000;\\r\\n  height: 200px;\\r\\n}\\r\\n\\r\\n.show-comment{\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  flex-direction: column;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n#submit {\\r\\n   margin: 20px 0;\\r\\n  padding: 10px 15px;\\r\\n  border-radius: 5px;\\r\\n  background-color: skyblue;\\r\\n  align-self: center;\\r\\n  border: 2px solid skyblue;\\r\\n}\\r\\n\\r\\n#submit:hover {\\r\\n  opacity: 0.9;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n@media only screen and (min-width: 768px) {\\r\\n  .nav-element {\\r\\n    padding: 2% 8%;\\r\\n  }\\r\\n\\r\\n  .movies {\\r\\n    flex-direction: row;\\r\\n    flex-wrap: wrap;\\r\\n  }\\r\\n\\r\\n  .movie {\\r\\n    flex-wrap: wrap;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://Movie-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://Movie-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://Movie-app/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://Movie-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://Movie-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://Movie-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://Movie-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://Movie-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://Movie-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://Movie-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://Movie-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_nav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/nav.js */ \"./src/modules/nav.js\");\n/* harmony import */ var _modules_services_userServices_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/services/userServices.js */ \"./src/modules/services/userServices.js\");\n/* harmony import */ var _modules_movies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/movies */ \"./src/modules/movies.js\");\n/* harmony import */ var _modules_comments_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/comments.js */ \"./src/modules/comments.js\");\n/* harmony import */ var _modules_popupAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/popupAction */ \"./src/modules/popupAction.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_nav_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n\r\nconst displayPopups = async shows => {\r\n\tconst commentBtn = document.querySelectorAll('.btn')\r\n\tcommentBtn.forEach(btn => {\r\n\t\tbtn.addEventListener('click', async () => {\r\n\t\t\tconst id = btn.id\r\n\t\t\tconst itemname = btn.getAttribute('itemname')\r\n\t\t\t;(0,_modules_popupAction__WEBPACK_IMPORTED_MODULE_5__.openPopup)()\r\n\t\t\tawait (0,_modules_comments_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(shows[id - 1], _modules_services_userServices_js__WEBPACK_IMPORTED_MODULE_2__.getComments)\r\n\t\t\tconst hidePopup = document.querySelector('.close')\r\n\t\t\thidePopup.addEventListener('click', _modules_popupAction__WEBPACK_IMPORTED_MODULE_5__.closePopup)\r\n\r\n\t\t\tconst form = document.querySelector('#new-comment')\r\n\t\t\t\tform.addEventListener('submit', async e => {\r\n\t\t\t\te.preventDefault()\r\n\r\n\t\t\t\tconst username = document.querySelector('.input-name').value\r\n\t\t\t\tconst comment = document.querySelector('#comment').value\r\n\t\t\t\tconst newComment = {\r\n\t\t\t\t\titem_id: itemname,\r\n\t\t\t\t\tusername,\r\n\t\t\t\t\tcomment,\r\n\t\t\t\t}\r\n\t\t\t\tawait (0,_modules_services_userServices_js__WEBPACK_IMPORTED_MODULE_2__.postComments)(newComment)\r\n\t\t\t\t;(0,_modules_comments_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(shows[id - 1], _modules_services_userServices_js__WEBPACK_IMPORTED_MODULE_2__.getComments)\r\n\t\t\t\tform.reset()\r\n\t\t\t\tdocument.querySelector('.close-btn').addEventListener('click', (0,_modules_popupAction__WEBPACK_IMPORTED_MODULE_5__.closePopup)())\r\n\t\t\t})\r\n\t\t})\r\n\t})\r\n}\r\n\r\nconst shows = async () => {\r\n\tconst list = await (0,_modules_services_userServices_js__WEBPACK_IMPORTED_MODULE_2__.fetchShows)()\r\n\t;(0,_modules_movies__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(list)\r\n\tdisplayPopups(list)\r\n}\r\nshows()\r\n\r\ndocument.querySelector('main').addEventListener('click', async e => {\r\n\t\r\n\tif (e.target.className === 'far fa-heart') {\r\n\t\tconst string = e.target.id\r\n\t\tconst id = parseInt(string, 10)\r\n\t\tawait (0,_modules_services_userServices_js__WEBPACK_IMPORTED_MODULE_2__.postLikes)(id)\r\n\t\tconst container = e.target.parentElement.nextElementSibling\r\n\t\tawait (0,_modules_services_userServices_js__WEBPACK_IMPORTED_MODULE_2__.updateLikes)(id, container)\r\n\t}\r\n})\n\n//# sourceURL=webpack://Movie-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _commentsCounter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentsCounter */ \"./src/modules/commentsCounter.js\");\n\r\n\r\nconst showPopups = async (data, updateComment) => {\r\n\tconst comments = await updateComment(data.name)\r\n\tconsole.log(comments)\r\n\tconst commentNum = (0,_commentsCounter__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(comments)\r\n\r\n\tconst content = document.querySelector('.popup-section')\r\n\r\n\tcontent.innerHTML = `\r\n<div class =\"movie-detail\">\r\n  <button type=\"button\" class=\"close\">\r\n    <i class=\"fa fa-times fa-1x\" id=\"close\"></i>\r\n  </button>\r\n  <div class=\"movie-image\">\r\n      <img src=${data.image.medium}  />\r\n  </div>\r\n  <div class=\"comment-description\">\r\n      <h2>${data.name}</h2>\r\n      <p>${data.summary}</p>\r\n  </div>\r\n  <div class=\"show-comment\">\r\n    <h3> Comments (${commentNum || 0})</h3>\r\n  <ul class=\"comments-list\">${comments\r\n\t\t.map(\r\n\t\t\tcomment => `<li class=\"comment-item\">\r\n    <span class=\"creation-date\">${comment.creation_date}</span>\r\n    <span class=\"username\"> ${comment.username}:</span>\r\n    <span class=\"comment-msg\"> ${comment.comment}</span></li>`,\r\n\t\t)\r\n\t\t.join('')}                                  \r\n    </ul>\r\n  </div>\r\n  <div class =\"form-end\">\r\n    <form id=\"new-comment\">\r\n      <input type=\"text\" placeholder=\"Your name\" class=\"input-name\" name=\"username\" required>\r\n      <textarea name=\"comment\" id=\"comment\" required>Add your comment here</textarea>\r\n      <button class=\"btn-submit\" id=\"submit\" type=\"submit\">Comment</button>\r\n    </form>\r\n  </div>\r\n</div>`\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showPopups);\r\n\n\n//# sourceURL=webpack://Movie-app/./src/modules/comments.js?");

/***/ }),

/***/ "./src/modules/commentsCounter.js":
/*!****************************************!*\
  !*** ./src/modules/commentsCounter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentsCounter = comments => comments.length\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsCounter);\r\n\n\n//# sourceURL=webpack://Movie-app/./src/modules/commentsCounter.js?");

/***/ }),

/***/ "./src/modules/movies.js":
/*!*******************************!*\
  !*** ./src/modules/movies.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _services_userServices_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/userServices.js */ \"./src/modules/services/userServices.js\");\n\r\nconst showMovies = async data => {\r\n\tconst movies = document.querySelector('.movies')\r\n\tdata.forEach((show, index) => {\r\n\t\tif (index < 8) {\r\n\t\t\tmovies.innerHTML += `\r\n        <div class=\"movie\">\r\n        <img src=${show.image.medium} alt=\"movie-pic\"/>\r\n        <div class=\"movie-description\">\r\n        <p>${show.name}</p>\r\n        <span class=\"movie-likes\">\r\n          <span>\r\n               <i id=\"${show.id}\" class=\"far fa-heart\"></i>\r\n           </span>\r\n            <input type=\"number\" id=\"${show.id}\" class=\"countLikes\" value=\"\" name=\"\"\r\n            <span id=\"${show.id}\">Likes</span>\r\n        </span>\r\n        </div>\r\n         <button class=\"btn\" id=${show.id} itemname=\"${show.name}\">Comments</button>\r\n        </div>\r\n        </div>\r\n       \r\n        </div>\r\n        `\r\n\t\t}\r\n\t})\r\n\r\n\tconst count = document.querySelectorAll('.countLikes')\r\n\tcount.forEach((e, index) => {\r\n\t\tconst countLike = index + 1\r\n\t\t;(0,_services_userServices_js__WEBPACK_IMPORTED_MODULE_0__.updateLikes)(countLike, e)\r\n\t})\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showMovies);\r\n\n\n//# sourceURL=webpack://Movie-app/./src/modules/movies.js?");

/***/ }),

/***/ "./src/modules/nav.js":
/*!****************************!*\
  !*** ./src/modules/nav.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_netmovies_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/netmovies.png */ \"./src/images/netmovies.png\");\n\r\n\r\nconst navigations = `\r\n<nav class=\"nav-element\">\r\n<div class=\"logo\"> \r\n<img src=${_images_netmovies_png__WEBPACK_IMPORTED_MODULE_0__} alt=\"logo\" />\r\n</div>\r\n<ul class=\"nav-items\">\r\n<li class=\"list\">Series</li>\r\n<li class=\"list\">Film</li>\r\n<li class=\"list\" id=\"shows-counter\">My List</li>\r\n</ul>\r\n</nav>\r\n`;\r\n\r\nconst renderNav = () => {\r\n  document.querySelector('#header').innerHTML = navigations;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderNav);\r\n\n\n//# sourceURL=webpack://Movie-app/./src/modules/nav.js?");

/***/ }),

/***/ "./src/modules/popupAction.js":
/*!************************************!*\
  !*** ./src/modules/popupAction.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closePopup\": () => (/* binding */ closePopup),\n/* harmony export */   \"openPopup\": () => (/* binding */ openPopup)\n/* harmony export */ });\nconst commentPopup = document.querySelector('.popup-section')\r\n\r\nconst header = document.querySelector('header')\r\nconst main = document.querySelector('main')\r\nconst footer = document.querySelector('footer')\r\n\r\nconst openPopup = () => {\r\n\tcommentPopup.style.display = 'block'\r\n\theader.style.display = 'none'\r\n\tmain.style.display = 'none'\r\n\tfooter.style.display = 'none'\r\n}\r\n\r\nconst closePopup = () => {\r\n\theader.style.display = 'block'\r\n\tmain.style.display = 'block'\r\n\tfooter.style.display = 'block'\r\n\tcommentPopup.style.display = 'none'\r\n}\r\n\n\n//# sourceURL=webpack://Movie-app/./src/modules/popupAction.js?");

/***/ }),

/***/ "./src/modules/services/fetchApi.js":
/*!******************************************!*\
  !*** ./src/modules/services/fetchApi.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"get\": () => (/* binding */ get),\n/* harmony export */   \"post\": () => (/* binding */ post)\n/* harmony export */ });\nconst get = async url => {\r\n\ttry {\r\n\t\tconst res = await fetch(url)\r\n\t\tconst datas = await res.json()\r\n\t\treturn datas\r\n\t} catch (error) {\r\n\t\treturn error\r\n\t}\r\n}\r\n\r\nconst post = async (url, data) => {\r\n\tconst config = {\r\n\t\tmethod: 'POST',\r\n\t\theaders: { 'Content-Type': 'application/json' },\r\n\t\tbody: JSON.stringify(data),\r\n\t}\r\n\r\n\ttry {\r\n\t\tconst res = await fetch(url, config)\r\n\t   return res.text\r\n\t} catch (error) {\r\n\t\treturn error\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://Movie-app/./src/modules/services/fetchApi.js?");

/***/ }),

/***/ "./src/modules/services/rootEndpoints.js":
/*!***********************************************!*\
  !*** ./src/modules/services/rootEndpoints.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"APP_ID\": () => (/* binding */ APP_ID),\n/* harmony export */   \"COMMENTS\": () => (/* binding */ COMMENTS),\n/* harmony export */   \"INVOLVEMENT_API\": () => (/* binding */ INVOLVEMENT_API),\n/* harmony export */   \"LIKES\": () => (/* binding */ LIKES),\n/* harmony export */   \"SHOWS_API\": () => (/* binding */ SHOWS_API)\n/* harmony export */ });\nconst SHOWS_API = 'https://api.tvmaze.com/shows';\r\nconst INVOLVEMENT_API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';\r\nconst APP_ID = 'UA1qh5oDK24p7rhA1W5m'\r\nconst LIKES = 'likes'\r\nconst COMMENTS = 'comments'\n\n//# sourceURL=webpack://Movie-app/./src/modules/services/rootEndpoints.js?");

/***/ }),

/***/ "./src/modules/services/userServices.js":
/*!**********************************************!*\
  !*** ./src/modules/services/userServices.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchShows\": () => (/* binding */ fetchShows),\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"postComments\": () => (/* binding */ postComments),\n/* harmony export */   \"postLikes\": () => (/* binding */ postLikes),\n/* harmony export */   \"updateLikes\": () => (/* binding */ updateLikes)\n/* harmony export */ });\n/* harmony import */ var _rootEndpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rootEndpoints */ \"./src/modules/services/rootEndpoints.js\");\n/* harmony import */ var _fetchApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchApi */ \"./src/modules/services/fetchApi.js\");\n\r\n\r\n\r\nconst fetchShows = async () => {\r\n\tconst shows = await (0,_fetchApi__WEBPACK_IMPORTED_MODULE_1__.get)(_rootEndpoints__WEBPACK_IMPORTED_MODULE_0__.SHOWS_API)\r\n\treturn shows\r\n}\r\n\r\nconst postComments = async data => {\r\n\tconst result = await (0,_fetchApi__WEBPACK_IMPORTED_MODULE_1__.post)(`${_rootEndpoints__WEBPACK_IMPORTED_MODULE_0__.INVOLVEMENT_API}/${_rootEndpoints__WEBPACK_IMPORTED_MODULE_0__.APP_ID}/${_rootEndpoints__WEBPACK_IMPORTED_MODULE_0__.COMMENTS}`, data)\r\n\treturn result\r\n}\r\n\r\nconst getComments = async id => {\r\n\tconst comments = await (0,_fetchApi__WEBPACK_IMPORTED_MODULE_1__.get)(`${_rootEndpoints__WEBPACK_IMPORTED_MODULE_0__.INVOLVEMENT_API}/${_rootEndpoints__WEBPACK_IMPORTED_MODULE_0__.APP_ID}/${_rootEndpoints__WEBPACK_IMPORTED_MODULE_0__.COMMENTS}?item_id=${id}`)\r\n\treturn comments\r\n}\r\n\r\nconst postLikes = async id => {\r\n\tconst res = await (0,_fetchApi__WEBPACK_IMPORTED_MODULE_1__.post)(`${_rootEndpoints__WEBPACK_IMPORTED_MODULE_0__.INVOLVEMENT_API}/${_rootEndpoints__WEBPACK_IMPORTED_MODULE_0__.APP_ID}/${_rootEndpoints__WEBPACK_IMPORTED_MODULE_0__.LIKES}`, { item_id: id })\r\n\treturn res\r\n}\r\n\r\nconst getLikes = async () => {\r\n\tconst likes = await (0,_fetchApi__WEBPACK_IMPORTED_MODULE_1__.get)(`${_rootEndpoints__WEBPACK_IMPORTED_MODULE_0__.INVOLVEMENT_API}/${_rootEndpoints__WEBPACK_IMPORTED_MODULE_0__.APP_ID}/${_rootEndpoints__WEBPACK_IMPORTED_MODULE_0__.LIKES}`)\r\n\treturn likes\r\n}\r\n\r\nconst updateLikes = async (id, display) => {\r\n\tconst saveLikes = await (0,_fetchApi__WEBPACK_IMPORTED_MODULE_1__.get)(`${_rootEndpoints__WEBPACK_IMPORTED_MODULE_0__.INVOLVEMENT_API}/${_rootEndpoints__WEBPACK_IMPORTED_MODULE_0__.APP_ID}/${_rootEndpoints__WEBPACK_IMPORTED_MODULE_0__.LIKES}`)\r\n\tsaveLikes.forEach(show => {\r\n\t\tif (show.item_id === id) {\r\n\t\t\tdisplay.value = `${show.likes}`\r\n\t\t}\r\n\t})\r\n}\r\n\n\n//# sourceURL=webpack://Movie-app/./src/modules/services/userServices.js?");

/***/ }),

/***/ "./src/images/netmovies.png":
/*!**********************************!*\
  !*** ./src/images/netmovies.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"912d91e0cfb6587b9c6d.png\";\n\n//# sourceURL=webpack://Movie-app/./src/images/netmovies.png?");

/***/ }),

/***/ "./src/images/thunder.jpg":
/*!********************************!*\
  !*** ./src/images/thunder.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d328fe3413b0f1b838bb.jpg\";\n\n//# sourceURL=webpack://Movie-app/./src/images/thunder.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;