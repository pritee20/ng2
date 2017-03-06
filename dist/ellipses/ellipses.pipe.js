"use strict";
;
var EllipsesPipe = (function () {
    function EllipsesPipe() {
    }
    EllipsesPipe.prototype.transform = function (value, args) {
        if (value) {
            return value.substring(0, 50) + '...';
        }
    };
    return EllipsesPipe;
}());
exports.EllipsesPipe = EllipsesPipe;
//# sourceMappingURL=ellipses.pipe.js.map