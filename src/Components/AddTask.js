import React from 'react'

function AddTask({taskList, setTaskList,task, setTask}) {

  const handleSubmit = (e) =>{
    e.preventDefault();


    if(task.id){
const date =new Date();
const updatedTask = taskList.map((todo) => (todo.id === task.id ? {id: task.id, name: e.target.task.value,  time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` } : todo  ));
setTaskList(updatedTask);
setTask({});
    }else{
      const date = new Date();
    console.log(date.getTime()); 
    
    const newTask = {
      id: date.getTime(),
      name: e.target.task.value,
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
    }
    setTaskList([...taskList,newTask])
    setTask({});
    }
    
}





  return (
    <section className='addTask'>
      <form onSubmit={handleSubmit}>
        <input type="text" name='task' value={task.name || "" } autoComplete='off' placeholder='add task' maxLength="25" onChange={e => setTask({...task, name: e.target.value})}/>
        <button type="submit">{task.id ? "update" : "Add"}</button>
      </form>
    </section>
  )

}
export default AddTask