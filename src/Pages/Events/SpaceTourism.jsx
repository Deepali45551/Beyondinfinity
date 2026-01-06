import React from 'react'
import SpacelineHero from '../../component/SpacelineHero'
import AboutUsSection from '../../component/AboutUsSection.jsx'
import BookingProcess from '../../component/BookingProcess.jsx'
import Carousel from '../../component/Carousel'
import MarqueeComponent from '../portfolio/MarqueeComponent'
import FaqSection from '../../component/FaqSection.jsx'

const SpaceTourism = () => {
  return (
    <div>
      <SpacelineHero/>
      <AboutUsSection/>
      <BookingProcess/>
      <Carousel/>
      <MarqueeComponent/>
      <FaqSection/>
    </div>
  )
}

export default SpaceTourism
