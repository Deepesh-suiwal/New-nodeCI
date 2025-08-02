import request from 'supertest';
import app from '../index.js';

describe('GET /', () => {
  it('should return 200 and working text', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('API is working');
  });
});