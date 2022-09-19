import Spinner from 'react-bootstrap/Spinner'; 
import './Loader.css'

const Loader = () => {
    
    {/* react bootstrap.github.io/components/spinners */}

    return(
        <div className='loader'>
            <Spinner animation="border" variant="primary"/>
        </div>
    )
}


export default  Loader;