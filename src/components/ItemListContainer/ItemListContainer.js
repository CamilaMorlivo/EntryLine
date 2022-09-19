import '../css/Index.css';
import { useEffect, useState } from 'react';
import { getData } from '../../helpers/getData';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

export const ItemListContainer = () => {
	
	const [eventos, setEventos] = useState([])
	const [loading, setLoading] =  useState()
	const {categoryId} = useParams()

	console.log(categoryId)

	useEffect(() => {
		
		setLoading(true)

		getData()
			.then((res) => {

				if(!categoryId){
					setEventos(res)
				}else{
					setEventos(res.filter((prod) => prod.category === categoryId))
				}

			})
			.catch((error) => {
				console.log(error)
			})
			.finally(() => {
				setLoading(false)
			})
	}, [categoryId])

	// if(loading){
	// 	return <div> <h2>Cargando...</h2> </div>
	// }

	return (
		
		<div>


			{
				loading 
				? <Loader/>
				: <ItemList eventos={eventos}/> 
			}

		</div>

	);
}

export default ItemListContainer;
