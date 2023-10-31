import server from '../src/server';
import request from "supertest";
import databaseMock from './question.mock';

// Mock database service
jest.mock('../src/database.ts', () => ({
	query: () => {
    return databaseMock;
  },
}));

describe('callNextClient', () => {
  it('GET /questions/ - should return a list of questions', async () => {

    const result = await request(server).get('/questions');


    // Check the response status
    expect(result.status).toBe(200);

    // Check the response body
    expect(result.body.length).toBe(2);

    expect(result.body[0].question).toBe("Quel est le type de véhicule ?");
    expect(result.body[0].reponses.length).toBe(4);
    expect(result.body[0].id).toBe(1);

    expect(result.body[1].question).toBe("De quel motorisation dispose le véhicule ?");
    expect(result.body[1].reponses.length).toBe(5);
    expect(result.body[1].id).toBe(2);
  });


});