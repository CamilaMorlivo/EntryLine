import {BsFillCartCheckFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function App() {

    const {cartQuantity} = useContext(CartContext)

    return (
        // <Link to="/cart" className={`widget ${cart.length > 0 ? 'widget-visible' : ''}`}>
        <Link to="/cart" className='btn btn-outline-light m-3 btn-lg'>
            <BsFillCartCheckFill/>
            <span >{cartQuantity()}</span>
        </Link>
   );
}

export default App;