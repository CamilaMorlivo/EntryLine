import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {BsFillTrashFill} from 'react-icons/bs'
import '../css/Index.css';


const Cart = () => {

    const {cart, cartTotal, emptyCart, removeItem} = useContext(CartContext)

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