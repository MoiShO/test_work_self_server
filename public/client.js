/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"client": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./ssr/client.js","vendors~client"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/commonjs/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/index.js");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_components_switchingLanguage_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/components/switchingLanguage/index */ "./src/js/components/switchingLanguage/index.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Home */ "./src/Home.js");
/* harmony import */ var _Details__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Details */ "./src/Details.js");









var App = function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "col-sm-1 home offset-sm-1 link_homepage",
    to: "/"
  }, i18next__WEBPACK_IMPORTED_MODULE_3___default.a.t('nav-home') !== 'nav-home' ? i18next__WEBPACK_IMPORTED_MODULE_3___default.a.t('nav-home') : 'HOME'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_js_components_switchingLanguage_index__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/",
    component: _Home__WEBPACK_IMPORTED_MODULE_6__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/:id",
    component: _Details__WEBPACK_IMPORTED_MODULE_7__["default"]
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["withTranslation"])()(App));

/***/ }),

/***/ "./src/Details.js":
/*!************************!*\
  !*** ./src/Details.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_components_showDetails_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/components/showDetails/index */ "./src/js/components/showDetails/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var match = _ref.match;
  var id = match.params.id;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-5 offset-sm-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_js_components_showDetails_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: id
  }));
});

/***/ }),

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_components_form_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/components/form/index */ "./src/js/components/form/index.js");
/* harmony import */ var _js_components_list_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/components/list/index */ "./src/js/components/list/index.js");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/index.js");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(i18next__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row col-sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "home_page col-sm-5 offset-sm-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "home_page article_list"
  }, i18next__WEBPACK_IMPORTED_MODULE_3___default.a.t('notes')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_js_components_list_index__WEBPACK_IMPORTED_MODULE_2__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-5 offset-sm-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "home_page article_add"
  }, i18next__WEBPACK_IMPORTED_MODULE_3___default.a.t('title-main')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_js_components_form_index__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
});

/***/ }),

/***/ "./src/js/components/alert/Alert.jsx":
/*!*******************************************!*\
  !*** ./src/js/components/alert/Alert.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Alert = function Alert(data) {
  var message = data.message;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, message ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "form alert_message"
  }, message) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (Alert);

/***/ }),

/***/ "./src/js/components/alert/alert-style.css":
/*!*************************************************!*\
  !*** ./src/js/components/alert/alert-style.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/js/components/alert/index.js":
/*!******************************************!*\
  !*** ./src/js/components/alert/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Alert */ "./src/js/components/alert/Alert.jsx");
/* harmony import */ var _alert_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert-style.css */ "./src/js/components/alert/alert-style.css");
/* harmony import */ var _alert_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_alert_style_css__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (_Alert__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/js/components/buttonDetails/ButtonDeatails.jsx":
/*!************************************************************!*\
  !*** ./src/js/components/buttonDetails/ButtonDeatails.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/index.js");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(i18next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _changeForm_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../changeForm/index */ "./src/js/components/changeForm/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store */ "./src/js/store/index.js");





var _dec, _class, _temp;







var ButtonDetails = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["inject"])('delButtonStore', 'changeFormStore', 'listStore', 'routing'), _dec(_class = (_temp =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3___default()(ButtonDetails, _Component);

  function ButtonDetails(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      showForm: false
    };
    _this.handleDel = _this.handleDel.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.handleChange = _this.handleChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    return _this;
  }

  var _proto = ButtonDetails.prototype;

  _proto.handleDel =
  /*#__PURE__*/
  function () {
    var _handleDel = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _this$props, id, delButtonStore, listStore;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$props = this.props, id = _this$props.id, delButtonStore = _this$props.delButtonStore, listStore = _this$props.listStore;
              this.routeChange();
              _context.next = 4;
              return delButtonStore.delArticle({
                id: id
              });

            case 4:
              listStore.delListNote({
                id: id
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function handleDel() {
      return _handleDel.apply(this, arguments);
    }

    return handleDel;
  }();

  _proto.routeChange = function routeChange() {
    var routing = this.props.routing;
    var path = '/';
    return routing.history.push(path);
  };

  _proto.handleChange = function handleChange() {
    var showForm = this.state.showForm;
    this.setState({
      showForm: !showForm
    });
  };

  _proto.render = function render() {
    var showForm = this.state.showForm;
    var id = this.props.id;
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "detail col-sm-12"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
      type: "button",
      className: "detail btn_delete btn btn-success btn-sm",
      onClick: this.handleDel
    }, i18next__WEBPACK_IMPORTED_MODULE_5___default.a.t('btn-delete')), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
      type: "button",
      className: "detail btn_change btn btn-success btn-sm",
      onClick: this.handleChange
    }, i18next__WEBPACK_IMPORTED_MODULE_5___default.a.t('btn-change')), showForm ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_changeForm_index__WEBPACK_IMPORTED_MODULE_8__["default"], {
      updateShowForm: this.handleChange,
      id: id
    }) : null);
  };

  return ButtonDetails;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]), _temp)) || _class);
ButtonDetails.defaultProps = {
  id: '',
  delButtonStore: _store__WEBPACK_IMPORTED_MODULE_9__["default"].delButtonStore
};
ButtonDetails.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string]),
  routing: mobx_react__WEBPACK_IMPORTED_MODULE_6__["PropTypes"].objectOrObservableObject,
  delButtonStore: mobx_react__WEBPACK_IMPORTED_MODULE_6__["PropTypes"].objectOrObservableObject,
  listStore: mobx_react__WEBPACK_IMPORTED_MODULE_6__["PropTypes"].objectOrObservableObject
};
/* harmony default export */ __webpack_exports__["default"] = (ButtonDetails);

/***/ }),

/***/ "./src/js/components/buttonDetails/index.js":
/*!**************************************************!*\
  !*** ./src/js/components/buttonDetails/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ButtonDeatails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ButtonDeatails */ "./src/js/components/buttonDetails/ButtonDeatails.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_ButtonDeatails__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/js/components/changeForm/ChangeForm.jsx":
/*!*****************************************************!*\
  !*** ./src/js/components/changeForm/ChangeForm.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/index.js");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(i18next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _alert_Alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../alert/Alert */ "./src/js/components/alert/Alert.jsx");





var _dec, _class;

/* eslint-disable jsx-a11y/label-has-for */





var ConnectedChangeForm = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["inject"])('listStore', 'changeFormStore', 'routing'), _dec(_class =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3___default()(ConnectedChangeForm, _Component);

  function ConnectedChangeForm() {
    var _this;

    _this = _Component.call(this) || this;
    _this.state = {
      title: '',
      message: false
    };
    _this.handleChange = _this.handleChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    return _this;
  }

  var _proto = ConnectedChangeForm.prototype;

  _proto.handleChange = function handleChange(event) {
    var _this$setState;

    this.setState((_this$setState = {}, _this$setState[event.target.id] = event.target.value, _this$setState));
  };

  _proto.handleSubmit =
  /*#__PURE__*/
  function () {
    var _handleSubmit = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
      var _this$props, id, changeFormStore, listStore, updateShowForm, routing, title;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              _this$props = this.props, id = _this$props.id, changeFormStore = _this$props.changeFormStore, listStore = _this$props.listStore, updateShowForm = _this$props.updateShowForm, routing = _this$props.routing;
              title = this.state.title;

              if (!title) {
                _context.next = 11;
                break;
              }

              updateShowForm();
              _context.next = 7;
              return changeFormStore.changeArticle({
                title: title,
                id: id
              });

            case 7:
              listStore.setListCheck(changeFormStore.changeList);
              listStore.changeNote({
                title: title,
                id: id
              });
              _context.next = 12;
              break;

            case 11:
              this.setState({
                message: true
              });

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function handleSubmit(_x) {
      return _handleSubmit.apply(this, arguments);
    }

    return handleSubmit;
  }();

  _proto.render = function render() {
    var _this$state = this.state,
        title = _this$state.title,
        message = _this$state.message;
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("form", {
      onSubmit: this.handleSubmit
    }, message ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_alert_Alert__WEBPACK_IMPORTED_MODULE_8__["default"], {
      message: i18next__WEBPACK_IMPORTED_MODULE_5___default.a.t('alert')
    }) : null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
      htmlFor: "title"
    }, i18next__WEBPACK_IMPORTED_MODULE_5___default.a.t('title')), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
      type: "text",
      className: "form-control",
      id: "title",
      value: title,
      onChange: this.handleChange
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
      type: "submit",
      className: "btn btn-success btn-sm"
    }, i18next__WEBPACK_IMPORTED_MODULE_5___default.a.t('btn-change')));
  };

  return ConnectedChangeForm;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"])) || _class);
ConnectedChangeForm.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string]),
  changeFormStore: mobx_react__WEBPACK_IMPORTED_MODULE_6__["PropTypes"].objectOrObservableObject,
  listStore: mobx_react__WEBPACK_IMPORTED_MODULE_6__["PropTypes"].objectOrObservableObject,
  updateShowForm: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (ConnectedChangeForm);

/***/ }),

/***/ "./src/js/components/changeForm/change-form.css":
/*!******************************************************!*\
  !*** ./src/js/components/changeForm/change-form.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/js/components/changeForm/index.js":
/*!***********************************************!*\
  !*** ./src/js/components/changeForm/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/commonjs/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ChangeForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChangeForm */ "./src/js/components/changeForm/ChangeForm.jsx");
/* harmony import */ var _change_form_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change-form.css */ "./src/js/components/changeForm/change-form.css");
/* harmony import */ var _change_form_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_change_form_css__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (Object(react_i18next__WEBPACK_IMPORTED_MODULE_0__["withTranslation"])()(_ChangeForm__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/js/components/delButton/DelButton.jsx":
/*!***************************************************!*\
  !*** ./src/js/components/delButton/DelButton.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/index.js");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(i18next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _changeForm_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../changeForm/index */ "./src/js/components/changeForm/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store */ "./src/js/store/index.js");





var _dec, _class;







var DelButton = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["inject"])('listStore', 'delButtonStore', 'routing'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3___default()(DelButton, _Component);

  function DelButton(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      showForm: false
    };
    _this.handleDel = _this.handleDel.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.routeChange = _this.routeChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.handleShowForm = _this.handleShowForm.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    return _this;
  }

  var _proto = DelButton.prototype;

  _proto.handleDel =
  /*#__PURE__*/
  function () {
    var _handleDel = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _this$props, id, delButtonStore, listStore;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$props = this.props, id = _this$props.id, delButtonStore = _this$props.delButtonStore, listStore = _this$props.listStore;
              _context.next = 3;
              return delButtonStore.delArticle({
                id: id
              });

            case 3:
              listStore.delListNote({
                id: id
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function handleDel() {
      return _handleDel.apply(this, arguments);
    }

    return handleDel;
  }();

  _proto.handleShowForm = function handleShowForm() {
    var showForm = this.state.showForm;
    this.setState({
      showForm: !showForm
    });
  };

  _proto.routeChange =
  /*#__PURE__*/
  function () {
    var _routeChange = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var _this$props2, id, routing, listStore, path;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this$props2 = this.props, id = _this$props2.id, routing = _this$props2.routing, listStore = _this$props2.listStore;
              path = "" + id;
              _context2.next = 4;
              return listStore.getNoteById({
                id: id
              });

            case 4:
              return _context2.abrupt("return", routing.history.push(path));

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function routeChange() {
      return _routeChange.apply(this, arguments);
    }

    return routeChange;
  }();

  _proto.render = function render() {
    var showForm = this.state.showForm;
    var id = this.props.id;
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "note btn_all_change col-sm-12"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
      type: "button",
      className: "note btn_delete btn btn-success btn-sm",
      onClick: this.handleDel
    }, i18next__WEBPACK_IMPORTED_MODULE_5___default.a.t('btn-delete')), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
      type: "button",
      className: "note btn_show_detail btn btn-success btn-sm",
      onClick: this.routeChange
    }, i18next__WEBPACK_IMPORTED_MODULE_5___default.a.t('btn-show-detail')), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
      type: "button",
      className: "note btn_change btn btn-success btn-sm",
      onClick: this.handleShowForm
    }, i18next__WEBPACK_IMPORTED_MODULE_5___default.a.t('btn-change')), showForm ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_changeForm_index__WEBPACK_IMPORTED_MODULE_8__["default"], {
      id: id,
      updateShowForm: this.handleShowForm
    }) : null);
  };

  return DelButton;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"])) || _class) || _class);
DelButton.defaultProps = {
  id: '',
  delButtonStore: _store__WEBPACK_IMPORTED_MODULE_9__["default"].delButtonStore
};
DelButton.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string]),
  delButtonStore: mobx_react__WEBPACK_IMPORTED_MODULE_6__["PropTypes"].objectOrObservableObject,
  listStore: mobx_react__WEBPACK_IMPORTED_MODULE_6__["PropTypes"].objectOrObservableObject,
  routing: mobx_react__WEBPACK_IMPORTED_MODULE_6__["PropTypes"].objectOrObservableObject
};
/* harmony default export */ __webpack_exports__["default"] = (DelButton);

/***/ }),

/***/ "./src/js/components/delButton/del-button-style.css":
/*!**********************************************************!*\
  !*** ./src/js/components/delButton/del-button-style.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/js/components/delButton/index.js":
/*!**********************************************!*\
  !*** ./src/js/components/delButton/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/commonjs/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DelButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DelButton */ "./src/js/components/delButton/DelButton.jsx");
/* harmony import */ var _del_button_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./del-button-style.css */ "./src/js/components/delButton/del-button-style.css");
/* harmony import */ var _del_button_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_del_button_style_css__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (Object(react_i18next__WEBPACK_IMPORTED_MODULE_0__["withTranslation"])()(_DelButton__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/js/components/form/Form.jsx":
/*!*****************************************!*\
  !*** ./src/js/components/form/Form.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/index.js");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(i18next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _alert_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../alert/index */ "./src/js/components/alert/index.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/index */ "./src/js/store/index.js");





var _dec, _class;

/* eslint-disable jsx-a11y/label-has-for */





var ConnectedForm = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["inject"])('formStore', 'listStore'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3___default()(ConnectedForm, _Component);

  function ConnectedForm(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      title: '',
      message: false
    };
    _this.handleChange = _this.handleChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    return _this;
  }

  var _proto = ConnectedForm.prototype;

  _proto.handleChange = function handleChange(event) {
    var title = event.target.value;
    this.setState({
      title: title
    });
  };

  _proto.handleSubmit =
  /*#__PURE__*/
  function () {
    var _handleSubmit = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
      var _this$props, formStore, listStore, title;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              _this$props = this.props, formStore = _this$props.formStore, listStore = _this$props.listStore;
              title = this.state.title;

              if (!title) {
                _context.next = 11;
                break;
              }

              this.setState({
                message: false
              });
              this.setState({
                title: ''
              });
              _context.next = 8;
              return formStore.addArticle({
                title: title
              });

            case 8:
              listStore.addListNewNote(formStore.newList);
              _context.next = 12;
              break;

            case 11:
              this.setState({
                message: true
              });

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function handleSubmit(_x) {
      return _handleSubmit.apply(this, arguments);
    }

    return handleSubmit;
  }();

  _proto.render = function render() {
    var _this$state = this.state,
        title = _this$state.title,
        message = _this$state.message;
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("form", {
      className: "form",
      onSubmit: this.handleSubmit
    }, message ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_alert_index__WEBPACK_IMPORTED_MODULE_7__["default"], {
      message: i18next__WEBPACK_IMPORTED_MODULE_5___default.a.t('alert')
    }) : null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "form form_input form-group"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
      htmlFor: "title"
    }, i18next__WEBPACK_IMPORTED_MODULE_5___default.a.t('title')), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
      type: "text",
      className: "form-control",
      id: "title",
      value: title,
      onChange: this.handleChange
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
      type: "submit",
      className: "form btn_create btn btn-success btn-sl"
    }, i18next__WEBPACK_IMPORTED_MODULE_5___default.a.t('btn-create')));
  };

  return ConnectedForm;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"])) || _class) || _class);
