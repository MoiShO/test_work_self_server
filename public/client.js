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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ButtonDeatails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ButtonDeatails */ "./src/js/components/buttonDetails/ButtonDeatails.jsx");


/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["withRouter"])(_ButtonDeatails__WEBPACK_IMPORTED_MODULE_1__["default"]));

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
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store */ "./src/js/store/index.js");





var _dec, _class;

/* eslint-disable jsx-a11y/label-has-for */






var ConnectedChangeForm = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["inject"])('listStore', 'changeFormStore'), _dec(_class =
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
      var _this$props, id, changeFormStore, listStore, updateShowForm, title;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              _this$props = this.props, id = _this$props.id, changeFormStore = _this$props.changeFormStore, listStore = _this$props.listStore, updateShowForm = _this$props.updateShowForm;
              title = this.state.title;

              if (!title) {
                _context.next = 12;
                break;
              }

              updateShowForm();
              _context.next = 7;
              return changeFormStore.changeArticle({
                title: title,
                id: id
              });

            case 7:
              _context.next = 9;
              return listStore.getNoteById({
                id: id
              });

            case 9:
              listStore.changeNote({
                title: title,
                id: id
              });
              _context.next = 13;
              break;

            case 12:
              this.setState({
                message: true
              });

            case 13:
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
ConnectedChangeForm.defaultProps = {
  id: '',
  changeFormStore: _store__WEBPACK_IMPORTED_MODULE_9__["default"].changeFormStore,
  updateShowForm: function updateShowForm() {
    return undefined;
  }
};
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/commonjs/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DelButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DelButton */ "./src/js/components/delButton/DelButton.jsx");
/* harmony import */ var _del_button_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./del-button-style.css */ "./src/js/components/delButton/del-button-style.css");
/* harmony import */ var _del_button_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_del_button_style_css__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["withRouter"])(Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["withTranslation"])()(_DelButton__WEBPACK_IMPORTED_MODULE_2__["default"])));

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
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/index.js");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _delButton_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../delButton/index */ "./src/js/components/delButton/index.js");


var _dec, _class, _temp;

/* eslint-disable react/jsx-one-expression-per-line */





var Preloder = "/public/1fe1a3d9bdc5b2d6988fdd11a4c10690.gif";
var ItemList = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["inject"])('listStore', 'formStore', 'delButtonStore', 'changeFormStore'), Object(react_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(_class = _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["observer"])(_class = (_temp =
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
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_delButton_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
        title: item.title,
        id: item.id
      })));
    };

    var randomaizer = function randomaizer() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "data"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, i18next__WEBPACK_IMPORTED_MODULE_4___default.a.t('list_empty')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
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
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component), _temp)) || _class) || _class) || _class);
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
ConnectedDetails.defaultProps = {
  changeFormStore: _store__WEBPACK_IMPORTED_MODULE_5__["default"].changeFormStore
};
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
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/applyDecoratedDescriptor */ "./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js");
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/initializerWarningHelper */ "./node_modules/@babel/runtime/helpers/initializerWarningHelper.js");
/* harmony import */ var _babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api */ "./src/js/store/api.js");





var _class, _descriptor, _descriptor2, _descriptor3, _temp;



