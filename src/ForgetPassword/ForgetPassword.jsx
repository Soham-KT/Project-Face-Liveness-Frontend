import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../Assets/logo.png'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ResetPassword from '../ResetPassword/ResetPassword';


// enter mail
// submit button
// toast (email send )
// submit button hide
// otp input and submit button appear
// after onclick submit button if otp matches then it should direct it to reset password page

const ForgetPassword = () => {
  const [Mail, setMail] = useState({ mail: '' });
  const [otpStage, setOtpStage] = useState(false); // New state to handle OTP stage
  const [otp, setOtp] = useState(''); // State to store OTP value

  // Function to validate email
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  // Function to handle email submission
  const forgetPasswordEmail = () => {
    if (validateEmail(Mail.mail)) {
      console.log(Mail.mail)
      toast.success('Otp send on Email successfully');
      setOtpStage(true); // Move to OTP stage
    } else {
      toast.error('Please enter a valid email');
    }
  };

  // Function to handle OTP submission (can be expanded as per your requirements)
  const submitOtp = () => {
    if (otp) {
      console.log(otp)
      toast.success('OTP verified successfully');
      // Handle OTP submission logic here
    } else {
      toast.error('Please enter the OTP');
    }
  };
  return (
    <>
      <div className='min-h-screen flex justify-center items-center bg-[#0F0C0C] font-poppins'>
        <div className='flex justify-center items-center'>
          <div className="card flex flex-col justify-center items-center bg-[#282525] lg:w-[616px] max-w-[616px] h-auto rounded-md p-8">
            <div className="logo">
              <img src={logo} alt="Logo" width={84} height={84} />
            </div>
            <div className="heading text-center">
              <p className='font-poppins text-[#FFFFFF] text-[25px] font-bold p-2'>Next gen passenger tracking</p>
              <p className='text-[#FFFFFF] text-[18px] font-bold mt-3 text-center'>Forget Password</p>
            </div>
            {/* Email input field */}
            {!otpStage && (
              <>
                <div>
                  <input
                    type="email"
                    value={Mail.mail}
                    onChange={(e) => setMail({ ...Mail, mail: e.target.value })}
                    placeholder="Email address"
                    className="py-2 px-4 rounded-md border w-[90%] lg:w-[439px]  max-w-[439px] h-[52px] mt-6 border-gray-300 focus:outline-none focus:ring-2 text-black font-poppins"
                  />
                </div>
                <div>
                  <button
                    onClick={forgetPasswordEmail}
                    type="submit"
                    className="bg-[#9383E0] font-bold text-white px-4 py-2 rounded-md font-poppins w-[117px] h-[48px] mt-4"
                  >
                    SUBMIT
                  </button>
                </div>
              </>
            )}
            {/* OTP input field */}
            {otpStage && (
              <>
                <div>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter OTP"
                    className="py-2 px-4 rounded-md border w-[90%] lg:w-[439px]  max-w-[439px] h-[52px] mt-6 border-gray-300 focus:outline-none focus:ring-2 text-black font-poppins"
                  />
                </div>
               <div>
                  <button
                    onClick={submitOtp}
                    type="submit"
                    className="bg-[#9383E0] font-bold text-white px-4 py-2 rounded-md font-poppins w-[130px] h-[48px] mt-4"
                  >
                    VERIFY OTP
                  </button>
                </div>
              </>
            )}
           {/* Toast Container */}
            <ToastContainer />
          </div>
          {/* <Router>
            <Routes>
              <Route path='/ResetPassword' element={<ResetPassword />}/>
            </Routes>
          </Router> */}
        </div>
      </div>
    </>
  )
}

export default ForgetPassword