ConnectedForm.propTypes = {
  formStore: mobx_react__WEBPACK_IMPORTED_MODULE_6__["PropTypes"].objectOrObservableObject,
  listStore: mobx_react__WEBPACK_IMPORTED_MODULE_6__["PropTypes"].objectOrObservableObject
};
/* harmony default export */ __webpack_exports__["default"] = (ConnectedForm);

/***/ }),

/***/ "./src/js/components/form/form-style.css":
/*!***********************************************!*\
  !*** ./src/js/components/form/form-style.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/js/components/form/index.js":
/*!*****************************************!*\
  !*** ./src/js/components/form/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/commonjs/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _form_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-style.css */ "./src/js/components/form/form-style.css");
/* harmony import */ var _form_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_form_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Form */ "./src/js/components/form/Form.jsx");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_i18next__WEBPACK_IMPORTED_MODULE_0__["withTranslation"])()(_Form__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./src/js/components/languages/i18n.js":
/*!*********************************************!*\
  !*** ./src/js/components/languages/i18n.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/index.js");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(i18next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/commonjs/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);

 // the translations
// (tip move them in a JSON file and import them)

var resources = {
  en: {
    translation: {
      'create': 'CREATE'
    }
  }
};
i18next__WEBPACK_IMPORTED_MODULE_0___default.a.use(react_i18next__WEBPACK_IMPORTED_MODULE_1__["initReactI18next"]) // passes i18n down to react-i18next
.init({
  resources: resources,
  lng: 'en',
  keySeparator: false,
  // we do not use keys in form messages.welcome
  interpolation: {
    escapeValue: false // react already safes from xss

  }
});
/* harmony default export */ __webpack_exports__["default"] = (i18next__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./src/js/components/list/List.jsx":
/*!*****************************************!*\
  !*** ./src/js/components/list/List.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/index.js");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _delButton_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../delButton/index */ "./src/js/components/delButton/index.js");


var _dec, _class, _temp;

/* eslint-disable react/jsx-one-expression-per-line */




var Preloder = "/public/1fe1a3d9bdc5b2d6988fdd11a4c10690.gif";
var ItemList = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["inject"])('listStore', 'formStore', 'delButtonStore', 'changeFormStore'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["observer"])(_class = (_temp =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(ItemList, _React$Component);

  function ItemList() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      how_many: 10
    };

    _this.HowMay = function (event) {
      _this.setState({
        how_many: event.target.value
      });
    };

    _this.randomData = function () {
      var listStore = _this.props.listStore;
      var how_many = _this.state.how_many;
      listStore.randomNotes({
        num: how_many
      });
    };

    return _this;
  }

  var _proto = ItemList.prototype;

  _proto.defaultClass = function defaultClass(data) {
    if (!data.id) {
      return "notes_list note " + data;
    } else {
      return "notes_list " + data.addClass + " note " + data.id;
    }
  };

  _proto.updateClass = function updateClass(value) {
    this.defaultClass(value);
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        listStore = _this$props.listStore,
        formStore = _this$props.formStore,
        delButtonStore = _this$props.delButtonStore,
        changeFormStore = _this$props.changeFormStore;

    if (listStore.arcticleHasErrored) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "error"
      }, "Sorry! There was an error loading the items, try later please.");
    }

    if (listStore.arcticleIsLoading) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: Preloder,
        alt: "loading..."
      });
    }

    var title = function title(item) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Number(item.id) === (Number(delButtonStore.noteIsDeleted.id) || Number(changeFormStore.change.id)) ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: Preloder,
        alt: "loading..."
      }) : item.title);
    };

    var button = function button(item) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Number(item.id) === Number(delButtonStore.noteIsDeleted.id) ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
        className: "notes_list separator"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_delButton_index__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: item.title,
        id: item.id
      })));
    };

    var randomaizer = function randomaizer() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "data"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, i18next__WEBPACK_IMPORTED_MODULE_3___default.a.t('list_empty')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        type: "button",
        className: "note btn_show_detail btn btn-success btn-sm",
        onClick: _this2.randomData
      }, "O_O"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "text",
        className: "form-control input_inline",
        placeholder: " How much",
        onChange: _this2.HowMay
      }));
    };

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "notes_list"
    }, Array.from(listStore.list).length > 0 ? listStore.list.map(function (item) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        key: item.id,
        className: "notes_list note"
      }, title(item), button(item));
    }) : randomaizer(), formStore.arcticleCreateLoading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: Preloder,
      alt: "loading..."
    }) : null));
  };

  return ItemList;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component), _temp)) || _class) || _class);
ItemList.propTypes = {
  delButtonStore: mobx_react__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].objectOrObservableObject,
  listStore: mobx_react__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].objectOrObservableObject,
  formStore: mobx_react__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].objectOrObservableObject,
  changeFormStore: mobx_react__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].objectOrObservableObject
};
/* harmony default export */ __webpack_exports__["default"] = (ItemList);

/***/ }),

/***/ "./src/js/components/list/index.js":
/*!*****************************************!*\
  !*** ./src/js/components/list/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List */ "./src/js/components/list/List.jsx");
/* harmony import */ var _list_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-style.css */ "./src/js/components/list/list-style.css");
/* harmony import */ var _list_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_list_style_css__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (_List__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/js/components/list/list-style.css":
/*!***********************************************!*\
  !*** ./src/js/components/list/list-style.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/js/components/showDetails/ShowDetails.jsx":
/*!*******************************************************!*\
  !*** ./src/js/components/showDetails/ShowDetails.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _buttonDetails_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../buttonDetails/index */ "./src/js/components/buttonDetails/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./src/js/store/index.js");


var _dec, _class;





var Preloder = "/public/1fe1a3d9bdc5b2d6988fdd11a4c10690.gif";

var ConnectedDetails = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["inject"])('listStore', 'changeFormStore'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(ConnectedDetails, _Component);

  function ConnectedDetails() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ConnectedDetails.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        id = _this$props.id,
        listStore = _this$props.listStore,
        changeFormStore = _this$props.changeFormStore;
    var note = listStore.list_check;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, Number(id) === Number(changeFormStore.change.id) || listStore.arcticleIsLoading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: Preloder,
      alt: "loading..."
    }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, note ? note.title : null), listStore.CheckHasErrored ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, " Page not found ") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_buttonDetails_index__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: id
    }));
  };

  return ConnectedDetails;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"])) || _class) || _class);
ConnectedDetails.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),
  changeFormStore: mobx_react__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].objectOrObservableObject,
  listStore: mobx_react__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].objectOrObservableObject
};
/* harmony default export */ __webpack_exports__["default"] = (ConnectedDetails);

/***/ }),

/***/ "./src/js/components/showDetails/index.js":
/*!************************************************!*\
  !*** ./src/js/components/showDetails/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/commonjs/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ShowDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowDetails */ "./src/js/components/showDetails/ShowDetails.jsx");
/* harmony import */ var _show_details_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show-details-style.css */ "./src/js/components/showDetails/show-details-style.css");
/* harmony import */ var _show_details_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_show_details_style_css__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (Object(react_i18next__WEBPACK_IMPORTED_MODULE_0__["withTranslation"])()(_ShowDetails__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/js/components/showDetails/show-details-style.css":
/*!**************************************************************!*\
  !*** ./src/js/components/showDetails/show-details-style.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/js/components/switchingLanguage sync recursive ^\\.\\/.*\\.json$":
/*!*****************************************************************!*\
  !*** ./src/js/components/switchingLanguage sync ^\.\/.*\.json$ ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en.json": "./src/js/components/switchingLanguage/en.json",
	"./ru.json": "./src/js/components/switchingLanguage/ru.json"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/js/components/switchingLanguage sync recursive ^\\.\\/.*\\.json$";

/***/ }),

/***/ "./src/js/components/switchingLanguage/Switchlanguage.jsx":
/*!****************************************************************!*\
  !*** ./src/js/components/switchingLanguage/Switchlanguage.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/index.js");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(i18next__WEBPACK_IMPORTED_MODULE_3__);





var ConnectSwich =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(ConnectSwich, _Component);

  function ConnectSwich(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      active: "btn_active",
      defaultClassNameEN: "header btn_switch btn_active en",
      defaultClassNameRU: "header btn_switch ru"
    };

    _this.handleSwitchEn = function () {
      _this.setLanguage('en');

      _this.setState({
        defaultClassNameRU: "header btn_switch ru"
      });

      _this.setState({
        defaultClassNameEN: "header btn_switch  " + _this.state.active + " en"
      });
    };

    _this.handleSwitchRu = function () {
      _this.setLanguage('ru');

      _this.setState({
        defaultClassNameRU: "header btn_switch " + _this.state.active + " ru"
      });

      _this.setState({
        defaultClassNameEN: "header btn_switch en"
      });
    };

    _this.handleSwitchEn = _this.handleSwitchEn.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this));
    _this.handleSwitchRu = _this.handleSwitchRu.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this));
    return _this;
  }

  var _proto = ConnectSwich.prototype;

  _proto.componentWillMount = function componentWillMount() {
    this.setLanguage();
  };

  _proto.setLanguage = function setLanguage(language) {
    if (!language) {
      language = 'en';
    }

    var lang = __webpack_require__("./src/js/components/switchingLanguage sync recursive ^\\.\\/.*\\.json$")("./" + language + ".json");

    i18next__WEBPACK_IMPORTED_MODULE_3___default.a.init({
      lng: language,
      resources: lang
    });
  };

  _proto.render = function render() {
    var _this$state = this.state,
        defaultClassNameEN = _this$state.defaultClassNameEN,
        defaultClassNameRU = _this$state.defaultClassNameRU;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "header switch col-sm-3 offset-sm-6"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      className: defaultClassNameEN,
      onClick: this.handleSwitchEn
    }, i18next__WEBPACK_IMPORTED_MODULE_3___default.a.t('english')), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      className: defaultClassNameRU,
      onClick: this.handleSwitchRu
    }, i18next__WEBPACK_IMPORTED_MODULE_3___default.a.t('russian')));
  };

  return ConnectSwich;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ConnectSwich);

/***/ }),

/***/ "./src/js/components/switchingLanguage/en.json":
/*!*****************************************************!*\
  !*** ./src/js/components/switchingLanguage/en.json ***!
  \*****************************************************/
/*! exports provided: en, default */
/***/ (function(module) {

module.exports = {"en":{"translation":{"title":"Title","notes":"Notes","test_message":"This is a test message","title-main":"Add a new article","btn-create":"CREATE","btn-change":"CHANGE","btn-show-detail":"SHOW DETAILS","btn-delete":"DELETE","nav-home":"HOME","alert":"Fill in the title","list_empty":"The list is empty, show random data?","english":"en","russian":"ru"}}};

/***/ }),

/***/ "./src/js/components/switchingLanguage/index.js":
/*!******************************************************!*\
  !*** ./src/js/components/switchingLanguage/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Switchlanguage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Switchlanguage */ "./src/js/components/switchingLanguage/Switchlanguage.jsx");
/* harmony import */ var _switch_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./switch-style.css */ "./src/js/components/switchingLanguage/switch-style.css");
/* harmony import */ var _switch_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_switch_style_css__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (_Switchlanguage__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/js/components/switchingLanguage/ru.json":
/*!*****************************************************!*\
  !*** ./src/js/components/switchingLanguage/ru.json ***!
  \*****************************************************/
/*! exports provided: ru, default */
/***/ (function(module) {

module.exports = {"ru":{"translation":{"title":"Заголовок","notes":"Заметки","test_message":"Это тестовое сообщение","title-main":"Добавить новую статью","btn-create":"СОЗДАТЬ","btn-change":"ИЗМЕНИТЬ","btn-show-detail":"ДЕТАЛИ","btn-delete":"УДАЛИТЬ","nav-home":"ГЛАВНАЯ","alert":"Заполните поле 'заголовок'","list_empty":"Ваши заметки пусты, показать случайные данные?","english":"en","russian":"ru"}}};

/***/ }),

/***/ "./src/js/components/switchingLanguage/switch-style.css":
/*!**************************************************************!*\
  !*** ./src/js/components/switchingLanguage/switch-style.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/js/store/FormStore.js":
/*!***********************************!*\
  !*** ./src/js/store/FormStore.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormStore; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/initializerDefineProperty */ "./node_modules/@babel/runtime/helpers/initializerDefineProperty.js");
/* harmony import */ var _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/applyDecoratedDescriptor */ "./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js");
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/initializerWarningHelper */ "./node_modules/@babel/runtime/helpers/initializerWarningHelper.js");
/* harmony import */ var _babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api */ "./src/js/store/api.js");






var _dec, _dec2, _dec3, _dec4, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp;



