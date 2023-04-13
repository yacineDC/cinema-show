


import { NavLink } from "react-router-dom";

const Navbar = (props) => {
    return (
        <section id="header">
        <nav className="navbar navbar-expand-md navbar-light" id="navbar_sticky">
          <div className="container">
          <NavLink to ="/"  className="navbar-brand text-white fw-bold"><i className="fa fa-video-camera col_red me-1"></i> Cinema Show</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mb-0">
                <li className="nav-item">
                  <NavLink to ="/"  className="nav-link active" aria-current="page" >Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to ="/About" className="nav-link" >About Us</NavLink>
                </li>
                <li className="nav-item dropdown">
                <NavLink to ="/Blog" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Blog
                </NavLink>
                  <ul className="dropdown-menu drop_1" aria-labelledby="navbarDropdown">
                    <li><NavLink to ="/Blog" className="dropdown-item" >Blog</NavLink></li>
                    <li><NavLink to ="/Blog_detail" className="dropdown-item border-0">Blog Detail</NavLink></li>
                  </ul>
                </li>
                <li className="nav-item">
                <NavLink to ="/Services" className="nav-link" >Services</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to ="/Suscribe" className="nav-link" >Suscribe</NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink to ="/Pages" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Pages
                  </NavLink>
                  <ul className="dropdown-menu drop_1" aria-labelledby="navbarDropdown">
                    <li><NavLink to ="/About" className="dropdown-item" >About Us</NavLink></li>
                    <li><NavLink to ="/Services" className="dropdown-item" >Services</NavLink></li>
                    <li><NavLink to ="/Suscribe" className="dropdown-item" >Suscribe</NavLink></li>
                    <li><NavLink to ="/Contact" className="dropdown-item border-0" >Contact</NavLink></li>
                  </ul>
                </li>
                
                <li className="nav-item">
                  <NavLink to ="/Contact"className="nav-link" >Contact Us</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </section>
    
    );
  }

export default Navbar 


