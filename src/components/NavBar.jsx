import { useState } from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  HiMenu,
  HiX,
  HiMoon,
  HiSun,
} from "react-icons/hi";

function Navbar({ darkMode, setDarkMode }) {

  // MOBILE MENU STATE

  const [menuOpen, setMenuOpen] = useState(false);

  // NAVIGATION LINKS

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  // SCROLL FUNCTION

  const scrollToSection = (id) => {

    const section = document.getElementById(id);

    if (section) {

      section.scrollIntoView({
        behavior: "smooth",
      });

    }

    setMenuOpen(false);

  };

  return (

    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={
        darkMode
          ? "fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 z-50"
          : "fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50"
      }
    >

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}

        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold cursor-pointer"
          onClick={() => scrollToSection("home")}
        >

          <span
            className={
              darkMode
                ? "text-white"
                : "text-slate-900"
            }
          >

            Alex

          </span>

          <span className="text-cyan-400">
            .dev
          </span>

        </motion.h1>

        {/* DESKTOP MENU */}

        <ul
          className={
            darkMode
              ? "hidden md:flex items-center gap-8 text-gray-300 font-medium"
              : "hidden md:flex items-center gap-8 text-slate-700 font-medium"
          }
        >

          {navLinks.map((item, index) => (

            <motion.li
              key={index}
              whileHover={{ y: -3 }}
              className="hover:text-cyan-400 transition duration-300 cursor-pointer"
              onClick={() => scrollToSection(item.id)}
            >

              {item.name}

            </motion.li>

          ))}

        </ul>

        {/* RIGHT SIDE */}

        <div className="flex items-center gap-4">

          {/* THEME TOGGLE */}

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setDarkMode(!darkMode)}
            className={
              darkMode
                ? "bg-slate-800 p-3 rounded-full text-yellow-400"
                : "bg-gray-200 p-3 rounded-full text-slate-800"
            }
          >

            {darkMode ? <HiSun /> : <HiMoon />}

          </motion.button>

          {/* MOBILE MENU BUTTON */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={
              darkMode
                ? "md:hidden text-white text-3xl"
                : "md:hidden text-slate-900 text-3xl"
            }
          >

            {menuOpen ? <HiX /> : <HiMenu />}

          </button>

        </div>

      </div>

      {/* MOBILE MENU */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className={
              darkMode
                ? "md:hidden bg-slate-900 border-t border-slate-800 overflow-hidden"
                : "md:hidden bg-white border-t border-gray-200 overflow-hidden"
            }
          >

            <ul
              className={
                darkMode
                  ? "flex flex-col p-6 gap-6 text-gray-300 font-medium"
                  : "flex flex-col p-6 gap-6 text-slate-700 font-medium"
              }
            >

              {navLinks.map((item, index) => (

                <motion.li
                  key={index}
                  initial={{
                    x: -20,
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="hover:text-cyan-400 transition duration-300 cursor-pointer"
                  onClick={() => scrollToSection(item.id)}
                >

                  {item.name}

                </motion.li>

              ))}

            </ul>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.nav>
  );
}

export default Navbar;