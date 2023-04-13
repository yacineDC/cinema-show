// import { Link } from 'react-router-dom';

// import course_1 from '../assets/course-1.jpg'
// import course_2 from '../assets/course-2.jpg'
// import course_3 from '../assets/course-3.jpg'

const Footer_B = (props)=> {
    return(
<section id="footer_b" className="pt-3 pb-3 bg_grey">
<div className="container">
   <div className="row footer_1">
     <div className="col-md-8">
	  <div className="footer_1l">
	   <p className="mb-0">© 2013 Your Website Name. All Rights Reserved | Design by Cinema Show</p>
	  </div>
	 </div>
	 <div className="col-md-4">
	  <div className="footer_1r">
	   <ul className="mb-0">
	    <li className="d-inline-block me-2"><a href="#">Home</a></li>
		<li className="d-inline-block me-2"><a href="#">Features</a></li>
		<li className="d-inline-block me-2"><a href="#">Pages</a></li>
		<li className="d-inline-block me-2"><a href="#">Portfolio</a></li>
		<li className="d-inline-block me-2"><a href="#">Blog</a></li>
		<li className="d-inline-block"><a href="#">Contact</a></li>
	   </ul>
	  </div>
	 </div>
   </div>
</div>
</section>
    


    );
}

export default Footer_B;
