import { useState } from 'react';

import { projects } from '../../constants';

const Work = () => {

  const [selectedProject, setSelectedProject] =useState(null);

 const handleOpenModal = (project) => {
     setSelectedProject(project);
 }

  const handleCloseModal = () => {
    setSelectedProject(null);
  }



  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] sm:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section title */}

      <div className="text-center mb-16">
        <h2 className="text-4xl text-white font-bold">PROJECTS</h2>
        <div className="bg-purple-500 w-40 h-1 mx-auto mt-4"></div>
        <p className="text-lg font-semibold text-gray-400 mt-4">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Project grid cards */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {projects.map((project, index) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className={`border-white border bg-gray-900 rounded-2xl backdrop-blur-md shadow-2xl cursor-pointer overflow-hidden 
               ${
                 index % 2 === 0
                   ? "hover:shadow-purple-500/50"
                   : "hover:shadow-yellow-500/50"
               } hover:-translate-y-2 translate-transform duration-300`}
          >
            <div className="p-4">
              <img
                className=" w-full h-44 rounded-xl object-cover"
                src={project.image}
                alt={`${project.title}`}
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl text-white font-bold">{project.title}</h3>
              <p className="text-gray-500 pt-5 line-clamp-3">
                {project.description}
              </p>
            </div>
            <div className="mb-4 flex flex-wrap pl-4">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-[#251f38] text-purple-500 text-xs font-semibold mr-2 mb-2 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Modal for project details */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4 overflow-y-auto">
          <div className=" flex flex-col bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative top-10">
            {/* close button */}
            <div className="flex justify-end p-4 mb-2">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500"
              >
                &times;
              </button>
            </div>
            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-gray-900 px-4">
                <img
                  src={selectedProject.image}
                  className="lg:w-full w-[95%] rounded-xl shadow-2xl"
                />
              </div>
              <div className="lg:p-8 p-6">
                <h3 className="lg:text-3xl text-white font-bold mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-xs text-gray-400 lg:text-base mb-4">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className=" bg-[#251f38] text-purple-500 text-xs font-semibold  px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mb-2">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 text-sm lg:text-xl font-semibold px-2 py-2 lg:px-6 lg:py-2 rounded-xl text-center"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-purple-800 hover:bg-purple-900 text-gray-400 text-sm lg:text-xl font-semibold px-2 py-2 lg:px-6 lg:py-2 rounded-xl text-center"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Work