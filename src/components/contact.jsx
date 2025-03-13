import { useState } from "react";

export default function Contact({ language }) {
  const content = {
    en: {
      heading: "We're Here To Help!",
      description:
        "Have questions about solar installation, subsidies, or our services? Our experts at SVN Infra & Solar Services are ready to assist you with personalized solutions. Reach out today and take the first step toward a solar-powered future!",
      address:
        "New Bigrahpur Road, Dwarika Lane, Near Mithapur Bus Stand, Patna - 1",
      phone: "Phone No: 9199922822",
      openHours: "Mon – Sat 9:00 – 18:00",
      whatsapp: "WhatsApp me at ",
    },
    hi: {
      heading: "हम आपकी मदद के लिए यहाँ हैं!",
      description:
        "क्या आपके पास सोलर इंस्टॉलेशन, सब्सिडी या हमारी सेवाओं से जुड़े सवाल हैं? SVN Infra & Solar Services के हमारे विशेषज्ञ आपको व्यक्तिगत समाधान प्रदान करने के लिए तैयार हैं। आज ही संपर्क करें और सौर ऊर्जा से अपने भविष्य को रोशन करें!",
      address:
        "न्यू बिग्रहपुर रोड, द्वारिका लेन, मिथापुर बस स्टैंड के पास, पटना - 1",
      phone: "फोन नं: 9199922822",
      openHours: "सोम – शनि 9:00 – 18:00",
      whatsapp: "व्हाट्सएप",
    },
  };

  return (
    <section id="contact" className="p-10 bg-black text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 bg-black text-white">
        {/* Left Section - Text Content */}
        <div className="flex justify-between flex-col">
          <h2 className="text-3xl font-bold bg-black text-white">
            {content[language].heading}
          </h2>
          <p className="mt-4 bg-black text-white">
            {content[language].description}
          </p>

          {/* Address and Contact Info */}
          <a
            href="https://maps.app.goo.gl/or5Tr9PgDx1grnVa9"
            className="mt-6 mb-4 "
          >
            <h3 className="font-semibold bg-black text-white">
              📍 {language === "en" ? "Address" : "पता"}:
            </h3>
            <p className="bg-black text-white cursor-pointer">
              {content[language].address}
            </p>
          </a>
          <div className="flex flex-col md:flex-row md:gap-10 justify-start">
            <a href="tel:+919199922822">
              <h3 className="font-semibold bg-black text-white">
                📞 {language === "en" ? "Phone" : "फोन"}:
              </h3>
              <p className="bg-black text-white">{content[language].phone}</p>
            </a>
            <div>
              <h3 className="font-semibold bg-black text-white">
                ⏰ {language === "en" ? "Open Hours" : "खुलने का समय"}:
              </h3>
              <p className="bg-black text-white">
                {content[language].openHours}
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Google Map & WhatsApp */}
        <div className="flex gap-7 flex-col space-y-4">
          {/* Embedded Google Map */}
          <div className="w-full h-56">
            <iframe
              className="w-full h-full rounded-lg shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7197.122371936681!2d85.1296310728385!3d25.586262067839563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59001c992637%3A0xfdd0209f776e76e9!2sNew%20Bigrahpur%20patna!5e0!3m2!1sen!2sin!4v1741737187410!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/9199922822"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4  bg-orange-500 text-white text-lg font-semibold text-center rounded-lg shadow-md"
          >
            {content[language].whatsapp}: +91-9199922822
          </a>
        </div>
      </div>
    </section>
  );
}
