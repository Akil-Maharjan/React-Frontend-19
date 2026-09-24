import { useContext } from "react"
import { ThemeContext } from "./context/ThemeContext"
import toast from "react-hot-toast"


const Home = () => {
    const {theme} = useContext(ThemeContext)

    function handleClick(){
        toast.success("Button Clicked", {
            duration: 2000,
             style: {
                background: "black",
                color: "white",
             }
        })
    }
  return (
    <>
    
    <div className={`${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'} flex gap-25 items-center mt-20 h-screen`}> This is Home Page 
      <button onClick={handleClick} className="bg-gray-500 py-2 px-3 rounded-md shadow-md cursor-pointer">Click ME</button>
      </div>
   </>
  )
}

export default Home