import { motion } from "framer-motion";

function Button({

  children,
  href,
  primary = true,

}) {

  return (

    <motion.a
      href={href}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className={
        primary

          ? "bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-xl font-semibold transition duration-300 shadow-lg shadow-cyan-500/20 inline-block"

          : "border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-xl font-semibold transition duration-300 inline-block"
      }
    >

      {children}

    </motion.a>

  );
}

export default Button;