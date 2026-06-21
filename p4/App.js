import React, { useState } from 'react';

const ToDoFunction = () => {
  // State for the list of tasks (array of objects)
  const [tasks, setTasks] = useState([]);
  
  // State for the current text in the input field
  const [newTask, setNewTask] = useState('');

  // 1. Function to add a new task
  const addTask = () => {
    // .trim() prevents adding empty spaces as a task
    if (newTask.trim() !== '') {
      // Use the spread operator (...) to keep existing tasks and add the new one
      setTasks([
        ...tasks, 
        { id: Date.now(), text: newTask, completed: false }
      ]);
      setNewTask(''); // Clear input field after adding
    }
  };

  // 2. Function to delete a task
  const deleteTask = (taskId) => {
    // .filter() keeps only the tasks that DO NOT match the deleted ID
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // 3. Function to toggle completion status
  const toggleTaskCompletion = (taskId) => {
    // .map() iterates through the array to find the specific task and flip its boolean
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'sans-serif', marginTop: '30px' }}>
      <h2>To-Do List</h2>
      
      {/* Input Section */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={addTask} style={{ marginLeft: '10px' }}>Add Task</button>
      </div>

      {/* Rendered Task List */}
      <ul style={{ listStyle: 'none', padding: 0, width: '300px', margin: '0 auto' }}>
        {tasks.map((task) => (
          <li 
            key={task.id} 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              marginBottom: '10px',
              padding: '10px',
              border: '1px solid #ccc',
              // Dynamically change styling based on completion status
              textDecoration: task.completed ? 'line-through' : 'none',
              backgroundColor: task.completed ? '#f1f1f1' : '#fff'
            }}
          >
            {/* Clicking the text toggles completion */}
            <span 
              onClick={() => toggleTaskCompletion(task.id)} 
              style={{ cursor: 'pointer' }}
            >
              {task.text}
            </span>
            
            {/* Delete button */}
            <button onClick={() => deleteTask(task.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoFunction;