import React from 'react'
import { NavLink, Outlet } from 'react-router'

export default function Resume() {
  return (
    <div className='p-2'>
    <h1 className='lg:text-5xl text-3xl font-bold text-white text-center'>Resume</h1>
    <div className='flex mt-8 justify-between border-b-4 border-[#687d84] pb-2'>
        <NavLink
            to={'/resume/experience'}
            className={({ isActive }) =>
                isActive
                    ? "text-[#1fcaff] text-2xl font-bold"
                    : "text-[#687d84] text-2xl font-bold"
            }
        >
            Experience
        </NavLink>
        <NavLink
        to={'/resume/skills'}
            className={({ isActive }) =>
                isActive
                    ? "text-[#1fcaff] text-2xl font-bold"
                    : "text-[#687d84] text-2xl font-bold"
            }>Skills</NavLink>
        <NavLink
        to={'/resume/education'}
            className={({ isActive }) =>
                isActive
                    ? "text-[#1fcaff] text-2xl font-bold"
                    : "text-[#687d84] text-2xl font-bold"
            }>Education</NavLink>
    </div>

    <div>
        <Outlet></Outlet>
    </div>
</div>
  )
}
