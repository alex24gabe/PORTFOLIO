import { motion } from "framer-motion";

function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Framer Motion",
    "Git",
    "GitHub",
    "Responsive Design",
    "Vite",
    "UI/UX",
    "Firebase",
  ];

  return (

    <section
    id="skills"
    className="py-32 px-6"
    >

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
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

            My Skills

          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >

            Technologies & Tools I Use

          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >

            I build modern and scalable web applications
            using industry-standard frontend technologies
            and development tools.

          </motion.p>

        </div>

        {/* SKILLS GRID */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex items-center justify-center hover:border-cyan-400 transition duration-300"
            >

              <h3 className="text-lg md:text-xl font-semibold text-gray-300">

                {skill}

              </h3>

            </motion.div>

          ))}

        </div>

      </motion.div>

    </section>
  );
}

export default Skills;