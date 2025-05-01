/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/personnel-nbg.png */ "./src/assets/personnel-nbg.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/explosion.png */ "./src/assets/explosion.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/splash-water-bg.png */ "./src/assets/splash-water-bg.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:focus {
  outline: none;
}
html {
  font-size: 62.5%;
}

/* Helpers */

.main-container {
  height: 100vh;
  width: 100vw;
}

.start-screen {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 8rem;
  flex-direction: column;
}

.start-screen-main {
  gap: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.start-screen-bottom-container {
  display: flex;
  gap: 2rem;
}

.player-tiles-selector-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.board-container {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  user-select: none;
}

.board-tile {
  background-color: aliceblue;
  height: 3.8rem;
  width: 3.8rem;
  border-right: 0.5px solid #999999;
  border-bottom: 0.5px solid #999999;
}

.board-tile:nth-child(-n + 10) {
  border-top: 0.5px solid #999999;
}

.board-tile:nth-child(10n + 1) {
  border-left: 0.5px solid #999999;
}

.board-tile-hovered {
  background-color: white;
}

.dragging {
  opacity: 0;
}

.dragged-element-dropped {
  opacity: 0;
  pointer-events: none;
}

.rows {
  display: flex;
  gap: 2rem;
}

.ship {
  border: 0.5px solid #666666;
}

.ship:hover {
  cursor: grab;
}

.ship-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.drop-ship {
  background-color: white;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  cursor: pointer;
}

.btn {
  padding: 1.2rem;
  border-radius: 0.5rem;
  border: none;
  color: white;
  background-color: #666666;
  font-weight: 600;
  user-select: none;
  cursor: pointer;
}

/* Game Screen */

.game-screen {
  display: flex;
  height: 100%;
  width: 100vw;

  justify-content: center;
  align-items: center;
}

.explode {
  background-color: white;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-size: cover;
}

.miss {
  background-color: white;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
}

.sunk {
  background-color: rgba(255, 0, 0, 0.514);
}

.disabled {
  background-color: #666666;
}

.inactive {
  display: none;
}

.screen-half-player {
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  width: 50vw;
  margin-right: 10rem;
}

.screen-half-computer {
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 50vw;
  margin-left: 10rem;
}

.back-screen-player {
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  width: 50vw;
}

.back-screen-computer {
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  width: 50vw;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;AACA;EACE,gBAAgB;AAClB;;AAEA,YAAY;;AAEZ;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,SAAS;EACT,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,iBAAiB;AACnB;;AAEA;EACE,2BAA2B;EAC3B,cAAc;EACd,aAAa;EACb,iCAAiC;EACjC,kCAAkC;AACpC;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,uBAAuB;EACvB,yDAAmD;EACnD,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,qBAAqB;EACrB,YAAY;EACZ,YAAY;EACZ,yBAAyB;EACzB,gBAAgB;EAChB,iBAAiB;EACjB,eAAe;AACjB;;AAEA,gBAAgB;;AAEhB;EACE,aAAa;EACb,YAAY;EACZ,YAAY;;EAEZ,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,yDAA+C;EAC/C,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;EACvB,yDAAqD;EACrD,wBAAwB;EACxB,4BAA4B;EAC5B,2BAA2B;AAC7B;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,oBAAoB;EACpB,mBAAmB;EACnB,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,oBAAoB;EACpB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,oBAAoB;EACpB,mBAAmB;EACnB,WAAW;AACb","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n*:focus {\r\n  outline: none;\r\n}\r\nhtml {\r\n  font-size: 62.5%;\r\n}\r\n\r\n/* Helpers */\r\n\r\n.main-container {\r\n  height: 100vh;\r\n  width: 100vw;\r\n}\r\n\r\n.start-screen {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 100%;\r\n  gap: 8rem;\r\n  flex-direction: column;\r\n}\r\n\r\n.start-screen-main {\r\n  gap: 8rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.start-screen-bottom-container {\r\n  display: flex;\r\n  gap: 2rem;\r\n}\r\n\r\n.player-tiles-selector-container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.board-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(10, 1fr);\r\n  user-select: none;\r\n}\r\n\r\n.board-tile {\r\n  background-color: aliceblue;\r\n  height: 3.8rem;\r\n  width: 3.8rem;\r\n  border-right: 0.5px solid #999999;\r\n  border-bottom: 0.5px solid #999999;\r\n}\r\n\r\n.board-tile:nth-child(-n + 10) {\r\n  border-top: 0.5px solid #999999;\r\n}\r\n\r\n.board-tile:nth-child(10n + 1) {\r\n  border-left: 0.5px solid #999999;\r\n}\r\n\r\n.board-tile-hovered {\r\n  background-color: white;\r\n}\r\n\r\n.dragging {\r\n  opacity: 0;\r\n}\r\n\r\n.dragged-element-dropped {\r\n  opacity: 0;\r\n  pointer-events: none;\r\n}\r\n\r\n.rows {\r\n  display: flex;\r\n  gap: 2rem;\r\n}\r\n\r\n.ship {\r\n  border: 0.5px solid #666666;\r\n}\r\n\r\n.ship:hover {\r\n  cursor: grab;\r\n}\r\n\r\n.ship-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2rem;\r\n}\r\n\r\n.drop-ship {\r\n  background-color: white;\r\n  background-image: url(\"./assets/personnel-nbg.png\");\r\n  background-size: cover;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn {\r\n  padding: 1.2rem;\r\n  border-radius: 0.5rem;\r\n  border: none;\r\n  color: white;\r\n  background-color: #666666;\r\n  font-weight: 600;\r\n  user-select: none;\r\n  cursor: pointer;\r\n}\r\n\r\n/* Game Screen */\r\n\r\n.game-screen {\r\n  display: flex;\r\n  height: 100%;\r\n  width: 100vw;\r\n\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.explode {\r\n  background-color: white;\r\n  background-image: url(\"./assets/explosion.png\");\r\n  background-size: cover;\r\n}\r\n\r\n.miss {\r\n  background-color: white;\r\n  background-image: url(\"./assets/splash-water-bg.png\");\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  background-position: bottom;\r\n}\r\n\r\n.sunk {\r\n  background-color: rgba(255, 0, 0, 0.514);\r\n}\r\n\r\n.disabled {\r\n  background-color: #666666;\r\n}\r\n\r\n.inactive {\r\n  display: none;\r\n}\r\n\r\n.screen-half-player {\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: end;\r\n  align-items: center;\r\n  width: 50vw;\r\n  margin-right: 10rem;\r\n}\r\n\r\n.screen-half-computer {\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: start;\r\n  align-items: center;\r\n  width: 50vw;\r\n  margin-left: 10rem;\r\n}\r\n\r\n.back-screen-player {\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: end;\r\n  align-items: center;\r\n  width: 50vw;\r\n}\r\n\r\n.back-screen-computer {\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: end;\r\n  align-items: center;\r\n  width: 50vw;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/explosion.png":
/*!**********************************!*\
  !*** ./src/assets/explosion.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/explosion.68599fb62810cd6d42d6.png";

/***/ }),

/***/ "./src/assets/personnel-nbg.png":
/*!**************************************!*\
  !*** ./src/assets/personnel-nbg.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/personnel-nbg.9ed7bc4babdb4146d5aa.png";

/***/ }),

/***/ "./src/assets/screaming-soldier.mp3":
/*!******************************************!*\
  !*** ./src/assets/screaming-soldier.mp3 ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/audio/screaming-soldier.6ffee90e01702aab73e9.mp3";

/***/ }),

/***/ "./src/assets/splash-water-bg.png":
/*!****************************************!*\
  !*** ./src/assets/splash-water-bg.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/splash-water-bg.c49d246b75c3b58236f2.png";

/***/ }),

/***/ "./src/assets/water-drip.mp3":
/*!***********************************!*\
  !*** ./src/assets/water-drip.mp3 ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/audio/water-drip.00a7c7541276e5ab193f.mp3";

/***/ }),

/***/ "./src/helpers/calculateComputerIndex.js":
/*!***********************************************!*\
  !*** ./src/helpers/calculateComputerIndex.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateRandomIndex: () => (/* binding */ calculateRandomIndex)
/* harmony export */ });
/* harmony import */ var _randomizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./randomizer */ "./src/helpers/randomizer.js");


const calculateRandomIndex = function () {
  const shipsAvailable = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];

  // Ships count will be both the id of the ship and the controler of the loop
  let shipsCount = 0;
  let computerCoordinates = {};

  while (shipsCount <= shipsAvailable.length - 1) {
    // Get a ship length
    // shipsCount will start at 0 perfect as index for the shipsAvailable
    const shipLength = shipsAvailable[shipsCount];
    // For each shipAvailable randomize x or y

    let direction = ["x", "y"][Math.floor(Math.random() * 2)];

    // if X
    if (direction === "x") {
      // Randomize a position index between 1 - 100
      //   This function will also ensure that no ship is currently placed in the chosen number and the numbers after the ship length is added
      let shipCoordinates = (0,_randomizer__WEBPACK_IMPORTED_MODULE_0__.randomIndexX)(computerCoordinates, shipLength);

      // Push it in the ship coordinates, shipCount/index as Id and the coordinates array in the coordinates object
      computerCoordinates[`${shipsCount}`] = {
        direction,
        coordinates: shipCoordinates,
        shipId: shipsCount,
      };

      // increment the ships count to fetch the next index
      shipsCount++;
    } else {
      let shipCoordinates = (0,_randomizer__WEBPACK_IMPORTED_MODULE_0__.randomIndexY)(computerCoordinates, shipLength);

      computerCoordinates[`${shipsCount}`] = {
        direction,
        coordinates: shipCoordinates,
        shipId: shipsCount,
      };
      // increment the ships count to fetch the next index
      shipsCount++;
    }
  }

  return computerCoordinates;
};

//  Meaning if 46 randomize index then 46 plus ships lenght do not exceed 50
// IF passed
// For ship length increment the randomize index
// Check if these array of index is not yet in the ship coordinates
// If passed push to ship coordiantes if not back to step 4
// Passed the randomized index to the computer ship coordinates

// if y
// Get a ship lenght
// Randomize a position index between 1 - 100
// Check if index for i and 10 exceeds 100 if passed proceed if not back to step 3
// Check if these indexes included already in ship coordiantes if not proceed if included back to step 3
// Push to ship coordinates


/***/ }),

/***/ "./src/helpers/calculateIndexHighlight.js":
/*!************************************************!*\
  !*** ./src/helpers/calculateIndexHighlight.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateIndex: () => (/* binding */ calculateIndex)
/* harmony export */ });
const calculateIndex = function (target, draggedData) {
  if (!draggedData) return;

  const { index: draggedIndex, direction, length } = draggedData;

  let array = [];

  if (direction === "x") {
    const startIndex = target - (draggedIndex - 1);
    // Get the level if 41 - 50 level should be 4
    const level = Math.ceil(target / 10) - 1;

    for (let i = 0; i <= length - 1; i++) {
      const indexToPush = startIndex + i;
      // Check if index is the same level of the target index so that index pushed should be in the same row
      if (Math.ceil(indexToPush / 10) - 1 === level) array.push(indexToPush);
    }
  }

  return array;
};


/***/ }),

/***/ "./src/helpers/calculateNewShipDirection.js":
/*!**************************************************!*\
  !*** ./src/helpers/calculateNewShipDirection.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateNewCoordinates: () => (/* binding */ calculateNewCoordinates)
/* harmony export */ });
const calculateNewCoordinates = function (direction, coordinates) {
  let array = [];

  const length = coordinates.length;

  if (direction === "x") {
    const startIndex = Number(coordinates[0]);

    const level = Math.ceil(startIndex / 10) - 1;

    for (let i = 0; i <= length - 1; i++) {
      const indexToPush = startIndex + i;

      if (Math.ceil(indexToPush / 10) - 1 === level) array.push(indexToPush);
    }
  }

  if (direction === "y") {
    const startIndex = Number(coordinates[0]);

    let basedCoordinates = 0;

    for (let i = 0; i <= length - 1; i++) {
      const indexToPush = startIndex + basedCoordinates;
      basedCoordinates += 10;

      array.push(indexToPush);
    }
  }

  return array;
};


/***/ }),

/***/ "./src/helpers/check.js":
/*!******************************!*\
  !*** ./src/helpers/check.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isIndexesValid: () => (/* binding */ isIndexesValid)
/* harmony export */ });
const isIndexesValid = function (randIndexes, coordinates) {
  //   Make an array where it will return true or false values if each index is included in the current coordinates
  let isInclude = randIndexes.some((idx) => coordinates.includes(idx));

  return isInclude;
};


/***/ }),

/***/ "./src/helpers/computerMoves.js":
/*!**************************************!*\
  !*** ./src/helpers/computerMoves.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateMove: () => (/* binding */ generateMove)
/* harmony export */ });
const directions = {
  x: { left: -1, right: 1 },
  y: { up: -10, down: 10 },
};

const isMoveValid = (baseMove, move, previousMoves) => {
  let rowStart = Math.floor((baseMove - 1) / 10) * 10 + 1;
  let rowEnd = rowStart + 9;
  const isAxisXValid = move <= rowEnd || move >= rowStart;
  const isAxisYValid = move <= 100 || move >= 1;
  const isNewMove = previousMoves.includes(move);

  return isAxisXValid && isAxisYValid && isNewMove;
};

// checks if move is outside the table boundaries or
// Check if move not in previous moves
const validMoves = (baseMove, previousMoves) => {
  // Tiles arround will be the same as directions structure,
  // The difference is that the numbers will be the coordinate or the move
  let tilesAround = [{ x: {} }, { y: {} }];
  let rowStart = Math.floor((baseMove - 1) / 10) * 10 + 1;
  let rowEnd = rowStart + 9;

  // For x Axis
  for (let i = 1; i <= 2; i++) {
    // For x axis
    if (baseMove + 1 > rowEnd || previousMoves.includes(baseMove + 1)) return;
    if (baseMove - 1 < rowStart || previousMoves.includes(baseMove + 1)) return;

    tilesAround[0].x.left = baseMove - 1;
    tilesAround[0].x.right = baseMove + 1;
  }

  // For y Axis
  for (let i = 1; i <= 2; i++) {
    if (baseMove + 10 > 100 || previousMoves.includes(baseMove + 10)) return;
    if (baseMove - 10 < 1 || previousMoves.includes(baseMove - 10)) return;
    tilesAround[1].y.up = baseMove - 10;
    tilesAround[1].y.down = baseMove + 10;
  }
  return tilesAround;
};

const determineNewFocusMove = (tilesAround) => {
  // Randomly pick the tiles around then update the focus move
  // Random index

  const randAxis = tilesAround[Math.floor(Math.random() * 2)];

  const axis = Object.keys(randAxis)[0];
  // Get all the directions
  const length = Object.values(randAxis.axis).length;
  // Randomize the directions
  const randDirectionObject = Object.values(randAxis.axis)[
    [Math.floor(Math.random() * length)]
  ];
  const randDirection = Object.keys(randDirectionObject)[0];
  const randCoordinate = Object.values(randDirectionObject)[0];

  const newFocusMove = {
    baseMove,
    currentAxis: axis,
    currentDirection: randDirection,
    currentMove: randCoordinate,
  };

  return newFocusMove;
};

const generateMove = (focusMove, previousMoves) => {
  const {
    baseMove,
    currentAxis,
    currentDirection,
    prevMoveResult,
    axisDone,
    currentMove: prevMove,
  } = focusMove;

  //   validMoves checks the valid moves
  let tilesAround = validMoves(baseMove, previousMoves);
  let newFocusMove;
  //   If no previous move, filter the available tile arround baseMove
  if (!prevMove) {
    newFocusMove = determineNewFocusMove(tilesAround);
  } else {
    // Check prevMove result
    // There's already a first move after a hit
    if (prevMoveResult === "hit") {
      // If hit, meaning the ship is positioned in the current axis and currentDirection
      // Check valid moves
      // These will return all the valid tiles from the previous move
      let tilesAround = validMoves(prevMove, previousMoves);

      //   this Will check that even though prev move is a hit the next box in the same direction might be unavailable
      // so wee need to change the direction
      let movesAvailable = [
        ...tilesAround.map((element) => {
          // element will be {up: coord, down: coord}
          return Object.values(element);
        }),
      ];

      //   Geneerate the move
      //   Now check if the planned move exist in the moves Available
      //   IF not change to the oppposite direction until the ship sunk
      let currentMove =
        prevMove + directions[`${currentAxis}`][`${currentDirection}`];

      // If not a valid move change to the other direction
      if (!movesAvailable.includes(currentMove)) {
        let newDirection;
        if (currentAxis === "x") {
          newDirection = currentDirection === "left" ? "right" : "left";
        } else {
          newDirection = currentDirection === "up" ? "down" : "up";
        }

        // Generate the move
        let currentMove =
          baseMove + directions[`${currentAxis}`][`${newDirection}`];

        newFocusMove = {
          baseMove,
          currentAxis,
          currentDirection,
          currentMove,
        };
      } else {
        // If valid ang current move then contune
        newFocusMove = {
          baseMove,
          currentAxis,
          currentDirection,
          currentMove,
        };
      }

      return newFocusMove;
    } else {
      // if missed

      //   Check if there's already moves in previous axis
      if (!axisDone) {
        // No previous axis moves
        // Possibility the ship is on the other side of the direction of the same axis.
        let newDirection;
        if (currentAxis === "x") {
          newDirection = currentDirection === "left" ? "right" : "left";
        } else {
          newDirection = currentDirection === "up" ? "down" : "up";
        }

        let currentMove =
          baseMove + directions[`${currentAxis}`][`${newDirection}`];

        newFocusMove = {
          baseMove,
          currentAxis,
          currentDirection,
          currentMove,
        };
      } else {
        // If stll missed change the current axis to the opposide axis and randomly pick current direction
        let newAxis;
        let newDirection;
        newAxis = currentAxis === "x" ? "y" : "x";
        if (newAxis === "x") {
          newDirection = "right";
        } else {
          newDirection = "up";
        }
        let currentMove =
          baseMove + directions[`${newAxis}`][`${newDirection}`];

        newFocusMove = {
          baseMove,
          currentAxis,
          currentDirection,
          currentMove,
        };

        newFocusMove;
      }

      //   If move in that randomly selected direciton is valid move then contniue

      // If not swithc to the other direction
    }
  }
  return newFocusMove;
};


/***/ }),

/***/ "./src/helpers/determineShip.js":
/*!**************************************!*\
  !*** ./src/helpers/determineShip.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   determineShip: () => (/* binding */ determineShip)
/* harmony export */ });
function determineShip(index, shipCoordinates) {
  const shipIds = Object.keys(shipCoordinates);

  //   Board html index will be 0-100 vs my ship coordinates 1 - 100
  //  To reposition my coordinates I need to convert it back to 0-100
  // Meaning for Array.from({length:100}) i need to convert a coordinates of 0 to 1 in html nodeList
  //   So I need to add 1 to my index so that it will be compared to actual html indexes
  const shipId = shipIds.find((id) =>
    shipCoordinates[`${id}`].coordinates.includes(index + 1)
  );

  return shipId;
}


/***/ }),

/***/ "./src/helpers/randomizer.js":
/*!***********************************!*\
  !*** ./src/helpers/randomizer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   randomIndexX: () => (/* binding */ randomIndexX),
/* harmony export */   randomIndexY: () => (/* binding */ randomIndexY),
/* harmony export */   randomizeDirection: () => (/* binding */ randomizeDirection)
/* harmony export */ });
/* harmony import */ var _check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check */ "./src/helpers/check.js");


const randomizeDirection = function () {
  const direction = ["x", "y"][Math.floor(Math.random() * 2)];

  return direction;
};

const randomIndexX = function (shipCoordinates, shipLength) {
  const coordinates = Object.values(shipCoordinates)
    .map((values) => values.coordinates)
    .flat();

  let checkIfIndexesValid = true;
  let randIndexes;

  while (checkIfIndexesValid) {
    randIndexes = [];
    // Get random index from 1 - 100
    let rand = Math.floor(Math.random() * 100) + 1;
    let rowStart = Math.floor((rand - 1) / 10) * 10 + 1;
    let rowEnd = rowStart + 9;

    // CHeck for rows level of random number is valid
    // Check if randomize index plus ships length passed same row test
    //  Meaning if they are in the same row
    while (rand + shipLength > rowEnd) {
      rand = Math.floor(Math.random() * 100) + 1;
      rowStart = Math.floor((rand - 1) / 10) * 10 + 1;
      rowEnd = rowStart + 9;
    }

    // Onced passed all the index for this random number is inside the same row
    // Now test if all these indexes don't have any ships on it
    // Generate the array of indexes from the random index based on ship length

    for (let i = 1; i <= shipLength; i++) {
      randIndexes.push(rand);
      rand++;
    }

    //  Chek if the randIndexes do not have ships on it
    checkIfIndexesValid = (0,_check__WEBPACK_IMPORTED_MODULE_0__.isIndexesValid)(randIndexes, coordinates);
  }
  return randIndexes;
};

const randomIndexY = function (shipCoordinates, shipLength) {
  const coordinates = Object.values(shipCoordinates)
    .map((values) => values.coordinates)
    .flat();

  let checkIfIndexesValid = true;
  let randIndexes;

  while (checkIfIndexesValid) {
    randIndexes = [];
    // Get random index from 1 - 100
    let rand = Math.floor(Math.random() * 100) + 1;
    let endCol = rand + shipLength * 10;

    // CHeck if coordinates won't exceed 100 if so redraw the random coordinates
    while (endCol > 100) {
      rand = Math.floor(Math.random() * 100) + 1;
      endCol = rand + shipLength * 10;
    }

    // Now test if all these indexes don't have any ships on it
    // Generate the array of indexes from the random index based on ship length
    for (let i = 1; i <= shipLength; i++) {
      randIndexes.push(rand);
      rand += 10;
    }

    //  Chek if the randIndexes do not have ships on it
    checkIfIndexesValid = (0,_check__WEBPACK_IMPORTED_MODULE_0__.isIndexesValid)(randIndexes, coordinates);
  }
  return randIndexes;
};


