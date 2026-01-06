import { NavLink } from "react-router";

function Navbar() {
    return (
        <div className="d-flex justify-content-between align-items-center mx-auto"
            style={{width: '80%', height: '55px'}}>
            <div style={{width: '35%', color: 'black'}}
                className="d-flex justify-content-between">
                <NavLink className="text-decoration-none text-secondary-emphasis" to={'/'}>Iron Movies</NavLink>
                <NavLink className="text-decoration-none text-secondary-emphasis" to={'/'}>Home</NavLink>
                <NavLink className="text-decoration-none text-secondary-emphasis" to={'/search'}>Search</NavLink>
                <NavLink className="text-decoration-none text-secondary-emphasis" to={'/favorite'}>Favorite</NavLink>
                <NavLink className="text-decoration-none text-secondary-emphasis" to={'/graph'}>Graph</NavLink>
            </div>
            <div style={{width: '10%'}}
                className="d-flex justify-content-between">
                <NavLink className="text-decoration-none text-secondary-emphasis" to={'/login'}>Login</NavLink>
                <NavLink className="text-decoration-none text-secondary-emphasis" to={'/register'}>Register</NavLink>
            </div>
        </div>
    );
}

export default Navbar;

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>