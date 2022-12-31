import { useContext } from "react";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
const cartWidget = ()=>{
    const ctx = useContext(CartContext)
    
    const totalQty = ctx.calculoQty()

    return(
        <Link to='/Cart' className="cartButton">
            <div>
                <BsCart2  size={30}/>
                {totalQty > 0 &&
                    <div className="cartQuantity">{totalQty}</div>
                }
            </div> 
        </Link>
    )
}

export default cartWidget;