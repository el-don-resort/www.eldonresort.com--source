(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(7);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(49);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(51);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(21);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(52);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(20);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var _render = userRender || (0, _utils.createDefaultRender)(Loading, Err);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(asyncModule, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2.default)(asyncModule, options, props),
            requireSync = _req2.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = {
        error: null
      };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req3 = (0, _requireUniversalModule2.default)(asyncModule, options, this.props),
            addModule = _req3.addModule,
            requireSync = _req3.requireSync,
            requireAsync = _req3.requireAsync,
            asyncOnly = _req3.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({
            error: error
          });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({
            mod: mod
          }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2.default)(asyncModule, options, nextProps, this.props),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var mod = void 0;

            try {
              mod = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _mod = requireSync(nextProps, this.context);

            this.setState({
              mod: function mod() {
                return null;
              }
            }); // HMR /w Redux and HOCs can be finicky, so we

            setTimeout(function () {
              return _this2.setState({
                mod: _mod
              });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.mod && loadingTransition) {
          this.update({
            mod: null
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (mod) {
          var state = {
            mod: mod
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({
            error: error
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return _render(props, mod, isLoading, userError || error);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}

exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==='function'){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable;}));}ownKeys.forEach(function(key){_defineProperty(target,key,source[key]);});}return target;}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _templateObject3(){var data=_taggedTemplateLiteral(["\n  padding-bottom: 10px;\n  color: #3498db !important;\n"]);_templateObject3=function _templateObject3(){return data;};return data;}function _templateObject2(){var data=_taggedTemplateLiteral(["\n  display: block;\n  padding: 10px;\n  border-radius: 4px;\n  color: gray;\n"]);_templateObject2=function _templateObject2(){return data;};return data;}function _templateObject(){var data=_taggedTemplateLiteral(["\n  margin-bottom: 15px;\n  input, textarea {\n    display: block;\n    margin: 5px 0;\n    line-height: 34px;\n    width: 390px;\n    border: 1px solid silver;\n    padding-left: 5px;\n  }\n"]);_templateObject=function _templateObject(){return data;};return data;}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var Form=styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.form(_templateObject());var Button=styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button(_templateObject2());var InquirySubmitted=styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p(_templateObject3());var encode=function encode(data){return Object.keys(data).map(function(key){return"".concat(encodeURIComponent(key),"=").concat(encodeURIComponent(data[key]));}).join('&');};var _default=/*#__PURE__*/function(_Component){_inherits(_default,_Component);function _default(){var _getPrototypeOf2;var _this;_classCallCheck(this,_default);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_possibleConstructorReturn(this,(_getPrototypeOf2=_getPrototypeOf(_default)).call.apply(_getPrototypeOf2,[this].concat(args)));_defineProperty(_assertThisInitialized(_this),"state",{submitted:false});_defineProperty(_assertThisInitialized(_this),"submitForm",/*#__PURE__*/function(){var _ref=_asyncToGenerator(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e){return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:console.log('submitted');console.log(e);e.preventDefault();_context.prev=3;_context.next=6;return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/',encode(_objectSpread({'form-name':'inquiry'},e)),{headers:{'Content-Type':'application/x-www-form-urlencoded'}});case 6:_this.setState({submitted:true});_context.next=14;break;case 9:_context.prev=9;_context.t0=_context["catch"](3);console.log(_context.t0);window.alert('There was a problem submitting your form! Try again or reload the page :)');_this.setState({submitted:true});case 14:case"end":return _context.stop();}}},_callee,null,[[3,9]]);}));return function(_x){return _ref.apply(this,arguments);};}());return _this;}_createClass(_default,[{key:"render",value:function render(){if(this.state.submitted){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InquirySubmitted,null,"Your inquiry has been submitted. We'll be in contact with you as soon as possible");}else{return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Form,{name:"inquiry",method:"post","data-netlify":"true","data-netlify-honeypot":"bot-field",onSubmit:this.submitForm},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input",{type:"hidden",name:"form-name",value:"inquiry",disabled:true}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input",{type:"text",name:"name",placeholder:"Name",disabled:true}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input",{type:"tel",name:"tel",placeholder:"Contact number",disabled:true}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input",{type:"email",name:"email",placeholder:"Email Address",disabled:true}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea",{placeholder:"Other remarks",style:{minHeight:'150px'},disabled:true}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button,{type:"submit",disabled:true},"Submit"));}}}]);return _default;}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(7);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reloadRouteData = reloadRouteData;
exports.getRouteInfo = getRouteInfo;
exports.prefetchData = prefetchData;
exports.prefetchTemplate = prefetchTemplate;
exports.prefetch = prefetch;
exports.getCurrentRoutePath = getCurrentRoutePath;
exports.registerTemplateForPath = exports.registerTemplates = exports.templateUpdated = exports.templateErrorByPath = exports.templatesByPath = exports.templates = exports.registerPlugins = exports.plugins = exports.sharedDataByHash = exports.routeErrorByPath = exports.routeInfoByPath = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(10));

var _axios = _interopRequireDefault(__webpack_require__(18));

var _utils = __webpack_require__(13);

var _Visibility = _interopRequireDefault(__webpack_require__(27));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
} // RouteInfo / RouteData


var routeInfoByPath = {};
exports.routeInfoByPath = routeInfoByPath;
var routeErrorByPath = {};
exports.routeErrorByPath = routeErrorByPath;
var sharedDataByHash = {};
exports.sharedDataByHash = sharedDataByHash;
var inflightRouteInfo = {};
var inflightPropHashes = {};
var requestPool = (0, _utils.createPool)({
  concurrency: Number("5")
}); // Plugins

var plugins = [];
exports.plugins = plugins;

var registerPlugins = function registerPlugins(newPlugins) {
  plugins.splice.apply(plugins, [0, Infinity].concat(_toConsumableArray(newPlugins)));
}; // Templates


exports.registerPlugins = registerPlugins;
var templates = {};
exports.templates = templates;
var templatesByPath = {};
exports.templatesByPath = templatesByPath;
var templateErrorByPath = {};
exports.templateErrorByPath = templateErrorByPath;
var templateUpdated = {
  cb: function cb() {}
};
exports.templateUpdated = templateUpdated;

var registerTemplates = function registerTemplates(tmps, notFoundKey) {
  Object.keys(templates).forEach(function (key) {
    delete templates[key];
  });
  Object.keys(tmps).forEach(function (key) {
    templates[key] = tmps[key];
  });
  templatesByPath['404'] = templates[notFoundKey];
  templateUpdated.cb();
};

exports.registerTemplates = registerTemplates;

var registerTemplateForPath = function registerTemplateForPath(path, template) {
  path = (0, _utils.getRoutePath)(path);
  templatesByPath[path] = templates[template];
};

exports.registerTemplateForPath = registerTemplateForPath;
init(); // When in development, init a socket to listen for data changes
// When the data changes, we invalidate and reload all of the route data

function init() {
  // In development, we need to open a socket to listen for changes to data
  if (false) { var run, io; }

  if (true) startPreloader();
}

function startPreloader() {
  if (typeof document !== 'undefined') {
    var run = function run() {
      var els = [].slice.call(document.getElementsByTagName('a'));
      els.forEach(function (el) {
        var href = el.getAttribute('href');
        var shouldPrefetch = !(el.getAttribute('prefetch') === 'false');

        if (href && shouldPrefetch) {
          (0, _Visibility.default)(el, function () {
            prefetch(href);
          });
        }
      });
    };

    setInterval(run, Number("300"));
  }
}

function reloadRouteData() {
  // Delete all cached data
  ;
  [routeInfoByPath, sharedDataByHash, routeErrorByPath, inflightRouteInfo, inflightPropHashes].forEach(function (part) {
    Object.keys(part).forEach(function (key) {
      delete part[key];
    });
  }); // Force each RouteData component to reload

  global.reloadAll();
}

function getRouteInfo(_x) {
  return _getRouteInfo.apply(this, arguments);
}

function _getRouteInfo() {
  _getRouteInfo = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(path) {
    var _ref4,
        priority,
        routeInfo,
        _ref7,
        data,
        routeInfoRoot,
        cacheBuster,
        getPath,
        _ref8,
        _data,
        _ref9,
        _data2,
        _args2 = arguments;

    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _ref4 = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {}, priority = _ref4.priority;
            path = (0, _utils.getRoutePath)(path); // Check if we should fetch RouteData for this url et all.

            if ((0, _utils.isPrefetchableRoute)(path)) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return");

          case 4:
            if (!routeInfoByPath[path]) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", routeInfoByPath[path]);

          case 6:
            if (!routeErrorByPath[path]) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt("return");

          case 8:
            _context2.prev = 8;

            if (true) {
              _context2.next = 18;
              break;
            } // In dev, request from the webpack dev server


            if (!inflightRouteInfo[path]) {
              inflightRouteInfo[path] = _axios.default.get("/__react-static__/routeInfo/".concat(path === '/' ? '' : path));
            }

            _context2.next = 13;
            return inflightRouteInfo[path];

          case 13:
            _ref7 = _context2.sent;
            data = _ref7.data;
            routeInfo = data;
            _context2.next = 35;
            break;

          case 18:
            // In production, fetch the JSON file
            // Find the location of the routeInfo.json file
            routeInfoRoot = ( false ? undefined : "/") || false;
            cacheBuster = process.env.REACT_STATIC_CACHE_BUST ? "?".concat(process.env.REACT_STATIC_CACHE_BUST) : '';
            getPath = "".concat(routeInfoRoot).concat((0, _utils.pathJoin)(path, 'routeInfo.json')).concat(cacheBuster); // If this is a priority call bypass the queue

            if (!priority) {
              _context2.next = 29;
              break;
            }

            _context2.next = 24;
            return _axios.default.get(getPath);

          case 24:
            _ref8 = _context2.sent;
            _data = _ref8.data;
            routeInfo = _data;
            _context2.next = 35;
            break;

          case 29:
            // Otherwise, add it to the queue
            if (!inflightRouteInfo[path]) {
              inflightRouteInfo[path] = requestPool.add(function () {
                return _axios.default.get(getPath);
              });
            }

            _context2.next = 32;
            return inflightRouteInfo[path];

          case 32:
            _ref9 = _context2.sent;
            _data2 = _ref9.data;
            routeInfo = _data2;

          case 35:
            _context2.next = 43;
            break;

          case 37:
            _context2.prev = 37;
            _context2.t0 = _context2["catch"](8); // If there was an error, mark the path as errored

            routeErrorByPath[path] = true; // Unless we already fetched the 404 page,
            // try to load info for the 404 page

            if (!(!routeInfoByPath['404'] && !routeErrorByPath['404'])) {
              _context2.next = 42;
              break;
            }

            return _context2.abrupt("return", getRouteInfo('404', {
              priority: priority
            }));

          case 42:
            return _context2.abrupt("return");

          case 43:
            if (!priority) {
              delete inflightRouteInfo[path];
            }

            if (_typeof(routeInfo) !== 'object' || !routeInfo.path) {
              // routeInfo must have returned 200, but is not actually
              // a routeInfo object. Mark it as an error and move on silently
              routeErrorByPath[path] = true;
            } else {
              routeInfoByPath[path] = routeInfo;
            }

            return _context2.abrupt("return", routeInfoByPath[path]);

          case 46:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[8, 37]]);
  }));
  return _getRouteInfo.apply(this, arguments);
}

function prefetchData(_x2) {
  return _prefetchData.apply(this, arguments);
}

function _prefetchData() {
  _prefetchData = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee4(path) {
    var _ref5,
        priority,
        routeInfo,
        _args4 = arguments;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _ref5 = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {}, priority = _ref5.priority;
            _context4.next = 3;
            return getRouteInfo(path, {
              priority: priority
            });

          case 3:
            routeInfo = _context4.sent;

            if (routeInfo) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt("return");

          case 6:
            if (!routeInfo.sharedData) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt("return");

          case 8:
            // Request and build the props one by one
            routeInfo.sharedData = {}; // Request the template and loop over the routeInfo.sharedHashesByProp, requesting each prop

            _context4.next = 11;
            return Promise.all(Object.keys(routeInfo.sharedHashesByProp).map(
            /*#__PURE__*/
            function () {
              var _ref10 = _asyncToGenerator(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee3(key) {
                var hash, _ref11, prop, _ref12, _prop;

                return _regenerator.default.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        hash = routeInfo.sharedHashesByProp[key]; // Check the sharedDataByHash first

                        if (sharedDataByHash[hash]) {
                          _context3.next = 24;
                          break;
                        }

                        _context3.prev = 2;

                        if (!priority) {
                          _context3.next = 11;
                          break;
                        }

                        _context3.next = 6;
                        return _axios.default.get((0, _utils.pathJoin)("", "staticData/".concat(hash, ".json")));

                      case 6:
                        _ref11 = _context3.sent;
                        prop = _ref11.data;
                        sharedDataByHash[hash] = prop;
                        _context3.next = 17;
                        break;

                      case 11:
                        // Non priority, share inflight requests and use pool
                        if (!inflightPropHashes[hash]) {
                          inflightPropHashes[hash] = requestPool.add(function () {
                            return _axios.default.get((0, _utils.pathJoin)("", "staticData/".concat(hash, ".json")));
                          });
                        }

                        _context3.next = 14;
                        return inflightPropHashes[hash];

                      case 14:
                        _ref12 = _context3.sent;
                        _prop = _ref12.data; // Place it in the cache

                        sharedDataByHash[hash] = _prop;

                      case 17:
                        _context3.next = 23;
                        break;

                      case 19:
                        _context3.prev = 19;
                        _context3.t0 = _context3["catch"](2);
                        console.log('Error: There was an error retrieving a prop for this route! hashID:', hash);
                        console.error(_context3.t0);

                      case 23:
                        if (!priority) {
                          delete inflightPropHashes[hash];
                        }

                      case 24:
                        // Otherwise, just set it as the key
                        routeInfo.sharedData[key] = sharedDataByHash[hash];

                      case 25:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this, [[2, 19]]);
              }));

              return function (_x5) {
                return _ref10.apply(this, arguments);
              };
            }()));

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _prefetchData.apply(this, arguments);
}

function prefetchTemplate(_x3) {
  return _prefetchTemplate.apply(this, arguments);
}

function _prefetchTemplate() {
  _prefetchTemplate = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee5(path) {
    var _ref6,
        priority,
        routeInfo,
        Template,
        _args5 = arguments;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _ref6 = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : {}, priority = _ref6.priority; // Clean the path

            path = (0, _utils.getRoutePath)(path); // Get route info so we can check if path has any data

            _context5.next = 4;
            return getRouteInfo(path, {
              priority: priority
            });

          case 4:
            routeInfo = _context5.sent;

            if (routeInfo) {
              // Make sure to use the path as defined in the routeInfo object here.
              // This will make sure 404 route info returned from getRouteInfo is handled correctly.
              registerTemplateForPath(routeInfo.path, routeInfo.template);
            } // Preload the template if available


            Template = templatesByPath[path];

            if (Template) {
              _context5.next = 10;
              break;
            } // If no template was found, mark it with an error


            templateErrorByPath[path] = true;
            return _context5.abrupt("return");

          case 10:
            if (routeInfo) {
              _context5.next = 12;
              break;
            }

            return _context5.abrupt("return");

          case 12:
            if (!(routeInfo && !routeInfo.templateLoaded && Template.preload)) {
              _context5.next = 21;
              break;
            }

            if (!priority) {
              _context5.next = 18;
              break;
            }

            _context5.next = 16;
            return Template.preload();

          case 16:
            _context5.next = 20;
            break;

          case 18:
            _context5.next = 20;
            return requestPool.add(function () {
              return Template.preload();
            });

          case 20:
            routeInfo.templateLoaded = true;

          case 21:
            return _context5.abrupt("return", Template);

          case 22:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));
  return _prefetchTemplate.apply(this, arguments);
}

function prefetch(_x4) {
  return _prefetch.apply(this, arguments);
}

function _prefetch() {
  _prefetch = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee6(path) {
    var options,
        type,
        _args6 = arguments;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            options = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : {}; // Clean the path

            path = (0, _utils.getRoutePath)(path);
            type = options.type; // If it's priority, we stop the queue temporarily

            if (options.priority) {
              requestPool.stop();
            }

            if (!(type === 'data')) {
              _context6.next = 9;
              break;
            }

            _context6.next = 7;
            return prefetchData(path, options);

          case 7:
            _context6.next = 16;
            break;

          case 9:
            if (!(type === 'template')) {
              _context6.next = 14;
              break;
            }

            _context6.next = 12;
            return prefetchTemplate(path, options);

          case 12:
            _context6.next = 16;
            break;

          case 14:
            _context6.next = 16;
            return Promise.all([prefetchData(path, options), prefetchTemplate(path, options)]);

          case 16:
            // If it was priority, start the queue again
            if (options.priority) {
              requestPool.start();
            }

          case 17:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));
  return _prefetch.apply(this, arguments);
}

