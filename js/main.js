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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lang_en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang/en */ "./src/blocks/modules/header/lang/en.js");
/* harmony import */ var _lang_ru__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang/ru */ "./src/blocks/modules/header/lang/ru.js");
/* harmony import */ var _lang_uk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lang/uk */ "./src/blocks/modules/header/lang/uk.js");
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
  chengeContent(lang);

  if (Object.keys(languages).includes(lang)) {
    titles.forEach(function (title) {
      return title.innerHTML = languages[lang];
    });
  } else {
    titles.forEach(function (title) {
      return title.innerHTML = languages.en;
    });
  }
}); // - here change lang

forms.forEach(function (form) {
  return form.addEventListener('click', function (e) {
    if (_toConsumableArray(e.target.classList).includes("langs_item")) {
      var currLang = e.target.children[0].className;
      hiddeRadio(currLang);
      setLang(currLang);
      chengeContent(currLang);
      titles.forEach(function (title) {
        return title.innerHTML = languages[currLang];
      });
    }
  });
}); // - here hide box for custom option

document.addEventListener('click', function (e) {
  if (isShowlist) {
    showLists.forEach(function (showList) {
      showList.classList.remove("show");
      showList.classList.add("hidden");
    });
    isShowlist = false;
  } else if (_toConsumableArray(e.target.classList).includes("selected_lang")) {
    showLists.forEach(function (showList) {
      showList.classList.remove("hidden");
      showList.classList.add("show");
    });
    isShowlist = true;
  }
});

function chengeContent(lang) {
  var content = {};

  switch (lang) {
    case "uk":
      content = _lang_uk__WEBPACK_IMPORTED_MODULE_2__["default"];
      break;

    case "ru":
      content = _lang_ru__WEBPACK_IMPORTED_MODULE_1__["default"];
      break;

    default:
      content = _lang_en__WEBPACK_IMPORTED_MODULE_0__["default"];
  }

  var _loop = function _loop(key) {
    var elements = document.querySelectorAll("." + key);
    elements.forEach(function (element) {
      return element.innerHTML = content[key];
    });
  };

  for (var key in content) {
    _loop(key);
  }
}

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

/***/ "./src/blocks/modules/header/lang/en.js":
/*!**********************************************!*\
  !*** ./src/blocks/modules/header/lang/en.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _En;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var En = (_En = {
  // header 
  burg_home: "Home",
  burg_pro: "PRO",
  burg_download: "Download",
  burg_news: "News",
  burg_faq: "FAQ",
  burg_support: "Support",
  burg_footer_link_1: "Terms of Service",
  burg_footer_link_2: "Privacy Policy",
  burg_footer_link_3: "Cookie Policy",
  // - index.html
  about_title: "Professional network",
  about_text: "Communicate with pro's without any borders.",
  about_link: "How it works",
  how_it_works__title: "Just send request 👋",
  how_it_works__text: "PRO's accept request, and you get all personal attention.",
  how_it_works_viwe_title: "How it works",
  feache__item_h_1: "Send request to PRO",
  feache__item_h_2: "Discuss a request ",
  feache__item_h_3: "Upgrade yourself",
  feache__item_p_1: "The short type message with a question.",
  feache__item_p_2: "Get all answers from professional.",
  feache__item_p_3: "Leave review & rate your expirience.",
  download_title: "Download IOS, Android",
  // terms_of_service
  terms_of_service__title: "Terms of service",
  terms_of_service__comment: "Updated: 30 September 2019",
  // support
  support_title: "Support",
  support_text_1: "Hi friend 👋 , if you got to this page for a reason, you probably have a question.",
  support_text_2: " We will be happy to help with your questions, and\n                    resolve it as soon as possible for you. But before\n                    that, if you still decide to send us a request, \n                    be sure that you looked at these pages on which \n                    there is all the necessary information <a href=\"#\">Frequently\n                    Asked Questions</a> & <a href=\"#\">Terms of Service.</a> ",
  support_text_3: "If you didn\u2019t find an answer there, send us a request\n                    by selecting the appropriate category of your question.",
  support_text_4: "  We will try to answer and resolve your question as soon as possible.",
  support_text_5: "Thanks, Motipio team.",
  support_link_h_1: "Problem with applicationt",
  support_link_p_1: "iOS & Android app, works bad and other.",
  support_link_h_2: "Requests & PRO",
  support_link_p_2: "Complaint or problem with request, etc.",
  support_link_h_3: "I’m a PRO, need a help",
  support_link_p_3: "ayout, complaints, blocking and other.",
  // pro
  monetize_title: "Monetize your professional skills, experience and famous",
  monetize_text: "By communicating with people from over the World without any borders",
  join_to_us_title: "How join to us",
  join_to_us_text_1: "Motipio open to new professionals, who really have skills, life expirince, what they can\n                    share with people. Or you want to mentoring or coaching people, make them better and\n                    space around. Also, you can communicate with your fans, solve overloaded DM on your\n                    social media.",
  join_to_us_text_2: " We will be happy if you join to us, for making our World a better place to live for all\n                         of us.",
  join_to_us_btn: "Enroll as PRO",
  action_item_h_1: "Verefication",
  action_item_p_1: "Become a Verified PRO user",
  action_item_h_2: "Complite Profile",
  action_item_h4_2: "Fulfill information about yourself:",
  action_item_li_1: "General info (name, photo, etc.)",
  action_item_li_2: "Summery (sth about you)",
  action_item_li_3: "Profesional skills (master of)",
  action_item_li_4: "Languages (which you know)",
  action_item_li_5: "Request details (cost per request and details offer)",
  action_item_h_3: "Set a payout method",
  action_item_h4_3: "Partnering with Payoneer",
  action_item_p_3: "Great list of ways to withdrawals your earnigs\n                    with low fees on transfers to card,\n                    bank and other. <a href=\"#\">Learn more about</a>",
  hycw_title: "How you can work on Montipio platform",
  benefit_item_h_1: "Consulting service",
  benefit_item_p_1: "So strongly and metaphysically did\n                    I conceive of my situation then,\n                    that while earnestly watching his motions,\n                    I seemed distinctly to perceive that my own\n                    individuality was now merged in a joint stock\n                    company of two.",
  benefit_item_h_2: "Communication with fans"
}, _defineProperty(_En, "benefit_item_p_1", "  But this was not the only jamming jeopardy\n                    he was exposed to. Unappalled by the massacre\n                    made upon them during the night, the sharks now\n                    freshly and more keenly allured by the before pent\n                    blood which began."), _defineProperty(_En, "benefit_item_h_3", "Mentoring and Coaching"), _defineProperty(_En, "benefit_item_p_3", "I have hinted that I would often jerk poor Queequeg\n                    from between the whale and the ship\u2014where he would\n                    occasionally fall, from the incessant rolling and\n                    swaying of both."), _defineProperty(_En, "benefit_item_h_4", "Charity and help"), _defineProperty(_En, "benefit_item_p_4", "So that for better or for worse, we two, for the time,\n                    were wedded; and should poor Queequeg sink to rise no\n                    more, then both usage and honour demanded."), _defineProperty(_En, "benefit_item_p_5", " All cases which were written above by Motipio team, its only examples."), _defineProperty(_En, "benefit_item_p_6", "You have the ability to set your own way of gaming, your request details, and\n                    others."), _defineProperty(_En, "how_earn_title", "How much you can charge per request"), _defineProperty(_En, "how_earn_h_1", "Dozens and Hundreds"), _defineProperty(_En, "how_earn_p_1", "Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec.\n                Donec viverra eleifend lacus, vitae ullamcorper metus.\n                Sed sollicitudin ipsum quis nunc sollicitudin ultrices.\n                Donec euismod scelerisque ligula."), _defineProperty(_En, "how_earn_h_2", "Hundreds and Thousands"), _defineProperty(_En, "how_earn_p_2", "Banjo tote bag bicycle rights, High Life sartorial\n                cray craft beer whatever street art fap. Hashtag\n                typewriter banh mi, squid keffiyeh High Life\n                Brooklyn twee craft bee."), _defineProperty(_En, "how_earn_p_3", "All cases which were written above by Motipio team, its only examples."), _defineProperty(_En, "how_earn_p_4", "You have the ability to set your own price of request and how much you decide to\n                    charge."), _defineProperty(_En, "receive_requests_title", " How to receive request"), _defineProperty(_En, "receive_requests_item_1", "Complete profile and go to Online;"), _defineProperty(_En, "receive_requests_item_2", "Share info on your social media;"), _defineProperty(_En, "receive_requests_item_3", "Make more earnings by requests;"), _defineProperty(_En, "receive_requests_text", " Use your social media, for attracting your\n                            audience, followers or fans to founding you\n                            on Motipio by @username of name searching.\n                            Create stories or post about it, with link\n                            what following to Motipio <a href=\"./index.html\">main page</a> or\n                            <a href=\"./download.html\">download</a> page."), _defineProperty(_En, "let_join_title", "Like it? Lets's join to us, now!"), _defineProperty(_En, "tags__description", "Thanks for interesting in Motipio, and we know that\n                        you are an RPO with great skills which need in a Whole World.\n                        Apply a form, and join to huge community,\n                        for making our world a better place for leaving for humans."), _defineProperty(_En, "tag__item_1", "Entrepreneurship"), _defineProperty(_En, "tag__item_2", "Finance & Investing"), _defineProperty(_En, "tag__item_3", "Beauty & Fashion"), _defineProperty(_En, "tag__item_4", "Sport & Health"), _defineProperty(_En, "tag__item_5", "Media & Social Media"), _defineProperty(_En, "tag__item_6", "More..."), _defineProperty(_En, "join_to_us_btn_2", "Join to Motipion PRO, now!"), _defineProperty(_En, "privacy_policy_title", "Privacy Policy"), _defineProperty(_En, "rivacy_policy_comment", " Updated: 30 September 2019"), _defineProperty(_En, "cookie_policy_title", "Privacy Policy"), _defineProperty(_En, "cookie_policy_comment", " Updated: 30 September 2019"), _defineProperty(_En, "faq_title", "Frequently Asked Questions"), _defineProperty(_En, "faq_h2_1", "About Motipio"), _defineProperty(_En, "faq_h2_2", "Request"), _defineProperty(_En, "faq_q_1", "Q: What is Motipio?"), _defineProperty(_En, "faq_a_1", "                        A: Motipio is a platform where people can send\n    a request to PRO\u2019s people. Our mission is to\n    give to people a great solution, for upgrading\n    themselves, collaborating, connecting and making\n    our world a better place to live."), _defineProperty(_En, "faq_q_2", "Q: How do I contact the Motipio team?"), _defineProperty(_En, "faq_a_2", "                        A: In the <a href=\"#\">tumultuous</a> business of cutting-in\n    and attending to a whale, there is much running\n    backwards and forwards among the crew. Now hands\n    are wanted here, and then again hands are wanted\n    there. There is no staying in any one place; for\n    at one and the same time everything has to be done\n    everywhere. It is much the same with him who endeavors\n    the desc."), _defineProperty(_En, "faq_q_3", "Q: What is Motipio?"), _defineProperty(_En, "faq_a_3", "                           A: Motipio is a platform where people can send a \n    request to PRO\u2019s people. Our mission is to give to\n    people a great solution, for upgrading themselves,\n    collaborating, <a href=\"#\">connecting</a>  and making our world a better\n    place to live."), _defineProperty(_En, "faq_q_4", "Q: How do I contact the Motipio team?"), _defineProperty(_En, "faq_a_4", "                            A: In the <a href=\"#\">tumultuous</a> business of cutting-in\n    and attending to a whale, there is much running\n    backwards and forwards among the crew. Now hands\n    are wanted here, and then again hands are wanted\n    there. There is no staying in any one place; for\n    at one and the same time everything has to be done\n    everywhere. It is much the same with him who endeavors\n    the desc."), _defineProperty(_En, "faq_q_5", "Q: How do I contact the Motipio team?"), _defineProperty(_En, "faq_a_5", "A: In the <a href=\"#\">tumultuous</a> business of cutting-in\n                and attending to a whale, there is much running\n                backwards and forwards among the crew. Now hands\n                are wanted here, and then again hands are wanted\n                there. There is no staying in any one place; for\n                at one and the same time everything has to be done\n                everywhere. It is much the same with him who endeavors\n                the desc."), _defineProperty(_En, "footer_link_1", "Therm of Service"), _defineProperty(_En, "footer_link_2", "Privacy Policy"), _defineProperty(_En, "footer_link_3", "FAQ"), _defineProperty(_En, "footer_link_4", "Suport"), _defineProperty(_En, "footer_copyright", "Copyright 2019."), _En);
/* harmony default export */ __webpack_exports__["default"] = (En);

