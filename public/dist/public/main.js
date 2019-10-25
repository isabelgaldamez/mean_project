(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\n    :host {\n      font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n      font-size: 14px;\n      color: #333;\n      box-sizing: border-box;\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n    }\n\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6 {\n      margin: 8px 0;\n    }\n\n    p {\n      margin: 0;\n    }\n\n    .spacer {\n      flex: 1;\n    }\n\n    .toolbar {\n      height: 60px;\n      margin: -8px;\n      display: flex;\n      align-items: center;\n      background-color: #1976d2;\n      color: white;\n      font-weight: 600;\n    }\n\n    .toolbar img {\n      margin: 0 16px;\n    }\n\n    .toolbar #twitter-logo {\n      height: 40px;\n      margin: 0 16px;\n    }\n    /* Responsive Styles */\n    @media screen and (max-width: 767px) {\n\n      .card-container > *:not(.circle-link) ,\n      .terminal {\n        width: 100%;\n      }\n\n      .card:not(.highlight-card) {\n        height: 16px;\n        margin: 8px 0;\n      }\n\n      .card.highlight-card span {\n        margin-left: 72px;\n      }\n\n      svg#rocket-smoke {\n        right: 120px;\n        transform: rotate(-5deg);\n      }\n    }\n\n    @media screen and (max-width: 575px) {\n      svg#rocket-smoke {\n        display: none;\n        visibility: hidden;\n      }\n    }\n</style>\n\n\n<!-- Toolbar -->\n<div class=\"toolbar\" role=\"banner\">\n  <img\n    width=\"40\"\n    alt=\"Angular Logo\"\n    src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"\n  />\n  <span>Welcome</span>\n    <div class=\"spacer\"></div>\n  <a aria-label=\"Angular on twitter\" target=\"_blank\" rel=\"noopener\" href=\"https://twitter.com/angular\" title=\"Twitter\">\n    \n    <svg id=\"twitter-logo\" height=\"24\" data-name=\"Logo — FIXED\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 400\">\n      <defs>\n        <style>\n          .cls-1 {\n            fill: none;\n          }\n\n          .cls-2 {\n            fill: #ffffff;\n          }\n        </style>\n      </defs>\n      <rect class=\"cls-1\" width=\"400\" height=\"400\" />\n      <path class=\"cls-2\" d=\"M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23\"\n      />\n    </svg>\n    \n  </a>\n</div>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/explore/explore.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/explore/explore.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link href=\"node_modules/@angular/material/prebuilt-themes/indigo-pink.css\" rel=\"stylesheet\">\n<h1>Explore</h1>\n<h3>This page gives you information of the place you want to visit</h3>\n\n<div class='search'>\n  <h2>America and Caribe</h2>\n  <form>\n    <input #criteria (input)=\"updateCriteria(criteria.value)\" placeholder=\"Search Country\" />\n  </form>\n\n  <ul class=\"heroes\" [@filterAnimation]=\"heroTotal\">\n    <li *ngFor=\"let hero of heroes\" class=\"hero\">\n      <div class=\"inner\">\n        <span class=\"badge\">{{ hero.id }}</span>\n        <span (click)='searchCountry(hero.name)'>{{ hero.name }}</span>\n      </div>\n    </li>\n  </ul>\n</div>\n\n<div *ngIf='display' class='info'>\n  <h2>Information about {{_country_info.name}}</h2>\n  <h4>Capital is {{_country_info.capital}}</h4>\n  <div *ngFor='let currecy of _country_info.currencies'>\n    <h4>Currency is: {{currecy.name}}</h4>\n  </div>\n  <div *ngFor='let language of _country_info.languages'>\n    <h4>Language is: {{language.name}}</h4>\n  </div>\n  <h4>Region: {{_country_info.region}}</h4>\n  <div *ngFor='let code of _country_info.callingCodes'>\n    <h4>Calling code: + {{code}}</h4>\n  </div>\n  <button routerLink=\"/locations/{{_country_info.name}}\">Show me around!</button>\n</div>\n<div *ngIf='display' class='flag'>\n  <img src='{{_country_info.flag}}'>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Main Content -->\n<div class=\"content\" role=\"main\">\n<!-- <img src={{background_image}}> -->\n    <div class='explore'>\n    <h1>Explore</h1>\n    <div class='explore_text'>\n        <p>Explore about your next destination, find out about currency exchange, language and much more ...</p>\n        <button [routerLink] = \"['/explore']\">Let's explore!</button>\n    </div>\n    </div>\n    <div class='locations'>\n    <h1>Locations</h1>\n    <div class='locations_text'>\n        <p>Get to know about possible places to visit</p>\n        <button [routerLink] = \"['/locations/USA']\">Show me around</button>\n    </div>\n    </div>\n    <!-- <div class='learn'>\n    <h1>Learn</h1>\n    <div class='learn_text'>\n        <p>Learn about the country, language and culture </p>\n        <button [routerLink] = \"['/learn']\">I want to learn!</button>\n    </div>\n    </div> -->\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/learn/learn.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/learn/learn.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>learn works!</h1>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/locations/locations.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/locations/locations.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Search for places to visit in {{_searchCountry}} </h1>\n<div class='places_list'>\n    <!-- <form (submit) = 'getCountryInfo(_searchCountry)'>\n        <p>{{ _userSelection | json }}</p>\n        Enter : <input type='text' [(ngModel)] = _userSelection name='name'>\n    </form> -->\n\n    <!-- To bind to the component.ts\n    1. make sure to have on the form tag (submit) = 'function to be called' \n    2. on the variable where you are interested to get the user input, use [(ngModel)] = \"_userSelection\"\n    where '_userSelection' is a variable declared on the .ts file\n    3. Make sure that the app.component.ts has the import {FormsModule, ReactiveFormsModule} from '@angular/forms';\n    and @NgModule({imports: [FormsModule,]}) \n    -->\n    <form (submit) = 'getCountryInfo(_searchCountry)' class=\"example-form\">\n        <!-- <p>{{ _userSelection | json }}</p> -->\n        <mat-form-field class=\"example-full-width\">\n            <input  type=\"text\" [(ngModel)] = \"_userSelection\" placeholder=\"Pick Location\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n            <mat-autocomplete #auto=\"matAutocomplete\">\n            <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\" >\n                {{option}}\n            </mat-option>\n            </mat-autocomplete>\n        </mat-form-field>\n    </form>\n    <div class='places_info' *ngIf='_displayPlaces'>\n        <h1>Info about {{_userSelection}} in {{_searchCountry}}</h1>\n        <div class = 'places'>\n            <table>\n                <thead>\n                    <tr>\n                        <th>Location Name</th>\n                        <th>Location Address</th>\n                        <th>Rating</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor='let place of _placesFound'>\n                        <td>{{place.name}}</td>\n                        <td>{{place.formatted_address}}</td>\n                        <td>{{place.rating}}</td>\n                    </tr>\n\n                </tbody>\n            </table>\n        </div>\n    </div>\n<div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _explore_explore_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./explore/explore.component */ "./src/app/explore/explore.component.ts");
/* harmony import */ var _learn_learn_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./learn/learn.component */ "./src/app/learn/learn.component.ts");
/* harmony import */ var _locations_locations_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locations/locations.component */ "./src/app/locations/locations.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");







