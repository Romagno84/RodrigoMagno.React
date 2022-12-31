import Navbar from './Components/CustomNavbar';
import ItemListContainer from './Components/ItemListContainer';
import ItemlDetailContainer from "./Components/ItemDetailContainer";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Cart from './Components/Cart';
import CartcontextProvider from './Components/CartContext';

const App = () => {
  return( 
    <CartcontextProvider>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route  path="/" element={<ItemListContainer/>}/>
      <Route  path="/category/:categoryid" element={<ItemListContainer/>}/>
      <Route path="/item/:idItem" element={<ItemlDetailContainer/>}/>
      <Route path="/Cart" element={<Cart/>}/>
    </Routes>
    
    </BrowserRouter>
    </CartcontextProvider>

  )
}

export default App;