/***/ }),

/***/ "./src/blocks/modules/header/lang/ru.js":
/*!**********************************************!*\
  !*** ./src/blocks/modules/header/lang/ru.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Ru = {
  about_title: "Лилеи разум ",
  about_text: "Лилеи разум сколь слышу Громы. Ко именем сильны главой Подите Из их яд ей. Он Молитвы",
  about_link: "Лилеи разум",
  how_it_works__title: "Подите Из их яд ей 👋",
  how_it_works__text: "Tилеи разум сколь слышу Громы. Ко именем.",
  how_it_works_viwe_title: "илеи разу ",
  feache__item_h_1: "сколь слышу Громы.",
  feache__item_h_2: "сколь слышу Громы. ",
  feache__item_h_3: "сколь слышу Громы.",
  feache__item_p_1: "ромы. Ко именем сильны главой Подите Из их яд ей.",
  feache__item_p_2: "ромы. Ко именем сильны главой Подите Из их яд ей.",
  feache__item_p_3: "ромы. Ко именем сильны главой яд ей.",
  download_title: "ромы. Ко "
};
/* harmony default export */ __webpack_exports__["default"] = (Ru);

/***/ }),

/***/ "./src/blocks/modules/header/lang/uk.js":
/*!**********************************************!*\
  !*** ./src/blocks/modules/header/lang/uk.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Uk = {
  about_title: "Щурячий бугай",
  about_text: "Щурячий бугай із їжаком-харцизом в'ючись підписали ґешефт у єнах",
  about_link: "їжаком-харцизом ",
  how_it_works__title: "підписали ґешефт 👋",
  how_it_works__text: "Щурячий бугай із їжаком-харцизом в'ючись підписали ґешефт у єна",
  how_it_works_viwe_title: "Щурячий бугай",
  feache__item_h_1: "Щурячий бугай бугай",
  feache__item_h_2: "Щурячий бугай",
  feache__item_h_3: "Щурячий бугай",
  feache__item_p_1: "Щурячий бугай Щурячий бугай Щурячий бугай",
  feache__item_p_2: "їжаком-харцизом в'ючись підписали",
  feache__item_p_3: "їжаком-харцизом в'ючись підписали",
  download_title: "в'ючись підписали"
};
/* harmony default export */ __webpack_exports__["default"] = (Uk);

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
/* harmony import */ var _smoothScrol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./smoothScrol */ "./src/js/smoothScrol.js");
/* harmony import */ var _smoothScrol__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_smoothScrol__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./src/js/policyLang/uk.js":
/*!*********************************!*\
  !*** ./src/js/policyLang/uk.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Uk = {
  // terms of service
  t_of_s_p_1: "\u0426\u044F \u0423\u0433\u043E\u0434\u0430 \u043F\u0440\u043E \u043D\u0430\u0434\u0430\u043D\u043D\u044F \u043F\u043E\u0441\u043B\u0443\u0433 \u043D\u0430 \u0421\u0430\u0439\u0442\u0456 (\"\u0423\u043C\u043E\u0432\u0438\") \u0440\u0435\u0433\u0443\u043B\u044E\u0454 \u0432\u0430\u0448\u0435 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0438 \u0440\u0438\u043D\u043A\u0443 Motipio \u2122 \u0447\u0435\u0440\u0435\u0437 \u043F\u043E\u0441\u043B\u0443\u0433\u0438, \u044F\u043A\u0456 \u043C\u0438 \u043D\u0430\u0434\u0430\u0454\u043C\u043E (\u0443 \u0441\u0443\u043A\u0443\u043F\u043D\u043E\u0441\u0442\u0456 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442, \u0434\u043E\u0434\u0430\u0442\u043E\u043A \u0442\u0430 \u043F\u043E\u0441\u043B\u0443\u0433\u0438, \u044F\u043A\u0456 \u043D\u0430\u0437\u0438\u0432\u0430\u044E\u0442\u044C\u0441\u044F \u043D\u0430\u0448\u0438\u043C \"\u0421\u0430\u0439\u0442\u043E\u043C\"). \"\u0412\u0438\" \u0441\u0442\u043E\u0441\u0443\u0454\u0442\u044C\u0441\u044F \u0432\u0430\u0441 \u044F\u043A \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u043D\u0430\u0448\u043E\u0433\u043E \u0421\u0430\u0439\u0442\u0443.",
  t_of_s_p_2: "\u0420\u0435\u0442\u0440\u043E \u0437\u0430\u0439\u043C\u0430\u044E\u0442\u044C \u043E\u0440\u0433\u0430\u043D\u0456\u0447\u043D\u0456, \u043F\u0435\u043D\u044C\u043E\u0432\u0456 \u043F\u043E\u0448\u0430\u0440\u043F\u0430\u043D\u0456 \u0448\u0438\u043A\u0430\u0440\u043D\u0456 \u0448\u0438\u043A\u0430\u0440\u043D\u0456 \u043F\u0430\u0440\u0442\u0456\u0457 \u043D\u0430 \u0434\u0430\u0445\u0443 DIY normcore. \u041D\u0430\u0441\u043F\u0440\u0430\u0432\u0434\u0456 \u043C\u0430\u0439\u0441\u0442\u0440\u0438\u043D\u0456 \u043E\u0440\u0433\u0430\u043D\u0456\u0447\u043D\u0456 \u0437\u0430\u0439\u043C\u0430\u044E\u0442\u044C, \u0423\u0435\u0441 \u0410\u043D\u0434\u0435\u0440\u0441\u043E\u043D, \u0449\u043E \u0431 \u0442\u0430\u043C \u043D\u0435 \u0431\u0443\u043B\u043E, \u0432\u0441\u0435, \u0449\u043E \u0432\u0438\u043F\u0430\u043B\u043E. \u0425\u0435\u0448\u0442\u0435\u0433 \u0445\u0435\u043B\u044C\u0432\u043E\u0430 \u043A\u0440\u0430\u0444\u0442\u043E\u0432\u043E\u0433\u043E \u043A\u0440\u0430\u0444\u0442\u043E\u0432\u043E\u0433\u043E \u043F\u0438\u0432\u0430 tote bag stumptown quinoa. Dreamcatcher locavore iPhone \u0437 \u0445\u043E\u043B\u043E\u0434\u043D\u043E\u044E \u0445\u0432\u0438\u043B\u0435\u044E, \u0437\u0430\u0439\u043C\u0430\u044E\u0442\u044C \u0446\u0456\u043B\u044C\u043E\u0432\u0438\u0439 \u0444\u043E\u043D\u0434 \u043F\u043E\u0432\u0456\u043B\u044C\u043D\u043E\u0432\u0443\u0433\u043B\u0435\u0432\u043E\u0434\u043D\u043E\u0433\u043E \u0432\u0438\u043D\u0437\u0430\u0432\u043E\u0434\u0443 \u043D\u0430\u0440\u0432\u0430\u043B\u0443. Ennui \u043F\u043E\u0448\u0430\u0440\u043F\u0430\u043D\u0438\u0439 \u0448\u0438\u043A \u0411\u0440\u0443\u043A\u043B\u0456\u043D, \u0444\u0430\u043D-\u043F\u0430\u043A\u0435\u0442 \u043F\u0440\u044F\u043C\u0430 \u0442\u043E\u0440\u0433\u0456\u0432\u043B\u044F Tumblr \u0442\u0430\u0442\u0443\u044E\u0432\u0430\u0432 \u0440\u0435\u0442\u0440\u043E-\u043F\u043E\u043B\u044F\u0440\u043E\u0457\u0434 \u0433\u043B\u0438\u0431\u043E\u043A\u0438\u0439 v chia \u0432\u0456\u043D\u0456\u043B\u043E\u0432\u0438\u0439 \u043F\u0440\u043E\u0434\u043E\u0432\u043E\u043B\u044C\u0447\u0438\u0439 \u0432\u0430\u043D\u0442\u0430\u0436\u043D\u0438\u043A Austin Tonx. \u0411\u0443\u043A\u0432\u0430\u043B\u044C\u043D\u043E \u0442\u044C\u0444\u0443-\u0443\u043C\u0430\u043C\u0456, \u043C\u0430\u0440\u0438\u043D\u043E\u0432\u0430\u043D\u0456 \u0434\u0436\u0438\u043D\u0441\u043E\u0432\u0456 \u0448\u043E\u0440\u0442\u0438 Wes Anderson \u0432\u0438\u0441\u043E\u043A\u043E\u0433\u043E \u0434\u0440\u0443\u043A\u0443. \u0411\u0456\u043E\u0434\u0438\u0437\u0435\u043B\u044C\u043D\u0438\u0439 \u043D\u0430\u0440\u0432\u0430\u043B \u0411\u0430\u0440\u043E\u0434\u0436\u043E \u0422\u043E\u043D\u043A\u0441",
  t_of_s_p_3: "\u0411\u0443\u0434\u0443\u0447\u0438 \u0434\u0438\u043A\u0443\u043D\u043E\u043C-\u0434\u0438\u043A\u0443\u043D\u043E\u043C, \u0442\u043E\u0431\u0442\u043E \u043B\u044E\u0434\u0438\u043D\u043E\u044E, \u044F\u043A\u0430 \u0432\u0438\u0442\u044F\u0433\u043D\u0443\u043B\u0430 \u043B\u0443\u043A-\u0432\u0435\u0441\u043B\u043E \u0443 \u0441\u0432\u043E\u0454\u043C\u0443 \u0447\u043E\u0432\u043D\u0456 (\u0434\u0440\u0443\u0433\u0438\u0439 - \u0432\u043F\u0435\u0440\u0435\u0434), - \u043C\u0456\u0439 \u0432\u0435\u0441\u0435\u043B\u0438\u0439 \u043E\u0431\u043E\u0432'\u044F\u0437\u043E\u043A \u0432\u0456\u0434\u0432\u0456\u0434\u0443\u0432\u0430\u0442\u0438 \u0439\u043E\u0433\u043E, \u043F\u0440\u0438\u0439\u043C\u0430\u044E\u0447\u0438 \u0442\u043E\u0439 \u0432\u0430\u0436\u043A\u043E \u0441\u043A\u0440\u0435\u043C\u0431\u043B\u0435\u043D\u0438\u0439 \u0441\u0443\u0442\u0438\u0447\u043A\u0443 \u043D\u0430 \u0441\u043F\u0438\u043D\u0456 \u043C\u0435\u0440\u0442\u0432\u043E\u0433\u043E \u043A\u0438\u0442\u0430. \u0412\u0438 \u0431\u0430\u0447\u0438\u043B\u0438 \u0456\u0442\u0430\u043B\u0456\u0439\u0441\u044C\u043A\u0438\u0445 \u0445\u043B\u043E\u043F\u0446\u0456\u0432-\u043E\u0440\u0433\u0430\u043D\u0456\u0432, \u0449\u043E \u0442\u0440\u0438\u043C\u0430\u044E\u0442\u044C \u0434\u043E\u0432\u0433\u0438\u0439 \u0448\u043D\u0443\u0440 \u0442\u0430\u043D\u0446\u044E\u0432\u0430\u043B\u044C\u043D\u043E\u0457 \u043C\u0430\u0432\u043F\u0438. \u041F\u0440\u043E\u0441\u0442\u043E \u0442\u0430\u043A, \u0437 \u043A\u0440\u0443\u0442\u043E\u0457 \u0441\u0442\u043E\u0440\u043E\u043D\u0438 \u043A\u043E\u0440\u0430\u0431\u043B\u044F, \u044F \u0442\u0440\u0438\u043C\u0430\u0432 \u041A\u0432\u0456\u043A\u0435\u0433\u0430 \u0442\u0430\u043C, \u0443 \u043C\u043E\u0440\u0456, \u0442\u0438\u043C, \u0449\u043E \u0442\u0435\u0445\u043D\u0456\u0447\u043D\u043E \u043D\u0430\u0437\u0438\u0432\u0430\u0454\u0442\u044C\u0441\u044F \u0432 \u0440\u0438\u0431\u043D\u043E\u043C\u0443 \u0433\u043E\u0441\u043F\u043E\u0434\u0430\u0440\u0441\u0442\u0432\u0456 \u043C\u0430\u0432\u043F\u043E\u044E \u043C\u043E\u0442\u0443\u0437\u043A\u0443, \u043F\u0440\u0438\u043A\u0440\u0456\u043F\u043B\u0435\u043D\u0443 \u0434\u043E \u043C\u0456\u0446\u043D\u043E\u0457 \u0441\u043C\u0443\u0433\u0438 \u043F\u043E\u043B\u043E\u0442\u043D\u0430, \u043F\u0456\u0434\u043F\u0435\u0440\u0435\u0437\u0430\u043D\u043E\u0457 \u043D\u0430\u0432\u043A\u043E\u043B\u043E \u0442\u0430\u043B\u0456\u0457",
  t_of_s_p_4: "\u0420\u0435\u0442\u0440\u043E \u0437\u0430\u0439\u043C\u0430\u044E\u0442\u044C \u043E\u0440\u0433\u0430\u043D\u0456\u0447\u043D\u0456, \u043F\u0435\u043D\u044C\u043E\u0432\u0456 \u043F\u043E\u0448\u0430\u0440\u043F\u0430\u043D\u0456 \u0448\u0438\u043A\u0430\u0440\u043D\u0456 \u0448\u0438\u043A\u0430\u0440\u043D\u0456 \u043F\u0430\u0440\u0442\u0456\u0457 \u043D\u0430 \u0434\u0430\u0445\u0443 DIY normcore. \u041D\u0430\u0441\u043F\u0440\u0430\u0432\u0434\u0456 \u043C\u0430\u0439\u0441\u0442\u0440\u0438\u043D\u0456 \u043E\u0440\u0433\u0430\u043D\u0456\u0447\u043D\u0456 \u0437\u0430\u0439\u043C\u0430\u044E\u0442\u044C, \u0423\u0435\u0441 \u0410\u043D\u0434\u0435\u0440\u0441\u043E\u043D, \u0449\u043E \u0431 \u0442\u0430\u043C \u043D\u0435 \u0431\u0443\u043B\u043E, \u0432\u0441\u0435, \u0449\u043E \u0432\u0438\u043F\u0430\u043B\u043E. \u0425\u0435\u0448\u0442\u0435\u0433 \u0445\u0435\u043B\u044C\u0432\u043E\u0430 \u043A\u0440\u0430\u0444\u0442\u043E\u0432\u043E\u0433\u043E \u043A\u0440\u0430\u0444\u0442\u043E\u0432\u043E\u0433\u043E \u043F\u0438\u0432\u0430 tote bag stumptown quinoa. Dreamcatcher locavore iPhone \u0437 \u0445\u043E\u043B\u043E\u0434\u043D\u043E\u044E \u0445\u0432\u0438\u043B\u0435\u044E, \u0437\u0430\u0439\u043C\u0430\u044E\u0442\u044C \u0446\u0456\u043B\u044C\u043E\u0432\u0438\u0439 \u0444\u043E\u043D\u0434 \u043F\u043E\u0432\u0456\u043B\u044C\u043D\u043E\u0432\u0443\u0433\u043B\u0435\u0432\u043E\u0434\u043D\u043E\u0433\u043E \u0432\u0438\u043D\u0437\u0430\u0432\u043E\u0434\u0443 \u043D\u0430\u0440\u0432\u0430\u043B\u0443. Ennui \u043F\u043E\u0448\u0430\u0440\u043F\u0430\u043D\u0438\u0439 \u0448\u0438\u043A \u0411\u0440\u0443\u043A\u043B\u0456\u043D, \u0444\u0430\u043D-\u043F\u0430\u043A\u0435\u0442 \u043F\u0440\u044F\u043C\u0430 \u0442\u043E\u0440\u0433\u0456\u0432\u043B\u044F Tumblr \u0442\u0430\u0442\u0443\u044E\u0432\u0430\u0432 \u0440\u0435\u0442\u0440\u043E-\u043F\u043E\u043B\u044F\u0440\u043E\u0457\u0434 \u0433\u043B\u0438\u0431\u043E\u043A\u0438\u0439 v chia \u0432\u0456\u043D\u0456\u043B\u043E\u0432\u0438\u0439 \u043F\u0440\u043E\u0434\u043E\u0432\u043E\u043B\u044C\u0447\u0438\u0439 \u0432\u0430\u043D\u0442\u0430\u0436\u043D\u0438\u043A Austin Tonx. \u0411\u0443\u043A\u0432\u0430\u043B\u044C\u043D\u043E \u0442\u044C\u0444\u0443-\u0443\u043C\u0430\u043C\u0456, \u043C\u0430\u0440\u0438\u043D\u043E\u0432\u0430\u043D\u0456 \u0434\u0436\u0438\u043D\u0441\u043E\u0432\u0456 \u0448\u043E\u0440\u0442\u0438 Wes Anderson \u0432\u0438\u0441\u043E\u043A\u043E\u0433\u043E \u0434\u0440\u0443\u043A\u0443. \u0411\u0456\u043E\u0434\u0438\u0437\u0435\u043B\u044C\u043D\u0438\u0439 \u043D\u0430\u0440\u0432\u0430\u043B \u0411\u0430\u0440\u043E\u0434\u0436\u043E \u0422\u043E\u043D\u043A\u0441.",
  t_of_s_p_5: "\u0411\u0443\u0434\u0443\u0447\u0438 \u0434\u0438\u043A\u0443\u043D\u043E\u043C-\u0434\u0438\u043A\u0443\u043D\u043E\u043C, \u0442\u043E\u0431\u0442\u043E \u043B\u044E\u0434\u0438\u043D\u043E\u044E, \u044F\u043A\u0430 \u0432\u0438\u0442\u044F\u0433\u043D\u0443\u043B\u0430 \u043B\u0443\u043A-\u0432\u0435\u0441\u043B\u043E \u0443 \u0441\u0432\u043E\u0454\u043C\u0443 \u0447\u043E\u0432\u043D\u0456 (\u0434\u0440\u0443\u0433\u0438\u0439 - \u0432\u043F\u0435\u0440\u0435\u0434), - \u043C\u0456\u0439 \u0432\u0435\u0441\u0435\u043B\u0438\u0439 \u043E\u0431\u043E\u0432'\u044F\u0437\u043E\u043A \u0432\u0456\u0434\u0432\u0456\u0434\u0443\u0432\u0430\u0442\u0438 \u0439\u043E\u0433\u043E, \u0431\u0435\u0440\u0443\u0447\u0438 \u0446\u044E \u0432\u0430\u0436\u043A\u043E \u0441\u043A\u0440\u0435\u043C\u0431\u043D\u0443 \u0441\u0443\u0442\u0438\u0447\u043A\u0443 \u043D\u0430 \u0441\u043F\u0438\u043D\u0456 \u043C\u0435\u0440\u0442\u0432\u043E\u0433\u043E \u043A\u0438\u0442\u0430. \u0412\u0438 \u0431\u0430\u0447\u0438\u043B\u0438 \u0456\u0442\u0430\u043B\u0456\u0439\u0441\u044C\u043A\u0438\u0445 \u0445\u043B\u043E\u043F\u0446\u0456\u0432-\u043E\u0440\u0433\u0430\u043D\u0456\u0432, \u0449\u043E \u0442\u0440\u0438\u043C\u0430\u044E\u0442\u044C \u0434\u043E\u0432\u0433\u0438\u0439 \u0448\u043D\u0443\u0440 \u0442\u0430\u043D\u0446\u044E\u0432\u0430\u043B\u044C\u043D\u043E\u0457 \u043C\u0430\u0432\u043F\u0438. \u041F\u0440\u043E\u0441\u0442\u043E \u0442\u0430\u043A, \u0437 \u043A\u0440\u0443\u0442\u043E\u0457 \u0441\u0442\u043E\u0440\u043E\u043D\u0438 \u043A\u043E\u0440\u0430\u0431\u043B\u044F, \u044F \u0442\u0440\u0438\u043C\u0430\u0432 \u041A\u0432\u0456\u043A\u0435\u0433\u0430 \u0442\u0430\u043C, \u0443 \u043C\u043E\u0440\u0456, \u0442\u0438\u043C, \u0449\u043E \u0442\u0435\u0445\u043D\u0456\u0447\u043D\u043E \u043D\u0430\u0437\u0438\u0432\u0430\u0454\u0442\u044C\u0441\u044F \u0432 \u0440\u0438\u0431\u043D\u043E\u043C\u0443 \u0433\u043E\u0441\u043F\u043E\u0434\u0430\u0440\u0441\u0442\u0432\u0456 \u043C\u0430\u0432\u043F\u043E\u044E \u043C\u043E\u0442\u0443\u0437\u043A\u0443, \u043F\u0440\u0438\u043A\u0440\u0456\u043F\u043B\u0435\u043D\u0443 \u0434\u043E \u043C\u0456\u0446\u043D\u043E\u0457 \u0441\u043C\u0443\u0433\u0438 \u043F\u043E\u043B\u043E\u0442\u043D\u0430, \u043F\u0456\u0434\u043F\u0435\u0440\u0435\u0437\u0430\u043D\u043E\u0457 \u043D\u0430\u0432\u043A\u043E\u043B\u043E \u0442\u0430\u043B\u0456\u0457.",
  t_of_s_p_6: "\u0420\u0435\u0442\u0440\u043E \u0437\u0430\u0439\u043C\u0430\u044E\u0442\u044C \u043E\u0440\u0433\u0430\u043D\u0456\u0447\u043D\u0456, \u043F\u0435\u043D\u044C\u043E\u0432\u0456 \u043F\u043E\u0448\u0430\u0440\u043F\u0430\u043D\u0456 \u0448\u0438\u043A\u0430\u0440\u043D\u0456 \u0448\u0438\u043A\u0430\u0440\u043D\u0456 \u043F\u0430\u0440\u0442\u0456\u0457 \u043D\u0430 \u0434\u0430\u0445\u0443 DIY normcore. \u041D\u0430\u0441\u043F\u0440\u0430\u0432\u0434\u0456 \u043C\u0430\u0439\u0441\u0442\u0440\u0438\u043D\u0456 \u043E\u0440\u0433\u0430\u043D\u0456\u0447\u043D\u0456 \u0437\u0430\u0439\u043C\u0430\u044E\u0442\u044C, \u0423\u0435\u0441 \u0410\u043D\u0434\u0435\u0440\u0441\u043E\u043D, \u0449\u043E \u0431 \u0442\u0430\u043C \u043D\u0435 \u0431\u0443\u043B\u043E, \u0432\u0441\u0435, \u0449\u043E \u0432\u0438\u043F\u0430\u043B\u043E. \u0425\u0435\u0448\u0442\u0435\u0433 \u0445\u0435\u043B\u044C\u0432\u043E\u0430 \u043A\u0440\u0430\u0444\u0442\u043E\u0432\u043E\u0433\u043E \u043A\u0440\u0430\u0444\u0442\u043E\u0432\u043E\u0433\u043E \u043F\u0438\u0432\u0430 tote bag stumptown quinoa. Dreamcatcher locavore iPhone \u0437 \u0445\u043E\u043B\u043E\u0434\u043D\u043E\u044E \u0445\u0432\u0438\u043B\u0435\u044E, \u0437\u0430\u0439\u043C\u0430\u044E\u0442\u044C \u0446\u0456\u043B\u044C\u043E\u0432\u0438\u0439 \u0444\u043E\u043D\u0434 \u043F\u043E\u0432\u0456\u043B\u044C\u043D\u043E\u0432\u0443\u0433\u043B\u0435\u0432\u043E\u0434\u043D\u043E\u0433\u043E \u0432\u0438\u043D\u0437\u0430\u0432\u043E\u0434\u0443 \u043D\u0430\u0440\u0432\u0430\u043B\u0443. Ennui \u043F\u043E\u0448\u0430\u0440\u043F\u0430\u043D\u0438\u0439 \u0448\u0438\u043A \u0411\u0440\u0443\u043A\u043B\u0456\u043D, \u0444\u0430\u043D-\u043F\u0430\u043A\u0435\u0442 \u043F\u0440\u044F\u043C\u0430 \u0442\u043E\u0440\u0433\u0456\u0432\u043B\u044F Tumblr \u0442\u0430\u0442\u0443\u044E\u0432\u0430\u0432 \u0440\u0435\u0442\u0440\u043E-\u043F\u043E\u043B\u044F\u0440\u043E\u0457\u0434 \u0433\u043B\u0438\u0431\u043E\u043A\u0438\u0439 v chia \u0432\u0456\u043D\u0456\u043B\u043E\u0432\u0438\u0439 \u043F\u0440\u043E\u0434\u043E\u0432\u043E\u043B\u044C\u0447\u0438\u0439 \u0432\u0430\u043D\u0442\u0430\u0436\u043D\u0438\u043A Austin Tonx. \u0411\u0443\u043A\u0432\u0430\u043B\u044C\u043D\u043E \u0442\u044C\u0444\u0443-\u0443\u043C\u0430\u043C\u0456, \u043C\u0430\u0440\u0438\u043D\u043E\u0432\u0430\u043D\u0456 \u0434\u0436\u0438\u043D\u0441\u043E\u0432\u0456 \u0448\u043E\u0440\u0442\u0438 Wes Anderson \u0432\u0438\u0441\u043E\u043A\u043E\u0433\u043E \u0434\u0440\u0443\u043A\u0443. \u0411\u0456\u043E\u0434\u0438\u0437\u0435\u043B\u044C\u043D\u0438\u0439 \u043D\u0430\u0440\u0432\u0430\u043B \u0411\u0430\u0440\u043E\u0434\u0436\u043E \u0422\u043E\u043D\u043A\u0441.",
  t_of_s_p_7: "\u0411\u0443\u0434\u0443\u0447\u0438 \u0434\u0438\u043A\u0443\u043D\u043E\u043C-\u0434\u0438\u043A\u0443\u043D\u043E\u043C, \u0442\u043E\u0431\u0442\u043E \u043B\u044E\u0434\u0438\u043D\u043E\u044E, \u044F\u043A\u0430 \u0432\u0438\u0442\u044F\u0433\u043D\u0443\u043B\u0430 \u043B\u0443\u043A-\u0432\u0435\u0441\u043B\u043E \u0443 \u0441\u0432\u043E\u0454\u043C\u0443 \u0447\u043E\u0432\u043D\u0456 (\u0434\u0440\u0443\u0433\u0438\u0439 - \u0432\u043F\u0435\u0440\u0435\u0434), - \u043C\u0456\u0439 \u0432\u0435\u0441\u0435\u043B\u0438\u0439 \u043E\u0431\u043E\u0432'\u044F\u0437\u043E\u043A \u0432\u0456\u0434\u0432\u0456\u0434\u0443\u0432\u0430\u0442\u0438 \u0439\u043E\u0433\u043E, \u0431\u0435\u0440\u0443\u0447\u0438 \u0446\u044E \u0432\u0430\u0436\u043A\u043E \u0441\u043A\u0440\u0435\u043C\u0431\u043D\u0443 \u0441\u0443\u0442\u0438\u0447\u043A\u0443 \u043D\u0430 \u0441\u043F\u0438\u043D\u0456 \u043C\u0435\u0440\u0442\u0432\u043E\u0433\u043E \u043A\u0438\u0442\u0430. \u0412\u0438 \u0431\u0430\u0447\u0438\u043B\u0438 \u0456\u0442\u0430\u043B\u0456\u0439\u0441\u044C\u043A\u0438\u0445 \u0445\u043B\u043E\u043F\u0446\u0456\u0432-\u043E\u0440\u0433\u0430\u043D\u0456\u0432, \u0449\u043E \u0442\u0440\u0438\u043C\u0430\u044E\u0442\u044C \u0434\u043E\u0432\u0433\u0438\u0439 \u0448\u043D\u0443\u0440 \u0442\u0430\u043D\u0446\u044E\u0432\u0430\u043B\u044C\u043D\u043E\u0457 \u043C\u0430\u0432\u043F\u0438. \u041F\u0440\u043E\u0441\u0442\u043E \u0442\u0430\u043A, \u0437 \u043A\u0440\u0443\u0442\u043E\u0457 \u0441\u0442\u043E\u0440\u043E\u043D\u0438 \u043A\u043E\u0440\u0430\u0431\u043B\u044F, \u044F \u0442\u0440\u0438\u043C\u0430\u0432 \u041A\u0432\u0456\u043A\u0435\u0433\u0430 \u0442\u0430\u043C, \u0443 \u043C\u043E\u0440\u0456, \u0442\u0438\u043C, \u0449\u043E \u0442\u0435\u0445\u043D\u0456\u0447\u043D\u043E \u043D\u0430\u0437\u0438\u0432\u0430\u0454\u0442\u044C\u0441\u044F \u0432 \u0440\u0438\u0431\u043D\u043E\u043C\u0443 \u0433\u043E\u0441\u043F\u043E\u0434\u0430\u0440\u0441\u0442\u0432\u0456 \u043C\u0430\u0432\u043F\u043E\u044E \u043C\u043E\u0442\u0443\u0437\u043A\u0443, \u043F\u0440\u0438\u043A\u0440\u0456\u043F\u043B\u0435\u043D\u0443 \u0434\u043E \u043C\u0456\u0446\u043D\u043E\u0457 \u0441\u043C\u0443\u0433\u0438 \u043F\u043E\u043B\u043E\u0442\u043D\u0430, \u043F\u0456\u0434\u043F\u0435\u0440\u0435\u0437\u0430\u043D\u043E\u0457 \u043D\u0430\u0432\u043A\u043E\u043B\u043E \u0442\u0430\u043B\u0456\u0457.",
  t_of_s_p_8: "\u0420\u0435\u0442\u0440\u043E \u0437\u0430\u0439\u043C\u0430\u044E\u0442\u044C \u043E\u0440\u0433\u0430\u043D\u0456\u0447\u043D\u0456, \u043F\u0435\u043D\u044C\u043E\u0432\u0456 \u043F\u043E\u0448\u0430\u0440\u043F\u0430\u043D\u0456 \u0448\u0438\u043A\u0430\u0440\u043D\u0456 \u0448\u0438\u043A\u0430\u0440\u043D\u0456 \u043F\u0430\u0440\u0442\u0456\u0457 \u043D\u0430 \u0434\u0430\u0445\u0443 DIY normcore. \u041D\u0430\u0441\u043F\u0440\u0430\u0432\u0434\u0456 \u043C\u0430\u0439\u0441\u0442\u0440\u0438\u043D\u0456 \u043E\u0440\u0433\u0430\u043D\u0456\u0447\u043D\u0456 \u0437\u0430\u0439\u043C\u0430\u044E\u0442\u044C, \u0423\u0435\u0441 \u0410\u043D\u0434\u0435\u0440\u0441\u043E\u043D, \u0449\u043E \u0431 \u0442\u0430\u043C \u043D\u0435 \u0431\u0443\u043B\u043E, \u0432\u0441\u0435, \u0449\u043E \u0432\u0438\u043F\u0430\u043B\u043E.",
  t_of_s_p_9: "\u0420\u0435\u0442\u0440\u043E \u0437\u0430\u0439\u043C\u0430\u044E\u0442\u044C \u043E\u0440\u0433\u0430\u043D\u0456\u0447\u043D\u0456, \u043F\u0435\u043D\u044C\u043E\u0432\u0456 \u043F\u043E\u0448\u0430\u0440\u043F\u0430\u043D\u0456 \u0448\u0438\u043A\u0430\u0440\u043D\u0456 \u0448\u0438\u043A\u0430\u0440\u043D\u0456 \u043F\u0430\u0440\u0442\u0456\u0457 \u043D\u0430 \u0434\u0430\u0445\u0443 DIY normcore. \u041D\u0430\u0441\u043F\u0440\u0430\u0432\u0434\u0456 \u043C\u0430\u0439\u0441\u0442\u0440\u0438\u043D\u0456 \u043E\u0440\u0433\u0430\u043D\u0456\u0447\u043D\u0456 \u0437\u0430\u0439\u043C\u0430\u044E\u0442\u044C, \u0423\u0435\u0441 \u0410\u043D\u0434\u0435\u0440\u0441\u043E\u043D, \u0449\u043E \u0431 \u0442\u0430\u043C \u043D\u0435 \u0431\u0443\u043B\u043E, \u0432\u0441\u0435, \u0449\u043E \u0432\u0438\u043F\u0430\u043B\u043E.",
  // privacy
  p_p_1: "\u0426\u044F \u0423\u0433\u043E\u0434\u0430 \u043F\u0440\u043E \u043D\u0430\u0434\u0430\u043D\u043D\u044F \u043F\u043E\u0441\u043B\u0443\u0433 \u043D\u0430 \u0421\u0430\u0439\u0442\u0456 (\"\u0423\u043C\u043E\u0432\u0438\") \u0440\u0435\u0433\u0443\u043B\u044E\u0454 \u0432\u0430\u0448\u0435 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0438 \u0440\u0438\u043D\u043A\u0443 Motipio \u2122 \u0447\u0435\u0440\u0435\u0437 \u043F\u043E\u0441\u043B\u0443\u0433\u0438, \u044F\u043A\u0456 \u043C\u0438 \u043D\u0430\u0434\u0430\u0454\u043C\u043E (\u0443 \u0441\u0443\u043A\u0443\u043F\u043D\u043E\u0441\u0442\u0456 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442, \u0434\u043E\u0434\u0430\u0442\u043E\u043A \u0442\u0430 \u043F\u043E\u0441\u043B\u0443\u0433\u0438, \u044F\u043A\u0456 \u043D\u0430\u0437\u0438\u0432\u0430\u044E\u0442\u044C\u0441\u044F \u043D\u0430\u0448\u0438\u043C \"\u0421\u0430\u0439\u0442\u043E\u043C\"). \"\u0412\u0438\" \u0441\u0442\u043E\u0441\u0443\u0454\u0442\u044C\u0441\u044F \u0432\u0430\u0441 \u044F\u043A \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u043D\u0430\u0448\u043E\u0433\u043E \u0421\u0430\u0439\u0442\u0443.",
  p_p_2: "\u0420\u0435\u0442\u0440\u043E \u0437\u0430\u0439\u043C\u0430\u044E\u0442\u044C \u043E\u0440\u0433\u0430\u043D\u0456\u0447\u043D\u0456, \u043F\u0435\u043D\u044C\u043E\u0432\u0456 \u043F\u043E\u0448\u0430\u0440\u043F\u0430\u043D\u0456 \u0448\u0438\u043A\u0430\u0440\u043D\u0456 \u0448\u0438\u043A\u0430\u0440\u043D\u0456 \u043F\u0430\u0440\u0442\u0456\u0457 \u043D\u0430 \u0434\u0430\u0445\u0443 DIY normcore. \u041D\u0430\u0441\u043F\u0440\u0430\u0432\u0434\u0456 \u043C\u0430\u0439\u0441\u0442\u0440\u0438\u043D\u0456 \u043E\u0440\u0433\u0430\u043D\u0456\u0447\u043D\u0456 \u0437\u0430\u0439\u043C\u0430\u044E\u0442\u044C, \u0423\u0435\u0441 \u0410\u043D\u0434\u0435\u0440\u0441\u043E\u043D, \u0449\u043E \u0431 \u0442\u0430\u043C \u043D\u0435 \u0431\u0443\u043B\u043E, \u0432\u0441\u0435, \u0449\u043E \u0432\u0438\u043F\u0430\u043B\u043E. \u0425\u0435\u0448\u0442\u0435\u0433 \u0445\u0435\u043B\u044C\u0432\u043E\u0430 \u043A\u0440\u0430\u0444\u0442\u043E\u0432\u043E\u0433\u043E \u043A\u0440\u0430\u0444\u0442\u043E\u0432\u043E\u0433\u043E \u043F\u0438\u0432\u0430 tote bag stumptown quinoa. Dreamcatcher locavore iPhone \u0437 \u0445\u043E\u043B\u043E\u0434\u043D\u043E\u044E \u0445\u0432\u0438\u043B\u0435\u044E, \u0437\u0430\u0439\u043C\u0430\u044E\u0442\u044C \u0446\u0456\u043B\u044C\u043E\u0432\u0438\u0439 \u0444\u043E\u043D\u0434 \u043F\u043E\u0432\u0456\u043B\u044C\u043D\u043E\u0432\u0443\u0433\u043B\u0435\u0432\u043E\u0434\u043D\u043E\u0433\u043E \u0432\u0438\u043D\u0437\u0430\u0432\u043E\u0434\u0443 \u043D\u0430\u0440\u0432\u0430\u043B\u0443. Ennui \u043F\u043E\u0448\u0430\u0440\u043F\u0430\u043D\u0438\u0439 \u0448\u0438\u043A \u0411\u0440\u0443\u043A\u043B\u0456\u043D, \u0444\u0430\u043D-\u043F\u0430\u043A\u0435\u0442 \u043F\u0440\u044F\u043C\u0430 \u0442\u043E\u0440\u0433\u0456\u0432\u043B\u044F Tumblr \u0442\u0430\u0442\u0443\u044E\u0432\u0430\u0432 \u0440\u0435\u0442\u0440\u043E-\u043F\u043E\u043B\u044F\u0440\u043E\u0457\u0434 \u0433\u043B\u0438\u0431\u043E\u043A\u0438\u0439 v chia \u0432\u0456\u043D\u0456\u043B\u043E\u0432\u0438\u0439 \u043F\u0440\u043E\u0434\u043E\u0432\u043E\u043B\u044C\u0447\u0438\u0439 \u0432\u0430\u043D\u0442\u0430\u0436\u043D\u0438\u043A Austin Tonx. \u0411\u0443\u043A\u0432\u0430\u043B\u044C\u043D\u043E \u0442\u044C\u0444\u0443-\u0443\u043C\u0430\u043C\u0456, \u043C\u0430\u0440\u0438\u043D\u043E\u0432\u0430\u043D\u0456 \u0434\u0436\u0438\u043D\u0441\u043E\u0432\u0456 \u0448\u043E\u0440\u0442\u0438 Wes Anderson \u0432\u0438\u0441\u043E\u043A\u043E\u0433\u043E \u0434\u0440\u0443\u043A\u0443. \u0411\u0456\u043E\u0434\u0438\u0437\u0435\u043B\u044C\u043D\u0438\u0439 \u043D\u0430\u0440\u0432\u0430\u043B \u0411\u0430\u0440\u043E\u0434\u0436\u043E \u0422\u043E\u043D\u043A\u0441",
  p_p_3: "\u0411\u0443\u0434\u0443\u0447\u0438 \u0434\u0438\u043A\u0443\u043D\u043E\u043C-\u0434\u0438\u043A\u0443\u043D\u043E\u043C, \u0442\u043E\u0431\u0442\u043E \u043B\u044E\u0434\u0438\u043D\u043E\u044E, \u044F\u043A\u0430 \u0432\u0438\u0442\u044F\u0433\u043D\u0443\u043B\u0430 \u043B\u0443\u043A-\u0432\u0435\u0441\u043B\u043E \u0443 \u0441\u0432\u043E\u0454\u043C\u0443 \u0447\u043E\u0432\u043D\u0456 (\u0434\u0440\u0443\u0433\u0438\u0439 - \u0432\u043F\u0435\u0440\u0435\u0434), - \u043C\u0456\u0439 \u0432\u0435\u0441\u0435\u043B\u0438\u0439 \u043E\u0431\u043E\u0432'\u044F\u0437\u043E\u043A \u0432\u0456\u0434\u0432\u0456\u0434\u0443\u0432\u0430\u0442\u0438 \u0439\u043E\u0433\u043E, \u043F\u0440\u0438\u0439\u043C\u0430\u044E\u0447\u0438 \u0442\u043E\u0439 \u0432\u0430\u0436\u043A\u043E \u0441\u043A\u0440\u0435\u043C\u0431\u043B\u0435\u043D\u0438\u0439 \u0441\u0443\u0442\u0438\u0447\u043A\u0443 \u043D\u0430 \u0441\u043F\u0438\u043D\u0456 \u043C\u0435\u0440\u0442\u0432\u043E\u0433\u043E \u043A\u0438\u0442\u0430. \u0412\u0438 \u0431\u0430\u0447\u0438\u043B\u0438 \u0456\u0442\u0430\u043B\u0456\u0439\u0441\u044C\u043A\u0438\u0445 \u0445\u043B\u043E\u043F\u0446\u0456\u0432-\u043E\u0440\u0433\u0430\u043D\u0456\u0432, \u0449\u043E \u0442\u0440\u0438\u043C\u0430\u044E\u0442\u044C \u0434\u043E\u0432\u0433\u0438\u0439 \u0448\u043D\u0443\u0440 \u0442\u0430\u043D\u0446\u044E\u0432\u0430\u043B\u044C\u043D\u043E\u0457 \u043C\u0430\u0432\u043F\u0438. \u041F\u0440\u043E\u0441\u0442\u043E \u0442\u0430\u043A, \u0437 \u043A\u0440\u0443\u0442\u043E\u0457 \u0441\u0442\u043E\u0440\u043E\u043D\u0438 \u043A\u043E\u0440\u0430\u0431\u043B\u044F, \u044F \u0442\u0440\u0438\u043C\u0430\u0432 \u041A\u0432\u0456\u043A\u0435\u0433\u0430 \u0442\u0430\u043C, \u0443 \u043C\u043E\u0440\u0456, \u0442\u0438\u043C, \u0449\u043E \u0442\u0435\u0445\u043D\u0456\u0447\u043D\u043E \u043D\u0430\u0437\u0438\u0432\u0430\u0454\u0442\u044C\u0441\u044F \u0432 \u0440\u0438\u0431\u043D\u043E\u043C\u0443 \u0433\u043E\u0441\u043F\u043E\u0434\u0430\u0440\u0441\u0442\u0432\u0456 \u043C\u0430\u0432\u043F\u043E\u044E \u043C\u043E\u0442\u0443\u0437\u043A\u0443, \u043F\u0440\u0438\u043A\u0440\u0456\u043F\u043B\u0435\u043D\u0443 \u0434\u043E \u043C\u0456\u0446\u043D\u043E\u0457 \u0441\u043C\u0443\u0433\u0438 \u043F\u043E\u043B\u043E\u0442\u043D\u0430, \u043F\u0456\u0434\u043F\u0435\u0440\u0435\u0437\u0430\u043D\u043E\u0457 \u043D\u0430\u0432\u043A\u043E\u043B\u043E \u0442\u0430\u043B\u0456\u0457",
  p_p_4: "\u0411\u0443\u0434\u0443\u0447\u0438 \u0434\u0438\u043A\u0443\u043D\u043E\u043C-\u0434\u0438\u043A\u0443\u043D\u043E\u043C, \u0442\u043E\u0431\u0442\u043E \u043B\u044E\u0434\u0438\u043D\u043E\u044E, \u044F\u043A\u0430 \u0432\u0438\u0442\u044F\u0433\u043D\u0443\u043B\u0430 \u043B\u0443\u043A-\u0432\u0435\u0441\u043B\u043E \u0443 \u0441\u0432\u043E\u0454\u043C\u0443 \u0447\u043E\u0432\u043D\u0456 (\u0434\u0440\u0443\u0433\u0438\u0439 - \u0432\u043F\u0435\u0440\u0435\u0434), - \u043C\u0456\u0439 \u0432\u0435\u0441\u0435\u043B\u0438\u0439 \u043E\u0431\u043E\u0432'\u044F\u0437\u043E\u043A \u0432\u0456\u0434\u0432\u0456\u0434\u0443\u0432\u0430\u0442\u0438 \u0439\u043E\u0433\u043E, \u043F\u0440\u0438\u0439\u043C\u0430\u044E\u0447\u0438 \u0442\u043E\u0439 \u0432\u0430\u0436\u043A\u043E \u0441\u043A\u0440\u0435\u043C\u0431\u043B\u0435\u043D\u0438\u0439 \u0441\u0443\u0442\u0438\u0447\u043A\u0443 \u043D\u0430 \u0441\u043F\u0438\u043D\u0456 \u043C\u0435\u0440\u0442\u0432\u043E\u0433\u043E \u043A\u0438\u0442\u0430. \u0412\u0438 \u0431\u0430\u0447\u0438\u043B\u0438 \u0456\u0442\u0430\u043B\u0456\u0439\u0441\u044C\u043A\u0438\u0445 \u0445\u043B\u043E\u043F\u0446\u0456\u0432-\u043E\u0440\u0433\u0430\u043D\u0456\u0432, \u0449\u043E \u0442\u0440\u0438\u043C\u0430\u044E\u0442\u044C \u0434\u043E\u0432\u0433\u0438\u0439 \u0448\u043D\u0443\u0440 \u0442\u0430\u043D\u0446\u044E\u0432\u0430\u043B\u044C\u043D\u043E\u0457 \u043C\u0430\u0432\u043F\u0438. \u041F\u0440\u043E\u0441\u0442\u043E \u0442\u0430\u043A, \u0437 \u043A\u0440\u0443\u0442\u043E\u0457 \u0441\u0442\u043E\u0440\u043E\u043D\u0438 \u043A\u043E\u0440\u0430\u0431\u043B\u044F, \u044F \u0442\u0440\u0438\u043C\u0430\u0432 \u041A\u0432\u0456\u043A\u0435\u0433\u0430 \u0442\u0430\u043C, \u0443 \u043C\u043E\u0440\u0456, \u0442\u0438\u043C, \u0449\u043E \u0442\u0435\u0445\u043D\u0456\u0447\u043D\u043E \u043D\u0430\u0437\u0438\u0432\u0430\u0454\u0442\u044C\u0441\u044F \u0432 \u0440\u0438\u0431\u043D\u043E\u043C\u0443 \u0433\u043E\u0441\u043F\u043E\u0434\u0430\u0440\u0441\u0442\u0432\u0456 \u043C\u0430\u0432\u043F\u043E\u044E \u043C\u043E\u0442\u0443\u0437\u043A\u0443, \u043F\u0440\u0438\u043A\u0440\u0456\u043F\u043B\u0435\u043D\u0443 \u0434\u043E \u043C\u0456\u0446\u043D\u043E\u0457 \u0441\u043C\u0443\u0433\u0438 \u043F\u043E\u043B\u043E\u0442\u043D\u0430, \u043F\u0456\u0434\u043F\u0435\u0440\u0435\u0437\u0430\u043D\u043E\u0457 \u043D\u0430\u0432\u043A\u043E\u043B\u043E \u0442\u0430\u043B\u0456\u0457",
  p_p_5: "\u0411\u0443\u0434\u0443\u0447\u0438 \u0434\u0438\u043A\u0443\u043D\u043E\u043C-\u0434\u0438\u043A\u0443\u043D\u043E\u043C, \u0442\u043E\u0431\u0442\u043E \u043B\u044E\u0434\u0438\u043D\u043E\u044E, \u044F\u043A\u0430 \u0432\u0438\u0442\u044F\u0433\u043D\u0443\u043B\u0430 \u043B\u0443\u043A-\u0432\u0435\u0441\u043B\u043E \u0443 \u0441\u0432\u043E\u0454\u043C\u0443 \u0447\u043E\u0432\u043D\u0456 (\u0434\u0440\u0443\u0433\u0438\u0439 - \u0432\u043F\u0435\u0440\u0435\u0434), - \u043C\u0456\u0439 \u0432\u0435\u0441\u0435\u043B\u0438\u0439 \u043E\u0431\u043E\u0432'\u044F\u0437\u043E\u043A \u0432\u0456\u0434\u0432\u0456\u0434\u0443\u0432\u0430\u0442\u0438 \u0439\u043E\u0433\u043E, \u0431\u0435\u0440\u0443\u0447\u0438 \u0446\u044E \u0432\u0430\u0436\u043A\u043E \u0441\u043A\u0440\u0435\u043C\u0431\u043D\u0443 \u0441\u0443\u0442\u0438\u0447\u043A\u0443 \u043D\u0430 \u0441\u043F\u0438\u043D\u0456 \u043C\u0435\u0440\u0442\u0432\u043E\u0433\u043E \u043A\u0438\u0442\u0430. \u0412\u0438 \u0431\u0430\u0447\u0438\u043B\u0438 \u0456\u0442\u0430\u043B\u0456\u0439\u0441\u044C\u043A\u0438\u0445 \u0445\u043B\u043E\u043F\u0446\u0456\u0432-\u043E\u0440\u0433\u0430\u043D\u0456\u0432, \u0449\u043E \u0442\u0440\u0438\u043C\u0430\u044E\u0442\u044C \u0434\u043E\u0432\u0433\u0438\u0439 \u0448\u043D\u0443\u0440 \u0442\u0430\u043D\u0446\u044E\u0432\u0430\u043B\u044C\u043D\u043E\u0457 \u043C\u0430\u0432\u043F\u0438. \u041F\u0440\u043E\u0441\u0442\u043E \u0442\u0430\u043A, \u0437 \u043A\u0440\u0443\u0442\u043E\u0457 \u0441\u0442\u043E\u0440\u043E\u043D\u0438 \u043A\u043E\u0440\u0430\u0431\u043B\u044F, \u044F \u0442\u0440\u0438\u043C\u0430\u0432 \u041A\u0432\u0456\u043A\u0435\u0433\u0430 \u0442\u0430\u043C, \u0443 \u043C\u043E\u0440\u0456, \u0442\u0438\u043C, \u0449\u043E \u0442\u0435\u0445\u043D\u0456\u0447\u043D\u043E \u043D\u0430\u0437\u0438\u0432\u0430\u0454\u0442\u044C\u0441\u044F \u0432 \u0440\u0438\u0431\u043D\u043E\u043C\u0443 \u0433\u043E\u0441\u043F\u043E\u0434\u0430\u0440\u0441\u0442\u0432\u0456 \u043C\u0430\u0432\u043F\u043E\u044E \u043C\u043E\u0442\u0443\u0437\u043A\u0443, \u043F\u0440\u0438\u043A\u0440\u0456\u043F\u043B\u0435\u043D\u0443 \u0434\u043E \u043C\u0456\u0446\u043D\u043E\u0457 \u0441\u043C\u0443\u0433\u0438 \u043F\u043E\u043B\u043E\u0442\u043D\u0430, \u043F\u0456\u0434\u043F\u0435\u0440\u0435\u0437\u0430\u043D\u043E\u0457 \u043D\u0430\u0432\u043A\u043E\u043B\u043E \u0442\u0430\u043B\u0456\u0457.",
  p_p_6: "\u0420\u0435\u0442\u0440\u043E \u0437\u0430\u0439\u043C\u0430\u044E\u0442\u044C \u043E\u0440\u0433\u0430\u043D\u0456\u0447\u043D\u0456, \u043F\u0435\u043D\u044C\u043E\u0432\u0456 \u043F\u043E\u0448\u0430\u0440\u043F\u0430\u043D\u0456 \u0448\u0438\u043A\u0430\u0440\u043D\u0456 \u0448\u0438\u043A\u0430\u0440\u043D\u0456 \u043F\u0430\u0440\u0442\u0456\u0457 \u043D\u0430 \u0434\u0430\u0445\u0443 DIY normcore. \u041D\u0430\u0441\u043F\u0440\u0430\u0432\u0434\u0456 \u043C\u0430\u0439\u0441\u0442\u0440\u0438\u043D\u0456 \u043E\u0440\u0433\u0430\u043D\u0456\u0447\u043D\u0456 \u0437\u0430\u0439\u043C\u0430\u044E\u0442\u044C, \u0423\u0435\u0441 \u0410\u043D\u0434\u0435\u0440\u0441\u043E\u043D, \u0449\u043E \u0431 \u0442\u0430\u043C \u043D\u0435 \u0431\u0443\u043B\u043E, \u0432\u0441\u0435, \u0449\u043E \u0432\u0438\u043F\u0430\u043B\u043E. \u0425\u0435\u0448\u0442\u0435\u0433 \u0445\u0435\u043B\u044C\u0432\u043E\u0430 \u043A\u0440\u0430\u0444\u0442\u043E\u0432\u043E\u0433\u043E \u043A\u0440\u0430\u0444\u0442\u043E\u0432\u043E\u0433\u043E \u043F\u0438\u0432\u0430 tote bag stumptown quinoa. Dreamcatcher locavore iPhone \u0437 \u0445\u043E\u043B\u043E\u0434\u043D\u043E\u044E \u0445\u0432\u0438\u043B\u0435\u044E, \u0437\u0430\u0439\u043C\u0430\u044E\u0442\u044C \u0446\u0456\u043B\u044C\u043E\u0432\u0438\u0439 \u0444\u043E\u043D\u0434 \u043F\u043E\u0432\u0456\u043B\u044C\u043D\u043E\u0432\u0443\u0433\u043B\u0435\u0432\u043E\u0434\u043D\u043E\u0433\u043E \u0432\u0438\u043D\u0437\u0430\u0432\u043E\u0434\u0443 \u043D\u0430\u0440\u0432\u0430\u043B\u0443. Ennui \u043F\u043E\u0448\u0430\u0440\u043F\u0430\u043D\u0438\u0439 \u0448\u0438\u043A \u0411\u0440\u0443\u043A\u043B\u0456\u043D, \u0444\u0430\u043D-\u043F\u0430\u043A\u0435\u0442 \u043F\u0440\u044F\u043C\u0430 \u0442\u043E\u0440\u0433\u0456\u0432\u043B\u044F Tumblr \u0442\u0430\u0442\u0443\u044E\u0432\u0430\u0432 \u0440\u0435\u0442\u0440\u043E-\u043F\u043E\u043B\u044F\u0440\u043E\u0457\u0434 \u0433\u043B\u0438\u0431\u043E\u043A\u0438\u0439 v chia \u0432\u0456\u043D\u0456\u043B\u043E\u0432\u0438\u0439 \u043F\u0440\u043E\u0434\u043E\u0432\u043E\u043B\u044C\u0447\u0438\u0439 \u0432\u0430\u043D\u0442\u0430\u0436\u043D\u0438\u043A Austin Tonx. \u0411\u0443\u043A\u0432\u0430\u043B\u044C\u043D\u043E \u0442\u044C\u0444\u0443-\u0443\u043C\u0430\u043C\u0456, \u043C\u0430\u0440\u0438\u043D\u043E\u0432\u0430\u043D\u0456 \u0434\u0436\u0438\u043D\u0441\u043E\u0432\u0456 \u0448\u043E\u0440\u0442\u0438 Wes Anderson \u0432\u0438\u0441\u043E\u043A\u043E\u0433\u043E \u0434\u0440\u0443\u043A\u0443. \u0411\u0456\u043E\u0434\u0438\u0437\u0435\u043B\u044C\u043D\u0438\u0439 \u043D\u0430\u0440\u0432\u0430\u043B \u0411\u0430\u0440\u043E\u0434\u0436\u043E \u0422\u043E\u043D\u043A\u0441.",
  p_p_7: "\u0420\u0435\u0442\u0440\u043E \u0437\u0430\u0439\u043C\u0430\u044E\u0442\u044C \u043E\u0440\u0433\u0430\u043D\u0456\u0447\u043D\u0456, \u043F\u0435\u043D\u044C\u043E\u0432\u0456 \u043F\u043E\u0448\u0430\u0440\u043F\u0430\u043D\u0456 \u0448\u0438\u043A\u0430\u0440\u043D\u0456 \u0448\u0438\u043A\u0430\u0440\u043D\u0456 \u043F\u0430\u0440\u0442\u0456\u0457 \u043D\u0430 \u0434\u0430\u0445\u0443 DIY normcore. \u041D\u0430\u0441\u043F\u0440\u0430\u0432\u0434\u0456 \u043C\u0430\u0439\u0441\u0442\u0440\u0438\u043D\u0456 \u043E\u0440\u0433\u0430\u043D\u0456\u0447\u043D\u0456 \u0437\u0430\u0439\u043C\u0430\u044E\u0442\u044C, \u0423\u0435\u0441 \u0410\u043D\u0434\u0435\u0440\u0441\u043E\u043D, \u0449\u043E \u0431 \u0442\u0430\u043C \u043D\u0435 \u0431\u0443\u043B\u043E, \u0432\u0441\u0435, \u0449\u043E \u0432\u0438\u043F\u0430\u043B\u043E. \u0425\u0435\u0448\u0442\u0435\u0433 \u0445\u0435\u043B\u044C\u0432\u043E\u0430 \u043A\u0440\u0430\u0444\u0442\u043E\u0432\u043E\u0433\u043E \u043A\u0440\u0430\u0444\u0442\u043E\u0432\u043E\u0433\u043E \u043F\u0438\u0432\u0430 tote bag stumptown quinoa. Dreamcatcher locavore iPhone \u0437 \u0445\u043E\u043B\u043E\u0434\u043D\u043E\u044E \u0445\u0432\u0438\u043B\u0435\u044E, \u0437\u0430\u0439\u043C\u0430\u044E\u0442\u044C \u0446\u0456\u043B\u044C\u043E\u0432\u0438\u0439 \u0444\u043E\u043D\u0434 \u043F\u043E\u0432\u0456\u043B\u044C\u043D\u043E\u0432\u0443\u0433\u043B\u0435\u0432\u043E\u0434\u043D\u043E\u0433\u043E \u0432\u0438\u043D\u0437\u0430\u0432\u043E\u0434\u0443 \u043D\u0430\u0440\u0432\u0430\u043B\u0443. Ennui \u043F\u043E\u0448\u0430\u0440\u043F\u0430\u043D\u0438\u0439 \u0448\u0438\u043A \u0411\u0440\u0443\u043A\u043B\u0456\u043D, \u0444\u0430\u043D-\u043F\u0430\u043A\u0435\u0442 \u043F\u0440\u044F\u043C\u0430 \u0442\u043E\u0440\u0433\u0456\u0432\u043B\u044F Tumblr \u0442\u0430\u0442\u0443\u044E\u0432\u0430\u0432 \u0440\u0435\u0442\u0440\u043E-\u043F\u043E\u043B\u044F\u0440\u043E\u0457\u0434 \u0433\u043B\u0438\u0431\u043E\u043A\u0438\u0439 v chia \u0432\u0456\u043D\u0456\u043B\u043E\u0432\u0438\u0439 \u043F\u0440\u043E\u0434\u043E\u0432\u043E\u043B\u044C\u0447\u0438\u0439 \u0432\u0430\u043D\u0442\u0430\u0436\u043D\u0438\u043A Austin Tonx. \u0411\u0443\u043A\u0432\u0430\u043B\u044C\u043D\u043E \u0442\u044C\u0444\u0443-\u0443\u043C\u0430\u043C\u0456, \u043C\u0430\u0440\u0438\u043D\u043E\u0432\u0430\u043D\u0456 \u0434\u0436\u0438\u043D\u0441\u043E\u0432\u0456 \u0448\u043E\u0440\u0442\u0438 Wes Anderson \u0432\u0438\u0441\u043E\u043A\u043E\u0433\u043E \u0434\u0440\u0443\u043A\u0443.",
  p_p_8: "Retro occupy organic, stumptown shabby chic pour-over roof party DIY normcore. Actually artisan organic occupy, Wes Anderson ugh whatever pour-over gastropub selvage. Chillwave craft beer tote bag stumptown quinoa hashtag. Dreamcatcher locavore iPhone chillwave, occupy trust fund slow-carb distillery art party narwhal. Ennui shabby chic Brooklyn, fanny pack direct trade Tumblr tattooed retro polaroid deep v chia vinyl Austin Tonx food truck. Literally ugh umami, pickled jean shorts Wes Anderson letterpress. Banjo Tonx beard biodiesel narwhal.",
  p_p_9: "\u0420\u0435\u0442\u0440\u043E \u0437\u0430\u0439\u043C\u0430\u044E\u0442\u044C \u043E\u0440\u0433\u0430\u043D\u0456\u0447\u043D\u0456, \u043F\u0435\u043D\u044C\u043E\u0432\u0456 \u043F\u043E\u0448\u0430\u0440\u043F\u0430\u043D\u0456 \u0448\u0438\u043A\u0430\u0440\u043D\u0456 \u0448\u0438\u043A\u0430\u0440\u043D\u0456 \u043F\u0430\u0440\u0442\u0456\u0457 \u043D\u0430 \u0434\u0430\u0445\u0443 DIY normcore. \u041D\u0430\u0441\u043F\u0440\u0430\u0432\u0434\u0456 \u043C\u0430\u0439\u0441\u0442\u0440\u0438\u043D\u0456 \u043E\u0440\u0433\u0430\u043D\u0456\u0447\u043D\u0456 \u0437\u0430\u0439\u043C\u0430\u044E\u0442\u044C, \u0423\u0435\u0441 \u0410\u043D\u0434\u0435\u0440\u0441\u043E\u043D, \u0449\u043E \u0431 \u0442\u0430\u043C \u043D\u0435 \u0431\u0443\u043B\u043E, \u0432\u0441\u0435, \u0449\u043E \u0432\u0438\u043F\u0430\u043B\u043E. \u0425\u0435\u0448\u0442\u0435\u0433 \u0445\u0435\u043B\u044C\u0432\u043E\u0430 \u043A\u0440\u0430\u0444\u0442\u043E\u0432\u043E\u0433\u043E \u043A\u0440\u0430\u0444\u0442\u043E\u0432\u043E\u0433\u043E \u043F\u0438\u0432\u0430 tote bag stumptown quinoa. Dreamcatcher locavore iPhone \u0437 \u0445\u043E\u043B\u043E\u0434\u043D\u043E\u044E \u0445\u0432\u0438\u043B\u0435\u044E, \u0437\u0430\u0439\u043C\u0430\u044E\u0442\u044C \u0446\u0456\u043B\u044C\u043E\u0432\u0438\u0439 \u0444\u043E\u043D\u0434 \u043F\u043E\u0432\u0456\u043B\u044C\u043D\u043E\u0432\u0443\u0433\u043B\u0435\u0432\u043E\u0434\u043D\u043E\u0433\u043E \u0432\u0438\u043D\u0437\u0430\u0432\u043E\u0434\u0443 \u043D\u0430\u0440\u0432\u0430\u043B\u0443. Ennui \u043F\u043E\u0448\u0430\u0440\u043F\u0430\u043D\u0438\u0439 \u0448\u0438\u043A \u0411\u0440\u0443\u043A\u043B\u0456\u043D, \u0444\u0430\u043D-\u043F\u0430\u043A\u0435\u0442 \u043F\u0440\u044F\u043C\u0430 \u0442\u043E\u0440\u0433\u0456\u0432\u043B\u044F Tumblr \u0442\u0430\u0442\u0443\u044E\u0432\u0430\u0432 \u0440\u0435\u0442\u0440\u043E-\u043F\u043E\u043B\u044F\u0440\u043E\u0457\u0434 \u0433\u043B\u0438\u0431\u043E\u043A\u0438\u0439 v chia \u0432\u0456\u043D\u0456\u043B\u043E\u0432\u0438\u0439 \u043F\u0440\u043E\u0434\u043E\u0432\u043E\u043B\u044C\u0447\u0438\u0439 \u0432\u0430\u043D\u0442\u0430\u0436\u043D\u0438\u043A Austin Tonx. \u0411\u0443\u043A\u0432\u0430\u043B\u044C\u043D\u043E"
};
/* harmony default export */ __webpack_exports__["default"] = (Uk);

