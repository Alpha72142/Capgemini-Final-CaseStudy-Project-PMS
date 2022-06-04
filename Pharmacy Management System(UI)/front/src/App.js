import { BrowserRouter, Routes, Route } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import App1 from './App1';
import Admin from './components/Admin/Admin';

import Doctor from './components/Doctor/Doctor';
import DoctorSignUp from './services/Doctor/DoctorSignUp';



import NotFound from './components/NotFound';
import Unauthorize from './components/Unauthorize';
import PrivateRoute from './Unauthorize/PrivateRoute';
import PrivateRouteDr from './Unauthorize/PrivateRouteDr';
import Chatbot from './components/chatbot/Chatbot';
import AdashRouter from './AdashRouter';
import DrDashRouter from './DrDashRouter';
import Pop from './components/Popup/Pop';







function App() {
  return (

    <div>
      <BrowserRouter>

        <div>
          <Routes>
            <Route exact path="/" element={<App1 />} />
            <Route path="/admin" element={<Admin />} />
            <Route exact path="/AdminDashboard/*" element={<PrivateRoute><AdashRouter/></PrivateRoute>} />
            <Route exact path="/Drdashboard/*" element={<PrivateRouteDr><DrDashRouter/></PrivateRouteDr>}/>
            
            

            <Route path="/doctor" element={<Doctor />} />
            <Route exact path="/registerdr" element={<DoctorSignUp />} />
            <Route path="*" element={<NotFound />} />
            <Route path='/unauthorize' element={<Unauthorize />} />
            

            
            
             
            
            
            
            
            <Route path="/chat" element={<Chatbot/>}/>


            <Route path="/1" element={<Pop/>}/>

          </Routes>
        </div>
      </BrowserRouter> 

    </div>

  );
}


export default App;
