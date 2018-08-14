webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#about_info{\n    padding: 0px 50px 10px 50px;\n    left: 0;\n}\n#about_info h3 {\n    color: #242424;\n    font-family: 'AvenirNextLTW01-Medium',sans-serif;\n    font-weight: normal;\n    font-size: 11px;\n    letter-spacing: 2px;\n    margin-bottom: 10px;\n    text-transform: uppercase;\n}\n\n#about_info h1 {\n    color: #242424;\n    font-family: \"adriane\",serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 80px;\n    left: -5px;\n    line-height: 1;\n    position: relative;\n    white-space: nowrap;\n    z-index: 2;\n}\n#about_info p {\n    color: #3d3d3d;\n    font-family: \"adriane\",serif;\n    font-weight: normal;\n    letter-spacing: 1.5px;\n    line-height: 2;\n    font-size: 16px;\n    text-align: justify;\n}\n.bar{\n    right: 0;\n    background:#B69D73;\n    /* background: linear-gradient(to right, #B69D73 0%,#73B69C 100% ); */\n}\n#img_about{\n    width: 100%;\n    /* padding: 150px 0px; */\n}\n\n.media{\n    background-position: center center !important;\n    background-repeat: no-repeat !important;\n    background-size: cover !important;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    left: 0;\n}\n\n\n\n/* Extra small viewport or screen */\n/* @media only screen and (min-width : 480px) {\n    #about_info{\n        padding: 50px 60px 0px 0px;\n        \n    }\n    #about_info h1 {\n        font-size: 60px;\n    }\n} */\n/* Small viewport or screen */\n@media only screen and (max-width : 850px) {\n    /* #about_info{\n        padding: 300px 8% 70px;;\n   \n    }\n    .media{\n        height:250px;\n    } */\n    /* .col-sm-6 {\n        display: block;\n        max-width:100%;\n        flex: 0 0 0%; \n      }\n      .col-sm-5 {\n        display: block;\n        max-width:100%;\n        flex: 0 0 0%; \n      } */\n}\n\n/* Large viewport or screen */\n@media only screen and (max-width : 1200px) {\n    .media{\n        width:100%\n    }\n    #about_info{\n        padding: 50px 60px 0px 0px;\n        \n    }\n    #about_info h1 {\n        font-size: 70px;\n    }\n\n}\n/* Medium viewport or screen */\n@media only screen and (max-width : 992px) {\n    .media{\n        width:100%\n    }\n    #about_info{\n        padding: 50px 60px 0px 0px;\n        \n    }\n    #about_info h1 {\n        font-size: 60px;\n    } \n    \n}\n\n@media only screen and (max-width: 880px){\n    .media{\n        width:100%\n    }\n    #about_info{\n        padding: 50px 40px 0px 0px;\n        \n    }\n    #about_info h1 {\n        font-size: 50px;\n    } \n    } \n\n    #explore.explore-100 {\n        position: relative;\n        right: 0;\n        text-align: right;\n        width: 100%;\n        z-index: 2;\n    }   \n    #explore a {\n        color: #242424;\n        display: inline-block;\n        font-family: \"adriane\",serif;\n        font-style: normal;\n        font-weight: 400;\n        font-size: 20px;\n        text-decoration: none;\n        cursor: pointer;\n        margin-right: 10px;\n    }\n\n#explore a i {\n    bottom: 0;\n    display: block;\n    position: relative;\n}\n\n#downKey {\n    position: relative;\n    text-align: center;\n}\n#explore a:hover i{\n    margin-top: 20px;\n    cursor: pointer;\n    color: rgba(223,190,106,0.7);\n    -webkit-transform: scale(1.5);\n            transform: scale(1.5);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <div class=row>\n        <!-- <div class=\"col-sm-6\">\n            <div class=\"media\" style=\"background:url('./assets/img_LRM2.jpg')\"></div>\n            <img id=\"img_about\" src=\"../assets/img_LRM2.jpg\" alt=\"\"> \n        </div> -->\n        <div class=\"col-sm-6\">\n\n            <div class=\"birds\">\n              <div class=\"birds__hatdove\">\n                <div class=\"birds__hatdove-shadow\"></div>\n                <div class=\"birds__hatdove-head\">\n                  <div class=\"birds__hatdove-hat\"></div>\n                  <div class=\"birds__hatdove-forehead\"></div>\n                  <div class=\"birds__hatdove-eye\"></div>\n                  <div class=\"birds__hatdove-eye\"></div>\n                  <div class=\"birds__hatdove-beak\"></div>\n                </div>\n                <div class=\"birds__hatdove-backwing\"></div>\n                <div class=\"birds__circles-1\"></div>\n                <div class=\"birds__hatdove-backleg\">\n                  <div class=\"birds__curly\"></div>\n                </div>\n                <div class=\"birds__hatdove-body\"></div>\n                <div class=\"birds__hatdove-frontleg\">\n                  <div class=\"birds__curly\"></div>\n                </div>\n                <div class=\"birds__hatdove-frontwing\"></div>\n                <div class=\"birds__circles-2\"></div>\n                <div class=\"birds__hatdove-frontwing-finger\"></div>\n                <div class=\"birds__hatdove-frontwing-finger\"></div>\n                <div class=\"birds__hatdove-frontwing-finger\"></div>\n              </div>\n              <div class=\"birds__table\">\n                <div class=\"birds__table-shadow\"></div>\n              </div>\n              <div class=\"birds__laptop\"></div>\n              <div class=\"birds__laptop\">\n                <div class=\"birds__monitor\">\n                  <div class=\"birds__code\"></div>\n                </div>\n              </div>\n              <div class=\"birds__coffee\"></div>\n              <div class=\"birds__feather\"></div>\n              <div class=\"birds__feather\"></div>\n              <div class=\"birds__rundove-shadow\"></div>\n              <div class=\"birds__rundove\">\n                <div class=\"birds__rundove-backwing\">\n                  <div class=\"birds__finger\"></div>\n                  <div class=\"birds__finger\"></div>\n                  <div class=\"birds__finger\"></div>\n                  <div class=\"birds__circles\"></div>\n                </div>\n                <div class=\"birds__rundove-head\">\n                  <div class=\"birds__rundove-eye\"></div>\n                  <div class=\"birds__rundove-eye\"></div>\n                  <div class=\"birds__rundove-beak\"></div>\n                </div>\n                <div class=\"birds__rundove-backleg\">\n                  <div class=\"birds__curly\"></div>\n                </div>\n                <div class=\"birds__rundove-body\"></div>\n                <div class=\"birds__rundove-frontleg\">\n                  <div class=\"birds__curly\"></div>\n                </div>\n                <div class=\"birds__rundove-frontwing\">\n                  <div class=\"birds__finger\"></div>\n                  <div class=\"birds__finger\"></div>\n                  <div class=\"birds__finger\"></div>\n                  <div class=\"birds__circles\"></div>\n                </div>\n              </div>\n            </div>\n          \n        </div>\n        <div class=\"col-sm-6\">\n            <div id=\"about_info\">\n                <h3>Glad You Are Here</h3>\n                <p>\"Hi! I'm</p>\n                <h1>MATEENAH</h1>\n                <p> working as a front-end developer with over 4 years of experience in a wide range of disciplines, \n                    producing high quality responsive websites and exceptional user experience. I have \n                    a passion to learn the best practices when designing UX/UI for the web.\"</p>\n                <p>I'm an aspiring front end developer. (That's me on the right.) I'm currently working with HTML, CSS, Bootstrap, and a smattering of jQuery. \n                    I'll be sharing samples of some of my work here down the road as I add to my skill set, so stay tuned for updates. \n                    Feel free to contact me with any project proposals.</p>  \n                    \n            </div>   \n            <div id=\"explore\" class=\"explore-100\">\n                <a class=\"scrollMe\" (click)=\"gotoResume()\">\n                    Explore\n                    <i class=\"fa fa-long-arrow-down\" id=\"downKey\" aria-hidden=\"true\" (click)=\"gotoResume()\"></i>\n                </a>\n            </div> \n        </div>\n        <!-- <div class=\"col-sm-1\">\n                <div class=\"bar\">\n                        <span>About Mateenah</span>\n                </div>\n        </div> -->\n        \n        \n    </div>\n\n    \n    "

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent(myElement) {
        this.myElement = myElement;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.prototype.gotoResume = function () {
        window.scrollBy(0, 200);
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/resume.component.css"), __webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/about/resume.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.birds {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 500px;\n  margin: auto;\n}\n.birds__hatdove {\n  position: absolute;\n  top: 70px;\n  left: 450px;\n  width: 255px;\n  height: 400px;\n}\n.birds__hatdove-head {\n  position: absolute;\n  top: 0px;\n  left: 80px;\n  width: 80px;\n  height: 190px;\n  border-radius: 40px 40px 0 0;\n  background: var(--birds-dark);\n  background: var(--birds-dark);\n  -webkit-animation: hatdove-head 2.75s linear infinite;\n          animation: hatdove-head 2.75s linear infinite;\n}\n.birds__hatdove-head:before {\n  content: '';\n  position: absolute;\n  top: 22px;\n  left: -12px;\n  width: 42px;\n  height: 42px;\n  border-radius: 100%;\n  background: var(--birds-dark);\n  background: var(--birds-dark);\n}\n.birds__hatdove-hat {\n  position: absolute;\n  top: 10px;\n  left: 5px;\n  width: 84px;\n  height: 22px;\n  border-radius: 5px;\n  background: #1d1d1b;\n  -webkit-transform: rotate(20deg);\n          transform: rotate(20deg);\n}\n.birds__hatdove-hat:after {\n  content: '';\n  position: absolute;\n  top: -26px;\n  left: 4px;\n  width: 76px;\n  height: 36px;\n  border-radius: 34px 34px 0 0;\n  background: #1d1d1b;\n}\n.birds__hatdove-hat:before {\n  content: '';\n  position: absolute;\n  top: -44px;\n  left: 29px;\n  width: 24px;\n  height: 24px;\n  border-radius: 100%;\n  background: var(--birds-bright);\n  background: var(--birds-bright);\n}\n.birds__hatdove-forehead {\n  position: absolute;\n  top: 20px;\n  left: 4px;\n  width: 78px;\n  height: 22px;\n  border-radius: 100%;\n  background: var(--birds-dark);\n  background: var(--birds-dark);\n  -webkit-transform: rotate(20deg);\n          transform: rotate(20deg);\n}\n.birds__hatdove-eye {\n  position: absolute;\n  top: 26px;\n  left: -8px;\n  width: 34px;\n  height: 34px;\n  border-radius: 100%;\n  background: white;\n  overflow: hidden;\n  -webkit-animation: hatdove-eye 2.75s linear infinite;\n          animation: hatdove-eye 2.75s linear infinite;\n}\n.birds__hatdove-eye:after {\n  content: '';\n  position: absolute;\n  left: 11px;\n  top: 9px;\n  width: 7px;\n  height: 22px;\n  border-radius: 100%;\n  background: black;\n  -webkit-animation: hatdove-pupil 2.75s linear infinite;\n          animation: hatdove-pupil 2.75s linear infinite;\n}\n.birds__hatdove-eye:nth-child(4) {\n  left: 20px;\n}\n.birds__hatdove-beak {\n  position: absolute;\n  top: 67px;\n  left: 10px;\n  width: 22px;\n  height: 22px;\n  border-radius: 100%;\n  background: white;\n}\n.birds__hatdove-beak:after {\n  content: '';\n  position: absolute;\n  top: 17px;\n  left: -13px;\n  width: 31px;\n  height: 8px;\n  border-radius: 1px 0 14px 70px / 1px 0 14px 20px;\n  background: var(--birds-bright);\n  background: var(--birds-bright);\n}\n.birds__hatdove-beak:before {\n  content: '';\n  position: absolute;\n  top: 2px;\n  left: -28px;\n  width: 46px;\n  height: 15px;\n  border-radius: 30px 14px 0 1px / 14px 13px 0 1px;\n  background: var(--birds-bright);\n  background: var(--birds-bright);\n}\n.birds__hatdove-body {\n  position: absolute;\n  top: 174px;\n  left: 69px;\n  width: 91px;\n  height: 110px;\n  border-radius: 13px 0px 0px 40px / 70px 0px 0px 40px;\n  background: var(--birds-medium-light);\n  background: var(--birds-medium-light);\n}\n.birds__hatdove-body:after {\n  content: '';\n  position: absolute;\n  top: 0px;\n  left: 91px;\n  width: 0;\n  height: 0;\n  border-bottom: 110px solid var(--birds-medium-light);\n  border-bottom: 110px solid var(--birds-medium-light);\n  border-right: 68px solid transparent;\n  border-radius: 0 0 20px 0Array/0Array 0 40px 0;\n}\n.birds__hatdove-body:before {\n  content: '';\n  position: absolute;\n  top: 40px;\n  left: 91px;\n  width: 0;\n  height: 0;\n  border-bottom: 70px solid #1d1d1b;\n  border-right: 100px solid transparent;\n  border-radius: 0 0 12px 0Array/0Array 0 70px 0;\n}\n.birds__hatdove-shadow {\n  position: absolute;\n  top: 363px;\n  left: 55px;\n  width: 154px;\n  height: 12px;\n  border-radius: 100%;\n  background: var(--birds-shadow);\n  background: var(--birds-shadow);\n}\n.birds__hatdove-backleg {\n  position: absolute;\n  top: 283px;\n  left: 103px;\n  width: 19px;\n  border-style: solid;\n  border-color: var(--birds-medium-dark) transparent;\n  border-color: var(--birds-medium-dark) transparent;\n  border-width: 36px 12px 0;\n}\n.birds__hatdove-backleg:after {\n  content: '';\n  position: absolute;\n  top: 45px;\n  left: -15px;\n  width: 36px;\n  height: 6px;\n  border-radius: 3px;\n  background: var(--birds-bright);\n  background: var(--birds-bright);\n}\n.birds__hatdove-backleg:before {\n  content: '';\n  position: absolute;\n  top: 0px;\n  left: 2px;\n  width: 15px;\n  height: 46px;\n  background: var(--birds-bright);\n  background: var(--birds-bright);\n}\n.birds__hatdove-backleg .birds__curly {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 7px;\n  height: 5px;\n  border-radius: 0 0 7px 7px;\n  background: var(--birds-medium-dark);\n  background: var(--birds-medium-dark);\n}\n.birds__hatdove-backleg .birds__curly:after {\n  content: '';\n  position: absolute;\n  top: 0px;\n  left: 6px;\n  width: 7px;\n  height: 5px;\n  border-radius: 0 0 7px 7px;\n  background: var(--birds-medium-dark);\n  background: var(--birds-medium-dark);\n}\n.birds__hatdove-backleg .birds__curly:before {\n  content: '';\n  position: absolute;\n  top: 0px;\n  left: 12px;\n  width: 7px;\n  height: 5px;\n  border-radius: 0 0 7px 7px;\n  background: var(--birds-medium-dark);\n  background: var(--birds-medium-dark);\n}\n.birds__hatdove-frontleg {\n  position: absolute;\n  top: 283px;\n  left: 130px;\n  width: 19px;\n  border-style: solid;\n  border-color: var(--birds-medium-light) transparent;\n  border-color: var(--birds-medium-light) transparent;\n  border-width: 36px 12px 0;\n}\n.birds__hatdove-frontleg:after {\n  content: '';\n  position: absolute;\n  top: 45px;\n  left: -15px;\n  width: 36px;\n  height: 6px;\n  border-radius: 3px;\n  background: var(--birds-bright);\n  background: var(--birds-bright);\n}\n.birds__hatdove-frontleg:before {\n  content: '';\n  position: absolute;\n  top: 0px;\n  left: 2px;\n  width: 15px;\n  height: 46px;\n  background: var(--birds-bright);\n  background: var(--birds-bright);\n}\n.birds__hatdove-frontleg .birds__curly {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 7px;\n  height: 5px;\n  border-radius: 0 0 7px 7px;\n  background: var(--birds-medium-light);\n  background: var(--birds-medium-light);\n}\n.birds__hatdove-frontleg .birds__curly:after {\n  content: '';\n  position: absolute;\n  top: 0px;\n  left: 6px;\n  width: 7px;\n  height: 5px;\n  border-radius: 0 0 7px 7px;\n  background: var(--birds-medium-light);\n  background: var(--birds-medium-light);\n}\n.birds__hatdove-frontleg .birds__curly:before {\n  content: '';\n  position: absolute;\n  top: 0px;\n  left: 12px;\n  width: 7px;\n  height: 5px;\n  border-radius: 0 0 7px 7px;\n  background: var(--birds-medium-light);\n  background: var(--birds-medium-light);\n}\n.birds__hatdove-backwing {\n  position: absolute;\n  top: 186px;\n  left: 20px;\n  width: 100px;\n  height: 90px;\n  border-radius: 0 0 0 100%;\n  background: var(--birds-medium-light);\n  background: var(--birds-medium-light);\n}\n.birds__hatdove-backwing:after {\n  content: '';\n  position: absolute;\n  top: -18px;\n  left: 2px;\n  width: 24px;\n  height: 30px;\n  border-radius: 100% 100% 0 0;\n  -webkit-transform-origin: right bottom;\n          transform-origin: right bottom;\n  box-sizing: border-box;\n  border-top: 8px solid var(--birds-medium-light);\n  border-top: 8px solid var(--birds-medium-light);\n  border-right: 13px solid var(--birds-medium-light);\n  border-right: 13px solid var(--birds-medium-light);\n  -webkit-animation: hatdove-finger 0.6s infinite;\n          animation: hatdove-finger 0.6s infinite;\n  -webkit-animation-delay: -0.1s;\n          animation-delay: -0.1s;\n}\n.birds__hatdove-backwing:before {\n  content: '';\n  position: absolute;\n  top: -18px;\n  left: 16px;\n  width: 24px;\n  height: 30px;\n  border-radius: 100% 100% 0 0;\n  -webkit-transform-origin: right bottom;\n          transform-origin: right bottom;\n  box-sizing: border-box;\n  border-top: 8px solid var(--birds-medium-light);\n  border-top: 8px solid var(--birds-medium-light);\n  border-right: 13px solid var(--birds-medium-light);\n  border-right: 13px solid var(--birds-medium-light);\n  -webkit-animation: hatdove-finger 0.6s infinite;\n          animation: hatdove-finger 0.6s infinite;\n}\n.birds__hatdove-frontwing {\n  position: absolute;\n  top: 213px;\n  left: 106px;\n  width: 62px;\n  height: 58px;\n  border-radius: 100%;\n  background: var(--birds-light);\n  background: var(--birds-light);\n}\n.birds__hatdove-frontwing:after {\n  content: '';\n  position: absolute;\n  top: -5px;\n  left: -15px;\n  width: 56px;\n  height: 20px;\n  border-radius: 4px;\n  background: var(--birds-light);\n  background: var(--birds-light);\n  -webkit-transform: rotate(14deg);\n          transform: rotate(14deg);\n}\n.birds__hatdove-frontwing:before {\n  content: '';\n  position: absolute;\n  top: -73px;\n  left: 9px;\n  width: 45px;\n  height: 110px;\n  border-radius: 100%;\n  background: var(--birds-light);\n  background: var(--birds-light);\n  -webkit-transform-origin: right bottom;\n          transform-origin: right bottom;\n  -webkit-transform: rotate(-50deg);\n          transform: rotate(-50deg);\n}\n.birds__hatdove .birds__circles-2 {\n  position: absolute;\n  top: 121px;\n  left: 116px;\n  width: 58px;\n  height: 110px;\n  border-radius: 100%;\n  -webkit-transform-origin: right bottom;\n          transform-origin: right bottom;\n  -webkit-transform: rotate(-60deg);\n          transform: rotate(-60deg);\n  overflow: hidden;\n}\n.birds__hatdove .birds__circles-2:after {\n  content: '';\n  position: absolute;\n  top: -109px;\n  left: -60px;\n  width: 170px;\n  height: 170px;\n  border-radius: 100%;\n  border: 8px solid var(--birds-dark);\n  border: 8px solid var(--birds-dark);\n  box-shadow: inset 0 0 0 6px var(--birds-light), inset 0 0 0 14px var(--birds-dark);\n  box-shadow: inset 0 0 0 6px var(--birds-light), inset 0 0 0 14px var(--birds-dark);\n}\n.birds__hatdove .birds__circles-1 {\n  position: absolute;\n  top: 135px;\n  left: 66px;\n  width: 58px;\n  height: 110px;\n  border-radius: 100%;\n  -webkit-transform-origin: right bottom;\n          transform-origin: right bottom;\n  -webkit-transform: rotate(-43deg);\n          transform: rotate(-43deg);\n  overflow: hidden;\n}\n.birds__hatdove .birds__circles-1:after {\n  content: '';\n  position: absolute;\n  top: -109px;\n  left: -85px;\n  width: 170px;\n  height: 170px;\n  border-radius: 100%;\n  border: 8px solid var(--birds-dark);\n  border: 8px solid var(--birds-dark);\n  box-shadow: inset 0 0 0 6px var(--birds-medium-light), inset 0 0 0 14px var(--birds-dark);\n  box-shadow: inset 0 0 0 6px var(--birds-medium-light), inset 0 0 0 14px var(--birds-dark);\n}\n.birds__hatdove-frontwing-finger {\n  position: absolute;\n  top: 174px;\n  width: 24px;\n  height: 30px;\n  border-radius: 100% 100% 0 0;\n  -webkit-transform-origin: right bottom;\n          transform-origin: right bottom;\n  box-sizing: border-box;\n  border-top: 8px solid var(--birds-light);\n  border-top: 8px solid var(--birds-light);\n  border-right: 13px solid var(--birds-light);\n  border-right: 13px solid var(--birds-light);\n  -webkit-animation: hatdove-finger 0.6s infinite;\n          animation: hatdove-finger 0.6s infinite;\n}\n.birds__hatdove-frontwing-finger:nth-child(10) {\n  left: 44px;\n  -webkit-animation-delay: -0.2s;\n          animation-delay: -0.2s;\n}\n.birds__hatdove-frontwing-finger:nth-child(11) {\n  left: 56px;\n  -webkit-animation-delay: -0.5s;\n          animation-delay: -0.5s;\n}\n.birds__hatdove-frontwing-finger:nth-child(12) {\n  left: 68px;\n  -webkit-animation-delay: -0.4s;\n          animation-delay: -0.4s;\n}\n.birds__rundove {\n  position: absolute;\n  top: 70px;\n  left: 90px;\n  width: 255px;\n  height: 400px;\n  -webkit-animation: rundove 2.75s linear infinite;\n          animation: rundove 2.75s linear infinite;\n}\n.birds__rundove-head {\n  position: absolute;\n  top: 0px;\n  left: 99px;\n  width: 80px;\n  height: 190px;\n  border-radius: 40px 40px 0 0;\n  background: var(--birds-dark);\n  background: var(--birds-dark);\n  -webkit-transform-origin: right bottom;\n          transform-origin: right bottom;\n  -webkit-animation: rundove-head 2.75s linear infinite;\n          animation: rundove-head 2.75s linear infinite;\n}\n.birds__rundove-head:before {\n  content: '';\n  position: absolute;\n  top: 22px;\n  left: 52px;\n  width: 42px;\n  height: 42px;\n  border-radius: 100%;\n  background: var(--birds-dark);\n  background: var(--birds-dark);\n}\n.birds__rundove-eye {\n  position: absolute;\n  top: 25px;\n  left: 54px;\n  width: 37px;\n  height: 37px;\n  border-radius: 100%;\n  background: white;\n  overflow: hidden;\n  -webkit-animation: rundove-eye 2.75s linear infinite;\n          animation: rundove-eye 2.75s linear infinite;\n}\n.birds__rundove-eye:before {\n  content: '';\n  position: absolute;\n  top: 6px;\n  left: 19px;\n  width: 7px;\n  height: 22px;\n  border-radius: 100%;\n  background: black;\n}\n.birds__rundove-eye:after {\n  content: '';\n  position: absolute;\n  top: -30px;\n  left: -2px;\n  width: 50px;\n  height: 22px;\n  border-radius: 100%;\n  background: var(--birds-dark);\n  background: var(--birds-dark);\n  -webkit-animation: rundove-eyelid 2.75s linear infinite;\n          animation: rundove-eyelid 2.75s linear infinite;\n}\n.birds__rundove-eye:nth-child(2) {\n  left: 22px;\n}\n.birds__rundove-beak {\n  position: absolute;\n  top: 64px;\n  left: 51px;\n  width: 22px;\n  height: 22px;\n  border-radius: 100%;\n  background: white;\n}\n.birds__rundove-beak:after {\n  content: '';\n  position: absolute;\n  top: 17px;\n  left: 1px;\n  width: 31px;\n  height: 8px;\n  -webkit-transform-origin: left top;\n          transform-origin: left top;\n  border-radius: 0 1px 70px 14Array/0Array 1px 20px 14px;\n  background: var(--birds-bright);\n  background: var(--birds-bright);\n  -webkit-animation: rundove-beak 2.75s linear infinite;\n          animation: rundove-beak 2.75s linear infinite;\n}\n.birds__rundove-beak:before {\n  content: '';\n  position: absolute;\n  top: 2px;\n  left: 1px;\n  width: 46px;\n  height: 15px;\n  border-radius: 14px 30px 1px 0 / 13px 14px 1px 0;\n  background: var(--birds-bright);\n  background: var(--birds-bright);\n}\n.birds__rundove-body {\n  position: absolute;\n  top: 174px;\n  left: 98px;\n  width: 91px;\n  height: 110px;\n  border-radius: 0px 13px 40px 0px / 0px 70px 40px 0px;\n  background: var(--birds-medium-light);\n  background: var(--birds-medium-light);\n}\n.birds__rundove-body:after {\n  content: '';\n  position: absolute;\n  top: 0px;\n  left: -68px;\n  width: 0;\n  height: 0;\n  border-bottom: 110px solid var(--birds-medium-light);\n  border-bottom: 110px solid var(--birds-medium-light);\n  border-left: 68px solid transparent;\n  border-radius: 0 0 0 20Array/0Array 0 0 40px;\n  -webkit-transform-origin: right bottom;\n          transform-origin: right bottom;\n  -webkit-transform: rotate(10deg);\n          transform: rotate(10deg);\n  -webkit-animation: rundove-tail 2.75s linear infinite;\n          animation: rundove-tail 2.75s linear infinite;\n}\n.birds__rundove-body:before {\n  content: '';\n  position: absolute;\n  top: 40px;\n  left: -100px;\n  width: 0;\n  height: 0;\n  border-bottom: 70px solid #1d1d1b;\n  border-left: 100px solid transparent;\n  border-radius: 0 0 0 12Array/0Array 0 0 70px;\n  -webkit-transform-origin: right bottom;\n          transform-origin: right bottom;\n  -webkit-transform: rotate(10deg);\n          transform: rotate(10deg);\n  -webkit-animation: rundove-tail 2.75s linear infinite;\n          animation: rundove-tail 2.75s linear infinite;\n}\n.birds__rundove-shadow {\n  position: absolute;\n  top: 433px;\n  left: 43px;\n  width: 162px;\n  height: 12px;\n  border-radius: 100%;\n  background: var(--birds-shadow);\n  background: var(--birds-shadow);\n  -webkit-animation: rundove-shadow 2.75s linear infinite;\n          animation: rundove-shadow 2.75s linear infinite;\n}\n.birds__rundove-backleg {\n  position: absolute;\n  top: 273px;\n  left: 113px;\n  width: 19px;\n  -webkit-transform-origin: 9.5px 0;\n          transform-origin: 9.5px 0;\n  border-style: solid;\n  border-color: var(--birds-medium-dark) transparent;\n  border-color: var(--birds-medium-dark) transparent;\n  border-width: 46px 12px 0;\n  -webkit-animation: rundove-back-knee 2.75s linear infinite;\n          animation: rundove-back-knee 2.75s linear infinite;\n}\n.birds__rundove-backleg:after {\n  content: '';\n  position: absolute;\n  top: 45px;\n  left: -3px;\n  width: 36px;\n  height: 6px;\n  -webkit-transform-origin: 10.5px -46px;\n          transform-origin: 10.5px -46px;\n  border-radius: 3px;\n  background: var(--birds-bright);\n  background: var(--birds-bright);\n  -webkit-animation: rundove-back-foot 2.75s linear infinite;\n          animation: rundove-back-foot 2.75s linear infinite;\n}\n.birds__rundove-backleg:before {\n  content: '';\n  position: absolute;\n  top: -8px;\n  left: 2px;\n  width: 15px;\n  height: 57px;\n  border-radius: 7px 7px 3px 3px;\n  -webkit-transform-origin: 7.5px 8px;\n          transform-origin: 7.5px 8px;\n  background: var(--birds-bright);\n  background: var(--birds-bright);\n  -webkit-animation: rundove-back-leg 2.75s linear infinite;\n          animation: rundove-back-leg 2.75s linear infinite;\n}\n.birds__rundove-backleg .birds__curly {\n  position: absolute;\n  top: -10px;\n  left: 0px;\n  width: 7px;\n  height: 15px;\n  border-radius: 0 0 7px 7px;\n  background: var(--birds-medium-dark);\n  background: var(--birds-medium-dark);\n}\n.birds__rundove-backleg .birds__curly:after {\n  content: '';\n  position: absolute;\n  top: 0px;\n  left: 6px;\n  width: 7px;\n  height: 15px;\n  border-radius: 0 0 7px 7px;\n  background: var(--birds-medium-dark);\n  background: var(--birds-medium-dark);\n}\n.birds__rundove-backleg .birds__curly:before {\n  content: '';\n  position: absolute;\n  top: 0px;\n  left: 12px;\n  width: 7px;\n  height: 15px;\n  border-radius: 0 0 7px 7px;\n  background: var(--birds-medium-dark);\n  background: var(--birds-medium-dark);\n}\n.birds__rundove-frontleg {\n  position: absolute;\n  top: 273px;\n  left: 87px;\n  width: 19px;\n  border-style: solid;\n  border-color: var(--birds-medium-light) transparent;\n  border-color: var(--birds-medium-light) transparent;\n  -webkit-transform-origin: 9.5px 0;\n          transform-origin: 9.5px 0;\n  border-width: 46px 12px 0;\n  -webkit-animation: rundove-front-knee 2.75s linear infinite;\n          animation: rundove-front-knee 2.75s linear infinite;\n}\n.birds__rundove-frontleg:after {\n  content: '';\n  position: absolute;\n  top: 45px;\n  left: -3px;\n  width: 36px;\n  height: 6px;\n  border-radius: 3px;\n  -webkit-transform-origin: 10.5px -46px;\n          transform-origin: 10.5px -46px;\n  background: var(--birds-bright);\n  background: var(--birds-bright);\n  -webkit-animation: rundove-front-foot 2.75s linear infinite;\n          animation: rundove-front-foot 2.75s linear infinite;\n}\n.birds__rundove-frontleg:before {\n  content: '';\n  position: absolute;\n  top: -8px;\n  left: 2px;\n  width: 15px;\n  height: 57px;\n  border-radius: 7px 7px 3px 3px;\n  -webkit-transform-origin: 7.5px 8px;\n          transform-origin: 7.5px 8px;\n  background: var(--birds-bright);\n  background: var(--birds-bright);\n  -webkit-animation: rundove-front-leg 2.75s linear infinite;\n          animation: rundove-front-leg 2.75s linear infinite;\n}\n.birds__rundove-frontleg .birds__curly {\n  position: absolute;\n  top: -10px;\n  left: 0px;\n  width: 7px;\n  height: 15px;\n  border-radius: 0 0 7px 7px;\n  background: var(--birds-medium-light);\n  background: var(--birds-medium-light);\n}\n.birds__rundove-frontleg .birds__curly:after {\n  content: '';\n  position: absolute;\n  top: 0px;\n  left: 6px;\n  width: 7px;\n  height: 15px;\n  border-radius: 0 0 7px 7px;\n  background: var(--birds-medium-light);\n  background: var(--birds-medium-light);\n}\n.birds__rundove-frontleg .birds__curly:before {\n  content: '';\n  position: absolute;\n  top: 0px;\n  left: 12px;\n  width: 7px;\n  height: 15px;\n  border-radius: 0 0 7px 7px;\n  background: var(--birds-medium-light);\n  background: var(--birds-medium-light);\n}\n.birds__rundove-backwing {\n  position: absolute;\n  top: 150px;\n  left: 84px;\n  width: 85px;\n  height: 85px;\n  border-radius: 0 100% 40px 100%;\n  background: var(--birds-light);\n  background: var(--birds-light);\n  -webkit-transform-origin: 80px 80px;\n          transform-origin: 80px 80px;\n  -webkit-transform: rotate(110deg);\n          transform: rotate(110deg);\n  -webkit-animation: rundove-back-wing 2.75s linear infinite;\n          animation: rundove-back-wing 2.75s linear infinite;\n}\n.birds__rundove-backwing .birds__finger:nth-child(1) {\n  position: absolute;\n  top: -6px;\n  left: 40px;\n  width: 20px;\n  height: 50px;\n  -webkit-transform: rotate(95deg);\n          transform: rotate(95deg);\n  background: var(--birds-dark);\n  background: var(--birds-dark);\n  border-radius: 100% 0;\n  -webkit-transform-origin: 5px 5px;\n          transform-origin: 5px 5px;\n}\n.birds__rundove-backwing .birds__finger:nth-child(2) {\n  position: absolute;\n  top: 40px;\n  left: 3px;\n  width: 20px;\n  height: 50px;\n  -webkit-transform: rotate(165deg);\n          transform: rotate(165deg);\n  background: var(--birds-dark);\n  background: var(--birds-dark);\n  border-radius: 0 100%;\n  -webkit-transform-origin: 5px 5px;\n          transform-origin: 5px 5px;\n  z-index: 22;\n}\n.birds__rundove-backwing .birds__finger:nth-child(3) {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  width: 15px;\n  height: 50px;\n  -webkit-transform: rotate(135deg);\n          transform: rotate(135deg);\n  background: var(--birds-dark);\n  background: var(--birds-dark);\n  border-radius: 100%;\n  -webkit-transform-origin: 5px 5px;\n          transform-origin: 5px 5px;\n}\n.birds__rundove-backwing .birds__circles {\n  position: absolute;\n  width: 85px;\n  height: 85px;\n  border-radius: 0 100% 40px 100%;\n  overflow: hidden;\n}\n.birds__rundove-backwing .birds__circles:after {\n  content: '';\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  width: 150px;\n  height: 150px;\n  border-radius: 100%;\n  border: 8px solid var(--birds-dark);\n  border: 8px solid var(--birds-dark);\n  box-shadow: 0 0 0 7px var(--birds-light), 0 0 0 60px var(--birds-dark);\n  box-shadow: 0 0 0 7px var(--birds-light), 0 0 0 60px var(--birds-dark);\n}\n.birds__rundove-frontwing {\n  position: absolute;\n  top: 132px;\n  left: 67px;\n  width: 85px;\n  height: 85px;\n  border-radius: 0 100% 40px 100%;\n  background: var(--birds-light);\n  background: var(--birds-light);\n  -webkit-transform-origin: 80px 80px;\n          transform-origin: 80px 80px;\n  -webkit-transform: rotate(-68deg);\n          transform: rotate(-68deg);\n  -webkit-animation: rundove-front-wing 2.75s linear infinite;\n          animation: rundove-front-wing 2.75s linear infinite;\n}\n.birds__rundove-frontwing .birds__circles {\n  position: absolute;\n  width: 85px;\n  height: 85px;\n  border-radius: 0 100% 40px 100%;\n  overflow: hidden;\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n}\n.birds__rundove-frontwing .birds__circles:after {\n  content: '';\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  width: 150px;\n  height: 150px;\n  border-radius: 100%;\n  border: 8px solid var(--birds-dark);\n  border: 8px solid var(--birds-dark);\n  box-shadow: 0 0 0 7px var(--birds-light), 0 0 0 60px var(--birds-dark);\n  box-shadow: 0 0 0 7px var(--birds-light), 0 0 0 60px var(--birds-dark);\n}\n.birds__rundove-frontwing .birds__finger:nth-child(1) {\n  position: absolute;\n  top: -6px;\n  left: 40px;\n  width: 20px;\n  height: 50px;\n  -webkit-transform: rotate(85deg);\n          transform: rotate(85deg);\n  background: var(--birds-dark);\n  background: var(--birds-dark);\n  border-radius: 100% 0;\n  -webkit-transform-origin: 5px 5px;\n          transform-origin: 5px 5px;\n  -webkit-animation: rundove-front-finger-1 2.75s linear infinite;\n          animation: rundove-front-finger-1 2.75s linear infinite;\n}\n.birds__rundove-frontwing .birds__finger:nth-child(2) {\n  position: absolute;\n  top: 40px;\n  left: 3px;\n  width: 20px;\n  height: 50px;\n  -webkit-transform: rotate(185deg);\n          transform: rotate(185deg);\n  background: var(--birds-dark);\n  background: var(--birds-dark);\n  border-radius: 0 100%;\n  -webkit-transform-origin: 5px 5px;\n          transform-origin: 5px 5px;\n  -webkit-animation: rundove-front-finger-2 2.75s linear infinite;\n          animation: rundove-front-finger-2 2.75s linear infinite;\n}\n.birds__rundove-frontwing .birds__finger:nth-child(3) {\n  position: absolute;\n  top: 28px;\n  left: 28px;\n  width: 20px;\n  height: 50px;\n  -webkit-transform: rotate(140deg);\n          transform: rotate(140deg);\n  background: var(--birds-dark);\n  background: var(--birds-dark);\n  border-radius: 100%;\n  -webkit-transform-origin: 5px 5px;\n          transform-origin: 5px 5px;\n  -webkit-animation: rundove-front-finger-3 2.75s linear infinite;\n          animation: rundove-front-finger-3 2.75s linear infinite;\n}\n.birds__table-shadow {\n  position: absolute;\n  top: 161px;\n  left: 89px;\n  width: 194px;\n  height: 12px;\n  border-radius: 100%;\n  background: var(--birds-shadow);\n  background: var(--birds-shadow);\n}\n.birds__table {\n  position: absolute;\n  top: 272px;\n  left: 217px;\n  width: 374px;\n  height: 10px;\n  border-radius: 5px;\n  background: #1d1d1b;\n}\n.birds__table:before {\n  content: '';\n  position: absolute;\n  top: 10px;\n  left: 176px;\n  width: 16px;\n  height: 140px;\n  background: var(--birds-bright);\n  background: var(--birds-bright);\n}\n.birds__table:after {\n  content: '';\n  position: absolute;\n  top: 137px;\n  left: 123px;\n  width: 14px;\n  border-style: solid;\n  border-color: var(--birds-bright) transparent;\n  border-color: var(--birds-bright) transparent;\n  border-width: 0 54px 30px;\n}\n.birds__laptop:nth-child(3) {\n  position: absolute;\n  top: 265px;\n  left: 476px;\n  height: 7px;\n  width: 80px;\n  border-radius: 4px;\n  background: #f7f7f7;\n}\n.birds__laptop:nth-child(3):before {\n  content: '';\n  position: absolute;\n  bottom: 0;\n  left: -136px;\n  height: 85px;\n  width: 124px;\n  background: #c6c6c6;\n  border-radius: 8px;\n  box-shadow: 7px 0 0 #e5e5e5;\n  -webkit-transform: skew(20deg);\n  transform: skew(20deg);\n}\n.birds__laptop:nth-child(4) {\n  position: absolute;\n  top: 265px;\n  left: 256px;\n  height: 7px;\n  width: 186px;\n  border-radius: 4px;\n  background: #f7f7f7;\n}\n.birds__laptop:nth-child(4):before {\n  content: '';\n  position: absolute;\n  bottom: 7px;\n  left: 80px;\n  height: 82px;\n  width: 116px;\n  background: #4c4c4c;\n  border-radius: 8px;\n  box-shadow: 5px 0 0 #e5e5e5;\n  -webkit-transform: skew(-20deg);\n          transform: skew(-20deg);\n}\n.birds__monitor {\n  position: absolute;\n  top: -76px;\n  left: 88px;\n  height: 70px;\n  width: 100px;\n  background: #1d1d1b;\n  -webkit-transform: skew(-20deg);\n          transform: skew(-20deg);\n}\n.birds__monitor:before {\n  content: '';\n  position: absolute;\n  top: 16px;\n  left: 10px;\n  height: 4px;\n  width: 54px;\n  background: white;\n  border-radius: 8px;\n}\n.birds__monitor:after {\n  content: '';\n  position: absolute;\n  top: 24px;\n  left: 10px;\n  height: 4px;\n  width: 26px;\n  background: white;\n  border-radius: 8px;\n}\n.birds__code {\n  position: absolute;\n  top: 32px;\n  left: 10px;\n  height: 4px;\n  width: 38px;\n  border-radius: 8px;\n  background: white;\n  -webkit-transform: skew(-20deg);\n          transform: skew(-20deg);\n}\n.birds__code:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 42px;\n  height: 4px;\n  width: 11px;\n  background: white;\n  border-radius: 8px;\n}\n.birds__code:after {\n  content: '';\n  position: absolute;\n  top: 9px;\n  left: 2px;\n  height: 4px;\n  width: 30px;\n  background: white;\n  border-radius: 8px;\n}\n.birds__coffee {\n  position: absolute;\n  top: 229px;\n  left: 335px;\n  height: 43px;\n  width: 35px;\n  background: #ededed;\n  -webkit-animation: birds-coffee 2.75s linear infinite;\n          animation: birds-coffee 2.75s linear infinite;\n  transition: 0.2s ease;\n}\n.birds__coffee:before {\n  content: '';\n  position: absolute;\n  top: -6px;\n  left: -3px;\n  height: 6px;\n  width: 40px;\n  background: #e2e2e2;\n}\n.birds__coffee:after {\n  content: '';\n  position: absolute;\n  top: -12px;\n  left: 2px;\n  height: 6px;\n  width: 31px;\n  background: #e2e2e2;\n}\n.birds__feather:nth-child(6) {\n  position: absolute;\n  top: 296px;\n  left: 234px;\n  width: 15px;\n  height: 60px;\n  border-radius: 100%;\n  background: var(--birds-medium-light);\n  background: var(--birds-medium-light);\n  -webkit-transform: rotate(60deg);\n          transform: rotate(60deg);\n  overflow: hidden;\n  -webkit-animation: birds-feather-1 2.75s linear infinite;\n          animation: birds-feather-1 2.75s linear infinite;\n  transition: 0.2s ease;\n}\n.birds__feather:nth-child(6):before {\n  content: '';\n  position: absolute;\n  top: 30px;\n  left: -15px;\n  width: 30px;\n  height: 30px;\n  border-radius: 100%;\n  border: 6px solid var(--birds-dark);\n  border: 6px solid var(--birds-dark);\n  box-shadow: inset 0 0 0 4px var(--birds-medium-light);\n  box-shadow: inset 0 0 0 4px var(--birds-medium-light);\n  background: var(--birds-dark);\n  background: var(--birds-dark);\n}\n.birds__feather:nth-child(7) {\n  position: absolute;\n  top: 296px;\n  left: 234px;\n  width: 15px;\n  height: 60px;\n  border-radius: 100%;\n  background: var(--birds-medium-light);\n  background: var(--birds-medium-light);\n  -webkit-transform: rotate(60deg);\n          transform: rotate(60deg);\n  overflow: hidden;\n  -webkit-animation: birds-feather-2 2.75s linear infinite;\n          animation: birds-feather-2 2.75s linear infinite;\n  transition: 0.2s ease;\n}\n.birds__feather:nth-child(7):before {\n  content: '';\n  position: absolute;\n  top: 30px;\n  left: -15px;\n  width: 30px;\n  height: 30px;\n  border-radius: 100%;\n  border: 6px solid var(--birds-dark);\n  border: 6px solid var(--birds-dark);\n  box-shadow: inset 0 0 0 4px var(--birds-medium-light);\n  box-shadow: inset 0 0 0 4px var(--birds-medium-light);\n  background: var(--birds-dark);\n  background: var(--birds-dark);\n}\n/* Анимации */\n@-webkit-keyframes birds-feather-1 {\n  0% {\n    -webkit-transform: rotate(90deg) translate(-3px, -21px);\n            transform: rotate(90deg) translate(-3px, -21px);\n  }\n  2.94% {\n    -webkit-transform: rotate(100deg) translate(-8px, -23px);\n            transform: rotate(100deg) translate(-8px, -23px);\n  }\n  13.23% {\n    -webkit-transform: rotate(124deg) translate(-39px, 37px);\n            transform: rotate(124deg) translate(-39px, 37px);\n  }\n  16.17% {\n    -webkit-transform: rotate(130deg) translate(-48px, 41px);\n            transform: rotate(130deg) translate(-48px, 41px);\n    opacity: 1;\n  }\n  17% {\n    opacity: 0;\n  }\n  69% {\n    opacity: 0;\n  }\n  69.09% {\n    -webkit-transform: rotate(120deg) translate(8px, -41px);\n            transform: rotate(120deg) translate(8px, -41px);\n    opacity: 1;\n  }\n  72.03% {\n    -webkit-transform: rotate(90deg) translate(1px, -47px);\n            transform: rotate(90deg) translate(1px, -47px);\n  }\n  80.85% {\n    -webkit-transform: rotate(66deg) translate(-41px, -44px);\n            transform: rotate(66deg) translate(-41px, -44px);\n  }\n  100% {\n    -webkit-transform: rotate(90deg) translate(-3px, 21px);\n            transform: rotate(90deg) translate(-3px, 21px);\n  }\n}\n@keyframes birds-feather-1 {\n  0% {\n    -webkit-transform: rotate(90deg) translate(-3px, -21px);\n            transform: rotate(90deg) translate(-3px, -21px);\n  }\n  2.94% {\n    -webkit-transform: rotate(100deg) translate(-8px, -23px);\n            transform: rotate(100deg) translate(-8px, -23px);\n  }\n  13.23% {\n    -webkit-transform: rotate(124deg) translate(-39px, 37px);\n            transform: rotate(124deg) translate(-39px, 37px);\n  }\n  16.17% {\n    -webkit-transform: rotate(130deg) translate(-48px, 41px);\n            transform: rotate(130deg) translate(-48px, 41px);\n    opacity: 1;\n  }\n  17% {\n    opacity: 0;\n  }\n  69% {\n    opacity: 0;\n  }\n  69.09% {\n    -webkit-transform: rotate(120deg) translate(8px, -41px);\n            transform: rotate(120deg) translate(8px, -41px);\n    opacity: 1;\n  }\n  72.03% {\n    -webkit-transform: rotate(90deg) translate(1px, -47px);\n            transform: rotate(90deg) translate(1px, -47px);\n  }\n  80.85% {\n    -webkit-transform: rotate(66deg) translate(-41px, -44px);\n            transform: rotate(66deg) translate(-41px, -44px);\n  }\n  100% {\n    -webkit-transform: rotate(90deg) translate(-3px, 21px);\n            transform: rotate(90deg) translate(-3px, 21px);\n  }\n}\n@-webkit-keyframes birds-feather-2 {\n  0% {\n    -webkit-transform: rotate(-64deg) translate(53px, 39px);\n            transform: rotate(-64deg) translate(53px, 39px);\n  }\n  2.94% {\n    -webkit-transform: rotate(-68deg) translate(54px, 38px);\n            transform: rotate(-68deg) translate(54px, 38px);\n  }\n  13.23% {\n    -webkit-transform: rotate(-100deg) translate(48px, 20px);\n            transform: rotate(-100deg) translate(48px, 20px);\n    opacity: 1;\n  }\n  14% {\n    opacity: 0;\n  }\n  69% {\n    opacity: 0;\n  }\n  69.09% {\n    -webkit-transform: rotate(-114deg) translate(-16px, 123px);\n            transform: rotate(-114deg) translate(-16px, 123px);\n    opacity: 1;\n  }\n  72.03% {\n    -webkit-transform: rotate(-120deg) translate(-9px, 111px);\n            transform: rotate(-120deg) translate(-9px, 111px);\n  }\n  80.85% {\n    -webkit-transform: rotate(-100deg) translate(11px, 81px);\n            transform: rotate(-100deg) translate(11px, 81px);\n  }\n  100% {\n    -webkit-transform: rotate(-64deg) translate(53px, 39px);\n            transform: rotate(-64deg) translate(53px, 39px);\n  }\n}\n@keyframes birds-feather-2 {\n  0% {\n    -webkit-transform: rotate(-64deg) translate(53px, 39px);\n            transform: rotate(-64deg) translate(53px, 39px);\n  }\n  2.94% {\n    -webkit-transform: rotate(-68deg) translate(54px, 38px);\n            transform: rotate(-68deg) translate(54px, 38px);\n  }\n  13.23% {\n    -webkit-transform: rotate(-100deg) translate(48px, 20px);\n            transform: rotate(-100deg) translate(48px, 20px);\n    opacity: 1;\n  }\n  14% {\n    opacity: 0;\n  }\n  69% {\n    opacity: 0;\n  }\n  69.09% {\n    -webkit-transform: rotate(-114deg) translate(-16px, 123px);\n            transform: rotate(-114deg) translate(-16px, 123px);\n    opacity: 1;\n  }\n  72.03% {\n    -webkit-transform: rotate(-120deg) translate(-9px, 111px);\n            transform: rotate(-120deg) translate(-9px, 111px);\n  }\n  80.85% {\n    -webkit-transform: rotate(-100deg) translate(11px, 81px);\n            transform: rotate(-100deg) translate(11px, 81px);\n  }\n  100% {\n    -webkit-transform: rotate(-64deg) translate(53px, 39px);\n            transform: rotate(-64deg) translate(53px, 39px);\n  }\n}\n@-webkit-keyframes hatdove-head {\n  14.7% {\n    -webkit-transform: translate(0px, 0px);\n            transform: translate(0px, 0px);\n  }\n  17.64% {\n    -webkit-transform: translate(0px, 16px);\n            transform: translate(0px, 16px);\n  }\n  22.05% {\n    -webkit-transform: translate(0px, -5px);\n            transform: translate(0px, -5px);\n  }\n  27.93% {\n    -webkit-transform: translate(0px, 0px);\n            transform: translate(0px, 0px);\n  }\n}\n@keyframes hatdove-head {\n  14.7% {\n    -webkit-transform: translate(0px, 0px);\n            transform: translate(0px, 0px);\n  }\n  17.64% {\n    -webkit-transform: translate(0px, 16px);\n            transform: translate(0px, 16px);\n  }\n  22.05% {\n    -webkit-transform: translate(0px, -5px);\n            transform: translate(0px, -5px);\n  }\n  27.93% {\n    -webkit-transform: translate(0px, 0px);\n            transform: translate(0px, 0px);\n  }\n}\n@-webkit-keyframes hatdove-eye {\n  17.6% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n  }\n  17.64% {\n    -webkit-transform: scaleY(0);\n            transform: scaleY(0);\n  }\n  19.11% {\n    -webkit-transform: scaleY(0);\n            transform: scaleY(0);\n  }\n  22.05% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n  }\n}\n@keyframes hatdove-eye {\n  17.6% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n  }\n  17.64% {\n    -webkit-transform: scaleY(0);\n            transform: scaleY(0);\n  }\n  19.11% {\n    -webkit-transform: scaleY(0);\n            transform: scaleY(0);\n  }\n  22.05% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n  }\n}\n@-webkit-keyframes hatdove-pupil {\n  17.64% {\n    -webkit-transform: translate(0px, 0px);\n            transform: translate(0px, 0px);\n  }\n  19.11% {\n    -webkit-transform: translate(-5px, -3px);\n            transform: translate(-5px, -3px);\n  }\n  52.92% {\n    -webkit-transform: translate(-5px, -3px);\n            transform: translate(-5px, -3px);\n  }\n  54.39% {\n    -webkit-transform: translate(0px, 0px);\n            transform: translate(0px, 0px);\n  }\n}\n@keyframes hatdove-pupil {\n  17.64% {\n    -webkit-transform: translate(0px, 0px);\n            transform: translate(0px, 0px);\n  }\n  19.11% {\n    -webkit-transform: translate(-5px, -3px);\n            transform: translate(-5px, -3px);\n  }\n  52.92% {\n    -webkit-transform: translate(-5px, -3px);\n            transform: translate(-5px, -3px);\n  }\n  54.39% {\n    -webkit-transform: translate(0px, 0px);\n            transform: translate(0px, 0px);\n  }\n}\n@-webkit-keyframes hatdove-finger {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    -webkit-transform: scale(0.6);\n            transform: scale(0.6);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@keyframes hatdove-finger {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    -webkit-transform: scale(0.6);\n            transform: scale(0.6);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@-webkit-keyframes rundove {\n  0% {\n    -webkit-transform: rotate(0deg) translate(-290px, -40px);\n            transform: rotate(0deg) translate(-290px, -40px);\n  }\n  5.88% {\n    -webkit-transform: rotate(-10deg) translate(-290px, -40px);\n            transform: rotate(-10deg) translate(-290px, -40px);\n  }\n  17.64% {\n    -webkit-transform: rotate(-10deg) translate(-40px, -10px);\n            transform: rotate(-10deg) translate(-40px, -10px);\n  }\n  23.52% {\n    -webkit-transform: rotate(0deg) translate(-1px, -1px);\n            transform: rotate(0deg) translate(-1px, -1px);\n  }\n  52.92% {\n    -webkit-transform: rotate(0deg) translate(-1px, -1px);\n            transform: rotate(0deg) translate(-1px, -1px);\n  }\n  67.62% {\n    -webkit-transform: rotate(18deg) translate(-16px, 27px);\n            transform: rotate(18deg) translate(-16px, 27px);\n  }\n  72.03% {\n    -webkit-transform: rotate(17deg) translate(214px, -50px);\n            transform: rotate(17deg) translate(214px, -50px);\n  }\n  76.44% {\n    -webkit-transform: rotate(8deg) translate(429px, -53px);\n            transform: rotate(8deg) translate(429px, -53px);\n  }\n  86.79% {\n    -webkit-transform: rotate(19deg) translate(710px, -250px);\n            transform: rotate(19deg) translate(710px, -250px);\n  }\n  100% {\n    -webkit-transform: rotate(0) translate(710px, -220px);\n            transform: rotate(0) translate(710px, -220px);\n  }\n}\n@keyframes rundove {\n  0% {\n    -webkit-transform: rotate(0deg) translate(-290px, -40px);\n            transform: rotate(0deg) translate(-290px, -40px);\n  }\n  5.88% {\n    -webkit-transform: rotate(-10deg) translate(-290px, -40px);\n            transform: rotate(-10deg) translate(-290px, -40px);\n  }\n  17.64% {\n    -webkit-transform: rotate(-10deg) translate(-40px, -10px);\n            transform: rotate(-10deg) translate(-40px, -10px);\n  }\n  23.52% {\n    -webkit-transform: rotate(0deg) translate(-1px, -1px);\n            transform: rotate(0deg) translate(-1px, -1px);\n  }\n  52.92% {\n    -webkit-transform: rotate(0deg) translate(-1px, -1px);\n            transform: rotate(0deg) translate(-1px, -1px);\n  }\n  67.62% {\n    -webkit-transform: rotate(18deg) translate(-16px, 27px);\n            transform: rotate(18deg) translate(-16px, 27px);\n  }\n  72.03% {\n    -webkit-transform: rotate(17deg) translate(214px, -50px);\n            transform: rotate(17deg) translate(214px, -50px);\n  }\n  76.44% {\n    -webkit-transform: rotate(8deg) translate(429px, -53px);\n            transform: rotate(8deg) translate(429px, -53px);\n  }\n  86.79% {\n    -webkit-transform: rotate(19deg) translate(710px, -250px);\n            transform: rotate(19deg) translate(710px, -250px);\n  }\n  100% {\n    -webkit-transform: rotate(0) translate(710px, -220px);\n            transform: rotate(0) translate(710px, -220px);\n  }\n}\n@-webkit-keyframes rundove-tail {\n  5.88% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  17.64% {\n    -webkit-transform: rotate(3deg);\n            transform: rotate(3deg);\n  }\n  23.52% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  52.92% {\n    -webkit-transform: rotate(1deg);\n            transform: rotate(1deg);\n  }\n  67.62% {\n    -webkit-transform: rotate(2deg);\n            transform: rotate(2deg);\n  }\n  72.03% {\n    -webkit-transform: rotate(3deg);\n            transform: rotate(3deg);\n  }\n  76.44% {\n    -webkit-transform: rotate(13deg);\n            transform: rotate(13deg);\n  }\n  86.73% {\n    -webkit-transform: rotate(13deg);\n            transform: rotate(13deg);\n  }\n}\n@keyframes rundove-tail {\n  5.88% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  17.64% {\n    -webkit-transform: rotate(3deg);\n            transform: rotate(3deg);\n  }\n  23.52% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  52.92% {\n    -webkit-transform: rotate(1deg);\n            transform: rotate(1deg);\n  }\n  67.62% {\n    -webkit-transform: rotate(2deg);\n            transform: rotate(2deg);\n  }\n  72.03% {\n    -webkit-transform: rotate(3deg);\n            transform: rotate(3deg);\n  }\n  76.44% {\n    -webkit-transform: rotate(13deg);\n            transform: rotate(13deg);\n  }\n  86.73% {\n    -webkit-transform: rotate(13deg);\n            transform: rotate(13deg);\n  }\n}\n@-webkit-keyframes rundove-head {\n  5.88% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  17.64% {\n    -webkit-transform: rotate(-9deg);\n            transform: rotate(-9deg);\n  }\n  23.52% {\n    -webkit-transform: rotate(9deg);\n            transform: rotate(9deg);\n  }\n  28.12% {\n    -webkit-transform: rotate(-9deg);\n            transform: rotate(-9deg);\n  }\n  34.04% {\n    -webkit-transform: rotate(9deg);\n            transform: rotate(9deg);\n  }\n  52.92% {\n    -webkit-transform: rotate(-4deg);\n            transform: rotate(-4deg);\n  }\n  67.62% {\n    -webkit-transform: rotate(-11deg);\n            transform: rotate(-11deg);\n  }\n  72.03% {\n    -webkit-transform: rotate(-16deg);\n            transform: rotate(-16deg);\n  }\n  76.44% {\n    -webkit-transform: rotate(-13deg);\n            transform: rotate(-13deg);\n  }\n  86.73% {\n    -webkit-transform: rotate(-8deg);\n            transform: rotate(-8deg);\n  }\n}\n@keyframes rundove-head {\n  5.88% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  17.64% {\n    -webkit-transform: rotate(-9deg);\n            transform: rotate(-9deg);\n  }\n  23.52% {\n    -webkit-transform: rotate(9deg);\n            transform: rotate(9deg);\n  }\n  28.12% {\n    -webkit-transform: rotate(-9deg);\n            transform: rotate(-9deg);\n  }\n  34.04% {\n    -webkit-transform: rotate(9deg);\n            transform: rotate(9deg);\n  }\n  52.92% {\n    -webkit-transform: rotate(-4deg);\n            transform: rotate(-4deg);\n  }\n  67.62% {\n    -webkit-transform: rotate(-11deg);\n            transform: rotate(-11deg);\n  }\n  72.03% {\n    -webkit-transform: rotate(-16deg);\n            transform: rotate(-16deg);\n  }\n  76.44% {\n    -webkit-transform: rotate(-13deg);\n            transform: rotate(-13deg);\n  }\n  86.73% {\n    -webkit-transform: rotate(-8deg);\n            transform: rotate(-8deg);\n  }\n}\n@-webkit-keyframes rundove-eye {\n  54.39% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n  }\n  56.24% {\n    -webkit-transform: scaleY(0);\n            transform: scaleY(0);\n  }\n  57.72% {\n    -webkit-transform: scaleY(0);\n            transform: scaleY(0);\n  }\n  60.27% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n  }\n}\n@keyframes rundove-eye {\n  54.39% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n  }\n  56.24% {\n    -webkit-transform: scaleY(0);\n            transform: scaleY(0);\n  }\n  57.72% {\n    -webkit-transform: scaleY(0);\n            transform: scaleY(0);\n  }\n  60.27% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n  }\n}\n@-webkit-keyframes rundove-eyelid {\n  57.72% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n  60.27% {\n    -webkit-transform: translateY(19px);\n            transform: translateY(19px);\n  }\n  100% {\n    -webkit-transform: translateY(19px);\n            transform: translateY(19px);\n  }\n}\n@keyframes rundove-eyelid {\n  57.72% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n  60.27% {\n    -webkit-transform: translateY(19px);\n            transform: translateY(19px);\n  }\n  100% {\n    -webkit-transform: translateY(19px);\n            transform: translateY(19px);\n  }\n}\n@-webkit-keyframes rundove-front-knee {\n  53.28% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  57.72% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  68.08% {\n    -webkit-transform: rotate(-5deg);\n            transform: rotate(-5deg);\n  }\n  72.52% {\n    -webkit-transform: rotate(-59deg);\n            transform: rotate(-59deg);\n  }\n  79.92% {\n    -webkit-transform: rotate(9deg);\n            transform: rotate(9deg);\n  }\n  100% {\n    -webkit-transform: rotate(-59deg);\n            transform: rotate(-59deg);\n  }\n}\n@keyframes rundove-front-knee {\n  53.28% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  57.72% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  68.08% {\n    -webkit-transform: rotate(-5deg);\n            transform: rotate(-5deg);\n  }\n  72.52% {\n    -webkit-transform: rotate(-59deg);\n            transform: rotate(-59deg);\n  }\n  79.92% {\n    -webkit-transform: rotate(9deg);\n            transform: rotate(9deg);\n  }\n  100% {\n    -webkit-transform: rotate(-59deg);\n            transform: rotate(-59deg);\n  }\n}\n@-webkit-keyframes rundove-front-leg {\n  53.28% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  68.08% {\n    -webkit-transform: rotate(113deg);\n            transform: rotate(113deg);\n  }\n  72.52% {\n    -webkit-transform: rotate(-3deg);\n            transform: rotate(-3deg);\n  }\n  79.92% {\n    -webkit-transform: rotate(55deg);\n            transform: rotate(55deg);\n  }\n  100% {\n    -webkit-transform: rotate(-3deg);\n            transform: rotate(-3deg);\n  }\n}\n@keyframes rundove-front-leg {\n  53.28% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  68.08% {\n    -webkit-transform: rotate(113deg);\n            transform: rotate(113deg);\n  }\n  72.52% {\n    -webkit-transform: rotate(-3deg);\n            transform: rotate(-3deg);\n  }\n  79.92% {\n    -webkit-transform: rotate(55deg);\n            transform: rotate(55deg);\n  }\n  100% {\n    -webkit-transform: rotate(-3deg);\n            transform: rotate(-3deg);\n  }\n}\n@-webkit-keyframes rundove-front-foot {\n  17.64% {\n    -webkit-transform: rotate(-10deg);\n            transform: rotate(-10deg);\n  }\n  23.52% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  53.28% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  67.62% {\n    -webkit-transform: rotate(113deg);\n            transform: rotate(113deg);\n  }\n  72.03% {\n    -webkit-transform: rotate(-3deg);\n            transform: rotate(-3deg);\n  }\n  79.92% {\n    -webkit-transform: rotate(55deg);\n            transform: rotate(55deg);\n  }\n  100% {\n    -webkit-transform: rotate(-3deg);\n            transform: rotate(-3deg);\n  }\n}\n@keyframes rundove-front-foot {\n  17.64% {\n    -webkit-transform: rotate(-10deg);\n            transform: rotate(-10deg);\n  }\n  23.52% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  53.28% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  67.62% {\n    -webkit-transform: rotate(113deg);\n            transform: rotate(113deg);\n  }\n  72.03% {\n    -webkit-transform: rotate(-3deg);\n            transform: rotate(-3deg);\n  }\n  79.92% {\n    -webkit-transform: rotate(55deg);\n            transform: rotate(55deg);\n  }\n  100% {\n    -webkit-transform: rotate(-3deg);\n            transform: rotate(-3deg);\n  }\n}\n@-webkit-keyframes rundove-back-knee {\n  53.28% {\n    -webkit-transform: rotate(0deg) translate(0, 0);\n            transform: rotate(0deg) translate(0, 0);\n  }\n  62.16% {\n    -webkit-transform: rotate(-60deg) translate(0, 0);\n            transform: rotate(-60deg) translate(0, 0);\n  }\n  68.08% {\n    -webkit-transform: rotate(-60deg) translate(0, 0);\n            transform: rotate(-60deg) translate(0, 0);\n  }\n  72.52% {\n    -webkit-transform: rotate(60deg) translate(10px, -20px);\n            transform: rotate(60deg) translate(10px, -20px);\n  }\n  82.88% {\n    -webkit-transform: rotate(-50deg) translate(0, 0);\n            transform: rotate(-50deg) translate(0, 0);\n  }\n  100% {\n    -webkit-transform: rotate(60deg) translate(10px, -20px);\n            transform: rotate(60deg) translate(10px, -20px);\n  }\n}\n@keyframes rundove-back-knee {\n  53.28% {\n    -webkit-transform: rotate(0deg) translate(0, 0);\n            transform: rotate(0deg) translate(0, 0);\n  }\n  62.16% {\n    -webkit-transform: rotate(-60deg) translate(0, 0);\n            transform: rotate(-60deg) translate(0, 0);\n  }\n  68.08% {\n    -webkit-transform: rotate(-60deg) translate(0, 0);\n            transform: rotate(-60deg) translate(0, 0);\n  }\n  72.52% {\n    -webkit-transform: rotate(60deg) translate(10px, -20px);\n            transform: rotate(60deg) translate(10px, -20px);\n  }\n  82.88% {\n    -webkit-transform: rotate(-50deg) translate(0, 0);\n            transform: rotate(-50deg) translate(0, 0);\n  }\n  100% {\n    -webkit-transform: rotate(60deg) translate(10px, -20px);\n            transform: rotate(60deg) translate(10px, -20px);\n  }\n}\n@-webkit-keyframes rundove-back-leg {\n  53.28% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  62.16% {\n    -webkit-transform: rotate(65deg);\n            transform: rotate(65deg);\n  }\n  68.08% {\n    -webkit-transform: rotate(65deg);\n            transform: rotate(65deg);\n  }\n  72.52% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  82.88% {\n    -webkit-transform: rotate(70deg);\n            transform: rotate(70deg);\n  }\n  100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes rundove-back-leg {\n  53.28% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  62.16% {\n    -webkit-transform: rotate(65deg);\n            transform: rotate(65deg);\n  }\n  68.08% {\n    -webkit-transform: rotate(65deg);\n            transform: rotate(65deg);\n  }\n  72.52% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  82.88% {\n    -webkit-transform: rotate(70deg);\n            transform: rotate(70deg);\n  }\n  100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes rundove-back-foot {\n  17.76% {\n    -webkit-transform: rotate(-10deg) translate(0, 0);\n            transform: rotate(-10deg) translate(0, 0);\n  }\n  23.52% {\n    -webkit-transform: rotate(0deg) translate(0, 0);\n            transform: rotate(0deg) translate(0, 0);\n  }\n  53.28% {\n    -webkit-transform: rotate(0deg) translate(0, 0);\n            transform: rotate(0deg) translate(0, 0);\n  }\n  62.16% {\n    -webkit-transform: rotate(42deg) translate(-9px, -14px);\n            transform: rotate(42deg) translate(-9px, -14px);\n  }\n  68.08% {\n    -webkit-transform: rotate(42deg) translate(-9px, -14px);\n            transform: rotate(42deg) translate(-9px, -14px);\n  }\n  72.52% {\n    -webkit-transform: rotate(15deg) translate(15px, 2px);\n            transform: rotate(15deg) translate(15px, 2px);\n  }\n  82.88% {\n    -webkit-transform: rotate(70deg) translate(0, 0);\n            transform: rotate(70deg) translate(0, 0);\n  }\n  100% {\n    -webkit-transform: rotate(15deg) translate(15px, 2px);\n            transform: rotate(15deg) translate(15px, 2px);\n  }\n}\n@keyframes rundove-back-foot {\n  17.76% {\n    -webkit-transform: rotate(-10deg) translate(0, 0);\n            transform: rotate(-10deg) translate(0, 0);\n  }\n  23.52% {\n    -webkit-transform: rotate(0deg) translate(0, 0);\n            transform: rotate(0deg) translate(0, 0);\n  }\n  53.28% {\n    -webkit-transform: rotate(0deg) translate(0, 0);\n            transform: rotate(0deg) translate(0, 0);\n  }\n  62.16% {\n    -webkit-transform: rotate(42deg) translate(-9px, -14px);\n            transform: rotate(42deg) translate(-9px, -14px);\n  }\n  68.08% {\n    -webkit-transform: rotate(42deg) translate(-9px, -14px);\n            transform: rotate(42deg) translate(-9px, -14px);\n  }\n  72.52% {\n    -webkit-transform: rotate(15deg) translate(15px, 2px);\n            transform: rotate(15deg) translate(15px, 2px);\n  }\n  82.88% {\n    -webkit-transform: rotate(70deg) translate(0, 0);\n            transform: rotate(70deg) translate(0, 0);\n  }\n  100% {\n    -webkit-transform: rotate(15deg) translate(15px, 2px);\n            transform: rotate(15deg) translate(15px, 2px);\n  }\n}\n@-webkit-keyframes rundove-front-wing {\n  0% {\n    -webkit-transform: rotate(-68deg) translate(0, 0);\n            transform: rotate(-68deg) translate(0, 0);\n  }\n  57.33% {\n    -webkit-transform: rotate(-68deg) translate(0, 0);\n            transform: rotate(-68deg) translate(0, 0);\n  }\n  67.62% {\n    -webkit-transform: rotate(-210deg) translate(-60px, 0);\n            transform: rotate(-210deg) translate(-60px, 0);\n  }\n  72.03% {\n    -webkit-transform: rotate(-70deg) translate(0, 10px);\n            transform: rotate(-70deg) translate(0, 10px);\n  }\n  80.85% {\n    -webkit-transform: rotate(-210deg) translate(-60px, 0);\n            transform: rotate(-210deg) translate(-60px, 0);\n  }\n}\n@keyframes rundove-front-wing {\n  0% {\n    -webkit-transform: rotate(-68deg) translate(0, 0);\n            transform: rotate(-68deg) translate(0, 0);\n  }\n  57.33% {\n    -webkit-transform: rotate(-68deg) translate(0, 0);\n            transform: rotate(-68deg) translate(0, 0);\n  }\n  67.62% {\n    -webkit-transform: rotate(-210deg) translate(-60px, 0);\n            transform: rotate(-210deg) translate(-60px, 0);\n  }\n  72.03% {\n    -webkit-transform: rotate(-70deg) translate(0, 10px);\n            transform: rotate(-70deg) translate(0, 10px);\n  }\n  80.85% {\n    -webkit-transform: rotate(-210deg) translate(-60px, 0);\n            transform: rotate(-210deg) translate(-60px, 0);\n  }\n}\n@-webkit-keyframes rundove-front-finger-1 {\n  0% {\n    -webkit-transform: rotate(85deg);\n            transform: rotate(85deg);\n  }\n  55.86% {\n    -webkit-transform: rotate(85deg);\n            transform: rotate(85deg);\n  }\n  57.33% {\n    -webkit-transform: rotate(110deg);\n            transform: rotate(110deg);\n  }\n  67.62% {\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n  }\n}\n@keyframes rundove-front-finger-1 {\n  0% {\n    -webkit-transform: rotate(85deg);\n            transform: rotate(85deg);\n  }\n  55.86% {\n    -webkit-transform: rotate(85deg);\n            transform: rotate(85deg);\n  }\n  57.33% {\n    -webkit-transform: rotate(110deg);\n            transform: rotate(110deg);\n  }\n  67.62% {\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n  }\n}\n@-webkit-keyframes rundove-front-finger-2 {\n  0% {\n    -webkit-transform: rotate(185deg);\n            transform: rotate(185deg);\n  }\n  55.86% {\n    -webkit-transform: rotate(185deg);\n            transform: rotate(185deg);\n  }\n  57.33% {\n    -webkit-transform: rotate(160deg);\n            transform: rotate(160deg);\n  }\n  67.62% {\n    -webkit-transform: rotate(100deg);\n            transform: rotate(100deg);\n  }\n}\n@keyframes rundove-front-finger-2 {\n  0% {\n    -webkit-transform: rotate(185deg);\n            transform: rotate(185deg);\n  }\n  55.86% {\n    -webkit-transform: rotate(185deg);\n            transform: rotate(185deg);\n  }\n  57.33% {\n    -webkit-transform: rotate(160deg);\n            transform: rotate(160deg);\n  }\n  67.62% {\n    -webkit-transform: rotate(100deg);\n            transform: rotate(100deg);\n  }\n}\n@-webkit-keyframes rundove-front-finger-3 {\n  0% {\n    -webkit-transform: rotate(140deg) translate(0, 0);\n            transform: rotate(140deg) translate(0, 0);\n  }\n  55.86% {\n    -webkit-transform: rotate(140deg) translate(0, 0);\n            transform: rotate(140deg) translate(0, 0);\n  }\n  57.33% {\n    -webkit-transform: rotate(132deg) translate(-8px, -8px);\n            transform: rotate(132deg) translate(-8px, -8px);\n  }\n  67.62% {\n    -webkit-transform: rotate(90deg) translate(-8px, -8px);\n            transform: rotate(90deg) translate(-8px, -8px);\n  }\n}\n@keyframes rundove-front-finger-3 {\n  0% {\n    -webkit-transform: rotate(140deg) translate(0, 0);\n            transform: rotate(140deg) translate(0, 0);\n  }\n  55.86% {\n    -webkit-transform: rotate(140deg) translate(0, 0);\n            transform: rotate(140deg) translate(0, 0);\n  }\n  57.33% {\n    -webkit-transform: rotate(132deg) translate(-8px, -8px);\n            transform: rotate(132deg) translate(-8px, -8px);\n  }\n  67.62% {\n    -webkit-transform: rotate(90deg) translate(-8px, -8px);\n            transform: rotate(90deg) translate(-8px, -8px);\n  }\n}\n@-webkit-keyframes rundove-back-wing {\n  0% {\n    -webkit-transform: rotate(110deg) translateY(0);\n            transform: rotate(110deg) translateY(0);\n  }\n  29.4% {\n    -webkit-transform: rotate(110deg) translateY(0);\n            transform: rotate(110deg) translateY(0);\n  }\n  35.28% {\n    -webkit-transform: rotate(70deg) translateY(-25px);\n            transform: rotate(70deg) translateY(-25px);\n  }\n  49.98% {\n    -webkit-transform: rotate(65deg) translateY(-25px);\n            transform: rotate(65deg) translateY(-25px);\n  }\n  67.62% {\n    -webkit-transform: rotate(335deg) translateY(0);\n            transform: rotate(335deg) translateY(0);\n  }\n  72.03% {\n    -webkit-transform: rotate(125deg) translateY(0);\n            transform: rotate(125deg) translateY(0);\n  }\n  83.79% {\n    -webkit-transform: rotate(335deg) translateY(0);\n            transform: rotate(335deg) translateY(0);\n  }\n}\n@keyframes rundove-back-wing {\n  0% {\n    -webkit-transform: rotate(110deg) translateY(0);\n            transform: rotate(110deg) translateY(0);\n  }\n  29.4% {\n    -webkit-transform: rotate(110deg) translateY(0);\n            transform: rotate(110deg) translateY(0);\n  }\n  35.28% {\n    -webkit-transform: rotate(70deg) translateY(-25px);\n            transform: rotate(70deg) translateY(-25px);\n  }\n  49.98% {\n    -webkit-transform: rotate(65deg) translateY(-25px);\n            transform: rotate(65deg) translateY(-25px);\n  }\n  67.62% {\n    -webkit-transform: rotate(335deg) translateY(0);\n            transform: rotate(335deg) translateY(0);\n  }\n  72.03% {\n    -webkit-transform: rotate(125deg) translateY(0);\n            transform: rotate(125deg) translateY(0);\n  }\n  83.79% {\n    -webkit-transform: rotate(335deg) translateY(0);\n            transform: rotate(335deg) translateY(0);\n  }\n}\n@-webkit-keyframes rundove-beak {\n  0% {\n    -webkit-transform: scaleX(1);\n            transform: scaleX(1);\n  }\n  32.4% {\n    -webkit-transform: scaleX(1);\n            transform: scaleX(1);\n  }\n  33.81% {\n    -webkit-transform: scaleX(1.5);\n            transform: scaleX(1.5);\n  }\n  49.98% {\n    -webkit-transform: scaleX(1.5);\n            transform: scaleX(1.5);\n  }\n  50% {\n    -webkit-transform: scaleX(1);\n            transform: scaleX(1);\n  }\n}\n@keyframes rundove-beak {\n  0% {\n    -webkit-transform: scaleX(1);\n            transform: scaleX(1);\n  }\n  32.4% {\n    -webkit-transform: scaleX(1);\n            transform: scaleX(1);\n  }\n  33.81% {\n    -webkit-transform: scaleX(1.5);\n            transform: scaleX(1.5);\n  }\n  49.98% {\n    -webkit-transform: scaleX(1.5);\n            transform: scaleX(1.5);\n  }\n  50% {\n    -webkit-transform: scaleX(1);\n            transform: scaleX(1);\n  }\n}\n@-webkit-keyframes rundove-shadow {\n  0% {\n    -webkit-transform: translateX(-243px);\n            transform: translateX(-243px);\n  }\n  5.88% {\n    -webkit-transform: translateX(30px);\n            transform: translateX(30px);\n  }\n  17.64% {\n    -webkit-transform: translateX(50px);\n            transform: translateX(50px);\n  }\n  23.52% {\n    -webkit-transform: translateX(80px);\n            transform: translateX(80px);\n  }\n  52.92% {\n    -webkit-transform: translateX(80px);\n            transform: translateX(80px);\n  }\n  67.62% {\n    -webkit-transform: translateX(80px);\n            transform: translateX(80px);\n  }\n  72.03% {\n    -webkit-transform: translateX(280px);\n            transform: translateX(280px);\n  }\n  76.44% {\n    -webkit-transform: translateX(500px);\n            transform: translateX(500px);\n  }\n  86.79% {\n    -webkit-transform: translateX(760px);\n            transform: translateX(760px);\n  }\n  100% {\n    -webkit-transform: translateX(760px);\n            transform: translateX(760px);\n  }\n}\n@keyframes rundove-shadow {\n  0% {\n    -webkit-transform: translateX(-243px);\n            transform: translateX(-243px);\n  }\n  5.88% {\n    -webkit-transform: translateX(30px);\n            transform: translateX(30px);\n  }\n  17.64% {\n    -webkit-transform: translateX(50px);\n            transform: translateX(50px);\n  }\n  23.52% {\n    -webkit-transform: translateX(80px);\n            transform: translateX(80px);\n  }\n  52.92% {\n    -webkit-transform: translateX(80px);\n            transform: translateX(80px);\n  }\n  67.62% {\n    -webkit-transform: translateX(80px);\n            transform: translateX(80px);\n  }\n  72.03% {\n    -webkit-transform: translateX(280px);\n            transform: translateX(280px);\n  }\n  76.44% {\n    -webkit-transform: translateX(500px);\n            transform: translateX(500px);\n  }\n  86.79% {\n    -webkit-transform: translateX(760px);\n            transform: translateX(760px);\n  }\n  100% {\n    -webkit-transform: translateX(760px);\n            transform: translateX(760px);\n  }\n}\n@-webkit-keyframes birds-coffee {\n  10.29% {\n    -webkit-transform: rotate(11deg) translate(4px, -3px);\n            transform: rotate(11deg) translate(4px, -3px);\n    z-index: 100;\n  }\n  24.99% {\n    -webkit-transform: rotate(-5deg) translate(-2px, -1px);\n            transform: rotate(-5deg) translate(-2px, -1px);\n  }\n  29.4% {\n    -webkit-transform: rotate(-1deg) translate(0, -1px);\n            transform: rotate(-1deg) translate(0, -1px);\n  }\n  33.81% {\n    -webkit-transform: rotate(-24deg) translate(-20px, -59px);\n            transform: rotate(-24deg) translate(-20px, -59px);\n    z-index: 100;\n  }\n  49.98% {\n    -webkit-transform: rotate(-44deg) translate(25px, -99px);\n            transform: rotate(-44deg) translate(25px, -99px);\n    z-index: 0;\n  }\n  54.39% {\n    -webkit-transform: rotate(0deg) translate(-1px, 0);\n            transform: rotate(0deg) translate(-1px, 0);\n  }\n  70.56% {\n    -webkit-transform: rotate(0deg) translate(-1px, 0);\n            transform: rotate(0deg) translate(-1px, 0);\n  }\n  79.38% {\n    -webkit-transform: rotate(30deg) translate(15px, -6px);\n            transform: rotate(30deg) translate(15px, -6px);\n  }\n  94.08% {\n    -webkit-transform: rotate(-20deg) translate(-10px, -5px);\n            transform: rotate(-20deg) translate(-10px, -5px);\n    z-index: 0;\n  }\n}\n@keyframes birds-coffee {\n  10.29% {\n    -webkit-transform: rotate(11deg) translate(4px, -3px);\n            transform: rotate(11deg) translate(4px, -3px);\n    z-index: 100;\n  }\n  24.99% {\n    -webkit-transform: rotate(-5deg) translate(-2px, -1px);\n            transform: rotate(-5deg) translate(-2px, -1px);\n  }\n  29.4% {\n    -webkit-transform: rotate(-1deg) translate(0, -1px);\n            transform: rotate(-1deg) translate(0, -1px);\n  }\n  33.81% {\n    -webkit-transform: rotate(-24deg) translate(-20px, -59px);\n            transform: rotate(-24deg) translate(-20px, -59px);\n    z-index: 100;\n  }\n  49.98% {\n    -webkit-transform: rotate(-44deg) translate(25px, -99px);\n            transform: rotate(-44deg) translate(25px, -99px);\n    z-index: 0;\n  }\n  54.39% {\n    -webkit-transform: rotate(0deg) translate(-1px, 0);\n            transform: rotate(0deg) translate(-1px, 0);\n  }\n  70.56% {\n    -webkit-transform: rotate(0deg) translate(-1px, 0);\n            transform: rotate(0deg) translate(-1px, 0);\n  }\n  79.38% {\n    -webkit-transform: rotate(30deg) translate(15px, -6px);\n            transform: rotate(30deg) translate(15px, -6px);\n  }\n  94.08% {\n    -webkit-transform: rotate(-20deg) translate(-10px, -5px);\n            transform: rotate(-20deg) translate(-10px, -5px);\n    z-index: 0;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">  </div>\n<header id=\"header\">\n    <nav class=\"navbar navbar-expand-md bg-faded navbar-light\"> \n                \n        <div class=\"container-fluid navfont\">\n            <!-- <div class=\"navbar-header\">\n                    <a class=\"navbar-brand\">MATEENAH</a>\n            </div> -->\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n                <span class=\"navbar-toggler-icon\"></span>\n            </button>\n            <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n                <ul class=\"nav navbar-nav ml-auto\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" [routerLink]=\"['/home']\">Home</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" (click)=\"gotoResume()\">Capabilities</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" (click)=\"gotoAbout()\">About</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" (click)=\"gotoResume()\">Experience</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" (click)=\"gotoFooter()\">Contact</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n</header>\n<main id=\"main\">\n    <div class=\"container-fluid\">\n        <router-outlet></router-outlet> \n        <app-about></app-about> \n        <app-resume></app-resume>\n         <!-- <app-skills></app-skills>     -->\n         <app-connect></app-connect>\n    </div>   \n</main>\n<footer id=\"footer\">\n        <app-footer></app-footer>\n        <br><br>\n        <div>\n        <i class=\"fa fa-long-arrow-up\" id=\"arrow\" aria-hidden=\"true\" (click)=\"gotoTop()\"></i>\n        </div>\n</footer>\n    \n\n       \n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(myElement) {
        this.myElement = myElement;
    }
    AppComponent.prototype.gotoTop = function () {
        var el = this.myElement.nativeElement.querySelector('nav');
        el.scrollIntoView();
    };
    AppComponent.prototype.gotoHome = function () {
        var el = this.myElement.nativeElement.querySelector('app-home');
        el.scrollIntoView();
    };
    AppComponent.prototype.gotoAbout = function () {
        var el = this.myElement.nativeElement.querySelector('app-about');
        el.scrollIntoView();
    };
    AppComponent.prototype.gotoResume = function () {
        var el = this.myElement.nativeElement.querySelector('app-resume');
        el.scrollIntoView();
    };
    AppComponent.prototype.gotoFooter = function () {
        var el = this.myElement.nativeElement.querySelector('app-footer');
        el.scrollIntoView();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'my-app',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_page_scroll__ = __webpack_require__("../../../../ng2-page-scroll/ng2-page-scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__skills_skills_component__ = __webpack_require__("../../../../../src/app/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__resume_resume_component__ = __webpack_require__("../../../../../src/app/resume/resume.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__connect_connect_component__ = __webpack_require__("../../../../../src/app/connect/connect.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__form_form_component__ = __webpack_require__("../../../../../src/app/form/form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng2_page_scroll__["a" /* Ng2PageScrollModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */].forRoot([
                    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */] },
                    { path: 'skills', component: __WEBPACK_IMPORTED_MODULE_6__skills_skills_component__["a" /* SkillsComponent */] },
                    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_8__about_about_component__["a" /* AboutComponent */] },
                    { path: 'resume', component: __WEBPACK_IMPORTED_MODULE_9__resume_resume_component__["a" /* ResumeComponent */] },
                    { path: 'form', component: __WEBPACK_IMPORTED_MODULE_11__form_form_component__["a" /* FormComponent */] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                ])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__skills_skills_component__["a" /* SkillsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_9__resume_resume_component__["a" /* ResumeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__connect_connect_component__["a" /* ConnectComponent */],
                __WEBPACK_IMPORTED_MODULE_11__form_form_component__["a" /* FormComponent */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/connect/connect.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".column {\n    display: block;\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    -ms-flex-negative: 1;\n        flex-shrink: 1;\n    text-align:center;\n    padding: 2rem 1.5rem;\n}\n\n.cta-button {\n    border-radius: 5px;\n    border: 1px solid #f5c453;\n    padding: 1em 1.5em;\n    display: inline-block;\n    font-size: 1em;\n    font-style: italic;\n    margin: 0 1em;\n    margin-bottom: 1em;\n    min-width: 10em;\n    transition: all 0.25s ease;\n    font-family: 'AvenirNextLTW01-Medium',sans-serif;\n}\n.cta-button:hover {\n    -webkit-transform: scale(1.025);\n            transform: scale(1.025);\n    transition: all 0.25s ease;\n}\na:hover .arrow-right {\n    -webkit-transform: translateX(5px);\n            transform: translateX(5px);\n    transition: all 0.25s ease;\n    display: inline-block;\n}\n.arrow-right {\n    padding-left: 10px;\n}\na {\n    color: #494c4e;\n    text-decoration: none;\n    margin-bottom: 1.25em;\n}\na:hover {\n     opacity: 0.4; \n}\n.column h1{\n    font-family: 'AvenirNextLTW01-Medium',sans-serif;\n    color: rgba(10,10,10,0.9);\n    font-weight: 200 !important;\n    line-height: 1.5;\n    font-size: 1.5rem !important;\n}\n.border-bottom{\n    padding: 30px;\n}\n.title{\n    font-family: \"adriane\",serif;\n    letter-spacing: 2px;\n    margin-bottom: 1.5rem;\n  }\n  /* is-size-1-desktop  */\n  @media screen and (min-width: 1088px){\n  .title{font-size: 2.2rem !important;}\n  }\n  /* is-size-2-tablet  */\n  @media screen and (min-width: 769px), print{\n  .title {font-size: 1.5rem !important;}\n  }\n  /* is-size-3-mobile  */\n  @media screen and (max-width: 768px){\n  .title {font-size: 1rem !important;}\n  }\n  .subtitle{\n      font-family: 'AvenirNextLTW01-Medium',sans-serif;\n      color: rgba(10,10,10,0.9);\n      font-weight: 200 !important;\n      line-height: 1.5;\n      font-size: 1rem;\n      letter-spacing: 1spx;\n      margin-bottom: 1.5rem;\n  }\n  /* is-size-1-desktop  */\n  @media screen and (min-width: 1088px) {\n    .subtitle{font-size: 1.2rem !important;}\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/connect/connect.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row border-bottom\">\n    <div class=\"container\">\n            <div class=\"column\">\n                <h2 class=\"title\">Interested in collaborating or investing?</h2>\n                <h3 class=\"subtitle\">\n                  I’m always open to discussing product design work or partnership opportunities.</h3>\n                <a [href]=\"'/form'\" class=\"cta-button\">Email Me <span class=\"arrow-right\">→</span></a>            \n            </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/connect/connect.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConnectComponent = (function () {
    function ConnectComponent() {
    }
    ConnectComponent.prototype.ngOnInit = function () {
    };
    ConnectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-connect',
            template: __webpack_require__("../../../../../src/app/connect/connect.component.html"),
            styles: [__webpack_require__("../../../../../src/app/connect/connect.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConnectComponent);
    return ConnectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-fluid {\n\n    padding-right: 15px;\n    padding-left: 15px;\n}\n#social h4 {\n    color: #242424;\n    font-family: 'AvenirNextLTW01-Medium',sans-serif;\n    font-weight: normal;\n    font-size: 11px;\n    letter-spacing: 2px;\n    text-transform: uppercase;\n}\n\n#social ul li a {\n    color: #cac9c9;\n    display: block;\n    font-family: \"adriane\",serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 20px;\n    margin-right: 12px;\n    padding: 10px 0;\n    transition: color .35s ease-in-out;\n    -moz-transition: color .35s ease-in-out;\n    -o-transition: color .35s ease-in-out;\n    -webkit-transition: color .35s ease-in-out;\n}\n\n#social ul li {\n    display: inline-block;\n}\n#copyright {\n    color: #cac9c9;\n    font-family: 'AvenirNextLTW01-Medium',sans-serif;\n    font-weight: normal;\n    font-size: 10px;\n    letter-spacing: 1px;\n    margin-top: 15px;\n    text-transform: uppercase;\n}\n#copyright .thanks {\n    float: left;\n}\n#copyright .mmvii {\n    float: right;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n    <div id=\"social\">\n      <h4 class=\"text-muted\">Around The Web</h4>\n      <a class=\"btn\" href=\"#\">Facebook</a>\n      <a class=\"btn\" href=\"#\">Instagram</a>\n      <a class=\"btn\" href=\"#\">GitHub</a>\n      <a class=\"btn\" href=\"#\">Google +</a>\n      <a class=\"btn\" href=\"#\">Gmail</a>\n      <a class=\"btn\" href=\"#\">Linkedin</a>\n\n    </div>\n    <div id=\"copyright\">\n        <span class=\"thanks\">Thank you for visiting</span>\n        <span class=\"mmvii\">© 2018 Resume. All rights reserved | Crafted by \n            <a href=\"#\">Mateenah</a></span>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css"), __webpack_require__("../../../../../src/app/footer/style.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n/* luxury button */\n\n\n.btn {\n  display: inline-block;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-style: normal;\n  font-size: 0.625rem;\n  letter-spacing: 0.3em;\n  color: rgba(223,190,106,0.7);\n  border-radius: 0;\n  /* padding: 18px 80px 20px; */\n  transition: all 0.7s ease-out;\n  background: linear-gradient(270deg, rgba(223,190,106,0.8), rgba(146,111,52,0.8), rgba(34,34,34,0), rgba(34,34,34,0));\n  background-position: 1% 50%;\n  background-size: 300% 300%;\n  text-decoration: none;\n  margin: 0.625rem;\n  border: none;\n  border: 1px solid rgba(223,190,106,0.3);\n}\n\n.btn:hover {\n  color: #fff;\n  border: 1px solid rgba(223,190,106,0);\n  color: white;\n  background-position: 99% 50%;\n}\n\nbody {\n  background: #231f20;\n  color: #fff;\n  font-family: \"Helvetica Neue\", Helvetica, Arials, sans;\n}\n\n\n\narticle {\n  height: 100vh;\n}\n\nbody {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 100vh;\n}\n\n/* pulsaing avtar */\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/form/form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Material form contact -->\n<div class=\"card\">\n\n    <h5 class=\"card-header info-color white-text text-center py-4\">\n        <strong>Contact us</strong>\n    </h5>\n\n    <!--Card content-->\n    <div class=\"card-body px-lg-5 pt-0\">\n\n        <!-- Form -->\n        <form class=\"text-center\" style=\"color: #757575;\">\n\n            <!-- Name -->\n            <div class=\"md-form mt-3\">\n                <input type=\"text\" id=\"materialContactFormName\" class=\"form-control\">\n                <label for=\"materialContactFormName\">Name</label>\n            </div>\n\n            <!-- E-mail -->\n            <div class=\"md-form\">\n                <input type=\"email\" id=\"materialContactFormEmail\" class=\"form-control\">\n                <label for=\"materialContactFormEmail\">E-mail</label>\n            </div>\n\n            <!-- Subject -->\n            <span>Subject</span>\n            <select class=\"mdb-select\">\n                <option value=\"\" disabled>Choose option</option>\n                <option value=\"1\" selected>Feedback</option>\n                <option value=\"2\">Report a bug</option>\n                <option value=\"3\">Feature request</option>\n                <option value=\"4\">Feature request</option>\n            </select>\n\n            <!--Message-->\n            <div class=\"md-form\">\n                <textarea type=\"text\" id=\"materialContactFormMessage\" class=\"form-control md-textarea\" rows=\"3\"></textarea>\n                <label for=\"materialContactFormMessage\">Message</label>\n            </div>\n\n            <!-- Copy -->\n            <div class=\"form-check\">\n                <input type=\"checkbox\" class=\"form-check-input\" id=\"materialContactFormCopy\">\n                <label class=\"form-check-label\" for=\"materialContactFormCopy\">Send me a copy of this message</label>\n            </div>\n\n            <!-- Send button -->\n            <button class=\"btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect\" type=\"submit\">Send</button>\n\n        </form>\n        <!-- Form -->\n\n    </div>\n\n</div>\n<!-- Material form contact -->"

/***/ }),

/***/ "../../../../../src/app/form/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormComponent = (function () {
    function FormComponent() {
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-form',
            template: __webpack_require__("../../../../../src/app/form/form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/form/form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".column {\n    display: block;\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    -ms-flex-negative: 1;\n        flex-shrink: 1;\n    text-align:center;\n    padding: 2rem 1.5rem;\n}\n.title{\n  font-family: \"adriane\",serif;\n  margin-bottom: 1.5rem;\n  letter-spacing: 2px;\n}\n/* is-size-1-desktop  */\n@media screen and (min-width: 1088px){\n.title{font-size: 3rem !important;}\n}\n/* is-size-2-tablet  */\n@media screen and (min-width: 769px), print{\n.title {font-size: 2.5rem !important;}\n}\n/* is-size-3-mobile  */\n@media screen and (max-width: 768px){\n.title {font-size: 1.8rem !important;}\n}\n.subtitle{\n    font-family: 'AvenirNextLTW01-Medium',sans-serif;\n    color: rgba(10,10,10,0.9);\n    font-weight: 200 !important;\n    line-height: 1.5;\n    font-size: 1rem;\n    letter-spacing: 1spx;\n}\n/* is-size-1-desktop  */\n@media screen and (min-width: 1088px) {\n  .subtitle{font-size: 1.5rem !important;}\n}\n\n.img_container {\n    position: relative;\n    width: 50%;\n}\n\n.image {\n  opacity: 1;\n  display: block;\n  width: 100%;\n  height: auto;\n  transition: .5s ease;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n\n.middle {\n  transition: .5s ease;\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n.container:hover .image {\n  opacity: 0.3;\n}\n\n.container:hover .middle {\n  opacity: 1;\n}\n\n.text {\n  background-color: #4CAF50;\n  color: white;\n  font-size: 16px;\n  padding: 16px 32px;\n}\n.img_container{\n  margin: 0 auto !important;\n}\n.avatar{\n  margin: 0 auto !important;\n  \n}\n@media screen and (min-width: 450px){\n  .avatar { width: 150px;}\n}\n@media screen and (min-width: 769px){ \n  .avatar { width: 210px;}\n}\n.middle .text{\n  background-color: #09aac5;\n  padding: 8px 16px;\n}\n\n@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n/* Styles */\n}\n\n/*EXPLORE button*/\n\n#explore.explore-100 {\n  position: relative;\n  right: 0;\n  text-align: left;\n  width: 100%;\n  z-index: 2;\n  padding: 2rem 1.5rem;\n}   \n#explore a {\n  color: #242424;\n  display: inline-block;\n  font-family: \"adriane\",serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 20px;\n  text-decoration: none;\n  cursor: pointer;\n  margin-right: 10px;\n}\n\n#explore a i {\nbottom: 0;\ndisplay: block;\nposition: relative;\n}\n\n#downKey {\nposition: relative;\ntext-align: center;\n}\n#explore a:hover i{\nmargin-top: 20px;\ncursor: pointer;\ncolor: rgba(223,190,106,0.7);\n-webkit-transform: scale(1.5);\n        transform: scale(1.5);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"row\">\n        <div class=\"container mt-3\">\n        <div class=\"d-flex justify-content-center bg-faded mb-3\">\n            <div class=\"column\">\n                    <h1 class=\"font-weight-bold title\">Designer & Front-end Developer</h1>\n                    <h2 class=\"font-weight-normal subtitle\">I design and code beautifully simple things, and I love what I do.</h2>\n            \n                    <div class=\"img_container\">\n                            <img [src]=\"path\" alt=\"Avatar\" class=\"image avatar\">\n                            <div class=\"middle\">\n                              <div class=\"\"></div>\n                            </div>\n                    </div>\n            </div>    \n        </div>\n        <div id=\"explore\" class=\"explore-100\">\n                <a class=\"scrollMe\" (click)=\"gotoAbout()\">\n                    Explore\n                    <i class=\"fa fa-long-arrow-down\" id=\"downKey\" aria-hidden=\"true\" (click)=\"gotoAbout()\"></i>\n                </a>\n        </div> \n    </div>\n  </div>     \n\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(myElement) {
        this.myElement = myElement;
        this.path = "../assets/img-avatar.png";
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.gotoAbout = function () {
        window.scrollBy(0, 300);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/resume/resume.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  font-size: 12px;\n  font-family: 'Roboto', sans-serif;\n}\n.container-skills {\n\tmargin: 20px auto 0 auto;\n  max-width: 400px;\n  padding: 50px 0px 50px;\n}\n\n.bar {\n  position: relative;\n\tbackground-color: #d8d8d8;\n\theight: 10px;\n  margin: 0 0 20px 0;\n  width:100%;\n}\n.bar-fill {\n  position: absolute;\n  height: 10px;\n}\n.bar-title {\n  position: relative;\n\tfont-size: 1em;\n\ttext-align: left;\n\tmargin: 0 0 5px 0;\n}\n.percent {\n  position: absolute;\n\tright: 0;\n}\n\n/* Animations Below - Replace ease-out with infinite for infinite loop*/\n/*Edit here for html*/  \n.bar-fill-html {\n\twidth: 90%;\n  background-color: #e44d26;\n\tanimation: bar-fill-html 2s ease-out;\n\t-moz-animation: bar-fill-html 2s ease-out;\n  -webkit-animation: bar-fill-html 2s ease-out;\n}\n@keyframes bar-fill-html {\n    0% {\n        width: 0px;\n    }\n\n    100% {\n        width: 90%;\n    }\n}\n@-webkit-keyframes bar-fill-html {\n    0% {\n        width: 0px;\n    }\n\n    100% {\n        width: 90%;\n    }\n}\n/*Edit here for Javascript*/\n.bar-fill-javascript {\n\twidth: 60%;\n  background-color: #f8dc3d;\n  animation: bar-fill-javascript 2s ease-out;\n\t-moz-animation: bar-fill-javascript 2s ease-out;\n  -webkit-animation: bar-fill-javascript 2s ease-out;\n}\n@keyframes bar-fill-javascript {\n    0% {\n        width: 0px;\n    }\n\n    100% {\n        width: 60%;\n    }\n}\n@-webkit-keyframes bar-fill-javascript {\n    0% {\n        width: 0px;\n    }\n\n    100% {\n        width: 60%;\n    }\n}\n/*Edit here for Jquery*/\n.bar-fill-jquery{\n\twidth: 70%;\n  background-color: #131b28;\n  animation: bar-fill-jquery 2s ease-out;\n\t-moz-animation: bar-fill-jquery 2s ease-out;\n  -webkit-animation: bar-fill-jquery 2s ease-out;\n}\n@keyframes bar-fill-jquery {\n    0% {\n        width: 0px;\n    }\n\n    100% {\n        width: 70%;\n    }\n}\n@-webkit-keyframes bar-fill-jquery {\n    0% {\n        width: 0px;\n    }\n\n    100% {\n        width: 70%;\n    }\n}\n/*Edit here for Responsive*/\n.bar-fill-responsive{\n\twidth: 90%;\n  background-color: #429f46;\n  animation: bar-fill-responsive 2s ease-out;\n\t-moz-animation: bar-fill-responsive 2s ease-out;\n  -webkit-animation: bar-fill-responsive 2s ease-out;\n}\n@keyframes bar-fill-responsive {\n    0% {\n        width: 0px;\n    }\n\n    100% {\n        width: 90%;\n    }\n}\n@-webkit-keyframes bar-fill-responsive {\n    0% {\n        width: 0px;\n    }\n\n    100% {\n        width: 90%;\n    }\n}\n/*Edit here for Photoshop*/\n.bar-fill-photoshop{\n\twidth: 20%;\n  background-color: #0a73dc;\n  animation: bar-fill-photoshop 2s ease-out;\n\t-moz-animation: bar-fill-photoshop 2s ease-out;\n  -webkit-animation: bar-fill-photoshop 2s ease-out;\n}\n@keyframes bar-fill-photoshop {\n    0% {\n        width: 0px;\n    }\n\n    100% {\n        width: 20%;\n    }\n}\n@-webkit-keyframes bar-fill-photoshop {\n    0% {\n        width: 0px;\n    }\n\n    100% {\n        width: 20%;\n    }\n}\n\n\n\n/* row2 keyframes \n#tools_info {\n  color:#999;\n  font-size:36px;\n  font-weight:bold;\n  /* padding-top:200px;   \n\n  position:relative;\n  width:100%;\n  bottom:45%;\n  display:block;\n  text-align: center;\n}\n\n#flip {\n  height:50px;\n  overflow:hidden;\n  text-transform: uppercase;\n}\n\n#flip > div > div {\n  color:#fff;\n  padding:4px 12px;\n  height:45px;\n  margin-bottom:45px;\n  display:inline-block;\n}\n\n#flip div:first-child {\n  animation: show 9s linear infinite;\n}\n\n/* #flip div div {\n  background:#42c58a;\n} */\n/*#flip div:first-child div {\n  color:#4ec7f3;\n}\n#flip div:nth-child(2) div {\n  color:#131b28;\n}\n#flip div:last-child div {\n  color:#DC143C;\n}\n#flip div div:nth-child(3) {\n  color:#42c58a;\n}\n\n@keyframes show {\n  0% {margin-top:-270px;}\n  5% {margin-top:-180px;}\n  33% {margin-top:-180px;}\n  38% {margin-top:-90px;}\n  66% {margin-top:-90px;}\n  71% {margin-top:0px;}\n  99.99% {margin-top:0px;}\n  100% {margin-top:-270px;}\n}\n.small-txt {\n  font-size:10px;\n} */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/resume/resume.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-6\">\n      <div id=\"about_info\">\n          <h3>Things you would like to know</h3>\n          <h1>Experience & Skills</h1>\n          <p>\"Having near 3.5 years of experience into IT consulting and product development. \n            I have worked across domains such as Telecom, and Health Care.\" </p>\n          <p>Specialities: Java/J2EE, Spring, Hibernate, HTML5 , CSS , Javascript, \n            Bootstrap, Angular.js, Web services design and implementation.</p>\n      </div>\n  </div>\n  <div class=\"col-sm-6\">\n    <div class=\"container-skills\">\n        <div class=\"html\">\n          <p class=\"bar-title\">\n            HTML / HTML5 & CSS\n            <span class=\"percent align-right\">90%</span>\n          </p>\n          <div class=\"bar\">\n            <div class=\"bar-fill bar-fill-html start\"></div>\n          </div>\n      </div>\n      <div class=\"javascript\">\n        <p class=\"bar-title\">\n          Javascript\n          <span class=\"percent align-right\">60%</span>\n        </p>\n        <div class=\"bar\">\n          <div class=\"bar-fill bar-fill-javascript start\"></div>\n        </div>\n      </div>\n      <div class=\"jquery\">\n        <p class=\"bar-title\">\n          JQuery\n          <span class=\"percent align-right\">70%</span>\n        </p>\n        <div class=\"bar\">\n          <div class=\"bar-fill bar-fill-jquery start\"></div>\n        </div>\n      </div>  \n      <div class=\"responsive-design\">\n        <p class=\"bar-title\">\n          Responsive Design\n          <span class=\"percent align-right\">90%</span>\n        </p>\n        <div class=\"bar\">\n          <div class=\"bar-fill bar-fill-responsive start\"></div>\n        </div>\n      </div>\n      <div class=\"photoshop\">\n        <p class=\"bar-title\">\n          Photoshop\n          <span class=\"percent align-right\">20%</span>\n        </p>\n        <div class=\"bar\">\n        <div class=\"bar-fill bar-fill-photoshop start\"></div>\n        </div>\n      </div>\n    </div>\n</div>\n</div>\n\n<!-- <div class=\"row\">\n  <div class=\"col-sm-4\">\n    <div id=\"tools_info\">\n        <span class=\"small-txt\">THE</span> FRAMEWORKS <span class=\"small-txt\">Used</span>\n         <div id=flip>\n           <div><div>Bootstrap</div></div>\n           <div><div>Angular</div></div>\n           <div><div>Foundation</div></div>\n          \n         </div>\n    </div>\n  </div>\n    <div class=\"col-sm-4\">\n        <div id=\"tools_info\">\n            <span class=\"small-txt\">THE</span> LANGUAGES <span class=\"small-txt\">Used</span>\n             <div id=flip>\n               <div><div>HTML5</div></div>\n               <div><div>CSS3</div></div>\n               <div><div>Java</div></div>\n             </div>\n        </div>\n    </div>\n    <div class=\"col-sm-4\">\n        <div id=\"tools_info\">\n            <span class=\"small-txt\">THE</span> OTHERS <span class=\"small-txt\">Used</span>\n             <div id=flip>\n               <div><div>GIT</div></div>\n               <div><div>MySQL</div></div>\n               <div><div>MongoDb</div></div>\n               <div><div>JBoss</div></div>\n             </div>\n        </div>\n    </div>\n*/ \n\n\n  </div>-->"

/***/ }),

/***/ "../../../../../src/app/resume/resume.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResumeComponent = (function () {
    function ResumeComponent() {
        this.language = ["Angular", "React", "NodeJs"];
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-resume',
            template: __webpack_require__("../../../../../src/app/resume/resume.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css"), __webpack_require__("../../../../../src/app/resume/resume.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/skills/skills.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#skill_info{\n    padding: 100px 50px 0px; \n}\n#skill_info h2 {\n    color: #909496;\n    font-family: 'AvenirNextLTW01-Medium',sans-serif;\n    font-weight: normal;\n    font-size: 11px;\n    letter-spacing: 2px;\n    margin-bottom: 10px;\n    text-transform: uppercase;\n    margin-bottom: 20px;\n}\n\n#skill_info h1 {\n    color: rgba(223,190,106,0.7);\n    font-family: \"adriane\",serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 90px;\n    left: -5px;\n    line-height: 1;\n    margin-bottom: 40px;\n    position: relative;\n    white-space: nowrap;\n    z-index: 2;\n}\n#skill_info p:first-of-type {\n    color: #5e5e5e;\n    font-family: \"adriane\",serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 24px;\n    line-height: 1.666;\n}\n#skill_info p {\n    color: #3d3d3d;\n    font-family: 'AvenirNextLTW01-Regular',sans-serif;\n    font-weight: normal;\n    letter-spacing: .5px;\n    line-height: 2;\n    margin-bottom: 36px;\n}\n.bar{\n    left: 0;\n    background:#B69D73;}\n    /* background: linear-gradient(to right, #B69D73 0%,#738CB6 100% ); */\n\n#img_skills{\n    width: 100%;\n    /* padding: 150px 0px; */\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/skills/skills.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"row\">\n    <div class=\"col-1\">\n        <div class=\"bar\">\n            <span>About Mateenah's Skills</span>\n        </div>\n    </div>\n    <div class=\"col-5\">\n      <div id=\"skill_info\">\n        <h2>Things you would like to know</h2>\n        <h1>Experience & Skills</h1>\n        <p>\"Having near 3.5 years of experience into IT consulting and product development. \n          I have worked across domains such as Telecom, and Health Care.\" </p>\n        <p>Specialities: Java/J2EE, Spring, Hibernate, HTML5 , CSS , Javascript, \n          Bootstrap, Angular.js, Web services design and implementation.</p>\n      </div>\n    </div> \n    <div class=\"col-6\">\n      <img id=\"img_skills\" src=\"../assets/img_LRM1.jpg\" alt=\"\">\n    </div>\n  </div>  \n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/skills/skills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillsComponent = (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-skills',
            template: __webpack_require__("../../../../../src/app/skills/skills.component.html"),
            styles: [__webpack_require__("../../../../../src/app/skills/skills.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map