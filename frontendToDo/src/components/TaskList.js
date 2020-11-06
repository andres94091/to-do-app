import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import PropTypes from 'prop-types'
import Task from './Task'
import AddTask from './AddTask'

const TaskList = ({ user }) => {

    const [todos, setTodos] = useState([])
    const [userHook, setUserHook] = useState(user)
    const [bandReload, setBandReload] = useState(true)

    useEffect(async () => {
        const response = await axios.get(`http://localhost:5000/task/user/${user}`)
        const { data: taskData } = response.data
        setTodos(taskData)
    }, [userHook, bandReload])

    const completeTodos = (index) => {
        const newTodos = [...todos]
        newTodos[index].status = !newTodos[index].status
        newTodos.sort((x, y) => (x.status === y.status) ? 0 : x.status ? 1 : -1)
        setTodos(newTodos)
    }

    return (
        <>
            <div className="task-list">
                {todos.map((todos, index) => {
                    return (
                        <Task
                            key={todos.id}
                            todo={todos}
                            index={index}
                            completeTodos={completeTodos}
                            setBandReload={setBandReload}
                        />
                    )
                })}
                <AddTask
                    user={user}
                    setTodos={setTodos}
                    setBandReload={setBandReload}
                />
            </div>
        </>
    )
}

// TaskList.propTypes = {

// }

export default TaskList
