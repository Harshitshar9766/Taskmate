
import { useEffect, useState } from 'react';
import logo from '../assets/logo.jpeg';
import { toHaveFormValues } from '@testing-library/jest-dom/matchers';

function Header() {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || "medium");

  useEffect(() => {
    console.log("current theme",theme)
    localStorage.setItem("theme", JSON.stringify(theme))
    document.documentElement.className = "";
    document.documentElement.classList.add(theme);
  },[theme])
  

  
  return (
    <header>
        <div className='logo'>
            <img src={logo} alt="Taskmate Logo"/>
            <spam>Taskmate</spam>
        </div>
        <div className="themeSelector">
          <span onClick={() => setTheme("light")} className={theme === "light" ? "light activeTheme" : "light"}></span>
          <span onClick={() => setTheme("medium")}  className={theme === "medium" ? "medium activeTheme" : "medium"}></span>
          <span onClick={() => setTheme("dark")}  className={theme === "dark" ? "dark activeTheme" : "dark"}></span>
          <span onClick={() => setTheme("gOne")}   className={theme === "gOne" ? "gOne activeTheme" : "gOne"}></span>
          <span onClick={() => setTheme("gTwo")}  className={theme === "gTwo" ? "gTwo activeTheme" : "gTwo"}></span>
          <span onClick={() => setTheme("gThree")}  className={theme === "gThree" ? "gThree activeTheme" : "gThree"}></span>
        </div>
    </header>
  )
}

export default Header