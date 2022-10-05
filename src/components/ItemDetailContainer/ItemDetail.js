import ItemCount from "../ItemCount/ItemCount"
import {useContext, useState} from "react"
import Swal from 'sweetalert2'
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

export const ItemDetail = ({item}) => {

	const {cart, isInCart, addToCard} = useContext(CartContext)
	
	const [cantidad, setCantidad] = useState(1)

	const handleAgregar = () =>{

		const evento ={
			id: item.id,
			nombre: item.nombre,
			precio: item.precio,
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

	return (
		<div className="divEventoDetail">
			<h4>{item.nombre}</h4>
			<p>Precio: ${item.precio}</p>
			<p>Fecha: {item.fecha}</p>
			<p>Dirección: {item.direccion}</p>
			<p>{item.descCompleta}</p>

			<small>Stock disponible: {item.stock}</small>

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
