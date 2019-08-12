(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["project1-project1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/project1/blog/blog.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/project1/blog/blog.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  blog works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/project1/events/events.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/project1/events/events.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  events works\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/project1/find/find.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/project1/find/find.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div \nstyle=\"padding: 50px 0px; background-color: #172679; color: white; text-align: center;\" width=\"100%\" height=\"100px\">\n  <h1>Find your next event</h1>\n  <span style=\"color:rgb(221, 216, 211)\">197 events in your groups</span> . <span style=\"color:rgb(221, 216, 211)\">2679 events near you</span>\n</div>\n<!-- style=\"position: relative; top: 50px;\" -->\n<div \n  style=\"\n    padding: 50px 0px;\n    background-color: black;\n    color: white;\n    text-align: center;\"\n    width=\"70%\"\n    height=\"50px\"\n    align=\"justify\"\n  >\n  <input type=\"text\"> <span style=\"padding: 0px 10px\">within 10 miles of Washington, DC</span>\n  <a style=\"padding-right:10px\" routerLink=\"/project1/find\" >Groups</a>\n  <a style=\"padding-right:10px\" routerLink=\"events\" >Calendar</a>\n</div>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/project1/find/groups/groups.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/project1/find/groups/groups.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n  <h4>YOUR GROUPS</h4>\n  <li *ngFor=\"let group of groups\" style=\"list-style-type: none;\">\n      <a routerLink=\"/project1/{{group._id}}\">\n        <div style=\"background-image: url('https://secure.meetupstatic.com/photos/event/d/2/d/1/600_461693969.jpeg'); width: 200px; height: 200px;\">\n          <h3 style=\"color:white\">{{group.title}}</h3>\n          <span style=\"color:white\">{{ group.users.length }} Friends</span>\n        </div>\n      </a>\n    </li>\n</ul>\n\n<ul>\n  <h4>SUGGESTED GROUPS</h4>\n  <li *ngFor=\"let group of groups\" style=\"list-style-type: none;\">\n      <a routerLink=\"/project1/{{group._id}}\">\n        <div style=\"background-image: url('https://secure.meetupstatic.com/photos/event/d/2/d/1/600_461693969.jpeg'); width: 200px; height: 200px;\">\n          <h3 style=\"color:white\">{{group.title}}</h3>\n          <span style=\"color:white\">{{ group.users.length }} Friends</span>\n        </div>\n      </a>\n    </li>\n</ul>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/project1/group-shell/event-page/event-page.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/project1/group-shell/event-page/event-page.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  This is an event\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/project1/group-shell/group-page/group-page.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/project1/group-shell/group-page/group-page.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding: 20px;display: flex\">\n  <div style=\"border-radius:20px; \n    background-image:url('https://secure.meetupstatic.com/photos/event/d/2/d/1/600_461693969.jpeg'); width:650px; height: 350px\">\n  </div>\n  <div style=\"padding-left: 40px\">\n    <h1>{{groupAPI.title}}</h1> <br>\n    <span>{{groupAPI.location}} </span> <br>\n    <span>{{groupAPI.users.length}} . Public group</span> <br>\n    <span>{{groupAPI.users[0].email}}</span> <br>\n    <span style=\"font-weight: bold\">Share on social media</span> <br>\n  </div>\n</div>\n<nav>\n  <ul style='list-style-type: none;display: flex'>\n    <li style=\"padding-right:10px\">\n      <a routerLink=\"about\">About</a>  \n    </li>\n    <li style=\"padding-right:10px\">\n      <a routerLink=\"events\">Events</a>  \n    </li>\n    <li style=\"padding-right:10px\">\n      <a routerLink=\"members\">Members</a>\n    </li>\n    <li style=\"padding-right:10px\">\n      <a routerLink=\"photos\">Photos</a>\n    </li>\n    <li style=\"padding-right:10px\">\n      <a routerLink=\"discussions\">Discussions</a>\n    </li>\n    <li style=\"padding-right:10px\">\n      <a routerLink=\"more\">More</a>\n    </li>\n    <li style=\"padding-right:10px\">\n      <a routerLink=\"more\" style=\"padding-right:10px\">Join this group</a>\n      <a routerLink=\"more\" style=\"padding-right:10px\">You're a member</a>\n    </li>\n    <li style=\"padding-right:10px\">\n      <a routerLink=\"schedule\" style=\"padding-right:10px\">Create event</a>\n    </li>\n  </ul>\n\n\n</nav>\n<div style='display: flex'>\n  <div>\n      <h3>What we're about</h3>\n      <p>\n        {{groupAPI.description}}\n      </p>\n      \n      <h3>Upcoming events ({{events.length > 5 ? '5+' : events.length}})</h3>\n      \n      <div>\n        <ul style='list-style-type: none;'>\n          <li *ngFor=\"let event of events\">\n            <a routerLink=\"events/{{event.name}}\">\n              {{event.name}}\n            </a>\n          </li>\n        </ul>\n      </div>\n      \n      <h3>Photos {{events.length}}</h3>\n      \n      <h3>Discussion {{events.length}}</h3>\n  </div>\n  <div style=\"padding-left: 50px\">\n    <h4>Organizers</h4>\n      <ul style='list-style-type: none;'>\n        <li style='display: flex'>\n          <h4>{{groupAPI.users[0].email}}\n            \n          <span style=\"font-weight: normal; font-style: normal\">{{groupAPI.users.length > 1 ? ' and ' : ''}}</span>\n\n          {{groupAPI.users.length < 2 \n            ? '' \n            : (groupAPI.users.length == 2 \n                ? (groupAPI.users.length-1) + ' other' \n                : (groupAPI.users.length-1) + ' others')}}\n            </h4>\n        </li>\n      </ul>\n    <h4>Members ( {{groupAPI.users.length}} )</h4>\n      <ul style='list-style-type: none;'>\n        <li *ngFor=\"let member of groupAPI.users; let i = index\">\n          <ng-template [ngIf]=\"i<15\">\n            {{member.email}}\n          </ng-template>\n        </li>\n      </ul>\n  </div>\n</div>\n\n<h4>Find us also at</h4>\n\n<h4>Related topics</h4>\n\n<hr>\n\n<h3>Find more events in {{groupAPI.interests[0]}}</h3>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/project1/group-shell/group-shell.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/project1/group-shell/group-shell.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/project1/group-shell/schedule/schedule.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/project1/group-shell/schedule/schedule.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  Create an event\n</h1>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/project1/messages/messages.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/project1/messages/messages.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  messages works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/project1/project1/project1.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/project1/project1/project1.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav style=\"border:2px solid black\">\n  <ul style=\"display:flex;list-style-type: none;\">\n    <li>\n        <a style=\"padding-right:10px\" routerLink=\"/project1/find/events\">Getup</a>                         \n    </li>\n    <li>\n        <a style=\"padding-right:10px\" routerLink=\"/project1/start\">Start a new group</a>                         \n    </li>\n    <li>\n        <a style=\"padding-right:10px\" routerLink=\"/project1/find/events\">Explore</a>\n    </li>\n    <li>\n        <a style=\"padding-right:10px\" routerLink=\"/project1/messages\">Messages</a>\n    </li>\n    <li>\n        <a style=\"padding-right:10px\">Notifications</a>\n    </li>\n    <ul style=\"display:flex\" *ngIf=\"_authService.loggedIn()\">\n        <div>\n            <a routerLink=\"/project1/find\">See all your groups ></a>\n        </div>\n        <ul style=\"list-style-type: none;\">\n            <li >\n                <img *ngIf=\"_authService.loggedIn()\"\n            width=\"50\" alt=\"Portfolio Image\" style=\"border-radius: 50px\"\n            src=\"data:image/jpeg;base64,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\"\n                >\n            </li>\n            <li>\n                Profile\n            </li>\n            <li>\n                Settings\n            </li>\n            <li>\n                <a style=\"padding-right:10px\" *ngIf=\"_authService.loggedIn()\" routerLink=\"/logout\" (click)=\"_authService.logoutUser()\">Logout</a>                               \n            </li>\n        </ul>\n    </ul>\n  </ul>\n</nav>\n\n<router-outlet></router-outlet>\n\n\n<div style=\"background-color: black; color: white; width: 100%; height: 100px\">\n    footer\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/project1/start-group/start-group.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/project1/start-group/start-group.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"startForm\" (ngSubmit)=\"onStartFormSubmit()\">\n  Location: <input type=\"text\" formControlName=\"location\">\n  Interests: <input type=\"text\" formControlName=\"interests\">\n  Name: <input type=\"text\" formControlName=\"name\">\n  Description: <input type=\"text\" formControlName=\"description\">\n  Agreement: <input type=\"text\" formControlName=\"agreement\">\n  <button [disabled]=\"!startForm.valid\">Submit</button>\n</form>\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/project1/tasks/create-task/create-task.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/project1/tasks/create-task/create-task.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" (submit)=\"onCreateSubmit()\">\n\n  <!-- Username Input -->\n  <div class=\"form-group\" style=\"display:flex;\">\n    <!-- <input \n      id=\"checkbox\"  \n      type=\"checkbox\" name=\"completed\" autocomplete=\"off\" placeholder=\"*Username\" formControlName=\"completed\"\n      />   -->\n    <input #title \n      id=\"title\" class=\"focus\" autofocus type=\"text\" name=\"title\" autocomplete=\"off\" placeholder=\"Task title\" formControlName=\"title\"/>\n  </div>\n\n  <div class=\"form-group\">\n        <input id=\"description\" class=\"focus\" type=\"text\" name=\"description\" autocomplete=\"off\" placeholder=\"Add details\" formControlName=\"description\"/>\n  </div>\n\n    <div class=\"form-group\">\n        \n    </div>  \n  <!-- Submit Input -->\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" />\n\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/project1/tasks/show-task/show-task.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/project1/tasks/show-task/show-task.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  show-task works!\n</p>\n\n<p style=\"margin-bottom: 300px\">{{task | json}}</p>\n\n{{errorMsg}}"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/project1/tasks/tasks.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/project1/tasks/tasks.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div \n  style=\"\n    display:flex;\n    margin-bottom: 15px;\n    \">\n    <ng-container *ngIf=\"!addForm\">\n      <div class=\"hover\"\n      (click)=\"addFormToggle()\" \n      style=\"\n        padding:20px;\n        display:flex; \n        border-radius: 20px;\n        margin: 0px 16px;\n        cursor:pointer;\">\n        <span><a\n          style=\"\n            cursor: context-menu;\n            text-decoration: none;\n            margin: 0px 10px;\n            color: #4285f4;\n          \">+</a></span>\n        <div>Add a task</div>\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"hideAddForm\">\n      <div class=\"hover\"\n      (click)=\"hideAdd()\" \n      style=\"\n        padding:20px;\n        display:flex; \n        border-radius: 20px;\n        margin: 0px 16px;\n        cursor:pointer;\">\n        <span><a\n          style=\"\n            cursor: context-menu;\n            text-decoration: none;\n            margin: 0px 10px;\n            color: #4285f4;\n          \">-</a></span>\n        <div>Hide add form.</div>\n      </div>\n    </ng-container>\n    <div class=\"elipses\"\n      style=\"border-radius: 50%;\n      width:40px;\n      height:auto;\n\n      \">\n        <img width=\"20px\" height=\"20px\" src=\"https://static.thenounproject.com/png/100441-200.png\" alt=\"\"\n        style=\"\n          padding: 17px 0 0 10px;\n        \">\n    </div>\n  </div>\n\n<ng-container *ngIf=\"addForm\">\n  <app-create-task (taskAdded)='addTask($event)'></app-create-task>\n</ng-container>\n\n<button (click)=\"getAllTasks()\">{{ !allTasks ? 'Show all tasks' : 'Hide all tasks' }}</button>\n<ng-container *ngIf=\"allTasks\">\n  <br><br>\n  <button (click)=\"reverseTasks()\" >{{ reverse ? 'Sort ascending' : 'Sort descending' }}</button>\n  <p *ngIf=\"list[list.length -1].style\" [class.added]=\"list[list.length -1].style\">\n    You just added: {{ list[list.length -1].title}}\n  </p>\n\n  <div>\n      <ul >\n        <li *ngFor=\"let task of list; let i = index\"\n          style=\"\n          list-style-type: none;\n        \">\n          <div style=\"display:flex\">\n            <div class=\"form-group\" style=\"padding:16px\">\n              <input \n              (click)=\"completedToggle(task._id, $event, i)\" \n              style=\"padding: 10px 0 10px 0\"\n              type=\"checkbox\" \n              name=\"completed\" \n              autocomplete=\"off\" \n              [checked]=\"task.completed\"\n              />\n            </div>  \n            <div\n              (click)=\"hovering(i)\"\n              [class.added]=\"task.style\"\n              [class.updated]=\"task.style\"\n              style=\"\n                display:flex;\n                border-bottom:2px solid #78788c;\n              \">\n              <p>{{ reverse ? list.length - i : i+1 }}) {{task.title}} - {{task.description}}</p>\n              <span style=\"margin: 16px; cursor:pointer;\" (click)=\"deleteTask(task._id)\">X</span>\n              <span \n                style=\"margin: 16px; cursor:pointer;\" (click)=\"editTask(task._id, i)\"\n                \n                >\n                <img width=\"20px\" height=\"20px\" src=\"http://clipart-library.com/images/kiKBe9g4T.png\" alt=\"edit\"></span>\n                <a [routerLink]=\"task._id\">{{task._id}}</a>\n                <a routerLink=\"5d128b28a277116def08b69b\">Fake id.</a>\n            </div>\n          </div>\n            <div *ngIf=\" selectedTask == task._id \">\n              <form [formGroup]=\"form\" (submit)=\"onUpdateSubmit(task._id)\">\n                  <h4>{{task._id}}</h4>\n                  <!-- Title Input -->\n                  <div class=\"form-group\">\n                    <label for=\"title\">Title</label>\n                    \n                      <input type=\"text\" name=\"title\" autocomplete=\"off\" placeholder=\"*Username\" formControlName=\"title\" value=\"{{task.title}}\"\n                      />\n                  </div>\n              \n                  <div class=\"form-group\">\n                      <label for=\"description\">Description</label>\n                      \n                        <input type=\"text\" name=\"description\" autocomplete=\"off\" placeholder=\"*Username\" formControlName=\"description\" value=\"{{task.description}}\"\n                        />\n                    </div>\n              \n                    <div class=\"form-group\">\n                        <label for=\"completed\">Completed</label>\n                        \n                          <input type=\"text\" name=\"completed\" autocomplete=\"off\" placeholder=\"*Username\" formControlName=\"completed\" value=\"{{task.completed}}\"\n                          />\n                        </div>  \n                  <!-- Submit Input -->\n                  <div style=\"display:flex\">\n                    <input style=\"margin: 16px; cursor:pointer;\" type=\"submit\" value=\"Submit\" />\n                    <button style=\"margin: 16px; cursor:pointer;\" (click)=\"selectedTask = null\" >Cancel</button>         \n                  </div>\n                </form>\n              </div>\n        </li>\n      </ul>\n  </div>\n</ng-container>\n\n<!-- 105 -->\n\n<!-- (keyup)=\"getTaskById($event)\"  -->\n<!-- <input \n  type=\"text\" style=\"border: 1px solid black\" #selectedId\n  #searchBox (keyup)=\"search(searchBox.value)\"\n>\n{{tasks$ | async | json }}\n<ul class=\"search-result\">\n  <li *ngFor=\"let hero of tasks$ | async\" >\n    <a routerLink=\"/detail/{{hero.id}}\">\n      what\n      {{hero | json}}\n    </a>\n  </li>\n</ul> -->\n\n<!-- <button >Get task by id.</button> -->\n\n\n\n<ng-container *ngIf=\"thirdTask\">\n    <div>\n      <li>\n          {{thirdTask.tasks.title}} - {{thirdTask.tasks.description}}\n      </li>\n    </div>\n</ng-container>\n\n<!-- 115 -->\n\n<ng-template #missingMessage>\n    <h2 style=\"padding: 20px 0 0 30px;\">Too few tasks...</h2>\n</ng-template>\n\n\n<div *ngIf=\"list[2]; else missingMessage\" style=\"margin-bottom: 30px\">\n  <div style=\"padding: 20px 0 0 30px;\"> \n    <h2>Task three:</h2>\n  </div>  \n  <li>\n      {{list[2].title}} - {{list[2].description}}\n  </li>\n</div>\n\n<!-- <div style=\"padding-top: 20px;\">\n  <a *ngFor=\"let section of sections; let i = index\"\n  style=\"padding-left: 20px;\"\n  >\n    <span \n      (click)=\"onSelect(section, i)\"\n      class=\"btn btn-primary\">{{section.title}}</span>\n  </a>\n</div>\n    \n<app-objectives\n  *ngIf=\"selectedSection; else infoText\"\n  [obj]=\"selectedSection\"\n  (addedObjective)=\"pushObjective($event, i)\"></app-objectives>\n<ng-template #infoText>\n  <p style=\"padding: 20px 0 0 30px;\">Please select a section...</p>\n</ng-template> -->"

/***/ }),

