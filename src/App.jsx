import { useEffect, useState } from "react";

import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";

import LoadingScreen from "./components/LoadingScreen";

function App() {

  // THEME STATE

  const [darkMode, setDarkMode] = useState(true);

  // LOADING STATE

  const [loading, setLoading] = useState(true);

  // LOAD SAVED THEME

  useEffect(() => {

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {

    setDarkMode(savedTheme === "dark");

  } else {

    // FIRST TIME VISITORS
    setDarkMode(true);

  }

}, []);

  // SAVE THEME

  useEffect(() => {

    localStorage.setItem(
      "theme",
      darkMode ? "dark" : "light"
    );

  }, [darkMode]);

  // LOADING TIMER

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 2500);

    return () => clearTimeout(timer);

  }, []);

  return (

    <>

      <AnimatePresence>

        {loading && <LoadingScreen />}

      </AnimatePresence>

      {!loading && (

        <div
          className={
            darkMode
              ? "bg-slate-950 text-white transition-colors duration-500"
              : "bg-gray-100 text-slate-900 transition-colors duration-500"
          }
        >

          <Home
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />

        </div>

      )}

    </>

  );
}

export default App;