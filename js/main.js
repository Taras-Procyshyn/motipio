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

var home = document.querySelector("#home");

if (home) {
  var nav = document.querySelector(".nav");
  nav.style.display = "flex";
}

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_lang_en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../js/lang/en */ "./src/js/lang/en.js");
/* harmony import */ var _js_lang_ru__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../js/lang/ru */ "./src/js/lang/ru.js");
/* harmony import */ var _js_lang_uk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../js/lang/uk */ "./src/js/lang/uk.js");
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
      content = _js_lang_uk__WEBPACK_IMPORTED_MODULE_2__["default"];
      break;

    case 'ru':
      content = _js_lang_ru__WEBPACK_IMPORTED_MODULE_1__["default"];
      break;

    default:
      content = _js_lang_en__WEBPACK_IMPORTED_MODULE_0__["default"];
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
/* harmony import */ var _up_btn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./up_btn.js */ "./src/js/up_btn.js");
/* harmony import */ var _up_btn_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_up_btn_js__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "./src/js/lang/en.js":
/*!***************************!*\
  !*** ./src/js/lang/en.js ***!
  \***************************/
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
  ts_1: "Introduction",
  ts_1_1: 'Welcome to www.motipio.com (the "Website") operated by Motipio LLC (“Motipio”). The Website provides the ability for professionals (the “Professionals”) to offer services (individually and collectively the “Services”) to those seeking such Services (“the Clients”).',
  ts_1_2: "The Website is offered to Professionals and Clients (individually and collectively the \u201CUser\u201D or \u201CUsers\u201D) conditioned on Users acceptance without modification of these Terms and Conditions. Users use of the Website constitutes Users agreement to these Terms and Conditions. Please read the Terms and Conditions carefully and keep a copy for reference.",
  ts_1_3: "Motipio shall have the right, at its sole discretion, to modify these Terms and Conditions without notice or liability but has no obligation to do so. Any modifications to the Terms and Conditions shall be effective immediately following the posting of such modifications. Users agree to review the Terms and Conditions from time to time and agree that any subsequent use by Users of the Services shall constitute Users acceptance of all such modifications.",
  ts_1_4: "THE WEBSITE IS PROVIDED ON AN \"AS IS\" AND \"AS AVAILABLE\" BASIS. USE OF THE SERVICES ARE AT USERS SOLE RISK. MOTIPIO RESERVES THE RIGHT TO RESTRICT OR TERMINATE USERS ACCESS TO THE WEBSITE AT ANY TIME AND IN ITS SOLE DISCRETION, WITHOUT PRIOR NOTICE, WHENEVER MOTIPIODEEMS THAT USERS USE IS IN ANY MANNER INAPPROPRIATE OR IN VIOLATION OF APPLICABLE LAWS AND REGULATIONS OR THESE TERMS AND CONDITIONS.",
  ts_2: "Privacy ",
  ts_2_1: "Use of the Website is subject to Motipio's Privacy Policy that governs Motipio\u2019s data collection practices.",
  ts_3: "Access to Services",
  ts_3_1: "Access to the Services is available only to those 18 years of age or older",
  ts_3_2: "Motipio makes no claims that the Services may be lawfully accessed in any specific country, state, or province. Access to the Services may not be legal by certain persons or in certain countries, states, or provinces or may require government authorization or registration.",
  ts_3_3: "When Users access the Services, they do so at their own risk and are solely responsible for compliance with the laws of Users jurisdiction, including but not limited to transferring or uploading data.",
  ts_4: "No Unlawful or Prohibited Use ",
  ts_4_1: "Users are granted a non-exclusive, non-transferable, revocable license to access and use the Website strictly in accordance with these Terms and Conditions. As a condition of use, Users warrant to Motipio that Users will not use the Services for the purposes provided and not for any purpose prohibited by these Terms and Conditions or any applicable law or regulation. ",
  ts_4_2: "Users may not obtain or attempt to obtain any materials or information through any means not intentionally made available through the Website. ",
  ts_4_3: "Users may not use the Website in any manner which could damage, disable, overburden, or impair the Website or interfere with any other party's use of the Services. Users are prohibited from violating or attempting to violate the security of the Website, by among other things, uploading any materials which contain files or programming designed to interrupt, destroy or affect the functionality of the service, contain viruses, worms, spyware, or other malware, attempt to interfere with service to any User, host or network, or make the Website available to any third party who is not subject to these Terms and Conditions.",
  ts_4_4: "Violations of system or network security or inappropriate conduct may result in civil or criminal liability. Motipio will investigate occurrences that may involve such violations and cooperate with law enforcement entities in prosecuting users who are involved in such violations.",
  ts_5: "User Accounts ",
  ts_5_1: "Users are responsible for maintaining the confidentiality of account and password information and Users agree to accept responsibility for all activities that occur under Users account or password.",
  ts_5_2: "Users may not assign or otherwise transfer their account to any other person or entity and\n\tacknowledge that Motipio is not responsible for third party access to Users account that results\n\tfrom theft or misappropriation.",
  ts_5_3: "All data uploaded is done so voluntarily at Users own discretion and risk. Users are solely\n\tresponsible for the information uploaded to the Website and warrant and represent Users have the\n\tright and authorization to upload all such information. ",
  ts_5_4: "Users warrant and represent that all information uploaded to the Website is current and accurate\n\tand will be kept up to date. ",
  ts_5_5: "Motipio may disclose or delete Customer Data if reasonably necessary to prevent injury or harm,\n\tto protect the performance of the Website, or if required by law. ",
  ts_6: "Provision of the Website",
  ts_6_1: "Each User is required to obtain and maintain a high-speed Internet connection and appropriate\n\tbrowser software.",
  ts_6_2: "Under no circumstances is Motipio providing advice or consultation. Clients are encouraged to\n\tundertake independent research and/or seek appropriate advice as relates to their use of the\n\tServices.",
  ts_6_3: "Motipio will use commercially reasonable efforts to make the Website available 24/7, except for\n\tplanned downtime for such things as support and maintenance that will be scheduled, to the\n\textent possible, during low volume hours, and shall not be liable for any unavailability caused by\n\ta force majeure event such as an act of God, act of government, flood, fire, earthquake, civil\n\tunrest, act of terror, strike or other labor problem, Internet service provider failure or delay.",
  ts_7: "The Professionals\u2019 Warranties and Representations",
  ts_7_1: "Professionals shall provide Services and meet their obligations in a timely and workmanlike\n\tmanner, using skills that meet generally acceptable industry standards, and will provide a\n\tstandard of care equal to, or superior to, care used by service providers similar to professionals on\n\tsimilar projects. ",
  ts_7_2: "Professional are free to enter into these engagements and that these engagements do not violate\n\tthe terms of any agreement between the Professional and any third party.",
  ts_7_3: "All information provided to the Client is original to or duly licensed by the Professional or is in\n\tthe public domain and that all such information does not infringe on any third party\u2019s intellectual\n\tproperty rights, including but not limited to copyrights, or rights of privacy or publicity.",
  ts_7_4: "All personal and professional information, including but not limited to skills and experience, is\n\taccurate and the Professional shall notify Motipio promptly of any material change in such\n\tpersonal and information.",
  ts_7_5: "Professionals will provide only the Services for which they are qualified, and the provision of all\n\tServices are in compliance with applicable rules, regulations, and license requirements.",
  ts_7_6: "Professionals warrant and represent that they will be solely responsible and liable for any\n\tdamages to or claim from any Client to whom Professionals provide Services.",
  ts_8: "User Warranties and Representations ",
  ts_8_1: "Users will not contact, solicit or retain other Users for the Services provided through the Website\n\toutside of the Website. ",
  ts_9: "User Generated Content",
  ts_9_1: "User Generated Content is any information or data uploaded to the Website or communications\n\tundertaken through the Website.",
  ts_9_2: "Each user acknowledges and agrees that they are solely responsible for the form, content and\n\taccuracy of any User Generated Content submitted and for their own communications and are\n\tresponsible for the consequences of all user generated content and their communications",
  ts_9_3: "Each user warrants and represents that the User Generated Content is accurate and up-to-date, and\n\tthat it does not violate relevant laws, rules or regulations.",
  ts_9_4: "The Professional warrants and represents that they will not imply or state, directly or indirectly,\n\tthat Users are affiliated with or endorsed by Motipio.",
  ts_9_5: "Each user warrants and represents that they have all rights necessary to upload User Generated\n\tContent and that no User Generated Content will violate the intellectual property rights or the\n\trights or privacy or publicity of any third party.",
  ts_9_6: "Users shall not provide any User Generated Content or engage in communications that is false,\n\tdefamatory, libelous, hateful, threatening, harassing, racially or ethnically offensive,\n\tpornographic, obscene, encourages anything that would be considered a criminal offense, gives\n\trise to civil liability, violates any law or regulation, including but not limited to laws or\n\tregulations relating to intellectual property rights, or harm or threaten the safety of others.",
  ts_9_7: "As a passive conduit for those interested in providing and seeking professional services, Motipio\n\tis under no legal obligation to, and does not, control the User Generated Content. It has no\n\tobligation to screen User Generated Content in advance and is not responsible for screening or\n\tmonitoring User Generated Content. By its very nature, other people's User Generated Content\n\tmay be offensive, harmful or inaccurate. Users acknowledge that any reliance User Generated\n\tContent will be at Users own risk. Users agree to take all necessary precautions.",
  ts_9_8: "If notified that User Generated Content may not conform to these Terms and Conditions, Motipio\n\tmay investigate the allegation and determine and its sole discretion whether to remove or request\n\tthe removal of any User Generated Content.",
  ts_9_9: "Users retain the ownership and copyright to User Generated Content and communications posted\n\tby them.",
  ts_9_10: "By submitting User Generated Content, Users grant Motipio the royalty-free, perpetual,\n\tirrevocable, sublicenseable through multiple tiers, non-exclusive right (including any moral\n\trights) and license to use, stream, reproduce, modify, adapt, publish, translate, distribute, perform,\n\tincorporate the User Generated Content in other works, and display the User Generated Content,\n\tin whole or in part, worldwide through any media or technology now known or later developed,\n\tfor the full term of any rights that may exist in such the User Generated Content and\n\tcommunications as long as Users are a registered user. ",
  ts_9_11: " Users permit any other user to access, display and view all User Generated Content submitted to\n\tthe public areas of the Services.",
  ts_9_12: "Motipio does not guarantee any confidentiality with respect to any User Generated Content.",
  ts_9_13: "Users may not use, duplicate, modify, distribute, or reproduce the User Generated Content posted\n\tby others in any manner. If Users believe that intellectual property rights have been infringed,\n\tUsers may notify Motipio according to the notification procedures set forth in our Copyright\n\tInfringement Policy.",
  ts_9_14: " Motipio is not involved in the actual transaction between Users. As a result, Motipio has no\n\tcontrol over the quality, safety, truth, accuracy or legality of User Generated Content. There are\n\trisks, including but not limited to the risk of physical harm, in dealing with strangers, underage\n\tpersons or people acting under false pretenses. Motipio expects that Users will use caution and\n\tcommon sense when using Users assume all risks associated in dealing with other users with\n\twhom Users come in contact.",
  ts_9_15: "Because user authentication on the Internet is difficult, Motipio cannot and does not confirm that\n\teach user is who they claim to be or control the behavior of users. In the event Users have a\n\tdispute with other users, Users release Motipio, its subsidiaries, affiliates, officers, directors,\n\temployees, agents, representatives and partners, from claims, demands and damages (actual and\n\tconsequential, direct and indirect) of every kind and nature, known and unknown, suspected and\n\tunsuspected, disclosed and undisclosed, arising out of or in any way connected with such disputes\n\twith third parties.",
  ts_10: "Payments",
  ts_10_1: "All payments obtained by Motipio from Clients shall be collected through the Website and\n\tdistributed to the Professionals less applicable fees.",
  ts_10_2: "Clients will select a payment package and all payments shall be made according to the payment\n\trequirements of each package.",
  ts_10_3: "Payments can be made using PayPal, Visa and MasterCard credit or debit cards payable in US\n\tdollars. By purchasing a payment plan, Users expressly agree that Motipio is authorized to charge\n\tfor Users selected payment plan through the Payment Method Users designate. Users can update\n\tthis information at anytime.",
  ts_10_4: "All credit/debit card processing will be submitted directly to Motipio\u2019s payment provider by a\n\tsecured connection. Payment details will NOT be stored by Motipio. The cardholder must retain a\n\tcopy of transaction records and Merchant policies and rules.",
  ts_10_5: "Motipio may engage third party suppliers from time to time. Users agree that Motipio may\n\tdisclose Users information to third-party suppliers for the purpose of enabling Users use of the\n\tWebsite and each Users agrees that Motipio will not be held liable for any act or omission of any\n\tthird-party supplier.",
  ts_10_6: "Motipio has the right to change payment packages and Users use of the Services after such\n\tchanges constitutes agreement to the changes.",
  ts_10_7: "If Motipio is unable to charge a Clients\u2019 account, then in its sole discretion Motipio may cancel\n\tClients\u2019 access to the Website and Services and bill Client for any outstanding payments.",
  ts_10_8: "Cancellation by Clients may take place at any time, through an applicable app platform.",
  ts_10_9: "Payments are nonrefundable. If any Service is accessed through an app platform, the refund\n\tpolicy applicable to that app platform will apply and the app platform is solely responsible for\n\tany refunds.",
  ts_11: "Intellectual Property",
  ts_11_1: "\u201CMOTIPIO\u201D, and any other Motipio trademarks and trade names, and any variations thereof, are\n\tand shall remain the trademarks and trade names and exclusive property of Motipio, and any\n\tunauthorized use of such trademarks and trade names is unlawful.",
  ts_11_2: "All content included as part of the Website, such as text, graphics, logos, images, as well as the\n\tcompilation thereof, and any software used on the Website (individually and collectively the\n\t\u201CContent\u201D), is the property of Motipio or its suppliers and protected by copyright and other laws\n\tthat protect intellectual property and proprietary rights. Users agree to observe and abide by all\n\tcopyright and other proprietary notices, legends or other restrictions contained in any such\n\tcontent and will not make any changes thereto.",
  ts_11_3: "Users will not modify, publish, transmit, reverse engineer, participate in the transfer or sale,\n\tcreate\n\tderivative works, or in any way exploit any aspect of the Website or the Content, in whole or in\n\tpart, and no Content is for resale. Users will use the Content solely for Users personal use and\n\twill make no other use of the content without the express written permission of Motipio and the\n\tcopyright owner.",
  ts_11_4: "Users do not acquire any ownership rights in any Content, and no other license, express or\n\timplied, is granted by these Terms and Conditions.",
  ts_12: "Identification of Agent to Receive Notification and Elements of Notification of Claimed\n\tCopyright Infringement",
  ts_12_1: "If Users believe that any copyrighted work is accessible on or through these Services in a way\n\tthat constitutes copyright infringement, please notify Motipio by providing our designated\n\tcopyright agent with the following information:",
  ts_12_1_1: "The physical or electronic signature of either the copyright owner or of a person\n\tauthorized to act on the owner's behalf;",
  ts_12_1_2: "A description of the copyrighted work Users claim has been infringed, and a description\n\tof the activity that Users claim to be infringing;",
  ts_12_1_3: "Identification of the URL or other specific location on this website where the material or\n\tactivity Users claim to be infringing is located or is occurring; Users must include enough\n\tinformation to allow us to locate the material or the activity;",
  ts_12_1_4: "Usersr name, address, telephone number, and e-mail address;",
  ts_12_1_5: "A statement by Users that Users have a good faith belief that use on the Website of the\n\tcopyrighted work in the manner Users are complaining of is not authorized by the copyright\n\towner, any agent of the copyright owner, or the law; and",
  ts_12_1_6: "A statement by Users, made under penalty of perjury, that the information Users have\n\tprovided in Usersr notice is accurate and that Users are either the copyright owner or are\n\tauthorized to act on behalf of the copyright owner.",
  ts_12_2: " Upon receipt of notification of a Notice of copyright infringement, Motipio may remove or\n\tdisable access to the alleged infringing material or terminate the alleged infringer's access to\n\tits\n\taccount. The alleged infringer may provide a written Counter Notification meeting the following\n\tcriteria:",
  ts_12_2_1: "Identification of the material that has been removed or to which access has been disabled\n\tand the location at which the material appeared before it was removed or access to it was\n\tdisabled;",
  ts_12_2_2: "A physical or electronic signature of either the copyright owner or of a person authorized\n\tto act on the owner's behalf;",
  ts_12_2_3: "Usersr name, address, telephone number, and e-mail address;",
  ts_12_2_4: "Consent to the jurisdiction of Federal District Court for the judicial district in which the\n\talleged infringer's address is located, or if the alleged infringer's address is outside of\n\tthe United States, for any judicial district in which the alleged infringer may be found, and that the alleged\n\tinfringer will accept service of process from the person who provided notification or an agent of\n\tsuch person; and",
  ts_12_2_5: "A statement, under penalty of perjury, that the alleged infringer has a good faith belief\n\tthat the material was removed or disabled as a result of mistake or misidentification of the\n\tmaterial to be removed or disabled.",
  ts_12_3: "Please note that the submission of a false or materially misleading Notice or Counter-Notice, and\n\tany such submission may result in liabilities, including perjury.",
  ts_12_4: "We have designated our selected lawyer (in process) as our agent to receive notices of claims of\n\tcopyright infringement on our website.",
  ts_13: "Confidentiality",
  ts_13_1: "The specific design and structure of the Website and Services constitute proprietary and\n\tconfidential information, trade secrets and/or intellectual property of Motipio. Users agree not\n\tto disclose, provide, or otherwise make available such proprietary and confidential information,\n\ttrade secrets or copyrighted material in any form to any third party, or use the proprietary and\n\tconfidential information, trade secrets or copyrighted material for their own benefit or for the\n\tbenefit of any third party.",
  ts_13_2: "The transactional data collected through the Website and Services is confidential and Motipio\n\tagrees to hold such data in strict confidence and not to disclose the transactional data to any\n\tthird\n\tparty except in the situation where the Company is required to comply with an applicable law or\n\tregulation or with a court order.",
  ts_14: "User Comments and Suggestions",
  ts_14_1: "While Motipio values user feedback, please be specific in any comments and do not submit\n\tcreative ideas, inventions, or suggestions.",
  ts_14_2: "If, despite this request, Users send creative ideas, inventions, or suggestions, all such submissions\n\tshall be the property of Motipio in whole or in part. Motipio shall own exclusively all now known\n\tor later discovered rights to the submissions and shall be entitled to unrestricted use of the\n\tsubmissions for any purpose whatsoever, commercial or otherwise, without compensation to\n\tusers or any other third party.",
  ts_14_3: "No part of the submissions shall be subject to any obligation of confidence and Motipio shall not\n\tbe liable for any use or disclosure.",
  ts_15: "Links to Third Party Websites/Third Party Services",
  ts_15_1: "The Website may contain links to other Websites (\"Linked Websites\"). The Linked Websites are\n\tnot under the control of Motipio and Motipio is not responsible for the contents of any Linked\n\tWebsite, including without limitation any link contained in a Linked Website, or any changes or\n\tupdates to a Linked Website. Motipio is providing these links to Users only as a convenience, and\n\tthe inclusion of any link does not imply endorsement by Motipio of the Website or any\n\tassociation with its operators.",
  ts_16: "Social Networking",
  ts_16_1: "Users may have the option to use Twitter, Facebook or other social networking platforms through\n\tthe Services to share links and content. Users undertake this option as their sole responsibility,\n\tincluding but not limited to complying with all of the Terms of Use of the social networking\n\tplatforms and understanding their privacy policies. Motipio has no liability or responsibility for\n\tthe privacy practices or other actions of any third-party service connected through the Website,\n\tand is not liable for any damage or loss caused or alleged to be caused by connecting with a\n\tsocial networking platform.",
  ts_17: "Feedback and Ratings Policy",
  ts_17_1: "The Website will contain the opportunity for feedback and ratings from Users.",
  ts_17_2: "Feedback results may consist of comments and ratings left by other Users and that the Website\n  may calculate a composite feedback number based on these individual ratings. The Website\n  provides its feedback and rating system as a means through which Users can express their\n  opinions publicly, and the Website does not monitor or censor these opinions or investigate any\n  remarks posted by Users for accuracy or reliability unless a User brings the posting to Motipio\u2019s\n  attention.",
  ts_17_3: "Users agree to use balanced and fair feedback and not to take any actions that undermine the\n  integrity of the feedback system, including but not limited to the following: falsifying feedback\n  for Users own self; artificially raising the level of Users own feedback or creating negative\n  feedback for another User; manipulating or coercing another User to perform a given task by\n  threatening to leave negative feedback; or withholding deliverables or funds until another User\n  agrees to leave positive feedback or no feedback.",
  ts_17_4: "Motipio is not legally responsible for any feedback by any Users or third parties, even if the\n  feedback is defamatory or otherwise legally actionable. Users may be held legally responsible for\n  damages suffered by other Users or third parties as a result of remarks posted by Users if a court\n  finds that these remarks are legally actionable or defamatory.",
  ts_17_5: "Motipio reserves the right to remove any feedback from the system at any time, including but not\n  limited to feedback that contains language that is profane, vulgar, or racist; is submitted by a\n  User\n  who is either in violation of these Terms and Conditions or any law or regulation; has conducted\n  fraudulent transactions; is not directly related to transactions; makes any reference to actions\n  taken or purported to be taken by Motipio or any third party; or has left feedback with false\n  contact information or cannot be contacted.",
  ts_18: "Indemnification",
  ts_18_1: "Users agree to indemnify, defend and hold harmless Motipio, its officers, directors, employees,\n  agents, contractors and representatives for any losses, costs, liabilities and expenses (including\n  reasonable attorney's fees) relating to or arising out of Users use of or inability to use the\n  Website\n  or Services, any user postings made by Users, Users violation of any terms of these Terms and\n  Conditions, Users violation of any rights of a third party, or Users violation of any applicable\n  laws, rules or regulations. Motipio reserves the right, at its own cost, to assume the exclusive\n  defense and control of any matter otherwise subject to indemnification by Users, in which event\n  Users will fully cooperate with Motipio in asserting any available defenses and pay all applicable\n  costs and expenses.",
  ts_19: "Release",
  ts_19_1: "  Users hereby release Motipio and its subsidiaries, affiliates, officers, directors, employees,\n  agents,\n  partners, and representatives from all actions, claims or demands and from any and all losses\n  (direct, indirect, incidental or consequential), damages, lost profits, costs or expenses,\n  including,\n  without limitation, court costs and attorney's fees which Users may have against Motipio and its\n  subsidiaries, affiliates, officers, directors, employees, agents, partners, and representatives.",
  ts_20: "Choice of Law and Resolution of Disputes",
  ts_20_1: "These Terms and Conditions affect interstate commerce and the U.S. Federal Arbitration Act\n  governs the interpretation and enforcement of these arbitration provisions. Other than the\n  requirement of exercising the jurisdiction of federal courts to resolve disputes relating to\n  intellectual property such as trademark and copyright, or small claim matters, arbitration governs\n  all disputes between Motipio and Users, whether based in contract, tort, statute, fraud,\n  misrepresentation or any other legal theory.",
  ts_20_2: "Before taking any formal action, the party seeking formal action shall contact the other party in\n  writing, detailing the dispute, and after such exchange the parties shall enter into good faith\n  negotiations before initiating a lawsuit or arbitration.",
  ts_20_3: "In the event the parties are not able to resolve any other dispute between them then such dispute,\n  other than a dispute related to intellectual property, shall be resolved only by final and\n  individual\n  binding arbitration conducted by a single neutral arbitrator and administered by the American\n  Arbitration Association, or a similar arbitration service selected by the parties, in the county\n  in\n  which the User resides, if a resident of the United States. For residents outside of the United\n  States, the arbitration shall take place in their own , with the parties submitting to personal\n  jurisdiction in such jurisdiction.",
  ts_20_4: "Either party may access the jurisdiction of a small claims court if the dispute falls within the\n  small claims court's jurisdiction to the extent such claims do not seek equitable relief.",
  ts_20_5: "The arbitrator shall have exclusive authority to resolve all disputes arising out of or relating\n  to the\n  interpretation, applicability or enforceability, or formation of these Terms and Conditions. The\n  arbitrator shall be empowered to grant whatever relief would be available in a court under law or\n  in equity. The arbitrator's award shall be final, and judgment may be entered upon it in any court\n  having appropriate jurisdiction.",
  ts_21: "Class Action Waiver",
  ts_21_1: "The resolution under these Terms and Conditions will take place on an individual basis; class\n  arbitrations or class/representative/collective court actions are not permitted. The parties\n  expressly waive their right to file a class action or seek relief on a class basis, as a plaintiff\n  or putative class.",
  ts_21_2: "You have the right to opt out and not be bound by the arbitration and class action waiver\n  provisions through a written notice sent within thirty (30) days of your first use of the\n  Services.\n  Opting out means that Motipio is no longer bound by the arbitration provisions. If changes are\n  made to the arbitration provision, Users may reject any such change through a written notice sent\n  within thirty (30) days from the date the change became effective. Rejection of any change does\n  not result in opting out of the original arbitration provisions",
  ts_22: "DISCLAIMER OF WARRANTIES",
  ts_22_1: "THE INFORMATION AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THE\n  WEBSITE MAY INCLUDE INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES\n  ARE PERIODICALLY ADDED TO THE INFORMATION HEREIN. MOTIPIO AND/OR ITS\n  SUPPLIERS AND CONTRACTORS MAY MAKE IMPROVEMENTS AND/OR CHANGES IN\n  THE WEBSITE AT ANY TIME.",
  ts_22_2: "THE WEBSITE IS OFFERED WITH THE UNDERSTANDING THAT MOTIPIO ASSUMES\n  NO RESPONSIBILITY OR LIABILITY WHATSOEVER ON THE BEHALF OF CLIENTS\n  WHO PURCHASE THE SERVICES OR WHO DIRECTLY OR INDIRECTLY ACT ON THE\n  INFORMATION OFFERED THROUGH THE WEBSITE AND HAS NO LIABILITY OR\n  RESPONSIBILITY TO CLIENTS FOR PERFORMANCE OR NONPERFORMANCE OF\n  ACTIVITIES UNDERTAKEN BY PROFESSIONALS. ANY USE OF THE WEBSITE AND\n  SERVICES IS SOLELY AT CLIENTS\u2019 OWN RISK.",
  ts_22_3: "USERS ARE SOLELY RESPONSIBLE FOR DECIDING WHETHER THE SERVICES ARE\n  SUITABLE FOR THEIR OWN PURPOSES AND WHETHER THE SERVICES MATCH\n  THEIR NEEDS. MOTIPIO OFFERS NO EXPRESS OR IMPLIED GUARANTEES OR\n  WARRANTIES REGARDING THE BENEFITS OR EFFECTIVENESS OF THE WEBSITE OR\n  SERVICES OR THAT USERS WILL FIND THE SERVICES SATISFACTORY, COMPLETE,\n  OF BENEFIT, OR SUITABLE FOR THEIR OWN CIRCUMSTANCES. MOTIPIO HAS NO\n  LIABILITY OR RESPONSIBILITY FOR CLAIMS RELATING TO ANY INACCURATE,\n  UNTIMELY OR INCOMPLETE INFORMATION.",
  ts_22_4: "M O T I P I O A N D / O R I T S S U P P L I E R S A N D C O N T R A C TO R S M A K E N O\n  REPRESENTATIONS ABOUT THE SUITABILITY, RELIABILITY, AVAILABILITY,\n  TIMELINESS, AND ACCURACY OF THE INFORMATION AND SERVICES CONTAINED\n  ON THE WEBSITE FOR ANY PURPOSE. TO THE MAXIMUM EXTENT PERMITTED BY\n  APPLICABLE LAW, ALL SUCH INFORMATION AND SERVICES ARE PROVIDED \"AS IS\"\n  WITHOUT WARRANTY OR CONDITION OF ANY KIND. MOTIPIO AND/OR ITS\n  SUPPLIERS AND CONTRACTORS HEREBY DISCLAIM ALL WARRANTIES AND\n  CONDITIONS WITH REGARD TO THIS INFORMATION AND SERVICES, INCLUDING\n  ALL IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR\n  A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT.",
  ts_23: "LIMITATION OF LIABILITIES",
  ts_23_1: " TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT\n  SHALL MOTIPIO AND/OR ITS SUPPLIERS OR CONTRACTORS BE LIABLE FOR ANY\n  DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL DAMAGES\n  OR ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES\n  FOR LOSS OF USE, DATA OR PROFITS, ARISING OUT OF OR IN ANY WAY\n  CONNECTED WITH THE USE OR PERFORMANCE OF THE WEBSITE, WITH THE\n  DELAY OR INABILITY TO USE THE WEBSITE OR RELATED SERVICES, THE\n  PROVISION OF OR FAILURE TO PROVIDE SERVICES, OR FOR ANY INFORMATION\n  AND SERVICES OBTAINED THROUGH THE WEBSITE, OR OTHERWISE ARISING OUT\n  OF THE USE OF THE WEBSITE, WHETHER BASED ON CONTRACT, TORT,\n  NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, EVEN IF MOTIPIO OR ANY OF ITS\n  SUPPLIERS OR CONTRACTORS HAVE BEEN ADVISED OF THE POSSIBILITY OF\n  DAMAGES. BECAUSE SOME STATES/JURISDICTIONS DO NOT ALLOW THE\n  EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL\n  DAMAGES, THE ABOVE LIMITATION MAY NOT APPLY TO USERS. OTHERWISE IF\n  USERS ARE DISSATISFIED WITH ANY PORTION OF THE WEBSITE, OR WITH ANY OF\n  THESE TERMS AND CONDITIONS, USERS SOLE AND EXCLUSIVE REMEDY IS TO\n  DISCONTINUE USING THE WEBSITE.",
  ts_23_2: "MOTIPIO HAS NO FIDUCIARY OBLIGATIONS AND SHALL NOT BE RESPONSIBLE OR\n  LIABLE, AND USERS AGREE NOT TO HOLD MOTIPIO RESPONSIBLE OR LIABLE FOR SUCH\n  OCCURRENCES AS THE WEBSITE NOT OPERATING ERROR-FREE OR OPERATING WITH\n  COMPUTER VIRUSES OR OTHER HARMFUL MECHANISMS, DELETION OF USERS DATA\n  AND INFORMATION, USERS INABILITY TO USE THE WEBSITE, DELAYS OR DISRUPTIONS,\n  DAMAGE TO USERS EQUIPMENT OR DATA, USERS RELIANCE ON THE COMMUNICATIONS,\n  THE LOSS, INTERCEPTION OR ALTERATION OF ANY TRANSMISSIONS OVER THE\n  INTERNET, OR THE LOSS OR INADVERTENT RELEASE OF THE COMMUNICATIONS,\n  INFORMATION OR MATERIALS. ALL USERS MUST BACKUP ALL DATA INPUTTED TO THE\n  WEBSITE.",
  ts_24: "Electronic Communications",
  ts_24_1: "Such actions as for example accessing the Website or sending emails to Motipio constitutes\n  electronic communications. Users consent to receive electronic communications and Users agree\n  that Motipio\u2019s provision all such communications shall be made electronically to satisfy any legal\n  requirement that such communications be in writing.",
  ts_25: "Additional Terms and Conditions",
  ts_25_1: "No joint venture, partnership, employment, or agency relationship exists between Users and\n  Motipio as a result of these Terms and Conditions or use of the Website.",
  ts_25_2: "Motipio's performance hereunder is subject to existing laws and legal process, and nothing\n  contained in these Terms and Conditions is in derogation of Motipio's right to comply with\n  governmental, court and law enforcement requests or requirements relating to Users use of the\n  Website or information provided to or gathered by Motipio with respect to such use.",
  ts_25_3: "If any court having competent jurisdiction holds any provision of this Terms and Conditions\n  invalid or unenforceable in any respect, such provision shall be enforced to the maximum extent\n  permitted by law, and the remaining provisions of this Terms and Conditions shall continue in full\n  force and effect.",
  ts_25_4: "The failure or delay of either party to exercise or enforce any right or claim does not constitute a\n  waiver of such right or claim and shall in no way affect that party\u2019s right to later enforce or\n  exercise it, unless such party issues an express written waiver, signed by a duly authorized\n  representative.",
  ts_25_5: "Unless otherwise specified herein, these Terms and Conditions constitutes the entire Agreement\n  between the user and Motipio with respect to the Website and Services and supersedes all prior or\n  contemporaneous communications and proposals, whether electronic, oral or written, between the\n  User and Motipio with respect to the Website. A printed version of these Terms and Conditions\n  and of any notice given in electronic form shall be admissible in judicial or administrative\n  proceedings based upon or relating to these Terms and Conditions to the same extent and subject\n  to the same conditions as other business documents and records originally generated and\n  maintained in printed form. It is the express wish to the parties that these Terms and Conditions\n  and all related documents be written in English.",
  address_title: "Contact Us",
  address_disc: "Motipio welcomes Users questions or comments regarding the Terms and Conditions:",
  address_llc: "Motipio LLC",
  address_address: "Address: 610 W Broadway Street, suit 201, Jackson, Wyoming 83001, USA",
  address_phone: "Phone: +1 (202) 915 23 43",
  address_email: "Email: support@motip.io",
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
  phone_row1_text: "you will receive",
  phone_row2_text: " Request #1:",
  phone_message: "Hello, I need your advice about my marketing.",
  btn_decline: "Decline",
  btn_accept: "Accept",
  statistic_text1: "Income reqeusts",
  statistic_text2: "Projected Income",
  statistic_count1: "1 of 16",
  statistic_count2: "12 800 USD",
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
  tag__item_6: "More...",
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
  footer_xs_link_5: "Cookie Policy",
  // chat
  steve_name: "Steven Armstrong",
  per_text: 'per request',
  chat_msg_user_1: "Hi Steve! How to be productive and positive at the same time? What a secret?!",
  chat_msg_steve_1: "\uD83D\uDC4B Oh! What a great and deep question! Hope that my answers will help you. But first...",
  chat_msg_steve_2: "Could you tell me something about yourself?",
  chat_msg_steve_3: "\u201CBe productive\u201D, could you explain. What does mean to you these words?",
  chat_msg_user_2: "Sure! Also, thx that you accepted request\u2026\uD83D\uDE0A",
  chat_msg_steve_4: "Thank you too, that having me. I really love helping people \uD83E\uDD17",
  typing: "Typing...",
  // cookie modal
  cookie_modal_title: "This website uses cookies.",
  cookie_modal_text: "Before you decide whether to agree to accept and to store first-party\n\tand third-party cookies on your device, please read more about\n\t<a href=\"./cookie_policy.html\">cookie policy here.</a>"
};
/* harmony default export */ __webpack_exports__["default"] = (En);

