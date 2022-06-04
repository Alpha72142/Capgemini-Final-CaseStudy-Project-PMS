import { Route, Routes } from "react-router-dom";
import React from 'react'
// import DrSidebar from "./components/Doctor/dashboard/DrSidebar";
import DrTopbar from "./components/Doctor/dashboard/DrTopbar";
import PrivateRouteDr from "./Unauthorize/PrivateRouteDr";
import DrugListDr from "./services/Doctor/DrugListDr";
import OrderList from "./components/Order/OrderList";
import DocPickUpList from './services/Pickup/DocPickUpList';
import CreateOrder from "./components/Order/CreateOrder";

import Paytm from './components/Payment/Paytm';
import Chatbot from './components/chatbot/Chatbot';
import Checkout from "./payment/Checkout";
function DrDashRouter() {
  return (
<>
       <DrTopbar/>
            <Routes>
                 <Route exact path="/doctorslist" element={<PrivateRouteDr><DrugListDr/></PrivateRouteDr>} />
                 <Route path="/orderlist" element={<PrivateRouteDr><OrderList /></PrivateRouteDr>} />
                 <Route path='/Docpickuplist' element={<PrivateRouteDr><DocPickUpList/></PrivateRouteDr>} />
                 <Route path='/doctor/order/:id' element={<CreateOrder />} />
                 <Route path="/pay" element={<Paytm/>} />
              <Route path="/pay/stripe" element={<Checkout/>} />*
                 <Route path='/chat' element={<Chatbot/>}/> 
            </Routes>

</> 
  )
}

export default DrDashRouter;