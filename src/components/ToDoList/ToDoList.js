// src/components/ToDoList/ToDoList.js
import React, { useState, useEffect } from 'react';
import './ToDoList.css';

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    // Load tasks from local storage on component mount
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('todoListTasks'));
        if (storedTasks) setTasks(storedTasks);
    }, []);

    // Save tasks to local storage whenever tasks change
    useEffect(() => {
        localStorage.setItem('todoListTasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleAddTask = () => {
        if (!taskInput.trim()) return;
        const newTask = { id: Date.now(), text: taskInput, completed: false };
        setTasks([...tasks, newTask]);
        setTaskInput(''); // Clear input after adding
    };

    const handleDeleteTask = (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    };

    return (
        <div className="todo-list-container">
            <input
                className="todo-input"
                type="text"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                placeholder="Add a new task"
            />
            <button className="todo-add-button" onClick={handleAddTask}>Add Task</button>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} className="todo-task">
                        {task.text}
                        <button className="todo-delete-button" onClick={() => handleDeleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;
