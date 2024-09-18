import React from 'react'
import { useState } from "react";
import './ProfilePg.css';
import logo from "../Assets/logo.png";
import { FaPlus, FaPen } from 'react-icons/fa';


export default function ProfilePg  () {


    const [phoneNumber, setPhoneNumber] = useState("");
    const [showUploadPopup, setShowUploadPopup] = useState(false); 
    const [selectedImage, setSelectedImage] = useState(null); 


    const handlePhoneNumberChange = (event) => {
        const input = event.target.value;
        const numericInput = input.replace(/[^0-9]/g, '');
        setPhoneNumber(numericInput);
    };

    const handlePlusClick = () => {
        setShowUploadPopup(true);  
    };
    const handleImageUpload = (event) => {
        const file = event.target.files[0]; 
        if (file) {
            const imageUrl = URL.createObjectURL(file);  
            setSelectedImage(imageUrl); 
            setShowUploadPopup(false);  
        }
    };
    const handleClosePopup = () => {
        setShowUploadPopup(false);  
    };
    

    return (
        <div className="ProfilePg_body_full">
            <div className="ProfilePg_body">
                <div className="ProfilePg_main">

                    <div className='ProfilePg_header_left'></div>

                    <div className='ProfilePg_header_center'>
                        <div className='ProfilePg_im'>
                        <img src={selectedImage || logo} alt="Profile" /> 

                        <div className='ProfilePg_plus-icon' onClick={handlePlusClick}>
                        <FaPlus />
                        </div>

                        </div>
                        <div className="ProfilePg_text"><h1>Profile Page</h1></div>
                    </div>

                    <div className='ProfilePg_header_right'><h1>
                        <FaPen className="ProfilePg_pen-icon" /> edit
                    </h1> </div>
                </div>
                <div className="ProfilePg_inputs">
                    <div className="ProfilePg_input">
                        <p>Name : </p>
                        <input type="text" />
                    </div>

                    <div className="ProfilePg_input">
                        <p>Email : </p>
                        <input type="email" />
                    </div>
                    <div className="ProfilePg_input">
                        <p>Moblie No.: </p>
                        <input type="tel" value={phoneNumber}
                            onChange={handlePhoneNumberChange} />
                    </div>
                    <a href="" className='ProfilePg_link' >Want Change Password ?</a>

                </div>


            </div>
            {showUploadPopup && (  
             <div className="ProfilePg_popup">
             <div className="ProfilePg_popup_content">
            <h2>Upload Profile Photo</h2>
            <input type="file" accept="image/*" onChange={handleImageUpload} /> 
            <button onClick={handleClosePopup}>Close</button>
             </div>
            </div>
         )}

            </div>
    );
}

