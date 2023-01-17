import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat.js'
import { Routes , Route } from 'react-router';

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
          <Routes>
            <Route index path="/" element={<Chat/>} />
            <Route path="/rooms/:roomId" element={<Chat />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
