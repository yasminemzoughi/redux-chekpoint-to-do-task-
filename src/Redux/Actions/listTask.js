//import

import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "../ActionTypes/listTask"



//actions
export const addTask = (newTask)=>{
    return{
        type: ADD_TASK,
        payload: newTask
    }
}
// delete task
export const deleteTask = (id)=>{
    return {
        type: DELETE_TASK,
        payload: id
    }
}
// done task 
export const doneTask= (id) =>{
  return {
    type: DONE_TASK,
    payload: id
  }  
}
// edit task 
export const editTask = (id, newTask) =>{
    return {
        type: EDIT_TASK,
        payload: {id, newTask}
    }
}