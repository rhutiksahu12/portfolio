import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Experience from './components/Experience'
import ThreeJsBackground from './components/BackgroundCanvas'

const App = () => {
  return (
    <main className="bg-[#0f0f0f] text-[#c0caf5] font-mono min-h-screen">
      {/* <ThreeJsBackground />  */}
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-20">
        <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  </main>
  )
}

export default App