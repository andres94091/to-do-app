import React, { useState } from 'react'
import axios from 'axios'
// import PropTypes from 'prop-types'

const Task = ({ todo, index, completeTodos, setBandReload }) => {

    const [task, setTask] = useState(todo)


    async function updateTask() {
        try {
            await axios.patch(`http://localhost:5000/api/tasks/${task.id}`, {
                status: !task.status
            })
            setBandReload(band => !band)
        } catch (e) {
            console.log(e);
        }
    }

    function handleClick() {
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
        <div
            className='todo'
            style={{ textDecoration: todo.status ? "line-through" : "" }}
        >
            {todo.task}
            <div>
                <button onClick={() => handleClick()}> status</button>
            </div>
        </div>
    )
}

// task.propTypes = {

// }

export default Task
