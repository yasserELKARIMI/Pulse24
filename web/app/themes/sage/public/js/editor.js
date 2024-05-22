/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_roots_bud_sage"] = self["webpackChunk_roots_bud_sage"] || []).push([["editor"],{

/***/ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/* global __webpack_require__ */\nvar Refresh = __webpack_require__(\"../node_modules/react-refresh/runtime.js\");\n\n/**\n * Extracts exports from a webpack module object.\n * @param {string} moduleId A Webpack module ID.\n * @returns {*} An exports object from the module.\n */\nfunction getModuleExports(moduleId) {\n  if (typeof moduleId === 'undefined') {\n    // `moduleId` is unavailable, which indicates that this module is not in the cache,\n    // which means we won't be able to capture any exports,\n    // and thus they cannot be refreshed safely.\n    // These are likely runtime or dynamically generated modules.\n    return {};\n  }\n\n  var maybeModule = __webpack_require__.c[moduleId];\n  if (typeof maybeModule === 'undefined') {\n    // `moduleId` is available but the module in cache is unavailable,\n    // which indicates the module is somehow corrupted (e.g. broken Webpacak `module` globals).\n    // We will warn the user (as this is likely a mistake) and assume they cannot be refreshed.\n    console.warn('[React Refresh] Failed to get exports for module: ' + moduleId + '.');\n    return {};\n  }\n\n  var exportsOrPromise = maybeModule.exports;\n  if (typeof Promise !== 'undefined' && exportsOrPromise instanceof Promise) {\n    return exportsOrPromise.then(function (exports) {\n      return exports;\n    });\n  }\n  return exportsOrPromise;\n}\n\n/**\n * Calculates the signature of a React refresh boundary.\n * If this signature changes, it's unsafe to accept the boundary.\n *\n * This implementation is based on the one in [Metro](https://github.com/facebook/metro/blob/907d6af22ac6ebe58572be418e9253a90665ecbd/packages/metro/src/lib/polyfills/require.js#L795-L816).\n * @param {*} moduleExports A Webpack module exports object.\n * @returns {string[]} A React refresh boundary signature array.\n */\nfunction getReactRefreshBoundarySignature(moduleExports) {\n  var signature = [];\n  signature.push(Refresh.getFamilyByType(moduleExports));\n\n  if (moduleExports == null || typeof moduleExports !== 'object') {\n    // Exit if we can't iterate over exports.\n    return signature;\n  }\n\n  for (var key in moduleExports) {\n    if (key === '__esModule') {\n      continue;\n    }\n\n    signature.push(key);\n    signature.push(Refresh.getFamilyByType(moduleExports[key]));\n  }\n\n  return signature;\n}\n\n/**\n * Creates a data object to be retained across refreshes.\n * This object should not transtively reference previous exports,\n * which can form infinite chain of objects across refreshes, which can pressure RAM.\n *\n * @param {*} moduleExports A Webpack module exports object.\n * @returns {*} A React refresh boundary signature array.\n */\nfunction getWebpackHotData(moduleExports) {\n  return {\n    signature: getReactRefreshBoundarySignature(moduleExports),\n    isReactRefreshBoundary: isReactRefreshBoundary(moduleExports),\n  };\n}\n\n/**\n * Creates a helper that performs a delayed React refresh.\n * @returns {function(function(): void): void} A debounced React refresh function.\n */\nfunction createDebounceUpdate() {\n  /**\n   * A cached setTimeout handler.\n   * @type {number | undefined}\n   */\n  var refreshTimeout;\n\n  /**\n   * Performs react refresh on a delay and clears the error overlay.\n   * @param {function(): void} callback\n   * @returns {void}\n   */\n  function enqueueUpdate(callback) {\n    if (typeof refreshTimeout === 'undefined') {\n      refreshTimeout = setTimeout(function () {\n        refreshTimeout = undefined;\n        Refresh.performReactRefresh();\n        callback();\n      }, 30);\n    }\n  }\n\n  return enqueueUpdate;\n}\n\n/**\n * Checks if all exports are likely a React component.\n *\n * This implementation is based on the one in [Metro](https://github.com/facebook/metro/blob/febdba2383113c88296c61e28e4ef6a7f4939fda/packages/metro/src/lib/polyfills/require.js#L748-L774).\n * @param {*} moduleExports A Webpack module exports object.\n * @returns {boolean} Whether the exports are React component like.\n */\nfunction isReactRefreshBoundary(moduleExports) {\n  if (Refresh.isLikelyComponentType(moduleExports)) {\n    return true;\n  }\n  if (moduleExports === undefined || moduleExports === null || typeof moduleExports !== 'object') {\n    // Exit if we can't iterate over exports.\n    return false;\n  }\n\n  var hasExports = false;\n  var areAllExportsComponents = true;\n  for (var key in moduleExports) {\n    hasExports = true;\n\n    // This is the ES Module indicator flag\n    if (key === '__esModule') {\n      continue;\n    }\n\n    // We can (and have to) safely execute getters here,\n    // as Webpack manually assigns harmony exports to getters,\n    // without any side-effects attached.\n    // Ref: https://github.com/webpack/webpack/blob/b93048643fe74de2a6931755911da1212df55897/lib/MainTemplate.js#L281\n    var exportValue = moduleExports[key];\n    if (!Refresh.isLikelyComponentType(exportValue)) {\n      areAllExportsComponents = false;\n    }\n  }\n\n  return hasExports && areAllExportsComponents;\n}\n\n/**\n * Checks if exports are likely a React component and registers them.\n *\n * This implementation is based on the one in [Metro](https://github.com/facebook/metro/blob/febdba2383113c88296c61e28e4ef6a7f4939fda/packages/metro/src/lib/polyfills/require.js#L818-L835).\n * @param {*} moduleExports A Webpack module exports object.\n * @param {string} moduleId A Webpack module ID.\n * @returns {void}\n */\nfunction registerExportsForReactRefresh(moduleExports, moduleId) {\n  if (Refresh.isLikelyComponentType(moduleExports)) {\n    // Register module.exports if it is likely a component\n    Refresh.register(moduleExports, moduleId + ' %exports%');\n  }\n\n  if (moduleExports === undefined || moduleExports === null || typeof moduleExports !== 'object') {\n    // Exit if we can't iterate over the exports.\n    return;\n  }\n\n  for (var key in moduleExports) {\n    // Skip registering the ES Module indicator\n    if (key === '__esModule') {\n      continue;\n    }\n\n    var exportValue = moduleExports[key];\n    if (Refresh.isLikelyComponentType(exportValue)) {\n      var typeID = moduleId + ' %exports% ' + key;\n      Refresh.register(exportValue, typeID);\n    }\n  }\n}\n\n/**\n * Compares previous and next module objects to check for mutated boundaries.\n *\n * This implementation is based on the one in [Metro](https://github.com/facebook/metro/blob/907d6af22ac6ebe58572be418e9253a90665ecbd/packages/metro/src/lib/polyfills/require.js#L776-L792).\n * @param {*} prevSignature The signature of the current Webpack module exports object.\n * @param {*} nextSignature The signature of the next Webpack module exports object.\n * @returns {boolean} Whether the React refresh boundary should be invalidated.\n */\nfunction shouldInvalidateReactRefreshBoundary(prevSignature, nextSignature) {\n  if (prevSignature.length !== nextSignature.length) {\n    return true;\n  }\n\n  for (var i = 0; i < nextSignature.length; i += 1) {\n    if (prevSignature[i] !== nextSignature[i]) {\n      return true;\n    }\n  }\n\n  return false;\n}\n\nvar enqueueUpdate = createDebounceUpdate();\nfunction executeRuntime(moduleExports, moduleId, webpackHot, refreshOverlay, isTest) {\n  registerExportsForReactRefresh(moduleExports, moduleId);\n\n  if (webpackHot) {\n    var isHotUpdate = !!webpackHot.data;\n    var prevData;\n    if (isHotUpdate) {\n      prevData = webpackHot.data.prevData;\n    }\n\n    if (isReactRefreshBoundary(moduleExports)) {\n      webpackHot.dispose(\n        /**\n         * A callback to performs a full refresh if React has unrecoverable errors,\n         * and also caches the to-be-disposed module.\n         * @param {*} data A hot module data object from Webpack HMR.\n         * @returns {void}\n         */\n        function hotDisposeCallback(data) {\n          // We have to mutate the data object to get data registered and cached\n          data.prevData = getWebpackHotData(moduleExports);\n        }\n      );\n      webpackHot.accept(\n        /**\n         * An error handler to allow self-recovering behaviours.\n         * @param {Error} error An error occurred during evaluation of a module.\n         * @returns {void}\n         */\n        function hotErrorHandler(error) {\n          if (typeof refreshOverlay !== 'undefined' && refreshOverlay) {\n            refreshOverlay.handleRuntimeError(error);\n          }\n\n          if (typeof isTest !== 'undefined' && isTest) {\n            if (window.onHotAcceptError) {\n              window.onHotAcceptError(error.message);\n            }\n          }\n\n          __webpack_require__.c[moduleId].hot.accept(hotErrorHandler);\n        }\n      );\n\n      if (isHotUpdate) {\n        if (\n          prevData &&\n          prevData.isReactRefreshBoundary &&\n          shouldInvalidateReactRefreshBoundary(\n            prevData.signature,\n            getReactRefreshBoundarySignature(moduleExports)\n          )\n        ) {\n          webpackHot.invalidate();\n        } else {\n          enqueueUpdate(\n            /**\n             * A function to dismiss the error overlay after performing React refresh.\n             * @returns {void}\n             */\n            function updateCallback() {\n              if (typeof refreshOverlay !== 'undefined' && refreshOverlay) {\n                refreshOverlay.clearRuntimeErrors();\n              }\n            }\n          );\n        }\n      }\n    } else {\n      if (isHotUpdate && typeof prevData !== 'undefined') {\n        webpackHot.invalidate();\n      }\n    }\n  }\n}\n\nmodule.exports = Object.freeze({\n  enqueueUpdate: enqueueUpdate,\n  executeRuntime: executeRuntime,\n  getModuleExports: getModuleExports,\n  isReactRefreshBoundary: isReactRefreshBoundary,\n  registerExportsForReactRefresh: registerExportsForReactRefresh,\n});\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js?");

/***/ }),

/***/ "../node_modules/@roots/bud-support/lib/css-loader/index.cjs??css!../node_modules/postcss-loader/dist/cjs.js??postcss!./styles/editor.css":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"../node_modules/css-loader/dist/runtime/sourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\", \"\",{\"version\":3,\"sources\":[],\"names\":[],\"mappings\":\"\",\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://@roots/bud/sage/./styles/editor.css?../node_modules/@roots/bud-support/lib/css-loader/index.cjs??css!../node_modules/postcss-loader/dist/cjs.js??postcss");

/***/ }),

