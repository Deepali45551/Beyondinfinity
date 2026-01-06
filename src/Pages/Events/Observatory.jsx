import React from 'react'
import EventSchedule from '../../component/EventSchedule'
import ObservatoryProject from '../../component/ObservatoryProject'
import Gallery from '../../component/Gallery'
import AboutUsSection from '../../component/AboutUsSection.jsx'
import PortfolioOne from '../portfolio/PortfolioOne'

const Observatory = () => {
  return (
    <div>
        
      <EventSchedule/>
    <AboutUsSection/>
      <PortfolioOne/>
    </div>
  )
}

export default Observatory
