const Logo_umc = () => {
  return (
    <div className="container">
      <img className="bg-white w-full" src={`${import.meta.env.BASE_URL}/images/cabecera_1.png`}
        alt="Navbar logo" style={{maxWidth:'100%'}}>      
      </img>
    </div>
  );
};

export default Logo_umc;