/***/ "./styles/editor.css":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(\"../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(\"../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(\"../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(\"../node_modules/@roots/bud-support/lib/css-loader/index.cjs??css!../node_modules/postcss-loader/dist/cjs.js??postcss!./styles/editor.css\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\nif (true) {\n  if (!_node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n  var p;\n  for (p in a) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n  for (p in b) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n    if (!a[p]) {\n      return false;\n    }\n  }\n  return true;\n};\n    var isNamedExport = !_node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n    var oldLocals = isNamedExport ? _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n    module.hot.accept(\n      \"../node_modules/@roots/bud-support/lib/css-loader/index.cjs??css!../node_modules/postcss-loader/dist/cjs.js??postcss!./styles/editor.css\",\n      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(\"../node_modules/@roots/bud-support/lib/css-loader/index.cjs??css!../node_modules/postcss-loader/dist/cjs.js??postcss!./styles/editor.css\");\n(function () {\n        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals, isNamedExport)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = isNamedExport ? _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n              update(_node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n\n\n       /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://@roots/bud/sage/./styles/editor.css?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/***/ (function(module) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/sourceMaps.js":
/***/ (function(module) {

"use strict";
eval("\n\nmodule.exports = function (item) {\n  var content = item[1];\n  var cssMapping = item[3];\n  if (!cssMapping) {\n    return content;\n  }\n  if (typeof btoa === \"function\") {\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n    var sourceMapping = \"/*# \".concat(data, \" */\");\n    return [content].concat([sourceMapping]).join(\"\\n\");\n  }\n  return [content].join(\"\\n\");\n};\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/css-loader/dist/runtime/sourceMaps.js?");

/***/ }),

/***/ "../node_modules/react-refresh/cjs/react-refresh-runtime.development.js":
/***/ (function(__unused_webpack_module, exports) {

"use strict";
eval("/**\n * @license React\n * react-refresh-runtime.development.js\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nif (true) {\n  (function() {\n'use strict';\n\n// ATTENTION\nvar REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');\nvar REACT_MEMO_TYPE = Symbol.for('react.memo');\n\nvar PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map; // We never remove these associations.\n// It's OK to reference families, but use WeakMap/Set for types.\n\nvar allFamiliesByID = new Map();\nvar allFamiliesByType = new PossiblyWeakMap();\nvar allSignaturesByType = new PossiblyWeakMap(); // This WeakMap is read by React, so we only put families\n// that have actually been edited here. This keeps checks fast.\n// $FlowIssue\n\nvar updatedFamiliesByType = new PossiblyWeakMap(); // This is cleared on every performReactRefresh() call.\n// It is an array of [Family, NextType] tuples.\n\nvar pendingUpdates = []; // This is injected by the renderer via DevTools global hook.\n\nvar helpersByRendererID = new Map();\nvar helpersByRoot = new Map(); // We keep track of mounted roots so we can schedule updates.\n\nvar mountedRoots = new Set(); // If a root captures an error, we remember it so we can retry on edit.\n\nvar failedRoots = new Set(); // In environments that support WeakMap, we also remember the last element for every root.\n// It needs to be weak because we do this even for roots that failed to mount.\n// If there is no WeakMap, we won't attempt to do retrying.\n// $FlowIssue\n\nvar rootElements = // $FlowIssue\ntypeof WeakMap === 'function' ? new WeakMap() : null;\nvar isPerformingRefresh = false;\n\nfunction computeFullKey(signature) {\n  if (signature.fullKey !== null) {\n    return signature.fullKey;\n  }\n\n  var fullKey = signature.ownKey;\n  var hooks;\n\n  try {\n    hooks = signature.getCustomHooks();\n  } catch (err) {\n    // This can happen in an edge case, e.g. if expression like Foo.useSomething\n    // depends on Foo which is lazily initialized during rendering.\n    // In that case just assume we'll have to remount.\n    signature.forceReset = true;\n    signature.fullKey = fullKey;\n    return fullKey;\n  }\n\n  for (var i = 0; i < hooks.length; i++) {\n    var hook = hooks[i];\n\n    if (typeof hook !== 'function') {\n      // Something's wrong. Assume we need to remount.\n      signature.forceReset = true;\n      signature.fullKey = fullKey;\n      return fullKey;\n    }\n\n    var nestedHookSignature = allSignaturesByType.get(hook);\n\n    if (nestedHookSignature === undefined) {\n      // No signature means Hook wasn't in the source code, e.g. in a library.\n      // We'll skip it because we can assume it won't change during this session.\n      continue;\n    }\n\n    var nestedHookKey = computeFullKey(nestedHookSignature);\n\n    if (nestedHookSignature.forceReset) {\n      signature.forceReset = true;\n    }\n\n    fullKey += '\\n---\\n' + nestedHookKey;\n  }\n\n  signature.fullKey = fullKey;\n  return fullKey;\n}\n\nfunction haveEqualSignatures(prevType, nextType) {\n  var prevSignature = allSignaturesByType.get(prevType);\n  var nextSignature = allSignaturesByType.get(nextType);\n\n  if (prevSignature === undefined && nextSignature === undefined) {\n    return true;\n  }\n\n  if (prevSignature === undefined || nextSignature === undefined) {\n    return false;\n  }\n\n  if (computeFullKey(prevSignature) !== computeFullKey(nextSignature)) {\n    return false;\n  }\n\n  if (nextSignature.forceReset) {\n    return false;\n  }\n\n  return true;\n}\n\nfunction isReactClass(type) {\n  return type.prototype && type.prototype.isReactComponent;\n}\n\nfunction canPreserveStateBetween(prevType, nextType) {\n  if (isReactClass(prevType) || isReactClass(nextType)) {\n    return false;\n  }\n\n  if (haveEqualSignatures(prevType, nextType)) {\n    return true;\n  }\n\n  return false;\n}\n\nfunction resolveFamily(type) {\n  // Only check updated types to keep lookups fast.\n  return updatedFamiliesByType.get(type);\n} // If we didn't care about IE11, we could use new Map/Set(iterable).\n\n\nfunction cloneMap(map) {\n  var clone = new Map();\n  map.forEach(function (value, key) {\n    clone.set(key, value);\n  });\n  return clone;\n}\n\nfunction cloneSet(set) {\n  var clone = new Set();\n  set.forEach(function (value) {\n    clone.add(value);\n  });\n  return clone;\n} // This is a safety mechanism to protect against rogue getters and Proxies.\n\n\nfunction getProperty(object, property) {\n  try {\n    return object[property];\n  } catch (err) {\n    // Intentionally ignore.\n    return undefined;\n  }\n}\n\nfunction performReactRefresh() {\n\n  if (pendingUpdates.length === 0) {\n    return null;\n  }\n\n  if (isPerformingRefresh) {\n    return null;\n  }\n\n  isPerformingRefresh = true;\n\n  try {\n    var staleFamilies = new Set();\n    var updatedFamilies = new Set();\n    var updates = pendingUpdates;\n    pendingUpdates = [];\n    updates.forEach(function (_ref) {\n      var family = _ref[0],\n          nextType = _ref[1];\n      // Now that we got a real edit, we can create associations\n      // that will be read by the React reconciler.\n      var prevType = family.current;\n      updatedFamiliesByType.set(prevType, family);\n      updatedFamiliesByType.set(nextType, family);\n      family.current = nextType; // Determine whether this should be a re-render or a re-mount.\n\n      if (canPreserveStateBetween(prevType, nextType)) {\n        updatedFamilies.add(family);\n      } else {\n        staleFamilies.add(family);\n      }\n    }); // TODO: rename these fields to something more meaningful.\n\n    var update = {\n      updatedFamilies: updatedFamilies,\n      // Families that will re-render preserving state\n      staleFamilies: staleFamilies // Families that will be remounted\n\n    };\n    helpersByRendererID.forEach(function (helpers) {\n      // Even if there are no roots, set the handler on first update.\n      // This ensures that if *new* roots are mounted, they'll use the resolve handler.\n      helpers.setRefreshHandler(resolveFamily);\n    });\n    var didError = false;\n    var firstError = null; // We snapshot maps and sets that are mutated during commits.\n    // If we don't do this, there is a risk they will be mutated while\n    // we iterate over them. For example, trying to recover a failed root\n    // may cause another root to be added to the failed list -- an infinite loop.\n\n    var failedRootsSnapshot = cloneSet(failedRoots);\n    var mountedRootsSnapshot = cloneSet(mountedRoots);\n    var helpersByRootSnapshot = cloneMap(helpersByRoot);\n    failedRootsSnapshot.forEach(function (root) {\n      var helpers = helpersByRootSnapshot.get(root);\n\n      if (helpers === undefined) {\n        throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');\n      }\n\n      if (!failedRoots.has(root)) {// No longer failed.\n      }\n\n      if (rootElements === null) {\n        return;\n      }\n\n      if (!rootElements.has(root)) {\n        return;\n      }\n\n      var element = rootElements.get(root);\n\n      try {\n        helpers.scheduleRoot(root, element);\n      } catch (err) {\n        if (!didError) {\n          didError = true;\n          firstError = err;\n        } // Keep trying other roots.\n\n      }\n    });\n    mountedRootsSnapshot.forEach(function (root) {\n      var helpers = helpersByRootSnapshot.get(root);\n\n      if (helpers === undefined) {\n        throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');\n      }\n\n      if (!mountedRoots.has(root)) {// No longer mounted.\n      }\n\n      try {\n        helpers.scheduleRefresh(root, update);\n      } catch (err) {\n        if (!didError) {\n          didError = true;\n          firstError = err;\n        } // Keep trying other roots.\n\n      }\n    });\n\n    if (didError) {\n      throw firstError;\n    }\n\n    return update;\n  } finally {\n    isPerformingRefresh = false;\n  }\n}\nfunction register(type, id) {\n  {\n    if (type === null) {\n      return;\n    }\n\n    if (typeof type !== 'function' && typeof type !== 'object') {\n      return;\n    } // This can happen in an edge case, e.g. if we register\n    // return value of a HOC but it returns a cached component.\n    // Ignore anything but the first registration for each type.\n\n\n    if (allFamiliesByType.has(type)) {\n      return;\n    } // Create family or remember to update it.\n    // None of this bookkeeping affects reconciliation\n    // until the first performReactRefresh() call above.\n\n\n    var family = allFamiliesByID.get(id);\n\n    if (family === undefined) {\n      family = {\n        current: type\n      };\n      allFamiliesByID.set(id, family);\n    } else {\n      pendingUpdates.push([family, type]);\n    }\n\n    allFamiliesByType.set(type, family); // Visit inner types because we might not have registered them.\n\n    if (typeof type === 'object' && type !== null) {\n      switch (getProperty(type, '$$typeof')) {\n        case REACT_FORWARD_REF_TYPE:\n          register(type.render, id + '$render');\n          break;\n\n        case REACT_MEMO_TYPE:\n          register(type.type, id + '$type');\n          break;\n      }\n    }\n  }\n}\nfunction setSignature(type, key) {\n  var forceReset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  var getCustomHooks = arguments.length > 3 ? arguments[3] : undefined;\n\n  {\n    if (!allSignaturesByType.has(type)) {\n      allSignaturesByType.set(type, {\n        forceReset: forceReset,\n        ownKey: key,\n        fullKey: null,\n        getCustomHooks: getCustomHooks || function () {\n          return [];\n        }\n      });\n    } // Visit inner types because we might not have signed them.\n\n\n    if (typeof type === 'object' && type !== null) {\n      switch (getProperty(type, '$$typeof')) {\n        case REACT_FORWARD_REF_TYPE:\n          setSignature(type.render, key, forceReset, getCustomHooks);\n          break;\n\n        case REACT_MEMO_TYPE:\n          setSignature(type.type, key, forceReset, getCustomHooks);\n          break;\n      }\n    }\n  }\n} // This is lazily called during first render for a type.\n// It captures Hook list at that time so inline requires don't break comparisons.\n\nfunction collectCustomHooksForSignature(type) {\n  {\n    var signature = allSignaturesByType.get(type);\n\n    if (signature !== undefined) {\n      computeFullKey(signature);\n    }\n  }\n}\nfunction getFamilyByID(id) {\n  {\n    return allFamiliesByID.get(id);\n  }\n}\nfunction getFamilyByType(type) {\n  {\n    return allFamiliesByType.get(type);\n  }\n}\nfunction findAffectedHostInstances(families) {\n  {\n    var affectedInstances = new Set();\n    mountedRoots.forEach(function (root) {\n      var helpers = helpersByRoot.get(root);\n\n      if (helpers === undefined) {\n        throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');\n      }\n\n      var instancesForRoot = helpers.findHostInstancesForRefresh(root, families);\n      instancesForRoot.forEach(function (inst) {\n        affectedInstances.add(inst);\n      });\n    });\n    return affectedInstances;\n  }\n}\nfunction injectIntoGlobalHook(globalObject) {\n  {\n    // For React Native, the global hook will be set up by require('react-devtools-core').\n    // That code will run before us. So we need to monkeypatch functions on existing hook.\n    // For React Web, the global hook will be set up by the extension.\n    // This will also run before us.\n    var hook = globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__;\n\n    if (hook === undefined) {\n      // However, if there is no DevTools extension, we'll need to set up the global hook ourselves.\n      // Note that in this case it's important that renderer code runs *after* this method call.\n      // Otherwise, the renderer will think that there is no global hook, and won't do the injection.\n      var nextID = 0;\n      globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__ = hook = {\n        renderers: new Map(),\n        supportsFiber: true,\n        inject: function (injected) {\n          return nextID++;\n        },\n        onScheduleFiberRoot: function (id, root, children) {},\n        onCommitFiberRoot: function (id, root, maybePriorityLevel, didError) {},\n        onCommitFiberUnmount: function () {}\n      };\n    }\n\n    if (hook.isDisabled) {\n      // This isn't a real property on the hook, but it can be set to opt out\n      // of DevTools integration and associated warnings and logs.\n      // Using console['warn'] to evade Babel and ESLint\n      console['warn']('Something has shimmed the React DevTools global hook (__REACT_DEVTOOLS_GLOBAL_HOOK__). ' + 'Fast Refresh is not compatible with this shim and will be disabled.');\n      return;\n    } // Here, we just want to get a reference to scheduleRefresh.\n\n\n    var oldInject = hook.inject;\n\n    hook.inject = function (injected) {\n      var id = oldInject.apply(this, arguments);\n\n      if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') {\n        // This version supports React Refresh.\n        helpersByRendererID.set(id, injected);\n      }\n\n      return id;\n    }; // Do the same for any already injected roots.\n    // This is useful if ReactDOM has already been initialized.\n    // https://github.com/facebook/react/issues/17626\n\n\n    hook.renderers.forEach(function (injected, id) {\n      if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') {\n        // This version supports React Refresh.\n        helpersByRendererID.set(id, injected);\n      }\n    }); // We also want to track currently mounted roots.\n\n    var oldOnCommitFiberRoot = hook.onCommitFiberRoot;\n\n    var oldOnScheduleFiberRoot = hook.onScheduleFiberRoot || function () {};\n\n    hook.onScheduleFiberRoot = function (id, root, children) {\n      if (!isPerformingRefresh) {\n        // If it was intentionally scheduled, don't attempt to restore.\n        // This includes intentionally scheduled unmounts.\n        failedRoots.delete(root);\n\n        if (rootElements !== null) {\n          rootElements.set(root, children);\n        }\n      }\n\n      return oldOnScheduleFiberRoot.apply(this, arguments);\n    };\n\n    hook.onCommitFiberRoot = function (id, root, maybePriorityLevel, didError) {\n      var helpers = helpersByRendererID.get(id);\n\n      if (helpers !== undefined) {\n        helpersByRoot.set(root, helpers);\n        var current = root.current;\n        var alternate = current.alternate; // We need to determine whether this root has just (un)mounted.\n        // This logic is copy-pasted from similar logic in the DevTools backend.\n        // If this breaks with some refactoring, you'll want to update DevTools too.\n\n        if (alternate !== null) {\n          var wasMounted = alternate.memoizedState != null && alternate.memoizedState.element != null && mountedRoots.has(root);\n          var isMounted = current.memoizedState != null && current.memoizedState.element != null;\n\n          if (!wasMounted && isMounted) {\n            // Mount a new root.\n            mountedRoots.add(root);\n            failedRoots.delete(root);\n          } else if (wasMounted && isMounted) ; else if (wasMounted && !isMounted) {\n            // Unmount an existing root.\n            mountedRoots.delete(root);\n\n            if (didError) {\n              // We'll remount it on future edits.\n              failedRoots.add(root);\n            } else {\n              helpersByRoot.delete(root);\n            }\n          } else if (!wasMounted && !isMounted) {\n            if (didError) {\n              // We'll remount it on future edits.\n              failedRoots.add(root);\n            }\n          }\n        } else {\n          // Mount a new root.\n          mountedRoots.add(root);\n        }\n      } // Always call the decorated DevTools hook.\n\n\n      return oldOnCommitFiberRoot.apply(this, arguments);\n    };\n  }\n}\nfunction hasUnrecoverableErrors() {\n  // TODO: delete this after removing dependency in RN.\n  return false;\n} // Exposed for testing.\n\nfunction _getMountedRootCount() {\n  {\n    return mountedRoots.size;\n  }\n} // This is a wrapper over more primitive functions for setting signature.\n// Signatures let us decide whether the Hook order has changed on refresh.\n//\n// This function is intended to be used as a transform target, e.g.:\n// var _s = createSignatureFunctionForTransform()\n//\n// function Hello() {\n//   const [foo, setFoo] = useState(0);\n//   const value = useCustomHook();\n//   _s(); /* Call without arguments triggers collecting the custom Hook list.\n//          * This doesn't happen during the module evaluation because we\n//          * don't want to change the module order with inline requires.\n//          * Next calls are noops. */\n//   return <h1>Hi</h1>;\n// }\n//\n// /* Call with arguments attaches the signature to the type: */\n// _s(\n//   Hello,\n//   'useState{[foo, setFoo]}(0)',\n//   () => [useCustomHook], /* Lazy to avoid triggering inline requires */\n// );\n\nfunction createSignatureFunctionForTransform() {\n  {\n    var savedType;\n    var hasCustomHooks;\n    var didCollectHooks = false;\n    return function (type, key, forceReset, getCustomHooks) {\n      if (typeof key === 'string') {\n        // We're in the initial phase that associates signatures\n        // with the functions. Note this may be called multiple times\n        // in HOC chains like _s(hoc1(_s(hoc2(_s(actualFunction))))).\n        if (!savedType) {\n          // We're in the innermost call, so this is the actual type.\n          savedType = type;\n          hasCustomHooks = typeof getCustomHooks === 'function';\n        } // Set the signature for all types (even wrappers!) in case\n        // they have no signatures of their own. This is to prevent\n        // problems like https://github.com/facebook/react/issues/20417.\n\n\n        if (type != null && (typeof type === 'function' || typeof type === 'object')) {\n          setSignature(type, key, forceReset, getCustomHooks);\n        }\n\n        return type;\n      } else {\n        // We're in the _s() call without arguments, which means\n        // this is the time to collect custom Hook signatures.\n        // Only do this once. This path is hot and runs *inside* every render!\n        if (!didCollectHooks && hasCustomHooks) {\n          didCollectHooks = true;\n          collectCustomHooksForSignature(savedType);\n        }\n      }\n    };\n  }\n}\nfunction isLikelyComponentType(type) {\n  {\n    switch (typeof type) {\n      case 'function':\n        {\n          // First, deal with classes.\n          if (type.prototype != null) {\n            if (type.prototype.isReactComponent) {\n              // React class.\n              return true;\n            }\n\n            var ownNames = Object.getOwnPropertyNames(type.prototype);\n\n            if (ownNames.length > 1 || ownNames[0] !== 'constructor') {\n              // This looks like a class.\n              return false;\n            } // eslint-disable-next-line no-proto\n\n\n            if (type.prototype.__proto__ !== Object.prototype) {\n              // It has a superclass.\n              return false;\n            } // Pass through.\n            // This looks like a regular function with empty prototype.\n\n          } // For plain functions and arrows, use name as a heuristic.\n\n\n          var name = type.name || type.displayName;\n          return typeof name === 'string' && /^[A-Z]/.test(name);\n        }\n\n      case 'object':\n        {\n          if (type != null) {\n            switch (getProperty(type, '$$typeof')) {\n              case REACT_FORWARD_REF_TYPE:\n              case REACT_MEMO_TYPE:\n                // Definitely React components.\n                return true;\n\n              default:\n                return false;\n            }\n          }\n\n          return false;\n        }\n\n      default:\n        {\n          return false;\n        }\n    }\n  }\n}\n\nexports._getMountedRootCount = _getMountedRootCount;\nexports.collectCustomHooksForSignature = collectCustomHooksForSignature;\nexports.createSignatureFunctionForTransform = createSignatureFunctionForTransform;\nexports.findAffectedHostInstances = findAffectedHostInstances;\nexports.getFamilyByID = getFamilyByID;\nexports.getFamilyByType = getFamilyByType;\nexports.hasUnrecoverableErrors = hasUnrecoverableErrors;\nexports.injectIntoGlobalHook = injectIntoGlobalHook;\nexports.isLikelyComponentType = isLikelyComponentType;\nexports.performReactRefresh = performReactRefresh;\nexports.register = register;\nexports.setSignature = setSignature;\n  })();\n}\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/react-refresh/cjs/react-refresh-runtime.development.js?");

/***/ }),

/***/ "../node_modules/react-refresh/runtime.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nif (false) {} else {\n  module.exports = __webpack_require__(\"../node_modules/react-refresh/cjs/react-refresh-runtime.development.js\");\n}\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/react-refresh/runtime.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/***/ (function(module) {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/***/ (function(module) {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/***/ (function(module) {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/***/ (function(module) {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/***/ (function(module) {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./scripts/filters sync recursive .*\\.filter\\..*$":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var map = {\n\t\"./button.filter.js\": \"./scripts/filters/button.filter.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./scripts/filters sync recursive .*\\\\.filter\\\\..*$\";\n\n//# sourceURL=webpack://@roots/bud/sage/./scripts/filters/_sync_.*\\.filter\\..*$?");

/***/ }),

