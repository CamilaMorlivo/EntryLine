import '../css/Index.css';
import { useEventos } from '../Hooks/useEventos';
import ItemList from './ItemList';
import Loader from '../Loader/Loader';

export const ItemListContainer = () => {
	
	const {eventos, loading} = useEventos()

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
