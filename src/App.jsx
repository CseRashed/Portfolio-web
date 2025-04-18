
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './Layout/Navbar/Navbar'

function App() {

  return (
    <>
      <div className="bg-[#112126]" >
           <div className='container mx-auto lg:pt-[80px] pt-[40px]  '>
           <Outlet></Outlet>
           </div>
           <Navbar></Navbar>
        </div>
     
     
    </>
  )
}

export default App
