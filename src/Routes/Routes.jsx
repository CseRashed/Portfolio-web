import { createHashRouter } from "react-router";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Resume from "../Pages/Resume/Resume";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Contact from "../Pages/Contact/Contact";
import App from "../App";



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
               element:<Resume></Resume>
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