import React, { useState } from 'react'
import TaskDisplay from './TaskDisplay'
import styles from "./Form.module.css";

function Form({ onAddTask }) {
    const [taskInput,setTaskInput]=useState('')
    function handleSubmit(e){
        e.preventDefault(e);
        
        if(taskInput){
            let newTask={
                id:Math.floor(Math.random()*100),
                task:taskInput,
                isDone:false,
            }
            console.log(newTask);
            onAddTask(newTask)
            setTaskInput('') 
        }else{
            alert('Enter Input')
        }
    }
  return (
    <>
        <section className="container-fluid mt-3">
            <div className="row">
                <div className="col-12 col-sm-10 col-md-8 col-lg-6 mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                        <input 
                            type="text" 
                            className='form-control me-2'
                            placeholder='Enter a new task' 
                            value={taskInput} 
                            onChange={(e)=>setTaskInput(e.target.value)}
                         />
                        <button className={`btn btn-primary ${styles.addBtn}`}>Add Task</button>
                    </div>
                    </form>     
                </div>
            </div>
            
        </section>
    </>
  )
}

export default Form
