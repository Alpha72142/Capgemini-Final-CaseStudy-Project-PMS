import React, { useState } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import './model.css'
import Drugservice from '../../services/AdminService/Drugservice';

const Model = ({show,close}) => {
  const [name, setname] = useState('');
  const [price, setprice] = useState('');
  const [mngDate, setmngDate] = useState('');
  const [expDate, setexpDate] = useState('');
  const [details, setdetails] = useState('');

  const { id } = useParams();
  let navigate = useNavigate();

  const saveDrug = (e) => {
    e.preventDefault();

    const drug = { name, price, id,mngDate,expDate,details };
    if (id) {
        //update
        Drugservice.update(drug)
            .then(response => {
                console.log('Drug data updated successfully', response.data);
                navigate("/AdminDashboard/drugs");
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    } else {
        //create
        Drugservice.create(drug)
            .then(response => {
                console.log("drug added successfully", response.data);
                navigate("/AdminDashboard/drugs");
            })
            .catch(error => {
                console.log('something went wroing', error);
            })
    }
}

useEffect(() => {
  if (id) {
      Drugservice.get(id)
          .then(drug => {
              setname(drug.data.name);
              setprice(drug.data.price);
              setprice(drug.data.mngDate);
              setprice(drug.data.expDate);
              setprice(drug.data.details);


          })
          .catch(error => {
              console.log('Something went wrong', error);
          })
  }
}, [])







  return (
   show ? <div className='drugs-model-container'>
      <div className='addDrugs-model'>
          <header className='addDrugs-model-header'>
              <h2 className='addDrugs-model-header-title'>Add drugs</h2>
            <button className='adddrugs-close' onClick={()=>close()}>X</button>
          </header>
          <main className='addDrugs-model-content'>
          <div className="addDrugs-model-input-box">
                <div className="addDrugs-model-input-box-pad">
                    <input
                      type="text"
                      className='addDrugs-model-input'
                      id="Drug Name"
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                      placeholder="Enter name"
                    />
                 </div>
                 <div className="addDrugs-model-input-box-pad">
                      <input
                          type="number"
                          className='addDrugs-model-input'
                          id="Drug Price"
                          value={price}
                          onChange={(e) => setprice(e.target.value)}
                          placeholder="Enter Price (Rupees)"
                          />
                   </div>
            </div>
            <div className="addDrugs-model-input-box">
                <div className="addDrugs-model-input-box-pad">
                   <input
                      type="date"
                      style={{fontSize:"22px"}}
                      className='addDrugs-model-input-date'
                      id="Drug Manufacturing Date"
                      value={mngDate}
                      onChange={(e) => setmngDate(e.target.value)}
                      placeholder="Enter Manufacturing Date"
                    />
                 </div>
              
               <div className="addDrugs-model-input-box-pad">
                <input
                 type="date"
                 style={{fontSize:"22px"}}
                 className='addDrugs-model-input-date'
                 id="Drug Expiry Date"
                 value={expDate}
                 onChange={(e) => setexpDate(e.target.value)}
                 placeholder="Enter Expiry Date"
               />
               </div>
              
            </div>
              <div className="addDrugs-model-input-box">
              <div className="addDrugs-model-input-box-pad">
                <textarea
                 rows="3"
                 cols="23"
                 form="userform"
                 className='addDrugs-model-input-details'
                 id="Drug Details"
                 value={details}
                 onChange={(e) => setdetails(e.target.value)}
                 placeholder="Enter Details (Optional)"
                />
           </div>
      </div>
             
          </main>
          <footer className='addDrugs-model-footer'>
            {/*<button className='addDrugs-model-close model-buttons'  onClick={()=>close()}>Cancel</button>*/}
            <button className='addDrugs-model-submit model-buttons' onClick={(e) => saveDrug(e)} >Add</button>
          </footer>
      </div>
   
   </div> :null
  )
}

export default Model