const routes = [
    { path: '', component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_6__["LandingPageComponent"] },
    { path: 'explore', component: _explore_explore_component__WEBPACK_IMPORTED_MODULE_3__["ExploreComponent"] },
    { path: 'locations/:country', component: _locations_locations_component__WEBPACK_IMPORTED_MODULE_5__["LocationsComponent"] },
    { path: 'learn', component: _learn_learn_component__WEBPACK_IMPORTED_MODULE_4__["LearnComponent"] },
    { path: '', pathMatch: 'full', redirectTo: '/' },
    { path: '**', redirectTo: '/' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");



let AppComponent = class AppComponent {
    constructor(_httpService) {
        this._httpService = _httpService;
        this.title = 'public';
    }
};
AppComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        animations: [],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _explore_explore_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./explore/explore.component */ "./src/app/explore/explore.component.ts");
/* harmony import */ var _learn_learn_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./learn/learn.component */ "./src/app/learn/learn.component.ts");
/* harmony import */ var _locations_locations_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./locations/locations.component */ "./src/app/locations/locations.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _explore_explore_component__WEBPACK_IMPORTED_MODULE_8__["ExploreComponent"],
            _learn_learn_component__WEBPACK_IMPORTED_MODULE_9__["LearnComponent"],
            _locations_locations_component__WEBPACK_IMPORTED_MODULE_10__["LocationsComponent"],
            _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_11__["LandingPageComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
        ],
        providers: [_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/explore/explore.component.css":
/*!***********************************************!*\
  !*** ./src/app/explore/explore.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".heroes {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\n\n.heroes li {\n  position: relative;\n  height: 2.3em;\n  overflow:hidden;\n  margin: .5em;\n}\n\n.heroes li > .inner {\n  cursor: pointer;\n  background-color: #EEE;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n  width: 19em;\n}\n\n.heroes li:hover > .inner {\n  color: #607D8B;\n  background-color: #DDD;\n  transform: translateX(.1em);\n}\n\n.heroes a {\n  color: #888;\n  text-decoration: none;\n  position: relative;\n  display: block;\n  width: 250px;\n}\n\n.heroes a:hover {\n  color:#607D8B;\n}\n\n.heroes .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  min-width: 16px;\n  text-align: right;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\n\n.button {\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n  font-family: Arial;\n}\n\nbutton:hover {\n  background-color: #cfd8dc;\n}\n\nbutton.delete {\n  position: relative;\n  left: 24em;\n  top: -32px;\n  background-color: gray !important;\n  color: white;\n  display: inherit;\n  padding: 5px 8px;\n  width: 2em;\n}\n\ninput {\n  font-size: 100%;\n  margin-bottom: 2px;\n  width: 11em;\n}\n\n.heroes input {\n  position: relative;\n  top: -3px;\n  width: 12em;\n}\n\n.search{\n  margin-left: 100px;\n  margin-top: 30px;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.info {\n  display: inline-block;\n  vertical-align: top;\n  margin-left: 100px;\n  margin-top: 20px\n}\n\n.info button{\n  font-size: 15px;\n  padding: 8px;\n  border-radius: 10px;\n  border: 1px solid blue;\n}\n\n.flag{\n  display: inline-block;\n  vertical-align: top;\n  /* margin-left: 100px; */\n  margin-top: 20px;\n  margin-left: 100px;\n  /* margin-top: 30px; */\n}\n\n.flag img{\n  height: 300px;\n  width: 350px;\n}\n\n/*\nCopyright Google LLC. All Rights Reserved.\nUse of this source code is governed by an MIT-style license that\ncan be found in the LICENSE file at http://angular.io/license\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwbG9yZS9leHBsb3JlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULGFBQWE7RUFDYixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFVBQVU7RUFDVixpQ0FBaUM7RUFDakMsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7QUFDYjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBQ0E7Ozs7Q0FJQyIsImZpbGUiOiJzcmMvYXBwL2V4cGxvcmUvZXhwbG9yZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlcm9lcyB7XG4gIG1hcmdpbjogMCAwIDJlbSAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxNWVtO1xufVxuXG4uaGVyb2VzIGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDIuM2VtO1xuICBvdmVyZmxvdzpoaWRkZW47XG4gIG1hcmdpbjogLjVlbTtcbn1cblxuLmhlcm9lcyBsaSA+IC5pbm5lciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcbiAgcGFkZGluZzogLjNlbSAwO1xuICBoZWlnaHQ6IDEuNmVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHdpZHRoOiAxOWVtO1xufVxuXG4uaGVyb2VzIGxpOmhvdmVyID4gLmlubmVyIHtcbiAgY29sb3I6ICM2MDdEOEI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCguMWVtKTtcbn1cblxuLmhlcm9lcyBhIHtcbiAgY29sb3I6ICM4ODg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG4uaGVyb2VzIGE6aG92ZXIge1xuICBjb2xvcjojNjA3RDhCO1xufVxuXG4uaGVyb2VzIC5iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwLjhlbSAwLjdlbSAwIDAuN2VtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3RDhCO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0xcHg7XG4gIHRvcDogLTRweDtcbiAgaGVpZ2h0OiAxLjhlbTtcbiAgbWluLXdpZHRoOiAxNnB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAuOGVtO1xuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbn1cblxuLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjdXJzb3I6IGhhbmQ7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcbn1cblxuYnV0dG9uLmRlbGV0ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMjRlbTtcbiAgdG9wOiAtMzJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGluaGVyaXQ7XG4gIHBhZGRpbmc6IDVweCA4cHg7XG4gIHdpZHRoOiAyZW07XG59XG5cbmlucHV0IHtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIHdpZHRoOiAxMWVtO1xufVxuXG4uaGVyb2VzIGlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0zcHg7XG4gIHdpZHRoOiAxMmVtO1xufVxuLnNlYXJjaHtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG4uaW5mbyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4XG59XG4uaW5mbyBidXR0b257XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xufVxuLmZsYWd7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgLyogbWFyZ2luLWxlZnQ6IDEwMHB4OyAqL1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gIC8qIG1hcmdpbi10b3A6IDMwcHg7ICovXG59XG4uZmxhZyBpbWd7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiAzNTBweDtcbn1cbi8qXG5Db3B5cmlnaHQgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXRcbmNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHA6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiovIl19 */");

