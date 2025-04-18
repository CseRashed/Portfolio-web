import React from 'react';
import img from '../../assets/img1.png';
import { Link } from 'react-router-dom';
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CircularProgressbar } from 'react-circular-progressbar';
import ProgressBar from '@ramonak/react-progress-bar';
import Service from '../Portfolio/Service';

export default function About() {
  return (
  <div className='max-h-[85vh] overflow-y-auto'>
   <div className='flex flex-col-reverse lg:flex-row justify-between lg:items-center px-2'>
    <div className='lg:w-[700px]  text-center lg:text-start'>
        <h1 className='text-white text-2xl font-bold'>
            Hello I'm
        </h1>
        <h2 className='text-4xl lg:text-6xl font-bold text-[#1fcaff]'>
            Rashedul Islam
        </h2>
        <h3 className='text-white text-2xl font-bold mb-4'>
            Frontend Developer
        </h3>
        <p className='text-white'>
        I am a dedicated and enthusiastic Junior Frontend Developer with a strong foundation in HTML, CSS, Tailwind, JavaScript, and React.
I enjoy turning simple ideas into responsive and user-friendly websites.
Currently learning Next.js, TypeScript, and modern state management tools.
Eager to gain real-world experience and grow as a frontend developer
        </p>
        <div className='flex items-center mt-4 gap-10'>
            <div><button className='bg-[#1fcaff] hover:shadow-[0px_0px_20px_5px_#1fcaff] transition duration-300 p-2 font-bold px-4 rounded-2xl'>Download CV</button></div>
            <div className='flex gap-5'>
                <Link title="GitHub" className='border hover:shadow-[0px_0px_20px_5px_#1fcaff] text-xl text-[#1fcaff] border-[#1fcaff] p-2 rounded-full'><IoLogoGithub /></Link>
                <Link className='border hover:shadow-[0px_0px_20px_5px_#1fcaff] text-xl text-[#1fcaff] border-[#1fcaff] p-2 rounded-full'><FaLinkedinIn />
                </Link>
                <Link className='border hover:shadow-[0px_0px_20px_5px_#1fcaff] text-xl text-[#1fcaff] border-[#1fcaff] p-2 rounded-full'><FaTwitter /></Link>
             
               
            </div>
        </div>
    </div>
    <div className="mx-auto lg:mx-0 mb-6">
        <img
            className=" w-[250px]   lg:h-[400px] lg:w-[400px] border-4 border-[#1fcaff] shadow-xl hover:shadow-[0px_0px_20px_5px_#1fcaff] rounded-full bg-gradient-to-t from-[#1fcaff] to-[#14272d]"
            src={img}
            alt=""
        />
    </div>
</div>
<div className='mt-[100px] flex flex-col lg:flex-row  gap-12 justify-between px-2'>
  <div className='space-y-4'>
    <h3 className='text-white text-2xl font-medium mb-10'>Average Skills:</h3>
   <div className='w-[430px]'>
    <p className='text-white font-bold'>html</p>
    <ProgressBar completed={100} 
    bgColor='#2896b2'
    animateOnRender={true}/>
   </div>
   <div className='w-[430px]'>
    <p className='text-white font-bold'>Css</p>
    <ProgressBar completed={90} 
    bgColor='#2896b2'
    animateOnRender={true}/>
   </div>
   <div className='w-[430px]'>
    <p className='text-white font-bold'>JavaScript</p>
    <ProgressBar completed={70} 
    bgColor='#2896b2'
    animateOnRender={true}/>
   </div>
   <div className='w-[430px]'>
    <p className='text-white font-bold'>React</p>
    <ProgressBar completed={80} 
    bgColor='#2896b2'
    animateOnRender={true}/>
   </div>
  </div>
  <div>
    <h2 className='text-2xl font-medium text-white mb-12 '>MyService</h2>
   <Service></Service>
  </div>
</div>
  </div>
  )
}
