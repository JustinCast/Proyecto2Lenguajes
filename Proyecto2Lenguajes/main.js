(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/DialogData.ts":
/*!*******************************!*\
  !*** ./src/app/DialogData.ts ***!
  \*******************************/
/*! exports provided: DialogData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogData", function() { return DialogData; });
var DialogData = /** @class */ (function () {
    function DialogData(word, message, display, icon) {
        this.word = word;
        this.message = message;
        this.display = display;
        this.icon = icon;
    }
    return DialogData;
}());



/***/ }),

/***/ "./src/app/ahorcado-game/ahorcado-game.component.html":
/*!************************************************************!*\
  !*** ./src/app/ahorcado-game/ahorcado-game.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 style=\"margin-top: 2%\" class=\"text-center text-primary\">Ahorcado</h1>\r\n<div id=\"header-info-container\" class=\"container text-right\">\r\n  <button (click)=\"openInfoDialog()\" style=\"background: rgba(255, 255, 255, 0.5)\" mat-raised-button>Info Programación Funcional</button>\r\n</div>\r\n<mat-horizontal-stepper [linear]=\"true\">\r\n  <mat-step [stepControl]=\"selectedWord !== undefined\">\r\n    <ng-template matStepLabel>Selección de palabra</ng-template>\r\n    <div class=\"container\">\r\n      <mat-list role=\"list\">\r\n      <div class=\"container text-center\">\r\n        <mat-form-field>\r\n          <input [(ngModel)]=\"filterargs\" matInput type=\"text\" placeholder=\"Buscar una palabra\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input #insertWord matInput type=\"text\" placeholder=\"Ingresar una palabra\">\r\n        </mat-form-field>\r\n        <button (click)=\"words.unshift(insertWord.value)\" [disabled]=\"!insertWord.value\" mat-button><mat-icon>add</mat-icon></button>\r\n      </div>\r\n      <mat-list-item *ngFor=\"let w of words | paginate: { itemsPerPage: 15, currentPage: p } | searchWord:filterargs; let i = index\" role=\"listitem\">\r\n        <div>\r\n          {{w}}\r\n        </div>\r\n        </mat-list-item>\r\n      </mat-list>\r\n      <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n    </div>\r\n    <hr>\r\n    <div class=\"text-center container\">\r\n      <button mat-raised-button color=\"primary\" (click)=\"genRandom()\"><mat-icon>shuffle</mat-icon></button>\r\n    </div>\r\n    <h2 class=\"text-center text-secondary\" *ngIf=\"hiddenWord\"><span class=\"text-primary\">Palabra a adivinar</span><br>{{hiddenWord}}</h2>\r\n  </mat-step>\r\n  <mat-step>\r\n    <ng-template matStepLabel>Jugar</ng-template>\r\n    <form *ngIf=\"selectedWord; else selectWordFirst\" class=\"container text-center\" [formGroup]=\"hangedFG\">\r\n      <div class=\"text-right container\">\r\n        <h2 id=\"lifes-header\"><span class=\"text-danger\">Vidas: </span>{{lifes}}</h2>\r\n      </div>\r\n      <h2 class=\"text-center text-secondary\" *ngIf=\"hiddenWord\"><span class=\"text-primary\">Palabra a adivinar</span><br>{{hiddenWord}}</h2>\r\n      <br>\r\n      <mat-form-field>\r\n        <input [pattern]=\"'^[a-zA-Z]'\" (keyup.enter)=\"onSubmit()\" matInput maxlength=\"1\" [formControl]=\"hangedFG.get('word')\" placeholder=\"Inserte una letra y presione ENTER\" type=\"text\">\r\n      </mat-form-field>\r\n    </form>\r\n    <ng-template #selectWordFirst>\r\n      <div style=\"margin-top: 15%\" class=\"container\">        \r\n        <div class=\"container text-center\">\r\n          <mat-icon class=\"text-danger\" style=\"font-size: 50px\">priority_high</mat-icon>\r\n        </div>\r\n        <h1 class=\"text-danger text-center\">Seleccione una palabra primero</h1>\r\n      </div>\r\n    </ng-template>\r\n  </mat-step>\r\n</mat-horizontal-stepper>"

/***/ }),