/***/ }),

/***/ "./src/js/policyLang/usa.js":
/*!**********************************!*\
  !*** ./src/js/policyLang/usa.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Usa = {
  // terms of service
  t_of_s_p_1: "This Site Terms of Service Agreement (\u201CTerms\u201D) governs your use of the Motipio\u2122 marketplace platform, through the services we provide (collectively, the website, App, and services referred to as our \u201CSite\u201D). \u201CYou\u201D refers to you as a user of our Site.",
  t_of_s_p_2: " Retro occupy organic, stumptown shabby chic pour-over roof party DIY normcore. Actually artisan organic occupy, Wes Anderson ugh whatever pour-over gastropub selvage. Chillwave craft beer tote bag stumptown quinoa hashtag. Dreamcatcher locavore iPhone chillwave, occupy trust fund slow-carb distillery art party narwhal. Ennui shabby chic Brooklyn, fanny pack direct trade Tumblr tattooed retro polaroid deep v chia vinyl Austin Tonx food truck. Literally ugh umami, pickled jean shorts Wes Anderson letterpress. Banjo Tonx beard biodiesel narwhal. ",
  t_of_s_p_3: " Being the savage's bowsman, that is, the person who pulled the bow-oar in his boat (the second one from forward), it was my cheerful duty to attend upon him while taking that hard-scrabble scramble upon the dead whale's back. You have seen Italian organ-boys holding a dancing-ape by a long cord. Just so, from the ship's steep side, did I hold Queequeg down there in the sea, by what is technically called in the fishery a monkey-rope, attached to a strong strip of canvas belted round his waist.",
  t_of_s_p_4: "Retro occupy organic, stumptown shabby chic pour-over roof party DIY normcore. Actually artisan organic occupy, Wes Anderson ugh whatever pour-over gastropub selvage. Chillwave craft beer tote bag stumptown quinoa hashtag. Dreamcatcher locavore iPhone chillwave, occupy trust fund slow-carb distillery art party narwhal. Ennui shabby chic Brooklyn, fanny pack direct trade Tumblr tattooed retro polaroid deep v chia vinyl Austin Tonx food truck. Literally ugh umami, pickled jean shorts Wes Anderson letterpress. Banjo Tonx beard biodiesel narwhal.",
  t_of_s_p_5: " Being the savage's bowsman, that is, the person who pulled the bow-oar in his boat (the second one from forward), it was my cheerful duty to attend upon him while taking that hard-scrabble scramble upon the dead whale's back. You have seen Italian organ-boys holding a dancing-ape by a long cord. Just so, from the ship's steep side, did I hold Queequeg down there in the sea, by what is technically called in the fishery a monkey-rope, attached to a strong strip of canvas belted round his waist.",
  t_of_s_p_6: " Retro occupy organic, stumptown shabby chic pour-over roof party DIY normcore. Actually artisan organic occupy, Wes Anderson ugh whatever pour-over gastropub selvage. Chillwave craft beer tote bag stumptown quinoa hashtag. Dreamcatcher locavore iPhone chillwave, occupy trust fund slow-carb distillery art party narwhal. Ennui shabby chic Brooklyn, fanny pack direct trade Tumblr tattooed retro polaroid deep v chia vinyl Austin Tonx food truck. Literally ugh umami, pickled jean shorts Wes Anderson letterpress. Banjo Tonx beard biodiesel narwhal.",
  t_of_s_p_7: "Being the savage's bowsman, that is, the person who pulled the bow-oar in his boat (the second one from forward), it was my cheerful duty to attend upon him while taking that hard-scrabble scramble upon the dead whale's back. You have seen Italian organ-boys holding a dancing-ape by a long cord. Just so, from the ship's steep side, did I hold Queequeg down there in the sea, by what is technically called in the fishery a monkey-rope, attached to a strong strip of canvas belted round his waist.",
  t_of_s_p_8: "Retro occupy organic, stumptown shabby chic pour-over roof party DIY normcore. Actually artisan organic occupy, Wes Anderson ugh whatever pour-over gastropub selvage. Chillwave craft beer tote bag stumptown quinoa hashtag. Dreamcatcher locavore iPhone chillwave, occupy trust fund slow-carb distillery art party narwhal. Ennui shabby chic Brooklyn, fanny pack direct trade Tumblr tattooed retro polaroid deep v chia vinyl Austin Tonx food truck. Literally ugh umami, pickled jean shorts Wes Anderson letterpress. Banjo Tonx beard biodiesel narwhal.",
  t_of_s_p_9: " Being the savage's bowsman, that is, the person who pulled the bow-oar in his boat (the second one from forward), it was my cheerful duty to attend upon him while taking that hard-scrabble scramble upon the dead whale's back. You have seen Italian organ-boys holding a dancing-ape by a long cord. Just so, from the ship's steep side, did I hold Queequeg down there in the sea, by what is technically called in the fishery a monkey-rope, attached to a strong strip of canvas belted round his waist.",
  // privacy
  p_p_1: "This Site Terms of Service Agreement (\u201CTerms\u201D) governs your use of the Motipio\u2122 marketplace platform, through the services we provide (collectively, the website, App, and services referred to as our \u201CSite\u201D). \u201CYou\u201D refers to you as a user of our Site.",
  p_p_2: " Retro occupy organic, stumptown shabby chic pour-over roof party DIY normcore. Actually artisan organic occupy, Wes Anderson ugh whatever pour-over gastropub selvage. Chillwave craft beer tote bag stumptown quinoa hashtag. Dreamcatcher locavore iPhone chillwave, occupy trust fund slow-carb distillery art party narwhal. Ennui shabby chic Brooklyn, fanny pack direct trade Tumblr tattooed retro polaroid deep v chia vinyl Austin Tonx food truck. Literally ugh umami, pickled jean shorts Wes Anderson letterpress. Banjo Tonx beard biodiesel narwhal. ",
  p_p_3: " Being the savage's bowsman, that is, the person who pulled the bow-oar in his boat (the second one from forward), it was my cheerful duty to attend upon him while taking that hard-scrabble scramble upon the dead whale's back. You have seen Italian organ-boys holding a dancing-ape by a long cord. Just so, from the ship's steep side, did I hold Queequeg down there in the sea, by what is technically called in the fishery a monkey-rope, attached to a strong strip of canvas belted round his waist.",
  p_p_4: "Retro occupy organic, stumptown shabby chic pour-over roof party DIY normcore. Actually artisan organic occupy, Wes Anderson ugh whatever pour-over gastropub selvage. Chillwave craft beer tote bag stumptown quinoa hashtag. Dreamcatcher locavore iPhone chillwave, occupy trust fund slow-carb distillery art party narwhal. Ennui shabby chic Brooklyn, fanny pack direct trade Tumblr tattooed retro polaroid deep v chia vinyl Austin Tonx food truck. Literally ugh umami, pickled jean shorts Wes Anderson letterpress. Banjo Tonx beard biodiesel narwhal.",
  p_p_5: " Being the savage's bowsman, that is, the person who pulled the bow-oar in his boat (the second one from forward), it was my cheerful duty to attend upon him while taking that hard-scrabble scramble upon the dead whale's back. You have seen Italian organ-boys holding a dancing-ape by a long cord. Just so, from the ship's steep side, did I hold Queequeg down there in the sea, by what is technically called in the fishery a monkey-rope, attached to a strong strip of canvas belted round his waist.",
  p_p_6: " Retro occupy organic, stumptown shabby chic pour-over roof party DIY normcore. Actually artisan organic occupy, Wes Anderson ugh whatever pour-over gastropub selvage. Chillwave craft beer tote bag stumptown quinoa hashtag. Dreamcatcher locavore iPhone chillwave, occupy trust fund slow-carb distillery art party narwhal. Ennui shabby chic Brooklyn, fanny pack direct trade Tumblr tattooed retro polaroid deep v chia vinyl Austin Tonx food truck. Literally ugh umami, pickled jean shorts Wes Anderson letterpress. Banjo Tonx beard biodiesel narwhal.",
  p_p_7: "Being the savage's bowsman, that is, the person who pulled the bow-oar in his boat (the second one from forward), it was my cheerful duty to attend upon him while taking that hard-scrabble scramble upon the dead whale's back. You have seen Italian organ-boys holding a dancing-ape by a long cord. Just so, from the ship's steep side, did I hold Queequeg down there in the sea, by what is technically called in the fishery a monkey-rope, attached to a strong strip of canvas belted round his waist.",
  p_p_8: "Retro occupy organic, stumptown shabby chic pour-over roof party DIY normcore. Actually artisan organic occupy, Wes Anderson ugh whatever pour-over gastropub selvage. Chillwave craft beer tote bag stumptown quinoa hashtag. Dreamcatcher locavore iPhone chillwave, occupy trust fund slow-carb distillery art party narwhal. Ennui shabby chic Brooklyn, fanny pack direct trade Tumblr tattooed retro polaroid deep v chia vinyl Austin Tonx food truck. Literally ugh umami, pickled jean shorts Wes Anderson letterpress. Banjo Tonx beard biodiesel narwhal.",
  p_p_9: " Being the savage's bowsman, that is, the person who pulled the bow-oar in his boat (the second one from forward), it was my cheerful duty to attend upon him while taking that hard-scrabble scramble upon the dead whale's back. You have seen Italian organ-boys holding a dancing-ape by a long cord. Just so, from the ship's steep side, did I hold Queequeg down there in the sea, by what is technically called in the fishery a monkey-rope, attached to a strong strip of canvas belted round his waist."
};
/* harmony default export */ __webpack_exports__["default"] = (Usa);

