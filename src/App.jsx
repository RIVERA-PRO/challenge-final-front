import './App.css';
import { router, } from "./Pages/index";
import { RouterProvider } from "react-router-dom";
import React, { useState, useEffect } from 'react'


function App() {

  const getTheme = () => {
    return JSON.parse(localStorage.getItem("theme")) || false
  }
  const [theme, setTheme] = useState(getTheme())
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme))
  }, [theme])

  return (
    <div className={theme ? "theme-dark" : ""}>

      <RouterProvider router={router} />
      <div className='cometent-bg-color main-content'>
        <h1>dark mode</h1>
        <input type="checkbox" onChange={() => setTheme(!theme)} />

      </div>
    </div>

  );
}

export default App;
