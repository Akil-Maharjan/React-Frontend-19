import { useState } from "react"
import { ThemeContext } from "./ThemeContext";



const ThemeProvider =({children})=>{
     const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

     function toggleTheme() {
        setTheme((current) => (current === "light" ? "dark" : "light"));
        localStorage.setItem("theme", theme === "light" ? "dark" : "light");

      }
     return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>;
}

export default ThemeProvider