import './App.scss';
import NavBar from './components/Nav/NavBar';
import ItemListContainer from './components/Items/ItemListContainer';
function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <NavBar/>
        <ItemListContainer text="Hola aqui van los items">
        </ItemListContainer>
      </header>
    </div>
  );
}

export default App;
