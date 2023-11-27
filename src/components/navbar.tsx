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
            <a className="nav-link" href={`${import.meta.env.BASE_URL}`}>Inicio</a>
          </li>
          <li className="nav-item me-5">
            <a className="nav-link" href={`${import.meta.env.BASE_URL}services`}>Servicios</a>
          </li>
          <li className="nav-item me-5">
            <a className="nav-link" href={`${import.meta.env.BASE_URL}noticias`}>Noticias</a>
          </li>
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dependencias
          </a>
          <ul className="dropdown-menu" style={{background:'#0C7FCF'}}>
            <li><a className="dropdown-item" href={`${import.meta.env.BASE_URL}rectorado`}>Rectorado</a></li>
            <li><a className="dropdown-item" href="#">Vicerrectorado Académico</a></li>
            <li><a className="dropdown-item" href="#">Vicerrectorado Administrativo</a></li>
            <li><a className="dropdown-item" href="#">Secretaria General</a></li>
          </ul>
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
