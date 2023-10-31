import Database from 'better-sqlite3';

export default class AsynconfDatabase {
    private static db = new Database('./database.sqlite');

    public static query(sql: string, params: any[] = []): any {
        return this.db.prepare(sql).all(...params);
    }
}