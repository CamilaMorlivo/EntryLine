import './index.css';
import NavBar from './components/Header/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContaimer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import { CartProvider} from './context/CartContext'
import Checkout from './components/Checkout/Checkout';

const App = () => {

    
    
    return(
    
        <CartProvider> 

            <BrowserRouter> 

                <NavBar />

                <Routes> 
                    <Route path='/' element={<ItemListContainer/>}/>
                    <Route path='/eventos/:categoryId' element={<ItemListContainer/>}/>
                    <Route path='/item/:itemId' element={<ItemDetailContaimer/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='*' element={<Navigate to="/"/>}/>
                    <Route path='/checkout' element={<Checkout/>}/>
                </Routes>
                
            </BrowserRouter>

        </CartProvider>
    );
}

export default App;