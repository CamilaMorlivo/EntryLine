import ItemCount from "../ItemCount"
import {useContext, useState} from "react"
import Swal from 'sweetalert2'
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
//import Select from "../Select/Select"

export const ItemDetail = ({item}) => {

	const {cart, isInCart, addToCard} = useContext(CartContext)
	
	const [cantidad, setCantidad] = useState(1)
	//const[asiento, setAsiento] = useState(item.asientos[0].value)

	const handleAgregar = () =>{

		const evento ={
			id: item.id,
			nombre: item.nombre,
			precio: item.precio,
			// asiento,
			cantidad
		}

		console.log(evento)

		isInCart(item.id)
		addToCard(evento)

		Swal.fire({
			title: "Agregado!",
			text: "Las entradas se encuentran en tu carrito.",
			icon: "success",
			timer: "2000"  
		});
	}


	// const isInCart = (id) =>{
		// return cart.find((item) => item.id)
	// }

	return (
		<div className="divEventoDetail">
			<h4>{item.nombre}</h4>
			<p>Precio: ${item.precio}</p>
			<p>Fecha: {item.fecha}</p>
			<p>Dirección: {item.direccion}</p>
			<p>{item.descCompleta}</p>

			<small>Stock disponible: {item.stock}</small>
			
			{
			/* {item.promo && <h5 style={{color: 'red'}}>{item.promo}% OFF!!</h5>} -> SOLO PARA LOS ITEMS CON LA PROPIEDAD "PROMO"*/
			/* <Select options={item.asientos} onSelect={setAsiento}/> */
			}
			
			{
				isInCart(item.id) 
				?	<Link to="/cart" className="btn btn-outline-success mx-4">Terminar mi compra</Link>
				:	<ItemCount 
					stock={item.stock}
					counter={cantidad}
					setCounter={setCantidad}
					handleAgregar={handleAgregar}
					/>
			}
			
		</div>

	)
}

export default ItemDetail;
