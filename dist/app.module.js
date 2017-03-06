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
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var header_component_1 = require("./header/header.component");
var user_profile_component_1 = require("./users/user-profile.component");
var user_form_component_1 = require("./users/user-form.component");
var courses_component_1 = require("./courses/courses.component");
var author_component_1 = require("./authors/author.component");
var auto_grow_directive_1 = require("./auto-grow.directive");
var rating_component_1 = require("./rating/rating.component");
var vote_component_1 = require("./vote/vote.component");
var ellipses_pipe_1 = require("./ellipses.pipe");
var accordion_component_1 = require("./accordion/accordion.component");
var contact_form_component_1 = require("./contactForm/contact-form.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_1.AppRouting
        ],
        declarations: [
            header_component_1.HeaderComponent,
            app_component_1.AppComponent,
            user_profile_component_1.UserProfileComponent,
            user_form_component_1.UserFormComponent,
            courses_component_1.CoursesComponent,
            author_component_1.AuthorComponent,
            auto_grow_directive_1.AutoGrowDirective,
            rating_component_1.RatingComponent,
            vote_component_1.VoteComponent,
            ellipses_pipe_1.EllipsesPipe,
            accordion_component_1.BootstrapPannel,
            contact_form_component_1.ContactFormComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map