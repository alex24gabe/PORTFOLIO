import { motion } from "framer-motion";

import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import {
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {

  const socials = [
    {
      icon: <FiGithub />,
      link: "https://github.com/alex24gabe",
    },

    {
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/altechweb",
    },

    {
      icon: <FiTwitter />,
      link: "#",
    },
     {
  icon: <FaWhatsapp />,
  link: "https://wa.me/2348122742324",
},
  ];

  return (

    <footer className="border-t border-slate-800 py-10 px-6">

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
      >

        {/* LOGO */}

        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold cursor-pointer"
        >

          <a href="#home">

            <span className="text-white">
              Alex
            </span>

            <span className="text-cyan-400">
              .dev
            </span>

          </a>

        </motion.h1>

        {/* COPYRIGHT */}

        <p className="text-gray-400 text-center">

          © 2026 Alex.dev. All rights reserved.

        </p>

        {/* SOCIAL LINKS */}

        <div className="flex items-center gap-4">

          {socials.map((social, index) => (

            <motion.a
              key={index}
              href={social.link}
              whileHover={{
                y: -4,
                scale: 1.1,
              }}
              className="bg-slate-900 border border-slate-800 p-4 rounded-full text-cyan-400 hover:border-cyan-400 transition duration-300"
            >

              {social.icon}

            </motion.a>

          ))}

        </div>

      </motion.div>

    </footer>
  );
}

export default Footer;