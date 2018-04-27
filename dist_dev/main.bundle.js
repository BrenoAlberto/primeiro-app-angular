webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "p {\r\n    color: red;\r\n    font-size: 25px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-top></app-top>\r\n\r\n<div *ngIf=\"onGoingGame; else gameOver\">\r\n    <app-panel (finishGame)=\"finishGame($event)\"></app-panel>\r\n</div>\r\n<ng-template #gameOver>\r\n    <div *ngIf=\"finishType === 'Lose'; else gameOverWin\" class=\"container\" style=\"margin-top: 50px\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <h3 style=\"color: red\">Você perdeu todos corações</h3>\r\n                <button class=\"btn btn-primary\" (click)=\"restartGame()\">Jogar Novamente</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n<ng-template #gameOverWin>\r\n    <div class=\"container\" style=\"margin-top: 50px\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <h3 style=\"color: green\">Você ganhou</h3>\r\n                <button class=\"btn btn-primary\" (click)=\"restartGame()\">Jogar Novamente</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.onGoingGame = true;
    }
    AppComponent.prototype.finishGame = function (type) {
        this.onGoingGame = false;
        this.finishType = type;
    };
    AppComponent.prototype.restartGame = function () {
        this.onGoingGame = true;
        this.finishType = undefined;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__top_top_component__ = __webpack_require__("./src/app/top/top.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__panel_panel_component__ = __webpack_require__("./src/app/panel/panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__attempts_attempts_component__ = __webpack_require__("./src/app/attempts/attempts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_progress_component__ = __webpack_require__("./src/app/progress/progress.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__top_top_component__["a" /* TopComponent */],
                __WEBPACK_IMPORTED_MODULE_4__panel_panel_component__["a" /* PanelComponent */],
                __WEBPACK_IMPORTED_MODULE_5__attempts_attempts_component__["a" /* AttemptsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__progress_progress_component__["a" /* ProgressComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/attempts/attempts.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/attempts/attempts.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n<img [src]=\"emptyHeart\" />\n<img [src]=\"emptyHeart\" />\n<img [src]=\"fullHeart\" />\n-->\n\n<img *ngFor=\"let heart of hearts\" [src]=\"heart.showHeart()\" />"

/***/ }),

/***/ "./src/app/attempts/attempts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttemptsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_heart_model__ = __webpack_require__("./src/app/shared/heart.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AttemptsComponent = /** @class */ (function () {
    function AttemptsComponent() {
        this.hearts = [
            new __WEBPACK_IMPORTED_MODULE_1__shared_heart_model__["a" /* Heart */](true), new __WEBPACK_IMPORTED_MODULE_1__shared_heart_model__["a" /* Heart */](true), new __WEBPACK_IMPORTED_MODULE_1__shared_heart_model__["a" /* Heart */](true)
        ];
        console.log(this.hearts);
    }
    AttemptsComponent.prototype.ngOnChanges = function () {
        //this.attempts
        //this.hearts.length
        if (this.attempts !== this.hearts.length) {
            var i = this.hearts.length - this.attempts;
            this.hearts[i - 1].full = false;
        }
    };
    AttemptsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Number)
    ], AttemptsComponent.prototype, "attempts", void 0);
    AttemptsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-attempts',
            template: __webpack_require__("./src/app/attempts/attempts.component.html"),
            styles: [__webpack_require__("./src/app/attempts/attempts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AttemptsComponent);
    return AttemptsComponent;
}());



/***/ }),

/***/ "./src/app/panel/panel.component.css":
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n    margin-top: 20px;\r\n    padding-top: 30px;\r\n    padding-bottom: 30px;\r\n}"

/***/ }),