var FormStore = (_dec = mobx__WEBPACK_IMPORTED_MODULE_5__["action"].bound, _dec2 = mobx__WEBPACK_IMPORTED_MODULE_5__["action"].bound, _dec3 = mobx__WEBPACK_IMPORTED_MODULE_5__["action"].bound, _dec4 = mobx__WEBPACK_IMPORTED_MODULE_5__["action"].bound, (_class = (_temp =
/*#__PURE__*/
function () {
  function FormStore() {
    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "load", _descriptor, this);

    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "title", _descriptor2, this);

    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "arcticleCreateLoading", _descriptor3, this);

    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "arcticleHasErrored", _descriptor4, this);

    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "newList", _descriptor5, this);

    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "message", _descriptor6, this);
  }

  var _proto = FormStore.prototype;

  _proto.handleChangeList = function handleChangeList(data) {
    this.newList = mobx__WEBPACK_IMPORTED_MODULE_5__["observable"].array(data, {
      deep: false
    });
  };

  _proto.handleChangeMessage = function handleChangeMessage(bool) {
    this.message = bool;
  };

  _proto.handleChangeTitle = function handleChangeTitle(data) {
    this.title = data;
  };

  _proto.getTitle = function getTitle() {
    return this.title;
  };

  _proto.addArticle =
  /*#__PURE__*/
  function () {
    var _addArticle = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
      var _this = this;

      var url;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // const url = 'https://private-anon-535510ee6b-note10.apiary-mock.com/notes'
              url = _api__WEBPACK_IMPORTED_MODULE_6__["default"].addNote.endPoint;
              this.handleChangeMessage(false);
              this.arcticleCreateLoading = true;
              return _context.abrupt("return", fetch(url, {
                method: _api__WEBPACK_IMPORTED_MODULE_6__["default"].addNote.method,
                body: JSON.stringify({
                  title: data.title
                })
              }).then(function (response) {
                if (!response.ok) {
                  throw Error(response.statusText);
                }

                _this.arcticleCreateLoading = false;
                _this.arcticleHasErrored = false;
                return response.json();
              }).then(function (items) {
                return _this.handleChangeList(items);
              })["catch"](function () {
                return _this.arcticleHasErrored = true;
              }));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function addArticle(_x) {
      return _addArticle.apply(this, arguments);
    }

    return addArticle;
  }();

  return FormStore;
}(), _temp), (_descriptor = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3___default()(_class.prototype, "load", [mobx__WEBPACK_IMPORTED_MODULE_5__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor2 = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3___default()(_class.prototype, "title", [mobx__WEBPACK_IMPORTED_MODULE_5__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor3 = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3___default()(_class.prototype, "arcticleCreateLoading", [mobx__WEBPACK_IMPORTED_MODULE_5__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor4 = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3___default()(_class.prototype, "arcticleHasErrored", [mobx__WEBPACK_IMPORTED_MODULE_5__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor5 = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3___default()(_class.prototype, "newList", [mobx__WEBPACK_IMPORTED_MODULE_5__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor6 = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3___default()(_class.prototype, "message", [mobx__WEBPACK_IMPORTED_MODULE_5__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3___default()(_class.prototype, "handleChangeList", [mobx__WEBPACK_IMPORTED_MODULE_5__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "handleChangeList"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3___default()(_class.prototype, "handleChangeMessage", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "handleChangeMessage"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3___default()(_class.prototype, "handleChangeTitle", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "handleChangeTitle"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3___default()(_class.prototype, "getTitle", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "getTitle"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3___default()(_class.prototype, "addArticle", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "addArticle"), _class.prototype)), _class));


/***/ }),

/***/ "./src/js/store/api.js":
/*!*****************************!*\
  !*** ./src/js/store/api.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var protocol = 'http://';
var basePoint = 'localhost';
var port = 3001;
var baseUrl = "" + protocol + basePoint + ":" + port;
var api = {
  getNotes: {
    method: "GET",
    endPoint: baseUrl + "/notes"
  },
  getNoteById: {
    method: "GET",
    endPoint: baseUrl + "/notes/"
  },
  addNote: {
    method: "POST",
    endPoint: baseUrl + "/notes"
  },
  delNoteById: {
    method: "DELETE",
    endPoint: baseUrl + "/notes/"
  },
  updateNoteById: {
    method: "PUT",
    endPoint: baseUrl + "/notes/"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (api);

/***/ }),

/***/ "./src/js/store/buttonDetailsStore.js":
/*!********************************************!*\
  !*** ./src/js/store/buttonDetailsStore.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ButtonDetailsStore; });
/* harmony import */ var _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/initializerDefineProperty */ "./node_modules/@babel/runtime/helpers/initializerDefineProperty.js");
/* harmony import */ var _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/applyDecoratedDescriptor */ "./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js");
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/initializerWarningHelper */ "./node_modules/@babel/runtime/helpers/initializerWarningHelper.js");
/* harmony import */ var _babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api */ "./src/js/store/api.js");




var _class, _descriptor, _descriptor2, _temp;



var ButtonDetailsStore = (_class = (_temp =
/*#__PURE__*/
function () {
  function ButtonDetailsStore() {
    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "DelButtonStoreErrored", _descriptor, this);

    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "noteIsDeleted", _descriptor2, this);
  }

  var _proto = ButtonDetailsStore.prototype;

  _proto.delArticle = function delArticle(data) {
    var _this = this;

    var set = {
      "delete": true,
      id: data.id
    };
    this.noteIsDeleted = set;
    var url = "" + _api__WEBPACK_IMPORTED_MODULE_4__["default"].delNoteById.endPoint + data.id;
    return fetch(url, {
      method: _api__WEBPACK_IMPORTED_MODULE_4__["default"].delNoteById.method
    }).then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
    }).then(function () {
      _this.delListNote(data);

      _this.noteIsDeleted = {
        "delete": false
      };
    })["catch"](function () {
      return _this.DelButtonStoreErrored = true;
    });
  };

  return ButtonDetailsStore;
}(), _temp), (_descriptor = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1___default()(_class.prototype, "DelButtonStoreErrored", [mobx__WEBPACK_IMPORTED_MODULE_3__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor2 = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1___default()(_class.prototype, "noteIsDeleted", [mobx__WEBPACK_IMPORTED_MODULE_3__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {};
  }
}), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1___default()(_class.prototype, "delArticle", [mobx__WEBPACK_IMPORTED_MODULE_3__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "delArticle"), _class.prototype)), _class);


/***/ }),

/***/ "./src/js/store/changeFormStore.js":
/*!*****************************************!*\
  !*** ./src/js/store/changeFormStore.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChangeFormStore; });
/* harmony import */ var _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/initializerDefineProperty */ "./node_modules/@babel/runtime/helpers/initializerDefineProperty.js");
/* harmony import */ var _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/applyDecoratedDescriptor */ "./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js");
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/initializerWarningHelper */ "./node_modules/@babel/runtime/helpers/initializerWarningHelper.js");
/* harmony import */ var _babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api */ "./src/js/store/api.js");




var _class, _descriptor, _descriptor2, _descriptor3, _temp;



var ChangeFormStore = (_class = (_temp =
/*#__PURE__*/
function () {
  function ChangeFormStore() {
    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "changeFormStoreErrored", _descriptor, this);

    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "change", _descriptor2, this);

    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "changeList", _descriptor3, this);
  }

  var _proto = ChangeFormStore.prototype;

  _proto.changeArticle = function changeArticle(data) {
    var _this = this;

    var url = "" + _api__WEBPACK_IMPORTED_MODULE_4__["default"].updateNoteById.endPoint + data.id;
    this.change = {
      change: true,
      id: data.id
    };
    return fetch(url, {
      method: _api__WEBPACK_IMPORTED_MODULE_4__["default"].updateNoteById.method,
      body: JSON.stringify({
        title: data.title
      })
    }).then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      _this.change = {
        change: false
      };
      return response;
    }).then(function (response) {
      return response.json();
    }).then(function (items) {
      _this.changeList = items;
    })["catch"](function () {
      return _this.changeFormStoreErrored = true;
    });
  };

  return ChangeFormStore;
}(), _temp), (_descriptor = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1___default()(_class.prototype, "changeFormStoreErrored", [mobx__WEBPACK_IMPORTED_MODULE_3__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor2 = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1___default()(_class.prototype, "change", [mobx__WEBPACK_IMPORTED_MODULE_3__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor3 = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1___default()(_class.prototype, "changeList", [mobx__WEBPACK_IMPORTED_MODULE_3__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1___default()(_class.prototype, "changeArticle", [mobx__WEBPACK_IMPORTED_MODULE_3__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "changeArticle"), _class.prototype)), _class);


/***/ }),

/***/ "./src/js/store/delButtonStore.js":
/*!****************************************!*\
  !*** ./src/js/store/delButtonStore.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DelButtonStore; });
/* harmony import */ var _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/initializerDefineProperty */ "./node_modules/@babel/runtime/helpers/initializerDefineProperty.js");
/* harmony import */ var _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/applyDecoratedDescriptor */ "./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js");
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/initializerWarningHelper */ "./node_modules/@babel/runtime/helpers/initializerWarningHelper.js");
/* harmony import */ var _babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _listStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listStore */ "./src/js/store/listStore.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api */ "./src/js/store/api.js");




var _dec, _class, _descriptor, _descriptor2, _descriptor3, _temp;

 // import PropTypes from 'prop-types';



var DelButtonStore = (_dec = mobx__WEBPACK_IMPORTED_MODULE_3__["action"].bound, (_class = (_temp =
/*#__PURE__*/
function () {
  function DelButtonStore() {
    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "DelButtonStoreErrored", _descriptor, this);

    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "noteIsDeleted", _descriptor2, this);

    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "show", _descriptor3, this);

    this.show = false;
  }

  var _proto = DelButtonStore.prototype;

  _proto.showList = function showList() {
    this.show = !this.show;
  };

  _proto.delArticle = function delArticle(data) {
    var _this = this;

    var set = {
      "delete": true,
      id: data.id
    };
    this.noteIsDeleted = set;
    var url = "" + _api__WEBPACK_IMPORTED_MODULE_5__["default"].delNoteById.endPoint + data.id;
    return fetch(url, {
      method: _api__WEBPACK_IMPORTED_MODULE_5__["default"].delNoteById.method
    }).then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      _this.noteIsDeleted = {
        "delete": false
      };
      _this.arcticleHasErrored = false;
    }).then(function () {
      return _listStore__WEBPACK_IMPORTED_MODULE_4__["default"].delListNote(data);
    })["catch"](function () {
      return _this.DelButtonStoreErrored = true;
    });
  };

  return DelButtonStore;
}(), _temp), (_descriptor = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1___default()(_class.prototype, "DelButtonStoreErrored", [mobx__WEBPACK_IMPORTED_MODULE_3__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor2 = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1___default()(_class.prototype, "noteIsDeleted", [mobx__WEBPACK_IMPORTED_MODULE_3__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor3 = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1___default()(_class.prototype, "show", [mobx__WEBPACK_IMPORTED_MODULE_3__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1___default()(_class.prototype, "showList", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "showList"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1___default()(_class.prototype, "delArticle", [mobx__WEBPACK_IMPORTED_MODULE_3__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "delArticle"), _class.prototype)), _class));


/***/ }),

/***/ "./src/js/store/index.js":
/*!*******************************!*\
  !*** ./src/js/store/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx_react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-react-router */ "./node_modules/mobx-react-router/dist/mobx-react-router.js");
/* harmony import */ var mobx_react_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx_react_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _buttonDetailsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttonDetailsStore */ "./src/js/store/buttonDetailsStore.js");
/* harmony import */ var _changeFormStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./changeFormStore */ "./src/js/store/changeFormStore.js");
/* harmony import */ var _delButtonStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delButtonStore */ "./src/js/store/delButtonStore.js");
/* harmony import */ var _FormStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormStore */ "./src/js/store/FormStore.js");
/* harmony import */ var _listStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listStore */ "./src/js/store/listStore.js");






var routingStore = new mobx_react_router__WEBPACK_IMPORTED_MODULE_0__["RouterStore"]();
var stores = {
  routing: routingStore,
  buttonDetailsStore: new _buttonDetailsStore__WEBPACK_IMPORTED_MODULE_1__["default"](),
  changeFormStore: new _changeFormStore__WEBPACK_IMPORTED_MODULE_2__["default"](),
  delButtonStore: new _delButtonStore__WEBPACK_IMPORTED_MODULE_3__["default"](),
  formStore: new _FormStore__WEBPACK_IMPORTED_MODULE_4__["default"](),
  listStore: new _listStore__WEBPACK_IMPORTED_MODULE_5__["default"]()
};
/* harmony default export */ __webpack_exports__["default"] = (stores);

/***/ }),

/***/ "./src/js/store/listStore.js":
/*!***********************************!*\
  !*** ./src/js/store/listStore.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListStore; });
/* harmony import */ var _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/initializerDefineProperty */ "./node_modules/@babel/runtime/helpers/initializerDefineProperty.js");
/* harmony import */ var _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/applyDecoratedDescriptor */ "./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js");
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/initializerWarningHelper */ "./node_modules/@babel/runtime/helpers/initializerWarningHelper.js");
/* harmony import */ var _babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api */ "./src/js/store/api.js");




var _dec, _dec2, _dec3, _dec4, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp;



