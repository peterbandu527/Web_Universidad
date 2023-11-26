const Estudios = () => {
  return (
    <div className="container mt-5">
      <h4 className="borde_titulo">Estudios</h4>
      <div className="row">
        <div className="col-4 col-lg-4 col-md-4 mt-5 mb-5" style={{backgroundImage: `url(${`${import.meta.env.BASE_URL}`}/images/velero.png)`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '150px'}}>
          
        </div>
        <div className="col-4 col-lg-4 col-md-4 mt-5 mb-5" style={{backgroundImage: `url(${`${import.meta.env.BASE_URL}`}/images/pregrado.png)`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '150px'}}>
          
        </div>
        <div className="col-4 col-lg-4 col-md-4 mt-5 mb-5" style={{backgroundImage: `url(${`${import.meta.env.BASE_URL}`}/images/postgrado.png)`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '150px'}}>
          
        </div>
        <div className="col-4 col-lg-4 col-md-4 mt-5 mb-5" style={{backgroundImage: `url(${`${import.meta.env.BASE_URL}`}/images/pnf.png)`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '150px'}}>
          
        </div>
        <div className="col-4 col-lg-4 col-md-4 mt-5 mb-5" style={{backgroundImage: `url(${`${import.meta.env.BASE_URL}`}/images/fundaumc.png)`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '150px'}}>
          
        </div>
        <div className="col-4 col-lg-4 col-md-4 mt-5 mb-5" style={{backgroundImage: `url(${`${import.meta.env.BASE_URL}`}/images/profesores.png)`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '150px'}}>
          
        </div>        
      </div>
    </div>    
    
  );
};

export default Estudios;
