import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UsersTaskCountGrid = ({bandReload}) => {

  const [arrayUsersTasks, setArrayUsersTasks] = useState([])

  useEffect(async () => {
    const response = await axios.get(`http://localhost:5000/api/users`)
    const { data: usersData } = response.data
    setArrayUsersTasks(usersData)
  }, [bandReload])

  const renderHeader = () => {
    const header = ['Id', 'Name', 'Task per user']
    return header.map((column, index) => {
      return <th key={index}>{column}</th>
    })
  }

  const renderBody = () => {
    return arrayUsersTasks.map(({id, name, amounttask}) => {
      return (
        <tr key = {id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{amounttask}</td>
        </tr>
      )
    })
  }

  return (
    <>
      <table className="users-task-table table table-striped">
        <thead>
          <tr className= "users-task-table-header">{renderHeader()}</tr>
        </thead>
        <tbody>
          {renderBody()}
        </tbody>
      </table>
    </>
  )
}

export default UsersTaskCountGrid
