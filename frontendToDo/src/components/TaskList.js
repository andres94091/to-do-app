import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import Task from './Task'
import AddTask from './AddTask'


const TaskList = () => {

    const [todos, setTodos] = useState([
        {task: 'buy eggs', state: false}
    ])

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
                            key={index}
                            index={index}
                            todo={todos}
                            completeTodos={completeTodos}
                        />
                    )
                })}
                <AddTask setTodos={setTodos} />
            </div>
        </>
    )
}

// TaskList.propTypes = {

// }

export default TaskList
