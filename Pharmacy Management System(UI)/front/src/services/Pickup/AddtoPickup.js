import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Drugservice from "../AdminService/Drugservice";



const AddtoPickup = () => {
    const [drname, setdrname] = useState('');
    const [name, setname] = useState('');
    const [price, setprice] = useState('');
    const { id } = useParams();
    let navigate = useNavigate();
    const saveOrderToPickup = (e) => {
        e.preventDefault();

        const order = { drname, name, price, id };
        if (id) {
            Drugservice.addtopickup(order)
                .then(response => {
                    console.log("added successfully", response.data);
                    navigate("/AdmindashBoard/Ahistory");
                })
                .catch(error => {
                    console.log('something went wroing', error);
                })
        }
    }

    useEffect(() => {
        if (id) {
            Drugservice.orderById(id)
                .then(order => {
                    setdrname(order.data.doctor);
                    setname(order.data.name);
                    setprice(order.data.price);

                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])


    return (
        <div className="adddrugs" style={{flex:'5'}}>
        <div className='editbody'>
                
                <div className="admin-login-form-container">
                <form>
                     <div className='admin-login-form-header'>Add to Pickup</div>
                    <div className="form-field natv" >

                        <li style={{marginLeft:"-30px"}} className='editin'>{drname} </li>
                    </div>
                    <div className="form-field natv">

                        <li style={{marginLeft:"-30px"}} className='editin'>{name} </li>
                    </div>
                    <div className="form-field natv">

                        <li style={{marginLeft:"-30px"}} className='editin'>{price} </li>
                    </div>
                    <div class="form-field natv" >
                        <button style={{marginLeft:"9rem"}}onClick={(e) => saveOrderToPickup(e)} className="btn editb">Save</button>
                    </div>
                </form>

                
            </div>
            </div>
        </div>

    )
}

export default AddtoPickup;
