import '../css/Index.css';
import { useEffect, useState } from 'react';
import { getData } from '../../helpers/getData';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

export const ItemDetailContainer = () => {
	
	const [item, setItem] = useState([])
	const [loading, setLoading] =  useState()

	const {itemId} = useParams()

	console.log(itemId)

	useEffect(() => {

		setLoading(true)

		getData()

			.then((res) => {

				setItem(res.find((evt) => evt.id === Number(itemId)))
				
			})
			.catch((error) => {
				console.log(error)
			})
			.finally(() => {
				setLoading(false)
			})
	},[itemId])

	return (
		<div>

			{
				loading 
				? <Loader/>
				: <ItemDetail item={item}/>
				

			}

		</div>

	);
}

export default ItemDetailContainer;
