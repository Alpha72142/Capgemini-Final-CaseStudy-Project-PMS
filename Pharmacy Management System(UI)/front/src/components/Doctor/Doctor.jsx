
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthServiceDr from '../../services/Doctor/AuthServiceDr';
import './Doctor.css';
import {BiUser} from "react-icons/bi";
import {BiLockAlt} from "react-icons/bi";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


function Doctor() {

    const [data, setData] = useState({
        username: "",
        password: ""
    })


    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await AuthServiceDr.login(data.username, data.password).then(
                () => {
                    navigate("/Drdashboard/doctorslist");
                    window.location.reload();
                },
                (error) => {
                    console.log(error);
                }
            )
        }
        catch (err) {
            console.log(err);
        }
    }



    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    return (
       
     <div className='adddrugs2'>

            <div className='editbody1' >
               
                <div className='admin-login-form-container1'>
                <Link to="/" > <ArrowBackIosIcon className='back-btn1' /></Link>
                    <form onSubmit={handleLogin}>
                        <div className='admin-login-form-header1'><AccountCircleIcon style={{width:'50px',height:'60px'}}/>Doctor</div>
                        <div className="form-field natv">
                        <BiUser className='login-admin-user'/>
                            <input onChange={(e) => handle(e)} id="username" value={data.username} className='iedit1' type="username" placeholder="Username" required />

                        </div>

                        <div className="form-field natv">
                        <BiLockAlt className='login-admin-user'/>
                            <input onChange={(e) => handle(e)} id="password" value={data.password} className='iedit1' type="password" placeholder="Password" required />

                        </div>

                        <div class="form-field natv">
                            <button className="wbit1" type="submit">Login</button>

                        </div>
                        <Link className='dlink' to={"/registerdr"}>Not a user? Register now</Link>
                    </form>
                </div>

            </div>

  </div>

       
    )
}

export default Doctor;