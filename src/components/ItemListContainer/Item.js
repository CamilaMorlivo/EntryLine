import { Link } from "react-router-dom";
import '../css/Index.css';

export const Item = ({evento}) => {
	
	return (
		<div className="divEvento">
			<h4>{evento.nombre}</h4>
			<p>Precio: ${evento.precio}</p>
			<p>Fecha: {evento.fecha}</p>
			<p>{evento.desc}</p>
			<Link to={`/item/${evento.id}`} className="btn btn-primary my-2">Ver más</Link >
		</div>

	);
}

export default Item;