/***/ }),

/***/ "./src/app/explore/explore.component.ts":
/*!**********************************************!*\
  !*** ./src/app/explore/explore.component.ts ***!
  \**********************************************/
/*! exports provided: ExploreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreComponent", function() { return ExploreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _mock_heroes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mock-heroes */ "./src/app/explore/mock-heroes.ts");
/* harmony import */ var _mock_continent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mock-continent */ "./src/app/explore/mock-continent.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");







let ExploreComponent = class ExploreComponent {
    constructor(_httpService, _http) {
        this._httpService = _httpService;
        this._http = _http;
        this.animatePage = true;
        this._heroes = [];
        this._continents = [];
        this._country_info = {};
        this.heroTotal = -1;
        this.continentTotal = -1;
        this.display = false;
    }
    get heroes() {
        return this._heroes;
    }
    get continents() {
        return this._continents;
    }
    ngOnInit() {
        this._heroes = _mock_heroes__WEBPACK_IMPORTED_MODULE_3__["HEROES"];
        this._continents = _mock_continent__WEBPACK_IMPORTED_MODULE_4__["CONTINENT"];
    }
    // continentCriteria(criteria: string) {
    //   criteria = criteria ? criteria.trim() : '';
    //   console.log()
    //   this._continents = CONTINENT.filter(continent => continent.name.toLowerCase().includes(criteria.toLowerCase()));
    //   const newContinentTotal = this.continents.length;
    //   if (this.continentTotal !== newContinentTotal) {
    //     this.continentTotal = newContinentTotal;
    //   } else if (!criteria) {
    //     this.continentTotal = -1;
    //   }
    // }
    updateCriteria(criteria) {
        criteria = criteria ? criteria.trim() : '';
        this._heroes = _mock_heroes__WEBPACK_IMPORTED_MODULE_3__["HEROES"].filter(hero => hero.name.toLowerCase().includes(criteria.toLowerCase()));
        const newTotal = this.heroes.length;
        if (this.heroTotal !== newTotal) {
            this.heroTotal = newTotal;
        }
        else if (!criteria) {
            this.heroTotal = -1;
        }
    }
    searchCountry(country) {
        this.display = true;
        const observable = this._httpService.getCountryData(country);
        observable.subscribe(countryData => {
            this._country_info = countryData[0];
            console.log('country info : ', this._country_info);
        });
    }
};
ExploreComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('@pageAnimations')
], ExploreComponent.prototype, "animatePage", void 0);
ExploreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-explore',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./explore.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/explore/explore.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('pageAnimations', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])('.continent, .hero, form', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateY(-100px)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])(-30, [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms cubic-bezier(0.35, 0, 0.25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'none' }))
                        ])
                    ])
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('filterAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter, * => 0, * => -1', []),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':increment', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, width: '0px' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])(50, [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, width: '*' })),
                        ]),
                    ], { optional: true })
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':decrement', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])(50, [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, width: '0px' })),
                        ]),
                    ])
                ]),
            ]),
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./explore.component.css */ "./src/app/explore/explore.component.css")).default]
    })
], ExploreComponent);



