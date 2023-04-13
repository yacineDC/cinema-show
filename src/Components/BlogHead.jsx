import img from "../assets/2.jpg";

//  import { Link, NavLink } from "react-router-dom";

const BlogHead = (props) => {
    return (
        <section id="center" class="center_o pt-2 pb-2">
 <div class="container-xl">
  <div class="row center_o1">
   <div class="col-md-5">
     <div class="center_o1l">
	  <h2 class="mb-0">Blog</h2>
	 </div>
   </div>
   <div class="col-md-7">
     <div class="center_o1r text-end">
	  <h6 class="mb-0 col_red"><a href="#">Home</a> <span class="me-2 ms-2 text-light"><i class="fa fa-caret-right align-middle"></i></span> Blog</h6>
	 </div>
   </div>
  </div>
 </div>
</section>
    );
  }

export default BlogHead


