import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
// import PropTypes from 'prop-types'

const Task = ({ todo, index, completeTodos, setBandReload }) => {

    const [task, setTask] = useState(todo)

    const isFirstRun = useRef(true);

    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }
        async function fetchData() {
            try {
                await axios.patch(`http://localhost:5000/task/${task.id}/status/${task.status}`, {})
                setBandReload(band => !band)
            } catch (e) {
                console.log(e);
            }
        }
        fetchData()
    }, [task])

    return (
        <div
            className='todo'
            style={{ textDecoration: todo.status ? "line-through" : "" }}
        >
            {todo.task}
            <div>
                <button onClick={() => {
                    completeTodos(index)
                    setTask(({id, status, task, user_id}) => {
                        return {
                            id,
                            status: !status,
                            task,
                            user_id
                        }
                    })
                }}> Complete</button>
            </div>
        </div>
    )
}

// task.propTypes = {

// }

export default Task