/***/ }),

/***/ "./src/app/explore/mock-continent.ts":
/*!*******************************************!*\
  !*** ./src/app/explore/mock-continent.ts ***!
  \*******************************************/
/*! exports provided: CONTINENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTINENT", function() { return CONTINENT; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const CONTINENT = [
    { id: 1, name: 'America & Caribe' },
    { id: 2, name: 'Europe' },
    { id: 3, name: 'Africa' },
    { id: 4, name: 'Asia' },
    { id: 5, name: 'Oceania' }
];


/***/ }),

/***/ "./src/app/explore/mock-heroes.ts":
/*!****************************************!*\
  !*** ./src/app/explore/mock-heroes.ts ***!
  \****************************************/
/*! exports provided: HEROES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEROES", function() { return HEROES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const HEROES = [
    { id: 1, name: 'Canada' },
    { id: 2, name: 'Mexico' },
    { id: 3, name: 'Guatemala' },
    { id: 4, name: 'El Salvador' },
    { id: 5, name: 'Honduras' },
    { id: 6, name: 'Nicaragua' },
    { id: 7, name: 'Costa Rica' },
    { id: 8, name: 'Panama' },
    { id: 9, name: 'Colombia' },
    { id: 10, name: 'Venezuela' },
    { id: 11, name: 'Surinam' },
    { id: 12, name: 'Guyana' },
    { id: 13, name: 'Brazil' },
    { id: 14, name: 'Ecuador' },
    { id: 15, name: 'Peru' },
    { id: 16, name: 'Bolivia' },
    { id: 17, name: 'Chile' },
    { id: 18, name: 'Argentina' },
    { id: 19, name: 'Paraguay' },
    { id: 20, name: 'Uruguay' },
    { id: 21, name: 'Bahamas' },
    { id: 22, name: 'Turks and Caicos Islands' },
    { id: 23, name: 'Cuba' },
    { id: 24, name: 'Haiti' },
    { id: 25, name: 'Dominican Republic' },
    { id: 26, name: 'Jamaica' },
    { id: 27, name: 'Puerto Rico' },
    { id: 28, name: 'Aruba' },
    { id: 29, name: 'Bonaire' },
    { id: 30, name: 'Curacao' },
    { id: 31, name: 'Angilla' },
    { id: 32, name: 'Antigua and Barbuda' },
    { id: 33, name: 'British Virgin Islands' },
    { id: 34, name: 'Guadeloupe' },
    { id: 35, name: 'Barbados' },
    { id: 36, name: 'Trinidad and Tobago' },
];
// export const HEROES: Hero[] = [
//   { id: 11, name: 'Dr Nice' },
//   { id: 12, name: 'Narco' },
//   { id: 13, name: 'Bombasto' },
//   { id: 14, name: 'Celeritas' },
//   { id: 15, name: 'Magneta' },
//   { id: 16, name: 'RubberMan' },
//   { id: 17, name: 'Dynama' },
//   { id: 18, name: 'Dr IQ' },
//   { id: 19, name: 'Magma' },
//   { id: 20, name: 'Tornado' }
// ];


/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token',
        'Access-Control-Allow-Origin': '*'
    })
};
let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
headers = headers.set('Access-Control-Allow-Origin', '*');
let HttpService = class HttpService {
    constructor(_http) {
        this._http = _http;
    }
    getCountryData(country) {
        return this._http.get(`https://restcountries.eu/rest/v2/name/${country}`);
    }
    getLocationInformation(country, locationType) {
        locationType = locationType.split(" ").join("%20"); // user input may have spaces so here is to split and join with %20
        return this._http.get(`/api/${locationType}/${country}`);
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ "./src/app/landing-page/landing-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  .content {\n    width: 100%;\n    margin: 20px auto;\n    padding: 20px 30px;\n    max-width: 100%;\n  }\n \n  .explore{\n    display: inline-block;\n    vertical-align: top;\n    width: 30%;\n    /* background-color: red; */\n    border-radius: 10px;\n    padding: 10px;\n    border: 2px solid red;\n  }\n \n  .explore_text p, .locations_text p, .learn_text p{\n    font-size: 20px;\n    line-height: 30px;\n    margin: 15px;\n  }\n \n  .explore_text button, .locations_text button, .learn_text button{\n    font-size: 20px;\n    margin: 15px;\n    border-radius: 10px;\n    padding: 10px;\n  }\n \n  .locations{\n    display: inline-block;\n    vertical-align: top;\n    width: 30%;\n    margin-left: 20px;\n    /* background-color: green; */\n    border-radius: 10px;\n    padding: 10px;\n    border: 2px solid green;\n  }\n \n  .learn{\n    display: inline-block;\n    vertical-align: top;\n    width: 30%;\n    margin-left: 20px;\n    border-radius: 10px;\n    padding: 10px;\n    border: 2px solid blue;\n\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7RUFDRTtJQUNFLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDViwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7RUFDZjs7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix1QkFBdUI7RUFDekI7O0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7O0VBRXhCIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIC5jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG4gXG4gIC5leHBsb3Jle1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIHdpZHRoOiAzMCU7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gIH1cblxuICAuZXhwbG9yZV90ZXh0IHAsIC5sb2NhdGlvbnNfdGV4dCBwLCAubGVhcm5fdGV4dCBwe1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBtYXJnaW46IDE1cHg7XG4gIH1cblxuICAuZXhwbG9yZV90ZXh0IGJ1dHRvbiwgLmxvY2F0aW9uc190ZXh0IGJ1dHRvbiwgLmxlYXJuX3RleHQgYnV0dG9ue1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW46IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIC5sb2NhdGlvbnN7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsgKi9cbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47XG4gIH1cbiAgLmxlYXJue1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIHdpZHRoOiAzMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XG5cbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LandingPageComponent = class LandingPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landing-page.component.css */ "./src/app/landing-page/landing-page.component.css")).default]
    })
], LandingPageComponent);



