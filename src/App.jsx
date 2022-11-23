import Navbar from './Components/CustomNavbar';
import ItemListContainer from './Components/ItemListContainer';
import './App.css';

const App = () => {
  return (
    <>
    <Navbar />
    <ItemListContainer mensaje="Hola ItemListContainer" />
    </>
  
  )

} 

export default App;