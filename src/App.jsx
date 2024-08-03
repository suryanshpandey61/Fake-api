
import { Route,Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import Admin from "./pages/admin";
import Navbar from "./component/Navbar";
import Shop from './pages/shop';




import './App.css'

function App() {
  

  return (
    <>

     <Navbar path="/" element={<Navbar/>}/>

     <Routes>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/" element={<Shop/>}/>
     </Routes>
     
    </>
  )
}

export default App
