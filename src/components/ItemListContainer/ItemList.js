import Item from "./Item";

export const ItemList = ({eventos = []}) => {
	

	return (
		<div className="mainContainer">

			{eventos.map((evt) => <Item evento = {evt} key={evt.id}/>)}

		</div>

	);
}

export default ItemList;
