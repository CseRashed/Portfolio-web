import React from 'react'
import ui from './../../assets/service/ui-ux.png'
import design from './../../assets/service/web-design.png'
import development from '/src/assets/service/website-development.png'
export default function Service() {
  return (
    <div className='flex mx-auto flex-col lg:flex-row gap-4'>
      <div className='lg:w-[320px] w-[430px]  h-[250px] border p-2 rounded-xl text-center'>
        <div>
            <img className='w-[80px] h-[90px] mx-auto mb-4' src={ui} alt="" />
        </div>
        <h1 className='text-xl font-medium text-white mb-4'>UI/UX</h1>
        <p className='text-white font-medium'>I create intuitive and visually appealing interfaces focused on user experience.</p>
      </div>
      <div className='lg:w-[320px] w-[430px]  h-[250px] border p-2 rounded-xl text-center'>
      <div>
            <img className='w-[80px] h-[90px] pt-2 mx-auto mb-4' src={design} alt="" />
        </div>
        <h1 className='text-xl font-medium text-white mb-4'>Web Design</h1>
        <p className='text-white font-medium'>I design responsive, modern websites that reflect your brand identity.</p>
      </div>
      <div className='lg:w-[320px] w-[430px]  h-[250px] border p-2 rounded-xl text-center'>
      <div>
            <img className='w-[80px] h-[90px] mx-auto mb-4' src={development} alt="" />
        </div>
        <h1 className='text-xl font-medium text-white mb-4'>Web Development</h1>
        <p className='text-white font-medium'>I develop fast, functional websites using HTML, CSS, JavaScript, and React.</p>
      </div>
    </div>
  )
}
