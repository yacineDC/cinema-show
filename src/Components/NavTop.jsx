
//  import { Link, NavLink } from "react-router-dom";

const NavTop = (props) => {
    return (
      <section id="top">
      <div className="container">
       <div className="row top_1">
        <div className="col-md-3">
         <div className="top_1l pt-1">
          <h3 className="mb-0"><a className="text-white" href="index.html"><i className="fa fa-video-camera col_red me-1"></i> Cinema Show</a></h3>
         </div>
        </div>
        <div className="col-md-5">
         <div className="top_1m">
          <div className="input-group">
              <input type="text" className="form-control bg-black" placeholder="Search Site..."/>
              <span className="input-group-btn">
                <button className="btn btn text-white bg_red rounded-0 border-0" type="button">
                   Search</button>
              </span>
          </div>
         </div>
        </div>
        <div className="col-md-4">
         <div className="top_1r text-end">
           <ul className="social-network social-circle mb-0">
            <li><a href="#" className="icoRss" title="Rss"><i className="fa fa-instagram"></i></a></li>
            <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
            <li><a href="#" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
            <li><a href="#" className="icoGoogle" title="Google +"><i className="fa fa-youtube"></i></a></li>
            <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
          </ul>
         </div>
        </div>
       </div>
      </div>
      </section>
    
    );
  }

export default NavTop 