/***/ "./src/app/project1/blog/blog.component.css":
/*!**************************************************!*\
  !*** ./src/app/project1/blog/blog.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QxL2Jsb2cvYmxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/project1/blog/blog.component.ts":
/*!*************************************************!*\
  !*** ./src/app/project1/blog/blog.component.ts ***!
  \*************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BlogComponent = class BlogComponent {
    constructor() { }
    ngOnInit() {
    }
};
BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-blog',
        template: __webpack_require__(/*! raw-loader!./blog.component.html */ "./node_modules/raw-loader/index.js!./src/app/project1/blog/blog.component.html"),
        styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/project1/blog/blog.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BlogComponent);



/***/ }),

/***/ "./src/app/project1/events/events.component.css":
/*!******************************************************!*\
  !*** ./src/app/project1/events/events.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QxL2V2ZW50cy9ldmVudHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/project1/events/events.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/project1/events/events.component.ts ***!
  \*****************************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EventsComponent = class EventsComponent {
    constructor() { }
    ngOnInit() {
    }
};
EventsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-events',
        template: __webpack_require__(/*! raw-loader!./events.component.html */ "./node_modules/raw-loader/index.js!./src/app/project1/events/events.component.html"),
        styles: [__webpack_require__(/*! ./events.component.css */ "./src/app/project1/events/events.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EventsComponent);



/***/ }),

