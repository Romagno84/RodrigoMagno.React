import Navbar from './Components/CustomNavbar';
import ItemListContainer from '../src/Components/ItemListContainer';
import ItemlDetailContainer from "../src/Components/itemDetailContainer";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
  return( 
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route  path="/" element={<ItemListContainer/>}/>
      <Route  path="/category/:categoryId" element={<ItemListContainer/>}/>
      <Route path="/item/:idItem" element={<ItemlDetailContainer/>}/>
    </Routes>
    
    </BrowserRouter>

  )
}

export default App;