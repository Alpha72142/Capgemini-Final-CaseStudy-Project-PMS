import { Route, Routes } from "react-router-dom";
import React from 'react'
import Topbar from "./components/Admin/dashboard/Topbar";
import Sidebar from "./components/Admin/dashboard/Sidebar";
import DrugList from "./services/AdminService/DrugList";
import DashHome from "./components/Admin/dashboard/DashHome";

import PrivateRoute from "./Unauthorize/PrivateRoute";
import AdminOrderList from "./components/Admin/Admin Order/Adminorder";
import SupplierList from "./services/AdminService/SupplierList";
import PickUpList from "./services/Pickup/PickUpList";
import AddDrug from "./components/AddDrug";
import AddSupplier from "./components/AddSupplier";
import AdminSignUp from "./services/AdminService/AdminSignup";
import AddtoPickup from "./services/Pickup/AddtoPickup";
import Chatbot from './components/chatbot/Chatbot';

function AdashRouter() {
  return (
<>
<Topbar/>
<div className="container-sidebar">
<Sidebar/>
<Routes>
     
        <Route  exact path='/home/*' element={<PrivateRoute><DashHome/></PrivateRoute>}/>
         <Route path='/drugs' element={<PrivateRoute><DrugList /></PrivateRoute>}/>
         <Route path="/adminOrders" element={<PrivateRoute><AdminOrderList/></PrivateRoute>} />
         <Route path="/supplier" element={<PrivateRoute><SupplierList /></PrivateRoute>} />
         <Route path='/Ahistory' element={<PrivateRoute><PickUpList /></PrivateRoute>} />
         <Route path="/add/Drugs" element={<PrivateRoute><AddDrug /></PrivateRoute>} />
         <Route path='/add/supplier' element={<PrivateRoute><AddSupplier /></PrivateRoute>} />
         <Route exact path="/add/admin" element={<PrivateRoute><AdminSignUp /></PrivateRoute>} />
         <Route path="/drug/edit/:id" element={<PrivateRoute><AddDrug /></PrivateRoute>} />
         <Route path='/Pickup/:id' element={<AddtoPickup />} />
         <Route path='/chat' element={<Chatbot/>}/> 

            



         
         
         
    
      </Routes>
</div>



</> 
  )
}

export default AdashRouter