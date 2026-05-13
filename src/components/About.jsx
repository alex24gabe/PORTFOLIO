import { motion } from "framer-motion";

import profileImage from "../assets/profile.png";

function About() {

  const stats = [

    {
      title: "2+",
      subtitle: "Years Learning",
    },

    {
      title: "10+",
      subtitle: "Projects Built",
    },

    {
      title: "React",
      subtitle: "Frontend Focus",
    },

  ];

  return (

    <section
      id="about"
      className="py-32 px-6 bg-slate-900"
    >

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >

            <motion.img
              whileHover={{
                scale: 1.02,
              }}
              transition={{
                duration: 0.4,
              }}
              src={profileImage}
              alt="Profile"
              className="w-full max-w-xl mx-auto rounded-3xl object-cover border border-slate-800 shadow-2xl"
            />

            {/* GLOW */}

            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500/20 blur-3xl rounded-full" />

          </motion.div>

          {/* RIGHT SIDE CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            {/* SMALL TITLE */}

            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold mb-6">

              About

            </p>

            {/* MAIN TITLE */}

            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8 text-white">

              Designing with intent.
              <br />

              Building with craft.

            </h2>

            {/* DESCRIPTION */}

            <p className="text-gray-400 text-lg leading-relaxed mb-6">

              I'm a frontend developer focused on creating
              premium, responsive and interactive web
              experiences using React, Tailwind CSS
              and modern frontend technologies.

            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-10">

              I care deeply about clean UI systems,
              smooth user experiences and the details
              that make digital products feel modern
              and professional.

            </p>

            {/* DIVIDER */}

            <div className="w-full h-px bg-slate-800 mb-10" />

            {/* STATS */}

            <div className="grid grid-cols-3 gap-8">

              {stats.map((stat, index) => (

                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true }}
                >

                  <h3 className="text-4xl font-bold text-cyan-400 mb-2">

                    {stat.title}

                  </h3>

                  <p className="text-gray-400">

                    {stat.subtitle}

                  </p>

                </motion.div>

              ))}

            </div>

          </motion.div>

        </div>

      </motion.div>

    </section>
  );
}

export default About;