function getCurrentRoutePath() {
  // If in the browser, use the window
  if (typeof document !== 'undefined') {
    return (0, _utils.getRoutePath)(decodeURIComponent(window.location.href));
  }
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(routeInfoByPath, "routeInfoByPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(routeErrorByPath, "routeErrorByPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(sharedDataByHash, "sharedDataByHash", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(inflightRouteInfo, "inflightRouteInfo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(inflightPropHashes, "inflightPropHashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(requestPool, "requestPool", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(plugins, "plugins", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(registerPlugins, "registerPlugins", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(templates, "templates", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(templatesByPath, "templatesByPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(templateErrorByPath, "templateErrorByPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(templateUpdated, "templateUpdated", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(registerTemplates, "registerTemplates", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(registerTemplateForPath, "registerTemplateForPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(init, "init", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(startPreloader, "startPreloader", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(reloadRouteData, "reloadRouteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(getRouteInfo, "getRouteInfo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(prefetchData, "prefetchData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(prefetchTemplate, "prefetchTemplate", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(prefetch, "prefetch", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(getCurrentRoutePath, "getCurrentRoutePath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Loading: true,
  withLoading: true,
  onLoading: true,
  removal: true,
  getRoutePath: true,
  getBasePath: true,
  Head: true,
  scrollTo: true,
  RouteData: true,
  withRouteData: true,
  SiteData: true,
  withSiteData: true,
  Prefetch: true,
  Routes: true,
  Root: true
};
Object.defineProperty(exports, "removal", {
  enumerable: true,
  get: function get() {
    return _utils.removal;
  }
});
Object.defineProperty(exports, "getRoutePath", {
  enumerable: true,
  get: function get() {
    return _utils.getRoutePath;
  }
});
Object.defineProperty(exports, "getBasePath", {
  enumerable: true,
  get: function get() {
    return _utils.getBasePath;
  }
});
Object.defineProperty(exports, "Head", {
  enumerable: true,
  get: function get() {
    return _reactHelmet.Helmet;
  }
});
Object.defineProperty(exports, "scrollTo", {
  enumerable: true,
  get: function get() {
    return _scrollTo.default;
  }
});
Object.defineProperty(exports, "RouteData", {
  enumerable: true,
  get: function get() {
    return _RouteData.default;
  }
});
Object.defineProperty(exports, "withRouteData", {
  enumerable: true,
  get: function get() {
    return _RouteData.withRouteData;
  }
});
Object.defineProperty(exports, "SiteData", {
  enumerable: true,
  get: function get() {
    return _SiteData.default;
  }
});
Object.defineProperty(exports, "withSiteData", {
  enumerable: true,
  get: function get() {
    return _SiteData.withSiteData;
  }
});
Object.defineProperty(exports, "Prefetch", {
  enumerable: true,
  get: function get() {
    return _Prefetch.default;
  }
});
Object.defineProperty(exports, "Routes", {
  enumerable: true,
  get: function get() {
    return _Routes.default;
  }
});
Object.defineProperty(exports, "Root", {
  enumerable: true,
  get: function get() {
    return _Root.default;
  }
});
exports.onLoading = exports.withLoading = exports.Loading = void 0;

var _utils = __webpack_require__(13);

var _reactHelmet = __webpack_require__(54);

var _browser = __webpack_require__(11);

Object.keys(_browser).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _browser[key];
    }
  });
});

var _scrollTo = _interopRequireDefault(__webpack_require__(30));

var _RouteData = _interopRequireWildcard(__webpack_require__(61));

var _SiteData = _interopRequireWildcard(__webpack_require__(62));

var _Prefetch = _interopRequireDefault(__webpack_require__(63));

var _Routes = _interopRequireDefault(__webpack_require__(32));

var _Root = _interopRequireDefault(__webpack_require__(64));

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})(); // Migration Hints


var Loading = function Loading() {
  (0, _utils.removal)('Loading');
};

exports.Loading = Loading;

var withLoading = function withLoading() {
  (0, _utils.removal)('withLoading');
};

exports.withLoading = withLoading;

var onLoading = function onLoading() {
  (0, _utils.removal)('onLoading');
};

exports.onLoading = onLoading;
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Loading, "Loading", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/index.js");
  reactHotLoader.register(withLoading, "withLoading", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/index.js");
  reactHotLoader.register(onLoading, "onLoading", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(7);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pathJoin = pathJoin;
exports.getRoutePath = getRoutePath;
exports.unwrapArray = unwrapArray;
exports.isObject = isObject;
exports.deprecate = deprecate;
exports.removal = removal;
exports.isAbsoluteUrl = isAbsoluteUrl;
exports.makePathAbsolute = makePathAbsolute;
exports.makeHookReducer = makeHookReducer;
exports.makeHookMapper = makeHookMapper;
exports.isSSR = isSSR;
exports.getBasePath = getBasePath;
exports.isPrefetchableRoute = isPrefetchableRoute;
Object.defineProperty(exports, "poolAll", {
  enumerable: true,
  get: function get() {
    return _swimmer.poolAll;
  }
});
Object.defineProperty(exports, "createPool", {
  enumerable: true,
  get: function get() {
    return _swimmer.createPool;
  }
});
exports.cleanSlashes = exports.trimDoubleSlashes = exports.trimTrailingSlashes = exports.trimLeadingSlashes = exports.cutPathToRoot = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(10));

var _swimmer = __webpack_require__(46);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var REGEX_TO_CUT_TO_ROOT = /(\..+?)\/.*/g;
var REGEX_TO_REMOVE_LEADING_SLASH = /^\/{1,}/g;
var REGEX_TO_REMOVE_TRAILING_SLASH = /\/{1,}$/g;
var REGEX_TO_REMOVE_DOUBLE_SLASH = /\/{2,}/g;

var cutPathToRoot = function cutPathToRoot() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return string.replace(REGEX_TO_CUT_TO_ROOT, '$1');
};

exports.cutPathToRoot = cutPathToRoot;

var trimLeadingSlashes = function trimLeadingSlashes() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return string.replace(REGEX_TO_REMOVE_LEADING_SLASH, '');
};

exports.trimLeadingSlashes = trimLeadingSlashes;

var trimTrailingSlashes = function trimTrailingSlashes() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return string.replace(REGEX_TO_REMOVE_TRAILING_SLASH, '');
};

exports.trimTrailingSlashes = trimTrailingSlashes;

var trimDoubleSlashes = function trimDoubleSlashes() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  if (isAbsoluteUrl(string)) {
    var _string$split = string.split('://'),
        _string$split2 = _slicedToArray(_string$split, 2),
        _string$split2$ = _string$split2[0],
        scheme = _string$split2$ === void 0 ? '' : _string$split2$,
        _string$split2$2 = _string$split2[1],
        path = _string$split2$2 === void 0 ? '' : _string$split2$2;

    return [scheme, path.replace(REGEX_TO_REMOVE_DOUBLE_SLASH, '/')].join('://');
  }

  return string.replace(REGEX_TO_REMOVE_DOUBLE_SLASH, '/');
};

exports.trimDoubleSlashes = trimDoubleSlashes;

var cleanSlashes = function cleanSlashes(string) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!string) return '';
  var _options$leading = options.leading,
      leading = _options$leading === void 0 ? true : _options$leading,
      _options$trailing = options.trailing,
      trailing = _options$trailing === void 0 ? true : _options$trailing,
      _options$double = options.double,
      double = _options$double === void 0 ? true : _options$double;
  var cleanedString = string;

  if (leading) {
    cleanedString = trimLeadingSlashes(cleanedString);
  }

  if (trailing) {
    cleanedString = trimTrailingSlashes(cleanedString);
  }

  if (double) {
    cleanedString = trimDoubleSlashes(cleanedString);
  }

  return cleanedString;
};

exports.cleanSlashes = cleanSlashes;

function pathJoin() {
  for (var _len = arguments.length, paths = new Array(_len), _key = 0; _key < _len; _key++) {
    paths[_key] = arguments[_key];
  }

  var newPath = paths.map(cleanSlashes).join('/');

  if (!newPath || newPath === '/') {
    return '/';
  }

  newPath = cleanSlashes(newPath);

  if (newPath.includes('?')) {
    newPath = newPath.substring(0, newPath.indexOf('?'));
  }

  return newPath;
} // This function is for extracting a routePath from a path or string
// RoutePaths do not have query params, basePaths, and should
// resemble the same string as passed in the static.config.js routes


function getRoutePath(routePath) {
  // Detect falsey paths and the root path
  if (!routePath || routePath === '/') {
    return '/';
  } // Remove origin, hashes, and query params


  if (typeof document !== 'undefined') {
    routePath = routePath.replace(window.location.origin, '');
    routePath = routePath.replace(/#.*/, '');
    routePath = routePath.replace(/\?.*/, '');
  } // Be sure to remove the base path


  if (false) {}

  routePath = routePath || '/';
  return pathJoin(routePath);
}

function unwrapArray(arg, defaultValue) {
  arg = Array.isArray(arg) ? arg[0] : arg;

  if (!arg && defaultValue) {
    return defaultValue;
  }

  return arg;
}

function isObject(a) {
  return !Array.isArray(a) && _typeof(a) === 'object' && a !== null;
}

function deprecate(from, to) {
  console.warn("React-Static deprecation notice: ".concat(from, " will be deprecated in favor of ").concat(to, " in the next major release."));
}

function removal(from) {
  console.warn("React-Static removal notice: ".concat(from, " is no longer supported in this version of React-Static. Please refer to the CHANGELOG for details."));
}

function isAbsoluteUrl(url) {
  if (typeof url !== 'string') {
    return false;
  }

  return /^[a-z][a-z0-9+.-]*:/.test(url);
}

function makePathAbsolute(path) {
  if (typeof path !== 'string') {
    return '/';
  }

  if (isAbsoluteUrl(path)) {
    return path;
  }

  return "/".concat(trimLeadingSlashes(path));
}

function makeHookReducer() {
  var plugins = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var hook = arguments.length > 1 ? arguments[1] : undefined;

  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      sync = _ref.sync;

  var hooks = flattenHooks(plugins, hook); // Returns a runner that takes a value (and opts) and
  // reduces the value through each hook, returning the
  // final value
  // compare is a function which is used to compare
  // the prev and next value and decide which to use.
  // By default, if undefined is returned from a reducer, the prev value
  // is retained

  if (sync) {
    return function (value, opts) {
      return hooks.reduce(function (prev, hook) {
        var next = hook(prev, opts);
        return typeof next !== 'undefined' ? next : prev;
      }, value);
    };
  }

  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(value, opts) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return hooks.reduce(
                /*#__PURE__*/
                function () {
                  var _ref3 = _asyncToGenerator(
                  /*#__PURE__*/
                  _regenerator.default.mark(function _callee(prevPromise, hook) {
                    var prev, next;
                    return _regenerator.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return prevPromise;

                          case 2:
                            prev = _context.sent;
                            _context.next = 5;
                            return hook(prev, opts);

                          case 5:
                            next = _context.sent;
                            return _context.abrupt("return", typeof next !== 'undefined' ? next : prev);

                          case 7:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, this);
                  }));

                  return function (_x3, _x4) {
                    return _ref3.apply(this, arguments);
                  };
                }(), Promise.resolve(value));

              case 2:
                value = _context2.sent;
                return _context2.abrupt("return", value);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
}

function makeHookMapper() {
  var plugins = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var hook = arguments.length > 1 ? arguments[1] : undefined;
  var hooks = flattenHooks(plugins, hook); // Returns a runner that takes options and returns
  // a flat array of values mapped from each hook

  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(opts) {
        var vals;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                vals = [];
                _context4.next = 3;
                return hooks.reduce(
                /*#__PURE__*/
                function () {
                  var _ref5 = _asyncToGenerator(
                  /*#__PURE__*/
                  _regenerator.default.mark(function _callee3(prevPromise, hook) {
                    var val;
                    return _regenerator.default.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return prevPromise;

                          case 2:
                            _context3.next = 4;
                            return hook(opts);

                          case 4:
                            val = _context3.sent;
                            vals.push(val);

                          case 6:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3, this);
                  }));

                  return function (_x6, _x7) {
                    return _ref5.apply(this, arguments);
                  };
                }(), Promise.resolve());

              case 3:
                return _context4.abrupt("return", vals.filter(function (d) {
                  return typeof d !== 'undefined';
                }));

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x5) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
}

function flattenHooks(plugins, hook) {
  // The flat hooks
  var hooks = []; // Adds a plugin hook to the hook list

  var addToHooks = function addToHooks(plugin) {
    // Add the hook
    hooks.push(plugin.hooks[hook]); // Recurse into sub plugins if needs be

    if (plugin.plugins) {
      plugin.plugins.forEach(addToHooks);
    }
  }; // Start with the config plugins


  plugins.forEach(addToHooks); // Filter out falsey entries

  return hooks.filter(Boolean);
}

function isSSR() {
  return typeof document === 'undefined';
}

function getBasePath() {
  return  false ? undefined : "";
}

function isPrefetchableRoute(path) {
  // when rendering static pages we dont need this et all
  if (isSSR()) {
    return false;
  } // script links
  // eslint-disable-next-line


  if (path.indexOf('javascript:') === 0) {
    return false;
  }

  var self = document.location;
  var link;

  try {
    link = new URL(path);
  } catch (e) {
    // if a path is not parsable by URL its a local relative path
    return true;
  } // if the hostname/port/proto doesnt match its not a route link


  if (self.hostname !== link.hostname || self.port !== link.port || self.protocol !== link.protocol) {
    return false;
  } // deny all files with extension other than .html


  if (link.pathname.includes('.') && !link.pathname.includes('.html')) {
    return false;
  }

  return true;
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(REGEX_TO_CUT_TO_ROOT, "REGEX_TO_CUT_TO_ROOT", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(REGEX_TO_REMOVE_LEADING_SLASH, "REGEX_TO_REMOVE_LEADING_SLASH", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(REGEX_TO_REMOVE_TRAILING_SLASH, "REGEX_TO_REMOVE_TRAILING_SLASH", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(REGEX_TO_REMOVE_DOUBLE_SLASH, "REGEX_TO_REMOVE_DOUBLE_SLASH", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(cutPathToRoot, "cutPathToRoot", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(trimLeadingSlashes, "trimLeadingSlashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(trimTrailingSlashes, "trimTrailingSlashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(trimDoubleSlashes, "trimDoubleSlashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(cleanSlashes, "cleanSlashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(pathJoin, "pathJoin", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(getRoutePath, "getRoutePath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(unwrapArray, "unwrapArray", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(isObject, "isObject", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(deprecate, "deprecate", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(removal, "removal", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(isAbsoluteUrl, "isAbsoluteUrl", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(makePathAbsolute, "makePathAbsolute", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(makeHookReducer, "makeHookReducer", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(makeHookMapper, "makeHookMapper", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(flattenHooks, "flattenHooks", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(isSSR, "isSSR", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(getBasePath, "getBasePath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(isPrefetchableRoute, "isPrefetchableRoute", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject(){var data=_taggedTemplateLiteral(["\n  color: rgba(132, 129, 122,1.0);\n  #banner {\n    max-width: 960px;\n    margin: 15px auto 0 auto;\n  }\n\n  #banner img {\n    width: 100%;\n    max-width: 960px;\n    border-radius: 2px;\n    height: auto;\n  }\n\n  #package-content {\n    color: rgba(132, 129, 122,1.0);\n    max-width: 960px;\n    margin: auto;\n    font-size: 16px;\n    line-height: 24px;\n  }\n\n  h1 {\n    color: rgba(204, 174, 98,1.0);\n    font-family: 'Tangerine', serif;\n    padding: 20px;\n    font-size: 4rem;\n    text-align: center;\n    margin: auto auto;\n  }\n\n  #package-lead {\n    font-size: 20px;\n    line-height: 34px;\n    padding: 0 10px 20px 10px;\n    text-align: center; \n  }\n\n  h2 {\n    color: rgba(204, 174, 98,1.0);\n  }\n\n  .section {\n    border-top: 1px dashed rgba(204, 174, 98,.50);\n    margin: 0 auto;\n    padding: 15px;\n  }\n\n  .section ul {\n    margin: 0 auto;\n    padding: 0 0 0 25px;\n  }\n\n  .section h2 {\n    font-size: 22px;\n    margin: 0;\n  }\n\n  #package-price-section p {\n    margin: 0;\n  }\n\n  #package-price,\n  .package-price {\n    font-size: 32px;\n    margin: 0 0 5px 0;  \n    line-height: 32px;\n  }\n\n  #inquiries-reservation-section p {\n    color: gray;\n    margin: 0;\n  }\n\n  li {\n    line-height: 28px;\n  }\n\n  ul, ol {\n    margin: 0 auto;\n    padding: 25px;  \n  }\n\n  .gold {\n    color: rgba(204, 174, 98,1.0); \n  }\n\n  .li-no-bullet {\n    list-style-type: none;\n    padding: 0;\n    margin: 0;\n  }\n\n  .package-food-section {\n    padding: 15px;\n    border-bottom: 1px dashed silver;\n  }\n\n  .food-items-section p {\n    margin: 0;\n  }\n\n  /* Small devices (landscape phones, 576px and up) */\n  @media (min-width: 576px) { \n\n\n  }\n  \n  /* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */\n  @media (min-width: 768px) {  \n    #package-price-section,\n    #package-inclusions-section,\n    #inquiries-reservation-section,\n    .package-food-section {\n      display: grid;\n      grid-template-columns: 40% 60%;\n    }\n\n    .section h2 {\n      padding: 0%;\n    }\n  }\n  \n  /* Large devices (desktops, 992px and up) */\n  @media (min-width: 992px) { \n\n  }\n  \n  /* Extra large devices (large desktops, 1200px and up) */\n  @media (min-width: 1200px) {\n \n  }  \n"]);_templateObject=function _templateObject(){return data;};return data;}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}/* harmony default export */ __webpack_exports__["a"] = (styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject()));

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(20);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(50)("" + id);
  }

  return __webpack_require__('' + id);
};

exports.default = requireById;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStaticInfo = useStaticInfo;
exports.withStaticInfo = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
} // eslint-disable-next-line


var context = _react.default.createContext({});

if (typeof document !== 'undefined') {
  context = _react.default.createContext(window.__routeInfo);
}

var _default = context;
var _default2 = _default;
exports.default = _default2;

var StaticInfo = function StaticInfo(_ref) {
  var children = _ref.children;
  return _react.default.createElement(context.Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, children);
};

var withStaticInfo = function withStaticInfo(Comp) {
  return function (props) {
    return _react.default.createElement(StaticInfo, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, function (staticInfo) {
      return _react.default.createElement(Comp, _extends({}, props, {
        staticInfo: staticInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }));
    });
  };
};

exports.withStaticInfo = withStaticInfo;

function useStaticInfo() {
  return _react.default.useContext(context);
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(context, "context", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js");
  reactHotLoader.register(StaticInfo, "StaticInfo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js");
  reactHotLoader.register(withStaticInfo, "withStaticInfo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js");
  reactHotLoader.register(useStaticInfo, "useStaticInfo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject(){var data=_taggedTemplateLiteral(["\n  color: rgba(132, 129, 122,1.0);\n  #room-banner {\n    max-width: 960px;\n    margin: 15px auto 0 auto;\n  }\n\n  #room-banner img {\n    width: 100%;\n    max-width: 960px;\n    border-radius: 2px;\n    height: auto;\n  }\n\n  #room-content {\n    color: rgba(132, 129, 122,1.0);\n    max-width: 960px;\n    margin: auto;\n    font-size: 16px;\n    line-height: 24px;\n  }\n\n  h1 {\n    color: rgba(204, 174, 98,1.0);\n    font-family: 'Tangerine', serif;\n    padding: 20px;\n    font-size: 4rem;\n    text-align: center;\n    margin: auto auto;\n  }\n\n  h2 {\n    color: rgba(204, 174, 98,1.0);\n  }\n\n  .room-section {\n    border-top: 1px dashed rgba(204, 174, 98,.50);\n    margin: 0 auto;\n    padding: 15px;\n  }\n\n  .room-section ul {\n    margin: 0 auto;\n    padding: 0 0 0 25px;\n  } \n\n  #room-lead {\n    font-size: 20px;\n    line-height: 34px;\n    padding: 0 10px 20px 10px;\n    text-align: center;\n  }\n\n  #room-items,\n  #check-in-policies {\n    padding: 0;\n    margin: 0;\n    list-style-type: none;\n  }\n\n  #room-price {\n    font-size: 32px;\n    color: rgba(204, 174, 98,1.0);\n    margin: 0;\n  }\n\n  .room-section h2 {\n    font-size: 22px;\n    margin: 0;\n  }\n\n  #inquiries-reservation-section p {\n    color: gray;\n    margin: 0;\n  }\n\n  li {\n    line-height: 28px;\n  }\n\n  ul {\n    margin: 0 auto;\n    padding: 25px;  \n    list-style-type: circle;\n  }\n\n  .gold {\n    color: rgba(204, 174, 98,1.0); \n  }\n\n  /* Small devices (landscape phones, 576px and up) */\n  @media (min-width: 576px) { \n  }\n  \n  /* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */\n  @media (min-width: 768px) {  \n    #rooms, \n    #room-price-section,\n    #checkin-policy-section,\n    #inquiries-reservation-section {\n      display: grid;\n      grid-template-columns: 40% 60%;\n    }\n\n    .room-section h2 {\n      padding: 0;\n    }\n\n\n  }\n  \n  /* Large devices (desktops, 992px and up) */\n  @media (min-width: 992px) { \n  }\n  \n  /* Extra large devices (large desktops, 1200px and up) */\n  @media (min-width: 1200px) {\n\n  }  \n"]);_templateObject=function _templateObject(){return data;};return data;}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}/* harmony default export */ __webpack_exports__["a"] = (styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject()));

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(7);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(15);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2.default)(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Spinner;

var _react = _interopRequireDefault(__webpack_require__(0));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Spinner.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function Spinner() {
  return _react.default.createElement("div", {
    className: "react-static-loading",
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'center',
      padding: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, _react.default.createElement("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "\n        @keyframes react-static-loader {\n          0% {\n            transform: rotate(0deg)\n          }\n          100% {\n            transform: rotate(360deg)\n          }\n        }\n      "), _react.default.createElement("svg", {
    style: {
      width: '50px',
      height: '50px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, _react.default.createElement("circle", {
    style: {
      transformOrigin: '50% 50% 0px',
      animation: 'react-static-loader 1s infinite',
      r: 20,
      stroke: 'rgba(0,0,0,0.4)',
      strokeWidth: 4,
      cx: 25,
      cy: 25,
      strokeDasharray: 10.4,
      strokeLinecap: 'round',
      fill: 'transparent'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })));
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Spinner, "Spinner", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Spinner.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-responsive");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/logo.4e81bca5.png";

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Imports
// Plugins
var plugins=[{location:"/Users/t0mclaudio/Projects/ElDonResort/site",plugins:[],hooks:{}}];// Export em!
/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onVisible;

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

if (typeof document !== 'undefined') {
  // Polyfill that shiz!
  __webpack_require__(47); // Do manual polling for intersections every second. This isn't very fast
  // but should handle most edge cases for now


  IntersectionObserver.POLL_INTERVAL = 1000;
}

var list = new Map();

function onVisible(element, callback) {
  if (list.get(element)) {
    return;
  }

  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      // Edge doesn't support isIntersecting. intersectionRatio > 0 works as a fallback
      if (element === entry.target && (entry.isIntersecting || entry.intersectionRatio > 0)) {
        io.unobserve(element);
        io.disconnect();
        callback();
      }
    });
  });
  io.observe(element);
  list.set(element, true);
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(list, "list", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Visibility.js");
  reactHotLoader.register(onVisible, "onVisible", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Visibility.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_t0mclaudio_Projects_ElDonResort_site_node_modules_react_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _Users_t0mclaudio_Projects_ElDonResort_site_node_modules_react_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_t0mclaudio_Projects_ElDonResort_site_node_modules_react_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2__);
Object(_Users_t0mclaudio_Projects_ElDonResort_site_node_modules_react_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2__["setHasBabelPlugin"])();var universalOptions={loading:function loading(){return null;},error:function error(props){console.error(props.error);return React.createElement("div",null,"An error occurred loading this page's template. More information is available in the console.");}};var t_0=_Users_t0mclaudio_Projects_ElDonResort_site_node_modules_react_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/pages/404.js",load:function load(){return Promise.all([Promise.resolve(/* import() | src-pages-404 */).then(__webpack_require__.bind(null, 34))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/pages/404.js');},resolve:function resolve(){return /*require.resolve*/(34);},chunkName:function chunkName(){return"src-pages-404";}}),universalOptions);var t_1=_Users_t0mclaudio_Projects_ElDonResort_site_node_modules_react_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/pages/casa-del-mar.js",load:function load(){return Promise.all([Promise.resolve(/* import() | src-pages-casa-del-mar */).then(__webpack_require__.bind(null, 35))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/pages/casa-del-mar.js');},resolve:function resolve(){return /*require.resolve*/(35);},chunkName:function chunkName(){return"src-pages-casa-del-mar";}}),universalOptions);var t_2=_Users_t0mclaudio_Projects_ElDonResort_site_node_modules_react_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/pages/casa-la-jardin.js",load:function load(){return Promise.all([Promise.resolve(/* import() | src-pages-casa-la-jardin */).then(__webpack_require__.bind(null, 36))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/pages/casa-la-jardin.js');},resolve:function resolve(){return /*require.resolve*/(36);},chunkName:function chunkName(){return"src-pages-casa-la-jardin";}}),universalOptions);var t_3=_Users_t0mclaudio_Projects_ElDonResort_site_node_modules_react_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/pages/day-tour-package.js",load:function load(){return Promise.all([Promise.resolve(/* import() | src-pages-day-tour-package */).then(__webpack_require__.bind(null, 37))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/pages/day-tour-package.js');},resolve:function resolve(){return /*require.resolve*/(37);},chunkName:function chunkName(){return"src-pages-day-tour-package";}}),universalOptions);var t_4=_Users_t0mclaudio_Projects_ElDonResort_site_node_modules_react_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/pages/index.js",load:function load(){return Promise.all([Promise.resolve(/* import() | src-pages-index */).then(__webpack_require__.bind(null, 38))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/pages/index.js');},resolve:function resolve(){return /*require.resolve*/(38);},chunkName:function chunkName(){return"src-pages-index";}}),universalOptions);var t_5=_Users_t0mclaudio_Projects_ElDonResort_site_node_modules_react_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/pages/inquiries.js",load:function load(){return Promise.all([Promise.resolve(/* import() | src-pages-inquiries */).then(__webpack_require__.bind(null, 39))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/pages/inquiries.js');},resolve:function resolve(){return /*require.resolve*/(39);},chunkName:function chunkName(){return"src-pages-inquiries";}}),universalOptions);var t_6=_Users_t0mclaudio_Projects_ElDonResort_site_node_modules_react_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/pages/meetings-and-events.js",load:function load(){return Promise.all([Promise.resolve(/* import() | src-pages-meetings-and-events */).then(__webpack_require__.bind(null, 40))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/pages/meetings-and-events.js');},resolve:function resolve(){return /*require.resolve*/(40);},chunkName:function chunkName(){return"src-pages-meetings-and-events";}}),universalOptions);var t_7=_Users_t0mclaudio_Projects_ElDonResort_site_node_modules_react_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/pages/pictorial-package.js",load:function load(){return Promise.all([Promise.resolve(/* import() | src-pages-pictorial-package */).then(__webpack_require__.bind(null, 41))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/pages/pictorial-package.js');},resolve:function resolve(){return /*require.resolve*/(41);},chunkName:function chunkName(){return"src-pages-pictorial-package";}}),universalOptions);var t_8=_Users_t0mclaudio_Projects_ElDonResort_site_node_modules_react_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/containers/Post",load:function load(){return Promise.all([Promise.resolve(/* import() | src-containers-Post */).then(__webpack_require__.bind(null, 42))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/containers/Post');},resolve:function resolve(){return /*require.resolve*/(42);},chunkName:function chunkName(){return"src-containers-Post";}}),universalOptions);// Template Map
/* harmony default export */ __webpack_exports__["default"] = ({'../src/pages/404.js':t_0,'../src/pages/casa-del-mar.js':t_1,'../src/pages/casa-la-jardin.js':t_2,'../src/pages/day-tour-package.js':t_3,'../src/pages/index.js':t_4,'../src/pages/inquiries.js':t_5,'../src/pages/meetings-and-events.js':t_6,'../src/pages/pictorial-package.js':t_7,'../src/containers/Post':t_8});var notFoundTemplate="../src/pages/404.js";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 29 */
/***/ (function(module, exports) {

exports.__esModule = true;
var ATTRIBUTE_NAMES = exports.ATTRIBUTE_NAMES = {
  BODY: "bodyAttributes",
  HTML: "htmlAttributes",
  TITLE: "titleAttributes"
};
var TAG_NAMES = exports.TAG_NAMES = {
  BASE: "base",
  BODY: "body",
  HEAD: "head",
  HTML: "html",
  LINK: "link",
  META: "meta",
  NOSCRIPT: "noscript",
  SCRIPT: "script",
  STYLE: "style",
  TITLE: "title"
};
var VALID_TAG_NAMES = exports.VALID_TAG_NAMES = Object.keys(TAG_NAMES).map(function (name) {
  return TAG_NAMES[name];
});
var TAG_PROPERTIES = exports.TAG_PROPERTIES = {
  CHARSET: "charset",
  CSS_TEXT: "cssText",
  HREF: "href",
  HTTPEQUIV: "http-equiv",
  INNER_HTML: "innerHTML",
  ITEM_PROP: "itemprop",
  NAME: "name",
  PROPERTY: "property",
  REL: "rel",
  SRC: "src"
};
var REACT_TAG_MAP = exports.REACT_TAG_MAP = {
  accesskey: "accessKey",
  charset: "charSet",
  class: "className",
  contenteditable: "contentEditable",
  contextmenu: "contextMenu",
  "http-equiv": "httpEquiv",
  itemprop: "itemProp",
  tabindex: "tabIndex"
};
var HELMET_PROPS = exports.HELMET_PROPS = {
  DEFAULT_TITLE: "defaultTitle",
  DEFER: "defer",
  ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
  ON_CHANGE_CLIENT_STATE: "onChangeClientState",
  TITLE_TEMPLATE: "titleTemplate"
};
var HTML_TAG_MAP = exports.HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function (obj, key) {
  obj[REACT_TAG_MAP[key]] = key;
  return obj;
}, {});
var SELF_CLOSING_TAGS = exports.SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];
var HELMET_ATTRIBUTE = exports.HELMET_ATTRIBUTE = "data-react-helmet";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scrollTo;

var _raf = _interopRequireDefault(__webpack_require__(31));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
} //


var ease = function ease(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};

var defaultOptions = {
  duration: 800,
  offset: 0,
  context: typeof document !== 'undefined' && window
};

var getTop = function getTop(element, offset, contextScrollHeight, contextVisibleHeight) {
  return Math.min(element.getBoundingClientRect().top + window.pageYOffset + offset, contextScrollHeight - contextVisibleHeight);
};

var getPosition = function getPosition(start, end, elapsed, duration, easeFn) {
  if (elapsed > duration) return end;
  return start + (end - start) * easeFn(elapsed / duration);
};

function scrollTo(element, options) {
  var _defaultOptions$optio = _objectSpread({}, defaultOptions, options),
      duration = _defaultOptions$optio.duration,
      offset = _defaultOptions$optio.offset,
      context = _defaultOptions$optio.context;

  var start = window.pageYOffset;
  var innerHeight;
  var scrollHeight;

  if (context !== window) {
    innerHeight = context.offsetHeight;
    scrollHeight = context.scrollHeight;
  } else {
    innerHeight = window.innerHeight;
    scrollHeight = document.body.scrollHeight;
  }

  var clock = Date.now() - 1;
  return new Promise(function (resolve) {
    var step = function step() {
      var elapsed = Date.now() - clock;
      var end = typeof element === 'number' ? parseInt(element) : getTop(element, offset, scrollHeight, innerHeight);

      if (context !== window) {
        context.scrollTop = getPosition(start, end, elapsed, duration, ease);
      } else {
        window.scroll(0, getPosition(start, end, elapsed, duration, ease));
      }

      if (typeof duration === 'undefined' || elapsed > duration) {
        resolve();
        return;
      } // Sanity check to prevent taking over the scroll once we prematurely got to the element


      if (start === end) {
        resolve();
        return;
      }

      (0, _raf.default)(step);
    };

    step();
  });
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ease, "ease", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/scrollTo.js");
  reactHotLoader.register(defaultOptions, "defaultOptions", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/scrollTo.js");
  reactHotLoader.register(getTop, "getTop", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/scrollTo.js");
  reactHotLoader.register(getPosition, "getPosition", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/scrollTo.js");
  reactHotLoader.register(scrollTo, "scrollTo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/scrollTo.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("raf");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(7);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.withRoutePathContext = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(10));

var _react = _interopRequireWildcard(__webpack_require__(0));

var _ = __webpack_require__(11);

var _StaticInfo = __webpack_require__(16);

var _utils = __webpack_require__(13);

var _Location = _interopRequireDefault(__webpack_require__(33));

var _Spinner = _interopRequireDefault(__webpack_require__(22));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Routes.js",
    _class,
    _temp;

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var RoutePathContext = _react.default.createContext();

var withRoutePathContext = function withRoutePathContext(Comp) {
  return function (props) {
    return _react.default.createElement(RoutePathContext.Consumer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, function (routePath) {
      return _react.default.createElement(Comp, _extends({}, props, {
        routePath: routePath,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }));
    });
  };
};

exports.withRoutePathContext = withRoutePathContext;
var componentCache = new WeakMap();

function with404Prop(Component) {
  // If the wrapped Component is currently in cached, return it from cache.
  if (componentCache.has(Component)) {
    return componentCache.get(Component);
  } // Otherwise, create a new wrapped Component...


  var WrappedComponent = function WrappedComponent(props) {
    return _react.default.createElement(Component, _extends({
      is404: true
    }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }));
  }; // ...and cache it


  componentCache.set(Component, WrappedComponent);
  return WrappedComponent;
}

var _default = (0, _StaticInfo.withStaticInfo)((_temp = _class =
/*#__PURE__*/
function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Routes);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Routes)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "safeForceUpdate", function () {
      if (_this.unmounted) {
        return;
      }

      _this.forceUpdate();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getComponentForPath", function (routePath) {
      var Loader = _this.props.Loader; // Clean the path

      routePath = (0, _utils.getRoutePath)(routePath); // Try and get the component

      var Comp = _.templatesByPath[routePath]; // Detect a 404

      var is404 = routePath === '404'; // Detect a failed template

      if (_.templateErrorByPath[routePath]) {
        is404 = true;
        Comp = _.templatesByPath['404'];
      } // Detect an unloaded template
      // TODO:suspense - This will become a suspense resource


      if (!Comp) {
        if (is404) {
          throw new Error('This page template could not be found and a 404 template could not be found to fall back on. This means something is terribly wrong and you should probably file an issue!');
        }

        ;

        _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee() {
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return Promise.all([(0, _.prefetch)(routePath, {
                    priority: true
                  }), new Promise(function (resolve) {
                    return setTimeout(resolve, "200");
                  })]);

                case 2:
                  _this.safeForceUpdate();

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }))();

        return Loader;
      }

      return is404 ? with404Prop(Comp) : Comp;
    });

    return _this;
  }

  _createClass(Routes, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _.templateUpdated.cb = function () {
        return _this2.safeForceUpdate();
      };

      this.offLocationChange = (0, _Location.default)(function () {
        return _this2.safeForceUpdate();
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unmounted = true;
      if (this.offLocationChange) this.offLocationChange();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          staticInfo = _this$props.staticInfo;
      var routePath = (0, _utils.isSSR)() ? staticInfo.path : (0, _.getCurrentRoutePath)();
      var Comp = this.getComponentForPath(routePath);
      return _react.default.createElement(RoutePathContext.Provider, {
        value: routePath,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, children ? children({
        routePath: routePath,
        getComponentForPath: this.getComponentForPath
      }) : _react.default.createElement(Comp, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Routes;
}(_react.Component), _defineProperty(_class, "defaultProps", {
  Loader: _Spinner.default
}), _temp));

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RoutePathContext, "RoutePathContext", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Routes.js");
  reactHotLoader.register(withRoutePathContext, "withRoutePathContext", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Routes.js");
  reactHotLoader.register(componentCache, "componentCache", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Routes.js");
  reactHotLoader.register(with404Prop, "with404Prop", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Routes.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Routes.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

var locationSubscribers = [];

var triggerLocationChange = function triggerLocationChange(location) {
  return locationSubscribers.forEach(function (s) {
    return s(location);
  });
};

var onLocationChange = function onLocationChange(cb) {
  locationSubscribers.push(cb);
  return function () {
    locationSubscribers = locationSubscribers.filter(function (d) {
      return d !== cb;
    });
  };
};

init();
var _default = onLocationChange;
var _default2 = _default;
exports.default = _default2;

function init() {
  if (typeof document !== 'undefined') {
    var oldPopstate = window.onpopstate;

    window.onpopstate = function () {
      if (oldPopstate) {
        oldPopstate.apply(void 0, arguments);
      }

      triggerLocationChange(window.location);
    };

    ['pushState', 'replaceState'].forEach(function (methodName) {
      var old = window.history[methodName];

      window.history[methodName] = function () {
        setTimeout(function () {
          return triggerLocationChange(window.location);
        }, 0);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return old.apply(window.history, args);
      };
    });
  }
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(locationSubscribers, "locationSubscribers", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Location.js");
  reactHotLoader.register(triggerLocationChange, "triggerLocationChange", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Location.js");
  reactHotLoader.register(onLocationChange, "onLocationChange", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Location.js");
  reactHotLoader.register(init, "init", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Location.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Location.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
function _templateObject(){var data=_taggedTemplateLiteral(["\n  width: 800px;\n  padding: 25px;\n  margin: 35px auto;\n  background-color: white;\n  border-radius: 4px;\n  color: gray;\n\n  h1 {\n    color: rgba(204, 174, 98,1.0);\n    font-size: 34px;\n    margin-bottom: 35px;\n    text-align: center\n  }\n\n  ul, ol, h4 {\n    font-size: 18px;\n    width: 80%;\n    margin: 20px auto;\n  }\n\n  a {\n    display: block;\n    text-align: center;\n    padding: 35px;\n    color: gray;\n  }\n"]);_templateObject=function _templateObject(){return data;};return data;}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var Styled404=styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());/* harmony default export */ __webpack_exports__["default"] = (function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Styled404,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"There was a problem loading this page"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4",null,"There could be a problem with the following:"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"The page does not exist"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"The page is not ready and needs to be reloaded again")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"],{to:"/"},"Back to Homepage"));});

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_RoomStyledWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _modules_InquiryForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony default export */ __webpack_exports__["default"] = (function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_RoomStyledWrapper__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{id:"room-banner"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:"https://res.cloudinary.com/stmi/image/upload/c_scale,w_960/v1555333820/eldonresort/el-don-resort-casa-del-mar_deqzgi.jpg"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{id:"room-content"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",{id:"room-title"},"Casa del Mar"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{id:"room-lead"},"Beachfront room ideal for couples seeking for a romantic retreat and families looking for a holiday home. It has a private veranda that provides guests a beautiful overlooking view to the sea. "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{id:"room-price-section",className:"room-section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"Room Rate"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"gold"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",null,"Good for 2 persons")))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{id:"room-price"},"Php 4,000.00"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small",null,"Room rates are introductory only until May 31, 2019.")))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{id:"rooms",className:"room-section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"Rooms"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"gold"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",null,"Single Beds (42 x75 inches)")))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{id:"room-items"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Casa del Mar 1 and 2"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Casa del Mar 3 and 4"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Casa del Mar 5"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Casa del Mar 6"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Casa del Mar 7"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{id:"checkin-policy-section",className:"room-section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"Check-in Policy")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{id:"check-in-policies",className:"room-info"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Check-In Time:  After 2:00 PM"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Check-Out Time: Before 12:00 noon"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Extra-person charge: P1,500/pax with breakfast."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Children 8 years below are free of charge but will have to pay P250.00 for breakfast."))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{id:"inquiries-reservation-section",className:"room-section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"For Inquiries and Reservations")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_InquiryForm__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Please dont hesitate to call or email us at: "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Mobile Number: 0917 722 1506"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"E-mail Address: eldonresort@gmail.com"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Booking Office:"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong",null,"El Don Resort Office")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Roadway Inn Mezzanine Floor, J.P. Laurel Avenue, Davao"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"City (Mondays- Saturdays from 9:00 am-6:00 pm)"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"room-section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"STAYING GUEST POLICY"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:"room-info"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Prior reservations must be made."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Any government issued identification or company ID must be presented upon check-in along with the confirmation form."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"All guests must register at the resort\u2019s front desk."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Strictly NO SMOKING (please see smoking policy below). "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"NO PETS allowed."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Issuance of parking permits will be done upon check -in (see parking policies below)."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Room service, pool side service and beach area food service will incur 10% service charge."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"If you exceed the maximum number of guests allowed, you will be asked to rent another guestroom for proper accommodation."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Breakfast meals will be on buffet for an accumulated guests of 20 pax on Chefs\u2019 choice for menu. Breakfast is available from 6-9 am only at the restaurant. Present/show meal stubs/coupons upon dining."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"For overnight guests of less than 20 pax, plated breakfast will be offered from the ala carte choices with prior ordering done at least a day before. Breakfast is available from 6-9 am only at the restaurant."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"For other meals, special group packages can be availed for buffet service to be arranged with the management with minimum of 20 pax at P 350.00/pax to be served at the restaurant."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Buffet service will require a minimum of 20 guests accumulated. The menu will be on Chef\u2019s choice for buffet which consists of One Soup ; One pasta; One veggies/noodle dish; One Chicken/Pork dish, One fish/seafood dish, Rice and One Dessert with one round of iced tea/juice."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Only one discount may be allowed relative to other discount programs. No additional discounts may be added to special package rates, group rates, or promotional rates."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Rates are subject to change without notice."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Rates are inclusive of VAT."))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"room-section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"NIGHTLY RESERVATIONS"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:"room-info"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Rooms are serviced daily."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"A Full Service Clean will be performed every third night on reservations of five nights or longer including fresh bed sheets, making of beds, floor sweep, vacuum and  bathroom cleaning ."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Stays of seven, ten or thirteen nights will receive the first Full Service Clean on the fourth night and resume every third night thereafter."))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"room-section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"CANCELLATIONS AND CHARGES"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:"room-info"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Advance payments are non-refundable on confirmed bookings less than a week of date/s for overnight guests, special packages and functions.  For day tours, no refunds for cancellations three days prior the event."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Date change will be allowed one month before the confirmed booking date with no extra charge. A change of date fee will apply if less than one month at P 1,000.00 for the confirmed bookings for each date change per room /night and subject to availability."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"We reserve the right to cancel or modify reservations where it appears that a customer has engaged in fraudulent or inappropriate activity or under other circumstances where it appears that the reservations contain or resulted from a mistake or error."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"The resort shall not be held liable for cancellation of bookings and shortened stays because of force majeure/acts of God or conditions beyond the Resort\u2019s control, which include floods, earthquakes, explosions, fire, civil disobedience, war, legislation not in force at the date of this agreement, labor disputes or delays of third parties. Also, the Resort will not be held liable for failure to carry out arrangements and other obligations due to the same circumstances. In such cases, the Resort must be granted a reasonable extension of time to perform the obligations or arrangements."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Before sending us your booking, please check that all of the information you have provided are correct and complete. Incorrect or incomplete information can result in an erroneous booking for which we take no responsibility."))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"room-section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"PARKING"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:"room-info"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Free parking is provided to guests."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Guests are provided a parking permit upon entry at the guard house which must be prominently displayed at all times while parking on-site."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"To ensure sufficient parking for all guests at the resort, parking permits are issued in accordance to the size of room and/or group size."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"We are unable to issue additional parking permits.",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"1 Bedroom will receive 1 Parking Permit at check-in"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"2 Bedrooms will receive 2 Parking Permits at check-in."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"1 parking ticket for every group of day tourist numbering 10 or less."))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null," Parking for event/function participants will be designated by the resort management upon consultation with the organizers; 10 parking slots at the resort will be arranged."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Due to limited parking availability, big vehicle (like buses) parking is only permitted with prior Management approval."))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"room-section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"SMOKING"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:"room-info"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"El Don Resort has smoking designated areas."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"All rooms, balconies, and common areas are smoke free."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"As a courtesy to other guests, and to maintain a healthy and clean environment, the use of electronic cigarettes, vaporizers, and smokeless tobacco of any kind is also subject to the same rules."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"A fine of FIVE THOUSAND PESOS will be charged for violation of this rule.")))));});

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_RoomStyledWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _modules_InquiryForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony default export */ __webpack_exports__["default"] = (function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_RoomStyledWrapper__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{id:"room-banner"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:"https://res.cloudinary.com/stmi/image/upload/c_scale,w_960/v1555333773/eldonresort/el-don-resort-casa-la-jardin_nzakr4.jpg"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{id:"room-content"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",{id:"room-title"},"Casa La Jardin"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{id:"room-lead"},"Poolside view room with well-manicured tropical gardens perfect for families and groups of friends wanting their own space."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{id:"room-price-section",className:"room-section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"Room Rate"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"gold"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",null,"Good for 2 persons")))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{id:"room-price"},"Php 3,500.00"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small",null,"Room rates are introductory only until May 31, 2019.")))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{id:"rooms",className:"room-section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"Rooms"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"gold"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",null,"Single Beds (42 x75 inches)")))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{id:"room-items"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Casa La Jardin 1 and 2"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Casa La Jardin 3 and 4"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Casa La Jardin 5"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Casa La Jardin 6"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Casa La Jardin 7"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{id:"checkin-policy-section",className:"room-section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"Check-in Policy")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{id:"check-in-policies",className:"room-info"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Check-In Time:  After 2:00 PM"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Check-Out Time: Before 12:00 noon"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Extra-person charge: P1,500/pax with breakfast."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Children 8 years below are free of charge but will have to pay P250.00 for breakfast."))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{id:"inquiries-reservation-section",className:"room-section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"For Inquiries and Reservations")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_InquiryForm__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Please dont hesitate to call or email us at: "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Mobile Number: 0917 722 1506"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"E-mail Address: eldonresort@gmail.com"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Booking Office:"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong",null,"El Don Resort Office")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Roadway Inn Mezzanine Floor, J.P. Laurel Avenue, Davao"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"City (Mondays- Saturdays from 9:00 am-6:00 pm)"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"room-section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"STAYING GUEST POLICY"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:"room-info"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Prior reservations must be made."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Any government issued identification or company ID must be presented upon check-in along with the confirmation form."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"All guests must register at the resort\u2019s front desk."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Strictly NO SMOKING (please see smoking policy below). "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"NO PETS allowed."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Issuance of parking permits will be done upon check -in (see parking policies below)."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Room service, pool side service and beach area food service will incur 10% service charge."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"If you exceed the maximum number of guests allowed, you will be asked to rent another guestroom for proper accommodation."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Breakfast meals will be on buffet for an accumulated guests of 20 pax on Chefs\u2019 choice for menu. Breakfast is available from 6-9 am only at the restaurant. Present/show meal stubs/coupons upon dining."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"For overnight guests of less than 20 pax, plated breakfast will be offered from the ala carte choices with prior ordering done at least a day before. Breakfast is available from 6-9 am only at the restaurant."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"For other meals, special group packages can be availed for buffet service to be arranged with the management with minimum of 20 pax at P 350.00/pax to be served at the restaurant."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Buffet service will require a minimum of 20 guests accumulated. The menu will be on Chef\u2019s choice for buffet which consists of One Soup ; One pasta; One veggies/noodle dish; One Chicken/Pork dish, One fish/seafood dish, Rice and One Dessert with one round of iced tea/juice."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Only one discount may be allowed relative to other discount programs. No additional discounts may be added to special package rates, group rates, or promotional rates."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Rates are subject to change without notice."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Rates are inclusive of VAT."))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"room-section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"NIGHTLY RESERVATIONS"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:"room-info"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Rooms are serviced daily."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"A Full Service Clean will be performed every third night on reservations of five nights or longer including fresh bed sheets, making of beds, floor sweep, vacuum and  bathroom cleaning ."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Stays of seven, ten or thirteen nights will receive the first Full Service Clean on the fourth night and resume every third night thereafter."))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"room-section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"CANCELLATIONS AND CHARGES"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:"room-info"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Advance payments are non-refundable on confirmed bookings less than a week of date/s for overnight guests, special packages and functions.  For day tours, no refunds for cancellations three days prior the event."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Date change will be allowed one month before the confirmed booking date with no extra charge. A change of date fee will apply if less than one month at P 1,000.00 for the confirmed bookings for each date change per room /night and subject to availability."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"We reserve the right to cancel or modify reservations where it appears that a customer has engaged in fraudulent or inappropriate activity or under other circumstances where it appears that the reservations contain or resulted from a mistake or error."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"The resort shall not be held liable for cancellation of bookings and shortened stays because of force majeure/acts of God or conditions beyond the Resort\u2019s control, which include floods, earthquakes, explosions, fire, civil disobedience, war, legislation not in force at the date of this agreement, labor disputes or delays of third parties. Also, the Resort will not be held liable for failure to carry out arrangements and other obligations due to the same circumstances. In such cases, the Resort must be granted a reasonable extension of time to perform the obligations or arrangements."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Before sending us your booking, please check that all of the information you have provided are correct and complete. Incorrect or incomplete information can result in an erroneous booking for which we take no responsibility."))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"room-section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"PARKING"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:"room-info"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Free parking is provided to guests."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Guests are provided a parking permit upon entry at the guard house which must be prominently displayed at all times while parking on-site."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"To ensure sufficient parking for all guests at the resort, parking permits are issued in accordance to the size of room and/or group size."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"We are unable to issue additional parking permits.",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"1 Bedroom will receive 1 Parking Permit at check-in"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"2 Bedrooms will receive 2 Parking Permits at check-in."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"1 parking ticket for every group of day tourist numbering 10 or less."))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null," Parking for event/function participants will be designated by the resort management upon consultation with the organizers; 10 parking slots at the resort will be arranged."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Due to limited parking availability, big vehicle (like buses) parking is only permitted with prior Management approval."))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"room-section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"SMOKING"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:"room-info"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"El Don Resort has smoking designated areas."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"All rooms, balconies, and common areas are smoke free."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"As a courtesy to other guests, and to maintain a healthy and clean environment, the use of electronic cigarettes, vaporizers, and smokeless tobacco of any kind is also subject to the same rules."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"A fine of FIVE THOUSAND PESOS will be charged for violation of this rule.")))));});

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_PackageStyledWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _modules_InquiryForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony default export */ __webpack_exports__["default"] = (function(props){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_PackageStyledWrapper__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{id:"package-content"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{id:"banner"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:"https://res.cloudinary.com/stmi/image/upload/c_scale,w_960/v1555333760/eldonresort/el-don-resort-kayak_lz6u2f.jpg"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"Day Tour Package"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{id:"package-lead"},"Available 7 days a week between 8am to 5pm except if the resort has been rented for exclusive use. For the privacy of the in-house guests, the resort cannot accommodate tours beyond 5pm."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{id:"package-price-section",className:"section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"Day Tour Fees ")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{id:"package-price",className:"gold"},"Php 700 per adult "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Php 350 per child (8 yrs old below)"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"0-2 years old Free of charge provided sharing plate with an adult"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{id:"package-inclusions-section",className:"section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"Inclusions")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{style:{margin:'0'}},"Plated Lunch  with one round of iced tea Choices are:"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol",{className:"info",type:"a",style:{paddingTop:'0'}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"1 pc Fried Chicken with Rice "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"1 pc grilled pork chop with rice"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"4 pcs Pork barbeque with rice"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"1 Pan grilled fish with rice"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Aglio Olio with garlic bread"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Bolognese with garlic bread"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Carbonara with Garlic bread"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Spaghetti Filipina with garlic bread")))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"Other Inclusions"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol",{className:"info",type:"a"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Use of pool  and beach area  from 8am-5pm."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Use of pool towel "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Day tour guests may use the shower and rest room area located near the pool. "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"No wash- up room is included in the day tour package.",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Every  group of five,  (1) table at the pool side will be assigned. Or may opt to occupy  one (1) beach hut (Kubo)  at the beach area for every group of 10 persons. Choose one area only."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Use of poolside tables and beach huts  (kubos)  are on a first-come, first-served basis. The resort has the right to assign which area the guests can occupy, based on availability.  "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"We allow thirty (30)  persons maximum day tour per day. "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"A  maximum of  twenty (20) persons will be allowed to occupy the poolside tables at a time."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"A maximum of thirty (30) persons will be allowed to occupy the beach huts ( kubos) at a time."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Day tour guests will be assigned use of beach kubos if the pool cabana is occupied for a function."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Buffet service will require a minimum of 20 guests accumulated. The menu will be on chef\u2019s choice for buffet which consists of: One Soup dish, One pasta/noodle dish/vegetable, One fish/ Seafood, One Chicken dish, One Pork dish,  Rice and One Dessert."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"During peak season, the resort will offer special buffet packages for lunch and dinner on chef\u2019s choice menu for P 350/head ."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Rates are subject to change without prior notice."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Bringing of outside food and drinks, coolers or cooking devices are not allowed. Cooking or any way of food  preparation is not allowed. The resort has a restaurant and bar to cater to your requirements."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Corkage will apply  to the following:",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Roasted Pig/Lechon \u2013 1,500.00 inclusive of condiments and attending staff"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Roasted Cow - P 2,500.00 inclusive of condiments and attending staff"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Liquor not present in El Don - P 500/bottle"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Liquor available in El Don will be charged according to the menu price"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Viand- P 2,000.00 per dish"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Drinks (softdrinks, beers, juices) - P 100/bottle or can"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Chips/fruits - P 100/pack or container"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"All customers within the pool and beach area must be in swimming attire. "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"No one under the age of fourteen (14) should enter the pool and beach area without being accompanied by an adult who knows how to swim.  "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"The pool may be closed and cleared periodically for a safety check or to apply chemicals, to adjust chemicals to ensure proper sanitation of swimming pool water. "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Drunk and disorderly behavior will not be tolerated."))))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{id:"inquiries-reservation-section",className:"section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"For Inquiries and Reservations")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_InquiryForm__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Please dont hesitate to call or email us at: "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Mobile Number: 0917 722 1506"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"E-mail Address: eldonresort@gmail.com"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Booking Office:"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong",null,"El Don Resort Office")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Roadway Inn Mezzanine Floor, J.P. Laurel Avenue, Davao"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"City (Mondays- Saturdays from 9:00 am-6:00 pm)")))));});

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var re_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43);
/* harmony import */ var re_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(re_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_index_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70);
/* harmony import */ var _modules_index_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_index_index_css__WEBPACK_IMPORTED_MODULE_4__);
var Activity='https://res.cloudinary.com/stmi/image/upload/v1555333760/eldonresort/el-don-resort-kayak_lz6u2f.jpg';/* harmony default export */ __webpack_exports__["default"] = (function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_static__WEBPACK_IMPORTED_MODULE_1__["Head"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title",null,"WELCOME TO EL DON RESORT - Davao\u2019s premier wellness and ecotourism destination"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{name:"description",content:"El Don Resort"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{id:"banner"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(re_carousel__WEBPACK_IMPORTED_MODULE_3___default.a,{loop:true,auto:true},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"bannerImage",style:{background:"url('https://res.cloudinary.com/stmi/image/upload/v1557202993/eldonresort/el-don-resort-shoreline-16-9_atezoc.jpg')",backgroundRepeat:'no-repeat',backgroundSize:'cover'}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"bannerImage",style:{background:"url('https://res.cloudinary.com/stmi/image/upload/v1557202992/eldonresort/el-don-resort-day-pool-16-9_uzvig8.jpg')",backgroundRepeat:'no-repeat',backgroundSize:'cover'}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"bannerImage",style:{background:"url('https://res.cloudinary.com/stmi/image/upload/v1557202992/eldonresort/el-don-resort-front-desk-16-9_bwu2h0.jpg')",backgroundRepeat:'no-repeat',backgroundSize:'cover'}}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{id:"banner2",className:"text-center p-4"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small",null,"Welcome to El Don Resort")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4",null,"Unwrap the Gifts"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"of Governor Generoso, Davao Oriental and experience its premier ecotourism and wellness destination")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"responsive-widths accommodation"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",{className:"header"},"Accommodation"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{id:"rooms-description"},"Set on a hillside with spectacular ocean views, El Don Resort offers three air-conditioned villas that combine Mediterranean architectural style with contemporary design. A total of 14 spacious rooms are available in this property that can comfortably accommodate 80 persons."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"rooms"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"room"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{style:{maxWidth:'100%'},src:'https://res.cloudinary.com/stmi/image/upload/c_scale,w_1200/v1555333773/eldonresort/el-don-resort-casa-la-jardin_nzakr4.jpg'}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"room-info"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",null,"Casa La Jardin"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"room-view"},"Poolside View"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"room-description"},"Poolside view room with well-manicured tropical gardens perfect for families and groups of friends wanting their own space."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{marginTop:'auto',padding:'0'}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"],{to:'/casa-la-jardin'},"Click for more info")))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"room"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{style:{maxWidth:'100%'},src:'https://res.cloudinary.com/stmi/image/upload/c_scale,w_1200/v1555333820/eldonresort/el-don-resort-casa-del-mar_deqzgi.jpg'}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"room-info"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",null,"Casa Del Mar"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"room-view"},"BeachFront View"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"room-description"},"Beachfront room ideal for couples seeking for a romantic retreat and families looking for a holiday home. It has a private veranda that provides guests a beautiful overlooking view to the sea."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{marginTop:'auto',padding:'0'}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"],{to:'/casa-del-mar'},"Click for more info"))))))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",{className:"header"},"Packages"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"responsive-widths packages"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"package"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{style:{maxWidth:'100%'},src:Activity}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"package-info"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",null,"Day tour package"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Available 7 days a week between 8am to 5pm except if the resort has been rented for exclusive use. For the privacy of the in-house guests, the resort cannot accommodate tours beyond 5pm."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{marginTop:'auto',padding:'0'}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"],{to:'/day-tour-package'},"Click for more info")))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"package"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{style:{maxWidth:'100%'},src:'https://res.cloudinary.com/stmi/image/upload/c_scale,w_1200/v1555333828/eldonresort/el-don-resort-banquet_onnw1e.jpg'}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"package-info"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",null,"Meetings and Events"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Whether it is a cocktail or banquet, family reunion or wedding reception, corporate seminars or government meetings, our air-conditioned Function Room is an ideal venue. "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{marginTop:'auto',padding:'0'}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"],{to:'/meetings-and-events'},"Click for more info")))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"package"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{style:{maxWidth:'100%'},src:'https://res.cloudinary.com/stmi/image/upload/c_scale,w_1200/v1555363473/eldonresort/el-don-resort-pictorial-package_d5qiqu.jpg'}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"package-info"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",null,"Pictorial Package"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"For a package of SIX THOUSAND PESOS , a pictorial or photoshoot for weddings, debut or any occasion for families and group  can be held at El Don Resort. "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{marginTop:'auto',padding:'0'}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"],{to:'/pictorial-package'},"Click for more info")))))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"responsive-widths"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{"class":"embed-responsive embed-responsive-16by9"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe",{"class":"embed-responsive-item",src:"https://www.youtube.com/embed/sa9_XSsTOz8",allowfullscreen:true})))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"section amenities"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"responsive-widths"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",{className:"header"},"At the Resort"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"amenity"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{style:{maxWidth:'100%'},src:'https://res.cloudinary.com/stmi/image/upload/c_scale,w_700/v1555333760/eldonresort/el-don-resort-kayak_lz6u2f.jpg'}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{style:{maxWidth:'100%'},src:'https://res.cloudinary.com/stmi/image/upload/c_scale,w_700/v1555333160/eldonresort/el-don-resort-pool_zunrqy.jpg'}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{style:{maxWidth:'100%'},src:'https://res.cloudinary.com/stmi/image/upload/c_scale,w_700/v1555333159/eldonresort/el-don-resort-food_mrspai.jpg'}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{style:{maxWidth:'100%'},src:'https://res.cloudinary.com/stmi/image/upload/c_scale,w_700/v1555333160/eldonresort/el-don-resort-family_kywsmu.jpg'})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{id:"at-the-resort-description"},"Inspired by Mediterranean architectural design, El Don Resort offers a Pool Cabana that serves as its main function and entertainment room and can accommodate 100 persons \u2014perfect for intimate events such as family reunions, weddings, seminars, and small group activities. ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null)," ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"A swimming pool for children and adults is located in the middle of the property. The resort\u2019s facilities\xA0also include a Wine Bar and a Spanish-Filipino Restaurant that offers wide-variety of drinks, locally sourced dishes, and fresh catch.",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"The resort also offers watersports activities like kayaking, snorkeling and beach volleyball."))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"section directions"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"responsive-widths"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"ornamentalBorder"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",{className:"header"},"How to get here"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{id:"resort-direction"},"For guests with private vehicles, El Don Resort is just a four-hour drive away from Davao City International Airport on a regular day time.",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"For guests who would like to take on public transportation, Governor Generoso bound vans are available at Paternos, Roxas Avenue in Davao City with first come first serve policy. Scheduled trips at 1PM and 10PM only.",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"Non-Air-conditioned buses bound to Pundaguitan or La Vigan are also available in Davao City Land Transport Terminal in Ecoland. Scheduled trips at 1:45AM, 3PM, 5PM and 10PM only."))));});

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject(){var data=_taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  justify-content: center;\n  width: 50%;\n  text-align: center;\n  align-items: center;\n  min-height: 1rem;\n\n  h1 {\n    font-family: 'Garamond';\n    font-size: 2rem;\n    padding: 1rem;\n  }\n\n  p {\n    font-size: 1.2rem;\n  }\n"]);_templateObject=function _templateObject(){return data;};return data;}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var StyledWrapper=styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());/* harmony default export */ __webpack_exports__["default"] = (function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledWrapper,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{id:"inquiries-reservation-section",className:"section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"For Inquiries and Reservations")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Please dont hesitate to call or email us at: "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Mobile Number: 0917 722 1506"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"E-mail Address: eldonresort@gmail.com"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Booking Office:"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong",null,"El Don Resort Office")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Roadway Inn Mezzanine Floor, J.P. Laurel Avenue, Davao"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"City (Mondays- Saturdays from 9:00 am-6:00 pm)")))));});

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_PackageStyledWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _modules_InquiryForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony default export */ __webpack_exports__["default"] = (function(props){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_PackageStyledWrapper__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{id:"package-content"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{id:"banner"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:"https://res.cloudinary.com/stmi/image/upload/c_scale,w_960/v1555333828/eldonresort/el-don-resort-banquet_onnw1e.jpg"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",{style:{fontFamily:"Garamond"}},"MEETINGS AND EVENTS"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{id:"package-lead",style:{textAlign:'justify'}},"Whether it is a cocktail or banquet, family reunion or wedding reception, corporate seminars or government meetings, our air-conditioned Function Room is an ideal venue. El Don Resort holds event at the ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong",null,"Pool Cabana "),"for 80 persons with tables set-up and 100 persons in theater set-up. While functions at the beach can accommodate 100 persons with table set-up and 150 persons in theater set-up."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"GENERAL BANQUET POLICIES"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"All reservations for private banquet functions subject to the rules and regulations of EL DON RESORT and the following conditions:"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"For functions, we serve buffet set up with the following packages: ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"gold"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong",null,"minimum of 50 pax"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"package-food-section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"Package 1")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"food-items-section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"package-price gold"},"Php 650/head"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"1 Rice"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"1 Soup"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"1 Chicken / Pork Dish1 Fish / Seafood Dish"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"1 Noodle / Vegetable DishFresh Fruits or 1 Dessert"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"1 Round of Drinks (Juice/Soda)"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"package-food-section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"Package 2")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"food-items-section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"package-price gold"},"Php 850/head"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"1 Rice"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"1 Soup"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"1 Chicken / Beef / Pork Dish"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"1 Fish / Seafood Dish1 Pasta / Noodle Dish"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"1 Vegetable DishFresh Fruits"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"1 Dessert"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"1 Round of Drinks (Juice / Soda)"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"package-food-section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"Package 3")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"food-items-section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"package-price gold"},"Php 1000/head"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"1 Rice"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"1 Soup"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"1 Chicken Dish"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"1 Pork / Beef Dish1 Fish / Seafood Dish"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"1 Pasta / Noodle Dish"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"1 Vegetable DishFresh Fruits"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"2 Desserts"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"1 Round of Drinks (Juice / Soda)"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",{className:"gold"},"Inclusions"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Inclusions of the packages above are four-hour use of pool cabana and basic sound system."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"The menu and all other details of your event(s) are to be finalized a minimum of 3 weeks prior to the date of your event(s) and are subject to the terms and conditions described herein"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Strictly no food or beverages of any kind may be brought into the Resort by the Client that arenot stipulated in the Sales Contract. Corkage fees and/or labor charges, that are deemed necessary, will be charged accordingly."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Plated Lunch  with one round of iced tea Choices are:",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Roasted Pig /Lechon \u2013 2,000.00inclusive of condiments and attending staff"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Roasted Cow- P 2,500.00 inclusive of condiments and attending staff"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Liquor not present in El Don- P 500/bottle"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Viand- P 2,000.00 per dish"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Drinks (softdrinks, beers, juices)- P 100/bottle or can\xA0"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Chips/ fruits- P 100/pack or container"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"All details of the food and beverages to be served shall be set forth on a separate menu. Wines and liquor can be ordered during the event and should be paid separately."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"The guaranteed number of attendees must be communicated to the Davao Booking Office not less than 7 full working days (Mondays to Fridays, excluding holidays), prior to the function."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"A 5% allowance in food preparation over the guaranteed number will be given on all events.\xA0"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Since food is prepared in advance, we discourage therelease ofleftover food including opened drinks, health or safety reasons. Should you insist on bringing out of the resort, we will issue a waiver form.\xA0"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"The Resort reserves the right to charge a service fee for set-up of rooms or usage of other areas of the Resort with extraordinary requirements.\xA0"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Use of beach area for function (No set-up; stand by man-power) is Php5,000.00"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Lights and Sound system rental at the beach area inclusive of electricity charge is Php12,000.00 Portable PA /Sound System with Electricity is Php 2,000.00."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"VideokePhp 2,000.00 as part of the function.\xA0"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"No changes to the menu may be made by the Client within the seven-working day period preceding the event."))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{id:"inquiries-reservation-section",className:"section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"For Inquiries and Reservations")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_InquiryForm__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Please dont hesitate to call or email us at: "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Mobile Number: 0917 722 1506"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"E-mail Address: eldonresort@gmail.com"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Booking Office:"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong",null,"El Don Resort Office")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Roadway Inn Mezzanine Floor, J.P. Laurel Avenue, Davao"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"City (Mondays- Saturdays from 9:00 am-6:00 pm)"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"Bookings"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol",{className:"info",type:"1"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Prior reservations is required through the El Don Resort Davao Booking office at cellphone no: 0917-7221506 or email address eldonresort@gmail.comor through FB account El Don Resort. Bookings are during office hours from 9 am-6pm from Mondays to Saturdays.\xA0"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"A deposit of 50% of the total amount is required 15days prior the event to reserve the above venue and will be credited to the total cost of your event(s). However, this deposit may not be refunded in the event you cancel all or part of your function. Please see Cancellation Policy below.\xA0"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"We require full payment of the at least seven (7) days before your event."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Once the booking has been processed, both parties will receive a copy of the signed contract. Please review the information carefully and contact us immediately. If you have any questions or require any changes, we urge you to read all information written in the saiddocument to ensure your event/function at El Don Resort is issue-free. No signed contract means no booking.\xA0"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"A confirmed booking is only possible ifthe full payment of the event/function has been made. Payment can be made directly at El Don Resort\u2019s Davao Office or can be deposited through bank:BDO Savings Account Name: Carlina Z. Pascua, Account No. 001730181242 or through money remittance centers."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"The additional incurred expenses during the event must be paid in cash. No personal checks are allowed.\xA0"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"The resort reserves the right to report to any government officeof any guest for any non-payment of charges.\xA0"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Ocular inspections are allowed for functions and confirmed group tours /bookings of twenty pax only. This must be arranged with the Davao booking office at least 7 working days prior visit with a maximum of three participants for the ocular team for 20-30 minutes maximum time allotment. Should theywant to stay longer, they can avail of the day tour package.\xA0"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Safe keeping of belongings are accounted with the guest. The resort is not liable for losses. Thereare no safety deposit boxes available.\xA0"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"No bringing of outside food allowed. Cooking or any way of foodpreparation is not allowed inside the rooms.\xA0"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Please respect the privacy of the other guests. Do not create noise that can disturb other guests in the rooms or other public areas.\xA0"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Un-consented photography of other guests is strictly prohibited.\xA0"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Gambling is not allowed in the resort premises.\xA0"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"It is strictly forbidden to bring flammable or explosive materials and unpleasant smelling items to the resort.\xA0"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Possession of illegal drugs is prohibited in the resort premises. The management reserves the right to report this to government authorities.")))));});

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_PackageStyledWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _modules_InquiryForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony default export */ __webpack_exports__["default"] = (function(props){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_PackageStyledWrapper__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{id:"package-content"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{id:"banner"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:"https://res.cloudinary.com/stmi/image/upload/c_scale,w_960/v1555363473/eldonresort/el-don-resort-pictorial-package-2_kpurpn.jpg"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"Pictorial Package"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4",null,"For a package of ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"gold"},"Php 6,000.00"),", a pictorial or photoshoot for weddings, debut or any occasion for families and group  can be held at El Don Resort."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"Inclusions"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:"types"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"One plated meal for a group of five; food options are from the day tour package"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"One wash up room available from 8 am-5 pm; and "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Access to the resort\u2019s beachline, pool area and resort grounds.",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Pictorial schedule is from 8:00-5:00 PM only. "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Excess of five persons will be paid SEVEN HUNDRED PESOS  per head with one plated meal (food choices are from the day tour package)  and access to the resort\u2019s beachline , pool area and resort grounds."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Meal choices: ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"Plated Meal  with one round of iced tea Choices are:",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol",{type:"a"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"1 pc Fried Chicken with Rice"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"1 pc grilled pork chop with rice "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"3 pcs pork barbeque with rice"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"1 pan grilled fish with rice "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Aglio olio with garlic bread or Bolognese with garlic bread. "))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"If number of guests reach 20 pax, buffet service on Chef\u2019s choice will be served. "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Buffet  consist  of One Soup dish, One pasta/noodle dish/vegetable, One fish/seafood dish,  One Chicken/Pork dish, Rice  and One Dessert  with one round of iced tea/juice."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Swimming at the pool or beach is allowed during the time allotted, from 8:00-5:00 PM."))))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4",null,"An overnight package can be availed for a fee of ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"gold"},"Php 10,000.00")," for a group of five."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"Inclusions"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:"types"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"One plated meal for a group of five which can either be breakfast, lunch or dinner;"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"One room for five pax"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Access to the resort\u2019s beachline , pool area and resort grounds.",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"They  can opt to get another room at P 3,500 for Casa la Jardin or P 4,000 for Casa del Mar which is good for 2 pax only and extra person at P 1,500.00 with breakfast."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Special set-ups can be arranged at the resort\u2019s facilities like beach area and resort grounds for a fee of FIVE THOUSAND PESOS for four hours. Sound system installation will be charged separately.  The area will be designated for your pictorial during the duration thus off limits to other guests. The ingress of one hour before and  egress an hour after is allowed. Succeeding hour is ONE THOUSAND PESOS."))))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{id:"inquiries-reservation-section",className:"section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"For Inquiries and Reservations")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_InquiryForm__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Please dont hesitate to call or email us at: "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Mobile Number: 0917 722 1506"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"E-mail Address: eldonresort@gmail.com"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Booking Office:"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong",null,"El Don Resort Office")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Roadway Inn Mezzanine Floor, J.P. Laurel Avenue, Davao"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"City (Mondays- Saturdays from 9:00 am-6:00 pm)")))));});

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_static__WEBPACK_IMPORTED_MODULE_1__["withRouteData"])(function(_ref){var post=_ref.post;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"],{to:"/blog/"},'<'," Back"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",null,post.title),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,post.body));}));

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("re-carousel");

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(45);
__webpack_require__(48);
module.exports = __webpack_require__(53);


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();
/* eslint-disable import/no-dynamic-require */


