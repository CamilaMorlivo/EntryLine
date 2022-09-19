import './css/Index.css';
import Swal from 'sweetalert2'

export const ItemCount = ({stock, counter, setCounter, handleAgregar}) => {


	const sumar = () => {
		if(stock <= counter){
			Swal.fire({
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

		setCounter(counter - 1)
	}



	return (
		<div className='contador'>

			<div className='divContador'>
				
				<button 
					disabled={counter === 1}
					onClick={restar} 
					className="btn btn-outline-primary"

					// className={`btn mx-2 ${counter===0? "btn btn-outline-danger" :"btn btn-outline-primary"}`}
				>
					-
				</button>
				
				{counter}		
				
				<button 
					// disabled={counter === stock}
					onClick={sumar} 
					className="btn btn-outline-primary "
				>
					+
				</button>
			
			</div>

			<button onClick={handleAgregar} className="btn btn-outline-success ">
				Agregar al carrito
			</button>		
		
		</div>
	);
}

export default ItemCount;
