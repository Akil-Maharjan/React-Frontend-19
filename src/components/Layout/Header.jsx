import { Link } from "react-router-dom"


const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-blue-500 h-10  p-2">
        <nav className="flex items-center justify-center">

            <ul className="flex justify-center items-center gap-5">
               <li> <Link to="/">Home</Link></li>
               <li> <Link to="/about">About</Link></li>
               <li> <Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header