import { useEffect, useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import Drugservice from '../AdminService/Drugservice';
import AuthServiceDr from '../Doctor/AuthServiceDr';
import DrugServiceDr from '../Doctor/DrugServiceDr';



const PickUpList = () => {

  const [orders, setorders] = useState([]);
  const [SearchByname,setSearchByName] = useState('');

  const init = () => {
    DrugServiceDr.doctorPickUpList()
      .then(response => {
        console.log('Printing Drug data', response.data);
        setorders(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
  }

  useEffect(() => {
    
    init();
  }, []);

  const [currentUser, setCurrentUser] = useState(undefined);
  
  useEffect(() => {
    const user = AuthServiceDr.getCurrentUser();
 
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthServiceDr.logout();
  };

  return (
    <div className='druglist' >
    <nav class="navbar navbar-expand-lg  navcolor">
      
        <h3 className='navbar-title-design' href="#">History</h3>
        <div class="collapse navbar-collapse nav-calps" id="navbarSupportedContent">
       
          <ul class="navbar-nav ">
            <li class="nav-item">
              <Link to="/Drdashboard/doctorslist" className="btn mb-2 linkdesign1">Show Drugs</Link>
            </li>
            <li class="nav-item">
              <Link to="/Drdashboard/orderlist" className="btn mb-2 linkdesign1">Cart</Link>
            </li>
            <li class="nav-item dropdown">
   
                {currentUser ? (
                  <div className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <a href="/" className="btn  logoutH" onClick={logOut}>
                        Logout <FiLogOut/>
                      </a>
                    </li>
                  </div>
                )
                  : (
                    <div className="navbar-nav ms-auto">
                      <li className="nav-item">
                        <Link to={"/admin/*"} className="nav-link">
                        </Link>
                      </li>
                    </div>
                  )
                }
        </li>
          </ul>
        </div>
   
    </nav>

    <div>
    <div className='container-drugs' >
    
     
      
    <div className='tableFixHead1'>
      
    <table className="col-xs-7 table-bordered table-striped table-condensed fixed_header">
          <thead className="table-header-design">
            <tr>
            <th>Doctor Name</th>
              <th className="th-header-padding">Drug Name</th>
              <th className="th-header-padding">Drug Price</th>
              <th className="th-header-padding">Actions</th>
            </tr>
          </thead>
          <tbody className='table-body' >
          {
            orders.map(order => (
              <tr key={order.id}  className='table-row'>
                  <td className='table-body-align'>{order.drname}</td>
                <td className='table-body-align'>{order.name}</td>
                <td className='table-body-align'>{order.price}</td>
                <td >
                <Link className="btn btn-info btn-action-update btn-pay" to="/Drdashboard/pay" >UPI Payment</Link>
               
                </td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </div>
      <div>
    </div>
    </div>
   
    </div>
    </div>
  );
}

export default PickUpList;
