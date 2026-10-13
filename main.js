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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: Arial, sans-serif;\n  background-color: #f4f6fb;\n  color: #20243a;\n}\n\n\n/* Workspace header */\n\n.workspace-header {\n  padding-bottom: 24px;\n  border-bottom: 1px solid #e7e9f0;\n}\n\n.workspace-header h2 {\n  margin: 8px 0;\n  font-size: 30px;\n  font-weight: 700;\n  letter-spacing: -0.8px;\n}\n\n.workspace-header .workspace-subtitle {\n  margin: 0;\n  font-size: 14px;\n}\n\n.app-layout {\n  display: grid;\n  grid-template-columns: 240px minmax(0, 1fr) 300px;\n  min-height: 100vh;\n}\n\n.sidebar {\n  background-color: #20243a;\n  color: #ffffff;\n  padding: 32px 20px;\n}\n\n.main-workspace {\n  padding: 40px 32px;\n}\n\n.task-panel {\n  background-color: #ffffff;\n  padding: 32px 24px;\n  border-left: 1px solid #e7e9f0;\n}\n\n.app-brand h1 {\n  margin: 0 0 8px;\n}\n\n.app-brand p,\n.workspace-subtitle,\n.panel-subtitle {\n  color: #8990a6;\n  line-height: 1.5;\n}\n\n.sidebar .app-brand p {\n  color: #b5bbcf;\n}\n\n.workspace-header {\n  margin-bottom: 32px;\n}\n\n.eyebrow {\n  color: #7063d8;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: 1.5px;\n}\n\n\n/* Project navigation */\n\n.projects {\n  margin-top: 8px;\n}\n\n.projects button {\n  width: 100%;\n  padding: 12px 14px;\n  border: none;\n  border-radius: 8px;\n  background: transparent;\n  color: #dce0ef;\n  text-align: left;\n  font-size: 14px;\n  cursor: pointer;\n  transition: background-color 180ms ease;\n}\n\n.projects button:hover {\n  background-color: #303751;\n}\n\n.projects button.active-project {\n  background-color: #7063d8;\n  color: #ffffff;\n  box-shadow: 0 4px 10px rgb(0 0 0 / 12%);\n}\n\n.projects button.active-project:hover {\n  background-color: #6254c7;\n}\n\n/* Project section heading */\n\n.projects-section h2 {\n  margin-top: 36px;\n  margin-bottom: 16px;\n  color: #9ca5c0;\n  font-size: 11px;\n  letter-spacing: 1.5px;\n}\n\n/* Todo cards */\n\n.todo-card {\n  margin-bottom: 14px;\n  padding: 20px;\n  border: 1px solid #e7e9f0;\n  border-radius: 12px;\n  background-color: #ffffff;\n  box-shadow: 0 3px 10px rgb(30 40 80 / 4%);\n  transition: box-shadow 180ms ease;\n}\n\n.todo-card:hover {\n  box-shadow: 0 6px 18px rgb(30 40 80 / 8%);\n}\n\n.todo-title {\n  margin-bottom: 8px;\n  font-size: 17px;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.todo-due-date {\n  margin-bottom: 12px;\n  color: #8990a6;\n  font-size: 13px;\n}\n\n.todo-description {\n  margin-bottom: 10px;\n  color: #555d75;\n  line-height: 1.6;\n}\n\n.todo-priority {\n  margin-bottom: 12px;\n  font-size: 13px;\n  font-weight: 600;\n}\n\n.todo-checkbox {\n  margin-right: 10px;\n  accent-color: #7063d8;\n}\n\n.edit-btn,\n.delete-btn {\n  margin-top: 10px;\n  margin-right: 8px;\n  padding: 8px 14px;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  cursor: pointer;\n  transition: background-color 180ms ease;\n}\n\n.edit-btn {\n  background-color: #eeecff;\n  color: #6254c7;\n}\n\n.edit-btn:hover {\n  background-color: #ded9ff;\n}\n\n.delete-btn {\n  background-color: #fff0f0;\n  color: #c44848;\n}\n\n.delete-btn:hover {\n  background-color: #ffdddd;\n}\n\n\n/* Todo editing form */\n\n.todo-card .edit-input {\n  display: block;\n  width: 100%;\n  min-width: 0;\n  margin: 8px 0 14px;\n  padding: 10px 12px;\n  border: 1px solid #e0e3ed;\n  border-radius: 8px;\n  background-color: #fafbfe;\n  color: #20243a;\n  font: inherit;\n  font-size: 13px;\n  outline: none;\n  transition: border-color 180ms ease, box-shadow 180ms ease;\n}\n\n.todo-card .edit-input:focus {\n  border-color: #7063d8;\n  box-shadow: 0 0 0 3px rgb(112 99 216 / 12%);\n}\n\n.todo-card textarea.edit-input {\n  min-height: 90px;\n  resize: vertical;\n}\n\n.todo-card .save-btn {\n  margin-top: 8px;\n  padding: 9px 16px;\n  border: none;\n  border-radius: 7px;\n  background-color: #7063d8;\n  color: #ffffff;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background-color 180ms ease;\n}\n\n.todo-card .save-btn:hover {\n  background-color: #6254c7;\n}\n\n/* Task creation panel */\n\n.task-panel h2 {\n  margin-top: 0;\n  margin-bottom: 8px;\n  font-size: 21px;\n  font-weight: 600;\n}\n\n.task-panel .panel-subtitle {\n  margin-bottom: 28px;\n  font-size: 14px;\n}\n\n/* Form labels and fields */\n\n#todo-form {\n  display: flex;\n  flex-direction: column;\n}\n\n#todo-form label {\n  margin-bottom: 8px;\n  color: #424963;\n  font-size: 13px;\n  font-weight: 600;\n}\n\n#todo-form input,\n#todo-form textarea,\n#todo-form select {\n  width: 100%;\n  margin-bottom: 20px;\n  padding: 11px 12px;\n  border: 1px solid #e0e3ed;\n  border-radius: 8px;\n  background-color: #fafbfe;\n  color: #20243a;\n  font: inherit;\n  font-size: 13px;\n  outline: none;\n  transition: border-color 180ms ease, box-shadow 180ms ease;\n}\n\n/* Highlight the field being used */\n\n#todo-form input:focus,\n#todo-form textarea:focus,\n#todo-form select:focus {\n  border-color: #7063d8;\n  box-shadow: 0 0 0 3px rgb(112 99 216 / 12%);\n}\n\n/* Description field */\n\n#todo-form textarea {\n  min-height: 100px;\n  resize: vertical;\n}\n\n/* Create task button */\n\n#add-todo {\n  padding: 13px 16px;\n  border: none;\n  border-radius: 8px;\n  background-color: #7063d8;\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background-color 180ms ease, transform 180ms ease;\n}\n\n#add-todo:hover {\n  background-color: #6254c7;\n}\n\n#add-todo:active {\n  transform: translateY(1px);\n}\n\n\n/* Add project form */\n\n#project-form {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-top: 20px;\n}\n\n#project-name {\n  width: 100%;\n  min-width: 0;\n  padding: 11px 12px;\n  border: 1px solid #414965;\n  border-radius: 8px;\n  background-color: #292f49;\n  color: #ffffff;\n  font: inherit;\n  font-size: 13px;\n  outline: none;\n  transition: border-color 180ms ease, box-shadow 180ms ease;\n}\n\n#project-name::placeholder {\n  color: #a0a8c0;\n}\n\n#project-name:focus {\n  border-color: #9388ff;\n  box-shadow: 0 0 0 3px rgb(147 136 255 / 15%);\n}\n\n#add-project {\n  width: 100%;\n  padding: 11px 12px;\n  border: 1px solid #414965;\n  border-radius: 8px;\n  background-color: #303751;\n  color: #e6e8f5;\n  font-size: 13px;\n  font-weight: 600;\n  text-align: left;\n  cursor: pointer;\n  transition: background-color 180ms ease, border-color 180ms ease;\n}\n\n#add-project:hover {\n  border-color: #7063d8;\n  background-color: #3a3e60;\n}\n\n/* Empty project state */\n\n.empty-state {\n  margin-top: 20px;\n  padding: 48px 24px;\n  border: 1px dashed #d8dbea;\n  border-radius: 12px;\n  background-color: rgb(255 255 255 / 60%);\n  text-align: center;\n}\n\n.empty-state h3 {\n  margin: 0 0 10px;\n  color: #343a53;\n  font-size: 18px;\n}\n\n.empty-state p {\n  max-width: 340px;\n  margin: 0 auto;\n  color: #8990a6;\n  font-size: 14px;\n  line-height: 1.6;\n}\n\n\n/* Task priority indicators */\n\n.priority-indicator {\n  display: table;\n  margin: 8px 0 14px;\n  padding: 5px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: capitalize;\n}\n\n.priority-high {\n  background-color: #fff0f0;\n  color: #c44848;\n}\n\n.priority-medium {\n  background-color: #fff5df;\n  color: #986616;\n}\n\n.priority-low {\n  background-color: #e8f7ef;\n  color: #287a50;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/displayController.js"
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderProjects: () => (/* binding */ renderProjects),\n/* harmony export */   renderTodos: () => (/* binding */ renderTodos)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n/* harmony import */ var _todoController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoController.js */ \"./src/todoController.js\");\n\n\n\n\nfunction renderProjects() {\n  const content = document.querySelector(\"#content\");\n\n  content.innerHTML = \"\";\n\n  _project_js__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((project) => {\n    const projectsContainer = document.createElement(\"div\");\n    const projectButton = document.createElement(\"button\");\n\n    projectsContainer.classList.add(\"projects\");\n\n    projectButton.textContent = project.name;\n\n    projectButton.addEventListener(\"click\", () => {\n      document\n        .querySelectorAll(\".projects button\")\n        .forEach((button) => {\n          button.classList.remove(\"active-project\");\n        });\n\n      projectButton.classList.add(\"active-project\");\n\n      renderTodos(project);\n    });\n\n    projectsContainer.append(projectButton);\n    content.appendChild(projectsContainer);\n  });\n}\n\nfunction renderTodos (project) {\n  const todosContainer = document.querySelector(\"#todos\");\n\n  todosContainer.innerHTML = \"\";\n\n  if(project.todos.length === 0){\n    const emptyState = document.createElement(\"div\");\n    const emptyTitle = document.createElement(\"h3\");\n    const emptyMessage = document.createElement(\"p\");\n\n    emptyState.classList.add(\"empty-state\");\n    emptyTitle.textContent = \"Nothing on your list yet\";\n    emptyMessage.textContent = \n      \"Create a task using the form on the right to get started\";\n    \n    emptyState.append(emptyTitle, emptyMessage);\n    todosContainer.append(emptyState);\n  }\n\n  project.todos.forEach((todo) => {\n    const todoContent  = document.createElement(\"div\");\n    const todoDetails = document.createElement(\"div\");\n    const todoTitle = document.createElement(\"div\");\n    const todoDescription = document.createElement(\"div\");\n    const todoDueDate = document.createElement(\"div\");\n    const todoPriority = document.createElement(\"div\");\n    const deleteButton = document.createElement(\"button\");\n    const completeCheckbox = document.createElement(\"input\");\n    const editButton = document.createElement(\"button\");\n\n    todoContent.classList.add(\"todo-card\");\n    todoTitle.classList.add(\"todo-title\");\n    todoDescription.classList.add(\"todo-description\");\n    todoDueDate.classList.add(\"todo-due-date\");\n    todoPriority.classList.add(\"priority-indicator\");\n\n    completeCheckbox.classList.add(\"todo-checkbox\");\n    editButton.classList.add(\"edit-btn\");\n    deleteButton.classList.add(\"delete-btn\");\n\n    todoTitle.textContent = todo.title;\n    todoDescription.textContent = todo.description;\n    todoDueDate.textContent = todo.dueDate;\n    todoPriority.textContent = todo.priority;\n\n    if(todo.priority){\n      todoPriority.classList.add(\n        `priority-${todo.priority.toLowerCase()}`\n      );\n    }\n\n    todoDetails.style.display = \"none\";\n    deleteButton.textContent = \"Delete\";\n\n    completeCheckbox.type = \"checkbox\";\n    completeCheckbox.checked = todo.completed;\n\n    editButton.textContent = \"Edit\";\n\n    todoTitle.addEventListener(\"click\", () => {\n      if(todoDetails.style.display === \"none\"){\n        todoDetails.style.display = \"block\";\n      }else{\n        todoDetails.style.display = \"none\";\n      }\n    });\n\n    deleteButton.addEventListener(\"click\", () => {\n      (0,_todoController_js__WEBPACK_IMPORTED_MODULE_2__.deleteTodo)(todo, project);\n      (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveProjects)(_project_js__WEBPACK_IMPORTED_MODULE_0__.projects);\n      todoContent.remove();\n    });\n\n    completeCheckbox.addEventListener(\"change\", () => {\n      (0,_todoController_js__WEBPACK_IMPORTED_MODULE_2__.completeTodo)(todo, completeCheckbox.checked);\n      (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveProjects)(_project_js__WEBPACK_IMPORTED_MODULE_0__.projects);\n    });\n\n    editButton.addEventListener(\"click\", () => {\n      const titleInput = document.createElement(\"input\");\n      titleInput.value = todo.title;\n      todoTitle.replaceWith(titleInput);\n      titleInput.classList.add(\"edit-input\");\n\n      const descriptionInput = document.createElement(\"textarea\");\n      descriptionInput.value = todo.description;\n      descriptionInput.classList.add(\"edit-input\");\n\n      const dueDateInput = document.createElement(\"input\");\n      dueDateInput.type = \"date\";\n      dueDateInput.value = todo.dueDate;\n      dueDateInput.classList.add(\"edit-input\");\n\n      const priorityInput = document.createElement(\"input\");\n      priorityInput.value = todo.priority;\n      priorityInput.classList.add(\"edit-input\");\n\n      const saveButton = document.createElement(\"button\");\n      saveButton.textContent = \"Save\";\n      saveButton.classList.add(\"save-btn\");\n\n      saveButton.addEventListener(\"click\", () => {\n        (0,_todoController_js__WEBPACK_IMPORTED_MODULE_2__.editTodo)(\n          todo,\n          titleInput.value,\n          descriptionInput.value,\n          dueDateInput.value,\n          priorityInput.value\n        );\n\n        (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveProjects)(_project_js__WEBPACK_IMPORTED_MODULE_0__.projects);\n\n        renderTodos(project);\n      });\n\n      todoDetails.innerHTML = \"\";\n\n      todoDetails.append(\n        descriptionInput,\n        dueDateInput,\n        priorityInput,\n        saveButton\n      );\n\n      todoDetails.style.display = \"block\";\n    });\n\n    todoDetails.append(\n      todoDescription,\n      todoPriority\n    );\n    todoContent.append(\n      completeCheckbox,\n      todoTitle,\n      todoDueDate,\n      todoDetails,\n      editButton,\n      deleteButton\n    );\n    todosContainer.append(todoContent);\n  });\n}\n\n//# sourceURL=webpack://to-do-list/./src/displayController.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _displayController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayController.js */ \"./src/displayController.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n/* harmony import */ var _todoController_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoController.js */ \"./src/todoController.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\nconst projectNameInput = document.querySelector(\"#project-name\");\nconst addProjectButton = document.querySelector(\"#add-project\");\n\naddProjectButton.addEventListener(\"click\", () => {\n  if(projectNameInput.value === \"\") {\n    return;\n  }\n\n  ;(0,_todoController_js__WEBPACK_IMPORTED_MODULE_3__.createProject)(projectNameInput.value);\n\n  (0,_displayController_js__WEBPACK_IMPORTED_MODULE_0__.renderProjects)();\n  renderProjectOptions();\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveProjects)(_project_js__WEBPACK_IMPORTED_MODULE_1__.projects);\n});\n\nconst todoProjectSelect = document.querySelector(\"#todo-project\");\nconst todoTitleInput = document.querySelector(\"#todo-title\");\nconst todoDescriptionInput = document.querySelector(\"#todo-description\");\nconst todoDueDateInput = document.querySelector(\"#todo-due-date\");\nconst todoPriorityInput = document.querySelector(\"#todo-priority\");\nconst addTodoButton = document.querySelector(\"#add-todo\");\n\naddTodoButton.addEventListener(\"click\", () => {\n  if(todoTitleInput.value === \"\"){\n    return;\n  }\n  \n  const selectedProject = _project_js__WEBPACK_IMPORTED_MODULE_1__.projects[todoProjectSelect.value];\n\n  (0,_todoController_js__WEBPACK_IMPORTED_MODULE_3__.createTodo)(\n    todoTitleInput.value,\n    todoDescriptionInput.value,\n    todoDueDateInput.value,\n    todoPriorityInput.value,\n    selectedProject\n  );\n\n  (0,_displayController_js__WEBPACK_IMPORTED_MODULE_0__.renderTodos)(selectedProject);\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveProjects)(_project_js__WEBPACK_IMPORTED_MODULE_1__.projects);\n\n  todoTitleInput.value = \"\";\n  todoDescriptionInput.value = \"\";\n  todoDueDateInput.value = \"\";\n  todoPriorityInput.value = \"\";\n});\n\nfunction renderProjectOptions () {\n  todoProjectSelect.innerHTML = \"\";\n\n  _project_js__WEBPACK_IMPORTED_MODULE_1__.projects.forEach((project) => {\n    const option = document.createElement(\"option\");\n\n    option.value = _project_js__WEBPACK_IMPORTED_MODULE_1__.projects.indexOf(project);\n    option.textContent = project.name;\n\n    todoProjectSelect.append(option);\n  });\n}\n\n;(0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.loadProjects)();\nrenderProjectOptions();\n(0,_displayController_js__WEBPACK_IMPORTED_MODULE_0__.renderProjects)();\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?\n}");

