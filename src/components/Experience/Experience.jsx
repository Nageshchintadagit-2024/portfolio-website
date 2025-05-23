import React from "react";

import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/*section title */}
      <div className="text-center mb-16">
        <h1 className="text-white text-4xl font-bold">EXPERIENCE</h1>
        <div className="w-36 h-1 mx-auto mt-4 bg-purple-500"></div>
        <p className="text-gray-400 text-lg font-semibold mt-4">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience timeline */}

      <div className="relative">
        {/* Timeline Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:translate-x-0 w-1 h-full bg-white"></div>
        {/* Experince entries */}

        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline circle */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center z-10 bg-gray-400 ">
              <img
                className="w-full h-full rounded-full object-cover"
                src={experience.img}
                alt={`${experience.company} logo`}
              />
            </div>

            {/* Content Section */}

            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-10 sm:mr-10 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Flex container for image and text */}

              <div className="flex items-center space-x-6 ">
                {/* Company logo */}
                <div className="w-16 h-16 rounded-md bg-white overflow-hidden">
                  <img
                    className="w-full h-full object-cover "
                    src={experience.img}
                    alt={""}
                  />
                </div>
                {/* Text content for role, company and date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">
                      {experience.company}
                    </h4>
                  </div>
                  {/* Date */}
                  <p className="text-sm text-gray-500 mt-2">
                    {experience.date}
                  </p>
                </div>
              </div>
              <p className="text-md mt-4 text-gray-400">{experience.desc}</p>
              <div className="mt-4">
                <h5 className="font-medium text-white mb-2">Skills:</h5>
                <ul className="flex flex-wrap">
                  {experience.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-[#8245ec] text-gray-300 text-xs sm:text-sm rounded-lg px-4 py-1 mr-2 mb-2 border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
