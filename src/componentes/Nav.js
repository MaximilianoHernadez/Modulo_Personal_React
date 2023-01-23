

function Nav() {
    return(
        <>
        <nav className="navbar navbar-expand-lg nvoscuro p-2 m-0" id="barra" style={{height: "5vh"}}>
        <div className="container-fluid p-0 m-0">
            <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="dropdown-toggle">MENU</span>
            </button>
          <div className=" collapse navbar-collapse m-0 p-0" id="navbarSupportedContent">
          <div className="col-xs-3 col-lg-12 d-flex p-0 m-0">
           <div className="col-xs-3 col-lg-1 d-flex justify-content-center align-items-center">
                <label className="switch">
                  <input type="checkbox" id="check" />
                    <span className="slider round"></span>
                </label>
            </div>
            
            <div className="col-xs-6 col-lg-10 d-flex justify-content-center align-items-center"></div>
      
            <div className="col-xs-3 col-lg-1 d-flex justify-content-center align-items-center">
              <button className="btn btn-outline-success" type="button" id="bdestroy">SALIR</button>
            </div>
                  
            </div>
          </div>
        </div>
      </nav>
      </>
    );
}

export default Nav;