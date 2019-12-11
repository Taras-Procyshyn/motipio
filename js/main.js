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

/***/ "./src/blocks/modules/cookie/cookie.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/cookie/cookie.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

setTimeout(cookie, 5000);

function cookie() {
  var modal = document.querySelector(".cookie");
  var cookie = window.sessionStorage.getItem("cookie");

  if (cookie) {
    modal.remove();
    return;
  }

  ;
  modal.classList.remove("hidden");
  modal.classList.add("show");
  var toggle = modal.querySelector(".cookie_toggle");
  toggle.addEventListener('click', function () {
    window.sessionStorage.setItem("cookie", true);
    modal.classList.remove("show");
    modal.classList.add("hidden");
    modal.remove();
  });
}

/***/ }),

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
var showLists = document.querySelectorAll('.conteiner_langs');
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
    if (_toConsumableArray(e.target.classList).includes('langs_item')) {
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
      showList.classList.remove('show');
      showList.classList.add('hidden');
    });
    isShowlist = false;
  } else if (_toConsumableArray(e.target.classList).includes('selected_lang')) {
    showLists.forEach(function (showList) {
      showList.classList.remove('hidden');
      showList.classList.add('show');
    });
    isShowlist = true;
  }
});

function chengeContent(lang) {
  var content = {};

  switch (lang) {
    case 'uk':
      content = _lang_uk__WEBPACK_IMPORTED_MODULE_2__["default"];
      break;

    case 'ru':
      content = _lang_ru__WEBPACK_IMPORTED_MODULE_1__["default"];
      break;

    default:
      content = _lang_en__WEBPACK_IMPORTED_MODULE_0__["default"];
  }

  var _loop = function _loop(key) {
    var elements = document.querySelectorAll('.' + key);
    elements.forEach(function (element) {
      return element.innerHTML = content[key];
    });
  };

  for (var key in content) {
    _loop(key);
  }
}

function hiddeRadio(lang) {
  var allRadios = document.querySelectorAll('input[type=radio]');
  allRadios.forEach(function (radio) {
    if (_toConsumableArray(radio.classList).includes(lang)) {
      radio.parentElement.style.display = 'none';
      radio.checked = true;
    } else {
      radio.parentElement.style.display = 'inherit';
      radio.cheked = false;
    }
  });
}

function getLang() {
  var lang_selected = window.localStorage.getItem('lang');

  if (lang_selected) {
    return JSON.parse(lang_selected);
  }

  lang_selected = window.navigator.userLanguage || window.navigator.language;
  lang_selected = lang_selected.slice(0, 2);
  setLang(lang_selected);
  window.localStorage.setItem('lang', JSON.stringify(lang_selected));
  return lang_selected;
}

function setLang(lang) {
  window.localStorage.setItem('lang', JSON.stringify(lang));
} // uncheked burger menue when clik enywhere


var isCheckBurger = false;
document.addEventListener('click', function (e) {
  var width = document.documentElement.clientWidth;

  var burgerMenues = _toConsumableArray(document.querySelectorAll(".burger_menue"));

  var burgers = burgerMenues.map(function (burgerMenue) {
    return burgerMenue.querySelector('.burger_checkbox');
  });
  var checkBurger = burgers.find(function (burger) {
    return burger.checked === true;
  }); // exept link

  if (e.target.tagName === 'A') return; // exept in small screen, we can clik in select lang

  if (width < 992) {
    if (e.target.className === "selected_lang" || e.target.className === "langs_item") {
      return;
    }
  }

  if (checkBurger) {
    if (isCheckBurger) {
      burgers.forEach(function (burger) {
        return burger.checked = false;
      });
      isCheckBurger = false;
    }

    if (checkBurger.checked) isCheckBurger = true;
  }
});

/***/ }),

