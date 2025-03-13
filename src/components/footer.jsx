import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer({ language }) {
  const content = {
    en: {
      company: "SVN Infra & Solar Services Pvt Ltd",
      address: "New Bigrahpur Road, Dwarika Lane, Near Mithapur Bus Stand, Patna - 1",
      phone: "Phone: +91-9199922822",
      email: "Email: contact@svninfra.com",
      quickLinks: "Quick Links",
      home: "Home",
      about: "About Us",
      services: "Our Services",
      contact: "Contact",
      follow: "Follow Us",
      copyright: "© 2025 SVN Infra & Solar Services Pvt Ltd. All Rights Reserved.",
    },
    hi: {
      company: "SVN इंफ्रा और सोलर सर्विसेज प्राइवेट लिमिटेड",
      address: "न्यू बिग्रहपुर रोड, द्वारिका लेन, मिथापुर बस स्टैंड के पास, पटना - 1",
      phone: "फोन: +91-9199922822",
      email: "ईमेल: contact@svninfra.com",
      quickLinks: "त्वरित लिंक",
      home: "होम",
      about: "हमारे बारे में",
      services: "हमारी सेवाएँ",
      contact: "संपर्क करें",
      follow: "हमें फॉलो करें",
      copyright: "© 2025 SVN इंफ्रा और सोलर सर्विसेज प्राइवेट लिमिटेड। सर्वाधिकार सुरक्षित।",
    },
  };

  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3  gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold">{content[language].company}</h2>
          <p className="mt-2">{content[language].address}</p>
          <p className="mt-2">{content[language].phone}</p>
          <p className="mt-2">{content[language].email}</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">{content[language].quickLinks}</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="/" className="hover:text-orange-400">{content[language].home}</a></li>
            <li><a href="#about" className="hover:text-orange-400">{content[language].about}</a></li>
            <li><a href="#services" className="hover:text-orange-400">{content[language].services}</a></li>
            <li><a href="#contact" className="hover:text-orange-400">{content[language].contact}</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold">{content[language].follow}</h3>
          <div className="flex gap-4 mt-2">
            <a href="https://wa.me/9199922822" target="_blank" rel="noopener noreferrer" className="text-green-500 text-2xl hover:text-green-400"><FaWhatsapp /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-2xl hover:text-blue-400"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-2xl hover:text-blue-300"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 text-2xl hover:text-pink-400"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 text-2xl hover:text-blue-600"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-[#b2b1b1] mt-8 border-t border-gray-700 pt-4">
        <p>{content[language].copyright}</p>
      </div>
    </footer>
  );
}
