import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogOut } from "react-icons/fi";
import AuthServiceDr from './AuthServiceDr';
import DrugServiceDr from './DrugServiceDr';
import {FiSearch} from "react-icons/fi";
import './DrDruglist.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const DrugListDr = () => {

  const [drugs, setdrug] = useState([]);
  const [SearchByname, setSearchByName] = useState('');

  const init = () => {
    DrugServiceDr.getAll()
      .then(response => {
        console.log('Printing Drug data', response.data);
        setdrug(response.data);
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
       
           <h3 className='navbar-title-design' href="#">Drugs</h3>
            <form class="d-flex">
                 <input className='search' type="text" placeholder="Search" onChange={e => setSearchByName(e.target.value)}/>
                 <FiSearch className='search-icon-edit'/>
             </form>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
           <ul class="navbar-nav">
            <li class="nav-item">
                 <Link  to="/Drdashboard/orderlist" className="btn mb-2 linkdesign1"><ShoppingCartIcon/>View Cart</Link>
             </li>
             <li class="nav-item">
                  <Link  to="/Drdashboard/Docpickuplist" className="btn mb-2 linkdesign1">Pay and Orders</Link>
             </li>
        
             <li class="nav-item dropdown">
   
                {currentUser ? (
                  <div className="navbar-nav ms-auto">
                    <li className="nav-item-l">
                      <a href="/" className="logoutH1" onClick={logOut}>
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
    
    
    
    
<body>
<div className='container-drugs' >
<div className='tableFixHead1'>
<table className="col-xs-7 table-bordered table-striped table-condensed fixed_header">
          <thead className="table-header-design">
            <tr>
              <th className="col">Drug Name</th>
              <th className="col">Drug Price</th>
              <th className="col">Manufacturing Date</th>
              <th className="col">Expiry Date</th>
              <th className="col">Details</th>
              <th className="col">Actions</th>
            </tr>
          </thead>
          <tbody className='table-body' >
             {
                drugs.filter((drug) => {
                  if (SearchByname ==="") {
                    return drug
                  }
                  else if (drug.name.toLowerCase().includes(SearchByname.toLowerCase())) {
                    return drug
                  }

                }).map(drug => (
              <tr key={drug.id}  className='table-row'>
                <td className='col'>{drug.name}</td>
                <td className='col'>{drug.price}</td>
                <td className='col'>{drug.mngDate}</td>
                <td className='col'>{drug.expDate}</td>
                <td className='col'>{drug.details}</td>
                <td>
                <Link className="btn btn-info btn-action-update" to={`/Drdashboard/doctor/order/${drug.id}`}> Add to cart</Link>
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
    </body>
</div>
    
  );
}

export default DrugListDr;