/***/ "./src/blocks/modules/header/lang/en.js":
/*!**********************************************!*\
  !*** ./src/blocks/modules/header/lang/en.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var En = {
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
  about_link: 'How it works',
  how_it_works__title: 'Just send request 👋',
  how_it_works__text: "PRO's accept request, and you get all personal attention.",
  how_it_works_viwe_title: 'How it works',
  feache__item_h_1: 'Send request to PRO',
  feache__item_h_2: 'Discuss a request ',
  feache__item_h_3: 'Upgrade yourself',
  feache__item_p_1: 'The short type message with a question.',
  feache__item_p_2: 'Get all answers from professional.',
  feache__item_p_3: 'Leave review & rate your expirience.',
  download_title: 'Download<br> IOS, Android',
  // terms_of_service
  terms_of_service__title: 'Terms of service',
  terms_of_service__comment: 'Updated: 30 September 2019',
  // support
  support_title: 'Support',
  support_text_1: 'Hi friend 👋 , if you got to this page for a reason, you probably have a question.',
  support_text_2: " We will be happy to help with your questions, and\n                    resolve it as soon as possible for you. But before\n                    that, if you still decide to send us a request, \n                    be sure that you looked at these pages on which \n                    there is all the necessary information <a href=\"./faq.html\">Frequently\n                    Asked Questions</a> & <a href=\"./terms_of_service.html\">Terms of Service.</a>",
  support_text_3: "If you didn\u2019t find an answer there, send us a request\n                    by selecting the appropriate category of your question.",
  support_text_4: "  We will try to answer and resolve your question as soon as possible.",
  support_text_5: 'Thanks, Motipio team.',
  support_link_h_1: 'Problem with applicationt',
  support_link_p_1: 'iOS & Android app, works bad and other.',
  support_link_h_2: 'Requests & PRO',
  support_link_p_2: 'Complaint or problem with request, etc.',
  support_link_h_3: 'I’m a PRO, need a help',
  support_link_p_3: 'ayout, complaints, blocking and other.',
  // pro
  monetize_title: 'Monetize your professional skills, experience and famous',
  monetize_text: 'By communicating with people from over the World without any borders',
  join_to_us_title: 'How join to us',
  join_to_us_text_1: "Motipio open to new professionals, who really have skills, life expirince, what they can\n                    share with people. Or you want to mentoring or coaching people, make them better and\n                    space around. Also, you can communicate with your fans, solve overloaded DM on your\n                    social media.",
  join_to_us_text_2: " We will be happy if you join to us, for making our World a better place to live for all\n                         of us.",
  join_to_us_btn: "Enroll as PRO",
  action_item_h_1: "Verification",
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
  action_item_p_3: " Great list of ways to withdrawals your earnigs\n  with low fees on transfers to card,\n  bank and other. <a href=\"https://www.payoneer.com/\" target=\"_blank\">Learn more about</a>",
  hycw_title: "How you can work on Motipio platform",
  benefit_item_h_1: "Consulting service",
  benefit_item_p_1: "So strongly and metaphysically did I conceive of my situation then, that while earnestly watching his motions, I seemed distinctly to perceive that my own individuality was now merged in a joint stock company of two.",
  benefit_item_h_2: "Mentoring and Coaching",
  benefit_item_p_2: "I have hinted that I would often jerk poor Queequeg from between the whale and the ship\u2014where he would occasionally fall, from the incessant rolling and swaying of both.",
  benefit_item_h_3: "Communication with fans",
  benefit_item_p_3: "But this was not the only jamming jeopardy he was exposed to. Unappalled by the massacre made upon them during the night, the sharks now freshly and more keenly allured by the before pent blood which began.",
  benefit_item_h_4: "Charity and help",
  benefit_item_p_4: "So that for better or for worse, we two, for the time, were wedded; and should poor Queequeg sink to rise no more, then both usage and honour demanded.",
  benefit_item_p_5: " All cases which were written above by Motipio team, its only examples.",
  benefit_item_p_6: "You have the ability to set your own way of gaming, your request details, and\n                    others.",
  how_earn_title: "How much you can charge per request",
  how_earn_h_1: "Dozens and Hundreds",
  how_earn_p_1: "Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec.\n                Donec viverra eleifend lacus, vitae ullamcorper metus.\n                Sed sollicitudin ipsum quis nunc sollicitudin ultrices.\n                Donec euismod scelerisque ligula.",
  how_earn_h_2: "Hundreds and Thousands",
  how_earn_p_2: "Banjo tote bag bicycle rights, High Life sartorial\n                cray craft beer whatever street art fap. Hashtag\n                typewriter banh mi, squid keffiyeh High Life\n                Brooklyn twee craft bee.",
  how_earn_p_3: "All cases which were written above by Motipio team, its only examples.",
  how_earn_p_4: "You have the ability to set your own price of request and how much you decide to\n                    charge.",
  receive_requests_title: " How to receive requests",
  receive_requests_item_1: "Complete profile and go to Online;",
  receive_requests_item_2: "Share info on your social media;",
  receive_requests_item_3: "Make more earnings by requests;",
  receive_requests_text: " Use your social media, for attracting your\n                            audience, followers or fans to founding you\n                            on Motipio by @username of name searching.\n                            Create stories or post about it, with link\n                            what following to Motipio <a href=\"./index.html\">main page</a> or\n                            <a href=\"./download.html\">download</a> page.",
  let_join_title: "Like it? Let's join to us, now!",
  tags__description: "Thanks for interesting in Motipio, and we know that\n                        you are an RPO with great skills which need in a Whole World.\n                        Apply a form, and join to huge community,\n                        for making our world a better place for leaving for humans.",
  tag__item_1: "Entrepreneurship",
  tag__item_2: "Finance & Investing",
  tag__item_3: "Beauty & Fashion",
  tag__item_4: "Sport & Health",
  tag__item_5: "Media & Social Media",
  join_to_us_btn_2: "Join to Motipio as PRO, now!",
  // privacy policy
  privacy_policy_title: 'Privacy Policy',
  rivacy_policy_comment: " Updated: 30 September 2019",
  //cookie
  cookie_policy_title: 'Cookie Policy',
  cookie_policy_comment: " Updated: 30 September 2019",
  //faq
  faq_title: "Frequently Asked Questions",
  faq_h2_1: "About Motipio",
  faq_h2_2: "Request",
  faq_q_1: "Q: What is Motipio?",
  faq_a_1: "                        A: Motipio is a platform where people can send\n    a request to PRO\u2019s people. Our mission is to\n    give to people a great solution, for upgrading\n    themselves, collaborating, connecting and making\n    our world a better place to live.",
  faq_q_2: "Q: How do I contact the Motipio team?",
  faq_a_2: "                        A: In the <a href=\"#\">tumultuous</a> business of cutting-in\n    and attending to a whale, there is much running\n    backwards and forwards among the crew. Now hands\n    are wanted here, and then again hands are wanted\n    there. There is no staying in any one place; for\n    at one and the same time everything has to be done\n    everywhere. It is much the same with him who endeavors\n    the desc.",
  faq_q_3: "Q: What is Motipio?",
  faq_a_3: "                           A: Motipio is a platform where people can send a \n    request to PRO\u2019s people. Our mission is to give to\n    people a great solution, for upgrading themselves,\n    collaborating, <a href=\"#\">connecting</a>  and making our world a better\n    place to live.",
  faq_q_4: "Q: How do I contact the Motipio team?",
  faq_a_4: "                            A: In the <a href=\"#\">tumultuous</a> business of cutting-in\n    and attending to a whale, there is much running\n    backwards and forwards among the crew. Now hands\n    are wanted here, and then again hands are wanted\n    there. There is no staying in any one place; for\n    at one and the same time everything has to be done\n    everywhere. It is much the same with him who endeavors\n    the desc.",
  faq_q_5: "Q: How do I contact the Motipio team?",
  faq_a_5: "A: In the <a href=\"#\">tumultuous</a> business of cutting-in\n                and attending to a whale, there is much running\n                backwards and forwards among the crew. Now hands\n                are wanted here, and then again hands are wanted\n                there. There is no staying in any one place; for\n                at one and the same time everything has to be done\n                everywhere. It is much the same with him who endeavors\n                the desc.",
  // footer
  footer_link_1: 'Terms of service',
  footer_link_2: 'Privacy Policy',
  footer_link_3: 'FAQ',
  footer_link_4: 'Support',
  footer_copyright: 'Copyright 2019.',
  // chat
  chat_msg_user_1: "Hi Steve! How to be productive and positive at the same time? What a secret?!",
  chat_msg_steve_1: "\uD83D\uDC4B Oh! What a great and deep question! Hope that my answers will help you. But first...",
  chat_msg_steve_2: "Could you tell me something about yourself?",
  chat_msg_steve_3: "\u201CBe productive\u201D, could you explain. What does mean to you these words?",
  chat_msg_user_2: "Sure! Also, thx that you accepted request\u2026\uD83D\uDE0A",
  chat_msg_steve_4: "Thank you too, that having me. I really love helping people \uD83E\uDD17",
  chat_msg_user_3: "Typing..."
};
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
  feache__item_p_1: "Ко именем сильны главой Подите Из их яд ей.",
  feache__item_p_2: "Ко именем сильны главой Подите Из их яд ей.",
  feache__item_p_3: "Ко именем сильны главой яд ей.",
  download_title: "именем сильны главой "
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
  about_title: "Текст через",
  about_text: "популярність не лише через те, що є достатнім набором слів, а й через те, що є панграмою",
  about_link: "лише через ",
  how_it_works__title: "підписали ґешефт 👋",
  how_it_works__text: "популярність не лише а  достатнім набором слів, а й чере",
  how_it_works_viwe_title: "пеньові шикарні",
  feache__item_h_1: " достатнім слів, чере",
  feache__item_h_2: "пеньові пошарпані шикарні",
  feache__item_h_3: "Будучи дикуном",
  feache__item_p_1: " достатнім набором слів, а й черей Щурячий бугай Щурячий бугай",
  feache__item_p_2: "а й чере що є панграмою",
  feache__item_p_3: " достатнім набором слів, а й чере",
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
/* harmony import */ var _modules_cookie_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/cookie/cookie */ "./src/blocks/modules/cookie/cookie.js");
/* harmony import */ var _modules_cookie_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_cookie_cookie__WEBPACK_IMPORTED_MODULE_2__);




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
/* harmony import */ var _smoothScrol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smoothScrol */ "./src/js/smoothScrol.js");
/* harmony import */ var _smoothScrol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smoothScrol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _showFeature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showFeature */ "./src/js/showFeature.js");
/* harmony import */ var _showFeature__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_showFeature__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./src/js/showFeature.js":
/*!*******************************!*\
  !*** ./src/js/showFeature.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function showFeature() {
  var featchest = document.querySelector(".featches");
  var howItWorkSection = document.querySelector("#how_it_works");
  document.addEventListener('scroll', function (e) {
    var showLists = document.querySelectorAll(".conteiner_langs");
    showLists.forEach(function (showList) {
      if (_toConsumableArray(showList.classList).includes("show")) {
        showList.classList.remove("show");
        showList.classList.add("hidden");
      }
    });

    if (featchest) {
      if (pageYOffset > getTopCord(howItWorkSection)) {
        var list = _toConsumableArray(featchest.children);

        list.forEach(function (el) {
          return el.classList.add("featchest_animation");
        });
      }
    }
  });
}

showFeature();

function getTopCord(elem) {
  var box = elem.getBoundingClientRect();
  return box.top + pageYOffset;
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

var listAnchorLinks = document.querySelectorAll("[href*='#']");
var animating = false;
var duration = 1200;
listAnchorLinks.forEach(function (el) {
  return el.addEventListener('click', function (e) {
    e.preventDefault();
    var targetId = e.target.hash;
    var targetPositon = document.querySelector(targetId).offsetTop;
    smoothScrol(targetPositon + 5, duration);
    animating = true;
    setTimeout(function () {
      return animating = false;
    }, duration);
  });
});

function smoothScrol(targetPositon, duration) {
  var startPosition = window.pageYOffset;
  var distance = targetPositon - startPosition;
  var start = null;
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    var progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t * t + b;
  t -= 2;
  return c / 2 * (t * t * t + 2) + b;
}

var home = document.querySelector('#home');
var currSection = '';

if (home && screen.width > 991) {
  document.querySelector('html').style.overflow = 'hidden';

  var sections = _toConsumableArray(document.querySelectorAll('section'));

  var reverseSections = _toConsumableArray(sections).reverse();

  home.addEventListener('wheel', function (e) {
    var targetSection = sections.find(function (section) {
      return section.offsetTop > window.pageYOffset;
    });
    if (animating) return;

    if (e.deltaY > 0) {
      targetSection = sections.find(function (section) {
        return section.offsetTop > window.pageYOffset;
      });
      if (targetSection) smoothScrol(targetSection.offsetTop + 4, duration);
    } else {
      targetSection = reverseSections.find(function (section) {
        return section.offsetTop + 5 < window.pageYOffset;
      });
      if (targetSection) smoothScrol(targetSection.offsetTop + 4, duration);
    }

    animating = true;
    setTimeout(function () {
      return animating = false;
    }, duration);
    e.preventDefault();
  });
}

/***/ })

/******/ });
//# sourceMappingURL=main.js.map