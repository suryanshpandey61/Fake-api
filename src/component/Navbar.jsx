import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

function Navbar() {



  return (
    <div className='w-full flex  p-4 bg-slate-900'>

      <Link to='/' className='ml-[150px]'>
        <img src={logo} className='h-[50px] w-[50px]'/>
      </Link> 

<div className=' flex gap-x-[30px] ml-[500px] '>
  
      <div> 
        <Link to="/" className='text-4xl text-slate-300 font-bold hover:underline transition-all duration-500'>
         Shop
        </Link>
      </div>

     

      <div>  
        <Link to="/admin" className='text-4xl hover:underline transition-all duration-500 text-slate-300 font-bold'>
          Admin
        </Link>
     </div>

     <div>
        <Link to="/cart" className='text-4xl text-slate-300 hover:underline transition-all duration-500 font-bold'>
         Cart
        </Link>
      </div>
</div>
     


    </div>
  )
}

export default Navbar