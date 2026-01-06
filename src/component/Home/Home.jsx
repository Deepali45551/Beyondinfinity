import React from 'react'
import HeroSection from '../HeroSection'
import FeaturedMissions from "../FeaturedMissions";
import Carousel from "../Carousel";
import FlightOverview from "../FlightOverview";
import BlogSection from "../BlogSection";
import MarqueeComponent from '../../Pages/portfolio/MarqueeComponent'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <FeaturedMissions/>
      <Carousel/>
      <FlightOverview/>
      <BlogSection/>
      <MarqueeComponent/>
  
    </div>
  )
}

export default Home
