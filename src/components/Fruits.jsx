import { useState } from "react"


 
 const Fruits = () => {
     const [fruits, setfruits] = useState(["apple", "banana"]);
   
   
     
   return (
    <>


     <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex items-center gap-5">
        <input className="border rounded-md px-2 py-2" type="text" />
        <button onClick={()=>{
            setfruits([...fruits, document.querySelector("input").value])
               document.querySelector("input").value = "";
             }}> Add New Fruit</button>
        </div>
        <h1 className="text-3xl">Fruits</h1>
        <ul className="flex flex-col items-center gap-2">
            {fruits.map((fruit, index)=> (
                <div key={index} className="flex items-center justify-between gap-5">
                <li>   {fruit}</li>
                <button className="bg-red-500 py-2 px-4 cursor-pointer hover:bg-blue-700 shadow-md rounded-md" onClick={() => setfruits(fruits.filter((_, i) => i !== index))}>Delete</button>
                </div>
            ))}
        </ul>
         
        
     </div>
     
     </>
   )
 }
 
 export default Fruits