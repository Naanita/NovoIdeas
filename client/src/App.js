import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Dashboard from './components/dashboard';
import Chat from './components/chat'


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path='/chat' element={<Chat/>}/>
    </Routes>
  );
}

export default App;
