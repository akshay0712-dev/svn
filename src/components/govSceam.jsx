import { useState } from "react";
import { delay, motion } from "framer-motion";
import { card, fadeIn } from "./varients";


export default function GovSceam({ language }) {
  const content = {
    hi: {
      title: "अधिक सरकारी योजना विवरण",
      schemes: [
        {
          img: "1.png",
          title:
            "प्रधान मंत्री किसान ऊर्जा सुरक्षा एवं उत्थान महाभियान (PM KUSUM)",
          details: [
            "सौर पंपों की लागत पर 60% तक की सब्सिडी।",
            "ग्रिड-से जुड़े सौर पावर प्लांट स्थापित करने के लिए वित्तीय सहायता।",
          ],
        },
        {
          img: "2.png",
          title: "राष्ट्रीय सौर मिशन",
          details: [
            "2022 तक 100 GW सौर ऊर्जा क्षमता प्राप्त करने का लक्ष्य।",
            "बड़े पैमाने पर सौर ऊर्जा उत्पादन परियोजनाओं के लिए प्रोत्साहन।",
          ],
        },
        {
          img: "3.png",
          title: "अटल मिशन फॉर रीजनरेशन एंड अर्बन ट्रांसफॉर्मेशन (AMRUT)",
          details: [
            "शहरी क्षेत्रों में सौर रूफटॉप स्थापना के लिए वित्तीय सहायता।",
            "पारिस्थितिकी-संवेदनशील और सतत अवसंरचना बनाने में मदद।",
          ],
        },
        {
          img: "4.png",
          title: "राज्य-विशिष्ट सौर योजनाएं",
          details: [
            "रूफटॉप सौर प्रतिष्ठापनों के लिए सब्सिडी और प्रोत्साहन।",
            "व्यवसायों और व्यक्तियों के लिए कम ब्याज दर पर ऋण योजनाएं।",
          ],
        },
        {
          img: "5.png",
          title: "सौर रूफटॉप सब्सिडी योजना",
          details: [
            "आवासीय भवनों के लिए 40% तक की सब्सिडी।",
            "वाणिज्यिक भवनों के लिए 20% तक की सब्सिडी।",
          ],
        },
      ],
    },
    en: {
      title: "More Government Scheme Details",
      schemes: [
        {
          img: "1.png",
          title:
            "Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan (PM KUSUM)",
          details: [
            "Subsidy of up to 60% on the cost of solar pumps.",
            "Financial assistance for setting up grid-connected solar power plants.",
          ],
        },
        {
          img: "2.png",
          title: "National Solar Mission",
          details: [
            "Targets to achieve 100 GW of solar energy capacity by 2022.",
            "Incentives for large-scale solar power generation projects.",
          ],
        },
        {
          img: "3.png",
          title:
            "Atal Mission for Rejuvenation and Urban Transformation (AMRUT)",
          details: [
            "Funding for solar rooftop installation in urban areas.",
            "Assistance in creating eco-friendly and sustainable infrastructure.",
          ],
        },
        {
          img: "4.png",
          title: "State-Specific Solar Schemes",
          details: [
            "Subsidies and incentives for rooftop solar installations.",
            "Loan schemes at lower interest rates for businesses and individuals.",
          ],
        },
        {
          img: "5.png",
          title: "Solar Rooftop Subsidy Scheme",
          details: [
            "Up to 40% subsidy for residential buildings.",
            "Up to 20% subsidy for commercial buildings.",
          ],
        },
      ],
    },
  };

  return (
    <>
     <motion.header     
     variants={fadeIn("left", 0, 0)}
     initial={
      {
        opacity: 0,
      }}
     whileInView={
      {
        opacity: 1,
      }
     }
     transition={{
        ease: "easeInOut",
        duration: 1,
        repeat: false,
      }}
     viewport={{ once: true}}
      id="about" className="flex justify-center items-center p-4 bg-[#0A0A0A] shadow-md w-[100vw] overflow-x-hidden">
        <h1 className="font-bold text-3xl text-white text-center">{content[language].title}</h1>
       
      </motion.header>

    {/* Schemes Section */}
    <motion.section
    
    variants={fadeIn("right", 300, 0)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: true}}
     className="p-6 flex flex-col lg:flex-row flex-wrap bg-black  gap-6 justify-center items-center w-[100vw] overflow-x-hidden">
        {content[language].schemes.map((scheme, index) => (
          <div
            key={index} 
            className="bg-gradient-to-b from-[#2D3B5E] to-[#334E96] hover:scale-105 hover:border-b-8  border-[#FFD700]  transition p-6 shadow-lg rounded-lg min-h-[55vh] w-[90vw] md:w-[40vw] lg:w-[30vw] flex flex-col justify-evenly items-center text-center"
          >
            <img src={scheme.img} alt={scheme.title} className="h-10vh md:h-[15vh] w-[20vw] md:w-[10vw]  mx-auto " />
            <h3 className="text-2xl font-semibold text-[#FFD700]">
              {scheme.title}
            </h3>
            <ul className=" space-y-2 text-white text-left">
              {scheme.details.map((detail, index) => (
                <li key={index} className="list-disc ml-8 pl-2">{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </motion.section>
    </>
  );
}
