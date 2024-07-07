import React from 'react'
import Api from '../components/Api'
import Heroimage from '../images/heee.avif'
import Navbar from '../components/Navbar'




const Home = () => {
  return (
    <div className='w-full'>
   <div 
  className="h-[550px] w-full bg-center bg-cover rounded-md" 
  style={{ backgroundImage: `url(${Heroimage})` }}
><Navbar />
  <div className='text-white flex flex-col justify-center md:w-[550px] my-32 p-8 bg-black/30 mx-4 rounded-lg'>
  <h1 className="md:text-5xl md:font-extrabold mb-4 max-md:font-bold">Discover Your Next Favorite Recipe</h1>
  <p className="md:text-xl mb-6 md:font-bold">Search through thousands of recipes and find the perfect dish for any occasion. Whether you're a seasoned chef or just starting out, we have something for everyone!</p>
  </div>
</div>



      <Api />
    </div>
  )
}

export default Home
