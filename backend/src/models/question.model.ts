import ReponseDTO from "./reponse.model";

export default interface QuestionDTO {
    id?: number;
    version?: number;
    question?: string;
    type?: number;
    reponses?: ReponseDTO[];
}