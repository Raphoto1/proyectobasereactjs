import './App.scss';
import NavBar from './components/Nav/NavBar';
import ItemListContainer from './components/Items/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
          <Route path='/detail/:idItem' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<h1>Error 404: we are lost</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
