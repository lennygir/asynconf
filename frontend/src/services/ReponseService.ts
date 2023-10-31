import BaseService from "./BaseService";

export default class ReponseService  extends BaseService {

    public static submitReponses(reponses: any) {
        return this.fetchProxy('reponses/', { method: "POST", body: JSON.stringify(reponses)});
    }

}