/***/ "./src/app/project1/find/find.component.css":
/*!**************************************************!*\
  !*** ./src/app/project1/find/find.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QxL2ZpbmQvZmluZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/project1/find/find.component.ts":
/*!*************************************************!*\
  !*** ./src/app/project1/find/find.component.ts ***!
  \*************************************************/
/*! exports provided: FindComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindComponent", function() { return FindComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FindComponent = class FindComponent {
    constructor() {
        this.groups = true;
    }
    showGroups() {
        this.groups = true;
    }
    showCalendar() {
        this.groups = false;
    }
};
FindComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-find',
        template: __webpack_require__(/*! raw-loader!./find.component.html */ "./node_modules/raw-loader/index.js!./src/app/project1/find/find.component.html"),
        styles: [__webpack_require__(/*! ./find.component.css */ "./src/app/project1/find/find.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FindComponent);



/***/ }),

/***/ "./src/app/project1/find/groups/groups.component.css":
/*!***********************************************************!*\
  !*** ./src/app/project1/find/groups/groups.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QxL2ZpbmQvZ3JvdXBzL2dyb3Vwcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/project1/find/groups/groups.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/project1/find/groups/groups.component.ts ***!
  \**********************************************************/
/*! exports provided: GroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsComponent", function() { return GroupsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tasks_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tasks-api.service */ "./src/app/project1/tasks-api.service.ts");



