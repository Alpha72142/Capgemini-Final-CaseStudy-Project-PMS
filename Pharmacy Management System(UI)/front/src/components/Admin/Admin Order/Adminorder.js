
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Drugservice from '../../../services/AdminService/Drugservice';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import './adminorder.css'


const AdminOrderList = () => {

  const [orders, setorders] = useState([]);

  const init = () => {
    Drugservice.viewOrders()
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

  const handleDelete = (id) => {
    console.log('Printing id', id);
    Drugservice.deleteorder(id)
      .then(response => {
        console.log('order deleted successfully', response.data);
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }


  return (
    <>
    <div  className='orderlist' style={{flex:'5'}}>
    <nav className="navbar">
        <div className="container">
          <h3 className='navbar-title-design'>Orders<ShoppingCartIcon style={{width:'40px',height:'30px',marginBottom:'10px'}}/></h3>
          <h7 style={{color:'white' ,marginBottom:'10px'}} className='navbar-option'>Accept <CheckIcon/> Reject <ClearIcon/></h7>
        </div>
        
      </nav>
      <div>
        <div className="container-drugs ">

        <div className='tableFixHead12'>
        <table className="col-xs-7 table-bordered table-striped table-condensed fixed_header">
              <thead className="table-header-design">
                <tr>
                  <th className="col">Doctor Name</th>
                  <th className="col">Drug Name</th>
                  <th className="col">Drug Price</th>
                  <th className="col">Actions</th>
                </tr>
              </thead>
              <tbody className='table-body' >
                {
                  orders.map(order => (
                    <tr key={order.id}>
                      <td className='col'>{order.doctor}</td>
                      <td className='col'>{order.name}</td>
                      <td className='col'>{order.price}</td>
                      <td>
                        <Link className="btn btn-info btn-action-update" to={`/AdminDashboard/Pickup/${order.id}`}><CheckIcon/></Link>
                        <button className="btn btn-action-delete  ml-2" onClick={() => { handleDelete(order.id); }}><ClearIcon/></button>
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
    </>
  );
}

export default AdminOrderList;
