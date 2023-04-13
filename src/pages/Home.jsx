
import Navbar from "../Components/Navbar"

import NavTop from "../Components/NavTop"
import Carousel from "../Components/Carousel"
import LatestMovies from "../Components/LatestMovies"
import UpcomingEvents from "../Components/UpcomingEvents"
import TrendingEvents from "../Components/TrendingEvents"
import Choice from "../Components/Choice"
import Playlist from "../Components/Playlist"
import StreamingServices from "../Components/StreamingServices"
import Footer_A from "../Components/Footer_A"
import Footer_B from "../Components/Footer_B"



function Home() {
  return (
    <>
        <NavTop/>
        <Navbar/>
        <Carousel/>
        <LatestMovies/> 
        <UpcomingEvents/>
        <TrendingEvents/>
        <Choice/>
        <Playlist/>
        <StreamingServices/>
        
        <Footer_A/>
        <Footer_B/>
    </>
  )
}

export default Home