/***/ }),

/***/ "./src/model/logic/computer/computerAi.js":
/*!************************************************!*\
  !*** ./src/model/logic/computer/computerAi.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ComputerAi)
/* harmony export */ });
/* harmony import */ var _helpers_computerMoves__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/computerMoves */ "./src/helpers/computerMoves.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../player */ "./src/model/logic/player.js");



class ComputerAi {
  constructor() {
    this.shipsHit = []; // will store where the ship hit and the ship hit
    this.previousMoves = []; // store all the moves either missed or hit
    this.focusMove = {};
    // focus moves: base: where the ship hit
    // current axis : x or y
    // current direction: up/down or left/right
    // previous move result
    // previousMove
  }

  sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }

  async pickMove() {
    await this.sleep(1000);
    if (Object.keys(this.focusMove).length < 1) {
      let rand = Math.floor(Math.random() * 100) + 1;
      let isMoveInvalid = this.previousMoves.some((move) => move === rand);
      while (isMoveInvalid) {
        rand = Math.floor(Math.random() * 100) + 1;
        isMoveInvalid = this.previousMoves.some((move) => move === rand);
      }
      this.previousMoves.push(rand);
      return rand;
    } else {
      this.focusMove = (0,_helpers_computerMoves__WEBPACK_IMPORTED_MODULE_0__.generateMove)(this.focusMove, this.previousMoves);
      const currentMove = this.focusMove.currentMove;
      this.previousMoves.push(currentMove);
      return this.focusMove.currentMove;
    }
  }

  shipHit(coordinate, ship) {
    if (!this.shipsHit.includes(ship)) {
      this.shipHit.push(ship);
      this.focusMove = {
        baseMove: coordinate,
        currentAxis: "",
        currrentDirection: "",
        prevMoveResult: "",
        currentMove: "",
        axisDone: "",
      };
    }
  }

  updatePreviousMoveResult(status) {
    // Update either previous move hits or misssed
    this.focusMove.prevMoveResult = status;
  }

  shipSUnk() {}
}


/***/ }),

/***/ "./src/model/logic/gameBoard.js":
/*!**************************************!*\
  !*** ./src/model/logic/gameBoard.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _helpers_determineShip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/determineShip */ "./src/helpers/determineShip.js");
/* harmony import */ var _gameBoardTile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoardTile */ "./src/model/logic/gameBoardTile.js");



class GameBoard {
  constructor(shipCoordinates, user, ships) {
    this.boardTiles = Array.from({ length: 100 }, (_, index) => {
      const shipId = (0,_helpers_determineShip__WEBPACK_IMPORTED_MODULE_0__.determineShip)(index, shipCoordinates);
      if (shipId) {
        return new _gameBoardTile__WEBPACK_IMPORTED_MODULE_1__["default"](index + 1, user, ships[shipId]);
      } else {
        return new _gameBoardTile__WEBPACK_IMPORTED_MODULE_1__["default"](index + 1, user);
      }
    });

    this.user = user;
    this.ships = ships;

    this._isPrevMoveValid = false;
  }

  getIsPrevMoveValid() {
    return this._isPrevMoveValid;
  }

  setIsPrevMoveValid(status) {
    this._isPrevMoveValid = status;
  }

  // Update a tile if it missed, or hit
  receiveAttack(index) {
    // If tile chosen is ship meaning, a ship is located in that coordinate then change the tile to hit
    if (this.boardTiles[index].status === "ship") {
      this.boardTiles[index].ship.hit();
      return "hit";
    } else {
      // else change the tile status to missed
      this.boardTiles[index].status = "missed";
      return "missed";
    }
  }

  // Position a ship based on an array
  shipPosition(array) {
    // Check if coordinates already have a ship, return or cancel the insertion if true
    console.log(array.map((index) => this.boardTiles[index]));
    if (
      array
        .map((index) => this.boardTiles[index].getStatus())
        .some((element) => element === "ship")
    ) {
      this.setIsPrevMoveValid(false);
      return;
    }

    array.forEach((index) => this.boardTiles[index].setStatus("ship"));
    this.setIsPrevMoveValid(true);
  }

  isAllShipSunk() {
    return this.ships.every((ship) => ship.isSunk() === true);
  }
}


/***/ }),

/***/ "./src/model/logic/gameBoardTile.js":
/*!******************************************!*\
  !*** ./src/model/logic/gameBoardTile.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameBoardTile)
/* harmony export */ });
class GameBoardTile {
  constructor(index, user, ship = {}) {
    this.index = index;
    this.ship = Object.keys(ship).length > 0 ? ship : {};
    this.user = user;
    this.status = Object.keys(ship).length > 0 ? "ship" : "available";
  }

  checkSunk() {
    this.ship.isSunk();
  }

  // Status will determine the UI of the gameboard
  // If avaialalable and ship then the tile can be clicked
  // If Missed and hit, cannot be clicked
}


/***/ }),

/***/ "./src/model/logic/player.js":
/*!***********************************!*\
  !*** ./src/model/logic/player.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/model/logic/gameBoard.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/model/logic/ship.js");



class Player {
  board;
  ships = [];
  constructor(shipCoordinates, user) {
    this.shipCoordinates = shipCoordinates;
    this.#generateShips();
    this._turn = false;
    this.board = new _gameBoard__WEBPACK_IMPORTED_MODULE_0__["default"](shipCoordinates, user, this.ships);
    this.user = user;
  }

  getTurn() {
    return this._turn;
  }

  setTurn(turn) {
    this._turn = turn;
  }

  // Keys are ship Ids of each ship
  #generateShips() {
    Object.keys(this.shipCoordinates).forEach((id) => {
      const shipLength = this.shipCoordinates[`${id}`].coordinates.length;
      this.ships.push(new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](shipLength, id));
    });
  }
}


/***/ }),

/***/ "./src/model/logic/ship.js":
/*!*********************************!*\
  !*** ./src/model/logic/ship.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  constructor(length, shipId, user) {
    this.length = length;
    this.hitCount = 0;
    this.shipId = shipId;
    this.user = user;
  }

  hit() {
    this.isSunk() || this.hitCount++;
  }

  isSunk() {
    return this.length === this.hitCount;
  }
}


/***/ }),

/***/ "./src/model/ui/boardTileUi.js":
/*!*************************************!*\
  !*** ./src/model/ui/boardTileUi.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const boardTileUi = function (tile, index) {
  const boardTile = document.createElement("div");
  boardTile.classList.add("board-tile");
  boardTile.setAttribute("index-id", index);

  if (Object.keys(tile.ship).length > 0) {
    if (tile.user === "player") {
      boardTile.classList.add("drop-ship");
    }

    boardTile.setAttribute("ship-id", tile.ship.shipId);

    if (tile.ship.isSunk()) {
      boardTile.classList.add("sunk");
    }
  }
  boardTile.setAttribute("owner", tile.user);

  return boardTile;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (boardTileUi);


/***/ }),

/***/ "./src/model/ui/boardUi.js":
/*!*********************************!*\
  !*** ./src/model/ui/boardUi.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _boardTileUi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boardTileUi */ "./src/model/ui/boardTileUi.js");


const boardUi = function (board, player) {
  const backScreen = document.createElement("div");
  const screen = document.createElement("div");
  const boardContainer = document.createElement("div");
  boardContainer.classList.add("board-container");
  boardContainer.setAttribute("player", player);

  // board index will be 1 to 10
  board.forEach((tile, index) => {
    boardContainer.appendChild((0,_boardTileUi__WEBPACK_IMPORTED_MODULE_0__["default"])(tile, index + 1));
  });
  screen.classList.add(`screen-half-${player}`);
  backScreen.classList.add(`back-screen-${player}`);
  screen.appendChild(boardContainer);
  backScreen.appendChild(screen);

  return backScreen;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (boardUi);


/***/ }),

/***/ "./src/model/ui/draggedElement.js":
/*!****************************************!*\
  !*** ./src/model/ui/draggedElement.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearDraggedElementIndex: () => (/* binding */ clearDraggedElementIndex),
/* harmony export */   clearIndexArray: () => (/* binding */ clearIndexArray),
/* harmony export */   getDraggedElement: () => (/* binding */ getDraggedElement),
/* harmony export */   getIndexArray: () => (/* binding */ getIndexArray),
/* harmony export */   setDraggedElement: () => (/* binding */ setDraggedElement),
/* harmony export */   setIndexArray: () => (/* binding */ setIndexArray)
/* harmony export */ });
let draggedElementIndexDirection = null;
let indexArray = null;

// index will be the index where the user clicked
// length is the length of the box
// indexAsId is the ship id, the index where it was inserted to its parent containter
function setDraggedElement(index, direction, length, indexAsId) {
  draggedElementIndexDirection = { index, direction, length, indexAsId };
}

function getDraggedElement() {
  return draggedElementIndexDirection;
}

function clearDraggedElementIndex() {
  draggedElementIndexDirection = null;
}

function setIndexArray(array) {
  indexArray = array;
}

function getIndexArray() {
  return indexArray;
}

function clearIndexArray() {
  indexArray = null;
}


/***/ }),

/***/ "./src/model/ui/initialBoardTileUi.js":
/*!********************************************!*\
  !*** ./src/model/ui/initialBoardTileUi.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const initialBoardTileUi = function (index) {
  const boardTile = document.createElement("div");
  boardTile.classList.add("board-tile");
  boardTile.setAttribute("index-id", index);

  return boardTile;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialBoardTileUi);


/***/ }),

/***/ "./src/model/ui/initialBoardUi.js":
/*!****************************************!*\
  !*** ./src/model/ui/initialBoardUi.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _initialBoardTileUi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialBoardTileUi */ "./src/model/ui/initialBoardTileUi.js");


const initialBoardUi = function () {
  const boardContainer = document.createElement("div");
  boardContainer.classList.add("board-container");

  // board index will be 1 to 10
  for (let i = 1; i <= 100; i++) {
    boardContainer.appendChild((0,_initialBoardTileUi__WEBPACK_IMPORTED_MODULE_0__["default"])(i));
  }

  return boardContainer;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialBoardUi);


/***/ }),

/***/ "./src/model/ui/shipUi.js":
/*!********************************!*\
  !*** ./src/model/ui/shipUi.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _draggedElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draggedElement */ "./src/model/ui/draggedElement.js");


const shipUi = function (length, indexAsId, direction = "x") {
  let boxIndex;
  let shipDirection = direction;
  const baseContainer = document.createElement("div");
  baseContainer.classList.add("ship");

  baseContainer.style.display = "grid";
  baseContainer.setAttribute("drag-id", indexAsId);
  baseContainer.setAttribute("draggable", "true");
  baseContainer.style.width = "fit-content";

  // Create boxes based on the length passed and passed dadta-index based on index
  for (let i = 1; i <= length; i++) {
    const base = document.createElement("div");
    base.style.height = "3.8rem";
    base.style.width = "3.8rem";

    // Set data-index attribute for each boxes
    base.setAttribute("data-index", i);

    base.addEventListener("mousedown", (e) => {
      // Get where user clicks
      const index = Number(e.target.getAttribute("data-index"));
      boxIndex = index;

      // This will be passed to other module
      (0,_draggedElement__WEBPACK_IMPORTED_MODULE_0__.setDraggedElement)(boxIndex, direction, length, indexAsId);
    });

    baseContainer.appendChild(base);
  }

  if (shipDirection === "x") {
    baseContainer.style.gridTemplateColumns = `repeat(${length}, 1fr)`;
  }

  if (shipDirection === "y") {
    baseContainer.style.gridTemplateRows = `repeat(${length}, 1fr)`;
  }

  baseContainer.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData(
      "text/plain",
      JSON.stringify({
        boxIndex,
        length,
        direction,
      })
    );
  });

  return baseContainer;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shipUi);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/view/ShipsContainer.js":
/*!************************************!*\
  !*** ./src/view/ShipsContainer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _model_ui_shipUi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/ui/shipUi */ "./src/model/ui/shipUi.js");


const shipContainer = function () {
  const container = document.createElement("div");
  container.classList.add("ship-container");

  let shipRows = {};

  // Create 1 row for each level of ship lenght
  // The purpose for this is that I can select the row class and define some rules on css
  // store it inside an object so that we can individually append it in container using Object.values
  for (let i = 4; i >= 1; i--) {
    shipRows[`${i}`] = document.createElement("div");
    shipRows[`${i}`].classList.add(`rows`);
  }

  const shipsAvailable = [4, 3, 3, 3, 2, 2, 2, 2, 1, 1];

  // For each # of ships lenth we will be organize in 1 row each length
  let currentShipToBuild = 4;

  shipsAvailable.forEach((shipLength, index) => {
    if (currentShipToBuild === shipLength) {
      shipRows[`${shipLength}`].appendChild((0,_model_ui_shipUi__WEBPACK_IMPORTED_MODULE_0__["default"])(shipLength, index));
    } else {
      currentShipToBuild--;
      shipRows[`${shipLength}`].appendChild((0,_model_ui_shipUi__WEBPACK_IMPORTED_MODULE_0__["default"])(shipLength, index));
    }
  });

  Object.values(shipRows).forEach((el) => container.appendChild(el));

  return container;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shipContainer);


/***/ }),

/***/ "./src/view/StartBoard.js":
/*!********************************!*\
  !*** ./src/view/StartBoard.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_calculateIndexHighlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/calculateIndexHighlight */ "./src/helpers/calculateIndexHighlight.js");
/* harmony import */ var _model_ui_boardUi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/ui/boardUi */ "./src/model/ui/boardUi.js");
/* harmony import */ var _ShipsContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShipsContainer */ "./src/view/ShipsContainer.js");
/* harmony import */ var _model_ui_draggedElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/ui/draggedElement */ "./src/model/ui/draggedElement.js");
/* harmony import */ var _model_ui_initialBoardUi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/ui/initialBoardUi */ "./src/model/ui/initialBoardUi.js");







class StartBoard {
  startScreenContainer = document.querySelector(".start-screen-main");
  parentContainer = document.querySelector(".start-screen");
  reset = document.querySelector(".reset");
  confirm = document.querySelector(".confirm");
  random = document.querySelector(".random");

  board = null;

  // Render Boards
  renderGameBoard = function (player) {
    // Render board and tiles based on the player board instance
    this.startScreenContainer.appendChild((0,_ShipsContainer__WEBPACK_IMPORTED_MODULE_2__["default"])());

    this.startScreenContainer.appendChild((0,_model_ui_initialBoardUi__WEBPACK_IMPORTED_MODULE_4__["default"])());
    this.board = document.querySelector(".board-container");
  };

  addHandlerConfirmCoordinates(handler) {
    this.confirm.addEventListener("click", () => {
      handler();
    });
  }

  addHandlerResetPlayerBoard(handler) {
    this.reset.addEventListener("click", () => {
      this.startScreenContainer.innerHTML = "";
      handler();
    });
  }

  addHandlerRandomPlayerBoard(handler) {
    this.random.addEventListener("click", () => {
      const shipContainer = document.querySelector(".ship-container");
      shipContainer.innerHTML = "";
      handler();
    });
  }

  renderRandomizePlayerCoordinates(playerShipCoordinates) {
    // Remove first the previous random selection
    Array.from(this.board.children).forEach((el) =>
      el.classList.remove("drop-ship")
    );

    playerShipCoordinates.forEach((coord) => {
      const element = document.querySelector(`[index-id="${coord}"]`);
      element.classList.add("drop-ship");
    });
  }

  renderInvalidConfirm() {
    alert("Please place all of the ships");
  }

  renderShipNewDirection = function (shipId, coordinates, newDirection) {
    coordinates.forEach((i) => {
      this.board.children[i - 1].classList.add("drop-ship");
      this.board.children[i - 1].setAttribute("ship-id", shipId);
      this.board.children[i - 1].setAttribute("direction", newDirection);
    });
  };

  addHandlerBoardClicked(handler) {
    this.parentContainer.addEventListener("click", (e) => {
      if (e.target.hasAttribute("ship-id")) {
        const shipId = Number(e.target.getAttribute("ship-id"));
        const direction = e.target.getAttribute("direction");
        const newDirection = direction === "x" ? "y" : "x";

        // Remove its dropped classlist to give way to the new ship position
        const ship = document.querySelectorAll(`[ship-id="${shipId}"]`);

        // Remove ship design and ship attributes
        ship.forEach((s) => {
          s.classList.remove("drop-ship");
          s.removeAttribute("ship-id");
        });

        // calculate new indexes and pass to controller
        const prevCoordinates = [...ship].map((s) =>
          s.getAttribute("index-id")
        );

        handler(shipId, prevCoordinates, newDirection);
      }
    });
  }

  // Handle Drag to board
  addHandlerCheckCoordinates(dropHandler) {
    this.parentContainer.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    this.parentContainer.addEventListener("dragenter", (e) => {
      e.preventDefault();

      const previousIndex = (0,_model_ui_draggedElement__WEBPACK_IMPORTED_MODULE_3__.getIndexArray)();
      const targetIndex = Number(e.target.getAttribute("index-id"));
      const draggedElementIndex = (0,_model_ui_draggedElement__WEBPACK_IMPORTED_MODULE_3__.getDraggedElement)();
      const index = (0,_helpers_calculateIndexHighlight__WEBPACK_IMPORTED_MODULE_0__.calculateIndex)(targetIndex, draggedElementIndex);
      (0,_model_ui_draggedElement__WEBPACK_IMPORTED_MODULE_3__.setIndexArray)(index);

      if (!index) return;

      if (!previousIndex) {
        index.forEach((i) => {
          if (i <= 100 && i >= 1)
            this.board.children[i - 1].classList.add("board-tile-hovered");
        });
        return;
      }

      previousIndex.forEach((i) => {
        if (i <= 100 && i >= 1)
          this.board.children[i - 1].classList.remove("board-tile-hovered");
      });

      index.forEach((i) => {
        if (i <= 100 && i >= 1)
          this.board.children[i - 1].classList.add("board-tile-hovered");
      });
    });

    this.parentContainer.addEventListener("drop", (e) => {
      e.preventDefault();

      // Get required data about the where the drag element dropped and the dragged element
      const coordinatesDropped = (0,_model_ui_draggedElement__WEBPACK_IMPORTED_MODULE_3__.getIndexArray)();
      const {
        length,
        indexAsId: shipId,
        direction,
      } = (0,_model_ui_draggedElement__WEBPACK_IMPORTED_MODULE_3__.getDraggedElement)() || {};

      if (!length) return;

      // IF drop outside the dropzone or map, don't read the remaining code and remmove previous hovered
      if (!e.target.classList.contains("board-tile")) {
        if (coordinatesDropped) {
          coordinatesDropped.forEach((i) => {
            if (i <= 100 && i >= 1)
              this.board.children[i - 1].classList.remove("board-tile-hovered");
          });
        }
        return;
      }

      // if length of the ship and received coordintes length not the same then don't continue
      if (length !== coordinatesDropped.length) {
        if (coordinatesDropped) {
          coordinatesDropped.forEach((i) => {
            if (i <= 100 && i >= 1)
              this.board.children[i - 1].classList.remove("board-tile-hovered");
          });
        }
        return;
      }

      // If drop in an area with an existing ship don't read the remaining code and remmove previous hovered
      const coordElToDrop = coordinatesDropped.map((i) =>
        this.board.children[i - 1].classList.contains("drop-ship")
      );

      const isAlreadyContainsShip = coordElToDrop.includes(true);

      if (isAlreadyContainsShip) {
        if (coordinatesDropped) {
          coordinatesDropped.forEach((i) => {
            if (i <= 100 && i >= 1)
              this.board.children[i - 1].classList.remove("board-tile-hovered");
          });
        }
        return;
      }

      // Handle Drop
      // Get Ship Id
      const { indexAsId } = (0,_model_ui_draggedElement__WEBPACK_IMPORTED_MODULE_3__.getDraggedElement)();
      // Get the dragged element using ship Id and make it invisible one
      const draggedElement = document.querySelector(`[drag-id="${indexAsId}"`);

      // If valid dropped
      if (
        !coordinatesDropped.includes(101) &&
        !coordinatesDropped.includes(0)
      ) {
        draggedElement.classList.add("dragged-element-dropped");

        dropHandler(indexAsId, coordinatesDropped, direction);

        // Add to html details about the ship, ship id and direction
        coordinatesDropped.forEach((i) => {
          this.board.children[i - 1].classList.remove("board-tile-hovered");
          this.board.children[i - 1].classList.add("drop-ship");
          this.board.children[i - 1].setAttribute("ship-id", shipId);
          this.board.children[i - 1].setAttribute("direction", direction);
        });

        (0,_model_ui_draggedElement__WEBPACK_IMPORTED_MODULE_3__.clearDraggedElementIndex)();
      } else {
        coordinatesDropped.forEach((i) => {
          if (i <= 100 && i >= 1)
            this.board.children[i - 1].classList.remove("board-tile-hovered");
        });

        (0,_model_ui_draggedElement__WEBPACK_IMPORTED_MODULE_3__.clearDraggedElementIndex)();
        return;
      }
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new StartBoard());


/***/ }),

/***/ "./src/view/StartGameScreen.js":
/*!*************************************!*\
  !*** ./src/view/StartGameScreen.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _model_ui_boardUi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/ui/boardUi */ "./src/model/ui/boardUi.js");
/* harmony import */ var _assets_water_drip_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/water-drip.mp3 */ "./src/assets/water-drip.mp3");
/* harmony import */ var _assets_screaming_soldier_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/screaming-soldier.mp3 */ "./src/assets/screaming-soldier.mp3");




class GameScreen {
  constructor(playerBoard) {
    this.playerBoard = playerBoard;
    this.waterDropSound = new Audio(_assets_water_drip_mp3__WEBPACK_IMPORTED_MODULE_1__);
    this.soldierScream = new Audio(_assets_screaming_soldier_mp3__WEBPACK_IMPORTED_MODULE_2__);
  }

