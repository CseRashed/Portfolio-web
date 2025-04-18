import React from 'react'

export default function Contact() {
  return (
    <div className='p-2'>
    <h1 className='lg:text-5xl text-3xl font-bold text-white text-center mb-[100px]'>Contact</h1>
    <div className='lg:hidden block w-[200px] mb-3 p-2 rounded-xl text-center rotate-45 mx-auto h-[200px] border bg-[#1fcaff] border-blue-300'>
               <div className=' rotate-[-45deg] mr-[30px] mt-[35px]'>
                <h1 className='font-bold'>Mobile:</h1>
                <p>+8801751077550</p>
                <h1 className='font-bold'>Email:</h1>
               <small>cserashedul@gmail.com</small>
                
               </div>
            </div>

        <form className='lg:relative border lg:w-[500px] w-[400px] items-center text-center  mx-auto shadow-xl hover:shadow-[0px_0px_20px_5px_#1fcaff] p-3  bg-gray-800 rounded-2xl'>
            <div className='hidden lg:block absolute ml-[-200px] w-[200px] p-2 rounded-xl rotate-45 h-[200px] border bg-[#1fcaff] border-blue-300'>
               <div className=' rotate-[-45deg] mr-[30px] mt-[35px]'>
                <h1 className='font-bold'>Mobile:</h1>
                <p>+8801751077550</p>
                <h1 className='font-bold'>Email:</h1>
               <small>cserashedul@gmail.com</small>
                
               </div>
            </div>
            <div className='mb-5 '>
                <input className='text-xl mb-5 text-[#687d84] outline-none p-1  border-b-2 '
                    placeholder='Name'
                    type="text" />
                <br />
                <input className='text-xl outline-none mb-4  p-1 text-[#687d84] border-b-2' placeholder='Email' type="text" />
                <br />
                <input className='text-xl outline-none mb-4  p-1 text-[#687d84] border-b-2' placeholder='Text Your Message' type="text" />

            </div>
            <div>
                <div><button className='bg-[#1fcaff]  p-2 font-bold px-4 rounded-xl'>Send Message</button></div>

            </div>
        </form>
  
</div>
  )
}