var ListStore = (_dec = mobx__WEBPACK_IMPORTED_MODULE_3__["action"].bound, _dec2 = mobx__WEBPACK_IMPORTED_MODULE_3__["action"].bound, _dec3 = mobx__WEBPACK_IMPORTED_MODULE_3__["action"].bound, _dec4 = mobx__WEBPACK_IMPORTED_MODULE_3__["action"].bound, (_class = (_temp =
/*#__PURE__*/
function () {
  function ListStore(list, list_check, CheckHasErrored) {
    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "load", _descriptor, this);

    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "title", _descriptor2, this);

    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "arcticleIsLoading", _descriptor3, this);

    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "arcticleHasErrored", _descriptor4, this);

    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "addListNewNote", _descriptor5, this);

    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "setListCheck", _descriptor6, this);

    list ? this.list = list : this.list = [];
    list_check ? this.list_check = list_check : this.list_check = {};
    this.CheckHasErrored = CheckHasErrored;
  }

  var _proto = ListStore.prototype;

  _proto.delListNote = function delListNote(data) {
    this.list.replace(this.list.filter(function (el) {
      return Number(el.id) !== Number(data.id);
    }));
  };

  _proto.changeNote = function changeNote(data) {
    this.list.replace(this.list.filter(function (el) {
      if (el.id == Number(data.id)) {
        el.title = data.title;
        return el;
      } else {
        return el;
      }
    }));
  };

  _proto.getNoteById = function getNoteById(data) {
    var _this = this;

    this.arcticleIsLoading = true;
    var url = "" + _api__WEBPACK_IMPORTED_MODULE_4__["default"].getNoteById.endPoint + data.id;
    return fetch(url).then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      return response;
    }).then(function (response) {
      return response.json();
    }).then(function (items) {
      _this.list_check = Object(mobx__WEBPACK_IMPORTED_MODULE_3__["observable"])(items);
      _this.arcticleIsLoading = false;
      _this.CheckHasErrored = false;
    })["catch"](function () {
      _this.CheckHasErrored = true;
    });
  };

  _proto.randomNotes = function randomNotes(data) {
    var _this2 = this;

    this.arcticleIsLoading = true;
    this.load = true;
    var url = _api__WEBPACK_IMPORTED_MODULE_4__["default"].getNotes.endPoint + "/random/" + data.num;
    return fetch(url).then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      _this2.arcticleHasErrored = false;
      return response;
    }).then(function (response) {
      return response.json();
    }).then(function (items) {
      _this2.list = mobx__WEBPACK_IMPORTED_MODULE_3__["observable"].array(_this2.list.concat(items), {
        deep: false
      });
      _this2.arcticleIsLoading = false;
    })["catch"](function () {
      _this2.arcticleHasErrored = true;
      _this2.arcticleIsLoading = false;
    });
  };

  return ListStore;
}(), _temp), (_descriptor = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1___default()(_class.prototype, "load", [mobx__WEBPACK_IMPORTED_MODULE_3__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor2 = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1___default()(_class.prototype, "title", [mobx__WEBPACK_IMPORTED_MODULE_3__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor3 = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1___default()(_class.prototype, "arcticleIsLoading", [mobx__WEBPACK_IMPORTED_MODULE_3__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor4 = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1___default()(_class.prototype, "arcticleHasErrored", [mobx__WEBPACK_IMPORTED_MODULE_3__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor5 = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1___default()(_class.prototype, "addListNewNote", [mobx__WEBPACK_IMPORTED_MODULE_3__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this3 = this;

    return function (data) {
      _this3.arcticleIsLoading = true;
      _this3.list = mobx__WEBPACK_IMPORTED_MODULE_3__["observable"].array(_this3.list.concat(data[data.length - 1]));
      _this3.arcticleIsLoading = false;
    };
  }
}), _descriptor6 = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1___default()(_class.prototype, "setListCheck", [mobx__WEBPACK_IMPORTED_MODULE_3__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this4 = this;

    return function (data) {
      _this4.arcticleIsLoading = true;
      _this4.list_check = data;
      _this4.arcticleIsLoading = false;
    };
  }
}), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1___default()(_class.prototype, "delListNote", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "delListNote"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1___default()(_class.prototype, "changeNote", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "changeNote"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1___default()(_class.prototype, "getNoteById", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "getNoteById"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1___default()(_class.prototype, "randomNotes", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "randomNotes"), _class.prototype)), _class));


/***/ }),

/***/ "./src/js/store/rootStore.js":
/*!***********************************!*\
  !*** ./src/js/store/rootStore.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RootStore; });
/* harmony import */ var mobx_react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-react-router */ "./node_modules/mobx-react-router/dist/mobx-react-router.js");
/* harmony import */ var mobx_react_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx_react_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _buttonDetailsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttonDetailsStore */ "./src/js/store/buttonDetailsStore.js");
/* harmony import */ var _changeFormStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./changeFormStore */ "./src/js/store/changeFormStore.js");
/* harmony import */ var _delButtonStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delButtonStore */ "./src/js/store/delButtonStore.js");
/* harmony import */ var _FormStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormStore */ "./src/js/store/FormStore.js");
/* harmony import */ var _listStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listStore */ "./src/js/store/listStore.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_6__);








var RootStore = function RootStore(initialState) {
  this.routing = new mobx_react_router__WEBPACK_IMPORTED_MODULE_0__["RouterStore"](initialState.routing), this.buttonDetailsStore = new _buttonDetailsStore__WEBPACK_IMPORTED_MODULE_1__["default"](initialState.buttonDetailsStore), this.changeFormStore = new _changeFormStore__WEBPACK_IMPORTED_MODULE_2__["default"](initialState.changeFormStore), this.delButtonStore = new _delButtonStore__WEBPACK_IMPORTED_MODULE_3__["default"](initialState.delButtonStore), this.formStore = new _FormStore__WEBPACK_IMPORTED_MODULE_4__["default"](initialState.formStore), this.listStore = new _listStore__WEBPACK_IMPORTED_MODULE_5__["default"](mobx__WEBPACK_IMPORTED_MODULE_6__["observable"].array(initialState.listStore.list), Object(mobx__WEBPACK_IMPORTED_MODULE_6__["observable"])(initialState.listStore.list_check), initialState.listStore.CheckHasErrored);
};



/***/ }),

/***/ "./ssr/client.js":
/*!***********************!*\
  !*** ./ssr/client.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! history */ "./node_modules/history/index.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/App */ "./src/App.jsx");
/* harmony import */ var _src_js_components_languages_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/js/components/languages/i18n */ "./src/js/components/languages/i18n.js");
/* harmony import */ var mobx_react_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react-router */ "./node_modules/mobx-react-router/dist/mobx-react-router.js");
/* harmony import */ var mobx_react_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mobx_react_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_js_store_rootStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/js/store/rootStore */ "./src/js/store/rootStore.js");










if (true) {
  var _require = __webpack_require__(/*! why-did-you-update */ "./node_modules/why-did-you-update/lib/index.js"),
      whyDidYouUpdate = _require.whyDidYouUpdate;

  whyDidYouUpdate(react__WEBPACK_IMPORTED_MODULE_0___default.a);
}

