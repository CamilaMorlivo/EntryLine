import ItemCount from "../ItemCount";
import {useState} from "react"
import Swal from 'sweetalert'
//import Select from "../Select/Select";

export const ItemDetail = ({item}) => {
	
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

		Swal({
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
			
			{/* <Select options={item.asientos} onSelect={setAsiento}/> */}
			
			<ItemCount 
				stock={item.stock}
				counter={cantidad}
				setCounter={setCantidad}
				handleAgregar={handleAgregar}
			/>

		</div>

	);
}

export default ItemDetail;
