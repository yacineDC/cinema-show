
import  "./Styles/bootstrap.min.css";
import "./Styles/font-awesome.min.css";

import "./Styles/index.css";
import "./Styles/about.css";
import "./Styles/global.css";
import "./Styles/blog.css";
import "./Styles/services.css";



import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './pages/Home';
import Services from "./pages/Services";
import Contact from './pages/Contact';
import Suscribe from "./pages/Suscribe";
import About from "./pages/About";
import Blog from "./pages/Blog"
// import Blog_detail from "./pages/Blog_detail";


// import N_404 from "./pages/N_404";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Services",
    element: <Services/>,
  },
  ,{
    path: "/Contact",
    element: <Contact/>,
  },
  ,{
    path: "/Suscribe",
    element: <Suscribe/>,
  }
  ,{
    path: "/About",
    element: <About/>,
  },
  {
    path: "/Blog",
    element: <Blog/>,
  },
  // {
  //   path: "/Blog_detail",
  //   element: <Blog_detail/>,
  // },
  // ,{ 	path: '/404',
  //  	element: <N_404/>}


]);

function App() {
  

  return (
    <>
   
    <RouterProvider router={router} />
    {/* <Calendar/> */}
   
    </>
    
  )
}


export default App