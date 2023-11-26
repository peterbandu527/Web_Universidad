export default function Footer() {
  return (
    <>
      <footer className="footer pt-3  ">
        <div className="container" style={{background:'#0C7FCF',color:'#fff'}}>
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-md-2 mt-5 mb-5">
          <img src={`${import.meta.env.BASE_URL}/logo/logo_umc.png`} className="d-block w-100" alt="Carta Nueva"/>
          </div>   
          <div className="col-md-4 mt-5 mb-5">
            <p>Diseñado por la Coordinación de Tecnología, Información y Comunicación</p>
            <p>Nuestra página web esta realizada íntegramente en software libre dando fiel cumplimiento a la Ley de InfoGobierno</p>
            <p>Universidad Marítima del Caribe. Rif : G-20003807-1</p>

          </div>          
          <div className="col-md-2 mt-5 mb-5">
            <ul className="list-unstyled">
              <li><i className="fa-solid fa-calendar-days me-2"></i>Calendario</li>
              <li><i className="fa-solid fa-table-cells-large me-2"></i>Biblioteca</li>
              <li><i className="fa-regular fa-square-check me-2"></i>Calidad</li>
              <li><i className="fa-solid fa-square-poll-horizontal me-2"></i>Publicaciones</li>
              <li><i className="fa-solid fa-fire me-2"></i>Bombero UMC</li>
            </ul>
          </div>   
          <div className="col-md-4 mt-5 mb-5">
              <ul className="list-unstyled">
                <li><i className="fa-solid fa-location-dot me-2"></i>Av. El Ejército, Catia la Mar. Edo. La Guaira. Venezuela</li>
                <li><i className="fa-solid fa-phone me-2"></i>(0212) 350-0100</li>
                <li><i className="fa-regular fa-envelope me-2"></i>correo@gmail.com</li>
              </ul>
          </div>    
        </div>
        </div>        
      </footer>
    </>
  );
}


