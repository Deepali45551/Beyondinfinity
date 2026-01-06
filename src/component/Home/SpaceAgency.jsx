import React from 'react'
import HeroSection from '../HeroSection'
import FeaturedMissions from '../FeaturedMissions';
import Carousel from "../Carousel";
import FlightOverview from "../FlightOverview";
import BlogSection from "../BlogSection";

const SpaceAgency = () => {
  return (
    <div>
      <HeroSection/>
      <FeaturedMissions/>
      <Carousel/>
      <FlightOverview/>
      <BlogSection/>
    </div>
  )
}

export default SpaceAgency
