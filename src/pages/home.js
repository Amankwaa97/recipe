import React from 'react'
import Api from '../components/Api'
import Heroimage from '../images/heee.avif'
import Navbar from '../components/Navbar'




const Home = () => {
  return (
    <div>
   <div 
  className="h-[550px] w-full bg-center bg-cover rounded-md" 
  style={{ backgroundImage: `url(${Heroimage})` }}
><Navbar />
  <div className='text-white flex flex-col justify-center w-[550px] my-32 p-8 bg-black/30 mx-4 rounded-lg'>
  <h1 className="text-5xl font-extrabold mb-4">Discover Your Next Favorite Recipe</h1>
  <p className="text-xl mb-6 font-bold">Search through thousands of recipes and find the perfect dish for any occasion. Whether you're a seasoned chef or just starting out, we have something for everyone!</p>
  </div>
</div>



      <Api />
    </div>
  )
}

export default Home