  startScreen = document.querySelector(".start-screen");
  gameScreen = document.querySelector(".game-screen");

  renderGameScreen(player, playerNature) {
    this.startScreen.classList.add("inactive");

    this.gameScreen.classList.remove("inactive");

    // Intialize UI
    this.gameScreen.appendChild((0,_model_ui_boardUi__WEBPACK_IMPORTED_MODULE_0__["default"])(player.board.boardTiles, playerNature));
  }

  renderScreenGameInitialStatus() {
    const boardHuman = document.querySelector(".back-screen-player");
    const boardComputer = document.querySelector(".back-screen-computer");

    // boardHuman.classList.add("disabled");
  }

  waitForPlayerClick(handlerFunc, turn) {
    const boardComputer = document.querySelector(".back-screen-computer");
    return new Promise((resolve) => {
      const handler = (e) => {
        const tile = e.target.closest(".board-tile");
        if (!tile || !this.gameScreen.contains(tile)) return;
        const index = Number(tile.getAttribute("index-id"));
        const owner = tile.getAttribute("owner");

        if (owner === "computer" && turn === "computer") return true;

        if (
          tile.classList.contains("explode") ||
          tile.classList.contains("miss")
        )
          return;
        const result = handlerFunc({ index, owner });

        this.gameScreen.removeEventListener("click", handler);

        resolve(result);
      };

      // boardComputer.addEventListener("click", handler);
      this.gameScreen.addEventListener("click", handler);
    });
  }

  async handlerClickGame(handler, turn) {
    const boardHuman = document.querySelector(".back-screen-player");
    const boardComputer = document.querySelector(".back-screen-computer");
    boardHuman.classList.toggle("disabled");
    boardComputer.classList.remove("disabled");

    const result = await this.waitForPlayerClick(handler, turn);

    if (result === true) return true;

    if (turn === "player") {
      boardComputer.classList.add("disabled");
      boardHuman.classList.remove("disabled");
    }
    if (turn === "computer") {
      boardComputer.classList.remove("disabled");
      boardHuman.classList.add("disabled");
    }
  }

  renderDisabledBoard(player) {
    const board = document.querySelector(`[player="${player}"]`);
    board.classList.toggle("disabled");
  }

  addHandlerBoardClicked(clickHandler, sunkHandler, getTurn) {
    const boardHuman = document.querySelector(".back-screen-player");
    const boardComputer = document.querySelector(".back-screen-computer");

    const onBoardClick = (e) => {
      const tile = e.target.closest(".board-tile");
      const index = Number(tile.getAttribute("index-id"));
      const owner = tile.getAttribute("owner");

      if (!tile || !this.gameScreen.contains(tile)) return;

      if (tile.classList.contains("explode") || tile.classList.contains("miss"))
        return;

      clickHandler({ index, owner });
    };

    this.gameScreen.addEventListener("click", onBoardClick);
  }

  updateUi(index, owner, shipId) {
    const element = document.querySelector(
      `[index-id="${index}"][owner="${owner}"]`
    );

    if (shipId) {
      element.classList.add("explode");
    } else {
      element.classList.add("miss");
      this.waterDropSound.pause(); // stop if it’s mid-play
      this.waterDropSound.currentTime = 0; // rewind to start
      this.waterDropSound
        .play() // play from zero
        .catch((err) => {
          // you’ll often hit a browser autoplay policy here
          cons;
        });
    }
  }

  renderSunk(coordinates, owner) {
    coordinates.forEach((coord) => {
      const element = document.querySelector(
        `[index-id="${coord}"][owner="${owner}"]`
      );

      element.classList.add("sunk");
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new GameScreen());


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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_calculateComputerIndex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/calculateComputerIndex */ "./src/helpers/calculateComputerIndex.js");
/* harmony import */ var _helpers_calculateNewShipDirection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/calculateNewShipDirection */ "./src/helpers/calculateNewShipDirection.js");
/* harmony import */ var _helpers_determineShip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/determineShip */ "./src/helpers/determineShip.js");
/* harmony import */ var _model_logic_computer_computerAi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/logic/computer/computerAi */ "./src/model/logic/computer/computerAi.js");
/* harmony import */ var _model_logic_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/logic/player */ "./src/model/logic/player.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _view_StartBoard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/StartBoard */ "./src/view/StartBoard.js");
/* harmony import */ var _view_StartGameScreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/StartGameScreen */ "./src/view/StartGameScreen.js");











let playerShipCoordinates = {}; // object of ships coordinates, key as ship id, and
// values as an object of coordintaes and direction

const computerCoordinates = (0,_helpers_calculateComputerIndex__WEBPACK_IMPORTED_MODULE_0__.calculateRandomIndex)();

let player;
let computer;
let computerController = new _model_logic_computer_computerAi__WEBPACK_IMPORTED_MODULE_3__["default"]();
let gameStart = false;
let gameFinsihed = false;
let turn = "player";

const controlCoordinatesDrop = function (shipId, arrayCoordinates, direction) {
  playerShipCoordinates[`${shipId}`] = {
    coordinates: arrayCoordinates,
    direction,
    shipId,
  };
};

const controlShipChangeDireciton = function (
  shipId,
  prevCoordinates,
  newDirection
) {
  let newCoordinates = (0,_helpers_calculateNewShipDirection__WEBPACK_IMPORTED_MODULE_1__.calculateNewCoordinates)(newDirection, prevCoordinates);

  let existingShipCoordinates = Object.values(playerShipCoordinates)
    .map((el) => el.coordinates)
    .flat();

  const checkIfShipExist = newCoordinates.map((el, index) => {
    // Skip the first part because it will be always true

    if (index !== 0) {
      return existingShipCoordinates.includes(el);
    } else {
      return false;
    }
  });

  // Check if new coordinates have a ship already in it and
  // Check if new coordinates exceed the index of the game board if so revert to previous state
  // convert prevCoordintates to an array of numbers so we can do calculations on board indexes
  if (
    checkIfShipExist.includes(true) ||
    newCoordinates.some((el) => el > 100)
  ) {
    newCoordinates = prevCoordinates.map((coord) => Number(coord));
    let prevDirection = newDirection === "y" ? "x" : "y";
    _view_StartBoard__WEBPACK_IMPORTED_MODULE_6__["default"].renderShipNewDirection(shipId, newCoordinates, prevDirection);
    return;
  }

  // Contniue render new direction and update current ship coordinates
  playerShipCoordinates[`${shipId}`] = {
    coordinates: newCoordinates,
    direction: newDirection,
  };

  _view_StartBoard__WEBPACK_IMPORTED_MODULE_6__["default"].renderShipNewDirection(shipId, newCoordinates, newDirection);
};

const controlResetPlayerBoard = function () {
  _view_StartBoard__WEBPACK_IMPORTED_MODULE_6__["default"].renderGameBoard();
  playerShipCoordinates = {};
};

const gameInitialLogic = function () {};

// Confirm selection and render actual game screen
const controlConfirmSelection = function () {
  const shipCoordinates = Object.values(playerShipCoordinates);

  if (shipCoordinates.length < 10) {
    _view_StartBoard__WEBPACK_IMPORTED_MODULE_6__["default"].renderInvalidConfirm();
    return;
  }

  player = new _model_logic_player__WEBPACK_IMPORTED_MODULE_4__["default"](playerShipCoordinates, "player");
  computer = new _model_logic_player__WEBPACK_IMPORTED_MODULE_4__["default"](computerCoordinates, "computer");

  _view_StartGameScreen__WEBPACK_IMPORTED_MODULE_7__["default"].renderGameScreen(player, "player");
  _view_StartGameScreen__WEBPACK_IMPORTED_MODULE_7__["default"].renderGameScreen(computer, "computer");

  _view_StartGameScreen__WEBPACK_IMPORTED_MODULE_7__["default"].renderScreenGameInitialStatus();

  gameStart = true;

  startGame();

  gameInitialLogic();
};

const controlGameScreenClicked = function (data) {
  // owner will be the owner of the gameboard that was clicked
  // index is where in the grid the user clicked
  const { index, owner } = data;

  // pass the instance of the player class depending on the owner value
  const ownerClass = owner === "player" ? player : computer;

  let attackResult;

  // To convert to the actual index of the html node
  attackResult = ownerClass.board.receiveAttack(index - 1);

  // When player attacks to board owned by computer
  if (attackResult === "hit" && owner === "computer") {
    turn = "player";
  } else {
    turn = "computer";
  }

  // When computer attacks to board owned by player
  if (attackResult === "hit" && owner === "player") {
    turn = "computer";
  } else {
    turn = "player";
  }

  // index - 1, determineShip checks html indexes from 0-99, so I need to deduct 1 from my index
  // because my indexes is 1-100
  // determineShip will either return the shipId or undefined
  const shipId = (0,_helpers_determineShip__WEBPACK_IMPORTED_MODULE_2__.determineShip)(index - 1, ownerClass.shipCoordinates);

  // if shipId not undefined then tell gameScreen to updateUI
  _view_StartGameScreen__WEBPACK_IMPORTED_MODULE_7__["default"].updateUi(index, owner, shipId);

  // Check if any ship sunk per ship hit
  if (shipId) {
    controlSunk(shipId, index, ownerClass, owner);
  }

  return attackResult === "hit" ? true : false;
};

const controlSunk = function (shipId, index, ownerClass, owner) {
  // Owner will be either the computer or player instance of the player class
  const boardIndexesToUpdate = ownerClass.shipCoordinates[shipId].coordinates;

  if (ownerClass.ships[shipId].isSunk()) {
    _view_StartGameScreen__WEBPACK_IMPORTED_MODULE_7__["default"].renderSunk(boardIndexesToUpdate, owner);
  }
  // Wait for 100 for ui to update before running the code below
  setTimeout(() => {
    if (ownerClass.board.isAllShipSunk()) {
      alert("All ship sunk");
    }
  }, 100);
};

const AiControls = function () {
  const compMove = computerController.pickMove();
  console.log(compMove);
  turn = "player";
};

const getTurn = function () {
  return turn;
};

const randomizePlayerIndex = function () {
  playerShipCoordinates = (0,_helpers_calculateComputerIndex__WEBPACK_IMPORTED_MODULE_0__.calculateRandomIndex)();
  const values = Object.values(playerShipCoordinates);
  const coordinates = values.map((v) => v.coordinates).flat();
  _view_StartBoard__WEBPACK_IMPORTED_MODULE_6__["default"].renderRandomizePlayerCoordinates(coordinates);
};

const startGame = async function () {
  while (!gameFinsihed) {
    if (turn === "player") {
      console.log("here");
      const result = await _view_StartGameScreen__WEBPACK_IMPORTED_MODULE_7__["default"].handlerClickGame(
        controlGameScreenClicked,
        turn
      );

      if (result === true) {
        turn = "player";
      } else {
        turn = "computer";
      }
    } else {
      const result = await computerController.pickMove();
      console.log(result);
      const shipId = (0,_helpers_determineShip__WEBPACK_IMPORTED_MODULE_2__.determineShip)(result - 1, player.shipCoordinates);
      _view_StartGameScreen__WEBPACK_IMPORTED_MODULE_7__["default"].updateUi(result, "player", shipId);
      turn = "player";
    }
  }
};

//
const init = async function () {
  _view_StartBoard__WEBPACK_IMPORTED_MODULE_6__["default"].renderGameBoard();

  _view_StartBoard__WEBPACK_IMPORTED_MODULE_6__["default"].addHandlerCheckCoordinates(controlCoordinatesDrop);
  _view_StartBoard__WEBPACK_IMPORTED_MODULE_6__["default"].addHandlerBoardClicked(controlShipChangeDireciton);
  _view_StartBoard__WEBPACK_IMPORTED_MODULE_6__["default"].addHandlerResetPlayerBoard(controlResetPlayerBoard);
  _view_StartBoard__WEBPACK_IMPORTED_MODULE_6__["default"].addHandlerRandomPlayerBoard(randomizePlayerIndex);
  _view_StartBoard__WEBPACK_IMPORTED_MODULE_6__["default"].addHandlerConfirmCoordinates(controlConfirmSelection);
  // gameScreen.addHandlerBoardClicked(
  //   controlGameScreenClicked,
  //   controlSunk,
  //   getTurn
  // );
};

