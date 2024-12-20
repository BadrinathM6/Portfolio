import React from "react";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import AboutSection from "./components/AboutSection";

const Portfolio = () => {
  return (
    <div className="bg-background text-gray-200 min-h-screen relative">
      <Header />
      <MainSection />
      <AboutSection />
    </div>
  );
};

export default Portfolio;
