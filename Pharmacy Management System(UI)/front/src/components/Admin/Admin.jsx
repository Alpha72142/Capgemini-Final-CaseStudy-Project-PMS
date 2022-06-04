
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AdminAuthService from '../../services/AdminService/AdminAuthService';
import '../Admin/admin.css';
import {BiUser} from "react-icons/bi";
import {BiLockAlt} from "react-icons/bi";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function Admin() {

  const [data, setData] = useState({
    username: "",
    password: ""
  })

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await AdminAuthService.login(data.username, data.password).then(
        () => {
          navigate("/AdminDashboard/drugs");
          window.location.reload();

        },
        (error) => {

          console.log(error);
          setError("Incorrect credentials");

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
    
    <div className="adddrugs1" >
        <div className='editbody1'>
         
          <div className="admin-login-form-container1">
              <Link to="/" > <ArrowBackIosIcon className='back-btn' /></Link>
            <form onSubmit={handleLogin}>
              <div className='admin-login-form-header1'><AccountCircleIcon style={{width:'50px',height:'60px'}}/>Log in </div>
              <div className="form-field natv">
              <BiUser className='login-admin-user'/>
                
                <input onChange={(e) => handle(e)} id="username" value={data.username} className='iedit1' type="username" placeholder="Username" required />
              </div>

              <div className="form-field natv">
              <BiLockAlt className='login-admin-user'/>
                <input onChange={(e) => handle(e)} id="password" value={data.password} className='iedit1' type="password" placeholder="Password" required />
              </div>

              <div className="form-field natv">
                <button className="wbit1" type="submit">Login</button>
              </div>
            </form>

          </div>
        </div>










      </div>

   
  )
}

export default Admin;