'use client'
import React from 'react'
import Image from 'next/image'                               ////////////////////
import { Typewriter } from 'react-simple-typewriter'
import { ArrowDownTrayIcon, PlayCircleIcon } from '@heroicons/react/24/solid'

const Hero = () => {
  return (
    <div className="min-h-screen bg-[url('/images/paul-volkmer-qVotvbsuM_c-unsplash.jpg')] bg-cover bg-center flex items-center justify-center flex-col text-white text-center px-4">
      <Image
        src="/images/WhatsApp Image 2025-06-16 at  000000000.jpg"
        alt="Malek Ahmed"
        width={180}
        height={180}
        className="rounded-full border-4 border-yellow-300 shadow-lg transition-transform duration-500 hover:scale-110"
      />
    <h1 className="text-5xl font-bold">
  Hi, I'm Malek  
  <span className="text-green-400">Full Stack Developer</span>
</h1>

      <h2 className="text-2xl md:text-3xl mt-2 text-gray-300">
        <Typewriter
          words={['Full Stack Developer', 'React Specialist', 'Next.js' , 'Node.js' , 'MongoDB']}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h2>
      {/* <p className="max-w-xl mt-4 text-gray-400">
        I'm a passionate front-end developer who builds modern, responsive websites using React, Next.js, and Tailwind CSS.
      </p> */}

        <p className="text-gray-400 max-w-xl leading-relaxed">
        I am a Full Stack Developer specializing in building modern, responsive
        web applications using React, Next.js, Node.js, and MongoDB.
        I create both frontend user interfaces and powerful backend systems.
      </p>


        <div className="flex items-center gap-6 mt-6">
            <a
            href='/images/Malek_Ahmed_Professional_CV.pdf'
            download
            className='bg-green-400 hover:bg-green-500 text-black font-semibold px-6 py-3 rounded-lg flex items-center gap-2 shadow-md tranition'
            >
              Download CV
              <ArrowDownTrayIcon className='w-5 h-5'/>
            </a>
            {/* <button className='flex items-center gap-2 text-green-400 hover:text-green-300 transition font-semibold'>
              <PlayCircleIcon className='w-10 h-10'/>
              Watch The Video
            </button> */}
        </div>
    </div>
  )
}
  
export default Hero
 