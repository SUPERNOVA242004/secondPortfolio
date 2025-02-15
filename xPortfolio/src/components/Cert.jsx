import React from "react";

function Cert() {
  const certificates = [
    {
      title: "Custom built Operating System",
      description:
        "A custom-built operating system that is designed to be lightweight, fast, and secure. The OS is developed from scratch and includes features such as a file system, memory management, and process scheduling.",
    },
    // Add more certificate objects as needed
  ];

  return (
    <div id="certificates_section" className="px-4 md:px-10">
      <p className="mt-6 text-3xl font-bold text-center md:text-left">Certificates</p>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg mx-auto"
          >
            <a href="#">
              <img className="rounded-t-lg w-full h-48 object-cover" src="/proj_img.png" alt={cert.title} />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {cert.title}
                </h5>
              </a>
              <p className="mb-3 text-gray-700 dark:text-gray-400">{cert.description}</p>
              <a
                href="#"
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

export default Cert;
