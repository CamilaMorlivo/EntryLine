import '../css/Index.css';
import { useEffect, useState } from 'react';
import { getData } from '../../helpers/getData';
import ItemDetail from './ItemDetail';

export const ItemDetailContainer = ({children, id}) => {
	
	const [item, setItem] = useState([])

	useEffect(() => {

		getData()
			.then((res) => {

				setItem(res[id])
				console.log(res)

			})
			.catch((error) => {
				console.log(error)
			})
			.finally(() => {
				console.log("Fin del proceso")
			})
	})

	return (
		<div>

			<h1 className='h'>{children}</h1>
			<hr/>

            <h3>PRODUCTO:</h3>

			<ItemDetail item={item}/>

		</div>

	);
}

export default ItemDetailContainer;