init();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGlJQUE2QztBQUN6Riw0Q0FBNEMseUhBQXlDO0FBQ3JGLDRDQUE0QyxxSUFBK0M7QUFDM0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksT0FBTyxXQUFXLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxh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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsWUFBWSxNQUFNLGlCQUFpQjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxZQUFZLE1BQU0sYUFBYTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsWUFBWSxNQUFNLGFBQWE7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxRQUFRLE1BQU0sYUFBYTtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hNTztBQUNQO0FBQ0E7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Q0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHFFQUFhO0FBQzlCO0FBQ0E7QUFDQSxFQUFFLDZEQUFVO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNkRBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIscUZBQW9CO0FBQzlDO0FBQ0E7QUFDQSxFQUFFLHdEQUFVO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDZEQUFVO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxxQkFBcUIscUVBQWE7QUFDbEMsTUFBTSw2REFBVTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0RBQVU7QUFDWjtBQUNBLEVBQUUsd0RBQVU7QUFDWixFQUFFLHdEQUFVO0FBQ1osRUFBRSx3REFBVTtBQUNaLEVBQUUsd0RBQVU7QUFDWixFQUFFLHdEQUFVO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaGVscGVycy9jYWxjdWxhdGVDb21wdXRlckluZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaGVscGVycy9jYWxjdWxhdGVJbmRleEhpZ2hsaWdodC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2hlbHBlcnMvY2FsY3VsYXRlTmV3U2hpcERpcmVjdGlvbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2hlbHBlcnMvY2hlY2suanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9oZWxwZXJzL2NvbXB1dGVyTW92ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9oZWxwZXJzL2RldGVybWluZVNoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9oZWxwZXJzL3JhbmRvbWl6ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbC9sb2dpYy9jb21wdXRlci9jb21wdXRlckFpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWwvbG9naWMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWwvbG9naWMvZ2FtZUJvYXJkVGlsZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVsL2xvZ2ljL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVsL2xvZ2ljL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbC91aS9ib2FyZFRpbGVVaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVsL3VpL2JvYXJkVWkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbC91aS9kcmFnZ2VkRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVsL3VpL2luaXRpYWxCb2FyZFRpbGVVaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVsL3VpL2luaXRpYWxCb2FyZFVpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWwvdWkvc2hpcFVpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3L1NoaXBzQ29udGFpbmVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlldy9TdGFydEJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlldy9TdGFydEdhbWVTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9wZXJzb25uZWwtbmJnLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2V4cGxvc2lvbi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9zcGxhc2gtd2F0ZXItYmcucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbio6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuaHRtbCB7XHJcbiAgZm9udC1zaXplOiA2Mi41JTtcclxufVxyXG5cclxuLyogSGVscGVycyAqL1xyXG5cclxuLm1haW4tY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDB2dztcclxufVxyXG5cclxuLnN0YXJ0LXNjcmVlbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBnYXA6IDhyZW07XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnN0YXJ0LXNjcmVlbi1tYWluIHtcclxuICBnYXA6IDhyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uc3RhcnQtc2NyZWVuLWJvdHRvbS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAycmVtO1xyXG59XHJcblxyXG4ucGxheWVyLXRpbGVzLXNlbGVjdG9yLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYm9hcmQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4uYm9hcmQtdGlsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG4gIGhlaWdodDogMy44cmVtO1xyXG4gIHdpZHRoOiAzLjhyZW07XHJcbiAgYm9yZGVyLXJpZ2h0OiAwLjVweCBzb2xpZCAjOTk5OTk5O1xyXG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICM5OTk5OTk7XHJcbn1cclxuXHJcbi5ib2FyZC10aWxlOm50aC1jaGlsZCgtbiArIDEwKSB7XHJcbiAgYm9yZGVyLXRvcDogMC41cHggc29saWQgIzk5OTk5OTtcclxufVxyXG5cclxuLmJvYXJkLXRpbGU6bnRoLWNoaWxkKDEwbiArIDEpIHtcclxuICBib3JkZXItbGVmdDogMC41cHggc29saWQgIzk5OTk5OTtcclxufVxyXG5cclxuLmJvYXJkLXRpbGUtaG92ZXJlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5kcmFnZ2luZyB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmRyYWdnZWQtZWxlbWVudC1kcm9wcGVkIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4ucm93cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDJyZW07XHJcbn1cclxuXHJcbi5zaGlwIHtcclxuICBib3JkZXI6IDAuNXB4IHNvbGlkICM2NjY2NjY7XHJcbn1cclxuXHJcbi5zaGlwOmhvdmVyIHtcclxuICBjdXJzb3I6IGdyYWI7XHJcbn1cclxuXHJcbi5zaGlwLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMnJlbTtcclxufVxyXG5cclxuLmRyb3Atc2hpcCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBwYWRkaW5nOiAxLjJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjY2NjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogR2FtZSBTY3JlZW4gKi9cclxuXHJcbi5nYW1lLXNjcmVlbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG5cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZXhwbG9kZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5taXNzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xyXG59XHJcblxyXG4uc3VuayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNTE0KTtcclxufVxyXG5cclxuLmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2NjY2O1xyXG59XHJcblxyXG4uaW5hY3RpdmUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5zY3JlZW4taGFsZi1wbGF5ZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDUwdnc7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHJlbTtcclxufVxyXG5cclxuLnNjcmVlbi1oYWxmLWNvbXB1dGVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDUwdnc7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcmVtO1xyXG59XHJcblxyXG4uYmFjay1zY3JlZW4tcGxheWVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiA1MHZ3O1xyXG59XHJcblxyXG4uYmFjay1zY3JlZW4tY29tcHV0ZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDUwdnc7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQSxZQUFZOztBQUVaO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsU0FBUztFQUNULGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIseURBQW1EO0VBQ25ELHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUEsZ0JBQWdCOztBQUVoQjtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTs7RUFFWix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHlEQUErQztFQUMvQyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIseURBQXFEO0VBQ3JELHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbio6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuaHRtbCB7XFxyXFxuICBmb250LXNpemU6IDYyLjUlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIZWxwZXJzICovXFxyXFxuXFxyXFxuLm1haW4tY29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1zY3JlZW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGdhcDogOHJlbTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1zY3JlZW4tbWFpbiB7XFxyXFxuICBnYXA6IDhyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtc2NyZWVuLWJvdHRvbS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllci10aWxlcy1zZWxlY3Rvci1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQtdGlsZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxyXFxuICBoZWlnaHQ6IDMuOHJlbTtcXHJcXG4gIHdpZHRoOiAzLjhyZW07XFxyXFxuICBib3JkZXItcmlnaHQ6IDAuNXB4IHNvbGlkICM5OTk5OTk7XFxyXFxuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjOTk5OTk5O1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQtdGlsZTpudGgtY2hpbGQoLW4gKyAxMCkge1xcclxcbiAgYm9yZGVyLXRvcDogMC41cHggc29saWQgIzk5OTk5OTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkLXRpbGU6bnRoLWNoaWxkKDEwbiArIDEpIHtcXHJcXG4gIGJvcmRlci1sZWZ0OiAwLjVweCBzb2xpZCAjOTk5OTk5O1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQtdGlsZS1ob3ZlcmVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJhZ2dpbmcge1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmRyYWdnZWQtZWxlbWVudC1kcm9wcGVkIHtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJvd3Mge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAge1xcclxcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjNjY2NjY2O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcDpob3ZlciB7XFxyXFxuICBjdXJzb3I6IGdyYWI7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Atc2hpcCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9hc3NldHMvcGVyc29ubmVsLW5iZy5wbmdcXFwiKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgcGFkZGluZzogMS4ycmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjY2NjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogR2FtZSBTY3JlZW4gKi9cXHJcXG5cXHJcXG4uZ2FtZS1zY3JlZW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG5cXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmV4cGxvZGUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vYXNzZXRzL2V4cGxvc2lvbi5wbmdcXFwiKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi5taXNzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2Fzc2V0cy9zcGxhc2gtd2F0ZXItYmcucG5nXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VuayB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC41MTQpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzYWJsZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjY2NjtcXHJcXG59XFxyXFxuXFxyXFxuLmluYWN0aXZlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zY3JlZW4taGFsZi1wbGF5ZXIge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA1MHZ3O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNjcmVlbi1oYWxmLWNvbXB1dGVyIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA1MHZ3O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFjay1zY3JlZW4tcGxheWVyIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogNTB2dztcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2stc2NyZWVuLWNvbXB1dGVyIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogNTB2dztcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyByYW5kb21JbmRleFgsIHJhbmRvbUluZGV4WSB9IGZyb20gXCIuL3JhbmRvbWl6ZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjYWxjdWxhdGVSYW5kb21JbmRleCA9IGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBzaGlwc0F2YWlsYWJsZSA9IFs0LCAzLCAzLCAyLCAyLCAyLCAxLCAxLCAxLCAxXTtcclxuXHJcbiAgLy8gU2hpcHMgY291bnQgd2lsbCBiZSBib3RoIHRoZSBpZCBvZiB0aGUgc2hpcCBhbmQgdGhlIGNvbnRyb2xlciBvZiB0aGUgbG9vcFxyXG4gIGxldCBzaGlwc0NvdW50ID0gMDtcclxuICBsZXQgY29tcHV0ZXJDb29yZGluYXRlcyA9IHt9O1xyXG5cclxuICB3aGlsZSAoc2hpcHNDb3VudCA8PSBzaGlwc0F2YWlsYWJsZS5sZW5ndGggLSAxKSB7XHJcbiAgICAvLyBHZXQgYSBzaGlwIGxlbmd0aFxyXG4gICAgLy8gc2hpcHNDb3VudCB3aWxsIHN0YXJ0IGF0IDAgcGVyZmVjdCBhcyBpbmRleCBmb3IgdGhlIHNoaXBzQXZhaWxhYmxlXHJcbiAgICBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcHNBdmFpbGFibGVbc2hpcHNDb3VudF07XHJcbiAgICAvLyBGb3IgZWFjaCBzaGlwQXZhaWxhYmxlIHJhbmRvbWl6ZSB4IG9yIHlcclxuXHJcbiAgICBsZXQgZGlyZWN0aW9uID0gW1wieFwiLCBcInlcIl1bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMildO1xyXG5cclxuICAgIC8vIGlmIFhcclxuICAgIGlmIChkaXJlY3Rpb24gPT09IFwieFwiKSB7XHJcbiAgICAgIC8vIFJhbmRvbWl6ZSBhIHBvc2l0aW9uIGluZGV4IGJldHdlZW4gMSAtIDEwMFxyXG4gICAgICAvLyAgIFRoaXMgZnVuY3Rpb24gd2lsbCBhbHNvIGVuc3VyZSB0aGF0IG5vIHNoaXAgaXMgY3VycmVudGx5IHBsYWNlZCBpbiB0aGUgY2hvc2VuIG51bWJlciBhbmQgdGhlIG51bWJlcnMgYWZ0ZXIgdGhlIHNoaXAgbGVuZ3RoIGlzIGFkZGVkXHJcbiAgICAgIGxldCBzaGlwQ29vcmRpbmF0ZXMgPSByYW5kb21JbmRleFgoY29tcHV0ZXJDb29yZGluYXRlcywgc2hpcExlbmd0aCk7XHJcblxyXG4gICAgICAvLyBQdXNoIGl0IGluIHRoZSBzaGlwIGNvb3JkaW5hdGVzLCBzaGlwQ291bnQvaW5kZXggYXMgSWQgYW5kIHRoZSBjb29yZGluYXRlcyBhcnJheSBpbiB0aGUgY29vcmRpbmF0ZXMgb2JqZWN0XHJcbiAgICAgIGNvbXB1dGVyQ29vcmRpbmF0ZXNbYCR7c2hpcHNDb3VudH1gXSA9IHtcclxuICAgICAgICBkaXJlY3Rpb24sXHJcbiAgICAgICAgY29vcmRpbmF0ZXM6IHNoaXBDb29yZGluYXRlcyxcclxuICAgICAgICBzaGlwSWQ6IHNoaXBzQ291bnQsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICAvLyBpbmNyZW1lbnQgdGhlIHNoaXBzIGNvdW50IHRvIGZldGNoIHRoZSBuZXh0IGluZGV4XHJcbiAgICAgIHNoaXBzQ291bnQrKztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCBzaGlwQ29vcmRpbmF0ZXMgPSByYW5kb21JbmRleFkoY29tcHV0ZXJDb29yZGluYXRlcywgc2hpcExlbmd0aCk7XHJcblxyXG4gICAgICBjb21wdXRlckNvb3JkaW5hdGVzW2Ake3NoaXBzQ291bnR9YF0gPSB7XHJcbiAgICAgICAgZGlyZWN0aW9uLFxyXG4gICAgICAgIGNvb3JkaW5hdGVzOiBzaGlwQ29vcmRpbmF0ZXMsXHJcbiAgICAgICAgc2hpcElkOiBzaGlwc0NvdW50LFxyXG4gICAgICB9O1xyXG4gICAgICAvLyBpbmNyZW1lbnQgdGhlIHNoaXBzIGNvdW50IHRvIGZldGNoIHRoZSBuZXh0IGluZGV4XHJcbiAgICAgIHNoaXBzQ291bnQrKztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBjb21wdXRlckNvb3JkaW5hdGVzO1xyXG59O1xyXG5cclxuLy8gIE1lYW5pbmcgaWYgNDYgcmFuZG9taXplIGluZGV4IHRoZW4gNDYgcGx1cyBzaGlwcyBsZW5naHQgZG8gbm90IGV4Y2VlZCA1MFxyXG4vLyBJRiBwYXNzZWRcclxuLy8gRm9yIHNoaXAgbGVuZ3RoIGluY3JlbWVudCB0aGUgcmFuZG9taXplIGluZGV4XHJcbi8vIENoZWNrIGlmIHRoZXNlIGFycmF5IG9mIGluZGV4IGlzIG5vdCB5ZXQgaW4gdGhlIHNoaXAgY29vcmRpbmF0ZXNcclxuLy8gSWYgcGFzc2VkIHB1c2ggdG8gc2hpcCBjb29yZGlhbnRlcyBpZiBub3QgYmFjayB0byBzdGVwIDRcclxuLy8gUGFzc2VkIHRoZSByYW5kb21pemVkIGluZGV4IHRvIHRoZSBjb21wdXRlciBzaGlwIGNvb3JkaW5hdGVzXHJcblxyXG4vLyBpZiB5XHJcbi8vIEdldCBhIHNoaXAgbGVuZ2h0XHJcbi8vIFJhbmRvbWl6ZSBhIHBvc2l0aW9uIGluZGV4IGJldHdlZW4gMSAtIDEwMFxyXG4vLyBDaGVjayBpZiBpbmRleCBmb3IgaSBhbmQgMTAgZXhjZWVkcyAxMDAgaWYgcGFzc2VkIHByb2NlZWQgaWYgbm90IGJhY2sgdG8gc3RlcCAzXHJcbi8vIENoZWNrIGlmIHRoZXNlIGluZGV4ZXMgaW5jbHVkZWQgYWxyZWFkeSBpbiBzaGlwIGNvb3JkaWFudGVzIGlmIG5vdCBwcm9jZWVkIGlmIGluY2x1ZGVkIGJhY2sgdG8gc3RlcCAzXHJcbi8vIFB1c2ggdG8gc2hpcCBjb29yZGluYXRlc1xyXG4iLCJleHBvcnQgY29uc3QgY2FsY3VsYXRlSW5kZXggPSBmdW5jdGlvbiAodGFyZ2V0LCBkcmFnZ2VkRGF0YSkge1xyXG4gIGlmICghZHJhZ2dlZERhdGEpIHJldHVybjtcclxuXHJcbiAgY29uc3QgeyBpbmRleDogZHJhZ2dlZEluZGV4LCBkaXJlY3Rpb24sIGxlbmd0aCB9ID0gZHJhZ2dlZERhdGE7XHJcblxyXG4gIGxldCBhcnJheSA9IFtdO1xyXG5cclxuICBpZiAoZGlyZWN0aW9uID09PSBcInhcIikge1xyXG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IHRhcmdldCAtIChkcmFnZ2VkSW5kZXggLSAxKTtcclxuICAgIC8vIEdldCB0aGUgbGV2ZWwgaWYgNDEgLSA1MCBsZXZlbCBzaG91bGQgYmUgNFxyXG4gICAgY29uc3QgbGV2ZWwgPSBNYXRoLmNlaWwodGFyZ2V0IC8gMTApIC0gMTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBsZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgY29uc3QgaW5kZXhUb1B1c2ggPSBzdGFydEluZGV4ICsgaTtcclxuICAgICAgLy8gQ2hlY2sgaWYgaW5kZXggaXMgdGhlIHNhbWUgbGV2ZWwgb2YgdGhlIHRhcmdldCBpbmRleCBzbyB0aGF0IGluZGV4IHB1c2hlZCBzaG91bGQgYmUgaW4gdGhlIHNhbWUgcm93XHJcbiAgICAgIGlmIChNYXRoLmNlaWwoaW5kZXhUb1B1c2ggLyAxMCkgLSAxID09PSBsZXZlbCkgYXJyYXkucHVzaChpbmRleFRvUHVzaCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gYXJyYXk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBjYWxjdWxhdGVOZXdDb29yZGluYXRlcyA9IGZ1bmN0aW9uIChkaXJlY3Rpb24sIGNvb3JkaW5hdGVzKSB7XHJcbiAgbGV0IGFycmF5ID0gW107XHJcblxyXG4gIGNvbnN0IGxlbmd0aCA9IGNvb3JkaW5hdGVzLmxlbmd0aDtcclxuXHJcbiAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ4XCIpIHtcclxuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBOdW1iZXIoY29vcmRpbmF0ZXNbMF0pO1xyXG5cclxuICAgIGNvbnN0IGxldmVsID0gTWF0aC5jZWlsKHN0YXJ0SW5kZXggLyAxMCkgLSAxO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICBjb25zdCBpbmRleFRvUHVzaCA9IHN0YXJ0SW5kZXggKyBpO1xyXG5cclxuICAgICAgaWYgKE1hdGguY2VpbChpbmRleFRvUHVzaCAvIDEwKSAtIDEgPT09IGxldmVsKSBhcnJheS5wdXNoKGluZGV4VG9QdXNoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChkaXJlY3Rpb24gPT09IFwieVwiKSB7XHJcbiAgICBjb25zdCBzdGFydEluZGV4ID0gTnVtYmVyKGNvb3JkaW5hdGVzWzBdKTtcclxuXHJcbiAgICBsZXQgYmFzZWRDb29yZGluYXRlcyA9IDA7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGluZGV4VG9QdXNoID0gc3RhcnRJbmRleCArIGJhc2VkQ29vcmRpbmF0ZXM7XHJcbiAgICAgIGJhc2VkQ29vcmRpbmF0ZXMgKz0gMTA7XHJcblxyXG4gICAgICBhcnJheS5wdXNoKGluZGV4VG9QdXNoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBhcnJheTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGlzSW5kZXhlc1ZhbGlkID0gZnVuY3Rpb24gKHJhbmRJbmRleGVzLCBjb29yZGluYXRlcykge1xyXG4gIC8vICAgTWFrZSBhbiBhcnJheSB3aGVyZSBpdCB3aWxsIHJldHVybiB0cnVlIG9yIGZhbHNlIHZhbHVlcyBpZiBlYWNoIGluZGV4IGlzIGluY2x1ZGVkIGluIHRoZSBjdXJyZW50IGNvb3JkaW5hdGVzXHJcbiAgbGV0IGlzSW5jbHVkZSA9IHJhbmRJbmRleGVzLnNvbWUoKGlkeCkgPT4gY29vcmRpbmF0ZXMuaW5jbHVkZXMoaWR4KSk7XHJcblxyXG4gIHJldHVybiBpc0luY2x1ZGU7XHJcbn07XHJcbiIsImNvbnN0IGRpcmVjdGlvbnMgPSB7XHJcbiAgeDogeyBsZWZ0OiAtMSwgcmlnaHQ6IDEgfSxcclxuICB5OiB7IHVwOiAtMTAsIGRvd246IDEwIH0sXHJcbn07XHJcblxyXG5jb25zdCBpc01vdmVWYWxpZCA9IChiYXNlTW92ZSwgbW92ZSwgcHJldmlvdXNNb3ZlcykgPT4ge1xyXG4gIGxldCByb3dTdGFydCA9IE1hdGguZmxvb3IoKGJhc2VNb3ZlIC0gMSkgLyAxMCkgKiAxMCArIDE7XHJcbiAgbGV0IHJvd0VuZCA9IHJvd1N0YXJ0ICsgOTtcclxuICBjb25zdCBpc0F4aXNYVmFsaWQgPSBtb3ZlIDw9IHJvd0VuZCB8fCBtb3ZlID49IHJvd1N0YXJ0O1xyXG4gIGNvbnN0IGlzQXhpc1lWYWxpZCA9IG1vdmUgPD0gMTAwIHx8IG1vdmUgPj0gMTtcclxuICBjb25zdCBpc05ld01vdmUgPSBwcmV2aW91c01vdmVzLmluY2x1ZGVzKG1vdmUpO1xyXG5cclxuICByZXR1cm4gaXNBeGlzWFZhbGlkICYmIGlzQXhpc1lWYWxpZCAmJiBpc05ld01vdmU7XHJcbn07XHJcblxyXG4vLyBjaGVja3MgaWYgbW92ZSBpcyBvdXRzaWRlIHRoZSB0YWJsZSBib3VuZGFyaWVzIG9yXHJcbi8vIENoZWNrIGlmIG1vdmUgbm90IGluIHByZXZpb3VzIG1vdmVzXHJcbmNvbnN0IHZhbGlkTW92ZXMgPSAoYmFzZU1vdmUsIHByZXZpb3VzTW92ZXMpID0+IHtcclxuICAvLyBUaWxlcyBhcnJvdW5kIHdpbGwgYmUgdGhlIHNhbWUgYXMgZGlyZWN0aW9ucyBzdHJ1Y3R1cmUsXHJcbiAgLy8gVGhlIGRpZmZlcmVuY2UgaXMgdGhhdCB0aGUgbnVtYmVycyB3aWxsIGJlIHRoZSBjb29yZGluYXRlIG9yIHRoZSBtb3ZlXHJcbiAgbGV0IHRpbGVzQXJvdW5kID0gW3sgeDoge30gfSwgeyB5OiB7fSB9XTtcclxuICBsZXQgcm93U3RhcnQgPSBNYXRoLmZsb29yKChiYXNlTW92ZSAtIDEpIC8gMTApICogMTAgKyAxO1xyXG4gIGxldCByb3dFbmQgPSByb3dTdGFydCArIDk7XHJcblxyXG4gIC8vIEZvciB4IEF4aXNcclxuICBmb3IgKGxldCBpID0gMTsgaSA8PSAyOyBpKyspIHtcclxuICAgIC8vIEZvciB4IGF4aXNcclxuICAgIGlmIChiYXNlTW92ZSArIDEgPiByb3dFbmQgfHwgcHJldmlvdXNNb3Zlcy5pbmNsdWRlcyhiYXNlTW92ZSArIDEpKSByZXR1cm47XHJcbiAgICBpZiAoYmFzZU1vdmUgLSAxIDwgcm93U3RhcnQgfHwgcHJldmlvdXNNb3Zlcy5pbmNsdWRlcyhiYXNlTW92ZSArIDEpKSByZXR1cm47XHJcblxyXG4gICAgdGlsZXNBcm91bmRbMF0ueC5sZWZ0ID0gYmFzZU1vdmUgLSAxO1xyXG4gICAgdGlsZXNBcm91bmRbMF0ueC5yaWdodCA9IGJhc2VNb3ZlICsgMTtcclxuICB9XHJcblxyXG4gIC8vIEZvciB5IEF4aXNcclxuICBmb3IgKGxldCBpID0gMTsgaSA8PSAyOyBpKyspIHtcclxuICAgIGlmIChiYXNlTW92ZSArIDEwID4gMTAwIHx8IHByZXZpb3VzTW92ZXMuaW5jbHVkZXMoYmFzZU1vdmUgKyAxMCkpIHJldHVybjtcclxuICAgIGlmIChiYXNlTW92ZSAtIDEwIDwgMSB8fCBwcmV2aW91c01vdmVzLmluY2x1ZGVzKGJhc2VNb3ZlIC0gMTApKSByZXR1cm47XHJcbiAgICB0aWxlc0Fyb3VuZFsxXS55LnVwID0gYmFzZU1vdmUgLSAxMDtcclxuICAgIHRpbGVzQXJvdW5kWzFdLnkuZG93biA9IGJhc2VNb3ZlICsgMTA7XHJcbiAgfVxyXG4gIHJldHVybiB0aWxlc0Fyb3VuZDtcclxufTtcclxuXHJcbmNvbnN0IGRldGVybWluZU5ld0ZvY3VzTW92ZSA9ICh0aWxlc0Fyb3VuZCkgPT4ge1xyXG4gIC8vIFJhbmRvbWx5IHBpY2sgdGhlIHRpbGVzIGFyb3VuZCB0aGVuIHVwZGF0ZSB0aGUgZm9jdXMgbW92ZVxyXG4gIC8vIFJhbmRvbSBpbmRleFxyXG5cclxuICBjb25zdCByYW5kQXhpcyA9IHRpbGVzQXJvdW5kW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXTtcclxuXHJcbiAgY29uc3QgYXhpcyA9IE9iamVjdC5rZXlzKHJhbmRBeGlzKVswXTtcclxuICAvLyBHZXQgYWxsIHRoZSBkaXJlY3Rpb25zXHJcbiAgY29uc3QgbGVuZ3RoID0gT2JqZWN0LnZhbHVlcyhyYW5kQXhpcy5heGlzKS5sZW5ndGg7XHJcbiAgLy8gUmFuZG9taXplIHRoZSBkaXJlY3Rpb25zXHJcbiAgY29uc3QgcmFuZERpcmVjdGlvbk9iamVjdCA9IE9iamVjdC52YWx1ZXMocmFuZEF4aXMuYXhpcylbXHJcbiAgICBbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGVuZ3RoKV1cclxuICBdO1xyXG4gIGNvbnN0IHJhbmREaXJlY3Rpb24gPSBPYmplY3Qua2V5cyhyYW5kRGlyZWN0aW9uT2JqZWN0KVswXTtcclxuICBjb25zdCByYW5kQ29vcmRpbmF0ZSA9IE9iamVjdC52YWx1ZXMocmFuZERpcmVjdGlvbk9iamVjdClbMF07XHJcblxyXG4gIGNvbnN0IG5ld0ZvY3VzTW92ZSA9IHtcclxuICAgIGJhc2VNb3ZlLFxyXG4gICAgY3VycmVudEF4aXM6IGF4aXMsXHJcbiAgICBjdXJyZW50RGlyZWN0aW9uOiByYW5kRGlyZWN0aW9uLFxyXG4gICAgY3VycmVudE1vdmU6IHJhbmRDb29yZGluYXRlLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiBuZXdGb2N1c01vdmU7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVNb3ZlID0gKGZvY3VzTW92ZSwgcHJldmlvdXNNb3ZlcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGJhc2VNb3ZlLFxyXG4gICAgY3VycmVudEF4aXMsXHJcbiAgICBjdXJyZW50RGlyZWN0aW9uLFxyXG4gICAgcHJldk1vdmVSZXN1bHQsXHJcbiAgICBheGlzRG9uZSxcclxuICAgIGN1cnJlbnRNb3ZlOiBwcmV2TW92ZSxcclxuICB9ID0gZm9jdXNNb3ZlO1xyXG5cclxuICAvLyAgIHZhbGlkTW92ZXMgY2hlY2tzIHRoZSB2YWxpZCBtb3Zlc1xyXG4gIGxldCB0aWxlc0Fyb3VuZCA9IHZhbGlkTW92ZXMoYmFzZU1vdmUsIHByZXZpb3VzTW92ZXMpO1xyXG4gIGxldCBuZXdGb2N1c01vdmU7XHJcbiAgLy8gICBJZiBubyBwcmV2aW91cyBtb3ZlLCBmaWx0ZXIgdGhlIGF2YWlsYWJsZSB0aWxlIGFycm91bmQgYmFzZU1vdmVcclxuICBpZiAoIXByZXZNb3ZlKSB7XHJcbiAgICBuZXdGb2N1c01vdmUgPSBkZXRlcm1pbmVOZXdGb2N1c01vdmUodGlsZXNBcm91bmQpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBDaGVjayBwcmV2TW92ZSByZXN1bHRcclxuICAgIC8vIFRoZXJlJ3MgYWxyZWFkeSBhIGZpcnN0IG1vdmUgYWZ0ZXIgYSBoaXRcclxuICAgIGlmIChwcmV2TW92ZVJlc3VsdCA9PT0gXCJoaXRcIikge1xyXG4gICAgICAvLyBJZiBoaXQsIG1lYW5pbmcgdGhlIHNoaXAgaXMgcG9zaXRpb25lZCBpbiB0aGUgY3VycmVudCBheGlzIGFuZCBjdXJyZW50RGlyZWN0aW9uXHJcbiAgICAgIC8vIENoZWNrIHZhbGlkIG1vdmVzXHJcbiAgICAgIC8vIFRoZXNlIHdpbGwgcmV0dXJuIGFsbCB0aGUgdmFsaWQgdGlsZXMgZnJvbSB0aGUgcHJldmlvdXMgbW92ZVxyXG4gICAgICBsZXQgdGlsZXNBcm91bmQgPSB2YWxpZE1vdmVzKHByZXZNb3ZlLCBwcmV2aW91c01vdmVzKTtcclxuXHJcbiAgICAgIC8vICAgdGhpcyBXaWxsIGNoZWNrIHRoYXQgZXZlbiB0aG91Z2ggcHJldiBtb3ZlIGlzIGEgaGl0IHRoZSBuZXh0IGJveCBpbiB0aGUgc2FtZSBkaXJlY3Rpb24gbWlnaHQgYmUgdW5hdmFpbGFibGVcclxuICAgICAgLy8gc28gd2VlIG5lZWQgdG8gY2hhbmdlIHRoZSBkaXJlY3Rpb25cclxuICAgICAgbGV0IG1vdmVzQXZhaWxhYmxlID0gW1xyXG4gICAgICAgIC4uLnRpbGVzQXJvdW5kLm1hcCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgLy8gZWxlbWVudCB3aWxsIGJlIHt1cDogY29vcmQsIGRvd246IGNvb3JkfVxyXG4gICAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoZWxlbWVudCk7XHJcbiAgICAgICAgfSksXHJcbiAgICAgIF07XHJcblxyXG4gICAgICAvLyAgIEdlbmVlcmF0ZSB0aGUgbW92ZVxyXG4gICAgICAvLyAgIE5vdyBjaGVjayBpZiB0aGUgcGxhbm5lZCBtb3ZlIGV4aXN0IGluIHRoZSBtb3ZlcyBBdmFpbGFibGVcclxuICAgICAgLy8gICBJRiBub3QgY2hhbmdlIHRvIHRoZSBvcHBwb3NpdGUgZGlyZWN0aW9uIHVudGlsIHRoZSBzaGlwIHN1bmtcclxuICAgICAgbGV0IGN1cnJlbnRNb3ZlID1cclxuICAgICAgICBwcmV2TW92ZSArIGRpcmVjdGlvbnNbYCR7Y3VycmVudEF4aXN9YF1bYCR7Y3VycmVudERpcmVjdGlvbn1gXTtcclxuXHJcbiAgICAgIC8vIElmIG5vdCBhIHZhbGlkIG1vdmUgY2hhbmdlIHRvIHRoZSBvdGhlciBkaXJlY3Rpb25cclxuICAgICAgaWYgKCFtb3Zlc0F2YWlsYWJsZS5pbmNsdWRlcyhjdXJyZW50TW92ZSkpIHtcclxuICAgICAgICBsZXQgbmV3RGlyZWN0aW9uO1xyXG4gICAgICAgIGlmIChjdXJyZW50QXhpcyA9PT0gXCJ4XCIpIHtcclxuICAgICAgICAgIG5ld0RpcmVjdGlvbiA9IGN1cnJlbnREaXJlY3Rpb24gPT09IFwibGVmdFwiID8gXCJyaWdodFwiIDogXCJsZWZ0XCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5ld0RpcmVjdGlvbiA9IGN1cnJlbnREaXJlY3Rpb24gPT09IFwidXBcIiA/IFwiZG93blwiIDogXCJ1cFwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gR2VuZXJhdGUgdGhlIG1vdmVcclxuICAgICAgICBsZXQgY3VycmVudE1vdmUgPVxyXG4gICAgICAgICAgYmFzZU1vdmUgKyBkaXJlY3Rpb25zW2Ake2N1cnJlbnRBeGlzfWBdW2Ake25ld0RpcmVjdGlvbn1gXTtcclxuXHJcbiAgICAgICAgbmV3Rm9jdXNNb3ZlID0ge1xyXG4gICAgICAgICAgYmFzZU1vdmUsXHJcbiAgICAgICAgICBjdXJyZW50QXhpcyxcclxuICAgICAgICAgIGN1cnJlbnREaXJlY3Rpb24sXHJcbiAgICAgICAgICBjdXJyZW50TW92ZSxcclxuICAgICAgICB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIElmIHZhbGlkIGFuZyBjdXJyZW50IG1vdmUgdGhlbiBjb250dW5lXHJcbiAgICAgICAgbmV3Rm9jdXNNb3ZlID0ge1xyXG4gICAgICAgICAgYmFzZU1vdmUsXHJcbiAgICAgICAgICBjdXJyZW50QXhpcyxcclxuICAgICAgICAgIGN1cnJlbnREaXJlY3Rpb24sXHJcbiAgICAgICAgICBjdXJyZW50TW92ZSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbmV3Rm9jdXNNb3ZlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gaWYgbWlzc2VkXHJcblxyXG4gICAgICAvLyAgIENoZWNrIGlmIHRoZXJlJ3MgYWxyZWFkeSBtb3ZlcyBpbiBwcmV2aW91cyBheGlzXHJcbiAgICAgIGlmICghYXhpc0RvbmUpIHtcclxuICAgICAgICAvLyBObyBwcmV2aW91cyBheGlzIG1vdmVzXHJcbiAgICAgICAgLy8gUG9zc2liaWxpdHkgdGhlIHNoaXAgaXMgb24gdGhlIG90aGVyIHNpZGUgb2YgdGhlIGRpcmVjdGlvbiBvZiB0aGUgc2FtZSBheGlzLlxyXG4gICAgICAgIGxldCBuZXdEaXJlY3Rpb247XHJcbiAgICAgICAgaWYgKGN1cnJlbnRBeGlzID09PSBcInhcIikge1xyXG4gICAgICAgICAgbmV3RGlyZWN0aW9uID0gY3VycmVudERpcmVjdGlvbiA9PT0gXCJsZWZ0XCIgPyBcInJpZ2h0XCIgOiBcImxlZnRcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbmV3RGlyZWN0aW9uID0gY3VycmVudERpcmVjdGlvbiA9PT0gXCJ1cFwiID8gXCJkb3duXCIgOiBcInVwXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgY3VycmVudE1vdmUgPVxyXG4gICAgICAgICAgYmFzZU1vdmUgKyBkaXJlY3Rpb25zW2Ake2N1cnJlbnRBeGlzfWBdW2Ake25ld0RpcmVjdGlvbn1gXTtcclxuXHJcbiAgICAgICAgbmV3Rm9jdXNNb3ZlID0ge1xyXG4gICAgICAgICAgYmFzZU1vdmUsXHJcbiAgICAgICAgICBjdXJyZW50QXhpcyxcclxuICAgICAgICAgIGN1cnJlbnREaXJlY3Rpb24sXHJcbiAgICAgICAgICBjdXJyZW50TW92ZSxcclxuICAgICAgICB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIElmIHN0bGwgbWlzc2VkIGNoYW5nZSB0aGUgY3VycmVudCBheGlzIHRvIHRoZSBvcHBvc2lkZSBheGlzIGFuZCByYW5kb21seSBwaWNrIGN1cnJlbnQgZGlyZWN0aW9uXHJcbiAgICAgICAgbGV0IG5ld0F4aXM7XHJcbiAgICAgICAgbGV0IG5ld0RpcmVjdGlvbjtcclxuICAgICAgICBuZXdBeGlzID0gY3VycmVudEF4aXMgPT09IFwieFwiID8gXCJ5XCIgOiBcInhcIjtcclxuICAgICAgICBpZiAobmV3QXhpcyA9PT0gXCJ4XCIpIHtcclxuICAgICAgICAgIG5ld0RpcmVjdGlvbiA9IFwicmlnaHRcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbmV3RGlyZWN0aW9uID0gXCJ1cFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY3VycmVudE1vdmUgPVxyXG4gICAgICAgICAgYmFzZU1vdmUgKyBkaXJlY3Rpb25zW2Ake25ld0F4aXN9YF1bYCR7bmV3RGlyZWN0aW9ufWBdO1xyXG5cclxuICAgICAgICBuZXdGb2N1c01vdmUgPSB7XHJcbiAgICAgICAgICBiYXNlTW92ZSxcclxuICAgICAgICAgIGN1cnJlbnRBeGlzLFxyXG4gICAgICAgICAgY3VycmVudERpcmVjdGlvbixcclxuICAgICAgICAgIGN1cnJlbnRNb3ZlLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIG5ld0ZvY3VzTW92ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gICBJZiBtb3ZlIGluIHRoYXQgcmFuZG9tbHkgc2VsZWN0ZWQgZGlyZWNpdG9uIGlzIHZhbGlkIG1vdmUgdGhlbiBjb250bml1ZVxyXG5cclxuICAgICAgLy8gSWYgbm90IHN3aXRoYyB0byB0aGUgb3RoZXIgZGlyZWN0aW9uXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBuZXdGb2N1c01vdmU7XHJcbn07XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBkZXRlcm1pbmVTaGlwKGluZGV4LCBzaGlwQ29vcmRpbmF0ZXMpIHtcclxuICBjb25zdCBzaGlwSWRzID0gT2JqZWN0LmtleXMoc2hpcENvb3JkaW5hdGVzKTtcclxuXHJcbiAgLy8gICBCb2FyZCBodG1sIGluZGV4IHdpbGwgYmUgMC0xMDAgdnMgbXkgc2hpcCBjb29yZGluYXRlcyAxIC0gMTAwXHJcbiAgLy8gIFRvIHJlcG9zaXRpb24gbXkgY29vcmRpbmF0ZXMgSSBuZWVkIHRvIGNvbnZlcnQgaXQgYmFjayB0byAwLTEwMFxyXG4gIC8vIE1lYW5pbmcgZm9yIEFycmF5LmZyb20oe2xlbmd0aDoxMDB9KSBpIG5lZWQgdG8gY29udmVydCBhIGNvb3JkaW5hdGVzIG9mIDAgdG8gMSBpbiBodG1sIG5vZGVMaXN0XHJcbiAgLy8gICBTbyBJIG5lZWQgdG8gYWRkIDEgdG8gbXkgaW5kZXggc28gdGhhdCBpdCB3aWxsIGJlIGNvbXBhcmVkIHRvIGFjdHVhbCBodG1sIGluZGV4ZXNcclxuICBjb25zdCBzaGlwSWQgPSBzaGlwSWRzLmZpbmQoKGlkKSA9PlxyXG4gICAgc2hpcENvb3JkaW5hdGVzW2Ake2lkfWBdLmNvb3JkaW5hdGVzLmluY2x1ZGVzKGluZGV4ICsgMSlcclxuICApO1xyXG5cclxuICByZXR1cm4gc2hpcElkO1xyXG59XHJcbiIsImltcG9ydCB7IGlzSW5kZXhlc1ZhbGlkIH0gZnJvbSBcIi4vY2hlY2tcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByYW5kb21pemVEaXJlY3Rpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgZGlyZWN0aW9uID0gW1wieFwiLCBcInlcIl1bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMildO1xyXG5cclxuICByZXR1cm4gZGlyZWN0aW9uO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJhbmRvbUluZGV4WCA9IGZ1bmN0aW9uIChzaGlwQ29vcmRpbmF0ZXMsIHNoaXBMZW5ndGgpIHtcclxuICBjb25zdCBjb29yZGluYXRlcyA9IE9iamVjdC52YWx1ZXMoc2hpcENvb3JkaW5hdGVzKVxyXG4gICAgLm1hcCgodmFsdWVzKSA9PiB2YWx1ZXMuY29vcmRpbmF0ZXMpXHJcbiAgICAuZmxhdCgpO1xyXG5cclxuICBsZXQgY2hlY2tJZkluZGV4ZXNWYWxpZCA9IHRydWU7XHJcbiAgbGV0IHJhbmRJbmRleGVzO1xyXG5cclxuICB3aGlsZSAoY2hlY2tJZkluZGV4ZXNWYWxpZCkge1xyXG4gICAgcmFuZEluZGV4ZXMgPSBbXTtcclxuICAgIC8vIEdldCByYW5kb20gaW5kZXggZnJvbSAxIC0gMTAwXHJcbiAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCkgKyAxO1xyXG4gICAgbGV0IHJvd1N0YXJ0ID0gTWF0aC5mbG9vcigocmFuZCAtIDEpIC8gMTApICogMTAgKyAxO1xyXG4gICAgbGV0IHJvd0VuZCA9IHJvd1N0YXJ0ICsgOTtcclxuXHJcbiAgICAvLyBDSGVjayBmb3Igcm93cyBsZXZlbCBvZiByYW5kb20gbnVtYmVyIGlzIHZhbGlkXHJcbiAgICAvLyBDaGVjayBpZiByYW5kb21pemUgaW5kZXggcGx1cyBzaGlwcyBsZW5ndGggcGFzc2VkIHNhbWUgcm93IHRlc3RcclxuICAgIC8vICBNZWFuaW5nIGlmIHRoZXkgYXJlIGluIHRoZSBzYW1lIHJvd1xyXG4gICAgd2hpbGUgKHJhbmQgKyBzaGlwTGVuZ3RoID4gcm93RW5kKSB7XHJcbiAgICAgIHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApICsgMTtcclxuICAgICAgcm93U3RhcnQgPSBNYXRoLmZsb29yKChyYW5kIC0gMSkgLyAxMCkgKiAxMCArIDE7XHJcbiAgICAgIHJvd0VuZCA9IHJvd1N0YXJ0ICsgOTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBPbmNlZCBwYXNzZWQgYWxsIHRoZSBpbmRleCBmb3IgdGhpcyByYW5kb20gbnVtYmVyIGlzIGluc2lkZSB0aGUgc2FtZSByb3dcclxuICAgIC8vIE5vdyB0ZXN0IGlmIGFsbCB0aGVzZSBpbmRleGVzIGRvbid0IGhhdmUgYW55IHNoaXBzIG9uIGl0XHJcbiAgICAvLyBHZW5lcmF0ZSB0aGUgYXJyYXkgb2YgaW5kZXhlcyBmcm9tIHRoZSByYW5kb20gaW5kZXggYmFzZWQgb24gc2hpcCBsZW5ndGhcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBzaGlwTGVuZ3RoOyBpKyspIHtcclxuICAgICAgcmFuZEluZGV4ZXMucHVzaChyYW5kKTtcclxuICAgICAgcmFuZCsrO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICBDaGVrIGlmIHRoZSByYW5kSW5kZXhlcyBkbyBub3QgaGF2ZSBzaGlwcyBvbiBpdFxyXG4gICAgY2hlY2tJZkluZGV4ZXNWYWxpZCA9IGlzSW5kZXhlc1ZhbGlkKHJhbmRJbmRleGVzLCBjb29yZGluYXRlcyk7XHJcbiAgfVxyXG4gIHJldHVybiByYW5kSW5kZXhlcztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByYW5kb21JbmRleFkgPSBmdW5jdGlvbiAoc2hpcENvb3JkaW5hdGVzLCBzaGlwTGVuZ3RoKSB7XHJcbiAgY29uc3QgY29vcmRpbmF0ZXMgPSBPYmplY3QudmFsdWVzKHNoaXBDb29yZGluYXRlcylcclxuICAgIC5tYXAoKHZhbHVlcykgPT4gdmFsdWVzLmNvb3JkaW5hdGVzKVxyXG4gICAgLmZsYXQoKTtcclxuXHJcbiAgbGV0IGNoZWNrSWZJbmRleGVzVmFsaWQgPSB0cnVlO1xyXG4gIGxldCByYW5kSW5kZXhlcztcclxuXHJcbiAgd2hpbGUgKGNoZWNrSWZJbmRleGVzVmFsaWQpIHtcclxuICAgIHJhbmRJbmRleGVzID0gW107XHJcbiAgICAvLyBHZXQgcmFuZG9tIGluZGV4IGZyb20gMSAtIDEwMFxyXG4gICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApICsgMTtcclxuICAgIGxldCBlbmRDb2wgPSByYW5kICsgc2hpcExlbmd0aCAqIDEwO1xyXG5cclxuICAgIC8vIENIZWNrIGlmIGNvb3JkaW5hdGVzIHdvbid0IGV4Y2VlZCAxMDAgaWYgc28gcmVkcmF3IHRoZSByYW5kb20gY29vcmRpbmF0ZXNcclxuICAgIHdoaWxlIChlbmRDb2wgPiAxMDApIHtcclxuICAgICAgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCkgKyAxO1xyXG4gICAgICBlbmRDb2wgPSByYW5kICsgc2hpcExlbmd0aCAqIDEwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE5vdyB0ZXN0IGlmIGFsbCB0aGVzZSBpbmRleGVzIGRvbid0IGhhdmUgYW55IHNoaXBzIG9uIGl0XHJcbiAgICAvLyBHZW5lcmF0ZSB0aGUgYXJyYXkgb2YgaW5kZXhlcyBmcm9tIHRoZSByYW5kb20gaW5kZXggYmFzZWQgb24gc2hpcCBsZW5ndGhcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHNoaXBMZW5ndGg7IGkrKykge1xyXG4gICAgICByYW5kSW5kZXhlcy5wdXNoKHJhbmQpO1xyXG4gICAgICByYW5kICs9IDEwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICBDaGVrIGlmIHRoZSByYW5kSW5kZXhlcyBkbyBub3QgaGF2ZSBzaGlwcyBvbiBpdFxyXG4gICAgY2hlY2tJZkluZGV4ZXNWYWxpZCA9IGlzSW5kZXhlc1ZhbGlkKHJhbmRJbmRleGVzLCBjb29yZGluYXRlcyk7XHJcbiAgfVxyXG4gIHJldHVybiByYW5kSW5kZXhlcztcclxufTtcclxuIiwiaW1wb3J0IHsgZ2VuZXJhdGVNb3ZlIH0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlcnMvY29tcHV0ZXJNb3Zlc1wiO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gXCIuLi9wbGF5ZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXB1dGVyQWkge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zaGlwc0hpdCA9IFtdOyAvLyB3aWxsIHN0b3JlIHdoZXJlIHRoZSBzaGlwIGhpdCBhbmQgdGhlIHNoaXAgaGl0XHJcbiAgICB0aGlzLnByZXZpb3VzTW92ZXMgPSBbXTsgLy8gc3RvcmUgYWxsIHRoZSBtb3ZlcyBlaXRoZXIgbWlzc2VkIG9yIGhpdFxyXG4gICAgdGhpcy5mb2N1c01vdmUgPSB7fTtcclxuICAgIC8vIGZvY3VzIG1vdmVzOiBiYXNlOiB3aGVyZSB0aGUgc2hpcCBoaXRcclxuICAgIC8vIGN1cnJlbnQgYXhpcyA6IHggb3IgeVxyXG4gICAgLy8gY3VycmVudCBkaXJlY3Rpb246IHVwL2Rvd24gb3IgbGVmdC9yaWdodFxyXG4gICAgLy8gcHJldmlvdXMgbW92ZSByZXN1bHRcclxuICAgIC8vIHByZXZpb3VzTW92ZVxyXG4gIH1cclxuXHJcbiAgc2xlZXAobXMpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocikgPT4gc2V0VGltZW91dChyLCBtcykpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgcGlja01vdmUoKSB7XHJcbiAgICBhd2FpdCB0aGlzLnNsZWVwKDEwMDApO1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZm9jdXNNb3ZlKS5sZW5ndGggPCAxKSB7XHJcbiAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSArIDE7XHJcbiAgICAgIGxldCBpc01vdmVJbnZhbGlkID0gdGhpcy5wcmV2aW91c01vdmVzLnNvbWUoKG1vdmUpID0+IG1vdmUgPT09IHJhbmQpO1xyXG4gICAgICB3aGlsZSAoaXNNb3ZlSW52YWxpZCkge1xyXG4gICAgICAgIHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApICsgMTtcclxuICAgICAgICBpc01vdmVJbnZhbGlkID0gdGhpcy5wcmV2aW91c01vdmVzLnNvbWUoKG1vdmUpID0+IG1vdmUgPT09IHJhbmQpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucHJldmlvdXNNb3Zlcy5wdXNoKHJhbmQpO1xyXG4gICAgICByZXR1cm4gcmFuZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZm9jdXNNb3ZlID0gZ2VuZXJhdGVNb3ZlKHRoaXMuZm9jdXNNb3ZlLCB0aGlzLnByZXZpb3VzTW92ZXMpO1xyXG4gICAgICBjb25zdCBjdXJyZW50TW92ZSA9IHRoaXMuZm9jdXNNb3ZlLmN1cnJlbnRNb3ZlO1xyXG4gICAgICB0aGlzLnByZXZpb3VzTW92ZXMucHVzaChjdXJyZW50TW92ZSk7XHJcbiAgICAgIHJldHVybiB0aGlzLmZvY3VzTW92ZS5jdXJyZW50TW92ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNoaXBIaXQoY29vcmRpbmF0ZSwgc2hpcCkge1xyXG4gICAgaWYgKCF0aGlzLnNoaXBzSGl0LmluY2x1ZGVzKHNoaXApKSB7XHJcbiAgICAgIHRoaXMuc2hpcEhpdC5wdXNoKHNoaXApO1xyXG4gICAgICB0aGlzLmZvY3VzTW92ZSA9IHtcclxuICAgICAgICBiYXNlTW92ZTogY29vcmRpbmF0ZSxcclxuICAgICAgICBjdXJyZW50QXhpczogXCJcIixcclxuICAgICAgICBjdXJycmVudERpcmVjdGlvbjogXCJcIixcclxuICAgICAgICBwcmV2TW92ZVJlc3VsdDogXCJcIixcclxuICAgICAgICBjdXJyZW50TW92ZTogXCJcIixcclxuICAgICAgICBheGlzRG9uZTogXCJcIixcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVByZXZpb3VzTW92ZVJlc3VsdChzdGF0dXMpIHtcclxuICAgIC8vIFVwZGF0ZSBlaXRoZXIgcHJldmlvdXMgbW92ZSBoaXRzIG9yIG1pc3NzZWRcclxuICAgIHRoaXMuZm9jdXNNb3ZlLnByZXZNb3ZlUmVzdWx0ID0gc3RhdHVzO1xyXG4gIH1cclxuXHJcbiAgc2hpcFNVbmsoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IGRldGVybWluZVNoaXAgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9kZXRlcm1pbmVTaGlwXCI7XHJcbmltcG9ydCBHYW1lQm9hcmRUaWxlIGZyb20gXCIuL2dhbWVCb2FyZFRpbGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVCb2FyZCB7XHJcbiAgY29uc3RydWN0b3Ioc2hpcENvb3JkaW5hdGVzLCB1c2VyLCBzaGlwcykge1xyXG4gICAgdGhpcy5ib2FyZFRpbGVzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogMTAwIH0sIChfLCBpbmRleCkgPT4ge1xyXG4gICAgICBjb25zdCBzaGlwSWQgPSBkZXRlcm1pbmVTaGlwKGluZGV4LCBzaGlwQ29vcmRpbmF0ZXMpO1xyXG4gICAgICBpZiAoc2hpcElkKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHYW1lQm9hcmRUaWxlKGluZGV4ICsgMSwgdXNlciwgc2hpcHNbc2hpcElkXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHYW1lQm9hcmRUaWxlKGluZGV4ICsgMSwgdXNlcik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudXNlciA9IHVzZXI7XHJcbiAgICB0aGlzLnNoaXBzID0gc2hpcHM7XHJcblxyXG4gICAgdGhpcy5faXNQcmV2TW92ZVZhbGlkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBnZXRJc1ByZXZNb3ZlVmFsaWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNQcmV2TW92ZVZhbGlkO1xyXG4gIH1cclxuXHJcbiAgc2V0SXNQcmV2TW92ZVZhbGlkKHN0YXR1cykge1xyXG4gICAgdGhpcy5faXNQcmV2TW92ZVZhbGlkID0gc3RhdHVzO1xyXG4gIH1cclxuXHJcbiAgLy8gVXBkYXRlIGEgdGlsZSBpZiBpdCBtaXNzZWQsIG9yIGhpdFxyXG4gIHJlY2VpdmVBdHRhY2soaW5kZXgpIHtcclxuICAgIC8vIElmIHRpbGUgY2hvc2VuIGlzIHNoaXAgbWVhbmluZywgYSBzaGlwIGlzIGxvY2F0ZWQgaW4gdGhhdCBjb29yZGluYXRlIHRoZW4gY2hhbmdlIHRoZSB0aWxlIHRvIGhpdFxyXG4gICAgaWYgKHRoaXMuYm9hcmRUaWxlc1tpbmRleF0uc3RhdHVzID09PSBcInNoaXBcIikge1xyXG4gICAgICB0aGlzLmJvYXJkVGlsZXNbaW5kZXhdLnNoaXAuaGl0KCk7XHJcbiAgICAgIHJldHVybiBcImhpdFwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gZWxzZSBjaGFuZ2UgdGhlIHRpbGUgc3RhdHVzIHRvIG1pc3NlZFxyXG4gICAgICB0aGlzLmJvYXJkVGlsZXNbaW5kZXhdLnN0YXR1cyA9IFwibWlzc2VkXCI7XHJcbiAgICAgIHJldHVybiBcIm1pc3NlZFwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gUG9zaXRpb24gYSBzaGlwIGJhc2VkIG9uIGFuIGFycmF5XHJcbiAgc2hpcFBvc2l0aW9uKGFycmF5KSB7XHJcbiAgICAvLyBDaGVjayBpZiBjb29yZGluYXRlcyBhbHJlYWR5IGhhdmUgYSBzaGlwLCByZXR1cm4gb3IgY2FuY2VsIHRoZSBpbnNlcnRpb24gaWYgdHJ1ZVxyXG4gICAgY29uc29sZS5sb2coYXJyYXkubWFwKChpbmRleCkgPT4gdGhpcy5ib2FyZFRpbGVzW2luZGV4XSkpO1xyXG4gICAgaWYgKFxyXG4gICAgICBhcnJheVxyXG4gICAgICAgIC5tYXAoKGluZGV4KSA9PiB0aGlzLmJvYXJkVGlsZXNbaW5kZXhdLmdldFN0YXR1cygpKVxyXG4gICAgICAgIC5zb21lKChlbGVtZW50KSA9PiBlbGVtZW50ID09PSBcInNoaXBcIilcclxuICAgICkge1xyXG4gICAgICB0aGlzLnNldElzUHJldk1vdmVWYWxpZChmYWxzZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBhcnJheS5mb3JFYWNoKChpbmRleCkgPT4gdGhpcy5ib2FyZFRpbGVzW2luZGV4XS5zZXRTdGF0dXMoXCJzaGlwXCIpKTtcclxuICAgIHRoaXMuc2V0SXNQcmV2TW92ZVZhbGlkKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgaXNBbGxTaGlwU3VuaygpIHtcclxuICAgIHJldHVybiB0aGlzLnNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpID09PSB0cnVlKTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUJvYXJkVGlsZSB7XHJcbiAgY29uc3RydWN0b3IoaW5kZXgsIHVzZXIsIHNoaXAgPSB7fSkge1xyXG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xyXG4gICAgdGhpcy5zaGlwID0gT2JqZWN0LmtleXMoc2hpcCkubGVuZ3RoID4gMCA/IHNoaXAgOiB7fTtcclxuICAgIHRoaXMudXNlciA9IHVzZXI7XHJcbiAgICB0aGlzLnN0YXR1cyA9IE9iamVjdC5rZXlzKHNoaXApLmxlbmd0aCA+IDAgPyBcInNoaXBcIiA6IFwiYXZhaWxhYmxlXCI7XHJcbiAgfVxyXG5cclxuICBjaGVja1N1bmsoKSB7XHJcbiAgICB0aGlzLnNoaXAuaXNTdW5rKCk7XHJcbiAgfVxyXG5cclxuICAvLyBTdGF0dXMgd2lsbCBkZXRlcm1pbmUgdGhlIFVJIG9mIHRoZSBnYW1lYm9hcmRcclxuICAvLyBJZiBhdmFpYWxhbGFibGUgYW5kIHNoaXAgdGhlbiB0aGUgdGlsZSBjYW4gYmUgY2xpY2tlZFxyXG4gIC8vIElmIE1pc3NlZCBhbmQgaGl0LCBjYW5ub3QgYmUgY2xpY2tlZFxyXG59XHJcbiIsImltcG9ydCBHYW1lQm9hcmQgZnJvbSBcIi4vZ2FtZUJvYXJkXCI7XHJcbmltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XHJcbiAgYm9hcmQ7XHJcbiAgc2hpcHMgPSBbXTtcclxuICBjb25zdHJ1Y3RvcihzaGlwQ29vcmRpbmF0ZXMsIHVzZXIpIHtcclxuICAgIHRoaXMuc2hpcENvb3JkaW5hdGVzID0gc2hpcENvb3JkaW5hdGVzO1xyXG4gICAgdGhpcy4jZ2VuZXJhdGVTaGlwcygpO1xyXG4gICAgdGhpcy5fdHVybiA9IGZhbHNlO1xyXG4gICAgdGhpcy5ib2FyZCA9IG5ldyBHYW1lQm9hcmQoc2hpcENvb3JkaW5hdGVzLCB1c2VyLCB0aGlzLnNoaXBzKTtcclxuICAgIHRoaXMudXNlciA9IHVzZXI7XHJcbiAgfVxyXG5cclxuICBnZXRUdXJuKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3R1cm47XHJcbiAgfVxyXG5cclxuICBzZXRUdXJuKHR1cm4pIHtcclxuICAgIHRoaXMuX3R1cm4gPSB0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gS2V5cyBhcmUgc2hpcCBJZHMgb2YgZWFjaCBzaGlwXHJcbiAgI2dlbmVyYXRlU2hpcHMoKSB7XHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLnNoaXBDb29yZGluYXRlcykuZm9yRWFjaCgoaWQpID0+IHtcclxuICAgICAgY29uc3Qgc2hpcExlbmd0aCA9IHRoaXMuc2hpcENvb3JkaW5hdGVzW2Ake2lkfWBdLmNvb3JkaW5hdGVzLmxlbmd0aDtcclxuICAgICAgdGhpcy5zaGlwcy5wdXNoKG5ldyBTaGlwKHNoaXBMZW5ndGgsIGlkKSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XHJcbiAgY29uc3RydWN0b3IobGVuZ3RoLCBzaGlwSWQsIHVzZXIpIHtcclxuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgdGhpcy5oaXRDb3VudCA9IDA7XHJcbiAgICB0aGlzLnNoaXBJZCA9IHNoaXBJZDtcclxuICAgIHRoaXMudXNlciA9IHVzZXI7XHJcbiAgfVxyXG5cclxuICBoaXQoKSB7XHJcbiAgICB0aGlzLmlzU3VuaygpIHx8IHRoaXMuaGl0Q291bnQrKztcclxuICB9XHJcblxyXG4gIGlzU3VuaygpIHtcclxuICAgIHJldHVybiB0aGlzLmxlbmd0aCA9PT0gdGhpcy5oaXRDb3VudDtcclxuICB9XHJcbn1cclxuIiwiY29uc3QgYm9hcmRUaWxlVWkgPSBmdW5jdGlvbiAodGlsZSwgaW5kZXgpIHtcclxuICBjb25zdCBib2FyZFRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGJvYXJkVGlsZS5jbGFzc0xpc3QuYWRkKFwiYm9hcmQtdGlsZVwiKTtcclxuICBib2FyZFRpbGUuc2V0QXR0cmlidXRlKFwiaW5kZXgtaWRcIiwgaW5kZXgpO1xyXG5cclxuICBpZiAoT2JqZWN0LmtleXModGlsZS5zaGlwKS5sZW5ndGggPiAwKSB7XHJcbiAgICBpZiAodGlsZS51c2VyID09PSBcInBsYXllclwiKSB7XHJcbiAgICAgIGJvYXJkVGlsZS5jbGFzc0xpc3QuYWRkKFwiZHJvcC1zaGlwXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGJvYXJkVGlsZS5zZXRBdHRyaWJ1dGUoXCJzaGlwLWlkXCIsIHRpbGUuc2hpcC5zaGlwSWQpO1xyXG5cclxuICAgIGlmICh0aWxlLnNoaXAuaXNTdW5rKCkpIHtcclxuICAgICAgYm9hcmRUaWxlLmNsYXNzTGlzdC5hZGQoXCJzdW5rXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuICBib2FyZFRpbGUuc2V0QXR0cmlidXRlKFwib3duZXJcIiwgdGlsZS51c2VyKTtcclxuXHJcbiAgcmV0dXJuIGJvYXJkVGlsZTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJvYXJkVGlsZVVpO1xyXG4iLCJpbXBvcnQgYm9hcmRUaWxlVWkgZnJvbSBcIi4vYm9hcmRUaWxlVWlcIjtcclxuXHJcbmNvbnN0IGJvYXJkVWkgPSBmdW5jdGlvbiAoYm9hcmQsIHBsYXllcikge1xyXG4gIGNvbnN0IGJhY2tTY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJib2FyZC1jb250YWluZXJcIik7XHJcbiAgYm9hcmRDb250YWluZXIuc2V0QXR0cmlidXRlKFwicGxheWVyXCIsIHBsYXllcik7XHJcblxyXG4gIC8vIGJvYXJkIGluZGV4IHdpbGwgYmUgMSB0byAxMFxyXG4gIGJvYXJkLmZvckVhY2goKHRpbGUsIGluZGV4KSA9PiB7XHJcbiAgICBib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZFRpbGVVaSh0aWxlLCBpbmRleCArIDEpKTtcclxuICB9KTtcclxuICBzY3JlZW4uY2xhc3NMaXN0LmFkZChgc2NyZWVuLWhhbGYtJHtwbGF5ZXJ9YCk7XHJcbiAgYmFja1NjcmVlbi5jbGFzc0xpc3QuYWRkKGBiYWNrLXNjcmVlbi0ke3BsYXllcn1gKTtcclxuICBzY3JlZW4uYXBwZW5kQ2hpbGQoYm9hcmRDb250YWluZXIpO1xyXG4gIGJhY2tTY3JlZW4uYXBwZW5kQ2hpbGQoc2NyZWVuKTtcclxuXHJcbiAgcmV0dXJuIGJhY2tTY3JlZW47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBib2FyZFVpO1xyXG4iLCJsZXQgZHJhZ2dlZEVsZW1lbnRJbmRleERpcmVjdGlvbiA9IG51bGw7XHJcbmxldCBpbmRleEFycmF5ID0gbnVsbDtcclxuXHJcbi8vIGluZGV4IHdpbGwgYmUgdGhlIGluZGV4IHdoZXJlIHRoZSB1c2VyIGNsaWNrZWRcclxuLy8gbGVuZ3RoIGlzIHRoZSBsZW5ndGggb2YgdGhlIGJveFxyXG4vLyBpbmRleEFzSWQgaXMgdGhlIHNoaXAgaWQsIHRoZSBpbmRleCB3aGVyZSBpdCB3YXMgaW5zZXJ0ZWQgdG8gaXRzIHBhcmVudCBjb250YWludGVyXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXREcmFnZ2VkRWxlbWVudChpbmRleCwgZGlyZWN0aW9uLCBsZW5ndGgsIGluZGV4QXNJZCkge1xyXG4gIGRyYWdnZWRFbGVtZW50SW5kZXhEaXJlY3Rpb24gPSB7IGluZGV4LCBkaXJlY3Rpb24sIGxlbmd0aCwgaW5kZXhBc0lkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREcmFnZ2VkRWxlbWVudCgpIHtcclxuICByZXR1cm4gZHJhZ2dlZEVsZW1lbnRJbmRleERpcmVjdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyRHJhZ2dlZEVsZW1lbnRJbmRleCgpIHtcclxuICBkcmFnZ2VkRWxlbWVudEluZGV4RGlyZWN0aW9uID0gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEluZGV4QXJyYXkoYXJyYXkpIHtcclxuICBpbmRleEFycmF5ID0gYXJyYXk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbmRleEFycmF5KCkge1xyXG4gIHJldHVybiBpbmRleEFycmF5O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJJbmRleEFycmF5KCkge1xyXG4gIGluZGV4QXJyYXkgPSBudWxsO1xyXG59XHJcbiIsImNvbnN0IGluaXRpYWxCb2FyZFRpbGVVaSA9IGZ1bmN0aW9uIChpbmRleCkge1xyXG4gIGNvbnN0IGJvYXJkVGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYm9hcmRUaWxlLmNsYXNzTGlzdC5hZGQoXCJib2FyZC10aWxlXCIpO1xyXG4gIGJvYXJkVGlsZS5zZXRBdHRyaWJ1dGUoXCJpbmRleC1pZFwiLCBpbmRleCk7XHJcblxyXG4gIHJldHVybiBib2FyZFRpbGU7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsQm9hcmRUaWxlVWk7XHJcbiIsImltcG9ydCBpbml0aWFsQm9hcmRUaWxlVWkgZnJvbSBcIi4vaW5pdGlhbEJvYXJkVGlsZVVpXCI7XHJcblxyXG5jb25zdCBpbml0aWFsQm9hcmRVaSA9IGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImJvYXJkLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgLy8gYm9hcmQgaW5kZXggd2lsbCBiZSAxIHRvIDEwXHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTAwOyBpKyspIHtcclxuICAgIGJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGluaXRpYWxCb2FyZFRpbGVVaShpKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gYm9hcmRDb250YWluZXI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsQm9hcmRVaTtcclxuIiwiaW1wb3J0IHsgc2V0RHJhZ2dlZEVsZW1lbnQgfSBmcm9tIFwiLi9kcmFnZ2VkRWxlbWVudFwiO1xyXG5cclxuY29uc3Qgc2hpcFVpID0gZnVuY3Rpb24gKGxlbmd0aCwgaW5kZXhBc0lkLCBkaXJlY3Rpb24gPSBcInhcIikge1xyXG4gIGxldCBib3hJbmRleDtcclxuICBsZXQgc2hpcERpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICBjb25zdCBiYXNlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBiYXNlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xyXG5cclxuICBiYXNlQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcclxuICBiYXNlQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRyYWctaWRcIiwgaW5kZXhBc0lkKTtcclxuICBiYXNlQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCBcInRydWVcIik7XHJcbiAgYmFzZUNvbnRhaW5lci5zdHlsZS53aWR0aCA9IFwiZml0LWNvbnRlbnRcIjtcclxuXHJcbiAgLy8gQ3JlYXRlIGJveGVzIGJhc2VkIG9uIHRoZSBsZW5ndGggcGFzc2VkIGFuZCBwYXNzZWQgZGFkdGEtaW5kZXggYmFzZWQgb24gaW5kZXhcclxuICBmb3IgKGxldCBpID0gMTsgaSA8PSBsZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgYmFzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBiYXNlLnN0eWxlLmhlaWdodCA9IFwiMy44cmVtXCI7XHJcbiAgICBiYXNlLnN0eWxlLndpZHRoID0gXCIzLjhyZW1cIjtcclxuXHJcbiAgICAvLyBTZXQgZGF0YS1pbmRleCBhdHRyaWJ1dGUgZm9yIGVhY2ggYm94ZXNcclxuICAgIGJhc2Uuc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCBpKTtcclxuXHJcbiAgICBiYXNlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGUpID0+IHtcclxuICAgICAgLy8gR2V0IHdoZXJlIHVzZXIgY2xpY2tzXHJcbiAgICAgIGNvbnN0IGluZGV4ID0gTnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIikpO1xyXG4gICAgICBib3hJbmRleCA9IGluZGV4O1xyXG5cclxuICAgICAgLy8gVGhpcyB3aWxsIGJlIHBhc3NlZCB0byBvdGhlciBtb2R1bGVcclxuICAgICAgc2V0RHJhZ2dlZEVsZW1lbnQoYm94SW5kZXgsIGRpcmVjdGlvbiwgbGVuZ3RoLCBpbmRleEFzSWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYmFzZUNvbnRhaW5lci5hcHBlbmRDaGlsZChiYXNlKTtcclxuICB9XHJcblxyXG4gIGlmIChzaGlwRGlyZWN0aW9uID09PSBcInhcIikge1xyXG4gICAgYmFzZUNvbnRhaW5lci5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gYHJlcGVhdCgke2xlbmd0aH0sIDFmcilgO1xyXG4gIH1cclxuXHJcbiAgaWYgKHNoaXBEaXJlY3Rpb24gPT09IFwieVwiKSB7XHJcbiAgICBiYXNlQ29udGFpbmVyLnN0eWxlLmdyaWRUZW1wbGF0ZVJvd3MgPSBgcmVwZWF0KCR7bGVuZ3RofSwgMWZyKWA7XHJcbiAgfVxyXG5cclxuICBiYXNlQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgKGUpID0+IHtcclxuICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXHJcbiAgICAgIFwidGV4dC9wbGFpblwiLFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgYm94SW5kZXgsXHJcbiAgICAgICAgbGVuZ3RoLFxyXG4gICAgICAgIGRpcmVjdGlvbixcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBiYXNlQ29udGFpbmVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hpcFVpO1xyXG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IHNoaXBVaSBmcm9tIFwiLi4vbW9kZWwvdWkvc2hpcFVpXCI7XHJcblxyXG5jb25zdCBzaGlwQ29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgbGV0IHNoaXBSb3dzID0ge307XHJcblxyXG4gIC8vIENyZWF0ZSAxIHJvdyBmb3IgZWFjaCBsZXZlbCBvZiBzaGlwIGxlbmdodFxyXG4gIC8vIFRoZSBwdXJwb3NlIGZvciB0aGlzIGlzIHRoYXQgSSBjYW4gc2VsZWN0IHRoZSByb3cgY2xhc3MgYW5kIGRlZmluZSBzb21lIHJ1bGVzIG9uIGNzc1xyXG4gIC8vIHN0b3JlIGl0IGluc2lkZSBhbiBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gaW5kaXZpZHVhbGx5IGFwcGVuZCBpdCBpbiBjb250YWluZXIgdXNpbmcgT2JqZWN0LnZhbHVlc1xyXG4gIGZvciAobGV0IGkgPSA0OyBpID49IDE7IGktLSkge1xyXG4gICAgc2hpcFJvd3NbYCR7aX1gXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzaGlwUm93c1tgJHtpfWBdLmNsYXNzTGlzdC5hZGQoYHJvd3NgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHNoaXBzQXZhaWxhYmxlID0gWzQsIDMsIDMsIDMsIDIsIDIsIDIsIDIsIDEsIDFdO1xyXG5cclxuICAvLyBGb3IgZWFjaCAjIG9mIHNoaXBzIGxlbnRoIHdlIHdpbGwgYmUgb3JnYW5pemUgaW4gMSByb3cgZWFjaCBsZW5ndGhcclxuICBsZXQgY3VycmVudFNoaXBUb0J1aWxkID0gNDtcclxuXHJcbiAgc2hpcHNBdmFpbGFibGUuZm9yRWFjaCgoc2hpcExlbmd0aCwgaW5kZXgpID0+IHtcclxuICAgIGlmIChjdXJyZW50U2hpcFRvQnVpbGQgPT09IHNoaXBMZW5ndGgpIHtcclxuICAgICAgc2hpcFJvd3NbYCR7c2hpcExlbmd0aH1gXS5hcHBlbmRDaGlsZChzaGlwVWkoc2hpcExlbmd0aCwgaW5kZXgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGN1cnJlbnRTaGlwVG9CdWlsZC0tO1xyXG4gICAgICBzaGlwUm93c1tgJHtzaGlwTGVuZ3RofWBdLmFwcGVuZENoaWxkKHNoaXBVaShzaGlwTGVuZ3RoLCBpbmRleCkpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBPYmplY3QudmFsdWVzKHNoaXBSb3dzKS5mb3JFYWNoKChlbCkgPT4gY29udGFpbmVyLmFwcGVuZENoaWxkKGVsKSk7XHJcblxyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaGlwQ29udGFpbmVyO1xyXG4iLCJpbXBvcnQgeyBjYWxjdWxhdGVJbmRleCB9IGZyb20gXCIuLi9oZWxwZXJzL2NhbGN1bGF0ZUluZGV4SGlnaGxpZ2h0XCI7XHJcbmltcG9ydCBib2FyZFVpIGZyb20gXCIuLi9tb2RlbC91aS9ib2FyZFVpXCI7XHJcbmltcG9ydCBzaGlwQ29udGFpbmVyIGZyb20gXCIuL1NoaXBzQ29udGFpbmVyXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIGNsZWFyRHJhZ2dlZEVsZW1lbnRJbmRleCxcclxuICBnZXREcmFnZ2VkRWxlbWVudCxcclxuICBnZXRJbmRleEFycmF5LFxyXG4gIHNldEluZGV4QXJyYXksXHJcbn0gZnJvbSBcIi4uL21vZGVsL3VpL2RyYWdnZWRFbGVtZW50XCI7XHJcbmltcG9ydCBpbml0aWFsQm9hcmRVaSBmcm9tIFwiLi4vbW9kZWwvdWkvaW5pdGlhbEJvYXJkVWlcIjtcclxuXHJcbmNsYXNzIFN0YXJ0Qm9hcmQge1xyXG4gIHN0YXJ0U2NyZWVuQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydC1zY3JlZW4tbWFpblwiKTtcclxuICBwYXJlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0LXNjcmVlblwiKTtcclxuICByZXNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzZXRcIik7XHJcbiAgY29uZmlybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29uZmlybVwiKTtcclxuICByYW5kb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJhbmRvbVwiKTtcclxuXHJcbiAgYm9hcmQgPSBudWxsO1xyXG5cclxuICAvLyBSZW5kZXIgQm9hcmRzXHJcbiAgcmVuZGVyR2FtZUJvYXJkID0gZnVuY3Rpb24gKHBsYXllcikge1xyXG4gICAgLy8gUmVuZGVyIGJvYXJkIGFuZCB0aWxlcyBiYXNlZCBvbiB0aGUgcGxheWVyIGJvYXJkIGluc3RhbmNlXHJcbiAgICB0aGlzLnN0YXJ0U2NyZWVuQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBDb250YWluZXIoKSk7XHJcblxyXG4gICAgdGhpcy5zdGFydFNjcmVlbkNvbnRhaW5lci5hcHBlbmRDaGlsZChpbml0aWFsQm9hcmRVaSgpKTtcclxuICAgIHRoaXMuYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLWNvbnRhaW5lclwiKTtcclxuICB9O1xyXG5cclxuICBhZGRIYW5kbGVyQ29uZmlybUNvb3JkaW5hdGVzKGhhbmRsZXIpIHtcclxuICAgIHRoaXMuY29uZmlybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBoYW5kbGVyKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFkZEhhbmRsZXJSZXNldFBsYXllckJvYXJkKGhhbmRsZXIpIHtcclxuICAgIHRoaXMucmVzZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5zdGFydFNjcmVlbkNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICBoYW5kbGVyKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFkZEhhbmRsZXJSYW5kb21QbGF5ZXJCb2FyZChoYW5kbGVyKSB7XHJcbiAgICB0aGlzLnJhbmRvbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBjb25zdCBzaGlwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwLWNvbnRhaW5lclwiKTtcclxuICAgICAgc2hpcENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICBoYW5kbGVyKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlclJhbmRvbWl6ZVBsYXllckNvb3JkaW5hdGVzKHBsYXllclNoaXBDb29yZGluYXRlcykge1xyXG4gICAgLy8gUmVtb3ZlIGZpcnN0IHRoZSBwcmV2aW91cyByYW5kb20gc2VsZWN0aW9uXHJcbiAgICBBcnJheS5mcm9tKHRoaXMuYm9hcmQuY2hpbGRyZW4pLmZvckVhY2goKGVsKSA9PlxyXG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJvcC1zaGlwXCIpXHJcbiAgICApO1xyXG5cclxuICAgIHBsYXllclNoaXBDb29yZGluYXRlcy5mb3JFYWNoKChjb29yZCkgPT4ge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2luZGV4LWlkPVwiJHtjb29yZH1cIl1gKTtcclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZHJvcC1zaGlwXCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJJbnZhbGlkQ29uZmlybSgpIHtcclxuICAgIGFsZXJ0KFwiUGxlYXNlIHBsYWNlIGFsbCBvZiB0aGUgc2hpcHNcIik7XHJcbiAgfVxyXG5cclxuICByZW5kZXJTaGlwTmV3RGlyZWN0aW9uID0gZnVuY3Rpb24gKHNoaXBJZCwgY29vcmRpbmF0ZXMsIG5ld0RpcmVjdGlvbikge1xyXG4gICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoaSkgPT4ge1xyXG4gICAgICB0aGlzLmJvYXJkLmNoaWxkcmVuW2kgLSAxXS5jbGFzc0xpc3QuYWRkKFwiZHJvcC1zaGlwXCIpO1xyXG4gICAgICB0aGlzLmJvYXJkLmNoaWxkcmVuW2kgLSAxXS5zZXRBdHRyaWJ1dGUoXCJzaGlwLWlkXCIsIHNoaXBJZCk7XHJcbiAgICAgIHRoaXMuYm9hcmQuY2hpbGRyZW5baSAtIDFdLnNldEF0dHJpYnV0ZShcImRpcmVjdGlvblwiLCBuZXdEaXJlY3Rpb24pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgYWRkSGFuZGxlckJvYXJkQ2xpY2tlZChoYW5kbGVyKSB7XHJcbiAgICB0aGlzLnBhcmVudENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgaWYgKGUudGFyZ2V0Lmhhc0F0dHJpYnV0ZShcInNoaXAtaWRcIikpIHtcclxuICAgICAgICBjb25zdCBzaGlwSWQgPSBOdW1iZXIoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwic2hpcC1pZFwiKSk7XHJcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGlyZWN0aW9uXCIpO1xyXG4gICAgICAgIGNvbnN0IG5ld0RpcmVjdGlvbiA9IGRpcmVjdGlvbiA9PT0gXCJ4XCIgPyBcInlcIiA6IFwieFwiO1xyXG5cclxuICAgICAgICAvLyBSZW1vdmUgaXRzIGRyb3BwZWQgY2xhc3NsaXN0IHRvIGdpdmUgd2F5IHRvIHRoZSBuZXcgc2hpcCBwb3NpdGlvblxyXG4gICAgICAgIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbc2hpcC1pZD1cIiR7c2hpcElkfVwiXWApO1xyXG5cclxuICAgICAgICAvLyBSZW1vdmUgc2hpcCBkZXNpZ24gYW5kIHNoaXAgYXR0cmlidXRlc1xyXG4gICAgICAgIHNoaXAuZm9yRWFjaCgocykgPT4ge1xyXG4gICAgICAgICAgcy5jbGFzc0xpc3QucmVtb3ZlKFwiZHJvcC1zaGlwXCIpO1xyXG4gICAgICAgICAgcy5yZW1vdmVBdHRyaWJ1dGUoXCJzaGlwLWlkXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBjYWxjdWxhdGUgbmV3IGluZGV4ZXMgYW5kIHBhc3MgdG8gY29udHJvbGxlclxyXG4gICAgICAgIGNvbnN0IHByZXZDb29yZGluYXRlcyA9IFsuLi5zaGlwXS5tYXAoKHMpID0+XHJcbiAgICAgICAgICBzLmdldEF0dHJpYnV0ZShcImluZGV4LWlkXCIpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaGFuZGxlcihzaGlwSWQsIHByZXZDb29yZGluYXRlcywgbmV3RGlyZWN0aW9uKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBIYW5kbGUgRHJhZyB0byBib2FyZFxyXG4gIGFkZEhhbmRsZXJDaGVja0Nvb3JkaW5hdGVzKGRyb3BIYW5kbGVyKSB7XHJcbiAgICB0aGlzLnBhcmVudENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5wYXJlbnRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbnRlclwiLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBjb25zdCBwcmV2aW91c0luZGV4ID0gZ2V0SW5kZXhBcnJheSgpO1xyXG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IE51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpbmRleC1pZFwiKSk7XHJcbiAgICAgIGNvbnN0IGRyYWdnZWRFbGVtZW50SW5kZXggPSBnZXREcmFnZ2VkRWxlbWVudCgpO1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNhbGN1bGF0ZUluZGV4KHRhcmdldEluZGV4LCBkcmFnZ2VkRWxlbWVudEluZGV4KTtcclxuICAgICAgc2V0SW5kZXhBcnJheShpbmRleCk7XHJcblxyXG4gICAgICBpZiAoIWluZGV4KSByZXR1cm47XHJcblxyXG4gICAgICBpZiAoIXByZXZpb3VzSW5kZXgpIHtcclxuICAgICAgICBpbmRleC5mb3JFYWNoKChpKSA9PiB7XHJcbiAgICAgICAgICBpZiAoaSA8PSAxMDAgJiYgaSA+PSAxKVxyXG4gICAgICAgICAgICB0aGlzLmJvYXJkLmNoaWxkcmVuW2kgLSAxXS5jbGFzc0xpc3QuYWRkKFwiYm9hcmQtdGlsZS1ob3ZlcmVkXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcHJldmlvdXNJbmRleC5mb3JFYWNoKChpKSA9PiB7XHJcbiAgICAgICAgaWYgKGkgPD0gMTAwICYmIGkgPj0gMSlcclxuICAgICAgICAgIHRoaXMuYm9hcmQuY2hpbGRyZW5baSAtIDFdLmNsYXNzTGlzdC5yZW1vdmUoXCJib2FyZC10aWxlLWhvdmVyZWRcIik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaW5kZXguZm9yRWFjaCgoaSkgPT4ge1xyXG4gICAgICAgIGlmIChpIDw9IDEwMCAmJiBpID49IDEpXHJcbiAgICAgICAgICB0aGlzLmJvYXJkLmNoaWxkcmVuW2kgLSAxXS5jbGFzc0xpc3QuYWRkKFwiYm9hcmQtdGlsZS1ob3ZlcmVkXCIpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMucGFyZW50Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIC8vIEdldCByZXF1aXJlZCBkYXRhIGFib3V0IHRoZSB3aGVyZSB0aGUgZHJhZyBlbGVtZW50IGRyb3BwZWQgYW5kIHRoZSBkcmFnZ2VkIGVsZW1lbnRcclxuICAgICAgY29uc3QgY29vcmRpbmF0ZXNEcm9wcGVkID0gZ2V0SW5kZXhBcnJheSgpO1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgbGVuZ3RoLFxyXG4gICAgICAgIGluZGV4QXNJZDogc2hpcElkLFxyXG4gICAgICAgIGRpcmVjdGlvbixcclxuICAgICAgfSA9IGdldERyYWdnZWRFbGVtZW50KCkgfHwge307XHJcblxyXG4gICAgICBpZiAoIWxlbmd0aCkgcmV0dXJuO1xyXG5cclxuICAgICAgLy8gSUYgZHJvcCBvdXRzaWRlIHRoZSBkcm9wem9uZSBvciBtYXAsIGRvbid0IHJlYWQgdGhlIHJlbWFpbmluZyBjb2RlIGFuZCByZW1tb3ZlIHByZXZpb3VzIGhvdmVyZWRcclxuICAgICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJib2FyZC10aWxlXCIpKSB7XHJcbiAgICAgICAgaWYgKGNvb3JkaW5hdGVzRHJvcHBlZCkge1xyXG4gICAgICAgICAgY29vcmRpbmF0ZXNEcm9wcGVkLmZvckVhY2goKGkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGkgPD0gMTAwICYmIGkgPj0gMSlcclxuICAgICAgICAgICAgICB0aGlzLmJvYXJkLmNoaWxkcmVuW2kgLSAxXS5jbGFzc0xpc3QucmVtb3ZlKFwiYm9hcmQtdGlsZS1ob3ZlcmVkXCIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gaWYgbGVuZ3RoIG9mIHRoZSBzaGlwIGFuZCByZWNlaXZlZCBjb29yZGludGVzIGxlbmd0aCBub3QgdGhlIHNhbWUgdGhlbiBkb24ndCBjb250aW51ZVxyXG4gICAgICBpZiAobGVuZ3RoICE9PSBjb29yZGluYXRlc0Ryb3BwZWQubGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKGNvb3JkaW5hdGVzRHJvcHBlZCkge1xyXG4gICAgICAgICAgY29vcmRpbmF0ZXNEcm9wcGVkLmZvckVhY2goKGkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGkgPD0gMTAwICYmIGkgPj0gMSlcclxuICAgICAgICAgICAgICB0aGlzLmJvYXJkLmNoaWxkcmVuW2kgLSAxXS5jbGFzc0xpc3QucmVtb3ZlKFwiYm9hcmQtdGlsZS1ob3ZlcmVkXCIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gSWYgZHJvcCBpbiBhbiBhcmVhIHdpdGggYW4gZXhpc3Rpbmcgc2hpcCBkb24ndCByZWFkIHRoZSByZW1haW5pbmcgY29kZSBhbmQgcmVtbW92ZSBwcmV2aW91cyBob3ZlcmVkXHJcbiAgICAgIGNvbnN0IGNvb3JkRWxUb0Ryb3AgPSBjb29yZGluYXRlc0Ryb3BwZWQubWFwKChpKSA9PlxyXG4gICAgICAgIHRoaXMuYm9hcmQuY2hpbGRyZW5baSAtIDFdLmNsYXNzTGlzdC5jb250YWlucyhcImRyb3Atc2hpcFwiKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgY29uc3QgaXNBbHJlYWR5Q29udGFpbnNTaGlwID0gY29vcmRFbFRvRHJvcC5pbmNsdWRlcyh0cnVlKTtcclxuXHJcbiAgICAgIGlmIChpc0FscmVhZHlDb250YWluc1NoaXApIHtcclxuICAgICAgICBpZiAoY29vcmRpbmF0ZXNEcm9wcGVkKSB7XHJcbiAgICAgICAgICBjb29yZGluYXRlc0Ryb3BwZWQuZm9yRWFjaCgoaSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaSA8PSAxMDAgJiYgaSA+PSAxKVxyXG4gICAgICAgICAgICAgIHRoaXMuYm9hcmQuY2hpbGRyZW5baSAtIDFdLmNsYXNzTGlzdC5yZW1vdmUoXCJib2FyZC10aWxlLWhvdmVyZWRcIik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBIYW5kbGUgRHJvcFxyXG4gICAgICAvLyBHZXQgU2hpcCBJZFxyXG4gICAgICBjb25zdCB7IGluZGV4QXNJZCB9ID0gZ2V0RHJhZ2dlZEVsZW1lbnQoKTtcclxuICAgICAgLy8gR2V0IHRoZSBkcmFnZ2VkIGVsZW1lbnQgdXNpbmcgc2hpcCBJZCBhbmQgbWFrZSBpdCBpbnZpc2libGUgb25lXHJcbiAgICAgIGNvbnN0IGRyYWdnZWRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RyYWctaWQ9XCIke2luZGV4QXNJZH1cImApO1xyXG5cclxuICAgICAgLy8gSWYgdmFsaWQgZHJvcHBlZFxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgIWNvb3JkaW5hdGVzRHJvcHBlZC5pbmNsdWRlcygxMDEpICYmXHJcbiAgICAgICAgIWNvb3JkaW5hdGVzRHJvcHBlZC5pbmNsdWRlcygwKVxyXG4gICAgICApIHtcclxuICAgICAgICBkcmFnZ2VkRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZHJhZ2dlZC1lbGVtZW50LWRyb3BwZWRcIik7XHJcblxyXG4gICAgICAgIGRyb3BIYW5kbGVyKGluZGV4QXNJZCwgY29vcmRpbmF0ZXNEcm9wcGVkLCBkaXJlY3Rpb24pO1xyXG5cclxuICAgICAgICAvLyBBZGQgdG8gaHRtbCBkZXRhaWxzIGFib3V0IHRoZSBzaGlwLCBzaGlwIGlkIGFuZCBkaXJlY3Rpb25cclxuICAgICAgICBjb29yZGluYXRlc0Ryb3BwZWQuZm9yRWFjaCgoaSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5ib2FyZC5jaGlsZHJlbltpIC0gMV0uY2xhc3NMaXN0LnJlbW92ZShcImJvYXJkLXRpbGUtaG92ZXJlZFwiKTtcclxuICAgICAgICAgIHRoaXMuYm9hcmQuY2hpbGRyZW5baSAtIDFdLmNsYXNzTGlzdC5hZGQoXCJkcm9wLXNoaXBcIik7XHJcbiAgICAgICAgICB0aGlzLmJvYXJkLmNoaWxkcmVuW2kgLSAxXS5zZXRBdHRyaWJ1dGUoXCJzaGlwLWlkXCIsIHNoaXBJZCk7XHJcbiAgICAgICAgICB0aGlzLmJvYXJkLmNoaWxkcmVuW2kgLSAxXS5zZXRBdHRyaWJ1dGUoXCJkaXJlY3Rpb25cIiwgZGlyZWN0aW9uKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2xlYXJEcmFnZ2VkRWxlbWVudEluZGV4KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29vcmRpbmF0ZXNEcm9wcGVkLmZvckVhY2goKGkpID0+IHtcclxuICAgICAgICAgIGlmIChpIDw9IDEwMCAmJiBpID49IDEpXHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmQuY2hpbGRyZW5baSAtIDFdLmNsYXNzTGlzdC5yZW1vdmUoXCJib2FyZC10aWxlLWhvdmVyZWRcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNsZWFyRHJhZ2dlZEVsZW1lbnRJbmRleCgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgU3RhcnRCb2FyZCgpO1xyXG4iLCJpbXBvcnQgYm9hcmRVaSBmcm9tIFwiLi4vbW9kZWwvdWkvYm9hcmRVaVwiO1xyXG5pbXBvcnQgd2F0ZXJEcm9wIGZyb20gXCIuLi9hc3NldHMvd2F0ZXItZHJpcC5tcDNcIjtcclxuaW1wb3J0IHNvbGRpZXJTY3JlYW0gZnJvbSBcIi4uL2Fzc2V0cy9zY3JlYW1pbmctc29sZGllci5tcDNcIjtcclxuXHJcbmNsYXNzIEdhbWVTY3JlZW4ge1xyXG4gIGNvbnN0cnVjdG9yKHBsYXllckJvYXJkKSB7XHJcbiAgICB0aGlzLnBsYXllckJvYXJkID0gcGxheWVyQm9hcmQ7XHJcbiAgICB0aGlzLndhdGVyRHJvcFNvdW5kID0gbmV3IEF1ZGlvKHdhdGVyRHJvcCk7XHJcbiAgICB0aGlzLnNvbGRpZXJTY3JlYW0gPSBuZXcgQXVkaW8oc29sZGllclNjcmVhbSk7XHJcbiAgfVxyXG5cclxuICBzdGFydFNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnQtc2NyZWVuXCIpO1xyXG4gIGdhbWVTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtc2NyZWVuXCIpO1xyXG5cclxuICByZW5kZXJHYW1lU2NyZWVuKHBsYXllciwgcGxheWVyTmF0dXJlKSB7XHJcbiAgICB0aGlzLnN0YXJ0U2NyZWVuLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcclxuXHJcbiAgICB0aGlzLmdhbWVTY3JlZW4uY2xhc3NMaXN0LnJlbW92ZShcImluYWN0aXZlXCIpO1xyXG5cclxuICAgIC8vIEludGlhbGl6ZSBVSVxyXG4gICAgdGhpcy5nYW1lU2NyZWVuLmFwcGVuZENoaWxkKGJvYXJkVWkocGxheWVyLmJvYXJkLmJvYXJkVGlsZXMsIHBsYXllck5hdHVyZSkpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyU2NyZWVuR2FtZUluaXRpYWxTdGF0dXMoKSB7XHJcbiAgICBjb25zdCBib2FyZEh1bWFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWNrLXNjcmVlbi1wbGF5ZXJcIik7XHJcbiAgICBjb25zdCBib2FyZENvbXB1dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWNrLXNjcmVlbi1jb21wdXRlclwiKTtcclxuXHJcbiAgICAvLyBib2FyZEh1bWFuLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcclxuICB9XHJcblxyXG4gIHdhaXRGb3JQbGF5ZXJDbGljayhoYW5kbGVyRnVuYywgdHVybikge1xyXG4gICAgY29uc3QgYm9hcmRDb21wdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFjay1zY3JlZW4tY29tcHV0ZXJcIik7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgY29uc3QgaGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGlsZSA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIuYm9hcmQtdGlsZVwiKTtcclxuICAgICAgICBpZiAoIXRpbGUgfHwgIXRoaXMuZ2FtZVNjcmVlbi5jb250YWlucyh0aWxlKSkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gTnVtYmVyKHRpbGUuZ2V0QXR0cmlidXRlKFwiaW5kZXgtaWRcIikpO1xyXG4gICAgICAgIGNvbnN0IG93bmVyID0gdGlsZS5nZXRBdHRyaWJ1dGUoXCJvd25lclwiKTtcclxuXHJcbiAgICAgICAgaWYgKG93bmVyID09PSBcImNvbXB1dGVyXCIgJiYgdHVybiA9PT0gXCJjb21wdXRlclwiKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgdGlsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJleHBsb2RlXCIpIHx8XHJcbiAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5jb250YWlucyhcIm1pc3NcIilcclxuICAgICAgICApXHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gaGFuZGxlckZ1bmMoeyBpbmRleCwgb3duZXIgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZVNjcmVlbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlcik7XHJcblxyXG4gICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8vIGJvYXJkQ29tcHV0ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZXIpO1xyXG4gICAgICB0aGlzLmdhbWVTY3JlZW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZXIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBoYW5kbGVyQ2xpY2tHYW1lKGhhbmRsZXIsIHR1cm4pIHtcclxuICAgIGNvbnN0IGJvYXJkSHVtYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhY2stc2NyZWVuLXBsYXllclwiKTtcclxuICAgIGNvbnN0IGJvYXJkQ29tcHV0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhY2stc2NyZWVuLWNvbXB1dGVyXCIpO1xyXG4gICAgYm9hcmRIdW1hbi5jbGFzc0xpc3QudG9nZ2xlKFwiZGlzYWJsZWRcIik7XHJcbiAgICBib2FyZENvbXB1dGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlZFwiKTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLndhaXRGb3JQbGF5ZXJDbGljayhoYW5kbGVyLCB0dXJuKTtcclxuXHJcbiAgICBpZiAocmVzdWx0ID09PSB0cnVlKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICBpZiAodHVybiA9PT0gXCJwbGF5ZXJcIikge1xyXG4gICAgICBib2FyZENvbXB1dGVyLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgYm9hcmRIdW1hbi5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRcIik7XHJcbiAgICB9XHJcbiAgICBpZiAodHVybiA9PT0gXCJjb21wdXRlclwiKSB7XHJcbiAgICAgIGJvYXJkQ29tcHV0ZXIuY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICBib2FyZEh1bWFuLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlckRpc2FibGVkQm9hcmQocGxheWVyKSB7XHJcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtwbGF5ZXI9XCIke3BsYXllcn1cIl1gKTtcclxuICAgIGJvYXJkLmNsYXNzTGlzdC50b2dnbGUoXCJkaXNhYmxlZFwiKTtcclxuICB9XHJcblxyXG4gIGFkZEhhbmRsZXJCb2FyZENsaWNrZWQoY2xpY2tIYW5kbGVyLCBzdW5rSGFuZGxlciwgZ2V0VHVybikge1xyXG4gICAgY29uc3QgYm9hcmRIdW1hbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFjay1zY3JlZW4tcGxheWVyXCIpO1xyXG4gICAgY29uc3QgYm9hcmRDb21wdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFjay1zY3JlZW4tY29tcHV0ZXJcIik7XHJcblxyXG4gICAgY29uc3Qgb25Cb2FyZENsaWNrID0gKGUpID0+IHtcclxuICAgICAgY29uc3QgdGlsZSA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIuYm9hcmQtdGlsZVwiKTtcclxuICAgICAgY29uc3QgaW5kZXggPSBOdW1iZXIodGlsZS5nZXRBdHRyaWJ1dGUoXCJpbmRleC1pZFwiKSk7XHJcbiAgICAgIGNvbnN0IG93bmVyID0gdGlsZS5nZXRBdHRyaWJ1dGUoXCJvd25lclwiKTtcclxuXHJcbiAgICAgIGlmICghdGlsZSB8fCAhdGhpcy5nYW1lU2NyZWVuLmNvbnRhaW5zKHRpbGUpKSByZXR1cm47XHJcblxyXG4gICAgICBpZiAodGlsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJleHBsb2RlXCIpIHx8IHRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWlzc1wiKSlcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICBjbGlja0hhbmRsZXIoeyBpbmRleCwgb3duZXIgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZ2FtZVNjcmVlbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25Cb2FyZENsaWNrKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVVpKGluZGV4LCBvd25lciwgc2hpcElkKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgYFtpbmRleC1pZD1cIiR7aW5kZXh9XCJdW293bmVyPVwiJHtvd25lcn1cIl1gXHJcbiAgICApO1xyXG5cclxuICAgIGlmIChzaGlwSWQpIHtcclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZXhwbG9kZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XHJcbiAgICAgIHRoaXMud2F0ZXJEcm9wU291bmQucGF1c2UoKTsgLy8gc3RvcCBpZiBpdOKAmXMgbWlkLXBsYXlcclxuICAgICAgdGhpcy53YXRlckRyb3BTb3VuZC5jdXJyZW50VGltZSA9IDA7IC8vIHJld2luZCB0byBzdGFydFxyXG4gICAgICB0aGlzLndhdGVyRHJvcFNvdW5kXHJcbiAgICAgICAgLnBsYXkoKSAvLyBwbGF5IGZyb20gemVyb1xyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAvLyB5b3XigJlsbCBvZnRlbiBoaXQgYSBicm93c2VyIGF1dG9wbGF5IHBvbGljeSBoZXJlXHJcbiAgICAgICAgICBjb25zO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyU3Vuayhjb29yZGluYXRlcywgb3duZXIpIHtcclxuICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkKSA9PiB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIGBbaW5kZXgtaWQ9XCIke2Nvb3JkfVwiXVtvd25lcj1cIiR7b3duZXJ9XCJdYFxyXG4gICAgICApO1xyXG5cclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic3Vua1wiKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEdhbWVTY3JlZW4oKTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvXmJsb2I6LywgXCJcIikucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IGNhbGN1bGF0ZVJhbmRvbUluZGV4IH0gZnJvbSBcIi4vaGVscGVycy9jYWxjdWxhdGVDb21wdXRlckluZGV4XCI7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZU5ld0Nvb3JkaW5hdGVzIH0gZnJvbSBcIi4vaGVscGVycy9jYWxjdWxhdGVOZXdTaGlwRGlyZWN0aW9uXCI7XHJcbmltcG9ydCB7IGRldGVybWluZVNoaXAgfSBmcm9tIFwiLi9oZWxwZXJzL2RldGVybWluZVNoaXBcIjtcclxuaW1wb3J0IENvbXB1dGVyQWkgZnJvbSBcIi4vbW9kZWwvbG9naWMvY29tcHV0ZXIvY29tcHV0ZXJBaVwiO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL21vZGVsL2xvZ2ljL3BsYXllclwiO1xyXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgc3RhcnRCb2FyZCBmcm9tIFwiLi92aWV3L1N0YXJ0Qm9hcmRcIjtcclxuaW1wb3J0IGdhbWVTY3JlZW4gZnJvbSBcIi4vdmlldy9TdGFydEdhbWVTY3JlZW5cIjtcclxuXHJcbmxldCBwbGF5ZXJTaGlwQ29vcmRpbmF0ZXMgPSB7fTsgLy8gb2JqZWN0IG9mIHNoaXBzIGNvb3JkaW5hdGVzLCBrZXkgYXMgc2hpcCBpZCwgYW5kXHJcbi8vIHZhbHVlcyBhcyBhbiBvYmplY3Qgb2YgY29vcmRpbnRhZXMgYW5kIGRpcmVjdGlvblxyXG5cclxuY29uc3QgY29tcHV0ZXJDb29yZGluYXRlcyA9IGNhbGN1bGF0ZVJhbmRvbUluZGV4KCk7XHJcblxyXG5sZXQgcGxheWVyO1xyXG5sZXQgY29tcHV0ZXI7XHJcbmxldCBjb21wdXRlckNvbnRyb2xsZXIgPSBuZXcgQ29tcHV0ZXJBaSgpO1xyXG5sZXQgZ2FtZVN0YXJ0ID0gZmFsc2U7XHJcbmxldCBnYW1lRmluc2loZWQgPSBmYWxzZTtcclxubGV0IHR1cm4gPSBcInBsYXllclwiO1xyXG5cclxuY29uc3QgY29udHJvbENvb3JkaW5hdGVzRHJvcCA9IGZ1bmN0aW9uIChzaGlwSWQsIGFycmF5Q29vcmRpbmF0ZXMsIGRpcmVjdGlvbikge1xyXG4gIHBsYXllclNoaXBDb29yZGluYXRlc1tgJHtzaGlwSWR9YF0gPSB7XHJcbiAgICBjb29yZGluYXRlczogYXJyYXlDb29yZGluYXRlcyxcclxuICAgIGRpcmVjdGlvbixcclxuICAgIHNoaXBJZCxcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgY29udHJvbFNoaXBDaGFuZ2VEaXJlY2l0b24gPSBmdW5jdGlvbiAoXHJcbiAgc2hpcElkLFxyXG4gIHByZXZDb29yZGluYXRlcyxcclxuICBuZXdEaXJlY3Rpb25cclxuKSB7XHJcbiAgbGV0IG5ld0Nvb3JkaW5hdGVzID0gY2FsY3VsYXRlTmV3Q29vcmRpbmF0ZXMobmV3RGlyZWN0aW9uLCBwcmV2Q29vcmRpbmF0ZXMpO1xyXG5cclxuICBsZXQgZXhpc3RpbmdTaGlwQ29vcmRpbmF0ZXMgPSBPYmplY3QudmFsdWVzKHBsYXllclNoaXBDb29yZGluYXRlcylcclxuICAgIC5tYXAoKGVsKSA9PiBlbC5jb29yZGluYXRlcylcclxuICAgIC5mbGF0KCk7XHJcblxyXG4gIGNvbnN0IGNoZWNrSWZTaGlwRXhpc3QgPSBuZXdDb29yZGluYXRlcy5tYXAoKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgLy8gU2tpcCB0aGUgZmlyc3QgcGFydCBiZWNhdXNlIGl0IHdpbGwgYmUgYWx3YXlzIHRydWVcclxuXHJcbiAgICBpZiAoaW5kZXggIT09IDApIHtcclxuICAgICAgcmV0dXJuIGV4aXN0aW5nU2hpcENvb3JkaW5hdGVzLmluY2x1ZGVzKGVsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gQ2hlY2sgaWYgbmV3IGNvb3JkaW5hdGVzIGhhdmUgYSBzaGlwIGFscmVhZHkgaW4gaXQgYW5kXHJcbiAgLy8gQ2hlY2sgaWYgbmV3IGNvb3JkaW5hdGVzIGV4Y2VlZCB0aGUgaW5kZXggb2YgdGhlIGdhbWUgYm9hcmQgaWYgc28gcmV2ZXJ0IHRvIHByZXZpb3VzIHN0YXRlXHJcbiAgLy8gY29udmVydCBwcmV2Q29vcmRpbnRhdGVzIHRvIGFuIGFycmF5IG9mIG51bWJlcnMgc28gd2UgY2FuIGRvIGNhbGN1bGF0aW9ucyBvbiBib2FyZCBpbmRleGVzXHJcbiAgaWYgKFxyXG4gICAgY2hlY2tJZlNoaXBFeGlzdC5pbmNsdWRlcyh0cnVlKSB8fFxyXG4gICAgbmV3Q29vcmRpbmF0ZXMuc29tZSgoZWwpID0+IGVsID4gMTAwKVxyXG4gICkge1xyXG4gICAgbmV3Q29vcmRpbmF0ZXMgPSBwcmV2Q29vcmRpbmF0ZXMubWFwKChjb29yZCkgPT4gTnVtYmVyKGNvb3JkKSk7XHJcbiAgICBsZXQgcHJldkRpcmVjdGlvbiA9IG5ld0RpcmVjdGlvbiA9PT0gXCJ5XCIgPyBcInhcIiA6IFwieVwiO1xyXG4gICAgc3RhcnRCb2FyZC5yZW5kZXJTaGlwTmV3RGlyZWN0aW9uKHNoaXBJZCwgbmV3Q29vcmRpbmF0ZXMsIHByZXZEaXJlY3Rpb24pO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gQ29udG5pdWUgcmVuZGVyIG5ldyBkaXJlY3Rpb24gYW5kIHVwZGF0ZSBjdXJyZW50IHNoaXAgY29vcmRpbmF0ZXNcclxuICBwbGF5ZXJTaGlwQ29vcmRpbmF0ZXNbYCR7c2hpcElkfWBdID0ge1xyXG4gICAgY29vcmRpbmF0ZXM6IG5ld0Nvb3JkaW5hdGVzLFxyXG4gICAgZGlyZWN0aW9uOiBuZXdEaXJlY3Rpb24sXHJcbiAgfTtcclxuXHJcbiAgc3RhcnRCb2FyZC5yZW5kZXJTaGlwTmV3RGlyZWN0aW9uKHNoaXBJZCwgbmV3Q29vcmRpbmF0ZXMsIG5ld0RpcmVjdGlvbik7XHJcbn07XHJcblxyXG5jb25zdCBjb250cm9sUmVzZXRQbGF5ZXJCb2FyZCA9IGZ1bmN0aW9uICgpIHtcclxuICBzdGFydEJvYXJkLnJlbmRlckdhbWVCb2FyZCgpO1xyXG4gIHBsYXllclNoaXBDb29yZGluYXRlcyA9IHt9O1xyXG59O1xyXG5cclxuY29uc3QgZ2FtZUluaXRpYWxMb2dpYyA9IGZ1bmN0aW9uICgpIHt9O1xyXG5cclxuLy8gQ29uZmlybSBzZWxlY3Rpb24gYW5kIHJlbmRlciBhY3R1YWwgZ2FtZSBzY3JlZW5cclxuY29uc3QgY29udHJvbENvbmZpcm1TZWxlY3Rpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3Qgc2hpcENvb3JkaW5hdGVzID0gT2JqZWN0LnZhbHVlcyhwbGF5ZXJTaGlwQ29vcmRpbmF0ZXMpO1xyXG5cclxuICBpZiAoc2hpcENvb3JkaW5hdGVzLmxlbmd0aCA8IDEwKSB7XHJcbiAgICBzdGFydEJvYXJkLnJlbmRlckludmFsaWRDb25maXJtKCk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBwbGF5ZXIgPSBuZXcgUGxheWVyKHBsYXllclNoaXBDb29yZGluYXRlcywgXCJwbGF5ZXJcIik7XHJcbiAgY29tcHV0ZXIgPSBuZXcgUGxheWVyKGNvbXB1dGVyQ29vcmRpbmF0ZXMsIFwiY29tcHV0ZXJcIik7XHJcblxyXG4gIGdhbWVTY3JlZW4ucmVuZGVyR2FtZVNjcmVlbihwbGF5ZXIsIFwicGxheWVyXCIpO1xyXG4gIGdhbWVTY3JlZW4ucmVuZGVyR2FtZVNjcmVlbihjb21wdXRlciwgXCJjb21wdXRlclwiKTtcclxuXHJcbiAgZ2FtZVNjcmVlbi5yZW5kZXJTY3JlZW5HYW1lSW5pdGlhbFN0YXR1cygpO1xyXG5cclxuICBnYW1lU3RhcnQgPSB0cnVlO1xyXG5cclxuICBzdGFydEdhbWUoKTtcclxuXHJcbiAgZ2FtZUluaXRpYWxMb2dpYygpO1xyXG59O1xyXG5cclxuY29uc3QgY29udHJvbEdhbWVTY3JlZW5DbGlja2VkID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAvLyBvd25lciB3aWxsIGJlIHRoZSBvd25lciBvZiB0aGUgZ2FtZWJvYXJkIHRoYXQgd2FzIGNsaWNrZWRcclxuICAvLyBpbmRleCBpcyB3aGVyZSBpbiB0aGUgZ3JpZCB0aGUgdXNlciBjbGlja2VkXHJcbiAgY29uc3QgeyBpbmRleCwgb3duZXIgfSA9IGRhdGE7XHJcblxyXG4gIC8vIHBhc3MgdGhlIGluc3RhbmNlIG9mIHRoZSBwbGF5ZXIgY2xhc3MgZGVwZW5kaW5nIG9uIHRoZSBvd25lciB2YWx1ZVxyXG4gIGNvbnN0IG93bmVyQ2xhc3MgPSBvd25lciA9PT0gXCJwbGF5ZXJcIiA/IHBsYXllciA6IGNvbXB1dGVyO1xyXG5cclxuICBsZXQgYXR0YWNrUmVzdWx0O1xyXG5cclxuICAvLyBUbyBjb252ZXJ0IHRvIHRoZSBhY3R1YWwgaW5kZXggb2YgdGhlIGh0bWwgbm9kZVxyXG4gIGF0dGFja1Jlc3VsdCA9IG93bmVyQ2xhc3MuYm9hcmQucmVjZWl2ZUF0dGFjayhpbmRleCAtIDEpO1xyXG5cclxuICAvLyBXaGVuIHBsYXllciBhdHRhY2tzIHRvIGJvYXJkIG93bmVkIGJ5IGNvbXB1dGVyXHJcbiAgaWYgKGF0dGFja1Jlc3VsdCA9PT0gXCJoaXRcIiAmJiBvd25lciA9PT0gXCJjb21wdXRlclwiKSB7XHJcbiAgICB0dXJuID0gXCJwbGF5ZXJcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgdHVybiA9IFwiY29tcHV0ZXJcIjtcclxuICB9XHJcblxyXG4gIC8vIFdoZW4gY29tcHV0ZXIgYXR0YWNrcyB0byBib2FyZCBvd25lZCBieSBwbGF5ZXJcclxuICBpZiAoYXR0YWNrUmVzdWx0ID09PSBcImhpdFwiICYmIG93bmVyID09PSBcInBsYXllclwiKSB7XHJcbiAgICB0dXJuID0gXCJjb21wdXRlclwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0dXJuID0gXCJwbGF5ZXJcIjtcclxuICB9XHJcblxyXG4gIC8vIGluZGV4IC0gMSwgZGV0ZXJtaW5lU2hpcCBjaGVja3MgaHRtbCBpbmRleGVzIGZyb20gMC05OSwgc28gSSBuZWVkIHRvIGRlZHVjdCAxIGZyb20gbXkgaW5kZXhcclxuICAvLyBiZWNhdXNlIG15IGluZGV4ZXMgaXMgMS0xMDBcclxuICAvLyBkZXRlcm1pbmVTaGlwIHdpbGwgZWl0aGVyIHJldHVybiB0aGUgc2hpcElkIG9yIHVuZGVmaW5lZFxyXG4gIGNvbnN0IHNoaXBJZCA9IGRldGVybWluZVNoaXAoaW5kZXggLSAxLCBvd25lckNsYXNzLnNoaXBDb29yZGluYXRlcyk7XHJcblxyXG4gIC8vIGlmIHNoaXBJZCBub3QgdW5kZWZpbmVkIHRoZW4gdGVsbCBnYW1lU2NyZWVuIHRvIHVwZGF0ZVVJXHJcbiAgZ2FtZVNjcmVlbi51cGRhdGVVaShpbmRleCwgb3duZXIsIHNoaXBJZCk7XHJcblxyXG4gIC8vIENoZWNrIGlmIGFueSBzaGlwIHN1bmsgcGVyIHNoaXAgaGl0XHJcbiAgaWYgKHNoaXBJZCkge1xyXG4gICAgY29udHJvbFN1bmsoc2hpcElkLCBpbmRleCwgb3duZXJDbGFzcywgb3duZXIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGF0dGFja1Jlc3VsdCA9PT0gXCJoaXRcIiA/IHRydWUgOiBmYWxzZTtcclxufTtcclxuXHJcbmNvbnN0IGNvbnRyb2xTdW5rID0gZnVuY3Rpb24gKHNoaXBJZCwgaW5kZXgsIG93bmVyQ2xhc3MsIG93bmVyKSB7XHJcbiAgLy8gT3duZXIgd2lsbCBiZSBlaXRoZXIgdGhlIGNvbXB1dGVyIG9yIHBsYXllciBpbnN0YW5jZSBvZiB0aGUgcGxheWVyIGNsYXNzXHJcbiAgY29uc3QgYm9hcmRJbmRleGVzVG9VcGRhdGUgPSBvd25lckNsYXNzLnNoaXBDb29yZGluYXRlc1tzaGlwSWRdLmNvb3JkaW5hdGVzO1xyXG5cclxuICBpZiAob3duZXJDbGFzcy5zaGlwc1tzaGlwSWRdLmlzU3VuaygpKSB7XHJcbiAgICBnYW1lU2NyZWVuLnJlbmRlclN1bmsoYm9hcmRJbmRleGVzVG9VcGRhdGUsIG93bmVyKTtcclxuICB9XHJcbiAgLy8gV2FpdCBmb3IgMTAwIGZvciB1aSB0byB1cGRhdGUgYmVmb3JlIHJ1bm5pbmcgdGhlIGNvZGUgYmVsb3dcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIGlmIChvd25lckNsYXNzLmJvYXJkLmlzQWxsU2hpcFN1bmsoKSkge1xyXG4gICAgICBhbGVydChcIkFsbCBzaGlwIHN1bmtcIik7XHJcbiAgICB9XHJcbiAgfSwgMTAwKTtcclxufTtcclxuXHJcbmNvbnN0IEFpQ29udHJvbHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgY29tcE1vdmUgPSBjb21wdXRlckNvbnRyb2xsZXIucGlja01vdmUoKTtcclxuICBjb25zb2xlLmxvZyhjb21wTW92ZSk7XHJcbiAgdHVybiA9IFwicGxheWVyXCI7XHJcbn07XHJcblxyXG5jb25zdCBnZXRUdXJuID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiB0dXJuO1xyXG59O1xyXG5cclxuY29uc3QgcmFuZG9taXplUGxheWVySW5kZXggPSBmdW5jdGlvbiAoKSB7XHJcbiAgcGxheWVyU2hpcENvb3JkaW5hdGVzID0gY2FsY3VsYXRlUmFuZG9tSW5kZXgoKTtcclxuICBjb25zdCB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKHBsYXllclNoaXBDb29yZGluYXRlcyk7XHJcbiAgY29uc3QgY29vcmRpbmF0ZXMgPSB2YWx1ZXMubWFwKCh2KSA9PiB2LmNvb3JkaW5hdGVzKS5mbGF0KCk7XHJcbiAgc3RhcnRCb2FyZC5yZW5kZXJSYW5kb21pemVQbGF5ZXJDb29yZGluYXRlcyhjb29yZGluYXRlcyk7XHJcbn07XHJcblxyXG5jb25zdCBzdGFydEdhbWUgPSBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgd2hpbGUgKCFnYW1lRmluc2loZWQpIHtcclxuICAgIGlmICh0dXJuID09PSBcInBsYXllclwiKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiaGVyZVwiKTtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2FtZVNjcmVlbi5oYW5kbGVyQ2xpY2tHYW1lKFxyXG4gICAgICAgIGNvbnRyb2xHYW1lU2NyZWVuQ2xpY2tlZCxcclxuICAgICAgICB0dXJuXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAocmVzdWx0ID09PSB0cnVlKSB7XHJcbiAgICAgICAgdHVybiA9IFwicGxheWVyXCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdHVybiA9IFwiY29tcHV0ZXJcIjtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29tcHV0ZXJDb250cm9sbGVyLnBpY2tNb3ZlKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgIGNvbnN0IHNoaXBJZCA9IGRldGVybWluZVNoaXAocmVzdWx0IC0gMSwgcGxheWVyLnNoaXBDb29yZGluYXRlcyk7XHJcbiAgICAgIGdhbWVTY3JlZW4udXBkYXRlVWkocmVzdWx0LCBcInBsYXllclwiLCBzaGlwSWQpO1xyXG4gICAgICB0dXJuID0gXCJwbGF5ZXJcIjtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG4vL1xyXG5jb25zdCBpbml0ID0gYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gIHN0YXJ0Qm9hcmQucmVuZGVyR2FtZUJvYXJkKCk7XHJcblxyXG4gIHN0YXJ0Qm9hcmQuYWRkSGFuZGxlckNoZWNrQ29vcmRpbmF0ZXMoY29udHJvbENvb3JkaW5hdGVzRHJvcCk7XHJcbiAgc3RhcnRCb2FyZC5hZGRIYW5kbGVyQm9hcmRDbGlja2VkKGNvbnRyb2xTaGlwQ2hhbmdlRGlyZWNpdG9uKTtcclxuICBzdGFydEJvYXJkLmFkZEhhbmRsZXJSZXNldFBsYXllckJvYXJkKGNvbnRyb2xSZXNldFBsYXllckJvYXJkKTtcclxuICBzdGFydEJvYXJkLmFkZEhhbmRsZXJSYW5kb21QbGF5ZXJCb2FyZChyYW5kb21pemVQbGF5ZXJJbmRleCk7XHJcbiAgc3RhcnRCb2FyZC5hZGRIYW5kbGVyQ29uZmlybUNvb3JkaW5hdGVzKGNvbnRyb2xDb25maXJtU2VsZWN0aW9uKTtcclxuICAvLyBnYW1lU2NyZWVuLmFkZEhhbmRsZXJCb2FyZENsaWNrZWQoXHJcbiAgLy8gICBjb250cm9sR2FtZVNjcmVlbkNsaWNrZWQsXHJcbiAgLy8gICBjb250cm9sU3VuayxcclxuICAvLyAgIGdldFR1cm5cclxuICAvLyApO1xyXG59O1xyXG5cclxuaW5pdCgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=