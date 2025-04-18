import React from 'react'
import { NavLink, Outlet } from 'react-router'

export default function Portfolio() {
  return (
    <div className='p-2'>
    <h1 className='lg:text-5xl text-3xl font-bold text-white text-center'>Portfolio</h1>
    <div className='flex mt-8 justify-between border-b-4 border-[#687d84] pb-2'>
        <NavLink
        to={'/portfolio/myWork'}
            className={({ isActive }) =>
                isActive
                    ? "text-[#1fcaff] text-2xl font-bold"
                    : "text-[#687d84] text-2xl font-bold"
            }
        >
            My work
        </NavLink>
        <NavLink
            to={'/portfolio/myService'}
            className={({ isActive }) =>
                isActive
                    ? "text-[#1fcaff] text-2xl font-bold"
                    : "text-[#687d84] text-2xl font-bold"
            }
        >
            My service
        </NavLink>           </div>


        <div>
            <Outlet></Outlet>
        </div>

</div>
  )
}
