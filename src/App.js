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
    </header>
  );
}

function Body() {
  return (
    <body>
    
   <section class="hero">
        <div class="contenido-hero">
            <h2>Clase de Diseño de Software</h2>
            
        </div>
    </section>
    <main class="content shadow" >      
        </div>
        <h2 class="title">Los Chambers</h2>
        <h3 class="title">Grupo 22</h3>

        <p class="target">Objetivos del grupo:</p>
        <p>Como grupo tenemos de objetivos los siguientes logros:</p>
        <ul class="list">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Pasar el ramo</li>
            <li class="list-group-item">Sobrevivir</li>
            <li class="list-group-item">Aprender un poco de backend</li>
            <li class="list-group-item">Mejorar frontend</li>
            <li class="list-group-item">Comprender el funcionamiento de las páginas y entender el como hacerlas funcionar en la web</li>
          </ul>
        

        <div class="subjects">
            

          <div class="card" style="width: 18rem;">
            <img src="https://picsum.photos/300/200" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Joaquin Aravena</h5>
              <p class="card-text">Estudiante de Ingenieria Civil Informatica.</p>
              <a href="/JAravena.html" class="btn btn-primary">Página</a>
            </div>
          </div>

          <div class="card" style="width: 18rem;">
            <img src="https://picsum.photos/300/200" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Gabriel Chomalí</h5>
              <p class="card-text">Estudiante de Ingenieria Civil Informatica.</p>
              <a href="/GChomali.html" class="btn btn-primary">Página</a>
            </div>
          </div>

          <div class="card" style="width: 18rem;">
            <img src="https://picsum.photos/300/200" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Carlos Mendes</h5>
              <p class="card-text">Estudiante de Ingenieria Civil Informatica.</p>
              <a href="/CMendez.html" class="btn btn-primary">Página</a>
            </div>
          </div>

        </div>

      <div class="card text-bg-secondary mb-3" style="max-width">
            <div class="card-header">Forms</div>
            <div class="card-body">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
          </div>

    </main>
    </body>
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
