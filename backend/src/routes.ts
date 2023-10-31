import express, { Router } from "express";
import QuestionController from "./controllers/question.controller";
import ReponseController from "./controllers/reponse.controller";

const router: Router = express.Router();

router.get("/questions/", QuestionController.getQuestions);

router.post("/reponses/", ReponseController.submitReponses);

export default router;
