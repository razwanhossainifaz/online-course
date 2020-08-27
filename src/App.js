import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';

function App() {
  return (
    <div className="App">
    <Header></Header>
      <div>
        <Courses></Courses>
      </div>
    </div>
  );
}

export default App;
