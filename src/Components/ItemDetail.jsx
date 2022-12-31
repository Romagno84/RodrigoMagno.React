import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount";


const ItemDetail = ({ item }) =>{
    const [itemCount, setItemCount] = useState(0);
    const acceder = useContext(CartContext);

    const onAdd = (qty) =>{
        setItemCount(qty);
        acceder.addToCart(item, qty);
        
    }

    return (
        <>
    
        <div className="ventanaDetalles">
            <h1 className="tituloDetalles">{item.nombre}</h1>
            <img src={item.imagen} alt="" className="imagenDetalles" />
            <h3 className="textoDetalles">{item.descripcion}</h3>
            <h3 className="precioDetalle">{item.precio}$</h3>
            <h2 className="stock">Unidades en stock {item.stock}</h2>
            {
             itemCount === 0
             ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
             : <Link to='/Cart'><button className="boton">CheckOut</button></Link>
             }
        </div>
        
       </> 
    
    )
}

export default ItemDetail;