var plugins = __webpack_require__(26).default;

var _require = __webpack_require__(11),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/t0mclaudio/Projects/ElDonResort/site/artifacts/react-static-browser-plugins.js", function () {
    registerPlugins(__webpack_require__(26).default);
  });
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(plugins, "plugins", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/bootstrapPlugins.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("swimmer");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("intersection-observer");

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(28),
    templates = _require.default,
    notFoundTemplate = _require.notFoundTemplate;

var _require2 = __webpack_require__(11),
    registerTemplates = _require2.registerTemplates;

registerTemplates(templates, notFoundTemplate);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/t0mclaudio/Projects/ElDonResort/site/artifacts/react-static-templates.js", function () {
    var _require3 = __webpack_require__(28),
        templates = _require3.default,
        notFoundTemplate = _require3.notFoundTemplate;

    registerTemplates(templates, notFoundTemplate);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports.default = requireUniversalModule;

var _utils = __webpack_require__(20);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 15,
	"./": 15,
	"./index": 15,
	"./index.js": 15
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
webpackContext.id = 50;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(7);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(21);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _StaticInfo = _interopRequireDefault(__webpack_require__(16));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/bootstrapApp.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var App = __webpack_require__(71).default;

var _default = function _default(staticInfo) {
  return function (props) {
    return _react.default.createElement(_StaticInfo.default.Provider, {
      value: staticInfo,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, _react.default.createElement(App, _extends({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    })));
  };
};

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, "App", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/bootstrapApp.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/bootstrapApp.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(7);

exports.__esModule = true;
exports.Helmet = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(21);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSideEffect = __webpack_require__(55);

var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);

var _deepEqual = __webpack_require__(58);

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _HelmetUtils = __webpack_require__(59);

var _HelmetConstants = __webpack_require__(29);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Helmet = function Helmet(Component) {
  var _class, _temp;

  return _temp = _class = function (_React$Component) {
    _inherits(HelmetWrapper, _React$Component);

    function HelmetWrapper() {
      _classCallCheck(this, HelmetWrapper);

      return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
      return !(0, _deepEqual2.default)(this.props, nextProps);
    };

    HelmetWrapper.prototype.mapNestedChildrenToProps = function mapNestedChildrenToProps(child, nestedChildren) {
      if (!nestedChildren) {
        return null;
      }

      switch (child.type) {
        case _HelmetConstants.TAG_NAMES.SCRIPT:
        case _HelmetConstants.TAG_NAMES.NOSCRIPT:
          return {
            innerHTML: nestedChildren
          };

        case _HelmetConstants.TAG_NAMES.STYLE:
          return {
            cssText: nestedChildren
          };
      }

      throw new Error("<" + child.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
    };

    HelmetWrapper.prototype.flattenArrayTypeChildren = function flattenArrayTypeChildren(_ref) {
      var _extends2;

      var child = _ref.child,
          arrayTypeChildren = _ref.arrayTypeChildren,
          newChildProps = _ref.newChildProps,
          nestedChildren = _ref.nestedChildren;
      return _extends({}, arrayTypeChildren, (_extends2 = {}, _extends2[child.type] = [].concat(arrayTypeChildren[child.type] || [], [_extends({}, newChildProps, this.mapNestedChildrenToProps(child, nestedChildren))]), _extends2));
    };

    HelmetWrapper.prototype.mapObjectTypeChildren = function mapObjectTypeChildren(_ref2) {
      var _extends3, _extends4;

      var child = _ref2.child,
          newProps = _ref2.newProps,
          newChildProps = _ref2.newChildProps,
          nestedChildren = _ref2.nestedChildren;

      switch (child.type) {
        case _HelmetConstants.TAG_NAMES.TITLE:
          return _extends({}, newProps, (_extends3 = {}, _extends3[child.type] = nestedChildren, _extends3.titleAttributes = _extends({}, newChildProps), _extends3));

        case _HelmetConstants.TAG_NAMES.BODY:
          return _extends({}, newProps, {
            bodyAttributes: _extends({}, newChildProps)
          });

        case _HelmetConstants.TAG_NAMES.HTML:
          return _extends({}, newProps, {
            htmlAttributes: _extends({}, newChildProps)
          });
      }

      return _extends({}, newProps, (_extends4 = {}, _extends4[child.type] = _extends({}, newChildProps), _extends4));
    };

    HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
      var newFlattenedProps = _extends({}, newProps);

      Object.keys(arrayTypeChildren).forEach(function (arrayChildName) {
        var _extends5;

        newFlattenedProps = _extends({}, newFlattenedProps, (_extends5 = {}, _extends5[arrayChildName] = arrayTypeChildren[arrayChildName], _extends5));
      });
      return newFlattenedProps;
    };

    HelmetWrapper.prototype.warnOnInvalidChildren = function warnOnInvalidChildren(child, nestedChildren) {
      if (false) {}

      return true;
    };

    HelmetWrapper.prototype.mapChildrenToProps = function mapChildrenToProps(children, newProps) {
      var _this2 = this;

      var arrayTypeChildren = {};

      _react2.default.Children.forEach(children, function (child) {
        if (!child || !child.props) {
          return;
        }

        var _child$props = child.props,
            nestedChildren = _child$props.children,
            childProps = _objectWithoutProperties(_child$props, ["children"]);

        var newChildProps = (0, _HelmetUtils.convertReactPropstoHtmlAttributes)(childProps);

        _this2.warnOnInvalidChildren(child, nestedChildren);

        switch (child.type) {
          case _HelmetConstants.TAG_NAMES.LINK:
          case _HelmetConstants.TAG_NAMES.META:
          case _HelmetConstants.TAG_NAMES.NOSCRIPT:
          case _HelmetConstants.TAG_NAMES.SCRIPT:
          case _HelmetConstants.TAG_NAMES.STYLE:
            arrayTypeChildren = _this2.flattenArrayTypeChildren({
              child: child,
              arrayTypeChildren: arrayTypeChildren,
              newChildProps: newChildProps,
              nestedChildren: nestedChildren
            });
            break;

          default:
            newProps = _this2.mapObjectTypeChildren({
              child: child,
              newProps: newProps,
              newChildProps: newChildProps,
              nestedChildren: nestedChildren
            });
            break;
        }
      });

      newProps = this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
      return newProps;
    };

    HelmetWrapper.prototype.render = function render() {
      var _props = this.props,
          children = _props.children,
          props = _objectWithoutProperties(_props, ["children"]);

      var newProps = _extends({}, props);

      if (children) {
        newProps = this.mapChildrenToProps(children, newProps);
      }

      return _react2.default.createElement(Component, newProps);
    };

    _createClass(HelmetWrapper, null, [{
      key: "canUseDOM",
      // Component.peek comes from react-side-effect:
      // For testing, you may use a static peek() method available on the returned component.
      // It lets you get the current state without resetting the mounted instance stack.
      // Don’t use it for anything other than testing.

      /**
      * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
      * @param {Object} bodyAttributes: {"className": "root"}
      * @param {String} defaultTitle: "Default Title"
      * @param {Boolean} defer: true
      * @param {Boolean} encodeSpecialCharacters: true
      * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
      * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
      * @param {Array} meta: [{"name": "description", "content": "Test description"}]
      * @param {Array} noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
      * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
      * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
      * @param {Array} style: [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}]
      * @param {String} title: "Title"
      * @param {Object} titleAttributes: {"itemprop": "name"}
      * @param {String} titleTemplate: "MySite.com - %s"
      */
      set: function set(canUseDOM) {
        Component.canUseDOM = canUseDOM;
      }
    }]);

    return HelmetWrapper;
  }(_react2.default.Component), _class.propTypes = {
    base: _propTypes2.default.object,
    bodyAttributes: _propTypes2.default.object,
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
    defaultTitle: _propTypes2.default.string,
    defer: _propTypes2.default.bool,
    encodeSpecialCharacters: _propTypes2.default.bool,
    htmlAttributes: _propTypes2.default.object,
    link: _propTypes2.default.arrayOf(_propTypes2.default.object),
    meta: _propTypes2.default.arrayOf(_propTypes2.default.object),
    noscript: _propTypes2.default.arrayOf(_propTypes2.default.object),
    onChangeClientState: _propTypes2.default.func,
    script: _propTypes2.default.arrayOf(_propTypes2.default.object),
    style: _propTypes2.default.arrayOf(_propTypes2.default.object),
    title: _propTypes2.default.string,
    titleAttributes: _propTypes2.default.object,
    titleTemplate: _propTypes2.default.string
  }, _class.defaultProps = {
    defer: true,
    encodeSpecialCharacters: true
  }, _class.peek = Component.peek, _class.rewind = function () {
    var mappedState = Component.rewind();

    if (!mappedState) {
      // provide fallback if mappedState is undefined
      mappedState = (0, _HelmetUtils.mapStateOnServer)({
        baseTag: [],
        bodyAttributes: {},
        encodeSpecialCharacters: true,
        htmlAttributes: {},
        linkTags: [],
        metaTags: [],
        noscriptTags: [],
        scriptTags: [],
        styleTags: [],
        title: "",
        titleAttributes: {}
      });
    }

    return mappedState;
  }, _temp;
};

var NullComponent = function NullComponent() {
  return null;
};

var HelmetSideEffects = (0, _reactSideEffect2.default)(_HelmetUtils.reducePropsToState, _HelmetUtils.handleClientStateChange, _HelmetUtils.mapStateOnServer)(NullComponent);
var HelmetExport = Helmet(HelmetSideEffects);
HelmetExport.renderStatic = HelmetExport.rewind;
exports.Helmet = HelmetExport;
exports.default = HelmetExport;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(7);

function _interopDefault(ex) {
  return ex && _typeof(ex) === 'object' && 'default' in ex ? ex['default'] : ex;
}

var React = __webpack_require__(0);

var React__default = _interopDefault(React);

var ExecutionEnvironment = _interopDefault(__webpack_require__(56));

var shallowEqual = _interopDefault(__webpack_require__(57));

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
  if (typeof reducePropsToState !== 'function') {
    throw new Error('Expected reducePropsToState to be a function.');
  }

  if (typeof handleStateChangeOnClient !== 'function') {
    throw new Error('Expected handleStateChangeOnClient to be a function.');
  }

  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
  }

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return function wrap(WrappedComponent) {
    if (typeof WrappedComponent !== 'function') {
      throw new Error('Expected WrappedComponent to be a React component.');
    }

    var mountedInstances = [];
    var state = void 0;

    function emitChange() {
      state = reducePropsToState(mountedInstances.map(function (instance) {
        return instance.props;
      }));

      if (SideEffect.canUseDOM) {
        handleStateChangeOnClient(state);
      } else if (mapStateOnServer) {
        state = mapStateOnServer(state);
      }
    }

    var SideEffect = function (_Component) {
      _inherits(SideEffect, _Component);

      function SideEffect() {
        _classCallCheck(this, SideEffect);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
      } // Try to use displayName of wrapped component


      SideEffect.peek = function peek() {
        return state;
      }; // Expose canUseDOM so tests can monkeypatch it


      SideEffect.rewind = function rewind() {
        if (SideEffect.canUseDOM) {
          throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
        }

        var recordedState = state;
        state = undefined;
        mountedInstances = [];
        return recordedState;
      };

      SideEffect.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return !shallowEqual(nextProps, this.props);
      };

      SideEffect.prototype.componentWillMount = function componentWillMount() {
        mountedInstances.push(this);
        emitChange();
      };

      SideEffect.prototype.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };

      SideEffect.prototype.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };

      SideEffect.prototype.render = function render() {
        return React__default.createElement(WrappedComponent, this.props);
      };

      return SideEffect;
    }(React.Component);

    SideEffect.displayName = 'SideEffect(' + getDisplayName(WrappedComponent) + ')';
    SideEffect.canUseDOM = ExecutionEnvironment.canUseDOM;
    return SideEffect;
  };
}

