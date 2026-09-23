import { useContext } from "react"
import { ThemeContext } from "./context/ThemeContext"


const Home = () => {
    const {theme} = useContext(ThemeContext)
  return (
    <>
    
    <div className={`${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'} flex gap-25 items-center mt-20 h-screen`}> This is Home Page 
   
      </div>
   </>
  )
}

export default Home