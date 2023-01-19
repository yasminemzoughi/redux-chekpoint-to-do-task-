import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteTask, doneTask } from '../../Redux/Actions/listTask'
import Edit from '../Edit/Edit'
import './Task.css'

const Task = ({task}) => {
  const dispatch = useDispatch()
  return (
    <div className='task-conatiner' >
      <span className={task.isDone ? "done" : null} >
       {task.text}
        </span>

      <Edit task={task}/>
      <Button variant="secondary" onClick={()=> dispatch(deleteTask(task.id))} >Delete</Button>
      <Button variant="secondary" onClick={()=> dispatch(doneTask(task.id))} >
        {task.isDone ? "undone" : "done"}</Button>

      

    </div>
  )
}

export default Task
