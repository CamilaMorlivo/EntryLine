export const ItemDetail = ({item}) => {
	
	return (
		<div>
			<h4>{item.nombre}</h4>
			<p>Precio:{item.precio}</p>
			<small>Stock disponible: {item.stock}</small>
			<p>{item.desc}</p>
			
		</div>

	);
}

export default ItemDetail;
