import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import MaintenanceBanner from './components/MaintenanceBanner'
import ThreeBackground from './components/BackgroundCanvas'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className="bg-[#0f0f0f] text-[#c0caf5] font-mono min-h-screen relative overflow-x-hidden ">
      {/* Floating "Say Hi" Button */}
      <MaintenanceBanner />
      <button 
        className="fixed right-2 sm:right-6 top-10 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-3 sm:px-4 rounded-full shadow-lg z-50 transition-colors duration-300 text-sm sm:text-base"
        onClick={() => alert('Hi there!')}
      >
        Say Hi 👋
      </button>

      <ThreeBackground />
      <div className="max-w-4xl mx-auto px-4 py-6 space-y-20">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

export default App