/***/ }),

/***/ "./src/js/lang/ru.js":
/*!***************************!*\
  !*** ./src/js/lang/ru.js ***!
  \***************************/
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
  download_title: "именем сильны главой ",
  // terms_of_service
  terms_of_service__title: 'Terms of service',
  terms_of_service__comment: 'Updated: 30 September 2019',
  ts_1: "Introduction",
  ts_1_1: 'Welcome to www.motipio.com (the "Website") operated by Motipio LLC (“Motipio”). The Website provides the ability for professionals (the “Professionals”) to offer services (individually and collectively the “Services”) to those seeking such Services (“the Clients”).',
  ts_1_2: "The Website is offered to Professionals and Clients (individually and collectively the \u201CUser\u201D or \u201CUsers\u201D) conditioned on Users acceptance without modification of these Terms and Conditions. Users use of the Website constitutes Users agreement to these Terms and Conditions. Please read the Terms and Conditions carefully and keep a copy for reference.",
  ts_1_3: "Motipio shall have the right, at its sole discretion, to modify these Terms and Conditions without notice or liability but has no obligation to do so. Any modifications to the Terms and Conditions shall be effective immediately following the posting of such modifications. Users agree to review the Terms and Conditions from time to time and agree that any subsequent use by Users of the Services shall constitute Users acceptance of all such modifications.",
  ts_1_4: "THE WEBSITE IS PROVIDED ON AN \"AS IS\" AND \"AS AVAILABLE\" BASIS. USE OF THE SERVICES ARE AT USERS SOLE RISK. MOTIPIO RESERVES THE RIGHT TO RESTRICT OR TERMINATE USERS ACCESS TO THE WEBSITE AT ANY TIME AND IN ITS SOLE DISCRETION, WITHOUT PRIOR NOTICE, WHENEVER MOTIPIODEEMS THAT USERS USE IS IN ANY MANNER INAPPROPRIATE OR IN VIOLATION OF APPLICABLE LAWS AND REGULATIONS OR THESE TERMS AND CONDITIONS.",
  ts_2: "Privacy ",
  ts_2_1: "Use of the Website is subject to Motipio's Privacy Policy that governs Motipio\u2019s data collection practices.",
  ts_3: "Access to Services",
  ts_3_1: "Access to the Services is available only to those 18 years of age or older",
  ts_3_2: "Motipio makes no claims that the Services may be lawfully accessed in any specific country, state, or province. Access to the Services may not be legal by certain persons or in certain countries, states, or provinces or may require government authorization or registration.",
  ts_3_3: "When Users access the Services, they do so at their own risk and are solely responsible for compliance with the laws of Users jurisdiction, including but not limited to transferring or uploading data.",
  ts_4: "No Unlawful or Prohibited Use ",
  ts_4_1: "Users are granted a non-exclusive, non-transferable, revocable license to access and use the Website strictly in accordance with these Terms and Conditions. As a condition of use, Users warrant to Motipio that Users will not use the Services for the purposes provided and not for any purpose prohibited by these Terms and Conditions or any applicable law or regulation. ",
  ts_4_2: "Users may not obtain or attempt to obtain any materials or information through any means not intentionally made available through the Website. ",
  ts_4_3: "Users may not use the Website in any manner which could damage, disable, overburden, or impair the Website or interfere with any other party's use of the Services. Users are prohibited from violating or attempting to violate the security of the Website, by among other things, uploading any materials which contain files or programming designed to interrupt, destroy or affect the functionality of the service, contain viruses, worms, spyware, or other malware, attempt to interfere with service to any User, host or network, or make the Website available to any third party who is not subject to these Terms and Conditions.",
  ts_4_4: "Violations of system or network security or inappropriate conduct may result in civil or criminal liability. Motipio will investigate occurrences that may involve such violations and cooperate with law enforcement entities in prosecuting users who are involved in such violations.",
  ts_5: "User Accounts ",
  ts_5_1: "Users are responsible for maintaining the confidentiality of account and password information and Users agree to accept responsibility for all activities that occur under Users account or password.",
  ts_5_2: "Users may not assign or otherwise transfer their account to any other person or entity and\n\tacknowledge that Motipio is not responsible for third party access to Users account that results\n\tfrom theft or misappropriation.",
  ts_5_3: "All data uploaded is done so voluntarily at Users own discretion and risk. Users are solely\n\tresponsible for the information uploaded to the Website and warrant and represent Users have the\n\tright and authorization to upload all such information. ",
  ts_5_4: "Users warrant and represent that all information uploaded to the Website is current and accurate\n\tand will be kept up to date. ",
  ts_5_5: "Motipio may disclose or delete Customer Data if reasonably necessary to prevent injury or harm,\n\tto protect the performance of the Website, or if required by law. ",
  ts_6: "Provision of the Website",
  ts_6_1: "Each User is required to obtain and maintain a high-speed Internet connection and appropriate\n\tbrowser software.",
  ts_6_2: "Under no circumstances is Motipio providing advice or consultation. Clients are encouraged to\n\tundertake independent research and/or seek appropriate advice as relates to their use of the\n\tServices.",
  ts_6_3: "Motipio will use commercially reasonable efforts to make the Website available 24/7, except for\n\tplanned downtime for such things as support and maintenance that will be scheduled, to the\n\textent possible, during low volume hours, and shall not be liable for any unavailability caused by\n\ta force majeure event such as an act of God, act of government, flood, fire, earthquake, civil\n\tunrest, act of terror, strike or other labor problem, Internet service provider failure or delay.",
  ts_7: "The Professionals\u2019 Warranties and Representations",
  ts_7_1: "Professionals shall provide Services and meet their obligations in a timely and workmanlike\n\tmanner, using skills that meet generally acceptable industry standards, and will provide a\n\tstandard of care equal to, or superior to, care used by service providers similar to professionals on\n\tsimilar projects. ",
  ts_7_2: "Professional are free to enter into these engagements and that these engagements do not violate\n\tthe terms of any agreement between the Professional and any third party.",
  ts_7_3: "All information provided to the Client is original to or duly licensed by the Professional or is in\n\tthe public domain and that all such information does not infringe on any third party\u2019s intellectual\n\tproperty rights, including but not limited to copyrights, or rights of privacy or publicity.",
  ts_7_4: "All personal and professional information, including but not limited to skills and experience, is\n\taccurate and the Professional shall notify Motipio promptly of any material change in such\n\tpersonal and information.",
  ts_7_5: "Professionals will provide only the Services for which they are qualified, and the provision of all\n\tServices are in compliance with applicable rules, regulations, and license requirements.",
  ts_7_6: "Professionals warrant and represent that they will be solely responsible and liable for any\n\tdamages to or claim from any Client to whom Professionals provide Services.",
  ts_8: "User Warranties and Representations ",
  ts_8_1: "Users will not contact, solicit or retain other Users for the Services provided through the Website\n\toutside of the Website. ",
  ts_9: "User Generated Content",
  ts_9_1: "User Generated Content is any information or data uploaded to the Website or communications\n\tundertaken through the Website.",
  ts_9_2: "Each user acknowledges and agrees that they are solely responsible for the form, content and\n\taccuracy of any User Generated Content submitted and for their own communications and are\n\tresponsible for the consequences of all user generated content and their communications",
  ts_9_3: "Each user warrants and represents that the User Generated Content is accurate and up-to-date, and\n\tthat it does not violate relevant laws, rules or regulations.",
  ts_9_4: "The Professional warrants and represents that they will not imply or state, directly or indirectly,\n\tthat Users are affiliated with or endorsed by Motipio.",
  ts_9_5: "Each user warrants and represents that they have all rights necessary to upload User Generated\n\tContent and that no User Generated Content will violate the intellectual property rights or the\n\trights or privacy or publicity of any third party.",
  ts_9_6: "Users shall not provide any User Generated Content or engage in communications that is false,\n\tdefamatory, libelous, hateful, threatening, harassing, racially or ethnically offensive,\n\tpornographic, obscene, encourages anything that would be considered a criminal offense, gives\n\trise to civil liability, violates any law or regulation, including but not limited to laws or\n\tregulations relating to intellectual property rights, or harm or threaten the safety of others.",
  ts_9_7: "As a passive conduit for those interested in providing and seeking professional services, Motipio\n\tis under no legal obligation to, and does not, control the User Generated Content. It has no\n\tobligation to screen User Generated Content in advance and is not responsible for screening or\n\tmonitoring User Generated Content. By its very nature, other people's User Generated Content\n\tmay be offensive, harmful or inaccurate. Users acknowledge that any reliance User Generated\n\tContent will be at Users own risk. Users agree to take all necessary precautions.",
  ts_9_8: "If notified that User Generated Content may not conform to these Terms and Conditions, Motipio\n\tmay investigate the allegation and determine and its sole discretion whether to remove or request\n\tthe removal of any User Generated Content.",
  ts_9_9: "Users retain the ownership and copyright to User Generated Content and communications posted\n\tby them.",
  ts_9_10: "By submitting User Generated Content, Users grant Motipio the royalty-free, perpetual,\n\tirrevocable, sublicenseable through multiple tiers, non-exclusive right (including any moral\n\trights) and license to use, stream, reproduce, modify, adapt, publish, translate, distribute, perform,\n\tincorporate the User Generated Content in other works, and display the User Generated Content,\n\tin whole or in part, worldwide through any media or technology now known or later developed,\n\tfor the full term of any rights that may exist in such the User Generated Content and\n\tcommunications as long as Users are a registered user. ",
  ts_9_11: " Users permit any other user to access, display and view all User Generated Content submitted to\n\tthe public areas of the Services.",
  ts_9_12: "Motipio does not guarantee any confidentiality with respect to any User Generated Content.",
  ts_9_13: "Users may not use, duplicate, modify, distribute, or reproduce the User Generated Content posted\n\tby others in any manner. If Users believe that intellectual property rights have been infringed,\n\tUsers may notify Motipio according to the notification procedures set forth in our Copyright\n\tInfringement Policy.",
  ts_9_14: " Motipio is not involved in the actual transaction between Users. As a result, Motipio has no\n\tcontrol over the quality, safety, truth, accuracy or legality of User Generated Content. There are\n\trisks, including but not limited to the risk of physical harm, in dealing with strangers, underage\n\tpersons or people acting under false pretenses. Motipio expects that Users will use caution and\n\tcommon sense when using Users assume all risks associated in dealing with other users with\n\twhom Users come in contact.",
  ts_9_15: "Because user authentication on the Internet is difficult, Motipio cannot and does not confirm that\n\teach user is who they claim to be or control the behavior of users. In the event Users have a\n\tdispute with other users, Users release Motipio, its subsidiaries, affiliates, officers, directors,\n\temployees, agents, representatives and partners, from claims, demands and damages (actual and\n\tconsequential, direct and indirect) of every kind and nature, known and unknown, suspected and\n\tunsuspected, disclosed and undisclosed, arising out of or in any way connected with such disputes\n\twith third parties.",
  ts_10: "Payments",
  ts_10_1: "All payments obtained by Motipio from Clients shall be collected through the Website and\n\tdistributed to the Professionals less applicable fees.",
  ts_10_2: "Clients will select a payment package and all payments shall be made according to the payment\n\trequirements of each package.",
  ts_10_3: "Payments can be made using PayPal, Visa and MasterCard credit or debit cards payable in US\n\tdollars. By purchasing a payment plan, Users expressly agree that Motipio is authorized to charge\n\tfor Users selected payment plan through the Payment Method Users designate. Users can update\n\tthis information at anytime.",
  ts_10_4: "All credit/debit card processing will be submitted directly to Motipio\u2019s payment provider by a\n\tsecured connection. Payment details will NOT be stored by Motipio. The cardholder must retain a\n\tcopy of transaction records and Merchant policies and rules.",
  ts_10_5: "Motipio may engage third party suppliers from time to time. Users agree that Motipio may\n\tdisclose Users information to third-party suppliers for the purpose of enabling Users use of the\n\tWebsite and each Users agrees that Motipio will not be held liable for any act or omission of any\n\tthird-party supplier.",
  ts_10_6: "Motipio has the right to change payment packages and Users use of the Services after such\n\tchanges constitutes agreement to the changes.",
  ts_10_7: "If Motipio is unable to charge a Clients\u2019 account, then in its sole discretion Motipio may cancel\n\tClients\u2019 access to the Website and Services and bill Client for any outstanding payments.",
  ts_10_8: "Cancellation by Clients may take place at any time, through an applicable app platform.",
  ts_10_9: "Payments are nonrefundable. If any Service is accessed through an app platform, the refund\n\tpolicy applicable to that app platform will apply and the app platform is solely responsible for\n\tany refunds.",
  ts_11: "Intellectual Property",
  ts_11_1: "\u201CMOTIPIO\u201D, and any other Motipio trademarks and trade names, and any variations thereof, are\n\tand shall remain the trademarks and trade names and exclusive property of Motipio, and any\n\tunauthorized use of such trademarks and trade names is unlawful.",
  ts_11_2: "All content included as part of the Website, such as text, graphics, logos, images, as well as the\n\tcompilation thereof, and any software used on the Website (individually and collectively the\n\t\u201CContent\u201D), is the property of Motipio or its suppliers and protected by copyright and other laws\n\tthat protect intellectual property and proprietary rights. Users agree to observe and abide by all\n\tcopyright and other proprietary notices, legends or other restrictions contained in any such\n\tcontent and will not make any changes thereto.",
  ts_11_3: "Users will not modify, publish, transmit, reverse engineer, participate in the transfer or sale,\n\tcreate\n\tderivative works, or in any way exploit any aspect of the Website or the Content, in whole or in\n\tpart, and no Content is for resale. Users will use the Content solely for Users personal use and\n\twill make no other use of the content without the express written permission of Motipio and the\n\tcopyright owner.",
  ts_11_4: "Users do not acquire any ownership rights in any Content, and no other license, express or\n\timplied, is granted by these Terms and Conditions.",
  ts_12: "Identification of Agent to Receive Notification and Elements of Notification of Claimed\n\tCopyright Infringement",
  ts_12_1: "If Users believe that any copyrighted work is accessible on or through these Services in a way\n\tthat constitutes copyright infringement, please notify Motipio by providing our designated\n\tcopyright agent with the following information:",
  ts_12_1_1: "The physical or electronic signature of either the copyright owner or of a person\n\tauthorized to act on the owner's behalf;",
  ts_12_1_2: "A description of the copyrighted work Users claim has been infringed, and a description\n\tof the activity that Users claim to be infringing;",
  ts_12_1_3: "Identification of the URL or other specific location on this website where the material or\n\tactivity Users claim to be infringing is located or is occurring; Users must include enough\n\tinformation to allow us to locate the material or the activity;",
  ts_12_1_4: "Usersr name, address, telephone number, and e-mail address;",
  ts_12_1_5: "A statement by Users that Users have a good faith belief that use on the Website of the\n\tcopyrighted work in the manner Users are complaining of is not authorized by the copyright\n\towner, any agent of the copyright owner, or the law; and",
  ts_12_1_6: "A statement by Users, made under penalty of perjury, that the information Users have\n\tprovided in Usersr notice is accurate and that Users are either the copyright owner or are\n\tauthorized to act on behalf of the copyright owner.",
  ts_12_2: " Upon receipt of notification of a Notice of copyright infringement, Motipio may remove or\n\tdisable access to the alleged infringing material or terminate the alleged infringer's access to\n\tits\n\taccount. The alleged infringer may provide a written Counter Notification meeting the following\n\tcriteria:",
  ts_12_2_1: "Identification of the material that has been removed or to which access has been disabled\n\tand the location at which the material appeared before it was removed or access to it was\n\tdisabled;",
  ts_12_2_2: "A physical or electronic signature of either the copyright owner or of a person authorized\n\tto act on the owner's behalf;",
  ts_12_2_3: "Usersr name, address, telephone number, and e-mail address;",
  ts_12_2_4: "Consent to the jurisdiction of Federal District Court for the judicial district in which the\n\talleged infringer's address is located, or if the alleged infringer's address is outside of\n\tthe United States, for any judicial district in which the alleged infringer may be found, and that the alleged\n\tinfringer will accept service of process from the person who provided notification or an agent of\n\tsuch person; and",
  ts_12_2_5: "A statement, under penalty of perjury, that the alleged infringer has a good faith belief\n\tthat the material was removed or disabled as a result of mistake or misidentification of the\n\tmaterial to be removed or disabled.",
  ts_12_3: "Please note that the submission of a false or materially misleading Notice or Counter-Notice, and\n\tany such submission may result in liabilities, including perjury.",
  ts_12_4: "We have designated our selected lawyer (in process) as our agent to receive notices of claims of\n\tcopyright infringement on our website.",
  ts_13: "Confidentiality",
  ts_13_1: "The specific design and structure of the Website and Services constitute proprietary and\n\tconfidential information, trade secrets and/or intellectual property of Motipio. Users agree not\n\tto disclose, provide, or otherwise make available such proprietary and confidential information,\n\ttrade secrets or copyrighted material in any form to any third party, or use the proprietary and\n\tconfidential information, trade secrets or copyrighted material for their own benefit or for the\n\tbenefit of any third party.",
  ts_13_2: "The transactional data collected through the Website and Services is confidential and Motipio\n\tagrees to hold such data in strict confidence and not to disclose the transactional data to any\n\tthird\n\tparty except in the situation where the Company is required to comply with an applicable law or\n\tregulation or with a court order.",
  ts_14: "User Comments and Suggestions",
  ts_14_1: "While Motipio values user feedback, please be specific in any comments and do not submit\n\tcreative ideas, inventions, or suggestions.",
  ts_14_2: "If, despite this request, Users send creative ideas, inventions, or suggestions, all such submissions\n\tshall be the property of Motipio in whole or in part. Motipio shall own exclusively all now known\n\tor later discovered rights to the submissions and shall be entitled to unrestricted use of the\n\tsubmissions for any purpose whatsoever, commercial or otherwise, without compensation to\n\tusers or any other third party.",
  ts_14_3: "No part of the submissions shall be subject to any obligation of confidence and Motipio shall not\n\tbe liable for any use or disclosure.",
  ts_15: "Links to Third Party Websites/Third Party Services",
  ts_15_1: "The Website may contain links to other Websites (\"Linked Websites\"). The Linked Websites are\n\tnot under the control of Motipio and Motipio is not responsible for the contents of any Linked\n\tWebsite, including without limitation any link contained in a Linked Website, or any changes or\n\tupdates to a Linked Website. Motipio is providing these links to Users only as a convenience, and\n\tthe inclusion of any link does not imply endorsement by Motipio of the Website or any\n\tassociation with its operators.",
  ts_16: "Social Networking",
  ts_16_1: "Users may have the option to use Twitter, Facebook or other social networking platforms through\n\tthe Services to share links and content. Users undertake this option as their sole responsibility,\n\tincluding but not limited to complying with all of the Terms of Use of the social networking\n\tplatforms and understanding their privacy policies. Motipio has no liability or responsibility for\n\tthe privacy practices or other actions of any third-party service connected through the Website,\n\tand is not liable for any damage or loss caused or alleged to be caused by connecting with a\n\tsocial networking platform.",
  ts_17: "Feedback and Ratings Policy",
  ts_17_1: "The Website will contain the opportunity for feedback and ratings from Users.",
  ts_17_2: "Feedback results may consist of comments and ratings left by other Users and that the Website\n  may calculate a composite feedback number based on these individual ratings. The Website\n  provides its feedback and rating system as a means through which Users can express their\n  opinions publicly, and the Website does not monitor or censor these opinions or investigate any\n  remarks posted by Users for accuracy or reliability unless a User brings the posting to Motipio\u2019s\n  attention.",
  ts_17_3: "Users agree to use balanced and fair feedback and not to take any actions that undermine the\n  integrity of the feedback system, including but not limited to the following: falsifying feedback\n  for Users own self; artificially raising the level of Users own feedback or creating negative\n  feedback for another User; manipulating or coercing another User to perform a given task by\n  threatening to leave negative feedback; or withholding deliverables or funds until another User\n  agrees to leave positive feedback or no feedback.",
  ts_17_4: "Motipio is not legally responsible for any feedback by any Users or third parties, even if the\n  feedback is defamatory or otherwise legally actionable. Users may be held legally responsible for\n  damages suffered by other Users or third parties as a result of remarks posted by Users if a court\n  finds that these remarks are legally actionable or defamatory.",
  ts_17_5: "Motipio reserves the right to remove any feedback from the system at any time, including but not\n  limited to feedback that contains language that is profane, vulgar, or racist; is submitted by a\n  User\n  who is either in violation of these Terms and Conditions or any law or regulation; has conducted\n  fraudulent transactions; is not directly related to transactions; makes any reference to actions\n  taken or purported to be taken by Motipio or any third party; or has left feedback with false\n  contact information or cannot be contacted.",
  ts_18: "Indemnification",
  ts_18_1: "Users agree to indemnify, defend and hold harmless Motipio, its officers, directors, employees,\n  agents, contractors and representatives for any losses, costs, liabilities and expenses (including\n  reasonable attorney's fees) relating to or arising out of Users use of or inability to use the\n  Website\n  or Services, any user postings made by Users, Users violation of any terms of these Terms and\n  Conditions, Users violation of any rights of a third party, or Users violation of any applicable\n  laws, rules or regulations. Motipio reserves the right, at its own cost, to assume the exclusive\n  defense and control of any matter otherwise subject to indemnification by Users, in which event\n  Users will fully cooperate with Motipio in asserting any available defenses and pay all applicable\n  costs and expenses.",
  ts_19: "Release",
  ts_19_1: "  Users hereby release Motipio and its subsidiaries, affiliates, officers, directors, employees,\n  agents,\n  partners, and representatives from all actions, claims or demands and from any and all losses\n  (direct, indirect, incidental or consequential), damages, lost profits, costs or expenses,\n  including,\n  without limitation, court costs and attorney's fees which Users may have against Motipio and its\n  subsidiaries, affiliates, officers, directors, employees, agents, partners, and representatives.",
  ts_20: "Choice of Law and Resolution of Disputes",
  ts_20_1: "These Terms and Conditions affect interstate commerce and the U.S. Federal Arbitration Act\n  governs the interpretation and enforcement of these arbitration provisions. Other than the\n  requirement of exercising the jurisdiction of federal courts to resolve disputes relating to\n  intellectual property such as trademark and copyright, or small claim matters, arbitration governs\n  all disputes between Motipio and Users, whether based in contract, tort, statute, fraud,\n  misrepresentation or any other legal theory.",
  ts_20_2: "Before taking any formal action, the party seeking formal action shall contact the other party in\n  writing, detailing the dispute, and after such exchange the parties shall enter into good faith\n  negotiations before initiating a lawsuit or arbitration.",
  ts_20_3: "In the event the parties are not able to resolve any other dispute between them then such dispute,\n  other than a dispute related to intellectual property, shall be resolved only by final and\n  individual\n  binding arbitration conducted by a single neutral arbitrator and administered by the American\n  Arbitration Association, or a similar arbitration service selected by the parties, in the county\n  in\n  which the User resides, if a resident of the United States. For residents outside of the United\n  States, the arbitration shall take place in their own , with the parties submitting to personal\n  jurisdiction in such jurisdiction.",
  ts_20_4: "Either party may access the jurisdiction of a small claims court if the dispute falls within the\n  small claims court's jurisdiction to the extent such claims do not seek equitable relief.",
  ts_20_5: "The arbitrator shall have exclusive authority to resolve all disputes arising out of or relating\n  to the\n  interpretation, applicability or enforceability, or formation of these Terms and Conditions. The\n  arbitrator shall be empowered to grant whatever relief would be available in a court under law or\n  in equity. The arbitrator's award shall be final, and judgment may be entered upon it in any court\n  having appropriate jurisdiction.",
  ts_21: "Class Action Waiver",
  ts_21_1: "The resolution under these Terms and Conditions will take place on an individual basis; class\n  arbitrations or class/representative/collective court actions are not permitted. The parties\n  expressly waive their right to file a class action or seek relief on a class basis, as a plaintiff\n  or putative class.",
  ts_21_2: "You have the right to opt out and not be bound by the arbitration and class action waiver\n  provisions through a written notice sent within thirty (30) days of your first use of the\n  Services.\n  Opting out means that Motipio is no longer bound by the arbitration provisions. If changes are\n  made to the arbitration provision, Users may reject any such change through a written notice sent\n  within thirty (30) days from the date the change became effective. Rejection of any change does\n  not result in opting out of the original arbitration provisions",
  ts_22: "DISCLAIMER OF WARRANTIES",
  ts_22_1: "THE INFORMATION AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THE\n  WEBSITE MAY INCLUDE INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES\n  ARE PERIODICALLY ADDED TO THE INFORMATION HEREIN. MOTIPIO AND/OR ITS\n  SUPPLIERS AND CONTRACTORS MAY MAKE IMPROVEMENTS AND/OR CHANGES IN\n  THE WEBSITE AT ANY TIME.",
  ts_22_2: "THE WEBSITE IS OFFERED WITH THE UNDERSTANDING THAT MOTIPIO ASSUMES\n  NO RESPONSIBILITY OR LIABILITY WHATSOEVER ON THE BEHALF OF CLIENTS\n  WHO PURCHASE THE SERVICES OR WHO DIRECTLY OR INDIRECTLY ACT ON THE\n  INFORMATION OFFERED THROUGH THE WEBSITE AND HAS NO LIABILITY OR\n  RESPONSIBILITY TO CLIENTS FOR PERFORMANCE OR NONPERFORMANCE OF\n  ACTIVITIES UNDERTAKEN BY PROFESSIONALS. ANY USE OF THE WEBSITE AND\n  SERVICES IS SOLELY AT CLIENTS\u2019 OWN RISK.",
  ts_22_3: "USERS ARE SOLELY RESPONSIBLE FOR DECIDING WHETHER THE SERVICES ARE\n  SUITABLE FOR THEIR OWN PURPOSES AND WHETHER THE SERVICES MATCH\n  THEIR NEEDS. MOTIPIO OFFERS NO EXPRESS OR IMPLIED GUARANTEES OR\n  WARRANTIES REGARDING THE BENEFITS OR EFFECTIVENESS OF THE WEBSITE OR\n  SERVICES OR THAT USERS WILL FIND THE SERVICES SATISFACTORY, COMPLETE,\n  OF BENEFIT, OR SUITABLE FOR THEIR OWN CIRCUMSTANCES. MOTIPIO HAS NO\n  LIABILITY OR RESPONSIBILITY FOR CLAIMS RELATING TO ANY INACCURATE,\n  UNTIMELY OR INCOMPLETE INFORMATION.",
  ts_22_4: "M O T I P I O A N D / O R I T S S U P P L I E R S A N D C O N T R A C TO R S M A K E N O\n  REPRESENTATIONS ABOUT THE SUITABILITY, RELIABILITY, AVAILABILITY,\n  TIMELINESS, AND ACCURACY OF THE INFORMATION AND SERVICES CONTAINED\n  ON THE WEBSITE FOR ANY PURPOSE. TO THE MAXIMUM EXTENT PERMITTED BY\n  APPLICABLE LAW, ALL SUCH INFORMATION AND SERVICES ARE PROVIDED \"AS IS\"\n  WITHOUT WARRANTY OR CONDITION OF ANY KIND. MOTIPIO AND/OR ITS\n  SUPPLIERS AND CONTRACTORS HEREBY DISCLAIM ALL WARRANTIES AND\n  CONDITIONS WITH REGARD TO THIS INFORMATION AND SERVICES, INCLUDING\n  ALL IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR\n  A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT.",
  ts_23: "LIMITATION OF LIABILITIES",
  ts_23_1: " TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT\n  SHALL MOTIPIO AND/OR ITS SUPPLIERS OR CONTRACTORS BE LIABLE FOR ANY\n  DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL DAMAGES\n  OR ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES\n  FOR LOSS OF USE, DATA OR PROFITS, ARISING OUT OF OR IN ANY WAY\n  CONNECTED WITH THE USE OR PERFORMANCE OF THE WEBSITE, WITH THE\n  DELAY OR INABILITY TO USE THE WEBSITE OR RELATED SERVICES, THE\n  PROVISION OF OR FAILURE TO PROVIDE SERVICES, OR FOR ANY INFORMATION\n  AND SERVICES OBTAINED THROUGH THE WEBSITE, OR OTHERWISE ARISING OUT\n  OF THE USE OF THE WEBSITE, WHETHER BASED ON CONTRACT, TORT,\n  NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, EVEN IF MOTIPIO OR ANY OF ITS\n  SUPPLIERS OR CONTRACTORS HAVE BEEN ADVISED OF THE POSSIBILITY OF\n  DAMAGES. BECAUSE SOME STATES/JURISDICTIONS DO NOT ALLOW THE\n  EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL\n  DAMAGES, THE ABOVE LIMITATION MAY NOT APPLY TO USERS. OTHERWISE IF\n  USERS ARE DISSATISFIED WITH ANY PORTION OF THE WEBSITE, OR WITH ANY OF\n  THESE TERMS AND CONDITIONS, USERS SOLE AND EXCLUSIVE REMEDY IS TO\n  DISCONTINUE USING THE WEBSITE.",
  ts_23_2: "MOTIPIO HAS NO FIDUCIARY OBLIGATIONS AND SHALL NOT BE RESPONSIBLE OR\n  LIABLE, AND USERS AGREE NOT TO HOLD MOTIPIO RESPONSIBLE OR LIABLE FOR SUCH\n  OCCURRENCES AS THE WEBSITE NOT OPERATING ERROR-FREE OR OPERATING WITH\n  COMPUTER VIRUSES OR OTHER HARMFUL MECHANISMS, DELETION OF USERS DATA\n  AND INFORMATION, USERS INABILITY TO USE THE WEBSITE, DELAYS OR DISRUPTIONS,\n  DAMAGE TO USERS EQUIPMENT OR DATA, USERS RELIANCE ON THE COMMUNICATIONS,\n  THE LOSS, INTERCEPTION OR ALTERATION OF ANY TRANSMISSIONS OVER THE\n  INTERNET, OR THE LOSS OR INADVERTENT RELEASE OF THE COMMUNICATIONS,\n  INFORMATION OR MATERIALS. ALL USERS MUST BACKUP ALL DATA INPUTTED TO THE\n  WEBSITE.",
  ts_24: "Electronic Communications",
  ts_24_1: "Such actions as for example accessing the Website or sending emails to Motipio constitutes\n  electronic communications. Users consent to receive electronic communications and Users agree\n  that Motipio\u2019s provision all such communications shall be made electronically to satisfy any legal\n  requirement that such communications be in writing.",
  ts_25: "Additional Terms and Conditions",
  ts_25_1: "No joint venture, partnership, employment, or agency relationship exists between Users and\n  Motipio as a result of these Terms and Conditions or use of the Website.",
  ts_25_2: "Motipio's performance hereunder is subject to existing laws and legal process, and nothing\n  contained in these Terms and Conditions is in derogation of Motipio's right to comply with\n  governmental, court and law enforcement requests or requirements relating to Users use of the\n  Website or information provided to or gathered by Motipio with respect to such use.",
  ts_25_3: "If any court having competent jurisdiction holds any provision of this Terms and Conditions\n  invalid or unenforceable in any respect, such provision shall be enforced to the maximum extent\n  permitted by law, and the remaining provisions of this Terms and Conditions shall continue in full\n  force and effect.",
  ts_25_4: "The failure or delay of either party to exercise or enforce any right or claim does not constitute a\n  waiver of such right or claim and shall in no way affect that party\u2019s right to later enforce or\n  exercise it, unless such party issues an express written waiver, signed by a duly authorized\n  representative.",
  ts_25_5: "Unless otherwise specified herein, these Terms and Conditions constitutes the entire Agreement\n  between the user and Motipio with respect to the Website and Services and supersedes all prior or\n  contemporaneous communications and proposals, whether electronic, oral or written, between the\n  User and Motipio with respect to the Website. A printed version of these Terms and Conditions\n  and of any notice given in electronic form shall be admissible in judicial or administrative\n  proceedings based upon or relating to these Terms and Conditions to the same extent and subject\n  to the same conditions as other business documents and records originally generated and\n  maintained in printed form. It is the express wish to the parties that these Terms and Conditions\n  and all related documents be written in English.",
  address_title: "Contact Us",
  address_disc: "Motipio welcomes Users questions or comments regarding the Terms and Conditions:",
  address_llc: "Motipio LLC",
  address_address: "Address: 610 W Broadway Street, suit 201, Jackson, Wyoming 83001, USA",
  address_phone: "Phone: +1 (202) 915 23 43",
  address_email: "Email: support@motip.io"
};
/* harmony default export */ __webpack_exports__["default"] = (Ru);

