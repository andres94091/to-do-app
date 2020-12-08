import React from 'react'
import '../index.css';

const TaskFilter = ({setFilterStatus}) => {

  const handleFilterInput = (event) => {
    setFilterStatus(event.target.value)
  }

  return (
    <>
      <form className='filter-todos' onChange={handleFilterInput}>
        <input className="form-check-input" type="radio" id='null' name='filer' value="null" />
        <label className="form-check-label" for="null">
          All
          </label>
        <input className="form-check-input" type="radio" id='true' name='filer' value="true" />
        <label className="form-check-label" for="true">
          Done
          </label>
        <input className="form-check-input" type="radio" id='false' name='filer' value="false" />
        <label className="form-check-label" for="false">
          NotDone
          </label>
      </form>

    </>
  )
}

export default TaskFilter
