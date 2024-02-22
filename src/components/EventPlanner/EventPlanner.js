// src/components/EventPlanner/EventPlanner.js
import React, { useState, useEffect } from 'react';
import './EventPlanner.css';

function EventPlanner() {
    const [events, setEvents] = useState([]);
    const [eventInput, setEventInput] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        const storedEvents = JSON.parse(localStorage.getItem('eventPlannerEvents'));
        if (storedEvents) setEvents(storedEvents);
    }, []);

    useEffect(() => {
        localStorage.setItem('eventPlannerEvents', JSON.stringify(events));
    }, [events]);

    const handleAddEvent = () => {
        if (!eventInput.trim() || !date.trim()) return;
        const newEvent = { id: Date.now(), text: eventInput, date };
        setEvents([...events, newEvent]);
        setEventInput('');
        setDate('');
    };

    // Assuming a similar delete functionality as seen in ToDoList and TaskManager
    const handleDeleteEvent = (id) => {
        const updatedEvents = events.filter(event => event.id !== id);
        setEvents(updatedEvents);
    };

    return (
        <div className="event-planner-container">
            <input
                className="event-input"
                type="text"
                value={eventInput}
                onChange={(e) => setEventInput(e.target.value)}
                placeholder="Event Name"
            />
            <input
                className="event-date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <button className="event-add-button" onClick={handleAddEvent}>Add Event</button>
            <ul>
                {events.map((event) => (
                    <li key={event.id} className="event-item">
                        <strong>{event.text}</strong> - {event.date}
                        <button className="event-delete-button" onClick={() => handleDeleteEvent(event.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EventPlanner;
