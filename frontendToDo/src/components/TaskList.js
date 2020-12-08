import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import PropTypes from 'prop-types'
import Task from './Task'
import AddTask from './AddTask'
import { TaskFilter } from './TaskFilter'
import { UsersTaskCountGrid } from './UsersTaskCountGrid'
import { SearchUser } from './SearchUser'

const TaskList = ({ user }) => {

    const [todos, setTodos] = useState([])
    const [userHook, setUserHook] = useState(user)
    const [bandReload, setBandReload] = useState(true)
    const [filterStatus, setFilterStatus] = useState(null)

    useEffect(async () => {
        const response = await axios.get(`http://localhost:5000/api/users/${userHook}/tasks?status=${filterStatus}`)
        const { data: taskData } = response.data
        setTodos(taskData)
    }, [userHook, bandReload, filterStatus])

    const completeTodos = (index) => {
        const newTodos = [...todos]
        newTodos[index].status = !newTodos[index].status
        newTodos.sort((x, y) => (x.status === y.status) ? 0 : x.status ? 1 : -1)
        setTodos(newTodos)
    }

    return (
        <>
            <div className="task-list">
                <SearchUser
                    setUserHook={setUserHook}
                />
                <hr />
                <TaskFilter
                    setFilterStatus={setFilterStatus}
                />
                <hr />
                {todos.map((todos, index) => {
                    return (
                        <Task
                            key={todos.id}
                            todo={todos}
                            user={userHook}
                            index={index}
                            completeTodos={completeTodos}
                            setBandReload={setBandReload}
                        />
                    )
                })}
                <AddTask
                    user={userHook}
                    setTodos={setTodos}
                    setBandReload={setBandReload}
                />
            </div>
            <hr />
            <UsersTaskCountGrid
                bandReload={bandReload}
            />
        </>
    )
}

// TaskList.propTypes = {

// }

export default TaskList
