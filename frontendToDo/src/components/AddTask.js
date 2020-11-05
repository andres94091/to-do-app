import React, {useState} from 'react'

export const AddTask = ({setTodos}) => {

    const [inputValue, setInputValue] = useState('')

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
        setInputValue('')
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