module.exports = withSideEffect;

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("exenv");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("shallowequal");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("deep-equal");

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof2 = __webpack_require__(7);

exports.__esModule = true;
exports.warn = exports.requestAnimationFrame = exports.reducePropsToState = exports.mapStateOnServer = exports.handleClientStateChange = exports.convertReactPropstoHtmlAttributes = undefined;

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _objectAssign = __webpack_require__(60);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _HelmetConstants = __webpack_require__(29);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var encodeSpecialCharacters = function encodeSpecialCharacters(str) {
  var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (encode === false) {
    return String(str);
  }

  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};

var getTitleFromPropsList = function getTitleFromPropsList(propsList) {
  var innermostTitle = getInnermostProperty(propsList, _HelmetConstants.TAG_NAMES.TITLE);
  var innermostTemplate = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.TITLE_TEMPLATE);

  if (innermostTemplate && innermostTitle) {
    // use function arg to avoid need to escape $ characters
    return innermostTemplate.replace(/%s/g, function () {
      return innermostTitle;
    });
  }

  var innermostDefaultTitle = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFAULT_TITLE);
  return innermostTitle || innermostDefaultTitle || undefined;
};

var getOnChangeClientState = function getOnChangeClientState(propsList) {
  return getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};
};

var getAttributesFromPropsList = function getAttributesFromPropsList(tagType, propsList) {
  return propsList.filter(function (props) {
    return typeof props[tagType] !== "undefined";
  }).map(function (props) {
    return props[tagType];
  }).reduce(function (tagAttrs, current) {
    return _extends({}, tagAttrs, current);
  }, {});
};

