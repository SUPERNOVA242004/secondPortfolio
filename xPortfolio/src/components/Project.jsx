import React from "react";

function Project() {
  // Array of project objects
  const projects = [
    {
      title: "Portfolio website using React and Tailwind CSS",
      description:
        "A responsive portfolio website built using React and Tailwind CSS. The website showcases my skills, projects, and certifications, providing visitors with an overview of my work.",
      imageSrc: "/proj_img01.png",
      externalLink: "https://your-portfolio-link.com",
    },
    {
      title: "Object detection using TensorFlow",
      description:
        "A machine learning project that uses TensorFlow to detect objects in images. The model is trained on a dataset of images and can identify objects with high accuracy.",
      imageSrc: "/proj_img02.png",
      externalLink: "https://your-object-detection-link.com",
    },
    // {
    //   title: "Custom built Operating System",
    //   description:
    //     "A custom-built operating system that is designed to be lightweight, fast, and secure. The OS is developed from scratch and includes features such as a file system, memory management, and process scheduling.",
    //   imageSrc: "/path/to/os-image.png",
    //   externalLink: "https://your-os-project-link.com",
    // },
    // Add more projects as needed
  ];

  return (
    <div id="projects" className="px-4 md:px-10">
      <p className="mt-6 text-3xl font-bold text-center md:text-left">Projects</p>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg mx-auto"
          >
            <a href={project.externalLink} target="_blank" rel="noopener noreferrer">
              <img
                className="rounded-t-lg w-full h-48 object-cover"
                src={project.imageSrc}
                alt={project.title}
              />
            </a>
            <div className="p-5">
              <a href={project.externalLink} target="_blank" rel="noopener noreferrer">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {project.title}
                </h5>
              </a>
              <p className="mb-3 text-gray-700 dark:text-gray-400">{project.description}</p>
              <a
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors duration-300"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
