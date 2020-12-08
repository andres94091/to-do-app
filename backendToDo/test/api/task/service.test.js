const {
  getTaskFromUser,
  getCountTaskPerUser,
  saveTaskFromUser,
  updateTask,
} = require('../../../api/task/model');

const {
  getTaskFromUserService,
  getCountTaskPerUserService,
  saveTaskFromUserService,
  updateStatusTaskService,
} = require('../../../api/task/services');

const {
  userId,
  getUsersCountModelResponse,
  getUserTaskModelResponse,
  newTask,
  taskSaved,
  updateTaskInput,
  updateTaskOutput,
} = require('../../helpers/service-test-helper');

jest.mock('../../../api/task/model', () => ({
  getTaskFromUser: jest.fn(),
  getCountTaskPerUser: jest.fn(),
  saveTaskFromUser: jest.fn(),
  updateTask: jest.fn(),
}));

describe('ToDo app service', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('count task from all users', () => {
    it('should get 3 users', async (done) => {
      getCountTaskPerUser.mockReturnValueOnce(
        Promise.resolve(getUsersCountModelResponse),
      );

      const usersTaskCount = await getCountTaskPerUserService();

      expect(getCountTaskPerUser).toHaveBeenCalled();
      expect(usersTaskCount.length).toBe(3);
      done();
    });
  });

  describe('get task from user', () => {
    describe('with status filer', () => {
      it('sould call the model with the filter parameter', () => {
        const status = 'true';
        const bandFilter = true;
        const requestParameters = {
          userId,
          status,
        };
        getTaskFromUser.mockReturnValueOnce(
          Promise.resolve(getUserTaskModelResponse),
        );

        getTaskFromUserService(requestParameters);

        expect(getTaskFromUser).toHaveBeenCalled();
        expect(getTaskFromUser).toBeCalledWith(userId, status, bandFilter);
      });
    });

    describe('without status filter', () => {
      describe('status filter is undefined', () => {
        it('should call the model without the filter parameter', () => {
          const status = undefined;
          const bandFilter = false;
          const requestParameters = {
            userId,
            status,
          };
          const statusParameter = false;
          getTaskFromUser.mockReturnValueOnce(
            Promise.resolve(getUserTaskModelResponse),
          );

          getTaskFromUserService(requestParameters);

          expect(getTaskFromUser).toHaveBeenCalled();
          expect(getTaskFromUser).toBeCalledWith(
            userId,
            statusParameter,
            bandFilter,
          );
        });
      });

      describe('status filer is random string', () => {
        it('should call the model without the filter parameter', () => {
          const status = 'somethingRandom';
          const bandFilter = false;
          const requestParameters = {
            userId,
            status,
          };
          const statusParameter = false;
          getTaskFromUser.mockReturnValueOnce(
            Promise.resolve(getUserTaskModelResponse),
          );

          getTaskFromUserService(requestParameters);

          expect(getTaskFromUser).toHaveBeenCalled();
          expect(getTaskFromUser).toBeCalledWith(
            userId,
            statusParameter,
            bandFilter,
          );
        });
      });
    });
  });

  describe('save new task', () => {
    it('should save a task from user 1', async (done) => {
      saveTaskFromUser.mockReturnValueOnce(Promise.resolve(taskSaved));

      const taskSavedService = await saveTaskFromUserService(newTask);

      expect(saveTaskFromUser).toHaveBeenCalled();
      expect(taskSaved).toEqual(taskSavedService);
      done();
    });
  });

  describe('update a task', () => {
    test('sould update a task and return the updated resource ', async (done) => {
      updateTask.mockReturnValueOnce(Promise.resolve(updateTaskOutput));

      const updatedTaskService = await updateStatusTaskService(updateTaskInput);

      expect(updateTask).toHaveBeenCalled();
      expect(updatedTaskService).toEqual(updateTaskOutput);
      done();
    });
  });
});
