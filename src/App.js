import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header class="header-container">
        <h1 id="titulo-principal">Hola mundo con React!</h1>
    </header>
      <img src={logo} className="App-logo" alt="logo" />
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
  </div> 
  );
}

export default App;
