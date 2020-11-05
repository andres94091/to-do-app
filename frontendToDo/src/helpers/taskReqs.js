import axios from 'axios'
export const getTask = async ( user )=>{
    try {
        const response = await axios.get(`http://localhost:5000/task/user/${user}`)
        const {data:taskData} = response.data
        console.log(taskData);
        return taskData
    } catch(e) {
        console.log(e);
        return []
    }
}