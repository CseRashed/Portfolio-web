import React from 'react';
import { TiHomeOutline } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa";
import { BiFoodMenu } from "react-icons/bi";
import { PiBagSimpleFill } from "react-icons/pi";
import { BiSolidContact } from "react-icons/bi";
import { NavLink } from 'react-router';


export default function Navbar() {
  return (
    <div>
    <div  className="fixed bg-[#2c4750]  rounded-b-4xl lg:rounded-2xl bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
        <ul className='flex text-white  justify-between  text-3xl p-4 w-[400px]  gap-5
        '>
            <li className='text-[#1fcaff] hover:shadow-[0px_0px_20px_5px_#1fcaff] '><NavLink  to={'/'}><TiHomeOutline /></NavLink></li>
            <li className='text-[#1fcaff] hover:shadow-[0px_0px_20px_5px_#1fcaff]'><NavLink to={'/about'}><FaRegUser /></NavLink></li>
            <li className='text-[#1fcaff] hover:shadow-[0px_0px_20px_5px_#1fcaff]'><NavLink  to={'/resume'}><BiFoodMenu /></NavLink></li>
            <li className='text-[#1fcaff] hover:shadow-[0px_0px_20px_5px_#1fcaff]'><NavLink to={'/portfolio'}><PiBagSimpleFill /></NavLink></li>
            <li className='text-[#1fcaff] hover:shadow-[0px_0px_20px_5px_#1fcaff]'><NavLink to={'/contact'}><BiSolidContact /></NavLink></li>
        </ul>
    </div>
</div>
  )
}
