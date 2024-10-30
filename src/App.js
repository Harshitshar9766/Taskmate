
import './App.css';
import Header from './Components/Header';
import ShowTask from './Components/ShowTask';
import AddTask from './Components/AddTask';
import { useEffect, useState } from 'react';


function App() {
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem("taskList")) || []);
  const [task, setTask] = useState({});

  useEffect(() => {
    localStorage.setItem("taskList",JSON.stringify(taskList))
  },[taskList])

  return (
    <div className="App">
    <Header/>

    <ShowTask 
    taskList={taskList} 
    setTaskList={setTaskList}
    task={task}
    setTask={setTask}
    />

    <AddTask 
    taskList={taskList} 
    setTaskList={setTaskList}  
    task={task}
    setTask={setTask}
    />
    </div>
  );
}

export default App;