var getBaseTagFromPropsList = function getBaseTagFromPropsList(primaryAttributes, propsList) {
  return propsList.filter(function (props) {
    return typeof props[_HelmetConstants.TAG_NAMES.BASE] !== "undefined";
  }).map(function (props) {
    return props[_HelmetConstants.TAG_NAMES.BASE];
  }).reverse().reduce(function (innermostBaseTag, tag) {
    if (!innermostBaseTag.length) {
      var keys = Object.keys(tag);

      for (var i = 0; i < keys.length; i++) {
        var attributeKey = keys[i];
        var lowerCaseAttributeKey = attributeKey.toLowerCase();

        if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
          return innermostBaseTag.concat(tag);
        }
      }
    }

    return innermostBaseTag;
  }, []);
};

var getTagsFromPropsList = function getTagsFromPropsList(tagName, primaryAttributes, propsList) {
  // Calculate list of tags, giving priority innermost component (end of the propslist)
  var approvedSeenTags = {};
  return propsList.filter(function (props) {
    if (Array.isArray(props[tagName])) {
      return true;
    }

    if (typeof props[tagName] !== "undefined") {
      warn("Helmet: " + tagName + " should be of type \"Array\". Instead found type \"" + _typeof(props[tagName]) + "\"");
    }

    return false;
  }).map(function (props) {
    return props[tagName];
  }).reverse().reduce(function (approvedTags, instanceTags) {
    var instanceSeenTags = {};
    instanceTags.filter(function (tag) {
      var primaryAttributeKey = void 0;
      var keys = Object.keys(tag);

      for (var i = 0; i < keys.length; i++) {
        var attributeKey = keys[i];
        var lowerCaseAttributeKey = attributeKey.toLowerCase(); // Special rule with link tags, since rel and href are both primary tags, rel takes priority

        if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
          primaryAttributeKey = lowerCaseAttributeKey;
        } // Special case for innerHTML which doesn't work lowercased


        if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attributeKey === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT || attributeKey === _HelmetConstants.TAG_PROPERTIES.ITEM_PROP)) {
          primaryAttributeKey = attributeKey;
        }
      }

      if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
        return false;
      }

      var value = tag[primaryAttributeKey].toLowerCase();

      if (!approvedSeenTags[primaryAttributeKey]) {
        approvedSeenTags[primaryAttributeKey] = {};
      }

      if (!instanceSeenTags[primaryAttributeKey]) {
        instanceSeenTags[primaryAttributeKey] = {};
      }

      if (!approvedSeenTags[primaryAttributeKey][value]) {
        instanceSeenTags[primaryAttributeKey][value] = true;
        return true;
      }

      return false;
    }).reverse().forEach(function (tag) {
      return approvedTags.push(tag);
    }); // Update seen tags with tags from this instance

    var keys = Object.keys(instanceSeenTags);

    for (var i = 0; i < keys.length; i++) {
      var attributeKey = keys[i];
      var tagUnion = (0, _objectAssign2.default)({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);
      approvedSeenTags[attributeKey] = tagUnion;
    }

    return approvedTags;
  }, []).reverse();
};

