import AsynconfDatabase from "../database";
import QuestionDTO from "../models/question.model";

export default class QuestionService {

    public static getAllQuestions(): QuestionDTO[] {
        const sql = `select q.id, question, json_group_array(json_object('reponse', reponse, 'id', r.id, 'aide', aide)) as reponses
                        from questions q 
                            join reponses r on r.question_id = q.id and r.question_version = q.version
                            group by q.id, q.version`;
        const data = AsynconfDatabase.query(sql).map((d: QuestionDTO) => { d.reponses = JSON.parse(String(d.reponses)); return d; });
        return data;
    }

}