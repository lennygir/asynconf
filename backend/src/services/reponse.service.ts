import AsynconfDatabase from "../database";

export default class ReponseService {

    public static scoreEnTaux(score: number): number {
        const roundedScore = Math.round(score);
        if(score < 10) {
            return 3;
        } else if(score < 15) {
            return 2.74;
        } else if(score < 25) {
            return 2.52;
        } else if(score < 33) {
            return 2.10;
        }
        return 1.85;
    }

    public static calculTaux(reponses: any): {taux: number} {
        reponses = Object.values(reponses);
        const sql = `select t.type, r.score
                        from reponses r 
                            join questions q on r.question_id = q.id and r.question_version = q.version
                            join type_question t on t.id = q.type
                        where r.id in (${reponses.map(() => '?').join(',')})`;
        const data = AsynconfDatabase.query(sql, [...reponses]);
        const scoreReponse = data.filter((r: any) => r.type === "SCORE");
        const tauxReponse = data.filter((r: any) => r.type === "TAUX");
        let score = scoreReponse.map((r: any) => r.score).reduce((acc: number, val: number) => acc + val, 0);
        return { taux: tauxReponse.map((r: any) => r.score).reduce((acc: number, val: number) => acc + val, this.scoreEnTaux(score)) };
    }

}