var rootStore = new _src_js_store_rootStore__WEBPACK_IMPORTED_MODULE_8__["default"](window.__INITIAL_STATE__);
var element = document.getElementById('app');
var browserHistory = Object(history__WEBPACK_IMPORTED_MODULE_1__["createBrowserHistory"])();
var history = Object(mobx_react_router__WEBPACK_IMPORTED_MODULE_7__["syncHistoryWithStore"])(browserHistory, rootStore.routing);
react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.hydrate(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mobx_react__WEBPACK_IMPORTED_MODULE_4__["Provider"], rootStore, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__["Router"], {
  history: history
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_App__WEBPACK_IMPORTED_MODULE_5__["default"], null))), element);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0RldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvYWxlcnQvQWxlcnQuanN4Iiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LXN0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9hbGVydC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9idXR0b25EZXRhaWxzL0J1dHRvbkRlYXRhaWxzLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9idXR0b25EZXRhaWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2NoYW5nZUZvcm0vQ2hhbmdlRm9ybS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvY2hhbmdlRm9ybS9jaGFuZ2UtZm9ybS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvY2hhbmdlRm9ybS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9kZWxCdXR0b24vRGVsQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9kZWxCdXR0b24vZGVsLWJ1dHRvbi1zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvZGVsQnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2Zvcm0vRm9ybS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvZm9ybS9mb3JtLXN0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9mb3JtL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2xhbmd1YWdlcy9pMThuLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2xpc3QvTGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9saXN0L2xpc3Qtc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3Nob3dEZXRhaWxzL1Nob3dEZXRhaWxzLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9zaG93RGV0YWlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9zaG93RGV0YWlscy9zaG93LWRldGFpbHMtc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3N3aXRjaGluZ0xhbmd1YWdlIHN5bmMgXlxcLlxcLy4qXFwuanNvbiQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc3dpdGNoaW5nTGFuZ3VhZ2UvU3dpdGNobGFuZ3VhZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3N3aXRjaGluZ0xhbmd1YWdlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3N3aXRjaGluZ0xhbmd1YWdlL3N3aXRjaC1zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0b3JlL0Zvcm1TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3RvcmUvYXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zdG9yZS9idXR0b25EZXRhaWxzU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0b3JlL2NoYW5nZUZvcm1TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3RvcmUvZGVsQnV0dG9uU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zdG9yZS9saXN0U3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0b3JlL3Jvb3RTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zc3IvY2xpZW50LmpzIl0sIm5hbWVzIjpbIkFwcCIsImkxOG5leHQiLCJ0IiwiSG9tZUNvbXAiLCJEZXRhaWxzIiwid2l0aFRyYW5zbGF0aW9uIiwibWF0Y2giLCJpZCIsInBhcmFtcyIsIkFsZXJ0IiwiZGF0YSIsIm1lc3NhZ2UiLCJCdXR0b25EZXRhaWxzIiwiaW5qZWN0IiwicHJvcHMiLCJzdGF0ZSIsInNob3dGb3JtIiwiaGFuZGxlRGVsIiwiYmluZCIsImhhbmRsZUNoYW5nZSIsImRlbEJ1dHRvblN0b3JlIiwibGlzdFN0b3JlIiwicm91dGVDaGFuZ2UiLCJkZWxBcnRpY2xlIiwiZGVsTGlzdE5vdGUiLCJyb3V0aW5nIiwicGF0aCIsImhpc3RvcnkiLCJwdXNoIiwic2V0U3RhdGUiLCJyZW5kZXIiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJzdG9yZXMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJzdHJpbmciLCJtb2J4UHJvcFR5cGVzIiwib2JqZWN0T3JPYnNlcnZhYmxlT2JqZWN0IiwiQ29ubmVjdGVkQ2hhbmdlRm9ybSIsInRpdGxlIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiY2hhbmdlRm9ybVN0b3JlIiwidXBkYXRlU2hvd0Zvcm0iLCJjaGFuZ2VBcnRpY2xlIiwic2V0TGlzdENoZWNrIiwiY2hhbmdlTGlzdCIsImNoYW5nZU5vdGUiLCJmdW5jIiwiRGVsQnV0dG9uIiwib2JzZXJ2ZXIiLCJoYW5kbGVTaG93Rm9ybSIsImdldE5vdGVCeUlkIiwiQ29ubmVjdGVkRm9ybSIsImZvcm1TdG9yZSIsImFkZEFydGljbGUiLCJhZGRMaXN0TmV3Tm90ZSIsIm5ld0xpc3QiLCJyZXNvdXJjZXMiLCJlbiIsInRyYW5zbGF0aW9uIiwiaTE4biIsInVzZSIsImluaXRSZWFjdEkxOG5leHQiLCJpbml0IiwibG5nIiwia2V5U2VwYXJhdG9yIiwiaW50ZXJwb2xhdGlvbiIsImVzY2FwZVZhbHVlIiwiSXRlbUxpc3QiLCJob3dfbWFueSIsIkhvd01heSIsInJhbmRvbURhdGEiLCJyYW5kb21Ob3RlcyIsIm51bSIsImRlZmF1bHRDbGFzcyIsImFkZENsYXNzIiwidXBkYXRlQ2xhc3MiLCJhcmN0aWNsZUhhc0Vycm9yZWQiLCJhcmN0aWNsZUlzTG9hZGluZyIsIlByZWxvZGVyIiwiaXRlbSIsIk51bWJlciIsIm5vdGVJc0RlbGV0ZWQiLCJjaGFuZ2UiLCJidXR0b24iLCJyYW5kb21haXplciIsIkFycmF5IiwiZnJvbSIsImxpc3QiLCJsZW5ndGgiLCJtYXAiLCJhcmN0aWNsZUNyZWF0ZUxvYWRpbmciLCJSZWFjdCIsIkNvbm5lY3RlZERldGFpbHMiLCJub3RlIiwibGlzdF9jaGVjayIsIkNoZWNrSGFzRXJyb3JlZCIsIkNvbm5lY3RTd2ljaCIsImFjdGl2ZSIsImRlZmF1bHRDbGFzc05hbWVFTiIsImRlZmF1bHRDbGFzc05hbWVSVSIsImhhbmRsZVN3aXRjaEVuIiwic2V0TGFuZ3VhZ2UiLCJoYW5kbGVTd2l0Y2hSdSIsImNvbXBvbmVudFdpbGxNb3VudCIsImxhbmd1YWdlIiwibGFuZyIsInJlcXVpcmUiLCJTd2l0Y2giLCJGb3JtU3RvcmUiLCJhY3Rpb24iLCJib3VuZCIsImhhbmRsZUNoYW5nZUxpc3QiLCJvYnNlcnZhYmxlIiwiYXJyYXkiLCJkZWVwIiwiaGFuZGxlQ2hhbmdlTWVzc2FnZSIsImJvb2wiLCJoYW5kbGVDaGFuZ2VUaXRsZSIsImdldFRpdGxlIiwidXJsIiwiYXBpIiwiYWRkTm90ZSIsImVuZFBvaW50IiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwianNvbiIsIml0ZW1zIiwicHJvdG9jb2wiLCJiYXNlUG9pbnQiLCJwb3J0IiwiYmFzZVVybCIsImdldE5vdGVzIiwiZGVsTm90ZUJ5SWQiLCJ1cGRhdGVOb3RlQnlJZCIsIkJ1dHRvbkRldGFpbHNTdG9yZSIsInNldCIsIkRlbEJ1dHRvblN0b3JlRXJyb3JlZCIsIkNoYW5nZUZvcm1TdG9yZSIsImNoYW5nZUZvcm1TdG9yZUVycm9yZWQiLCJEZWxCdXR0b25TdG9yZSIsInNob3ciLCJzaG93TGlzdCIsInJvdXRpbmdTdG9yZSIsIlJvdXRlclN0b3JlIiwiYnV0dG9uRGV0YWlsc1N0b3JlIiwiTGlzdFN0b3JlIiwicmVwbGFjZSIsImZpbHRlciIsImVsIiwibG9hZCIsImNvbmNhdCIsIlJvb3RTdG9yZSIsImluaXRpYWxTdGF0ZSIsInByb2Nlc3MiLCJ3aHlEaWRZb3VVcGRhdGUiLCJyb290U3RvcmUiLCJ3aW5kb3ciLCJfX0lOSVRJQUxfU1RBVEVfXyIsImVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYnJvd3Nlckhpc3RvcnkiLCJjcmVhdGVCcm93c2VySGlzdG9yeSIsInN5bmNIaXN0b3J5V2l0aFN0b3JlIiwiUmVhY3RET00iLCJoeWRyYXRlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVB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b3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiY2xpZW50XCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3NyL2NsaWVudC5qc1wiLFwidmVuZG9yc35jbGllbnRcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFN3aXRjaCwgUm91dGUsIExpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuaW1wb3J0IGkxOG5leHQgZnJvbSAnaTE4bmV4dCc7XHJcbmltcG9ydCBTd2l0Y2hMYW5ndWFnZSBmcm9tICcuL2pzL2NvbXBvbmVudHMvc3dpdGNoaW5nTGFuZ3VhZ2UvaW5kZXgnO1xyXG5pbXBvcnQgJy4vQXBwLmNzcyc7XHJcbmltcG9ydCBIb21lQ29tcCBmcm9tICcuL0hvbWUnO1xyXG5pbXBvcnQgRGV0YWlscyBmcm9tICcuL0RldGFpbHMnO1xyXG5cclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgPExpbmsgY2xhc3NOYW1lPVwiY29sLXNtLTEgaG9tZSBvZmZzZXQtc20tMSBsaW5rX2hvbWVwYWdlXCIgdG89XCIvXCI+e2kxOG5leHQudCgnbmF2LWhvbWUnKSAhPT0gJ25hdi1ob21lJyA/IGkxOG5leHQudCgnbmF2LWhvbWUnKSA6ICdIT01FJ308L0xpbms+XHJcbiAgICAgIDxTd2l0Y2hMYW5ndWFnZSAvPlxyXG4gICAgICA8U3dpdGNoPlxyXG4gICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIGNvbXBvbmVudD17SG9tZUNvbXB9IC8+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvOmlkXCIgY29tcG9uZW50PXtEZXRhaWxzfSAvPlxyXG4gICAgICA8L1N3aXRjaD5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCkoQXBwKVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2hvd0RldGFpbHMgZnJvbSAnLi9qcy9jb21wb25lbnRzL3Nob3dEZXRhaWxzL2luZGV4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7IG1hdGNoIH0pID0+IHtcclxuICBjb25zdCB7IGlkIH0gPSBtYXRjaC5wYXJhbXNcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNSBvZmZzZXQtc20tMVwiPlxyXG4gICAgICA8U2hvd0RldGFpbHNcclxuICAgICAgICBpZD17aWR9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZvcm0gZnJvbSAnLi9qcy9jb21wb25lbnRzL2Zvcm0vaW5kZXgnO1xyXG5pbXBvcnQgSXRlbUxpc3QgZnJvbSAnLi9qcy9jb21wb25lbnRzL2xpc3QvaW5kZXgnO1xyXG5pbXBvcnQgaTE4bmV4dCBmcm9tICdpMThuZXh0JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJyb3cgY29sLXNtXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVfcGFnZSBjb2wtc20tNSBvZmZzZXQtc20tMVwiPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJob21lX3BhZ2UgYXJ0aWNsZV9saXN0XCI+e2kxOG5leHQudCgnbm90ZXMnKX08L3A+XHJcbiAgICAgIDxJdGVtTGlzdCAvPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNSBvZmZzZXQtc20tMVwiPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJob21lX3BhZ2UgYXJ0aWNsZV9hZGRcIj57aTE4bmV4dC50KCd0aXRsZS1tYWluJyl9PC9wPlxyXG4gICAgICA8Rm9ybSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbikiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQWxlcnQgPSAoZGF0YSkgPT4ge1xyXG4gIGNvbnN0IHsgbWVzc2FnZSB9ID0gZGF0YTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge21lc3NhZ2UgP1xyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZvcm0gYWxlcnRfbWVzc2FnZVwiPnttZXNzYWdlfTwvcD5cclxuICAgICAgICA6XHJcbiAgICAgICAgbnVsbFxyXG4gICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbGVydFxyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImltcG9ydCBBbGVydCBmcm9tIFwiLi9BbGVydFwiO1xyXG5pbXBvcnQgXCIuL2FsZXJ0LXN0eWxlLmNzc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbGVydCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBpMThuZXh0IGZyb20gJ2kxOG5leHQnO1xyXG5pbXBvcnQgeyBpbmplY3QsIFByb3BUeXBlcyBhcyBtb2J4UHJvcFR5cGVzIH0gZnJvbSAnbW9ieC1yZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBDaGFuZ2VGb3JtIGZyb20gJy4uL2NoYW5nZUZvcm0vaW5kZXgnO1xyXG5pbXBvcnQgc3RvcmVzIGZyb20gJy4uLy4uL3N0b3JlJztcclxuXHJcbkBpbmplY3QoJ2RlbEJ1dHRvblN0b3JlJywgJ2NoYW5nZUZvcm1TdG9yZScsICdsaXN0U3RvcmUnLCAncm91dGluZycpXHJcbmNsYXNzIEJ1dHRvbkRldGFpbHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICBzdGF0ZSA9IHtcclxuICAgIHNob3dGb3JtOiBmYWxzZSxcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuaGFuZGxlRGVsID0gdGhpcy5oYW5kbGVEZWwuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgaGFuZGxlRGVsKCkge1xyXG4gICAgY29uc3QgeyBpZCwgZGVsQnV0dG9uU3RvcmUsIGxpc3RTdG9yZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgdGhpcy5yb3V0ZUNoYW5nZSgpO1xyXG4gICAgYXdhaXQgZGVsQnV0dG9uU3RvcmUuZGVsQXJ0aWNsZSh7IGlkIH0pO1xyXG4gICAgbGlzdFN0b3JlLmRlbExpc3ROb3RlKHsgaWQgfSlcclxuICB9XHJcblxyXG4gIHJvdXRlQ2hhbmdlKCkge1xyXG4gICAgY29uc3QgeyByb3V0aW5nIH0gPSB0aGlzLnByb3BzXHJcbiAgICBsZXQgcGF0aCA9ICcvJztcclxuICAgIHJldHVybiByb3V0aW5nLmhpc3RvcnkucHVzaChwYXRoKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNoYW5nZSgpIHtcclxuICAgIGNvbnN0IHsgc2hvd0Zvcm0gfSA9IHRoaXMuc3RhdGU7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0Zvcm06ICFzaG93Rm9ybSB9KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBzaG93Rm9ybSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IHtpZH0gPSB0aGlzLnByb3BzXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbCBjb2wtc20tMTJcIj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJkZXRhaWwgYnRuX2RlbGV0ZSBidG4gYnRuLXN1Y2Nlc3MgYnRuLXNtXCIgb25DbGljaz17dGhpcy5oYW5kbGVEZWx9PntpMThuZXh0LnQoJ2J0bi1kZWxldGUnKX08L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJkZXRhaWwgYnRuX2NoYW5nZSBidG4gYnRuLXN1Y2Nlc3MgYnRuLXNtXCIgb25DbGljaz17dGhpcy5oYW5kbGVDaGFuZ2V9PntpMThuZXh0LnQoJ2J0bi1jaGFuZ2UnKX08L2J1dHRvbj5cclxuICAgICAgICB7c2hvd0Zvcm0gPyA8Q2hhbmdlRm9ybSB1cGRhdGVTaG93Rm9ybT17dGhpcy5oYW5kbGVDaGFuZ2V9IGlkPXtpZH0gLz4gOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5CdXR0b25EZXRhaWxzLmRlZmF1bHRQcm9wcyA9IHtcclxuICBpZDogJycsXHJcbiAgZGVsQnV0dG9uU3RvcmU6IHN0b3Jlcy5kZWxCdXR0b25TdG9yZSxcclxufTtcclxuXHJcbkJ1dHRvbkRldGFpbHMucHJvcFR5cGVzID0ge1xyXG4gIGlkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgIFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBQcm9wVHlwZXMuc3RyaW5nXHJcbiAgXSksXHJcbiAgcm91dGluZzogbW9ieFByb3BUeXBlcy5vYmplY3RPck9ic2VydmFibGVPYmplY3QsXHJcbiAgZGVsQnV0dG9uU3RvcmU6IG1vYnhQcm9wVHlwZXMub2JqZWN0T3JPYnNlcnZhYmxlT2JqZWN0LFxyXG4gIGxpc3RTdG9yZTogbW9ieFByb3BUeXBlcy5vYmplY3RPck9ic2VydmFibGVPYmplY3QsXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b25EZXRhaWxzO1xyXG4iLCJpbXBvcnQgQnV0dG9uRGV0YWlscyBmcm9tICcuL0J1dHRvbkRlYXRhaWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uRGV0YWlsc1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9sYWJlbC1oYXMtZm9yICovXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGkxOG5leHQgZnJvbSAnaTE4bmV4dCc7XHJcbmltcG9ydCB7IGluamVjdCwgUHJvcFR5cGVzIGFzIG1vYnhQcm9wVHlwZXMgfSBmcm9tICdtb2J4LXJlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEFsZXJ0IGZyb20gJy4uL2FsZXJ0L0FsZXJ0JztcclxuXHJcbkBpbmplY3QoJ2xpc3RTdG9yZScsICdjaGFuZ2VGb3JtU3RvcmUnLCAncm91dGluZycpXHJcbmNsYXNzIENvbm5lY3RlZENoYW5nZUZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgbWVzc2FnZTogZmFsc2VcclxuICAgIH1cclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpXHJcbiAgfVxyXG5cclxuICBoYW5kbGVDaGFuZ2UgKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgW2V2ZW50LnRhcmdldC5pZF06IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgaGFuZGxlU3VibWl0IChldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgIGNvbnN0IHsgaWQsIGNoYW5nZUZvcm1TdG9yZSwgbGlzdFN0b3JlLCB1cGRhdGVTaG93Rm9ybSwgcm91dGluZyB9ID0gdGhpcy5wcm9wc1xyXG4gICAgY29uc3QgeyB0aXRsZSB9ID0gdGhpcy5zdGF0ZVxyXG5cclxuICAgIGlmICh0aXRsZSkge1xyXG4gICAgICB1cGRhdGVTaG93Rm9ybSgpXHJcbiAgICAgIGF3YWl0IGNoYW5nZUZvcm1TdG9yZS5jaGFuZ2VBcnRpY2xlKHsgdGl0bGUsIGlkIH0pXHJcbiAgICAgIGxpc3RTdG9yZS5zZXRMaXN0Q2hlY2soY2hhbmdlRm9ybVN0b3JlLmNoYW5nZUxpc3QpXHJcbiAgICAgIGxpc3RTdG9yZS5jaGFuZ2VOb3RlKHsgdGl0bGUsIGlkIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTogdHJ1ZSB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIGNvbnN0IHsgdGl0bGUsIG1lc3NhZ2UgfSA9IHRoaXMuc3RhdGVcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgeyBtZXNzYWdlID8gPEFsZXJ0IG1lc3NhZ2U9e2kxOG5leHQudCgnYWxlcnQnKX0gLz4gOiBudWxsfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiPntpMThuZXh0LnQoJ3RpdGxlJyl9PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgIGlkPVwidGl0bGVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dGl0bGV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbVwiPlxyXG4gICAgICAgICAge2kxOG5leHQudCgnYnRuLWNoYW5nZScpfVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5Db25uZWN0ZWRDaGFuZ2VGb3JtLnByb3BUeXBlcyA9IHtcclxuICBpZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgUHJvcFR5cGVzLnN0cmluZ1xyXG4gIF0pLFxyXG4gIGNoYW5nZUZvcm1TdG9yZTogIG1vYnhQcm9wVHlwZXMub2JqZWN0T3JPYnNlcnZhYmxlT2JqZWN0LFxyXG4gIGxpc3RTdG9yZTogbW9ieFByb3BUeXBlcy5vYmplY3RPck9ic2VydmFibGVPYmplY3QsXHJcbiAgdXBkYXRlU2hvd0Zvcm06IFByb3BUeXBlcy5mdW5jLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25uZWN0ZWRDaGFuZ2VGb3JtXHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uICB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XHJcbmltcG9ydCBDb25uZWN0ZWRDaGFuZ2VGb3JtIGZyb20gXCIuL0NoYW5nZUZvcm1cIlxyXG5pbXBvcnQgXCIuL2NoYW5nZS1mb3JtLmNzc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oKShDb25uZWN0ZWRDaGFuZ2VGb3JtKSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGkxOG5leHQgZnJvbSAnaTE4bmV4dCc7XHJcbmltcG9ydCB7IG9ic2VydmVyLCBpbmplY3QsIFByb3BUeXBlcyBhcyBtb2J4UHJvcFR5cGVzIH0gZnJvbSAnbW9ieC1yZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBDaGFuZ2VGb3JtIGZyb20gJy4uL2NoYW5nZUZvcm0vaW5kZXgnO1xyXG5pbXBvcnQgc3RvcmVzIGZyb20gJy4uLy4uL3N0b3JlJztcclxuXHJcbkBpbmplY3QoJ2xpc3RTdG9yZScsICdkZWxCdXR0b25TdG9yZScsICdyb3V0aW5nJylcclxuQG9ic2VydmVyXHJcbmNsYXNzIERlbEJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yIChwcm9wcyl7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc2hvd0Zvcm06IGZhbHNlLFxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaGFuZGxlRGVsID0gdGhpcy5oYW5kbGVEZWwuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5yb3V0ZUNoYW5nZSA9IHRoaXMucm91dGVDaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVTaG93Rm9ybSA9IHRoaXMuaGFuZGxlU2hvd0Zvcm0uYmluZCh0aGlzKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgaGFuZGxlRGVsKCkge1xyXG4gICAgY29uc3QgeyBpZCwgZGVsQnV0dG9uU3RvcmUsIGxpc3RTdG9yZSB9ID0gdGhpcy5wcm9wcztcclxuICAgIGF3YWl0IGRlbEJ1dHRvblN0b3JlLmRlbEFydGljbGUoeyBpZCB9KTtcclxuICAgIGxpc3RTdG9yZS5kZWxMaXN0Tm90ZSh7IGlkIH0pXHJcbiAgfVxyXG5cclxuICBoYW5kbGVTaG93Rm9ybSgpIHtcclxuICAgIGNvbnN0IHsgc2hvd0Zvcm0gfSA9IHRoaXMuc3RhdGU7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93Rm9ybSA6ICFzaG93Rm9ybX0pXHJcbiAgfVxyXG5cclxuICBhc3luYyByb3V0ZUNoYW5nZSgpIHsgICAgXHJcbiAgICBjb25zdCB7IGlkLCByb3V0aW5nLCBsaXN0U3RvcmUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBsZXQgcGF0aCA9IGAke2lkfWA7XHJcbiAgICBhd2FpdCBsaXN0U3RvcmUuZ2V0Tm90ZUJ5SWQoeyBpZCB9KVxyXG4gICAgcmV0dXJuIHJvdXRpbmcuaGlzdG9yeS5wdXNoKHBhdGgpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBzaG93Rm9ybSB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgY29uc3QgeyBpZCB9ID0gdGhpcy5wcm9wc1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3RlIGJ0bl9hbGxfY2hhbmdlIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cIm5vdGUgYnRuX2RlbGV0ZSBidG4gYnRuLXN1Y2Nlc3MgYnRuLXNtXCIgb25DbGljaz17dGhpcy5oYW5kbGVEZWx9PntpMThuZXh0LnQoJ2J0bi1kZWxldGUnKX08L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJub3RlIGJ0bl9zaG93X2RldGFpbCBidG4gYnRuLXN1Y2Nlc3MgYnRuLXNtXCIgb25DbGljaz17dGhpcy5yb3V0ZUNoYW5nZX0+e2kxOG5leHQudCgnYnRuLXNob3ctZGV0YWlsJyl9PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibm90ZSBidG5fY2hhbmdlIGJ0biBidG4tc3VjY2VzcyBidG4tc21cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNob3dGb3JtfT57aTE4bmV4dC50KCdidG4tY2hhbmdlJyl9PC9idXR0b24+XHJcbiAgICAgICAge3Nob3dGb3JtID8gPENoYW5nZUZvcm0gaWQ9e2lkfSB1cGRhdGVTaG93Rm9ybT17dGhpcy5oYW5kbGVTaG93Rm9ybX0gLz4gOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5EZWxCdXR0b24uZGVmYXVsdFByb3BzID0ge1xyXG4gIGlkOiAnJyxcclxuICBkZWxCdXR0b25TdG9yZTogc3RvcmVzLmRlbEJ1dHRvblN0b3JlLFxyXG59O1xyXG5cclxuRGVsQnV0dG9uLnByb3BUeXBlcyA9IHtcclxuICBpZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgUHJvcFR5cGVzLnN0cmluZ1xyXG4gIF0pLFxyXG4gIGRlbEJ1dHRvblN0b3JlOiAgbW9ieFByb3BUeXBlcy5vYmplY3RPck9ic2VydmFibGVPYmplY3QsXHJcbiAgbGlzdFN0b3JlOiBtb2J4UHJvcFR5cGVzLm9iamVjdE9yT2JzZXJ2YWJsZU9iamVjdCxcclxuICByb3V0aW5nOiBtb2J4UHJvcFR5cGVzLm9iamVjdE9yT2JzZXJ2YWJsZU9iamVjdCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVsQnV0dG9uO1xyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xyXG5pbXBvcnQgRGVsQnV0dG9uIGZyb20gXCIuL0RlbEJ1dHRvblwiXHJcbmltcG9ydCBcIi4vZGVsLWJ1dHRvbi1zdHlsZS5jc3NcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCkoRGVsQnV0dG9uKVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9sYWJlbC1oYXMtZm9yICovXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGkxOG5leHQgZnJvbSAnaTE4bmV4dCdcclxuaW1wb3J0IHsgb2JzZXJ2ZXIsIGluamVjdCwgUHJvcFR5cGVzIGFzIG1vYnhQcm9wVHlwZXMgfSBmcm9tICdtb2J4LXJlYWN0JztcclxuaW1wb3J0IEFsZXJ0IGZyb20gJy4uL2FsZXJ0L2luZGV4JztcclxuaW1wb3J0IHN0b3JlcyBmcm9tICcuLi8uLi9zdG9yZS9pbmRleCdcclxuXHJcbkBpbmplY3QoJ2Zvcm1TdG9yZScsICdsaXN0U3RvcmUnKVxyXG5Ab2JzZXJ2ZXJcclxuY2xhc3MgQ29ubmVjdGVkRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB0aXRsZTogJycsXHJcbiAgICAgIG1lc3NhZ2U6IGZhbHNlLFxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpXHJcbiAgfVxyXG5cclxuICBoYW5kbGVDaGFuZ2UgKGV2ZW50KSB7XHJcbiAgICBjb25zdCB0aXRsZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyB0aXRsZTogdGl0bGUgfSlcclxuICB9XHJcblxyXG4gIGFzeW5jIGhhbmRsZVN1Ym1pdCAoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnN0IHsgZm9ybVN0b3JlLCBsaXN0U3RvcmUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCB7IHRpdGxlIH0gPSB0aGlzLnN0YXRlXHJcbiAgICBpZiAodGl0bGUpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2U6IGZhbHNlIH0pXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0aXRsZTogJycgfSlcclxuICAgICAgYXdhaXQgZm9ybVN0b3JlLmFkZEFydGljbGUoeyB0aXRsZSB9KVxyXG4gICAgICBsaXN0U3RvcmUuYWRkTGlzdE5ld05vdGUoZm9ybVN0b3JlLm5ld0xpc3QpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTogdHJ1ZSB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIGNvbnN0IHsgdGl0bGUsIG1lc3NhZ2UgfSA9IHRoaXMuc3RhdGVcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm1cIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIHsgbWVzc2FnZSA/IDxBbGVydCBtZXNzYWdlPXtpMThuZXh0LnQoJ2FsZXJ0Jyl9IC8+IDogbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0gZm9ybV9pbnB1dCBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCI+e2kxOG5leHQudCgndGl0bGUnKX08L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgaWQ9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJmb3JtIGJ0bl9jcmVhdGUgYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbFwiPlxyXG4gICAgICAgICAge2kxOG5leHQudCgnYnRuLWNyZWF0ZScpfVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5cclxuQ29ubmVjdGVkRm9ybS5wcm9wVHlwZXMgPSB7XHJcbiAgZm9ybVN0b3JlOiAgbW9ieFByb3BUeXBlcy5vYmplY3RPck9ic2VydmFibGVPYmplY3QsXHJcbiAgbGlzdFN0b3JlOiAgbW9ieFByb3BUeXBlcy5vYmplY3RPck9ic2VydmFibGVPYmplY3QsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbm5lY3RlZEZvcm1cclxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuaW1wb3J0IFwiLi9mb3JtLXN0eWxlLmNzc1wiXHJcbmltcG9ydCBDb25uZWN0ZWRGb3JtIGZyb20gXCIuL0Zvcm1cIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCkoQ29ubmVjdGVkRm9ybSk7IiwiaW1wb3J0IGkxOG4gZnJvbSAnaTE4bmV4dCdcclxuaW1wb3J0IHsgaW5pdFJlYWN0STE4bmV4dCB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXHJcblxyXG4vLyB0aGUgdHJhbnNsYXRpb25zXHJcbi8vICh0aXAgbW92ZSB0aGVtIGluIGEgSlNPTiBmaWxlIGFuZCBpbXBvcnQgdGhlbSlcclxuY29uc3QgcmVzb3VyY2VzID0ge1xyXG4gIGVuOiB7XHJcbiAgICB0cmFuc2xhdGlvbjoge1xyXG4gICAgICAnY3JlYXRlJzogJ0NSRUFURSdcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmkxOG5cclxuICAudXNlKGluaXRSZWFjdEkxOG5leHQpIC8vIHBhc3NlcyBpMThuIGRvd24gdG8gcmVhY3QtaTE4bmV4dFxyXG4gIC5pbml0KHtcclxuICAgIHJlc291cmNlcyxcclxuICAgIGxuZzogJ2VuJyxcclxuXHJcbiAgICBrZXlTZXBhcmF0b3I6IGZhbHNlLCAvLyB3ZSBkbyBub3QgdXNlIGtleXMgaW4gZm9ybSBtZXNzYWdlcy53ZWxjb21lXHJcblxyXG4gICAgaW50ZXJwb2xhdGlvbjoge1xyXG4gICAgICBlc2NhcGVWYWx1ZTogZmFsc2UgLy8gcmVhY3QgYWxyZWFkeSBzYWZlcyBmcm9tIHhzc1xyXG4gICAgfVxyXG4gIH0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBpMThuXHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1vbmUtZXhwcmVzc2lvbi1wZXItbGluZSAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBvYnNlcnZlciwgaW5qZWN0LCBQcm9wVHlwZXMgYXMgbW9ieFByb3BUeXBlcyB9IGZyb20gJ21vYngtcmVhY3QnO1xyXG5pbXBvcnQgaTE4bmV4dCBmcm9tICdpMThuZXh0JztcclxuXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vZGVsQnV0dG9uL2luZGV4JztcclxuaW1wb3J0IFByZWxvZGVyIGZyb20gJy4uLy4uLy4uL3ByZWxvYWRlci8yNS5naWYnO1xyXG5cclxuQGluamVjdCgnbGlzdFN0b3JlJywgJ2Zvcm1TdG9yZScsICdkZWxCdXR0b25TdG9yZScsICdjaGFuZ2VGb3JtU3RvcmUnKVxyXG5Ab2JzZXJ2ZXJcclxuY2xhc3MgSXRlbUxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBzdGF0ZSA9IHtcclxuICAgIGhvd19tYW55OiAxMCxcclxuICB9XHJcblxyXG4gIEhvd01heSA9IChldmVudCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGhvd19tYW55OiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICByYW5kb21EYXRhID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBsaXN0U3RvcmUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCB7IGhvd19tYW55IH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgbGlzdFN0b3JlLnJhbmRvbU5vdGVzKHsgbnVtOiBob3dfbWFueX0pXHJcbiAgfVxyXG5cclxuICBkZWZhdWx0Q2xhc3MgKGRhdGEpIHtcclxuICAgIGlmICghZGF0YS5pZCkge1xyXG4gICAgICByZXR1cm4gYG5vdGVzX2xpc3Qgbm90ZSAke2RhdGF9YFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGBub3Rlc19saXN0ICR7ZGF0YS5hZGRDbGFzc30gbm90ZSAke2RhdGEuaWR9YFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2xhc3MgKHZhbHVlKSB7XHJcbiAgICB0aGlzLmRlZmF1bHRDbGFzcyh2YWx1ZSlcclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICBjb25zdCB7bGlzdFN0b3JlICwgZm9ybVN0b3JlLCBkZWxCdXR0b25TdG9yZSwgY2hhbmdlRm9ybVN0b3JlfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICBpZiAobGlzdFN0b3JlLmFyY3RpY2xlSGFzRXJyb3JlZCkge1xyXG4gICAgICByZXR1cm4gPHAgY2xhc3NOYW1lPVwiZXJyb3JcIj5Tb3JyeSEgVGhlcmUgd2FzIGFuIGVycm9yIGxvYWRpbmcgdGhlIGl0ZW1zLCB0cnkgbGF0ZXIgcGxlYXNlLjwvcD5cclxuICAgIH1cclxuXHJcbiAgICBpZiAobGlzdFN0b3JlLmFyY3RpY2xlSXNMb2FkaW5nKSB7XHJcbiAgICAgIHJldHVybiA8aW1nIHNyYz17UHJlbG9kZXJ9IGFsdD1cImxvYWRpbmcuLi5cIiAvPlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gKGl0ZW0pID0+e1xyXG4gICAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIHtOdW1iZXIoaXRlbS5pZCkgPT09IChOdW1iZXIoZGVsQnV0dG9uU3RvcmUubm90ZUlzRGVsZXRlZC5pZCkgfHwgTnVtYmVyKGNoYW5nZUZvcm1TdG9yZS5jaGFuZ2UuaWQpKSA/XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtQcmVsb2Rlcn0gYWx0PVwibG9hZGluZy4uLlwiIC8+IDogaXRlbS50aXRsZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYnV0dG9uID0gKGl0ZW0pID0+eyBcclxuICAgICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICB7TnVtYmVyKGl0ZW0uaWQpID09PSBOdW1iZXIoZGVsQnV0dG9uU3RvcmUubm90ZUlzRGVsZXRlZC5pZCkgPyBudWxsIDpcclxuICAgICAgICAgIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibm90ZXNfbGlzdCBzZXBhcmF0b3JcIiAvPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByYW5kb21haXplciA9ICgpID0+e1xyXG4gICAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhXCI+XHJcbiAgICAgICAgICA8cD57aTE4bmV4dC50KCdsaXN0X2VtcHR5Jyl9PC9wPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibm90ZSBidG5fc2hvd19kZXRhaWwgYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucmFuZG9tRGF0YX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgT19PXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBpbnB1dF9pbmxpbmVcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nIEhvdyBtdWNoJ1xyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5Ib3dNYXl9IFxyXG4gICAgICAgICAgLz4gIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibm90ZXNfbGlzdFwiPlxyXG4gICAgICAgICAge0FycmF5LmZyb20obGlzdFN0b3JlLmxpc3QpLmxlbmd0aCA+IDAgPyBsaXN0U3RvcmUubGlzdC5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgPGxpIGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPVwibm90ZXNfbGlzdCBub3RlXCI+XHJcbiAgICAgICAgICAgICAge3RpdGxlKGl0ZW0pfVxyXG4gICAgICAgICAgICAgIHtidXR0b24oaXRlbSl9XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApKSA6IHJhbmRvbWFpemVyKCl9XHJcbiAgICAgICAgICB7Zm9ybVN0b3JlLmFyY3RpY2xlQ3JlYXRlTG9hZGluZyA/IDxpbWcgc3JjPXtQcmVsb2Rlcn0gYWx0PVwibG9hZGluZy4uLlwiIC8+IDogbnVsbH1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbkl0ZW1MaXN0LnByb3BUeXBlcyA9IHtcclxuICBkZWxCdXR0b25TdG9yZTogIG1vYnhQcm9wVHlwZXMub2JqZWN0T3JPYnNlcnZhYmxlT2JqZWN0LFxyXG4gIGxpc3RTdG9yZTogbW9ieFByb3BUeXBlcy5vYmplY3RPck9ic2VydmFibGVPYmplY3QsXHJcbiAgZm9ybVN0b3JlOiBtb2J4UHJvcFR5cGVzLm9iamVjdE9yT2JzZXJ2YWJsZU9iamVjdCxcclxuICBjaGFuZ2VGb3JtU3RvcmU6IG1vYnhQcm9wVHlwZXMub2JqZWN0T3JPYnNlcnZhYmxlT2JqZWN0LFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJdGVtTGlzdFxyXG4iLCJpbXBvcnQgSXRlbUxpc3QgZnJvbSAnLi9MaXN0J1xyXG5pbXBvcnQgJy4vbGlzdC1zdHlsZS5jc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJdGVtTGlzdFxyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgb2JzZXJ2ZXIsIGluamVjdCwgUHJvcFR5cGVzIGFzIG1vYnhQcm9wVHlwZXMgfSBmcm9tICdtb2J4LXJlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEJ1dHRvbkRldGFpbHMgZnJvbSAnLi4vYnV0dG9uRGV0YWlscy9pbmRleCc7XHJcbmltcG9ydCBQcmVsb2RlciBmcm9tICcuLi8uLi8uLi9wcmVsb2FkZXIvMjUuZ2lmJztcclxuaW1wb3J0IHN0b3JlcyBmcm9tICcuLi8uLi9zdG9yZSc7XHJcblxyXG5AaW5qZWN0KCdsaXN0U3RvcmUnLCAnY2hhbmdlRm9ybVN0b3JlJylcclxuQG9ic2VydmVyXHJcbmNsYXNzIENvbm5lY3RlZERldGFpbHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgY29uc3QgeyBpZCwgbGlzdFN0b3JlLCBjaGFuZ2VGb3JtU3RvcmUgfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICBjb25zdCBub3RlID0gbGlzdFN0b3JlLmxpc3RfY2hlY2tcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgeyhOdW1iZXIoaWQpID09PSAgTnVtYmVyKGNoYW5nZUZvcm1TdG9yZS5jaGFuZ2UuaWQpKSB8fCAobGlzdFN0b3JlLmFyY3RpY2xlSXNMb2FkaW5nKT9cclxuICAgICAgICAgIDxpbWcgc3JjPXtQcmVsb2Rlcn0gYWx0PVwibG9hZGluZy4uLlwiIC8+IDogPGgxPntub3RlID8gbm90ZS50aXRsZSA6IG51bGx9PC9oMT5cclxuICAgICAgICB9XHJcbiAgICAgICAge2xpc3RTdG9yZS5DaGVja0hhc0Vycm9yZWQgP1xyXG4gICAgICAgIDxoMT4gUGFnZSBub3QgZm91bmQgPC9oMT5cclxuICAgICAgICA6IDxCdXR0b25EZXRhaWxzXHJcbiAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICAvPiBcclxuICAgICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuQ29ubmVjdGVkRGV0YWlscy5wcm9wVHlwZXMgPSB7XHJcbiAgaWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgUHJvcFR5cGVzLm51bWJlcixcclxuICAgIFByb3BUeXBlcy5zdHJpbmdcclxuICBdKSxcclxuICBjaGFuZ2VGb3JtU3RvcmU6IG1vYnhQcm9wVHlwZXMub2JqZWN0T3JPYnNlcnZhYmxlT2JqZWN0LFxyXG4gIGxpc3RTdG9yZTogbW9ieFByb3BUeXBlcy5vYmplY3RPck9ic2VydmFibGVPYmplY3QsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbm5lY3RlZERldGFpbHNcclxuIiwiaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcbmltcG9ydCBDb25uZWN0ZWREZXRhaWxzIGZyb20gJy4vU2hvd0RldGFpbHMnO1xyXG5pbXBvcnQgJy4vc2hvdy1kZXRhaWxzLXN0eWxlLmNzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbigpKENvbm5lY3RlZERldGFpbHMpXHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwidmFyIG1hcCA9IHtcblx0XCIuL2VuLmpzb25cIjogXCIuL3NyYy9qcy9jb21wb25lbnRzL3N3aXRjaGluZ0xhbmd1YWdlL2VuLmpzb25cIixcblx0XCIuL3J1Lmpzb25cIjogXCIuL3NyYy9qcy9jb21wb25lbnRzL3N3aXRjaGluZ0xhbmd1YWdlL3J1Lmpzb25cIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvanMvY29tcG9uZW50cy9zd2l0Y2hpbmdMYW5ndWFnZSBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC5qc29uJFwiOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGkxOG5leHQgZnJvbSBcImkxOG5leHRcIjtcclxuXHJcbmNsYXNzIENvbm5lY3RTd2ljaCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuaGFuZGxlU3dpdGNoRW4gPSB0aGlzLmhhbmRsZVN3aXRjaEVuLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlU3dpdGNoUnUgPSB0aGlzLmhhbmRsZVN3aXRjaFJ1LmJpbmQodGhpcylcclxuICB9XHJcblxyXG4gIHN0YXRlID0ge1xyXG4gICAgYWN0aXZlOiBcImJ0bl9hY3RpdmVcIixcclxuICAgIGRlZmF1bHRDbGFzc05hbWVFTjogXCJoZWFkZXIgYnRuX3N3aXRjaCBidG5fYWN0aXZlIGVuXCIsXHJcbiAgICBkZWZhdWx0Q2xhc3NOYW1lUlU6IFwiaGVhZGVyIGJ0bl9zd2l0Y2ggcnVcIixcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgdGhpcy5zZXRMYW5ndWFnZSgpO1xyXG4gIH1cclxuICBcclxuICBzZXRMYW5ndWFnZShsYW5ndWFnZSkge1xyXG4gICAgaWYoIWxhbmd1YWdlKXtcclxuICAgICAgIGxhbmd1YWdlID0gJ2VuJ1xyXG4gICAgfVxyXG4gICAgbGV0IGxhbmcgPSByZXF1aXJlKGAuLyR7bGFuZ3VhZ2V9Lmpzb25gKVxyXG4gICAgaTE4bmV4dC5pbml0KHtcclxuICAgICAgbG5nOiBsYW5ndWFnZSxcclxuICAgICAgcmVzb3VyY2VzOiBsYW5nXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVN3aXRjaEVuID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRMYW5ndWFnZSgnZW4nKVxyXG4gICAgdGhpcy5zZXRTdGF0ZSggeyBkZWZhdWx0Q2xhc3NOYW1lUlU6IGBoZWFkZXIgYnRuX3N3aXRjaCBydWAgfSApXHJcbiAgICB0aGlzLnNldFN0YXRlKCB7IGRlZmF1bHRDbGFzc05hbWVFTjogYGhlYWRlciBidG5fc3dpdGNoICAke3RoaXMuc3RhdGUuYWN0aXZlfSBlbmAgfSApXHJcbiAgfVxyXG5cclxuICBoYW5kbGVTd2l0Y2hSdSA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0TGFuZ3VhZ2UoJ3J1JylcclxuICAgIHRoaXMuc2V0U3RhdGUoIHsgZGVmYXVsdENsYXNzTmFtZVJVOiBgaGVhZGVyIGJ0bl9zd2l0Y2ggJHt0aGlzLnN0YXRlLmFjdGl2ZX0gcnVgIH0gKVxyXG4gICAgdGhpcy5zZXRTdGF0ZSggeyBkZWZhdWx0Q2xhc3NOYW1lRU46IGBoZWFkZXIgYnRuX3N3aXRjaCBlbmAgfSApXHJcbiAgfVxyXG4gIFxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtkZWZhdWx0Q2xhc3NOYW1lRU4sIGRlZmF1bHRDbGFzc05hbWVSVX0gPSB0aGlzLnN0YXRlXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlciBzd2l0Y2ggY29sLXNtLTMgb2Zmc2V0LXNtLTZcIj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtkZWZhdWx0Q2xhc3NOYW1lRU59IG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3dpdGNoRW59PntpMThuZXh0LnQoJ2VuZ2xpc2gnKX08L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtkZWZhdWx0Q2xhc3NOYW1lUlV9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3dpdGNoUnV9PntpMThuZXh0LnQoJ3J1c3NpYW4nKX08L2J1dHRvbj5cclxuICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbm5lY3RTd2ljaFxyXG4iLCJpbXBvcnQgU3dpdGNoIGZyb20gJy4vU3dpdGNobGFuZ3VhZ2UnO1xyXG5pbXBvcnQgJy4vc3dpdGNoLXN0eWxlLmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTd2l0Y2hcclxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgeyBvYnNlcnZhYmxlLCBhY3Rpb259IGZyb20gJ21vYngnO1xyXG5pbXBvcnQgYXBpIGZyb20gJy4vYXBpJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1TdG9yZXtcclxuXHJcbiAgQG9ic2VydmFibGUgbG9hZCA9IGZhbHNlO1xyXG5cclxuICBAb2JzZXJ2YWJsZSB0aXRsZSA9ICcnO1xyXG5cclxuICBAb2JzZXJ2YWJsZSBhcmN0aWNsZUNyZWF0ZUxvYWRpbmcgPSBmYWxzZTtcclxuXHJcbiAgQG9ic2VydmFibGUgYXJjdGljbGVIYXNFcnJvcmVkID0gZmFsc2VcclxuXHJcbiAgQG9ic2VydmFibGUgbmV3TGlzdCA9IFtdO1xyXG5cclxuICBAb2JzZXJ2YWJsZSBtZXNzYWdlID0gZmFsc2U7XHJcblxyXG4gIEBhY3Rpb25cclxuICBoYW5kbGVDaGFuZ2VMaXN0KGRhdGEpIHtcclxuICAgIHRoaXMubmV3TGlzdCA9IG9ic2VydmFibGUuYXJyYXkoKGRhdGEpLCB7IGRlZXA6IGZhbHNlIH0pXHJcbiAgfVxyXG5cclxuICBAYWN0aW9uLmJvdW5kXHJcbiAgaGFuZGxlQ2hhbmdlTWVzc2FnZShib29sKSB7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBib29sXHJcbiAgfVxyXG5cclxuICBAYWN0aW9uLmJvdW5kXHJcbiAgaGFuZGxlQ2hhbmdlVGl0bGUoZGF0YSkge1xyXG4gICAgdGhpcy50aXRsZSA9IGRhdGFcclxuICB9XHJcblxyXG4gIEBhY3Rpb24uYm91bmRcclxuICBnZXRUaXRsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnRpdGxlXHJcbiAgfVxyXG5cclxuICBAYWN0aW9uLmJvdW5kXHJcbiAgYXN5bmMgYWRkQXJ0aWNsZSAoZGF0YSkge1xyXG4gICAgICAvLyBjb25zdCB1cmwgPSAnaHR0cHM6Ly9wcml2YXRlLWFub24tNTM1NTEwZWU2Yi1ub3RlMTAuYXBpYXJ5LW1vY2suY29tL25vdGVzJ1xyXG4gICAgICBjb25zdCB1cmwgPSBhcGkuYWRkTm90ZS5lbmRQb2ludFxyXG4gIFxyXG4gICAgICB0aGlzLmhhbmRsZUNoYW5nZU1lc3NhZ2UoZmFsc2UpXHJcbiAgICAgIHRoaXMuYXJjdGljbGVDcmVhdGVMb2FkaW5nID0gdHJ1ZVxyXG4gIFxyXG4gICAgICByZXR1cm4gZmV0Y2godXJsLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1ldGhvZDogYXBpLmFkZE5vdGUubWV0aG9kLFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB0aXRsZTogZGF0YS50aXRsZSB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy5hcmN0aWNsZUNyZWF0ZUxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgdGhpcy5hcmN0aWNsZUhhc0Vycm9yZWQgPSBmYWxzZVxyXG5cclxuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChpdGVtcyk9PiB0aGlzLmhhbmRsZUNoYW5nZUxpc3QoaXRlbXMpKVxyXG4gICAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmFyY3RpY2xlSGFzRXJyb3JlZCA9IHRydWUpXHJcbiAgICB9XHJcbiAgfVxyXG4iLCJjb25zdCBwcm90b2NvbCA9ICdodHRwOi8vJztcclxuY29uc3QgYmFzZVBvaW50ID0gJ2xvY2FsaG9zdCc7XHJcbmNvbnN0IHBvcnQgPSAzMDAxO1xyXG5jb25zdCBiYXNlVXJsID0gYCR7cHJvdG9jb2x9JHtiYXNlUG9pbnR9OiR7cG9ydH1gO1xyXG5cclxuY29uc3QgYXBpID0ge1xyXG4gIGdldE5vdGVzOiB7bWV0aG9kOiBcIkdFVFwiICxlbmRQb2ludDogYCR7YmFzZVVybH0vbm90ZXNgfSxcclxuICBnZXROb3RlQnlJZDp7bWV0aG9kOiBcIkdFVFwiICxlbmRQb2ludDogYCR7YmFzZVVybH0vbm90ZXMvYH0sXHJcbiAgYWRkTm90ZToge21ldGhvZDogXCJQT1NUXCIgLGVuZFBvaW50OiBgJHtiYXNlVXJsfS9ub3Rlc2B9LFxyXG4gIGRlbE5vdGVCeUlkOiB7bWV0aG9kOiBcIkRFTEVURVwiICxlbmRQb2ludDogYCR7YmFzZVVybH0vbm90ZXMvYH0sXHJcbiAgdXBkYXRlTm90ZUJ5SWQ6IHttZXRob2Q6IFwiUFVUXCIgLGVuZFBvaW50OiBgJHtiYXNlVXJsfS9ub3Rlcy9gfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBpOyIsImltcG9ydCB7IG9ic2VydmFibGUsIGFjdGlvbiwgY29tcHV0ZWR9IGZyb20gJ21vYngnO1xyXG5pbXBvcnQgYXBpIGZyb20gJy4vYXBpJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbkRldGFpbHNTdG9yZXtcclxuXHJcbiAgQG9ic2VydmFibGUgRGVsQnV0dG9uU3RvcmVFcnJvcmVkID0gZmFsc2U7XHJcblxyXG4gIEBvYnNlcnZhYmxlIG5vdGVJc0RlbGV0ZWQgPSB7fTtcclxuXHJcbiAgQGFjdGlvblxyXG4gIGRlbEFydGljbGUgKGRhdGEpIHtcclxuICAgIGxldCBzZXQgPSB7IGRlbGV0ZTogdHJ1ZSwgaWQ6IGRhdGEuaWQgfTtcclxuICBcclxuICAgIHRoaXMubm90ZUlzRGVsZXRlZCA9IHNldDtcclxuICBcclxuICAgIGNvbnN0IHVybCA9IGAke2FwaS5kZWxOb3RlQnlJZC5lbmRQb2ludH0ke2RhdGEuaWR9YFxyXG4gIFxyXG4gICAgcmV0dXJuIGZldGNoKHVybCwgeyBtZXRob2Q6IGFwaS5kZWxOb3RlQnlJZC5tZXRob2QgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4ge3RoaXMuZGVsTGlzdE5vdGUoZGF0YSk7ICB0aGlzLm5vdGVJc0RlbGV0ZWQgPSB7IGRlbGV0ZTogZmFsc2UgfTt9KVxyXG4gICAgLmNhdGNoKCgpID0+IHRoaXMuRGVsQnV0dG9uU3RvcmVFcnJvcmVkID0gdHJ1ZSlcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBvYnNlcnZhYmxlLCBhY3Rpb24gfSBmcm9tICdtb2J4JztcclxuaW1wb3J0IGFwaSBmcm9tICcuL2FwaSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFuZ2VGb3JtU3RvcmV7XHJcblxyXG4gIEBvYnNlcnZhYmxlIGNoYW5nZUZvcm1TdG9yZUVycm9yZWQgPSBmYWxzZTtcclxuXHJcbiAgQG9ic2VydmFibGUgY2hhbmdlID0gZmFsc2U7XHJcblxyXG4gIEBvYnNlcnZhYmxlIGNoYW5nZUxpc3QgPSBbXVxyXG5cclxuICBAYWN0aW9uXHJcbiAgY2hhbmdlQXJ0aWNsZShkYXRhKSB7XHJcblxyXG4gICAgY29uc3QgdXJsID0gIGAke2FwaS51cGRhdGVOb3RlQnlJZC5lbmRQb2ludH0ke2RhdGEuaWR9YDtcclxuXHJcbiAgICB0aGlzLmNoYW5nZSA9IHsgY2hhbmdlOiB0cnVlICwgaWQ6IGRhdGEuaWR9O1xyXG4gIFxyXG4gICAgcmV0dXJuIGZldGNoKHVybCxcclxuICAgICAge1xyXG4gICAgICAgIG1ldGhvZDogYXBpLnVwZGF0ZU5vdGVCeUlkLm1ldGhvZCxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHRpdGxlOiBkYXRhLnRpdGxlIH0pXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jaGFuZ2UgPSB7Y2hhbmdlOiBmYWxzZX1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChpdGVtcykgPT4ge3RoaXMuY2hhbmdlTGlzdCA9IGl0ZW1zfSlcclxuICAgIC5jYXRjaCgoKSA9PiB0aGlzLmNoYW5nZUZvcm1TdG9yZUVycm9yZWQgPSB0cnVlKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBvYnNlcnZhYmxlLCBhY3Rpb24sIGNvbXB1dGVkfSBmcm9tICdtb2J4JztcclxuLy8gaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IGxpc3RTdG9yZSBmcm9tICcuL2xpc3RTdG9yZSc7XHJcbmltcG9ydCBhcGkgZnJvbSAnLi9hcGknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVsQnV0dG9uU3RvcmUge1xyXG5cclxuXHJcbiAgQG9ic2VydmFibGUgRGVsQnV0dG9uU3RvcmVFcnJvcmVkID0gZmFsc2U7XHJcblxyXG4gIEBvYnNlcnZhYmxlIG5vdGVJc0RlbGV0ZWQgPSB7fTtcclxuXHJcbiAgQG9ic2VydmFibGUgc2hvdyA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuc2hvdyA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgQGFjdGlvbi5ib3VuZFxyXG4gIHNob3dMaXN0KCkge1xyXG4gICAgdGhpcy5zaG93ID0gIXRoaXMuc2hvdztcclxuICB9XHJcblxyXG4gIEBhY3Rpb25cclxuICBkZWxBcnRpY2xlIChkYXRhKSB7XHJcbiAgICBsZXQgc2V0ID0geyBkZWxldGU6IHRydWUsIGlkOiBkYXRhLmlkIH07XHJcbiAgXHJcbiAgICB0aGlzLm5vdGVJc0RlbGV0ZWQgPSBzZXQ7XHJcbiAgXHJcbiAgICBjb25zdCB1cmwgPSAgYCR7YXBpLmRlbE5vdGVCeUlkLmVuZFBvaW50fSR7ZGF0YS5pZH1gXHJcbiAgXHJcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7IG1ldGhvZDogYXBpLmRlbE5vdGVCeUlkLm1ldGhvZH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5ub3RlSXNEZWxldGVkID0geyBkZWxldGU6IGZhbHNlIH07XHJcbiAgICAgICAgdGhpcy5hcmN0aWNsZUhhc0Vycm9yZWQgPSBmYWxzZTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4gbGlzdFN0b3JlLmRlbExpc3ROb3RlKGRhdGEpKVxyXG4gICAgICAuY2F0Y2goKCkgPT4gdGhpcy5EZWxCdXR0b25TdG9yZUVycm9yZWQgPSB0cnVlKVxyXG4gIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHtSb3V0ZXJTdG9yZX0gZnJvbSAnbW9ieC1yZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgQnV0dG9uRGV0YWlsc1N0b3JlIGZyb20gJy4vYnV0dG9uRGV0YWlsc1N0b3JlJztcclxuaW1wb3J0IENoYW5nZUZvcm1TdG9yZSBmcm9tICcuL2NoYW5nZUZvcm1TdG9yZSc7XHJcbmltcG9ydCBEZWxCdXR0b25TdG9yZSBmcm9tICcuL2RlbEJ1dHRvblN0b3JlJztcclxuaW1wb3J0IEZvcm1TdG9yZSBmcm9tICcuL0Zvcm1TdG9yZSc7XHJcbmltcG9ydCBMaXN0U3RvcmUgZnJvbSAnLi9saXN0U3RvcmUnO1xyXG5cclxuY29uc3Qgcm91dGluZ1N0b3JlID0gbmV3IFJvdXRlclN0b3JlKCk7XHJcblxyXG5jb25zdCBzdG9yZXMgPSB7XHJcbiAgcm91dGluZzogcm91dGluZ1N0b3JlLFxyXG4gIGJ1dHRvbkRldGFpbHNTdG9yZTogbmV3IEJ1dHRvbkRldGFpbHNTdG9yZSgpLFxyXG4gIGNoYW5nZUZvcm1TdG9yZTogbmV3IENoYW5nZUZvcm1TdG9yZSgpLFxyXG4gIGRlbEJ1dHRvblN0b3JlOiBuZXcgRGVsQnV0dG9uU3RvcmUoKSxcclxuICBmb3JtU3RvcmU6IG5ldyBGb3JtU3RvcmUoKSxcclxuICBsaXN0U3RvcmU6IG5ldyBMaXN0U3RvcmUoKSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmVzIiwiaW1wb3J0IHsgb2JzZXJ2YWJsZSwgYWN0aW9uLCBhdXRvcnVuIH0gZnJvbSAnbW9ieCc7XHJcbmltcG9ydCBhcGkgZnJvbSAnLi9hcGknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdFN0b3JlIHtcclxuICBcclxuICBAb2JzZXJ2YWJsZSBsb2FkID0gZmFsc2U7XHJcblxyXG4gIEBvYnNlcnZhYmxlIHRpdGxlID0gJyc7XHJcblxyXG4gIEBvYnNlcnZhYmxlIGFyY3RpY2xlSXNMb2FkaW5nID0gZmFsc2U7XHJcblxyXG4gIEBvYnNlcnZhYmxlIGFyY3RpY2xlSGFzRXJyb3JlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihsaXN0LCBsaXN0X2NoZWNrLCBDaGVja0hhc0Vycm9yZWQpe1xyXG4gICAgbGlzdD8gdGhpcy5saXN0ID0gbGlzdCA6IHRoaXMubGlzdCA9IFtdO1xyXG4gICAgbGlzdF9jaGVjaz8gdGhpcy5saXN0X2NoZWNrID0gbGlzdF9jaGVjayA6IHRoaXMubGlzdF9jaGVjayA9IHt9O1xyXG4gICAgdGhpcy5DaGVja0hhc0Vycm9yZWQgPSBDaGVja0hhc0Vycm9yZWQ7XHJcbiAgfVxyXG5cclxuICBAYWN0aW9uXHJcbiAgYWRkTGlzdE5ld05vdGUgPSAoZGF0YSkgPT4ge1xyXG4gICAgdGhpcy5hcmN0aWNsZUlzTG9hZGluZyA9IHRydWVcclxuICAgIHRoaXMubGlzdCA9IG9ic2VydmFibGUuYXJyYXkodGhpcy5saXN0LmNvbmNhdChkYXRhW2RhdGEubGVuZ3RoLTFdKSlcclxuICAgIHRoaXMuYXJjdGljbGVJc0xvYWRpbmcgPSBmYWxzZVxyXG4gIH1cclxuXHJcbiAgQGFjdGlvblxyXG4gIHNldExpc3RDaGVjayA9IChkYXRhKSA9PiB7XHJcbiAgICB0aGlzLmFyY3RpY2xlSXNMb2FkaW5nID0gdHJ1ZVxyXG4gICAgdGhpcy5saXN0X2NoZWNrID0gZGF0YVxyXG4gICAgdGhpcy5hcmN0aWNsZUlzTG9hZGluZyA9IGZhbHNlXHJcbiAgfVxyXG5cclxuICBAYWN0aW9uLmJvdW5kXHJcbiAgZGVsTGlzdE5vdGUoZGF0YSkge1xyXG4gICAgdGhpcy5saXN0LnJlcGxhY2UodGhpcy5saXN0LmZpbHRlcigoZWwpID0+IE51bWJlcihlbC5pZCkgIT09IE51bWJlcihkYXRhLmlkKSkpXHJcbiAgfVxyXG5cclxuICBAYWN0aW9uLmJvdW5kXHJcbiAgY2hhbmdlTm90ZShkYXRhKSB7XHJcbiAgICB0aGlzLmxpc3QucmVwbGFjZShcclxuICAgICAgdGhpcy5saXN0LmZpbHRlcigoZWwpID0+IHtcclxuICAgICAgICBpZiAoZWwuaWQgPT0gTnVtYmVyKGRhdGEuaWQpKSB7XHJcbiAgICAgICAgZWwudGl0bGUgPSBkYXRhLnRpdGxlXHJcbiAgICAgICAgcmV0dXJuIGVsXHJcbiAgICAgICAgfSBlbHNlIHsgcmV0dXJuIGVsIH1cclxuICAgICAgfSlcclxuICAgIClcclxuICB9XHJcblxyXG4gIEBhY3Rpb24uYm91bmRcclxuICBnZXROb3RlQnlJZChkYXRhKSB7XHJcbiAgICB0aGlzLmFyY3RpY2xlSXNMb2FkaW5nID0gdHJ1ZVxyXG5cclxuICAgIGNvbnN0IHVybCA9IGAke2FwaS5nZXROb3RlQnlJZC5lbmRQb2ludH0ke2RhdGEuaWR9YFxyXG4gICAgcmV0dXJuIGZldGNoKHVybCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpXHJcbiAgICAgIH1cclxuICBcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigoaXRlbXMpID0+IHtcclxuICAgICAgdGhpcy5saXN0X2NoZWNrID0gb2JzZXJ2YWJsZShpdGVtcyk7XHJcbiAgICAgIHRoaXMuYXJjdGljbGVJc0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICB0aGlzLkNoZWNrSGFzRXJyb3JlZCA9IGZhbHNlXHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKCgpID0+IHt0aGlzLkNoZWNrSGFzRXJyb3JlZCA9IHRydWV9KVxyXG4gIH1cclxuXHJcbiAgQGFjdGlvbi5ib3VuZFxyXG4gIHJhbmRvbU5vdGVzKGRhdGEpIHtcclxuICAgICAgdGhpcy5hcmN0aWNsZUlzTG9hZGluZyA9IHRydWVcclxuICAgICAgdGhpcy5sb2FkID0gdHJ1ZTtcclxuXHJcbiAgICAgIGNvbnN0IHVybCA9IGAke2FwaS5nZXROb3Rlcy5lbmRQb2ludH0vcmFuZG9tLyR7ZGF0YS5udW19YFxyXG4gIFxyXG4gICAgICByZXR1cm4gZmV0Y2godXJsKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuYXJjdGljbGVIYXNFcnJvcmVkID0gZmFsc2VcclxuICBcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChpdGVtcyk9PiB7XHJcbiAgICAgICAgdGhpcy5saXN0ID0gb2JzZXJ2YWJsZS5hcnJheSh0aGlzLmxpc3QuY29uY2F0KGl0ZW1zKSwgeyBkZWVwOiBmYWxzZSB9KTtcclxuICAgICAgICB0aGlzLmFyY3RpY2xlSXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5hcmN0aWNsZUhhc0Vycm9yZWQgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5hcmN0aWNsZUlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB9KVxyXG4gIH1cclxufVxyXG4iLCJcclxuaW1wb3J0IHtSb3V0ZXJTdG9yZX0gZnJvbSAnbW9ieC1yZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgQnV0dG9uRGV0YWlsc1N0b3JlIGZyb20gJy4vYnV0dG9uRGV0YWlsc1N0b3JlJztcclxuaW1wb3J0IENoYW5nZUZvcm1TdG9yZSBmcm9tICcuL2NoYW5nZUZvcm1TdG9yZSc7XHJcbmltcG9ydCBEZWxCdXR0b25TdG9yZSBmcm9tICcuL2RlbEJ1dHRvblN0b3JlJztcclxuaW1wb3J0IEZvcm1TdG9yZSBmcm9tICcuL0Zvcm1TdG9yZSc7XHJcbmltcG9ydCBMaXN0U3RvcmUgZnJvbSAnLi9saXN0U3RvcmUnO1xyXG5pbXBvcnQgeyBvYnNlcnZhYmxlIH0gZnJvbSAnbW9ieCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm9vdFN0b3JlIHtcclxuICBjb25zdHJ1Y3Rvcihpbml0aWFsU3RhdGUpIHtcclxuICAgIHRoaXMucm91dGluZyA9IG5ldyBSb3V0ZXJTdG9yZShpbml0aWFsU3RhdGUucm91dGluZyksXHJcbiAgICB0aGlzLmJ1dHRvbkRldGFpbHNTdG9yZSA9IG5ldyBCdXR0b25EZXRhaWxzU3RvcmUoaW5pdGlhbFN0YXRlLmJ1dHRvbkRldGFpbHNTdG9yZSksXHJcbiAgICB0aGlzLmNoYW5nZUZvcm1TdG9yZSA9IG5ldyBDaGFuZ2VGb3JtU3RvcmUoaW5pdGlhbFN0YXRlLmNoYW5nZUZvcm1TdG9yZSksXHJcbiAgICB0aGlzLmRlbEJ1dHRvblN0b3JlID0gbmV3IERlbEJ1dHRvblN0b3JlKGluaXRpYWxTdGF0ZS5kZWxCdXR0b25TdG9yZSksXHJcbiAgICB0aGlzLmZvcm1TdG9yZSA9IG5ldyBGb3JtU3RvcmUoaW5pdGlhbFN0YXRlLmZvcm1TdG9yZSksXHJcbiAgICB0aGlzLmxpc3RTdG9yZSA9IG5ldyBMaXN0U3RvcmUoXHJcbiAgICAgICAgb2JzZXJ2YWJsZS5hcnJheShpbml0aWFsU3RhdGUubGlzdFN0b3JlLmxpc3QpLFxyXG4gICAgICAgIG9ic2VydmFibGUoaW5pdGlhbFN0YXRlLmxpc3RTdG9yZS5saXN0X2NoZWNrKSxcclxuICAgICAgICBpbml0aWFsU3RhdGUubGlzdFN0b3JlLkNoZWNrSGFzRXJyb3JlZFxyXG4gICAgICApXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY3JlYXRlQnJvd3Nlckhpc3RvcnkgfSBmcm9tICdoaXN0b3J5JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xyXG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdtb2J4LXJlYWN0JztcclxuaW1wb3J0IEFwcCBmcm9tICcuLi9zcmMvQXBwJztcclxuaW1wb3J0ICcuLi9zcmMvanMvY29tcG9uZW50cy9sYW5ndWFnZXMvaTE4bic7XHJcbmltcG9ydCB7c3luY0hpc3RvcnlXaXRoU3RvcmUgfSBmcm9tICdtb2J4LXJlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBSb290U3RvcmUgZnJvbSAnLi4vc3JjL2pzL3N0b3JlL3Jvb3RTdG9yZSdcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgY29uc3Qge3doeURpZFlvdVVwZGF0ZX0gPSByZXF1aXJlKCd3aHktZGlkLXlvdS11cGRhdGUnKVxyXG4gIHdoeURpZFlvdVVwZGF0ZShSZWFjdClcclxufVxyXG5cclxuY29uc3Qgcm9vdFN0b3JlID0gbmV3IFJvb3RTdG9yZSh3aW5kb3cuX19JTklUSUFMX1NUQVRFX18pO1xyXG5jb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xyXG5cclxuY29uc3QgYnJvd3Nlckhpc3RvcnkgPSBjcmVhdGVCcm93c2VySGlzdG9yeSgpO1xyXG5jb25zdCBoaXN0b3J5ID0gc3luY0hpc3RvcnlXaXRoU3RvcmUoYnJvd3Nlckhpc3RvcnksIHJvb3RTdG9yZS5yb3V0aW5nKTtcclxuXHJcblJlYWN0RE9NLmh5ZHJhdGUoXHJcbiAgPFByb3ZpZGVyIHsuLi5yb290U3RvcmV9PlxyXG4gICAgPFJvdXRlciBoaXN0b3J5PXtoaXN0b3J5fT5cclxuICAgICAgPEFwcCAvPlxyXG4gICAgPC9Sb3V0ZXI+XHJcbiAgPC9Qcm92aWRlcj4sXHJcbiAgZWxlbWVudFxyXG4pOyJdLCJzb3VyY2VSb290IjoiIn0=