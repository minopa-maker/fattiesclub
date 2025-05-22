import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import WhyJoin from "../components/WhyJoin";
import NavBar from "../components/NavBar";
import JourneyMap from "../components/JourneyMap";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import HeroFollowUp from "../components/HeroFollowUp";
import CtaPaid from "../components/CtaPaid";

function Home() {
  const ctaRef = useRef(null);

  const scrollToCtaPaid = () => {
    const section = document.getElementById("ctaPaid");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div>
        <NavBar onJoinClick={scrollToCtaPaid} />
        <HeroSection onJoinClick={scrollToCtaPaid} />
        <HeroFollowUp />
        <WhyJoin onJoinClick={scrollToCtaPaid} />
        <JourneyMap />
        <CtaPaid />
        <About />

        <Cta refProp={ctaRef} />
        <Footer />
        <Helmet>
          <title>Fatties Club – Join Us</title>
          <meta
            name="description"
            content="Join a supportive community on a journey of self-improvement, fitness, and positive lifestyle changes."
          />
        </Helmet>
      </div>
    </>
  );
}

export default Home;
