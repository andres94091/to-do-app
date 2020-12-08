const supertest = require('supertest');

const db = require('../../knex');
const app = require('../../app');
const {
  userId,
  taskId,
  getUsersAndCountTaskQuery,
  getUsersAndCountTask,
  getTaskFromUser,
  getTaskFromUserQuery,
  getTaskFromUserQueryFilter,
  saveTaskInput,
  saveTaskModelOutput,
  statusFilter,
  statusFilterRandom,
  updateTaskInput,
  checkIdTask,
  updateTaskModelOutput,
} = require('../helpers/functionals/knex-query-helper');

const request = supertest(app);

jest.mock('../../knex', () => ({
  raw: jest.fn(),
  table: jest.fn().mockReturnValue({
    insert: jest.fn().mockReturnValue({
      returning: jest.fn(),
    }),
    where: jest.fn().mockReturnValue({
      returning: jest.fn(),
    }),
    update: jest.fn().mockReturnValue({
      where: jest.fn().mockReturnValue({
        returning: jest.fn(),
      }),
    }),
  }),
}));

describe('test in task api', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('test in endpoints', () => {
    describe('/api/users', () => {
      describe('GET', () => {
        it('should get all 3 existing users and a count task for each user', async (done) => {
          db.raw.mockReturnValueOnce(Promise.resolve(getUsersAndCountTask));

          const res = await request.get('/api/users');

          expect(res.status).toBe(200);
          expect(res.body.data.length).toEqual(3);
          expect(db.raw).toHaveBeenCalled();
          expect(db.raw).toBeCalledWith(getUsersAndCountTaskQuery);
          done();
        });
      });
    });

    describe('/api/users/:userId/tasks', () => {
      describe('POST', () => {
        it('should save a task for user 1', async (done) => {
          db.table()
            .insert()
            .returning.mockReturnValueOnce(
              Promise.resolve(saveTaskModelOutput),
            );

          const res = await request
            .post(`/api/users/${1}/tasks`)
            .send(saveTaskInput);

          expect(res.status).toBe(201);
          expect(res.body.data).toEqual(saveTaskModelOutput[0]);
          expect(db.table().insert().returning).toHaveBeenCalled();
          done();
        });
      });

      describe('GET', () => {
        describe('without filter', () => {
          it('sould get all 2 task from user 1', async (done) => {
            db.raw.mockReturnValueOnce(Promise.resolve(getTaskFromUser));

            const res = await request.get(`/api/users/${userId}/tasks`);

            expect(res.status).toBe(200);
            expect(res.body.data.length).toEqual(2);
            expect(db.raw).toHaveBeenCalled();
            expect(db.raw).toBeCalledWith(getTaskFromUserQuery);
            done();
          });
        });

        describe('with filter boolean', () => {
          it('sould get all 2 task from user 1', async (done) => {
            db.raw.mockReturnValueOnce(Promise.resolve(getTaskFromUser));

            const res = await request.get(
              `/api/users/${userId}/tasks?status=${statusFilter}`,
            );

            expect(res.status).toBe(200);
            expect(res.body.data.length).toEqual(2);
            expect(db.raw).toHaveBeenCalled();
            expect(db.raw).toBeCalledWith(getTaskFromUserQueryFilter);
            done();
          });
        });

        describe('with filter random string', () => {
          it('sould get all 2 task from user 1', async (done) => {
            db.raw.mockReturnValueOnce(Promise.resolve(getTaskFromUser));

            const res = await request.get(
              `/api/users/${userId}/tasks?status=${statusFilterRandom}`,
            );

            expect(res.status).toBe(200);
            expect(res.body.data.length).toEqual(2);
            expect(db.raw).toHaveBeenCalled();
            expect(db.raw).toBeCalledWith(getTaskFromUserQuery);
            done();
          });
        });
      });
    });

    describe('/api/users/:userId/tasks/:taskId', () => {
      describe('PATCH', () => {
        it('should change the status of a task ', async (done) => {
          db.table()
            .where()
            .returning.mockReturnValueOnce(Promise.resolve(checkIdTask));
          db.table()
            .update()
            .where()
            .returning.mockReturnValueOnce(
              Promise.resolve(updateTaskModelOutput),
            );

          const res = await request
            .patch(`/api/users/${userId}/tasks/${taskId}`)
            .send(updateTaskInput);

          expect(res.status).toBe(200);
          expect(res.body.data).toEqual(updateTaskModelOutput[0]);
          expect(db.table().where).toHaveBeenCalled();
          expect(db.table().update().where().returning).toHaveBeenCalled();
          done();

          done();
        });
      });
    });
  });
});
