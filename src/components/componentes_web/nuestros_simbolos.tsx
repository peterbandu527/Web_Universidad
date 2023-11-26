const Nuestros_simbolos = () => {
  return (
    <div className="container mt-5 mb-5"> 
      <h4 className="borde_titulo">Nuestros Simbolos</h4>     
      <div className="row">
        <div className="col mt-5" style={{background:'rgba(12, 127, 207, 0.09)',padding:'5%',borderRadius:'2%'}}>
          <h5 className="titulo1">Logo de la Universidad Marítima del Caribe</h5>
          <p>El logotipo de la umc nace del emblema de la Escuela Náutica de Venezuela, al cual se le incorporan ligeras modificaciones: se sustiruye el nombre de la institución en la parte superior del timón, mientras que en la parte inferior se suprime la palabra "Catia la Mar" y se suplata por "1.811 Venezuela 2.000". Se incorpora en la parte inferior, a ambos lados, dos hélices de color rojo, que simbolizan la mención  de Instalaciones Marinas.</p>          
          <h5 className="titulo1">Estandarte de la Universidad Marítima del Caribe</h5>
          <p>El Estandarte de la Universidad Marítima del Caribe es el mismo que se usó  desde tiempos de la Escuela Náutica de Venezuela, con ligeras modificaciones al sustituirse el emblema y el nombre de la institución, que se encuentran estampados sobre una tela de color azul, en dos tonalidades, sobre la cual se representa la constelación  de la Osa Mayor que tiene la Estrella Polar como elemento principal que simboliza el norte verdadero para los navegantes.  </p>          
        </div>
        <div className="col-2 mt-5 d-flex align-items-center" >
          <img src={`${import.meta.env.BASE_URL}/logo/logo_umc.png`} className="d-block w-100" alt="Carta Nueva"/>
        </div>
        <div className="col mt-5" style={{background:'rgba(12, 127, 207, 0.09)',padding:'5%',borderRadius:'2%'}}>
          <h5 className="titulo1">Escudo de la Escuela de Estudios Superiores de la Marina Mercante</h5>
          <p>Escudo de estilo español con configuración similar a la de los años 1600-1606, ribeteado en oro, medio partido y cortado.  En el cuartel diestro del jefe un ancora en oro en fondo sinople; en el cuartel siniestro del jefe una propela en metal oro de tres sotuer en fondo de gules.</p>
          <p>En el cantón siniestro inferior un faro de argen en compage a tierra firme sinople, en su tope una luz en metal oro que ilumina el abismo argen, sobre ondas de agua en azul y plata.</p>
          <p>Sobre el jefe una corona de cañamo en tres gazas ovales en metal argen.</p>
          <p>El áncora de oro representa la especialidad de navegación; su situación en el cuartel diestro del jefe. el comando y gobierno del buque.</p>
          <h5 className="titulo1">Himno</h5>
          <p>El 31 de julio de 1969 el director de la Escuela Náutica de Venezuela, Contralmirante Francisco Lares, convocó un concurso para la letra del Himno de esta institución, el cual se rigió por las siguientes condiciones:</p>          
        </div>
       
      </div>
    </div>    
    
  );
};

export default Nuestros_simbolos;
