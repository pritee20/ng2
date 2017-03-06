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
var author_services_1 = require("./author.services");
var vote_component_1 = require("../vote/vote.component");
var AuthorComponent = (function () {
    function AuthorComponent(authorService) {
        this.title = 'Authors';
        this.paragrph = 'This is author page.';
        this.voter = {
            voteCount: 10,
            myVote: 0
        };
        this.authors = authorService.getAuthor();
    }
    AuthorComponent.prototype.newVote = function ($event) {
    };
    return AuthorComponent;
}());
AuthorComponent = __decorate([
    core_1.Component({
        selector: 'author',
        templateUrl: './app/authors/author.component.html',
        providers: [author_services_1.AuthorService],
        directives: [vote_component_1.VoteComponent]
    }),
    __metadata("design:paramtypes", [author_services_1.AuthorService])
], AuthorComponent);
exports.AuthorComponent = AuthorComponent;
//# sourceMappingURL=author.component.js.map