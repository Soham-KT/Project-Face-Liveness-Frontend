import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import main_logo from '../Assets/main_logo.jpeg';
import './ResetPassword.css';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const checkPassword = () => {
    if (newPassword === confirmPassword) {
      toast.success('Password updated successfully');
      setNewPassword('');
      setConfirmPassword('');
    } else {
      toast.error('Passwords do not match');
    }
  };

  return (
    <>
      <div className='reset-password-container'>
        <div className='reset-password-card'>
          <div className="logo">
            <img src={main_logo} alt="Logo" width={100} height={100} />
          </div>
          <div className="heading">
            <p className='main-heading'>Next Gen Face Authentication</p>
          </div>
          <h1 className='reset-heading'>Reset Password</h1>


          <div>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)} // Properly update state
              placeholder="Enter New Password"
              className="reset-input"
            />
          </div>


          <div>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)} // Properly update state
              placeholder="Confirm New Password"
              className="reset-input"
            />
          </div>


          <div>
            <button
              onClick={checkPassword}
              type="submit"
              className="reset-submit-btn"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>


      <ToastContainer />
    </>
  );
};

export default ResetPassword;
