import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'; // for toast notifications
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState(''); // State for new password
  const [confirmPassword, setConfirmPassword] = useState(''); // State for confirm password

  // Function to check if the passwords match
  const checkPassword = () => {
    if (newPassword === confirmPassword) {
      console.log('Password:', newPassword); // Log password if they match
      toast.success('Password updated successfully'); // Show success toast
      setNewPassword(''); // Clear new password field
      setConfirmPassword(''); // Clear confirm password field
    } else {
      toast.error('Passwords do not match'); // Show error toast if passwords don't match
    }
  };

  return (
    <>
      <div className='min-h-screen flex justify-center items-center bg-[#0F0C0C] font-poppins'>
        <div className='flex justify-center items-center'>
          <div className="card flex flex-col justify-center items-center bg-[#282525] lg:w-[616px] max-w-[616px] h-auto rounded-md p-8">
            <div>
              <h1 className='text-[#FFFFFF] text-[18px] font-bold mt-3 text-center'>
                Reset Password
              </h1>
            </div>
            
            {/* New Password Input */}
            <div>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)} // Properly update state
                placeholder="Enter New Password"
                className="py-2 px-4 rounded-md border w-[90%] lg:w-[439px] max-w-[439px] h-[52px] mt-6 border-gray-300 focus:outline-none focus:ring-2 text-black font-poppins"
              />
            </div>

            {/* Confirm Password Input */}
            <div>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)} // Properly update state
                placeholder="Confirm New Password"
                className="py-2 px-4 rounded-md border w-[90%] lg:w-[439px] max-w-[439px] h-[52px] mt-6 border-gray-300 focus:outline-none focus:ring-2 text-black font-poppins"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                onClick={checkPassword}
                type="submit"
                className="bg-[#9383E0] font-bold text-white px-4 py-2 rounded-md font-poppins w-[117px] h-[48px] mt-4"
              >
                SUBMIT
              </button>
            </div>

          </div>
        </div>
      </div>
      
      {/* Toast Notifications */}
      <ToastContainer />
    </>
  );
};

export default ResetPassword;

