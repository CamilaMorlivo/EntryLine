export const ItemDetail = ({item}) => {
	
	return (
		<div className="divEventoDetail">
			<h4>{item.nombre}</h4>
			<p>Precio: ${item.precio}</p>
			<p>Fecha: {item.fecha}</p>
			<p>Dirección: {item.direccion}</p>
			<p>{item.descCompleta}</p>

			<small>Stock disponible: {item.stock}</small>
			
		</div>

	);
}

export default ItemDetail;
