import { Link } from "react-router-dom";
import '../css/Index.css';

export const Item = ({evento}) => {
	
	return (
		<div className="divEvento">
			<h4>{evento.nombre}</h4>
			<p>Precio: ${evento.precio}</p>
			<p>Fecha: {evento.fecha}</p>
			<p>{evento.desc}</p>

			{
				evento.stock > 0
				?	<Link to={`/item/${evento.id}`} className="btn btn-primary my-2">Ver más</Link >
				:	<p className="btn btn-outline-danger">No hay stock de este producto</p>
			}
		</div>

	);
}

export default Item;
