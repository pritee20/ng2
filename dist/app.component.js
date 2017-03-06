"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var header_component_1 = require("./header/header.component");
var courses_component_1 = require("./courses/courses.component");
var author_component_1 = require("./authors/author.component");
var accordion_component_1 = require("./accordion/accordion.component");
var contact_form_component_1 = require("./contactForm/contact-form.component");
var AppComponent = (function () {
    function AppComponent() {
        this.users = [
            { id: "31", name: "Pritee", username: "ptanwa" },
            { id: "32", name: "Nick", username: "nkjoe" },
            { id: "33", name: "Holly", username: "hollystandy" }
        ];
    }
    AppComponent.prototype.selectUser = function (user) {
        this.activeUser = user;
        //console.log(this.activeUser);
    };
    ;
    AppComponent.prototype.onUserCreated = function (event) {
        this.users.push(event.user);
        //console.log(event);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/app.template.html',
        directives: [header_component_1.HeaderComponent, courses_component_1.CoursesComponent, author_component_1.AuthorComponent, accordion_component_1.BootstrapPannel, contact_form_component_1.ContactFormComponent],
        styleUrls: ['./app/app.component.css']
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map