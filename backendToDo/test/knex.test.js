const knex = require('../services/knex')

describe('test in knex conection', () => {
    test('select users ', async (done) => {
        const users = await knex('users')
        expect(users.length).toEqual(1)
        done()
    })
    
})
