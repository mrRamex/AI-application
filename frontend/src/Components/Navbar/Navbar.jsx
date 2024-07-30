import React from 'react'
import { navItems } from './navbar'

const Navbar = () => {
  return (
    <div className='text-white bg-gray-900 w-[10%] h-screen flex-1 flex-column justify-center text-center pt-[1rem] pb-[1rem]'>
      {navItems.map((item) => (
        <button className='border-white w-[90%] h-auto border-t border-b mt-1 mb-2 hover:bg-gray-500' id={item.id}>
          <p>{item.name}</p>
        </button>
      ))}
    </div>
  )
}

export default Navbar