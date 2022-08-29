import './Index.css';
import CartWidget from './CartWidget'

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
                                <a className="nav-link active" aria-current="page" href="">REGISTRARTE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="">ENTRADAS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="">CONTACTO</a>
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