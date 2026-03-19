import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./component/Home/Home";
import FeaturedMissions from "./component/FeaturedMissions";
import HeroSection from "./component/HeroSection";
import Carousel from "./component/Carousel";
import FlightOverview from "./component/FlightOverview.jsx";
import BlogSection from "./component/BlogSection";
import EventList from "./Pages/Events/EventList";
import Events from "./Pages/Events/Events.jsx";
import EventSingleDefault from "./Pages/Events/EventSingleDefault";
import EventSingleRSVP from "./Pages/Events/EventSingleRSVP";
import EventSingleTicket from "./Pages/Events/EventSingleTicket";
import Shop from "./Pages/shop/Shop";
import Outdoor from "./Pages/Events/Outdoor";
import FeaturedProducts from "./component/FeaturedProducts";
import OutdoorFeatures from "./component/OutdoorFeatures";
import OpticsProductShowcase from "./component/OpticsProductShowcase";
import Observatory from "./Pages/Events/Observatory";
import EventSchedule from "./component/EventSchedule";
import ObservatoryProject from "./component/ObservatoryProject";
import Gallery from "./component/Gallery";
import SpaceAgency from "./component/Home/SpaceAgency";
import ShopSingle from "./Pages/shop/ShopSingle";
import ShopSingleExternal from "./Pages/shop/ShopSingleExternal";
import ShopSingleCollection from "./Pages/shop/ShopSingleCollection";
import WishList from "./Pages/shop/WishList";

import PortfolioOne from "./Pages/portfolio/PortfolioOne.jsx";
import PortfolioSlider from "./Pages/portfolio/PortfolioSlider.jsx";
import PortfolioRandom from "./Pages/portfolio/PortfolioRandom.jsx";
import PortfolioDetails from "./Pages/portfolio/PortfolioDetails.jsx";
import Pricing from "./Pages/page/Pricing.jsx";
import Faq from "./Pages/page/Faq.jsx";
import Teams from "./Pages/page/teams/Teams.jsx";
import TeamDetails from "./Pages/page/teams/TeamDetails.jsx";
import OurServices from "./Pages/page/services/OurServices.jsx";
import ServiceDetails from "./Pages/page/services/ServiceDetails.jsx";
import Blog from "./Pages/blog/Blog.jsx";
import BlogStyleOne from "./Pages/blog/BlogStyleOne.jsx";
import BlogStyleTwo from "./Pages/blog/BlogStyleTwo.jsx";
import BlogDetails from "./Pages/blog/BlogDetails.jsx";
import AerospaceCompany from "./Pages/Events/AerospaceCompany.jsx";
import FeaturedWork from "./component/FeaturedWork.jsx";
import SpaceTourism from "./Pages/Events/SpaceTourism.jsx";
import Cart from "./Pages/shop/Cart.jsx";
import Checkout from "./Pages/shop/Checkout.jsx";
import OrderCompleted from "./Pages/shop/OrderCompleted.jsx";
import MyAccount from "./Pages/shop/MyAccount.jsx";
import AboutUs from "./Pages/page/AboutUs.jsx";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Layout wrapper */}

        <Route element={<Layout />}>
          {/* Child route shown inside Outlet */}
          <Route index element={<Home />} />
          <Route path="/event-list" element={<EventList />} />
          <Route path="/event" element={<Events />} />
          <Route
            path="/event-single-default"
            element={<EventSingleDefault />}
          />
          <Route path="/event-single-rsvp" element={<EventSingleRSVP />} />
          <Route path="/event-single-ticket" element={<EventSingleTicket />} />
          <Route path="/feature" element={<FeaturedProducts />} />
          <Route path="/outdorfeature" element={<OutdoorFeatures />} />
          <Route path="/observatoryproject" element={<ObservatoryProject />} />
          <Route path="/showcase" element={<OpticsProductShowcase />} />
          <Route path="/eventschedule" element={<EventSchedule />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/aerospace-company" element={<AerospaceCompany />} />
          <Route path="/mission" element={<FeaturedMissions />} />
          <Route path="/hero" element={<HeroSection />} />
          <Route path="/featurework" element={<FeaturedWork />} />
          <Route path="/space-tourism" element={<SpaceTourism />} />
          <Route path="/space-agency" element={<SpaceAgency />} />{" "}
          {/* for adding routes for home dropdown */}
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/flight" element={<FlightOverview />} />
          <Route path="/blog" element={<BlogSection />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop-single" element={<ShopSingle />} />
          <Route
            path="/shop-single-external"
            element={<ShopSingleExternal />}
          />
          <Route
            path="/shop-single-colection"
            element={<ShopSingleCollection />}
          />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-completed" element={<OrderCompleted />} />
          <Route path="/outdoor-optics-shop" element={<Outdoor />} />
          <Route path="/observatory" element={<Observatory />} />
          <Route path="/portfolio-one" element={<PortfolioOne />} />
          <Route path="/portfolio-slider" element={<PortfolioSlider />} />
          <Route path="/portfolio-random" element={<PortfolioRandom />} />
          <Route path="/portfolio-details" element={<PortfolioDetails />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blog-style-one" element={<BlogStyleOne />} />
          <Route path="/blog-style-two" element={<BlogStyleTwo />} />
          <Route path="/blog-details" element={<BlogDetails />} />
                    <Route path="/about-us" element={<AboutUs />} />

          <Route path="/faqs" element={<Faq />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/team-details" element={<TeamDetails />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/service-details" element={<ServiceDetails />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/my-account" element={<MyAccount />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
