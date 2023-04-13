

import img1 from "../assets/4.jpg"
import img2 from "../assets/5.jpg"
import img3 from "../assets/6.jpg"
import img4 from "../assets/7.jpg"
import img5 from "../assets/9.jpg"
import img6 from "../assets/10.jpg"
import img7 from "../assets/10.jpg"
import img8 from "../assets/11.jpg"



const LatestMovies = (props) => {
    return (
        <section id="trend" class="pt-4 pb-5">
<div class="container">
 <div class="row trend_1">
  <div class="col-md-6 col-6">
   <div class="trend_1l">
    <h4 class="mb-0"><i class="fa fa-youtube-play align-middle col_red me-1"></i> Latest <span class="col_red">Movies</span></h4>
   </div>
  </div>
  <div class="col-md-6 col-6">
   <div class="trend_1r text-end">
     <h6 class="mb-0"><a class="button" href="#"> View All</a></h6>
   </div>
  </div>
 </div>
 <div class="row trend_2 mt-4">
   <div id="carouselExampleCaptions1" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="0" class="active" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="1" aria-label="Slide 2" class="" aria-current="true"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="trend_2i row">
	    <div class="col-md-3 col-6">
		  <div class="trend_2im clearfix position-relative">
		   <div class="trend_2im1 clearfix">
		     <div class="grid">
		  <figure class="effect-jazz mb-0">
			<a href="#"><img src={img1} class="w-100" alt="img25"/></a>
		  </figure>
	  </div>
		   </div>
		   <div class="trend_2im2 clearfix text-center position-absolute w-100 top-0">
		     <span class="fs-1"><a class="col_red" href="#"><i class="fa fa-youtube-play"></i></a></span>
		   </div>
		  </div>
		  <div class="trend_2ilast bg_grey p-3 clearfix">
		    <h5><a class="col_red" href="#">Semper</a></h5>
			<p class="mb-2">A father travels from Oklahoma to France to help his...</p>
			<span class="col_red">
		 <i class="fa fa-star"></i>
		 <i class="fa fa-star"></i>
		 <i class="fa fa-star"></i>
		 <i class="fa fa-star"></i>
		 <i class="fa fa-star"></i>
		</span>
		<p class="mb-0">1 Views</p>
		  </div>  
		</div>
		<div class="col-md-3 col-6">
		  <div class="trend_2im clearfix position-relative">
		   <div class="trend_2im1 clearfix">
		     <div class="grid">
		  <figure class="effect-jazz mb-0">
			<a href="#"><img src={img2} class="w-100" alt="img25"/></a>
		  </figure>
	  </div>
		   </div>
		   <div class="trend_2im2 clearfix text-center position-absolute w-100 top-0">
		     <span class="fs-1"><a class="col_red" href="#"><i class="fa fa-youtube-play"></i></a></span>
		   </div>
		  </div>
		  <div class="trend_2ilast bg_grey p-3 clearfix">
		    <h5><a class="col_red" href="#">Dapibus</a></h5>
			<p class="mb-2">A father travels from Oklahoma to France to help his...</p>
			<span class="col_red">
		 <i class="fa fa-star"></i>
		 <i class="fa fa-star"></i>
		 <i class="fa fa-star"></i>
		 <i class="fa fa-star"></i>
		 <i class="fa fa-star"></i>
		</span>
		<p class="mb-0">1 Views</p>
		  </div>  
		</div>
		<div class="col-md-3 col-6">
		  <div class="trend_2im clearfix position-relative">
		   <div class="trend_2im1 clearfix">
		     <div class="grid">
		  <figure class="effect-jazz mb-0">
			<a href="#"><img src={img3} class="w-100" alt="img25"/></a>
		  </figure>
	  </div>
		   </div>
		   <div class="trend_2im2 clearfix text-center position-absolute w-100 top-0">
		     <span class="fs-1"><a class="col_red" href="#"><i class="fa fa-youtube-play"></i></a></span>
		   </div>
		  </div>
		  <div class="trend_2ilast bg_grey p-3 clearfix">
		    <h5><a class="col_red" href="#">Ipsum</a></h5>
			<p class="mb-2">A father travels from Oklahoma to France to help his...</p>
			<span class="col_red">
		 <i class="fa fa-star"></i>
		 <i class="fa fa-star"></i>
		 <i class="fa fa-star"></i>
		 <i class="fa fa-star"></i>
		 <i class="fa fa-star"></i>
		</span>
		<p class="mb-0">1 Views</p>
		  </div>  
		</div>
		<div class="col-md-3 col-6">
		  <div class="trend_2im clearfix position-relative">
		   <div class="trend_2im1 clearfix">
		     <div class="grid">
		  <figure class="effect-jazz mb-0">
			<a href="#"><img src={img4} class="w-100" alt="img25"/></a>
		  </figure>
	  </div>
		   </div>
		   <div class="trend_2im2 clearfix text-center position-absolute w-100 top-0">
		     <span class="fs-1"><a class="col_red" href="#"><i class="fa fa-youtube-play"></i></a></span>
		   </div>
		  </div>
		  <div class="trend_2ilast bg_grey p-3 clearfix">
		    <h5><a class="col_red" href="#">Lorem</a></h5>
			<p class="mb-2">A father travels from Oklahoma to France to help his...</p>
			<span class="col_red">
		 <i class="fa fa-star"></i>
		 <i class="fa fa-star"></i>
		 <i class="fa fa-star"></i>
		 <i class="fa fa-star"></i>
		 <i class="fa fa-star"></i>
		</span>
		<p class="mb-0">1 Views</p>
		  </div>  
		</div>
	  </div>
    </div>
    <div class="carousel-item">
      <div class="trend_2i row">
	    <div class="col-md-3 col-6">
		  <div class="trend_2im clearfix position-relative">
		   <div class="trend_2im1 clearfix">
		     <div class="grid">
		  <figure class="effect-jazz mb-0">
			<a href="#"><img src={img5} class="w-100" alt="img25"/></a>
		  </figure>
	  </div>
		   </div>
		   <div class="trend_2im2 clearfix text-center position-absolute w-100 top-0">
		     <span class="fs-1"><a class="col_red" href="#"><i class="fa fa-youtube-play"></i></a></span>
		   </div>
		  </div>
		  <div class="trend_2ilast bg_grey p-3 clearfix">
		    <h5><a class="col_red" href="#">Semper</a></h5>
			<p class="mb-2">A father travels from Oklahoma to France to help his...</p>
			<span class="col_red">
		 <i class="fa fa-star"></i>
		 <i class="fa fa-star"></i>
		 <i class="fa fa-star"></i>
		 <i class="fa fa-star"></i>
		 <i class="fa fa-star"></i>
		</span>
		<p class="mb-0">1 Views</p>
		  </div>  
		</div>
		<div class="col-md-3 col-6">
		  <div class="trend_2im clearfix position-relative">
		   <div class="trend_2im1 clearfix">
		     <div class="grid">
		  <figure class="effect-jazz mb-0">
			<a href="#"><img src={img6} class="w-100" alt="img25"/></a>
		  </figure>
	  </div>
		   </div>
		   <div class="trend_2im2 clearfix text-center position-absolute w-100 top-0">
		     <span class="fs-1"><a class="col_red" href="#"><i class="fa fa-youtube-play"></i></a></span>
		   </div>
		  </div>
		  <div class="trend_2ilast bg_grey p-3 clearfix">
		    <h5><a class="col_red" href="#">Dapibus</a></h5>
			<p class="mb-2">A father travels from Oklahoma to France to help his...</p>
			<span class="col_red">
		 <i class="fa fa-star"></i>
		 <i class="fa fa-star"></i>
		 <i class="fa fa-star"></i>
		 <i class="fa fa-star"></i>
		 <i class="fa fa-star"></i>
		</span>
		<p class="mb-0">1 Views</p>
		  </div>  
		</div>
		<div class="col-md-3 col-6">
		  <div class="trend_2im clearfix position-relative">
		   <div class="trend_2im1 clearfix">
		     <div class="grid">
		  <figure class="effect-jazz mb-0">
			<a href="#"><img src={img7} class="w-100" alt="img25"/></a>
		  </figure>
	  </div>
		   </div>
		   <div class="trend_2im2 clearfix text-center position-absolute w-100 top-0">
		     <span class="fs-1"><a class="col_red" href="#"><i class="fa fa-youtube-play"></i></a></span>
		   </div>
		  </div>
		  <div class="trend_2ilast bg_grey p-3 clearfix">
		    <h5><a class="col_red" href="#">Ipsum</a></h5>
			<p class="mb-2">A father travels from Oklahoma to France to help his...</p>
			<span class="col_red">
		 <i class="fa fa-star"></i>
		 <i class="fa fa-star"></i>
		 <i class="fa fa-star"></i>
		 <i class="fa fa-star"></i>
		 <i class="fa fa-star"></i>
		</span>
		<p class="mb-0">1 Views</p>
		  </div>  
		</div>
		<div class="col-md-3 col-6">
		  <div class="trend_2im clearfix position-relative">
		   <div class="trend_2im1 clearfix">
		     <div class="grid">
		  <figure class="effect-jazz mb-0">
			<a href="#"><img src={img8} class="w-100" alt="img25"/></a>
		  </figure>
	  </div>
		   </div>
		   <div class="trend_2im2 clearfix text-center position-absolute w-100 top-0">
		     <span class="fs-1"><a class="col_red" href="#"><i class="fa fa-youtube-play"></i></a></span>
		   </div>
		  </div>
		  <div class="trend_2ilast bg_grey p-3 clearfix">
		    <h5><a class="col_red" href="#">Lorem</a></h5>
			<p class="mb-2">A father travels from Oklahoma to France to help his...</p>
			<span class="col_red">
		 <i class="fa fa-star"></i>
		 <i class="fa fa-star"></i>
		 <i class="fa fa-star"></i>
		 <i class="fa fa-star"></i>
		 <i class="fa fa-star"></i>
		</span>
		<p class="mb-0">1 Views</p>
		  </div>  
		</div>
	  </div>
    </div>
    
  </div>

</div>
 </div>
</div>
</section>
    );
  }

export default LatestMovies


