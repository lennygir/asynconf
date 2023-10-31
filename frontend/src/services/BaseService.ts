export default class BaseService {
    private static baseUrl = "http://localhost:3000/";

    public static fetchProxy(endpoint: string, opt = {}) {
        return fetch(`${this.baseUrl}${endpoint}`, {...opt, ...{headers: {"Content-Type": "application/json"}}}).then((res) => res.json());
    }
} 