/***/ },

/***/ "./src/project.js"
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   project: () => (/* binding */ project),\n/* harmony export */   projects: () => (/* binding */ projects)\n/* harmony export */ });\nfunction project (name) {\n\n  return {\n    name: name,\n    todos: [],\n\n    addTodo(newTodo){\n      this.todos.push(newTodo);\n    }\n  }\n}\n\nconst projects = [];\n\nprojects.push(project(\"Default\"));\nprojects.push(project(\"The Odin Project\"));\n\n\n//# sourceURL=webpack://to-do-list/./src/project.js?\n}");

/***/ },

/***/ "./src/storage.js"
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadProjects: () => (/* binding */ loadProjects),\n/* harmony export */   saveProjects: () => (/* binding */ saveProjects)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n \n\n\nfunction saveProjects(projects) {\n  localStorage.setItem(\"projects\", JSON.stringify(projects));\n  \n}\n\nfunction loadProjects() {\n  const savedProjects = JSON.parse(localStorage.getItem(\"projects\"));\n\n  if(!savedProjects) {\n    return;\n  }\n\n  _project_js__WEBPACK_IMPORTED_MODULE_0__.projects.length = 0;\n\n  savedProjects.forEach((savedProject) => {\n    const newProject = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.project)(savedProject.name);\n\n    savedProject.todos.forEach((savedTodo) => {\n      const newTodo = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.todo)(\n        savedTodo.title,\n        savedTodo.description,\n        savedTodo.dueDate,\n        savedTodo.priority\n      );\n\n      newTodo.completed = savedTodo.completed\n\n      newProject.addTodo(newTodo);\n    });\n\n    _project_js__WEBPACK_IMPORTED_MODULE_0__.projects.push(newProject);\n    console.log(newProject);\n  });\n}\n\n//# sourceURL=webpack://to-do-list/./src/storage.js?\n}");

/***/ },

/***/ "./src/todo.js"
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   todo: () => (/* binding */ todo)\n/* harmony export */ });\nfunction todo (title, description, dueDate, priority){\n\n  return {\n    title,\n    description,\n    dueDate,\n    priority,\n    completed: false,\n  }\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/todo.js?\n}");

/***/ },

/***/ "./src/todoController.js"
/*!*******************************!*\
  !*** ./src/todoController.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changePriority: () => (/* binding */ changePriority),\n/* harmony export */   completeTodo: () => (/* binding */ completeTodo),\n/* harmony export */   createProject: () => (/* binding */ createProject),\n/* harmony export */   createTodo: () => (/* binding */ createTodo),\n/* harmony export */   deleteTodo: () => (/* binding */ deleteTodo),\n/* harmony export */   editTodo: () => (/* binding */ editTodo)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n\n\n\nfunction createProject (name) {\n  const newProject = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.project)(name);\n  _project_js__WEBPACK_IMPORTED_MODULE_0__.projects.push(newProject);\n}\n\nfunction createTodo(title, description, dueDate, priority, project) {\n  const newTodo = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.todo)(\n    title,\n    description,\n    dueDate,\n    priority,\n  );\n\n  project.addTodo(newTodo);\n\n  return newTodo;\n}\n\nfunction completeTodo (todo, completed) {\n  todo.completed = completed;\n}\n\nfunction changePriority (todo, newPriority) {\n  todo.priority = newPriority;\n}\n\nfunction deleteTodo (todo, project) {\n  const index = project.todos.indexOf(todo);\n  \n  project.todos.splice(index, 1);\n}\n\nfunction editTodo (todo, title, description, dueDate, priority) {\n  todo.title = title;\n  todo.description = description;\n  todo.dueDate = dueDate;\n  todo.priority = priority;\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/todoController.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	__webpack_require__.nc = undefined;
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;