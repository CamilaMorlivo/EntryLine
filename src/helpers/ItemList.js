import Item from "../components/Item";

export const ItemList = ({productos = []}) => {
	

	return (
		<div>

			<h2>PRODUCTOS:</h2>

			{productos.map((prod) => <Item producto = {prod} key={prod.id}/>)}

		</div>

	);
}

export default ItemList;
