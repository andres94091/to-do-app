import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const SearchUser = ({setUserHook}) => {

  const [arrayUsersTasks, setArrayUsersTasks] = useState([])

  useEffect(async () => {
    const response = await axios.get(`http://localhost:5000/api/users`)
    const { data: usersData } = response.data
    setArrayUsersTasks(usersData)
  }, [])

  const renderUserOptions = () => {
    return arrayUsersTasks.map((user, index) => {
      return (
        <option value={user.id}>{user.name}</option>
      )
    })
  }

  const handleUserSelect = (event) => {
    setUserHook(event.target.value);
  }

  return (
    <>
      <select className= "custom-select custom-select-lg" list = "usersList" onChange={handleUserSelect}>
        {renderUserOptions()}
      </select>
    </>
  )
}
