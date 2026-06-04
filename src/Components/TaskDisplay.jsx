import React from 'react'
import styles from "./TaskDisplay.module.css";

function TaskDisplay({taskList,onToggle,onDelete}) {
  return (
    <>
        <div className="row mt-3">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto">
                <div className={`list-group ${styles.taskContainer}`}>
                    {
                    taskList.map((tasks) => ( <li key={tasks.id} className={`list-group-item ${styles.taskItem}`}>
                    <input type="checkbox" className="form-check-input" checked={tasks.isDone} onChange={() => onToggle(tasks.id)}/>
                    <span className={`h6 ms-5 ${tasks.isDone ? styles.completed : styles.pending }`}>
                        {tasks.task}
                    </span>
                    <button className={`${styles.deleteBtn} float-end`} onClick={() => onDelete(tasks.id)}>
                        ✖️
                    </button>
                    </li> ))
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default TaskDisplay
