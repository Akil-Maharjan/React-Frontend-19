import { useContext } from "react"
import { ThemeContext } from "./context/ThemeContext"

const About = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"} mt-20 h-screen`}>This is About Page</div>
  )
}

export default About