import './App.css';
import { useState } from 'react';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import { Footer } from './components/Footer';

function App() {
  const [tasks, setTasks] = useState([
    {id: 52771, name: "Record lectures", completed: false},
    {id: 67243, name: "Edit lectures", completed: true},
    {id: 46761, name: "Watch lectures", completed: false}
  ]);

  const [show, setShow] = useState(true)

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => (id !== task.id)))
  }
  return (
    <div className="App">
     <Header/>
     <TaskList tasks={tasks} setTasks={setTasks} show={show} setShow={setShow} handleDelete={handleDelete}/>
     <Footer/>
    </div>
  );
}

export default App;
