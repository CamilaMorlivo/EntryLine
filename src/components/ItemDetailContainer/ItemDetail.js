export const ItemDetail = ({item}) => {
	
	return (
		<div>
			<img src={item.img}/>
			<h4>{item.nombre}</h4>
			<p>Precio:{item.precio}</p>
			<small>Stock disponible: {item.stock}</small>
			<p>{item.desc}</p>
			<a className="btn btn-primary my-2">Ver más</a>
		</div>

	);
}

export default ItemDetail;
