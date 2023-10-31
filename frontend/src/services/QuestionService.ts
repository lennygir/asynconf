import BaseService from "./BaseService";

export default class QuestionService  extends BaseService {

    public static getAllQuestions() {
        return this.fetchProxy('questions/');
    }

}