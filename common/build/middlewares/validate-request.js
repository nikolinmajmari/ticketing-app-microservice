"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const express_validator_1 = require("express-validator");
const request_validation_error_1 = require("../errors/request_validation_error");
const validateRequest = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return next(new request_validation_error_1.RequestValidationError(errors.array()));
    }
    next();
};
exports.validateRequest = validateRequest;