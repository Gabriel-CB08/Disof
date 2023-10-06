import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <header>
      <h1>Header</h1>
    </header>
  );
}

function Body() {
  return (
    <body>
      <h1>Footer</h1>
    </body>
  );
}

function Foooter() {
  return (
    <footer>
      <h1>Footer</h1>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
