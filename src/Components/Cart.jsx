import { collection, doc, setDoc} from "firebase/firestore"
import { db } from "../utils/firebaseConfig";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { updateDoc,increment, } from "firebase/firestore";

const Cart = () => {
    const acceder = useContext(CartContext);

    const createOrder = () =>{
        const orden= {
            buyer: {
               name: "Lionel Messi",
               email:"Lionel@gmail.com",
               phone:"123456789",
            },
            date: new Date(),
            items: acceder.cartList.map(item =>({
                id:item.idItem,
                title:item.nombre,
                price:item.precio,
                qty:item.qtyItem,
            })),
            total:acceder.CalculoTotal()
        }
        console.log(orden)

        const createOrderInFS = async  () =>{
            const newOrderRef = doc(collection(db,"ordenes"))
            await setDoc(newOrderRef,orden);
            return newOrderRef
        }
        createOrderInFS()
         .then(result => {
            console.log(`llega aca`)
            alert("tu orden"+result.id+" ha sido creada")
            acceder.cartList.forEach(async(item)=>{
                const itemRef = doc(db,"Productos", item.idItem);
                await updateDoc(itemRef, {
                    stock:increment (-item.qtyItem)
                });
            })
            acceder.borrarTodo()
         })
         .catch(err=> console.log(err))
         
    }

    return (
        <div className="carritoContainer">
            <h1 className="TituloCarrito">Carrito</h1>
            {
                (acceder.cartList.length > 0)
                ?<button onClick={acceder.borrarTodo} className="botonEliminarTodo">Eliminar Todo</button>
                :<h3 className="CarritoVacio">Tu carrito esta vacio</h3>
            }
            <ul className="listaCarrito">
                {
                   acceder.cartList.length > 0 &&
                   
                    acceder.cartList.map(item=> 
                    <li key={item.id} className="itemCarrito"> 
                    <img src={item.imagen} alt="" className="imagenCarrito" />
                    <p className="textoCarrito"> Producto:{item.nombre} </p> 
                    <p className="textoCarrito"> Cantidad:{item.qtyItem} Precio:{acceder.totalPorItem(item.id)} </p> 
                    <button onClick={()=> acceder.delThis(item.id)} className="botonEliminar">Eliminar</button>
                    </li>  )
                    
                
                }
            </ul>
            {
                acceder.cartList.length > 0 &&
                    <div>
                        <h3 className="cartaFinalizarHeader">Compra Final</h3>
                        <p className="subTotal">{`Subtotal ${acceder.subTotal()} `}</p>
                        <p className="Total">{`Total ${acceder.CalculoTotal()}`}</p>
                        <button onClick={createOrder} className="FinalizarCompra">FINALIZAR COMPRA</button>
                    </div>
            }
        </div>
    );
}

export default Cart;