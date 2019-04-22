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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0RldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvYWxlcnQvQWxlcnQuanN4Iiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LXN0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9hbGVydC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9idXR0b25EZXRhaWxzL0J1dHRvbkRlYXRhaWxzLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9idXR0b25EZXRhaWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2NoYW5nZUZvcm0vQ2hhbmdlRm9ybS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvY2hhbmdlRm9ybS9jaGFuZ2UtZm9ybS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvY2hhbmdlRm9ybS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9kZWxCdXR0b24vRGVsQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9kZWxCdXR0b24vZGVsLWJ1dHRvbi1zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvZGVsQnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2Zvcm0vRm9ybS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvZm9ybS9mb3JtLXN0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9mb3JtL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2xhbmd1YWdlcy9pMThuLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2xpc3QvTGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9saXN0L2xpc3Qtc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3Nob3dEZXRhaWxzL1Nob3dEZXRhaWxzLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9zaG93RGV0YWlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9zaG93RGV0YWlscy9zaG93LWRldGFpbHMtc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3N3aXRjaGluZ0xhbmd1YWdlIHN5bmMgXlxcLlxcLy4qXFwuanNvbiQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc3dpdGNoaW5nTGFuZ3VhZ2UvU3dpdGNobGFuZ3VhZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3N3aXRjaGluZ0xhbmd1YWdlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3N3aXRjaGluZ0xhbmd1YWdlL3N3aXRjaC1zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0b3JlL0Zvcm1TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3RvcmUvYXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zdG9yZS9idXR0b25EZXRhaWxzU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0b3JlL2NoYW5nZUZvcm1TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3RvcmUvZGVsQnV0dG9uU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zdG9yZS9saXN0U3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0b3JlL3Jvb3RTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zc3IvY2xpZW50LmpzIl0sIm5hbWVzIjpbIkFwcCIsImkxOG5leHQiLCJ0IiwiSG9tZUNvbXAiLCJEZXRhaWxzIiwid2l0aFRyYW5zbGF0aW9uIiwibWF0Y2giLCJpZCIsInBhcmFtcyIsIkFsZXJ0IiwiZGF0YSIsIm1lc3NhZ2UiLCJCdXR0b25EZXRhaWxzIiwiaW5qZWN0IiwicHJvcHMiLCJzdGF0ZSIsInNob3dGb3JtIiwiaGFuZGxlRGVsIiwiYmluZCIsImhhbmRsZUNoYW5nZSIsImRlbEJ1dHRvblN0b3JlIiwibGlzdFN0b3JlIiwicm91dGVDaGFuZ2UiLCJkZWxBcnRpY2xlIiwiZGVsTGlzdE5vdGUiLCJyb3V0aW5nIiwicGF0aCIsImhpc3RvcnkiLCJwdXNoIiwic2V0U3RhdGUiLCJyZW5kZXIiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJzdG9yZXMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJzdHJpbmciLCJtb2J4UHJvcFR5cGVzIiwib2JqZWN0T3JPYnNlcnZhYmxlT2JqZWN0Iiwid2l0aFJvdXRlciIsIkNvbm5lY3RlZENoYW5nZUZvcm0iLCJ0aXRsZSIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsImNoYW5nZUZvcm1TdG9yZSIsInVwZGF0ZVNob3dGb3JtIiwiY2hhbmdlQXJ0aWNsZSIsImdldE5vdGVCeUlkIiwiY2hhbmdlTm90ZSIsInVuZGVmaW5lZCIsImZ1bmMiLCJEZWxCdXR0b24iLCJvYnNlcnZlciIsImhhbmRsZVNob3dGb3JtIiwiQ29ubmVjdGVkRm9ybSIsImZvcm1TdG9yZSIsImFkZEFydGljbGUiLCJhZGRMaXN0TmV3Tm90ZSIsIm5ld0xpc3QiLCJyZXNvdXJjZXMiLCJlbiIsInRyYW5zbGF0aW9uIiwiaTE4biIsInVzZSIsImluaXRSZWFjdEkxOG5leHQiLCJpbml0IiwibG5nIiwia2V5U2VwYXJhdG9yIiwiaW50ZXJwb2xhdGlvbiIsImVzY2FwZVZhbHVlIiwiSXRlbUxpc3QiLCJob3dfbWFueSIsIkhvd01heSIsInJhbmRvbURhdGEiLCJyYW5kb21Ob3RlcyIsIm51bSIsImRlZmF1bHRDbGFzcyIsImFkZENsYXNzIiwidXBkYXRlQ2xhc3MiLCJhcmN0aWNsZUhhc0Vycm9yZWQiLCJhcmN0aWNsZUlzTG9hZGluZyIsIlByZWxvZGVyIiwiaXRlbSIsIk51bWJlciIsIm5vdGVJc0RlbGV0ZWQiLCJjaGFuZ2UiLCJidXR0b24iLCJyYW5kb21haXplciIsIkFycmF5IiwiZnJvbSIsImxpc3QiLCJsZW5ndGgiLCJtYXAiLCJhcmN0aWNsZUNyZWF0ZUxvYWRpbmciLCJSZWFjdCIsIkNvbm5lY3RlZERldGFpbHMiLCJub3RlIiwibGlzdF9jaGVjayIsIkNoZWNrSGFzRXJyb3JlZCIsIkNvbm5lY3RTd2ljaCIsImFjdGl2ZSIsImRlZmF1bHRDbGFzc05hbWVFTiIsImRlZmF1bHRDbGFzc05hbWVSVSIsImhhbmRsZVN3aXRjaEVuIiwic2V0TGFuZ3VhZ2UiLCJoYW5kbGVTd2l0Y2hSdSIsImNvbXBvbmVudFdpbGxNb3VudCIsImxhbmd1YWdlIiwibGFuZyIsInJlcXVpcmUiLCJTd2l0Y2giLCJGb3JtU3RvcmUiLCJhY3Rpb24iLCJib3VuZCIsImhhbmRsZUNoYW5nZUxpc3QiLCJvYnNlcnZhYmxlIiwiYXJyYXkiLCJkZWVwIiwiaGFuZGxlQ2hhbmdlTWVzc2FnZSIsImJvb2wiLCJoYW5kbGVDaGFuZ2VUaXRsZSIsImdldFRpdGxlIiwidXJsIiwiYXBpIiwiYWRkTm90ZSIsImVuZFBvaW50IiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwianNvbiIsIml0ZW1zIiwicHJvdG9jb2wiLCJiYXNlUG9pbnQiLCJwb3J0IiwiYmFzZVVybCIsImdldE5vdGVzIiwiZGVsTm90ZUJ5SWQiLCJ1cGRhdGVOb3RlQnlJZCIsIkJ1dHRvbkRldGFpbHNTdG9yZSIsInNldCIsIkRlbEJ1dHRvblN0b3JlRXJyb3JlZCIsInNob3ciLCJjb21wdXRlZCIsIkNoYW5nZUZvcm1TdG9yZSIsImNoYW5nZUZvcm1TdG9yZUVycm9yZWQiLCJEZWxCdXR0b25TdG9yZSIsInNob3dMaXN0Iiwicm91dGluZ1N0b3JlIiwiUm91dGVyU3RvcmUiLCJidXR0b25EZXRhaWxzU3RvcmUiLCJMaXN0U3RvcmUiLCJjb25jYXQiLCJyZXBsYWNlIiwiZmlsdGVyIiwiZWwiLCJsb2FkIiwiUm9vdFN0b3JlIiwiaW5pdGlhbFN0YXRlIiwicHJvY2VzcyIsIndoeURpZFlvdVVwZGF0ZSIsInJvb3RTdG9yZSIsIndpbmRvdyIsIl9fSU5JVElBTF9TVEFURV9fIiwiZWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJicm93c2VySGlzdG9yeSIsImNyZWF0ZUJyb3dzZXJIaXN0b3J5Iiwic3luY0hpc3RvcnlXaXRoU3RvcmUiLCJSZWFjdERPTSIsImh5ZHJhdGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUFnQix1QkFBdUI7QUFDdkM7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN0SkEseUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFDaEIsU0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0UsMkRBQUMscURBQUQ7QUFBTSxhQUFTLEVBQUMseUNBQWhCO0FBQTBELE1BQUUsRUFBQztBQUE3RCxLQUFrRUMsOENBQU8sQ0FBQ0MsQ0FBUixDQUFVLFVBQVYsTUFBMEIsVUFBMUIsR0FBdUNELDhDQUFPLENBQUNDLENBQVIsQ0FBVSxVQUFWLENBQXZDLEdBQStELE1BQWpJLENBREYsRUFFRSwyREFBQyw4RUFBRCxPQUZGLEVBR0UsMkRBQUMsdURBQUQsUUFDRSwyREFBQyxzREFBRDtBQUFPLFNBQUssTUFBWjtBQUFhLFFBQUksRUFBQyxHQUFsQjtBQUFzQixhQUFTLEVBQUVDLDZDQUFRQTtBQUF6QyxJQURGLEVBRUUsMkRBQUMsc0RBQUQ7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixhQUFTLEVBQUVDLGdEQUFPQTtBQUFyQyxJQUZGLENBSEYsQ0FERjtBQVVELENBWEQ7O0FBYWVDLG9JQUFlLEdBQUdMLEdBQUgsQ0FBOUIsRTs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVlLCtFQUFlO0FBQUEsTUFBWk0sS0FBWSxRQUFaQSxLQUFZO0FBQUEsTUFDcEJDLEVBRG9CLEdBQ2JELEtBQUssQ0FBQ0UsTUFETyxDQUNwQkQsRUFEb0I7QUFFNUIsU0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0UsMkRBQUMsd0VBQUQ7QUFDRSxNQUFFLEVBQUVBO0FBRE4sSUFERixDQURGO0FBT0QsQ0FURCxFOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR2U7QUFBQSxTQUNiO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBRyxhQUFTLEVBQUM7QUFBYixLQUF1Q04sOENBQU8sQ0FBQ0MsQ0FBUixDQUFVLE9BQVYsQ0FBdkMsQ0FERixFQUVFLDJEQUFDLGlFQUFELE9BRkYsQ0FERixFQU1FO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRTtBQUFHLGFBQVMsRUFBQztBQUFiLEtBQXNDRCw4Q0FBTyxDQUFDQyxDQUFSLENBQVUsWUFBVixDQUF0QyxDQURGLEVBRUUsMkRBQUMsaUVBQUQsT0FGRixDQU5GLENBRGE7QUFBQSxDQUFmLEU7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUFBOztBQUVBLElBQU1PLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLElBQUQsRUFBVTtBQUFBLE1BQ2RDLE9BRGMsR0FDRkQsSUFERSxDQUNkQyxPQURjO0FBRXRCLFNBQ0Usd0VBQ0dBLE9BQU8sR0FDTjtBQUFHLGFBQVMsRUFBQztBQUFiLEtBQW1DQSxPQUFuQyxDQURNLEdBR04sSUFKSixDQURGO0FBU0QsQ0FYRDs7QUFjZUYsb0VBQWYsRTs7Ozs7Ozs7Ozs7QUNoQkEseUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVlQSw2R0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUdNRyxhLFdBRExDLHlEQUFNLENBQUMsZ0JBQUQsRUFBbUIsaUJBQW5CLEVBQXNDLFdBQXRDLEVBQW1ELFNBQW5ELEM7Ozs7O0FBT0wseUJBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFDaEIsa0NBQU1BLEtBQU47QUFEZ0IsVUFKbEJDLEtBSWtCLEdBSlY7QUFDTkMsY0FBUSxFQUFFO0FBREosS0FJVTtBQUVoQixVQUFLQyxTQUFMLEdBQWlCLE1BQUtBLFNBQUwsQ0FBZUMsSUFBZiw0RkFBakI7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JELElBQWxCLDRGQUFwQjtBQUhnQjtBQUlqQjs7OztTQUVLRCxTOzs7OzsyRUFBTjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQzJDLEtBQUtILEtBRGhELEVBQ1VQLEVBRFYsZUFDVUEsRUFEVixFQUNjYSxjQURkLGVBQ2NBLGNBRGQsRUFDOEJDLFNBRDlCLGVBQzhCQSxTQUQ5QjtBQUVFLG1CQUFLQyxXQUFMO0FBRkY7QUFBQSxxQkFHUUYsY0FBYyxDQUFDRyxVQUFmLENBQTBCO0FBQUVoQixrQkFBRSxFQUFGQTtBQUFGLGVBQTFCLENBSFI7O0FBQUE7QUFJRWMsdUJBQVMsQ0FBQ0csV0FBVixDQUFzQjtBQUFFakIsa0JBQUUsRUFBRkE7QUFBRixlQUF0Qjs7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLOzs7Ozs7Ozs7U0FPQWUsVyxHQUFBLHVCQUFjO0FBQUEsUUFDSkcsT0FESSxHQUNRLEtBQUtYLEtBRGIsQ0FDSlcsT0FESTtBQUVaLFFBQUlDLElBQUksR0FBRyxHQUFYO0FBQ0EsV0FBT0QsT0FBTyxDQUFDRSxPQUFSLENBQWdCQyxJQUFoQixDQUFxQkYsSUFBckIsQ0FBUDtBQUNELEc7O1NBRURQLFksR0FBQSx3QkFBZTtBQUFBLFFBQ0xILFFBREssR0FDUSxLQUFLRCxLQURiLENBQ0xDLFFBREs7QUFFYixTQUFLYSxRQUFMLENBQWM7QUFBRWIsY0FBUSxFQUFFLENBQUNBO0FBQWIsS0FBZDtBQUNELEc7O1NBRURjLE0sR0FBQSxrQkFBUztBQUFBLFFBQ0NkLFFBREQsR0FDYyxLQUFLRCxLQURuQixDQUNDQyxRQUREO0FBQUEsUUFFQVQsRUFGQSxHQUVNLEtBQUtPLEtBRlgsQ0FFQVAsRUFGQTtBQUdQLFdBQ0U7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNFO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBc0IsZUFBUyxFQUFDLDBDQUFoQztBQUEyRSxhQUFPLEVBQUUsS0FBS1U7QUFBekYsT0FBcUdoQiw4Q0FBTyxDQUFDQyxDQUFSLENBQVUsWUFBVixDQUFyRyxDQURGLEVBRUU7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFzQixlQUFTLEVBQUMsMENBQWhDO0FBQTJFLGFBQU8sRUFBRSxLQUFLaUI7QUFBekYsT0FBd0dsQiw4Q0FBTyxDQUFDQyxDQUFSLENBQVUsWUFBVixDQUF4RyxDQUZGLEVBR0djLFFBQVEsR0FBRywyREFBQyx5REFBRDtBQUFZLG9CQUFjLEVBQUUsS0FBS0csWUFBakM7QUFBK0MsUUFBRSxFQUFFWjtBQUFuRCxNQUFILEdBQStELElBSDFFLENBREY7QUFRRCxHOzs7RUF6Q3lCd0IsK0M7QUE0QzVCbkIsYUFBYSxDQUFDb0IsWUFBZCxHQUE2QjtBQUMzQnpCLElBQUUsRUFBRSxFQUR1QjtBQUUzQmEsZ0JBQWMsRUFBRWEsOENBQU0sQ0FBQ2I7QUFGSSxDQUE3QjtBQUtBUixhQUFhLENBQUNzQixTQUFkLEdBQTBCO0FBQ3hCM0IsSUFBRSxFQUFFNEIsaURBQVMsQ0FBQ0MsU0FBVixDQUFvQixDQUN0QkQsaURBQVMsQ0FBQ0UsTUFEWSxFQUV0QkYsaURBQVMsQ0FBQ0csTUFGWSxDQUFwQixDQURvQjtBQUt4QmIsU0FBTyxFQUFFYyxvREFBYSxDQUFDQyx3QkFMQztBQU14QnBCLGdCQUFjLEVBQUVtQixvREFBYSxDQUFDQyx3QkFOTjtBQU94Qm5CLFdBQVMsRUFBRWtCLG9EQUFhLENBQUNDO0FBUEQsQ0FBMUI7QUFXZTVCLDRFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFZTZCLGtJQUFVLENBQUM3Qix1REFBRCxDQUF6QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBR004QixtQixXQURMN0IseURBQU0sQ0FBQyxXQUFELEVBQWMsaUJBQWQsQzs7Ozs7QUFFTCxpQ0FBZTtBQUFBOztBQUNiO0FBQ0EsVUFBS0UsS0FBTCxHQUFhO0FBQ1g0QixXQUFLLEVBQUUsRUFESTtBQUVYaEMsYUFBTyxFQUFFO0FBRkUsS0FBYjtBQUlBLFVBQUtRLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkQsSUFBbEIsNEZBQXBCO0FBQ0EsVUFBSzBCLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQjFCLElBQWxCLDRGQUFwQjtBQVBhO0FBUWQ7Ozs7U0FFREMsWSxHQUFBLHNCQUFjMEIsS0FBZCxFQUFxQjtBQUFBOztBQUNuQixTQUFLaEIsUUFBTCxzQ0FBaUJnQixLQUFLLENBQUNDLE1BQU4sQ0FBYXZDLEVBQTlCLElBQW1Dc0MsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWhEO0FBQ0QsRzs7U0FFS0gsWTs7Ozs7MkVBQU4saUJBQW9CQyxLQUFwQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0VBLG1CQUFLLENBQUNHLGNBQU47QUFERiw0QkFHNkQsS0FBS2xDLEtBSGxFLEVBR1VQLEVBSFYsZUFHVUEsRUFIVixFQUdjMEMsZUFIZCxlQUdjQSxlQUhkLEVBRytCNUIsU0FIL0IsZUFHK0JBLFNBSC9CLEVBRzBDNkIsY0FIMUMsZUFHMENBLGNBSDFDO0FBSVVQLG1CQUpWLEdBSW9CLEtBQUs1QixLQUp6QixDQUlVNEIsS0FKVjs7QUFBQSxtQkFLTUEsS0FMTjtBQUFBO0FBQUE7QUFBQTs7QUFNSU8sNEJBQWM7QUFObEI7QUFBQSxxQkFPVUQsZUFBZSxDQUFDRSxhQUFoQixDQUE4QjtBQUFFUixxQkFBSyxFQUFMQSxLQUFGO0FBQVNwQyxrQkFBRSxFQUFGQTtBQUFULGVBQTlCLENBUFY7O0FBQUE7QUFBQTtBQUFBLHFCQVFVYyxTQUFTLENBQUMrQixXQUFWLENBQXNCO0FBQUU3QyxrQkFBRSxFQUFGQTtBQUFGLGVBQXRCLENBUlY7O0FBQUE7QUFTSWMsdUJBQVMsQ0FBQ2dDLFVBQVYsQ0FBcUI7QUFBRVYscUJBQUssRUFBTEEsS0FBRjtBQUFTcEMsa0JBQUUsRUFBRkE7QUFBVCxlQUFyQjtBQVRKO0FBQUE7O0FBQUE7QUFXSSxtQkFBS3NCLFFBQUwsQ0FBYztBQUFFbEIsdUJBQU8sRUFBRTtBQUFYLGVBQWQ7O0FBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSzs7Ozs7Ozs7O1NBZUFtQixNLEdBQUEsa0JBQVU7QUFBQSxzQkFDbUIsS0FBS2YsS0FEeEI7QUFBQSxRQUNBNEIsS0FEQSxlQUNBQSxLQURBO0FBQUEsUUFDT2hDLE9BRFAsZUFDT0EsT0FEUDtBQUVSLFdBQ0U7QUFBTSxjQUFRLEVBQUUsS0FBS2lDO0FBQXJCLE9BQ0lqQyxPQUFPLEdBQUcsMkRBQUMsb0RBQUQ7QUFBTyxhQUFPLEVBQUVWLDhDQUFPLENBQUNDLENBQVIsQ0FBVSxPQUFWO0FBQWhCLE1BQUgsR0FBNEMsSUFEdkQsRUFFRTtBQUFLLGVBQVMsRUFBQztBQUFmLE9BQ0U7QUFBTyxhQUFPLEVBQUM7QUFBZixPQUF3QkQsOENBQU8sQ0FBQ0MsQ0FBUixDQUFVLE9BQVYsQ0FBeEIsQ0FERixFQUVFO0FBQ0UsVUFBSSxFQUFDLE1BRFA7QUFFRSxlQUFTLEVBQUMsY0FGWjtBQUdFLFFBQUUsRUFBQyxPQUhMO0FBSUUsV0FBSyxFQUFFeUMsS0FKVDtBQUtFLGNBQVEsRUFBRSxLQUFLeEI7QUFMakIsTUFGRixDQUZGLEVBWUU7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFzQixlQUFTLEVBQUM7QUFBaEMsT0FDR2xCLDhDQUFPLENBQUNDLENBQVIsQ0FBVSxZQUFWLENBREgsQ0FaRixDQURGO0FBa0JELEc7OztFQWxEK0I2QiwrQztBQXFEbENXLG1CQUFtQixDQUFDVixZQUFwQixHQUFtQztBQUNqQ3pCLElBQUUsRUFBRSxFQUQ2QjtBQUVqQzBDLGlCQUFlLEVBQUVoQiw4Q0FBTSxDQUFDZ0IsZUFGUztBQUdqQ0MsZ0JBQWMsRUFBRztBQUFBLFdBQU9JLFNBQVA7QUFBQTtBQUhnQixDQUFuQztBQU1BWixtQkFBbUIsQ0FBQ1IsU0FBcEIsR0FBZ0M7QUFDOUIzQixJQUFFLEVBQUU0QixpREFBUyxDQUFDQyxTQUFWLENBQW9CLENBQ3RCRCxpREFBUyxDQUFDRSxNQURZLEVBRXRCRixpREFBUyxDQUFDRyxNQUZZLENBQXBCLENBRDBCO0FBSzlCVyxpQkFBZSxFQUFHVixvREFBYSxDQUFDQyx3QkFMRjtBQU05Qm5CLFdBQVMsRUFBRWtCLG9EQUFhLENBQUNDLHdCQU5LO0FBTzlCVSxnQkFBYyxFQUFFZixpREFBUyxDQUFDb0I7QUFQSSxDQUFoQztBQVVlYixrRkFBZixFOzs7Ozs7Ozs7OztBQzlFQSx5Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRWVyQyxvSUFBZSxHQUFHcUMsbURBQUgsQ0FBOUIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFJTWMsUyxXQUZMM0MseURBQU0sQ0FBQyxXQUFELEVBQWMsZ0JBQWQsRUFBZ0MsU0FBaEMsQyxnQkFDTjRDLDJEOzs7OztBQUdDLHFCQUFhM0MsS0FBYixFQUFtQjtBQUFBOztBQUNqQixrQ0FBTUEsS0FBTjtBQUVBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRLEVBQUU7QUFEQyxLQUFiO0FBSUEsVUFBS0MsU0FBTCxHQUFpQixNQUFLQSxTQUFMLENBQWVDLElBQWYsNEZBQWpCO0FBQ0EsVUFBS0ksV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCSixJQUFqQiw0RkFBbkI7QUFDQSxVQUFLd0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CeEMsSUFBcEIsNEZBQXRCO0FBVGlCO0FBVWxCOzs7O1NBRUtELFM7Ozs7OzJFQUFOO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFDNEMsS0FBS0gsS0FEakQsRUFDVVAsRUFEVixlQUNVQSxFQURWLEVBQ2NhLGNBRGQsZUFDY0EsY0FEZCxFQUM4QkMsU0FEOUIsZUFDOEJBLFNBRDlCO0FBQUE7QUFBQSxxQkFFUUQsY0FBYyxDQUFDRyxVQUFmLENBQTBCO0FBQUVoQixrQkFBRSxFQUFGQTtBQUFGLGVBQTFCLENBRlI7O0FBQUE7QUFHRWMsdUJBQVMsQ0FBQ0csV0FBVixDQUFzQjtBQUFFakIsa0JBQUUsRUFBRkE7QUFBRixlQUF0Qjs7QUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLOzs7Ozs7Ozs7U0FNQW1ELGMsR0FBQSwwQkFBaUI7QUFBQSxRQUNQMUMsUUFETyxHQUNNLEtBQUtELEtBRFgsQ0FDUEMsUUFETztBQUVmLFNBQUthLFFBQUwsQ0FBYztBQUFDYixjQUFRLEVBQUcsQ0FBQ0E7QUFBYixLQUFkO0FBQ0QsRzs7U0FFS00sVzs7Ozs7MkVBQU47QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUNxQyxLQUFLUixLQUQxQyxFQUNVUCxFQURWLGdCQUNVQSxFQURWLEVBQ2NrQixPQURkLGdCQUNjQSxPQURkLEVBQ3VCSixTQUR2QixnQkFDdUJBLFNBRHZCO0FBRU1LLGtCQUZOLFFBRWdCbkIsRUFGaEI7QUFBQTtBQUFBLHFCQUdRYyxTQUFTLENBQUMrQixXQUFWLENBQXNCO0FBQUU3QyxrQkFBRSxFQUFGQTtBQUFGLGVBQXRCLENBSFI7O0FBQUE7QUFBQSxnREFJU2tCLE9BQU8sQ0FBQ0UsT0FBUixDQUFnQkMsSUFBaEIsQ0FBcUJGLElBQXJCLENBSlQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSzs7Ozs7Ozs7O1NBT0FJLE0sR0FBQSxrQkFBUztBQUFBLFFBQ0NkLFFBREQsR0FDYyxLQUFLRCxLQURuQixDQUNDQyxRQUREO0FBQUEsUUFFQ1QsRUFGRCxHQUVRLEtBQUtPLEtBRmIsQ0FFQ1AsRUFGRDtBQUdQLFdBQ0U7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNFO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBc0IsZUFBUyxFQUFDLHdDQUFoQztBQUF5RSxhQUFPLEVBQUUsS0FBS1U7QUFBdkYsT0FBbUdoQiw4Q0FBTyxDQUFDQyxDQUFSLENBQVUsWUFBVixDQUFuRyxDQURGLEVBRUU7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFzQixlQUFTLEVBQUMsNkNBQWhDO0FBQThFLGFBQU8sRUFBRSxLQUFLb0I7QUFBNUYsT0FBMEdyQiw4Q0FBTyxDQUFDQyxDQUFSLENBQVUsaUJBQVYsQ0FBMUcsQ0FGRixFQUdFO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBc0IsZUFBUyxFQUFDLHdDQUFoQztBQUF5RSxhQUFPLEVBQUUsS0FBS3dEO0FBQXZGLE9BQXdHekQsOENBQU8sQ0FBQ0MsQ0FBUixDQUFVLFlBQVYsQ0FBeEcsQ0FIRixFQUlHYyxRQUFRLEdBQUcsMkRBQUMseURBQUQ7QUFBWSxRQUFFLEVBQUVULEVBQWhCO0FBQW9CLG9CQUFjLEVBQUUsS0FBS21EO0FBQXpDLE1BQUgsR0FBaUUsSUFKNUUsQ0FERjtBQVNELEc7OztFQTVDcUIzQiwrQztBQStDeEJ5QixTQUFTLENBQUN4QixZQUFWLEdBQXlCO0FBQ3ZCekIsSUFBRSxFQUFFLEVBRG1CO0FBRXZCYSxnQkFBYyxFQUFFYSw4Q0FBTSxDQUFDYjtBQUZBLENBQXpCO0FBS0FvQyxTQUFTLENBQUN0QixTQUFWLEdBQXNCO0FBQ3BCM0IsSUFBRSxFQUFFNEIsaURBQVMsQ0FBQ0MsU0FBVixDQUFvQixDQUN0QkQsaURBQVMsQ0FBQ0UsTUFEWSxFQUV0QkYsaURBQVMsQ0FBQ0csTUFGWSxDQUFwQixDQURnQjtBQUtwQmxCLGdCQUFjLEVBQUdtQixvREFBYSxDQUFDQyx3QkFMWDtBQU1wQm5CLFdBQVMsRUFBRWtCLG9EQUFhLENBQUNDLHdCQU5MO0FBT3BCZixTQUFPLEVBQUVjLG9EQUFhLENBQUNDO0FBUEgsQ0FBdEI7QUFVZWdCLHdFQUFmLEU7Ozs7Ozs7Ozs7O0FDdkVBLHlDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZWYsa0lBQVUsQ0FBQ3BDLHFFQUFlLEdBQUdtRCxrREFBSCxDQUFoQixDQUF6QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFJTUcsYSxXQUZMOUMseURBQU0sQ0FBQyxXQUFELEVBQWMsV0FBZCxDLGdCQUNONEMsMkQ7Ozs7O0FBR0MseUJBQVkzQyxLQUFaLEVBQWtCO0FBQUE7O0FBQ2hCLGtDQUFNQSxLQUFOO0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQ1g0QixXQUFLLEVBQUUsRUFESTtBQUVYaEMsYUFBTyxFQUFFO0FBRkUsS0FBYjtBQUtBLFVBQUtRLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkQsSUFBbEIsNEZBQXBCO0FBQ0EsVUFBSzBCLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQjFCLElBQWxCLDRGQUFwQjtBQVRnQjtBQVVqQjs7OztTQUVEQyxZLEdBQUEsc0JBQWMwQixLQUFkLEVBQXFCO0FBQ25CLFFBQU1GLEtBQUssR0FBR0UsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQTNCO0FBQ0EsU0FBS2xCLFFBQUwsQ0FBYztBQUFFYyxXQUFLLEVBQUVBO0FBQVQsS0FBZDtBQUNELEc7O1NBRUtDLFk7Ozs7OzJFQUFOLGlCQUFvQkMsS0FBcEI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFQSxtQkFBSyxDQUFDRyxjQUFOO0FBREYsNEJBRW1DLEtBQUtsQyxLQUZ4QyxFQUVVOEMsU0FGVixlQUVVQSxTQUZWLEVBRXFCdkMsU0FGckIsZUFFcUJBLFNBRnJCO0FBR1VzQixtQkFIVixHQUdvQixLQUFLNUIsS0FIekIsQ0FHVTRCLEtBSFY7O0FBQUEsbUJBSU1BLEtBSk47QUFBQTtBQUFBO0FBQUE7O0FBS0ksbUJBQUtkLFFBQUwsQ0FBYztBQUFFbEIsdUJBQU8sRUFBRTtBQUFYLGVBQWQ7QUFDQSxtQkFBS2tCLFFBQUwsQ0FBYztBQUFFYyxxQkFBSyxFQUFFO0FBQVQsZUFBZDtBQU5KO0FBQUEscUJBT1VpQixTQUFTLENBQUNDLFVBQVYsQ0FBcUI7QUFBRWxCLHFCQUFLLEVBQUxBO0FBQUYsZUFBckIsQ0FQVjs7QUFBQTtBQVFJdEIsdUJBQVMsQ0FBQ3lDLGNBQVYsQ0FBeUJGLFNBQVMsQ0FBQ0csT0FBbkM7QUFSSjtBQUFBOztBQUFBO0FBVUksbUJBQUtsQyxRQUFMLENBQWM7QUFBRWxCLHVCQUFPLEVBQUU7QUFBWCxlQUFkOztBQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEs7Ozs7Ozs7OztTQWNBbUIsTSxHQUFBLGtCQUFVO0FBQUEsc0JBQ21CLEtBQUtmLEtBRHhCO0FBQUEsUUFDQTRCLEtBREEsZUFDQUEsS0FEQTtBQUFBLFFBQ09oQyxPQURQLGVBQ09BLE9BRFA7QUFFUixXQUNFO0FBQU0sZUFBUyxFQUFDLE1BQWhCO0FBQXVCLGNBQVEsRUFBRSxLQUFLaUM7QUFBdEMsT0FDSWpDLE9BQU8sR0FBRywyREFBQyxvREFBRDtBQUFPLGFBQU8sRUFBRVYsOENBQU8sQ0FBQ0MsQ0FBUixDQUFVLE9BQVY7QUFBaEIsTUFBSCxHQUE0QyxJQUR2RCxFQUdFO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDRTtBQUFPLGFBQU8sRUFBQztBQUFmLE9BQXdCRCw4Q0FBTyxDQUFDQyxDQUFSLENBQVUsT0FBVixDQUF4QixDQURGLEVBRUU7QUFDRSxVQUFJLEVBQUMsTUFEUDtBQUVFLGVBQVMsRUFBQyxjQUZaO0FBR0UsUUFBRSxFQUFDLE9BSEw7QUFJRSxXQUFLLEVBQUV5QyxLQUpUO0FBS0UsY0FBUSxFQUFFLEtBQUt4QjtBQUxqQixNQUZGLENBSEYsRUFhRTtBQUFRLFVBQUksRUFBQyxRQUFiO0FBQXNCLGVBQVMsRUFBQztBQUFoQyxPQUNHbEIsOENBQU8sQ0FBQ0MsQ0FBUixDQUFVLFlBQVYsQ0FESCxDQWJGLENBREY7QUFtQkQsRzs7O0VBdER5QjZCLCtDO0FBMEQ1QjRCLGFBQWEsQ0FBQ3pCLFNBQWQsR0FBMEI7QUFDeEIwQixXQUFTLEVBQUdyQixvREFBYSxDQUFDQyx3QkFERjtBQUV4Qm5CLFdBQVMsRUFBR2tCLG9EQUFhLENBQUNDO0FBRkYsQ0FBMUI7QUFLZW1CLDRFQUFmLEU7Ozs7Ozs7Ozs7O0FDeEVBLHlDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFZXRELG9JQUFlLEdBQUdzRCw2Q0FBSCxDQUE5QixFOzs7Ozs7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FHQTtBQUNBOztBQUNBLElBQU1LLFNBQVMsR0FBRztBQUNoQkMsSUFBRSxFQUFFO0FBQ0ZDLGVBQVcsRUFBRTtBQUNYLGdCQUFVO0FBREM7QUFEWDtBQURZLENBQWxCO0FBUUFDLDhDQUFJLENBQ0RDLEdBREgsQ0FDT0MsOERBRFAsRUFDeUI7QUFEekIsQ0FFR0MsSUFGSCxDQUVRO0FBQ0pOLFdBQVMsRUFBVEEsU0FESTtBQUVKTyxLQUFHLEVBQUUsSUFGRDtBQUlKQyxjQUFZLEVBQUUsS0FKVjtBQUlpQjtBQUVyQkMsZUFBYSxFQUFFO0FBQ2JDLGVBQVcsRUFBRSxLQURBLENBQ007O0FBRE47QUFOWCxDQUZSO0FBYWVQLDZHQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztJQU1NUSxRLFdBRkw5RCx5REFBTSxDQUFDLFdBQUQsRUFBYyxXQUFkLEVBQTJCLGdCQUEzQixFQUE2QyxpQkFBN0MsQyxFQURONEIsK0Qsd0JBRUFnQiwyRDs7Ozs7Ozs7Ozs7OztVQUdDMUMsSyxHQUFRO0FBQ042RCxjQUFRLEVBQUU7QUFESixLOztVQUlSQyxNLEdBQVMsVUFBQ2hDLEtBQUQsRUFBVztBQUNsQixZQUFLaEIsUUFBTCxDQUFjO0FBQUUrQyxnQkFBUSxFQUFFL0IsS0FBSyxDQUFDQyxNQUFOLENBQWFDO0FBQXpCLE9BQWQ7QUFDRCxLOztVQUVEK0IsVSxHQUFhLFlBQU07QUFBQSxVQUNUekQsU0FEUyxHQUNLLE1BQUtQLEtBRFYsQ0FDVE8sU0FEUztBQUFBLFVBRVR1RCxRQUZTLEdBRUksTUFBSzdELEtBRlQsQ0FFVDZELFFBRlM7QUFHakJ2RCxlQUFTLENBQUMwRCxXQUFWLENBQXNCO0FBQUVDLFdBQUcsRUFBRUo7QUFBUCxPQUF0QjtBQUNELEs7Ozs7Ozs7U0FFREssWSxHQUFBLHNCQUFjdkUsSUFBZCxFQUFvQjtBQUNsQixRQUFJLENBQUNBLElBQUksQ0FBQ0gsRUFBVixFQUFjO0FBQ1osa0NBQTBCRyxJQUExQjtBQUNELEtBRkQsTUFFTztBQUNMLDZCQUFxQkEsSUFBSSxDQUFDd0UsUUFBMUIsY0FBMkN4RSxJQUFJLENBQUNILEVBQWhEO0FBQ0Q7QUFDRixHOztTQUVENEUsVyxHQUFBLHFCQUFhcEMsS0FBYixFQUFvQjtBQUNsQixTQUFLa0MsWUFBTCxDQUFrQmxDLEtBQWxCO0FBQ0QsRzs7U0FFRGpCLE0sR0FBQSxrQkFBVTtBQUFBOztBQUFBLHNCQUN5RCxLQUFLaEIsS0FEOUQ7QUFBQSxRQUNETyxTQURDLGVBQ0RBLFNBREM7QUFBQSxRQUNXdUMsU0FEWCxlQUNXQSxTQURYO0FBQUEsUUFDc0J4QyxjQUR0QixlQUNzQkEsY0FEdEI7QUFBQSxRQUNzQzZCLGVBRHRDLGVBQ3NDQSxlQUR0Qzs7QUFHUixRQUFJNUIsU0FBUyxDQUFDK0Qsa0JBQWQsRUFBa0M7QUFDaEMsYUFBTztBQUFHLGlCQUFTLEVBQUM7QUFBYiwwRUFBUDtBQUNEOztBQUVELFFBQUkvRCxTQUFTLENBQUNnRSxpQkFBZCxFQUFpQztBQUMvQixhQUFPO0FBQUssV0FBRyxFQUFFQyxRQUFWO0FBQW9CLFdBQUcsRUFBQztBQUF4QixRQUFQO0FBQ0Q7O0FBRUQsUUFBTTNDLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUM0QyxJQUFELEVBQVM7QUFDckIsYUFDRSx3SEFDR0MsTUFBTSxDQUFDRCxJQUFJLENBQUNoRixFQUFOLENBQU4sTUFBcUJpRixNQUFNLENBQUNwRSxjQUFjLENBQUNxRSxhQUFmLENBQTZCbEYsRUFBOUIsQ0FBTixJQUEyQ2lGLE1BQU0sQ0FBQ3ZDLGVBQWUsQ0FBQ3lDLE1BQWhCLENBQXVCbkYsRUFBeEIsQ0FBdEUsSUFDQztBQUFLLFdBQUcsRUFBRStFLFFBQVY7QUFBb0IsV0FBRyxFQUFDO0FBQXhCLFFBREQsR0FDMkNDLElBQUksQ0FBQzVDLEtBRm5ELENBREY7QUFPRCxLQVJEOztBQVVBLFFBQU1nRCxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDSixJQUFELEVBQVM7QUFDdEIsYUFDRSx3SEFDR0MsTUFBTSxDQUFDRCxJQUFJLENBQUNoRixFQUFOLENBQU4sS0FBb0JpRixNQUFNLENBQUNwRSxjQUFjLENBQUNxRSxhQUFmLENBQTZCbEYsRUFBOUIsQ0FBMUIsR0FBOEQsSUFBOUQsR0FFQyx3SEFDRTtBQUFJLGlCQUFTLEVBQUM7QUFBZCxRQURGLEVBRUUsMkRBQUMsd0RBQUQ7QUFDRSxhQUFLLEVBQUVnRixJQUFJLENBQUM1QyxLQURkO0FBRUUsVUFBRSxFQUFFNEMsSUFBSSxDQUFDaEY7QUFGWCxRQUZGLENBSEosQ0FERjtBQWVELEtBaEJEOztBQWtCQSxRQUFNcUYsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBSztBQUN2QixhQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0Usc0VBQUkzRiw4Q0FBTyxDQUFDQyxDQUFSLENBQVUsWUFBVixDQUFKLENBREYsRUFFRTtBQUNFLFlBQUksRUFBQyxRQURQO0FBRUUsaUJBQVMsRUFBQyw2Q0FGWjtBQUdFLGVBQU8sRUFBRSxNQUFJLENBQUM0RTtBQUhoQixlQUZGLEVBU0U7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLGlCQUFTLEVBQUMsMkJBRlo7QUFHRSxtQkFBVyxFQUFDLFdBSGQ7QUFJRSxnQkFBUSxFQUFFLE1BQUksQ0FBQ0Q7QUFKakIsUUFURixDQURGO0FBa0JELEtBbkJEOztBQXFCQSxXQUNFLHdFQUNFO0FBQUksZUFBUyxFQUFDO0FBQWQsT0FDR2dCLEtBQUssQ0FBQ0MsSUFBTixDQUFXekUsU0FBUyxDQUFDMEUsSUFBckIsRUFBMkJDLE1BQTNCLEdBQW9DLENBQXBDLEdBQXdDM0UsU0FBUyxDQUFDMEUsSUFBVixDQUFlRSxHQUFmLENBQW1CLFVBQUNWLElBQUQ7QUFBQSxhQUMxRDtBQUFJLFdBQUcsRUFBRUEsSUFBSSxDQUFDaEYsRUFBZDtBQUFrQixpQkFBUyxFQUFDO0FBQTVCLFNBQ0dvQyxLQUFLLENBQUM0QyxJQUFELENBRFIsRUFFR0ksTUFBTSxDQUFDSixJQUFELENBRlQsQ0FEMEQ7QUFBQSxLQUFuQixDQUF4QyxHQUtJSyxXQUFXLEVBTmxCLEVBT0doQyxTQUFTLENBQUNzQyxxQkFBVixHQUFrQztBQUFLLFNBQUcsRUFBRVosUUFBVjtBQUFvQixTQUFHLEVBQUM7QUFBeEIsTUFBbEMsR0FBNEUsSUFQL0UsQ0FERixDQURGO0FBYUQsRzs7O0VBckdvQmEsNENBQUssQ0FBQ3BFLFM7QUF3RzdCNEMsUUFBUSxDQUFDekMsU0FBVCxHQUFxQjtBQUNuQmQsZ0JBQWMsRUFBR21CLG9EQUFhLENBQUNDLHdCQURaO0FBRW5CbkIsV0FBUyxFQUFFa0Isb0RBQWEsQ0FBQ0Msd0JBRk47QUFHbkJvQixXQUFTLEVBQUVyQixvREFBYSxDQUFDQyx3QkFITjtBQUluQlMsaUJBQWUsRUFBRVYsb0RBQWEsQ0FBQ0M7QUFKWixDQUFyQjtBQU9lbUMsdUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDM0hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVlQSw0R0FBZixFOzs7Ozs7Ozs7OztBQ0hBLHlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtJQUlNeUIsZ0IsV0FGTHZGLHlEQUFNLENBQUMsV0FBRCxFQUFjLGlCQUFkLEMsZ0JBQ040QywyRDs7Ozs7Ozs7Ozs7U0FHQzNCLE0sR0FBQSxrQkFBVTtBQUFBLHNCQUNtQyxLQUFLaEIsS0FEeEM7QUFBQSxRQUNBUCxFQURBLGVBQ0FBLEVBREE7QUFBQSxRQUNJYyxTQURKLGVBQ0lBLFNBREo7QUFBQSxRQUNlNEIsZUFEZixlQUNlQSxlQURmO0FBR1IsUUFBTW9ELElBQUksR0FBR2hGLFNBQVMsQ0FBQ2lGLFVBQXZCO0FBQ0EsV0FDRSx3RUFDSWQsTUFBTSxDQUFDakYsRUFBRCxDQUFOLEtBQWdCaUYsTUFBTSxDQUFDdkMsZUFBZSxDQUFDeUMsTUFBaEIsQ0FBdUJuRixFQUF4QixDQUF2QixJQUF3RGMsU0FBUyxDQUFDZ0UsaUJBQWxFLEdBQ0M7QUFBSyxTQUFHLEVBQUVDLFFBQVY7QUFBb0IsU0FBRyxFQUFDO0FBQXhCLE1BREQsR0FDMkMsdUVBQUtlLElBQUksR0FBR0EsSUFBSSxDQUFDMUQsS0FBUixHQUFnQixJQUF6QixDQUY5QyxFQUlHdEIsU0FBUyxDQUFDa0YsZUFBVixHQUNELDBGQURDLEdBRUMsMkRBQUMsNERBQUQ7QUFDQSxRQUFFLEVBQUVoRztBQURKLE1BTkosQ0FERjtBQWFELEc7OztFQW5CNEJ3QiwrQztBQXNCL0JxRSxnQkFBZ0IsQ0FBQ3BFLFlBQWpCLEdBQWdDO0FBQzlCaUIsaUJBQWUsRUFBRWhCLDhDQUFNLENBQUNnQjtBQURNLENBQWhDO0FBSUFtRCxnQkFBZ0IsQ0FBQ2xFLFNBQWpCLEdBQTZCO0FBQzNCM0IsSUFBRSxFQUFFNEIsaURBQVMsQ0FBQ0MsU0FBVixDQUFvQixDQUN0QkQsaURBQVMsQ0FBQ0UsTUFEWSxFQUV0QkYsaURBQVMsQ0FBQ0csTUFGWSxDQUFwQixDQUR1QjtBQUszQlcsaUJBQWUsRUFBRVYsb0RBQWEsQ0FBQ0Msd0JBTEo7QUFNM0JuQixXQUFTLEVBQUVrQixvREFBYSxDQUFDQztBQU5FLENBQTdCO0FBU2U0RCwrRUFBZixFOzs7Ozs7Ozs7Ozs7QUM1Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRWUvRixvSUFBZSxHQUFHK0Ysb0RBQUgsQ0FBOUIsRTs7Ozs7Ozs7Ozs7QUNKQSx5Qzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBOztJQUVNSSxZOzs7OztBQUVKLHdCQUFZMUYsS0FBWixFQUFrQjtBQUFBOztBQUNoQixrQ0FBTUEsS0FBTjtBQURnQixVQU1sQkMsS0FOa0IsR0FNVjtBQUNOMEYsWUFBTSxFQUFFLFlBREY7QUFFTkMsd0JBQWtCLEVBQUUsaUNBRmQ7QUFHTkMsd0JBQWtCLEVBQUU7QUFIZCxLQU5VOztBQUFBLFVBMkJsQkMsY0EzQmtCLEdBMkJELFlBQU07QUFDckIsWUFBS0MsV0FBTCxDQUFpQixJQUFqQjs7QUFDQSxZQUFLaEYsUUFBTCxDQUFlO0FBQUU4RSwwQkFBa0I7QUFBcEIsT0FBZjs7QUFDQSxZQUFLOUUsUUFBTCxDQUFlO0FBQUU2RSwwQkFBa0IsMEJBQXdCLE1BQUszRixLQUFMLENBQVcwRixNQUFuQztBQUFwQixPQUFmO0FBQ0QsS0EvQmlCOztBQUFBLFVBaUNsQkssY0FqQ2tCLEdBaUNELFlBQU07QUFDckIsWUFBS0QsV0FBTCxDQUFpQixJQUFqQjs7QUFDQSxZQUFLaEYsUUFBTCxDQUFlO0FBQUU4RSwwQkFBa0IseUJBQXVCLE1BQUs1RixLQUFMLENBQVcwRixNQUFsQztBQUFwQixPQUFmOztBQUNBLFlBQUs1RSxRQUFMLENBQWU7QUFBRTZFLDBCQUFrQjtBQUFwQixPQUFmO0FBQ0QsS0FyQ2lCOztBQUVoQixVQUFLRSxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0IxRixJQUFwQiw0RkFBdEI7QUFDQSxVQUFLNEYsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CNUYsSUFBcEIsNEZBQXRCO0FBSGdCO0FBSWpCOzs7O1NBUUQ2RixrQixHQUFBLDhCQUFxQjtBQUNwQixTQUFLRixXQUFMO0FBQ0EsRzs7U0FFREEsVyxHQUFBLHFCQUFZRyxRQUFaLEVBQXNCO0FBQ3BCLFFBQUcsQ0FBQ0EsUUFBSixFQUFhO0FBQ1ZBLGNBQVEsR0FBRyxJQUFYO0FBQ0Y7O0FBQ0QsUUFBSUMsSUFBSSxHQUFHQyw4RkFBUSxPQUFLRixRQUFOLFdBQWxCOztBQUNBL0csa0RBQU8sQ0FBQ3FFLElBQVIsQ0FBYTtBQUNYQyxTQUFHLEVBQUV5QyxRQURNO0FBRVhoRCxlQUFTLEVBQUVpRDtBQUZBLEtBQWI7QUFJRCxHOztTQWNEbkYsTSxHQUFBLGtCQUFTO0FBQUEsc0JBQzBDLEtBQUtmLEtBRC9DO0FBQUEsUUFDQTJGLGtCQURBLGVBQ0FBLGtCQURBO0FBQUEsUUFDb0JDLGtCQURwQixlQUNvQkEsa0JBRHBCO0FBRVAsV0FDRTtBQUFLLGVBQVMsRUFBQztBQUFmLE9BQ0k7QUFBUSxlQUFTLEVBQUVELGtCQUFuQjtBQUF1QyxhQUFPLEVBQUUsS0FBS0U7QUFBckQsT0FBc0UzRyw4Q0FBTyxDQUFDQyxDQUFSLENBQVUsU0FBVixDQUF0RSxDQURKLEVBRUk7QUFBUSxlQUFTLEVBQUV5RyxrQkFBbkI7QUFBdUMsYUFBTyxFQUFFLEtBQUtHO0FBQXJELE9BQXNFN0csOENBQU8sQ0FBQ0MsQ0FBUixDQUFVLFNBQVYsQ0FBdEUsQ0FGSixDQURGO0FBTUQsRzs7O0VBakR3QjZCLCtDOztBQW9EWnlFLDJFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVlVyxzSEFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEEseUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtJQUVxQkMsUyxXQW1CbEJDLDJDQUFNLENBQUNDLEssVUFLUEQsMkNBQU0sQ0FBQ0MsSyxVQUtQRCwyQ0FBTSxDQUFDQyxLLFVBS1BELDJDQUFNLENBQUNDLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FuQlJDLGdCLEdBREEsMEJBQ2lCN0csSUFEakIsRUFDdUI7QUFDckIsU0FBS3FELE9BQUwsR0FBZXlELCtDQUFVLENBQUNDLEtBQVgsQ0FBa0IvRyxJQUFsQixFQUF5QjtBQUFFZ0gsVUFBSSxFQUFFO0FBQVIsS0FBekIsQ0FBZjtBQUNELEc7O1NBR0RDLG1CLEdBREEsNkJBQ29CQyxJQURwQixFQUMwQjtBQUN4QixTQUFLakgsT0FBTCxHQUFlaUgsSUFBZjtBQUNELEc7O1NBR0RDLGlCLEdBREEsMkJBQ2tCbkgsSUFEbEIsRUFDd0I7QUFDdEIsU0FBS2lDLEtBQUwsR0FBYWpDLElBQWI7QUFDRCxHOztTQUdEb0gsUSxHQURBLG9CQUNXO0FBQ1QsV0FBTyxLQUFLbkYsS0FBWjtBQUNELEc7O1NBR0trQixVOzs7OzsyRUFETixpQkFDa0JuRCxJQURsQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFSTtBQUNNcUgsaUJBSFYsR0FHZ0JDLDRDQUFHLENBQUNDLE9BQUosQ0FBWUMsUUFINUI7QUFLSSxtQkFBS1AsbUJBQUwsQ0FBeUIsS0FBekI7QUFDQSxtQkFBS3pCLHFCQUFMLEdBQTZCLElBQTdCO0FBTkosK0NBUVdpQyxLQUFLLENBQUNKLEdBQUQsRUFDVjtBQUNFSyxzQkFBTSxFQUFFSiw0Q0FBRyxDQUFDQyxPQUFKLENBQVlHLE1BRHRCO0FBRUVDLG9CQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUU1Rix1QkFBSyxFQUFFakMsSUFBSSxDQUFDaUM7QUFBZCxpQkFBZjtBQUZSLGVBRFUsQ0FBTCxDQUtKNkYsSUFMSSxDQUtDLFVBQUNDLFFBQUQsRUFBYztBQUNsQixvQkFBSSxDQUFDQSxRQUFRLENBQUNDLEVBQWQsRUFBa0I7QUFDaEIsd0JBQU1DLEtBQUssQ0FBQ0YsUUFBUSxDQUFDRyxVQUFWLENBQVg7QUFDRDs7QUFFRCxxQkFBSSxDQUFDMUMscUJBQUwsR0FBNkIsS0FBN0I7QUFDQSxxQkFBSSxDQUFDZCxrQkFBTCxHQUEwQixLQUExQjtBQUVBLHVCQUFPcUQsUUFBUSxDQUFDSSxJQUFULEVBQVA7QUFDRCxlQWRJLEVBZUpMLElBZkksQ0FlQyxVQUFDTSxLQUFEO0FBQUEsdUJBQVUsS0FBSSxDQUFDdkIsZ0JBQUwsQ0FBc0J1QixLQUF0QixDQUFWO0FBQUEsZUFmRCxXQWdCRTtBQUFBLHVCQUFNLEtBQUksQ0FBQzFELGtCQUFMLEdBQTBCLElBQWhDO0FBQUEsZUFoQkYsQ0FSWDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLOzs7Ozs7Ozs7OzhJQWhDQ29DLCtDOzs7OztXQUFrQixLOztzSUFFbEJBLCtDOzs7OztXQUFtQixFOztzSkFFbkJBLCtDOzs7OztXQUFtQyxLOzttSkFFbkNBLCtDOzs7OztXQUFnQyxLOzt3SUFFaENBLCtDOzs7OztXQUFxQixFOzt3SUFFckJBLCtDOzs7OztXQUFxQixLOztrSUFFckJILDJDOzs7Ozs7Ozs7Ozs7O0FDakJIO0FBQUEsSUFBTTBCLFFBQVEsR0FBRyxTQUFqQjtBQUNBLElBQU1DLFNBQVMsR0FBRyxXQUFsQjtBQUNBLElBQU1DLElBQUksR0FBRyxJQUFiO0FBQ0EsSUFBTUMsT0FBTyxRQUFNSCxRQUFOLEdBQWlCQyxTQUFqQixTQUE4QkMsSUFBM0M7QUFFQSxJQUFNakIsR0FBRyxHQUFHO0FBQ1ZtQixVQUFRLEVBQUU7QUFBQ2YsVUFBTSxFQUFFLEtBQVQ7QUFBZ0JGLFlBQVEsRUFBS2dCLE9BQUw7QUFBeEIsR0FEQTtBQUVWOUYsYUFBVyxFQUFDO0FBQUNnRixVQUFNLEVBQUUsS0FBVDtBQUFnQkYsWUFBUSxFQUFLZ0IsT0FBTDtBQUF4QixHQUZGO0FBR1ZqQixTQUFPLEVBQUU7QUFBQ0csVUFBTSxFQUFFLE1BQVQ7QUFBaUJGLFlBQVEsRUFBS2dCLE9BQUw7QUFBekIsR0FIQztBQUlWRSxhQUFXLEVBQUU7QUFBQ2hCLFVBQU0sRUFBRSxRQUFUO0FBQW1CRixZQUFRLEVBQUtnQixPQUFMO0FBQTNCLEdBSkg7QUFLVkcsZ0JBQWMsRUFBRTtBQUFDakIsVUFBTSxFQUFFLEtBQVQ7QUFBZ0JGLFlBQVEsRUFBS2dCLE9BQUw7QUFBeEI7QUFMTixDQUFaO0FBUWVsQixrRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7SUFFcUJzQixrQjs7Ozs7Ozs7Ozs7OztTQWFuQi9ILFUsR0FEQSxvQkFDWWIsSUFEWixFQUNrQjtBQUFBOztBQUNoQixRQUFJNkksR0FBRyxHQUFHO0FBQUUsZ0JBQVEsSUFBVjtBQUFnQmhKLFFBQUUsRUFBRUcsSUFBSSxDQUFDSDtBQUF6QixLQUFWO0FBRUEsU0FBS2tGLGFBQUwsR0FBcUI4RCxHQUFyQjtBQUVBLFFBQU14QixHQUFHLFFBQU1DLDRDQUFHLENBQUNvQixXQUFKLENBQWdCbEIsUUFBdEIsR0FBaUN4SCxJQUFJLENBQUNILEVBQS9DO0FBRUEsV0FBTzRILEtBQUssQ0FBQ0osR0FBRCxFQUFNO0FBQUVLLFlBQU0sRUFBRUosNENBQUcsQ0FBQ29CLFdBQUosQ0FBZ0JoQjtBQUExQixLQUFOLENBQUwsQ0FDSkksSUFESSxDQUNDLFVBQUNDLFFBQUQsRUFBYztBQUNsQixVQUFJLENBQUNBLFFBQVEsQ0FBQ0MsRUFBZCxFQUFrQjtBQUNoQixjQUFNQyxLQUFLLENBQUNGLFFBQVEsQ0FBQ0csVUFBVixDQUFYO0FBQ0Q7O0FBRUQsV0FBSSxDQUFDbkQsYUFBTCxHQUFxQjtBQUFFLGtCQUFRO0FBQVYsT0FBckI7QUFDQSxXQUFJLENBQUNMLGtCQUFMLEdBQTBCLEtBQTFCO0FBQ0QsS0FSSSxFQVNOb0QsSUFUTSxDQVNEO0FBQUEsYUFBTSxLQUFJLENBQUNoSCxXQUFMLENBQWlCZCxJQUFqQixDQUFOO0FBQUEsS0FUQyxXQVVBO0FBQUEsYUFBTSxLQUFJLENBQUM4SSxxQkFBTCxHQUE2QixJQUFuQztBQUFBLEtBVkEsQ0FBUDtBQVdELEc7Ozs7d0JBdkJzQjtBQUNyQixhQUFPLEtBQUtDLElBQVo7QUFDRDs7OzsrSkFSQWpDLCtDOzs7OztXQUFtQyxLOzs4SUFFbkNBLCtDOzs7OztXQUEyQixFOztxSUFFM0JBLCtDOzs7Ozt3SEFFQWtDLDZDLDJNQUlBckMsMkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZIO0FBQ0E7SUFFcUJzQyxlOzs7Ozs7Ozs7Ozs7O1NBU25CeEcsYSxHQURBLHVCQUNlekMsSUFEZixFQUNxQjtBQUFBOztBQUVuQixRQUFNcUgsR0FBRyxRQUFPQyw0Q0FBRyxDQUFDcUIsY0FBSixDQUFtQm5CLFFBQTFCLEdBQXFDeEgsSUFBSSxDQUFDSCxFQUFuRDtBQUVBLFFBQU1nSixHQUFHLEdBQUk7QUFBRTdELFlBQU0sRUFBRSxJQUFWO0FBQWlCbkYsUUFBRSxFQUFFRyxJQUFJLENBQUNIO0FBQTFCLEtBQWI7QUFFQSxTQUFLbUYsTUFBTCxHQUFjNkQsR0FBZDtBQUVBLFdBQU9wQixLQUFLLENBQUNKLEdBQUQsRUFDVjtBQUNFSyxZQUFNLEVBQUVKLDRDQUFHLENBQUNxQixjQUFKLENBQW1CakIsTUFEN0I7QUFFRUMsVUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFFNUYsYUFBSyxFQUFFakMsSUFBSSxDQUFDaUM7QUFBZCxPQUFmO0FBRlIsS0FEVSxDQUFMLENBS0o2RixJQUxJLENBS0MsVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCLFVBQUksQ0FBQ0EsUUFBUSxDQUFDQyxFQUFkLEVBQWtCO0FBQ2hCLGNBQU1DLEtBQUssQ0FBQ0YsUUFBUSxDQUFDRyxVQUFWLENBQVg7QUFDRDs7QUFFRCxXQUFJLENBQUNsRCxNQUFMLEdBQWM7QUFBQ0EsY0FBTSxFQUFFO0FBQVQsT0FBZDtBQUVBLGFBQU8rQyxRQUFQO0FBQ0QsS0FiSSxFQWNORCxJQWRNLENBY0QsWUFBTTtBQUFDLGFBQVE5SCxJQUFSO0FBQWMsS0FkcEIsV0FlQTtBQUFBLGFBQU0sS0FBSSxDQUFDa0osc0JBQUwsR0FBOEIsSUFBcEM7QUFBQSxLQWZBLENBQVA7QUFnQkQsRzs7O2dLQS9CQXBDLCtDOzs7OztXQUFvQyxLOztxSUFFcENBLCtDOzs7OztXQUFrQixLOzt1SUFFbEJBLCtDOzs7OztXQUFvQixLOzsrSEFFcEJILDJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NDVkg7O0FBQ0E7QUFDQTtJQUVxQndDLGMsV0FpQmxCeEMsMkNBQU0sQ0FBQ0MsSzs7O0FBUlIsNEJBQWM7QUFBQTs7QUFBQTs7QUFBQTs7QUFDWixTQUFLbUMsSUFBTCxHQUFZLEtBQVo7QUFDRDs7OztTQU9ESyxRLEdBREEsb0JBQ1c7QUFDVCxTQUFLTCxJQUFMLEdBQVksQ0FBQyxLQUFLQSxJQUFsQjtBQUNELEc7O1NBR0RsSSxVLEdBREEsb0JBQ1liLElBRFosRUFDa0I7QUFBQTs7QUFDaEIsUUFBSTZJLEdBQUcsR0FBRztBQUFFLGdCQUFRLElBQVY7QUFBZ0JoSixRQUFFLEVBQUVHLElBQUksQ0FBQ0g7QUFBekIsS0FBVjtBQUVBLFNBQUtrRixhQUFMLEdBQXFCOEQsR0FBckI7QUFFQSxRQUFNeEIsR0FBRyxRQUFPQyw0Q0FBRyxDQUFDb0IsV0FBSixDQUFnQmxCLFFBQXZCLEdBQWtDeEgsSUFBSSxDQUFDSCxFQUFoRDtBQUVBLFdBQU80SCxLQUFLLENBQUNKLEdBQUQsRUFBTTtBQUFFSyxZQUFNLEVBQUVKLDRDQUFHLENBQUNvQixXQUFKLENBQWdCaEI7QUFBMUIsS0FBTixDQUFMLENBQ0pJLElBREksQ0FDQyxVQUFDQyxRQUFELEVBQWM7QUFDbEIsVUFBSSxDQUFDQSxRQUFRLENBQUNDLEVBQWQsRUFBa0I7QUFDaEIsY0FBTUMsS0FBSyxDQUFDRixRQUFRLENBQUNHLFVBQVYsQ0FBWDtBQUNEOztBQUVELFdBQUksQ0FBQ25ELGFBQUwsR0FBcUI7QUFBRSxrQkFBUTtBQUFWLE9BQXJCO0FBQ0EsV0FBSSxDQUFDTCxrQkFBTCxHQUEwQixLQUExQjtBQUNELEtBUkksRUFTSm9ELElBVEksQ0FTQztBQUFBLGFBQU1uSCxrREFBUyxDQUFDRyxXQUFWLENBQXNCZCxJQUF0QixDQUFOO0FBQUEsS0FURCxXQVVFO0FBQUEsYUFBTSxLQUFJLENBQUM4SSxxQkFBTCxHQUE2QixJQUFuQztBQUFBLEtBVkYsQ0FBUDtBQVdELEc7Ozs7d0JBNUJzQjtBQUNyQixhQUFPLEtBQUtDLElBQVo7QUFDRDs7OzsrSkFaQWpDLCtDOzs7OztXQUFtQyxLOzs4SUFFbkNBLCtDOzs7OztXQUEyQixFOztxSUFFM0JBLCtDOzs7OztXQUFrQixLOzt3SEFNbEJrQyw2QywwWkFTQXJDLDJDOzs7Ozs7Ozs7Ozs7O0FDM0JIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNMEMsWUFBWSxHQUFHLElBQUlDLDZEQUFKLEVBQXJCO0FBRUEsSUFBTS9ILE1BQU0sR0FBRztBQUNiUixTQUFPLEVBQUVzSSxZQURJO0FBRWJFLG9CQUFrQixFQUFFLElBQUlYLDJEQUFKLEVBRlA7QUFHYnJHLGlCQUFlLEVBQUUsSUFBSTBHLHdEQUFKLEVBSEo7QUFJYnZJLGdCQUFjLEVBQUUsSUFBSXlJLHVEQUFKLEVBSkg7QUFLYmpHLFdBQVMsRUFBRSxJQUFJd0Qsa0RBQUosRUFMRTtBQU1iL0YsV0FBUyxFQUFFLElBQUk2SSxrREFBSjtBQU5FLENBQWY7QUFTZWpJLHFFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7SUFFcUJpSSxTLFdBa0JsQjdDLDJDQUFNLENBQUNDLEssVUFPUEQsMkNBQU0sQ0FBQ0MsSyxVQUtQRCwyQ0FBTSxDQUFDQyxLLFVBWVBELDJDQUFNLENBQUNDLEssVUFrQlBELDJDQUFNLENBQUNDLEs7OztBQWxEUixxQkFBWXZCLElBQVosRUFBa0JPLFVBQWxCLEVBQTZCO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQzNCUCxRQUFJLEdBQUUsS0FBS0EsSUFBTCxHQUFZQSxJQUFkLEdBQXFCLEtBQUtBLElBQUwsR0FBWSxFQUFyQztBQUNBTyxjQUFVLEdBQUUsS0FBS0EsVUFBTCxHQUFrQkEsVUFBcEIsR0FBaUMsS0FBS0EsVUFBTCxHQUFrQixFQUE3RDtBQUNEOzs7O1NBTUR4QyxjLEdBREEsd0JBQ2VwRCxJQURmLEVBQ3FCO0FBQ25CLFNBQUsyRSxpQkFBTCxHQUF5QixJQUF6QjtBQUNBLFNBQUtVLElBQUwsR0FBWXlCLCtDQUFVLENBQUNDLEtBQVgsQ0FBaUIsS0FBSzFCLElBQUwsQ0FBVW9FLE1BQVYsQ0FBaUJ6SixJQUFJLENBQUNBLElBQUksQ0FBQ3NGLE1BQUwsR0FBWSxDQUFiLENBQXJCLENBQWpCLENBQVo7QUFDQSxTQUFLWCxpQkFBTCxHQUF5QixLQUF6QjtBQUNELEc7O1NBR0Q3RCxXLEdBREEscUJBQ1lkLElBRFosRUFDa0I7QUFDaEIsU0FBS3FGLElBQUwsQ0FBVXFFLE9BQVYsQ0FBa0IsS0FBS3JFLElBQUwsQ0FBVXNFLE1BQVYsQ0FBaUIsVUFBQ0MsRUFBRDtBQUFBLGFBQVE5RSxNQUFNLENBQUM4RSxFQUFFLENBQUMvSixFQUFKLENBQU4sS0FBa0JpRixNQUFNLENBQUM5RSxJQUFJLENBQUNILEVBQU4sQ0FBaEM7QUFBQSxLQUFqQixDQUFsQjtBQUNELEc7O1NBR0Q4QyxVLEdBREEsb0JBQ1czQyxJQURYLEVBQ2lCO0FBQ2YsU0FBS3FGLElBQUwsQ0FBVXFFLE9BQVYsQ0FDRSxLQUFLckUsSUFBTCxDQUFVc0UsTUFBVixDQUFpQixVQUFDQyxFQUFELEVBQVE7QUFDdkIsVUFBSUEsRUFBRSxDQUFDL0osRUFBSCxJQUFTaUYsTUFBTSxDQUFDOUUsSUFBSSxDQUFDSCxFQUFOLENBQW5CLEVBQThCO0FBQzlCK0osVUFBRSxDQUFDM0gsS0FBSCxHQUFXakMsSUFBSSxDQUFDaUMsS0FBaEI7QUFDQSxlQUFPMkgsRUFBUDtBQUNDLE9BSEQsTUFHTztBQUFFLGVBQU9BLEVBQVA7QUFBVztBQUNyQixLQUxELENBREY7QUFRRCxHOztTQUdEbEgsVyxHQURBLHFCQUNZMUMsSUFEWixFQUNrQjtBQUFBOztBQUNoQixTQUFLMkUsaUJBQUwsR0FBeUIsSUFBekI7QUFFQSxRQUFNMEMsR0FBRyxRQUFNQyw0Q0FBRyxDQUFDNUUsV0FBSixDQUFnQjhFLFFBQXRCLEdBQWlDeEgsSUFBSSxDQUFDSCxFQUEvQztBQUNBLFdBQU80SCxLQUFLLENBQUNKLEdBQUQsQ0FBTCxDQUFXUyxJQUFYLENBQWdCLFVBQUNDLFFBQUQsRUFBYztBQUNuQyxVQUFJLENBQUNBLFFBQVEsQ0FBQ0MsRUFBZCxFQUFrQjtBQUNoQixjQUFNQyxLQUFLLENBQUNGLFFBQVEsQ0FBQ0csVUFBVixDQUFYO0FBQ0Q7O0FBQ0QsV0FBSSxDQUFDckMsZUFBTCxHQUF1QixLQUF2QjtBQUVBLGFBQU9rQyxRQUFQO0FBQ0QsS0FQTSxFQVFORCxJQVJNLENBUUQsVUFBQ0MsUUFBRDtBQUFBLGFBQWNBLFFBQVEsQ0FBQ0ksSUFBVCxFQUFkO0FBQUEsS0FSQyxFQVNOTCxJQVRNLENBU0QsVUFBQ00sS0FBRCxFQUFXO0FBQUMsV0FBSSxDQUFDeEMsVUFBTCxHQUFrQmtCLHVEQUFVLENBQUNzQixLQUFELENBQTVCO0FBQXFDLFdBQUksQ0FBQ3pELGlCQUFMLEdBQXlCLEtBQXpCO0FBQStCLEtBVC9FLFdBVUEsWUFBTTtBQUFDLFdBQUksQ0FBQ2tCLGVBQUwsR0FBdUIsSUFBdkI7QUFBNkIsV0FBSSxDQUFDbEIsaUJBQUwsR0FBeUIsS0FBekI7QUFBK0IsS0FWbkUsQ0FBUDtBQVdELEc7O1NBR0ROLFcsR0FEQSxxQkFDWXJFLElBRFosRUFDa0I7QUFBQTs7QUFDZCxTQUFLMkUsaUJBQUwsR0FBeUIsSUFBekI7QUFDQSxTQUFLa0YsSUFBTCxHQUFZLElBQVo7QUFFQSxRQUFNeEMsR0FBRyxHQUFNQyw0Q0FBRyxDQUFDbUIsUUFBSixDQUFhakIsUUFBbkIsZ0JBQXNDeEgsSUFBSSxDQUFDc0UsR0FBcEQ7QUFFQSxXQUFPbUQsS0FBSyxDQUFDSixHQUFELENBQUwsQ0FBV1MsSUFBWCxDQUFnQixVQUFDQyxRQUFELEVBQWM7QUFDbkMsVUFBSSxDQUFDQSxRQUFRLENBQUNDLEVBQWQsRUFBa0I7QUFDaEIsY0FBTUMsS0FBSyxDQUFDRixRQUFRLENBQUNHLFVBQVYsQ0FBWDtBQUNEOztBQUNELFlBQUksQ0FBQ3ZELGlCQUFMLEdBQXlCLEtBQXpCO0FBQ0EsWUFBSSxDQUFDRCxrQkFBTCxHQUEwQixLQUExQjtBQUVBLGFBQU9xRCxRQUFQO0FBQ0QsS0FSTSxFQVNORCxJQVRNLENBU0QsVUFBQ0MsUUFBRDtBQUFBLGFBQWNBLFFBQVEsQ0FBQ0ksSUFBVCxFQUFkO0FBQUEsS0FUQyxFQVVOTCxJQVZNLENBVUQsVUFBQ00sS0FBRDtBQUFBLGFBQVUsTUFBSSxDQUFDL0MsSUFBTCxHQUFZeUIsK0NBQVUsQ0FBQ0MsS0FBWCxDQUFpQixNQUFJLENBQUMxQixJQUFMLENBQVVvRSxNQUFWLENBQWlCckIsS0FBakIsQ0FBakIsRUFBMEM7QUFBRXBCLFlBQUksRUFBRTtBQUFSLE9BQTFDLENBQXRCO0FBQUEsS0FWQyxXQVdBO0FBQUEsYUFBTSxNQUFJLENBQUN0QyxrQkFBTCxHQUEwQixJQUFoQztBQUFBLEtBWEEsQ0FBUDtBQVlILEc7Ozs4SUE3RUFvQywrQzs7Ozs7V0FBa0IsSzs7c0lBRWxCQSwrQzs7Ozs7V0FBbUIsRTs7a0pBRW5CQSwrQzs7Ozs7V0FBK0IsSzs7bUpBRS9CQSwrQzs7Ozs7V0FBZ0MsSzs7Z0pBT2hDQSwrQzs7Ozs7V0FBNkIsSzs7Ozs7Ozs7Ozs7Ozs7O0FDakJoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBR3FCZ0QsUyxHQUNuQixtQkFBWUMsWUFBWixFQUEwQjtBQUN4QixPQUFLaEosT0FBTCxHQUFlLElBQUl1SSw2REFBSixDQUFnQlMsWUFBWSxDQUFDaEosT0FBN0IsQ0FBZixFQUNBLEtBQUt3SSxrQkFBTCxHQUEwQixJQUFJWCwyREFBSixDQUF1Qm1CLFlBQVksQ0FBQ1Isa0JBQXBDLENBRDFCLEVBRUEsS0FBS2hILGVBQUwsR0FBdUIsSUFBSTBHLHdEQUFKLENBQW9CYyxZQUFZLENBQUN4SCxlQUFqQyxDQUZ2QixFQUdBLEtBQUs3QixjQUFMLEdBQXNCLElBQUl5SSx1REFBSixDQUFtQlksWUFBWSxDQUFDckosY0FBaEMsQ0FIdEIsRUFJQSxLQUFLd0MsU0FBTCxHQUFpQixJQUFJd0Qsa0RBQUosQ0FBY3FELFlBQVksQ0FBQzdHLFNBQTNCLENBSmpCLEVBS0EsS0FBS3ZDLFNBQUwsR0FBaUIsSUFBSTZJLGtEQUFKLENBQ2IxQywrQ0FBVSxDQUFDQyxLQUFYLENBQWlCZ0QsWUFBWSxDQUFDcEosU0FBYixDQUF1QjBFLElBQXhDLENBRGEsRUFFYnlCLHVEQUFVLENBQUNpRCxZQUFZLENBQUNwSixTQUFiLENBQXVCaUYsVUFBeEIsQ0FGRyxDQUxqQjtBQVNELEM7Ozs7Ozs7Ozs7Ozs7O0FDckJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUlvRSxJQUFKLEVBQTJDO0FBQUEsaUJBQ2Z4RCxtQkFBTyxDQUFDLDBFQUFELENBRFE7QUFBQSxNQUNsQ3lELGVBRGtDLFlBQ2xDQSxlQURrQzs7QUFFekNBLGlCQUFlLENBQUN4RSw0Q0FBRCxDQUFmO0FBQ0Q7O0FBRUQsSUFBTXlFLFNBQVMsR0FBRyxJQUFJSiwrREFBSixDQUFjSyxNQUFNLENBQUNDLGlCQUFyQixDQUFsQjtBQUNBLElBQU1DLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQXhCLENBQWhCO0FBRUEsSUFBTUMsY0FBYyxHQUFHQyxvRUFBb0IsRUFBM0M7QUFDQSxJQUFNeEosT0FBTyxHQUFHeUosOEVBQW9CLENBQUNGLGNBQUQsRUFBaUJOLFNBQVMsQ0FBQ25KLE9BQTNCLENBQXBDO0FBRUE0SixnREFBUSxDQUFDQyxPQUFULENBQ0UsMkRBQUMsbURBQUQsRUFBY1YsU0FBZCxFQUNFLDJEQUFDLG1EQUFEO0FBQVEsU0FBTyxFQUFFako7QUFBakIsR0FDRSwyREFBQyxnREFBRCxPQURGLENBREYsQ0FERixFQU1Fb0osT0FORixFIiwiZmlsZSI6ImNsaWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiY2xpZW50XCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3NyL2NsaWVudC5qc1wiLFwidmVuZG9yc35jbGllbnRcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFN3aXRjaCwgUm91dGUsIExpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuaW1wb3J0IGkxOG5leHQgZnJvbSAnaTE4bmV4dCc7XHJcbmltcG9ydCBTd2l0Y2hMYW5ndWFnZSBmcm9tICcuL2pzL2NvbXBvbmVudHMvc3dpdGNoaW5nTGFuZ3VhZ2UvaW5kZXgnO1xyXG5pbXBvcnQgJy4vQXBwLmNzcyc7XHJcbmltcG9ydCBIb21lQ29tcCBmcm9tICcuL0hvbWUnO1xyXG5pbXBvcnQgRGV0YWlscyBmcm9tICcuL0RldGFpbHMnO1xyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICA8TGluayBjbGFzc05hbWU9XCJjb2wtc20tMSBob21lIG9mZnNldC1zbS0xIGxpbmtfaG9tZXBhZ2VcIiB0bz1cIi9cIj57aTE4bmV4dC50KCduYXYtaG9tZScpICE9PSAnbmF2LWhvbWUnID8gaTE4bmV4dC50KCduYXYtaG9tZScpIDogJ0hPTUUnfTwvTGluaz5cclxuICAgICAgPFN3aXRjaExhbmd1YWdlIC8+XHJcbiAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgY29tcG9uZW50PXtIb21lQ29tcH0gLz5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi86aWRcIiBjb21wb25lbnQ9e0RldGFpbHN9IC8+XHJcbiAgICAgIDwvU3dpdGNoPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oKShBcHApXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTaG93RGV0YWlscyBmcm9tICcuL2pzL2NvbXBvbmVudHMvc2hvd0RldGFpbHMvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHsgbWF0Y2ggfSkgPT4ge1xyXG4gIGNvbnN0IHsgaWQgfSA9IG1hdGNoLnBhcmFtc1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS01IG9mZnNldC1zbS0xXCI+XHJcbiAgICAgIDxTaG93RGV0YWlsc1xyXG4gICAgICAgIGlkPXtpZH1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRm9ybSBmcm9tICcuL2pzL2NvbXBvbmVudHMvZm9ybS9pbmRleCc7XHJcbmltcG9ydCBJdGVtTGlzdCBmcm9tICcuL2pzL2NvbXBvbmVudHMvbGlzdC9pbmRleCc7XHJcbmltcG9ydCBpMThuZXh0IGZyb20gJ2kxOG5leHQnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBjb2wtc21cIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZV9wYWdlIGNvbC1zbS01IG9mZnNldC1zbS0xXCI+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImhvbWVfcGFnZSBhcnRpY2xlX2xpc3RcIj57aTE4bmV4dC50KCdub3RlcycpfTwvcD5cclxuICAgICAgPEl0ZW1MaXN0IC8+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS01IG9mZnNldC1zbS0xXCI+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImhvbWVfcGFnZSBhcnRpY2xlX2FkZFwiPntpMThuZXh0LnQoJ3RpdGxlLW1haW4nKX08L3A+XHJcbiAgICAgIDxGb3JtIC8+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuKSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBBbGVydCA9IChkYXRhKSA9PiB7XHJcbiAgY29uc3QgeyBtZXNzYWdlIH0gPSBkYXRhO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7bWVzc2FnZSA/XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9ybSBhbGVydF9tZXNzYWdlXCI+e21lc3NhZ2V9PC9wPlxyXG4gICAgICAgIDpcclxuICAgICAgICBudWxsXHJcbiAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFsZXJ0XHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0IEFsZXJ0IGZyb20gXCIuL0FsZXJ0XCI7XHJcbmltcG9ydCBcIi4vYWxlcnQtc3R5bGUuY3NzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFsZXJ0IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGkxOG5leHQgZnJvbSAnaTE4bmV4dCc7XHJcbmltcG9ydCB7IGluamVjdCwgUHJvcFR5cGVzIGFzIG1vYnhQcm9wVHlwZXMgfSBmcm9tICdtb2J4LXJlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IENoYW5nZUZvcm0gZnJvbSAnLi4vY2hhbmdlRm9ybS9pbmRleCc7XHJcbmltcG9ydCBzdG9yZXMgZnJvbSAnLi4vLi4vc3RvcmUnO1xyXG5cclxuQGluamVjdCgnZGVsQnV0dG9uU3RvcmUnLCAnY2hhbmdlRm9ybVN0b3JlJywgJ2xpc3RTdG9yZScsICdyb3V0aW5nJylcclxuY2xhc3MgQnV0dG9uRGV0YWlscyBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIHN0YXRlID0ge1xyXG4gICAgc2hvd0Zvcm06IGZhbHNlLFxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5oYW5kbGVEZWwgPSB0aGlzLmhhbmRsZURlbC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXHJcbiAgfVxyXG5cclxuICBhc3luYyBoYW5kbGVEZWwoKSB7XHJcbiAgICBjb25zdCB7IGlkLCBkZWxCdXR0b25TdG9yZSwgbGlzdFN0b3JlfSA9IHRoaXMucHJvcHM7XHJcbiAgICB0aGlzLnJvdXRlQ2hhbmdlKCk7XHJcbiAgICBhd2FpdCBkZWxCdXR0b25TdG9yZS5kZWxBcnRpY2xlKHsgaWQgfSk7XHJcbiAgICBsaXN0U3RvcmUuZGVsTGlzdE5vdGUoeyBpZCB9KVxyXG4gIH1cclxuXHJcbiAgcm91dGVDaGFuZ2UoKSB7XHJcbiAgICBjb25zdCB7IHJvdXRpbmcgfSA9IHRoaXMucHJvcHNcclxuICAgIGxldCBwYXRoID0gJy8nO1xyXG4gICAgcmV0dXJuIHJvdXRpbmcuaGlzdG9yeS5wdXNoKHBhdGgpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2hhbmdlKCkge1xyXG4gICAgY29uc3QgeyBzaG93Rm9ybSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93Rm9ybTogIXNob3dGb3JtIH0pXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHNob3dGb3JtIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc3Qge2lkfSA9IHRoaXMucHJvcHNcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImRldGFpbCBidG5fZGVsZXRlIGJ0biBidG4tc3VjY2VzcyBidG4tc21cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZURlbH0+e2kxOG5leHQudCgnYnRuLWRlbGV0ZScpfTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImRldGFpbCBidG5fY2hhbmdlIGJ0biBidG4tc3VjY2VzcyBidG4tc21cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNoYW5nZX0+e2kxOG5leHQudCgnYnRuLWNoYW5nZScpfTwvYnV0dG9uPlxyXG4gICAgICAgIHtzaG93Rm9ybSA/IDxDaGFuZ2VGb3JtIHVwZGF0ZVNob3dGb3JtPXt0aGlzLmhhbmRsZUNoYW5nZX0gaWQ9e2lkfSAvPiA6IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbkJ1dHRvbkRldGFpbHMuZGVmYXVsdFByb3BzID0ge1xyXG4gIGlkOiAnJyxcclxuICBkZWxCdXR0b25TdG9yZTogc3RvcmVzLmRlbEJ1dHRvblN0b3JlLFxyXG59O1xyXG5cclxuQnV0dG9uRGV0YWlscy5wcm9wVHlwZXMgPSB7XHJcbiAgaWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgUHJvcFR5cGVzLm51bWJlcixcclxuICAgIFByb3BUeXBlcy5zdHJpbmdcclxuICBdKSxcclxuICByb3V0aW5nOiBtb2J4UHJvcFR5cGVzLm9iamVjdE9yT2JzZXJ2YWJsZU9iamVjdCxcclxuICBkZWxCdXR0b25TdG9yZTogbW9ieFByb3BUeXBlcy5vYmplY3RPck9ic2VydmFibGVPYmplY3QsXHJcbiAgbGlzdFN0b3JlOiBtb2J4UHJvcFR5cGVzLm9iamVjdE9yT2JzZXJ2YWJsZU9iamVjdCxcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbkRldGFpbHM7XHJcbiIsImltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IEJ1dHRvbkRldGFpbHMgZnJvbSAnLi9CdXR0b25EZWF0YWlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQnV0dG9uRGV0YWlscylcclxuIiwiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbGFiZWwtaGFzLWZvciAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBpMThuZXh0IGZyb20gJ2kxOG5leHQnO1xyXG5pbXBvcnQgeyBpbmplY3QsIFByb3BUeXBlcyBhcyBtb2J4UHJvcFR5cGVzIH0gZnJvbSAnbW9ieC1yZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBBbGVydCBmcm9tICcuLi9hbGVydC9BbGVydCc7XHJcbmltcG9ydCBzdG9yZXMgZnJvbSAnLi4vLi4vc3RvcmUnO1xyXG5cclxuQGluamVjdCgnbGlzdFN0b3JlJywgJ2NoYW5nZUZvcm1TdG9yZScpXHJcbmNsYXNzIENvbm5lY3RlZENoYW5nZUZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgbWVzc2FnZTogZmFsc2VcclxuICAgIH1cclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpXHJcbiAgfVxyXG5cclxuICBoYW5kbGVDaGFuZ2UgKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgW2V2ZW50LnRhcmdldC5pZF06IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgaGFuZGxlU3VibWl0IChldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgIGNvbnN0IHsgaWQsIGNoYW5nZUZvcm1TdG9yZSwgbGlzdFN0b3JlLCB1cGRhdGVTaG93Rm9ybSB9ID0gdGhpcy5wcm9wc1xyXG4gICAgY29uc3QgeyB0aXRsZSB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgaWYgKHRpdGxlKSB7XHJcbiAgICAgIHVwZGF0ZVNob3dGb3JtKClcclxuICAgICAgYXdhaXQgY2hhbmdlRm9ybVN0b3JlLmNoYW5nZUFydGljbGUoeyB0aXRsZSwgaWQgfSlcclxuICAgICAgYXdhaXQgbGlzdFN0b3JlLmdldE5vdGVCeUlkKHsgaWQgfSlcclxuICAgICAgbGlzdFN0b3JlLmNoYW5nZU5vdGUoeyB0aXRsZSwgaWQgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlOiB0cnVlIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgY29uc3QgeyB0aXRsZSwgbWVzc2FnZSB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cclxuICAgICAgICB7IG1lc3NhZ2UgPyA8QWxlcnQgbWVzc2FnZT17aTE4bmV4dC50KCdhbGVydCcpfSAvPiA6IG51bGx9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCI+e2kxOG5leHQudCgndGl0bGUnKX08L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgaWQ9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLXNtXCI+XHJcbiAgICAgICAgICB7aTE4bmV4dC50KCdidG4tY2hhbmdlJyl9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbkNvbm5lY3RlZENoYW5nZUZvcm0uZGVmYXVsdFByb3BzID0ge1xyXG4gIGlkOiAnJyxcclxuICBjaGFuZ2VGb3JtU3RvcmU6IHN0b3Jlcy5jaGFuZ2VGb3JtU3RvcmUsXHJcbiAgdXBkYXRlU2hvd0Zvcm06ICgoKSA9PiAodW5kZWZpbmVkKSksXHJcbn07XHJcblxyXG5Db25uZWN0ZWRDaGFuZ2VGb3JtLnByb3BUeXBlcyA9IHtcclxuICBpZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgUHJvcFR5cGVzLnN0cmluZ1xyXG4gIF0pLFxyXG4gIGNoYW5nZUZvcm1TdG9yZTogIG1vYnhQcm9wVHlwZXMub2JqZWN0T3JPYnNlcnZhYmxlT2JqZWN0LFxyXG4gIGxpc3RTdG9yZTogbW9ieFByb3BUeXBlcy5vYmplY3RPck9ic2VydmFibGVPYmplY3QsXHJcbiAgdXBkYXRlU2hvd0Zvcm06IFByb3BUeXBlcy5mdW5jLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25uZWN0ZWRDaGFuZ2VGb3JtXHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uICB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XHJcbmltcG9ydCBDb25uZWN0ZWRDaGFuZ2VGb3JtIGZyb20gXCIuL0NoYW5nZUZvcm1cIlxyXG5pbXBvcnQgXCIuL2NoYW5nZS1mb3JtLmNzc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oKShDb25uZWN0ZWRDaGFuZ2VGb3JtKSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGkxOG5leHQgZnJvbSAnaTE4bmV4dCc7XHJcbmltcG9ydCB7IG9ic2VydmVyLCBpbmplY3QsIFByb3BUeXBlcyBhcyBtb2J4UHJvcFR5cGVzIH0gZnJvbSAnbW9ieC1yZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBDaGFuZ2VGb3JtIGZyb20gJy4uL2NoYW5nZUZvcm0vaW5kZXgnO1xyXG5pbXBvcnQgc3RvcmVzIGZyb20gJy4uLy4uL3N0b3JlJztcclxuXHJcbkBpbmplY3QoJ2xpc3RTdG9yZScsICdkZWxCdXR0b25TdG9yZScsICdyb3V0aW5nJylcclxuQG9ic2VydmVyXHJcbmNsYXNzIERlbEJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yIChwcm9wcyl7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc2hvd0Zvcm06IGZhbHNlLFxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaGFuZGxlRGVsID0gdGhpcy5oYW5kbGVEZWwuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5yb3V0ZUNoYW5nZSA9IHRoaXMucm91dGVDaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVTaG93Rm9ybSA9IHRoaXMuaGFuZGxlU2hvd0Zvcm0uYmluZCh0aGlzKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgaGFuZGxlRGVsKCkge1xyXG4gICAgY29uc3QgeyBpZCwgZGVsQnV0dG9uU3RvcmUsIGxpc3RTdG9yZSB9ID0gdGhpcy5wcm9wcztcclxuICAgIGF3YWl0IGRlbEJ1dHRvblN0b3JlLmRlbEFydGljbGUoeyBpZCB9KTtcclxuICAgIGxpc3RTdG9yZS5kZWxMaXN0Tm90ZSh7IGlkIH0pXHJcbiAgfVxyXG5cclxuICBoYW5kbGVTaG93Rm9ybSgpIHtcclxuICAgIGNvbnN0IHsgc2hvd0Zvcm0gfSA9IHRoaXMuc3RhdGU7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93Rm9ybSA6ICFzaG93Rm9ybX0pXHJcbiAgfVxyXG5cclxuICBhc3luYyByb3V0ZUNoYW5nZSgpIHsgICAgXHJcbiAgICBjb25zdCB7IGlkLCByb3V0aW5nLCBsaXN0U3RvcmUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBsZXQgcGF0aCA9IGAke2lkfWA7XHJcbiAgICBhd2FpdCBsaXN0U3RvcmUuZ2V0Tm90ZUJ5SWQoeyBpZCB9KVxyXG4gICAgcmV0dXJuIHJvdXRpbmcuaGlzdG9yeS5wdXNoKHBhdGgpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBzaG93Rm9ybSB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgY29uc3QgeyBpZCB9ID0gdGhpcy5wcm9wc1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3RlIGJ0bl9hbGxfY2hhbmdlIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cIm5vdGUgYnRuX2RlbGV0ZSBidG4gYnRuLXN1Y2Nlc3MgYnRuLXNtXCIgb25DbGljaz17dGhpcy5oYW5kbGVEZWx9PntpMThuZXh0LnQoJ2J0bi1kZWxldGUnKX08L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJub3RlIGJ0bl9zaG93X2RldGFpbCBidG4gYnRuLXN1Y2Nlc3MgYnRuLXNtXCIgb25DbGljaz17dGhpcy5yb3V0ZUNoYW5nZX0+e2kxOG5leHQudCgnYnRuLXNob3ctZGV0YWlsJyl9PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibm90ZSBidG5fY2hhbmdlIGJ0biBidG4tc3VjY2VzcyBidG4tc21cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNob3dGb3JtfT57aTE4bmV4dC50KCdidG4tY2hhbmdlJyl9PC9idXR0b24+XHJcbiAgICAgICAge3Nob3dGb3JtID8gPENoYW5nZUZvcm0gaWQ9e2lkfSB1cGRhdGVTaG93Rm9ybT17dGhpcy5oYW5kbGVTaG93Rm9ybX0gLz4gOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5EZWxCdXR0b24uZGVmYXVsdFByb3BzID0ge1xyXG4gIGlkOiAnJyxcclxuICBkZWxCdXR0b25TdG9yZTogc3RvcmVzLmRlbEJ1dHRvblN0b3JlLFxyXG59O1xyXG5cclxuRGVsQnV0dG9uLnByb3BUeXBlcyA9IHtcclxuICBpZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgUHJvcFR5cGVzLnN0cmluZ1xyXG4gIF0pLFxyXG4gIGRlbEJ1dHRvblN0b3JlOiAgbW9ieFByb3BUeXBlcy5vYmplY3RPck9ic2VydmFibGVPYmplY3QsXHJcbiAgbGlzdFN0b3JlOiBtb2J4UHJvcFR5cGVzLm9iamVjdE9yT2JzZXJ2YWJsZU9iamVjdCxcclxuICByb3V0aW5nOiBtb2J4UHJvcFR5cGVzLm9iamVjdE9yT2JzZXJ2YWJsZU9iamVjdCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVsQnV0dG9uO1xyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcbmltcG9ydCBEZWxCdXR0b24gZnJvbSBcIi4vRGVsQnV0dG9uXCJcclxuaW1wb3J0IFwiLi9kZWwtYnV0dG9uLXN0eWxlLmNzc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKHdpdGhUcmFuc2xhdGlvbigpKERlbEJ1dHRvbikpXHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2xhYmVsLWhhcy1mb3IgKi9cclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgaTE4bmV4dCBmcm9tICdpMThuZXh0J1xyXG5pbXBvcnQgeyBvYnNlcnZlciwgaW5qZWN0LCBQcm9wVHlwZXMgYXMgbW9ieFByb3BUeXBlcyB9IGZyb20gJ21vYngtcmVhY3QnO1xyXG5pbXBvcnQgQWxlcnQgZnJvbSAnLi4vYWxlcnQvaW5kZXgnO1xyXG5pbXBvcnQgc3RvcmVzIGZyb20gJy4uLy4uL3N0b3JlL2luZGV4J1xyXG5cclxuQGluamVjdCgnZm9ybVN0b3JlJywgJ2xpc3RTdG9yZScpXHJcbkBvYnNlcnZlclxyXG5jbGFzcyBDb25uZWN0ZWRGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgbWVzc2FnZTogZmFsc2UsXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcylcclxuICB9XHJcblxyXG4gIGhhbmRsZUNoYW5nZSAoZXZlbnQpIHtcclxuICAgIGNvbnN0IHRpdGxlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRpdGxlOiB0aXRsZSB9KVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgaGFuZGxlU3VibWl0IChldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgY29uc3QgeyBmb3JtU3RvcmUsIGxpc3RTdG9yZSB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IHsgdGl0bGUgfSA9IHRoaXMuc3RhdGVcclxuICAgIGlmICh0aXRsZSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTogZmFsc2UgfSlcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRpdGxlOiAnJyB9KVxyXG4gICAgICBhd2FpdCBmb3JtU3RvcmUuYWRkQXJ0aWNsZSh7IHRpdGxlIH0pXHJcbiAgICAgIGxpc3RTdG9yZS5hZGRMaXN0TmV3Tm90ZShmb3JtU3RvcmUubmV3TGlzdClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlOiB0cnVlIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgY29uc3QgeyB0aXRsZSwgbWVzc2FnZSB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybVwiIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgeyBtZXNzYWdlID8gPEFsZXJ0IG1lc3NhZ2U9e2kxOG5leHQudCgnYWxlcnQnKX0gLz4gOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybSBmb3JtX2lucHV0IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGl0bGVcIj57aTE4bmV4dC50KCd0aXRsZScpfTwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICBpZD1cInRpdGxlXCJcclxuICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImZvcm0gYnRuX2NyZWF0ZSBidG4gYnRuLXN1Y2Nlc3MgYnRuLXNsXCI+XHJcbiAgICAgICAgICB7aTE4bmV4dC50KCdidG4tY3JlYXRlJyl9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcblxyXG5Db25uZWN0ZWRGb3JtLnByb3BUeXBlcyA9IHtcclxuICBmb3JtU3RvcmU6ICBtb2J4UHJvcFR5cGVzLm9iamVjdE9yT2JzZXJ2YWJsZU9iamVjdCxcclxuICBsaXN0U3RvcmU6ICBtb2J4UHJvcFR5cGVzLm9iamVjdE9yT2JzZXJ2YWJsZU9iamVjdCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29ubmVjdGVkRm9ybVxyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xyXG5pbXBvcnQgXCIuL2Zvcm0tc3R5bGUuY3NzXCJcclxuaW1wb3J0IENvbm5lY3RlZEZvcm0gZnJvbSBcIi4vRm9ybVwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oKShDb25uZWN0ZWRGb3JtKTsiLCJpbXBvcnQgaTE4biBmcm9tICdpMThuZXh0J1xyXG5pbXBvcnQgeyBpbml0UmVhY3RJMThuZXh0IH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcclxuXHJcbi8vIHRoZSB0cmFuc2xhdGlvbnNcclxuLy8gKHRpcCBtb3ZlIHRoZW0gaW4gYSBKU09OIGZpbGUgYW5kIGltcG9ydCB0aGVtKVxyXG5jb25zdCByZXNvdXJjZXMgPSB7XHJcbiAgZW46IHtcclxuICAgIHRyYW5zbGF0aW9uOiB7XHJcbiAgICAgICdjcmVhdGUnOiAnQ1JFQVRFJ1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaTE4blxyXG4gIC51c2UoaW5pdFJlYWN0STE4bmV4dCkgLy8gcGFzc2VzIGkxOG4gZG93biB0byByZWFjdC1pMThuZXh0XHJcbiAgLmluaXQoe1xyXG4gICAgcmVzb3VyY2VzLFxyXG4gICAgbG5nOiAnZW4nLFxyXG5cclxuICAgIGtleVNlcGFyYXRvcjogZmFsc2UsIC8vIHdlIGRvIG5vdCB1c2Uga2V5cyBpbiBmb3JtIG1lc3NhZ2VzLndlbGNvbWVcclxuXHJcbiAgICBpbnRlcnBvbGF0aW9uOiB7XHJcbiAgICAgIGVzY2FwZVZhbHVlOiBmYWxzZSAvLyByZWFjdCBhbHJlYWR5IHNhZmVzIGZyb20geHNzXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGkxOG5cclxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LW9uZS1leHByZXNzaW9uLXBlci1saW5lICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG9ic2VydmVyLCBpbmplY3QsIFByb3BUeXBlcyBhcyBtb2J4UHJvcFR5cGVzIH0gZnJvbSAnbW9ieC1yZWFjdCc7XHJcbmltcG9ydCB7d2l0aFJvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyJ1xyXG5pbXBvcnQgaTE4bmV4dCBmcm9tICdpMThuZXh0JztcclxuXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vZGVsQnV0dG9uL2luZGV4JztcclxuaW1wb3J0IFByZWxvZGVyIGZyb20gJy4uLy4uLy4uL3ByZWxvYWRlci8yNS5naWYnO1xyXG5cclxuQHdpdGhSb3V0ZXJcclxuQGluamVjdCgnbGlzdFN0b3JlJywgJ2Zvcm1TdG9yZScsICdkZWxCdXR0b25TdG9yZScsICdjaGFuZ2VGb3JtU3RvcmUnKVxyXG5Ab2JzZXJ2ZXJcclxuY2xhc3MgSXRlbUxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBzdGF0ZSA9IHtcclxuICAgIGhvd19tYW55OiAxMCxcclxuICB9XHJcblxyXG4gIEhvd01heSA9IChldmVudCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGhvd19tYW55OiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICByYW5kb21EYXRhID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBsaXN0U3RvcmUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCB7IGhvd19tYW55IH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgbGlzdFN0b3JlLnJhbmRvbU5vdGVzKHsgbnVtOiBob3dfbWFueX0pXHJcbiAgfVxyXG5cclxuICBkZWZhdWx0Q2xhc3MgKGRhdGEpIHtcclxuICAgIGlmICghZGF0YS5pZCkge1xyXG4gICAgICByZXR1cm4gYG5vdGVzX2xpc3Qgbm90ZSAke2RhdGF9YFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGBub3Rlc19saXN0ICR7ZGF0YS5hZGRDbGFzc30gbm90ZSAke2RhdGEuaWR9YFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2xhc3MgKHZhbHVlKSB7XHJcbiAgICB0aGlzLmRlZmF1bHRDbGFzcyh2YWx1ZSlcclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICBjb25zdCB7bGlzdFN0b3JlICwgZm9ybVN0b3JlLCBkZWxCdXR0b25TdG9yZSwgY2hhbmdlRm9ybVN0b3JlfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICBpZiAobGlzdFN0b3JlLmFyY3RpY2xlSGFzRXJyb3JlZCkge1xyXG4gICAgICByZXR1cm4gPHAgY2xhc3NOYW1lPVwiZXJyb3JcIj5Tb3JyeSEgVGhlcmUgd2FzIGFuIGVycm9yIGxvYWRpbmcgdGhlIGl0ZW1zLCB0cnkgbGF0ZXIgcGxlYXNlLjwvcD5cclxuICAgIH1cclxuXHJcbiAgICBpZiAobGlzdFN0b3JlLmFyY3RpY2xlSXNMb2FkaW5nKSB7XHJcbiAgICAgIHJldHVybiA8aW1nIHNyYz17UHJlbG9kZXJ9IGFsdD1cImxvYWRpbmcuLi5cIiAvPlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gKGl0ZW0pID0+e1xyXG4gICAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIHtOdW1iZXIoaXRlbS5pZCkgPT09IChOdW1iZXIoZGVsQnV0dG9uU3RvcmUubm90ZUlzRGVsZXRlZC5pZCkgfHwgTnVtYmVyKGNoYW5nZUZvcm1TdG9yZS5jaGFuZ2UuaWQpKSA/XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtQcmVsb2Rlcn0gYWx0PVwibG9hZGluZy4uLlwiIC8+IDogaXRlbS50aXRsZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYnV0dG9uID0gKGl0ZW0pID0+eyBcclxuICAgICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICB7TnVtYmVyKGl0ZW0uaWQpID09PSBOdW1iZXIoZGVsQnV0dG9uU3RvcmUubm90ZUlzRGVsZXRlZC5pZCkgPyBudWxsIDpcclxuICAgICAgICAgIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibm90ZXNfbGlzdCBzZXBhcmF0b3JcIiAvPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIClcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgcmFuZG9tYWl6ZXIgPSAoKSA9PntcclxuICAgICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0YVwiPlxyXG4gICAgICAgICAgPHA+e2kxOG5leHQudCgnbGlzdF9lbXB0eScpfTwvcD5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5vdGUgYnRuX3Nob3dfZGV0YWlsIGJ0biBidG4tc3VjY2VzcyBidG4tc21cIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnJhbmRvbURhdGF9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIE9fT1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgaW5wdXRfaW5saW5lXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9JyBIb3cgbXVjaCdcclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuSG93TWF5fSBcclxuICAgICAgICAgIC8+ICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5vdGVzX2xpc3RcIj5cclxuICAgICAgICAgIHtBcnJheS5mcm9tKGxpc3RTdG9yZS5saXN0KS5sZW5ndGggPiAwID8gbGlzdFN0b3JlLmxpc3QubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uaWR9IGNsYXNzTmFtZT1cIm5vdGVzX2xpc3Qgbm90ZVwiPlxyXG4gICAgICAgICAgICAgIHt0aXRsZShpdGVtKX1cclxuICAgICAgICAgICAgICB7YnV0dG9uKGl0ZW0pfVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSkgOiByYW5kb21haXplcigpfVxyXG4gICAgICAgICAge2Zvcm1TdG9yZS5hcmN0aWNsZUNyZWF0ZUxvYWRpbmcgPyA8aW1nIHNyYz17UHJlbG9kZXJ9IGFsdD1cImxvYWRpbmcuLi5cIiAvPiA6IG51bGx9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5JdGVtTGlzdC5wcm9wVHlwZXMgPSB7XHJcbiAgZGVsQnV0dG9uU3RvcmU6ICBtb2J4UHJvcFR5cGVzLm9iamVjdE9yT2JzZXJ2YWJsZU9iamVjdCxcclxuICBsaXN0U3RvcmU6IG1vYnhQcm9wVHlwZXMub2JqZWN0T3JPYnNlcnZhYmxlT2JqZWN0LFxyXG4gIGZvcm1TdG9yZTogbW9ieFByb3BUeXBlcy5vYmplY3RPck9ic2VydmFibGVPYmplY3QsXHJcbiAgY2hhbmdlRm9ybVN0b3JlOiBtb2J4UHJvcFR5cGVzLm9iamVjdE9yT2JzZXJ2YWJsZU9iamVjdCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXRlbUxpc3RcclxuIiwiaW1wb3J0IEl0ZW1MaXN0IGZyb20gJy4vTGlzdCdcclxuaW1wb3J0ICcuL2xpc3Qtc3R5bGUuY3NzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXRlbUxpc3RcclxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG9ic2VydmVyLCBpbmplY3QsIFByb3BUeXBlcyBhcyBtb2J4UHJvcFR5cGVzIH0gZnJvbSAnbW9ieC1yZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBCdXR0b25EZXRhaWxzIGZyb20gJy4uL2J1dHRvbkRldGFpbHMvaW5kZXgnO1xyXG5pbXBvcnQgUHJlbG9kZXIgZnJvbSAnLi4vLi4vLi4vcHJlbG9hZGVyLzI1LmdpZic7XHJcbmltcG9ydCBzdG9yZXMgZnJvbSAnLi4vLi4vc3RvcmUnO1xyXG5cclxuQGluamVjdCgnbGlzdFN0b3JlJywgJ2NoYW5nZUZvcm1TdG9yZScpXHJcbkBvYnNlcnZlclxyXG5jbGFzcyBDb25uZWN0ZWREZXRhaWxzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIGNvbnN0IHsgaWQsIGxpc3RTdG9yZSwgY2hhbmdlRm9ybVN0b3JlIH0gPSB0aGlzLnByb3BzXHJcbiAgICBcclxuICAgIGNvbnN0IG5vdGUgPSBsaXN0U3RvcmUubGlzdF9jaGVja1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICB7KE51bWJlcihpZCkgPT09ICBOdW1iZXIoY2hhbmdlRm9ybVN0b3JlLmNoYW5nZS5pZCkpIHx8IChsaXN0U3RvcmUuYXJjdGljbGVJc0xvYWRpbmcpP1xyXG4gICAgICAgICAgPGltZyBzcmM9e1ByZWxvZGVyfSBhbHQ9XCJsb2FkaW5nLi4uXCIgLz4gOiA8aDE+e25vdGUgPyBub3RlLnRpdGxlIDogbnVsbH08L2gxPlxyXG4gICAgICAgIH1cclxuICAgICAgICB7bGlzdFN0b3JlLkNoZWNrSGFzRXJyb3JlZCA/XHJcbiAgICAgICAgPGgxPiBQYWdlIG5vdCBmb3VuZCA8L2gxPlxyXG4gICAgICAgIDogPEJ1dHRvbkRldGFpbHNcclxuICAgICAgICAgIGlkPXtpZH1cclxuICAgICAgICAgIC8+IFxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5Db25uZWN0ZWREZXRhaWxzLmRlZmF1bHRQcm9wcyA9IHtcclxuICBjaGFuZ2VGb3JtU3RvcmU6IHN0b3Jlcy5jaGFuZ2VGb3JtU3RvcmUsXHJcbn07XHJcblxyXG5Db25uZWN0ZWREZXRhaWxzLnByb3BUeXBlcyA9IHtcclxuICBpZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgUHJvcFR5cGVzLnN0cmluZ1xyXG4gIF0pLFxyXG4gIGNoYW5nZUZvcm1TdG9yZTogbW9ieFByb3BUeXBlcy5vYmplY3RPck9ic2VydmFibGVPYmplY3QsXHJcbiAgbGlzdFN0b3JlOiBtb2J4UHJvcFR5cGVzLm9iamVjdE9yT2JzZXJ2YWJsZU9iamVjdCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29ubmVjdGVkRGV0YWlsc1xyXG4iLCJpbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuaW1wb3J0IENvbm5lY3RlZERldGFpbHMgZnJvbSAnLi9TaG93RGV0YWlscyc7XHJcbmltcG9ydCAnLi9zaG93LWRldGFpbHMtc3R5bGUuY3NzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCkoQ29ubmVjdGVkRGV0YWlscylcclxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vZW4uanNvblwiOiBcIi4vc3JjL2pzL2NvbXBvbmVudHMvc3dpdGNoaW5nTGFuZ3VhZ2UvZW4uanNvblwiLFxuXHRcIi4vcnUuanNvblwiOiBcIi4vc3JjL2pzL2NvbXBvbmVudHMvc3dpdGNoaW5nTGFuZ3VhZ2UvcnUuanNvblwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9qcy9jb21wb25lbnRzL3N3aXRjaGluZ0xhbmd1YWdlIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLmpzb24kXCI7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgaTE4bmV4dCBmcm9tIFwiaTE4bmV4dFwiO1xyXG5cclxuY2xhc3MgQ29ubmVjdFN3aWNoIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5oYW5kbGVTd2l0Y2hFbiA9IHRoaXMuaGFuZGxlU3dpdGNoRW4uYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVTd2l0Y2hSdSA9IHRoaXMuaGFuZGxlU3dpdGNoUnUuYmluZCh0aGlzKVxyXG4gIH1cclxuXHJcbiAgc3RhdGUgPSB7XHJcbiAgICBhY3RpdmU6IFwiYnRuX2FjdGl2ZVwiLFxyXG4gICAgZGVmYXVsdENsYXNzTmFtZUVOOiBcImhlYWRlciBidG5fc3dpdGNoIGJ0bl9hY3RpdmUgZW5cIixcclxuICAgIGRlZmF1bHRDbGFzc05hbWVSVTogXCJoZWFkZXIgYnRuX3N3aXRjaCBydVwiLFxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICB0aGlzLnNldExhbmd1YWdlKCk7XHJcbiAgfVxyXG4gIFxyXG4gIHNldExhbmd1YWdlKGxhbmd1YWdlKSB7XHJcbiAgICBpZighbGFuZ3VhZ2Upe1xyXG4gICAgICAgbGFuZ3VhZ2UgPSAnZW4nXHJcbiAgICB9XHJcbiAgICBsZXQgbGFuZyA9IHJlcXVpcmUoYC4vJHtsYW5ndWFnZX0uanNvbmApXHJcbiAgICBpMThuZXh0LmluaXQoe1xyXG4gICAgICBsbmc6IGxhbmd1YWdlLFxyXG4gICAgICByZXNvdXJjZXM6IGxhbmdcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3dpdGNoRW4gPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldExhbmd1YWdlKCdlbicpXHJcbiAgICB0aGlzLnNldFN0YXRlKCB7IGRlZmF1bHRDbGFzc05hbWVSVTogYGhlYWRlciBidG5fc3dpdGNoIHJ1YCB9IClcclxuICAgIHRoaXMuc2V0U3RhdGUoIHsgZGVmYXVsdENsYXNzTmFtZUVOOiBgaGVhZGVyIGJ0bl9zd2l0Y2ggICR7dGhpcy5zdGF0ZS5hY3RpdmV9IGVuYCB9IClcclxuICB9XHJcblxyXG4gIGhhbmRsZVN3aXRjaFJ1ID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRMYW5ndWFnZSgncnUnKVxyXG4gICAgdGhpcy5zZXRTdGF0ZSggeyBkZWZhdWx0Q2xhc3NOYW1lUlU6IGBoZWFkZXIgYnRuX3N3aXRjaCAke3RoaXMuc3RhdGUuYWN0aXZlfSBydWAgfSApXHJcbiAgICB0aGlzLnNldFN0YXRlKCB7IGRlZmF1bHRDbGFzc05hbWVFTjogYGhlYWRlciBidG5fc3dpdGNoIGVuYCB9IClcclxuICB9XHJcbiAgXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge2RlZmF1bHRDbGFzc05hbWVFTiwgZGVmYXVsdENsYXNzTmFtZVJVfSA9IHRoaXMuc3RhdGVcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyIHN3aXRjaCBjb2wtc20tMyBvZmZzZXQtc20tNlwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2RlZmF1bHRDbGFzc05hbWVFTn0gb25DbGljaz17dGhpcy5oYW5kbGVTd2l0Y2hFbn0+e2kxOG5leHQudCgnZW5nbGlzaCcpfTwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2RlZmF1bHRDbGFzc05hbWVSVX0gb25DbGljaz17dGhpcy5oYW5kbGVTd2l0Y2hSdX0+e2kxOG5leHQudCgncnVzc2lhbicpfTwvYnV0dG9uPlxyXG4gICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29ubmVjdFN3aWNoXHJcbiIsImltcG9ydCBTd2l0Y2ggZnJvbSAnLi9Td2l0Y2hsYW5ndWFnZSc7XHJcbmltcG9ydCAnLi9zd2l0Y2gtc3R5bGUuY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN3aXRjaFxyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImltcG9ydCB7IG9ic2VydmFibGUsIGFjdGlvbn0gZnJvbSAnbW9ieCc7XHJcbmltcG9ydCBhcGkgZnJvbSAnLi9hcGknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVN0b3Jle1xyXG5cclxuICBAb2JzZXJ2YWJsZSBsb2FkID0gZmFsc2U7XHJcblxyXG4gIEBvYnNlcnZhYmxlIHRpdGxlID0gJyc7XHJcblxyXG4gIEBvYnNlcnZhYmxlIGFyY3RpY2xlQ3JlYXRlTG9hZGluZyA9IGZhbHNlO1xyXG5cclxuICBAb2JzZXJ2YWJsZSBhcmN0aWNsZUhhc0Vycm9yZWQgPSBmYWxzZVxyXG5cclxuICBAb2JzZXJ2YWJsZSBuZXdMaXN0ID0gW107XHJcblxyXG4gIEBvYnNlcnZhYmxlIG1lc3NhZ2UgPSBmYWxzZTtcclxuXHJcbiAgQGFjdGlvblxyXG4gIGhhbmRsZUNoYW5nZUxpc3QoZGF0YSkge1xyXG4gICAgdGhpcy5uZXdMaXN0ID0gb2JzZXJ2YWJsZS5hcnJheSgoZGF0YSksIHsgZGVlcDogZmFsc2UgfSlcclxuICB9XHJcblxyXG4gIEBhY3Rpb24uYm91bmRcclxuICBoYW5kbGVDaGFuZ2VNZXNzYWdlKGJvb2wpIHtcclxuICAgIHRoaXMubWVzc2FnZSA9IGJvb2xcclxuICB9XHJcblxyXG4gIEBhY3Rpb24uYm91bmRcclxuICBoYW5kbGVDaGFuZ2VUaXRsZShkYXRhKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gZGF0YVxyXG4gIH1cclxuXHJcbiAgQGFjdGlvbi5ib3VuZFxyXG4gIGdldFRpdGxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudGl0bGVcclxuICB9XHJcblxyXG4gIEBhY3Rpb24uYm91bmRcclxuICBhc3luYyBhZGRBcnRpY2xlIChkYXRhKSB7XHJcbiAgICAgIC8vIGNvbnN0IHVybCA9ICdodHRwczovL3ByaXZhdGUtYW5vbi01MzU1MTBlZTZiLW5vdGUxMC5hcGlhcnktbW9jay5jb20vbm90ZXMnXHJcbiAgICAgIGNvbnN0IHVybCA9IGFwaS5hZGROb3RlLmVuZFBvaW50XHJcbiAgXHJcbiAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlTWVzc2FnZShmYWxzZSlcclxuICAgICAgdGhpcy5hcmN0aWNsZUNyZWF0ZUxvYWRpbmcgPSB0cnVlXHJcbiAgXHJcbiAgICAgIHJldHVybiBmZXRjaCh1cmwsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWV0aG9kOiBhcGkuYWRkTm90ZS5tZXRob2QsXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHRpdGxlOiBkYXRhLnRpdGxlIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dClcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLmFyY3RpY2xlQ3JlYXRlTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICB0aGlzLmFyY3RpY2xlSGFzRXJyb3JlZCA9IGZhbHNlXHJcblxyXG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKGl0ZW1zKT0+IHRoaXMuaGFuZGxlQ2hhbmdlTGlzdChpdGVtcykpXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IHRoaXMuYXJjdGljbGVIYXNFcnJvcmVkID0gdHJ1ZSlcclxuICAgIH1cclxuICB9XHJcbiIsImNvbnN0IHByb3RvY29sID0gJ2h0dHA6Ly8nO1xyXG5jb25zdCBiYXNlUG9pbnQgPSAnbG9jYWxob3N0JztcclxuY29uc3QgcG9ydCA9IDMwMDE7XHJcbmNvbnN0IGJhc2VVcmwgPSBgJHtwcm90b2NvbH0ke2Jhc2VQb2ludH06JHtwb3J0fWA7XHJcblxyXG5jb25zdCBhcGkgPSB7XHJcbiAgZ2V0Tm90ZXM6IHttZXRob2Q6IFwiR0VUXCIgLGVuZFBvaW50OiBgJHtiYXNlVXJsfS9ub3Rlc2B9LFxyXG4gIGdldE5vdGVCeUlkOnttZXRob2Q6IFwiR0VUXCIgLGVuZFBvaW50OiBgJHtiYXNlVXJsfS9ub3Rlcy9gfSxcclxuICBhZGROb3RlOiB7bWV0aG9kOiBcIlBPU1RcIiAsZW5kUG9pbnQ6IGAke2Jhc2VVcmx9L25vdGVzYH0sXHJcbiAgZGVsTm90ZUJ5SWQ6IHttZXRob2Q6IFwiREVMRVRFXCIgLGVuZFBvaW50OiBgJHtiYXNlVXJsfS9ub3Rlcy9gfSxcclxuICB1cGRhdGVOb3RlQnlJZDoge21ldGhvZDogXCJQVVRcIiAsZW5kUG9pbnQ6IGAke2Jhc2VVcmx9L25vdGVzL2B9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcGk7IiwiaW1wb3J0IHsgb2JzZXJ2YWJsZSwgYWN0aW9uLCBjb21wdXRlZH0gZnJvbSAnbW9ieCc7XHJcbmltcG9ydCBhcGkgZnJvbSAnLi9hcGknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uRGV0YWlsc1N0b3Jle1xyXG5cclxuICBAb2JzZXJ2YWJsZSBEZWxCdXR0b25TdG9yZUVycm9yZWQgPSBmYWxzZTtcclxuXHJcbiAgQG9ic2VydmFibGUgbm90ZUlzRGVsZXRlZCA9IHt9O1xyXG5cclxuICBAb2JzZXJ2YWJsZSBzaG93O1xyXG5cclxuICBAY29tcHV0ZWQgZ2V0IGlzT3BlbigpIHtcclxuICAgIHJldHVybiB0aGlzLnNob3c7XHJcbiAgfVxyXG5cclxuICBAYWN0aW9uXHJcbiAgZGVsQXJ0aWNsZSAoZGF0YSkge1xyXG4gICAgbGV0IHNldCA9IHsgZGVsZXRlOiB0cnVlLCBpZDogZGF0YS5pZCB9O1xyXG4gIFxyXG4gICAgdGhpcy5ub3RlSXNEZWxldGVkID0gc2V0O1xyXG4gIFxyXG4gICAgY29uc3QgdXJsID0gYCR7YXBpLmRlbE5vdGVCeUlkLmVuZFBvaW50fSR7ZGF0YS5pZH1gXHJcbiAgXHJcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7IG1ldGhvZDogYXBpLmRlbE5vdGVCeUlkLm1ldGhvZCB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubm90ZUlzRGVsZXRlZCA9IHsgZGVsZXRlOiBmYWxzZSB9O1xyXG4gICAgICAgIHRoaXMuYXJjdGljbGVIYXNFcnJvcmVkID0gZmFsc2U7XHJcbiAgICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiB0aGlzLmRlbExpc3ROb3RlKGRhdGEpKVxyXG4gICAgLmNhdGNoKCgpID0+IHRoaXMuRGVsQnV0dG9uU3RvcmVFcnJvcmVkID0gdHJ1ZSlcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBvYnNlcnZhYmxlLCBhY3Rpb24gfSBmcm9tICdtb2J4JztcclxuaW1wb3J0IGFwaSBmcm9tICcuL2FwaSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFuZ2VGb3JtU3RvcmV7XHJcblxyXG4gIEBvYnNlcnZhYmxlIGNoYW5nZUZvcm1TdG9yZUVycm9yZWQgPSBmYWxzZTtcclxuXHJcbiAgQG9ic2VydmFibGUgc2hvdyA9IGZhbHNlO1xyXG5cclxuICBAb2JzZXJ2YWJsZSBjaGFuZ2UgPSBmYWxzZTtcclxuXHJcbiAgQGFjdGlvblxyXG4gIGNoYW5nZUFydGljbGUgKGRhdGEpIHtcclxuXHJcbiAgICBjb25zdCB1cmwgPSAgYCR7YXBpLnVwZGF0ZU5vdGVCeUlkLmVuZFBvaW50fSR7ZGF0YS5pZH1gO1xyXG5cclxuICAgIGNvbnN0IHNldCA9ICB7IGNoYW5nZTogdHJ1ZSAsIGlkOiBkYXRhLmlkfTtcclxuXHJcbiAgICB0aGlzLmNoYW5nZSA9IHNldDtcclxuICBcclxuICAgIHJldHVybiBmZXRjaCh1cmwsXHJcbiAgICAgIHtcclxuICAgICAgICBtZXRob2Q6IGFwaS51cGRhdGVOb3RlQnlJZC5tZXRob2QsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB0aXRsZTogZGF0YS50aXRsZSB9KVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbmdlID0ge2NoYW5nZTogZmFsc2V9O1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiB7cmV0dXJuIChkYXRhKX0pXHJcbiAgICAuY2F0Y2goKCkgPT4gdGhpcy5jaGFuZ2VGb3JtU3RvcmVFcnJvcmVkID0gdHJ1ZSlcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgb2JzZXJ2YWJsZSwgYWN0aW9uLCBjb21wdXRlZH0gZnJvbSAnbW9ieCc7XHJcbi8vIGltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBsaXN0U3RvcmUgZnJvbSAnLi9saXN0U3RvcmUnO1xyXG5pbXBvcnQgYXBpIGZyb20gJy4vYXBpJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlbEJ1dHRvblN0b3JlIHtcclxuXHJcblxyXG4gIEBvYnNlcnZhYmxlIERlbEJ1dHRvblN0b3JlRXJyb3JlZCA9IGZhbHNlO1xyXG5cclxuICBAb2JzZXJ2YWJsZSBub3RlSXNEZWxldGVkID0ge307XHJcblxyXG4gIEBvYnNlcnZhYmxlIHNob3cgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnNob3cgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIEBjb21wdXRlZCBnZXQgaXNPcGVuKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2hvdztcclxuICB9XHJcblxyXG4gIEBhY3Rpb24uYm91bmRcclxuICBzaG93TGlzdCgpIHtcclxuICAgIHRoaXMuc2hvdyA9ICF0aGlzLnNob3c7XHJcbiAgfVxyXG5cclxuICBAYWN0aW9uXHJcbiAgZGVsQXJ0aWNsZSAoZGF0YSkge1xyXG4gICAgbGV0IHNldCA9IHsgZGVsZXRlOiB0cnVlLCBpZDogZGF0YS5pZCB9O1xyXG4gIFxyXG4gICAgdGhpcy5ub3RlSXNEZWxldGVkID0gc2V0O1xyXG4gIFxyXG4gICAgY29uc3QgdXJsID0gIGAke2FwaS5kZWxOb3RlQnlJZC5lbmRQb2ludH0ke2RhdGEuaWR9YFxyXG4gIFxyXG4gICAgcmV0dXJuIGZldGNoKHVybCwgeyBtZXRob2Q6IGFwaS5kZWxOb3RlQnlJZC5tZXRob2R9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubm90ZUlzRGVsZXRlZCA9IHsgZGVsZXRlOiBmYWxzZSB9O1xyXG4gICAgICAgIHRoaXMuYXJjdGljbGVIYXNFcnJvcmVkID0gZmFsc2U7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IGxpc3RTdG9yZS5kZWxMaXN0Tm90ZShkYXRhKSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuRGVsQnV0dG9uU3RvcmVFcnJvcmVkID0gdHJ1ZSlcclxuICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7Um91dGVyU3RvcmV9IGZyb20gJ21vYngtcmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IEJ1dHRvbkRldGFpbHNTdG9yZSBmcm9tICcuL2J1dHRvbkRldGFpbHNTdG9yZSc7XHJcbmltcG9ydCBDaGFuZ2VGb3JtU3RvcmUgZnJvbSAnLi9jaGFuZ2VGb3JtU3RvcmUnO1xyXG5pbXBvcnQgRGVsQnV0dG9uU3RvcmUgZnJvbSAnLi9kZWxCdXR0b25TdG9yZSc7XHJcbmltcG9ydCBGb3JtU3RvcmUgZnJvbSAnLi9Gb3JtU3RvcmUnO1xyXG5pbXBvcnQgTGlzdFN0b3JlIGZyb20gJy4vbGlzdFN0b3JlJztcclxuXHJcbmNvbnN0IHJvdXRpbmdTdG9yZSA9IG5ldyBSb3V0ZXJTdG9yZSgpO1xyXG5cclxuY29uc3Qgc3RvcmVzID0ge1xyXG4gIHJvdXRpbmc6IHJvdXRpbmdTdG9yZSxcclxuICBidXR0b25EZXRhaWxzU3RvcmU6IG5ldyBCdXR0b25EZXRhaWxzU3RvcmUoKSxcclxuICBjaGFuZ2VGb3JtU3RvcmU6IG5ldyBDaGFuZ2VGb3JtU3RvcmUoKSxcclxuICBkZWxCdXR0b25TdG9yZTogbmV3IERlbEJ1dHRvblN0b3JlKCksXHJcbiAgZm9ybVN0b3JlOiBuZXcgRm9ybVN0b3JlKCksXHJcbiAgbGlzdFN0b3JlOiBuZXcgTGlzdFN0b3JlKCksXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlcyIsImltcG9ydCB7IG9ic2VydmFibGUsIGFjdGlvbiwgYXV0b3J1biB9IGZyb20gJ21vYngnO1xyXG5pbXBvcnQgYXBpIGZyb20gJy4vYXBpJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RTdG9yZSB7XHJcbiAgXHJcbiAgQG9ic2VydmFibGUgbG9hZCA9IGZhbHNlO1xyXG5cclxuICBAb2JzZXJ2YWJsZSB0aXRsZSA9ICcnO1xyXG5cclxuICBAb2JzZXJ2YWJsZSBhcmN0aWNsZUlzTG9hZGluZyA9IGZhbHNlO1xyXG5cclxuICBAb2JzZXJ2YWJsZSBhcmN0aWNsZUhhc0Vycm9yZWQgPSBmYWxzZVxyXG5cclxuICBjb25zdHJ1Y3RvcihsaXN0LCBsaXN0X2NoZWNrKXtcclxuICAgIGxpc3Q/IHRoaXMubGlzdCA9IGxpc3QgOiB0aGlzLmxpc3QgPSBbXVxyXG4gICAgbGlzdF9jaGVjaz8gdGhpcy5saXN0X2NoZWNrID0gbGlzdF9jaGVjayA6IHRoaXMubGlzdF9jaGVjayA9IHt9XHJcbiAgfVxyXG5cclxuICBAb2JzZXJ2YWJsZSBDaGVja0hhc0Vycm9yZWQgPSBmYWxzZVxyXG5cclxuXHJcbiAgQGFjdGlvbi5ib3VuZFxyXG4gIGFkZExpc3ROZXdOb3RlKGRhdGEpIHtcclxuICAgIHRoaXMuYXJjdGljbGVJc0xvYWRpbmcgPSB0cnVlXHJcbiAgICB0aGlzLmxpc3QgPSBvYnNlcnZhYmxlLmFycmF5KHRoaXMubGlzdC5jb25jYXQoZGF0YVtkYXRhLmxlbmd0aC0xXSkpXHJcbiAgICB0aGlzLmFyY3RpY2xlSXNMb2FkaW5nID0gZmFsc2VcclxuICB9XHJcblxyXG4gIEBhY3Rpb24uYm91bmRcclxuICBkZWxMaXN0Tm90ZShkYXRhKSB7XHJcbiAgICB0aGlzLmxpc3QucmVwbGFjZSh0aGlzLmxpc3QuZmlsdGVyKChlbCkgPT4gTnVtYmVyKGVsLmlkKSAhPT0gTnVtYmVyKGRhdGEuaWQpKSlcclxuICB9XHJcblxyXG4gIEBhY3Rpb24uYm91bmRcclxuICBjaGFuZ2VOb3RlKGRhdGEpIHtcclxuICAgIHRoaXMubGlzdC5yZXBsYWNlKFxyXG4gICAgICB0aGlzLmxpc3QuZmlsdGVyKChlbCkgPT4ge1xyXG4gICAgICAgIGlmIChlbC5pZCA9PSBOdW1iZXIoZGF0YS5pZCkpIHtcclxuICAgICAgICBlbC50aXRsZSA9IGRhdGEudGl0bGVcclxuICAgICAgICByZXR1cm4gZWxcclxuICAgICAgICB9IGVsc2UgeyByZXR1cm4gZWwgfVxyXG4gICAgICB9KVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgQGFjdGlvbi5ib3VuZFxyXG4gIGdldE5vdGVCeUlkKGRhdGEpIHtcclxuICAgIHRoaXMuYXJjdGljbGVJc0xvYWRpbmcgPSB0cnVlXHJcblxyXG4gICAgY29uc3QgdXJsID0gYCR7YXBpLmdldE5vdGVCeUlkLmVuZFBvaW50fSR7ZGF0YS5pZH1gXHJcbiAgICByZXR1cm4gZmV0Y2godXJsKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dClcclxuICAgICAgfVxyXG4gICAgICB0aGlzLkNoZWNrSGFzRXJyb3JlZCA9IGZhbHNlXHJcbiAgXHJcbiAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKGl0ZW1zKSA9PiB7dGhpcy5saXN0X2NoZWNrID0gb2JzZXJ2YWJsZShpdGVtcyk7IHRoaXMuYXJjdGljbGVJc0xvYWRpbmcgPSBmYWxzZX0pXHJcbiAgICAuY2F0Y2goKCkgPT4ge3RoaXMuQ2hlY2tIYXNFcnJvcmVkID0gdHJ1ZTsgdGhpcy5hcmN0aWNsZUlzTG9hZGluZyA9IGZhbHNlfSlcclxuICB9XHJcblxyXG4gIEBhY3Rpb24uYm91bmRcclxuICByYW5kb21Ob3RlcyhkYXRhKSB7XHJcbiAgICAgIHRoaXMuYXJjdGljbGVJc0xvYWRpbmcgPSB0cnVlXHJcbiAgICAgIHRoaXMubG9hZCA9IHRydWU7XHJcblxyXG4gICAgICBjb25zdCB1cmwgPSBgJHthcGkuZ2V0Tm90ZXMuZW5kUG9pbnR9L3JhbmRvbS8ke2RhdGEubnVtfWBcclxuICBcclxuICAgICAgcmV0dXJuIGZldGNoKHVybCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFyY3RpY2xlSXNMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICB0aGlzLmFyY3RpY2xlSGFzRXJyb3JlZCA9IGZhbHNlXHJcbiAgXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigoaXRlbXMpPT4gdGhpcy5saXN0ID0gb2JzZXJ2YWJsZS5hcnJheSh0aGlzLmxpc3QuY29uY2F0KGl0ZW1zKSwgeyBkZWVwOiBmYWxzZSB9KSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuYXJjdGljbGVIYXNFcnJvcmVkID0gdHJ1ZSlcclxuICB9XHJcbn1cclxuIiwiXHJcbmltcG9ydCB7Um91dGVyU3RvcmV9IGZyb20gJ21vYngtcmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IEJ1dHRvbkRldGFpbHNTdG9yZSBmcm9tICcuL2J1dHRvbkRldGFpbHNTdG9yZSc7XHJcbmltcG9ydCBDaGFuZ2VGb3JtU3RvcmUgZnJvbSAnLi9jaGFuZ2VGb3JtU3RvcmUnO1xyXG5pbXBvcnQgRGVsQnV0dG9uU3RvcmUgZnJvbSAnLi9kZWxCdXR0b25TdG9yZSc7XHJcbmltcG9ydCBGb3JtU3RvcmUgZnJvbSAnLi9Gb3JtU3RvcmUnO1xyXG5pbXBvcnQgTGlzdFN0b3JlIGZyb20gJy4vbGlzdFN0b3JlJztcclxuaW1wb3J0IHsgb2JzZXJ2YWJsZSB9IGZyb20gJ21vYngnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvb3RTdG9yZSB7XHJcbiAgY29uc3RydWN0b3IoaW5pdGlhbFN0YXRlKSB7XHJcbiAgICB0aGlzLnJvdXRpbmcgPSBuZXcgUm91dGVyU3RvcmUoaW5pdGlhbFN0YXRlLnJvdXRpbmcpLFxyXG4gICAgdGhpcy5idXR0b25EZXRhaWxzU3RvcmUgPSBuZXcgQnV0dG9uRGV0YWlsc1N0b3JlKGluaXRpYWxTdGF0ZS5idXR0b25EZXRhaWxzU3RvcmUpLFxyXG4gICAgdGhpcy5jaGFuZ2VGb3JtU3RvcmUgPSBuZXcgQ2hhbmdlRm9ybVN0b3JlKGluaXRpYWxTdGF0ZS5jaGFuZ2VGb3JtU3RvcmUpLFxyXG4gICAgdGhpcy5kZWxCdXR0b25TdG9yZSA9IG5ldyBEZWxCdXR0b25TdG9yZShpbml0aWFsU3RhdGUuZGVsQnV0dG9uU3RvcmUpLFxyXG4gICAgdGhpcy5mb3JtU3RvcmUgPSBuZXcgRm9ybVN0b3JlKGluaXRpYWxTdGF0ZS5mb3JtU3RvcmUpLFxyXG4gICAgdGhpcy5saXN0U3RvcmUgPSBuZXcgTGlzdFN0b3JlKFxyXG4gICAgICAgIG9ic2VydmFibGUuYXJyYXkoaW5pdGlhbFN0YXRlLmxpc3RTdG9yZS5saXN0KSxcclxuICAgICAgICBvYnNlcnZhYmxlKGluaXRpYWxTdGF0ZS5saXN0U3RvcmUubGlzdF9jaGVjaylcclxuICAgICAgKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcidcclxuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAnbW9ieC1yZWFjdCc7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi4vc3JjL0FwcCc7XHJcbmltcG9ydCAnLi4vc3JjL2pzL2NvbXBvbmVudHMvbGFuZ3VhZ2VzL2kxOG4nO1xyXG5pbXBvcnQge3N5bmNIaXN0b3J5V2l0aFN0b3JlIH0gZnJvbSAnbW9ieC1yZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgUm9vdFN0b3JlIGZyb20gJy4uL3NyYy9qcy9zdG9yZS9yb290U3RvcmUnXHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gIGNvbnN0IHt3aHlEaWRZb3VVcGRhdGV9ID0gcmVxdWlyZSgnd2h5LWRpZC15b3UtdXBkYXRlJylcclxuICB3aHlEaWRZb3VVcGRhdGUoUmVhY3QpXHJcbn1cclxuXHJcbmNvbnN0IHJvb3RTdG9yZSA9IG5ldyBSb290U3RvcmUod2luZG93Ll9fSU5JVElBTF9TVEFURV9fKTtcclxuY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcclxuXHJcbmNvbnN0IGJyb3dzZXJIaXN0b3J5ID0gY3JlYXRlQnJvd3Nlckhpc3RvcnkoKTtcclxuY29uc3QgaGlzdG9yeSA9IHN5bmNIaXN0b3J5V2l0aFN0b3JlKGJyb3dzZXJIaXN0b3J5LCByb290U3RvcmUucm91dGluZyk7XHJcblxyXG5SZWFjdERPTS5oeWRyYXRlKFxyXG4gIDxQcm92aWRlciB7Li4ucm9vdFN0b3JlfT5cclxuICAgIDxSb3V0ZXIgaGlzdG9yeT17aGlzdG9yeX0+XHJcbiAgICAgIDxBcHAgLz5cclxuICAgIDwvUm91dGVyPlxyXG4gIDwvUHJvdmlkZXI+LFxyXG4gIGVsZW1lbnRcclxuKTsiXSwic291cmNlUm9vdCI6IiJ9