var ButtonDetailsStore = (_class = (_temp =
/*#__PURE__*/
function () {
  function ButtonDetailsStore() {
    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "DelButtonStoreErrored", _descriptor, this);

    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "noteIsDeleted", _descriptor2, this);

    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "show", _descriptor3, this);
  }

  var _proto = ButtonDetailsStore.prototype;

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
      return _this.delListNote(data);
    })["catch"](function () {
      return _this.DelButtonStoreErrored = true;
    });
  };

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ButtonDetailsStore, [{
    key: "isOpen",
    get: function get() {
      return this.show;
    }
  }]);

  return ButtonDetailsStore;
}(), _temp), (_descriptor = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class.prototype, "DelButtonStoreErrored", [mobx__WEBPACK_IMPORTED_MODULE_4__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor2 = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class.prototype, "noteIsDeleted", [mobx__WEBPACK_IMPORTED_MODULE_4__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor3 = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class.prototype, "show", [mobx__WEBPACK_IMPORTED_MODULE_4__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class.prototype, "isOpen", [mobx__WEBPACK_IMPORTED_MODULE_4__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "isOpen"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class.prototype, "delArticle", [mobx__WEBPACK_IMPORTED_MODULE_4__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "delArticle"), _class.prototype)), _class);


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

    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "show", _descriptor2, this);

    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "change", _descriptor3, this);
  }

  var _proto = ChangeFormStore.prototype;

  _proto.changeArticle = function changeArticle(data) {
    var _this = this;

    var url = "" + _api__WEBPACK_IMPORTED_MODULE_4__["default"].updateNoteById.endPoint + data.id;
    var set = {
      change: true,
      id: data.id
    };
    this.change = set;
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
    }).then(function () {
      return data;
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
}), _descriptor2 = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1___default()(_class.prototype, "show", [mobx__WEBPACK_IMPORTED_MODULE_3__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor3 = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1___default()(_class.prototype, "change", [mobx__WEBPACK_IMPORTED_MODULE_3__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
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
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/applyDecoratedDescriptor */ "./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js");
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/initializerWarningHelper */ "./node_modules/@babel/runtime/helpers/initializerWarningHelper.js");
/* harmony import */ var _babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _listStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listStore */ "./src/js/store/listStore.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api */ "./src/js/store/api.js");





var _dec, _class, _descriptor, _descriptor2, _descriptor3, _temp;

 // import PropTypes from 'prop-types';



var DelButtonStore = (_dec = mobx__WEBPACK_IMPORTED_MODULE_4__["action"].bound, (_class = (_temp =
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
    var url = "" + _api__WEBPACK_IMPORTED_MODULE_6__["default"].delNoteById.endPoint + data.id;
    return fetch(url, {
      method: _api__WEBPACK_IMPORTED_MODULE_6__["default"].delNoteById.method
    }).then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      _this.noteIsDeleted = {
        "delete": false
      };
      _this.arcticleHasErrored = false;
    }).then(function () {
      return _listStore__WEBPACK_IMPORTED_MODULE_5__["default"].delListNote(data);
    })["catch"](function () {
      return _this.DelButtonStoreErrored = true;
    });
  };

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(DelButtonStore, [{
    key: "isOpen",
    get: function get() {
      return this.show;
    }
  }]);

  return DelButtonStore;
}(), _temp), (_descriptor = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class.prototype, "DelButtonStoreErrored", [mobx__WEBPACK_IMPORTED_MODULE_4__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor2 = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class.prototype, "noteIsDeleted", [mobx__WEBPACK_IMPORTED_MODULE_4__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor3 = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class.prototype, "show", [mobx__WEBPACK_IMPORTED_MODULE_4__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class.prototype, "isOpen", [mobx__WEBPACK_IMPORTED_MODULE_4__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "isOpen"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class.prototype, "showList", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "showList"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class.prototype, "delArticle", [mobx__WEBPACK_IMPORTED_MODULE_4__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "delArticle"), _class.prototype)), _class));


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




var _dec, _dec2, _dec3, _dec4, _dec5, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp;



var ListStore = (_dec = mobx__WEBPACK_IMPORTED_MODULE_3__["action"].bound, _dec2 = mobx__WEBPACK_IMPORTED_MODULE_3__["action"].bound, _dec3 = mobx__WEBPACK_IMPORTED_MODULE_3__["action"].bound, _dec4 = mobx__WEBPACK_IMPORTED_MODULE_3__["action"].bound, _dec5 = mobx__WEBPACK_IMPORTED_MODULE_3__["action"].bound, (_class = (_temp =
/*#__PURE__*/
function () {
  function ListStore(list, list_check) {
    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "load", _descriptor, this);

    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "title", _descriptor2, this);

    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "arcticleIsLoading", _descriptor3, this);

    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "arcticleHasErrored", _descriptor4, this);

    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "CheckHasErrored", _descriptor5, this);

    list ? this.list = list : this.list = [];
    list_check ? this.list_check = list_check : this.list_check = {};
  }

  var _proto = ListStore.prototype;

  _proto.addListNewNote = function addListNewNote(data) {
    this.arcticleIsLoading = true;
    this.list = mobx__WEBPACK_IMPORTED_MODULE_3__["observable"].array(this.list.concat(data[data.length - 1]));
    this.arcticleIsLoading = false;
  };

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

      _this.CheckHasErrored = false;
      return response;
    }).then(function (response) {
      return response.json();
    }).then(function (items) {
      _this.list_check = Object(mobx__WEBPACK_IMPORTED_MODULE_3__["observable"])(items);
      _this.arcticleIsLoading = false;
    })["catch"](function () {
      _this.CheckHasErrored = true;
      _this.arcticleIsLoading = false;
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

      _this2.arcticleIsLoading = false;
      _this2.arcticleHasErrored = false;
      return response;
    }).then(function (response) {
      return response.json();
    }).then(function (items) {
      return _this2.list = mobx__WEBPACK_IMPORTED_MODULE_3__["observable"].array(_this2.list.concat(items), {
        deep: false
      });
    })["catch"](function () {
      return _this2.arcticleHasErrored = true;
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
}), _descriptor5 = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1___default()(_class.prototype, "CheckHasErrored", [mobx__WEBPACK_IMPORTED_MODULE_3__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1___default()(_class.prototype, "addListNewNote", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "addListNewNote"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1___default()(_class.prototype, "delListNote", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "delListNote"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1___default()(_class.prototype, "changeNote", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "changeNote"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1___default()(_class.prototype, "getNoteById", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "getNoteById"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1___default()(_class.prototype, "randomNotes", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "randomNotes"), _class.prototype)), _class));


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
  this.routing = new mobx_react_router__WEBPACK_IMPORTED_MODULE_0__["RouterStore"](initialState.routing), this.buttonDetailsStore = new _buttonDetailsStore__WEBPACK_IMPORTED_MODULE_1__["default"](initialState.buttonDetailsStore), this.changeFormStore = new _changeFormStore__WEBPACK_IMPORTED_MODULE_2__["default"](initialState.changeFormStore), this.delButtonStore = new _delButtonStore__WEBPACK_IMPORTED_MODULE_3__["default"](initialState.delButtonStore), this.formStore = new _FormStore__WEBPACK_IMPORTED_MODULE_4__["default"](initialState.formStore), this.listStore = new _listStore__WEBPACK_IMPORTED_MODULE_5__["default"](mobx__WEBPACK_IMPORTED_MODULE_6__["observable"].array(initialState.listStore.list), Object(mobx__WEBPACK_IMPORTED_MODULE_6__["observable"])(initialState.listStore.list_check));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0RldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvYWxlcnQvQWxlcnQuanN4Iiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LXN0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9hbGVydC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9idXR0b25EZXRhaWxzL0J1dHRvbkRlYXRhaWxzLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9idXR0b25EZXRhaWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2NoYW5nZUZvcm0vQ2hhbmdlRm9ybS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvY2hhbmdlRm9ybS9jaGFuZ2UtZm9ybS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvY2hhbmdlRm9ybS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9kZWxCdXR0b24vRGVsQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9kZWxCdXR0b24vZGVsLWJ1dHRvbi1zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvZGVsQnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2Zvcm0vRm9ybS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvZm9ybS9mb3JtLXN0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9mb3JtL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2xhbmd1YWdlcy9pMThuLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2xpc3QvTGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9saXN0L2xpc3Qtc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3Nob3dEZXRhaWxzL1Nob3dEZXRhaWxzLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9zaG93RGV0YWlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9zaG93RGV0YWlscy9zaG93LWRldGFpbHMtc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3N3aXRjaGluZ0xhbmd1YWdlIHN5bmMgXlxcLlxcLy4qXFwuanNvbiQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc3dpdGNoaW5nTGFuZ3VhZ2UvU3dpdGNobGFuZ3VhZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3N3aXRjaGluZ0xhbmd1YWdlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3N3aXRjaGluZ0xhbmd1YWdlL3N3aXRjaC1zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0b3JlL0Zvcm1TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3RvcmUvYXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zdG9yZS9idXR0b25EZXRhaWxzU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0b3JlL2NoYW5nZUZvcm1TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3RvcmUvZGVsQnV0dG9uU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zdG9yZS9saXN0U3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0b3JlL3Jvb3RTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zc3IvY2xpZW50LmpzIl0sIm5hbWVzIjpbIkFwcCIsImkxOG5leHQiLCJ0IiwiSG9tZUNvbXAiLCJEZXRhaWxzIiwid2l0aFRyYW5zbGF0aW9uIiwibWF0Y2giLCJpZCIsInBhcmFtcyIsIkFsZXJ0IiwiZGF0YSIsIm1lc3NhZ2UiLCJCdXR0b25EZXRhaWxzIiwiaW5qZWN0IiwicHJvcHMiLCJzdGF0ZSIsInNob3dGb3JtIiwiaGFuZGxlRGVsIiwiYmluZCIsImhhbmRsZUNoYW5nZSIsImRlbEJ1dHRvblN0b3JlIiwibGlzdFN0b3JlIiwicm91dGVDaGFuZ2UiLCJkZWxBcnRpY2xlIiwiZGVsTGlzdE5vdGUiLCJyb3V0aW5nIiwicGF0aCIsImhpc3RvcnkiLCJwdXNoIiwic2V0U3RhdGUiLCJyZW5kZXIiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJzdG9yZXMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJzdHJpbmciLCJtb2J4UHJvcFR5cGVzIiwib2JqZWN0T3JPYnNlcnZhYmxlT2JqZWN0Iiwid2l0aFJvdXRlciIsIkNvbm5lY3RlZENoYW5nZUZvcm0iLCJ0aXRsZSIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsImNoYW5nZUZvcm1TdG9yZSIsInVwZGF0ZVNob3dGb3JtIiwiY2hhbmdlQXJ0aWNsZSIsImdldE5vdGVCeUlkIiwiY2hhbmdlTm90ZSIsInVuZGVmaW5lZCIsImZ1bmMiLCJEZWxCdXR0b24iLCJvYnNlcnZlciIsImhhbmRsZVNob3dGb3JtIiwiQ29ubmVjdGVkRm9ybSIsImZvcm1TdG9yZSIsImFkZEFydGljbGUiLCJhZGRMaXN0TmV3Tm90ZSIsIm5ld0xpc3QiLCJyZXNvdXJjZXMiLCJlbiIsInRyYW5zbGF0aW9uIiwiaTE4biIsInVzZSIsImluaXRSZWFjdEkxOG5leHQiLCJpbml0IiwibG5nIiwia2V5U2VwYXJhdG9yIiwiaW50ZXJwb2xhdGlvbiIsImVzY2FwZVZhbHVlIiwiSXRlbUxpc3QiLCJob3dfbWFueSIsIkhvd01heSIsInJhbmRvbURhdGEiLCJyYW5kb21Ob3RlcyIsIm51bSIsImRlZmF1bHRDbGFzcyIsImFkZENsYXNzIiwidXBkYXRlQ2xhc3MiLCJhcmN0aWNsZUhhc0Vycm9yZWQiLCJhcmN0aWNsZUlzTG9hZGluZyIsIlByZWxvZGVyIiwiaXRlbSIsIk51bWJlciIsIm5vdGVJc0RlbGV0ZWQiLCJjaGFuZ2UiLCJidXR0b24iLCJyYW5kb21haXplciIsIkFycmF5IiwiZnJvbSIsImxpc3QiLCJsZW5ndGgiLCJtYXAiLCJhcmN0aWNsZUNyZWF0ZUxvYWRpbmciLCJSZWFjdCIsIkNvbm5lY3RlZERldGFpbHMiLCJub3RlIiwibGlzdF9jaGVjayIsIkNoZWNrSGFzRXJyb3JlZCIsIkNvbm5lY3RTd2ljaCIsImFjdGl2ZSIsImRlZmF1bHRDbGFzc05hbWVFTiIsImRlZmF1bHRDbGFzc05hbWVSVSIsImhhbmRsZVN3aXRjaEVuIiwic2V0TGFuZ3VhZ2UiLCJoYW5kbGVTd2l0Y2hSdSIsImNvbXBvbmVudFdpbGxNb3VudCIsImxhbmd1YWdlIiwibGFuZyIsInJlcXVpcmUiLCJTd2l0Y2giLCJGb3JtU3RvcmUiLCJhY3Rpb24iLCJib3VuZCIsImhhbmRsZUNoYW5nZUxpc3QiLCJvYnNlcnZhYmxlIiwiYXJyYXkiLCJkZWVwIiwiaGFuZGxlQ2hhbmdlTWVzc2FnZSIsImJvb2wiLCJoYW5kbGVDaGFuZ2VUaXRsZSIsImdldFRpdGxlIiwidXJsIiwiYXBpIiwiYWRkTm90ZSIsImVuZFBvaW50IiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwianNvbiIsIml0ZW1zIiwicHJvdG9jb2wiLCJiYXNlUG9pbnQiLCJwb3J0IiwiYmFzZVVybCIsImdldE5vdGVzIiwiZGVsTm90ZUJ5SWQiLCJ1cGRhdGVOb3RlQnlJZCIsIkJ1dHRvbkRldGFpbHNTdG9yZSIsInNldCIsIkRlbEJ1dHRvblN0b3JlRXJyb3JlZCIsInNob3ciLCJjb21wdXRlZCIsIkNoYW5nZUZvcm1TdG9yZSIsImNoYW5nZUZvcm1TdG9yZUVycm9yZWQiLCJEZWxCdXR0b25TdG9yZSIsInNob3dMaXN0Iiwicm91dGluZ1N0b3JlIiwiUm91dGVyU3RvcmUiLCJidXR0b25EZXRhaWxzU3RvcmUiLCJMaXN0U3RvcmUiLCJjb25jYXQiLCJyZXBsYWNlIiwiZmlsdGVyIiwiZWwiLCJsb2FkIiwiUm9vdFN0b3JlIiwiaW5pdGlhbFN0YXRlIiwicHJvY2VzcyIsIndoeURpZFlvdVVwZGF0ZSIsInJvb3RTdG9yZSIsIndpbmRvdyIsIl9fSU5JVElBTF9TVEFURV9fIiwiZWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJicm93c2VySGlzdG9yeSIsImNyZWF0ZUJyb3dzZXJIaXN0b3J5Iiwic3luY0hpc3RvcnlXaXRoU3RvcmUiLCJSZWFjdERPTSIsImh5ZHJhdGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FB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eUosOEVBQW9CLENBQUNGLGNBQUQsRUFBaUJOLFNBQVMsQ0FBQ25KLE9BQTNCLENBQXBDO0FBRUE0SixnREFBUSxDQUFDQyxPQUFULENBQ0UsMkRBQUMsbURBQUQsRUFBY1YsU0FBZCxFQUNFLDJEQUFDLG1EQUFEO0FBQVEsU0FBTyxFQUFFako7QUFBakIsR0FDRSwyREFBQyxnREFBRCxPQURGLENBREYsQ0FERixFQU1Fb0osT0FORixFIiwiZmlsZSI6ImNsaWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiY2xpZW50XCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3NyL2NsaWVudC5qc1wiLFwidmVuZG9yc35jbGllbnRcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFN3aXRjaCwgUm91dGUsIExpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuaW1wb3J0IGkxOG5leHQgZnJvbSAnaTE4bmV4dCc7XHJcbmltcG9ydCBTd2l0Y2hMYW5ndWFnZSBmcm9tICcuL2pzL2NvbXBvbmVudHMvc3dpdGNoaW5nTGFuZ3VhZ2UvaW5kZXgnO1xyXG5pbXBvcnQgJy4vQXBwLmNzcyc7XHJcbmltcG9ydCBIb21lQ29tcCBmcm9tICcuL0hvbWUnO1xyXG5pbXBvcnQgRGV0YWlscyBmcm9tICcuL0RldGFpbHMnO1xyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICA8TGluayBjbGFzc05hbWU9XCJjb2wtc20tMSBob21lIG9mZnNldC1zbS0xIGxpbmtfaG9tZXBhZ2VcIiB0bz1cIi9cIj57aTE4bmV4dC50KCduYXYtaG9tZScpICE9PSAnbmF2LWhvbWUnID8gaTE4bmV4dC50KCduYXYtaG9tZScpIDogJ0hPTUUnfTwvTGluaz5cclxuICAgICAgPFN3aXRjaExhbmd1YWdlIC8+XHJcbiAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgY29tcG9uZW50PXtIb21lQ29tcH0gLz5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi86aWRcIiBjb21wb25lbnQ9e0RldGFpbHN9IC8+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvOmlkXCIgY29tcG9uZW50PXtEZXRhaWxzfSAvPlxyXG4gICAgICA8L1N3aXRjaD5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCkoQXBwKVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2hvd0RldGFpbHMgZnJvbSAnLi9qcy9jb21wb25lbnRzL3Nob3dEZXRhaWxzL2luZGV4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7IG1hdGNoIH0pID0+IHtcclxuICBjb25zdCB7IGlkIH0gPSBtYXRjaC5wYXJhbXNcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNSBvZmZzZXQtc20tMVwiPlxyXG4gICAgICA8U2hvd0RldGFpbHNcclxuICAgICAgICBpZD17aWR9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZvcm0gZnJvbSAnLi9qcy9jb21wb25lbnRzL2Zvcm0vaW5kZXgnO1xyXG5pbXBvcnQgSXRlbUxpc3QgZnJvbSAnLi9qcy9jb21wb25lbnRzL2xpc3QvaW5kZXgnO1xyXG5pbXBvcnQgaTE4bmV4dCBmcm9tICdpMThuZXh0JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJyb3cgY29sLXNtXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVfcGFnZSBjb2wtc20tNSBvZmZzZXQtc20tMVwiPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJob21lX3BhZ2UgYXJ0aWNsZV9saXN0XCI+e2kxOG5leHQudCgnbm90ZXMnKX08L3A+XHJcbiAgICAgIDxJdGVtTGlzdCAvPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNSBvZmZzZXQtc20tMVwiPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJob21lX3BhZ2UgYXJ0aWNsZV9hZGRcIj57aTE4bmV4dC50KCd0aXRsZS1tYWluJyl9PC9wPlxyXG4gICAgICA8Rm9ybSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbikiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQWxlcnQgPSAoZGF0YSkgPT4ge1xyXG4gIGNvbnN0IHsgbWVzc2FnZSB9ID0gZGF0YTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge21lc3NhZ2UgP1xyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZvcm0gYWxlcnRfbWVzc2FnZVwiPnttZXNzYWdlfTwvcD5cclxuICAgICAgICA6XHJcbiAgICAgICAgbnVsbFxyXG4gICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbGVydFxyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImltcG9ydCBBbGVydCBmcm9tIFwiLi9BbGVydFwiO1xyXG5pbXBvcnQgXCIuL2FsZXJ0LXN0eWxlLmNzc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbGVydCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBpMThuZXh0IGZyb20gJ2kxOG5leHQnO1xyXG5pbXBvcnQgeyBpbmplY3QsIFByb3BUeXBlcyBhcyBtb2J4UHJvcFR5cGVzIH0gZnJvbSAnbW9ieC1yZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBDaGFuZ2VGb3JtIGZyb20gJy4uL2NoYW5nZUZvcm0vaW5kZXgnO1xyXG5pbXBvcnQgc3RvcmVzIGZyb20gJy4uLy4uL3N0b3JlJztcclxuXHJcbkBpbmplY3QoJ2RlbEJ1dHRvblN0b3JlJywgJ2NoYW5nZUZvcm1TdG9yZScsICdsaXN0U3RvcmUnLCAncm91dGluZycpXHJcbmNsYXNzIEJ1dHRvbkRldGFpbHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICBzdGF0ZSA9IHtcclxuICAgIHNob3dGb3JtOiBmYWxzZSxcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuaGFuZGxlRGVsID0gdGhpcy5oYW5kbGVEZWwuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgaGFuZGxlRGVsKCkge1xyXG4gICAgY29uc3QgeyBpZCwgZGVsQnV0dG9uU3RvcmUsIGxpc3RTdG9yZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgdGhpcy5yb3V0ZUNoYW5nZSgpO1xyXG4gICAgYXdhaXQgZGVsQnV0dG9uU3RvcmUuZGVsQXJ0aWNsZSh7IGlkIH0pO1xyXG4gICAgbGlzdFN0b3JlLmRlbExpc3ROb3RlKHsgaWQgfSlcclxuICB9XHJcblxyXG4gIHJvdXRlQ2hhbmdlKCkge1xyXG4gICAgY29uc3QgeyByb3V0aW5nIH0gPSB0aGlzLnByb3BzXHJcbiAgICBsZXQgcGF0aCA9ICcvJztcclxuICAgIHJldHVybiByb3V0aW5nLmhpc3RvcnkucHVzaChwYXRoKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNoYW5nZSgpIHtcclxuICAgIGNvbnN0IHsgc2hvd0Zvcm0gfSA9IHRoaXMuc3RhdGU7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0Zvcm06ICFzaG93Rm9ybSB9KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBzaG93Rm9ybSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IHtpZH0gPSB0aGlzLnByb3BzXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbCBjb2wtc20tMTJcIj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJkZXRhaWwgYnRuX2RlbGV0ZSBidG4gYnRuLXN1Y2Nlc3MgYnRuLXNtXCIgb25DbGljaz17dGhpcy5oYW5kbGVEZWx9PntpMThuZXh0LnQoJ2J0bi1kZWxldGUnKX08L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJkZXRhaWwgYnRuX2NoYW5nZSBidG4gYnRuLXN1Y2Nlc3MgYnRuLXNtXCIgb25DbGljaz17dGhpcy5oYW5kbGVDaGFuZ2V9PntpMThuZXh0LnQoJ2J0bi1jaGFuZ2UnKX08L2J1dHRvbj5cclxuICAgICAgICB7c2hvd0Zvcm0gPyA8Q2hhbmdlRm9ybSB1cGRhdGVTaG93Rm9ybT17dGhpcy5oYW5kbGVDaGFuZ2V9IGlkPXtpZH0gLz4gOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5CdXR0b25EZXRhaWxzLmRlZmF1bHRQcm9wcyA9IHtcclxuICBpZDogJycsXHJcbiAgZGVsQnV0dG9uU3RvcmU6IHN0b3Jlcy5kZWxCdXR0b25TdG9yZSxcclxufTtcclxuXHJcbkJ1dHRvbkRldGFpbHMucHJvcFR5cGVzID0ge1xyXG4gIGlkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgIFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBQcm9wVHlwZXMuc3RyaW5nXHJcbiAgXSksXHJcbiAgcm91dGluZzogbW9ieFByb3BUeXBlcy5vYmplY3RPck9ic2VydmFibGVPYmplY3QsXHJcbiAgZGVsQnV0dG9uU3RvcmU6IG1vYnhQcm9wVHlwZXMub2JqZWN0T3JPYnNlcnZhYmxlT2JqZWN0LFxyXG4gIGxpc3RTdG9yZTogbW9ieFByb3BUeXBlcy5vYmplY3RPck9ic2VydmFibGVPYmplY3QsXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b25EZXRhaWxzO1xyXG4iLCJpbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBCdXR0b25EZXRhaWxzIGZyb20gJy4vQnV0dG9uRGVhdGFpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEJ1dHRvbkRldGFpbHMpXHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2xhYmVsLWhhcy1mb3IgKi9cclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgaTE4bmV4dCBmcm9tICdpMThuZXh0JztcclxuaW1wb3J0IHsgaW5qZWN0LCBQcm9wVHlwZXMgYXMgbW9ieFByb3BUeXBlcyB9IGZyb20gJ21vYngtcmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgQWxlcnQgZnJvbSAnLi4vYWxlcnQvQWxlcnQnO1xyXG5pbXBvcnQgc3RvcmVzIGZyb20gJy4uLy4uL3N0b3JlJztcclxuXHJcbkBpbmplY3QoJ2xpc3RTdG9yZScsICdjaGFuZ2VGb3JtU3RvcmUnKVxyXG5jbGFzcyBDb25uZWN0ZWRDaGFuZ2VGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB0aXRsZTogJycsXHJcbiAgICAgIG1lc3NhZ2U6IGZhbHNlXHJcbiAgICB9XHJcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2hhbmdlIChldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtldmVudC50YXJnZXQuaWRdOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICB9XHJcblxyXG4gIGFzeW5jIGhhbmRsZVN1Ym1pdCAoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICBjb25zdCB7IGlkLCBjaGFuZ2VGb3JtU3RvcmUsIGxpc3RTdG9yZSwgdXBkYXRlU2hvd0Zvcm0gfSA9IHRoaXMucHJvcHNcclxuICAgIGNvbnN0IHsgdGl0bGUgfSA9IHRoaXMuc3RhdGVcclxuICAgIGlmICh0aXRsZSkge1xyXG4gICAgICB1cGRhdGVTaG93Rm9ybSgpXHJcbiAgICAgIGF3YWl0IGNoYW5nZUZvcm1TdG9yZS5jaGFuZ2VBcnRpY2xlKHsgdGl0bGUsIGlkIH0pXHJcbiAgICAgIGF3YWl0IGxpc3RTdG9yZS5nZXROb3RlQnlJZCh7IGlkIH0pXHJcbiAgICAgIGxpc3RTdG9yZS5jaGFuZ2VOb3RlKHsgdGl0bGUsIGlkIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTogdHJ1ZSB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIGNvbnN0IHsgdGl0bGUsIG1lc3NhZ2UgfSA9IHRoaXMuc3RhdGVcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgeyBtZXNzYWdlID8gPEFsZXJ0IG1lc3NhZ2U9e2kxOG5leHQudCgnYWxlcnQnKX0gLz4gOiBudWxsfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiPntpMThuZXh0LnQoJ3RpdGxlJyl9PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgIGlkPVwidGl0bGVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dGl0bGV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbVwiPlxyXG4gICAgICAgICAge2kxOG5leHQudCgnYnRuLWNoYW5nZScpfVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5Db25uZWN0ZWRDaGFuZ2VGb3JtLmRlZmF1bHRQcm9wcyA9IHtcclxuICBpZDogJycsXHJcbiAgY2hhbmdlRm9ybVN0b3JlOiBzdG9yZXMuY2hhbmdlRm9ybVN0b3JlLFxyXG4gIHVwZGF0ZVNob3dGb3JtOiAoKCkgPT4gKHVuZGVmaW5lZCkpLFxyXG59O1xyXG5cclxuQ29ubmVjdGVkQ2hhbmdlRm9ybS5wcm9wVHlwZXMgPSB7XHJcbiAgaWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgUHJvcFR5cGVzLm51bWJlcixcclxuICAgIFByb3BUeXBlcy5zdHJpbmdcclxuICBdKSxcclxuICBjaGFuZ2VGb3JtU3RvcmU6ICBtb2J4UHJvcFR5cGVzLm9iamVjdE9yT2JzZXJ2YWJsZU9iamVjdCxcclxuICBsaXN0U3RvcmU6IG1vYnhQcm9wVHlwZXMub2JqZWN0T3JPYnNlcnZhYmxlT2JqZWN0LFxyXG4gIHVwZGF0ZVNob3dGb3JtOiBQcm9wVHlwZXMuZnVuYyxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29ubmVjdGVkQ2hhbmdlRm9ybVxyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiAgfSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xyXG5pbXBvcnQgQ29ubmVjdGVkQ2hhbmdlRm9ybSBmcm9tIFwiLi9DaGFuZ2VGb3JtXCJcclxuaW1wb3J0IFwiLi9jaGFuZ2UtZm9ybS5jc3NcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCkoQ29ubmVjdGVkQ2hhbmdlRm9ybSkiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBpMThuZXh0IGZyb20gJ2kxOG5leHQnO1xyXG5pbXBvcnQgeyBvYnNlcnZlciwgaW5qZWN0LCBQcm9wVHlwZXMgYXMgbW9ieFByb3BUeXBlcyB9IGZyb20gJ21vYngtcmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgQ2hhbmdlRm9ybSBmcm9tICcuLi9jaGFuZ2VGb3JtL2luZGV4JztcclxuaW1wb3J0IHN0b3JlcyBmcm9tICcuLi8uLi9zdG9yZSc7XHJcblxyXG5AaW5qZWN0KCdsaXN0U3RvcmUnLCAnZGVsQnV0dG9uU3RvcmUnLCAncm91dGluZycpXHJcbkBvYnNlcnZlclxyXG5jbGFzcyBEZWxCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3RvciAocHJvcHMpe1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNob3dGb3JtOiBmYWxzZSxcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmhhbmRsZURlbCA9IHRoaXMuaGFuZGxlRGVsLmJpbmQodGhpcylcclxuICAgIHRoaXMucm91dGVDaGFuZ2UgPSB0aGlzLnJvdXRlQ2hhbmdlLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlU2hvd0Zvcm0gPSB0aGlzLmhhbmRsZVNob3dGb3JtLmJpbmQodGhpcylcclxuICB9XHJcblxyXG4gIGFzeW5jIGhhbmRsZURlbCgpIHtcclxuICAgIGNvbnN0IHsgaWQsIGRlbEJ1dHRvblN0b3JlLCBsaXN0U3RvcmUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBhd2FpdCBkZWxCdXR0b25TdG9yZS5kZWxBcnRpY2xlKHsgaWQgfSk7XHJcbiAgICBsaXN0U3RvcmUuZGVsTGlzdE5vdGUoeyBpZCB9KVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlU2hvd0Zvcm0oKSB7XHJcbiAgICBjb25zdCB7IHNob3dGb3JtIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7c2hvd0Zvcm0gOiAhc2hvd0Zvcm19KVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgcm91dGVDaGFuZ2UoKSB7ICAgIFxyXG4gICAgY29uc3QgeyBpZCwgcm91dGluZywgbGlzdFN0b3JlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgbGV0IHBhdGggPSBgJHtpZH1gO1xyXG4gICAgYXdhaXQgbGlzdFN0b3JlLmdldE5vdGVCeUlkKHsgaWQgfSlcclxuICAgIHJldHVybiByb3V0aW5nLmhpc3RvcnkucHVzaChwYXRoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgc2hvd0Zvcm0gfSA9IHRoaXMuc3RhdGVcclxuICAgIGNvbnN0IHsgaWQgfSA9IHRoaXMucHJvcHNcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm90ZSBidG5fYWxsX2NoYW5nZSBjb2wtc20tMTJcIj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJub3RlIGJ0bl9kZWxldGUgYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRGVsfT57aTE4bmV4dC50KCdidG4tZGVsZXRlJyl9PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibm90ZSBidG5fc2hvd19kZXRhaWwgYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbVwiIG9uQ2xpY2s9e3RoaXMucm91dGVDaGFuZ2V9PntpMThuZXh0LnQoJ2J0bi1zaG93LWRldGFpbCcpfTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cIm5vdGUgYnRuX2NoYW5nZSBidG4gYnRuLXN1Y2Nlc3MgYnRuLXNtXCIgb25DbGljaz17dGhpcy5oYW5kbGVTaG93Rm9ybX0+e2kxOG5leHQudCgnYnRuLWNoYW5nZScpfTwvYnV0dG9uPlxyXG4gICAgICAgIHtzaG93Rm9ybSA/IDxDaGFuZ2VGb3JtIGlkPXtpZH0gdXBkYXRlU2hvd0Zvcm09e3RoaXMuaGFuZGxlU2hvd0Zvcm19IC8+IDogbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuRGVsQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcclxuICBpZDogJycsXHJcbiAgZGVsQnV0dG9uU3RvcmU6IHN0b3Jlcy5kZWxCdXR0b25TdG9yZSxcclxufTtcclxuXHJcbkRlbEJ1dHRvbi5wcm9wVHlwZXMgPSB7XHJcbiAgaWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgUHJvcFR5cGVzLm51bWJlcixcclxuICAgIFByb3BUeXBlcy5zdHJpbmdcclxuICBdKSxcclxuICBkZWxCdXR0b25TdG9yZTogIG1vYnhQcm9wVHlwZXMub2JqZWN0T3JPYnNlcnZhYmxlT2JqZWN0LFxyXG4gIGxpc3RTdG9yZTogbW9ieFByb3BUeXBlcy5vYmplY3RPck9ic2VydmFibGVPYmplY3QsXHJcbiAgcm91dGluZzogbW9ieFByb3BUeXBlcy5vYmplY3RPck9ic2VydmFibGVPYmplY3QsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlbEJ1dHRvbjtcclxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xyXG5pbXBvcnQgRGVsQnV0dG9uIGZyb20gXCIuL0RlbEJ1dHRvblwiXHJcbmltcG9ydCBcIi4vZGVsLWJ1dHRvbi1zdHlsZS5jc3NcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcih3aXRoVHJhbnNsYXRpb24oKShEZWxCdXR0b24pKVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9sYWJlbC1oYXMtZm9yICovXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGkxOG5leHQgZnJvbSAnaTE4bmV4dCdcclxuaW1wb3J0IHsgb2JzZXJ2ZXIsIGluamVjdCwgUHJvcFR5cGVzIGFzIG1vYnhQcm9wVHlwZXMgfSBmcm9tICdtb2J4LXJlYWN0JztcclxuaW1wb3J0IEFsZXJ0IGZyb20gJy4uL2FsZXJ0L2luZGV4JztcclxuaW1wb3J0IHN0b3JlcyBmcm9tICcuLi8uLi9zdG9yZS9pbmRleCdcclxuXHJcbkBpbmplY3QoJ2Zvcm1TdG9yZScsICdsaXN0U3RvcmUnKVxyXG5Ab2JzZXJ2ZXJcclxuY2xhc3MgQ29ubmVjdGVkRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB0aXRsZTogJycsXHJcbiAgICAgIG1lc3NhZ2U6IGZhbHNlLFxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpXHJcbiAgfVxyXG5cclxuICBoYW5kbGVDaGFuZ2UgKGV2ZW50KSB7XHJcbiAgICBjb25zdCB0aXRsZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyB0aXRsZTogdGl0bGUgfSlcclxuICB9XHJcblxyXG4gIGFzeW5jIGhhbmRsZVN1Ym1pdCAoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnN0IHsgZm9ybVN0b3JlLCBsaXN0U3RvcmUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCB7IHRpdGxlIH0gPSB0aGlzLnN0YXRlXHJcbiAgICBpZiAodGl0bGUpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2U6IGZhbHNlIH0pXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0aXRsZTogJycgfSlcclxuICAgICAgYXdhaXQgZm9ybVN0b3JlLmFkZEFydGljbGUoeyB0aXRsZSB9KVxyXG4gICAgICBsaXN0U3RvcmUuYWRkTGlzdE5ld05vdGUoZm9ybVN0b3JlLm5ld0xpc3QpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTogdHJ1ZSB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIGNvbnN0IHsgdGl0bGUsIG1lc3NhZ2UgfSA9IHRoaXMuc3RhdGVcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm1cIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIHsgbWVzc2FnZSA/IDxBbGVydCBtZXNzYWdlPXtpMThuZXh0LnQoJ2FsZXJ0Jyl9IC8+IDogbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0gZm9ybV9pbnB1dCBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCI+e2kxOG5leHQudCgndGl0bGUnKX08L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgaWQ9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJmb3JtIGJ0bl9jcmVhdGUgYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbFwiPlxyXG4gICAgICAgICAge2kxOG5leHQudCgnYnRuLWNyZWF0ZScpfVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5cclxuQ29ubmVjdGVkRm9ybS5wcm9wVHlwZXMgPSB7XHJcbiAgZm9ybVN0b3JlOiAgbW9ieFByb3BUeXBlcy5vYmplY3RPck9ic2VydmFibGVPYmplY3QsXHJcbiAgbGlzdFN0b3JlOiAgbW9ieFByb3BUeXBlcy5vYmplY3RPck9ic2VydmFibGVPYmplY3QsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbm5lY3RlZEZvcm1cclxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuaW1wb3J0IFwiLi9mb3JtLXN0eWxlLmNzc1wiXHJcbmltcG9ydCBDb25uZWN0ZWRGb3JtIGZyb20gXCIuL0Zvcm1cIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCkoQ29ubmVjdGVkRm9ybSk7IiwiaW1wb3J0IGkxOG4gZnJvbSAnaTE4bmV4dCdcclxuaW1wb3J0IHsgaW5pdFJlYWN0STE4bmV4dCB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXHJcblxyXG4vLyB0aGUgdHJhbnNsYXRpb25zXHJcbi8vICh0aXAgbW92ZSB0aGVtIGluIGEgSlNPTiBmaWxlIGFuZCBpbXBvcnQgdGhlbSlcclxuY29uc3QgcmVzb3VyY2VzID0ge1xyXG4gIGVuOiB7XHJcbiAgICB0cmFuc2xhdGlvbjoge1xyXG4gICAgICAnY3JlYXRlJzogJ0NSRUFURSdcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmkxOG5cclxuICAudXNlKGluaXRSZWFjdEkxOG5leHQpIC8vIHBhc3NlcyBpMThuIGRvd24gdG8gcmVhY3QtaTE4bmV4dFxyXG4gIC5pbml0KHtcclxuICAgIHJlc291cmNlcyxcclxuICAgIGxuZzogJ2VuJyxcclxuXHJcbiAgICBrZXlTZXBhcmF0b3I6IGZhbHNlLCAvLyB3ZSBkbyBub3QgdXNlIGtleXMgaW4gZm9ybSBtZXNzYWdlcy53ZWxjb21lXHJcblxyXG4gICAgaW50ZXJwb2xhdGlvbjoge1xyXG4gICAgICBlc2NhcGVWYWx1ZTogZmFsc2UgLy8gcmVhY3QgYWxyZWFkeSBzYWZlcyBmcm9tIHhzc1xyXG4gICAgfVxyXG4gIH0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBpMThuXHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1vbmUtZXhwcmVzc2lvbi1wZXItbGluZSAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBvYnNlcnZlciwgaW5qZWN0LCBQcm9wVHlwZXMgYXMgbW9ieFByb3BUeXBlcyB9IGZyb20gJ21vYngtcmVhY3QnO1xyXG5pbXBvcnQge3dpdGhSb3V0ZXJ9IGZyb20gJ3JlYWN0LXJvdXRlcidcclxuaW1wb3J0IGkxOG5leHQgZnJvbSAnaTE4bmV4dCc7XHJcblxyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2RlbEJ1dHRvbi9pbmRleCc7XHJcbmltcG9ydCBQcmVsb2RlciBmcm9tICcuLi8uLi8uLi9wcmVsb2FkZXIvMjUuZ2lmJztcclxuXHJcbkB3aXRoUm91dGVyXHJcbkBpbmplY3QoJ2xpc3RTdG9yZScsICdmb3JtU3RvcmUnLCAnZGVsQnV0dG9uU3RvcmUnLCAnY2hhbmdlRm9ybVN0b3JlJylcclxuQG9ic2VydmVyXHJcbmNsYXNzIEl0ZW1MaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgc3RhdGUgPSB7XHJcbiAgICBob3dfbWFueTogMTAsXHJcbiAgfVxyXG5cclxuICBIb3dNYXkgPSAoZXZlbnQpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBob3dfbWFueTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgcmFuZG9tRGF0YSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgbGlzdFN0b3JlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgeyBob3dfbWFueSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGxpc3RTdG9yZS5yYW5kb21Ob3Rlcyh7IG51bTogaG93X21hbnl9KVxyXG4gIH1cclxuXHJcbiAgZGVmYXVsdENsYXNzIChkYXRhKSB7XHJcbiAgICBpZiAoIWRhdGEuaWQpIHtcclxuICAgICAgcmV0dXJuIGBub3Rlc19saXN0IG5vdGUgJHtkYXRhfWBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBgbm90ZXNfbGlzdCAke2RhdGEuYWRkQ2xhc3N9IG5vdGUgJHtkYXRhLmlkfWBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZUNsYXNzICh2YWx1ZSkge1xyXG4gICAgdGhpcy5kZWZhdWx0Q2xhc3ModmFsdWUpXHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgY29uc3Qge2xpc3RTdG9yZSAsIGZvcm1TdG9yZSwgZGVsQnV0dG9uU3RvcmUsIGNoYW5nZUZvcm1TdG9yZX0gPSB0aGlzLnByb3BzXHJcblxyXG4gICAgaWYgKGxpc3RTdG9yZS5hcmN0aWNsZUhhc0Vycm9yZWQpIHtcclxuICAgICAgcmV0dXJuIDxwIGNsYXNzTmFtZT1cImVycm9yXCI+U29ycnkhIFRoZXJlIHdhcyBhbiBlcnJvciBsb2FkaW5nIHRoZSBpdGVtcywgdHJ5IGxhdGVyIHBsZWFzZS48L3A+XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxpc3RTdG9yZS5hcmN0aWNsZUlzTG9hZGluZykge1xyXG4gICAgICByZXR1cm4gPGltZyBzcmM9e1ByZWxvZGVyfSBhbHQ9XCJsb2FkaW5nLi4uXCIgLz5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IChpdGVtKSA9PntcclxuICAgICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICB7TnVtYmVyKGl0ZW0uaWQpID09PSAoTnVtYmVyKGRlbEJ1dHRvblN0b3JlLm5vdGVJc0RlbGV0ZWQuaWQpIHx8IE51bWJlcihjaGFuZ2VGb3JtU3RvcmUuY2hhbmdlLmlkKSkgP1xyXG4gICAgICAgICAgICA8aW1nIHNyYz17UHJlbG9kZXJ9IGFsdD1cImxvYWRpbmcuLi5cIiAvPiA6IGl0ZW0udGl0bGVcclxuICAgICAgICAgIH1cclxuICAgICAgICA8Lz5cclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJ1dHRvbiA9IChpdGVtKSA9PnsgXHJcbiAgICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAge051bWJlcihpdGVtLmlkKSA9PT0gTnVtYmVyKGRlbEJ1dHRvblN0b3JlLm5vdGVJc0RlbGV0ZWQuaWQpID8gbnVsbCA6XHJcbiAgICAgICAgICAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm5vdGVzX2xpc3Qgc2VwYXJhdG9yXCIgLz5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHJhbmRvbWFpemVyID0gKCkgPT57XHJcbiAgICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGFcIj5cclxuICAgICAgICAgIDxwPntpMThuZXh0LnQoJ2xpc3RfZW1wdHknKX08L3A+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJub3RlIGJ0bl9zaG93X2RldGFpbCBidG4gYnRuLXN1Y2Nlc3MgYnRuLXNtXCJcclxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5yYW5kb21EYXRhfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBPX09cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGlucHV0X2lubGluZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPScgSG93IG11Y2gnXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLkhvd01heX0gXHJcbiAgICAgICAgICAvPiAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJub3Rlc19saXN0XCI+XHJcbiAgICAgICAgICB7QXJyYXkuZnJvbShsaXN0U3RvcmUubGlzdCkubGVuZ3RoID4gMCA/IGxpc3RTdG9yZS5saXN0Lm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtpdGVtLmlkfSBjbGFzc05hbWU9XCJub3Rlc19saXN0IG5vdGVcIj5cclxuICAgICAgICAgICAgICB7dGl0bGUoaXRlbSl9XHJcbiAgICAgICAgICAgICAge2J1dHRvbihpdGVtKX1cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICkpIDogcmFuZG9tYWl6ZXIoKX1cclxuICAgICAgICAgIHtmb3JtU3RvcmUuYXJjdGljbGVDcmVhdGVMb2FkaW5nID8gPGltZyBzcmM9e1ByZWxvZGVyfSBhbHQ9XCJsb2FkaW5nLi4uXCIgLz4gOiBudWxsfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuSXRlbUxpc3QucHJvcFR5cGVzID0ge1xyXG4gIGRlbEJ1dHRvblN0b3JlOiAgbW9ieFByb3BUeXBlcy5vYmplY3RPck9ic2VydmFibGVPYmplY3QsXHJcbiAgbGlzdFN0b3JlOiBtb2J4UHJvcFR5cGVzLm9iamVjdE9yT2JzZXJ2YWJsZU9iamVjdCxcclxuICBmb3JtU3RvcmU6IG1vYnhQcm9wVHlwZXMub2JqZWN0T3JPYnNlcnZhYmxlT2JqZWN0LFxyXG4gIGNoYW5nZUZvcm1TdG9yZTogbW9ieFByb3BUeXBlcy5vYmplY3RPck9ic2VydmFibGVPYmplY3QsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEl0ZW1MaXN0XHJcbiIsImltcG9ydCBJdGVtTGlzdCBmcm9tICcuL0xpc3QnXHJcbmltcG9ydCAnLi9saXN0LXN0eWxlLmNzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEl0ZW1MaXN0XHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBvYnNlcnZlciwgaW5qZWN0LCBQcm9wVHlwZXMgYXMgbW9ieFByb3BUeXBlcyB9IGZyb20gJ21vYngtcmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgQnV0dG9uRGV0YWlscyBmcm9tICcuLi9idXR0b25EZXRhaWxzL2luZGV4JztcclxuaW1wb3J0IFByZWxvZGVyIGZyb20gJy4uLy4uLy4uL3ByZWxvYWRlci8yNS5naWYnO1xyXG5pbXBvcnQgc3RvcmVzIGZyb20gJy4uLy4uL3N0b3JlJztcclxuXHJcbkBpbmplY3QoJ2xpc3RTdG9yZScsICdjaGFuZ2VGb3JtU3RvcmUnKVxyXG5Ab2JzZXJ2ZXJcclxuY2xhc3MgQ29ubmVjdGVkRGV0YWlscyBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICBjb25zdCB7IGlkLCBsaXN0U3RvcmUsIGNoYW5nZUZvcm1TdG9yZSB9ID0gdGhpcy5wcm9wc1xyXG4gICAgXHJcbiAgICBjb25zdCBub3RlID0gbGlzdFN0b3JlLmxpc3RfY2hlY2tcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgeyhOdW1iZXIoaWQpID09PSAgTnVtYmVyKGNoYW5nZUZvcm1TdG9yZS5jaGFuZ2UuaWQpKSB8fCAobGlzdFN0b3JlLmFyY3RpY2xlSXNMb2FkaW5nKT9cclxuICAgICAgICAgIDxpbWcgc3JjPXtQcmVsb2Rlcn0gYWx0PVwibG9hZGluZy4uLlwiIC8+IDogPGgxPntub3RlID8gbm90ZS50aXRsZSA6IG51bGx9PC9oMT5cclxuICAgICAgICB9XHJcbiAgICAgICAge2xpc3RTdG9yZS5DaGVja0hhc0Vycm9yZWQgP1xyXG4gICAgICAgIDxoMT4gUGFnZSBub3QgZm91bmQgPC9oMT5cclxuICAgICAgICA6IDxCdXR0b25EZXRhaWxzXHJcbiAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICAvPiBcclxuICAgICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuQ29ubmVjdGVkRGV0YWlscy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgY2hhbmdlRm9ybVN0b3JlOiBzdG9yZXMuY2hhbmdlRm9ybVN0b3JlLFxyXG59O1xyXG5cclxuQ29ubmVjdGVkRGV0YWlscy5wcm9wVHlwZXMgPSB7XHJcbiAgaWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgUHJvcFR5cGVzLm51bWJlcixcclxuICAgIFByb3BUeXBlcy5zdHJpbmdcclxuICBdKSxcclxuICBjaGFuZ2VGb3JtU3RvcmU6IG1vYnhQcm9wVHlwZXMub2JqZWN0T3JPYnNlcnZhYmxlT2JqZWN0LFxyXG4gIGxpc3RTdG9yZTogbW9ieFByb3BUeXBlcy5vYmplY3RPck9ic2VydmFibGVPYmplY3QsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbm5lY3RlZERldGFpbHNcclxuIiwiaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcbmltcG9ydCBDb25uZWN0ZWREZXRhaWxzIGZyb20gJy4vU2hvd0RldGFpbHMnO1xyXG5pbXBvcnQgJy4vc2hvdy1kZXRhaWxzLXN0eWxlLmNzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbigpKENvbm5lY3RlZERldGFpbHMpXHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwidmFyIG1hcCA9IHtcblx0XCIuL2VuLmpzb25cIjogXCIuL3NyYy9qcy9jb21wb25lbnRzL3N3aXRjaGluZ0xhbmd1YWdlL2VuLmpzb25cIixcblx0XCIuL3J1Lmpzb25cIjogXCIuL3NyYy9qcy9jb21wb25lbnRzL3N3aXRjaGluZ0xhbmd1YWdlL3J1Lmpzb25cIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvanMvY29tcG9uZW50cy9zd2l0Y2hpbmdMYW5ndWFnZSBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC5qc29uJFwiOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGkxOG5leHQgZnJvbSBcImkxOG5leHRcIjtcclxuXHJcbmNsYXNzIENvbm5lY3RTd2ljaCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuaGFuZGxlU3dpdGNoRW4gPSB0aGlzLmhhbmRsZVN3aXRjaEVuLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlU3dpdGNoUnUgPSB0aGlzLmhhbmRsZVN3aXRjaFJ1LmJpbmQodGhpcylcclxuICB9XHJcblxyXG4gIHN0YXRlID0ge1xyXG4gICAgYWN0aXZlOiBcImJ0bl9hY3RpdmVcIixcclxuICAgIGRlZmF1bHRDbGFzc05hbWVFTjogXCJoZWFkZXIgYnRuX3N3aXRjaCBidG5fYWN0aXZlIGVuXCIsXHJcbiAgICBkZWZhdWx0Q2xhc3NOYW1lUlU6IFwiaGVhZGVyIGJ0bl9zd2l0Y2ggcnVcIixcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgdGhpcy5zZXRMYW5ndWFnZSgpO1xyXG4gIH1cclxuICBcclxuICBzZXRMYW5ndWFnZShsYW5ndWFnZSkge1xyXG4gICAgaWYoIWxhbmd1YWdlKXtcclxuICAgICAgIGxhbmd1YWdlID0gJ2VuJ1xyXG4gICAgfVxyXG4gICAgbGV0IGxhbmcgPSByZXF1aXJlKGAuLyR7bGFuZ3VhZ2V9Lmpzb25gKVxyXG4gICAgaTE4bmV4dC5pbml0KHtcclxuICAgICAgbG5nOiBsYW5ndWFnZSxcclxuICAgICAgcmVzb3VyY2VzOiBsYW5nXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVN3aXRjaEVuID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRMYW5ndWFnZSgnZW4nKVxyXG4gICAgdGhpcy5zZXRTdGF0ZSggeyBkZWZhdWx0Q2xhc3NOYW1lUlU6IGBoZWFkZXIgYnRuX3N3aXRjaCBydWAgfSApXHJcbiAgICB0aGlzLnNldFN0YXRlKCB7IGRlZmF1bHRDbGFzc05hbWVFTjogYGhlYWRlciBidG5fc3dpdGNoICAke3RoaXMuc3RhdGUuYWN0aXZlfSBlbmAgfSApXHJcbiAgfVxyXG5cclxuICBoYW5kbGVTd2l0Y2hSdSA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0TGFuZ3VhZ2UoJ3J1JylcclxuICAgIHRoaXMuc2V0U3RhdGUoIHsgZGVmYXVsdENsYXNzTmFtZVJVOiBgaGVhZGVyIGJ0bl9zd2l0Y2ggJHt0aGlzLnN0YXRlLmFjdGl2ZX0gcnVgIH0gKVxyXG4gICAgdGhpcy5zZXRTdGF0ZSggeyBkZWZhdWx0Q2xhc3NOYW1lRU46IGBoZWFkZXIgYnRuX3N3aXRjaCBlbmAgfSApXHJcbiAgfVxyXG4gIFxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtkZWZhdWx0Q2xhc3NOYW1lRU4sIGRlZmF1bHRDbGFzc05hbWVSVX0gPSB0aGlzLnN0YXRlXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlciBzd2l0Y2ggY29sLXNtLTMgb2Zmc2V0LXNtLTZcIj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtkZWZhdWx0Q2xhc3NOYW1lRU59IG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3dpdGNoRW59PntpMThuZXh0LnQoJ2VuZ2xpc2gnKX08L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtkZWZhdWx0Q2xhc3NOYW1lUlV9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3dpdGNoUnV9PntpMThuZXh0LnQoJ3J1c3NpYW4nKX08L2J1dHRvbj5cclxuICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbm5lY3RTd2ljaFxyXG4iLCJpbXBvcnQgU3dpdGNoIGZyb20gJy4vU3dpdGNobGFuZ3VhZ2UnO1xyXG5pbXBvcnQgJy4vc3dpdGNoLXN0eWxlLmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTd2l0Y2hcclxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgeyBvYnNlcnZhYmxlLCBhY3Rpb259IGZyb20gJ21vYngnO1xyXG5pbXBvcnQgYXBpIGZyb20gJy4vYXBpJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1TdG9yZXtcclxuXHJcbiAgQG9ic2VydmFibGUgbG9hZCA9IGZhbHNlO1xyXG5cclxuICBAb2JzZXJ2YWJsZSB0aXRsZSA9ICcnO1xyXG5cclxuICBAb2JzZXJ2YWJsZSBhcmN0aWNsZUNyZWF0ZUxvYWRpbmcgPSBmYWxzZTtcclxuXHJcbiAgQG9ic2VydmFibGUgYXJjdGljbGVIYXNFcnJvcmVkID0gZmFsc2VcclxuXHJcbiAgQG9ic2VydmFibGUgbmV3TGlzdCA9IFtdO1xyXG5cclxuICBAb2JzZXJ2YWJsZSBtZXNzYWdlID0gZmFsc2U7XHJcblxyXG4gIEBhY3Rpb25cclxuICBoYW5kbGVDaGFuZ2VMaXN0KGRhdGEpIHtcclxuICAgIHRoaXMubmV3TGlzdCA9IG9ic2VydmFibGUuYXJyYXkoKGRhdGEpLCB7IGRlZXA6IGZhbHNlIH0pXHJcbiAgfVxyXG5cclxuICBAYWN0aW9uLmJvdW5kXHJcbiAgaGFuZGxlQ2hhbmdlTWVzc2FnZShib29sKSB7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBib29sXHJcbiAgfVxyXG5cclxuICBAYWN0aW9uLmJvdW5kXHJcbiAgaGFuZGxlQ2hhbmdlVGl0bGUoZGF0YSkge1xyXG4gICAgdGhpcy50aXRsZSA9IGRhdGFcclxuICB9XHJcblxyXG4gIEBhY3Rpb24uYm91bmRcclxuICBnZXRUaXRsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnRpdGxlXHJcbiAgfVxyXG5cclxuICBAYWN0aW9uLmJvdW5kXHJcbiAgYXN5bmMgYWRkQXJ0aWNsZSAoZGF0YSkge1xyXG4gICAgICAvLyBjb25zdCB1cmwgPSAnaHR0cHM6Ly9wcml2YXRlLWFub24tNTM1NTEwZWU2Yi1ub3RlMTAuYXBpYXJ5LW1vY2suY29tL25vdGVzJ1xyXG4gICAgICBjb25zdCB1cmwgPSBhcGkuYWRkTm90ZS5lbmRQb2ludFxyXG4gIFxyXG4gICAgICB0aGlzLmhhbmRsZUNoYW5nZU1lc3NhZ2UoZmFsc2UpXHJcbiAgICAgIHRoaXMuYXJjdGljbGVDcmVhdGVMb2FkaW5nID0gdHJ1ZVxyXG4gIFxyXG4gICAgICByZXR1cm4gZmV0Y2godXJsLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1ldGhvZDogYXBpLmFkZE5vdGUubWV0aG9kLFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB0aXRsZTogZGF0YS50aXRsZSB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy5hcmN0aWNsZUNyZWF0ZUxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgdGhpcy5hcmN0aWNsZUhhc0Vycm9yZWQgPSBmYWxzZVxyXG5cclxuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChpdGVtcyk9PiB0aGlzLmhhbmRsZUNoYW5nZUxpc3QoaXRlbXMpKVxyXG4gICAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmFyY3RpY2xlSGFzRXJyb3JlZCA9IHRydWUpXHJcbiAgICB9XHJcbiAgfVxyXG4iLCJjb25zdCBwcm90b2NvbCA9ICdodHRwOi8vJztcclxuY29uc3QgYmFzZVBvaW50ID0gJ2xvY2FsaG9zdCc7XHJcbmNvbnN0IHBvcnQgPSAzMDAxO1xyXG5jb25zdCBiYXNlVXJsID0gYCR7cHJvdG9jb2x9JHtiYXNlUG9pbnR9OiR7cG9ydH1gO1xyXG5cclxuY29uc3QgYXBpID0ge1xyXG4gIGdldE5vdGVzOiB7bWV0aG9kOiBcIkdFVFwiICxlbmRQb2ludDogYCR7YmFzZVVybH0vbm90ZXNgfSxcclxuICBnZXROb3RlQnlJZDp7bWV0aG9kOiBcIkdFVFwiICxlbmRQb2ludDogYCR7YmFzZVVybH0vbm90ZXMvYH0sXHJcbiAgYWRkTm90ZToge21ldGhvZDogXCJQT1NUXCIgLGVuZFBvaW50OiBgJHtiYXNlVXJsfS9ub3Rlc2B9LFxyXG4gIGRlbE5vdGVCeUlkOiB7bWV0aG9kOiBcIkRFTEVURVwiICxlbmRQb2ludDogYCR7YmFzZVVybH0vbm90ZXMvYH0sXHJcbiAgdXBkYXRlTm90ZUJ5SWQ6IHttZXRob2Q6IFwiUFVUXCIgLGVuZFBvaW50OiBgJHtiYXNlVXJsfS9ub3Rlcy9gfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBpOyIsImltcG9ydCB7IG9ic2VydmFibGUsIGFjdGlvbiwgY29tcHV0ZWR9IGZyb20gJ21vYngnO1xyXG5pbXBvcnQgYXBpIGZyb20gJy4vYXBpJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbkRldGFpbHNTdG9yZXtcclxuXHJcbiAgQG9ic2VydmFibGUgRGVsQnV0dG9uU3RvcmVFcnJvcmVkID0gZmFsc2U7XHJcblxyXG4gIEBvYnNlcnZhYmxlIG5vdGVJc0RlbGV0ZWQgPSB7fTtcclxuXHJcbiAgQG9ic2VydmFibGUgc2hvdztcclxuXHJcbiAgQGNvbXB1dGVkIGdldCBpc09wZW4oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zaG93O1xyXG4gIH1cclxuXHJcbiAgQGFjdGlvblxyXG4gIGRlbEFydGljbGUgKGRhdGEpIHtcclxuICAgIGxldCBzZXQgPSB7IGRlbGV0ZTogdHJ1ZSwgaWQ6IGRhdGEuaWQgfTtcclxuICBcclxuICAgIHRoaXMubm90ZUlzRGVsZXRlZCA9IHNldDtcclxuICBcclxuICAgIGNvbnN0IHVybCA9IGAke2FwaS5kZWxOb3RlQnlJZC5lbmRQb2ludH0ke2RhdGEuaWR9YFxyXG4gIFxyXG4gICAgcmV0dXJuIGZldGNoKHVybCwgeyBtZXRob2Q6IGFwaS5kZWxOb3RlQnlJZC5tZXRob2QgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5vdGVJc0RlbGV0ZWQgPSB7IGRlbGV0ZTogZmFsc2UgfTtcclxuICAgICAgICB0aGlzLmFyY3RpY2xlSGFzRXJyb3JlZCA9IGZhbHNlO1xyXG4gICAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4gdGhpcy5kZWxMaXN0Tm90ZShkYXRhKSlcclxuICAgIC5jYXRjaCgoKSA9PiB0aGlzLkRlbEJ1dHRvblN0b3JlRXJyb3JlZCA9IHRydWUpXHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgb2JzZXJ2YWJsZSwgYWN0aW9uIH0gZnJvbSAnbW9ieCc7XHJcbmltcG9ydCBhcGkgZnJvbSAnLi9hcGknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhbmdlRm9ybVN0b3Jle1xyXG5cclxuICBAb2JzZXJ2YWJsZSBjaGFuZ2VGb3JtU3RvcmVFcnJvcmVkID0gZmFsc2U7XHJcblxyXG4gIEBvYnNlcnZhYmxlIHNob3cgPSBmYWxzZTtcclxuXHJcbiAgQG9ic2VydmFibGUgY2hhbmdlID0gZmFsc2U7XHJcblxyXG4gIEBhY3Rpb25cclxuICBjaGFuZ2VBcnRpY2xlIChkYXRhKSB7XHJcblxyXG4gICAgY29uc3QgdXJsID0gIGAke2FwaS51cGRhdGVOb3RlQnlJZC5lbmRQb2ludH0ke2RhdGEuaWR9YDtcclxuXHJcbiAgICBjb25zdCBzZXQgPSAgeyBjaGFuZ2U6IHRydWUgLCBpZDogZGF0YS5pZH07XHJcblxyXG4gICAgdGhpcy5jaGFuZ2UgPSBzZXQ7XHJcbiAgXHJcbiAgICByZXR1cm4gZmV0Y2godXJsLFxyXG4gICAgICB7XHJcbiAgICAgICAgbWV0aG9kOiBhcGkudXBkYXRlTm90ZUJ5SWQubWV0aG9kLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdGl0bGU6IGRhdGEudGl0bGUgfSlcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNoYW5nZSA9IHtjaGFuZ2U6IGZhbHNlfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4ge3JldHVybiAoZGF0YSl9KVxyXG4gICAgLmNhdGNoKCgpID0+IHRoaXMuY2hhbmdlRm9ybVN0b3JlRXJyb3JlZCA9IHRydWUpXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IG9ic2VydmFibGUsIGFjdGlvbiwgY29tcHV0ZWR9IGZyb20gJ21vYngnO1xyXG4vLyBpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgbGlzdFN0b3JlIGZyb20gJy4vbGlzdFN0b3JlJztcclxuaW1wb3J0IGFwaSBmcm9tICcuL2FwaSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWxCdXR0b25TdG9yZSB7XHJcblxyXG5cclxuICBAb2JzZXJ2YWJsZSBEZWxCdXR0b25TdG9yZUVycm9yZWQgPSBmYWxzZTtcclxuXHJcbiAgQG9ic2VydmFibGUgbm90ZUlzRGVsZXRlZCA9IHt9O1xyXG5cclxuICBAb2JzZXJ2YWJsZSBzaG93ID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zaG93ID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBAY29tcHV0ZWQgZ2V0IGlzT3BlbigpIHtcclxuICAgIHJldHVybiB0aGlzLnNob3c7XHJcbiAgfVxyXG5cclxuICBAYWN0aW9uLmJvdW5kXHJcbiAgc2hvd0xpc3QoKSB7XHJcbiAgICB0aGlzLnNob3cgPSAhdGhpcy5zaG93O1xyXG4gIH1cclxuXHJcbiAgQGFjdGlvblxyXG4gIGRlbEFydGljbGUgKGRhdGEpIHtcclxuICAgIGxldCBzZXQgPSB7IGRlbGV0ZTogdHJ1ZSwgaWQ6IGRhdGEuaWQgfTtcclxuICBcclxuICAgIHRoaXMubm90ZUlzRGVsZXRlZCA9IHNldDtcclxuICBcclxuICAgIGNvbnN0IHVybCA9ICBgJHthcGkuZGVsTm90ZUJ5SWQuZW5kUG9pbnR9JHtkYXRhLmlkfWBcclxuICBcclxuICAgIHJldHVybiBmZXRjaCh1cmwsIHsgbWV0aG9kOiBhcGkuZGVsTm90ZUJ5SWQubWV0aG9kfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5vdGVJc0RlbGV0ZWQgPSB7IGRlbGV0ZTogZmFsc2UgfTtcclxuICAgICAgICB0aGlzLmFyY3RpY2xlSGFzRXJyb3JlZCA9IGZhbHNlO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiBsaXN0U3RvcmUuZGVsTGlzdE5vdGUoZGF0YSkpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLkRlbEJ1dHRvblN0b3JlRXJyb3JlZCA9IHRydWUpXHJcbiAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQge1JvdXRlclN0b3JlfSBmcm9tICdtb2J4LXJlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBCdXR0b25EZXRhaWxzU3RvcmUgZnJvbSAnLi9idXR0b25EZXRhaWxzU3RvcmUnO1xyXG5pbXBvcnQgQ2hhbmdlRm9ybVN0b3JlIGZyb20gJy4vY2hhbmdlRm9ybVN0b3JlJztcclxuaW1wb3J0IERlbEJ1dHRvblN0b3JlIGZyb20gJy4vZGVsQnV0dG9uU3RvcmUnO1xyXG5pbXBvcnQgRm9ybVN0b3JlIGZyb20gJy4vRm9ybVN0b3JlJztcclxuaW1wb3J0IExpc3RTdG9yZSBmcm9tICcuL2xpc3RTdG9yZSc7XHJcblxyXG5jb25zdCByb3V0aW5nU3RvcmUgPSBuZXcgUm91dGVyU3RvcmUoKTtcclxuXHJcbmNvbnN0IHN0b3JlcyA9IHtcclxuICByb3V0aW5nOiByb3V0aW5nU3RvcmUsXHJcbiAgYnV0dG9uRGV0YWlsc1N0b3JlOiBuZXcgQnV0dG9uRGV0YWlsc1N0b3JlKCksXHJcbiAgY2hhbmdlRm9ybVN0b3JlOiBuZXcgQ2hhbmdlRm9ybVN0b3JlKCksXHJcbiAgZGVsQnV0dG9uU3RvcmU6IG5ldyBEZWxCdXR0b25TdG9yZSgpLFxyXG4gIGZvcm1TdG9yZTogbmV3IEZvcm1TdG9yZSgpLFxyXG4gIGxpc3RTdG9yZTogbmV3IExpc3RTdG9yZSgpLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZXMiLCJpbXBvcnQgeyBvYnNlcnZhYmxlLCBhY3Rpb24sIGF1dG9ydW4gfSBmcm9tICdtb2J4JztcclxuaW1wb3J0IGFwaSBmcm9tICcuL2FwaSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0U3RvcmUge1xyXG4gIFxyXG4gIEBvYnNlcnZhYmxlIGxvYWQgPSBmYWxzZTtcclxuXHJcbiAgQG9ic2VydmFibGUgdGl0bGUgPSAnJztcclxuXHJcbiAgQG9ic2VydmFibGUgYXJjdGljbGVJc0xvYWRpbmcgPSBmYWxzZTtcclxuXHJcbiAgQG9ic2VydmFibGUgYXJjdGljbGVIYXNFcnJvcmVkID0gZmFsc2VcclxuXHJcbiAgY29uc3RydWN0b3IobGlzdCwgbGlzdF9jaGVjayl7XHJcbiAgICBsaXN0PyB0aGlzLmxpc3QgPSBsaXN0IDogdGhpcy5saXN0ID0gW11cclxuICAgIGxpc3RfY2hlY2s/IHRoaXMubGlzdF9jaGVjayA9IGxpc3RfY2hlY2sgOiB0aGlzLmxpc3RfY2hlY2sgPSB7fVxyXG4gIH1cclxuXHJcbiAgQG9ic2VydmFibGUgQ2hlY2tIYXNFcnJvcmVkID0gZmFsc2VcclxuXHJcblxyXG4gIEBhY3Rpb24uYm91bmRcclxuICBhZGRMaXN0TmV3Tm90ZShkYXRhKSB7XHJcbiAgICB0aGlzLmFyY3RpY2xlSXNMb2FkaW5nID0gdHJ1ZVxyXG4gICAgdGhpcy5saXN0ID0gb2JzZXJ2YWJsZS5hcnJheSh0aGlzLmxpc3QuY29uY2F0KGRhdGFbZGF0YS5sZW5ndGgtMV0pKVxyXG4gICAgdGhpcy5hcmN0aWNsZUlzTG9hZGluZyA9IGZhbHNlXHJcbiAgfVxyXG5cclxuICBAYWN0aW9uLmJvdW5kXHJcbiAgZGVsTGlzdE5vdGUoZGF0YSkge1xyXG4gICAgdGhpcy5saXN0LnJlcGxhY2UodGhpcy5saXN0LmZpbHRlcigoZWwpID0+IE51bWJlcihlbC5pZCkgIT09IE51bWJlcihkYXRhLmlkKSkpXHJcbiAgfVxyXG5cclxuICBAYWN0aW9uLmJvdW5kXHJcbiAgY2hhbmdlTm90ZShkYXRhKSB7XHJcbiAgICB0aGlzLmxpc3QucmVwbGFjZShcclxuICAgICAgdGhpcy5saXN0LmZpbHRlcigoZWwpID0+IHtcclxuICAgICAgICBpZiAoZWwuaWQgPT0gTnVtYmVyKGRhdGEuaWQpKSB7XHJcbiAgICAgICAgZWwudGl0bGUgPSBkYXRhLnRpdGxlXHJcbiAgICAgICAgcmV0dXJuIGVsXHJcbiAgICAgICAgfSBlbHNlIHsgcmV0dXJuIGVsIH1cclxuICAgICAgfSlcclxuICAgIClcclxuICB9XHJcblxyXG4gIEBhY3Rpb24uYm91bmRcclxuICBnZXROb3RlQnlJZChkYXRhKSB7XHJcbiAgICB0aGlzLmFyY3RpY2xlSXNMb2FkaW5nID0gdHJ1ZVxyXG5cclxuICAgIGNvbnN0IHVybCA9IGAke2FwaS5nZXROb3RlQnlJZC5lbmRQb2ludH0ke2RhdGEuaWR9YFxyXG4gICAgcmV0dXJuIGZldGNoKHVybCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5DaGVja0hhc0Vycm9yZWQgPSBmYWxzZVxyXG4gIFxyXG4gICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChpdGVtcykgPT4ge3RoaXMubGlzdF9jaGVjayA9IG9ic2VydmFibGUoaXRlbXMpOyB0aGlzLmFyY3RpY2xlSXNMb2FkaW5nID0gZmFsc2V9KVxyXG4gICAgLmNhdGNoKCgpID0+IHt0aGlzLkNoZWNrSGFzRXJyb3JlZCA9IHRydWU7IHRoaXMuYXJjdGljbGVJc0xvYWRpbmcgPSBmYWxzZX0pXHJcbiAgfVxyXG5cclxuICBAYWN0aW9uLmJvdW5kXHJcbiAgcmFuZG9tTm90ZXMoZGF0YSkge1xyXG4gICAgICB0aGlzLmFyY3RpY2xlSXNMb2FkaW5nID0gdHJ1ZVxyXG4gICAgICB0aGlzLmxvYWQgPSB0cnVlO1xyXG5cclxuICAgICAgY29uc3QgdXJsID0gYCR7YXBpLmdldE5vdGVzLmVuZFBvaW50fS9yYW5kb20vJHtkYXRhLm51bX1gXHJcbiAgXHJcbiAgICAgIHJldHVybiBmZXRjaCh1cmwpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dClcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hcmN0aWNsZUlzTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5hcmN0aWNsZUhhc0Vycm9yZWQgPSBmYWxzZVxyXG4gIFxyXG4gICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGl0ZW1zKT0+IHRoaXMubGlzdCA9IG9ic2VydmFibGUuYXJyYXkodGhpcy5saXN0LmNvbmNhdChpdGVtcyksIHsgZGVlcDogZmFsc2UgfSkpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmFyY3RpY2xlSGFzRXJyb3JlZCA9IHRydWUpXHJcbiAgfVxyXG59XHJcbiIsIlxyXG5pbXBvcnQge1JvdXRlclN0b3JlfSBmcm9tICdtb2J4LXJlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBCdXR0b25EZXRhaWxzU3RvcmUgZnJvbSAnLi9idXR0b25EZXRhaWxzU3RvcmUnO1xyXG5pbXBvcnQgQ2hhbmdlRm9ybVN0b3JlIGZyb20gJy4vY2hhbmdlRm9ybVN0b3JlJztcclxuaW1wb3J0IERlbEJ1dHRvblN0b3JlIGZyb20gJy4vZGVsQnV0dG9uU3RvcmUnO1xyXG5pbXBvcnQgRm9ybVN0b3JlIGZyb20gJy4vRm9ybVN0b3JlJztcclxuaW1wb3J0IExpc3RTdG9yZSBmcm9tICcuL2xpc3RTdG9yZSc7XHJcbmltcG9ydCB7IG9ic2VydmFibGUgfSBmcm9tICdtb2J4JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb290U3RvcmUge1xyXG4gIGNvbnN0cnVjdG9yKGluaXRpYWxTdGF0ZSkge1xyXG4gICAgdGhpcy5yb3V0aW5nID0gbmV3IFJvdXRlclN0b3JlKGluaXRpYWxTdGF0ZS5yb3V0aW5nKSxcclxuICAgIHRoaXMuYnV0dG9uRGV0YWlsc1N0b3JlID0gbmV3IEJ1dHRvbkRldGFpbHNTdG9yZShpbml0aWFsU3RhdGUuYnV0dG9uRGV0YWlsc1N0b3JlKSxcclxuICAgIHRoaXMuY2hhbmdlRm9ybVN0b3JlID0gbmV3IENoYW5nZUZvcm1TdG9yZShpbml0aWFsU3RhdGUuY2hhbmdlRm9ybVN0b3JlKSxcclxuICAgIHRoaXMuZGVsQnV0dG9uU3RvcmUgPSBuZXcgRGVsQnV0dG9uU3RvcmUoaW5pdGlhbFN0YXRlLmRlbEJ1dHRvblN0b3JlKSxcclxuICAgIHRoaXMuZm9ybVN0b3JlID0gbmV3IEZvcm1TdG9yZShpbml0aWFsU3RhdGUuZm9ybVN0b3JlKSxcclxuICAgIHRoaXMubGlzdFN0b3JlID0gbmV3IExpc3RTdG9yZShcclxuICAgICAgICBvYnNlcnZhYmxlLmFycmF5KGluaXRpYWxTdGF0ZS5saXN0U3RvcmUubGlzdCksXHJcbiAgICAgICAgb2JzZXJ2YWJsZShpbml0aWFsU3RhdGUubGlzdFN0b3JlLmxpc3RfY2hlY2spXHJcbiAgICAgIClcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInXHJcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ21vYngtcmVhY3QnO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4uL3NyYy9BcHAnO1xyXG5pbXBvcnQgJy4uL3NyYy9qcy9jb21wb25lbnRzL2xhbmd1YWdlcy9pMThuJztcclxuaW1wb3J0IHtzeW5jSGlzdG9yeVdpdGhTdG9yZSB9IGZyb20gJ21vYngtcmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IFJvb3RTdG9yZSBmcm9tICcuLi9zcmMvanMvc3RvcmUvcm9vdFN0b3JlJ1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICBjb25zdCB7d2h5RGlkWW91VXBkYXRlfSA9IHJlcXVpcmUoJ3doeS1kaWQteW91LXVwZGF0ZScpXHJcbiAgd2h5RGlkWW91VXBkYXRlKFJlYWN0KVxyXG59XHJcblxyXG5jb25zdCByb290U3RvcmUgPSBuZXcgUm9vdFN0b3JlKHdpbmRvdy5fX0lOSVRJQUxfU1RBVEVfXyk7XHJcbmNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XHJcblxyXG5jb25zdCBicm93c2VySGlzdG9yeSA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCk7XHJcbmNvbnN0IGhpc3RvcnkgPSBzeW5jSGlzdG9yeVdpdGhTdG9yZShicm93c2VySGlzdG9yeSwgcm9vdFN0b3JlLnJvdXRpbmcpO1xyXG5cclxuUmVhY3RET00uaHlkcmF0ZShcclxuICA8UHJvdmlkZXIgey4uLnJvb3RTdG9yZX0+XHJcbiAgICA8Um91dGVyIGhpc3Rvcnk9e2hpc3Rvcnl9PlxyXG4gICAgICA8QXBwIC8+XHJcbiAgICA8L1JvdXRlcj5cclxuICA8L1Byb3ZpZGVyPixcclxuICBlbGVtZW50XHJcbik7Il0sInNvdXJjZVJvb3QiOiIifQ==