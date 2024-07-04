import React from 'react'
import Header from '../components/header'
import About from '../components/about'
import Projects from '../components/projects'
import Contact from '../components/contact'

export default function Home() {
  return (
    <div>
        <Header/>
        <About />
        <Projects />
        <Contact />
    </div>
  )
}
