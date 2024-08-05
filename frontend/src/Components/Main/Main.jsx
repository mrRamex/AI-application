import React from 'react'

import { CiShare1 } from "react-icons/ci";

const Main = () => {
  return (
    <div className="h-[100%] w-[100%] relative pointer-events-none">
      <input className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 
      w-[30%] h-[5%] bg-gray-900 text-white p-2 rounded-lg outline-none pointer-events-auto"/>

      <div className='text-area border-2 rounded-lg border-gray-500 absolute left-1/2 transform -translate-x-1/2 w-[50%] h-[80%] mt-10'></div>

      <div className='absolute top-0 right-0 m-4 flex flex-row w-auto h-auto items-center'>
        <div className='profile rounded-full bg-orange-600 w-8 h-8 m-2 flex justify-center items-center text-white hover:drop-shadow-lg 
        pointer-events-auto cursor-pointer'><p>K</p></div>
        <CiShare1 size={40} color='white' className='hover:bg-gray-900 p-2 pointer-events-auto cursor-pointer rounded-lg'/>
      </div>
    </div>
  )
}

export default Main