let GroupsComponent = class GroupsComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.service.getGroups().subscribe(res => {
            this.groups = res.groups;
        }, err => console.log(err));
    }
};
GroupsComponent.ctorParameters = () => [
    { type: _tasks_api_service__WEBPACK_IMPORTED_MODULE_2__["TasksApiService"] }
];
GroupsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-groups',
        template: __webpack_require__(/*! raw-loader!./groups.component.html */ "./node_modules/raw-loader/index.js!./src/app/project1/find/groups/groups.component.html"),
        styles: [__webpack_require__(/*! ./groups.component.css */ "./src/app/project1/find/groups/groups.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tasks_api_service__WEBPACK_IMPORTED_MODULE_2__["TasksApiService"]])
], GroupsComponent);



/***/ }),

/***/ "./src/app/project1/group-shell/event-page/event-page.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/project1/group-shell/event-page/event-page.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QxL2dyb3VwLXNoZWxsL2V2ZW50LXBhZ2UvZXZlbnQtcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/project1/group-shell/event-page/event-page.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/project1/group-shell/event-page/event-page.component.ts ***!
  \*************************************************************************/
/*! exports provided: EventPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPageComponent", function() { return EventPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EventPageComponent = class EventPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
EventPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-event-page',
        template: __webpack_require__(/*! raw-loader!./event-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/project1/group-shell/event-page/event-page.component.html"),
        styles: [__webpack_require__(/*! ./event-page.component.css */ "./src/app/project1/group-shell/event-page/event-page.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EventPageComponent);



/***/ }),

/***/ "./src/app/project1/group-shell/group-page/group-page.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/project1/group-shell/group-page/group-page.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QxL2dyb3VwLXNoZWxsL2dyb3VwLXBhZ2UvZ3JvdXAtcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/project1/group-shell/group-page/group-page.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/project1/group-shell/group-page/group-page.component.ts ***!
  \*************************************************************************/
/*! exports provided: GroupPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupPageComponent", function() { return GroupPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tasks_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tasks-api.service */ "./src/app/project1/tasks-api.service.ts");




let GroupPageComponent = class GroupPageComponent {
    constructor(route, service) {
        this.route = route;
        this.service = service;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(observer => {
            this.groupId = observer.get('id');
        });
        this.service.getGroupById(this.groupId).subscribe(res => {
            this.groupAPI = res.groups;
            this.events = this.groupAPI.events;
        });
    }
};
GroupPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _tasks_api_service__WEBPACK_IMPORTED_MODULE_3__["TasksApiService"] }
];
GroupPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-group-page',
        template: __webpack_require__(/*! raw-loader!./group-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/project1/group-shell/group-page/group-page.component.html"),
        styles: [__webpack_require__(/*! ./group-page.component.css */ "./src/app/project1/group-shell/group-page/group-page.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _tasks_api_service__WEBPACK_IMPORTED_MODULE_3__["TasksApiService"]])
], GroupPageComponent);



/***/ }),

/***/ "./src/app/project1/group-shell/group-shell.component.css":
/*!****************************************************************!*\
  !*** ./src/app/project1/group-shell/group-shell.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QxL2dyb3VwLXNoZWxsL2dyb3VwLXNoZWxsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/project1/group-shell/group-shell.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/project1/group-shell/group-shell.component.ts ***!
  \***************************************************************/
/*! exports provided: GroupShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupShellComponent", function() { return GroupShellComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GroupShellComponent = class GroupShellComponent {
    constructor() { }
    ngOnInit() {
    }
};
GroupShellComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-group-shell',
        template: __webpack_require__(/*! raw-loader!./group-shell.component.html */ "./node_modules/raw-loader/index.js!./src/app/project1/group-shell/group-shell.component.html"),
        styles: [__webpack_require__(/*! ./group-shell.component.css */ "./src/app/project1/group-shell/group-shell.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GroupShellComponent);



/***/ }),

/***/ "./src/app/project1/group-shell/schedule/schedule.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/project1/group-shell/schedule/schedule.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QxL2dyb3VwLXNoZWxsL3NjaGVkdWxlL3NjaGVkdWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/project1/group-shell/schedule/schedule.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/project1/group-shell/schedule/schedule.component.ts ***!
  \*********************************************************************/
/*! exports provided: ScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleComponent", function() { return ScheduleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ScheduleComponent = class ScheduleComponent {
    constructor() { }
    ngOnInit() {
    }
};
ScheduleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-schedule',
        template: __webpack_require__(/*! raw-loader!./schedule.component.html */ "./node_modules/raw-loader/index.js!./src/app/project1/group-shell/schedule/schedule.component.html"),
        styles: [__webpack_require__(/*! ./schedule.component.css */ "./src/app/project1/group-shell/schedule/schedule.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ScheduleComponent);



/***/ }),

/***/ "./src/app/project1/messages/messages.component.css":
/*!**********************************************************!*\
  !*** ./src/app/project1/messages/messages.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QxL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/project1/messages/messages.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/project1/messages/messages.component.ts ***!
  \*********************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MessagesComponent = class MessagesComponent {
    constructor() { }
    ngOnInit() {
    }
};
MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-messages',
        template: __webpack_require__(/*! raw-loader!./messages.component.html */ "./node_modules/raw-loader/index.js!./src/app/project1/messages/messages.component.html"),
        styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/project1/messages/messages.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MessagesComponent);



/***/ }),

/***/ "./src/app/project1/project1-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/project1/project1-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: Project1RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project1RoutingModule", function() { return Project1RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _project1_project1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project1/project1.component */ "./src/app/project1/project1/project1.component.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/project1/tasks/tasks.component.ts");
/* harmony import */ var _project1_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project1.routes */ "./src/app/project1/project1.routes.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/project1/blog/blog.component.ts");
/* harmony import */ var _tasks_show_task_show_task_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tasks/show-task/show-task.component */ "./src/app/project1/tasks/show-task/show-task.component.ts");
/* harmony import */ var _task_details_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./task-details.guard */ "./src/app/project1/task-details.guard.ts");
/* harmony import */ var _find_find_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./find/find.component */ "./src/app/project1/find/find.component.ts");
/* harmony import */ var _start_group_start_group_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./start-group/start-group.component */ "./src/app/project1/start-group/start-group.component.ts");
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./events/events.component */ "./src/app/project1/events/events.component.ts");
/* harmony import */ var _find_groups_groups_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./find/groups/groups.component */ "./src/app/project1/find/groups/groups.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/project1/messages/messages.component.ts");
/* harmony import */ var _group_shell_group_shell_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./group-shell/group-shell.component */ "./src/app/project1/group-shell/group-shell.component.ts");
/* harmony import */ var _group_shell_group_page_group_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./group-shell/group-page/group-page.component */ "./src/app/project1/group-shell/group-page/group-page.component.ts");
/* harmony import */ var _group_shell_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./group-shell/schedule/schedule.component */ "./src/app/project1/group-shell/schedule/schedule.component.ts");
/* harmony import */ var _group_shell_event_page_event_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./group-shell/event-page/event-page.component */ "./src/app/project1/group-shell/event-page/event-page.component.ts");


















