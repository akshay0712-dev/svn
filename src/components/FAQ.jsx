  import { useState } from "react";
  import { delay, motion } from "framer-motion"; // Importing Framer Motion for animations
  import { fadeIn } from "./varients";

export default function FAQ({ language }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const content = {
    hi: {
      title: "अक्सर पूछे जाने वाले प्रश्न",
      toggleLang: "🇬🇧 English",
      faqs: [
        {
          question: "सोलर इंस्टॉलेशन के लिए सब्सिडी कितनी मिलती है?",
          answer:
            "सरकार ₹78,000 तक की सब्सिडी प्रदान करती है, जो आपके सिस्टम की क्षमता और राज्य की नीतियों पर निर्भर करती है।",
        },
        {
          question: "क्या मैं अपने बिजली बिल में बचत कर सकता हूँ?",
          answer:
            "हाँ! आप अपने बिजली बिल में 90% तक की बचत कर सकते हैं। सोलर सिस्टम 25-30 वर्षों तक मुफ्त बिजली प्रदान करता है।",
        },
        {
          question: "सोलर पैनल की लाइफ कितनी होती है?",
          answer:
            "अधिकांश सोलर पैनल की औसत आयु 25-30 वर्ष होती है, और नियमित सफाई से इनकी दक्षता बनी रहती है।",
        },
        {
          question: "सोलर सिस्टम लगाने में कितना समय लगता है?",
          answer:
            "आमतौर पर 2-5 दिन लगते हैं, यह सिस्टम के आकार और स्थान की स्थितियों पर निर्भर करता है।",
        },
        {
          question: "क्या बारिश के मौसम में सोलर पैनल काम करेंगे?",
          answer:
            "हाँ, बादल और बारिश के दिनों में भी सोलर पैनल बिजली उत्पन्न करते हैं, लेकिन उनकी क्षमता थोड़ी कम हो सकती है।",
        },
        {
          question: "क्या सोलर पैनल की सफाई आवश्यक है?",
          answer:
            "हाँ, धूल और गंदगी से दक्षता प्रभावित हो सकती है। महीने में कम से कम एक बार सफाई करने की सलाह दी जाती है।",
        },
      ],
    },
    en: {
      title: "Frequently Asked Questions",
      toggleLang: "🇮🇳 हिंदी",
      faqs: [
        {
          question: "What is the subsidy amount for solar installation?",
          answer:
            "The government provides a subsidy of up to ₹78,000, depending on the system capacity and state policies.",
        },
        {
          question: "Can I save money on my electricity bill?",
          answer:
            "Yes! You can save up to 90% on your electricity bills. A solar system provides free electricity for 25-30 years.",
        },
        {
          question: "What is the lifespan of solar panels?",
          answer:
            "Most solar panels have an average lifespan of 25-30 years, and regular cleaning ensures high efficiency.",
        },
        {
          question: "How long does it take to install a solar system?",
          answer:
            "A typical installation takes 2-5 days, depending on the system size and site conditions.",
        },
        {
          question: "Will solar panels work during the rainy season?",
          answer:
            "Yes, solar panels generate electricity even on cloudy or rainy days, but their efficiency may be slightly reduced.",
        },
        {
          question: "Is cleaning solar panels necessary?",
          answer:
            "Yes, dust and dirt can reduce efficiency. It is recommended to clean them at least once a month.",
        },
      ],
    },
  };

  return (
    <section className="relative p-6 bg-[black] w-[100vw] overflow-hidden">
      <span className="absolute  left-52 text-[#ffffff80] text-[30rem] font-semibold z-[0] hidden lg:block">
        ?
      </span>
      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] items-center w-[95vw] md:w-[80vw] mx-auto bg-black p-6 rounded-lg shadow-md ">
        <div className=" justify-between items-center mb-4 z-[5]">
          <motion.h2
            variants={fadeIn("right", 300, 0)}
            initial="hidden"
            whileInView={"show"}
            className="text-4xl font-bold text-[white] text-center"
          >
            {content[language].title}
          </motion.h2>
        </div>

        {/* FAQ List */}
        <motion.div
          variants={fadeIn("left", 300, 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false}}
          className="space-y-4 z-[5]"
        >
          {content[language].faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#ffa6009b] rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-4 font-medium text-white  bg-[#ffd9008d] hover:bg-[#ffa600a2] transition flex justify-between items-center"
              >
                {faq.question}
                <span className="text-lg">
                  {openIndex === index ? "➖" : "➕"}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-4 text-white bg-black border-t border-[#ffa600a9]">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
