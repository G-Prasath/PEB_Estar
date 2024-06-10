import React from 'react'
import Banner from "../components/Home/Banner";
import Aboutus from "../components/Home/Aboutus";
import Services from "../components/Home/Services";
import Faq from "../components/Home/Faq";
import Feedback from "../components/Home/Feedback";


const Home = () => {
  return (
    <div className='bg-image'>
      <Banner/>
      <Aboutus/>
      <Services/>
      <Faq/>
      <Feedback/>
    </div>
  )
}

export default Home
