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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/css/index.css?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.css */ \"./src/css/index.css\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n(function(){\r\n    let handler = {\r\n        showMenu(){\r\n            this.classList.add('hover');\r\n        },\r\n        hideMenu(){\r\n            this.classList.remove('hover');\r\n        },\r\n        popMenu(wrap, item, inx){\r\n            clearTimeout(wrap.timer);\r\n            wrap.curInx = inx;\r\n            wrap.classList.add('hover');\r\n            item.classList.add('hover');\r\n        },\r\n        pushMenu(wrap, item, inx){\r\n            wrap.timer = setTimeout(()=>wrap.classList.remove('hover'), 50);\r\n            item.classList.remove('hover');\r\n        },\r\n        sliderTimer : null, //中间轮播图定时器\r\n        sliderCurInx : 0,\r\n        startSlide(oImgs, oldInx, newInx, oNavBars){\r\n            if(newInx < 0){\r\n                newInx = this.sliderCurInx = oImgs.length - 1;\r\n            }else if(newInx >= oImgs.length){\r\n                newInx = this.sliderCurInx = 0;\r\n            }\r\n            oImgs[oldInx].classList.remove('img-hover');\r\n            oNavBars[oldInx].classList.remove('img-hover');\r\n            oImgs[newInx].classList.add('img-hover');\r\n            oNavBars[newInx].classList.add('img-hover');\r\n        },\r\n        autoSlide(oImgs, oNavBars){\r\n            clearInterval(this.sliderTimer);\r\n            this.sliderTimer = setInterval(() => {\r\n                this.startSlide(oImgs, this.sliderCurInx, ++this.sliderCurInx, oNavBars);\r\n            }, 3000);\r\n            \r\n        },\r\n        showMenu2(curInx, r2HotLine){\r\n            let leftArr=[0, 55];\r\n            for(let item of this){\r\n                item.classList.remove('hover');\r\n            }\r\n            this[curInx].classList.add('hover');\r\n            r2HotLine.style.left = leftArr[curInx] + 'px';\r\n        },\r\n        floorTimer: null, //下方两个图片的轮播图定时器\r\n        startfloorSlide(ofloorLis, originW, dir){ //dir代表方向——1：往右，-1：往左\r\n            let curLeft = 0;\r\n            for(let i = 0, len=ofloorLis.length; i < len; i++){\r\n                curLeft =$(ofloorLis[i]).position().left + originW * dir;\r\n                $(ofloorLis[i]).stop(true,true).animate({\r\n                    left: curLeft\r\n                }, 500, function(){\r\n                    handler.cb(ofloorLis[i], originW);\r\n                });\r\n            }\r\n        },\r\n        autofloorSlide(ofloorLis, originW){\r\n            clearInterval(this.floorTimer);\r\n            this.floorTimer = setInterval(this.startfloorSlide.bind(this, ofloorLis, originW, -1), 3000);\r\n        },\r\n        cb(oLi, originW){\r\n            if(parseInt(oLi.offsetLeft) <= -2 * originW){\r\n                oLi.style.left = 2 * originW + 'px';\r\n            }else if(parseInt(oLi.offsetLeft) >= 3 * originW){\r\n                oLi.style.left = -1 * originW + 'px';\r\n            }\r\n        },\r\n        isFourJoinOn: false, //四联图片滚动开关\r\n        fourJoinSlide(imgs, originW, dir){\r\n            let curLeft = 0;\r\n            if(handler.isFourJoinOn) return false;\r\n            for(let i = 0, len = imgs.length; i < len; i++){\r\n                curLeft =$(imgs[i]).position().left + originW * dir;\r\n                $(imgs[i]).stop().animate({\r\n                    left: curLeft\r\n                }, 1000, function(){\r\n                    handler.fourJoinCallback(imgs[i], originW);\r\n                });\r\n            }\r\n            handler.isFourJoinOn = true;\r\n        },\r\n        fourJoinCallback(img, originW){\r\n            if(parseInt(img.offsetLeft) <= -2 * originW){\r\n                img.style.left = originW + 'px';\r\n            }else if(parseInt(img.offsetLeft) >= 2 * originW){\r\n                img.style.left = -1 * originW + 'px';\r\n            }\r\n            handler.isFourJoinOn = false;\r\n        }\r\n    };\r\n\r\n    let init = function(){\r\n        bindEvent();\r\n    };\r\n\r\n    let bindEvent = function(){\r\n        // 顶部导航下拉菜单\r\n        let dropdown = document.querySelectorAll('.shortcut-dropdown');\r\n\r\n        for(let item of dropdown){\r\n            item.addEventListener('mouseover', handler.showMenu, false);\r\n            item.addEventListener('mouseout', handler.hideMenu, false);\r\n        }\r\n\r\n        // 左侧菜单\r\n        let sidebarItem = document.querySelectorAll('.col1-item'),\r\n            menuWrap = document.querySelector('.sidebar-pop-wrap'),\r\n            menuArr = document.querySelectorAll('.sidebar-pop');\r\n\r\n        for(let i = 0, len = sidebarItem.length; i < len; i++){\r\n            sidebarItem[i].addEventListener('mouseover', handler.popMenu.bind(this, menuWrap, menuArr[i], i), false);\r\n            sidebarItem[i].addEventListener('mouseout', handler.pushMenu.bind(this,menuWrap, menuArr[i], i), false);\r\n        }\r\n        menuWrap.addEventListener('mouseover', ()=>handler.popMenu(menuWrap, menuArr[menuWrap.curInx], menuWrap.curInx), false);\r\n        menuWrap.addEventListener('mouseout', ()=>handler.pushMenu(menuWrap, menuArr[menuWrap.curInx], menuWrap.curInx), false);\r\n\r\n        // 轮播图\r\n        let mdSlider = document.querySelector('.md-slider'),\r\n            sliderItem = document.querySelectorAll('.md-img'),\r\n            navBar = document.querySelectorAll('.nav-bar'),\r\n            preImg = document.querySelector('.nav-previous'),\r\n            nextImg = document.querySelector('.nav-next');\r\n        \r\n        handler.autoSlide(sliderItem, navBar); // 自动开始轮播\r\n        mdSlider.addEventListener('mouseover', ()=>clearInterval(handler.sliderTimer), false);\r\n        mdSlider.addEventListener('mouseout', ()=>handler.autoSlide(sliderItem, navBar), false);\r\n        preImg.addEventListener('click', ()=>handler.startSlide(sliderItem, handler.sliderCurInx, --handler.sliderCurInx, navBar), false);\r\n        nextImg.addEventListener('click', ()=>handler.startSlide(sliderItem, handler.sliderCurInx, ++handler.sliderCurInx, navBar), false);\r\n        for(let i = 0, len = navBar.length; i < len; i++){\r\n            navBar[i].addEventListener('mouseover', ()=>{\r\n                clearInterval(handler.sliderTimer);\r\n                handler.startSlide(sliderItem, handler.sliderCurInx, handler.sliderCurInx = i, navBar);\r\n            }, false);\r\n            navBar[i].addEventListener('mouseout', ()=>handler.autoSlide(sliderItem, navBar), false);\r\n        }\r\n\r\n        // 登录/注册下的促销和公告tab\r\n        let r2Tabs = document.querySelectorAll('.row2-title-tab'),\r\n            r2Panes = document.querySelectorAll('.row2-pane'),\r\n            r2HotLine = document.querySelector('.hot-line');\r\n\r\n        for(let i = 0, len = r2Tabs.length; i < len; i++){\r\n            r2Tabs[i].addEventListener('mouseover', handler.showMenu2.bind(r2Panes, i, r2HotLine), false);\r\n        }\r\n\r\n        /* 两张图片的滚动效果 */\r\n        let ofloorWrap = document.querySelector('.floor-col3-wrap'),\r\n            ofloorLis = document.querySelectorAll('.floor-col3-item'),\r\n            originW = ofloorLis[0].offsetWidth,\r\n            floorCtrls = document.querySelectorAll('.floor-col3-bar');\r\n\r\n        for(let i = 0, len=ofloorLis.length; i < len; i++){  //初始化位置\r\n            ofloorLis[i].style.left = originW * (i-1) + 'px';\r\n        }\r\n\r\n        ofloorWrap.addEventListener('mouseover', () => clearInterval(handler.floorTimer), false);\r\n        ofloorWrap.addEventListener('mouseout', () => handler.autofloorSlide(ofloorLis, originW), false);\r\n\r\n        // 上一张\r\n        floorCtrls[0].addEventListener('mouseover', ev => {\r\n            ev.stopPropagation();\r\n            clearInterval(handler.floorTimer);\r\n            floorCtrls[0].classList.add('hover');\r\n            floorCtrls[1].classList.remove('hover');\r\n            handler.startfloorSlide(ofloorLis, originW, 1);\r\n        }, false);\r\n        // 下一张\r\n        floorCtrls[1].addEventListener('mouseover', ev => {\r\n            ev.stopPropagation();\r\n            clearInterval(handler.floorTimer);\r\n            floorCtrls[0].classList.remove('hover');\r\n            floorCtrls[1].classList.add('hover');\r\n            handler.startfloorSlide(ofloorLis, originW, -1)\r\n        }, false);\r\n        \r\n        handler.autofloorSlide(ofloorLis, originW);\r\n\r\n        /*四联图片的手动轮播图*/\r\n        let fourImgs= document.querySelectorAll('.floor-col2-item-wrap'),\r\n            fourImgWidth = fourImgs[0].offsetWidth;\r\n        preImg = document.querySelector('#nav-previous2');\r\n        nextImg = document.querySelector('#nav-next2');\r\n\r\n        for(let i = 0, len = fourImgs.length; i < len; i++){  //初始化位置\r\n            fourImgs[i].style.left = fourImgWidth * (i-1) + 'px';\r\n        }\r\n\r\n        preImg.addEventListener('click', handler.fourJoinSlide.bind(null, fourImgs, fourImgWidth, 1),false);\r\n        nextImg.addEventListener('click', handler.fourJoinSlide.bind(null, fourImgs, fourImgWidth, -1),false);\r\n\r\n        /* 顶部工具栏 */\r\n        let fixedTop = document.querySelector('.header-fixed');\r\n\r\n        $(window).on('scroll', function(){\r\n            let top = $(document).scrollTop();\r\n            if(top > 160){\r\n                $(fixedTop).slideDown(100, 'linear');\r\n            }else{\r\n                $(fixedTop).slideUp(100, 'linear');\r\n            }\r\n            \r\n            \r\n        });\r\n    }\r\n\r\n    init();\r\n})();\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });