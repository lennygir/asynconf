import { Request, Response } from "express";
import QuestionError from "../errors/question.error";
import QuestionService from "../services/question.service";

export default class QuestionController {
    public static getQuestions(req: Request, res: Response) {
        res.status(200).json(QuestionService.getAllQuestions());
    }
}