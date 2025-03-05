import React from 'react'
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
  } from '@clerk/nextjs'
  import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
        <nav className='bg-blue-600 gap-3 flex py-3 items-center font-bold justify-around text-white'>
            <div className="logo text-xl font-extrabold">Clerk</div>
            <ul className='flex gap-5  cursor-pointer'>
                <Link href="/" className='hover:font-extrabold'>Home</Link>
                <Link href="/about" className='hover:font-extrabold'>About</Link>
                <Link href="/data" className='hover:font-extrabold'>Data</Link>
                <Link href="/contact" className='hover:font-extrabold'>Contact</Link>
            </ul>

            <SignedOut>
              <SignInButton>
                <button className='bg-slate-950 py-2 px-2 rounded-md cursor-pointer'>Sign In</button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
        </nav>
    </div>
  )
}

export default Navbar