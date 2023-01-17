import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat.js'
import { Routes , Route } from 'react-router';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="app">

      {!user ? ( 
        <h1>Login</h1>
      ) : ( 
        <div className="app__body">
          <Sidebar />
            <Routes>
              <Route index path="/" element={<Chat/>} />
              <Route path="/rooms/:roomId" element={<Chat />} />
            </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
