import React from 'react'
import Nav from './components/Nav'
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import ClientReview from "./components/ClientReview"
import Blog from "./components/Blog"
import Footer from "./components/Footer"


const HomePage = () => {
  return (

    <div>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ClientReview />
      <Blog />
      <Footer />
    </div>

  )
}

export default HomePage


