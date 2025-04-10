import React from "react";
import About from "../about/About"
import Body from "../body/Body";
import Photo from "../glimpses/Glimpses";
import Themes from "../themes/Themes";
import Prizes from "../prizes/Prizes";
import Team from "../team/Team"
import FAQ from "../faqs/FAQ"
import Footer from "../Footer";
import Mentor from "../mentor/Mentor"

export default function HomePage(){
  return(
    <>
    <Body/>
    <About/>
    <Photo/>
    <Themes/>
    <Prizes/>
    <Team/>
    <Mentor/>
    <FAQ/>
    <Footer/>
    </>
  )
}