// import { ShowTaskComponent } from './show-task/show-task.component';
// import { EditTaskComponent } from './edit-task/edit-task.component';
// import { CreateTaskComponent } from './create-task/create-task.component';
const routes = [
    {
        path: '', redirectTo: 'find', pathMatch: 'full'
    },
    { path: '', component: _project1_project1_component__WEBPACK_IMPORTED_MODULE_3__["Project1Component"], children: [
            { path: _project1_routes__WEBPACK_IMPORTED_MODULE_5__["project1RoutesNames"].blog, component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_6__["BlogComponent"] },
            { path: _project1_routes__WEBPACK_IMPORTED_MODULE_5__["project1RoutesNames"].tasks, component: _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_4__["TasksComponent"] },
            {
                path: ':id',
                component: _group_shell_group_shell_component__WEBPACK_IMPORTED_MODULE_14__["GroupShellComponent"],
                children: [
                    { path: '', component: _group_shell_group_page_group_page_component__WEBPACK_IMPORTED_MODULE_15__["GroupPageComponent"] },
                    { path: 'schedule', component: _group_shell_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_16__["ScheduleComponent"] },
                    { path: 'events/:id', component: _group_shell_event_page_event_page_component__WEBPACK_IMPORTED_MODULE_17__["EventPageComponent"] }
                ]
            },
            {
                path: 'tasks/:id', component: _tasks_show_task_show_task_component__WEBPACK_IMPORTED_MODULE_7__["ShowTaskComponent"],
                canActivate: [_task_details_guard__WEBPACK_IMPORTED_MODULE_8__["TaskDetailsGuard"]]
            },
            {
                path: 'find', component: _find_find_component__WEBPACK_IMPORTED_MODULE_9__["FindComponent"],
                children: [
                    {
                        path: '',
                        component: _find_groups_groups_component__WEBPACK_IMPORTED_MODULE_12__["GroupsComponent"]
                    },
                    {
                        path: 'events',
                        component: _events_events_component__WEBPACK_IMPORTED_MODULE_11__["EventsComponent"]
                    }
                ]
            },
            {
                path: 'messages',
                component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_13__["MessagesComponent"]
            },
            {
                path: 'start',
                component: _start_group_start_group_component__WEBPACK_IMPORTED_MODULE_10__["StartGroupComponent"]
            }
        ] },
];
let Project1RoutingModule = class Project1RoutingModule {
};
Project1RoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Project1RoutingModule);



/***/ }),

/***/ "./src/app/project1/project1.module.ts":
/*!*********************************************!*\
  !*** ./src/app/project1/project1.module.ts ***!
  \*********************************************/
/*! exports provided: Project1Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project1Module", function() { return Project1Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _project1_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project1-routing.module */ "./src/app/project1/project1-routing.module.ts");
/* harmony import */ var _project1_project1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project1/project1.component */ "./src/app/project1/project1/project1.component.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/project1/tasks/tasks.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/project1/blog/blog.component.ts");
/* harmony import */ var _tasks_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tasks/create-task/create-task.component */ "./src/app/project1/tasks/create-task/create-task.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tasks_show_task_show_task_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tasks/show-task/show-task.component */ "./src/app/project1/tasks/show-task/show-task.component.ts");
/* harmony import */ var _task_details_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./task-details.guard */ "./src/app/project1/task-details.guard.ts");
/* harmony import */ var _find_find_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./find/find.component */ "./src/app/project1/find/find.component.ts");
/* harmony import */ var _start_group_start_group_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./start-group/start-group.component */ "./src/app/project1/start-group/start-group.component.ts");
/* harmony import */ var _group_shell_group_page_group_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./group-shell/group-page/group-page.component */ "./src/app/project1/group-shell/group-page/group-page.component.ts");
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./events/events.component */ "./src/app/project1/events/events.component.ts");
/* harmony import */ var _find_groups_groups_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./find/groups/groups.component */ "./src/app/project1/find/groups/groups.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/project1/messages/messages.component.ts");
/* harmony import */ var _group_shell_event_page_event_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./group-shell/event-page/event-page.component */ "./src/app/project1/group-shell/event-page/event-page.component.ts");
/* harmony import */ var _group_shell_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./group-shell/schedule/schedule.component */ "./src/app/project1/group-shell/schedule/schedule.component.ts");
/* harmony import */ var _group_shell_group_shell_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./group-shell/group-shell.component */ "./src/app/project1/group-shell/group-shell.component.ts");




















let Project1Module = class Project1Module {
};
Project1Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _project1_project1_component__WEBPACK_IMPORTED_MODULE_4__["Project1Component"],
            _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_5__["TasksComponent"],
            _blog_blog_component__WEBPACK_IMPORTED_MODULE_6__["BlogComponent"],
            _tasks_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_7__["CreateTaskComponent"],
            _tasks_show_task_show_task_component__WEBPACK_IMPORTED_MODULE_9__["ShowTaskComponent"],
            _find_find_component__WEBPACK_IMPORTED_MODULE_11__["FindComponent"],
            _start_group_start_group_component__WEBPACK_IMPORTED_MODULE_12__["StartGroupComponent"],
            _group_shell_group_page_group_page_component__WEBPACK_IMPORTED_MODULE_13__["GroupPageComponent"],
            _events_events_component__WEBPACK_IMPORTED_MODULE_14__["EventsComponent"],
            _find_groups_groups_component__WEBPACK_IMPORTED_MODULE_15__["GroupsComponent"],
            _messages_messages_component__WEBPACK_IMPORTED_MODULE_16__["MessagesComponent"],
            _group_shell_event_page_event_page_component__WEBPACK_IMPORTED_MODULE_17__["EventPageComponent"],
            _group_shell_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_18__["ScheduleComponent"],
            _group_shell_group_shell_component__WEBPACK_IMPORTED_MODULE_19__["GroupShellComponent"]
        ],
        imports: [
            _project1_routing_module__WEBPACK_IMPORTED_MODULE_3__["Project1RoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
        ],
        providers: [_task_details_guard__WEBPACK_IMPORTED_MODULE_10__["TaskDetailsGuard"]]
    })
], Project1Module);



/***/ }),

/***/ "./src/app/project1/project1.routes.ts":
/*!*********************************************!*\
  !*** ./src/app/project1/project1.routes.ts ***!
  \*********************************************/
/*! exports provided: project1RoutesNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "project1RoutesNames", function() { return project1RoutesNames; });
var tasks = { linkName: 'Tasks', url: 'tasks' };
var blog = { linkName: 'Discussion', url: 'discussion' };
const project1RoutesNames = {
    linksArray: [
        { linkName: tasks.linkName, url: tasks.url },
        { linkName: blog.linkName, url: blog.url },
    ],
    tasks: tasks.url,
    blog: blog.url,
};


/***/ }),