/***/ }),

/***/ "./src/js/selectPolicy.js":
/*!********************************!*\
  !*** ./src/js/selectPolicy.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _policyLang_usa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./policyLang/usa */ "./src/js/policyLang/usa.js");
/* harmony import */ var _policyLang_uk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./policyLang/uk */ "./src/js/policyLang/uk.js");
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
    if (_toConsumableArray(e.target.classList).includes("policy_item")) {
      var currPolicy = e.target.children[0].value;
      hiddePolicyRadio(currPolicy);
      chengeContent(currPolicy);
      setPolicy(policies[currPolicy]);
      titles.forEach(function (title) {
        return title.innerHTML = policies[currPolicy];
      });
    }
  });
});
document.addEventListener('click', function (e) {
  if (isShowlist) {
    showLists.forEach(function (showList) {
      showList.classList.remove("show");
      showList.classList.add("hidden");
    });
    isShowlist = false;
  } else if (_toConsumableArray(e.target.classList).includes("selected_policy")) {
    showLists.forEach(function (showList) {
      showList.classList.remove("hidden");
      showList.classList.add("show");
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

  if (selected_policy !== "undefined") {
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

function chengeContent(lang) {
  var content = {};

  switch (lang) {
    case "uk":
      content = _policyLang_uk__WEBPACK_IMPORTED_MODULE_1__["default"];
      break;

    default:
      content = _policyLang_usa__WEBPACK_IMPORTED_MODULE_0__["default"];
  }

  var _loop = function _loop(key) {
    var elements = document.querySelectorAll("." + key);
    elements.forEach(function (element) {
      return element.innerHTML = content[key];
    });
  };

  for (var key in content) {
    _loop(key);
  }
}

/***/ }),

/***/ "./src/js/smoothScrol.js":
/*!*******************************!*\
  !*** ./src/js/smoothScrol.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

document.querySelectorAll("[href*='#']").forEach(function (el) {
  return el.addEventListener('click', function (e) {
    e.preventDefault();
    var targetId = e.target.hash;
    var targetPositon = document.querySelector(targetId).offsetTop;
    var startPosition = window.pageYOffset;
    var distance = targetPositon - startPosition;
    var duration = 1000;
    var start = null;
    window.requestAnimationFrame(step);

    function step(timestamp) {
      if (!start) start = timestamp;
      var progress = timestamp - start;
      window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
      if (progress < duration) window.requestAnimationFrame(step);
    }
  });
});

function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t * t + b;
  t -= 2;
  return c / 2 * (t * t * t + 2) + b;
}

;

function showFeatchest() {
  var featchest = document.querySelector(".featches");
  document.addEventListener('scroll', function (e) {
    var showLists = document.querySelectorAll(".conteiner_langs");
    showLists.forEach(function (showList) {
      if (_toConsumableArray(showList.classList).includes("show")) {
        showList.classList.remove("show");
        showList.classList.add("hidden");
      }
    });

    if (featchest) {
      if (pageYOffset < getTopCord(featchest)) {
        var list = _toConsumableArray(featchest.children);

        list.forEach(function (el) {
          return el.classList.add("featchest_animation");
        });
      }
    }
  });
}

showFeatchest();

function getTopCord(elem) {
  var box = elem.getBoundingClientRect();
  return box.top + pageYOffset;
}

/***/ })

/******/ });
//# sourceMappingURL=main.js.map