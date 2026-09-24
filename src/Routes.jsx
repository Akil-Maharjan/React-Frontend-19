import { createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Layout from "./components/Layout/Layout";
import NotFoundpage from "./components/NotFoundpage";
import Product from "./components/Product";




export const Routes= createBrowserRouter([
    {
         path: "/",
         element: <Layout />,
         children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/product",
                element: <Product />
            }
           
         ]
    },
    
    {
        path: "*",
        element: <NotFoundpage />
    }
])

