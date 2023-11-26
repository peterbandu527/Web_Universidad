const Zona_estudiantes = () => {
  return (
    <div className="container" style={{background:'#E5E5E5'}}>      
      <div className="row">
        <div className="col-4 col-lg-4 col-md-4 d-flex align-items-center" >
          <a className="btn btn-primary mx-auto" style={{padding:'5%',fontSize:'24px'}}>Acceder Aqui</a>
        </div>
        <div className="col-6 col-lg-6 col-md-6 " >
          <img src={`${import.meta.env.BASE_URL}/images/zona_estudiantes.png`} className="d-block w-100" alt="Carta Nueva"/>
        </div>
        <div className="col-2 col-lg-2 col-md-2">
          {/* <img src={`${import.meta.env.BASE_URL}/images/Intersect.png`} className="d-block w-100" alt="Carta Nueva"/> */}
        </div>
       
      </div>
    </div>    
    
  );
};

export default Zona_estudiantes;
