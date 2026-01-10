import React from 'react'
import Header from '../../Header'
// import OurTeamBody from './OurTeamBody'
import Footer from '../../Footer'
// import CarouselTeam from './CarouselTeam'
import OurTeamSection from './OurTeamSection'
import './OurTeam.css'

const OurTeam = () => {
  return (
    <>
      <div className='OurTeam-main'>
        <Header />
        <OurTeamSection />
        <Footer />
      </div>
    </>
  )
}

export default OurTeam
