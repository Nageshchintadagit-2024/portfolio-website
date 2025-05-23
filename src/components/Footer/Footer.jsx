import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";



const Footer = () => {
  // Function to handle scrolling to different sections
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        <h3 className="text-semibold text-purple-500 text-xl">
          Nagesh Chintada
        </h3>
      </div>
      {/* Navigation links Responsive */}
      <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
        {[
          { name: "About", id: "about" },
          { name: "Skills", id: "skills" },
          { name: "Experience", id: "experience" },
          { name: "Projects", id: "projects" },
          { name: "Education", id: "education" },
        ].map((item, index) => (
          <button
            key={index}
            onClick={() => handleScroll(item.id)}
            className="text-white text-md hover:text-purple-500 cursor-pointer"
          >
            {item.name}
          </button>
        ))}
      </nav>
      {/* Social Media Icons */}
      <div className="flex items-center justify-center space-x-4 mt-6">
        {[
          {
            icon: <FaFacebook />,
            link: "https://www.facebook.com/chintada.nagesh.3",
          },
          {
            icon: <FaTwitter />,
            link: "https://x.com/Nagesh1706",
          },
          {
            icon: <FaLinkedin />,
            link: "https://www.linkedin.com/in/nagesh-chintada-755658252/",
          },
          {
            icon: <FaInstagram />,
            link: "https://www.instagram.com/nagesh_chintada/",
          },
          {
            icon: <FaGithub />,
            link: "https://github.com/Nageshchintadagit-2024",
          },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
          >
            {item.icon}
          </a>
        ))}
      </div>
      {/* copyright paragraph0 */}
      <p className="text-sm text-gray-400 mt-6 text-center">
        ©️2025 Nagesh Chintada. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
