'use client'
import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
     <section className="bg-[url('/images/paul-volkmer-qVotvbsuM_c-unsplash.jpg')] bg-cover bg-center text-white py-16 px-4 sm:px-8 md:px-20"> 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* النصوص */}
        <div className="text-center md:text-left">
          <h3 className="text-green-400 font-semibold mb-3 text-sm sm:text-base">
            ABOUT ME
          </h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug">
            Transforming <span className="text-yellow-400">Visions</span>
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Culpa, cupiditate itaque provident dolore inventore suscipit 
            optio vel doloribus consequuntur nesciunt rem earum.
          </p>
          <a 
            href="/images/Malek_Ahmed_Professional_CV.pdf" 
            download
            className="inline-block bg-green-400 text-black px-5 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-green-500 transition text-sm sm:text-base"
          >
            DOWNLOAD CV ⬇
          </a>
        </div>

        {/* الصورة */}
        <div className="flex justify-center">
          <Image 
            src="/images/digital-art-style-illustration-graphic-designer.jpg" 
            alt="About Me" 
            width={300} 
            height={300}
            className="rounded-lg shadow-lg border-4 border-green-400 w-60 sm:w-72 md:w-96 h-auto"
          />
        </div>
      </div>
    </section>
  )
}

export default About