/***/ "./src/app/ahorcado-game/ahorcado-game.component.scss":
/*!************************************************************!*\
  !*** ./src/app/ahorcado-game/ahorcado-game.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".actions-container {\n  text-align: right;\n  margin: auto;\n  margin-right: 0;\n  width: 60%; }\n\nmat-paginator {\n  font-size: 12px; }\n\nmat-form-field {\n  margin: 0 2% 0 2%;\n  width: 30%; }\n\nmat-horizontal-stepper {\n  background-color: rgba(255, 255, 255, 0.7);\n  width: 50%;\n  margin: auto;\n  border-radius: 10px; }\n\n#header-info-container {\n  margin-top: 1%;\n  margin-bottom: 1%;\n  width: 50%;\n  padding: 0; }\n"

/***/ }),

/***/ "./src/app/ahorcado-game/ahorcado-game.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/ahorcado-game/ahorcado-game.component.ts ***!
  \**********************************************************/
/*! exports provided: AhorcadoGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AhorcadoGameComponent", function() { return AhorcadoGameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ahorcadoGameWords_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ahorcadoGameWords.json */ "./src/app/ahorcado-game/ahorcadoGameWords.json");
var _ahorcadoGameWords_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/Object.assign({}, _ahorcadoGameWords_json__WEBPACK_IMPORTED_MODULE_1__, {"default": _ahorcadoGameWords_json__WEBPACK_IMPORTED_MODULE_1__});
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _game_over_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../game-over-dialog/dialog.service */ "./src/app/game-over-dialog/dialog.service.ts");
/* harmony import */ var _DialogData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../DialogData */ "./src/app/DialogData.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AhorcadoGameComponent = /** @class */ (function () {
    function AhorcadoGameComponent(_fb, dialog, dialogS) {
        this._fb = _fb;
        this.dialog = dialog;
        this.dialogS = dialogS;
        this.filterargs = "";
        this.p = 1;
        this.words = _ahorcadoGameWords_json__WEBPACK_IMPORTED_MODULE_1__["words"];
        this.lifes = 6;
        this.wrongAudio = new Audio();
        this.doneAudio = new Audio();
        this.activePageDataChunk = [];
        this.hangedFG = this._fb.group({
            word: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[a-zA-Z]")]]
        });
    }
    AhorcadoGameComponent.prototype.replaceAt = function (string, index, replace) {
        return string.substring(0, index) + replace + string.substring(index + 1);
    };
    AhorcadoGameComponent.prototype.ngOnInit = function () {
        this.loadWrongAudio();
        this.loadDoneAudio();
    };
    AhorcadoGameComponent.prototype.onSubmit = function () {
        var word = String(this.hangedFG.controls["word"].value).toLowerCase();
        if (!this.selectedWord.includes(word)) {
            this.wrongAudio.play();
            this.removeCssClasses();
            this.lifes--;
        }
        else {
            this.doneAudio.play();
            for (var index = 0; index < this.selectedWord.length; index++)
                if (this.selectedWord[index] === word)
                    this.hiddenWord = this.replaceAt(this.hiddenWord, index, this.selectedWord[index]);
        }
        if (this.lifes === 0)
            this.openGameOverDialog();
        if (this.hiddenWord === this.selectedWord)
            this.openGameWonDialog();
        this.hangedFG.reset();
    };
    AhorcadoGameComponent.prototype.removeCssClasses = function () {
        document.getElementById("lifes-header").classList.add("animated");
        document.getElementById("lifes-header").classList.add("shake");
        setTimeout(function () {
            document.getElementById("lifes-header").classList.remove("animated");
            document.getElementById("lifes-header").classList.remove("shake");
        }, 1000);
    };
    AhorcadoGameComponent.prototype.openGameOverDialog = function () {
        var _this = this;
        this.dialogS
            .open(new _DialogData__WEBPACK_IMPORTED_MODULE_5__["DialogData"](this.selectedWord, "Has perdido", true, "sentiment_very_dissatisfied"))
            .subscribe(function () {
            _this.reset();
        });
    };
    AhorcadoGameComponent.prototype.openGameWonDialog = function () {
        var _this = this;
        this.dialogS
            .open(new _DialogData__WEBPACK_IMPORTED_MODULE_5__["DialogData"](this.selectedWord, "Has ganado!\nPrueba a volver a jugar o ingresa tus propias palabras!", false, "sentiment_very_satisfied"))
            .subscribe(function () {
            _this.reset();
        });
    };
    AhorcadoGameComponent.prototype.openInfoDialog = function () {
        this.dialogS.openInfoDialog();
    };
    AhorcadoGameComponent.prototype.loadWrongAudio = function () {
        this.wrongAudio.src = "../../assets/err.mp3";
        this.wrongAudio.load();
    };
    AhorcadoGameComponent.prototype.loadDoneAudio = function () {
        this.doneAudio = new Audio();
        this.doneAudio.src = "../../assets/done.wav";
        this.doneAudio.load();
    };
    AhorcadoGameComponent.prototype.genRandom = function () {
        this.hiddenWord = "";
        var randomIndex = Math.floor(Math.random() * (this.words.length - 1)) + 1;
        this.selectedWord = this.words[randomIndex];
        console.log(this.selectedWord);
        this.hiddenWord = Array.from(this.words[randomIndex])
            .map(function (x) { return (x = "x"); })
            .toString()
            .replace(new RegExp(",", "gi"), "");
    };
    AhorcadoGameComponent.prototype.reset = function () {
        this.hiddenWord = undefined;
        this.selectedWord = undefined;
        this.lifes = 6;
    };
    AhorcadoGameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-ahorcado-game",
            template: __webpack_require__(/*! ./ahorcado-game.component.html */ "./src/app/ahorcado-game/ahorcado-game.component.html"),
            styles: [__webpack_require__(/*! ./ahorcado-game.component.scss */ "./src/app/ahorcado-game/ahorcado-game.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _game_over_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"]])
    ], AhorcadoGameComponent);
    return AhorcadoGameComponent;
}());