/***/ "@wordpress/data":
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/hooks":
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js":
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("/* global __react_refresh_library__ */\n\nconst safeThis = __webpack_require__(\"../node_modules/core-js-pure/features/global-this.js\");\nconst RefreshRuntime = __webpack_require__(\"../node_modules/react-refresh/runtime.js\");\n\nif (true) {\n  if (typeof safeThis !== 'undefined') {\n    var $RefreshInjected$ = '__reactRefreshInjected';\n    // Namespace the injected flag (if necessary) for monorepo compatibility\n    if (true) {\n      $RefreshInjected$ += '_' + \"_roots_bud_sage\";\n    }\n\n    // Only inject the runtime if it hasn't been injected\n    if (!safeThis[$RefreshInjected$]) {\n      // Inject refresh runtime into global scope\n      RefreshRuntime.injectIntoGlobalHook(safeThis);\n\n      // Mark the runtime as injected to prevent double-injection\n      safeThis[$RefreshInjected$] = true;\n    }\n  }\n}\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/actual/global-this.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar parent = __webpack_require__(\"../node_modules/core-js-pure/stable/global-this.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/actual/global-this.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/es/global-this.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n__webpack_require__(\"../node_modules/core-js-pure/modules/es.global-this.js\");\n\nmodule.exports = __webpack_require__(\"../node_modules/core-js-pure/internals/global.js\");\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/es/global-this.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/features/global-this.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nmodule.exports = __webpack_require__(\"../node_modules/core-js-pure/full/global-this.js\");\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/features/global-this.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/full/global-this.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n// TODO: remove from `core-js@4`\n__webpack_require__(\"../node_modules/core-js-pure/modules/esnext.global-this.js\");\n\nvar parent = __webpack_require__(\"../node_modules/core-js-pure/actual/global-this.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/full/global-this.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/a-callable.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar isCallable = __webpack_require__(\"../node_modules/core-js-pure/internals/is-callable.js\");\nvar tryToString = __webpack_require__(\"../node_modules/core-js-pure/internals/try-to-string.js\");\n\nvar $TypeError = TypeError;\n\n// `Assert: IsCallable(argument) is true`\nmodule.exports = function (argument) {\n  if (isCallable(argument)) return argument;\n  throw new $TypeError(tryToString(argument) + ' is not a function');\n};\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/a-callable.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/an-object.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar isObject = __webpack_require__(\"../node_modules/core-js-pure/internals/is-object.js\");\n\nvar $String = String;\nvar $TypeError = TypeError;\n\n// `Assert: Type(argument) is Object`\nmodule.exports = function (argument) {\n  if (isObject(argument)) return argument;\n  throw new $TypeError($String(argument) + ' is not an object');\n};\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/an-object.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/classof-raw.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar uncurryThis = __webpack_require__(\"../node_modules/core-js-pure/internals/function-uncurry-this.js\");\n\nvar toString = uncurryThis({}.toString);\nvar stringSlice = uncurryThis(''.slice);\n\nmodule.exports = function (it) {\n  return stringSlice(toString(it), 8, -1);\n};\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/classof-raw.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/create-non-enumerable-property.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar DESCRIPTORS = __webpack_require__(\"../node_modules/core-js-pure/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(\"../node_modules/core-js-pure/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(\"../node_modules/core-js-pure/internals/create-property-descriptor.js\");\n\nmodule.exports = DESCRIPTORS ? function (object, key, value) {\n  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/create-non-enumerable-property.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/create-property-descriptor.js":
/***/ (function(module) {

"use strict";
eval("\nmodule.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/create-property-descriptor.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/define-global-property.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(\"../node_modules/core-js-pure/internals/global.js\");\n\n// eslint-disable-next-line es/no-object-defineproperty -- safe\nvar defineProperty = Object.defineProperty;\n\nmodule.exports = function (key, value) {\n  try {\n    defineProperty(global, key, { value: value, configurable: true, writable: true });\n  } catch (error) {\n    global[key] = value;\n  } return value;\n};\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/define-global-property.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/descriptors.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar fails = __webpack_require__(\"../node_modules/core-js-pure/internals/fails.js\");\n\n// Detect IE8's incomplete defineProperty implementation\nmodule.exports = !fails(function () {\n  // eslint-disable-next-line es/no-object-defineproperty -- required for testing\n  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;\n});\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/descriptors.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/document-create-element.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(\"../node_modules/core-js-pure/internals/global.js\");\nvar isObject = __webpack_require__(\"../node_modules/core-js-pure/internals/is-object.js\");\n\nvar document = global.document;\n// typeof document.createElement is 'object' in old IE\nvar EXISTS = isObject(document) && isObject(document.createElement);\n\nmodule.exports = function (it) {\n  return EXISTS ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/document-create-element.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/engine-user-agent.js":
/***/ (function(module) {

"use strict";
eval("\nmodule.exports = typeof navigator != 'undefined' && String(navigator.userAgent) || '';\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/engine-user-agent.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/engine-v8-version.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(\"../node_modules/core-js-pure/internals/global.js\");\nvar userAgent = __webpack_require__(\"../node_modules/core-js-pure/internals/engine-user-agent.js\");\n\nvar process = global.process;\nvar Deno = global.Deno;\nvar versions = process && process.versions || Deno && Deno.version;\nvar v8 = versions && versions.v8;\nvar match, version;\n\nif (v8) {\n  match = v8.split('.');\n  // in old Chrome, versions of V8 isn't V8 = Chrome / 10\n  // but their correct versions are not interesting for us\n  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);\n}\n\n// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`\n// so check `userAgent` even if `.v8` exists, but 0\nif (!version && userAgent) {\n  match = userAgent.match(/Edge\\/(\\d+)/);\n  if (!match || match[1] >= 74) {\n    match = userAgent.match(/Chrome\\/(\\d+)/);\n    if (match) version = +match[1];\n  }\n}\n\nmodule.exports = version;\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/engine-v8-version.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/export.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(\"../node_modules/core-js-pure/internals/global.js\");\nvar apply = __webpack_require__(\"../node_modules/core-js-pure/internals/function-apply.js\");\nvar uncurryThis = __webpack_require__(\"../node_modules/core-js-pure/internals/function-uncurry-this-clause.js\");\nvar isCallable = __webpack_require__(\"../node_modules/core-js-pure/internals/is-callable.js\");\nvar getOwnPropertyDescriptor = (__webpack_require__(\"../node_modules/core-js-pure/internals/object-get-own-property-descriptor.js\").f);\nvar isForced = __webpack_require__(\"../node_modules/core-js-pure/internals/is-forced.js\");\nvar path = __webpack_require__(\"../node_modules/core-js-pure/internals/path.js\");\nvar bind = __webpack_require__(\"../node_modules/core-js-pure/internals/function-bind-context.js\");\nvar createNonEnumerableProperty = __webpack_require__(\"../node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar hasOwn = __webpack_require__(\"../node_modules/core-js-pure/internals/has-own-property.js\");\n// add debugging info\n__webpack_require__(\"../node_modules/core-js-pure/internals/shared-store.js\");\n\nvar wrapConstructor = function (NativeConstructor) {\n  var Wrapper = function (a, b, c) {\n    if (this instanceof Wrapper) {\n      switch (arguments.length) {\n        case 0: return new NativeConstructor();\n        case 1: return new NativeConstructor(a);\n        case 2: return new NativeConstructor(a, b);\n      } return new NativeConstructor(a, b, c);\n    } return apply(NativeConstructor, this, arguments);\n  };\n  Wrapper.prototype = NativeConstructor.prototype;\n  return Wrapper;\n};\n\n/*\n  options.target         - name of the target object\n  options.global         - target is the global object\n  options.stat           - export as static methods of target\n  options.proto          - export as prototype methods of target\n  options.real           - real prototype method for the `pure` version\n  options.forced         - export even if the native feature is available\n  options.bind           - bind methods to the target, required for the `pure` version\n  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version\n  options.unsafe         - use the simple assignment of property instead of delete + defineProperty\n  options.sham           - add a flag to not completely full polyfills\n  options.enumerable     - export as enumerable property\n  options.dontCallGetSet - prevent calling a getter on target\n  options.name           - the .name of the function if it does not match the key\n*/\nmodule.exports = function (options, source) {\n  var TARGET = options.target;\n  var GLOBAL = options.global;\n  var STATIC = options.stat;\n  var PROTO = options.proto;\n\n  var nativeSource = GLOBAL ? global : STATIC ? global[TARGET] : global[TARGET] && global[TARGET].prototype;\n\n  var target = GLOBAL ? path : path[TARGET] || createNonEnumerableProperty(path, TARGET, {})[TARGET];\n  var targetPrototype = target.prototype;\n\n  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;\n  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;\n\n  for (key in source) {\n    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);\n    // contains in native\n    USE_NATIVE = !FORCED && nativeSource && hasOwn(nativeSource, key);\n\n    targetProperty = target[key];\n\n    if (USE_NATIVE) if (options.dontCallGetSet) {\n      descriptor = getOwnPropertyDescriptor(nativeSource, key);\n      nativeProperty = descriptor && descriptor.value;\n    } else nativeProperty = nativeSource[key];\n\n    // export native or implementation\n    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];\n\n    if (!FORCED && !PROTO && typeof targetProperty == typeof sourceProperty) continue;\n\n    // bind methods to global for calling from export context\n    if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, global);\n    // wrap global constructors for prevent changes in this version\n    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);\n    // make static versions for prototype methods\n    else if (PROTO && isCallable(sourceProperty)) resultProperty = uncurryThis(sourceProperty);\n    // default case\n    else resultProperty = sourceProperty;\n\n    // add a flag to not completely full polyfills\n    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {\n      createNonEnumerableProperty(resultProperty, 'sham', true);\n    }\n\n    createNonEnumerableProperty(target, key, resultProperty);\n\n    if (PROTO) {\n      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';\n      if (!hasOwn(path, VIRTUAL_PROTOTYPE)) {\n        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});\n      }\n      // export virtual prototype methods\n      createNonEnumerableProperty(path[VIRTUAL_PROTOTYPE], key, sourceProperty);\n      // export real prototype methods\n      if (options.real && targetPrototype && (FORCED || !targetPrototype[key])) {\n        createNonEnumerableProperty(targetPrototype, key, sourceProperty);\n      }\n    }\n  }\n};\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/export.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/fails.js":
/***/ (function(module) {

"use strict";
eval("\nmodule.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (error) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/fails.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/function-apply.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar NATIVE_BIND = __webpack_require__(\"../node_modules/core-js-pure/internals/function-bind-native.js\");\n\nvar FunctionPrototype = Function.prototype;\nvar apply = FunctionPrototype.apply;\nvar call = FunctionPrototype.call;\n\n// eslint-disable-next-line es/no-reflect -- safe\nmodule.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {\n  return call.apply(apply, arguments);\n});\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/function-apply.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/function-bind-context.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar uncurryThis = __webpack_require__(\"../node_modules/core-js-pure/internals/function-uncurry-this-clause.js\");\nvar aCallable = __webpack_require__(\"../node_modules/core-js-pure/internals/a-callable.js\");\nvar NATIVE_BIND = __webpack_require__(\"../node_modules/core-js-pure/internals/function-bind-native.js\");\n\nvar bind = uncurryThis(uncurryThis.bind);\n\n// optional / simple context binding\nmodule.exports = function (fn, that) {\n  aCallable(fn);\n  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/function-bind-context.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/function-bind-native.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar fails = __webpack_require__(\"../node_modules/core-js-pure/internals/fails.js\");\n\nmodule.exports = !fails(function () {\n  // eslint-disable-next-line es/no-function-prototype-bind -- safe\n  var test = (function () { /* empty */ }).bind();\n  // eslint-disable-next-line no-prototype-builtins -- safe\n  return typeof test != 'function' || test.hasOwnProperty('prototype');\n});\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/function-bind-native.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/function-call.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar NATIVE_BIND = __webpack_require__(\"../node_modules/core-js-pure/internals/function-bind-native.js\");\n\nvar call = Function.prototype.call;\n\nmodule.exports = NATIVE_BIND ? call.bind(call) : function () {\n  return call.apply(call, arguments);\n};\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/function-call.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/function-uncurry-this-clause.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar classofRaw = __webpack_require__(\"../node_modules/core-js-pure/internals/classof-raw.js\");\nvar uncurryThis = __webpack_require__(\"../node_modules/core-js-pure/internals/function-uncurry-this.js\");\n\nmodule.exports = function (fn) {\n  // Nashorn bug:\n  //   https://github.com/zloirock/core-js/issues/1128\n  //   https://github.com/zloirock/core-js/issues/1130\n  if (classofRaw(fn) === 'Function') return uncurryThis(fn);\n};\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/function-uncurry-this-clause.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/function-uncurry-this.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar NATIVE_BIND = __webpack_require__(\"../node_modules/core-js-pure/internals/function-bind-native.js\");\n\nvar FunctionPrototype = Function.prototype;\nvar call = FunctionPrototype.call;\nvar uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);\n\nmodule.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {\n  return function () {\n    return call.apply(fn, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/function-uncurry-this.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/get-built-in.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar path = __webpack_require__(\"../node_modules/core-js-pure/internals/path.js\");\nvar global = __webpack_require__(\"../node_modules/core-js-pure/internals/global.js\");\nvar isCallable = __webpack_require__(\"../node_modules/core-js-pure/internals/is-callable.js\");\n\nvar aFunction = function (variable) {\n  return isCallable(variable) ? variable : undefined;\n};\n\nmodule.exports = function (namespace, method) {\n  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])\n    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];\n};\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/get-built-in.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/get-method.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar aCallable = __webpack_require__(\"../node_modules/core-js-pure/internals/a-callable.js\");\nvar isNullOrUndefined = __webpack_require__(\"../node_modules/core-js-pure/internals/is-null-or-undefined.js\");\n\n// `GetMethod` abstract operation\n// https://tc39.es/ecma262/#sec-getmethod\nmodule.exports = function (V, P) {\n  var func = V[P];\n  return isNullOrUndefined(func) ? undefined : aCallable(func);\n};\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/get-method.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/global.js":
/***/ (function(module) {

"use strict";
eval("\nvar check = function (it) {\n  return it && it.Math === Math && it;\n};\n\n// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nmodule.exports =\n  // eslint-disable-next-line es/no-global-this -- safe\n  check(typeof globalThis == 'object' && globalThis) ||\n  check(typeof window == 'object' && window) ||\n  // eslint-disable-next-line no-restricted-globals -- safe\n  check(typeof self == 'object' && self) ||\n  check(typeof global == 'object' && global) ||\n  check(typeof this == 'object' && this) ||\n  // eslint-disable-next-line no-new-func -- fallback\n  (function () { return this; })() || Function('return this')();\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/global.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/has-own-property.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar uncurryThis = __webpack_require__(\"../node_modules/core-js-pure/internals/function-uncurry-this.js\");\nvar toObject = __webpack_require__(\"../node_modules/core-js-pure/internals/to-object.js\");\n\nvar hasOwnProperty = uncurryThis({}.hasOwnProperty);\n\n// `HasOwnProperty` abstract operation\n// https://tc39.es/ecma262/#sec-hasownproperty\n// eslint-disable-next-line es/no-object-hasown -- safe\nmodule.exports = Object.hasOwn || function hasOwn(it, key) {\n  return hasOwnProperty(toObject(it), key);\n};\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/has-own-property.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/ie8-dom-define.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar DESCRIPTORS = __webpack_require__(\"../node_modules/core-js-pure/internals/descriptors.js\");\nvar fails = __webpack_require__(\"../node_modules/core-js-pure/internals/fails.js\");\nvar createElement = __webpack_require__(\"../node_modules/core-js-pure/internals/document-create-element.js\");\n\n// Thanks to IE8 for its funny defineProperty\nmodule.exports = !DESCRIPTORS && !fails(function () {\n  // eslint-disable-next-line es/no-object-defineproperty -- required for testing\n  return Object.defineProperty(createElement('div'), 'a', {\n    get: function () { return 7; }\n  }).a !== 7;\n});\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/ie8-dom-define.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/indexed-object.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar uncurryThis = __webpack_require__(\"../node_modules/core-js-pure/internals/function-uncurry-this.js\");\nvar fails = __webpack_require__(\"../node_modules/core-js-pure/internals/fails.js\");\nvar classof = __webpack_require__(\"../node_modules/core-js-pure/internals/classof-raw.js\");\n\nvar $Object = Object;\nvar split = uncurryThis(''.split);\n\n// fallback for non-array-like ES3 and non-enumerable old V8 strings\nmodule.exports = fails(function () {\n  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346\n  // eslint-disable-next-line no-prototype-builtins -- safe\n  return !$Object('z').propertyIsEnumerable(0);\n}) ? function (it) {\n  return classof(it) === 'String' ? split(it, '') : $Object(it);\n} : $Object;\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/indexed-object.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/is-callable.js":
/***/ (function(module) {

"use strict";
eval("\n// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot\nvar documentAll = typeof document == 'object' && document.all;\n\n// `IsCallable` abstract operation\n// https://tc39.es/ecma262/#sec-iscallable\n// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing\nmodule.exports = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {\n  return typeof argument == 'function' || argument === documentAll;\n} : function (argument) {\n  return typeof argument == 'function';\n};\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/is-callable.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/is-forced.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar fails = __webpack_require__(\"../node_modules/core-js-pure/internals/fails.js\");\nvar isCallable = __webpack_require__(\"../node_modules/core-js-pure/internals/is-callable.js\");\n\nvar replacement = /#|\\.prototype\\./;\n\nvar isForced = function (feature, detection) {\n  var value = data[normalize(feature)];\n  return value === POLYFILL ? true\n    : value === NATIVE ? false\n    : isCallable(detection) ? fails(detection)\n    : !!detection;\n};\n\nvar normalize = isForced.normalize = function (string) {\n  return String(string).replace(replacement, '.').toLowerCase();\n};\n\nvar data = isForced.data = {};\nvar NATIVE = isForced.NATIVE = 'N';\nvar POLYFILL = isForced.POLYFILL = 'P';\n\nmodule.exports = isForced;\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/is-forced.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/is-null-or-undefined.js":
/***/ (function(module) {

"use strict";
eval("\n// we can't use just `it == null` since of `document.all` special case\n// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec\nmodule.exports = function (it) {\n  return it === null || it === undefined;\n};\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/is-null-or-undefined.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/is-object.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar isCallable = __webpack_require__(\"../node_modules/core-js-pure/internals/is-callable.js\");\n\nmodule.exports = function (it) {\n  return typeof it == 'object' ? it !== null : isCallable(it);\n};\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/is-object.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/is-pure.js":
/***/ (function(module) {

"use strict";
eval("\nmodule.exports = true;\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/is-pure.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/is-symbol.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar getBuiltIn = __webpack_require__(\"../node_modules/core-js-pure/internals/get-built-in.js\");\nvar isCallable = __webpack_require__(\"../node_modules/core-js-pure/internals/is-callable.js\");\nvar isPrototypeOf = __webpack_require__(\"../node_modules/core-js-pure/internals/object-is-prototype-of.js\");\nvar USE_SYMBOL_AS_UID = __webpack_require__(\"../node_modules/core-js-pure/internals/use-symbol-as-uid.js\");\n\nvar $Object = Object;\n\nmodule.exports = USE_SYMBOL_AS_UID ? function (it) {\n  return typeof it == 'symbol';\n} : function (it) {\n  var $Symbol = getBuiltIn('Symbol');\n  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));\n};\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/is-symbol.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/object-define-property.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar DESCRIPTORS = __webpack_require__(\"../node_modules/core-js-pure/internals/descriptors.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(\"../node_modules/core-js-pure/internals/ie8-dom-define.js\");\nvar V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(\"../node_modules/core-js-pure/internals/v8-prototype-define-bug.js\");\nvar anObject = __webpack_require__(\"../node_modules/core-js-pure/internals/an-object.js\");\nvar toPropertyKey = __webpack_require__(\"../node_modules/core-js-pure/internals/to-property-key.js\");\n\nvar $TypeError = TypeError;\n// eslint-disable-next-line es/no-object-defineproperty -- safe\nvar $defineProperty = Object.defineProperty;\n// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\nvar $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\nvar ENUMERABLE = 'enumerable';\nvar CONFIGURABLE = 'configurable';\nvar WRITABLE = 'writable';\n\n// `Object.defineProperty` method\n// https://tc39.es/ecma262/#sec-object.defineproperty\nexports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPropertyKey(P);\n  anObject(Attributes);\n  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {\n    var current = $getOwnPropertyDescriptor(O, P);\n    if (current && current[WRITABLE]) {\n      O[P] = Attributes.value;\n      Attributes = {\n        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],\n        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],\n        writable: false\n      };\n    }\n  } return $defineProperty(O, P, Attributes);\n} : $defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPropertyKey(P);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return $defineProperty(O, P, Attributes);\n  } catch (error) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/object-define-property.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/object-get-own-property-descriptor.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar DESCRIPTORS = __webpack_require__(\"../node_modules/core-js-pure/internals/descriptors.js\");\nvar call = __webpack_require__(\"../node_modules/core-js-pure/internals/function-call.js\");\nvar propertyIsEnumerableModule = __webpack_require__(\"../node_modules/core-js-pure/internals/object-property-is-enumerable.js\");\nvar createPropertyDescriptor = __webpack_require__(\"../node_modules/core-js-pure/internals/create-property-descriptor.js\");\nvar toIndexedObject = __webpack_require__(\"../node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar toPropertyKey = __webpack_require__(\"../node_modules/core-js-pure/internals/to-property-key.js\");\nvar hasOwn = __webpack_require__(\"../node_modules/core-js-pure/internals/has-own-property.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(\"../node_modules/core-js-pure/internals/ie8-dom-define.js\");\n\n// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\nvar $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// `Object.getOwnPropertyDescriptor` method\n// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor\nexports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {\n  O = toIndexedObject(O);\n  P = toPropertyKey(P);\n  if (IE8_DOM_DEFINE) try {\n    return $getOwnPropertyDescriptor(O, P);\n  } catch (error) { /* empty */ }\n  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);\n};\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/object-get-own-property-descriptor.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/object-is-prototype-of.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar uncurryThis = __webpack_require__(\"../node_modules/core-js-pure/internals/function-uncurry-this.js\");\n\nmodule.exports = uncurryThis({}.isPrototypeOf);\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/object-is-prototype-of.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/object-property-is-enumerable.js":
/***/ (function(__unused_webpack_module, exports) {

"use strict";
eval("\nvar $propertyIsEnumerable = {}.propertyIsEnumerable;\n// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// Nashorn ~ JDK8 bug\nvar NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);\n\n// `Object.prototype.propertyIsEnumerable` method implementation\n// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable\nexports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {\n  var descriptor = getOwnPropertyDescriptor(this, V);\n  return !!descriptor && descriptor.enumerable;\n} : $propertyIsEnumerable;\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/object-property-is-enumerable.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/ordinary-to-primitive.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar call = __webpack_require__(\"../node_modules/core-js-pure/internals/function-call.js\");\nvar isCallable = __webpack_require__(\"../node_modules/core-js-pure/internals/is-callable.js\");\nvar isObject = __webpack_require__(\"../node_modules/core-js-pure/internals/is-object.js\");\n\nvar $TypeError = TypeError;\n\n// `OrdinaryToPrimitive` abstract operation\n// https://tc39.es/ecma262/#sec-ordinarytoprimitive\nmodule.exports = function (input, pref) {\n  var fn, val;\n  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;\n  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;\n  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;\n  throw new $TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/ordinary-to-primitive.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/path.js":
/***/ (function(module) {

"use strict";
eval("\nmodule.exports = {};\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/path.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/require-object-coercible.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar isNullOrUndefined = __webpack_require__(\"../node_modules/core-js-pure/internals/is-null-or-undefined.js\");\n\nvar $TypeError = TypeError;\n\n// `RequireObjectCoercible` abstract operation\n// https://tc39.es/ecma262/#sec-requireobjectcoercible\nmodule.exports = function (it) {\n  if (isNullOrUndefined(it)) throw new $TypeError(\"Can't call method on \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/require-object-coercible.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/shared-store.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar IS_PURE = __webpack_require__(\"../node_modules/core-js-pure/internals/is-pure.js\");\nvar globalThis = __webpack_require__(\"../node_modules/core-js-pure/internals/global.js\");\nvar defineGlobalProperty = __webpack_require__(\"../node_modules/core-js-pure/internals/define-global-property.js\");\n\nvar SHARED = '__core-js_shared__';\nvar store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});\n\n(store.versions || (store.versions = [])).push({\n  version: '3.36.1',\n  mode: IS_PURE ? 'pure' : 'global',\n  copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',\n  license: 'https://github.com/zloirock/core-js/blob/v3.36.1/LICENSE',\n  source: 'https://github.com/zloirock/core-js'\n});\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/shared-store.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/shared.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar store = __webpack_require__(\"../node_modules/core-js-pure/internals/shared-store.js\");\n\nmodule.exports = function (key, value) {\n  return store[key] || (store[key] = value || {});\n};\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/shared.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/symbol-constructor-detection.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n/* eslint-disable es/no-symbol -- required for testing */\nvar V8_VERSION = __webpack_require__(\"../node_modules/core-js-pure/internals/engine-v8-version.js\");\nvar fails = __webpack_require__(\"../node_modules/core-js-pure/internals/fails.js\");\nvar global = __webpack_require__(\"../node_modules/core-js-pure/internals/global.js\");\n\nvar $String = global.String;\n\n// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing\nmodule.exports = !!Object.getOwnPropertySymbols && !fails(function () {\n  var symbol = Symbol('symbol detection');\n  // Chrome 38 Symbol has incorrect toString conversion\n  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances\n  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,\n  // of course, fail.\n  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||\n    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances\n    !Symbol.sham && V8_VERSION && V8_VERSION < 41;\n});\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/symbol-constructor-detection.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/to-indexed-object.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n// toObject with fallback for non-array-like ES3 strings\nvar IndexedObject = __webpack_require__(\"../node_modules/core-js-pure/internals/indexed-object.js\");\nvar requireObjectCoercible = __webpack_require__(\"../node_modules/core-js-pure/internals/require-object-coercible.js\");\n\nmodule.exports = function (it) {\n  return IndexedObject(requireObjectCoercible(it));\n};\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/to-indexed-object.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/to-object.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar requireObjectCoercible = __webpack_require__(\"../node_modules/core-js-pure/internals/require-object-coercible.js\");\n\nvar $Object = Object;\n\n// `ToObject` abstract operation\n// https://tc39.es/ecma262/#sec-toobject\nmodule.exports = function (argument) {\n  return $Object(requireObjectCoercible(argument));\n};\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/to-object.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/to-primitive.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar call = __webpack_require__(\"../node_modules/core-js-pure/internals/function-call.js\");\nvar isObject = __webpack_require__(\"../node_modules/core-js-pure/internals/is-object.js\");\nvar isSymbol = __webpack_require__(\"../node_modules/core-js-pure/internals/is-symbol.js\");\nvar getMethod = __webpack_require__(\"../node_modules/core-js-pure/internals/get-method.js\");\nvar ordinaryToPrimitive = __webpack_require__(\"../node_modules/core-js-pure/internals/ordinary-to-primitive.js\");\nvar wellKnownSymbol = __webpack_require__(\"../node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar $TypeError = TypeError;\nvar TO_PRIMITIVE = wellKnownSymbol('toPrimitive');\n\n// `ToPrimitive` abstract operation\n// https://tc39.es/ecma262/#sec-toprimitive\nmodule.exports = function (input, pref) {\n  if (!isObject(input) || isSymbol(input)) return input;\n  var exoticToPrim = getMethod(input, TO_PRIMITIVE);\n  var result;\n  if (exoticToPrim) {\n    if (pref === undefined) pref = 'default';\n    result = call(exoticToPrim, input, pref);\n    if (!isObject(result) || isSymbol(result)) return result;\n    throw new $TypeError(\"Can't convert object to primitive value\");\n  }\n  if (pref === undefined) pref = 'number';\n  return ordinaryToPrimitive(input, pref);\n};\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/to-primitive.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/to-property-key.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar toPrimitive = __webpack_require__(\"../node_modules/core-js-pure/internals/to-primitive.js\");\nvar isSymbol = __webpack_require__(\"../node_modules/core-js-pure/internals/is-symbol.js\");\n\n// `ToPropertyKey` abstract operation\n// https://tc39.es/ecma262/#sec-topropertykey\nmodule.exports = function (argument) {\n  var key = toPrimitive(argument, 'string');\n  return isSymbol(key) ? key : key + '';\n};\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/to-property-key.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/try-to-string.js":
/***/ (function(module) {

"use strict";
eval("\nvar $String = String;\n\nmodule.exports = function (argument) {\n  try {\n    return $String(argument);\n  } catch (error) {\n    return 'Object';\n  }\n};\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/try-to-string.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/uid.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar uncurryThis = __webpack_require__(\"../node_modules/core-js-pure/internals/function-uncurry-this.js\");\n\nvar id = 0;\nvar postfix = Math.random();\nvar toString = uncurryThis(1.0.toString);\n\nmodule.exports = function (key) {\n  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);\n};\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/uid.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/use-symbol-as-uid.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n/* eslint-disable es/no-symbol -- required for testing */\nvar NATIVE_SYMBOL = __webpack_require__(\"../node_modules/core-js-pure/internals/symbol-constructor-detection.js\");\n\nmodule.exports = NATIVE_SYMBOL\n  && !Symbol.sham\n  && typeof Symbol.iterator == 'symbol';\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/use-symbol-as-uid.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/v8-prototype-define-bug.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar DESCRIPTORS = __webpack_require__(\"../node_modules/core-js-pure/internals/descriptors.js\");\nvar fails = __webpack_require__(\"../node_modules/core-js-pure/internals/fails.js\");\n\n// V8 ~ Chrome 36-\n// https://bugs.chromium.org/p/v8/issues/detail?id=3334\nmodule.exports = DESCRIPTORS && fails(function () {\n  // eslint-disable-next-line es/no-object-defineproperty -- required for testing\n  return Object.defineProperty(function () { /* empty */ }, 'prototype', {\n    value: 42,\n    writable: false\n  }).prototype !== 42;\n});\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/v8-prototype-define-bug.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/well-known-symbol.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(\"../node_modules/core-js-pure/internals/global.js\");\nvar shared = __webpack_require__(\"../node_modules/core-js-pure/internals/shared.js\");\nvar hasOwn = __webpack_require__(\"../node_modules/core-js-pure/internals/has-own-property.js\");\nvar uid = __webpack_require__(\"../node_modules/core-js-pure/internals/uid.js\");\nvar NATIVE_SYMBOL = __webpack_require__(\"../node_modules/core-js-pure/internals/symbol-constructor-detection.js\");\nvar USE_SYMBOL_AS_UID = __webpack_require__(\"../node_modules/core-js-pure/internals/use-symbol-as-uid.js\");\n\nvar Symbol = global.Symbol;\nvar WellKnownSymbolsStore = shared('wks');\nvar createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;\n\nmodule.exports = function (name) {\n  if (!hasOwn(WellKnownSymbolsStore, name)) {\n    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)\n      ? Symbol[name]\n      : createWellKnownSymbol('Symbol.' + name);\n  } return WellKnownSymbolsStore[name];\n};\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/internals/well-known-symbol.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.global-this.js":
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(\"../node_modules/core-js-pure/internals/export.js\");\nvar global = __webpack_require__(\"../node_modules/core-js-pure/internals/global.js\");\n\n// `globalThis` object\n// https://tc39.es/ecma262/#sec-globalthis\n$({ global: true, forced: global.globalThis !== global }, {\n  globalThis: global\n});\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/modules/es.global-this.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/esnext.global-this.js":
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n// TODO: Remove from `core-js@4`\n__webpack_require__(\"../node_modules/core-js-pure/modules/es.global-this.js\");\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/modules/esnext.global-this.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/stable/global-this.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar parent = __webpack_require__(\"../node_modules/core-js-pure/es/global-this.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/core-js-pure/stable/global-this.js?");

/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/hot/client.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   client: function() { return /* binding */ client; }\n/* harmony export */ });\n/* harmony import */ var _components_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"../node_modules/@roots/bud-client/lib/hot/components/index.js\");\n/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"../node_modules/@roots/bud-client/lib/hot/events.js\");\n/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"../node_modules/@roots/bud-client/lib/hot/log.js\");\n/* harmony import */ var _options_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(\"../node_modules/@roots/bud-client/lib/hot/options.js\");\n/* eslint-disable no-console */\n/* global __resourceQuery */\n/* global __webpack_hash__ */\n\n\n\n\n/**\n * Initializes bud.js HMR handling\n */\nconst client = async (queryString, webpackHot) => {\n    /* Guard: EventSource browser support */\n    if (typeof window?.EventSource === `undefined`) {\n        console.error(`[bud] hot module reload requires EventSource to work. https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events#Tools`);\n        return false;\n    }\n    /* Guard: webpackHot api availability */\n    if (!webpackHot) {\n        console.error(`[bud] hot module reload requires the webpack hot api to be available`);\n        return false;\n    }\n    /* Set client options from URL params */\n    const options = _options_js__WEBPACK_IMPORTED_MODULE_3__.setFromParameters(queryString);\n    /* Setup logger */\n    const logger = (0,_log_js__WEBPACK_IMPORTED_MODULE_2__.makeLogger)(options);\n    if (typeof window.bud === `undefined`) {\n        window.bud = {\n            controllers: [],\n            current: {},\n            hmr: {},\n            listeners: {},\n            reload: () => {\n                window.location.reload();\n            },\n        };\n    }\n    if (!window.bud.current[options.name]) {\n        window.bud.current[options.name] = null;\n    }\n    const isStale = (hash) => {\n        if (hash)\n            window.bud.current[options.name] = hash;\n        return __webpack_require__.h() === window.bud.current[options.name];\n    };\n    /**\n     * Webpack HMR check handler\n     */\n    const check = async () => {\n        if (webpackHot.status() === `idle`) {\n            await webpackHot.check(false);\n            requestAnimationFrame(async function whenReady() {\n                if (webpackHot.status() === `ready`) {\n                    await update();\n                }\n                else {\n                    requestAnimationFrame(whenReady);\n                }\n            });\n        }\n    };\n    /**\n     * Webpack HMR unaccepted module handler\n     */\n    const onUnacceptedOrDeclined = (info) => {\n        console.warn(`[${options.name}] ${info.type}`, info);\n        options.reload && window.location.reload();\n    };\n    const onAccepted = (info) => {\n        window.bud.controllers.map(controller => controller?.update({ action: `sync`, errors: [] }));\n    };\n    /**\n     * Webpack HMR error handler\n     */\n    const onErrored = (error) => {\n        window.bud.controllers.map(controller => controller?.update({ errors: [error] }));\n    };\n    /**\n     * Webpack HMR update handler\n     */\n    const update = async () => {\n        try {\n            await webpackHot.apply({\n                ignoreDeclined: true,\n                ignoreErrored: true,\n                ignoreUnaccepted: true,\n                onAccepted,\n                onDeclined: onUnacceptedOrDeclined,\n                onErrored,\n                onUnaccepted: onUnacceptedOrDeclined,\n            });\n            if (!isStale())\n                await check();\n        }\n        catch (error) {\n            logger.error(error);\n        }\n    };\n    /* Instantiate indicator, overlay */\n    try {\n        await _components_index_js__WEBPACK_IMPORTED_MODULE_0__.make(options);\n    }\n    catch (error) { }\n    /* Instantiate eventSource */\n    const events = (0,_events_js__WEBPACK_IMPORTED_MODULE_1__.injectEvents)(EventSource).make(options);\n    if (!window.bud.listeners?.[options.name]) {\n        window.bud.listeners[options.name] = async (payload) => {\n            if (!payload)\n                return;\n            if (options.reload && payload.action === `reload`)\n                return window.bud.reload();\n            if (payload.name !== options.name)\n                return;\n            window.bud.controllers.map(controller => controller?.update(payload));\n            if (payload.errors?.length > 0)\n                return;\n            if (payload.action === `built` || payload.action === `sync`) {\n                if (isStale(payload.hash))\n                    return;\n                if (payload.action === `built`) {\n                    logger.log(`built in ${payload.time}ms`);\n                }\n                await check();\n            }\n        };\n        /*\n         * Instantiate HMR event source\n         * and register client listeners\n         */\n        events.addListener(window.bud.listeners[options.name]);\n    }\n};\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/@roots/bud-client/lib/hot/client.js?");

/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/hot/components/index.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   make: function() { return /* binding */ make; }\n/* harmony export */ });\n/* harmony import */ var _indicator_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"../node_modules/@roots/bud-client/lib/hot/components/indicator/index.js\");\n/* harmony import */ var _overlay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"../node_modules/@roots/bud-client/lib/hot/components/overlay/index.js\");\n\n\nconst make = async (options) => {\n    if (options.indicator && !customElements.get(`bud-activity-indicator`)) {\n        maybePushController(_indicator_index_js__WEBPACK_IMPORTED_MODULE_0__.make());\n    }\n    if (options.overlay && !customElements.get(`bud-error`)) {\n        maybePushController(_overlay_index_js__WEBPACK_IMPORTED_MODULE_1__.make());\n    }\n    return window.bud.controllers;\n};\nconst maybePushController = (controller) => {\n    if (!controller)\n        return;\n    window.bud.controllers.push(controller);\n};\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/@roots/bud-client/lib/hot/components/index.js?");

/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/hot/components/indicator/index.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   make: function() { return /* binding */ make; }\n/* harmony export */ });\n/* harmony import */ var _indicator_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"../node_modules/@roots/bud-client/lib/hot/components/indicator/indicator.component.js\");\n/* harmony import */ var _indicator_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"../node_modules/@roots/bud-client/lib/hot/components/indicator/indicator.controller.js\");\n\n\nconst make = () => {\n    if (customElements.get(`bud-activity-indicator`))\n        return;\n    customElements.define(`bud-activity-indicator`, _indicator_component_js__WEBPACK_IMPORTED_MODULE_0__.Component);\n    return new _indicator_controller_js__WEBPACK_IMPORTED_MODULE_1__.Controller();\n};\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/@roots/bud-client/lib/hot/components/indicator/index.js?");

/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/hot/components/indicator/indicator.component.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Component: function() { return /* binding */ Component; }\n/* harmony export */ });\n/* harmony import */ var _indicator_pulse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"../node_modules/@roots/bud-client/lib/hot/components/indicator/indicator.pulse.js\");\n\n/**\n * Indicator web component\n */\nclass Component extends HTMLElement {\n    static get observedAttributes() {\n        return [`has-errors`, `has-warnings`, `action`];\n    }\n    /**\n     * Class constructor\n     */\n    constructor() {\n        super();\n        /**\n         * Status indicator colors\n         */\n        this.colors = {\n            error: [220, 38, 38, 1],\n            pending: [59, 130, 246, 1],\n            success: [4, 120, 87, 1],\n            warn: [252, 211, 77, 1],\n        };\n        /**\n         * Component name\n         */\n        this.name = `bud-activity-indicator`;\n        this.renderShadow();\n    }\n    /**\n     * Status is error\n     */\n    onError() {\n        this.show();\n        this.shadowRoot\n            .querySelector(this.selector)\n            .classList.remove(`warning`, `success`, `pending`);\n        this.shadowRoot.querySelector(this.selector).classList.add(`error`);\n        this.hide();\n    }\n    /**\n     * Status is pending\n     */\n    onPending() {\n        this.show();\n        this.shadowRoot\n            .querySelector(this.selector)\n            .classList.remove(`error`, `warning`, `success`);\n        this.shadowRoot.querySelector(this.selector).classList.add(`pending`);\n        this.hide();\n    }\n    /**\n     * Status is success\n     */\n    onSuccess() {\n        this.show();\n        this.shadowRoot\n            .querySelector(this.selector)\n            .classList.remove(`error`, `warning`, `pending`);\n        this.shadowRoot.querySelector(this.selector).classList.add(`success`);\n        this.hide();\n    }\n    /**\n     * Status is warning\n     */\n    onWarning() {\n        this.show();\n        this.shadowRoot\n            .querySelector(this.selector)\n            .classList.remove(`error`, `success`, `pending`);\n        this.shadowRoot.querySelector(this.selector).classList.add(`warning`);\n        this.hide();\n    }\n    attributeChangedCallback() {\n        if (this.hasAttribute(`has-errors`))\n            return this.onError();\n        if (this.hasAttribute(`has-warnings`))\n            return this.onWarning();\n        if (this.getAttribute(`action`) == `building` ||\n            this.getAttribute(`action`) == `sync`)\n            return this.onSuccess();\n        this.onPending();\n    }\n    /**\n     * Get accessor: has errors\n     */\n    get hasErrors() {\n        return this.getAttribute(`has-errors`) == `true`;\n    }\n    /**\n     * Get accessor: has warnings\n     */\n    get hasWarnings() {\n        return this.getAttribute(`has-warnings`) == `true`;\n    }\n    /**\n     * Hide status indicator\n     */\n    hide() {\n        this.timeout = setTimeout(() => {\n            this.shadowRoot.querySelector(this.selector).classList.remove(`show`);\n        }, 2000);\n    }\n    /**\n     * Render status indicator\n     */\n    renderShadow() {\n        const container = document.createElement(`div`);\n        container.classList.add(this.name);\n        container.innerHTML = `\n    <style>\n    .bud-activity-indicator {\n      position: fixed;\n      width: 10px;\n      height: 10px;\n      left: 10px;\n      bottom: 10px;\n      z-index: 9999;\n      margin: 5px;\n      padding: 5px;\n      -webkit-transition:\n        all .6s ease-in-out,\n      transition:\n        all .6s ease-in-out;\n      animation-fill-mode: forwards;\n      pointer-events: none;\n      border-radius: 50%;\n      transform: scale(0);\n      opacity: 0;\n    }\n\n    .show {\n      opacity: 1;\n      background-color: rgba(255, 255, 255, 1);\n      transform: scale(1);\n      transition:\n        all .6s ease-in-out;\n    }\n\n    ${(0,_indicator_pulse_js__WEBPACK_IMPORTED_MODULE_0__.pulse)(`success`, this.colors.success)}\n    ${(0,_indicator_pulse_js__WEBPACK_IMPORTED_MODULE_0__.pulse)(`error`, this.colors.error)}\n    ${(0,_indicator_pulse_js__WEBPACK_IMPORTED_MODULE_0__.pulse)(`warning`, this.colors.warn)}\n    ${(0,_indicator_pulse_js__WEBPACK_IMPORTED_MODULE_0__.pulse)(`pending`, this.colors.pending)}\n\n    </style>\n    `;\n        this.attachShadow({ mode: `open` }).appendChild(container);\n    }\n    /**\n     * Root div querySelector selector\n     */\n    get selector() {\n        return `.${this.name}`;\n    }\n    /**\n     * Show status indicator\n     */\n    show() {\n        this.timeout && clearTimeout(this.timeout);\n        this.shadowRoot.querySelector(this.selector).classList.add(`show`);\n    }\n}\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/@roots/bud-client/lib/hot/components/indicator/indicator.component.js?");

/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/hot/components/indicator/indicator.controller.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Controller: function() { return /* binding */ Controller; }\n/* harmony export */ });\n/**\n * Activity indicator controller\n */\nclass Controller {\n    /**\n     * Initialization\n     */\n    constructor() {\n        /**\n         * Active WHM payload\n         */\n        this.payload = null;\n        this.node = document.createElement(`bud-activity-indicator`);\n        this.update = this.update.bind(this);\n    }\n    /**\n     * Append `bud-error` element to the DOM\n     */\n    addNode() {\n        if (document.body.querySelector(`bud-activity-indicator`)) {\n            if (typeof this.timer.unref === `function`)\n                this.timer.unref();\n            this.removeNode();\n        }\n        document.body?.appendChild(this.node);\n        this.timer = setTimeout(this.removeNode, 3000);\n    }\n    /**\n     * Remove `bud-error` element from the DOM (if present)\n     */\n    removeNode() {\n        document.body.querySelector(`bud-activity-indicator`)?.remove();\n    }\n    /**\n     * Update activity indicator\n     */\n    update(payload) {\n        this.node.toggleAttribute(`has-errors`, payload.errors?.length > 0);\n        this.node.toggleAttribute(`has-warnings`, payload.warnings?.length > 0);\n        this.node.setAttribute(`action`, payload.action);\n        this.addNode();\n    }\n}\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/@roots/bud-client/lib/hot/components/indicator/indicator.controller.js?");

/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/hot/components/indicator/indicator.pulse.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pulse: function() { return /* binding */ pulse; }\n/* harmony export */ });\n/**\n * CSS animation for reload indicator\n */\nconst pulse = (name, color) => `\n  .${name} {\n    box-shadow: 0 0 0 0 rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]});\n    animation: ${name}__pulse 2s infinite;\n    transition: all 0.4s ease-in-out;\n  }\n\n  .${name}:not(.show) {\n    background-color: rgba(${color[0]}, ${color[1]}, ${color[2]}, 0);\n  }\n\n  .${name}.show {\n    background-color: rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]});\n  }\n\n  @keyframes ${name}__pulse {\n    0% {\n      transform: scale(0.95);\n      box-shadow: 0 0 0 0 rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.7);\n    }\n\n    70% {\n      transform: scale(1);\n      box-shadow: 0 0 0 10px rgba(${color[0]}, ${color[1]}, ${color[2]}, 0);\n    }\n\n    100% {\n      transform: scale(0.95);\n      box-shadow: 0 0 0 0 rgba(${color[0]}, ${color[1]}, ${color[2]}, 0);\n    }\n  }\n`;\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/@roots/bud-client/lib/hot/components/indicator/indicator.pulse.js?");

/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/hot/components/overlay/index.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   make: function() { return /* binding */ make; }\n/* harmony export */ });\n/* harmony import */ var _overlay_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"../node_modules/@roots/bud-client/lib/hot/components/overlay/overlay.component.js\");\n/* harmony import */ var _overlay_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"../node_modules/@roots/bud-client/lib/hot/components/overlay/overlay.controller.js\");\n\n\nconst make = () => {\n    if (customElements.get(`bud-error`))\n        return;\n    customElements.define(`bud-error`, _overlay_component_js__WEBPACK_IMPORTED_MODULE_0__.Component);\n    return new _overlay_controller_js__WEBPACK_IMPORTED_MODULE_1__.Controller();\n};\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/@roots/bud-client/lib/hot/components/overlay/index.js?");

/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/hot/components/overlay/overlay.component.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Component: function() { return /* binding */ Component; }\n/* harmony export */ });\n/**\n * Component container\n */\nclass Component extends HTMLElement {\n    static get observedAttributes() {\n        return [`message`];\n    }\n    constructor() {\n        super();\n        this.name = `bud-overlay`;\n        this.renderShadow();\n    }\n    attributeChangedCallback() {\n        if (!this.documentBodyStyle)\n            this.documentBodyStyle = document.body?.style;\n        if (this.getAttribute(`message`)) {\n            document.body.style.overflow = `hidden`;\n            this.shadowRoot.querySelector(`.overlay`).classList.add(`visible`);\n            this.shadowRoot.querySelector(`.messages`).innerHTML =\n                this.getAttribute(`message`);\n            return;\n        }\n        if (this.documentBodyStyle?.overflow && document?.body?.style) {\n            document.body.style.overflow = this.documentBodyStyle.overflow;\n        }\n        this.shadowRoot.querySelector(`.overlay`).classList.remove(`visible`);\n    }\n    connectedCallback() {\n        if (document.body?.style)\n            this.documentBodyStyle = document.body.style;\n    }\n    get message() {\n        return this.getAttribute(`message`);\n    }\n    renderShadow() {\n        const container = document.createElement(`div`);\n        container.classList.add(`overlay`);\n        container.innerHTML = `\n      <style>\n        .overlay {\n          width: 100vw;\n          backdrop-filter: blur(10px);\n          display: flex;\n          height: 100vh;\n          border-top: 2px solid transparent;\n          overflow-x: hidden;\n          overflow-y: scroll;\n          position: absolute;\n          top: -1000px;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          opacity: 0;\n          transition: opacity 0.2s ease-in-out, border 0.4s ease-in-out;\n          justify-content: center;\n        }\n\n        .visible {\n          position: fixed;\n          top: 0;\n          z-index: 9998;\n          opacity: 1;\n          border-top: 5px solid red;\n          transition: opacity 0.2s ease-in-out, border 0.4s ease-in-out;\n          max-width: 100vw;\n        }\n\n        .messages {\n          background-color: white;\n          border-radius: 5px;\n          filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));\n          display: flex;\n          align-self: center;\n          width: 800px;\n          max-width: 90vw;\n          margin-left: auto;\n          margin-right: auto;\n          flex-direction: column;\n          flex-wrap: wrap;\n          align-items: center;\n          align-content: center;\n          padding: 2rem 2rem 0rem 2rem;\n        }\n\n        .visible .messages > div {\n          position: relative;\n          top: 0;\n          opacity: 1;\n          transition: all: 0.2s ease-in-out;\n        }\n\n        .messages > div {\n          position: relative;\n          top: 20px;\n          opacity: 0;\n          transition: all: 0.2s ease-in-out;\n          align-items: center;\n          align-content: center;\n          color: rgba(0, 0, 0, 0.87);\n          flex-direction: column;\n          font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n          padding: 0rem 2rem 2rem 2rem;\n          width: 100%;\n          max-width:95vw;\n        }\n\n        .messages > div > pre {\n          font-weight: 300;\n          font-size: 0.8rem;\n          overflow-x: scroll;\n        }\n\n        pre {\n          background: #303030;\n          color: #f1f1f1;\n          padding: 10px 16px;\n          border-radius: 2px;\n          border-top: 4px solid #dd0303;\n          -moz-box-shadow: inset 0 0 10px #000;\n          box-shadow: inset 0 0 10px #000;\n          counter-reset: line;\n        }\n\n        pre span {\n          display: block;\n          line-height: 1.5rem;\n        }\n\n        pre span:before {\n          counter-increment: line;\n          content: counter(line);\n          display: inline-block;\n          border-right: 1px solid #ddd;\n          padding: 0 .5em;\n          margin-right: .5em;\n          color: #888;\n          width: 30px;\n        }\n      </style>\n      <div class=\"messages\"></div>\n    `;\n        this.attachShadow({ mode: `open` }).appendChild(container);\n    }\n}\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/@roots/bud-client/lib/hot/components/overlay/overlay.component.js?");

/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/hot/components/overlay/overlay.controller.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Controller: function() { return /* binding */ Controller; }\n/* harmony export */ });\nconst ansiPattern = [\n    `[\\\\u001B\\\\u009B][[\\\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\\\d\\\\/#&.:=?%@~_]+)*|[a-zA-Z\\\\d]+(?:;[-a-zA-Z\\\\d\\\\/#&.:=?%@~_]*)*)?\\\\u0007)`,\n    `(?:(?:\\\\d{1,4}(?:;\\\\d{0,4})*)?[\\\\dA-PR-TZcf-ntqry=><~]))`,\n].join(`|`);\nconst stripAnsi = (body) => body?.replace?.(new RegExp(ansiPattern, `g`), ``) ?? body;\n/**\n * Overlay controller\n */\nclass Controller {\n    /**\n     * Class constructor\n     */\n    constructor() {\n        this.update = this.update.bind(this);\n        this.element = document.createElement(`bud-error`);\n    }\n    /**\n     * Append `bud-error` element to the DOM\n     */\n    createError() {\n        !document.body.querySelector(`bud-error`) &&\n            document.body?.appendChild(this.element);\n    }\n    /**\n     * Formatted error message\n     */\n    get message() {\n        return this.payload.errors?.reduce((a, c) => {\n            const msg = c?.message ?? c?.error ?? c;\n            if (!msg)\n                return a;\n            return `${a}\n        <div>\n          <pre>${stripAnsi(msg)}</pre>\n        </div>`;\n        }, ``);\n    }\n    /**\n     * Remove `bud-error` element from the DOM (if present)\n     */\n    removeError() {\n        document.body.querySelector(`bud-error`)?.remove();\n    }\n    /**\n     * Update DOM\n     */\n    update(payload) {\n        this.payload = payload;\n        this.element.setAttribute(`message`, this.message ?? ``);\n        if (this.payload.errors?.length > 0) {\n            return this.createError();\n        }\n        this.removeError();\n    }\n}\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/@roots/bud-client/lib/hot/components/overlay/overlay.controller.js?");

/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/hot/events.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   injectEvents: function() { return /* binding */ injectEvents; }\n/* harmony export */ });\nconst injectEvents = (eventSource) => {\n    /**\n     * EventSource wrapper\n     *\n     * @remarks\n     * wraps EventSource in a function to allow for\n     * mocking in tests\n     */\n    return class Events extends eventSource {\n        /**\n         * Singleton constructor\n         *\n         */\n        static make(options) {\n            if (typeof window.bud.hmr[options.name] === `undefined`)\n                Object.assign(window.bud.hmr, {\n                    [options.name]: new Events(options),\n                });\n            return window.bud.hmr[options.name];\n        }\n        /**\n         * Class constructor\n         *\n         * @remarks\n         * Singleton interface, so this is private.\n         *\n         */\n        constructor(options) {\n            super(options.path);\n            this.options = options;\n            /**\n             * Registered listeners\n             */\n            this.listeners = new Set();\n            /**\n             * EventSource `onmessage` handler\n             */\n            this.onmessage = async function (payload) {\n                if (!payload?.data || payload.data == `\\uD83D\\uDC93`) {\n                    return;\n                }\n                try {\n                    const data = JSON.parse(payload.data);\n                    if (!data)\n                        return;\n                    await Promise.all([...this.listeners].map(async (listener) => {\n                        return await listener(data);\n                    }));\n                }\n                catch (ex) { }\n            };\n            /**\n             * EventSource `onopen` handler\n             */\n            this.onopen = function () { };\n            this.onopen = this.onopen.bind(this);\n            this.onmessage = this.onmessage.bind(this);\n            this.addListener = this.addListener.bind(this);\n        }\n        /**\n         * EventSource `addMessageListener` handler\n         */\n        addListener(listener) {\n            this.listeners.add(listener);\n            return this;\n        }\n    };\n};\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/@roots/bud-client/lib/hot/events.js?");

/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/hot/index.js?indicator=true&name=sage&overlay=true&reload=true":
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var __resourceQuery = \"?indicator=true&name=sage&overlay=true&reload=true\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"../node_modules/@roots/bud-client/lib/hot/client.js\");\n/* eslint-disable no-console */\n/* global __resourceQuery */\n/* global module */\n\n(async function () {\n    try {\n        await (0,_client_js__WEBPACK_IMPORTED_MODULE_0__.client)(__resourceQuery, __webpack_module__.hot);\n    }\n    catch (err) {\n        console.error(err);\n    }\n})();\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/@roots/bud-client/lib/hot/index.js?");

/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/hot/log.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeError: function() { return /* binding */ makeError; },\n/* harmony export */   makeInfo: function() { return /* binding */ makeInfo; },\n/* harmony export */   makeLog: function() { return /* binding */ makeLog; },\n/* harmony export */   makeLogger: function() { return /* binding */ makeLogger; },\n/* harmony export */   makeWarn: function() { return /* binding */ makeWarn; }\n/* harmony export */ });\n/* eslint-disable no-console */\nconst makeLogger = (options) => {\n    return {\n        error: makeError(options),\n        info: makeInfo(options),\n        log: makeLog(options),\n        warn: makeWarn(options),\n    };\n};\nconst makeLog = (options) => {\n    return (...args) => {\n        if (options.log) {\n            console.log(`[${options.name}]`, ...args);\n        }\n    };\n};\nconst makeInfo = (options) => {\n    return (...args) => {\n        if (options.log) {\n            console.info(`[${options.name}]`, ...args);\n        }\n    };\n};\nconst makeError = (options) => {\n    return (...args) => {\n        console.error(`[${options.name}]`, ...args);\n    };\n};\nconst makeWarn = (options) => {\n    return (...args) => {\n        console.warn(`[${options.name}]`, ...args);\n    };\n};\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/@roots/bud-client/lib/hot/log.js?");

/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/hot/options.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   data: function() { return /* binding */ data; },\n/* harmony export */   get: function() { return /* binding */ get; },\n/* harmony export */   setFromParameters: function() { return /* binding */ setFromParameters; }\n/* harmony export */ });\n/**\n * Client options\n */\nlet data = {\n    debug: true,\n    indicator: true,\n    log: true,\n    name: `@roots/bud-client`,\n    overlay: true,\n    path: `/bud/hot`,\n    reload: true,\n    timeout: 2000,\n};\n/**\n * Get client option\n */\nconst get = (name, key) => key ? data[name][key] : data[name];\n/**\n * Set client data based on URL parameters\n */\nconst setFromParameters = (query) => {\n    let parsedParams = {};\n    new window.URLSearchParams(query).forEach((value, key) => {\n        parsedParams[key] =\n            value === `true` ? true : value === `false` ? false : value;\n    });\n    data[parsedParams.name] = { ...data, ...parsedParams };\n    return data[parsedParams.name];\n};\n\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/@roots/bud-client/lib/hot/options.js?");

/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/intercept/index.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst intercept = (...args) => {\n    args.every(arg => typeof arg === `string`) &&\n        setInterval(() => [\n            [document.getElementsByTagName(`a`), `href`],\n            [document.getElementsByTagName(`link`), `href`],\n        ]\n            .map(([elements, attribute]) => [Array.from(elements), attribute])\n            .forEach(([elements, attribute]) => elements\n            .filter(el => el.hasAttribute(attribute))\n            .filter(el => !el.hasAttribute(`__bud_processed`))\n            .filter(el => el.getAttribute(attribute).startsWith(args[0]))\n            .map(el => {\n            const value = el.getAttribute(attribute).replace(...args);\n            el.setAttribute(attribute, value);\n            el.toggleAttribute(`__bud_processed`);\n        })), 1000);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (intercept);\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/@roots/bud-client/lib/intercept/index.js?");

/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/intercept/proxy-click-interceptor.js?replace=%2F&search=http%3A%2F%2F0.0.0.0%2F":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var __resourceQuery = \"?replace=%2F&search=http%3A%2F%2F0.0.0.0%2F\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"../node_modules/@roots/bud-client/lib/intercept/index.js\");\n/* eslint-disable no-console */\n/* global __resourceQuery */\n\nwindow.requestAnimationFrame(async function ready() {\n    if (false)\n        {}\n    const params = new URLSearchParams(__resourceQuery);\n    if (!params || !params.has(`search`) || !params.has(`replace`))\n        return;\n    const search = decodeURI(params.get(`search`));\n    const replace = decodeURI(params.get(`replace`));\n    return document.body\n        ? (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(search, replace)\n        : window.requestAnimationFrame(ready);\n});\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/@roots/bud-client/lib/intercept/proxy-click-interceptor.js?");

/***/ }),

