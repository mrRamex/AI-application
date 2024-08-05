import React, { useState } from 'react'
import { navItems } from './navbar'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { RxDotsHorizontal } from "react-icons/rx";
import { IoMdAddCircleOutline } from "react-icons/io";

const Navbar = () => {

  const [navbarOpen, setNavbarOpen ] = useState(true)

  return (
    <>    
    <div className={ navbarOpen ? "animate-openmenu text-white bg-gray-900 w-[10%] h-screen flex-1 flex-column justify-center text-center pt-[4rem] pb-[1rem] fixed z-10" 
      : "animate-closemenu hidden"}>
        {navItems.map((item) => (
          <button className=' w-[90%] h-[2rem] mt-1 mb-2 rounded hover:bg-gray-800 relative' id={item.id}>
            <p className="absolute left-0 top-0.5">{item.name}</p>
            <RxDotsHorizontal size={25} className='absolute right-0 top-0.5'/>
          </button>
        ))}
  
        <IoIosCloseCircleOutline className="absolute top-0 left-0 m-2 hover:bg-gray-800 rounded-xl p-2 cursor-pointer" size={50} color="white" onClick={() => {setNavbarOpen(!navbarOpen)}}/>
        <IoMdAddCircleOutline className="absolute top-0 right-0 m-2 hover:bg-gray-800 rounded-xl p-2 cursor-pointer" size={50}/>
      </div>

      <IoIosCloseCircleOutline className="absolute top-0 left-0 m-2 hover:bg-gray-800 rounded-xl p-2 cursor-pointer" size={50} color="white" onClick={() => {setNavbarOpen(!navbarOpen)}}/>
    </>

  )
}

export default Navbar