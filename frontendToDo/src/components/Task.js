import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import PropTypes from 'prop-types'

const Task = ({ todo, user, setBandReload }) => {

    const [task, setTask] = useState(todo)

    async function updateTask() {
        try {
            await axios.patch(`http://localhost:5000/api/users/${user}/tasks/${task.id}`, {
                status: !task.status
            })
            setBandReload(band => !band)
        } catch (e) {
            console.log(e);
        }
    }

    function handleChange() {
        updateTask()
        setTask({
            ...task,
            status: !task.status,
        })
    }

    return (
        <>
            <div>
                <input
                    type='checkbox'
                    className="form-check-input"
                    checked={task.status}
                    onChange={handleChange}
                />{task.task}
            </div>
        </>
    )
}

// task.propTypes = {

// }

export default Task
