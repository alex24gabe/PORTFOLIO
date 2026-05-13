import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Button from "../components/Button";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* BACKGROUND BLOBS */}

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
      />

      {/* CONTENT */}

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl text-center"
      >
        {/* TYPEWRITER */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-cyan-400 text-base md:text-lg font-medium mb-5"
        >
          <Typewriter
            words={[
              "Full-Stack Developer",
              "Frontend Engineer",
              "React & Node.js Developer",
              "Modern Web Developer",
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </motion.p>

        {/* HEADING */}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 1,
          }}
          className="
            text-4xl
            md:text-6xl
            font-bold
            leading-tight
            mb-6
          "
        >
          Hi, I'm{" "}

          <span className="text-cyan-400">
            Alex
          </span>

          <br />

          Building Modern Web
          Applications
        </motion.h1>

        {/* DESCRIPTION */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.8,
            duration: 1,
          }}
          className="
            text-gray-400
            text-lg
            md:text-xl
            leading-relaxed
            max-w-2xl
            mx-auto
            mb-10
          "
        >
          I design and develop scalable, responsive, and
          high-performance web applications with modern
          frontend and backend technologies.
        </motion.p>

        {/* BUTTONS */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1,
          }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <Button href="#projects">
            View Projects
          </Button>

          <Button href="https://wa.me/2348122742324">
            Contact Me
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;