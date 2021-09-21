import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const[showAddTask,setShowAddTask]= useState(false)
  const[tasks,setTasks]= useState([
        
    {
        id: 1,
        text: 'Doctors Appointement',
        day: 'Feb 5th at 2:30pm',
        reminder : true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder : true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder : false,
    }
    
]
  )
  // Add Task
  const addTask=(task) =>{
  const id=Math.floor(Math.random()*10)+1
  const newTask= {id, ...task}
  setTasks([...tasks, newTask]) // a copy of tasks and the new Task that i ve already takens
  }
  // delete a task 
  const deleteTask=(id) => {
   setTasks(tasks.filter((task) => task.id !==id))
  }

  return (
    <div className="App">
  
      <Header  onAdd={() => setShowAddTask(!showAddTask)}   />
      { showAddTask && <AddTask  onAdd={addTask}   />}
      {tasks.length > 0 ? (
      <Tasks  tasks={tasks}  onDelete={deleteTask}   /> ) 
      : (
       'No Tasks to show'
      )}
      
    </div>
  );
}

export default App;
