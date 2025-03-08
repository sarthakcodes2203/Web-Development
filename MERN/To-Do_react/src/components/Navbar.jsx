import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between p-4 bg-gray-600 text-white'>
        <div className="logo">
            <span className='font-bold text-xl mx-8'>iTasks</span>
        </div>
        <ul className="flex gap-8 mx-8">
            <li className='cursor-pointer hover:font-bold transition-all '>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all '>Tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar
