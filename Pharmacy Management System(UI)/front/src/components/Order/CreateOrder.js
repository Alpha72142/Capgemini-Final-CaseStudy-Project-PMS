import { useState } from "react";
import { Link,useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import DrugServiceDr from "../../services/Doctor/DrugServiceDr";
import './createOrder.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';



const CreateOrder = () => {
    const[doctor, setdrname] = useState('');
    const[name, setname] = useState('');
    const[price, setprice] = useState('');
    const {id} = useParams();
let navigate=useNavigate();
    const saveDruginorder = (e) => {
        e.preventDefault();
        
        const order = {doctor,name, price, id};
        if (id) {
            DrugServiceDr.addDruginorder(order)
            .then(response => {
                console.log("drug added successfully", response.data);
                navigate("/Drdashboard/orderlist");
            })
            .catch(error => {
                console.log('something went wroing', error);
            })
        } 
    }

    useEffect(() => {
        if (id) {
            DrugServiceDr.get(id)
                .then(order => {

                    setname(order.data.name);
                    setprice(order.data.price);
                    
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])
    return(
        
        <div className='adddrugs2'>
          <div className='editbody2'>
           <div className="admin-login-form-container">
           <Link to="/Drdashboard/doctorslist" > <ArrowBackIosIcon className='back-btn1' /></Link>
            <form>
            <div className="admin-login-form-header">
                    <input 
                        type="text" 
                        className='iedit1'
                        id="Doctor Name"
                        value={doctor}
                        onChange={(e) => setdrname(e.target.value)}
                        placeholder="Enter name" 
                        required/>
                   </div>

                <div className="form-field inside3">
                    <li   className='iedit2'>
                    {name}
                    </li>

                </div>
                <div className="form-field inside3">
                <li  className='iedit2'>
                    {price}
                    </li>

                </div>
                
                <div class="form-field inside1">
                    <button onClick={(e) => saveDruginorder(e)} className="wbit2" >Confirm details</button>
                </div>
            </form>
            {/* <Link to="/list">Back to List</Link> */}
        </div>
        </div>
        </div>
        
    )
}

export default CreateOrder;