"use client"
import React from 'react'
import {CircleHalfTiltIcon} from "@phosphor-icons/react"

function Navbar() {
  return (
    <nav className='m-8'>
        <div className=' w-2xl m-auto bg-surface border border-1 border-border border-dashed rounded-4xl'>
            <ul className='flex flex-1 justify-between items-center px-5 py-3'>
                <li><a className='list-none cursor-pointer hover:text-foreground transition-colors duration-[100ms] ease-in text-lg font-light tracking-tight  '>Skills & Tools</a></li>
                <li><a className='list-none cursor-pointer hover:text-foreground transition-colors duration-[100ms] ease-in text-lg tracking-tight font-light '>About</a></li>
                <li><a className='list-none cursor-pointer hover:text-foreground transition-colors duration-[100ms] ease-in text-lg tracking-tight font-light '>Experience</a></li>
                <li><a className='list-none cursor-pointer hover:text-foreground transition-colors duration-[100ms] ease-in text-lg tracking-tight font-light '>Projects</a></li>
                <li>
                  <button className='h-6 w-6 rounded-full cursor-pointer hover:scale-110 flex justify-center items-center transition-transform duration-[200ms] ease-in'>
                    <CircleHalfTiltIcon size={32}  className='rotate-[-45deg]'/>
                  </button>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar