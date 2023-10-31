import { Request, Response } from "express";
import ReponseService from "../services/reponse.service";

export default class ReponseController {
    public static submitReponses(req: Request, res: Response) {
        res.status(200).json(ReponseService.calculTaux(req.body));
    }
}