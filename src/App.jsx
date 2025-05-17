import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Working from './components/Working'
import Advantages from './components/Advantages'
import Review from './components/Review'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <section className='w-full h-screen bg-[#E5F0FF]'>
        <Navbar />
        <Hero />
        <Working />
        <Advantages />
        <Review />
        <Contact />
      </section>
    </div>
  )
}

export default App