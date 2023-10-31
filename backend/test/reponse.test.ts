import server from '../src/server';
import request from "supertest";
import databaseMock from './reponse.mock';

// Mock database service
jest.mock('../src/database.ts', () => ({
	query: () => {
    return databaseMock;
  },
}));

describe('[Reponse]', () => {
  it('POST /reponses/ - first example - should return the correct rate', async () => {

    // Body format { "questionId": "reponseId" }
    const result = await request(server).post('/reponses')
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
  });


});