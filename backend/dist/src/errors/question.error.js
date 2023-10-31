"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QuestionError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
        this.message = message;
    }
}
exports.default = QuestionError;
