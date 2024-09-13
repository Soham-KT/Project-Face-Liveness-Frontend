import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import main_logo from '../Assets/main_logo.jpeg';
import './ForgetPassword.css';

const ForgetPassword = () => {
  const [Mail, setMail] = useState({ mail: '' });
  const [otpStage, setOtpStage] = useState(false);
  const [otp, setOtp] = useState('');

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };


  const forgetPasswordEmail = () => {
    if (validateEmail(Mail.mail)) {
      toast.success('Otp sent on Email successfully');
      setOtpStage(true); // Move to OTP stage
    } else {
      toast.error('Please enter a valid email');
    }
  };


  const submitOtp = () => {
    if (otp) {
      toast.success('OTP verified successfully');

    } else {
      toast.error('Please enter the OTP');
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


          {!otpStage && (
            <>
              <div>
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
            </>
          )}


          {otpStage && (
            <>
              <div>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                  className="input-field"
                />
              </div>
              <div>
                <button
                  onClick={submitOtp}
                  type="submit"
                  className="submit-button verify-button"
                >
                  VERIFY OTP
                </button>
              </div>
            </>
          )}


          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