/***/ }),

/***/ "./src/app/learn/learn.component.css":
/*!*******************************************!*\
  !*** ./src/app/learn/learn.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlYXJuL2xlYXJuLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/learn/learn.component.ts":
/*!******************************************!*\
  !*** ./src/app/learn/learn.component.ts ***!
  \******************************************/
/*! exports provided: LearnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearnComponent", function() { return LearnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LearnComponent = class LearnComponent {
    constructor() { }
    ngOnInit() {
    }
};
LearnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-learn',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./learn.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/learn/learn.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./learn.component.css */ "./src/app/learn/learn.component.css")).default]
    })
], LearnComponent);



/***/ }),

/***/ "./src/app/locations/locations.component.css":
/*!***************************************************!*\
  !*** ./src/app/locations/locations.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.places_list{\n  margin-left: 30px;\n  margin-top: 20px;\n}\n\n.places{\n  margin-left: 30px;\n}\n\nbutton{\n  padding:10px;\n  color: green;\n  font-size: 15px;\n  border-radius: 10px;\n  width: 80px;\n  background-color: white;\n  border: 2px solid green;\n}\n\ntable {\n  width: 70%;\n}\n\ntbody tr{\n  margin-bottom: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYXRpb25zL2xvY2F0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbG9jYXRpb25zL2xvY2F0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucGxhY2VzX2xpc3R7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLnBsYWNlc3tcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbmJ1dHRvbntcbiAgcGFkZGluZzoxMHB4O1xuICBjb2xvcjogZ3JlZW47XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDgwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDJweCBzb2xpZCBncmVlbjtcbn1cblxudGFibGUge1xuICB3aWR0aDogNzAlO1xufVxudGJvZHkgdHJ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/locations/locations.component.ts":
/*!**************************************************!*\
  !*** ./src/app/locations/locations.component.ts ***!
  \**************************************************/
