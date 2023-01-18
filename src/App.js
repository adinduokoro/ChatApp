import React, {useState} from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login'
import { useStateValue } from './StateProvider';



function App() {
  const [{user} , dispatch] = useStateValue()
  
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
        <Router>
          <Sidebar />
            <Routes>
              <Route element={<Chat />} />
              <Route path="rooms">
                <Route path=":roomId" element={<Chat />} />
              </Route>
            </Routes>
        </Router>
      </div>
      ) }
      
    </div>

  // <div className="app">
  // <div className="app__body">
  //   <Router>
  //     <Sidebar />
  //       <Routes>
  //         <Route index element={<Chat />} />
  //         <Route path="/rooms/:roomId" element={<Chat />} />
  //       </Routes>
  //   </Router>
  // </div>
  // </div>
  );
}

export default App;