/***/ }),

/***/ "./src/app/ahorcado-game/ahorcadoGameWords.json":
/*!******************************************************!*\
  !*** ./src/app/ahorcado-game/ahorcadoGameWords.json ***!
  \******************************************************/
/*! exports provided: words, default */
/***/ (function(module) {

module.exports = {"words":["hola","soñar","mirar","luchar","carro","francisco","TEC","computadora","ganar","música","canción","bailar","tatuaje","llamarme","novia","serpiente","futbol","portero","muejeres","sábado","domingo","lunes","cazar","bote","ferrari","videojuego","italia","brasil","religión","helado","parque","motocicleta","avión","viajar","océano","playa","palmera","arena","caballo","sendero","caminar","caminata","arbustos","monos","ramas","árboles","manada","hembra","macho","río","cascada","peces","presa","depredador"]};

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"shadow navbar mb-5\">\r\n    <a class=\"navbar-brand\" href=\"/\">P2Lenguajes</a>\r\n    <div class=\"navbar-expand mr-auto\">\r\n      <div class=\"navbar-nav\">\r\n        <a [routerLink]=\"['/ahorcado']\" class=\"nav-item nav-link\" routerLinkActive=\"active-link\" href=\"#\">Ahorcado</a>\r\n        <a [routerLink]=\"['/sopa-letras']\" class=\"nav-item nav-link\" routerLinkActive=\"active-link\" href=\"#\">Sopa de Letras</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"navbar-expand ml-auto navbar-nav\">\r\n      <div class=\"navbar-nav\">\r\n        <a class=\"nav-item nav-link\" href=\"/\" target=\"_blank\">\r\n          <i class=\"fa fa-instagram\"></i>\r\n        </a>\r\n        <a class=\"nav-item nav-link\" href=\"/\" target=\"_blank\">\r\n          <i class=\"fa fa-facebook\"></i>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  <router-outlet></router-outlet>\r\n  "

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  background-color: rgba(255, 255, 255, 0.2);\n  font-weight: 500; }\n\n.active-link {\n  color: red !important;\n  font-weight: bold; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.loadScript = function () {
        var body = document.body;
        var script = document.createElement('script');
        script.innerHTML = '';
        script.src = '../wordfind.js';
        script.async = true;
        script.defer = true;
        body.appendChild(script);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _ahorcado_game_ahorcado_game_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ahorcado-game/ahorcado-game.component */ "./src/app/ahorcado-game/ahorcado-game.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _game_over_dialog_game_over_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./game-over-dialog/game-over-dialog.component */ "./src/app/game-over-dialog/game-over-dialog.component.ts");
/* harmony import */ var _search_word_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search-word.pipe */ "./src/app/search-word.pipe.ts");
/* harmony import */ var _info_dialog_info_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./info-dialog/info-dialog.component */ "./src/app/info-dialog/info-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








;




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _ahorcado_game_ahorcado_game_component__WEBPACK_IMPORTED_MODULE_7__["AhorcadoGameComponent"],
                _game_over_dialog_game_over_dialog_component__WEBPACK_IMPORTED_MODULE_9__["GameOverDialogComponent"],
                _search_word_pipe__WEBPACK_IMPORTED_MODULE_10__["SearchWordPipe"],
                _info_dialog_info_dialog_component__WEBPACK_IMPORTED_MODULE_11__["InfoDialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_6__["ROUTES"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
            ],
            entryComponents: [
                _game_over_dialog_game_over_dialog_component__WEBPACK_IMPORTED_MODULE_9__["GameOverDialogComponent"],
                _info_dialog_info_dialog_component__WEBPACK_IMPORTED_MODULE_11__["InfoDialogComponent"]
            ],
            providers: [],
            bootstrap: [_ahorcado_game_ahorcado_game_component__WEBPACK_IMPORTED_MODULE_7__["AhorcadoGameComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _ahorcado_game_ahorcado_game_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ahorcado-game/ahorcado-game.component */ "./src/app/ahorcado-game/ahorcado-game.component.ts");

var ROUTES = [
    { path: 'ahorcado', component: _ahorcado_game_ahorcado_game_component__WEBPACK_IMPORTED_MODULE_0__["AhorcadoGameComponent"] },
    { path: '', redirectTo: 'ahorcado', pathMatch: 'full' }
];


/***/ }),

/***/ "./src/app/game-over-dialog/dialog.service.ts":
/*!****************************************************!*\
  !*** ./src/app/game-over-dialog/dialog.service.ts ***!
  \****************************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _game_over_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-over-dialog.component */ "./src/app/game-over-dialog/game-over-dialog.component.ts");
/* harmony import */ var _info_dialog_info_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../info-dialog/info-dialog.component */ "./src/app/info-dialog/info-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DialogService = /** @class */ (function () {
    function DialogService(dialog) {
        this.dialog = dialog;
    }
    DialogService.prototype.open = function (dialogData) {
        var dialogRef;
        dialogRef = this.dialog.open(_game_over_dialog_component__WEBPACK_IMPORTED_MODULE_2__["GameOverDialogComponent"], {
            width: "30%",
            height: "35%",
            data: dialogData
        });
        return dialogRef.afterClosed();
    };
    DialogService.prototype.openInfoDialog = function () {
        var dialogRef;
        dialogRef = this.dialog.open(_info_dialog_info_dialog_component__WEBPACK_IMPORTED_MODULE_3__["InfoDialogComponent"], {
            width: "40%",
            height: "42%"
        });
        return dialogRef.afterClosed();
    };
    DialogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], DialogService);
    return DialogService;
}());



