import '../css/Index.css';
import { useEffect, useState } from 'react';
import { getData } from '../../helpers/getData';
import ItemList from './ItemList';

export const ItemListContainer = ({children}) => {
	
	const [productos, setProductos] = useState([])

	useEffect(() => {

		getData()
			.then((res) => {
				setProductos(res)
			})
			.catch((error) => {
				console.log(error)
			})
			.finally(() => {
				//console.log("Fin del proceso")
			})
	})

	return (
		<div>

			<h1 className='h'>{children}</h1>
			<hr/>

			<ItemList productos={productos}/>

		</div>

	);
}

export default ItemListContainer;
