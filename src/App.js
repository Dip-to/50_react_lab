// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Change import to remove unused component
import Text from './Components/text';
import TaskManager from './Components/task';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Text />} /> Change component to element
        <Route path="/task" element={<TaskManager />} /> Change component to element
      </Routes>
    </Router>
  );
};

export default App;