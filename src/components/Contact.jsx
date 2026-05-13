import { motion } from "framer-motion";

import {
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";
import {
  FaWhatsapp,
} from "react-icons/fa";


function Contact() {

  const contactInfo = [

    {
      icon: <FiMail />,
      title: "Email",
      value: "alex0424.smith@gmail.com",
    },

    {
      icon: <FiPhone />,
      title: "Phone",
      value: "+234 812 274 2324",
    },

    {
      icon: <FiMapPin />,
      title: "Location",
      value: "Nigeria",
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      value: "+234 812 274 2324",
    },


  ];

  return (

    <section
  id="contact"
  className="py-32 px-6"
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

            Contact Me

          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >

            Let's Work Together

          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >

            Have a project idea or want to collaborate?
            Feel free to reach out through the form below
            or through my contact information.

          </motion.p>

        </div>

        {/* CONTACT GRID */}

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT SIDE */}

          <div className="space-y-6">

            {contactInfo.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-center gap-6 hover:border-cyan-400 transition duration-300"
              >

                <div className="text-cyan-400 text-3xl">

                  {item.icon}

                </div>

                <div>

                  <h3 className="text-xl font-semibold mb-1">

                    {item.title}

                  </h3>

                  <p className="text-gray-400">

                    {item.value}

                  </p>

                </div>

              </motion.div>

            ))}

          </div>

          {/* RIGHT SIDE */}

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-8"
          >

            <div className="grid md:grid-cols-2 gap-6 mb-6">

              <input
                type="text"
                placeholder="Your Name"
                className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 outline-none focus:border-cyan-400 transition duration-300"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 outline-none focus:border-cyan-400 transition duration-300"
              />

            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 outline-none focus:border-cyan-400 transition duration-300 mb-6"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 outline-none focus:border-cyan-400 transition duration-300 mb-6 resize-none"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-cyan-500 hover:bg-cyan-400 py-4 rounded-xl font-semibold transition duration-300"
            >

              Send Message

            </motion.button>

          </motion.form>

        </div>

      </motion.div>

    </section>
  );
}

export default Contact;