import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AddTask from './component/AddTask';
import Tasks from './component/Tasks';
import Header from './component/Header';
import Footer from './component/Footer';
import About from './component/About';

function App() {
  const [tasks, setTasks] = useState([]);

  const [showAddTask, setShowAddTask] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  // fetch tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');

    const data = await res.json();
    return data;
  };

  // fetch task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);

    const data = await res.json();
    return data;
  };

  // Delete task
  const onDeleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Task reminder
  const addReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    // PUT Task
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  // Add new Task
  // const addNewTask = (e, newtask) => {
  //   e.preventDefault();
  //   setTasks([...tasks, newtask]);
  // };

  const addNewTask = async (newtask) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newtask),
    });

    const data = await res.json();

    setTasks([...tasks, data]);
  };

  // Show Add Task

  const showTaskForm = () => {
    setShowAddTask(!showAddTask);
  };

  return (
    <Router>
      <div className='App'>
        <Header onShowTaskForm={showTaskForm} showAddTask={showAddTask} />
        <Routes>
          <Route
            path='/'
            exact
            element={
              <>
                {showAddTask && <AddTask addNewTask={addNewTask} />}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDeleteTask={onDeleteTask}
                    addReminder={addReminder}
                  />
                ) : (
                  'No tasks to show'
                )}
                <Footer />
              </>
            }
          />

          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