var getInnermostProperty = function getInnermostProperty(propsList, property) {
  for (var i = propsList.length - 1; i >= 0; i--) {
    var props = propsList[i];

    if (props.hasOwnProperty(property)) {
      return props[property];
    }
  }

  return null;
};

var reducePropsToState = function reducePropsToState(propsList) {
  return {
    baseTag: getBaseTagFromPropsList([_HelmetConstants.TAG_PROPERTIES.HREF], propsList),
    bodyAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.BODY, propsList),
    defer: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFER),
    encode: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
    htmlAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.HTML, propsList),
    linkTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.LINK, [_HelmetConstants.TAG_PROPERTIES.REL, _HelmetConstants.TAG_PROPERTIES.HREF], propsList),
    metaTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.META, [_HelmetConstants.TAG_PROPERTIES.NAME, _HelmetConstants.TAG_PROPERTIES.CHARSET, _HelmetConstants.TAG_PROPERTIES.HTTPEQUIV, _HelmetConstants.TAG_PROPERTIES.PROPERTY, _HelmetConstants.TAG_PROPERTIES.ITEM_PROP], propsList),
    noscriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.NOSCRIPT, [_HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
    onChangeClientState: getOnChangeClientState(propsList),
    scriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.SCRIPT, [_HelmetConstants.TAG_PROPERTIES.SRC, _HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
    styleTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.STYLE, [_HelmetConstants.TAG_PROPERTIES.CSS_TEXT], propsList),
    title: getTitleFromPropsList(propsList),
    titleAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.TITLE, propsList)
  };
};

var rafPolyfill = function () {
  var clock = Date.now();
  return function (callback) {
    var currentTime = Date.now();

    if (currentTime - clock > 16) {
      clock = currentTime;
      callback(currentTime);
    } else {
      setTimeout(function () {
        rafPolyfill(callback);
      }, 0);
    }
  };
}();

var cafPolyfill = function cafPolyfill(id) {
  return clearTimeout(id);
};

var requestAnimationFrame = typeof window !== "undefined" ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || rafPolyfill : global.requestAnimationFrame || rafPolyfill;
var cancelAnimationFrame = typeof window !== "undefined" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || cafPolyfill : global.cancelAnimationFrame || cafPolyfill;

var warn = function warn(msg) {
  return console && typeof console.warn === "function" && console.warn(msg);
};

var _helmetCallback = null;

var handleClientStateChange = function handleClientStateChange(newState) {
  if (_helmetCallback) {
    cancelAnimationFrame(_helmetCallback);
  }

  if (newState.defer) {
    _helmetCallback = requestAnimationFrame(function () {
      commitTagChanges(newState, function () {
        _helmetCallback = null;
      });
    });
  } else {
    commitTagChanges(newState);
    _helmetCallback = null;
  }
};

var commitTagChanges = function commitTagChanges(newState, cb) {
  var baseTag = newState.baseTag,
      bodyAttributes = newState.bodyAttributes,
      htmlAttributes = newState.htmlAttributes,
      linkTags = newState.linkTags,
      metaTags = newState.metaTags,
      noscriptTags = newState.noscriptTags,
      onChangeClientState = newState.onChangeClientState,
      scriptTags = newState.scriptTags,
      styleTags = newState.styleTags,
      title = newState.title,
      titleAttributes = newState.titleAttributes;
  updateAttributes(_HelmetConstants.TAG_NAMES.BODY, bodyAttributes);
  updateAttributes(_HelmetConstants.TAG_NAMES.HTML, htmlAttributes);
  updateTitle(title, titleAttributes);
  var tagUpdates = {
    baseTag: updateTags(_HelmetConstants.TAG_NAMES.BASE, baseTag),
    linkTags: updateTags(_HelmetConstants.TAG_NAMES.LINK, linkTags),
    metaTags: updateTags(_HelmetConstants.TAG_NAMES.META, metaTags),
    noscriptTags: updateTags(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags),
    scriptTags: updateTags(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags),
    styleTags: updateTags(_HelmetConstants.TAG_NAMES.STYLE, styleTags)
  };
  var addedTags = {};
  var removedTags = {};
  Object.keys(tagUpdates).forEach(function (tagType) {
    var _tagUpdates$tagType = tagUpdates[tagType],
        newTags = _tagUpdates$tagType.newTags,
        oldTags = _tagUpdates$tagType.oldTags;

    if (newTags.length) {
      addedTags[tagType] = newTags;
    }

    if (oldTags.length) {
      removedTags[tagType] = tagUpdates[tagType].oldTags;
    }
  });
  cb && cb();
  onChangeClientState(newState, addedTags, removedTags);
};

var flattenArray = function flattenArray(possibleArray) {
  return Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
};

var updateTitle = function updateTitle(title, attributes) {
  if (typeof title !== "undefined" && document.title !== title) {
    document.title = flattenArray(title);
  }

  updateAttributes(_HelmetConstants.TAG_NAMES.TITLE, attributes);
};

var updateAttributes = function updateAttributes(tagName, attributes) {
  var elementTag = document.getElementsByTagName(tagName)[0];

  if (!elementTag) {
    return;
  }

  var helmetAttributeString = elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
  var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
  var attributesToRemove = [].concat(helmetAttributes);
  var attributeKeys = Object.keys(attributes);

  for (var i = 0; i < attributeKeys.length; i++) {
    var attribute = attributeKeys[i];
    var value = attributes[attribute] || "";

    if (elementTag.getAttribute(attribute) !== value) {
      elementTag.setAttribute(attribute, value);
    }

    if (helmetAttributes.indexOf(attribute) === -1) {
      helmetAttributes.push(attribute);
    }

    var indexToSave = attributesToRemove.indexOf(attribute);

    if (indexToSave !== -1) {
      attributesToRemove.splice(indexToSave, 1);
    }
  }

  for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {
    elementTag.removeAttribute(attributesToRemove[_i]);
  }

  if (helmetAttributes.length === attributesToRemove.length) {
    elementTag.removeAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
  } else if (elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
    elementTag.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, attributeKeys.join(","));
  }
};

