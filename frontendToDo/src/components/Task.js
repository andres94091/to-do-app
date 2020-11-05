import React from 'react'
// import PropTypes from 'prop-types'

const Task = ({ todo, index, completeTodos }) => {

    return (
        <div 
            className='todo'
            style = {{textDecoration: todo.status ? "line-through" : "" }}
        >
            {todo.task}
            <div>
                <button onClick = {() => completeTodos(index)}> Complete</button>
            </div>
        </div>
    )
}

// task.propTypes = {

// }

export default Task
