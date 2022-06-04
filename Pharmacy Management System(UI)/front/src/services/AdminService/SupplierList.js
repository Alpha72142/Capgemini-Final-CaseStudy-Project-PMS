import { useEffect, useState } from 'react';
import Drugservice from './Drugservice';
import {FiSearch} from "react-icons/fi";
import DeleteIcon from '@mui/icons-material/Delete';
import './supplier.css';




const SupplierList = () => {

  const [suppliers, setsupplier] = useState([]);
  const [SearchByname, setSearchByName] = useState('');

  const init = () => {
    Drugservice.viewSupplier()
      .then(response => {
        console.log('Printing Drug data', response.data);
        setsupplier(response.data);
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
    Drugservice.deleteSupplier(id)
      .then(response => {
        console.log('drug deleted successfully', response.data);
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }




  return (
    <>
    <div  className='supplierlist' style={{flex:'5'}}>
      <nav class="navbar">
        <div class="container">
          <h3 className='navbar-title-design'>Suppliers</h3>
          <form class="d-flex">
              <input className='search' type="text" placeholder="Search" onChange={e => setSearchByName(e.target.value)} />
              <FiSearch className='search-icon-edit'/>
            </form>
         
        </div>
      </nav>

         <body>
              <div className="container-drugs">
                
              <div className='tableFixHead'>
              <table className="col-xs-7 table-bordered table-striped table-condensed fixed_header">
                              <thead className="table-header-design">
                                     <tr>
                                        <th className="col">Name</th>
                                        <th className="col">Email</th>
                                        <th className="col">Contact</th>
                                        <th className="col">Drug Name</th>
                                        <th className="col">Drug Price</th>
                                        <th className="col">Actions</th>
                                      </tr>
                              </thead>
                              <tbody className='table-body' >
                                    { 
                                      suppliers.filter((supplier) => {
                                          if (SearchByname ==="") {
                                              return supplier
                                              }
                                          else if (supplier.name.toLowerCase().includes(SearchByname.toLowerCase())) {
                                               return supplier
                                              }
                                         }).map(supplier => (
                                                <tr key={supplier.id} className='table-row'>
                                                       <td className='table-body-align'>{supplier.name}</td>
                                                       <td className='table-body-align'>{supplier.email}</td>
                                                       <td className='table-body-align'>{supplier.phoneNumber}</td>
                                                       <td className='table-body-align'>{supplier.drugName}</td>
                                                       <td className='table-body-align'>{supplier.drugPrice}</td>
                                                       <td><button className="btn  btn-action-delete ml-2" onClick={() => { handleDelete(supplier.id);}}><DeleteIcon/></button></td>
                                                 </tr>
                                        ))
                                    } 
                               </tbody>
                         </table>
                      </div>
                 
                </div>
          </body>
    </div>
    
    </>
  );
}

export default SupplierList;