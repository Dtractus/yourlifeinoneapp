// src/components/TaskManager/TaskManager.js
import React, { useState, useEffect } from 'react';
import './TaskManager.css';

function TaskManager() {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('taskManagerTasks'));
        if (storedTasks) setTasks(storedTasks);
    }, []);

    useEffect(() => {
        localStorage.setItem('taskManagerTasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleAddTask = () => {
        if (!taskInput.trim() || !description.trim()) return;
        const newTask = { id: Date.now(), text: taskInput, description, completed: false };
        setTasks([...tasks, newTask]);
        setTaskInput('');
        setDescription('');
    };

    const handleDeleteTask = (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    };

    return (
        <div className="task-manager-container">
            <input
                className="task-input"
                type="text"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                placeholder="Task Title"
            />
            <textarea
                className="task-textarea"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Task Description"
            ></textarea>
            <button className="task-add-button" onClick={handleAddTask}>Add Task</button>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} className="task-item">
                        <strong>{task.text}</strong>: {task.description}
                        <button className="task-delete-button" onClick={() => handleDeleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskManager;
