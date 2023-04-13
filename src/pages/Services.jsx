
import Navbar from "../Components/Navbar"

import NavTop from "../Components/NavTop"


import Choice from "../Components/Choice"
import Playlist from "../Components/Playlist"
import StreamingServices from "../Components/StreamingServices"

import Footer_A from "../Components/Footer_A"
import Footer_B from "../Components/Footer_B"



function Services() {
  return (
    <>
        <NavTop/>
        <Navbar/>
        
        <StreamingServices/>
        <Choice/>
        <Playlist/>

        <Footer_A/>
        <Footer_B/>
    </>
  )
}

export default Services