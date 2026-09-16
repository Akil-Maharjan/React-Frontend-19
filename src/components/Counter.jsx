import { useState } from "react";


const Counter = () => {
    const [count, setCount] = useState(0);
    function increment () {
         setCount((prev)=> prev + 1);
         setCount((prev)=> prev + 1);
         setCount((prev)=> prev + 1);
         
    }
    function decrement () {
        setCount((prev) => prev - 1);
        setCount((prev) => prev - 1);
        setCount((prev) => prev - 1);
       
        if (count <= 0) {
            setCount(0);
        }
        
    }
    console.log("rendered");
  return (
     <div className="bg-slate-400 shadow-lg h-screen gap-5 flex items-center flex-col justify-center ">
        <h1>Counter</h1>
        <div className="flex items-center gap-4">
        <button className="bg-gray-500 cursor-pointer py-2 px-4 hover:bg-gray-700 shadow-md rounded-md" onClick = {decrement}>-</button>
          <h2 className="text-3xl">{count}</h2>
       <button className="bg-blue-500 py-2 px-4 cursor-pointer hover:bg-blue-700 shadow-md rounded-md" onClick = {increment}>+</button>
       </div>
     </div>
  )
}

export default Counter