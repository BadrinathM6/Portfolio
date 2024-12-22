"use client";

import React, { useState, Suspense } from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("./components/Header"));
const MainSection = dynamic(() => import("./components/MainSection"), {
  loading: () => <div className="h-screen" />,
  ssr: false,
});
const AboutSection = dynamic(() => import("./components/AboutSection"), {});
import Preloader from "./components/StartPage";

const Portfolio = () => {
  const [loading, setLoading] = useState(true);
  return (
    <main>
      {loading ? (
        <Preloader onComplete={() => setLoading(false)} transitionStyle="smooth"/>
      ) : (
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <div className="bg-background text-gray-200 relative">
            <Header />
            <MainSection />
            <AboutSection />
          </div>
        </Suspense>
      )}
    </main>
  );
};

export default Portfolio;
