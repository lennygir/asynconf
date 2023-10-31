"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const better_sqlite3_1 = __importDefault(require("better-sqlite3"));
class AsynconfDatabase {
    static query(sql, params = []) {
        return this.db.prepare(sql).all(...params);
    }
}
AsynconfDatabase.db = new better_sqlite3_1.default('./database.sqlite');
exports.default = AsynconfDatabase;
