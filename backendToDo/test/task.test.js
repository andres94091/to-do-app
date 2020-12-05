const app = require('../app');
const supertest = require('supertest');
const request = supertest(app);

describe('test in task api', () => {
  describe('test in endpoints', () => {
    test('sould get all 3 task from user 1', async (done) => {
      const res = await request.get('/task/user/1');
      expect(res.status).toBe(200);
      expect(res.body.data.length).toEqual(3);
      done();
    });

    test('should change de status of task', async (done) => {
      const res = await request.patch('/task/1/status/true');
      expect(res.status).toBe(200);
      expect(res.body.message).toBe('task updated');
      done();
    });

    test('should add a new task', async (done) => {
      const res = await request.post('/task/').send({
        user_id: 1,
        task: 'do yoga',
      });
      expect(res.status).toBe(201);
      expect(res.body.data.command).toBe('INSERT');
      expect(res.body.message).toBe('task saved');
      done();
    });
  });
});
