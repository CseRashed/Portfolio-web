import React from 'react'

export default function MyService() {
  return (
    <div>
           
        <div className="  max-h-[70vh] text-white p-2 overflow-y-auto">
        <div className='flex mx-auto flex-col lg:flex-row lg:justify-around gap-4 items-center
         text-center my-[50px]'>
      <div className='lg:w-[320px] w-[460px] lg:h-[200px] h-[250px] border p-2 rounded-xl text-center'>
        <h1 className='text-xl font-medium text-white mb-4'>UI/UX</h1>
        <p className='text-white font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nulla.</p>
      </div>
      <div className='lg:w-[320px] w-[460px] lg:h-[200px] h-[250px] border p-2 rounded-xl text-center'>
        <h1 className='text-xl font-medium text-white mb-4'>Web Design</h1>
        <p className='text-white font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nulla.</p>
      </div>
      <div className='lg:w-[320px] w-[460px] lg:h-[200px] h-[250px] border p-2 rounded-xl text-center'>
        <h1 className='text-xl font-medium text-white mb-4'>Web Development</h1>
        <p className='text-white font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nulla.</p>
      </div>
    </div>
</div>
        </div>
  )
}
