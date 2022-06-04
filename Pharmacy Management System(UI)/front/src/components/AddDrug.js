import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Drugservice from "../services/AdminService/Drugservice";
import './addDrugs.css'
const AddDrug = () => {
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
        <div className="adddrugs" style={{flex:'3'}}>
        <div className='editbody3'>
            
            <div className="admin-login-form-container">
            <form>
            <div className='admin-login-form-header3'>Add Drug</div>
                <div className="form-field natv">
                    <input
                        type="text"
                        className='iedit'
                        id="Drug Name"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        placeholder="Enter name"
                    />

                </div>
                <div className="form-field natv">
                       <input
                           type="number"
                           className='iedit'
                           id="Drug Price"
                           value={price}
                           onChange={(e) => setprice(e.target.value)}
                           placeholder="Enter Price (Rupees)"
                         />
                </div>
                <div className="form-field natv">
                        <input
                           type="date"
                           style={{fontSize:"22px"}}
                           className='iedit'
                           id="Drug Manufacturing Date"
                           value={mngDate}
                           onChange={(e) => setmngDate(e.target.value)}
                           placeholder="Enter Manufacturing Date"
                         />
                </div>
                <div className="form-field natv">
                        <input
                           type="date"
                           style={{fontSize:"22px"}}
                           className='iedit'
                           id="Drug Expiry Date"
                           value={expDate}
                           onChange={(e) => setexpDate(e.target.value)}
                           placeholder="Enter Expiry Date"
                         />
                </div>
                <div className="form-field natv">
                        <textarea
                           rows="3"
                           cols="23"
                           form="usrform"
                           className='iedit'
                           id="Drug Details"
                           value={details}
                           onChange={(e) => setdetails(e.target.value)}
                           placeholder="Enter Details (Optional)"
                        />
                   
                </div>

                <div className="form-field natv" >
                    <button onClick={(e) => saveDrug(e)} className="wbit">Save</button>
                </div>
            </form>
        </div>
        </div>
        </div>
        
        
    )
}

export default AddDrug;