const knex = require('../../../services/knex')

const getTaskFromUser = async (user_id) => {
    const data = await knex('tasks').where({
        user_id
    })
    return data
}

const saveTaskFromUser = async(task) => {
    try{
        const insertStatus = await knex('tasks').insert(task)
        return insertStatus
    } catch (err){
        throw err
    }
}

const updateTask = async(taskId, status) => {
    try{
        const taskReg = await knex('tasks').where('id', taskId)
        if (!taskReg){
            throw('select id do not exist')
        }
        const updateReg = await knex('tasks').update('status', status).where('id', taskId)
        return updateReg
    } catch(err) {
        throw err
    }
}

module.exports = {
    getTaskFromUser,
    saveTaskFromUser,
    updateTask
}