/***/ "./src/app/panel/panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <app-progress [progress]=\"progress\"></app-progress>\n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"d-flex justify-content-end\">\n          <app-attempts [attempts]=\"attempts\"></app-attempts>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col\">\n        <h6>{{ instruction }}</h6>\n        <p>{{ roundPhrase.phraseDE }}</p>\n\n        <div class=\"form-group\">\n          <textarea \n          class=\"form-control\"\n          rows=\"3\"\n          (input)=\"updateAnswer($event)\"\n          [value]=\"answer\"\n          ></textarea>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"d-flex justify-content-end\">\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"verifyAnswer()\">Verificar</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/panel/panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__phrases_mock__ = __webpack_require__("./src/app/panel/phrases-mock.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PanelComponent = /** @class */ (function () {
    function PanelComponent() {
        this.phrases = __WEBPACK_IMPORTED_MODULE_1__phrases_mock__["a" /* PHRASES */];
        this.instruction = "Traduza a frase:";
        this.answer = "";
        this.round = 0;
        this.progress = 0;
        this.attempts = 3;
        this.finishGame = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.updateRound();
    }
    PanelComponent.prototype.ngOnInit = function () {
    };
    PanelComponent.prototype.ngOnDestroy = function () {
    };
    PanelComponent.prototype.updateAnswer = function (answer) {
        this.answer = answer.target.value;
        //console.log(this.answer)
    };
    PanelComponent.prototype.verifyAnswer = function () {
        if (this.roundPhrase.phrasePtBr == this.answer) {
            //trade round question
            this.round++;
            this.progress = this.progress + (100 / this.phrases.length);
            if (this.round === 4) {
                this.finishGame.emit('Win');
            }
            this.updateRound();
        }
        else {
            this.attempts--;
            if (this.attempts <= -1) {
                this.finishGame.emit('Lose');
            }
        }
    };
    PanelComponent.prototype.updateRound = function () {
        //defines the round phrase
        this.roundPhrase = this.phrases[this.round];
        //clean answer
        this.answer = "";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], PanelComponent.prototype, "finishGame", void 0);
    PanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-panel',
            template: __webpack_require__("./src/app/panel/panel.component.html"),
            styles: [__webpack_require__("./src/app/panel/panel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PanelComponent);
    return PanelComponent;
}());



/***/ }),

/***/ "./src/app/panel/phrases-mock.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PHRASES; });
var PHRASES = [
    { phraseDE: 'Die Zeitung', phrasePtBr: 'O jornal' },
    { phraseDE: 'Ihr seid Jungen', phrasePtBr: 'Vocês são meninos' },
    { phraseDE: 'Entschuldigung', phrasePtBr: 'Me desculpe' },
    { phraseDE: 'Die Katzen', phrasePtBr: 'Os gatos' }
];


/***/ }),

/***/ "./src/app/progress/progress.component.css":
/***/ (function(module, exports) {

module.exports = ".progress {\r\n    background: #EEF8DA;\r\n    border: solid 1px #99CE28;\r\n}\r\n\r\n.progress-bar {\r\n    background: #99CE28;\r\n}"

/***/ }),

/***/ "./src/app/progress/progress.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\">\n    <div class=\"progress-bar w-{{ progress }}\"></div>\n  </div>\n"

/***/ }),

/***/ "./src/app/progress/progress.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressComponent = /** @class */ (function () {
    function ProgressComponent() {
        this.progress = 0;
    }
    ProgressComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Number)
    ], ProgressComponent.prototype, "progress", void 0);
    ProgressComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-progress',
            template: __webpack_require__("./src/app/progress/progress.component.html"),
            styles: [__webpack_require__("./src/app/progress/progress.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProgressComponent);
    return ProgressComponent;
}());



/***/ }),

/***/ "./src/app/shared/heart.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Heart; });
var Heart = /** @class */ (function () {
    function Heart(full, urlFullHeart, urlEmptyHear) {
        if (urlFullHeart === void 0) { urlFullHeart = '/assets/coracao_cheio.png'; }
        if (urlEmptyHear === void 0) { urlEmptyHear = '/assets/coracao_vazio.png'; }
        this.full = full;
        this.urlFullHeart = urlFullHeart;
        this.urlEmptyHear = urlEmptyHear;
    }
    Heart.prototype.showHeart = function () {
        if (this.full) {
            return this.urlFullHeart;
        }
        else {
            return this.urlEmptyHear;
        }
    };
    return Heart;
}());



/***/ }),

/***/ "./src/app/top/top.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n    background: #1CB0F6;\r\n}"

/***/ }),

/***/ "./src/app/top/top.component.html":
/***/ (function(module, exports) {

module.exports = "  <nav class=\"navbar navbar-dark bg-faded\">\r\n    <span class=\"navbar-brand mb-0 h1\">{{ titulo }}</span>\r\n  </nav>"

/***/ }),

/***/ "./src/app/top/top.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TopComponent = /** @class */ (function () {
    function TopComponent() {
        this.titulo = 'Aprendendo Alemão';
    }
    TopComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-top',
            template: __webpack_require__("./src/app/top/top.component.html"),
            styles: [__webpack_require__("./src/app/top/top.component.css")]
        })
    ], TopComponent);
    return TopComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map