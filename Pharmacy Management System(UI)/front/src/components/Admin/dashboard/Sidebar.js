import {React,useState,useEffect} from 'react'
// import {Link} from 'react-router-dom'
import "./css/sidebar.css"
import HomeIcon from '@mui/icons-material/Home';
import MedicationIcon from '@mui/icons-material/Medication';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import GroupIcon from '@mui/icons-material/Group';
import AddIcon from '@mui/icons-material/Add';
import HistoryIcon from '@mui/icons-material/History';
import LogoutIcon from '@mui/icons-material/Logout';
import AdminAuthService from '../../../services/AdminService/AdminAuthService'

export default function Sidebar() {

    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
      const user = AdminAuthService.getCurrentUser();
  
      if (user) {
        setCurrentUser(user);
      }
    }, []);

    const logOut = () => {
        AdminAuthService.logout();
      };


  return (
    <>
    <div className='sidebar'>
        <div className='sidebarWrapper'>
          <div className='sidebarMenu'>

          {/*Home default page where Graph will be there */}
              <h3 className='sidebarTitle'>Dashboard</h3>
              <ul className='sidebarList'>
                    <li className='sidebarListItem active'>
                        <HomeIcon className='sidebarIcon'/>
                          <a href='/AdminDashboard/drugs'className='Sbtn'>Home</a>
                    </li>
              </ul>

          {/*different Tables for information*/}
              <h3 className='sidebarTitle'>Quick Menu</h3>
              <ul className='sidebarList'> 
                   {/*} <li className='sidebarListItem'>
                       <MedicationIcon className='sidebarIcon'/>
                        <a href='/AdminDashboard/drugs' className='Sbtn'>Drugs</a>
                        </li>*/}
                    <li className='sidebarListItem'>
                       <CorporateFareIcon className='sidebarIcon'/>
                        <a href='/AdminDashboard/adminOrders' className='Sbtn'>Orders</a>
                    </li>
                    <li className='sidebarListItem'>
                       <LocalShippingIcon className='sidebarIcon'/>
                        <a href='/AdminDashboard/supplier' className='Sbtn'>Suppliers</a>
                    </li>
                  { /* <li className='sidebarListItem'>
                    <GroupIcon className='sidebarIcon'/>
                      Users
                      </li>*/}
                 
              </ul>

              {/*Adding Drugs details and Supplier details */}
              <h3 className='sidebarTitle'>Quick operation</h3>
              <ul className='sidebarList'> 
                   
                    <li className='sidebarListItem'>
                        <AddIcon className='sidebarIcon'/>
                        <a href="/AdminDashboard/add/Drugs" className="Sbtn mb-2 linkdesign">Add Drug</a>
                    </li>
                    <li className='sidebarListItem'>
                        <AddIcon className='sidebarIcon'/>
                        <a href="/AdminDashboard/add/supplier" className="Sbtn mb-2 linkdesign">Add Suppliers</a>
                    </li>
                    <h6>________________________</h6>
                    <li className='sidebarListItem'>
                        <HistoryIcon className='sidebarIcon'/>
                         <a href="/AdminDashboard/Ahistory" className="Sbtn mb-2 linkdesign">Order History</a>
                    </li>
                    <h6>________________________</h6>
                       <li className='side'>
                       {currentUser ?(
                        <div className="sidebar-logout">
                        <li className="sidebarIcon">
                          <a href="/" className="Sbtn logoutH" onClick={logOut} >
                            <LogoutIcon className='sidebarIcon'/>
                            LOGOUT
                             
                          </a>
                        </li>
                      </div>
                       
                      ) 
                        : (
                          <div className="navbar-nav ms-auto">
                          <li className="sidebarIcon">
                            <a href={"/admin/*"} className="nav-link">
                            </a>
                          </li>
                        </div>
                        )
                      }
                       </li>
              </ul>

          </div>
        </div>
    </div>
  
    </>
  )
}