/***/ "../node_modules/@roots/wordpress-hmr/lib/cache.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Cache: function() { return /* binding */ Cache; }\n/* harmony export */ });\nclass Cache {\n    store = {};\n    get(key) {\n        return this.store[key];\n    }\n    has(key) {\n        return typeof this.store[key] !== `undefined`;\n    }\n    is(key, value) {\n        return this.store[key] === value;\n    }\n    set(key, value) {\n        this.store[key] = value;\n    }\n}\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/@roots/wordpress-hmr/lib/cache.js?");

/***/ }),

/***/ "../node_modules/@roots/wordpress-hmr/lib/editor.js":
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   load: function() { return /* binding */ load; },\n/* harmony export */   setNotify: function() { return /* binding */ setNotify; }\n/* harmony export */ });\n/* harmony import */ var _roots_wordpress_hmr_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"../node_modules/@roots/wordpress-hmr/lib/cache.js\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"@wordpress/data\");\n\n\nlet initial = true;\nlet notify = true;\nconst setNotify = (value) => {\n    notify = value;\n};\nconst load = ({ accept, after, api, before, getContext }) => {\n    const cache = new _roots_wordpress_hmr_cache__WEBPACK_IMPORTED_MODULE_0__.Cache();\n    const handler = () => {\n        const changed = [];\n        before && before();\n        const context = getContext();\n        context?.keys().forEach((key) => {\n            const raw = context(key);\n            const source = raw.default ?? raw;\n            if (cache.is(key, source))\n                return;\n            if (cache.has(key))\n                api.unregister(cache.get(key));\n            api.register(source);\n            changed.push(source);\n            cache.set(key, source);\n        });\n        after && after(changed);\n        if (initial && notify && __webpack_module__.hot) {\n            initial = false;\n            (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)(`core/notices`).createInfoNotice(`🔥 Reload enabled`, {\n                id: `hmr-enabled`,\n                type: `snackbar`,\n            });\n        }\n        return context;\n    };\n    const { id } = handler();\n    accept(id, handler);\n};\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/@roots/wordpress-hmr/lib/editor.js?");