/***/ "./src/app/project1/project1/project1.component.css":
/*!**********************************************************!*\
  !*** ./src/app/project1/project1/project1.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QxL3Byb2plY3QxL3Byb2plY3QxLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/project1/project1/project1.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/project1/project1/project1.component.ts ***!
  \*********************************************************/
/*! exports provided: Project1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project1Component", function() { return Project1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");



let Project1Component = class Project1Component {
    constructor(_authService) {
        this._authService = _authService;
        this.title = 'MEAN';
        this.blogs = { linkName: 'Discussion', url: 'discussion' };
        this.meetups = { linkName: 'Meetup', url: 'meetup' };
        this.linksArray = [
            { linkName: this.blogs.linkName, url: this.blogs.url },
            { linkName: this.meetups.linkName, url: this.meetups.url },
        ];
        this.routes = this.linksArray;
        this.blog = this.blogs.url;
        this.meetup = this.meetups.url;
    }
};
Project1Component.ctorParameters = () => [
    { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
Project1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project1',
        template: __webpack_require__(/*! raw-loader!./project1.component.html */ "./node_modules/raw-loader/index.js!./src/app/project1/project1/project1.component.html"),
        styles: [__webpack_require__(/*! ./project1.component.css */ "./src/app/project1/project1/project1.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], Project1Component);



/***/ }),

/***/ "./src/app/project1/start-group/start-group.component.css":
/*!****************************************************************!*\
  !*** ./src/app/project1/start-group/start-group.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QxL3N0YXJ0LWdyb3VwL3N0YXJ0LWdyb3VwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/project1/start-group/start-group.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/project1/start-group/start-group.component.ts ***!
  \***************************************************************/
/*! exports provided: StartGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartGroupComponent", function() { return StartGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let StartGroupComponent = class StartGroupComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.startForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            interests: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            agreement: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Agree'),
        });
    }
    onStartFormSubmit() {
        let group = {
            location: this.startForm.value.location,
            interests: this.startForm.value.interests,
            name: this.startForm.value.name,
            description: this.startForm.value.description,
            agreement: this.startForm.value.agreement,
        };
        this.http.post('/api/groups/', group).subscribe(res => {
            if (res.message == 'Success') {
                console.log(res);
                this.router.navigate(['/project1/find']);
            }
            else {
                this.router.navigate(['/project1/start']);
            }
        }, err => console.log(err));
    }
    ngOnInit() {
    }
};
StartGroupComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
StartGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-start-group',
        template: __webpack_require__(/*! raw-loader!./start-group.component.html */ "./node_modules/raw-loader/index.js!./src/app/project1/start-group/start-group.component.html"),
        styles: [__webpack_require__(/*! ./start-group.component.css */ "./src/app/project1/start-group/start-group.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], StartGroupComponent);



/***/ }),

/***/ "./src/app/project1/task-details.guard.ts":
/*!************************************************!*\
  !*** ./src/app/project1/task-details.guard.ts ***!
  \************************************************/
/*! exports provided: TaskDetailsGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDetailsGuard", function() { return TaskDetailsGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tasks_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks-api.service */ "./src/app/project1/tasks-api.service.ts");




