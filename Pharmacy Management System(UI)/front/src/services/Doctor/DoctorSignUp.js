import React from 'react';
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DrugServiceDr from './DrugServiceDr';
import './drsignup.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const DoctoSignUp = () => {
    const [name, setname] = useState('');
    const [contact, setcontact] = useState('');
    const [email, setemail] = useState('');
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const { id } = useParams();

    let navigate = useNavigate();

    const regDoctor = (e) => {
        e.preventDefault();

        const doctordata = { name, contact, email, username, password };

        //create
        DrugServiceDr.registerDoctor(doctordata)
            .then(response => {
                console.log("Doctor register successfully", response.data);
                navigate("/doctor");
            })
            .catch(error => {
                console.log('something went wrong', error);
            })

    }


    return (
        <div className="adddrugs addr" >
        <div className='editbody2 editdr'>
            
            <div className='admin-login-form-container'>
            <Link to="/doctor" > <ArrowBackIosIcon className='back-btn btndr' /></Link>
            <form>
            <div className='admin-login-form-header headerdr'>Register</div>
                <div className="form-field natv">
                    <input
                        type="text"
                        className='iedit'
                        id="Admin Name"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        placeholder="Enter name"
                    />

                </div>
                <div className="form-field natv">
                    <input
                        type="text"
                        className='iedit'
                        id=" Admin contact"
                        value={contact}
                        onChange={(e) => setcontact(e.target.value)}
                        placeholder="Enter Contact"
                    />
                </div>

                <div className="form-field natv">
                    <input
                        type="email"
                        className='iedit'
                        id="email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        placeholder="Enter Email"
                    />

                </div>
                <div className="form-field natv">
                    <input
                        type="text"
                        className='iedit'
                        id="username"
                        value={username}
                        onChange={(e) => setusername(e.target.value)}
                        placeholder="Enter Username"
                    />

                </div>
                <div className="form-field natv">
                    <input
                        type="password"
                        className='iedit'
                        id="password"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        placeholder="Enter Password"
                        autoComplete=''
                    />

                </div>
                <div class="form-field natv" >
                    <button onClick={(e) => regDoctor(e)} className="btn wbit">Save</button>
                </div>
            </form>
            </div>
           </div>
        </div>
    )
}
export default DoctoSignUp;