"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reponse_service_1 = __importDefault(require("../services/reponse.service"));
class ReponseController {
    static submitReponses(req, res) {
        res.status(200).json(reponse_service_1.default.calculTaux(req.body));
    }
}
exports.default = ReponseController;
