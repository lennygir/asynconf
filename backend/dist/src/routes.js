"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const question_controller_1 = __importDefault(require("./controllers/question.controller"));
const reponse_controller_1 = __importDefault(require("./controllers/reponse.controller"));
const router = express_1.default.Router();
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
router.get("/questions/", question_controller_1.default.getQuestions);
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
router.post("/reponses/", reponse_controller_1.default.submitReponses);
exports.default = router;
