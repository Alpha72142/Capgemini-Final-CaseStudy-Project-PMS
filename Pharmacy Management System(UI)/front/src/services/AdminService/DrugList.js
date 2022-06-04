import { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import Drugservice from './Drugservice';
import './DrugList.css'
import {FiSearch} from "react-icons/fi";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';






const DrugList = () => {

  //state
  const [drugs, setdrug] = useState([]);
  const [SearchByname, setSearchByName] = useState('');
  


  const init = () => {
    Drugservice.getAll()
      .then(response => {
        console.log('Printing Drug data', response.data);
        setdrug(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }
  //shows what need to be done after rendering perticular thing
  useEffect(() => {

    init();
  }, []);

  const handleDelete = (id) => {
    console.log('Printing id', id);
    Drugservice.remove(id)
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
   
    <div  className='druglist' style={{flex:'5'}}>
   
      <nav className="navbar">
                <h3 className='navbar-title-design'><div >Drugs</div></h3>
                <form className="d-flex">
                        <input className='search' type="text" placeholder="Search" onChange={e => setSearchByName(e.target.value)}/>
                        <FiSearch className='search-icon-edit'/>
                </form>
      </nav>
    
  <body >
      <div className='container-drugs' >
        
      
        <div className='tableFixHead'>
        
          <table className="col-xs-7 table-bordered table-striped table-condensed fixed_header">
            <thead className="table-header-design">
              <tr>
                <th className="col" >Drug Name </th>
                <th className="col"  >Drug Price</th>
                <th className="col" >Manufacturing Date</th>
                <th className="col" >Expiry Date</th>
                <th className="col" >Details</th>
                <th className="col" >Actions</th>
              </tr>
            </thead>
            <tbody className='table-body' >
              {
                drugs.filter((drug) => {
                  if (SearchByname === "") {
                    return drug
                  }
                  else if (drug.name.toLowerCase().includes(SearchByname.toLowerCase())) {
                    return drug
                  }

                }).map(drug => (
                  <tr key={drug.id} className='table-row'>
                    <td className='col'>{drug.name}</td>
                    <td className='col'>{drug.price}</td>
                    <td className='col'>{drug.mngDate}</td>
                    <td className='col'>{drug.expDate}</td>
                    <td className='col'>{drug.details}</td>
                    <td>
                      <Link className="btn btn-info btn-action-update" to={`/AdminDashboard/drug/edit/${drug.id}`}><ModeEditIcon/></Link>

                      <button className="btn  ml-2 btn-action-delete" onClick={() => {handleDelete(drug.id);}}><DeleteIcon/></button>
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

    </>
  );
}

export default DrugList;
