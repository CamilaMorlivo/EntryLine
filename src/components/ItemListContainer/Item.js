import { Link } from "react-router-dom";
import '../css/Index.css';

export const Item = ({evento}) => {
	
	return (
		<div className="divEvento">
			<figure>
                    <img src={evento.img}/>

                    <div>
						<Link to={`/item/${evento.id}`} className="eventoLink">
                            <h4>{evento.nombre}</h4>
                            <p>Precio: ${evento.precio}</p>
                            <p>Fecha: {evento.fecha}</p>
                            <p>{evento.desc}</p>
						</Link >
				 	</div>     
            </figure>		
		</div>

	);
}

export default Item;
