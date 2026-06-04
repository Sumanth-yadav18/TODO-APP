import React, { useState } from 'react'
import Form from './Form'
import TaskDisplay from './TaskDisplay'
import Navbar from './Navbar'

function TodoApp() {
    const initialTasks=[{id:101,task:'Complete project',isDone:false},
        {id:102,task:'Go to Gym',isDone:true},
        {id:103,task:'Practice React',isDone:false}
    ]
    const [taskList,setTaskList]=useState(initialTasks)

    function handleAddTasks(newTask){
        setTaskList([...taskList,newTask])
    }

    function handleCheck(id){
        //console.log(id);
        setTaskList(prev=>prev.map(task=>task.id==id?{...task,isDone:!task.isDone}:task))
    }

    function handleDelete(id){
        setTaskList(prev=>prev.filter(task=>task.id!==id))
    }
  return (
    <>  
        <Navbar total={taskList.length}/>
        <h2 className="text-center mt-4 fw-bold text-secondary">Manage Your Daily Tasks</h2>
        <p className="text-center text-muted">Stay organized and boost your productivity 🚀</p>
        <Form onAddTask={handleAddTasks}/>
        <TaskDisplay taskList={taskList} onToggle={handleCheck} onDelete={handleDelete}/>
    </>
  )
}

export default TodoApp
