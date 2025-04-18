import React from 'react'
import html from '../../assets/skills/html.png.png'
import css from '../../assets/skills/css.png.png'
import js from '../../assets/skills/javascript.png.png'
import react from '../../assets/skills/react.png.png'
import tailwind from '../../assets/skills/tailwind.png.png'
import github from '../../assets/skills/github.png.png'
import redux from '../../assets/skills/redux.png.png'
import ts from '../../assets/skills/typescript.png.png'
import firebase from '../../assets/skills/firebase.png.png'
import figma from '../../assets/skills/figma.png.png'
import express from '../../assets/skills/express.png.png'
import node from '../../assets/skills/nodejs.png.png'
import mongoDB from '../../assets/skills/mongodb,png.png'
import next from '../../assets/skills/nextjs.png.png'
export default function Skills() {
  return (
    <div className="  max-h-[70vh] text-white p-4 overflow-y-auto">
            <h1 className='text-xl font-bold text-center mb-[50px]'>Frontend:</h1>
            <div className='flex flex-wrap justify-evenly gap-5 animate-pulse'>
               <div className='w-[120px] h-[180px] bg-gray-600 rounded-xl p-3 text-center '>
                <div className='w-[100px] h-[100px] mb-4  '>
                <img className='hover:rotate-12' src={html} alt="" />
                </div>
                <h2 className='font-bold'>HTML 5</h2>
                <p>Advanded</p>
               </div>
               <div className='w-[120px] h-[180px] bg-gray-600 rounded-xl p-3 text-center '>
                <div className='w-[100px] h-[100px] mb-4  '>
                <img className='hover:rotate-12' src={css} alt="" />
                </div>
                <h2 className='font-bold'>CSS 3</h2>
                <p>Advanded</p>
               </div>
               <div className='w-[120px] h-[180px] bg-gray-600 rounded-xl p-3 text-center '>
                <div className='w-[100px] h-[100px] mb-4  '>
                <img className='hover:rotate-12' src={tailwind} alt="" />
                </div>
                <h2 className='font-bold'>TAILWIND</h2>
                <p>Advanded</p>
               </div>


               <div className='w-[120px] h-[180px] bg-gray-600 rounded-xl p-3 text-center '>
                <div className='w-[100px] h-[100px] mb-4  '>
                <img className='hover:rotate-12' src={js} alt="" />
                </div>
                <h2 className='font-bold'>JS ES6</h2>
                <p>Intermediate</p>
               </div>
               <div className='w-[120px] h-[180px] bg-gray-600 rounded-xl p-3 text-center '>
                <div className='w-[100px] h-[100px] mb-4  '>
                <img className='hover:rotate-12' src={react} alt="" />
                </div>
                <h2 className='font-bold'>REACT</h2>
                <p>Intermediate</p>
               </div>
               <div className='w-[120px] h-[180px] bg-gray-600 rounded-xl p-3 text-center '>
                <div className='w-[100px] h-[100px] mb-4  '>
                <img className='hover:rotate-12' src={redux} alt="" />
                </div>
                <h2 className='font-bold'>REDUX </h2>
                <p>Learning...</p>
               </div>
              
               <div className='w-[120px] h-[180px] bg-gray-600 rounded-xl p-3 text-center '>
                <div className='w-[100px] h-[100px] mb-4  '>
                <img className='hover:rotate-12' src={next} alt="" />
                </div>
                <h2 className='font-bold'>NEXT JS</h2>
                <p>Learning...</p>
               </div>
               
               
                

            </div>

            <h1 className='text-xl font-bold  text-center my-[50px]'>Backend:</h1>
            <div className='flex flex-wrap justify-evenly gap-5 animate-pulse'>
            <div className='w-[120px] h-[180px] bg-gray-600 rounded-xl p-3 text-center '>
                <div className='w-[100px] h-[100px] mb-4  '>
                <img className='hover:rotate-12' src={node} alt="" />
                </div>
                <h2 className='font-bold'>NODE JS</h2>
                <p>Basic</p>
               </div>
            <div className='w-[120px] h-[180px] bg-gray-600 rounded-xl p-3 text-center '>
                <div className='w-[100px] h-[100px] mb-4  '>
                <img className='hover:rotate-12' src={express} alt="" />
                </div>
                <h2 className='font-bold'>EXPREESS </h2>
                <p>Basic</p>
               </div>
            <div className='w-[120px] h-[180px] bg-gray-600 rounded-xl p-3 text-center '>
                <div className='w-[100px] h-[100px] mb-4  '>
                <img className='hover:rotate-12' src={mongoDB} alt="" />
                </div>
                <h2 className='font-bold'>MONGODB</h2>
                <p>Basic</p>
               </div>
            <div className='w-[120px] h-[180px] bg-gray-600 rounded-xl p-3 text-center '>
                <div className='w-[100px] h-[100px] mb-4  '>
                <img className='hover:rotate-12' src={firebase} alt="" />
                </div>
                <h2 className='font-bold'>FIREBASE</h2>
                <p>Intermediate</p>
               </div>
            <div className='w-[120px] h-[180px] bg-gray-600 rounded-xl p-3 text-center '>
                <div className='w-[100px] h-[100px] mb-4  '>
                <img className='hover:rotate-12' src={ts} alt="" />
                </div>
                <h2 className='font-bold'>TYPESCRIPT</h2>
                <p>Learning...</p>
               </div>
          

            </div>
            <h1 className='text-xl font-bold  text-center my-[50px]'>Others:</h1>
            <div className='flex flex-wrap justify-evenly gap-5 animate-pulse'>
            <div className='w-[120px] h-[180px] bg-gray-600 rounded-xl p-3 text-center '>
                <div className='w-[100px] h-[100px] mb-4  '>
                <img className='hover:rotate-12' src={github} alt="" />
                </div>
                <h2 className='font-bold'>GITHUB</h2>
                <p>Intermediate</p>
               </div>
            <div className='w-[120px] h-[180px] bg-gray-600 rounded-xl p-3 text-center '>
                <div className='w-[100px] h-[100px] mb-4  '>
                <img className='hover:rotate-12' src={github} alt="" />
                </div>
                <h2 className='font-bold'>Netlify</h2>
                <p>Intermediate</p>
               </div>
            <div className='w-[120px] h-[180px] bg-gray-600 rounded-xl p-3 text-center  '>
                <div className='w-[100px] h-[100px] mb-4  '>
                <img className='hover:rotate-12' src={figma} alt="" />
                </div>
                <h2 className='font-bold'>FIGMA</h2>
                <p>Intermediate</p>
               </div>
            </div>

        </div>
  )
}
