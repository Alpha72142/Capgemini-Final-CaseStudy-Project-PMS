import { useEffect, useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import AuthServiceDr from '../../services/Doctor/AuthServiceDr';
import DrugServiceDr from '../../services/Doctor/DrugServiceDr';
import './drOrderlist.css'


const OrderList = () => {

  const [orders, setorders] = useState([]);
  const [SearchByname, setSearchByName] = useState('');

  const init = () => {
    DrugServiceDr.orderlist()
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
        <div class="container">
          <h3 className='navbar-title-design nac' href="#">Ordered</h3>
          <div class="collapse navbar-collapse nav-calps" id="navbarSupportedContent">
          
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/Drdashboard/doctorslist" className="btn mb-2 linkdesign1">Show Drugs</Link>
              </li>
              <li class="nav-item">
                <Link to="/Drdashboard/Docpickuplist" className="btn mb-2 linkdesign1">Pay and Orders</Link>
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
        </div>
      </nav>

      <div>
        <div>
        <div className='container-drugs'  >
          <div className='tableFixHead1'>

          <table className="col-xs-7 table-bordered table-striped table-condensed fixed_header">
                <thead className="table-header-design">
                  <tr>
                    <th className="th-header-padding">Doctor Name</th>
                    <th className="th-header-padding">Drug Name</th>
                    <th className="th-header-padding">Drug Price</th>

                  </tr>
                </thead>
                <tbody className='table-body' >
                  {
                    orders.map(order => (
                      <tr key={order.id} className='table-row'>
                        <td className='table-body-align'>{order.doctor}</td>
                        <td className='table-body-align'>{order.name}</td>
                        <td className='table-body-align'>{order.price}</td>

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
    </div>
  );
}

export default OrderList;
