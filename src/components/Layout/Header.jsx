import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { ThemeContext } from "@/components/context/ThemeContext"

const Header = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <div className="fixed flex items-center justify-between gap-50 top-0 left-0 w-full bg-blue-500 h-20  py-2 px-20">

        <Link to="/"><h1 className="font-bold font-monospace text-3xl"> Akil's <span> Portfolio </span></h1></Link>
        <nav className="flex items-center justify-center">

            <ul className="flex justify-between w-[400px]  items-center gap-10">
               <li> <NavLink className={({ isActive }) => isActive ? "active transition-all duration-200 bg-green-500 text-white py-2 px-3 rounded-md " : "" } to="/">Home</NavLink></li>
               <li> <NavLink className={({ isActive }) => isActive ? "active transition-all duration-200 bg-green-500 text-white py-2 px-3 rounded-md " : ""} to="/about">About</NavLink></li>
               <li> <NavLink className={({ isActive }) => isActive ? "active transition-all duration-200 bg-green-500 text-white py-2 px-3 rounded-md " : ""} to="/contact">Contact</NavLink></li>
               <li> <NavLink className={({ isActive }) => isActive ? "active transition-all duration-200 bg-green-500 text-white py-2 px-3 rounded-md " : ""} to="/product">Product</NavLink></li>
            </ul>
        </nav>
         <div className="flex items-center gap-4">
              <button className="bg-black text-white py-2 px-3 rounded-md shadow-md cursor-pointer">Login</button>
              <button className="bg-green-500 py-2 px-3 rounded-md shadow-md cursor-pointer">Download CV</button>
               <button className="cursor-pointer text-4xl" onClick={toggleTheme}> {theme === "light" ? "🌛" : "☀️"} </button>
         </div>

       
    </div>
  )
}

export default Header