var updateTags = function updateTags(type, tags) {
  var headElement = document.head || document.querySelector(_HelmetConstants.TAG_NAMES.HEAD);
  var tagNodes = headElement.querySelectorAll(type + "[" + _HelmetConstants.HELMET_ATTRIBUTE + "]");
  var oldTags = Array.prototype.slice.call(tagNodes);
  var newTags = [];
  var indexToDelete = void 0;

  if (tags && tags.length) {
    tags.forEach(function (tag) {
      var newElement = document.createElement(type);

      for (var attribute in tag) {
        if (tag.hasOwnProperty(attribute)) {
          if (attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML) {
            newElement.innerHTML = tag.innerHTML;
          } else if (attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
            if (newElement.styleSheet) {
              newElement.styleSheet.cssText = tag.cssText;
            } else {
              newElement.appendChild(document.createTextNode(tag.cssText));
            }
          } else {
            var value = typeof tag[attribute] === "undefined" ? "" : tag[attribute];
            newElement.setAttribute(attribute, value);
          }
        }
      }

      newElement.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, "true"); // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.

      if (oldTags.some(function (existingTag, index) {
        indexToDelete = index;
        return newElement.isEqualNode(existingTag);
      })) {
        oldTags.splice(indexToDelete, 1);
      } else {
        newTags.push(newElement);
      }
    });
  }

  oldTags.forEach(function (tag) {
    return tag.parentNode.removeChild(tag);
  });
  newTags.forEach(function (tag) {
    return headElement.appendChild(tag);
  });
  return {
    oldTags: oldTags,
    newTags: newTags
  };
};

var generateElementAttributesAsString = function generateElementAttributesAsString(attributes) {
  return Object.keys(attributes).reduce(function (str, key) {
    var attr = typeof attributes[key] !== "undefined" ? key + "=\"" + attributes[key] + "\"" : "" + key;
    return str ? str + " " + attr : attr;
  }, "");
};

var generateTitleAsString = function generateTitleAsString(type, title, attributes, encode) {
  var attributeString = generateElementAttributesAsString(attributes);
  var flattenedTitle = flattenArray(title);
  return attributeString ? "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeString + ">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">" : "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">";
};

var generateTagsAsString = function generateTagsAsString(type, tags, encode) {
  return tags.reduce(function (str, tag) {
    var attributeHtml = Object.keys(tag).filter(function (attribute) {
      return !(attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT);
    }).reduce(function (string, attribute) {
      var attr = typeof tag[attribute] === "undefined" ? attribute : attribute + "=\"" + encodeSpecialCharacters(tag[attribute], encode) + "\"";
      return string ? string + " " + attr : attr;
    }, "");
    var tagContent = tag.innerHTML || tag.cssText || "";
    var isSelfClosing = _HelmetConstants.SELF_CLOSING_TAGS.indexOf(type) === -1;
    return str + "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeHtml + (isSelfClosing ? "/>" : ">" + tagContent + "</" + type + ">");
  }, "");
};

var convertElementAttributestoReactProps = function convertElementAttributestoReactProps(attributes) {
  var initProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object.keys(attributes).reduce(function (obj, key) {
    obj[_HelmetConstants.REACT_TAG_MAP[key] || key] = attributes[key];
    return obj;
  }, initProps);
};

var convertReactPropstoHtmlAttributes = function convertReactPropstoHtmlAttributes(props) {
  var initAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object.keys(props).reduce(function (obj, key) {
    obj[_HelmetConstants.HTML_TAG_MAP[key] || key] = props[key];
    return obj;
  }, initAttributes);
};

var generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title, attributes) {
  var _initProps; // assigning into an array to define toString function on it


  var initProps = (_initProps = {
    key: title
  }, _initProps[_HelmetConstants.HELMET_ATTRIBUTE] = true, _initProps);
  var props = convertElementAttributestoReactProps(attributes, initProps);
  return [_react2.default.createElement(_HelmetConstants.TAG_NAMES.TITLE, props, title)];
};

var generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {
  return tags.map(function (tag, i) {
    var _mappedTag;

    var mappedTag = (_mappedTag = {
      key: i
    }, _mappedTag[_HelmetConstants.HELMET_ATTRIBUTE] = true, _mappedTag);
    Object.keys(tag).forEach(function (attribute) {
      var mappedAttribute = _HelmetConstants.REACT_TAG_MAP[attribute] || attribute;

      if (mappedAttribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || mappedAttribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
        var content = tag.innerHTML || tag.cssText;
        mappedTag.dangerouslySetInnerHTML = {
          __html: content
        };
      } else {
        mappedTag[mappedAttribute] = tag[attribute];
      }
    });
    return _react2.default.createElement(type, mappedTag);
  });
};

var getMethodsForTag = function getMethodsForTag(type, tags, encode) {
  switch (type) {
    case _HelmetConstants.TAG_NAMES.TITLE:
      return {
        toComponent: function toComponent() {
          return generateTitleAsReactComponent(type, tags.title, tags.titleAttributes, encode);
        },
        toString: function toString() {
          return generateTitleAsString(type, tags.title, tags.titleAttributes, encode);
        }
      };

    case _HelmetConstants.ATTRIBUTE_NAMES.BODY:
    case _HelmetConstants.ATTRIBUTE_NAMES.HTML:
      return {
        toComponent: function toComponent() {
          return convertElementAttributestoReactProps(tags);
        },
        toString: function toString() {
          return generateElementAttributesAsString(tags);
        }
      };

    default:
      return {
        toComponent: function toComponent() {
          return generateTagsAsReactComponent(type, tags);
        },
        toString: function toString() {
          return generateTagsAsString(type, tags, encode);
        }
      };
  }
};

var mapStateOnServer = function mapStateOnServer(_ref) {
  var baseTag = _ref.baseTag,
      bodyAttributes = _ref.bodyAttributes,
      encode = _ref.encode,
      htmlAttributes = _ref.htmlAttributes,
      linkTags = _ref.linkTags,
      metaTags = _ref.metaTags,
      noscriptTags = _ref.noscriptTags,
      scriptTags = _ref.scriptTags,
      styleTags = _ref.styleTags,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? "" : _ref$title,
      titleAttributes = _ref.titleAttributes;
  return {
    base: getMethodsForTag(_HelmetConstants.TAG_NAMES.BASE, baseTag, encode),
    bodyAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.BODY, bodyAttributes, encode),
    htmlAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.HTML, htmlAttributes, encode),
    link: getMethodsForTag(_HelmetConstants.TAG_NAMES.LINK, linkTags, encode),
    meta: getMethodsForTag(_HelmetConstants.TAG_NAMES.META, metaTags, encode),
    noscript: getMethodsForTag(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags, encode),
    script: getMethodsForTag(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags, encode),
    style: getMethodsForTag(_HelmetConstants.TAG_NAMES.STYLE, styleTags, encode),
    title: getMethodsForTag(_HelmetConstants.TAG_NAMES.TITLE, {
      title: title,
      titleAttributes: titleAttributes
    }, encode)
  };
};

exports.convertReactPropstoHtmlAttributes = convertReactPropstoHtmlAttributes;
exports.handleClientStateChange = handleClientStateChange;
exports.mapStateOnServer = mapStateOnServer;
exports.reducePropsToState = reducePropsToState;
exports.requestAnimationFrame = requestAnimationFrame;
exports.warn = warn;

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("object-assign");

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(7);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withRouteData = withRouteData;
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(10));

var _react = _interopRequireDefault(__webpack_require__(0));

var _ = __webpack_require__(11);

var _Spinner = _interopRequireDefault(__webpack_require__(22));

var _StaticInfo = __webpack_require__(16);

var _Routes = __webpack_require__(32);

var _class,
    _temp,
    _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var instances = [];

global.reloadAll = function () {
  instances.forEach(function (instance) {
    return instance.safeForceUpdate();
  });
};

var RouteData = (0, _StaticInfo.withStaticInfo)((0, _Routes.withRoutePathContext)((_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RouteData, _React$Component);

  function RouteData() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RouteData);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RouteData)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "safeForceUpdate", function () {
      if (_this.unmounted) {
        return;
      }

      _this.forceUpdate();
    });

    return _this;
  }

  _createClass(RouteData, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      instances.push(this);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this2 = this;

      instances = instances.filter(function (d) {
        return d !== _this2;
      });
      this.unmounted = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          children = _this$props.children,
          Loader = _this$props.Loader,
          routePath = _this$props.routePath;
      var routeError = _.routeErrorByPath[routePath];
      var routeInfo = routeError ? _.routeInfoByPath['404'] : _.routeInfoByPath[routePath]; // If there was an error reported for this path, throw an error
      // unless there is data for the 404 page

      if (routeError && (!routeInfo || !routeInfo.data)) {
        throw new Error("React-Static: <RouteData> could not find any data for this route: ".concat(routePath, ". If this is a dynamic route, please remove any reliance on RouteData or withRouteData from this routes components"));
      } // If we haven't requested the routeInfo and its shared data yet, or it's loading
      // Show a spinner and prefetch the data
      // TODO:suspense - This will become a suspense resource


      if (shouldLoadData(routeInfo)) {
        ;

        _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee() {
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return Promise.all([(0, _.prefetch)(routePath, {
                    priority: true
                  }), new Promise(function (resolve) {
                    return setTimeout(resolve, "200");
                  })]);

                case 2:
                  _this3.safeForceUpdate();

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }))();

        return _react.default.createElement(Loader, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        });
      } // Otherwise, get it from the routeInfoByPath (subsequent client side)
      // and merge it with the shared data


      var fullData = _objectSpread({}, routeInfo.data, routeInfo.sharedData);

      return children(fullData);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return RouteData;
}(_react.default.Component), _defineProperty(_class, "defaultProps", {
  Loader: _Spinner.default
}), _temp)));

function shouldLoadData(routeInfo) {
  if (!routeInfo || !routeInfo.data) {
    return true;
  }

  return shouldLoadSharedData(routeInfo);
}

function shouldLoadSharedData(routeInfo) {
  return hasPropHashes(routeInfo) && !routeInfo.sharedData;
}

function hasPropHashes(routeInfo) {
  return routeInfo.sharedHashesByProp && Object.keys(routeInfo.sharedHashesByProp).length > 0;
}

var _default = RouteData;
var _default2 = _default;
exports.default = _default2;

function withRouteData(Comp) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (props) {
    return _react.default.createElement(RouteData, _extends({}, opts, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }), function (routeData) {
      return _react.default.createElement(Comp, _extends({}, routeData, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }));
    });
  };
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(instances, "instances", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  reactHotLoader.register(RouteData, "RouteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  reactHotLoader.register(shouldLoadData, "shouldLoadData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  reactHotLoader.register(shouldLoadSharedData, "shouldLoadSharedData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  reactHotLoader.register(hasPropHashes, "hasPropHashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  reactHotLoader.register(withRouteData, "withRouteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(7);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withSiteData = withSiteData;
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(10));

var _react = _interopRequireDefault(__webpack_require__(0));

var _axios = _interopRequireDefault(__webpack_require__(18));

var _Spinner = _interopRequireDefault(__webpack_require__(22));

var _StaticInfo = __webpack_require__(16);

var _class,
    _temp,
    _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/SiteData.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
} // Share a single promise for all siteData requests


var siteDataPromise;
var SiteData = (0, _StaticInfo.withStaticInfo)((_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SiteData, _React$Component);

  function SiteData(props) {
    var _this;

    _classCallCheck(this, SiteData);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SiteData).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "safeSetState", function () {
      var _this2;

      if (_this.unmounted) {
        return;
      }

      (_this2 = _this).setState.apply(_this2, arguments);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "fetchSiteData",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      var _ref2, siteData;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (true) {
                _context.next = 6;
                break;
              }

              _context.next = 3;
              return function () {
                if (siteDataPromise) {
                  return siteDataPromise;
                }

                siteDataPromise = _axios.default.get('/__react-static__/siteData');
                return siteDataPromise;
              }();

            case 3:
              _ref2 = _context.sent;
              siteData = _ref2.data;

              _this.safeSetState({
                siteData: siteData
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    var staticInfo = _this.props.staticInfo;
    _this.state = {
      // Default siteData to use the staticInfo if possible
      // This will be undefined in development, which will
      // then be requested at runtime.
      siteData: staticInfo ? staticInfo.siteData : null
    };
    return _this;
  }

  _createClass(SiteData, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchSiteData();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unmounted = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          Loader = _this$props.Loader;
      var _this$state = this.state,
          siteData = _this$state.siteData,
          siteDataError = _this$state.siteDataError; // If there was a fetch error in dev, throw it to the nearest ErrorBoundary

      if (siteDataError) {
        throw siteDataError;
      }

      if (!siteData) {
        return _react.default.createElement(Loader, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        });
      }

      return children(siteData);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return SiteData;
}(_react.default.Component), _defineProperty(_class, "defaultProps", {
  Loader: _Spinner.default
}), _temp));
var _default = SiteData;
var _default2 = _default;
exports.default = _default2;

function withSiteData(Comp) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (props) {
    return _react.default.createElement(SiteData, _extends({}, opts, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }), function (siteData) {
      return _react.default.createElement(Comp, _extends({}, siteData, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }));
    });
  };
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(siteDataPromise, "siteDataPromise", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/SiteData.js");
  reactHotLoader.register(SiteData, "SiteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/SiteData.js");
  reactHotLoader.register(withSiteData, "withSiteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/SiteData.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/SiteData.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(7);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(10));

var _react = _interopRequireDefault(__webpack_require__(0));

var _utils = __webpack_require__(13);

var _ = __webpack_require__(11);

var _Visibility = _interopRequireDefault(__webpack_require__(27));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Prefetch.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var Prefetch =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Prefetch, _React$Component);

  function Prefetch() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Prefetch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Prefetch)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "runPrefetch", function () {
      return _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        var _this$props, path, onLoad, cleanedPath, data;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = _this.props, path = _this$props.path, onLoad = _this$props.onLoad;
                cleanedPath = (0, _utils.getRoutePath)(path);
                _context.next = 4;
                return (0, _.prefetch)(cleanedPath);

              case 4:
                data = _context.sent;
                onLoad(data, cleanedPath);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }))();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleRef", function (el) {
      if (!_this.props.force && el) {
        (0, _Visibility.default)(el, _this.runPrefetch);
      }
    });

    return _this;
  }

  _createClass(Prefetch, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.force) {
        this.runPrefetch();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          rest = _objectWithoutProperties(_this$props2, ["children"]);

      if (children) {
        return children({
          handleRef: this.handleRef
        });
      }

      return _react.default.createElement("div", _extends({
        ref: this.handleRef
      }, rest, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), children);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Prefetch;
}(_react.default.Component);

exports.default = Prefetch;

_defineProperty(Prefetch, "defaultProps", {
  children: null,
  path: null,
  force: false,
  onLoad: function onLoad() {}
});

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Prefetch, "Prefetch", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Prefetch.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(7);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _router = __webpack_require__(2);

var _ = __webpack_require__(11);

var _utils = __webpack_require__(13);

var _ErrorBoundary = _interopRequireDefault(__webpack_require__(65));

var _HashScroller = _interopRequireDefault(__webpack_require__(66));

var _StaticInfo = __webpack_require__(16);

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js",
    _class,
    _temp;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var DefaultPath = function DefaultPath(_ref) {
  var render = _ref.render;
  return render;
};

