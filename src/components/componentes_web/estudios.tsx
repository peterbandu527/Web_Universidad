const Estudios = () => {
  return (
    <div className="container mt-5">
      <h4 className="borde_titulo">Estudios</h4>
      <div className="row">
        <div className="col-12 col-lg-4 col-md-4 mt-5 mb-5">
          <a href="#">
            <img src={`${import.meta.env.BASE_URL}/images/velero.png`} className="d-block w-100 img" alt="imagen velero"/>
          </a>          
        </div>
        <div className="col-12 col-lg-4 col-md-4 mt-5 mb-5" >
        <a href={`${import.meta.env.BASE_URL}pregrado`}>
            <img src={`${import.meta.env.BASE_URL}/images/pregrado.png`} className="d-block w-100 img" alt="imagen velero"/>
          </a>          
        </div>
        <div className="col-12 col-lg-4 col-md-4 mt-5 mb-5" >
        <a href="#">
            <img src={`${import.meta.env.BASE_URL}/images/postgrado.png`} className="d-block w-100 img" alt="imagen velero"/>
          </a>          
        </div>
        <div className="col-12 col-lg-4 col-md-4 mt-5 mb-5" >
        <a href="#">
            <img src={`${import.meta.env.BASE_URL}/images/pnf.png`} className="d-block w-100 img" alt="imagen velero"/>
          </a>          
        </div>
        <div className="col-12 col-lg-4 col-md-4 mt-5 mb-5" >
        <a href="#">
            <img src={`${import.meta.env.BASE_URL}/images/fundaumc.png`} className="d-block w-100 img" alt="imagen velero"/>
          </a>          
        </div>
        <div className="col-12 col-lg-4 col-md-4 mt-5 mb-5" >
        <a href="#">
            <img src={`${import.meta.env.BASE_URL}/images/profesores.png`} className="d-block w-100 img" alt="imagen velero"/>
          </a>          
        </div>        
      </div>
    </div>    
    
  );
};

export default Estudios;