/***/ }),

/***/ "./src/app/game-over-dialog/game-over-dialog.component.html":
/*!******************************************************************!*\
  !*** ./src/app/game-over-dialog/game-over-dialog.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\r\n  <h1 *ngIf=\"data.display\" class=\"text-center text-primary\">{{data.message}}</h1>\r\n  <mat-icon style=\"font-size: 50px\">{{data.icon}}</mat-icon>\r\n  <h3 *ngIf=\"data.display\" class=\"text-secondary\">La palabra correcta era: <span class=\"text-danger\"><strong>{{data.word}}</strong></span></h3>\r\n  <h4 *ngIf=\"!data.display\" class=\"text-secondary\">{{data.message}}</h4>\r\n  <hr>\r\n  <div style=\"margin-bottom: 0\" class=\"container text-center\">\r\n    <button color=\"primary\" mat-raised-button (click)=\"dialogRef.close(true)\"><mat-icon>replay</mat-icon></button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/game-over-dialog/game-over-dialog.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/game-over-dialog/game-over-dialog.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/game-over-dialog/game-over-dialog.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/game-over-dialog/game-over-dialog.component.ts ***!
  \****************************************************************/
/*! exports provided: GameOverDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameOverDialogComponent", function() { return GameOverDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _DialogData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DialogData */ "./src/app/DialogData.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var GameOverDialogComponent = /** @class */ (function () {
    function GameOverDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    GameOverDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    GameOverDialogComponent.prototype.ngOnInit = function () { };
    GameOverDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-game-over-dialog",
            template: __webpack_require__(/*! ./game-over-dialog.component.html */ "./src/app/game-over-dialog/game-over-dialog.component.html"),
            styles: [__webpack_require__(/*! ./game-over-dialog.component.scss */ "./src/app/game-over-dialog/game-over-dialog.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _DialogData__WEBPACK_IMPORTED_MODULE_2__["DialogData"]])
    ], GameOverDialogComponent);
    return GameOverDialogComponent;
}());



