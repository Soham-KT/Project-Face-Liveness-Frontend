import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Login from './Login/Login';

import ErrorPage from './ErrorPage/ErrorPage';

import ForgetPassword from './ForgetPassword/ForgetPassword';
import ResetPassword from './ResetPassword/ResetPassword';
import SignUp from './SignUp/SignUp';
import Dashboard from './Dashboard/Dashboard';
import IHavePassword from './IHavePassword/IHavePassword';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import ProfilePg from './ProfilePg/ProfilePg';



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  useEffect(() => {
    const publicRoutes = ["/profile","/signup", "/IHavePassword","/ForgetPassword","/reset_password"];
    const sessionId = localStorage.getItem("sessionId");

    // If the current route is public, skip the authentication check
    if (publicRoutes.includes(location.pathname)) {
      return;
    }

    if (sessionId) {
      axios
        .post("http://localhost:5000/admin/verify-session", { sessionId })
        .then((response) => {
          if (response.data.valid) {
            setIsAuthenticated(true);
          } else {
            localStorage.removeItem("sessionId");
            setIsAuthenticated(false);
            navigate("/"); 
          }
        })
        .catch(() => {
          localStorage.removeItem("sessionId");
          setIsAuthenticated(false);
          navigate("/"); 
        });
    } else {
      setIsAuthenticated(false);
      navigate("/"); 
    }
  }, [navigate, location.pathname]);

  return (
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/signup" element={< SignUp/>} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/reset_password" element={<ResetPassword />} />
        <Route path="/IHavePassword" element={< IHavePassword/>} />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/profile" element={<ProfilePg/>}></Route>
        {
            isAuthenticated &&
            (
              <>
                <Route path="/Dashboard" element={< Dashboard/>} />
              </>
            )
        }

       
      </Routes>
  );
}

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
