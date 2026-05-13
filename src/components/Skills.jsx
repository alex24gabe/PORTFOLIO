import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaFire,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiExpress,
  SiMongodb,
  SiVite,
} from "react-icons/si";

function Skills() {
  const skillCategories = {
    Frontend: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "React.js", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Framer Motion", icon: <SiFramer /> },
      { name: "Responsive Design", icon: <FaReact /> },
      { name: "Vite", icon: <SiVite /> },
    ],

    Backend: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Firebase", icon: <FaFire /> },
      { name: "REST APIs", icon: <FaDatabase /> },
      { name: "Python", icon: <FaPython /> },
    ],

    Tools: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "UI/UX Design", icon: <FaReact /> },
      { name: "Full-Stack Development", icon: <FaNodeJs /> },
    ],
  };

  return (
    <section
      id="skills"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />

        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        {/* HEADER */}
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-cyan-400 font-semibold mb-4 tracking-widest uppercase"
          >
            My Skills
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              text-4xl md:text-6xl
              font-extrabold
              bg-gradient-to-r
              from-cyan-400
              to-blue-500
              bg-clip-text
              text-transparent
              mb-6
            "
          >
            Technologies & Tools
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            I develop modern, scalable, and high-performance full-stack
            applications with a strong focus on responsive user experiences,
            secure backend architecture, clean code practices, and maintainable
            software solutions.
          </motion.p>
        </div>

        {/* SKILL CATEGORIES */}
        <div className="space-y-20">
          {Object.entries(skillCategories).map(
            ([category, skills], categoryIndex) => (
              <div key={category}>
                {/* CATEGORY TITLE */}
                <motion.h3
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-2xl md:text-3xl font-bold text-white mb-10"
                >
                  {category}
                </motion.h3>

                {/* GRID */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.05,
                      }}
                      viewport={{ once: true }}
                      whileHover={{
                        y: -6,
                        scale: 1.03,
                        boxShadow:
                          "0 0 30px rgba(34,211,238,0.2)",
                      }}
                      className="
                        bg-slate-900/60
                        backdrop-blur-lg
                        border border-white/10
                        rounded-2xl
                        p-8
                        shadow-lg
                        hover:border-cyan-400/50
                        transition-all duration-300
                        flex flex-col items-center justify-center
                        text-center
                        gap-4
                      "
                    >
                      <div className="text-4xl text-cyan-400">
                        {skill.icon}
                      </div>

                      <h4 className="text-lg font-semibold text-gray-200">
                        {skill.name}
                      </h4>
                    </motion.div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;