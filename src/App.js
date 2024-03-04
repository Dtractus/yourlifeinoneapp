// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ToDoList from './components/ToDoList/ToDoList';
import TaskManager from './components/TaskManager/TaskManager';
import Agenda from './components/Agenda/Agenda';
import EventPlanner from './components/EventPlanner/EventPlanner';
import NotFound from './components/NotFound'; // Assuming you have a NotFound component
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/todo-list" component={ToDoList} />
        <Route path="/task-manager" component={TaskManager} />
        <Route path="/agenda" component={Agenda} />
        <Route path="/event-planner" component={EventPlanner} />
        <Route path="/" exact component={ToDoList} />
        <Route component={NotFound} /> {/* Handle unmatched routes */}
      </Switch>
    </Router>
  );
}

export default App;
