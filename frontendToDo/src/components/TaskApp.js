import React from 'react'
import { useGetTask } from '../hooks/taskHooks'
import TaskList from './TaskList'

const TaskApp = ({user}) => {

    const {task, loading} = useGetTask(user)
    console.log('taaaaaaaaask',task);

    return (
        <div>
            {loading && <p>Loading</p>}
            <TaskList todo = {task}/>
        </div>
    )
}

export default TaskApp
