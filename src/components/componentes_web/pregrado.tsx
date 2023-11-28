const Pregrado = () => {
  return (
    <div className="container mb-5 mt-5">
      <h4 className="borde_titulo mb-5">Estudios</h4>
      <div className="row">
        <div className="col-12 col-lg-12 col-md-12 mt-2 mb-2">
          <a href="#">
            <img src={`${import.meta.env.BASE_URL}/images/tsu_transporte_acuatico.jpeg`} className="d-block w-100 img" alt="imagen velero"/>
          </a>          
        </div>
        <div className="col-12 col-lg-12 col-md-12 mt-2 mb-2">
          <a href="#">
            <img src={`${import.meta.env.BASE_URL}/images/ambiental.jpeg`} className="d-block w-100 img" alt="imagen velero"/>
          </a>          
        </div>
        <div className="col-12 col-lg-12 col-md-12 mt-2 mb-2">
          <a href="#">
            <img src={`${import.meta.env.BASE_URL}/images/informatica.jpeg`} className="d-block w-100 img" alt="imagen velero"/>
          </a>          
        </div>
        <div className="col-12 col-lg-12 col-md-12 mt-2 mb-2">
          <a href="#">
            <img src={`${import.meta.env.BASE_URL}/images/administracion.jpeg`} className="d-block w-100 img" alt="imagen velero"/>
          </a>          
        </div>
        <div className="col-12 col-lg-12 col-md-12 mt-2 mb-2">
          <a href="#">
            <img src={`${import.meta.env.BASE_URL}/images/turismo.jpeg`} className="d-block w-100 img" alt="imagen velero"/>
          </a>          
        </div>
      </div>
    </div>
  );
};

export default Pregrado;
