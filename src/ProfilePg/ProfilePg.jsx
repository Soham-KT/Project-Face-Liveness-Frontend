import React from 'react'
import { useState } from "react";
import './ProfilePg.css';
import logo from "../Assets/logo.png";
import { FaPlus, FaPen } from 'react-icons/fa';


const ProfilePg = () => {


    const [phoneNumber, setPhoneNumber] = useState("");

    const handlePhoneNumberChange = (event) => {
        const input = event.target.value;
        const numericInput = input.replace(/[^0-9]/g, '');
        setPhoneNumber(numericInput);
    };



    return (
        <div className="ProfilePg_body_full">
            <div className="ProfilePg_body">
                <div className="ProfilePg_main">

                    <div className='ProfilePg_header_left'></div>

                    <div className='ProfilePg_header_center'>
                        <div className='ProfilePg_im'>
                            <img src={logo} alt="" />
                            <div className='ProfilePg_plus-icon'>
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
                    <a href="" >Change Password ?</a>

                </div>


            </div></div>
    );
}






export default ProfilePg;