/***/ }),

/***/ "../node_modules/@roots/wordpress-hmr/lib/filter.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   register: function() { return /* binding */ register; },\n/* harmony export */   unregister: function() { return /* binding */ unregister; }\n/* harmony export */ });\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"@wordpress/hooks\");\n\nconst register = ({ callback, hook, name, }) => {\n    (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.hasFilter)(hook, name) && unregister({ hook, name });\n    (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)(hook, name, callback);\n};\nconst unregister = ({ hook, name, }) => (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.removeFilter)(hook, name);\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/@roots/wordpress-hmr/lib/filter.js?");

/***/ }),

/***/ "../node_modules/@roots/wordpress-hmr/lib/filters.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   register: function() { return /* binding */ register; }\n/* harmony export */ });\n/* harmony import */ var _roots_wordpress_hmr_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"../node_modules/@roots/wordpress-hmr/lib/editor.js\");\n/* harmony import */ var _roots_wordpress_hmr_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"../node_modules/@roots/wordpress-hmr/lib/filter.js\");\n\n\nconst register = (getContext, accept) => _roots_wordpress_hmr_editor__WEBPACK_IMPORTED_MODULE_0__.load({ accept, api: _roots_wordpress_hmr_filter__WEBPACK_IMPORTED_MODULE_1__, getContext });\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/@roots/wordpress-hmr/lib/filters.js?");

