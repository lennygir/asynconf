"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const question_service_1 = __importDefault(require("../services/question.service"));
class QuestionController {
    static getQuestions(req, res) {
        res.status(200).json(question_service_1.default.getAllQuestions());
    }
}
exports.default = QuestionController;
