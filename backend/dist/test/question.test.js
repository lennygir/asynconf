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
const question_mock_1 = __importDefault(require("./question.mock"));
// Mock database service
jest.mock('../src/database.ts', () => ({
    query: () => {
        return question_mock_1.default;
    },
}));
describe('[Question]', () => {
    it('GET /questions/ - should return a list of questions', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, supertest_1.default)(server_1.default).get('/questions');
        // Check the response status
        expect(result.status).toBe(200);
        // Check the response body
        expect(result.body.length).toBe(5);
        expect(result.body[0].question).toBe("Quel est le type de véhicule ?");
        expect(result.body[0].reponses.length).toBe(4);
        expect(result.body[0].id).toBe(1);
        expect(result.body[1].question).toBe("De quel motorisation dispose le véhicule ?");
        expect(result.body[1].reponses.length).toBe(5);
        expect(result.body[1].id).toBe(2);
    }));
});