let TaskDetailsGuard = class TaskDetailsGuard {
    constructor(tasksService, router) {
        this.tasksService = tasksService;
        this.router = router;
    }
    canActivate(route, state) {
        const taskExists = !!this.tasksService.getById(route.paramMap.get('id'));
        if (!taskExists) {
            return false;
        }
        else {
            return true;
        }
    }
};
TaskDetailsGuard.ctorParameters = () => [
    { type: _tasks_api_service__WEBPACK_IMPORTED_MODULE_3__["TasksApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
TaskDetailsGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tasks_api_service__WEBPACK_IMPORTED_MODULE_3__["TasksApiService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], TaskDetailsGuard);



/***/ }),

/***/ "./src/app/project1/tasks/create-task/create-task.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/project1/tasks/create-task/create-task.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".focus:focus{\n    border-bottom:2px solid rgb(65, 33, 246);\n}\n\n.focus{\n    border:none;\n    outline: none; \n    width: 100%;\n    margin-bottom: 10px;\n}\n\n#description{\n    width: 85%;\n    margin-left: 15%;\n}\n\n.focus:hover{\n    background-color:#f1f3f4;\n}\n\n#title{\n    width: 85%;\n    margin-left: 15%;\n}\n\n#checkbox{\n    width: 15%;\n    outline: none;\n    margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdDEvdGFza3MvY3JlYXRlLXRhc2svY3JlYXRlLXRhc2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0MS90YXNrcy9jcmVhdGUtdGFzay9jcmVhdGUtdGFzay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvY3VzOmZvY3Vze1xuICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkIHJnYig2NSwgMzMsIDI0Nik7XG59XG5cbi5mb2N1c3tcbiAgICBib3JkZXI6bm9uZTtcbiAgICBvdXRsaW5lOiBub25lOyBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4jZGVzY3JpcHRpb257XG4gICAgd2lkdGg6IDg1JTtcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xufVxuXG4uZm9jdXM6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjFmM2Y0O1xufVxuXG4jdGl0bGV7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xufVxuI2NoZWNrYm94e1xuICAgIHdpZHRoOiAxNSU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBtYXJnaW46IDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/project1/tasks/create-task/create-task.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/project1/tasks/create-task/create-task.component.ts ***!
  \*********************************************************************/
/*! exports provided: CreateTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTaskComponent", function() { return CreateTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tasks_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tasks-api.service */ "./src/app/project1/tasks-api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let CreateTaskComponent = class CreateTaskComponent {
    constructor(_httpService) {
        this._httpService = _httpService;
        // @Input() creating: Boolean;
        this.taskAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            completed: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
        });
    }
    // focus(){
    //   this.titleField.nativeElement.focus();
    // }
    onCreateSubmit() {
        const taskInput = {
            title: this.form.get('title').value,
            description: this.form.get('description').value,
            completed: this.form.get('completed').value // Password input field
        };
        console.log(taskInput);
        let task = { title: taskInput.title, description: taskInput.description, completed: taskInput.completed };
        this._httpService.createTask(task).subscribe(data => {
            console.log(data);
            this.taskAdded.emit(data);
            this.form.reset();
            this.titleField.nativeElement.focus();
        });
    }
    ngOnInit() {
    }
};
CreateTaskComponent.ctorParameters = () => [
    { type: _tasks_api_service__WEBPACK_IMPORTED_MODULE_2__["TasksApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('title', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], CreateTaskComponent.prototype, "titleField", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CreateTaskComponent.prototype, "taskAdded", void 0);
CreateTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-task',
        template: __webpack_require__(/*! raw-loader!./create-task.component.html */ "./node_modules/raw-loader/index.js!./src/app/project1/tasks/create-task/create-task.component.html"),
        styles: [__webpack_require__(/*! ./create-task.component.css */ "./src/app/project1/tasks/create-task/create-task.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tasks_api_service__WEBPACK_IMPORTED_MODULE_2__["TasksApiService"]])
], CreateTaskComponent);



/***/ }),

/***/ "./src/app/project1/tasks/show-task/show-task.component.css":
/*!******************************************************************!*\
  !*** ./src/app/project1/tasks/show-task/show-task.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QxL3Rhc2tzL3Nob3ctdGFzay9zaG93LXRhc2suY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/project1/tasks/show-task/show-task.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/project1/tasks/show-task/show-task.component.ts ***!
  \*****************************************************************/
/*! exports provided: ShowTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowTaskComponent", function() { return ShowTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tasks_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tasks-api.service */ "./src/app/project1/tasks-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ShowTaskComponent = class ShowTaskComponent {
    constructor(_httpService, route, router) {
        this._httpService = _httpService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this._httpService.getById(params.get('id')).subscribe(data => {
                console.log("component:", data);
                this.task = data;
            }, error => {
                console.log('fake id');
                // this.router.navigate(['/'])
                this.router.navigate(['project1/tasks']);
            });
        });
    }
};
ShowTaskComponent.ctorParameters = () => [
    { type: _tasks_api_service__WEBPACK_IMPORTED_MODULE_2__["TasksApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ShowTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-show-task',
        template: __webpack_require__(/*! raw-loader!./show-task.component.html */ "./node_modules/raw-loader/index.js!./src/app/project1/tasks/show-task/show-task.component.html"),
        styles: [__webpack_require__(/*! ./show-task.component.css */ "./src/app/project1/tasks/show-task/show-task.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tasks_api_service__WEBPACK_IMPORTED_MODULE_2__["TasksApiService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ShowTaskComponent);



/***/ }),

/***/ "./src/app/project1/tasks/tasks.component.css":
/*!****************************************************!*\
  !*** ./src/app/project1/tasks/tasks.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n    font-family: Google Sans,Roboto,RobotoDraft,Helvetica,Arial,sans-serif;\n}\n\n.selected{\n    background: red\n}\n\n.hover:hover{\n    background-color: #ddd;\n}\n\n.elipses:hover{\n    background-color: #f1f3f4;\n}\n\n.popup {\n    transition: width 2s, height 4s;\n    /* https://www.w3schools.com/css/css3_transitions.asp */\n}\n\n.added{\n    background-color: lightblue;\n    visibility: show;\n}\n\n.updated{\n    background-color: lightblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdDEvdGFza3MvdGFza3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNFQUFzRTtBQUMxRTs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsdURBQXVEO0FBQzNEOztBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QxL3Rhc2tzL3Rhc2tzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICAgIGZvbnQtZmFtaWx5OiBHb29nbGUgU2FucyxSb2JvdG8sUm9ib3RvRHJhZnQsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XG59XG5cbi5zZWxlY3RlZHtcbiAgICBiYWNrZ3JvdW5kOiByZWRcbn1cblxuLmhvdmVyOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG5cbi5lbGlwc2VzOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYzZjQ7XG59XG5cbi5wb3B1cCB7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMnMsIGhlaWdodCA0cztcbiAgICAvKiBodHRwczovL3d3dy53M3NjaG9vbHMuY29tL2Nzcy9jc3MzX3RyYW5zaXRpb25zLmFzcCAqL1xufVxuLmFkZGVke1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgICB2aXNpYmlsaXR5OiBzaG93O1xufVxuLnVwZGF0ZWR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/project1/tasks/tasks.component.ts":
/*!***************************************************!*\
  !*** ./src/app/project1/tasks/tasks.component.ts ***!
  \***************************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tasks_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tasks-api.service */ "./src/app/project1/tasks-api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let TasksComponent = class TasksComponent {
    constructor(_httpService) {
        this._httpService = _httpService;
        this.list = [];
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.allTasks = false;
        this.addForm = false;
        this.value = '';
        this.reverse = false;
        this.hideAddForm = false;
        this.sections = [
            { title: 'section 6', objectives: [
                    '77. Introduction -  00:50',
                    '78. Adding Naigation with Event Binding and ngIf - 07:31',
                    '79. Passing Recipe Data with Property Binding - 04:43',
                    '80. Passing Data with Event and Property Binding (Combined) - 10:31',
                    '81. Make sure you have FormsModule added! - Document',
                    '82. Allowing the User to Add Ingredients to the Shopping List - 7:22',
                ]
            },
            { title: 'section 7', objectives: [
                    '83. Module Introduction -  01:23',
                    '84. ngFor and ngIf Recap - 03:36',
                    '85. ngClass and ngStyle Recap - 02:57',
                    '86. Creating a Basic Attribute Directive - 06:42',
                    '87. Using the Renderer to build a Better Attribute Directive - 07:04',
                    '88. More about the Renderer - 07:04',
                    '89. Using HostListener to Listen to Host Events - 03:00',
                    '90. Using HostBinding to Bind to Host Properties - 03:17',
                    '91. Binding to Directive Properties - 06:43',
                    '92. What Happens behind the Scenes on Structural Directives - 03:04',
                    '93. Building a Structural Directive - 06:13',
                    '94. Understanding ngSwitch - 02:49',
                ]
            },
            { title: 'section 9', objectives: [
                    '96. Module Introduction -  01:39',
                    '97. Why would you Need Services? - 02:04',
                    '98.Creating a Logging Service - 03:32',
                    '99. Injecting the Logging Service into Components - 06:21',
                    '100. Creating a Data Service - 06:41',
                    '101. Understanding the Hierarchical Injector - 02:40',
                    '102. How many Instances of Service Should It Be? - 02:12',
                    '103. Injecting Services into Services - 04:23',
                    '104. Using Services for Cross-Component Communication - 04:06',
                    'A.5. Assignment 5: Practicing Services - Assignment',
                    '105. Services in Angular 6 - Doc',
                ] },
            { title: 'Secion 10: Course Project - Services & Dependency Injection', objectives: [
                    '106. Introduction -  01:23',
                    '107. Setting up the Services - 01:15',
                    '108. Managing Recipes in a Recipe Service - 04:07',
                    '109. Using a Service for Cross-Component Communication - 05:07',
                    '110. Adding the Shopping List Service - 05:04',
                    '111. Using Services for Pushing Data from A to B - 03:08',
                    '112. Adding Ingredients to Recipes - 03:08',
                    '113. Adding Ingredients from Recipes to the Shopping List (via a Serivce) - 07:03',
                ] },
            { title: 'Secion 11: Changing Pages with Routing', objectives: [
                    '114. Module Introduction -  01:26',
                    '115. Why do we need a Router? - 01:16',
                    '116. Understanding the Example Project - Doc',
                    '117. Setting up and Loading Routes - 08:01',
                    '118. Navigating with Router Links - 05:18',
                    '119. Understanding Navigation Paths - 04:54',
                    '120. Styling Active Router Links - 05:01',
                    '121. Navigating Programmatically - 03:28',
                    '122. Using Relative Paths in Programmatic Navigation -  05:09',
                    '123. Passing Parameters to Routes - 03:10',
                    '124. Fetching Route Parameters - 04:01',
                    '125. Fetching Route Parameters Reactively - 07:25',
                    '126. An Important Note about Route Observables - 02:42',
                    '127. Passing Query Parameters and Fragments - 05:53',
                    '128. Retrieving Query Parameters and Fragments -  03:15',
                    '129. Practicing and some Common Gothas - 06:07',
                    '130. Setting up Child (Nested) Routes - 04:28',
                    '131. Using Query Parameters - Practice - 05:36',
                    '132. Configuring the Handling of Query Parameters - 01:50',
                    '133. Redirecting and Wildcard Routes - 04:36',
                    '134. Important: Redirection Path Matching - Doc',
                    '135. Outsourcing the Route Configuration - 04:40',
                    '136. An Introduction to Guards - 01:45',
                    '137. Protecting Routes with canActicate - 08:55',
                    '138. Protecting Child (Nested) Routes with canActivateChild - 02:51',
                    '139. Using a Fake Auth Service - 01:43',
                    '140. Controlling Navigation with canDeactivate - 12:28',
                    '141. Passing Static Data to a Route - 05:56',
                    '142. Resolving Dynamic Data with the resolve Guard - 09:53',
                    '143. Understanding Location Strategies - 04:43',
                    '144. Wrap Up - 05:36',
                ] },
        ];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            completed: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
        });
    }
    addFormToggle() {
        // this._httpService.getTasks().subscribe(data => {
        //   this.allTasks = data;
        // })
        this.addForm = !this.addForm;
        this.hideAddForm = !this.hideAddForm;
    }
    addTask(e) {
        // this.addForm = !this.addForm;
        this._httpService.getTasks().subscribe(data => {
            this.tasks = data;
            this.tasks.tasks[this.tasks.tasks.length - 1].style = "true";
            this.allTasks = true;
            var self = this;
            this.list = this.tasks.tasks.slice();
            this.nodeStylingIndex = this.tasks.tasks.length - 1;
            this.nodeStyling = this.list[this.list.length - 1];
            this.nodeStyling.style = "true";
            console.log("Add task list:", this.list[this.list.length - 1]);
            setTimeout(function () {
                console.log(this, self);
                self.tasks.tasks[self.tasks.tasks.length - 1].style = "";
            }, 5000);
        });
    }
    completedToggle(id, e, index) {
        this._httpService.updateCompleted(id, { completed: e.target.checked }).subscribe(value => {
            this._httpService.getTasks().subscribe(data => {
                this.tasks = data;
                this.list = this.tasks.tasks.slice();
                if (this.reverse) {
                    this.list.reverse();
                }
            });
        });
    }
    deleteTask(id) {
        console.log("Delete id:", id);
        this._httpService.deleteTask(id).subscribe(data => {
            this._httpService.getTasks().subscribe(data => {
                this.tasks = data;
                if (this.reverse) {
                    this.list = this.tasks.tasks.slice();
                    this.list = this.list.reverse();
                }
                else {
                    this.list = this.tasks.tasks.slice();
                }
            });
        });
    }
    editTask(id, i) {
        this.selectedTask = id;
        this.taskBeingUpdated = i;
    }
    getAllTasks() {
        // this._httpService.getTasks().subscribe(data => {
        //   this.allTasks = data;
        // })
        this.tasks.tasks[this.tasks.tasks.length - 1].style = "";
        this.allTasks = !this.allTasks;
        this.list = this.tasks.tasks.slice();
        if (this.reverse) {
            this.list.reverse();
        }
    }
    getTaskById(e) {
        this.value += e.target.value;
        this._httpService.getById(e).subscribe(data => {
            console.log(data);
            this.thirdTask = data;
        });
    }
    hideAdd() {
        this.addForm = !this.addForm;
        this.hideAddForm = !this.hideAddForm;
    }
    hovering(index) {
        if (index == this.nodeStylingIndex) {
            console.log("Hovring", index, this.nodeStylingIndex);
            this.nodeStyling.style = '';
        }
    }
    reverseTasks() {
        this.list = this.list.reverse();
        this.reverse = !this.reverse;
    }
    search(term) {
        this.tasks$ = this._httpService.getById(term);
        this.searchTerms.next(term);
    }
    onCompleted(event) {
        if (event.target.style.backgroundColor === '' && event.target.style.color === '') {
            event.target.style = "background-color: gray; color: white";
        }
        else {
            event.target.style = "";
        }
    }
    onUpdateSubmit(id) {
        const taskInput = {
            title: this.form.get('title').value,
            description: this.form.get('description').value,
            completed: this.form.get('completed').value // Password input field
        };
        let task = { title: taskInput.title, description: taskInput.description, completed: taskInput.completed };
        this._httpService.updateTask(id, task).subscribe((data) => {
            this._httpService.getTasks().subscribe(data => {
                this.tasks = data;
                this.list = this.tasks.tasks.slice();
                this.list[this.taskBeingUpdated].style = "true";
                if (this.reverse) {
                    this.list = this.list.reverse();
                }
            });
        });
        this.selectedTask = null;
        // this.onCompleted(this.taskBeingUpdated);
        let self = this;
        setTimeout(function () {
            console.log("Timer", self);
            self.list[self.taskBeingUpdated].style = "";
        }, 5000);
    }
    ngOnInit() {
        this._httpService.getTasks().subscribe(data => {
            this.tasks = data;
            this.list = this.tasks.tasks.slice();
        });
        this.tasks$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(300), 
        // ignore new term if same as previous term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), 
        // switch to new search observable each time the term changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((term) => this._httpService.getById(term)));
    }
    onSelect(data, i) {
        this.selectedSection = data;
        this.i = i;
    }
    pushObjective(event, indexValue) {
        this.sections[indexValue].objectives.push(event);
        console.log(event);
        console.log(indexValue);
    }
};
TasksComponent.ctorParameters = () => [
    { type: _tasks_api_service__WEBPACK_IMPORTED_MODULE_2__["TasksApiService"] }
];
TasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tasks',
        template: __webpack_require__(/*! raw-loader!./tasks.component.html */ "./node_modules/raw-loader/index.js!./src/app/project1/tasks/tasks.component.html"),
        styles: [__webpack_require__(/*! ./tasks.component.css */ "./src/app/project1/tasks/tasks.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tasks_api_service__WEBPACK_IMPORTED_MODULE_2__["TasksApiService"]])
], TasksComponent);



/***/ })

}]);
//# sourceMappingURL=project1-project1-module-es2015.js.map