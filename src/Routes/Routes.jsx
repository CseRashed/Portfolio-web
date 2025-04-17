import { createHashRouter } from "react-router";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Resume from "../Pages/Resume/Resume";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Contact from "../Pages/Contact/Contact";



const router =createHashRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
               path:'/resume',
               element:<Resume></Resume>
            },
            {
                path:'/portfolio',
                element:<Portfolio></Portfolio>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            }
        ]
    }
])


export default router