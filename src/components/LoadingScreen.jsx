import { motion } from "framer-motion";

function LoadingScreen() {

  return (

    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 bg-slate-950 flex items-center justify-center z-[99999]"
    >

      <div className="text-center">

        {/* LOGO */}

        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="text-6xl md:text-8xl font-bold"
        >

          <span className="text-white">
            Alex
          </span>

          <span className="text-cyan-400">
            .dev
          </span>

        </motion.h1>

        {/* LOADING BAR */}

        <motion.div
          initial={{
            width: 0,
          }}
          animate={{
            width: "100%",
          }}
          transition={{
            duration: 2,
          }}
          className="h-1 bg-cyan-400 mt-8 rounded-full"
        />

      </div>

    </motion.div>

  );
}

export default LoadingScreen;