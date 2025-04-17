import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Layout/Navbar/Navbar'

export default function Main() {
  return (
    <div className="bg-[#112126]">
           <div className='container mx-auto lg:pt-[80px] pt-[40px]  '>
           <Outlet></Outlet>
           </div>
           <Navbar></Navbar>
        </div>
  )
}
