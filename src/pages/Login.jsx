import { useEffect, useState } from "react";

import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

function TopBar() {

  const [isScrolled, setIsScrolled] =
    useState(false);

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };

  }, []);

  return (

    <div
      className={`
        fixed
        left-0
        w-full
        z-40
        bg-slate-900
        border-b
        border-white/10
        transition-all
        duration-300

        ${
          isScrolled
            ? "-translate-y-full opacity-0"
            : "translate-y-0 opacity-100"
        }

        lg:top-0
        top-24
      `}
    >

      <div
        className="
          container
          mx-auto
          px-4
          lg:px-6
          py-3
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-between
          gap-3
        "
      >

        {/* LEFT SIDE */}

        <div
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-center
            gap-3
            lg:gap-8
            text-xs
            sm:text-sm
            text-slate-300
          "
        >

          {/* ADDRESS */}

          <div className="flex items-center gap-2">

            <MapPin
              size={15}
              className="text-amber-400"
            />

            <span>
              4 Patricia Close, Asaba
            </span>

          </div>

          {/* PHONE */}

          <div className="flex items-center gap-2">

            <Phone
              size={15}
              className="text-amber-400"
            />

            <span>
              09030002676
            </span>

          </div>

          {/* EMAIL */}

          <div className="flex items-center gap-2">

            <Mail
              size={15}
              className="text-amber-400"
            />

            <span className="truncate">
              info@patriciaschoolsasaba.org
            </span>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div
          className="
            flex
            items-center
            gap-4
            text-sm
          "
        >

          <button
            className="
              text-slate-200
              hover:text-amber-400
              transition
            "
          >

            Register

          </button>

          <button
            className="
              text-slate-200
              hover:text-amber-400
              transition
            "
          >

            Login

          </button>

          <button
            className="
              bg-amber-400
              hover:bg-amber-500
              text-slate-900
              px-4
              py-2
              rounded-full
              font-semibold
              transition-all
              duration-300
            "
          >

            Apply

          </button>

        </div>

      </div>

    </div>

  );
}

export default TopBar;