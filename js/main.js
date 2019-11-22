/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var languages = {
  en: 'Eng',
  uk: 'Укр',
  ru: 'Рус'
};
var titles = document.querySelectorAll('.selected_lang');
var showLists = document.querySelectorAll(".conteiner_langs");
var forms = document.querySelectorAll('.lang');
var isShowlist = false;
var lang = getLang();
document.addEventListener('DOMContentLoaded', function () {
  hiddeRadio(lang);

  if (Object.keys(languages).includes(lang)) {
    titles.forEach(function (title) {
      return title.innerHTML = languages[lang];
    });
  } else {
    titles.forEach(function (title) {
      return title.innerHTML = languages.en;
    });
  }
});
forms.forEach(function (form) {
  return form.addEventListener('click', function (e) {
    lang = e.target.children[0].value;

    if (lang) {
      hiddeRadio(lang);
      setLang(lang);
      titles.forEach(function (title) {
        return title.innerHTML = languages[lang];
      });
    }
  });
});
document.addEventListener('click', function (e) {
  if (isShowlist) {
    showLists.forEach(function (showList) {
      return showList.style.display = "none";
    });
    isShowlist = false;
  } else if (_toConsumableArray(e.target.classList).includes("selected_lang")) {
    showLists.forEach(function (showList) {
      return showList.style.display = "flex";
    });
    isShowlist = true;
  }
});

function hiddeRadio(lang) {
  var allRadios = document.querySelectorAll("input[type=radio]");
  allRadios.forEach(function (radio) {
    if (_toConsumableArray(radio.classList).includes(lang)) {
      radio.parentElement.style.display = "none";
      radio.checked = true;
    } else {
      radio.parentElement.style.display = "inherit";
      radio.cheked = false;
    }
  });
}

function getLang() {
  var lang_selected = window.localStorage.getItem("lang");

  if (lang_selected) {
    return JSON.parse(lang_selected);
  }

  lang_selected = window.navigator.userLanguage || window.navigator.language;
  lang_selected = lang_selected.slice(0, 2);
  setLang(lang_selected);
  window.localStorage.setItem("lang", JSON.stringify(lang_selected));
  return lang_selected;
}

function setLang(lang) {
  window.localStorage.setItem("lang", JSON.stringify(lang));
}

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _selectPolicy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectPolicy */ "./src/js/selectPolicy.js");
/* harmony import */ var _selectPolicy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_selectPolicy__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/selectPolicy.js":
/*!********************************!*\
  !*** ./src/js/selectPolicy.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var policies = {
  usa: 'United States of America',
  uk: 'Україна'
};
var titles = document.querySelectorAll('.selected_policy');
var showLists = document.querySelectorAll(".conteiner_policy");
var forms = document.querySelectorAll('.policy');
var isShowlist = false;
var policy = getPolicy();
document.addEventListener('DOMContentLoaded', function () {
  titles.forEach(function (title) {
    return title.innerHTML = policy;
  });
  var classRadio = getKey(policy);
  hiddePolicyRadio(classRadio);
});
forms.forEach(function (form) {
  return form.addEventListener('click', function (e) {
    policy = e.target.children[0].value;

    if (policy) {
      hiddhiddePolicyRadioeRadio(policy);
      setPolicy(policies[policy]);
      titles.forEach(function (title) {
        return title.innerHTML = policies[policy];
      });
    }
  });
});
document.addEventListener('click', function (e) {
  if (isShowlist) {
    showLists.forEach(function (list_item) {
      return list_item.style.display = "none";
    });
    isShowlist = false;
  } else if (_toConsumableArray(e.target.classList).includes("selected_policy")) {
    showLists.forEach(function (list_item) {
      return list_item.style.display = "flex";
    });
    isShowlist = true;
  }
});

function hiddePolicyRadio(policy) {
  var allRadios = document.querySelectorAll(".policy_item_input");
  allRadios.forEach(function (radio) {
    if (_toConsumableArray(radio.classList).includes(policy)) {
      radio.parentElement.style.display = "none";
      radio.checked = true;
    } else {
      radio.parentElement.style.display = "inherit";
    }
  });
}

function getPolicy() {
  var selected_policy = window.localStorage.getItem("policy");

  if (selected_policy) {
    return JSON.parse(selected_policy);
  }

  selected_policy = policies.usa;
  setPolicy(selected_policy);
  return selected_policy;
}

function setPolicy(policy) {
  window.localStorage.setItem("policy", JSON.stringify(policy));
}

var getKey = function getKey(policy) {
  for (var key in policies) {
    if (policies[key] === policy) {
      return key;
    }
  }
};

/***/ })

/******/ });
//# sourceMappingURL=main.js.map