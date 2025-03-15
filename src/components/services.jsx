import { useState } from "react";
import { delay, motion } from "framer-motion"; // Importing Framer Motion for animations
import { fadeIn } from "./varients";

export default function Services({ language }) {
    const content = {
        hi: {
          title: "हमारी सेवाएं",
          list: [
            "मुफ्त साइट सर्वे और परामर्श।",
            "प्रधानमंत्री योजना के तहत सब्सिडी की प्रक्रिया में पूरी मदद।",
            "उच्च गुणवत्ता वाले सोलर पैनल और 25 साल तक की वारंटी।",
            "सभी कॉमर्शियल जगह जैसे ऑफिस/हॉस्पिटल/दुकान/स्कूल",
            "आटा चक्की और तेल मिल, आदि पर भी इंस्टालेशन सुविधा उपलब्ध।",
          ],
        },
        en: {
          title: "Our Services",
          list: [
            "Free site survey and consultation.",
            "Complete assistance in the subsidy process under the Prime Minister's scheme.",
            "High-quality solar panels with a warranty of up to 25 years.",
            "Installation facilities available at all commercial places like offices/hospitals/shops/schools.",
            "Installation facilities also available for flour mills and oil mills.",
          ],
        },
      };
  return (
    <section className="relative p-6 bg-[black] w-[100vw] overflow-hidden">
    <div className="flex flex-col lg:flex-row items-center w-[95vw] md:w-[80vw] mx-auto bg-black p-6 rounded-lg shadow-md ">
      <div className=" justify-between items-center mb-4 z-[5]">
        <motion.h2
          variants={fadeIn("right", 300, 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="w-[80vw] lg:w-[40vw]"
        >
          <img src="services.jpg" alt="" srcSet="" className="" />
        </motion.h2>
      </div>

      {/* FAQ List */}
      <motion.div
        variants={fadeIn("left", 300, 0)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true}}
        className="space-y-4 z-[5]"
      >
        {content[language].list.map((services, index) => (
          <div
            key={index}
            className="border border-[#ffa6009b] rounded-lg overflow-hidden"
          >
            <div
              className=" text-left p-4 font-medium text-white  bg-[#ffd9008d] hover:bg-[#ffa600a2] transition flex justify-between items-center w-[80vw] lg:w-[40vw]"
            >
              {services}
            </div>
           
          </div>
        ))}
      </motion.div>
    </div>
  </section>
  );
}
