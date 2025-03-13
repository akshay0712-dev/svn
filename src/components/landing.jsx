import React, { useState } from "react";
import Home from "./Home";
import Contact from "./contact";
import GovSceam from "./govSceam";
import FAQ from "./FAQ.jsx";
import Footer from "./footer";
import Services from "./services";

const Landing = () => {
  // Load language from localStorage or default to Hindi
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "hi"
  );

  return (
    <div className="bg-black">
      {/* Pass language state and setLanguage function to child components */}
      <Home language={language} setLanguage={setLanguage} />
      <GovSceam language={language} />
      <Services language={language} />
      <Contact language={language} />
      <FAQ language={language} />
      <Footer language={language} />
    </div>
  );
};

export default Landing;
