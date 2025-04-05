import React, { useRef } from "react";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import WhyJoin from "../components/WhyJoin";
import NavBar from "../components/NavBar";
import JourneyMap from "../components/JourneyMap";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import HeroFollowUp from "../components/HeroFollowUp";

function Home() {
  const ctaRef = useRef(null);

  const scrollToCta = () => {
    ctaRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div>
        <NavBar onJoinClick={scrollToCta} />
        <HeroSection onJoinClick={scrollToCta} />
        <HeroFollowUp />
        <WhyJoin onJoinClick={scrollToCta} />
        <JourneyMap />
        <About />
        <Cta refProp={ctaRef} />
        <Footer />
      </div>
    </>
  );
}

export default Home;
