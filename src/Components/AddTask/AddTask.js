import React, {useState} from "react"
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from "react-redux";
import { addTask } from "../../Redux/Actions/listTask";




const AddTask = () => {
  const [text,setText] = useState("")
  const dispatch = useDispatch()

  const handleChange= (e) =>{
    e.preventDefault()
    if (text){
      dispatch(addTask({id: Math.random(), text, isDone:false}))
    setText("");
    } else {
      alert ("can not add an empty text!")
    }
  }
  return (
    <div>
     <Form>
           <Form.Control  onSubmit={handleChange}
           type="text"
            placeholder="Enter task ..." 
            onChange={(e)=> setText(e.target.value)} 
            value={text} />     
           
           
            <Button variant="success" style={{margin: "2%"}} type="submit" onClick={handleChange}>
        Add task
      </Button>
      </Form>
    </div>
  )
}

export default AddTask
