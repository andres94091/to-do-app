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

    useEffect(() => {
        async function getTask(){
            const response = await axios.get(`http://localhost:5000/api/users/${userHook}/tasks?status=${filterStatus}`)
            const { data: taskData } = response.data
            setTodos(taskData)
        }
        getTask()
    }, [userHook, bandReload, filterStatus])

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