/*! exports provided: LocationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationsComponent", function() { return LocationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");







let LocationsComponent = class LocationsComponent {
    //on this page I need to call the service so that I can make api calls, ActivatedRoute to use for params which is passing 
    // parameters through the route 
    constructor(_httpService, _route, _router, _http) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this._http = _http;
        this._displayPlaces = false;
        this._placesFound = [];
        this._image = [];
        // Used for the form where displays options
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.options = ['Beaches', 'Museums', 'Restaurants', 'Gym', 'Mall', 'Parks', 'Temples'];
    }
    ngOnInit() {
        this._route.params.subscribe((params) => {
            this.getCountryInfo(params.country);
        });
        this.filteredOptions = this.myControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => this._filter(value)));
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }
    getCountryInfo(_country) {
        this._searchCountry = _country;
        //This request is sent to the Angular server, which makes a request to express server. If i do not do the 
        //express server, it will give a CORS error, this is a way to bypass this error
        if (this._userSelection != undefined) {
            const observable = this._httpService.getLocationInformation(this._searchCountry, this._userSelection);
            observable.subscribe(locationInfo => {
                this._displayPlaces = true;
                this._placesFound = locationInfo['results'];
                for (let photo of locationInfo['results']) {
                    //results is an array of dictionaries, I need to access the key in that dictionary which is 
                }
            });
        }
    }
};
LocationsComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
];
LocationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-locations',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./locations.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/locations/locations.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./locations.component.css */ "./src/app/locations/locations.component.css")).default]
    })
], LocationsComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/isabelgaldamez/Documents/CodingDojo/Week7/ANGULAR/mean_project/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map