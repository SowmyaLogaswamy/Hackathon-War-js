webpackJsonp([1],{

/***/ 106:
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
webpackEmptyAsyncContext.id = 106;

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-welcome',
        template: __webpack_require__(187),
        styles: [__webpack_require__(188)]
    }),
    __metadata("design:paramtypes", [])
], WelcomeComponent);

//# sourceMappingURL=welcome.component.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
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
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__(204),
        styles: [__webpack_require__(205)]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__squad_service__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeamsComponent = (function () {
    function TeamsComponent(router, squadService) {
        this.router = router;
        this.squadService = squadService;
        this.currentRoute = this.router.url;
    }
    TeamsComponent.prototype.ngOnInit = function () {
        this.squads = this.squadService.getSquads();
    };
    TeamsComponent.prototype.goToDetailPage = function (clickedSquad) {
        this.router.navigate(['squads', clickedSquad.$key]);
    };
    ;
    return TeamsComponent;
}());
TeamsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-teams',
        template: __webpack_require__(264),
        styles: [__webpack_require__(265)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__squad_service__["a" /* SquadService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__squad_service__["a" /* SquadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__squad_service__["a" /* SquadService */]) === "function" && _b || Object])
], TeamsComponent);

var _a, _b;
//# sourceMappingURL=teams.component.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SquadDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__squad_service__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SquadDetailComponent = (function () {
    function SquadDetailComponent(route, location, squadService) {
        this.route = route;
        this.location = location;
        this.squadService = squadService;
    }
    SquadDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (urlParameters) {
            _this.squadId = urlParameters['id'];
        });
        this.squadToDisplay = this.squadService.getSquadById(this.squadId);
    };
    return SquadDetailComponent;
}());
SquadDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-squad-detail',
        template: __webpack_require__(266),
        styles: [__webpack_require__(267)],
        providers: [__WEBPACK_IMPORTED_MODULE_3__squad_service__["a" /* SquadService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__squad_service__["a" /* SquadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__squad_service__["a" /* SquadService */]) === "function" && _c || Object])
], SquadDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=squad-detail.component.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__squad_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__squad_model__ = __webpack_require__(268);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = (function () {
    function AdminComponent(squadService) {
        this.squadService = squadService;
    }
    AdminComponent.prototype.submitForm = function (name, description) {
        var newSquad = new __WEBPACK_IMPORTED_MODULE_2__squad_model__["a" /* Squad */](name, description);
        this.squadService.addSquad(newSquad);
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-admin',
        template: __webpack_require__(269),
        styles: [__webpack_require__(270)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__squad_service__["a" /* SquadService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__squad_service__["a" /* SquadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__squad_service__["a" /* SquadService */]) === "function" && _a || Object])
], AdminComponent);

var _a;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(167);


/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(276);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__welcome_welcome_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__teams_teams_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__squad_detail_squad_detail_component__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__api_keys__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__admin_admin_component__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__edit_squad_edit_squad_component__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var firebaseConfig = {
    apiKey: __WEBPACK_IMPORTED_MODULE_10__api_keys__["a" /* masterFirebaseConfig */].apiKey,
    authDomain: __WEBPACK_IMPORTED_MODULE_10__api_keys__["a" /* masterFirebaseConfig */].authDomain,
    databaseURL: __WEBPACK_IMPORTED_MODULE_10__api_keys__["a" /* masterFirebaseConfig */].databaseURL,
    storageBucket: __WEBPACK_IMPORTED_MODULE_10__api_keys__["a" /* masterFirebaseConfig */].storageBucket
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__welcome_welcome_component__["a" /* WelcomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_8__teams_teams_component__["a" /* TeamsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__squad_detail_squad_detail_component__["a" /* SquadDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_13__admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_14__edit_squad_edit_squad_component__["a" /* EditSquadComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_11_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__["b" /* AngularFireDatabaseModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Hackathon War';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(185),
        styles: [__webpack_require__(186)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\" id =\"top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" routerLink=\"\">Hackathon-War</a>\n    </div>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><a routerLink=\"about\">About</a></li>\n      <li><a routerLink=\"teams\" data-toggle=\"collapse\" data-target=\"#demo\">Team Show up</a></li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container\" ng-style=\"{'background-color':blue}\">\n  <div class=\"jumbotron\" id=\"header\">\n  <h1>{{title}}</h1>\n</div>\n  <router-outlet></router-outlet>\n</div>\n\n<footer class=\"footer\" id = \"footer\">\n  <div class=\"container\" id =\"subfooter\">\n    <a class=\"text-muted\" routerLink=\"admin\">Admin</a>\n  </div>\n</footer>\n"

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

module.exports = "<h2>Welcome to Hackathon War</h2>\n"

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__welcome_welcome_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__teams_teams_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__squad_detail_squad_detail_component__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_admin_component__ = __webpack_require__(151);






var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__welcome_welcome_component__["a" /* WelcomeComponent */]
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_2__about_about_component__["a" /* AboutComponent */]
    },
    {
        path: 'teams',
        component: __WEBPACK_IMPORTED_MODULE_3__teams_teams_component__["a" /* TeamsComponent */]
    },
    {
        path: 'squads/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__squad_detail_squad_detail_component__["a" /* SquadDetailComponent */]
    },
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_5__admin_admin_component__["a" /* AdminComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

module.exports = "<h2> About Hackathon - War </h2>\n<h4> A place to find the future coders of the world </h4>\n\n<h5>A hackathon (also known as a hack day, hackfest or codefest) is a design sprint-like event in which computer programmers and others involved in software development, including graphic designers, interface designers, project managers, and others, often including subject-matter-experts, collaborate intensively on software projects.Occasionally, some hackathons are intended simply for educational or social purposes, although in many cases the goal is to create usable software. Hackathons tend to have a specific focus, which can include the programming language used, the operating system, an application, an API, or the subject and the demographic group of the programmers. In other cases, there is no restriction on the type of software being created.</h5>\n"

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 264:
/***/ (function(module, exports) {

module.exports = "<h2> Teams </h2>\n<h4> Here are the teams participationg in the Hackathon-War </h4>\n\n<div *ngFor=\"let squad of squads | async\"  class=\"panel panel-success\" id =\"demo\">\n  <div class=\"panel-body\">\n    <h3 (click) = \"goToDetailPage(squad)\">{{squad.name}}</h3>\n    <div *ngIf=\"currentRoute === '/admin'\">\n      {{squad.description}}\n      <hr>\n      <app-edit-squad [selectedSquad]=\"squad\"></app-edit-squad>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 266:
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3>{{(squadToDisplay | async).name}}</h3>\n  <h4>{{(squadToDisplay | async).description}}</h4>\n</div>\n"

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Squad; });
var Squad = (function () {
    function Squad(name, description) {
        this.name = name;
        this.description = description;
    }
    return Squad;
}());

//# sourceMappingURL=squad.model.js.map

/***/ }),

