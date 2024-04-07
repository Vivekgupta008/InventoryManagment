import "./App.css";
import { Route,Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage"; 
import DeliveryPartner from "./pages/DeliveryPartner";
import AdminPage from "./pages/AdminPage";
import Ordertrack from "./pages/Ordertrack";
import Analytics from "./pages/Analytics";
import Register from "./pages/RegisterPage";
import InventoryManager from "./pages/InventoryManager";
import Order from "./components/Order";
import Stock from "./pages/Stock";

function App() {
  return (
    <div className='w-[100%] h-[100vh] '>
      <Routes>
          <Route path='/login' element ={<LoginPage/>} />
          <Route path='/register' element ={<Register/>} />
          <Route path='/del' element ={<DeliveryPartner/>} />
          <Route path='/inv' element ={<InventoryManager/>} />
          <Route path='/admin' element ={<AdminPage/>}/>
          <Route path='/orderTrack' element ={<Ordertrack/>}/>
          <Route path='/analytics' element={<Analytics/>}/>
          <Route path= '/details/:id' element ={<Order/>}/>
          <Route path="/stock" element={<Stock/>}/>
      </Routes>
    </div>
  );
}

export default App;
