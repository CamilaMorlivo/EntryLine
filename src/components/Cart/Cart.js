import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {BsFillTrashFill} from 'react-icons/bs'
import '../css/Index.css';
import { Link, Navigate } from "react-router-dom";


const Cart = () => {

    const {cart, cartTotal, emptyCart, removeItem} = useContext(CartContext)

    // if (cart.length === 0) return <Navigate to="/"/>


    if(cart.length === 0){
        return(
            <div className="divCarrito">
                <h3>Tu carrito está vacio.</h3>
                <hr/>
                <Link to="/" className="btn btn-primary">Ir a comprar</Link>                   
            </div>
        )
    }

    return (
        <div className="divCarrito">

        
            <h2><BsFillTrashFill/></h2>
            <hr/>
            {cart.map((item) =>(
                <div ket={item.id} className="divEntradasCarrito">
                    <h3>{item.nombre}</h3>
                    <p>Precio: {item.precio}</p>
                    <p>Cantidad {item.cantidad}</p>

                    <button onClick={() => removeItem(item.id)} className="btn btn-danger"> <BsFillTrashFill/> </button>
                </div>
                            
            ))}

            <h4>Total: ${cartTotal()}</h4>

            <button onClick={emptyCart} className="btn btn-danger">Vaciar carrito</button>                           
                
        </div>
    )
}

export default Cart;