import { useState, useEffect } from "react";
import { delay, motion } from "framer-motion"; // Importing Framer Motion for animations
import { fadeIn } from "./varients";

export default function Home({ language, setLanguage }) {
  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);
  const content = {
    hi: {
      title: "छत पर सोलर लगाइए और 78,000₹ तक की सब्सिडी पाइए!",
      subtitle: "अब अपना बिजली बिल कम करें और मुफ्त बिजली का आनंद लें!",
      cta: "नि:शुल्क परामर्श लें",
      benefits: [
        "बिजली बिल में 90% तक की बचत!",
        "25-30 साल तक मुफ्त बिजली!",
        "हरियाली बढ़ाएं, पर्यावरण बचाएं!",
        "घर की संपत्ति का मूल्य बढ़ाएं!",
      ],
    },
    en: {
      title: "Install Rooftop Solar & Get ₹78,000 Subsidy!",
      subtitle: "Reduce your electricity bills & enjoy free power!",
      cta: "Get Free Consultation",
      benefits: [
        "Save up to 90% on electricity bills!",
        "Free electricity for 25-30 years!",
        "Go green & help the environment!",
        "Increase your property value!",
      ],
    },
  };

  return (
    <div id="top" className="w-full min-h-screen bg-[#121212] text-[#CCCCCC]">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-[#0A0A0A] shadow-md">
        <motion.h1
          variants={fadeIn("left", 40, 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-xl font-bold text-white"
        >
          SVN Infra & Solar Services
        </motion.h1>
        <motion.button
          variants={fadeIn("right", 40, 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="px-3 py-1 bg-[#1E90FF] text-white rounded hover:bg-[#00BFFF] transition"
          onClick={() => setLanguage(language === "hi" ? "en" : "hi")}
        >
          {language === "hi" ? "🇬🇧 English" : "🇮🇳 हिंदी"}
        </motion.button>
      </header>

      {/* Hero Section */}
      <motion.section
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          repeat: false,
        }}
        className="text-center  bg-[url(./assets/solar.avif)] bg-no-repeat bg-cover w-[100vw] h-screen bg-center grid grid-cols-1 lg:grid-cols-2 overflow-hidden"
      >
        <div className="hidden lg:block"></div>
        <motion.div
          variants={fadeIn("left", 60, 0.25)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex justify-center items-center flex-col gap-4"
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl leading-[60px] font-extrabold text-white font- ">
            {content[language].title}
          </h2>
          <p className="mt-2 text-lg text-[#CCCCCC]">
            {content[language].subtitle}
          </p>
          <div className="mt-4 flex justify-center">
            <button className="bg-[#FFA500] text-white px-6 py-2 rounded-lg hover:bg-[#FFD700] transition">
              {content[language].cta}
            </button>
          </div>
        </motion.div>
      </motion.section>

      {/* Benefits Section */}
      <section className="p-6 bg-[#2E2E2E] shadow-lg w-[100vw] overflow-x-hidden">
        <motion.div
          className="whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        >
          {content[language].benefits.map((benefit, index) => (
            <span
              key={index}
              className="mx-4 text-3xl font-bold text-[#FFA500]"
            >
              {benefit}
            </span>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
