import { createHashRouter } from "react-router";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Resume from "../Pages/Resume/Resume";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Contact from "../Pages/Contact/Contact";
import App from "../App";
import Experience from "../Pages/Resume/Experience";
import Skills from "../Pages/Resume/Skills";
import Education from "../Pages/Resume/Education";



const router =createHashRouter([
    {
        path:'/',
        element:<App></App>,
        children:[
            {
                path:'',
                element:<Home></Home>
            },
            {
                path:'about',
                element:<About></About>
            },
            {
               path:'resume',
               element:<Resume></Resume>,
               children:[
                   {
                       path:'/resume/experience',
                       element:<Experience></Experience>
                   },
                   {
                       path:'/resume/skills',
                       element:<Skills></Skills>
                   },
                   {
                       path:'/resume/education',
                       element:<Education></Education>
                   }
               ]
            },
            {
                path:'portfolio',
                element:<Portfolio></Portfolio>
            },
            {
                path:'contact',
                element:<Contact></Contact>
            }
        ]
    }
])


export default router