import './css/Index.css';
import CartWidget from './CartWidget'
import {Link} from 'react-router-dom' 

function App() {
    return (
        <header>
            <img width="100px" height="80px" src="logo.jpg"/>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid" >
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-12">
                            <li className="nav-item">
                                <Link className='aLink' to='/productos/arriba'>ARRIBA</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='aLink' to='/productos/abajo'>ABAJO</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='aLink' to='/productos/calzado'>CALZADO</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <CartWidget/>
                    </div>
                    
                </div>
            </nav>
        </header>
    );
}


export default App;