import express, { Router } from "express";
import QuestionController from "./controllers/question.controller";
import ReponseController from "./controllers/reponse.controller";

const router: Router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Question
 *   description: Question endpoints
 * /questions:
 *   get:
 *     summary: Get all questions
 *     tags: [Question]
 *     responses:
 *       200:
 *         description: The list of all questions.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                   description: The auto-generated id of the book
 *                 question:
 *                   type: string
 *                   description: The title of your book
 *                 reponses:
 *                   type: array
 *                   description: The book author
 *               example:
 *                 id: 1
 *                 question: "Quel est le type de véhicule ?"
 *                 reponses: []
 *
 */
router.get("/questions/", QuestionController.getQuestions);

/**
 * @swagger
 * tags:
 *   name: Reponse
 *   description: Reponse endpoints
 * /reponses:
 *   post:
 *     summary: Calculate the rate according to the answer
 *     tags: [Reponse]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               question_id:
 *                 type: number
 *                 description: the corresponding answer id
 *               question_id2:
 *                 type: number
 *                 description: the corresponding answer id
 *               ...:
 *                 type: number
 *                 description: all ids
 *             example:
 *               1: 1
 *               2: 6
 *               3: 13
 *               4: 18
 *               5: 23
 *     responses:
 *       200:
 *         description: The rate.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 rate:
 *                   type: number
 *                   description: The rate calculated from the given answer
 *               example:
 *                 taux: 3
 */
router.post("/reponses/", ReponseController.submitReponses);

export default router;
