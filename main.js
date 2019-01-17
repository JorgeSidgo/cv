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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\r\n  font-family: 'google-bold';\r\n  src: url('GoogleSans-Bold.ttf');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'google-boldItalic';\r\n  src: url('GoogleSans-BoldItalic.ttf');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'google-italic';\r\n  src: url('GoogleSans-Italic.ttf');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'google-medium';\r\n  src: url('GoogleSans-Medium.ttf');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'google-mediumItalic';\r\n  src: url('GoogleSans-MediumItalic.ttf');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'google-regular';\r\n  src: url('GoogleSans-Regular.ttf');\r\n}\r\n\r\ndiv.contenedor {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n.en-proceso {\r\n  color: #F24646;\r\n  font-family: 'google-bold';\r\n  font-size: 28px ;\r\n}\r\n\r\n.top-bar {\r\n  width: 100%;\r\n  top: 0;\r\n  margin: 0 auto;\r\n}\r\n\r\n.menu-bar {\r\n  width: 85%;\r\n  padding: 30px 0px;\r\n  margin: auto;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\nul{\r\n  list-style: none;\r\n}\r\n\r\nul.menu-list > li {\r\n  float: left;\r\n  padding: 0px 10px;\r\n  color: #ffffff;\r\n  font-family: 'google-regular';\r\n  transition: all .5s ease;\r\n}\r\n\r\nul.menu-list > li::after {\r\n  content: \"\";\r\n  background: #ffffff;\r\n  width: 0;\r\n  display: block;\r\n  height: 2px;\r\n  margin: auto;\r\n  margin-top: 2px;\r\n  transition: all .3s ease;\r\n}\r\n\r\nul.menu-list > li:hover::after {\r\n  width: 100%;\r\n  -webkit-animation: background 2s ease alternate infinite;\r\n          animation: background 2s ease alternate infinite;\r\n}\r\n\r\n.nombre {\r\n  font-family: 'google-medium';\r\n  color: #fff;\r\n  font-size: 18px;\r\n}\r\n\r\n.nombre:hover{\r\n  -webkit-animation: color 2s ease alternate infinite;\r\n          animation: color 2s ease alternate infinite;\r\n}\r\n\r\n.cursor {\r\n  position: absolute;\r\n  background: #F24646;\r\n  width: 10px;\r\n  height: 10px;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  border-radius: 50%;\r\n  pointer-events: none;\r\n  box-sizing: border-box;\r\n  transition: background-color .3s ease, width .3s ease, height .3s ease;\r\n}\r\n\r\n.cursor2 {\r\n  background: rgba(255, 255, 255, .5);\r\n  height: 40px;\r\n  width: 40px;\r\n}\r\n\r\n@-webkit-keyframes color {\r\n  0% {\r\n    color: #ffffff;\r\n  }\r\n\r\n  25% {\r\n    color: #F24646;\r\n  }\r\n\r\n  50% {\r\n    color: #2A79FF;\r\n  }\r\n\r\n  100% {\r\n    color: #00FFB2;\r\n  }\r\n}\r\n\r\n@keyframes color {\r\n  0% {\r\n    color: #ffffff;\r\n  }\r\n\r\n  25% {\r\n    color: #F24646;\r\n  }\r\n\r\n  50% {\r\n    color: #2A79FF;\r\n  }\r\n\r\n  100% {\r\n    color: #00FFB2;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes background  {\r\n  0% {\r\n    background: #ffffff;\r\n  }\r\n\r\n  25% {\r\n    background: #F24646;\r\n  }\r\n\r\n  50% {\r\n    background: #2A79FF;\r\n  }\r\n\r\n  100% {\r\n    background: #00FFB2;\r\n  }\r\n}\r\n\r\n@keyframes background  {\r\n  0% {\r\n    background: #ffffff;\r\n  }\r\n\r\n  25% {\r\n    background: #F24646;\r\n  }\r\n\r\n  50% {\r\n    background: #2A79FF;\r\n  }\r\n\r\n  100% {\r\n    background: #00FFB2;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes cursor-breathe {\r\n  from{\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n    background-color: rgba(255, 255, 255, .3);\r\n  }\r\n  to{\r\n    -webkit-transform: scale(1.5);\r\n            transform: scale(1.5);\r\n    background-color: rgba(255, 255, 255, .7);\r\n  }\r\n}\r\n\r\n@keyframes cursor-breathe {\r\n  from{\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n    background-color: rgba(255, 255, 255, .3);\r\n  }\r\n  to{\r\n    -webkit-transform: scale(1.5);\r\n            transform: scale(1.5);\r\n    background-color: rgba(255, 255, 255, .7);\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBMkI7RUFDM0IsZ0NBQWlEO0NBQ2xEOztBQUVEO0VBQ0UsaUNBQWlDO0VBQ2pDLHNDQUF1RDtDQUN4RDs7QUFFRDtFQUNFLDZCQUE2QjtFQUM3QixrQ0FBbUQ7Q0FDcEQ7O0FBRUQ7RUFDRSw2QkFBNkI7RUFDN0Isa0NBQW1EO0NBQ3BEOztBQUVEO0VBQ0UsbUNBQW1DO0VBQ25DLHdDQUF5RDtDQUMxRDs7QUFFRDtFQUNFLDhCQUE4QjtFQUM5QixtQ0FBb0Q7Q0FDckQ7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUtkLDBCQUEwQjtDQUMzQjs7QUFFRDtFQUNFLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLE9BQU87RUFDUCxlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsY0FBYztFQUNkLCtCQUErQjtDQUNoQzs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLDhCQUE4QjtFQUs5Qix5QkFBeUI7Q0FDMUI7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLFNBQVM7RUFDVCxlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFLaEIseUJBQXlCO0NBQzFCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLHlEQUFpRDtVQUFqRCxpREFBaUQ7Q0FDbEQ7O0FBRUQ7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLG9EQUE0QztVQUE1Qyw0Q0FBNEM7Q0FDN0M7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixhQUFhO0VBQ2IsU0FBUztFQUNULFVBQVU7RUFDVix5Q0FBaUM7VUFBakMsaUNBQWlDO0VBQ2pDLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsdUJBQXVCO0VBS3ZCLHVFQUF1RTtDQUN4RTs7QUFFRDtFQUNFLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsWUFBWTtDQUNiOztBQUVEO0VBQ0U7SUFDRSxlQUFlO0dBQ2hCOztFQUVEO0lBQ0UsZUFBZTtHQUNoQjs7RUFFRDtJQUNFLGVBQWU7R0FDaEI7O0VBRUQ7SUFDRSxlQUFlO0dBQ2hCO0NBQ0Y7O0FBaEJEO0VBQ0U7SUFDRSxlQUFlO0dBQ2hCOztFQUVEO0lBQ0UsZUFBZTtHQUNoQjs7RUFFRDtJQUNFLGVBQWU7R0FDaEI7O0VBRUQ7SUFDRSxlQUFlO0dBQ2hCO0NBQ0Y7O0FBRUQ7RUFDRTtJQUNFLG9CQUFvQjtHQUNyQjs7RUFFRDtJQUNFLG9CQUFvQjtHQUNyQjs7RUFFRDtJQUNFLG9CQUFvQjtHQUNyQjs7RUFFRDtJQUNFLG9CQUFvQjtHQUNyQjtDQUNGOztBQWhCRDtFQUNFO0lBQ0Usb0JBQW9CO0dBQ3JCOztFQUVEO0lBQ0Usb0JBQW9CO0dBQ3JCOztFQUVEO0lBQ0Usb0JBQW9CO0dBQ3JCOztFQUVEO0lBQ0Usb0JBQW9CO0dBQ3JCO0NBQ0Y7O0FBRUQ7RUFDRTtJQUNFLDRCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsMENBQTBDO0dBQzNDO0VBQ0Q7SUFDRSw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLDBDQUEwQztHQUMzQztDQUNGOztBQVREO0VBQ0U7SUFDRSw0QkFBb0I7WUFBcEIsb0JBQW9CO0lBQ3BCLDBDQUEwQztHQUMzQztFQUNEO0lBQ0UsOEJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QiwwQ0FBMEM7R0FDM0M7Q0FDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdnb29nbGUtYm9sZCc7XHJcbiAgc3JjOiB1cmwoXCIuLi9hc3NldHMvZ29vZ2xlL0dvb2dsZVNhbnMtQm9sZC50dGZcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnZ29vZ2xlLWJvbGRJdGFsaWMnO1xyXG4gIHNyYzogdXJsKFwiLi4vYXNzZXRzL2dvb2dsZS9Hb29nbGVTYW5zLUJvbGRJdGFsaWMudHRmXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ2dvb2dsZS1pdGFsaWMnO1xyXG4gIHNyYzogdXJsKFwiLi4vYXNzZXRzL2dvb2dsZS9Hb29nbGVTYW5zLUl0YWxpYy50dGZcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnZ29vZ2xlLW1lZGl1bSc7XHJcbiAgc3JjOiB1cmwoXCIuLi9hc3NldHMvZ29vZ2xlL0dvb2dsZVNhbnMtTWVkaXVtLnR0ZlwiKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdnb29nbGUtbWVkaXVtSXRhbGljJztcclxuICBzcmM6IHVybChcIi4uL2Fzc2V0cy9nb29nbGUvR29vZ2xlU2Fucy1NZWRpdW1JdGFsaWMudHRmXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ2dvb2dsZS1yZWd1bGFyJztcclxuICBzcmM6IHVybChcIi4uL2Fzc2V0cy9nb29nbGUvR29vZ2xlU2Fucy1SZWd1bGFyLnR0ZlwiKTtcclxufVxyXG5cclxuZGl2LmNvbnRlbmVkb3Ige1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uZW4tcHJvY2VzbyB7XHJcbiAgY29sb3I6ICNGMjQ2NDY7XHJcbiAgZm9udC1mYW1pbHk6ICdnb29nbGUtYm9sZCc7XHJcbiAgZm9udC1zaXplOiAyOHB4IDtcclxufVxyXG5cclxuLnRvcC1iYXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogMDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLm1lbnUtYmFyIHtcclxuICB3aWR0aDogODUlO1xyXG4gIHBhZGRpbmc6IDMwcHggMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxudWx7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxudWwubWVudS1saXN0ID4gbGkge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtZmFtaWx5OiAnZ29vZ2xlLXJlZ3VsYXInO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcclxufVxyXG5cclxudWwubWVudS1saXN0ID4gbGk6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgd2lkdGg6IDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcclxuICAtbXMtdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XHJcbn1cclxuXHJcbnVsLm1lbnUtbGlzdCA+IGxpOmhvdmVyOjphZnRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYW5pbWF0aW9uOiBiYWNrZ3JvdW5kIDJzIGVhc2UgYWx0ZXJuYXRlIGluZmluaXRlO1xyXG59XHJcblxyXG4ubm9tYnJlIHtcclxuICBmb250LWZhbWlseTogJ2dvb2dsZS1tZWRpdW0nO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLm5vbWJyZTpob3ZlcntcclxuICBhbmltYXRpb246IGNvbG9yIDJzIGVhc2UgYWx0ZXJuYXRlIGluZmluaXRlO1xyXG59XHJcblxyXG4uY3Vyc29yIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZDogI0YyNDY0NjtcclxuICB3aWR0aDogMTBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3MgZWFzZSwgd2lkdGggLjNzIGVhc2UsIGhlaWdodCAuM3MgZWFzZTtcclxuICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzIGVhc2UsIHdpZHRoIC4zcyBlYXNlLCBoZWlnaHQgLjNzIGVhc2U7XHJcbiAgLW1zLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzIGVhc2UsIHdpZHRoIC4zcyBlYXNlLCBoZWlnaHQgLjNzIGVhc2U7XHJcbiAgLW8tdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3MgZWFzZSwgd2lkdGggLjNzIGVhc2UsIGhlaWdodCAuM3MgZWFzZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcyBlYXNlLCB3aWR0aCAuM3MgZWFzZSwgaGVpZ2h0IC4zcyBlYXNlO1xyXG59XHJcblxyXG4uY3Vyc29yMiB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNSk7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGNvbG9yIHtcclxuICAwJSB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcblxyXG4gIDI1JSB7XHJcbiAgICBjb2xvcjogI0YyNDY0NjtcclxuICB9XHJcblxyXG4gIDUwJSB7XHJcbiAgICBjb2xvcjogIzJBNzlGRjtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgY29sb3I6ICMwMEZGQjI7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJhY2tncm91bmQgIHtcclxuICAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbiAgMjUlIHtcclxuICAgIGJhY2tncm91bmQ6ICNGMjQ2NDY7XHJcbiAgfVxyXG5cclxuICA1MCUge1xyXG4gICAgYmFja2dyb3VuZDogIzJBNzlGRjtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgYmFja2dyb3VuZDogIzAwRkZCMjtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgY3Vyc29yLWJyZWF0aGUge1xyXG4gIGZyb217XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMyk7XHJcbiAgfVxyXG4gIHRve1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNyk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contenedor\">\r\n  <div class=\"cursor\"></div>\r\n  <div class=\"top-bar\">\r\n    <div class=\"menu-bar\">\r\n      <p class=\"nombre\">\r\n        Jorge Sidgo Pimentel\r\n      </p>\r\n      <ul class=\"menu-list\">\r\n        <li>curriculum</li>\r\n        <li>proyectos</li>\r\n        <li>desarrollo</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'cvBuild';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jsidg\Desktop\Desk\cvBuild\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map