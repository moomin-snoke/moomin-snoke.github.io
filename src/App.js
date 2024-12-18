import React from 'react';
import Nav from './components/Nav';
import './App.css';
import Home from './pages/home/Home';
import { Routes, Route } from 'react-router-dom';


import './App.css';


function App() {
  return (
    <div className="App">
        <div className="app-container">
      {/* 고정된 배경 부분 */}
      <div className="fixed-background">
      </div>

      {/* 스크롤 가능한 내용 */}
      <div className="scrollable-content">
        <div className="repeated-pattern">
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
