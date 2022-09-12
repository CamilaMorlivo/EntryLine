import './css/Index.css';
import Swal from 'sweetalert'

export const ItemCount = ({stock, counter, setCounter, handleAgregar}) => {


	const sumar = () => {
		if(stock <= counter){
			Swal({
				title: "Error!",
				text: "No hay suficiente stock.",
				icon: "error",
				timer: "2000"  
			});

		}else{
			setCounter(counter + 1)	
		}
	}

	const restar = () =>{
		if(counter > 0){
			setCounter(counter - 1)
		}
	}



	return (
		<div className='contador'>

			<div className='divContador'>
				
				<button onClick={restar} className="btn btn-outline-primary ">-</button>
				
				{counter}		
				
				<button onClick={sumar} className="btn btn-outline-primary ">+</button>
			
			</div>

			<button onClick={handleAgregar} className="btn btn-outline-success ">
				Agregar al carrito
			</button>		
		
		</div>
	);
}

export default ItemCount;
