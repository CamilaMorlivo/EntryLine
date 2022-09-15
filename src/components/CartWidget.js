import {BsFillCartCheckFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function App() {

    const {cartQuantity} = useContext(CartContext)

    return (
        <Link to="/cart" className='btn btn-light btn-lg'>
            <BsFillCartCheckFill/>
            <span >{cartQuantity()}</span>
        </Link>
   );
}

export default App;