/***/ }),

/***/ "./src/js/lang/uk.js":
/*!***************************!*\
  !*** ./src/js/lang/uk.js ***!
  \***************************/
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
  download_title: "в'ючись підписали",
  // terms_of_service
  terms_of_service__title: 'Terms of service',
  terms_of_service__comment: 'Updated: 30 September 2019',
  ts_1: "Introduction",
  ts_1_1: 'Welcome to www.motipio.com (the "Website") operated by Motipio LLC (“Motipio”). The Website provides the ability for professionals (the “Professionals”) to offer services (individually and collectively the “Services”) to those seeking such Services (“the Clients”).',
  ts_1_2: "The Website is offered to Professionals and Clients (individually and collectively the \u201CUser\u201D or \u201CUsers\u201D) conditioned on Users acceptance without modification of these Terms and Conditions. Users use of the Website constitutes Users agreement to these Terms and Conditions. Please read the Terms and Conditions carefully and keep a copy for reference.",
  ts_1_3: "Motipio shall have the right, at its sole discretion, to modify these Terms and Conditions without notice or liability but has no obligation to do so. Any modifications to the Terms and Conditions shall be effective immediately following the posting of such modifications. Users agree to review the Terms and Conditions from time to time and agree that any subsequent use by Users of the Services shall constitute Users acceptance of all such modifications.",
  ts_1_4: "THE WEBSITE IS PROVIDED ON AN \"AS IS\" AND \"AS AVAILABLE\" BASIS. USE OF THE SERVICES ARE AT USERS SOLE RISK. MOTIPIO RESERVES THE RIGHT TO RESTRICT OR TERMINATE USERS ACCESS TO THE WEBSITE AT ANY TIME AND IN ITS SOLE DISCRETION, WITHOUT PRIOR NOTICE, WHENEVER MOTIPIODEEMS THAT USERS USE IS IN ANY MANNER INAPPROPRIATE OR IN VIOLATION OF APPLICABLE LAWS AND REGULATIONS OR THESE TERMS AND CONDITIONS.",
  ts_2: "Privacy ",
  ts_2_1: "Use of the Website is subject to Motipio's Privacy Policy that governs Motipio\u2019s data collection practices.",
  ts_3: "Access to Services",
  ts_3_1: "Access to the Services is available only to those 18 years of age or older",
  ts_3_2: "Motipio makes no claims that the Services may be lawfully accessed in any specific country, state, or province. Access to the Services may not be legal by certain persons or in certain countries, states, or provinces or may require government authorization or registration.",
  ts_3_3: "When Users access the Services, they do so at their own risk and are solely responsible for compliance with the laws of Users jurisdiction, including but not limited to transferring or uploading data.",
  ts_4: "No Unlawful or Prohibited Use ",
  ts_4_1: "Users are granted a non-exclusive, non-transferable, revocable license to access and use the Website strictly in accordance with these Terms and Conditions. As a condition of use, Users warrant to Motipio that Users will not use the Services for the purposes provided and not for any purpose prohibited by these Terms and Conditions or any applicable law or regulation. ",
  ts_4_2: "Users may not obtain or attempt to obtain any materials or information through any means not intentionally made available through the Website. ",
  ts_4_3: "Users may not use the Website in any manner which could damage, disable, overburden, or impair the Website or interfere with any other party's use of the Services. Users are prohibited from violating or attempting to violate the security of the Website, by among other things, uploading any materials which contain files or programming designed to interrupt, destroy or affect the functionality of the service, contain viruses, worms, spyware, or other malware, attempt to interfere with service to any User, host or network, or make the Website available to any third party who is not subject to these Terms and Conditions.",
  ts_4_4: "Violations of system or network security or inappropriate conduct may result in civil or criminal liability. Motipio will investigate occurrences that may involve such violations and cooperate with law enforcement entities in prosecuting users who are involved in such violations.",
  ts_5: "User Accounts ",
  ts_5_1: "Users are responsible for maintaining the confidentiality of account and password information and Users agree to accept responsibility for all activities that occur under Users account or password.",
  ts_5_2: "Users may not assign or otherwise transfer their account to any other person or entity and\n\tacknowledge that Motipio is not responsible for third party access to Users account that results\n\tfrom theft or misappropriation.",
  ts_5_3: "All data uploaded is done so voluntarily at Users own discretion and risk. Users are solely\n\tresponsible for the information uploaded to the Website and warrant and represent Users have the\n\tright and authorization to upload all such information. ",
  ts_5_4: "Users warrant and represent that all information uploaded to the Website is current and accurate\n\tand will be kept up to date. ",
  ts_5_5: "Motipio may disclose or delete Customer Data if reasonably necessary to prevent injury or harm,\n\tto protect the performance of the Website, or if required by law. ",
  ts_6: "Provision of the Website",
  ts_6_1: "Each User is required to obtain and maintain a high-speed Internet connection and appropriate\n\tbrowser software.",
  ts_6_2: "Under no circumstances is Motipio providing advice or consultation. Clients are encouraged to\n\tundertake independent research and/or seek appropriate advice as relates to their use of the\n\tServices.",
  ts_6_3: "Motipio will use commercially reasonable efforts to make the Website available 24/7, except for\n\tplanned downtime for such things as support and maintenance that will be scheduled, to the\n\textent possible, during low volume hours, and shall not be liable for any unavailability caused by\n\ta force majeure event such as an act of God, act of government, flood, fire, earthquake, civil\n\tunrest, act of terror, strike or other labor problem, Internet service provider failure or delay.",
  ts_7: "The Professionals\u2019 Warranties and Representations",
  ts_7_1: "Professionals shall provide Services and meet their obligations in a timely and workmanlike\n\tmanner, using skills that meet generally acceptable industry standards, and will provide a\n\tstandard of care equal to, or superior to, care used by service providers similar to professionals on\n\tsimilar projects. ",
  ts_7_2: "Professional are free to enter into these engagements and that these engagements do not violate\n\tthe terms of any agreement between the Professional and any third party.",
  ts_7_3: "All information provided to the Client is original to or duly licensed by the Professional or is in\n\tthe public domain and that all such information does not infringe on any third party\u2019s intellectual\n\tproperty rights, including but not limited to copyrights, or rights of privacy or publicity.",
  ts_7_4: "All personal and professional information, including but not limited to skills and experience, is\n\taccurate and the Professional shall notify Motipio promptly of any material change in such\n\tpersonal and information.",
  ts_7_5: "Professionals will provide only the Services for which they are qualified, and the provision of all\n\tServices are in compliance with applicable rules, regulations, and license requirements.",
  ts_7_6: "Professionals warrant and represent that they will be solely responsible and liable for any\n\tdamages to or claim from any Client to whom Professionals provide Services.",
  ts_8: "User Warranties and Representations ",
  ts_8_1: "Users will not contact, solicit or retain other Users for the Services provided through the Website\n\toutside of the Website. ",
  ts_9: "User Generated Content",
  ts_9_1: "User Generated Content is any information or data uploaded to the Website or communications\n\tundertaken through the Website.",
  ts_9_2: "Each user acknowledges and agrees that they are solely responsible for the form, content and\n\taccuracy of any User Generated Content submitted and for their own communications and are\n\tresponsible for the consequences of all user generated content and their communications",
  ts_9_3: "Each user warrants and represents that the User Generated Content is accurate and up-to-date, and\n\tthat it does not violate relevant laws, rules or regulations.",
  ts_9_4: "The Professional warrants and represents that they will not imply or state, directly or indirectly,\n\tthat Users are affiliated with or endorsed by Motipio.",
  ts_9_5: "Each user warrants and represents that they have all rights necessary to upload User Generated\n\tContent and that no User Generated Content will violate the intellectual property rights or the\n\trights or privacy or publicity of any third party.",
  ts_9_6: "Users shall not provide any User Generated Content or engage in communications that is false,\n\tdefamatory, libelous, hateful, threatening, harassing, racially or ethnically offensive,\n\tpornographic, obscene, encourages anything that would be considered a criminal offense, gives\n\trise to civil liability, violates any law or regulation, including but not limited to laws or\n\tregulations relating to intellectual property rights, or harm or threaten the safety of others.",
  ts_9_7: "As a passive conduit for those interested in providing and seeking professional services, Motipio\n\tis under no legal obligation to, and does not, control the User Generated Content. It has no\n\tobligation to screen User Generated Content in advance and is not responsible for screening or\n\tmonitoring User Generated Content. By its very nature, other people's User Generated Content\n\tmay be offensive, harmful or inaccurate. Users acknowledge that any reliance User Generated\n\tContent will be at Users own risk. Users agree to take all necessary precautions.",
  ts_9_8: "If notified that User Generated Content may not conform to these Terms and Conditions, Motipio\n\tmay investigate the allegation and determine and its sole discretion whether to remove or request\n\tthe removal of any User Generated Content.",
  ts_9_9: "Users retain the ownership and copyright to User Generated Content and communications posted\n\tby them.",
  ts_9_10: "By submitting User Generated Content, Users grant Motipio the royalty-free, perpetual,\n\tirrevocable, sublicenseable through multiple tiers, non-exclusive right (including any moral\n\trights) and license to use, stream, reproduce, modify, adapt, publish, translate, distribute, perform,\n\tincorporate the User Generated Content in other works, and display the User Generated Content,\n\tin whole or in part, worldwide through any media or technology now known or later developed,\n\tfor the full term of any rights that may exist in such the User Generated Content and\n\tcommunications as long as Users are a registered user. ",
  ts_9_11: " Users permit any other user to access, display and view all User Generated Content submitted to\n\tthe public areas of the Services.",
  ts_9_12: "Motipio does not guarantee any confidentiality with respect to any User Generated Content.",
  ts_9_13: "Users may not use, duplicate, modify, distribute, or reproduce the User Generated Content posted\n\tby others in any manner. If Users believe that intellectual property rights have been infringed,\n\tUsers may notify Motipio according to the notification procedures set forth in our Copyright\n\tInfringement Policy.",
  ts_9_14: " Motipio is not involved in the actual transaction between Users. As a result, Motipio has no\n\tcontrol over the quality, safety, truth, accuracy or legality of User Generated Content. There are\n\trisks, including but not limited to the risk of physical harm, in dealing with strangers, underage\n\tpersons or people acting under false pretenses. Motipio expects that Users will use caution and\n\tcommon sense when using Users assume all risks associated in dealing with other users with\n\twhom Users come in contact.",
  ts_9_15: "Because user authentication on the Internet is difficult, Motipio cannot and does not confirm that\n\teach user is who they claim to be or control the behavior of users. In the event Users have a\n\tdispute with other users, Users release Motipio, its subsidiaries, affiliates, officers, directors,\n\temployees, agents, representatives and partners, from claims, demands and damages (actual and\n\tconsequential, direct and indirect) of every kind and nature, known and unknown, suspected and\n\tunsuspected, disclosed and undisclosed, arising out of or in any way connected with such disputes\n\twith third parties.",
  ts_10: "Payments",
  ts_10_1: "All payments obtained by Motipio from Clients shall be collected through the Website and\n\tdistributed to the Professionals less applicable fees.",
  ts_10_2: "Clients will select a payment package and all payments shall be made according to the payment\n\trequirements of each package.",
  ts_10_3: "Payments can be made using PayPal, Visa and MasterCard credit or debit cards payable in US\n\tdollars. By purchasing a payment plan, Users expressly agree that Motipio is authorized to charge\n\tfor Users selected payment plan through the Payment Method Users designate. Users can update\n\tthis information at anytime.",
  ts_10_4: "All credit/debit card processing will be submitted directly to Motipio\u2019s payment provider by a\n\tsecured connection. Payment details will NOT be stored by Motipio. The cardholder must retain a\n\tcopy of transaction records and Merchant policies and rules.",
  ts_10_5: "Motipio may engage third party suppliers from time to time. Users agree that Motipio may\n\tdisclose Users information to third-party suppliers for the purpose of enabling Users use of the\n\tWebsite and each Users agrees that Motipio will not be held liable for any act or omission of any\n\tthird-party supplier.",
  ts_10_6: "Motipio has the right to change payment packages and Users use of the Services after such\n\tchanges constitutes agreement to the changes.",
  ts_10_7: "If Motipio is unable to charge a Clients\u2019 account, then in its sole discretion Motipio may cancel\n\tClients\u2019 access to the Website and Services and bill Client for any outstanding payments.",
  ts_10_8: "Cancellation by Clients may take place at any time, through an applicable app platform.",
  ts_10_9: "Payments are nonrefundable. If any Service is accessed through an app platform, the refund\n\tpolicy applicable to that app platform will apply and the app platform is solely responsible for\n\tany refunds.",
  ts_11: "Intellectual Property",
  ts_11_1: "\u201CMOTIPIO\u201D, and any other Motipio trademarks and trade names, and any variations thereof, are\n\tand shall remain the trademarks and trade names and exclusive property of Motipio, and any\n\tunauthorized use of such trademarks and trade names is unlawful.",
  ts_11_2: "All content included as part of the Website, such as text, graphics, logos, images, as well as the\n\tcompilation thereof, and any software used on the Website (individually and collectively the\n\t\u201CContent\u201D), is the property of Motipio or its suppliers and protected by copyright and other laws\n\tthat protect intellectual property and proprietary rights. Users agree to observe and abide by all\n\tcopyright and other proprietary notices, legends or other restrictions contained in any such\n\tcontent and will not make any changes thereto.",
  ts_11_3: "Users will not modify, publish, transmit, reverse engineer, participate in the transfer or sale,\n\tcreate\n\tderivative works, or in any way exploit any aspect of the Website or the Content, in whole or in\n\tpart, and no Content is for resale. Users will use the Content solely for Users personal use and\n\twill make no other use of the content without the express written permission of Motipio and the\n\tcopyright owner.",
  ts_11_4: "Users do not acquire any ownership rights in any Content, and no other license, express or\n\timplied, is granted by these Terms and Conditions.",
  ts_12: "Identification of Agent to Receive Notification and Elements of Notification of Claimed\n\tCopyright Infringement",
  ts_12_1: "If Users believe that any copyrighted work is accessible on or through these Services in a way\n\tthat constitutes copyright infringement, please notify Motipio by providing our designated\n\tcopyright agent with the following information:",
  ts_12_1_1: "The physical or electronic signature of either the copyright owner or of a person\n\tauthorized to act on the owner's behalf;",
  ts_12_1_2: "A description of the copyrighted work Users claim has been infringed, and a description\n\tof the activity that Users claim to be infringing;",
  ts_12_1_3: "Identification of the URL or other specific location on this website where the material or\n\tactivity Users claim to be infringing is located or is occurring; Users must include enough\n\tinformation to allow us to locate the material or the activity;",
  ts_12_1_4: "Usersr name, address, telephone number, and e-mail address;",
  ts_12_1_5: "A statement by Users that Users have a good faith belief that use on the Website of the\n\tcopyrighted work in the manner Users are complaining of is not authorized by the copyright\n\towner, any agent of the copyright owner, or the law; and",
  ts_12_1_6: "A statement by Users, made under penalty of perjury, that the information Users have\n\tprovided in Usersr notice is accurate and that Users are either the copyright owner or are\n\tauthorized to act on behalf of the copyright owner.",
  ts_12_2: " Upon receipt of notification of a Notice of copyright infringement, Motipio may remove or\n\tdisable access to the alleged infringing material or terminate the alleged infringer's access to\n\tits\n\taccount. The alleged infringer may provide a written Counter Notification meeting the following\n\tcriteria:",
  ts_12_2_1: "Identification of the material that has been removed or to which access has been disabled\n\tand the location at which the material appeared before it was removed or access to it was\n\tdisabled;",
  ts_12_2_2: "A physical or electronic signature of either the copyright owner or of a person authorized\n\tto act on the owner's behalf;",
  ts_12_2_3: "Usersr name, address, telephone number, and e-mail address;",
  ts_12_2_4: "Consent to the jurisdiction of Federal District Court for the judicial district in which the\n\talleged infringer's address is located, or if the alleged infringer's address is outside of\n\tthe United States, for any judicial district in which the alleged infringer may be found, and that the alleged\n\tinfringer will accept service of process from the person who provided notification or an agent of\n\tsuch person; and",
  ts_12_2_5: "A statement, under penalty of perjury, that the alleged infringer has a good faith belief\n\tthat the material was removed or disabled as a result of mistake or misidentification of the\n\tmaterial to be removed or disabled.",
  ts_12_3: "Please note that the submission of a false or materially misleading Notice or Counter-Notice, and\n\tany such submission may result in liabilities, including perjury.",
  ts_12_4: "We have designated our selected lawyer (in process) as our agent to receive notices of claims of\n\tcopyright infringement on our website.",
  ts_13: "Confidentiality",
  ts_13_1: "The specific design and structure of the Website and Services constitute proprietary and\n\tconfidential information, trade secrets and/or intellectual property of Motipio. Users agree not\n\tto disclose, provide, or otherwise make available such proprietary and confidential information,\n\ttrade secrets or copyrighted material in any form to any third party, or use the proprietary and\n\tconfidential information, trade secrets or copyrighted material for their own benefit or for the\n\tbenefit of any third party.",
  ts_13_2: "The transactional data collected through the Website and Services is confidential and Motipio\n\tagrees to hold such data in strict confidence and not to disclose the transactional data to any\n\tthird\n\tparty except in the situation where the Company is required to comply with an applicable law or\n\tregulation or with a court order.",
  ts_14: "User Comments and Suggestions",
  ts_14_1: "While Motipio values user feedback, please be specific in any comments and do not submit\n\tcreative ideas, inventions, or suggestions.",
  ts_14_2: "If, despite this request, Users send creative ideas, inventions, or suggestions, all such submissions\n\tshall be the property of Motipio in whole or in part. Motipio shall own exclusively all now known\n\tor later discovered rights to the submissions and shall be entitled to unrestricted use of the\n\tsubmissions for any purpose whatsoever, commercial or otherwise, without compensation to\n\tusers or any other third party.",
  ts_14_3: "No part of the submissions shall be subject to any obligation of confidence and Motipio shall not\n\tbe liable for any use or disclosure.",
  ts_15: "Links to Third Party Websites/Third Party Services",
  ts_15_1: "The Website may contain links to other Websites (\"Linked Websites\"). The Linked Websites are\n\tnot under the control of Motipio and Motipio is not responsible for the contents of any Linked\n\tWebsite, including without limitation any link contained in a Linked Website, or any changes or\n\tupdates to a Linked Website. Motipio is providing these links to Users only as a convenience, and\n\tthe inclusion of any link does not imply endorsement by Motipio of the Website or any\n\tassociation with its operators.",
  ts_16: "Social Networking",
  ts_16_1: "Users may have the option to use Twitter, Facebook or other social networking platforms through\n\tthe Services to share links and content. Users undertake this option as their sole responsibility,\n\tincluding but not limited to complying with all of the Terms of Use of the social networking\n\tplatforms and understanding their privacy policies. Motipio has no liability or responsibility for\n\tthe privacy practices or other actions of any third-party service connected through the Website,\n\tand is not liable for any damage or loss caused or alleged to be caused by connecting with a\n\tsocial networking platform.",
  ts_17: "Feedback and Ratings Policy",
  ts_17_1: "The Website will contain the opportunity for feedback and ratings from Users.",
  ts_17_2: "Feedback results may consist of comments and ratings left by other Users and that the Website\n  may calculate a composite feedback number based on these individual ratings. The Website\n  provides its feedback and rating system as a means through which Users can express their\n  opinions publicly, and the Website does not monitor or censor these opinions or investigate any\n  remarks posted by Users for accuracy or reliability unless a User brings the posting to Motipio\u2019s\n  attention.",
  ts_17_3: "Users agree to use balanced and fair feedback and not to take any actions that undermine the\n  integrity of the feedback system, including but not limited to the following: falsifying feedback\n  for Users own self; artificially raising the level of Users own feedback or creating negative\n  feedback for another User; manipulating or coercing another User to perform a given task by\n  threatening to leave negative feedback; or withholding deliverables or funds until another User\n  agrees to leave positive feedback or no feedback.",
  ts_17_4: "Motipio is not legally responsible for any feedback by any Users or third parties, even if the\n  feedback is defamatory or otherwise legally actionable. Users may be held legally responsible for\n  damages suffered by other Users or third parties as a result of remarks posted by Users if a court\n  finds that these remarks are legally actionable or defamatory.",
  ts_17_5: "Motipio reserves the right to remove any feedback from the system at any time, including but not\n  limited to feedback that contains language that is profane, vulgar, or racist; is submitted by a\n  User\n  who is either in violation of these Terms and Conditions or any law or regulation; has conducted\n  fraudulent transactions; is not directly related to transactions; makes any reference to actions\n  taken or purported to be taken by Motipio or any third party; or has left feedback with false\n  contact information or cannot be contacted.",
  ts_18: "Indemnification",
  ts_18_1: "Users agree to indemnify, defend and hold harmless Motipio, its officers, directors, employees,\n  agents, contractors and representatives for any losses, costs, liabilities and expenses (including\n  reasonable attorney's fees) relating to or arising out of Users use of or inability to use the\n  Website\n  or Services, any user postings made by Users, Users violation of any terms of these Terms and\n  Conditions, Users violation of any rights of a third party, or Users violation of any applicable\n  laws, rules or regulations. Motipio reserves the right, at its own cost, to assume the exclusive\n  defense and control of any matter otherwise subject to indemnification by Users, in which event\n  Users will fully cooperate with Motipio in asserting any available defenses and pay all applicable\n  costs and expenses.",
  ts_19: "Release",
  ts_19_1: "  Users hereby release Motipio and its subsidiaries, affiliates, officers, directors, employees,\n  agents,\n  partners, and representatives from all actions, claims or demands and from any and all losses\n  (direct, indirect, incidental or consequential), damages, lost profits, costs or expenses,\n  including,\n  without limitation, court costs and attorney's fees which Users may have against Motipio and its\n  subsidiaries, affiliates, officers, directors, employees, agents, partners, and representatives.",
  ts_20: "Choice of Law and Resolution of Disputes",
  ts_20_1: "These Terms and Conditions affect interstate commerce and the U.S. Federal Arbitration Act\n  governs the interpretation and enforcement of these arbitration provisions. Other than the\n  requirement of exercising the jurisdiction of federal courts to resolve disputes relating to\n  intellectual property such as trademark and copyright, or small claim matters, arbitration governs\n  all disputes between Motipio and Users, whether based in contract, tort, statute, fraud,\n  misrepresentation or any other legal theory.",
  ts_20_2: "Before taking any formal action, the party seeking formal action shall contact the other party in\n  writing, detailing the dispute, and after such exchange the parties shall enter into good faith\n  negotiations before initiating a lawsuit or arbitration.",
  ts_20_3: "In the event the parties are not able to resolve any other dispute between them then such dispute,\n  other than a dispute related to intellectual property, shall be resolved only by final and\n  individual\n  binding arbitration conducted by a single neutral arbitrator and administered by the American\n  Arbitration Association, or a similar arbitration service selected by the parties, in the county\n  in\n  which the User resides, if a resident of the United States. For residents outside of the United\n  States, the arbitration shall take place in their own , with the parties submitting to personal\n  jurisdiction in such jurisdiction.",
  ts_20_4: "Either party may access the jurisdiction of a small claims court if the dispute falls within the\n  small claims court's jurisdiction to the extent such claims do not seek equitable relief.",
  ts_20_5: "The arbitrator shall have exclusive authority to resolve all disputes arising out of or relating\n  to the\n  interpretation, applicability or enforceability, or formation of these Terms and Conditions. The\n  arbitrator shall be empowered to grant whatever relief would be available in a court under law or\n  in equity. The arbitrator's award shall be final, and judgment may be entered upon it in any court\n  having appropriate jurisdiction.",
  ts_21: "Class Action Waiver",
  ts_21_1: "The resolution under these Terms and Conditions will take place on an individual basis; class\n  arbitrations or class/representative/collective court actions are not permitted. The parties\n  expressly waive their right to file a class action or seek relief on a class basis, as a plaintiff\n  or putative class.",
  ts_21_2: "You have the right to opt out and not be bound by the arbitration and class action waiver\n  provisions through a written notice sent within thirty (30) days of your first use of the\n  Services.\n  Opting out means that Motipio is no longer bound by the arbitration provisions. If changes are\n  made to the arbitration provision, Users may reject any such change through a written notice sent\n  within thirty (30) days from the date the change became effective. Rejection of any change does\n  not result in opting out of the original arbitration provisions",
  ts_22: "DISCLAIMER OF WARRANTIES",
  ts_22_1: "THE INFORMATION AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THE\n  WEBSITE MAY INCLUDE INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES\n  ARE PERIODICALLY ADDED TO THE INFORMATION HEREIN. MOTIPIO AND/OR ITS\n  SUPPLIERS AND CONTRACTORS MAY MAKE IMPROVEMENTS AND/OR CHANGES IN\n  THE WEBSITE AT ANY TIME.",
  ts_22_2: "THE WEBSITE IS OFFERED WITH THE UNDERSTANDING THAT MOTIPIO ASSUMES\n  NO RESPONSIBILITY OR LIABILITY WHATSOEVER ON THE BEHALF OF CLIENTS\n  WHO PURCHASE THE SERVICES OR WHO DIRECTLY OR INDIRECTLY ACT ON THE\n  INFORMATION OFFERED THROUGH THE WEBSITE AND HAS NO LIABILITY OR\n  RESPONSIBILITY TO CLIENTS FOR PERFORMANCE OR NONPERFORMANCE OF\n  ACTIVITIES UNDERTAKEN BY PROFESSIONALS. ANY USE OF THE WEBSITE AND\n  SERVICES IS SOLELY AT CLIENTS\u2019 OWN RISK.",
  ts_22_3: "USERS ARE SOLELY RESPONSIBLE FOR DECIDING WHETHER THE SERVICES ARE\n  SUITABLE FOR THEIR OWN PURPOSES AND WHETHER THE SERVICES MATCH\n  THEIR NEEDS. MOTIPIO OFFERS NO EXPRESS OR IMPLIED GUARANTEES OR\n  WARRANTIES REGARDING THE BENEFITS OR EFFECTIVENESS OF THE WEBSITE OR\n  SERVICES OR THAT USERS WILL FIND THE SERVICES SATISFACTORY, COMPLETE,\n  OF BENEFIT, OR SUITABLE FOR THEIR OWN CIRCUMSTANCES. MOTIPIO HAS NO\n  LIABILITY OR RESPONSIBILITY FOR CLAIMS RELATING TO ANY INACCURATE,\n  UNTIMELY OR INCOMPLETE INFORMATION.",
  ts_22_4: "M O T I P I O A N D / O R I T S S U P P L I E R S A N D C O N T R A C TO R S M A K E N O\n  REPRESENTATIONS ABOUT THE SUITABILITY, RELIABILITY, AVAILABILITY,\n  TIMELINESS, AND ACCURACY OF THE INFORMATION AND SERVICES CONTAINED\n  ON THE WEBSITE FOR ANY PURPOSE. TO THE MAXIMUM EXTENT PERMITTED BY\n  APPLICABLE LAW, ALL SUCH INFORMATION AND SERVICES ARE PROVIDED \"AS IS\"\n  WITHOUT WARRANTY OR CONDITION OF ANY KIND. MOTIPIO AND/OR ITS\n  SUPPLIERS AND CONTRACTORS HEREBY DISCLAIM ALL WARRANTIES AND\n  CONDITIONS WITH REGARD TO THIS INFORMATION AND SERVICES, INCLUDING\n  ALL IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR\n  A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT.",
  ts_23: "LIMITATION OF LIABILITIES",
  ts_23_1: " TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT\n  SHALL MOTIPIO AND/OR ITS SUPPLIERS OR CONTRACTORS BE LIABLE FOR ANY\n  DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL DAMAGES\n  OR ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES\n  FOR LOSS OF USE, DATA OR PROFITS, ARISING OUT OF OR IN ANY WAY\n  CONNECTED WITH THE USE OR PERFORMANCE OF THE WEBSITE, WITH THE\n  DELAY OR INABILITY TO USE THE WEBSITE OR RELATED SERVICES, THE\n  PROVISION OF OR FAILURE TO PROVIDE SERVICES, OR FOR ANY INFORMATION\n  AND SERVICES OBTAINED THROUGH THE WEBSITE, OR OTHERWISE ARISING OUT\n  OF THE USE OF THE WEBSITE, WHETHER BASED ON CONTRACT, TORT,\n  NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, EVEN IF MOTIPIO OR ANY OF ITS\n  SUPPLIERS OR CONTRACTORS HAVE BEEN ADVISED OF THE POSSIBILITY OF\n  DAMAGES. BECAUSE SOME STATES/JURISDICTIONS DO NOT ALLOW THE\n  EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL\n  DAMAGES, THE ABOVE LIMITATION MAY NOT APPLY TO USERS. OTHERWISE IF\n  USERS ARE DISSATISFIED WITH ANY PORTION OF THE WEBSITE, OR WITH ANY OF\n  THESE TERMS AND CONDITIONS, USERS SOLE AND EXCLUSIVE REMEDY IS TO\n  DISCONTINUE USING THE WEBSITE.",
  ts_23_2: "MOTIPIO HAS NO FIDUCIARY OBLIGATIONS AND SHALL NOT BE RESPONSIBLE OR\n  LIABLE, AND USERS AGREE NOT TO HOLD MOTIPIO RESPONSIBLE OR LIABLE FOR SUCH\n  OCCURRENCES AS THE WEBSITE NOT OPERATING ERROR-FREE OR OPERATING WITH\n  COMPUTER VIRUSES OR OTHER HARMFUL MECHANISMS, DELETION OF USERS DATA\n  AND INFORMATION, USERS INABILITY TO USE THE WEBSITE, DELAYS OR DISRUPTIONS,\n  DAMAGE TO USERS EQUIPMENT OR DATA, USERS RELIANCE ON THE COMMUNICATIONS,\n  THE LOSS, INTERCEPTION OR ALTERATION OF ANY TRANSMISSIONS OVER THE\n  INTERNET, OR THE LOSS OR INADVERTENT RELEASE OF THE COMMUNICATIONS,\n  INFORMATION OR MATERIALS. ALL USERS MUST BACKUP ALL DATA INPUTTED TO THE\n  WEBSITE.",
  ts_24: "Electronic Communications",
  ts_24_1: "Such actions as for example accessing the Website or sending emails to Motipio constitutes\n  electronic communications. Users consent to receive electronic communications and Users agree\n  that Motipio\u2019s provision all such communications shall be made electronically to satisfy any legal\n  requirement that such communications be in writing.",
  ts_25: "Additional Terms and Conditions",
  ts_25_1: "No joint venture, partnership, employment, or agency relationship exists between Users and\n  Motipio as a result of these Terms and Conditions or use of the Website.",
  ts_25_2: "Motipio's performance hereunder is subject to existing laws and legal process, and nothing\n  contained in these Terms and Conditions is in derogation of Motipio's right to comply with\n  governmental, court and law enforcement requests or requirements relating to Users use of the\n  Website or information provided to or gathered by Motipio with respect to such use.",
  ts_25_3: "If any court having competent jurisdiction holds any provision of this Terms and Conditions\n  invalid or unenforceable in any respect, such provision shall be enforced to the maximum extent\n  permitted by law, and the remaining provisions of this Terms and Conditions shall continue in full\n  force and effect.",
  ts_25_4: "The failure or delay of either party to exercise or enforce any right or claim does not constitute a\n  waiver of such right or claim and shall in no way affect that party\u2019s right to later enforce or\n  exercise it, unless such party issues an express written waiver, signed by a duly authorized\n  representative.",
  ts_25_5: "Unless otherwise specified herein, these Terms and Conditions constitutes the entire Agreement\n  between the user and Motipio with respect to the Website and Services and supersedes all prior or\n  contemporaneous communications and proposals, whether electronic, oral or written, between the\n  User and Motipio with respect to the Website. A printed version of these Terms and Conditions\n  and of any notice given in electronic form shall be admissible in judicial or administrative\n  proceedings based upon or relating to these Terms and Conditions to the same extent and subject\n  to the same conditions as other business documents and records originally generated and\n  maintained in printed form. It is the express wish to the parties that these Terms and Conditions\n  and all related documents be written in English.",
  address_title: "Contact Us",
  address_disc: "Motipio welcomes Users questions or comments regarding the Terms and Conditions:",
  address_llc: "Motipio LLC",
  address_address: "Address: 610 W Broadway Street, suit 201, Jackson, Wyoming 83001, USA",
  address_phone: "Phone: +1 (202) 915 23 43",
  address_email: "Email: support@motip.io"
};
/* harmony default export */ __webpack_exports__["default"] = (Uk);

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
  if (screen.width < 991) return;
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
    var targetId = el.hash;
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

/***/ }),

/***/ "./src/js/up_btn.js":
/*!**************************!*\
  !*** ./src/js/up_btn.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

var doc = document.querySelector('#doc');

if (doc) {
  var btn = document.querySelector('.btn_up');
  document.addEventListener('scroll', function (e) {
    var btnYCord = getTopCord(btn);

    if (pageYOffset > screen.height / 2) {
      console.log(1);
      btn.classList.add("show_btn");
    } else {
      btn.classList.remove("show_btn");
    }
  });
}

function getTopCord(elem) {
  var box = elem.getBoundingClientRect();
  return box.top + pageYOffset;
}

/***/ })

/******/ });
//# sourceMappingURL=main.js.map