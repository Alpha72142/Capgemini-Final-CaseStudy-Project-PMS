import React from 'react'
import './css/topbar.css'
import Avatar from './img/avatar.png'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import ForumIcon from '@mui/icons-material/Forum';









function Topbar() {
  return (
    <>
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'>
               <span className='logo'>Dashboard</span>
            </div>
            <div className='topRight'>
                <div className='topbarIconContainer'>
                  <a href="/AdminDashBoard/chat" className='btn'><ForumIcon  style={{marginRight:"10px"}}/></a>
                   <a href="/AdminDashBoard/add/admin" className="btn"><AppRegistrationIcon/></a>
                </div>
                <img src={Avatar} alt='' className='topAvatar'/>
            </div>
            
        </div>
    </div>
 
    </>
    
  )
}

export default Topbar