import React from 'react'
import { Link } from 'react-router-dom'

const Navbar2 = () => {
  return (
    <div className='w-full'>
     <div>
        <nav className='flex items-center justify-between px-6 py-4 bg-[#558db5] text-white'>
        <h1 className='font-bold sm:text-3xl uppercase font-serif'>Cook <span className='text-orange-300'>Ease</span></h1>
            <ul className='flex gap-4 sm:text-2xl max-sm:text-xs font-bold'>
                <li><a href="/">Home</a></li>
                <Link to='/contact'><li>Contact</li></Link>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
     </div> 
    </div>
  )
}

export default Navbar2