/***/ }),

/***/ "./scripts/editor.js":
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var _mnt_c_Users_mtelk_Homestead_pfe_Pulse24_test_dev_web_app_themes_sage_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mnt_c_Users_mtelk_Homestead_pfe_Pulse24_test_dev_web_app_themes_sage_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"../node_modules/react-refresh/runtime.js\");\n/* harmony import */ var _roots_wordpress_hmr_filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"../node_modules/@roots/wordpress-hmr/lib/filters.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(\"../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n\n__webpack_require__.$Refresh$.runtime = /*#__PURE__*/ (_mnt_c_Users_mtelk_Homestead_pfe_Pulse24_test_dev_web_app_themes_sage_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_mnt_c_Users_mtelk_Homestead_pfe_Pulse24_test_dev_web_app_themes_sage_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_mnt_c_Users_mtelk_Homestead_pfe_Pulse24_test_dev_web_app_themes_sage_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__, 2)));\n\n/**\n * @see {@link https://bud.js.org/extensions/bud-preset-wordpress/editor-integration/filters}\n */ \n_roots_wordpress_hmr_filters__WEBPACK_IMPORTED_MODULE_1__.register(()=>__webpack_require__(\"./scripts/filters sync recursive .*\\\\.filter\\\\..*$\"), (id, context)=>{\n    if (true) return __webpack_module__.hot.accept(id, context);\n});\n;\n/**\n * @see {@link https://webpack.js.org/api/hot-module-replacement/}\n */ if (true) __webpack_module__.hot.accept(console.error);\n\n\nvar $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nvar $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tvar errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tvar testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\t__webpack_module__.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://@roots/bud/sage/./scripts/editor.js?");

/***/ }),

/***/ "./scripts/filters/button.filter.js":
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var _mnt_c_Users_mtelk_Homestead_pfe_Pulse24_test_dev_web_app_themes_sage_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   callback: function() { return /* binding */ callback; },\n/* harmony export */   hook: function() { return /* binding */ hook; },\n/* harmony export */   name: function() { return /* binding */ name; }\n/* harmony export */ });\n/* harmony import */ var _mnt_c_Users_mtelk_Homestead_pfe_Pulse24_test_dev_web_app_themes_sage_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"../node_modules/react-refresh/runtime.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(\"../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n\n__webpack_require__.$Refresh$.runtime = /*#__PURE__*/ (_mnt_c_Users_mtelk_Homestead_pfe_Pulse24_test_dev_web_app_themes_sage_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_mnt_c_Users_mtelk_Homestead_pfe_Pulse24_test_dev_web_app_themes_sage_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_mnt_c_Users_mtelk_Homestead_pfe_Pulse24_test_dev_web_app_themes_sage_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__, 2)));\n\n/**\n * @see {@link https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/#blocks-registerblocktype}\n */ const hook = 'blocks.registerBlockType';\n/**\n * Filter handle\n */ const name = 'sage/button';\n/**\n * Filter callback\n *\n * @param {object} settings\n * @param {string} name\n * @returns modified settings\n */ function callback(settings, name) {\n    if (name !== 'core/button') return settings;\n    return {\n        ...settings,\n        styles: [\n            {\n                label: 'Outline',\n                name: 'outline'\n            }\n        ]\n    };\n}\n\n\nvar $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nvar $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tvar errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tvar testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\t__webpack_module__.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://@roots/bud/sage/./scripts/filters/button.filter.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("../node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js"), __webpack_exec__("./scripts/editor.js"), __webpack_exec__("./styles/editor.css"), __webpack_exec__("../node_modules/@roots/bud-client/lib/hot/index.js?indicator=true&name=sage&overlay=true&reload=true"), __webpack_exec__("../node_modules/@roots/bud-client/lib/intercept/proxy-click-interceptor.js?replace=%2F&search=http%3A%2F%2F0.0.0.0%2F"));
/******/ }
]);