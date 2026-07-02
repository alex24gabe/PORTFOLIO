import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";



import project3 from "../assets/votingpoll.jpg";
import project2 from "../assets/asset2.jpg";
import project1 from "../assets/image3.jpg";
function Projects({ darkMode }) {
  const projects = [
    {
      image: project3,

      title: "Bencom Assessment",

      description:
        "A responsive frontend assessment built with React and Tailwind CSS. The project demonstrates reusable components, responsive layouts, and modern UI development.",

      tech: ["React", "Tailwind CSS", "Vite"],

      live: "https://elect-nu.vercel.app/",

      github: "https://github.com/alex24gabe/bincom_assessment.git",
    },

    {
      image: project2,

      title: "Developer Portfolio",

      description:
        "My personal portfolio showcasing my skills, projects, and frontend development experience with responsive design, animations, and dark mode support.",

      tech: ["React", "Tailwind CSS", "Framer Motion"],

      live: "https://alex-dev-web-portfolio.vercel.app/",

      github: "https://github.com/alex24gabe/PORTFOLIO.git",
    },

    {
      image: project1,

      title: "Upcoming Project",

      description:
        "A new project currently under development. It will be added here soon with a live demo and source code.",

      tech: ["Coming Soon"],

      live: "#",

      github: "#",
    },
  ];

  return (
    <section
      id="projects"
      className={
        darkMode
          ? "py-32 px-6 bg-slate-900 transition-colors duration-500"
          : "py-32 px-6 bg-gray-200 transition-colors duration-500"
      }
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        {/* HEADER */}

        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-cyan-400 font-semibold mb-4"
          >
            My Projects
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={
              darkMode
                ? "text-4xl md:text-5xl font-bold mb-6 text-white"
                : "text-4xl md:text-5xl font-bold mb-6 text-slate-900"
            }
          >
            Featured Work
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className={
              darkMode
                ? "text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
                : "text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed"
            }
          >
            A collection of projects showcasing modern frontend development,
            responsive layouts, animations, and user-focused design.
          </motion.p>
        </div>

        {/* PROJECT GRID */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={
                darkMode
                  ? "group bg-slate-950 rounded-3xl overflow-hidden border border-slate-800 hover:border-cyan-400 transition duration-300"
                  : "group bg-white rounded-3xl overflow-hidden border border-gray-300 hover:border-cyan-400 transition duration-300"
              }
            >
              {/* IMAGE */}

              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />

                {/* OVERLAY */}

                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-4">
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-black p-4 rounded-full text-white"
                  >
                    <FiExternalLink />
                  </motion.a>

                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-900 p-4 rounded-full text-white"
                  >
                    <FiGithub />
                  </motion.a>
                </div>
              </div>

              {/* CONTENT */}

              <div className="p-8">
                <h3
                  className={
                    darkMode
                      ? "text-2xl font-bold mb-4 text-white"
                      : "text-2xl font-bold mb-4 text-slate-900"
                  }
                >
                  {project.title}
                </h3>

                <p
                  className={
                    darkMode
                      ? "text-gray-400 leading-relaxed mb-6"
                      : "text-slate-600 leading-relaxed mb-6"
                  }
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={
                        darkMode
                          ? "bg-slate-800 text-cyan-400 px-4 py-2 rounded-full text-sm"
                          : "bg-gray-200 text-cyan-600 px-4 py-2 rounded-full text-sm"
                      }
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;