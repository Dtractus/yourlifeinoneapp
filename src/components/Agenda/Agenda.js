// src/components/Agenda/Agenda.js
import React, { useState, useEffect } from 'react';
import './Agenda.css';

function Agenda() {
    const [todayTasks, setTodayTasks] = useState([]);

    useEffect(() => {
        // Assuming tasks have a 'date' attribute in 'YYYY-MM-DD' format
        const allTasks = JSON.parse(localStorage.getItem('todoListTasks')) || [];
        const today = new Date().toISOString().split('T')[0];
        const filteredTasks = allTasks.filter(task => task.date === today);
        setTodayTasks(filteredTasks);
    }, []);

    return (
        <div className="agenda-container">
            <h2>Today's Agenda</h2>
            <ul>
                {todayTasks.length > 0 ? (
                    todayTasks.map(task => (
                        <li key={task.id} className="agenda-item">{task.text}</li>
                    ))
                ) : (
                    <p>No tasks for today!</p>
                )}
            </ul>
        </div>
    );
}

export default Agenda;
