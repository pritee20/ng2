"use strict";
var AuthorService = (function () {
    function AuthorService() {
    }
    AuthorService.prototype.getAuthor = function () {
        return ["Author 1", "Author 2", "Author 3"];
    };
    return AuthorService;
}());
exports.AuthorService = AuthorService;
//# sourceMappingURL=author.services.js.map