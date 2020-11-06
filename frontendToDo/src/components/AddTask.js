import React, {useEffect, useRef, useState} from 'react'
import axios from 'axios'

export const AddTask = ({setTodos, user, setBandReload}) => {

    const [inputValue, setInputValue] = useState('')
    const [saveTask, setSaveTask] = useState(true)

    const isFirstRun = useRef(true);
    
    async function fetchData() {
        try {
            await axios.post(`http://localhost:5000/api/tasks`, {
                user_id: user,
                task: inputValue
            })
            setInputValue('')
            setBandReload(band => !band)
        } catch (e){
            console.log(e);
            setBandReload(band => !band)
        }
    }
    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }
        console.log('entre aqui');
        fetchData()
    }, [saveTask])

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!inputValue) return
        setTodos(todos => {
            const newTask =  [...todos, {task: inputValue, status: false}]
            return newTask.sort((x, y) => (x.status === y.status) ? 0 : x.status ? 1 : -1)
        })
        setSaveTask(band => !band)
    }

    return (
        <form onSubmit = {handleSubmit}>
            <input
                type= "text"
                value = {inputValue}
                onChange = {handleInputChange}
            />
        </form>
    )
}

export default AddTask
