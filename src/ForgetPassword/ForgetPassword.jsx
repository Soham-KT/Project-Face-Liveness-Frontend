import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import main_logo from '../Assets/main_logo.jpeg';
import './ForgetPassword.css';

const ForgetPassword = () => {
  const [Mail, setMail] = useState({ mail: '' });
  
  const forgetPasswordEmail = () => {
    if (Mail.mail) {
      toast.success('Otp sent on Email successfully');
    } else {
      toast.error('Please enter a valid email');
    }
  };

  return (
    <>
      <div className='forget-password-container'>
        <div className='forget-password-card'>
          <div className="logo">
            <img src={main_logo} alt="Logo" width={100} height={100} />
          </div>
          <div className="heading">
            <p className='main-heading'>Next Gen Face Authentication</p>
            <p className='sub-heading'>Forget Password</p>
          </div>        
            
              <div className='password-input-wrapper'>
                <input
                  type="email"
                  value={Mail.mail}
                  onChange={(e) => setMail({ ...Mail, mail: e.target.value })}
                  placeholder="Email address"
                  className="input-field"
                />
              </div>
              <div>
                <button
                  onClick={forgetPasswordEmail}
                  type="submit"
                  className="submit-button"
                >
                  SUBMIT
                </button>
              </div>
            
          <ToastContainer position="top-center" />
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
