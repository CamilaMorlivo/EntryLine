import './index.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContaimer from './components/ItemDetailContainer/ItemDetailContainer'
import  {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetail from './components/ItemDetailContainer/ItemDetail';

const App = () => {
  
    return(
        <div>

            <BrowserRouter> 

                <NavBar />

                {/* 
                <Routes>
                    <Route path='/checkout' element={<HeaderCheckout/>}/> -> para diferentes headers
                </Routes> 
                */}

                <Routes>
                    <Route path='/saludo' element={<h2>Hola Mundo</h2>}/>    
                    <Route path='/' element={<ItemListContainer/>}/>
                    <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
                    <Route path='/item/:itemId' element={<ItemDetailContaimer/>}/>
                    {/* 
                    <Route path='*' element={<Error404/>} />
                    <Route path='*' element={<Navigate to="/"/>}/>     
                    */}

                </Routes>
                

            </BrowserRouter>

        </div>  
    );
}

export default App;