"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ReponseService {
    static scoreEnTaux(score) {
        const roundedScore = Math.round(score);
        if (score < 10) {
            return 3;
        }
        else if (score < 15) {
            return 2.74;
        }
        else if (score < 25) {
            return 2.52;
        }
        else if (score < 33) {
            return 2.10;
        }
        return 1.85;
    }
    static calculTaux(reponses) {
        reponses = Object.values(reponses);
        const sql = `select t.type, r.score
                        from reponses r 
                            join questions q on r.question_id = q.id and r.question_version = q.version
                            join type_question t on t.id = q.type
                        where r.id in (${reponses.map(() => '?').join(',')})`;
        const data = database_1.default.query(sql, [...reponses]);
        const scoreReponse = data.filter((r) => r.type === "SCORE");
        const tauxReponse = data.filter((r) => r.type === "TAUX");
        let score = scoreReponse.map((r) => r.score).reduce((acc, val) => acc + val, 0);
        return { taux: tauxReponse.map((r) => r.score).reduce((acc, val) => acc + val, this.scoreEnTaux(score)) };
    }
}
exports.default = ReponseService;
