import Item from "./Item";

export const ItemList = ({eventos = []}) => {
	

	return (
		<div className="mainContainer">

			{/* {eventos.map((evt) => <Item evento = {evt} key={evt.id}/>)} */}
			
			{eventos.map((evt) => {

				if(evt.stock > 0){

					return <Item evento = {evt} key={evt.Id}/>
				}else{
					return null
				}	
			})}

		</div>

	);
}

export default ItemList;
