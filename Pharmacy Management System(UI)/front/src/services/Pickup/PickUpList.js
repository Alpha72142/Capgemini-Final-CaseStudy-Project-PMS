import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Drugservice from '../AdminService/Drugservice';
import '../Pickup/pickup.css';


const PickUpList = () => {

  const [orders, setorders] = useState([]);
  const [SearchByname, setSearchByName] = useState('');

  const init = () => {
    Drugservice.PickUpList()
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



  return (
    <div className='History' style={{flex:"5"}}>
    <nav className="navbar">
        <div class="container">
          <h3 className='navbar-title-design'>History</h3>
        </div>
      </nav>

      <div>
        <div className="container-drugs">
        <div className='tableFixHead31'>

        <table className="col-xs-7 table-bordered table-striped table-condensed fixed_header">
              <thead className="table-header-design">
                <tr>
                  <th className="th-header-padding">Doctor Name</th>
                  <th className="th-header-padding">Drug Name</th>
                  <th className="th-header-padding">Drug Price</th>
             
                </tr>
              </thead>
              <tbody>
                {
                  orders.map(order => (
                    <tr key={order.id}>
                      <td className='table-body-align'>{order.drname}</td>
                      <td className='table-body-align'>{order.name}</td>
                      <td className='table-body-align '>{order.price}</td>
                   
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
