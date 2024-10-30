import React from 'react'

function ShowTask({taskList, setTaskList, task, setTask}) {
  const handleEdit = (id) => {
const selectedTask = taskList.find((todo) => todo.id === id)
setTask(selectedTask);
// console.log("edit called ",selectedTask);
  }

  const handleDelete = (id) => {
const  updatedTaskList = taskList.filter((todo) => todo.id !== id);
setTaskList(updatedTaskList);
  }
  
  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{taskList.length}</span>
        </div>
        <button className="clearAll" onClick={() => setTaskList([])}>Clear All</button>
      </div>
      <ul>
        {
          taskList.map((task, index) => (
          <li key={task.id}>
          <p>
            <span className="name">{task.name}</span>
            <span className="time">2:09:01 AM 9/14/2030 </span>
           
          </p>
          <i className="bi bi-pencil-fill" onClick={() => { handleEdit(task.id)}}></i>
          <i className="bi bi-trash3" onClick={() => {handleDelete(task.id)}  }></i>
        </li>
          ))
        }
        
      </ul>

    </section>
  )
}

export default ShowTask;