var DefaultRouter = function DefaultRouter(_ref2) {
  var children = _ref2.children,
      basepath = _ref2.basepath,
      staticInfo = _ref2.staticInfo;
  children = _react.default.createElement(_router.Router, {
    basepath: basepath,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, _react.default.createElement(DefaultPath, {
    default: true,
    render: children,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }));
  return typeof document === 'undefined' ? _react.default.createElement(_router.ServerLocation, {
    url: (0, _utils.makePathAbsolute)(staticInfo.path),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, children) : children;
};

var RouterHook = (0, _utils.makeHookReducer)(_.plugins, 'Router', {
  sync: true
});
var ResolvedRouter = RouterHook(DefaultRouter);
var Root = (0, _StaticInfo.withStaticInfo)((_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Root, _React$Component);

  function Root(props) {
    var _this;

    _classCallCheck(this, Root);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Root).call(this));
    var staticInfo = props.staticInfo;

    if ( true && staticInfo) {
      var path = staticInfo.path,
          sharedData = staticInfo.sharedData,
          sharedHashesByProp = staticInfo.sharedHashesByProp,
          template = staticInfo.template; // Hydrate routeInfoByPath with the embedded routeInfo

      _.routeInfoByPath[path] = staticInfo; // Hydrate sharedDataByHash with the embedded routeInfo

      Object.keys(sharedHashesByProp).forEach(function (propKey) {
        _.sharedDataByHash[sharedHashesByProp[propKey]] = sharedData[propKey];
      }); // In SRR and production, synchronously register the template for the
      // initial path

      (0, _.registerTemplateForPath)(path, template); // For a 404 route we will register the current route as invalid

      if (path === '404') {
        var currentPath = (0, _.getCurrentRoutePath)(); // As long as we didn't navigate to the 404.html page directly

        if (currentPath !== '404') {
          _.routeErrorByPath[currentPath] = true;
          _.templateErrorByPath[currentPath] = true;
        }
      }
    }

    return _this;
  }

  _createClass(Root, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          disableScroller = _this$props.disableScroller,
          autoScrollToTop = _this$props.autoScrollToTop,
          autoScrollToHash = _this$props.autoScrollToHash,
          scrollToTopDuration = _this$props.scrollToTopDuration,
          scrollToHashDuration = _this$props.scrollToHashDuration,
          scrollToHashOffset = _this$props.scrollToHashOffset,
          staticInfo = _this$props.staticInfo;
      var scrollerProps = {
        autoScrollToTop: autoScrollToTop,
        autoScrollToHash: autoScrollToHash,
        scrollToTopDuration: scrollToTopDuration,
        scrollToHashDuration: scrollToHashDuration,
        scrollToHashOffset: scrollToHashOffset
      };

      var Wrapper = function Wrapper(_ref3) {
        var children = _ref3.children;
        return children;
      };

      var basepath = (0, _utils.getBasePath)(); // Add the scroller if not disabled

      if (!disableScroller) {
        Wrapper = function Wrapper(_ref4) {
          var children = _ref4.children;
          return _react.default.createElement(_HashScroller.default, _extends({}, scrollerProps, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 104
            },
            __self: this
          }), children);
        };
      }

      return _react.default.createElement(_ErrorBoundary.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, _react.default.createElement(Wrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, _react.default.createElement(ResolvedRouter, {
        basepath: basepath,
        staticInfo: staticInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, children)));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Root;
}(_react.default.Component), _defineProperty(_class, "defaultProps", {
  disableScroller: false,
  // TODO:v6 document this!
  autoScrollToTop: true,
  autoScrollToHash: true,
  scrollToTopDuration: 0,
  scrollToHashDuration: 800,
  scrollToHashOffset: 0
}), _temp));
var _default = Root;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DefaultPath, "DefaultPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  reactHotLoader.register(DefaultRouter, "DefaultRouter", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  reactHotLoader.register(RouterHook, "RouterHook", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  reactHotLoader.register(ResolvedRouter, "ResolvedRouter", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  reactHotLoader.register(Root, "Root", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(7);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _utils = __webpack_require__(13);

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/ErrorBoundary.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var ErrorBoundary =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);

  function ErrorBoundary() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ErrorBoundary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ErrorBoundary)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      error: false
    });

    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error) {
      if (typeof document === 'undefined') {
        throw error;
      }

      this.setState({
        error: error
      });
    }
  }, {
    key: "render",
    value: function render() {
      var error = this.state.error;

      if (error) {
        return _react.default.createElement("div", {
          style: {
            margin: '1rem',
            padding: '1rem',
            background: 'rgba(0,0,0,0.05)'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, _react.default.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, "Oh-no! Something\u2019s gone wrong!"), _react.default.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }), _react.default.createElement("button", {
          size: "s",
          onClick: function onClick() {
            return window.location.reload();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, "Reload"));
      }

      return (0, _utils.unwrapArray)(this.props.children);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return ErrorBoundary;
}(_react.default.Component);

exports.default = ErrorBoundary;
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ErrorBoundary, "ErrorBoundary", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/ErrorBoundary.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(7);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _raf = _interopRequireDefault(__webpack_require__(31));

var _Location = _interopRequireDefault(__webpack_require__(33));

var _scrollTo = _interopRequireDefault(__webpack_require__(30));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var RouterScroller =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RouterScroller, _React$Component);

  function RouterScroller() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RouterScroller);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RouterScroller)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollToTop", function () {
      var _this$props = _this.props,
          autoScrollToTop = _this$props.autoScrollToTop,
          scrollToTopDuration = _this$props.scrollToTopDuration;

      if (autoScrollToTop) {
        (0, _scrollTo.default)(0, {
          duration: scrollToTopDuration
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollToHash", function (hash) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$orScrollToTop = _ref.orScrollToTop,
          orScrollToTop = _ref$orScrollToTop === void 0 ? true : _ref$orScrollToTop;

      var _this$props2 = _this.props,
          scrollToHashDuration = _this$props2.scrollToHashDuration,
          autoScrollToHash = _this$props2.autoScrollToHash,
          scrollToHashOffset = _this$props2.scrollToHashOffset;

      if (!autoScrollToHash) {
        return;
      }

      if (hash) {
        var resolvedHash = hash.substring(1);

        if (resolvedHash) {
          // We must attempt to scroll synchronously or we risk the browser scrolling for us
          var element = document.getElementById(resolvedHash);

          if (element !== null) {
            (0, _scrollTo.default)(element, {
              duration: scrollToHashDuration,
              offset: scrollToHashOffset
            });
          } else {
            (0, _raf.default)(function () {
              var element = document.getElementById(resolvedHash);

              if (element !== null) {
                (0, _scrollTo.default)(element, {
                  duration: scrollToHashDuration,
                  offset: scrollToHashOffset
                });
              }
            });
          }
        }
      } else if (orScrollToTop) {
        (0, _scrollTo.default)(0, {
          duration: scrollToHashDuration
        });
      }
    });

    return _this;
  }

  _createClass(RouterScroller, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this; // Do not scroll to top on initial page load if hash does not exist


      this.scrollToHash(window.location.hash, {
        orScrollToTop: false
      });
      (0, _Location.default)(function (_ref2) {
        var hash = _ref2.hash,
            pathname = _ref2.pathname;

        if (_this2.prevPathname !== pathname && !hash) {
          _this2.scrollToTop();
        } else if (_this2.prevHash !== hash) {
          _this2.scrollToHash(hash);
        }

        _this2.prevPathname = pathname;
        _this2.prevHash = hash;
      });
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return RouterScroller;
}(_react.default.Component);

exports.default = RouterScroller;
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RouterScroller, "RouterScroller", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/HashScroller.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// Module
exports.push([module.i, "/* Extra small devices (portrait phones, less than 576px) */\n#logo {\n  width: 75px;\n}\n\n.nav-link i {\n  font-size: 1.1em;\n}\n.nav-link,.nav-link:hover, .nav-link:visited   {\n  color:#CBB079;\n}\n\n.dropdown-toggle::after {\n  display: none;\n}", ""]);



/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// Module
exports.push([module.i, ".footer-basic {\n  padding:40px 0;\n  background-color:#ffffff;\n  color:#4b4c4d;\n}\n\n.footer-basic ul {\n  padding:0;\n  list-style:none;\n  text-align:center;\n  font-size:18px;\n  line-height:1.6;\n  margin-bottom:0;\n}\n\n.footer-basic li {\n  padding:0 10px;\n}\n\n.footer-basic ul a {\n  color:inherit;\n  text-decoration:none;\n  opacity:0.8;\n}\n\n.footer-basic ul a:hover {\n  opacity:1;\n}\n\n.footer-basic .social {\n  text-align:center;\n  padding-bottom:25px;\n}\n\n.footer-basic .social > a {\n  font-size:24px;\n  width:50px;\n  height:50px;\n  line-height:50px;\n  display:inline-block;\n  text-align:center;\n  margin:0 8px;\n  color:inherit;\n  opacity:0.75;\n}\n\n.footer-basic .social > a:hover {\n  opacity:0.9;\n}\n\n.footer-basic .copyright {\n  margin-top:15px;\n  text-align:center;\n  font-size:13px;\n  color:#aaa;\n  margin-bottom:0;\n}\n\n", ""]);



/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=EB+Garamond);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Tangerine);", ""]);

// Module
exports.push([module.i, "/* Extra small devices (portrait phones, less than 576px) */\n\n  body {\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    color: #3d3d3d;\n    font-size: 14px;\n    background-color: #f1f2f6;\n  }\n  \n  .content {\n    max-width: 1699px;\n    margin: auto;\n  }\n\n  .responsive-widths {\n    max-width:960px;\n    margin: 0 auto;\n  }\n\n  .ornamentalBorder {\n    width: 250px;\n    margin: 0 auto;\n    padding: 15px;\n    opacity: 1;\n    text-align: center;\n    content: url('https://res.cloudinary.com/stmi/image/upload/v1557216130/eldonresort/border_b9t8f2.png')\n  }\n\n  #banner div {\n    min-height: 55vw;\n  }\n\n  #banner2 {\n    background-color: #066885;\n  }\n\n  #banner2 h4 {\n    color: #f7f1e3;\n    font-family: 'Garamond', serif;\n    font-size: 3em;\n  }\n\n  #banner2 p {\n    font-size: 1.3em;\n    color: #f7f1e3;\n    margin: 0;\n  }\n\n  .section {\n    margin: 2rem 0;\n  }\n\n  .section .header {\n    font-family: 'Garamond', serif;\n    text-align: center;\n    color:rgba(204, 174, 98,1.0);\n    font-size: 2em;\n    padding: 10px;\n    margin: 0;\n  }\n\n  .packages {\n    padding: 10px;\n  }\n\n  .package {\n    border-radius: 2px;\n    background-color: white;\n    margin-bottom: 25px;\n  }\n\n  .package .package-info {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    text-align: justify;\n    -ms-flex-pack: center;\n        justify-content: center;\n    padding: 1rem;\n    height: 240px;\n  }\n\n  .package div h3 {\n    text-align: center;  \n    color:rgba(204, 174, 98,1.0);\n    font-size: 24px;\n  }\n\n  .accommodation {\n    padding: 10px;\n  }\n\n  .rooms {\n    margin: 0 auto;\n  }\n\n  .rooms h3 {\n    text-align: center;  \n    color:rgba(204, 174, 98,1.0);\n    font-size: 2em;\n    padding: 0;\n    margin: 0;\n  }\n\n  .rooms p {\n    text-align: center;\n  }\n\n  .room div {\n    padding: 1rem;\n  }\n\n  .room {\n    background-color: white;\n    border-radius: 4px;\n    margin-bottom: 25px;\n  }\n\n  .room .room-info {\n    height: 270px;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n  }\n\n  .room .room-view {\n    font-size: 14px;\n    text-align: center;\n  }\n\n  .room a,\n  .package-info a {\n    display: inline-block;\n    text-align: center;\n    width: 100%;\n    color: gray;\n  }\n\n  .amenity {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 5px;\n  }\n\n  #at-the-resort-description,\n  #resort-direction {\n    padding: 15px;\n  }\n\n  .directions p, \n  .amenities p, \n  .accommodation p {\n    text-align: justify;\n  }\n\n  #rooms-description {\n    text-align: justify;\n  }\n\n  .footer-basic {\n    background-color: #4b4b4b;\n  }\n\n  .footer-basic ul a {\n    color: white;\n    padding: 5px;\n  }\n\n/* Small devices (landscape phones, 576px and up) */\n@media (min-width: 576px) { \n  #banner h2 {\n    font-size: 4em;\n  }\n\n  .rooms {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 25px;\n  }\n\n}\n \n/* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */\n@media (min-width: 768px) {  \n\n}\n \n/* Large devices (desktops, 992px and up) */\n@media (min-width: 992px) { \n  #banner h2 {\n    font-size: 8em;\n  }  \n\n  .directions p,\n  .amenities p,\n  .accommodation p {\n    font-size: 16px;\n    text-align: justify;\n  }\n\n \n\n  .packages {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-gap: 25px;\n    grid-auto-rows: 1fr;\n  }\n}\n \n/* Extra large devices (large desktops, 1200px and up) */\n@media (min-width: 1200px) {  \n}", ""]);



/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// Module
exports.push([module.i, "/* Extra small devices (portrait phones, less than 576px) */\n\n.slide {\n  margin-bottom: 10px;\n}\n\n.slide div:nth-child(odd) {\n  padding-top: 75%;\n}\n\n.slide div:nth-child(even) {\n  background-color: white;\n}\n\n.slide div:nth-child(odd) {\n  background-color: wheat;\n  padding-top: 75%;\n}\n\n.slide div:nth-child(even) {\n  background-color: white;\n}\n\n.slick-slide {\n  font-size: .85em;\n  padding: 3px;\n}\n\n/* Small devices (landscape phones, 576px and up) */\n@media (min-width: 576px) { \n  .slide {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 5px 5px;\n    width: 100%;\n  }\n  \n  .slide:nth-child(even) {\n    direction: rtl;\n  }\n}\n\n/* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */\n@media (min-width: 768px) { \n \n}\n\n/* Large devices (desktops, 992px and up) */\n@media (min-width: 992px) { \n \n}\n\n/* Extra large devices (large desktops, 1200px and up) */\n@media (min-width: 1200px) {  \n}", ""]);



/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(23);
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// EXTERNAL MODULE: ../lib/index.js
var lib = __webpack_require__(12);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(2);

// EXTERNAL MODULE: external "react-responsive"
var external_react_responsive_ = __webpack_require__(24);
var external_react_responsive_default = /*#__PURE__*/__webpack_require__.n(external_react_responsive_);

// EXTERNAL MODULE: /Users/t0mclaudio/Projects/ElDonResort/site/src/assets/logo.png
var logo = __webpack_require__(25);
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);

// EXTERNAL MODULE: /Users/t0mclaudio/Projects/ElDonResort/site/src/modules/nav/nav.css
var nav = __webpack_require__(67);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(6);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: /Users/t0mclaudio/Projects/ElDonResort/site/src/modules/nav/NavStyle.js
function _templateObject3(){var data=_taggedTemplateLiteral(["\n    background-color: white;\n    padding: 15px;\n"]);_templateObject3=function _templateObject3(){return data;};return data;}function _templateObject2(){var data=_taggedTemplateLiteral(["\n    display: grid;\n    grid-template-columns: repeat(7,1fr);\n    text-align: center;\n    justify-content: center;\n\n    a {\n        border-right: 1px dotted silver;\n        color: #066885;\n        font-size: 14px;\n        padding: 10px;\n    }\n\n    a:hover {\n        background-color: #f7f1e3;\n        text-decoration:none;\n    }\n\n    a:last-child {\n        border-right: none;\n    }\n"]);_templateObject2=function _templateObject2(){return data;};return data;}function _templateObject(){var data=_taggedTemplateLiteral(["\n    display: block;\n    margin: 0 auto;\n    width: 75px;\n    padding: 5px;\n"]);_templateObject=function _templateObject(){return data;};return data;}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var NavLogo=external_styled_components_default.a.img(_templateObject());var NavGrid=external_styled_components_default.a.div(_templateObject2());var NavWrapper=external_styled_components_default.a.nav(_templateObject3());
// CONCATENATED MODULE: /Users/t0mclaudio/Projects/ElDonResort/site/src/modules/nav/nav.js
function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}var nav_Mobile=function Mobile(props){return external_react_default.a.createElement(external_react_responsive_default.a,_extends({},props,{maxWidth:991}));};var nav_Desktop=function Desktop(props){return external_react_default.a.createElement(external_react_responsive_default.a,_extends({},props,{minWidth:992}));};var nav_Links=function Links(){return external_react_default.a.createElement(external_react_default.a.Fragment,null,external_react_default.a.createElement(router_["Link"],{className:"dropdown-item",to:"/"},"Home"),external_react_default.a.createElement(router_["Link"],{className:"dropdown-item",to:"/casa-la-jardin"},"Casa La Jardin"),external_react_default.a.createElement(router_["Link"],{className:"dropdown-item",to:"/casa-del-mar"},"Casa del Mar"),external_react_default.a.createElement(router_["Link"],{className:"dropdown-item",to:"/day-tour-package"},"Day tour package"),external_react_default.a.createElement(router_["Link"],{className:"dropdown-item",to:"/meetings-and-events"},"Meetings and Events"),external_react_default.a.createElement(router_["Link"],{className:"dropdown-item",to:"/pictorial-package"},"Pictorial Package"),external_react_default.a.createElement(router_["Link"],{className:"dropdown-item",to:"/inquiries"},"Inquiries"));};var nav_MobileNav=function MobileNav(props){return external_react_default.a.createElement("nav",{className:"navbar bg-white shadow"},external_react_default.a.createElement("div",{className:"d-flex justify-content-between align-items-center w-100"},external_react_default.a.createElement("div",null,external_react_default.a.createElement("a",{className:"nav-link dropdown-toggle","data-toggle":"dropdown",href:"#"},external_react_default.a.createElement("i",{className:"fa fa-bars"})),external_react_default.a.createElement("div",{className:"dropdown-menu align-right w-100"},external_react_default.a.createElement(nav_Links,null))),external_react_default.a.createElement(router_["Link"],{to:"/"},external_react_default.a.createElement("img",{id:"logo",className:"center-block",src:logo_default.a})),external_react_default.a.createElement("div",null)));};var nav_DesktopNav=function DesktopNav(props){return external_react_default.a.createElement(NavWrapper,null,external_react_default.a.createElement(router_["Link"],{to:"/"},external_react_default.a.createElement(NavLogo,{src:logo_default.a})),external_react_default.a.createElement(NavGrid,null,external_react_default.a.createElement(nav_Links,null)));};/* harmony default export */ var nav_nav = (function(){return external_react_default.a.createElement(external_react_default.a.Fragment,null,external_react_default.a.createElement(nav_Mobile,null,external_react_default.a.createElement(nav_MobileNav,null)),external_react_default.a.createElement(nav_Desktop,null,external_react_default.a.createElement(nav_DesktopNav,null)));});
// EXTERNAL MODULE: /Users/t0mclaudio/Projects/ElDonResort/site/src/modules/footer/footer.css
var footer = __webpack_require__(68);

// CONCATENATED MODULE: /Users/t0mclaudio/Projects/ElDonResort/site/src/modules/footer/footer.js
/* harmony default export */ var footer_footer = (function(props){return external_react_default.a.createElement("footer",{className:"footer-basic"},external_react_default.a.createElement("div",{className:"social"},external_react_default.a.createElement("a",{href:"#"},external_react_default.a.createElement("i",{className:"fab fa-instagram fa-2x",style:{color:'#CBB079'}})),external_react_default.a.createElement("a",{href:"#"},external_react_default.a.createElement("i",{className:"fab fa-facebook fa-2x",style:{color:'#CBB079'}}))),external_react_default.a.createElement("ul",{className:"list-inline"},external_react_default.a.createElement("li",{className:"list-inline-item"},external_react_default.a.createElement(router_["Link"],{to:"/"},"Home")),external_react_default.a.createElement(router_["Link"],{className:"list-inline-item",to:"/casa-la-jardin"},"Casa La Jardin"),external_react_default.a.createElement(router_["Link"],{className:"list-inline-item",to:"/casa-del-mar"},"Casa del Mar"),external_react_default.a.createElement(router_["Link"],{className:"list-inline-item",to:"/day-tour-package"},"Day tour package"),external_react_default.a.createElement(router_["Link"],{className:"list-inline-item",to:"/meetings-and-events"},"Meetings and Events"),external_react_default.a.createElement(router_["Link"],{className:"list-inline-item",to:"/pictorial-package"},"Pictorial Package"),external_react_default.a.createElement(router_["Link"],{className:"list-inline-item",to:"/inquiries"},"Inquiries")),external_react_default.a.createElement("p",{className:"copyright"},"El Don Resort \xA9 2019"));});
// EXTERNAL MODULE: /Users/t0mclaudio/Projects/ElDonResort/site/src/app.css
var app = __webpack_require__(69);

// CONCATENATED MODULE: /Users/t0mclaudio/Projects/ElDonResort/site/src/App.js
function App(){return external_react_default.a.createElement(lib["Root"],null,external_react_default.a.createElement(nav_nav,null),external_react_default.a.createElement("div",{className:"content"},external_react_default.a.createElement(lib["Routes"],null)),external_react_default.a.createElement(footer_footer,null));}/* harmony default export */ var src_App = (App);
// CONCATENATED MODULE: /Users/t0mclaudio/Projects/ElDonResort/site/src/index.js
// Your top level component
// Export your top level component as JSX (for static rendering)
/* harmony default export */ var src = __webpack_exports__["default"] = (src_App);// Render your app
if(typeof document!=='undefined'){var renderMethod= false?undefined:external_react_dom_default.a.hydrate||external_react_dom_default.a.render;var src_render=function render(Comp){renderMethod(external_react_default.a.createElement(Comp,null),document.getElementById('root'));};// Render!
src_render(src_App);// Hot Module Replacement
if(false){}}

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.0ccf524d.js.map