import { RouterProvider } from "react-router-dom";

import { Routes } from "./Routes";
import { Toaster } from "react-hot-toast";

function App() {
 

  return (
   <>
   <Toaster 
   position="top-right"
    />
    <RouterProvider router={Routes} />
    </>
    
  );
}

export default App;
