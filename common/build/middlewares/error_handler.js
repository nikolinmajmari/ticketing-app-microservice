"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const custom_error_1 = require("../errors/custom_error");
const errorHandler = (err, req, res, next) => {
    if (err instanceof custom_error_1.CustomError) {
        return res.status(err.statusCode)
            .send(err.serializeError());
    }
    res.status(500).send({
        message: "Something went rong"
    });
};
exports.errorHandler = errorHandler;