/***/ 269:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title\">Add New Team to the Hackathon-War</h3>\n  </div>\n  <div class=\"panel-body\">\n<div>\n  <div>\n    <label>Team Name:</label>\n    <br>\n    <input #newName>\n  </div>\n\n  <div>\n    <label>Team Description:</label>\n    <br>\n    <textarea  #newDescription></textarea>\n  </div>\n   <button (click)=\"submitForm(newName.value, newDescription.value); newName.value='';newDescription.value=''\">Add</button>\n</div>\n</div>\n</div>\n\n<div>\n  <app-teams></app-teams>\n</div>\n"

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return masterFirebaseConfig; });
var masterFirebaseConfig = {
    apiKey: "AIzaSyBJjh9RyakRJp8bg5FTm5Jf0-Og3_Or21Y",
    authDomain: "hackathon-wars.firebaseapp.com",
    databaseURL: "https://hackathon-wars.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "583717239008"
};
//# sourceMappingURL=api-keys.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditSquadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__squad_service__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditSquadComponent = (function () {
    function EditSquadComponent(squadService) {
        this.squadService = squadService;
    }
    EditSquadComponent.prototype.ngOnInit = function () {
    };
    EditSquadComponent.prototype.beginUpdatingSquad = function (squadToUpdate) {
        this.squadService.updateSquad(squadToUpdate);
    };
    EditSquadComponent.prototype.beginDeletingSquad = function (squadToDelete) {
        if (confirm("Are you sure you want to delete this item from the inventory?")) {
            this.squadService.deleteSquad(squadToDelete);
        }
    };
    return EditSquadComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], EditSquadComponent.prototype, "selectedSquad", void 0);
EditSquadComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-edit-squad',
        template: __webpack_require__(274),
        styles: [__webpack_require__(275)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__squad_service__["a" /* SquadService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__squad_service__["a" /* SquadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__squad_service__["a" /* SquadService */]) === "function" && _a || Object])
], EditSquadComponent);

var _a;
//# sourceMappingURL=edit-squad.component.js.map

/***/ }),

/***/ 274:
/***/ (function(module, exports) {

module.exports = "<h4>Edit Teams</h4>\n\n<label>New Team Name:</label>\n<input [(ngModel)]=\"selectedSquad.name\">\n<br>\n<br>\n<label>New Team Description:</label>\n<textarea [(ngModel)]=\"selectedSquad.description\"></textarea>\n\n\n<button (click)=\"beginUpdatingSquad(selectedSquad)\">Update</button>\n<hr>\n<button (click)=\"beginDeletingSquad(selectedSquad)\">Delete</button>\n"

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SquadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { SQUADS } from './mock-squads';

var SquadService = (function () {
    function SquadService(database) {
        this.database = database;
        this.squads = database.list('squads');
    }
    SquadService.prototype.getSquads = function () {
        return this.squads;
    };
    SquadService.prototype.addSquad = function (newSquad) {
        this.squads.push(newSquad);
    };
    SquadService.prototype.getSquadById = function (squadId) {
        return this.database.object('squads/' + squadId);
    };
    SquadService.prototype.updateSquad = function (localUpdatedSquad) {
        var squadEntryInFirebase = this.getSquadById(localUpdatedSquad.$key);
        squadEntryInFirebase.update({ name: localUpdatedSquad.name,
            description: localUpdatedSquad.description });
    };
    SquadService.prototype.deleteSquad = function (localSquadToDelete) {
        var squadEntryInFirebase = this.getSquadById(localSquadToDelete.$key);
        squadEntryInFirebase.remove();
    };
    return SquadService;
}());
SquadService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], SquadService);

var _a;
//# sourceMappingURL=squad.service.js.map

/***/ })

},[166]);
//# sourceMappingURL=main.bundle.js.map