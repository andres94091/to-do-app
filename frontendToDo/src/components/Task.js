import React, { useState } from 'react'
import axios from 'axios'
// import PropTypes from 'prop-types'

const Task = ({ todo, user, index, completeTodos, setBandReload }) => {

    const [task, setTask] = useState(todo)

    async function updateTask() {
        try {
            await axios.patch(`http://localhost:5000/api/users/${user}/tasks/${task.id}`, {
                status: task.status
            })
            setBandReload(band => !band)
        } catch (e) {
            console.log(e);
        }
    }

    function handleChange() {
        console.log('status', task);
        console.log('status', task);
        completeTodos(index)
        setTask(({ id, status, task, user_id }) => {
            return {
                id,
                status: !status,
                task,
                user_id
            }
        })
        updateTask()
    }

    return (
        <>
            <div>
                <input 
                type= 'checkbox'
                className="form-check-input"
                checked = {todo.status}
                onChange = {handleChange}
                />{todo.task}
            </div>
        </>
    )
}

// task.propTypes = {

// }

export default Task
