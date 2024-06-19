import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
     <div>
        <nav className='flex items-center justify-between px-6 py-4 bg-transparent text-white'>
        <h1 className='font-bold text-3xl uppercase font-serif'>Cook <span className='text-orange-300'>Ease</span></h1>
            <ul className='flex gap-4 text-2xl font-bold'>
                <li><a href="/">Home</a></li>
                <Link to='/contact'><li>Contact</li></Link>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
     </div> 
    </div>
  )
}

export default Navbar
