import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Task from "../Task/Task"
import "./ListTask.css"

const ListTask = () => {
    const [status, setStatus] = useState("All")
    const list = useSelector((state)=> state.listReducer.listTasks)
  return (
    <div>  
        <div className='buttons-filter'>
        <Button className='one'
         variant="outline-success"onClick={()=> setStatus ("All")} >
            all
        </Button>

            <Button className='two'
         variant="outline-success"onClick={()=> setStatus ("Done")} >
            done 
            </Button>

            <Button className='three'
         variant="outline-success"onClick={()=> setStatus ("Undone")} >
            Undone 
            </Button>
            </div>
      
      <h2>List task </h2>
      { status === "Done" 
      ? list
      .filter((el) => el.isDone === true)
      .map((el) => <Task task={el} key= {el.id}/>)
      : status === "Undone"
      ? list
      .filter ((el)=> el.isDone === false) 
      .map((el)=> <Task task={el} key= {el.id}/>)
      :list.map (el => ( <Task task={el} key= {el.id}/>))}

    </div>
  )
}

export default ListTask
