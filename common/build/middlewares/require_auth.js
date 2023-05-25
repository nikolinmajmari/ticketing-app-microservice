"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = void 0;
const unauthorized_error_1 = require("../errors/unauthorized_error");
const requireAuth = (req, res, next) => {
    if (!req.currentUser) {
        return next(new unauthorized_error_1.UnAuthorizedError());
    }
    return next();
};
exports.requireAuth = requireAuth;
