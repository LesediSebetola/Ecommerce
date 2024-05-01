import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSighup from './Pages/LoginSighup';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
        
        <BrowserRouter>
         <Navbar/>
         <Routes>
          <Route path="/ecommerce" Component={Shop}/>
          <Route path="/product" element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSighup/>}/>
         </Routes>
         <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
