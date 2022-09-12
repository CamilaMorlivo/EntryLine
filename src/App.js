import './index.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContaimer from './components/ItemDetailContainer/ItemDetailContainer'
import  {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemCount from './components/ItemCount'

const App = () => {
  
    return(
        <div>

            <BrowserRouter> 

                <NavBar />

                <Routes> 
                    <Route path='/' element={<ItemListContainer/>}/>
                    <Route path='/eventos/:categoryId' element={<ItemListContainer/>}/>
                    <Route path='/item/:itemId' element={<ItemDetailContaimer/>}/>
                    
                </Routes>
                
            </BrowserRouter>

        </div>  
    );
}

export default App;