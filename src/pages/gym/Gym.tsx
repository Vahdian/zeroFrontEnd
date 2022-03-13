import React from 'react'
import { Link} from 'react-router-dom'
import Navbar from '../../shared/navbar/Navbar'

export default function Gym() {
  return (
    <div className='text-white h-screen flex flex-col justify-evenly'>
        <Link to="/workout" className='h-1/4 bg-gradient-to-r mx-8 from-purple-800 to-red-500 flex items-center justify-center rounded-3xl'>
            <h1 className='text-3xl font-bold'>WORKOUT</h1>
          </Link>
          <Link to="/diet" className='h-1/4 bg-gradient-to-r mx-8 from-purple-800 to-green-500 flex items-center justify-center rounded-3xl'>
            <h1 className='text-3xl font-bold'>DIET</h1>
          </Link>
          <Navbar></Navbar>
    </div>
  )
}
