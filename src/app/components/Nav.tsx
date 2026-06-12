'use client'
import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    // <div className="w-full bg-[#141c77] shadow-md">
          <div
        className="w-full shadow-md bg-cover bg-center"
        style={{ backgroundImage: "url('/images/paul-volkmer-qVotvbsuM_c-unsplash.jpg')" }}
      >
      <div className="flex items-center justify-between w-[90%] mx-auto h-[12vh]">
        <h1 className="text-[25px] text-white font-bold cursor-pointer">
          Malek |<span className="text-yellow-300">Full Stake</span>
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-white">
          <div className="cursor-pointer hover:text-yellow-300 transition">Home</div>
          <div className="cursor-pointer hover:text-yellow-300 transition">Services</div>
          <div className="cursor-pointer hover:text-yellow-300 transition">About</div>
          <div className="cursor-pointer hover:text-yellow-300 transition">Project</div>
          <div className="cursor-pointer hover:text-yellow-300 transition">Blog</div>
          <div className="cursor-pointer hover:text-yellow-300 transition">Contact</div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {menuOpen ? (
            <XMarkIcon
              onClick={() => setMenuOpen(false)}
              className="w-8 h-8 text-yellow-300 cursor-pointer"
            />
          ) : (
            <Bars3Icon
              onClick={() => setMenuOpen(true)}
              className="w-8 h-8 text-yellow-300 cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-[#141c77] text-white">
          <div className="cursor-pointer hover:text-yellow-300">Home</div>
          <div className="cursor-pointer hover:text-yellow-300">Services</div>
          <div className="cursor-pointer hover:text-yellow-300">About</div>
          <div className="cursor-pointer hover:text-yellow-300">Project</div>
          <div className="cursor-pointer hover:text-yellow-300">Blog</div>
          <div className="cursor-pointer hover:text-yellow-300">Contact</div>
        </div>
      )}
    </div>
  )
}

export default Nav





