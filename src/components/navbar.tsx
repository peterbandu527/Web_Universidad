const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">      
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav me-7 mb-2 mb-lg-0">
          <li className="nav-item me-5">
            <a className="nav-link active" aria-current="page" href="/web_umc/">Inicio</a>
          </li>
          <li className="nav-item me-5">
            <a className="nav-link" href="#">Servicios</a>
          </li>
          <li className="nav-item me-5">
            <a className="nav-link" href="#">Noticias</a>
          </li>
          <li className="nav-item me-5">
            <a className="nav-link" href="#">Dependencias</a>
          </li>
          <li className="nav-item me-5">
            <a className="nav-link" href="#">Correo</a>
          </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          {/* <button className="btn btn-outline-light" type="submit">Search</button> */}
        </form>
      </div>
    </div>
  </nav>
    </div>
    
  );
};

export default Navbar;
