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
  opacity: 30%;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;AACA;EACE,gBAAgB;AAClB;;AAEA,YAAY;;AAEZ;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,SAAS;EACT,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,iBAAiB;AACnB;;AAEA;EACE,2BAA2B;EAC3B,cAAc;EACd,aAAa;EACb,iCAAiC;EACjC,kCAAkC;AACpC;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,uBAAuB;EACvB,yDAAmD;EACnD,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,qBAAqB;EACrB,YAAY;EACZ,YAAY;EACZ,yBAAyB;EACzB,gBAAgB;EAChB,iBAAiB;EACjB,eAAe;AACjB;;AAEA,gBAAgB;;AAEhB;EACE,aAAa;EACb,YAAY;EACZ,YAAY;;EAEZ,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,yDAA+C;EAC/C,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;EACvB,yDAAqD;EACrD,wBAAwB;EACxB,4BAA4B;EAC5B,2BAA2B;AAC7B;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,oBAAoB;EACpB,mBAAmB;EACnB,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,oBAAoB;EACpB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,oBAAoB;EACpB,mBAAmB;EACnB,WAAW;AACb","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n*:focus {\r\n  outline: none;\r\n}\r\nhtml {\r\n  font-size: 62.5%;\r\n}\r\n\r\n/* Helpers */\r\n\r\n.main-container {\r\n  height: 100vh;\r\n  width: 100vw;\r\n}\r\n\r\n.start-screen {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 100%;\r\n  gap: 8rem;\r\n  flex-direction: column;\r\n}\r\n\r\n.start-screen-main {\r\n  gap: 8rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.start-screen-bottom-container {\r\n  display: flex;\r\n  gap: 2rem;\r\n}\r\n\r\n.player-tiles-selector-container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.board-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(10, 1fr);\r\n  user-select: none;\r\n}\r\n\r\n.board-tile {\r\n  background-color: aliceblue;\r\n  height: 3.8rem;\r\n  width: 3.8rem;\r\n  border-right: 0.5px solid #999999;\r\n  border-bottom: 0.5px solid #999999;\r\n}\r\n\r\n.board-tile:nth-child(-n + 10) {\r\n  border-top: 0.5px solid #999999;\r\n}\r\n\r\n.board-tile:nth-child(10n + 1) {\r\n  border-left: 0.5px solid #999999;\r\n}\r\n\r\n.board-tile-hovered {\r\n  background-color: white;\r\n}\r\n\r\n.dragging {\r\n  opacity: 0;\r\n}\r\n\r\n.dragged-element-dropped {\r\n  opacity: 0;\r\n  pointer-events: none;\r\n}\r\n\r\n.rows {\r\n  display: flex;\r\n  gap: 2rem;\r\n}\r\n\r\n.ship {\r\n  border: 0.5px solid #666666;\r\n}\r\n\r\n.ship:hover {\r\n  cursor: grab;\r\n}\r\n\r\n.ship-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2rem;\r\n}\r\n\r\n.drop-ship {\r\n  background-color: white;\r\n  background-image: url(\"./assets/personnel-nbg.png\");\r\n  background-size: cover;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn {\r\n  padding: 1.2rem;\r\n  border-radius: 0.5rem;\r\n  border: none;\r\n  color: white;\r\n  background-color: #666666;\r\n  font-weight: 600;\r\n  user-select: none;\r\n  cursor: pointer;\r\n}\r\n\r\n/* Game Screen */\r\n\r\n.game-screen {\r\n  display: flex;\r\n  height: 100%;\r\n  width: 100vw;\r\n\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.explode {\r\n  background-color: white;\r\n  background-image: url(\"./assets/explosion.png\");\r\n  background-size: cover;\r\n}\r\n\r\n.miss {\r\n  background-color: white;\r\n  background-image: url(\"./assets/splash-water-bg.png\");\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  background-position: bottom;\r\n}\r\n\r\n.sunk {\r\n  background-color: rgba(255, 0, 0, 0.514);\r\n}\r\n\r\n.disabled {\r\n  background-color: #666666;\r\n  opacity: 30%;\r\n}\r\n\r\n.inactive {\r\n  display: none;\r\n}\r\n\r\n.screen-half-player {\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: end;\r\n  align-items: center;\r\n  width: 50vw;\r\n  margin-right: 10rem;\r\n}\r\n\r\n.screen-half-computer {\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: start;\r\n  align-items: center;\r\n  width: 50vw;\r\n  margin-left: 10rem;\r\n}\r\n\r\n.back-screen-player {\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: end;\r\n  align-items: center;\r\n  width: 50vw;\r\n}\r\n\r\n.back-screen-computer {\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: end;\r\n  align-items: center;\r\n  width: 50vw;\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony export */   determineMoveUsingAnAxis: () => (/* binding */ determineMoveUsingAnAxis),
/* harmony export */   determineNewFocusMove: () => (/* binding */ determineNewFocusMove),
/* harmony export */   generateMove: () => (/* binding */ generateMove),
/* harmony export */   getMoveBasedOnDirection: () => (/* binding */ getMoveBasedOnDirection),
/* harmony export */   isCurrentDirectionMoveValid: () => (/* binding */ isCurrentDirectionMoveValid),
/* harmony export */   validMoves: () => (/* binding */ validMoves)
/* harmony export */ });
const directions = {
  x: { left: -1, right: 1 },
  y: { up: -10, down: 10 },
};

// checks if move is outside the table boundaries or
// Check if move not in previous moves
const validMoves = (baseMove, previousMoves) => {
  // Tiles arround will be the same as directions structure,
  // The difference is that the numbers will be the coordinate or the move
  let tilesAround = [{ x: {} }, { y: {} }];

  let rowStart = Math.floor((baseMove - 1) / 10) * 10 + 1;
  let rowEnd = rowStart + 9;

  if (baseMove + 1 <= rowEnd && !previousMoves.includes(baseMove + 1)) {
    tilesAround[0].x.right = baseMove + 1;
  } else {
    tilesAround[0].x.right = null;
  }
  if (baseMove - 1 >= rowStart && !previousMoves.includes(baseMove - 1)) {
    tilesAround[0].x.left = baseMove - 1;
  } else {
    tilesAround[0].x.left = null;
  }

  // For y Axis
  if (baseMove + 10 < 100 && !previousMoves.includes(baseMove + 10)) {
    tilesAround[1].y.down = baseMove + 10;
  } else {
    tilesAround[1].y.down = null;
  }
  if (baseMove - 10 > 1 && !previousMoves.includes(baseMove - 10)) {
    tilesAround[1].y.up = baseMove - 10;
  } else {
    tilesAround[1].y.up = null;
  }

  return tilesAround;
};

const getMoveBasedOnDirection = (tilesAround, currentDirection) => {
  for (const tile of tilesAround) {
    const currentAxis = Object.keys(tile)[0]; // "x" or "y"
    const dirs = tile[currentAxis]; // e.g. { left:94, right:null }

    if (currentDirection in dirs) {
      return {
        currentAxis,
        currentDirection,
        currentMove: dirs[currentDirection],
      };
    }
  }
};

// Check if potential next move is valid
const isCurrentDirectionMoveValid = (currentDirection, tilesAround) => {
  for (const tile of tilesAround) {
    const [axis, direction] = Object.entries(tile)[0];
    if (currentDirection in direction) {
      return direction[currentDirection] !== null;
    }
  }
};

const determineMoveUsingAnAxis = (tilesAround, axis) => {
  console.log(tilesAround);
  console.log(axis);
  const choosenAxis = tilesAround.filter((tile) => {
    // e.g. tile === { x: { left: null, right: null } }
    return Object.keys(tile)[0] === axis;
  });

  console.log(choosenAxis);

  const options = choosenAxis.flatMap((tile) => {
    const currentAxis = Object.keys(tile)[0]; // "x" or "y"
    const inner = tile[currentAxis];
    return Object.entries(inner) // [ [dir, val], … ]
      .filter(([_, val]) => val !== null) // drop nulls
      .map(([direction, value]) => ({
        // tag with axis
        currentAxis,
        currentDirection: direction,
        value,
      }));
  });
  console.log(options);

  // 3) Pick one at random
  const choice = options[Math.floor(Math.random() * options.length)];
  console.log(choice);
  const { currentAxis, currentDirection, value: currentMove } = choice;
  const newFocusMove = { currentAxis, currentDirection, currentMove };
  return newFocusMove;
};

const determineNewFocusMove = (tilesAround, baseMove) => {
  // 1
  // CHeck if no null in an axes or filter thouse axes whose directions are all null
  const usableAxis = tilesAround.filter((tile) => {
    // e.g. tile === { x: { left: null, right: null } }
    const inner = Object.values(tile)[0]; // { left: null, right: null }
    return Object.values(inner).some((v) => v !== null); // check if one is not null so that axes is usable
  });

  if (usableAxis.length === 0) return null;

  // 2) Build a flat list of all non-null options, with axis info
  const options = usableAxis.flatMap((tile) => {
    const currentAxis = Object.keys(tile)[0]; // "x" or "y"
    const inner = tile[currentAxis];
    return Object.entries(inner) // [ [dir, val], … ]
      .filter(([_, val]) => val !== null) // drop nulls
      .map(([direction, value]) => ({
        // tag with axis
        currentAxis,
        currentDirection: direction,
        value,
      }));
  });

  // 3) Pick one at random
  const choice = options[Math.floor(Math.random() * options.length)];
  const { currentAxis, currentDirection, value: currentMove } = choice;
  const newFocusMove = { baseMove, currentAxis, currentDirection, currentMove };
  return newFocusMove;
};

const generateMove = (focusMove, previousMoves) => {
  // current move is now prev move
  const {
    baseMove,
    currentAxis,
    currentDirection,
    prevMoveResult,
    axisDone,
    currentMove: prevMove,
  } = focusMove;

  //   Check all the valid possbile moves around baseMove
  let baseTilesAround = validMoves(baseMove, previousMoves);

  let newFocusMove;

  //   If no previous move, choose a random axis and direction and store the move as current move
  // The next time this function runs this will become the previous move
  if (!prevMove) {
    newFocusMove = determineNewFocusMove(baseTilesAround, baseMove);
  } else {
    // Check prevMove result
    // There's already a first move after a hit
    if (prevMoveResult === "hit") {
      // If hit, meaning the ship is positioned in the current choosen axis and currentDirection
      // Check valid moves
      // These will return all the valid tiles from the previous move
      let tilesAround = validMoves(prevMove, previousMoves);

      // CHeck if next move is valid in the same direction
      // If valid then proceed with that move if not go to the other direction
      if (isCurrentDirectionMoveValid(currentDirection, tilesAround)) {
        const {
          currentAxis,
          currentDirection: direction,
          currentMove,
        } = getMoveBasedOnDirection(tilesAround, currentDirection);
        newFocusMove = {
          baseMove,
          currentAxis,
          currentDirection: direction,
          currentMove,
        };
        return newFocusMove;
      } else {
        // Change direction
        let newDirection;
        if (currentAxis === "x") {
          newDirection = currentDirection === "left" ? "right" : "left";
        } else {
          newDirection = currentDirection === "up" ? "down" : "up";
        }

        // Check if other direction move is valid, which is from the baseMove
        if (isCurrentDirectionMoveValid(newDirection, baseTilesAround)) {
          // If valid return the new focus move based on the based move
          const { currentAxis, currentDirection, currentMove } =
            getMoveBasedOnDirection(baseTilesAround, newDirection);
          newFocusMove = {
            baseMove,
            currentAxis,
            currentDirection,
            currentMove,
          };
          return newFocusMove;
        } else {
          // If the other direction move is invalid change to the other axis
          // Change to other axis
          let newAxis = currentAxis === "x" ? "y" : "x";

          // Update the available moves based on the base moves

          const newTilesAround = validMoves(baseMove, previousMoves);

          // Randomly select the direction
          const {
            currentAxis: axis,
            currentDirection,
            currentMove,
          } = determineMoveUsingAnAxis(baseTilesAround, newAxis);
          newFocusMove = {
            baseMove,
            currentAxis: axis,
            currentDirection,
            currentMove,
          };
          return newFocusMove;
        }
      }
    } else {
      // if missed
      let newDirection;
      if (currentAxis === "x") {
        newDirection = currentDirection === "left" ? "right" : "left";
      } else {
        newDirection = currentDirection === "up" ? "down" : "up";
      }

      // Check if other direction move is valid, which from the baseMove
      if (isCurrentDirectionMoveValid(newDirection, baseTilesAround)) {
        // If valid return the new focus move based on the based move
        const { currentAxis, currentDirection, currentMove } =
          getMoveBasedOnDirection(baseTilesAround, newDirection);
        newFocusMove = {
          baseMove,
          currentAxis,
          currentDirection,
          currentMove,
        };
        return newFocusMove;
      } else {
        // If other direction move is invalid change to the other axis based on the baseMove
        // Change to other axis
        let newAxis = currentAxis === "x" ? "y" : "x";
        console.log("Missed");

        // Update the base tiles around
        const newTilesAround = validMoves(baseMove, previousMoves);

        // Randomly select the direction
        const {
          currentAxis: axis,
          currentDirection,
          currentMove,
        } = determineMoveUsingAnAxis(newTilesAround, newAxis);
        newFocusMove = {
          baseMove,
          currentAxis: axis,
          currentDirection,
          currentMove,
        };
        return newFocusMove;
      }
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

  hitAShip(coordinate, shipId) {
    // First time a ship was hit
    if (!this.shipsHit.some((obj) => obj.shipId === shipId)) {
      const shipData = { coordinate, shipId };
      this.shipsHit.push(shipData);

      if (this.shipsHit.length === 1) {
        this.focusMove = {
          baseMove: this.shipsHit[0].coordinate,
          currentAxis: "",
          currrentDirection: "",
          prevMoveResult: "",
          currentMove: "",
          axisDone: "",
        };
      }
    }
  }

  nextShipHit(shipId) {
    // Remove this shipId (sunk already) to shipsHit

    this.shipsHit = this.shipsHit.filter((obj) => obj.shipId !== shipId);

    if (this.shipsHit.length > 0) {
      this.focusMove = {
        baseMove: this.shipsHit[0].coordinate,
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
  ships = []; // an array of ships instance
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

  removeInitialBoard = function () {
    this.startScreenContainer.replaceChildren();
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
        if (owner === "player" && turn === "player") return true;

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
    boardHuman.classList.add("disabled");
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
      this.waterDropSound.pause(); // stop if it’s mid-play
      this.waterDropSound.currentTime = 0; // rewind to start
      this.soldierScream.pause(); // stop if it’s mid-play
      this.soldierScream.currentTime = 0; // rewind to start
      this.soldierScream
        .play() // play from zero
        .catch((err) => {
          // you’ll often hit a browser autoplay policy here
          console.warn("Couldn’t play sound:", err);
        });
    } else {
      element.classList.add("miss");
      this.soldierScream.pause(); // stop if it’s mid-play
      this.soldierScream.currentTime = 0; // rewind to start
      this.waterDropSound.pause(); // stop if it’s mid-play
      this.waterDropSound.currentTime = 0; // rewind to start
      this.waterDropSound
        .play() // play from zero
        .catch((err) => {
          // you’ll often hit a browser autoplay policy here
          console.warn("Couldn’t play sound:", err);
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

  restartGame() {
    this.startScreen.classList.remove("inactive");

    this.gameScreen.innerHTML = "";
    this.gameScreen.classList.add("inactive");
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

// Confirm selection and render actual game screen
const controlConfirmSelection = function () {
  const shipCoordinates = Object.values(playerShipCoordinates);

  if (shipCoordinates.length < 10) {
    _view_StartBoard__WEBPACK_IMPORTED_MODULE_6__["default"].renderInvalidConfirm();
    return;
  }

  // Remove startScreenDisplays
  _view_StartBoard__WEBPACK_IMPORTED_MODULE_6__["default"].removeInitialBoard();

  player = new _model_logic_player__WEBPACK_IMPORTED_MODULE_4__["default"](playerShipCoordinates, "player");
  computer = new _model_logic_player__WEBPACK_IMPORTED_MODULE_4__["default"](computerCoordinates, "computer");

  _view_StartGameScreen__WEBPACK_IMPORTED_MODULE_7__["default"].renderGameScreen(player, "player");
  _view_StartGameScreen__WEBPACK_IMPORTED_MODULE_7__["default"].renderGameScreen(computer, "computer");

  _view_StartGameScreen__WEBPACK_IMPORTED_MODULE_7__["default"].renderScreenGameInitialStatus();

  gameStart = true;
  gameFinsihed = false;

  startGame();
};

const controlGameScreenClicked = async function (data) {
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
    controlSunk(shipId, ownerClass, owner);
  }

  return attackResult === "hit" ? true : false;
};

const controlSunk = function (shipId, ownerClass, owner) {
  // Owner will be either the computer or player instance of the player class
  const boardIndexesToUpdate = ownerClass.shipCoordinates[shipId].coordinates;

  if (ownerClass.ships[shipId].isSunk()) {
    _view_StartGameScreen__WEBPACK_IMPORTED_MODULE_7__["default"].renderSunk(boardIndexesToUpdate, owner);
  }
  // Wait for 100 for ui to update before running the code below
  if (ownerClass.board.isAllShipSunk()) {
    gameFinsihed = true;

    setTimeout(() => {
      if (ownerClass.board.isAllShipSunk()) {
        alert("All ship sunk");
        _view_StartGameScreen__WEBPACK_IMPORTED_MODULE_7__["default"].restartGame();
        controlResetPlayerBoard();
        player = undefined;
        computer = undefined;
      }
    }, 100);
  }
};

const randomizePlayerIndex = function () {
  playerShipCoordinates = (0,_helpers_calculateComputerIndex__WEBPACK_IMPORTED_MODULE_0__.calculateRandomIndex)();
  const values = Object.values(playerShipCoordinates);
  const coordinates = values.map((v) => v.coordinates).flat();
  _view_StartBoard__WEBPACK_IMPORTED_MODULE_6__["default"].renderRandomizePlayerCoordinates(coordinates);
};

const startGame = async function () {
  while (!gameFinsihed) {
    console.log(gameFinsihed);
    if (turn === "player") {
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
      player.board.receiveAttack(result - 1);

      const hasHitShip = Object.keys(computerController.focusMove).length >= 1;

      const shipId = (0,_helpers_determineShip__WEBPACK_IMPORTED_MODULE_2__.determineShip)(result - 1, player.shipCoordinates);

      if (shipId) {
        // Check if it already sunk
        computerController.hitAShip(result, shipId);
        computerController.updatePreviousMoveResult("hit");

        // If sunk
        // First remove all the focus move of the previous ship who is sunk
        // If there's another ship that was hit before the first ship that was sunk
        // We will make that ship the new focus move
        // So that the AI will focus on the moves around that ship that was hit
        if (player.ships[shipId].isSunk()) {
          // Update the UI
          controlSunk(shipId, player, "player");
          computerController.focusMove = {};
          computerController.nextShipHit(shipId);
        }
        turn === "computer";
      } else {
        if (hasHitShip) {
          // Modify focus moves if currently we hit a ship
          computerController.updatePreviousMoveResult("missed");
        }

        // Change the turn to player if we computer didn't hit a ship
        turn = "player";
      }
      _view_StartGameScreen__WEBPACK_IMPORTED_MODULE_7__["default"].updateUi(result, "player", shipId);
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
};

init();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNkRBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw2REFBVTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixxRkFBb0I7QUFDOUM7QUFDQTtBQUNBLEVBQUUsd0RBQVU7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNkRBQVU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFFQUFhO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw2REFBVTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHdEQUFVO0FBQ1o7QUFDQSxFQUFFLHdEQUFVO0FBQ1osRUFBRSx3REFBVTtBQUNaLEVBQUUsd0RBQVU7QUFDWixFQUFFLHdEQUFVO0FBQ1osRUFBRSx3REFBVTtBQUNaO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaGVscGVycy9jYWxjdWxhdGVDb21wdXRlckluZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaGVscGVycy9jYWxjdWxhdGVJbmRleEhpZ2hsaWdodC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2hlbHBlcnMvY2FsY3VsYXRlTmV3U2hpcERpcmVjdGlvbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2hlbHBlcnMvY2hlY2suanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9oZWxwZXJzL2NvbXB1dGVyTW92ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9oZWxwZXJzL2RldGVybWluZVNoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9oZWxwZXJzL3JhbmRvbWl6ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbC9sb2dpYy9jb21wdXRlci9jb21wdXRlckFpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWwvbG9naWMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWwvbG9naWMvZ2FtZUJvYXJkVGlsZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVsL2xvZ2ljL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVsL2xvZ2ljL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbC91aS9ib2FyZFRpbGVVaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVsL3VpL2JvYXJkVWkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbC91aS9kcmFnZ2VkRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVsL3VpL2luaXRpYWxCb2FyZFRpbGVVaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVsL3VpL2luaXRpYWxCb2FyZFVpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWwvdWkvc2hpcFVpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3L1NoaXBzQ29udGFpbmVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlldy9TdGFydEJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlldy9TdGFydEdhbWVTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9wZXJzb25uZWwtbmJnLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2V4cGxvc2lvbi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9zcGxhc2gtd2F0ZXItYmcucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbio6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuaHRtbCB7XHJcbiAgZm9udC1zaXplOiA2Mi41JTtcclxufVxyXG5cclxuLyogSGVscGVycyAqL1xyXG5cclxuLm1haW4tY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDB2dztcclxufVxyXG5cclxuLnN0YXJ0LXNjcmVlbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBnYXA6IDhyZW07XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnN0YXJ0LXNjcmVlbi1tYWluIHtcclxuICBnYXA6IDhyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uc3RhcnQtc2NyZWVuLWJvdHRvbS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAycmVtO1xyXG59XHJcblxyXG4ucGxheWVyLXRpbGVzLXNlbGVjdG9yLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYm9hcmQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4uYm9hcmQtdGlsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG4gIGhlaWdodDogMy44cmVtO1xyXG4gIHdpZHRoOiAzLjhyZW07XHJcbiAgYm9yZGVyLXJpZ2h0OiAwLjVweCBzb2xpZCAjOTk5OTk5O1xyXG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICM5OTk5OTk7XHJcbn1cclxuXHJcbi5ib2FyZC10aWxlOm50aC1jaGlsZCgtbiArIDEwKSB7XHJcbiAgYm9yZGVyLXRvcDogMC41cHggc29saWQgIzk5OTk5OTtcclxufVxyXG5cclxuLmJvYXJkLXRpbGU6bnRoLWNoaWxkKDEwbiArIDEpIHtcclxuICBib3JkZXItbGVmdDogMC41cHggc29saWQgIzk5OTk5OTtcclxufVxyXG5cclxuLmJvYXJkLXRpbGUtaG92ZXJlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5kcmFnZ2luZyB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmRyYWdnZWQtZWxlbWVudC1kcm9wcGVkIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4ucm93cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDJyZW07XHJcbn1cclxuXHJcbi5zaGlwIHtcclxuICBib3JkZXI6IDAuNXB4IHNvbGlkICM2NjY2NjY7XHJcbn1cclxuXHJcbi5zaGlwOmhvdmVyIHtcclxuICBjdXJzb3I6IGdyYWI7XHJcbn1cclxuXHJcbi5zaGlwLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMnJlbTtcclxufVxyXG5cclxuLmRyb3Atc2hpcCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBwYWRkaW5nOiAxLjJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjY2NjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogR2FtZSBTY3JlZW4gKi9cclxuXHJcbi5nYW1lLXNjcmVlbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG5cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZXhwbG9kZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5taXNzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xyXG59XHJcblxyXG4uc3VuayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNTE0KTtcclxufVxyXG5cclxuLmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2NjY2O1xyXG4gIG9wYWNpdHk6IDMwJTtcclxufVxyXG5cclxuLmluYWN0aXZlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc2NyZWVuLWhhbGYtcGxheWVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiA1MHZ3O1xyXG4gIG1hcmdpbi1yaWdodDogMTByZW07XHJcbn1cclxuXHJcbi5zY3JlZW4taGFsZi1jb21wdXRlciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiA1MHZ3O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHJlbTtcclxufVxyXG5cclxuLmJhY2stc2NyZWVuLXBsYXllciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogNTB2dztcclxufVxyXG5cclxuLmJhY2stc2NyZWVuLWNvbXB1dGVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiA1MHZ3O1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUEsWUFBWTs7QUFFWjtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osU0FBUztFQUNULHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2QsYUFBYTtFQUNiLGlDQUFpQztFQUNqQyxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHlEQUFtRDtFQUNuRCxzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBLGdCQUFnQjs7QUFFaEI7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7O0VBRVosdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix5REFBK0M7RUFDL0Msc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHlEQUFxRDtFQUNyRCx3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuKjpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5odG1sIHtcXHJcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxyXFxufVxcclxcblxcclxcbi8qIEhlbHBlcnMgKi9cXHJcXG5cXHJcXG4ubWFpbi1jb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LXNjcmVlbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZ2FwOiA4cmVtO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LXNjcmVlbi1tYWluIHtcXHJcXG4gIGdhcDogOHJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1zY3JlZW4tYm90dG9tLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheWVyLXRpbGVzLXNlbGVjdG9yLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZC10aWxlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG4gIGhlaWdodDogMy44cmVtO1xcclxcbiAgd2lkdGg6IDMuOHJlbTtcXHJcXG4gIGJvcmRlci1yaWdodDogMC41cHggc29saWQgIzk5OTk5OTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICM5OTk5OTk7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZC10aWxlOm50aC1jaGlsZCgtbiArIDEwKSB7XFxyXFxuICBib3JkZXItdG9wOiAwLjVweCBzb2xpZCAjOTk5OTk5O1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQtdGlsZTpudGgtY2hpbGQoMTBuICsgMSkge1xcclxcbiAgYm9yZGVyLWxlZnQ6IDAuNXB4IHNvbGlkICM5OTk5OTk7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZC10aWxlLWhvdmVyZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5kcmFnZ2luZyB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJhZ2dlZC1lbGVtZW50LWRyb3BwZWQge1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucm93cyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcCB7XFxyXFxuICBib3JkZXI6IDAuNXB4IHNvbGlkICM2NjY2NjY7XFxyXFxufVxcclxcblxcclxcbi5zaGlwOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogZ3JhYjtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcC1zaGlwIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2Fzc2V0cy9wZXJzb25uZWwtbmJnLnBuZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICBwYWRkaW5nOiAxLjJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2NjY2O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBHYW1lIFNjcmVlbiAqL1xcclxcblxcclxcbi5nYW1lLXNjcmVlbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcblxcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZXhwbG9kZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9hc3NldHMvZXhwbG9zaW9uLnBuZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1pc3Mge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vYXNzZXRzL3NwbGFzaC13YXRlci1iZy5wbmdcXFwiKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XFxyXFxufVxcclxcblxcclxcbi5zdW5rIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjUxNCk7XFxyXFxufVxcclxcblxcclxcbi5kaXNhYmxlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2NjY2O1xcclxcbiAgb3BhY2l0eTogMzAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5hY3RpdmUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNjcmVlbi1oYWxmLXBsYXllciB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDUwdnc7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NyZWVuLWhhbGYtY29tcHV0ZXIge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDUwdnc7XFxyXFxuICBtYXJnaW4tbGVmdDogMTByZW07XFxyXFxufVxcclxcblxcclxcbi5iYWNrLXNjcmVlbi1wbGF5ZXIge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA1MHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uYmFjay1zY3JlZW4tY29tcHV0ZXIge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA1MHZ3O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHJhbmRvbUluZGV4WCwgcmFuZG9tSW5kZXhZIH0gZnJvbSBcIi4vcmFuZG9taXplclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZVJhbmRvbUluZGV4ID0gZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IHNoaXBzQXZhaWxhYmxlID0gWzQsIDMsIDMsIDIsIDIsIDIsIDEsIDEsIDEsIDFdO1xyXG5cclxuICAvLyBTaGlwcyBjb3VudCB3aWxsIGJlIGJvdGggdGhlIGlkIG9mIHRoZSBzaGlwIGFuZCB0aGUgY29udHJvbGVyIG9mIHRoZSBsb29wXHJcbiAgbGV0IHNoaXBzQ291bnQgPSAwO1xyXG4gIGxldCBjb21wdXRlckNvb3JkaW5hdGVzID0ge307XHJcblxyXG4gIHdoaWxlIChzaGlwc0NvdW50IDw9IHNoaXBzQXZhaWxhYmxlLmxlbmd0aCAtIDEpIHtcclxuICAgIC8vIEdldCBhIHNoaXAgbGVuZ3RoXHJcbiAgICAvLyBzaGlwc0NvdW50IHdpbGwgc3RhcnQgYXQgMCBwZXJmZWN0IGFzIGluZGV4IGZvciB0aGUgc2hpcHNBdmFpbGFibGVcclxuICAgIGNvbnN0IHNoaXBMZW5ndGggPSBzaGlwc0F2YWlsYWJsZVtzaGlwc0NvdW50XTtcclxuICAgIC8vIEZvciBlYWNoIHNoaXBBdmFpbGFibGUgcmFuZG9taXplIHggb3IgeVxyXG5cclxuICAgIGxldCBkaXJlY3Rpb24gPSBbXCJ4XCIsIFwieVwiXVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKV07XHJcblxyXG4gICAgLy8gaWYgWFxyXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ4XCIpIHtcclxuICAgICAgLy8gUmFuZG9taXplIGEgcG9zaXRpb24gaW5kZXggYmV0d2VlbiAxIC0gMTAwXHJcbiAgICAgIC8vICAgVGhpcyBmdW5jdGlvbiB3aWxsIGFsc28gZW5zdXJlIHRoYXQgbm8gc2hpcCBpcyBjdXJyZW50bHkgcGxhY2VkIGluIHRoZSBjaG9zZW4gbnVtYmVyIGFuZCB0aGUgbnVtYmVycyBhZnRlciB0aGUgc2hpcCBsZW5ndGggaXMgYWRkZWRcclxuICAgICAgbGV0IHNoaXBDb29yZGluYXRlcyA9IHJhbmRvbUluZGV4WChjb21wdXRlckNvb3JkaW5hdGVzLCBzaGlwTGVuZ3RoKTtcclxuXHJcbiAgICAgIC8vIFB1c2ggaXQgaW4gdGhlIHNoaXAgY29vcmRpbmF0ZXMsIHNoaXBDb3VudC9pbmRleCBhcyBJZCBhbmQgdGhlIGNvb3JkaW5hdGVzIGFycmF5IGluIHRoZSBjb29yZGluYXRlcyBvYmplY3RcclxuICAgICAgY29tcHV0ZXJDb29yZGluYXRlc1tgJHtzaGlwc0NvdW50fWBdID0ge1xyXG4gICAgICAgIGRpcmVjdGlvbixcclxuICAgICAgICBjb29yZGluYXRlczogc2hpcENvb3JkaW5hdGVzLFxyXG4gICAgICAgIHNoaXBJZDogc2hpcHNDb3VudCxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8vIGluY3JlbWVudCB0aGUgc2hpcHMgY291bnQgdG8gZmV0Y2ggdGhlIG5leHQgaW5kZXhcclxuICAgICAgc2hpcHNDb3VudCsrO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IHNoaXBDb29yZGluYXRlcyA9IHJhbmRvbUluZGV4WShjb21wdXRlckNvb3JkaW5hdGVzLCBzaGlwTGVuZ3RoKTtcclxuXHJcbiAgICAgIGNvbXB1dGVyQ29vcmRpbmF0ZXNbYCR7c2hpcHNDb3VudH1gXSA9IHtcclxuICAgICAgICBkaXJlY3Rpb24sXHJcbiAgICAgICAgY29vcmRpbmF0ZXM6IHNoaXBDb29yZGluYXRlcyxcclxuICAgICAgICBzaGlwSWQ6IHNoaXBzQ291bnQsXHJcbiAgICAgIH07XHJcbiAgICAgIC8vIGluY3JlbWVudCB0aGUgc2hpcHMgY291bnQgdG8gZmV0Y2ggdGhlIG5leHQgaW5kZXhcclxuICAgICAgc2hpcHNDb3VudCsrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbXB1dGVyQ29vcmRpbmF0ZXM7XHJcbn07XHJcblxyXG4vLyAgTWVhbmluZyBpZiA0NiByYW5kb21pemUgaW5kZXggdGhlbiA0NiBwbHVzIHNoaXBzIGxlbmdodCBkbyBub3QgZXhjZWVkIDUwXHJcbi8vIElGIHBhc3NlZFxyXG4vLyBGb3Igc2hpcCBsZW5ndGggaW5jcmVtZW50IHRoZSByYW5kb21pemUgaW5kZXhcclxuLy8gQ2hlY2sgaWYgdGhlc2UgYXJyYXkgb2YgaW5kZXggaXMgbm90IHlldCBpbiB0aGUgc2hpcCBjb29yZGluYXRlc1xyXG4vLyBJZiBwYXNzZWQgcHVzaCB0byBzaGlwIGNvb3JkaWFudGVzIGlmIG5vdCBiYWNrIHRvIHN0ZXAgNFxyXG4vLyBQYXNzZWQgdGhlIHJhbmRvbWl6ZWQgaW5kZXggdG8gdGhlIGNvbXB1dGVyIHNoaXAgY29vcmRpbmF0ZXNcclxuXHJcbi8vIGlmIHlcclxuLy8gR2V0IGEgc2hpcCBsZW5naHRcclxuLy8gUmFuZG9taXplIGEgcG9zaXRpb24gaW5kZXggYmV0d2VlbiAxIC0gMTAwXHJcbi8vIENoZWNrIGlmIGluZGV4IGZvciBpIGFuZCAxMCBleGNlZWRzIDEwMCBpZiBwYXNzZWQgcHJvY2VlZCBpZiBub3QgYmFjayB0byBzdGVwIDNcclxuLy8gQ2hlY2sgaWYgdGhlc2UgaW5kZXhlcyBpbmNsdWRlZCBhbHJlYWR5IGluIHNoaXAgY29vcmRpYW50ZXMgaWYgbm90IHByb2NlZWQgaWYgaW5jbHVkZWQgYmFjayB0byBzdGVwIDNcclxuLy8gUHVzaCB0byBzaGlwIGNvb3JkaW5hdGVzXHJcbiIsImV4cG9ydCBjb25zdCBjYWxjdWxhdGVJbmRleCA9IGZ1bmN0aW9uICh0YXJnZXQsIGRyYWdnZWREYXRhKSB7XHJcbiAgaWYgKCFkcmFnZ2VkRGF0YSkgcmV0dXJuO1xyXG5cclxuICBjb25zdCB7IGluZGV4OiBkcmFnZ2VkSW5kZXgsIGRpcmVjdGlvbiwgbGVuZ3RoIH0gPSBkcmFnZ2VkRGF0YTtcclxuXHJcbiAgbGV0IGFycmF5ID0gW107XHJcblxyXG4gIGlmIChkaXJlY3Rpb24gPT09IFwieFwiKSB7XHJcbiAgICBjb25zdCBzdGFydEluZGV4ID0gdGFyZ2V0IC0gKGRyYWdnZWRJbmRleCAtIDEpO1xyXG4gICAgLy8gR2V0IHRoZSBsZXZlbCBpZiA0MSAtIDUwIGxldmVsIHNob3VsZCBiZSA0XHJcbiAgICBjb25zdCBsZXZlbCA9IE1hdGguY2VpbCh0YXJnZXQgLyAxMCkgLSAxO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICBjb25zdCBpbmRleFRvUHVzaCA9IHN0YXJ0SW5kZXggKyBpO1xyXG4gICAgICAvLyBDaGVjayBpZiBpbmRleCBpcyB0aGUgc2FtZSBsZXZlbCBvZiB0aGUgdGFyZ2V0IGluZGV4IHNvIHRoYXQgaW5kZXggcHVzaGVkIHNob3VsZCBiZSBpbiB0aGUgc2FtZSByb3dcclxuICAgICAgaWYgKE1hdGguY2VpbChpbmRleFRvUHVzaCAvIDEwKSAtIDEgPT09IGxldmVsKSBhcnJheS5wdXNoKGluZGV4VG9QdXNoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBhcnJheTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZU5ld0Nvb3JkaW5hdGVzID0gZnVuY3Rpb24gKGRpcmVjdGlvbiwgY29vcmRpbmF0ZXMpIHtcclxuICBsZXQgYXJyYXkgPSBbXTtcclxuXHJcbiAgY29uc3QgbGVuZ3RoID0gY29vcmRpbmF0ZXMubGVuZ3RoO1xyXG5cclxuICBpZiAoZGlyZWN0aW9uID09PSBcInhcIikge1xyXG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IE51bWJlcihjb29yZGluYXRlc1swXSk7XHJcblxyXG4gICAgY29uc3QgbGV2ZWwgPSBNYXRoLmNlaWwoc3RhcnRJbmRleCAvIDEwKSAtIDE7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGluZGV4VG9QdXNoID0gc3RhcnRJbmRleCArIGk7XHJcblxyXG4gICAgICBpZiAoTWF0aC5jZWlsKGluZGV4VG9QdXNoIC8gMTApIC0gMSA9PT0gbGV2ZWwpIGFycmF5LnB1c2goaW5kZXhUb1B1c2gpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ5XCIpIHtcclxuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBOdW1iZXIoY29vcmRpbmF0ZXNbMF0pO1xyXG5cclxuICAgIGxldCBiYXNlZENvb3JkaW5hdGVzID0gMDtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBsZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgY29uc3QgaW5kZXhUb1B1c2ggPSBzdGFydEluZGV4ICsgYmFzZWRDb29yZGluYXRlcztcclxuICAgICAgYmFzZWRDb29yZGluYXRlcyArPSAxMDtcclxuXHJcbiAgICAgIGFycmF5LnB1c2goaW5kZXhUb1B1c2gpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGFycmF5O1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgaXNJbmRleGVzVmFsaWQgPSBmdW5jdGlvbiAocmFuZEluZGV4ZXMsIGNvb3JkaW5hdGVzKSB7XHJcbiAgLy8gICBNYWtlIGFuIGFycmF5IHdoZXJlIGl0IHdpbGwgcmV0dXJuIHRydWUgb3IgZmFsc2UgdmFsdWVzIGlmIGVhY2ggaW5kZXggaXMgaW5jbHVkZWQgaW4gdGhlIGN1cnJlbnQgY29vcmRpbmF0ZXNcclxuICBsZXQgaXNJbmNsdWRlID0gcmFuZEluZGV4ZXMuc29tZSgoaWR4KSA9PiBjb29yZGluYXRlcy5pbmNsdWRlcyhpZHgpKTtcclxuXHJcbiAgcmV0dXJuIGlzSW5jbHVkZTtcclxufTtcclxuIiwiY29uc3QgZGlyZWN0aW9ucyA9IHtcclxuICB4OiB7IGxlZnQ6IC0xLCByaWdodDogMSB9LFxyXG4gIHk6IHsgdXA6IC0xMCwgZG93bjogMTAgfSxcclxufTtcclxuXHJcbi8vIGNoZWNrcyBpZiBtb3ZlIGlzIG91dHNpZGUgdGhlIHRhYmxlIGJvdW5kYXJpZXMgb3JcclxuLy8gQ2hlY2sgaWYgbW92ZSBub3QgaW4gcHJldmlvdXMgbW92ZXNcclxuZXhwb3J0IGNvbnN0IHZhbGlkTW92ZXMgPSAoYmFzZU1vdmUsIHByZXZpb3VzTW92ZXMpID0+IHtcclxuICAvLyBUaWxlcyBhcnJvdW5kIHdpbGwgYmUgdGhlIHNhbWUgYXMgZGlyZWN0aW9ucyBzdHJ1Y3R1cmUsXHJcbiAgLy8gVGhlIGRpZmZlcmVuY2UgaXMgdGhhdCB0aGUgbnVtYmVycyB3aWxsIGJlIHRoZSBjb29yZGluYXRlIG9yIHRoZSBtb3ZlXHJcbiAgbGV0IHRpbGVzQXJvdW5kID0gW3sgeDoge30gfSwgeyB5OiB7fSB9XTtcclxuXHJcbiAgbGV0IHJvd1N0YXJ0ID0gTWF0aC5mbG9vcigoYmFzZU1vdmUgLSAxKSAvIDEwKSAqIDEwICsgMTtcclxuICBsZXQgcm93RW5kID0gcm93U3RhcnQgKyA5O1xyXG5cclxuICBpZiAoYmFzZU1vdmUgKyAxIDw9IHJvd0VuZCAmJiAhcHJldmlvdXNNb3Zlcy5pbmNsdWRlcyhiYXNlTW92ZSArIDEpKSB7XHJcbiAgICB0aWxlc0Fyb3VuZFswXS54LnJpZ2h0ID0gYmFzZU1vdmUgKyAxO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aWxlc0Fyb3VuZFswXS54LnJpZ2h0ID0gbnVsbDtcclxuICB9XHJcbiAgaWYgKGJhc2VNb3ZlIC0gMSA+PSByb3dTdGFydCAmJiAhcHJldmlvdXNNb3Zlcy5pbmNsdWRlcyhiYXNlTW92ZSAtIDEpKSB7XHJcbiAgICB0aWxlc0Fyb3VuZFswXS54LmxlZnQgPSBiYXNlTW92ZSAtIDE7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRpbGVzQXJvdW5kWzBdLngubGVmdCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICAvLyBGb3IgeSBBeGlzXHJcbiAgaWYgKGJhc2VNb3ZlICsgMTAgPCAxMDAgJiYgIXByZXZpb3VzTW92ZXMuaW5jbHVkZXMoYmFzZU1vdmUgKyAxMCkpIHtcclxuICAgIHRpbGVzQXJvdW5kWzFdLnkuZG93biA9IGJhc2VNb3ZlICsgMTA7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRpbGVzQXJvdW5kWzFdLnkuZG93biA9IG51bGw7XHJcbiAgfVxyXG4gIGlmIChiYXNlTW92ZSAtIDEwID4gMSAmJiAhcHJldmlvdXNNb3Zlcy5pbmNsdWRlcyhiYXNlTW92ZSAtIDEwKSkge1xyXG4gICAgdGlsZXNBcm91bmRbMV0ueS51cCA9IGJhc2VNb3ZlIC0gMTA7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRpbGVzQXJvdW5kWzFdLnkudXAgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRpbGVzQXJvdW5kO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldE1vdmVCYXNlZE9uRGlyZWN0aW9uID0gKHRpbGVzQXJvdW5kLCBjdXJyZW50RGlyZWN0aW9uKSA9PiB7XHJcbiAgZm9yIChjb25zdCB0aWxlIG9mIHRpbGVzQXJvdW5kKSB7XHJcbiAgICBjb25zdCBjdXJyZW50QXhpcyA9IE9iamVjdC5rZXlzKHRpbGUpWzBdOyAvLyBcInhcIiBvciBcInlcIlxyXG4gICAgY29uc3QgZGlycyA9IHRpbGVbY3VycmVudEF4aXNdOyAvLyBlLmcuIHsgbGVmdDo5NCwgcmlnaHQ6bnVsbCB9XHJcblxyXG4gICAgaWYgKGN1cnJlbnREaXJlY3Rpb24gaW4gZGlycykge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGN1cnJlbnRBeGlzLFxyXG4gICAgICAgIGN1cnJlbnREaXJlY3Rpb24sXHJcbiAgICAgICAgY3VycmVudE1vdmU6IGRpcnNbY3VycmVudERpcmVjdGlvbl0sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gQ2hlY2sgaWYgcG90ZW50aWFsIG5leHQgbW92ZSBpcyB2YWxpZFxyXG5leHBvcnQgY29uc3QgaXNDdXJyZW50RGlyZWN0aW9uTW92ZVZhbGlkID0gKGN1cnJlbnREaXJlY3Rpb24sIHRpbGVzQXJvdW5kKSA9PiB7XHJcbiAgZm9yIChjb25zdCB0aWxlIG9mIHRpbGVzQXJvdW5kKSB7XHJcbiAgICBjb25zdCBbYXhpcywgZGlyZWN0aW9uXSA9IE9iamVjdC5lbnRyaWVzKHRpbGUpWzBdO1xyXG4gICAgaWYgKGN1cnJlbnREaXJlY3Rpb24gaW4gZGlyZWN0aW9uKSB7XHJcbiAgICAgIHJldHVybiBkaXJlY3Rpb25bY3VycmVudERpcmVjdGlvbl0gIT09IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRldGVybWluZU1vdmVVc2luZ0FuQXhpcyA9ICh0aWxlc0Fyb3VuZCwgYXhpcykgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHRpbGVzQXJvdW5kKTtcclxuICBjb25zb2xlLmxvZyhheGlzKTtcclxuICBjb25zdCBjaG9vc2VuQXhpcyA9IHRpbGVzQXJvdW5kLmZpbHRlcigodGlsZSkgPT4ge1xyXG4gICAgLy8gZS5nLiB0aWxlID09PSB7IHg6IHsgbGVmdDogbnVsbCwgcmlnaHQ6IG51bGwgfSB9XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGlsZSlbMF0gPT09IGF4aXM7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKGNob29zZW5BeGlzKTtcclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IGNob29zZW5BeGlzLmZsYXRNYXAoKHRpbGUpID0+IHtcclxuICAgIGNvbnN0IGN1cnJlbnRBeGlzID0gT2JqZWN0LmtleXModGlsZSlbMF07IC8vIFwieFwiIG9yIFwieVwiXHJcbiAgICBjb25zdCBpbm5lciA9IHRpbGVbY3VycmVudEF4aXNdO1xyXG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKGlubmVyKSAvLyBbIFtkaXIsIHZhbF0sIOKApiBdXHJcbiAgICAgIC5maWx0ZXIoKFtfLCB2YWxdKSA9PiB2YWwgIT09IG51bGwpIC8vIGRyb3AgbnVsbHNcclxuICAgICAgLm1hcCgoW2RpcmVjdGlvbiwgdmFsdWVdKSA9PiAoe1xyXG4gICAgICAgIC8vIHRhZyB3aXRoIGF4aXNcclxuICAgICAgICBjdXJyZW50QXhpcyxcclxuICAgICAgICBjdXJyZW50RGlyZWN0aW9uOiBkaXJlY3Rpb24sXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgIH0pKTtcclxuICB9KTtcclxuICBjb25zb2xlLmxvZyhvcHRpb25zKTtcclxuXHJcbiAgLy8gMykgUGljayBvbmUgYXQgcmFuZG9tXHJcbiAgY29uc3QgY2hvaWNlID0gb3B0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBvcHRpb25zLmxlbmd0aCldO1xyXG4gIGNvbnNvbGUubG9nKGNob2ljZSk7XHJcbiAgY29uc3QgeyBjdXJyZW50QXhpcywgY3VycmVudERpcmVjdGlvbiwgdmFsdWU6IGN1cnJlbnRNb3ZlIH0gPSBjaG9pY2U7XHJcbiAgY29uc3QgbmV3Rm9jdXNNb3ZlID0geyBjdXJyZW50QXhpcywgY3VycmVudERpcmVjdGlvbiwgY3VycmVudE1vdmUgfTtcclxuICByZXR1cm4gbmV3Rm9jdXNNb3ZlO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRldGVybWluZU5ld0ZvY3VzTW92ZSA9ICh0aWxlc0Fyb3VuZCwgYmFzZU1vdmUpID0+IHtcclxuICAvLyAxXHJcbiAgLy8gQ0hlY2sgaWYgbm8gbnVsbCBpbiBhbiBheGVzIG9yIGZpbHRlciB0aG91c2UgYXhlcyB3aG9zZSBkaXJlY3Rpb25zIGFyZSBhbGwgbnVsbFxyXG4gIGNvbnN0IHVzYWJsZUF4aXMgPSB0aWxlc0Fyb3VuZC5maWx0ZXIoKHRpbGUpID0+IHtcclxuICAgIC8vIGUuZy4gdGlsZSA9PT0geyB4OiB7IGxlZnQ6IG51bGwsIHJpZ2h0OiBudWxsIH0gfVxyXG4gICAgY29uc3QgaW5uZXIgPSBPYmplY3QudmFsdWVzKHRpbGUpWzBdOyAvLyB7IGxlZnQ6IG51bGwsIHJpZ2h0OiBudWxsIH1cclxuICAgIHJldHVybiBPYmplY3QudmFsdWVzKGlubmVyKS5zb21lKCh2KSA9PiB2ICE9PSBudWxsKTsgLy8gY2hlY2sgaWYgb25lIGlzIG5vdCBudWxsIHNvIHRoYXQgYXhlcyBpcyB1c2FibGVcclxuICB9KTtcclxuXHJcbiAgaWYgKHVzYWJsZUF4aXMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgLy8gMikgQnVpbGQgYSBmbGF0IGxpc3Qgb2YgYWxsIG5vbi1udWxsIG9wdGlvbnMsIHdpdGggYXhpcyBpbmZvXHJcbiAgY29uc3Qgb3B0aW9ucyA9IHVzYWJsZUF4aXMuZmxhdE1hcCgodGlsZSkgPT4ge1xyXG4gICAgY29uc3QgY3VycmVudEF4aXMgPSBPYmplY3Qua2V5cyh0aWxlKVswXTsgLy8gXCJ4XCIgb3IgXCJ5XCJcclxuICAgIGNvbnN0IGlubmVyID0gdGlsZVtjdXJyZW50QXhpc107XHJcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMoaW5uZXIpIC8vIFsgW2RpciwgdmFsXSwg4oCmIF1cclxuICAgICAgLmZpbHRlcigoW18sIHZhbF0pID0+IHZhbCAhPT0gbnVsbCkgLy8gZHJvcCBudWxsc1xyXG4gICAgICAubWFwKChbZGlyZWN0aW9uLCB2YWx1ZV0pID0+ICh7XHJcbiAgICAgICAgLy8gdGFnIHdpdGggYXhpc1xyXG4gICAgICAgIGN1cnJlbnRBeGlzLFxyXG4gICAgICAgIGN1cnJlbnREaXJlY3Rpb246IGRpcmVjdGlvbixcclxuICAgICAgICB2YWx1ZSxcclxuICAgICAgfSkpO1xyXG4gIH0pO1xyXG5cclxuICAvLyAzKSBQaWNrIG9uZSBhdCByYW5kb21cclxuICBjb25zdCBjaG9pY2UgPSBvcHRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG9wdGlvbnMubGVuZ3RoKV07XHJcbiAgY29uc3QgeyBjdXJyZW50QXhpcywgY3VycmVudERpcmVjdGlvbiwgdmFsdWU6IGN1cnJlbnRNb3ZlIH0gPSBjaG9pY2U7XHJcbiAgY29uc3QgbmV3Rm9jdXNNb3ZlID0geyBiYXNlTW92ZSwgY3VycmVudEF4aXMsIGN1cnJlbnREaXJlY3Rpb24sIGN1cnJlbnRNb3ZlIH07XHJcbiAgcmV0dXJuIG5ld0ZvY3VzTW92ZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZU1vdmUgPSAoZm9jdXNNb3ZlLCBwcmV2aW91c01vdmVzKSA9PiB7XHJcbiAgLy8gY3VycmVudCBtb3ZlIGlzIG5vdyBwcmV2IG1vdmVcclxuICBjb25zdCB7XHJcbiAgICBiYXNlTW92ZSxcclxuICAgIGN1cnJlbnRBeGlzLFxyXG4gICAgY3VycmVudERpcmVjdGlvbixcclxuICAgIHByZXZNb3ZlUmVzdWx0LFxyXG4gICAgYXhpc0RvbmUsXHJcbiAgICBjdXJyZW50TW92ZTogcHJldk1vdmUsXHJcbiAgfSA9IGZvY3VzTW92ZTtcclxuXHJcbiAgLy8gICBDaGVjayBhbGwgdGhlIHZhbGlkIHBvc3NiaWxlIG1vdmVzIGFyb3VuZCBiYXNlTW92ZVxyXG4gIGxldCBiYXNlVGlsZXNBcm91bmQgPSB2YWxpZE1vdmVzKGJhc2VNb3ZlLCBwcmV2aW91c01vdmVzKTtcclxuXHJcbiAgbGV0IG5ld0ZvY3VzTW92ZTtcclxuXHJcbiAgLy8gICBJZiBubyBwcmV2aW91cyBtb3ZlLCBjaG9vc2UgYSByYW5kb20gYXhpcyBhbmQgZGlyZWN0aW9uIGFuZCBzdG9yZSB0aGUgbW92ZSBhcyBjdXJyZW50IG1vdmVcclxuICAvLyBUaGUgbmV4dCB0aW1lIHRoaXMgZnVuY3Rpb24gcnVucyB0aGlzIHdpbGwgYmVjb21lIHRoZSBwcmV2aW91cyBtb3ZlXHJcbiAgaWYgKCFwcmV2TW92ZSkge1xyXG4gICAgbmV3Rm9jdXNNb3ZlID0gZGV0ZXJtaW5lTmV3Rm9jdXNNb3ZlKGJhc2VUaWxlc0Fyb3VuZCwgYmFzZU1vdmUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBDaGVjayBwcmV2TW92ZSByZXN1bHRcclxuICAgIC8vIFRoZXJlJ3MgYWxyZWFkeSBhIGZpcnN0IG1vdmUgYWZ0ZXIgYSBoaXRcclxuICAgIGlmIChwcmV2TW92ZVJlc3VsdCA9PT0gXCJoaXRcIikge1xyXG4gICAgICAvLyBJZiBoaXQsIG1lYW5pbmcgdGhlIHNoaXAgaXMgcG9zaXRpb25lZCBpbiB0aGUgY3VycmVudCBjaG9vc2VuIGF4aXMgYW5kIGN1cnJlbnREaXJlY3Rpb25cclxuICAgICAgLy8gQ2hlY2sgdmFsaWQgbW92ZXNcclxuICAgICAgLy8gVGhlc2Ugd2lsbCByZXR1cm4gYWxsIHRoZSB2YWxpZCB0aWxlcyBmcm9tIHRoZSBwcmV2aW91cyBtb3ZlXHJcbiAgICAgIGxldCB0aWxlc0Fyb3VuZCA9IHZhbGlkTW92ZXMocHJldk1vdmUsIHByZXZpb3VzTW92ZXMpO1xyXG5cclxuICAgICAgLy8gQ0hlY2sgaWYgbmV4dCBtb3ZlIGlzIHZhbGlkIGluIHRoZSBzYW1lIGRpcmVjdGlvblxyXG4gICAgICAvLyBJZiB2YWxpZCB0aGVuIHByb2NlZWQgd2l0aCB0aGF0IG1vdmUgaWYgbm90IGdvIHRvIHRoZSBvdGhlciBkaXJlY3Rpb25cclxuICAgICAgaWYgKGlzQ3VycmVudERpcmVjdGlvbk1vdmVWYWxpZChjdXJyZW50RGlyZWN0aW9uLCB0aWxlc0Fyb3VuZCkpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICBjdXJyZW50QXhpcyxcclxuICAgICAgICAgIGN1cnJlbnREaXJlY3Rpb246IGRpcmVjdGlvbixcclxuICAgICAgICAgIGN1cnJlbnRNb3ZlLFxyXG4gICAgICAgIH0gPSBnZXRNb3ZlQmFzZWRPbkRpcmVjdGlvbih0aWxlc0Fyb3VuZCwgY3VycmVudERpcmVjdGlvbik7XHJcbiAgICAgICAgbmV3Rm9jdXNNb3ZlID0ge1xyXG4gICAgICAgICAgYmFzZU1vdmUsXHJcbiAgICAgICAgICBjdXJyZW50QXhpcyxcclxuICAgICAgICAgIGN1cnJlbnREaXJlY3Rpb246IGRpcmVjdGlvbixcclxuICAgICAgICAgIGN1cnJlbnRNb3ZlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIG5ld0ZvY3VzTW92ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBDaGFuZ2UgZGlyZWN0aW9uXHJcbiAgICAgICAgbGV0IG5ld0RpcmVjdGlvbjtcclxuICAgICAgICBpZiAoY3VycmVudEF4aXMgPT09IFwieFwiKSB7XHJcbiAgICAgICAgICBuZXdEaXJlY3Rpb24gPSBjdXJyZW50RGlyZWN0aW9uID09PSBcImxlZnRcIiA/IFwicmlnaHRcIiA6IFwibGVmdFwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBuZXdEaXJlY3Rpb24gPSBjdXJyZW50RGlyZWN0aW9uID09PSBcInVwXCIgPyBcImRvd25cIiA6IFwidXBcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGlmIG90aGVyIGRpcmVjdGlvbiBtb3ZlIGlzIHZhbGlkLCB3aGljaCBpcyBmcm9tIHRoZSBiYXNlTW92ZVxyXG4gICAgICAgIGlmIChpc0N1cnJlbnREaXJlY3Rpb25Nb3ZlVmFsaWQobmV3RGlyZWN0aW9uLCBiYXNlVGlsZXNBcm91bmQpKSB7XHJcbiAgICAgICAgICAvLyBJZiB2YWxpZCByZXR1cm4gdGhlIG5ldyBmb2N1cyBtb3ZlIGJhc2VkIG9uIHRoZSBiYXNlZCBtb3ZlXHJcbiAgICAgICAgICBjb25zdCB7IGN1cnJlbnRBeGlzLCBjdXJyZW50RGlyZWN0aW9uLCBjdXJyZW50TW92ZSB9ID1cclxuICAgICAgICAgICAgZ2V0TW92ZUJhc2VkT25EaXJlY3Rpb24oYmFzZVRpbGVzQXJvdW5kLCBuZXdEaXJlY3Rpb24pO1xyXG4gICAgICAgICAgbmV3Rm9jdXNNb3ZlID0ge1xyXG4gICAgICAgICAgICBiYXNlTW92ZSxcclxuICAgICAgICAgICAgY3VycmVudEF4aXMsXHJcbiAgICAgICAgICAgIGN1cnJlbnREaXJlY3Rpb24sXHJcbiAgICAgICAgICAgIGN1cnJlbnRNb3ZlLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHJldHVybiBuZXdGb2N1c01vdmU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIElmIHRoZSBvdGhlciBkaXJlY3Rpb24gbW92ZSBpcyBpbnZhbGlkIGNoYW5nZSB0byB0aGUgb3RoZXIgYXhpc1xyXG4gICAgICAgICAgLy8gQ2hhbmdlIHRvIG90aGVyIGF4aXNcclxuICAgICAgICAgIGxldCBuZXdBeGlzID0gY3VycmVudEF4aXMgPT09IFwieFwiID8gXCJ5XCIgOiBcInhcIjtcclxuXHJcbiAgICAgICAgICAvLyBVcGRhdGUgdGhlIGF2YWlsYWJsZSBtb3ZlcyBiYXNlZCBvbiB0aGUgYmFzZSBtb3Zlc1xyXG5cclxuICAgICAgICAgIGNvbnN0IG5ld1RpbGVzQXJvdW5kID0gdmFsaWRNb3ZlcyhiYXNlTW92ZSwgcHJldmlvdXNNb3Zlcyk7XHJcblxyXG4gICAgICAgICAgLy8gUmFuZG9tbHkgc2VsZWN0IHRoZSBkaXJlY3Rpb25cclxuICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgY3VycmVudEF4aXM6IGF4aXMsXHJcbiAgICAgICAgICAgIGN1cnJlbnREaXJlY3Rpb24sXHJcbiAgICAgICAgICAgIGN1cnJlbnRNb3ZlLFxyXG4gICAgICAgICAgfSA9IGRldGVybWluZU1vdmVVc2luZ0FuQXhpcyhiYXNlVGlsZXNBcm91bmQsIG5ld0F4aXMpO1xyXG4gICAgICAgICAgbmV3Rm9jdXNNb3ZlID0ge1xyXG4gICAgICAgICAgICBiYXNlTW92ZSxcclxuICAgICAgICAgICAgY3VycmVudEF4aXM6IGF4aXMsXHJcbiAgICAgICAgICAgIGN1cnJlbnREaXJlY3Rpb24sXHJcbiAgICAgICAgICAgIGN1cnJlbnRNb3ZlLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHJldHVybiBuZXdGb2N1c01vdmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBpZiBtaXNzZWRcclxuICAgICAgbGV0IG5ld0RpcmVjdGlvbjtcclxuICAgICAgaWYgKGN1cnJlbnRBeGlzID09PSBcInhcIikge1xyXG4gICAgICAgIG5ld0RpcmVjdGlvbiA9IGN1cnJlbnREaXJlY3Rpb24gPT09IFwibGVmdFwiID8gXCJyaWdodFwiIDogXCJsZWZ0XCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV3RGlyZWN0aW9uID0gY3VycmVudERpcmVjdGlvbiA9PT0gXCJ1cFwiID8gXCJkb3duXCIgOiBcInVwXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIENoZWNrIGlmIG90aGVyIGRpcmVjdGlvbiBtb3ZlIGlzIHZhbGlkLCB3aGljaCBmcm9tIHRoZSBiYXNlTW92ZVxyXG4gICAgICBpZiAoaXNDdXJyZW50RGlyZWN0aW9uTW92ZVZhbGlkKG5ld0RpcmVjdGlvbiwgYmFzZVRpbGVzQXJvdW5kKSkge1xyXG4gICAgICAgIC8vIElmIHZhbGlkIHJldHVybiB0aGUgbmV3IGZvY3VzIG1vdmUgYmFzZWQgb24gdGhlIGJhc2VkIG1vdmVcclxuICAgICAgICBjb25zdCB7IGN1cnJlbnRBeGlzLCBjdXJyZW50RGlyZWN0aW9uLCBjdXJyZW50TW92ZSB9ID1cclxuICAgICAgICAgIGdldE1vdmVCYXNlZE9uRGlyZWN0aW9uKGJhc2VUaWxlc0Fyb3VuZCwgbmV3RGlyZWN0aW9uKTtcclxuICAgICAgICBuZXdGb2N1c01vdmUgPSB7XHJcbiAgICAgICAgICBiYXNlTW92ZSxcclxuICAgICAgICAgIGN1cnJlbnRBeGlzLFxyXG4gICAgICAgICAgY3VycmVudERpcmVjdGlvbixcclxuICAgICAgICAgIGN1cnJlbnRNb3ZlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIG5ld0ZvY3VzTW92ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBJZiBvdGhlciBkaXJlY3Rpb24gbW92ZSBpcyBpbnZhbGlkIGNoYW5nZSB0byB0aGUgb3RoZXIgYXhpcyBiYXNlZCBvbiB0aGUgYmFzZU1vdmVcclxuICAgICAgICAvLyBDaGFuZ2UgdG8gb3RoZXIgYXhpc1xyXG4gICAgICAgIGxldCBuZXdBeGlzID0gY3VycmVudEF4aXMgPT09IFwieFwiID8gXCJ5XCIgOiBcInhcIjtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk1pc3NlZFwiKTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBiYXNlIHRpbGVzIGFyb3VuZFxyXG4gICAgICAgIGNvbnN0IG5ld1RpbGVzQXJvdW5kID0gdmFsaWRNb3ZlcyhiYXNlTW92ZSwgcHJldmlvdXNNb3Zlcyk7XHJcblxyXG4gICAgICAgIC8vIFJhbmRvbWx5IHNlbGVjdCB0aGUgZGlyZWN0aW9uXHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgY3VycmVudEF4aXM6IGF4aXMsXHJcbiAgICAgICAgICBjdXJyZW50RGlyZWN0aW9uLFxyXG4gICAgICAgICAgY3VycmVudE1vdmUsXHJcbiAgICAgICAgfSA9IGRldGVybWluZU1vdmVVc2luZ0FuQXhpcyhuZXdUaWxlc0Fyb3VuZCwgbmV3QXhpcyk7XHJcbiAgICAgICAgbmV3Rm9jdXNNb3ZlID0ge1xyXG4gICAgICAgICAgYmFzZU1vdmUsXHJcbiAgICAgICAgICBjdXJyZW50QXhpczogYXhpcyxcclxuICAgICAgICAgIGN1cnJlbnREaXJlY3Rpb24sXHJcbiAgICAgICAgICBjdXJyZW50TW92ZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBuZXdGb2N1c01vdmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG5ld0ZvY3VzTW92ZTtcclxufTtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRldGVybWluZVNoaXAoaW5kZXgsIHNoaXBDb29yZGluYXRlcykge1xyXG4gIGNvbnN0IHNoaXBJZHMgPSBPYmplY3Qua2V5cyhzaGlwQ29vcmRpbmF0ZXMpO1xyXG5cclxuICAvLyAgIEJvYXJkIGh0bWwgaW5kZXggd2lsbCBiZSAwLTEwMCB2cyBteSBzaGlwIGNvb3JkaW5hdGVzIDEgLSAxMDBcclxuICAvLyAgVG8gcmVwb3NpdGlvbiBteSBjb29yZGluYXRlcyBJIG5lZWQgdG8gY29udmVydCBpdCBiYWNrIHRvIDAtMTAwXHJcbiAgLy8gTWVhbmluZyBmb3IgQXJyYXkuZnJvbSh7bGVuZ3RoOjEwMH0pIGkgbmVlZCB0byBjb252ZXJ0IGEgY29vcmRpbmF0ZXMgb2YgMCB0byAxIGluIGh0bWwgbm9kZUxpc3RcclxuICAvLyAgIFNvIEkgbmVlZCB0byBhZGQgMSB0byBteSBpbmRleCBzbyB0aGF0IGl0IHdpbGwgYmUgY29tcGFyZWQgdG8gYWN0dWFsIGh0bWwgaW5kZXhlc1xyXG4gIGNvbnN0IHNoaXBJZCA9IHNoaXBJZHMuZmluZCgoaWQpID0+XHJcbiAgICBzaGlwQ29vcmRpbmF0ZXNbYCR7aWR9YF0uY29vcmRpbmF0ZXMuaW5jbHVkZXMoaW5kZXggKyAxKVxyXG4gICk7XHJcblxyXG4gIHJldHVybiBzaGlwSWQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgaXNJbmRleGVzVmFsaWQgfSBmcm9tIFwiLi9jaGVja1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJhbmRvbWl6ZURpcmVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBkaXJlY3Rpb24gPSBbXCJ4XCIsIFwieVwiXVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKV07XHJcblxyXG4gIHJldHVybiBkaXJlY3Rpb247XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmFuZG9tSW5kZXhYID0gZnVuY3Rpb24gKHNoaXBDb29yZGluYXRlcywgc2hpcExlbmd0aCkge1xyXG4gIGNvbnN0IGNvb3JkaW5hdGVzID0gT2JqZWN0LnZhbHVlcyhzaGlwQ29vcmRpbmF0ZXMpXHJcbiAgICAubWFwKCh2YWx1ZXMpID0+IHZhbHVlcy5jb29yZGluYXRlcylcclxuICAgIC5mbGF0KCk7XHJcblxyXG4gIGxldCBjaGVja0lmSW5kZXhlc1ZhbGlkID0gdHJ1ZTtcclxuICBsZXQgcmFuZEluZGV4ZXM7XHJcblxyXG4gIHdoaWxlIChjaGVja0lmSW5kZXhlc1ZhbGlkKSB7XHJcbiAgICByYW5kSW5kZXhlcyA9IFtdO1xyXG4gICAgLy8gR2V0IHJhbmRvbSBpbmRleCBmcm9tIDEgLSAxMDBcclxuICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSArIDE7XHJcbiAgICBsZXQgcm93U3RhcnQgPSBNYXRoLmZsb29yKChyYW5kIC0gMSkgLyAxMCkgKiAxMCArIDE7XHJcbiAgICBsZXQgcm93RW5kID0gcm93U3RhcnQgKyA5O1xyXG5cclxuICAgIC8vIENIZWNrIGZvciByb3dzIGxldmVsIG9mIHJhbmRvbSBudW1iZXIgaXMgdmFsaWRcclxuICAgIC8vIENoZWNrIGlmIHJhbmRvbWl6ZSBpbmRleCBwbHVzIHNoaXBzIGxlbmd0aCBwYXNzZWQgc2FtZSByb3cgdGVzdFxyXG4gICAgLy8gIE1lYW5pbmcgaWYgdGhleSBhcmUgaW4gdGhlIHNhbWUgcm93XHJcbiAgICB3aGlsZSAocmFuZCArIHNoaXBMZW5ndGggPiByb3dFbmQpIHtcclxuICAgICAgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCkgKyAxO1xyXG4gICAgICByb3dTdGFydCA9IE1hdGguZmxvb3IoKHJhbmQgLSAxKSAvIDEwKSAqIDEwICsgMTtcclxuICAgICAgcm93RW5kID0gcm93U3RhcnQgKyA5O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE9uY2VkIHBhc3NlZCBhbGwgdGhlIGluZGV4IGZvciB0aGlzIHJhbmRvbSBudW1iZXIgaXMgaW5zaWRlIHRoZSBzYW1lIHJvd1xyXG4gICAgLy8gTm93IHRlc3QgaWYgYWxsIHRoZXNlIGluZGV4ZXMgZG9uJ3QgaGF2ZSBhbnkgc2hpcHMgb24gaXRcclxuICAgIC8vIEdlbmVyYXRlIHRoZSBhcnJheSBvZiBpbmRleGVzIGZyb20gdGhlIHJhbmRvbSBpbmRleCBiYXNlZCBvbiBzaGlwIGxlbmd0aFxyXG5cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHNoaXBMZW5ndGg7IGkrKykge1xyXG4gICAgICByYW5kSW5kZXhlcy5wdXNoKHJhbmQpO1xyXG4gICAgICByYW5kKys7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gIENoZWsgaWYgdGhlIHJhbmRJbmRleGVzIGRvIG5vdCBoYXZlIHNoaXBzIG9uIGl0XHJcbiAgICBjaGVja0lmSW5kZXhlc1ZhbGlkID0gaXNJbmRleGVzVmFsaWQocmFuZEluZGV4ZXMsIGNvb3JkaW5hdGVzKTtcclxuICB9XHJcbiAgcmV0dXJuIHJhbmRJbmRleGVzO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJhbmRvbUluZGV4WSA9IGZ1bmN0aW9uIChzaGlwQ29vcmRpbmF0ZXMsIHNoaXBMZW5ndGgpIHtcclxuICBjb25zdCBjb29yZGluYXRlcyA9IE9iamVjdC52YWx1ZXMoc2hpcENvb3JkaW5hdGVzKVxyXG4gICAgLm1hcCgodmFsdWVzKSA9PiB2YWx1ZXMuY29vcmRpbmF0ZXMpXHJcbiAgICAuZmxhdCgpO1xyXG5cclxuICBsZXQgY2hlY2tJZkluZGV4ZXNWYWxpZCA9IHRydWU7XHJcbiAgbGV0IHJhbmRJbmRleGVzO1xyXG5cclxuICB3aGlsZSAoY2hlY2tJZkluZGV4ZXNWYWxpZCkge1xyXG4gICAgcmFuZEluZGV4ZXMgPSBbXTtcclxuICAgIC8vIEdldCByYW5kb20gaW5kZXggZnJvbSAxIC0gMTAwXHJcbiAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCkgKyAxO1xyXG4gICAgbGV0IGVuZENvbCA9IHJhbmQgKyBzaGlwTGVuZ3RoICogMTA7XHJcblxyXG4gICAgLy8gQ0hlY2sgaWYgY29vcmRpbmF0ZXMgd29uJ3QgZXhjZWVkIDEwMCBpZiBzbyByZWRyYXcgdGhlIHJhbmRvbSBjb29yZGluYXRlc1xyXG4gICAgd2hpbGUgKGVuZENvbCA+IDEwMCkge1xyXG4gICAgICByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSArIDE7XHJcbiAgICAgIGVuZENvbCA9IHJhbmQgKyBzaGlwTGVuZ3RoICogMTA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTm93IHRlc3QgaWYgYWxsIHRoZXNlIGluZGV4ZXMgZG9uJ3QgaGF2ZSBhbnkgc2hpcHMgb24gaXRcclxuICAgIC8vIEdlbmVyYXRlIHRoZSBhcnJheSBvZiBpbmRleGVzIGZyb20gdGhlIHJhbmRvbSBpbmRleCBiYXNlZCBvbiBzaGlwIGxlbmd0aFxyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc2hpcExlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHJhbmRJbmRleGVzLnB1c2gocmFuZCk7XHJcbiAgICAgIHJhbmQgKz0gMTA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gIENoZWsgaWYgdGhlIHJhbmRJbmRleGVzIGRvIG5vdCBoYXZlIHNoaXBzIG9uIGl0XHJcbiAgICBjaGVja0lmSW5kZXhlc1ZhbGlkID0gaXNJbmRleGVzVmFsaWQocmFuZEluZGV4ZXMsIGNvb3JkaW5hdGVzKTtcclxuICB9XHJcbiAgcmV0dXJuIHJhbmRJbmRleGVzO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBnZW5lcmF0ZU1vdmUgfSBmcm9tIFwiLi4vLi4vLi4vaGVscGVycy9jb21wdXRlck1vdmVzXCI7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4uL3BsYXllclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcHV0ZXJBaSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnNoaXBzSGl0ID0gW107IC8vIHdpbGwgc3RvcmUgd2hlcmUgdGhlIHNoaXAgaGl0IGFuZCB0aGUgc2hpcCBoaXRcclxuICAgIHRoaXMucHJldmlvdXNNb3ZlcyA9IFtdOyAvLyBzdG9yZSBhbGwgdGhlIG1vdmVzIGVpdGhlciBtaXNzZWQgb3IgaGl0XHJcbiAgICB0aGlzLmZvY3VzTW92ZSA9IHt9O1xyXG4gICAgLy8gZm9jdXMgbW92ZXM6IGJhc2U6IHdoZXJlIHRoZSBzaGlwIGhpdFxyXG4gICAgLy8gY3VycmVudCBheGlzIDogeCBvciB5XHJcbiAgICAvLyBjdXJyZW50IGRpcmVjdGlvbjogdXAvZG93biBvciBsZWZ0L3JpZ2h0XHJcbiAgICAvLyBwcmV2aW91cyBtb3ZlIHJlc3VsdFxyXG4gICAgLy8gcHJldmlvdXNNb3ZlXHJcbiAgfVxyXG5cclxuICBzbGVlcChtcykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyKSA9PiBzZXRUaW1lb3V0KHIsIG1zKSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBwaWNrTW92ZSgpIHtcclxuICAgIGF3YWl0IHRoaXMuc2xlZXAoMTAwMCk7XHJcblxyXG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZm9jdXNNb3ZlKS5sZW5ndGggPCAxKSB7XHJcbiAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSArIDE7XHJcbiAgICAgIGxldCBpc01vdmVJbnZhbGlkID0gdGhpcy5wcmV2aW91c01vdmVzLnNvbWUoKG1vdmUpID0+IG1vdmUgPT09IHJhbmQpO1xyXG4gICAgICB3aGlsZSAoaXNNb3ZlSW52YWxpZCkge1xyXG4gICAgICAgIHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApICsgMTtcclxuICAgICAgICBpc01vdmVJbnZhbGlkID0gdGhpcy5wcmV2aW91c01vdmVzLnNvbWUoKG1vdmUpID0+IG1vdmUgPT09IHJhbmQpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucHJldmlvdXNNb3Zlcy5wdXNoKHJhbmQpO1xyXG4gICAgICByZXR1cm4gcmFuZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZm9jdXNNb3ZlID0gZ2VuZXJhdGVNb3ZlKHRoaXMuZm9jdXNNb3ZlLCB0aGlzLnByZXZpb3VzTW92ZXMpO1xyXG5cclxuICAgICAgY29uc3QgY3VycmVudE1vdmUgPSB0aGlzLmZvY3VzTW92ZS5jdXJyZW50TW92ZTtcclxuICAgICAgdGhpcy5wcmV2aW91c01vdmVzLnB1c2goY3VycmVudE1vdmUpO1xyXG4gICAgICByZXR1cm4gdGhpcy5mb2N1c01vdmUuY3VycmVudE1vdmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoaXRBU2hpcChjb29yZGluYXRlLCBzaGlwSWQpIHtcclxuICAgIC8vIEZpcnN0IHRpbWUgYSBzaGlwIHdhcyBoaXRcclxuICAgIGlmICghdGhpcy5zaGlwc0hpdC5zb21lKChvYmopID0+IG9iai5zaGlwSWQgPT09IHNoaXBJZCkpIHtcclxuICAgICAgY29uc3Qgc2hpcERhdGEgPSB7IGNvb3JkaW5hdGUsIHNoaXBJZCB9O1xyXG4gICAgICB0aGlzLnNoaXBzSGl0LnB1c2goc2hpcERhdGEpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuc2hpcHNIaXQubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgdGhpcy5mb2N1c01vdmUgPSB7XHJcbiAgICAgICAgICBiYXNlTW92ZTogdGhpcy5zaGlwc0hpdFswXS5jb29yZGluYXRlLFxyXG4gICAgICAgICAgY3VycmVudEF4aXM6IFwiXCIsXHJcbiAgICAgICAgICBjdXJycmVudERpcmVjdGlvbjogXCJcIixcclxuICAgICAgICAgIHByZXZNb3ZlUmVzdWx0OiBcIlwiLFxyXG4gICAgICAgICAgY3VycmVudE1vdmU6IFwiXCIsXHJcbiAgICAgICAgICBheGlzRG9uZTogXCJcIixcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0U2hpcEhpdChzaGlwSWQpIHtcclxuICAgIC8vIFJlbW92ZSB0aGlzIHNoaXBJZCAoc3VuayBhbHJlYWR5KSB0byBzaGlwc0hpdFxyXG5cclxuICAgIHRoaXMuc2hpcHNIaXQgPSB0aGlzLnNoaXBzSGl0LmZpbHRlcigob2JqKSA9PiBvYmouc2hpcElkICE9PSBzaGlwSWQpO1xyXG5cclxuICAgIGlmICh0aGlzLnNoaXBzSGl0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5mb2N1c01vdmUgPSB7XHJcbiAgICAgICAgYmFzZU1vdmU6IHRoaXMuc2hpcHNIaXRbMF0uY29vcmRpbmF0ZSxcclxuICAgICAgICBjdXJyZW50QXhpczogXCJcIixcclxuICAgICAgICBjdXJycmVudERpcmVjdGlvbjogXCJcIixcclxuICAgICAgICBwcmV2TW92ZVJlc3VsdDogXCJcIixcclxuICAgICAgICBjdXJyZW50TW92ZTogXCJcIixcclxuICAgICAgICBheGlzRG9uZTogXCJcIixcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVByZXZpb3VzTW92ZVJlc3VsdChzdGF0dXMpIHtcclxuICAgIC8vIFVwZGF0ZSBlaXRoZXIgcHJldmlvdXMgbW92ZSBoaXRzIG9yIG1pc3NzZWRcclxuICAgIHRoaXMuZm9jdXNNb3ZlLnByZXZNb3ZlUmVzdWx0ID0gc3RhdHVzO1xyXG4gIH1cclxuXHJcbiAgc2hpcFNVbmsoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IGRldGVybWluZVNoaXAgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9kZXRlcm1pbmVTaGlwXCI7XHJcbmltcG9ydCBHYW1lQm9hcmRUaWxlIGZyb20gXCIuL2dhbWVCb2FyZFRpbGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVCb2FyZCB7XHJcbiAgY29uc3RydWN0b3Ioc2hpcENvb3JkaW5hdGVzLCB1c2VyLCBzaGlwcykge1xyXG4gICAgdGhpcy5ib2FyZFRpbGVzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogMTAwIH0sIChfLCBpbmRleCkgPT4ge1xyXG4gICAgICBjb25zdCBzaGlwSWQgPSBkZXRlcm1pbmVTaGlwKGluZGV4LCBzaGlwQ29vcmRpbmF0ZXMpO1xyXG4gICAgICBpZiAoc2hpcElkKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHYW1lQm9hcmRUaWxlKGluZGV4ICsgMSwgdXNlciwgc2hpcHNbc2hpcElkXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHYW1lQm9hcmRUaWxlKGluZGV4ICsgMSwgdXNlcik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudXNlciA9IHVzZXI7XHJcbiAgICB0aGlzLnNoaXBzID0gc2hpcHM7XHJcblxyXG4gICAgdGhpcy5faXNQcmV2TW92ZVZhbGlkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBnZXRJc1ByZXZNb3ZlVmFsaWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNQcmV2TW92ZVZhbGlkO1xyXG4gIH1cclxuXHJcbiAgc2V0SXNQcmV2TW92ZVZhbGlkKHN0YXR1cykge1xyXG4gICAgdGhpcy5faXNQcmV2TW92ZVZhbGlkID0gc3RhdHVzO1xyXG4gIH1cclxuXHJcbiAgLy8gVXBkYXRlIGEgdGlsZSBpZiBpdCBtaXNzZWQsIG9yIGhpdFxyXG4gIHJlY2VpdmVBdHRhY2soaW5kZXgpIHtcclxuICAgIC8vIElmIHRpbGUgY2hvc2VuIGlzIHNoaXAgbWVhbmluZywgYSBzaGlwIGlzIGxvY2F0ZWQgaW4gdGhhdCBjb29yZGluYXRlIHRoZW4gY2hhbmdlIHRoZSB0aWxlIHRvIGhpdFxyXG4gICAgaWYgKHRoaXMuYm9hcmRUaWxlc1tpbmRleF0uc3RhdHVzID09PSBcInNoaXBcIikge1xyXG4gICAgICB0aGlzLmJvYXJkVGlsZXNbaW5kZXhdLnNoaXAuaGl0KCk7XHJcbiAgICAgIHJldHVybiBcImhpdFwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gZWxzZSBjaGFuZ2UgdGhlIHRpbGUgc3RhdHVzIHRvIG1pc3NlZFxyXG4gICAgICB0aGlzLmJvYXJkVGlsZXNbaW5kZXhdLnN0YXR1cyA9IFwibWlzc2VkXCI7XHJcbiAgICAgIHJldHVybiBcIm1pc3NlZFwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gUG9zaXRpb24gYSBzaGlwIGJhc2VkIG9uIGFuIGFycmF5XHJcbiAgc2hpcFBvc2l0aW9uKGFycmF5KSB7XHJcbiAgICAvLyBDaGVjayBpZiBjb29yZGluYXRlcyBhbHJlYWR5IGhhdmUgYSBzaGlwLCByZXR1cm4gb3IgY2FuY2VsIHRoZSBpbnNlcnRpb24gaWYgdHJ1ZVxyXG4gICAgY29uc29sZS5sb2coYXJyYXkubWFwKChpbmRleCkgPT4gdGhpcy5ib2FyZFRpbGVzW2luZGV4XSkpO1xyXG4gICAgaWYgKFxyXG4gICAgICBhcnJheVxyXG4gICAgICAgIC5tYXAoKGluZGV4KSA9PiB0aGlzLmJvYXJkVGlsZXNbaW5kZXhdLmdldFN0YXR1cygpKVxyXG4gICAgICAgIC5zb21lKChlbGVtZW50KSA9PiBlbGVtZW50ID09PSBcInNoaXBcIilcclxuICAgICkge1xyXG4gICAgICB0aGlzLnNldElzUHJldk1vdmVWYWxpZChmYWxzZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBhcnJheS5mb3JFYWNoKChpbmRleCkgPT4gdGhpcy5ib2FyZFRpbGVzW2luZGV4XS5zZXRTdGF0dXMoXCJzaGlwXCIpKTtcclxuICAgIHRoaXMuc2V0SXNQcmV2TW92ZVZhbGlkKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgaXNBbGxTaGlwU3VuaygpIHtcclxuICAgIHJldHVybiB0aGlzLnNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpID09PSB0cnVlKTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUJvYXJkVGlsZSB7XHJcbiAgY29uc3RydWN0b3IoaW5kZXgsIHVzZXIsIHNoaXAgPSB7fSkge1xyXG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xyXG4gICAgdGhpcy5zaGlwID0gT2JqZWN0LmtleXMoc2hpcCkubGVuZ3RoID4gMCA/IHNoaXAgOiB7fTtcclxuICAgIHRoaXMudXNlciA9IHVzZXI7XHJcbiAgICB0aGlzLnN0YXR1cyA9IE9iamVjdC5rZXlzKHNoaXApLmxlbmd0aCA+IDAgPyBcInNoaXBcIiA6IFwiYXZhaWxhYmxlXCI7XHJcbiAgfVxyXG5cclxuICBjaGVja1N1bmsoKSB7XHJcbiAgICB0aGlzLnNoaXAuaXNTdW5rKCk7XHJcbiAgfVxyXG5cclxuICAvLyBTdGF0dXMgd2lsbCBkZXRlcm1pbmUgdGhlIFVJIG9mIHRoZSBnYW1lYm9hcmRcclxuICAvLyBJZiBhdmFpYWxhbGFibGUgYW5kIHNoaXAgdGhlbiB0aGUgdGlsZSBjYW4gYmUgY2xpY2tlZFxyXG4gIC8vIElmIE1pc3NlZCBhbmQgaGl0LCBjYW5ub3QgYmUgY2xpY2tlZFxyXG59XHJcbiIsImltcG9ydCBHYW1lQm9hcmQgZnJvbSBcIi4vZ2FtZUJvYXJkXCI7XHJcbmltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XHJcbiAgYm9hcmQ7XHJcbiAgc2hpcHMgPSBbXTsgLy8gYW4gYXJyYXkgb2Ygc2hpcHMgaW5zdGFuY2VcclxuICBjb25zdHJ1Y3RvcihzaGlwQ29vcmRpbmF0ZXMsIHVzZXIpIHtcclxuICAgIHRoaXMuc2hpcENvb3JkaW5hdGVzID0gc2hpcENvb3JkaW5hdGVzO1xyXG4gICAgdGhpcy4jZ2VuZXJhdGVTaGlwcygpO1xyXG4gICAgdGhpcy5fdHVybiA9IGZhbHNlO1xyXG4gICAgdGhpcy5ib2FyZCA9IG5ldyBHYW1lQm9hcmQoc2hpcENvb3JkaW5hdGVzLCB1c2VyLCB0aGlzLnNoaXBzKTtcclxuICAgIHRoaXMudXNlciA9IHVzZXI7XHJcbiAgfVxyXG5cclxuICBnZXRUdXJuKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3R1cm47XHJcbiAgfVxyXG5cclxuICBzZXRUdXJuKHR1cm4pIHtcclxuICAgIHRoaXMuX3R1cm4gPSB0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gS2V5cyBhcmUgc2hpcCBJZHMgb2YgZWFjaCBzaGlwXHJcbiAgI2dlbmVyYXRlU2hpcHMoKSB7XHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLnNoaXBDb29yZGluYXRlcykuZm9yRWFjaCgoaWQpID0+IHtcclxuICAgICAgY29uc3Qgc2hpcExlbmd0aCA9IHRoaXMuc2hpcENvb3JkaW5hdGVzW2Ake2lkfWBdLmNvb3JkaW5hdGVzLmxlbmd0aDtcclxuICAgICAgdGhpcy5zaGlwcy5wdXNoKG5ldyBTaGlwKHNoaXBMZW5ndGgsIGlkKSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XHJcbiAgY29uc3RydWN0b3IobGVuZ3RoLCBzaGlwSWQsIHVzZXIpIHtcclxuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgdGhpcy5oaXRDb3VudCA9IDA7XHJcbiAgICB0aGlzLnNoaXBJZCA9IHNoaXBJZDtcclxuICAgIHRoaXMudXNlciA9IHVzZXI7XHJcbiAgfVxyXG5cclxuICBoaXQoKSB7XHJcbiAgICB0aGlzLmlzU3VuaygpIHx8IHRoaXMuaGl0Q291bnQrKztcclxuICB9XHJcblxyXG4gIGlzU3VuaygpIHtcclxuICAgIHJldHVybiB0aGlzLmxlbmd0aCA9PT0gdGhpcy5oaXRDb3VudDtcclxuICB9XHJcbn1cclxuIiwiY29uc3QgYm9hcmRUaWxlVWkgPSBmdW5jdGlvbiAodGlsZSwgaW5kZXgpIHtcclxuICBjb25zdCBib2FyZFRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGJvYXJkVGlsZS5jbGFzc0xpc3QuYWRkKFwiYm9hcmQtdGlsZVwiKTtcclxuICBib2FyZFRpbGUuc2V0QXR0cmlidXRlKFwiaW5kZXgtaWRcIiwgaW5kZXgpO1xyXG5cclxuICBpZiAoT2JqZWN0LmtleXModGlsZS5zaGlwKS5sZW5ndGggPiAwKSB7XHJcbiAgICBpZiAodGlsZS51c2VyID09PSBcInBsYXllclwiKSB7XHJcbiAgICAgIGJvYXJkVGlsZS5jbGFzc0xpc3QuYWRkKFwiZHJvcC1zaGlwXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGJvYXJkVGlsZS5zZXRBdHRyaWJ1dGUoXCJzaGlwLWlkXCIsIHRpbGUuc2hpcC5zaGlwSWQpO1xyXG5cclxuICAgIGlmICh0aWxlLnNoaXAuaXNTdW5rKCkpIHtcclxuICAgICAgYm9hcmRUaWxlLmNsYXNzTGlzdC5hZGQoXCJzdW5rXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuICBib2FyZFRpbGUuc2V0QXR0cmlidXRlKFwib3duZXJcIiwgdGlsZS51c2VyKTtcclxuXHJcbiAgcmV0dXJuIGJvYXJkVGlsZTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJvYXJkVGlsZVVpO1xyXG4iLCJpbXBvcnQgYm9hcmRUaWxlVWkgZnJvbSBcIi4vYm9hcmRUaWxlVWlcIjtcclxuXHJcbmNvbnN0IGJvYXJkVWkgPSBmdW5jdGlvbiAoYm9hcmQsIHBsYXllcikge1xyXG4gIGNvbnN0IGJhY2tTY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJib2FyZC1jb250YWluZXJcIik7XHJcbiAgYm9hcmRDb250YWluZXIuc2V0QXR0cmlidXRlKFwicGxheWVyXCIsIHBsYXllcik7XHJcblxyXG4gIC8vIGJvYXJkIGluZGV4IHdpbGwgYmUgMSB0byAxMFxyXG4gIGJvYXJkLmZvckVhY2goKHRpbGUsIGluZGV4KSA9PiB7XHJcbiAgICBib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZFRpbGVVaSh0aWxlLCBpbmRleCArIDEpKTtcclxuICB9KTtcclxuICBzY3JlZW4uY2xhc3NMaXN0LmFkZChgc2NyZWVuLWhhbGYtJHtwbGF5ZXJ9YCk7XHJcbiAgYmFja1NjcmVlbi5jbGFzc0xpc3QuYWRkKGBiYWNrLXNjcmVlbi0ke3BsYXllcn1gKTtcclxuICBzY3JlZW4uYXBwZW5kQ2hpbGQoYm9hcmRDb250YWluZXIpO1xyXG4gIGJhY2tTY3JlZW4uYXBwZW5kQ2hpbGQoc2NyZWVuKTtcclxuXHJcbiAgcmV0dXJuIGJhY2tTY3JlZW47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBib2FyZFVpO1xyXG4iLCJsZXQgZHJhZ2dlZEVsZW1lbnRJbmRleERpcmVjdGlvbiA9IG51bGw7XHJcbmxldCBpbmRleEFycmF5ID0gbnVsbDtcclxuXHJcbi8vIGluZGV4IHdpbGwgYmUgdGhlIGluZGV4IHdoZXJlIHRoZSB1c2VyIGNsaWNrZWRcclxuLy8gbGVuZ3RoIGlzIHRoZSBsZW5ndGggb2YgdGhlIGJveFxyXG4vLyBpbmRleEFzSWQgaXMgdGhlIHNoaXAgaWQsIHRoZSBpbmRleCB3aGVyZSBpdCB3YXMgaW5zZXJ0ZWQgdG8gaXRzIHBhcmVudCBjb250YWludGVyXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXREcmFnZ2VkRWxlbWVudChpbmRleCwgZGlyZWN0aW9uLCBsZW5ndGgsIGluZGV4QXNJZCkge1xyXG4gIGRyYWdnZWRFbGVtZW50SW5kZXhEaXJlY3Rpb24gPSB7IGluZGV4LCBkaXJlY3Rpb24sIGxlbmd0aCwgaW5kZXhBc0lkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREcmFnZ2VkRWxlbWVudCgpIHtcclxuICByZXR1cm4gZHJhZ2dlZEVsZW1lbnRJbmRleERpcmVjdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyRHJhZ2dlZEVsZW1lbnRJbmRleCgpIHtcclxuICBkcmFnZ2VkRWxlbWVudEluZGV4RGlyZWN0aW9uID0gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEluZGV4QXJyYXkoYXJyYXkpIHtcclxuICBpbmRleEFycmF5ID0gYXJyYXk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbmRleEFycmF5KCkge1xyXG4gIHJldHVybiBpbmRleEFycmF5O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJJbmRleEFycmF5KCkge1xyXG4gIGluZGV4QXJyYXkgPSBudWxsO1xyXG59XHJcbiIsImNvbnN0IGluaXRpYWxCb2FyZFRpbGVVaSA9IGZ1bmN0aW9uIChpbmRleCkge1xyXG4gIGNvbnN0IGJvYXJkVGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gIGJvYXJkVGlsZS5jbGFzc0xpc3QuYWRkKFwiYm9hcmQtdGlsZVwiKTtcclxuICBib2FyZFRpbGUuc2V0QXR0cmlidXRlKFwiaW5kZXgtaWRcIiwgaW5kZXgpO1xyXG5cclxuICByZXR1cm4gYm9hcmRUaWxlO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbEJvYXJkVGlsZVVpO1xyXG4iLCJpbXBvcnQgaW5pdGlhbEJvYXJkVGlsZVVpIGZyb20gXCIuL2luaXRpYWxCb2FyZFRpbGVVaVwiO1xyXG5cclxuY29uc3QgaW5pdGlhbEJvYXJkVWkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJib2FyZC1jb250YWluZXJcIik7XHJcblxyXG4gIC8vIGJvYXJkIGluZGV4IHdpbGwgYmUgMSB0byAxMFxyXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwMDsgaSsrKSB7XHJcbiAgICBib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChpbml0aWFsQm9hcmRUaWxlVWkoaSkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGJvYXJkQ29udGFpbmVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbEJvYXJkVWk7XHJcbiIsImltcG9ydCB7IHNldERyYWdnZWRFbGVtZW50IH0gZnJvbSBcIi4vZHJhZ2dlZEVsZW1lbnRcIjtcclxuXHJcbmNvbnN0IHNoaXBVaSA9IGZ1bmN0aW9uIChsZW5ndGgsIGluZGV4QXNJZCwgZGlyZWN0aW9uID0gXCJ4XCIpIHtcclxuICBsZXQgYm94SW5kZXg7XHJcbiAgbGV0IHNoaXBEaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcbiAgY29uc3QgYmFzZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYmFzZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcclxuXHJcbiAgYmFzZUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XHJcbiAgYmFzZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkcmFnLWlkXCIsIGluZGV4QXNJZCk7XHJcbiAgYmFzZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgXCJ0cnVlXCIpO1xyXG4gIGJhc2VDb250YWluZXIuc3R5bGUud2lkdGggPSBcImZpdC1jb250ZW50XCI7XHJcblxyXG4gIC8vIENyZWF0ZSBib3hlcyBiYXNlZCBvbiB0aGUgbGVuZ3RoIHBhc3NlZCBhbmQgcGFzc2VkIGRhZHRhLWluZGV4IGJhc2VkIG9uIGluZGV4XHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGJhc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYmFzZS5zdHlsZS5oZWlnaHQgPSBcIjMuOHJlbVwiO1xyXG4gICAgYmFzZS5zdHlsZS53aWR0aCA9IFwiMy44cmVtXCI7XHJcblxyXG4gICAgLy8gU2V0IGRhdGEtaW5kZXggYXR0cmlidXRlIGZvciBlYWNoIGJveGVzXHJcbiAgICBiYXNlLnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiwgaSk7XHJcblxyXG4gICAgYmFzZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PiB7XHJcbiAgICAgIC8vIEdldCB3aGVyZSB1c2VyIGNsaWNrc1xyXG4gICAgICBjb25zdCBpbmRleCA9IE51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpKTtcclxuICAgICAgYm94SW5kZXggPSBpbmRleDtcclxuXHJcbiAgICAgIC8vIFRoaXMgd2lsbCBiZSBwYXNzZWQgdG8gb3RoZXIgbW9kdWxlXHJcbiAgICAgIHNldERyYWdnZWRFbGVtZW50KGJveEluZGV4LCBkaXJlY3Rpb24sIGxlbmd0aCwgaW5kZXhBc0lkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGJhc2VDb250YWluZXIuYXBwZW5kQ2hpbGQoYmFzZSk7XHJcbiAgfVxyXG5cclxuICBpZiAoc2hpcERpcmVjdGlvbiA9PT0gXCJ4XCIpIHtcclxuICAgIGJhc2VDb250YWluZXIuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IGByZXBlYXQoJHtsZW5ndGh9LCAxZnIpYDtcclxuICB9XHJcblxyXG4gIGlmIChzaGlwRGlyZWN0aW9uID09PSBcInlcIikge1xyXG4gICAgYmFzZUNvbnRhaW5lci5zdHlsZS5ncmlkVGVtcGxhdGVSb3dzID0gYHJlcGVhdCgke2xlbmd0aH0sIDFmcilgO1xyXG4gIH1cclxuXHJcbiAgYmFzZUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIChlKSA9PiB7XHJcbiAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFxyXG4gICAgICBcInRleHQvcGxhaW5cIixcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGJveEluZGV4LFxyXG4gICAgICAgIGxlbmd0aCxcclxuICAgICAgICBkaXJlY3Rpb24sXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gYmFzZUNvbnRhaW5lcjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNoaXBVaTtcclxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCBzaGlwVWkgZnJvbSBcIi4uL21vZGVsL3VpL3NoaXBVaVwiO1xyXG5cclxuY29uc3Qgc2hpcENvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2hpcC1jb250YWluZXJcIik7XHJcblxyXG4gIGxldCBzaGlwUm93cyA9IHt9O1xyXG5cclxuICAvLyBDcmVhdGUgMSByb3cgZm9yIGVhY2ggbGV2ZWwgb2Ygc2hpcCBsZW5naHRcclxuICAvLyBUaGUgcHVycG9zZSBmb3IgdGhpcyBpcyB0aGF0IEkgY2FuIHNlbGVjdCB0aGUgcm93IGNsYXNzIGFuZCBkZWZpbmUgc29tZSBydWxlcyBvbiBjc3NcclxuICAvLyBzdG9yZSBpdCBpbnNpZGUgYW4gb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGluZGl2aWR1YWxseSBhcHBlbmQgaXQgaW4gY29udGFpbmVyIHVzaW5nIE9iamVjdC52YWx1ZXNcclxuICBmb3IgKGxldCBpID0gNDsgaSA+PSAxOyBpLS0pIHtcclxuICAgIHNoaXBSb3dzW2Ake2l9YF0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc2hpcFJvd3NbYCR7aX1gXS5jbGFzc0xpc3QuYWRkKGByb3dzYCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzaGlwc0F2YWlsYWJsZSA9IFs0LCAzLCAzLCAzLCAyLCAyLCAyLCAyLCAxLCAxXTtcclxuXHJcbiAgLy8gRm9yIGVhY2ggIyBvZiBzaGlwcyBsZW50aCB3ZSB3aWxsIGJlIG9yZ2FuaXplIGluIDEgcm93IGVhY2ggbGVuZ3RoXHJcbiAgbGV0IGN1cnJlbnRTaGlwVG9CdWlsZCA9IDQ7XHJcblxyXG4gIHNoaXBzQXZhaWxhYmxlLmZvckVhY2goKHNoaXBMZW5ndGgsIGluZGV4KSA9PiB7XHJcbiAgICBpZiAoY3VycmVudFNoaXBUb0J1aWxkID09PSBzaGlwTGVuZ3RoKSB7XHJcbiAgICAgIHNoaXBSb3dzW2Ake3NoaXBMZW5ndGh9YF0uYXBwZW5kQ2hpbGQoc2hpcFVpKHNoaXBMZW5ndGgsIGluZGV4KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjdXJyZW50U2hpcFRvQnVpbGQtLTtcclxuICAgICAgc2hpcFJvd3NbYCR7c2hpcExlbmd0aH1gXS5hcHBlbmRDaGlsZChzaGlwVWkoc2hpcExlbmd0aCwgaW5kZXgpKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgT2JqZWN0LnZhbHVlcyhzaGlwUm93cykuZm9yRWFjaCgoZWwpID0+IGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbCkpO1xyXG5cclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hpcENvbnRhaW5lcjtcclxuIiwiaW1wb3J0IHsgY2FsY3VsYXRlSW5kZXggfSBmcm9tIFwiLi4vaGVscGVycy9jYWxjdWxhdGVJbmRleEhpZ2hsaWdodFwiO1xyXG5pbXBvcnQgYm9hcmRVaSBmcm9tIFwiLi4vbW9kZWwvdWkvYm9hcmRVaVwiO1xyXG5pbXBvcnQgc2hpcENvbnRhaW5lciBmcm9tIFwiLi9TaGlwc0NvbnRhaW5lclwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBjbGVhckRyYWdnZWRFbGVtZW50SW5kZXgsXHJcbiAgZ2V0RHJhZ2dlZEVsZW1lbnQsXHJcbiAgZ2V0SW5kZXhBcnJheSxcclxuICBzZXRJbmRleEFycmF5LFxyXG59IGZyb20gXCIuLi9tb2RlbC91aS9kcmFnZ2VkRWxlbWVudFwiO1xyXG5pbXBvcnQgaW5pdGlhbEJvYXJkVWkgZnJvbSBcIi4uL21vZGVsL3VpL2luaXRpYWxCb2FyZFVpXCI7XHJcblxyXG5jbGFzcyBTdGFydEJvYXJkIHtcclxuICBzdGFydFNjcmVlbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnQtc2NyZWVuLW1haW5cIik7XHJcbiAgcGFyZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydC1zY3JlZW5cIik7XHJcbiAgcmVzZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc2V0XCIpO1xyXG4gIGNvbmZpcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbmZpcm1cIik7XHJcbiAgcmFuZG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yYW5kb21cIik7XHJcblxyXG4gIGJvYXJkID0gbnVsbDtcclxuXHJcbiAgLy8gUmVuZGVyIEJvYXJkc1xyXG4gIHJlbmRlckdhbWVCb2FyZCA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcclxuICAgIC8vIFJlbmRlciBib2FyZCBhbmQgdGlsZXMgYmFzZWQgb24gdGhlIHBsYXllciBib2FyZCBpbnN0YW5jZVxyXG4gICAgdGhpcy5zdGFydFNjcmVlbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwQ29udGFpbmVyKCkpO1xyXG5cclxuICAgIHRoaXMuc3RhcnRTY3JlZW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5pdGlhbEJvYXJkVWkoKSk7XHJcbiAgICB0aGlzLmJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZC1jb250YWluZXJcIik7XHJcbiAgfTtcclxuXHJcbiAgcmVtb3ZlSW5pdGlhbEJvYXJkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5zdGFydFNjcmVlbkNvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oKTtcclxuICB9O1xyXG5cclxuICBhZGRIYW5kbGVyQ29uZmlybUNvb3JkaW5hdGVzKGhhbmRsZXIpIHtcclxuICAgIHRoaXMuY29uZmlybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBoYW5kbGVyKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFkZEhhbmRsZXJSZXNldFBsYXllckJvYXJkKGhhbmRsZXIpIHtcclxuICAgIHRoaXMucmVzZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5zdGFydFNjcmVlbkNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICBoYW5kbGVyKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFkZEhhbmRsZXJSYW5kb21QbGF5ZXJCb2FyZChoYW5kbGVyKSB7XHJcbiAgICB0aGlzLnJhbmRvbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBjb25zdCBzaGlwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwLWNvbnRhaW5lclwiKTtcclxuICAgICAgc2hpcENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICBoYW5kbGVyKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlclJhbmRvbWl6ZVBsYXllckNvb3JkaW5hdGVzKHBsYXllclNoaXBDb29yZGluYXRlcykge1xyXG4gICAgLy8gUmVtb3ZlIGZpcnN0IHRoZSBwcmV2aW91cyByYW5kb20gc2VsZWN0aW9uXHJcbiAgICBBcnJheS5mcm9tKHRoaXMuYm9hcmQuY2hpbGRyZW4pLmZvckVhY2goKGVsKSA9PlxyXG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJvcC1zaGlwXCIpXHJcbiAgICApO1xyXG5cclxuICAgIHBsYXllclNoaXBDb29yZGluYXRlcy5mb3JFYWNoKChjb29yZCkgPT4ge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2luZGV4LWlkPVwiJHtjb29yZH1cIl1gKTtcclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZHJvcC1zaGlwXCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJJbnZhbGlkQ29uZmlybSgpIHtcclxuICAgIGFsZXJ0KFwiUGxlYXNlIHBsYWNlIGFsbCBvZiB0aGUgc2hpcHNcIik7XHJcbiAgfVxyXG5cclxuICByZW5kZXJTaGlwTmV3RGlyZWN0aW9uID0gZnVuY3Rpb24gKHNoaXBJZCwgY29vcmRpbmF0ZXMsIG5ld0RpcmVjdGlvbikge1xyXG4gICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoaSkgPT4ge1xyXG4gICAgICB0aGlzLmJvYXJkLmNoaWxkcmVuW2kgLSAxXS5jbGFzc0xpc3QuYWRkKFwiZHJvcC1zaGlwXCIpO1xyXG4gICAgICB0aGlzLmJvYXJkLmNoaWxkcmVuW2kgLSAxXS5zZXRBdHRyaWJ1dGUoXCJzaGlwLWlkXCIsIHNoaXBJZCk7XHJcbiAgICAgIHRoaXMuYm9hcmQuY2hpbGRyZW5baSAtIDFdLnNldEF0dHJpYnV0ZShcImRpcmVjdGlvblwiLCBuZXdEaXJlY3Rpb24pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgYWRkSGFuZGxlckJvYXJkQ2xpY2tlZChoYW5kbGVyKSB7XHJcbiAgICB0aGlzLnBhcmVudENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgaWYgKGUudGFyZ2V0Lmhhc0F0dHJpYnV0ZShcInNoaXAtaWRcIikpIHtcclxuICAgICAgICBjb25zdCBzaGlwSWQgPSBOdW1iZXIoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwic2hpcC1pZFwiKSk7XHJcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGlyZWN0aW9uXCIpO1xyXG4gICAgICAgIGNvbnN0IG5ld0RpcmVjdGlvbiA9IGRpcmVjdGlvbiA9PT0gXCJ4XCIgPyBcInlcIiA6IFwieFwiO1xyXG5cclxuICAgICAgICAvLyBSZW1vdmUgaXRzIGRyb3BwZWQgY2xhc3NsaXN0IHRvIGdpdmUgd2F5IHRvIHRoZSBuZXcgc2hpcCBwb3NpdGlvblxyXG4gICAgICAgIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbc2hpcC1pZD1cIiR7c2hpcElkfVwiXWApO1xyXG5cclxuICAgICAgICAvLyBSZW1vdmUgc2hpcCBkZXNpZ24gYW5kIHNoaXAgYXR0cmlidXRlc1xyXG4gICAgICAgIHNoaXAuZm9yRWFjaCgocykgPT4ge1xyXG4gICAgICAgICAgcy5jbGFzc0xpc3QucmVtb3ZlKFwiZHJvcC1zaGlwXCIpO1xyXG4gICAgICAgICAgcy5yZW1vdmVBdHRyaWJ1dGUoXCJzaGlwLWlkXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBjYWxjdWxhdGUgbmV3IGluZGV4ZXMgYW5kIHBhc3MgdG8gY29udHJvbGxlclxyXG4gICAgICAgIGNvbnN0IHByZXZDb29yZGluYXRlcyA9IFsuLi5zaGlwXS5tYXAoKHMpID0+XHJcbiAgICAgICAgICBzLmdldEF0dHJpYnV0ZShcImluZGV4LWlkXCIpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaGFuZGxlcihzaGlwSWQsIHByZXZDb29yZGluYXRlcywgbmV3RGlyZWN0aW9uKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBIYW5kbGUgRHJhZyB0byBib2FyZFxyXG4gIGFkZEhhbmRsZXJDaGVja0Nvb3JkaW5hdGVzKGRyb3BIYW5kbGVyKSB7XHJcbiAgICB0aGlzLnBhcmVudENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5wYXJlbnRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbnRlclwiLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBjb25zdCBwcmV2aW91c0luZGV4ID0gZ2V0SW5kZXhBcnJheSgpO1xyXG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IE51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpbmRleC1pZFwiKSk7XHJcbiAgICAgIGNvbnN0IGRyYWdnZWRFbGVtZW50SW5kZXggPSBnZXREcmFnZ2VkRWxlbWVudCgpO1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNhbGN1bGF0ZUluZGV4KHRhcmdldEluZGV4LCBkcmFnZ2VkRWxlbWVudEluZGV4KTtcclxuICAgICAgc2V0SW5kZXhBcnJheShpbmRleCk7XHJcblxyXG4gICAgICBpZiAoIWluZGV4KSByZXR1cm47XHJcblxyXG4gICAgICBpZiAoIXByZXZpb3VzSW5kZXgpIHtcclxuICAgICAgICBpbmRleC5mb3JFYWNoKChpKSA9PiB7XHJcbiAgICAgICAgICBpZiAoaSA8PSAxMDAgJiYgaSA+PSAxKVxyXG4gICAgICAgICAgICB0aGlzLmJvYXJkLmNoaWxkcmVuW2kgLSAxXS5jbGFzc0xpc3QuYWRkKFwiYm9hcmQtdGlsZS1ob3ZlcmVkXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcHJldmlvdXNJbmRleC5mb3JFYWNoKChpKSA9PiB7XHJcbiAgICAgICAgaWYgKGkgPD0gMTAwICYmIGkgPj0gMSlcclxuICAgICAgICAgIHRoaXMuYm9hcmQuY2hpbGRyZW5baSAtIDFdLmNsYXNzTGlzdC5yZW1vdmUoXCJib2FyZC10aWxlLWhvdmVyZWRcIik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaW5kZXguZm9yRWFjaCgoaSkgPT4ge1xyXG4gICAgICAgIGlmIChpIDw9IDEwMCAmJiBpID49IDEpXHJcbiAgICAgICAgICB0aGlzLmJvYXJkLmNoaWxkcmVuW2kgLSAxXS5jbGFzc0xpc3QuYWRkKFwiYm9hcmQtdGlsZS1ob3ZlcmVkXCIpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMucGFyZW50Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIC8vIEdldCByZXF1aXJlZCBkYXRhIGFib3V0IHRoZSB3aGVyZSB0aGUgZHJhZyBlbGVtZW50IGRyb3BwZWQgYW5kIHRoZSBkcmFnZ2VkIGVsZW1lbnRcclxuICAgICAgY29uc3QgY29vcmRpbmF0ZXNEcm9wcGVkID0gZ2V0SW5kZXhBcnJheSgpO1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgbGVuZ3RoLFxyXG4gICAgICAgIGluZGV4QXNJZDogc2hpcElkLFxyXG4gICAgICAgIGRpcmVjdGlvbixcclxuICAgICAgfSA9IGdldERyYWdnZWRFbGVtZW50KCkgfHwge307XHJcblxyXG4gICAgICBpZiAoIWxlbmd0aCkgcmV0dXJuO1xyXG5cclxuICAgICAgLy8gSUYgZHJvcCBvdXRzaWRlIHRoZSBkcm9wem9uZSBvciBtYXAsIGRvbid0IHJlYWQgdGhlIHJlbWFpbmluZyBjb2RlIGFuZCByZW1tb3ZlIHByZXZpb3VzIGhvdmVyZWRcclxuICAgICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJib2FyZC10aWxlXCIpKSB7XHJcbiAgICAgICAgaWYgKGNvb3JkaW5hdGVzRHJvcHBlZCkge1xyXG4gICAgICAgICAgY29vcmRpbmF0ZXNEcm9wcGVkLmZvckVhY2goKGkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGkgPD0gMTAwICYmIGkgPj0gMSlcclxuICAgICAgICAgICAgICB0aGlzLmJvYXJkLmNoaWxkcmVuW2kgLSAxXS5jbGFzc0xpc3QucmVtb3ZlKFwiYm9hcmQtdGlsZS1ob3ZlcmVkXCIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gaWYgbGVuZ3RoIG9mIHRoZSBzaGlwIGFuZCByZWNlaXZlZCBjb29yZGludGVzIGxlbmd0aCBub3QgdGhlIHNhbWUgdGhlbiBkb24ndCBjb250aW51ZVxyXG4gICAgICBpZiAobGVuZ3RoICE9PSBjb29yZGluYXRlc0Ryb3BwZWQubGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKGNvb3JkaW5hdGVzRHJvcHBlZCkge1xyXG4gICAgICAgICAgY29vcmRpbmF0ZXNEcm9wcGVkLmZvckVhY2goKGkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGkgPD0gMTAwICYmIGkgPj0gMSlcclxuICAgICAgICAgICAgICB0aGlzLmJvYXJkLmNoaWxkcmVuW2kgLSAxXS5jbGFzc0xpc3QucmVtb3ZlKFwiYm9hcmQtdGlsZS1ob3ZlcmVkXCIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gSWYgZHJvcCBpbiBhbiBhcmVhIHdpdGggYW4gZXhpc3Rpbmcgc2hpcCBkb24ndCByZWFkIHRoZSByZW1haW5pbmcgY29kZSBhbmQgcmVtbW92ZSBwcmV2aW91cyBob3ZlcmVkXHJcbiAgICAgIGNvbnN0IGNvb3JkRWxUb0Ryb3AgPSBjb29yZGluYXRlc0Ryb3BwZWQubWFwKChpKSA9PlxyXG4gICAgICAgIHRoaXMuYm9hcmQuY2hpbGRyZW5baSAtIDFdLmNsYXNzTGlzdC5jb250YWlucyhcImRyb3Atc2hpcFwiKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgY29uc3QgaXNBbHJlYWR5Q29udGFpbnNTaGlwID0gY29vcmRFbFRvRHJvcC5pbmNsdWRlcyh0cnVlKTtcclxuXHJcbiAgICAgIGlmIChpc0FscmVhZHlDb250YWluc1NoaXApIHtcclxuICAgICAgICBpZiAoY29vcmRpbmF0ZXNEcm9wcGVkKSB7XHJcbiAgICAgICAgICBjb29yZGluYXRlc0Ryb3BwZWQuZm9yRWFjaCgoaSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaSA8PSAxMDAgJiYgaSA+PSAxKVxyXG4gICAgICAgICAgICAgIHRoaXMuYm9hcmQuY2hpbGRyZW5baSAtIDFdLmNsYXNzTGlzdC5yZW1vdmUoXCJib2FyZC10aWxlLWhvdmVyZWRcIik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBIYW5kbGUgRHJvcFxyXG4gICAgICAvLyBHZXQgU2hpcCBJZFxyXG4gICAgICBjb25zdCB7IGluZGV4QXNJZCB9ID0gZ2V0RHJhZ2dlZEVsZW1lbnQoKTtcclxuICAgICAgLy8gR2V0IHRoZSBkcmFnZ2VkIGVsZW1lbnQgdXNpbmcgc2hpcCBJZCBhbmQgbWFrZSBpdCBpbnZpc2libGUgb25lXHJcbiAgICAgIGNvbnN0IGRyYWdnZWRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RyYWctaWQ9XCIke2luZGV4QXNJZH1cImApO1xyXG5cclxuICAgICAgLy8gSWYgdmFsaWQgZHJvcHBlZFxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgIWNvb3JkaW5hdGVzRHJvcHBlZC5pbmNsdWRlcygxMDEpICYmXHJcbiAgICAgICAgIWNvb3JkaW5hdGVzRHJvcHBlZC5pbmNsdWRlcygwKVxyXG4gICAgICApIHtcclxuICAgICAgICBkcmFnZ2VkRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZHJhZ2dlZC1lbGVtZW50LWRyb3BwZWRcIik7XHJcblxyXG4gICAgICAgIGRyb3BIYW5kbGVyKGluZGV4QXNJZCwgY29vcmRpbmF0ZXNEcm9wcGVkLCBkaXJlY3Rpb24pO1xyXG5cclxuICAgICAgICAvLyBBZGQgdG8gaHRtbCBkZXRhaWxzIGFib3V0IHRoZSBzaGlwLCBzaGlwIGlkIGFuZCBkaXJlY3Rpb25cclxuICAgICAgICBjb29yZGluYXRlc0Ryb3BwZWQuZm9yRWFjaCgoaSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5ib2FyZC5jaGlsZHJlbltpIC0gMV0uY2xhc3NMaXN0LnJlbW92ZShcImJvYXJkLXRpbGUtaG92ZXJlZFwiKTtcclxuICAgICAgICAgIHRoaXMuYm9hcmQuY2hpbGRyZW5baSAtIDFdLmNsYXNzTGlzdC5hZGQoXCJkcm9wLXNoaXBcIik7XHJcbiAgICAgICAgICB0aGlzLmJvYXJkLmNoaWxkcmVuW2kgLSAxXS5zZXRBdHRyaWJ1dGUoXCJzaGlwLWlkXCIsIHNoaXBJZCk7XHJcbiAgICAgICAgICB0aGlzLmJvYXJkLmNoaWxkcmVuW2kgLSAxXS5zZXRBdHRyaWJ1dGUoXCJkaXJlY3Rpb25cIiwgZGlyZWN0aW9uKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2xlYXJEcmFnZ2VkRWxlbWVudEluZGV4KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29vcmRpbmF0ZXNEcm9wcGVkLmZvckVhY2goKGkpID0+IHtcclxuICAgICAgICAgIGlmIChpIDw9IDEwMCAmJiBpID49IDEpXHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmQuY2hpbGRyZW5baSAtIDFdLmNsYXNzTGlzdC5yZW1vdmUoXCJib2FyZC10aWxlLWhvdmVyZWRcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNsZWFyRHJhZ2dlZEVsZW1lbnRJbmRleCgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgU3RhcnRCb2FyZCgpO1xyXG4iLCJpbXBvcnQgYm9hcmRVaSBmcm9tIFwiLi4vbW9kZWwvdWkvYm9hcmRVaVwiO1xyXG5pbXBvcnQgd2F0ZXJEcm9wIGZyb20gXCIuLi9hc3NldHMvd2F0ZXItZHJpcC5tcDNcIjtcclxuaW1wb3J0IHNvbGRpZXJTY3JlYW0gZnJvbSBcIi4uL2Fzc2V0cy9zY3JlYW1pbmctc29sZGllci5tcDNcIjtcclxuXHJcbmNsYXNzIEdhbWVTY3JlZW4ge1xyXG4gIGNvbnN0cnVjdG9yKHBsYXllckJvYXJkKSB7XHJcbiAgICB0aGlzLnBsYXllckJvYXJkID0gcGxheWVyQm9hcmQ7XHJcbiAgICB0aGlzLndhdGVyRHJvcFNvdW5kID0gbmV3IEF1ZGlvKHdhdGVyRHJvcCk7XHJcbiAgICB0aGlzLnNvbGRpZXJTY3JlYW0gPSBuZXcgQXVkaW8oc29sZGllclNjcmVhbSk7XHJcbiAgfVxyXG5cclxuICBzdGFydFNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnQtc2NyZWVuXCIpO1xyXG4gIGdhbWVTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtc2NyZWVuXCIpO1xyXG5cclxuICByZW5kZXJHYW1lU2NyZWVuKHBsYXllciwgcGxheWVyTmF0dXJlKSB7XHJcbiAgICB0aGlzLnN0YXJ0U2NyZWVuLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcclxuXHJcbiAgICB0aGlzLmdhbWVTY3JlZW4uY2xhc3NMaXN0LnJlbW92ZShcImluYWN0aXZlXCIpO1xyXG5cclxuICAgIC8vIEludGlhbGl6ZSBVSVxyXG4gICAgdGhpcy5nYW1lU2NyZWVuLmFwcGVuZENoaWxkKGJvYXJkVWkocGxheWVyLmJvYXJkLmJvYXJkVGlsZXMsIHBsYXllck5hdHVyZSkpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyU2NyZWVuR2FtZUluaXRpYWxTdGF0dXMoKSB7XHJcbiAgICBjb25zdCBib2FyZEh1bWFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWNrLXNjcmVlbi1wbGF5ZXJcIik7XHJcbiAgICBjb25zdCBib2FyZENvbXB1dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWNrLXNjcmVlbi1jb21wdXRlclwiKTtcclxuICB9XHJcblxyXG4gIHdhaXRGb3JQbGF5ZXJDbGljayhoYW5kbGVyRnVuYywgdHVybikge1xyXG4gICAgY29uc3QgYm9hcmRDb21wdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFjay1zY3JlZW4tY29tcHV0ZXJcIik7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgY29uc3QgaGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGlsZSA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIuYm9hcmQtdGlsZVwiKTtcclxuICAgICAgICBpZiAoIXRpbGUgfHwgIXRoaXMuZ2FtZVNjcmVlbi5jb250YWlucyh0aWxlKSkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gTnVtYmVyKHRpbGUuZ2V0QXR0cmlidXRlKFwiaW5kZXgtaWRcIikpO1xyXG4gICAgICAgIGNvbnN0IG93bmVyID0gdGlsZS5nZXRBdHRyaWJ1dGUoXCJvd25lclwiKTtcclxuXHJcbiAgICAgICAgaWYgKG93bmVyID09PSBcImNvbXB1dGVyXCIgJiYgdHVybiA9PT0gXCJjb21wdXRlclwiKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBpZiAob3duZXIgPT09IFwicGxheWVyXCIgJiYgdHVybiA9PT0gXCJwbGF5ZXJcIikgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZXhwbG9kZVwiKSB8fFxyXG4gICAgICAgICAgdGlsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJtaXNzXCIpXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGhhbmRsZXJGdW5jKHsgaW5kZXgsIG93bmVyIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmdhbWVTY3JlZW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZXIpO1xyXG5cclxuICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICAvLyBib2FyZENvbXB1dGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVyKTtcclxuICAgICAgdGhpcy5nYW1lU2NyZWVuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVyKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgaGFuZGxlckNsaWNrR2FtZShoYW5kbGVyLCB0dXJuKSB7XHJcbiAgICBjb25zdCBib2FyZEh1bWFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWNrLXNjcmVlbi1wbGF5ZXJcIik7XHJcbiAgICBjb25zdCBib2FyZENvbXB1dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWNrLXNjcmVlbi1jb21wdXRlclwiKTtcclxuICAgIGJvYXJkSHVtYW4uY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xyXG4gICAgYm9hcmRDb21wdXRlci5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRcIik7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy53YWl0Rm9yUGxheWVyQ2xpY2soaGFuZGxlciwgdHVybik7XHJcblxyXG4gICAgaWYgKHJlc3VsdCA9PT0gdHJ1ZSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgaWYgKHR1cm4gPT09IFwicGxheWVyXCIpIHtcclxuICAgICAgYm9hcmRDb21wdXRlci5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgIGJvYXJkSHVtYW4uY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKHR1cm4gPT09IFwiY29tcHV0ZXJcIikge1xyXG4gICAgICBib2FyZENvbXB1dGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgYm9hcmRIdW1hbi5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXJEaXNhYmxlZEJvYXJkKHBsYXllcikge1xyXG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbcGxheWVyPVwiJHtwbGF5ZXJ9XCJdYCk7XHJcbiAgICBib2FyZC5jbGFzc0xpc3QudG9nZ2xlKFwiZGlzYWJsZWRcIik7XHJcbiAgfVxyXG5cclxuICBhZGRIYW5kbGVyQm9hcmRDbGlja2VkKGNsaWNrSGFuZGxlciwgc3Vua0hhbmRsZXIsIGdldFR1cm4pIHtcclxuICAgIGNvbnN0IGJvYXJkSHVtYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhY2stc2NyZWVuLXBsYXllclwiKTtcclxuICAgIGNvbnN0IGJvYXJkQ29tcHV0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhY2stc2NyZWVuLWNvbXB1dGVyXCIpO1xyXG5cclxuICAgIGNvbnN0IG9uQm9hcmRDbGljayA9IChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRpbGUgPSBlLnRhcmdldC5jbG9zZXN0KFwiLmJvYXJkLXRpbGVcIik7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gTnVtYmVyKHRpbGUuZ2V0QXR0cmlidXRlKFwiaW5kZXgtaWRcIikpO1xyXG4gICAgICBjb25zdCBvd25lciA9IHRpbGUuZ2V0QXR0cmlidXRlKFwib3duZXJcIik7XHJcblxyXG4gICAgICBpZiAoIXRpbGUgfHwgIXRoaXMuZ2FtZVNjcmVlbi5jb250YWlucyh0aWxlKSkgcmV0dXJuO1xyXG5cclxuICAgICAgaWYgKHRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZXhwbG9kZVwiKSB8fCB0aWxlLmNsYXNzTGlzdC5jb250YWlucyhcIm1pc3NcIikpXHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgY2xpY2tIYW5kbGVyKHsgaW5kZXgsIG93bmVyIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmdhbWVTY3JlZW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uQm9hcmRDbGljayk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVVaShpbmRleCwgb3duZXIsIHNoaXBJZCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIGBbaW5kZXgtaWQ9XCIke2luZGV4fVwiXVtvd25lcj1cIiR7b3duZXJ9XCJdYFxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoc2hpcElkKSB7XHJcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImV4cGxvZGVcIik7XHJcbiAgICAgIHRoaXMud2F0ZXJEcm9wU291bmQucGF1c2UoKTsgLy8gc3RvcCBpZiBpdOKAmXMgbWlkLXBsYXlcclxuICAgICAgdGhpcy53YXRlckRyb3BTb3VuZC5jdXJyZW50VGltZSA9IDA7IC8vIHJld2luZCB0byBzdGFydFxyXG4gICAgICB0aGlzLnNvbGRpZXJTY3JlYW0ucGF1c2UoKTsgLy8gc3RvcCBpZiBpdOKAmXMgbWlkLXBsYXlcclxuICAgICAgdGhpcy5zb2xkaWVyU2NyZWFtLmN1cnJlbnRUaW1lID0gMDsgLy8gcmV3aW5kIHRvIHN0YXJ0XHJcbiAgICAgIHRoaXMuc29sZGllclNjcmVhbVxyXG4gICAgICAgIC5wbGF5KCkgLy8gcGxheSBmcm9tIHplcm9cclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgLy8geW914oCZbGwgb2Z0ZW4gaGl0IGEgYnJvd3NlciBhdXRvcGxheSBwb2xpY3kgaGVyZVxyXG4gICAgICAgICAgY29uc29sZS53YXJuKFwiQ291bGRu4oCZdCBwbGF5IHNvdW5kOlwiLCBlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcclxuICAgICAgdGhpcy5zb2xkaWVyU2NyZWFtLnBhdXNlKCk7IC8vIHN0b3AgaWYgaXTigJlzIG1pZC1wbGF5XHJcbiAgICAgIHRoaXMuc29sZGllclNjcmVhbS5jdXJyZW50VGltZSA9IDA7IC8vIHJld2luZCB0byBzdGFydFxyXG4gICAgICB0aGlzLndhdGVyRHJvcFNvdW5kLnBhdXNlKCk7IC8vIHN0b3AgaWYgaXTigJlzIG1pZC1wbGF5XHJcbiAgICAgIHRoaXMud2F0ZXJEcm9wU291bmQuY3VycmVudFRpbWUgPSAwOyAvLyByZXdpbmQgdG8gc3RhcnRcclxuICAgICAgdGhpcy53YXRlckRyb3BTb3VuZFxyXG4gICAgICAgIC5wbGF5KCkgLy8gcGxheSBmcm9tIHplcm9cclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgLy8geW914oCZbGwgb2Z0ZW4gaGl0IGEgYnJvd3NlciBhdXRvcGxheSBwb2xpY3kgaGVyZVxyXG4gICAgICAgICAgY29uc29sZS53YXJuKFwiQ291bGRu4oCZdCBwbGF5IHNvdW5kOlwiLCBlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyU3Vuayhjb29yZGluYXRlcywgb3duZXIpIHtcclxuICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkKSA9PiB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIGBbaW5kZXgtaWQ9XCIke2Nvb3JkfVwiXVtvd25lcj1cIiR7b3duZXJ9XCJdYFxyXG4gICAgICApO1xyXG5cclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic3Vua1wiKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVzdGFydEdhbWUoKSB7XHJcbiAgICB0aGlzLnN0YXJ0U2NyZWVuLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKTtcclxuXHJcbiAgICB0aGlzLmdhbWVTY3JlZW4uaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIHRoaXMuZ2FtZVNjcmVlbi5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgR2FtZVNjcmVlbigpO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC9eYmxvYjovLCBcIlwiKS5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgY2FsY3VsYXRlUmFuZG9tSW5kZXggfSBmcm9tIFwiLi9oZWxwZXJzL2NhbGN1bGF0ZUNvbXB1dGVySW5kZXhcIjtcclxuaW1wb3J0IHsgY2FsY3VsYXRlTmV3Q29vcmRpbmF0ZXMgfSBmcm9tIFwiLi9oZWxwZXJzL2NhbGN1bGF0ZU5ld1NoaXBEaXJlY3Rpb25cIjtcclxuaW1wb3J0IHsgZGV0ZXJtaW5lU2hpcCB9IGZyb20gXCIuL2hlbHBlcnMvZGV0ZXJtaW5lU2hpcFwiO1xyXG5pbXBvcnQgQ29tcHV0ZXJBaSBmcm9tIFwiLi9tb2RlbC9sb2dpYy9jb21wdXRlci9jb21wdXRlckFpXCI7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vbW9kZWwvbG9naWMvcGxheWVyXCI7XHJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBzdGFydEJvYXJkIGZyb20gXCIuL3ZpZXcvU3RhcnRCb2FyZFwiO1xyXG5pbXBvcnQgZ2FtZVNjcmVlbiBmcm9tIFwiLi92aWV3L1N0YXJ0R2FtZVNjcmVlblwiO1xyXG5cclxubGV0IHBsYXllclNoaXBDb29yZGluYXRlcyA9IHt9OyAvLyBvYmplY3Qgb2Ygc2hpcHMgY29vcmRpbmF0ZXMsIGtleSBhcyBzaGlwIGlkLCBhbmRcclxuLy8gdmFsdWVzIGFzIGFuIG9iamVjdCBvZiBjb29yZGludGFlcyBhbmQgZGlyZWN0aW9uXHJcblxyXG5jb25zdCBjb21wdXRlckNvb3JkaW5hdGVzID0gY2FsY3VsYXRlUmFuZG9tSW5kZXgoKTtcclxuXHJcbmxldCBwbGF5ZXI7XHJcbmxldCBjb21wdXRlcjtcclxubGV0IGNvbXB1dGVyQ29udHJvbGxlciA9IG5ldyBDb21wdXRlckFpKCk7XHJcbmxldCBnYW1lU3RhcnQgPSBmYWxzZTtcclxubGV0IGdhbWVGaW5zaWhlZCA9IGZhbHNlO1xyXG5sZXQgdHVybiA9IFwicGxheWVyXCI7XHJcblxyXG5jb25zdCBjb250cm9sQ29vcmRpbmF0ZXNEcm9wID0gZnVuY3Rpb24gKHNoaXBJZCwgYXJyYXlDb29yZGluYXRlcywgZGlyZWN0aW9uKSB7XHJcbiAgcGxheWVyU2hpcENvb3JkaW5hdGVzW2Ake3NoaXBJZH1gXSA9IHtcclxuICAgIGNvb3JkaW5hdGVzOiBhcnJheUNvb3JkaW5hdGVzLFxyXG4gICAgZGlyZWN0aW9uLFxyXG4gICAgc2hpcElkLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBjb250cm9sU2hpcENoYW5nZURpcmVjaXRvbiA9IGZ1bmN0aW9uIChcclxuICBzaGlwSWQsXHJcbiAgcHJldkNvb3JkaW5hdGVzLFxyXG4gIG5ld0RpcmVjdGlvblxyXG4pIHtcclxuICBsZXQgbmV3Q29vcmRpbmF0ZXMgPSBjYWxjdWxhdGVOZXdDb29yZGluYXRlcyhuZXdEaXJlY3Rpb24sIHByZXZDb29yZGluYXRlcyk7XHJcblxyXG4gIGxldCBleGlzdGluZ1NoaXBDb29yZGluYXRlcyA9IE9iamVjdC52YWx1ZXMocGxheWVyU2hpcENvb3JkaW5hdGVzKVxyXG4gICAgLm1hcCgoZWwpID0+IGVsLmNvb3JkaW5hdGVzKVxyXG4gICAgLmZsYXQoKTtcclxuXHJcbiAgY29uc3QgY2hlY2tJZlNoaXBFeGlzdCA9IG5ld0Nvb3JkaW5hdGVzLm1hcCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAvLyBTa2lwIHRoZSBmaXJzdCBwYXJ0IGJlY2F1c2UgaXQgd2lsbCBiZSBhbHdheXMgdHJ1ZVxyXG5cclxuICAgIGlmIChpbmRleCAhPT0gMCkge1xyXG4gICAgICByZXR1cm4gZXhpc3RpbmdTaGlwQ29vcmRpbmF0ZXMuaW5jbHVkZXMoZWwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyBDaGVjayBpZiBuZXcgY29vcmRpbmF0ZXMgaGF2ZSBhIHNoaXAgYWxyZWFkeSBpbiBpdCBhbmRcclxuICAvLyBDaGVjayBpZiBuZXcgY29vcmRpbmF0ZXMgZXhjZWVkIHRoZSBpbmRleCBvZiB0aGUgZ2FtZSBib2FyZCBpZiBzbyByZXZlcnQgdG8gcHJldmlvdXMgc3RhdGVcclxuICAvLyBjb252ZXJ0IHByZXZDb29yZGludGF0ZXMgdG8gYW4gYXJyYXkgb2YgbnVtYmVycyBzbyB3ZSBjYW4gZG8gY2FsY3VsYXRpb25zIG9uIGJvYXJkIGluZGV4ZXNcclxuICBpZiAoXHJcbiAgICBjaGVja0lmU2hpcEV4aXN0LmluY2x1ZGVzKHRydWUpIHx8XHJcbiAgICBuZXdDb29yZGluYXRlcy5zb21lKChlbCkgPT4gZWwgPiAxMDApXHJcbiAgKSB7XHJcbiAgICBuZXdDb29yZGluYXRlcyA9IHByZXZDb29yZGluYXRlcy5tYXAoKGNvb3JkKSA9PiBOdW1iZXIoY29vcmQpKTtcclxuICAgIGxldCBwcmV2RGlyZWN0aW9uID0gbmV3RGlyZWN0aW9uID09PSBcInlcIiA/IFwieFwiIDogXCJ5XCI7XHJcbiAgICBzdGFydEJvYXJkLnJlbmRlclNoaXBOZXdEaXJlY3Rpb24oc2hpcElkLCBuZXdDb29yZGluYXRlcywgcHJldkRpcmVjdGlvbik7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBDb250bml1ZSByZW5kZXIgbmV3IGRpcmVjdGlvbiBhbmQgdXBkYXRlIGN1cnJlbnQgc2hpcCBjb29yZGluYXRlc1xyXG4gIHBsYXllclNoaXBDb29yZGluYXRlc1tgJHtzaGlwSWR9YF0gPSB7XHJcbiAgICBjb29yZGluYXRlczogbmV3Q29vcmRpbmF0ZXMsXHJcbiAgICBkaXJlY3Rpb246IG5ld0RpcmVjdGlvbixcclxuICB9O1xyXG5cclxuICBzdGFydEJvYXJkLnJlbmRlclNoaXBOZXdEaXJlY3Rpb24oc2hpcElkLCBuZXdDb29yZGluYXRlcywgbmV3RGlyZWN0aW9uKTtcclxufTtcclxuXHJcbmNvbnN0IGNvbnRyb2xSZXNldFBsYXllckJvYXJkID0gZnVuY3Rpb24gKCkge1xyXG4gIHN0YXJ0Qm9hcmQucmVuZGVyR2FtZUJvYXJkKCk7XHJcbiAgcGxheWVyU2hpcENvb3JkaW5hdGVzID0ge307XHJcbn07XHJcblxyXG4vLyBDb25maXJtIHNlbGVjdGlvbiBhbmQgcmVuZGVyIGFjdHVhbCBnYW1lIHNjcmVlblxyXG5jb25zdCBjb250cm9sQ29uZmlybVNlbGVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBzaGlwQ29vcmRpbmF0ZXMgPSBPYmplY3QudmFsdWVzKHBsYXllclNoaXBDb29yZGluYXRlcyk7XHJcblxyXG4gIGlmIChzaGlwQ29vcmRpbmF0ZXMubGVuZ3RoIDwgMTApIHtcclxuICAgIHN0YXJ0Qm9hcmQucmVuZGVySW52YWxpZENvbmZpcm0oKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIFJlbW92ZSBzdGFydFNjcmVlbkRpc3BsYXlzXHJcbiAgc3RhcnRCb2FyZC5yZW1vdmVJbml0aWFsQm9hcmQoKTtcclxuXHJcbiAgcGxheWVyID0gbmV3IFBsYXllcihwbGF5ZXJTaGlwQ29vcmRpbmF0ZXMsIFwicGxheWVyXCIpO1xyXG4gIGNvbXB1dGVyID0gbmV3IFBsYXllcihjb21wdXRlckNvb3JkaW5hdGVzLCBcImNvbXB1dGVyXCIpO1xyXG5cclxuICBnYW1lU2NyZWVuLnJlbmRlckdhbWVTY3JlZW4ocGxheWVyLCBcInBsYXllclwiKTtcclxuICBnYW1lU2NyZWVuLnJlbmRlckdhbWVTY3JlZW4oY29tcHV0ZXIsIFwiY29tcHV0ZXJcIik7XHJcblxyXG4gIGdhbWVTY3JlZW4ucmVuZGVyU2NyZWVuR2FtZUluaXRpYWxTdGF0dXMoKTtcclxuXHJcbiAgZ2FtZVN0YXJ0ID0gdHJ1ZTtcclxuICBnYW1lRmluc2loZWQgPSBmYWxzZTtcclxuXHJcbiAgc3RhcnRHYW1lKCk7XHJcbn07XHJcblxyXG5jb25zdCBjb250cm9sR2FtZVNjcmVlbkNsaWNrZWQgPSBhc3luYyBmdW5jdGlvbiAoZGF0YSkge1xyXG4gIC8vIG93bmVyIHdpbGwgYmUgdGhlIG93bmVyIG9mIHRoZSBnYW1lYm9hcmQgdGhhdCB3YXMgY2xpY2tlZFxyXG4gIC8vIGluZGV4IGlzIHdoZXJlIGluIHRoZSBncmlkIHRoZSB1c2VyIGNsaWNrZWRcclxuICBjb25zdCB7IGluZGV4LCBvd25lciB9ID0gZGF0YTtcclxuXHJcbiAgLy8gcGFzcyB0aGUgaW5zdGFuY2Ugb2YgdGhlIHBsYXllciBjbGFzcyBkZXBlbmRpbmcgb24gdGhlIG93bmVyIHZhbHVlXHJcbiAgY29uc3Qgb3duZXJDbGFzcyA9IG93bmVyID09PSBcInBsYXllclwiID8gcGxheWVyIDogY29tcHV0ZXI7XHJcblxyXG4gIGxldCBhdHRhY2tSZXN1bHQ7XHJcblxyXG4gIC8vIFRvIGNvbnZlcnQgdG8gdGhlIGFjdHVhbCBpbmRleCBvZiB0aGUgaHRtbCBub2RlXHJcbiAgYXR0YWNrUmVzdWx0ID0gb3duZXJDbGFzcy5ib2FyZC5yZWNlaXZlQXR0YWNrKGluZGV4IC0gMSk7XHJcblxyXG4gIC8vIFdoZW4gcGxheWVyIGF0dGFja3MgdG8gYm9hcmQgb3duZWQgYnkgY29tcHV0ZXJcclxuICBpZiAoYXR0YWNrUmVzdWx0ID09PSBcImhpdFwiICYmIG93bmVyID09PSBcImNvbXB1dGVyXCIpIHtcclxuICAgIHR1cm4gPSBcInBsYXllclwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0dXJuID0gXCJjb21wdXRlclwiO1xyXG4gIH1cclxuXHJcbiAgLy8gV2hlbiBjb21wdXRlciBhdHRhY2tzIHRvIGJvYXJkIG93bmVkIGJ5IHBsYXllclxyXG4gIGlmIChhdHRhY2tSZXN1bHQgPT09IFwiaGl0XCIgJiYgb3duZXIgPT09IFwicGxheWVyXCIpIHtcclxuICAgIHR1cm4gPSBcImNvbXB1dGVyXCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIHR1cm4gPSBcInBsYXllclwiO1xyXG4gIH1cclxuXHJcbiAgLy8gaW5kZXggLSAxLCBkZXRlcm1pbmVTaGlwIGNoZWNrcyBodG1sIGluZGV4ZXMgZnJvbSAwLTk5LCBzbyBJIG5lZWQgdG8gZGVkdWN0IDEgZnJvbSBteSBpbmRleFxyXG4gIC8vIGJlY2F1c2UgbXkgaW5kZXhlcyBpcyAxLTEwMFxyXG4gIC8vIGRldGVybWluZVNoaXAgd2lsbCBlaXRoZXIgcmV0dXJuIHRoZSBzaGlwSWQgb3IgdW5kZWZpbmVkXHJcbiAgY29uc3Qgc2hpcElkID0gZGV0ZXJtaW5lU2hpcChpbmRleCAtIDEsIG93bmVyQ2xhc3Muc2hpcENvb3JkaW5hdGVzKTtcclxuXHJcbiAgLy8gaWYgc2hpcElkIG5vdCB1bmRlZmluZWQgdGhlbiB0ZWxsIGdhbWVTY3JlZW4gdG8gdXBkYXRlVUlcclxuICBnYW1lU2NyZWVuLnVwZGF0ZVVpKGluZGV4LCBvd25lciwgc2hpcElkKTtcclxuXHJcbiAgLy8gQ2hlY2sgaWYgYW55IHNoaXAgc3VuayBwZXIgc2hpcCBoaXRcclxuICBpZiAoc2hpcElkKSB7XHJcbiAgICBjb250cm9sU3VuayhzaGlwSWQsIG93bmVyQ2xhc3MsIG93bmVyKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBhdHRhY2tSZXN1bHQgPT09IFwiaGl0XCIgPyB0cnVlIDogZmFsc2U7XHJcbn07XHJcblxyXG5jb25zdCBjb250cm9sU3VuayA9IGZ1bmN0aW9uIChzaGlwSWQsIG93bmVyQ2xhc3MsIG93bmVyKSB7XHJcbiAgLy8gT3duZXIgd2lsbCBiZSBlaXRoZXIgdGhlIGNvbXB1dGVyIG9yIHBsYXllciBpbnN0YW5jZSBvZiB0aGUgcGxheWVyIGNsYXNzXHJcbiAgY29uc3QgYm9hcmRJbmRleGVzVG9VcGRhdGUgPSBvd25lckNsYXNzLnNoaXBDb29yZGluYXRlc1tzaGlwSWRdLmNvb3JkaW5hdGVzO1xyXG5cclxuICBpZiAob3duZXJDbGFzcy5zaGlwc1tzaGlwSWRdLmlzU3VuaygpKSB7XHJcbiAgICBnYW1lU2NyZWVuLnJlbmRlclN1bmsoYm9hcmRJbmRleGVzVG9VcGRhdGUsIG93bmVyKTtcclxuICB9XHJcbiAgLy8gV2FpdCBmb3IgMTAwIGZvciB1aSB0byB1cGRhdGUgYmVmb3JlIHJ1bm5pbmcgdGhlIGNvZGUgYmVsb3dcclxuICBpZiAob3duZXJDbGFzcy5ib2FyZC5pc0FsbFNoaXBTdW5rKCkpIHtcclxuICAgIGdhbWVGaW5zaWhlZCA9IHRydWU7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmIChvd25lckNsYXNzLmJvYXJkLmlzQWxsU2hpcFN1bmsoKSkge1xyXG4gICAgICAgIGFsZXJ0KFwiQWxsIHNoaXAgc3Vua1wiKTtcclxuICAgICAgICBnYW1lU2NyZWVuLnJlc3RhcnRHYW1lKCk7XHJcbiAgICAgICAgY29udHJvbFJlc2V0UGxheWVyQm9hcmQoKTtcclxuICAgICAgICBwbGF5ZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgY29tcHV0ZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuICAgIH0sIDEwMCk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgcmFuZG9taXplUGxheWVySW5kZXggPSBmdW5jdGlvbiAoKSB7XHJcbiAgcGxheWVyU2hpcENvb3JkaW5hdGVzID0gY2FsY3VsYXRlUmFuZG9tSW5kZXgoKTtcclxuICBjb25zdCB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKHBsYXllclNoaXBDb29yZGluYXRlcyk7XHJcbiAgY29uc3QgY29vcmRpbmF0ZXMgPSB2YWx1ZXMubWFwKCh2KSA9PiB2LmNvb3JkaW5hdGVzKS5mbGF0KCk7XHJcbiAgc3RhcnRCb2FyZC5yZW5kZXJSYW5kb21pemVQbGF5ZXJDb29yZGluYXRlcyhjb29yZGluYXRlcyk7XHJcbn07XHJcblxyXG5jb25zdCBzdGFydEdhbWUgPSBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgd2hpbGUgKCFnYW1lRmluc2loZWQpIHtcclxuICAgIGNvbnNvbGUubG9nKGdhbWVGaW5zaWhlZCk7XHJcbiAgICBpZiAodHVybiA9PT0gXCJwbGF5ZXJcIikge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnYW1lU2NyZWVuLmhhbmRsZXJDbGlja0dhbWUoXHJcbiAgICAgICAgY29udHJvbEdhbWVTY3JlZW5DbGlja2VkLFxyXG4gICAgICAgIHR1cm5cclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcclxuICAgICAgICB0dXJuID0gXCJwbGF5ZXJcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0dXJuID0gXCJjb21wdXRlclwiO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb21wdXRlckNvbnRyb2xsZXIucGlja01vdmUoKTtcclxuICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgcGxheWVyLmJvYXJkLnJlY2VpdmVBdHRhY2socmVzdWx0IC0gMSk7XHJcblxyXG4gICAgICBjb25zdCBoYXNIaXRTaGlwID0gT2JqZWN0LmtleXMoY29tcHV0ZXJDb250cm9sbGVyLmZvY3VzTW92ZSkubGVuZ3RoID49IDE7XHJcblxyXG4gICAgICBjb25zdCBzaGlwSWQgPSBkZXRlcm1pbmVTaGlwKHJlc3VsdCAtIDEsIHBsYXllci5zaGlwQ29vcmRpbmF0ZXMpO1xyXG5cclxuICAgICAgaWYgKHNoaXBJZCkge1xyXG4gICAgICAgIC8vIENoZWNrIGlmIGl0IGFscmVhZHkgc3Vua1xyXG4gICAgICAgIGNvbXB1dGVyQ29udHJvbGxlci5oaXRBU2hpcChyZXN1bHQsIHNoaXBJZCk7XHJcbiAgICAgICAgY29tcHV0ZXJDb250cm9sbGVyLnVwZGF0ZVByZXZpb3VzTW92ZVJlc3VsdChcImhpdFwiKTtcclxuXHJcbiAgICAgICAgLy8gSWYgc3Vua1xyXG4gICAgICAgIC8vIEZpcnN0IHJlbW92ZSBhbGwgdGhlIGZvY3VzIG1vdmUgb2YgdGhlIHByZXZpb3VzIHNoaXAgd2hvIGlzIHN1bmtcclxuICAgICAgICAvLyBJZiB0aGVyZSdzIGFub3RoZXIgc2hpcCB0aGF0IHdhcyBoaXQgYmVmb3JlIHRoZSBmaXJzdCBzaGlwIHRoYXQgd2FzIHN1bmtcclxuICAgICAgICAvLyBXZSB3aWxsIG1ha2UgdGhhdCBzaGlwIHRoZSBuZXcgZm9jdXMgbW92ZVxyXG4gICAgICAgIC8vIFNvIHRoYXQgdGhlIEFJIHdpbGwgZm9jdXMgb24gdGhlIG1vdmVzIGFyb3VuZCB0aGF0IHNoaXAgdGhhdCB3YXMgaGl0XHJcbiAgICAgICAgaWYgKHBsYXllci5zaGlwc1tzaGlwSWRdLmlzU3VuaygpKSB7XHJcbiAgICAgICAgICAvLyBVcGRhdGUgdGhlIFVJXHJcbiAgICAgICAgICBjb250cm9sU3VuayhzaGlwSWQsIHBsYXllciwgXCJwbGF5ZXJcIik7XHJcbiAgICAgICAgICBjb21wdXRlckNvbnRyb2xsZXIuZm9jdXNNb3ZlID0ge307XHJcbiAgICAgICAgICBjb21wdXRlckNvbnRyb2xsZXIubmV4dFNoaXBIaXQoc2hpcElkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHVybiA9PT0gXCJjb21wdXRlclwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChoYXNIaXRTaGlwKSB7XHJcbiAgICAgICAgICAvLyBNb2RpZnkgZm9jdXMgbW92ZXMgaWYgY3VycmVudGx5IHdlIGhpdCBhIHNoaXBcclxuICAgICAgICAgIGNvbXB1dGVyQ29udHJvbGxlci51cGRhdGVQcmV2aW91c01vdmVSZXN1bHQoXCJtaXNzZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDaGFuZ2UgdGhlIHR1cm4gdG8gcGxheWVyIGlmIHdlIGNvbXB1dGVyIGRpZG4ndCBoaXQgYSBzaGlwXHJcbiAgICAgICAgdHVybiA9IFwicGxheWVyXCI7XHJcbiAgICAgIH1cclxuICAgICAgZ2FtZVNjcmVlbi51cGRhdGVVaShyZXN1bHQsIFwicGxheWVyXCIsIHNoaXBJZCk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuLy9cclxuY29uc3QgaW5pdCA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICBzdGFydEJvYXJkLnJlbmRlckdhbWVCb2FyZCgpO1xyXG5cclxuICBzdGFydEJvYXJkLmFkZEhhbmRsZXJDaGVja0Nvb3JkaW5hdGVzKGNvbnRyb2xDb29yZGluYXRlc0Ryb3ApO1xyXG4gIHN0YXJ0Qm9hcmQuYWRkSGFuZGxlckJvYXJkQ2xpY2tlZChjb250cm9sU2hpcENoYW5nZURpcmVjaXRvbik7XHJcbiAgc3RhcnRCb2FyZC5hZGRIYW5kbGVyUmVzZXRQbGF5ZXJCb2FyZChjb250cm9sUmVzZXRQbGF5ZXJCb2FyZCk7XHJcbiAgc3RhcnRCb2FyZC5hZGRIYW5kbGVyUmFuZG9tUGxheWVyQm9hcmQocmFuZG9taXplUGxheWVySW5kZXgpO1xyXG4gIHN0YXJ0Qm9hcmQuYWRkSGFuZGxlckNvbmZpcm1Db29yZGluYXRlcyhjb250cm9sQ29uZmlybVNlbGVjdGlvbik7XHJcbn07XHJcblxyXG5pbml0KCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==