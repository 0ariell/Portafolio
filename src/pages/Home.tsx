import React from "react";
import Navbar from "../components/layout/Navbar/Navbar";
import HeroSection from "../components/sections/HeroSection/HeroSection";
import Projects from "../components/sections/Projects/Projects";
import DesignProcessSlider from "../components/sections/DesignProcessSlider/DesignProcessSlider";
import Footer from "../components/layout/Footer/Footer";
import CaseStudy from "../components/sections/CaseStudy/CaseStudy";
import FloatingTechStack from "../components/animations/FloatingTechStack/FloatingTechStack";

const Home: React.FC = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <FloatingTechStack />
            <Projects />
            <DesignProcessSlider />
            <CaseStudy />
            <Footer />
        </>
    );
};

export default Home;
