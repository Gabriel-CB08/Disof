import logo from './logo.svg';
import './App.css';
import RealTimeClock from './scr/RealTimeClock';

function Header() {
  return (
    <header>
      <nav class="navbar bg-dark" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand">Navbar</a>
          <ul class="nav nav-pills nav-fill">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/index.html">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/JAravena.html">Joaquín Aravena</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/GChomali.html">Gabriel Chomalí</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/CMendez.html">Carlos Méndez</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://github.com/Gabriel-CB08/DesSoft">GitHub</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>

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
