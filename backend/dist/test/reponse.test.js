"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("../src/server"));
const supertest_1 = __importDefault(require("supertest"));
const reponse_mock_1 = __importDefault(require("./reponse.mock"));
// Mock database service
jest.mock('../src/database.ts', () => ({
    query: () => {
        return reponse_mock_1.default;
    },
}));
describe('[Reponse]', () => {
    it('POST /reponses/ - first example - should return the correct rate', () => __awaiter(void 0, void 0, void 0, function* () {
        // Body format { "questionId": "reponseId" }
        const result = yield (0, supertest_1.default)(server_1.default).post('/reponses')
            .set('Content-type', 'application/json')
            .send({
            1: 1,
            2: 6,
            3: 14,
            4: 19,
            5: 21
        });
        // Check the response status
        expect(result.status).toBe(200);
        // Check the response body
        expect(result.body.taux).toBe(2.63);
    }));
});