/***/ }),

/***/ "./src/app/info-dialog/info-dialog.component.html":
/*!********************************************************!*\
  !*** ./src/app/info-dialog/info-dialog.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-left\">\r\n  <h3 class=\"text-primary text-center\">Implementación de métodos funcionales</h3>\r\n  <div class=\"text-center\">\r\n    <small class=\"text-danger\"><i>Cada método tiene un link a mi repo de Github</i></small>\r\n  </div>\r\n  <hr>\r\n  <p><a href=\"https://github.com/JustinCast/Proyecto2Lenguajes/blob/7c7c05a9a6c64ba3909e430eaf8cbf2b35967266/src/app/search-word.pipe.ts#L13\"><strong>filter</strong>:</a> filtrado de palabras en el juego del ahorcado</p>\r\n  <p><a href=\"https://github.com/JustinCast/Proyecto2Lenguajes/blob/7c7c05a9a6c64ba3909e430eaf8cbf2b35967266/src/app/ahorcado-game/ahorcado-game.component.ts#L124\"><strong>map</strong>:</a> transformación de la palabra seleccionada a palabra a adivinar</p>\r\n  <p><a href=\"https://github.com/JustinCast/Proyecto2Lenguajes/blob/7c7c05a9a6c64ba3909e430eaf8cbf2b35967266/src/app/search-word.pipe.ts#L25\"><strong>regex</strong>:</a> eliminación de acentos para buscar de una mejor manera la palabra</p>\r\n  <div class=\"container text-center\">\r\n    <small class=\"text-secondary\"><i>Justin A. Castillo V.</i><br>&copy; 2018</small>\r\n  </div>\r\n  <hr>\r\n  <div style=\"margin-bottom: 0\" class=\"container text-center\">\r\n    <button (click)=\"dialogRef.close(true)\" color=\"primary\" mat-button><mat-icon>check</mat-icon></button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/info-dialog/info-dialog.component.scss":
/*!********************************************************!*\
  !*** ./src/app/info-dialog/info-dialog.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  font-family: \"Courier New\", monospace;\n  font-size: 20px;\n  color: #582359; }\n"

/***/ }),

/***/ "./src/app/info-dialog/info-dialog.component.ts":
/*!******************************************************!*\
  !*** ./src/app/info-dialog/info-dialog.component.ts ***!
  \******************************************************/
/*! exports provided: InfoDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoDialogComponent", function() { return InfoDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InfoDialogComponent = /** @class */ (function () {
    function InfoDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    InfoDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    InfoDialogComponent.prototype.ngOnInit = function () { };
    InfoDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info-dialog',
            template: __webpack_require__(/*! ./info-dialog.component.html */ "./src/app/info-dialog/info-dialog.component.html"),
            styles: [__webpack_require__(/*! ./info-dialog.component.scss */ "./src/app/info-dialog/info-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], InfoDialogComponent);
    return InfoDialogComponent;
}());



/***/ }),

/***/ "./src/app/search-word.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/search-word.pipe.ts ***!
  \*************************************/
/*! exports provided: SearchWordPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchWordPipe", function() { return SearchWordPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchWordPipe = /** @class */ (function () {
    function SearchWordPipe() {
    }
    SearchWordPipe.prototype.transform = function (items, filter) {
        if (!items || !filter) {
            return items;
        }
        filter = removeAccents(filter);
        return items.filter(function (item) {
            return removeAccents(item)
                .toLowerCase()
                .indexOf(filter.toLowerCase()) !== -1;
        });
    };
    SearchWordPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'searchWord'
        })
    ], SearchWordPipe);
    return SearchWordPipe;
}());

function removeAccents(s) {
    var r = s.toLowerCase();
    r = r.replace(new RegExp(/\s/g), "");
    r = r.replace(new RegExp(/[àáâãäå]/g), "a");
    r = r.replace(new RegExp(/[èéêë]/g), "e");
    r = r.replace(new RegExp(/[ìíîï]/g), "i");
    r = r.replace(new RegExp(/ñ/g), "n");
    r = r.replace(new RegExp(/[òóôõö]/g), "o");
    r = r.replace(new RegExp(/[ùúûü]/g), "u");
    return r;
}


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_2__["NgxPaginationModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_2__["NgxPaginationModule"]
            ],
            declarations: []
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Justin\Documents\ProyectosAngular\Proyecto2Lenguajes\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map