import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import ForgetPassword from './ForgetPassword/ForgetPassword';
import ResetPassword from './ResetPassword/ResetPassword'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
       
      </Routes>
    </Router>
  );
}

export default App;
