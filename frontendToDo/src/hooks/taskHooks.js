import { useEffect, useState } from "react"
import { getTask } from "../helpers/taskReqs";

export const useGetTask = (user) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getTask(user)
            .then(task => {
                console.log('taaaaaaaaask', task);
                setState({
                    task,
                    loading: false
                })
            })

    }, [user])
    return state
}

