import './css/Index.css';
import {useState} from "react"

export const ItemCount = ({stock}) => {

	const [counter, setCounter] = useState(1)

	const sumar = () => {
		if(stock <= counter){
			alert("No hay suficiente stock!")
		}else{
			setCounter(counter + 1)	
		}
	}

	const restar = () =>{
		if(counter > 0){
			setCounter(counter - 1)
		}
		

	}

	const [carrito, setCarrito] = useState([])

	const onAdd = () =>{

		if(counter <= 15 && counter > 0){
			var newItem = {
				stock: counter
			}
			
			setCarrito([...carrito, newItem])
		}

		console.log(carrito)
	}

	return (
		<div className='contador'>
			<div>
				<button onClick={restar}>-</button>
				<span>{counter}</span>		
				<button onClick={sumar}>+</button>
			</div>
			<button onClick={onAdd}>Agregar al carrito</button>
			
		</div>
	);
}

export default ItemCount;
