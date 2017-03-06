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
var RatingComponent = (function () {
    function RatingComponent() {
        this.ratingIcon = true;
        this.change = new core_1.EventEmitter();
        this.ratingNum = 0;
    }
    RatingComponent.prototype.onClick = function () {
        this.ratingIcon = !this.ratingIcon;
        this.ratingNum += this.ratingIcon ? 1 : -1;
        this.change.emit({ newValue: this.ratingIcon });
    };
    return RatingComponent;
}());
__decorate([
    core_1.Input('is-favorite'),
    __metadata("design:type", Boolean)
], RatingComponent.prototype, "ratingIcon", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RatingComponent.prototype, "change", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RatingComponent.prototype, "ratingNum", void 0);
RatingComponent = __decorate([
    core_1.Component({
        selector: 'rating',
        templateUrl: 'app/rating/rating.template.html',
        styleUrls: ['app/app.component.css'],
    }),
    __metadata("design:paramtypes", [])
], RatingComponent);
exports.RatingComponent = RatingComponent;
//# sourceMappingURL=rating.component.js.map