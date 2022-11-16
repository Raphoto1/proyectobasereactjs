import './App.scss';
import NavBarRafa from './components/Nav/NavBarRafa';
import ItemListContainer from './components/Items/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBarRafa/>
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
