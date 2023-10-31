"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class QuestionService {
    static getAllQuestions() {
        const sql = `select q.id, question, json_group_array(json_object('reponse', reponse, 'id', r.id, 'aide', aide)) as reponses
                        from questions q 
                            join reponses r on r.question_id = q.id and r.question_version = q.version
                            group by q.id, q.version`;
        const data = database_1.default.query(sql).map((d) => { d.reponses = JSON.parse(String(d.reponses)); return d; });
        return data;
    }
}
exports.default = QuestionService;
