const Services = () => {
  return (
    <div className="container mt-5 mb-5">
      <h4 className="borde_titulo">Servicios</h4>
      <div className="row">
        <div className="col-12 col-lg-4 col-md-4">
          <div className="container d-flex justify-content-center">
            <div
              className="card shadow"
              style={{position: 'relative',marginTop: '100px',width:'350px'}}              
            >
              <div className="card-body text-center" style={{backgroundColor: 'rgba(12, 127, 207, 0.7)',color:'#fff'}}>
                <div
                  className="bg-white border rounded-circle d-inline-block text-center d-flex align-items-center justify-content-center"
                  style={{width:'40%',height:'30%',position: 'absolute',bottom: '95%',left:'30%',padding:'17px',backgroundColor:'rgba(228, 228, 228, 1)!important'}}                  
                >
                  {/* <i className="fas fa-check fa-2x"></i>
                   */}
                   <img src={`${import.meta.env.BASE_URL}/images/bus.png`} className="d-block w-100 img img-thumbnail rounded-circle" alt="Bus" style={{background:'rgba(228, 228, 228, 1)',borderBlockColor:'rgba(12, 127, 207, 1)'}}/>
                </div>
                <h3 className="card-title mt-4">Transporte Estudiantil</h3>
                <p className="card-text mb-4">
                El logotipo de la umc nace del emblema de la Escuela Náutica de Venezuela, al cual se le incorporan ligeras modificaciones: se sustiruye el nombre de la institución en la parte superior del timón, mientras que en la parte inferior se suprime la palabra "Catia la Mar" y se suplata por "1.811 Venezuela 2.000". Se incorpora en la parte inferior, a ambos lados, dos hélices de color rojo, que simbolizan la mención  de Instalaciones Marinas.
                </p>                
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-md-4">
          <div className="container d-flex justify-content-center">
            <div
              className="card shadow"
              style={{position: 'relative',marginTop: '100px',width:'350px'}}              
            >
              <div className="card-body text-center" style={{backgroundColor: 'rgba(12, 127, 207, 0.7)',color:'#fff'}}>
                <div
                  className="bg-white border rounded-circle d-inline-block text-center d-flex align-items-center justify-content-center"
                  style={{width:'40%',height:'30%',position: 'absolute',bottom: '95%',left:'30%',padding:'17px',backgroundColor:'rgba(228, 228, 228, 1)!important'}}                  
                >
                  {/* <i className="fas fa-check fa-2x"></i>
                   */}
                   <img src={`${import.meta.env.BASE_URL}/images/computer.png`} className="d-block w-100 img img-thumbnail rounded-circle" alt="Bus" style={{background:'rgba(228, 228, 228, 1)',borderBlockColor:'rgba(12, 127, 207, 1)'}}/>
                </div>
                <h3 className="card-title mt-4">salas de computación</h3>
                <p className="card-text mb-4">
                El logotipo de la umc nace del emblema de la Escuela Náutica de Venezuela, al cual se le incorporan ligeras modificaciones: se sustiruye el nombre de la institución en la parte superior del timón, mientras que en la parte inferior se suprime la palabra "Catia la Mar" y se suplata por "1.811 Venezuela 2.000". Se incorpora en la parte inferior, a ambos lados, dos hélices de color rojo, que simbolizan la mención  de Instalaciones Marinas.
                </p>                
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-md-4">
          <div className="container d-flex justify-content-center">
            <div
              className="card shadow"
              style={{position: 'relative',marginTop: '100px',width:'350px'}}              
            >
              <div className="card-body text-center" style={{backgroundColor: 'rgba(12, 127, 207, 0.7)',color:'#fff'}}>
                <div
                  className="bg-white border rounded-circle d-inline-block text-center d-flex align-items-center justify-content-center"
                  style={{width:'40%',height:'30%',position: 'absolute',bottom: '95%',left:'30%',padding:'17px',backgroundColor:'rgba(228, 228, 228, 1)!important'}}                  
                >
                  {/* <i className="fas fa-check fa-2x"></i>
                   */}
                   <img src={`${import.meta.env.BASE_URL}/images/books.png`} className="d-block w-100 img img-thumbnail rounded-circle" alt="Bus" style={{background:'rgba(228, 228, 228, 1)',borderBlockColor:'rgba(12, 127, 207, 1)'}}/>
                </div>
                <h3 className="card-title mt-4">Biblioteca</h3>
                <p className="card-text mb-4">
                El logotipo de la umc nace del emblema de la Escuela Náutica de Venezuela, al cual se le incorporan ligeras modificaciones: se sustiruye el nombre de la institución en la parte superior del timón, mientras que en la parte inferior se suprime la palabra "Catia la Mar" y se suplata por "1.811 Venezuela 2.000". Se incorpora en la parte inferior, a ambos lados, dos hélices de color rojo, que simbolizan la mención  de Instalaciones Marinas.
                </p>                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
