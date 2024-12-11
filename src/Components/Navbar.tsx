import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='bg-emerald-900 text-white h-auto sm:h-12 md:h-16 lg:h-16 py-2 px-3 flex flex-col sm:flex-row justify-between items-center'>
        <div className='mb-5 sm:mb-0'>
          <img />
            <h1 className='text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold'>
                <a href="#!">Maryam Sheikh</a>
            </h1>
        </div>
        <div className='w-full sm:w-auto mb-4 sm:mb-0'>
            <ul className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-9'> 
                <li><Link href="/" className='hover:text-gray-300'>Home</Link></li>
                <li><Link href="/about" className='hover:text-gray-300'>About</Link></li>
                <li><Link href="/contact" className='hover:text-gray-300'>Contact</Link></li>
            </ul>
        </div>
        <div className='w-full sm:w-auto'>
            <ul className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-9'>
                <li><Link href="/login" className='hover:text-gray-300'>Login</Link></li>
                <li><Link href="/signup" className='hover:text-gray-300'>SignUp</Link></li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
