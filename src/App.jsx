import React, { useState } from 'react'
import './App.css'
import Hero from './components/Hero'

import './styles/tailwind.css';
import Main from './components/Main';
import BlogScroll from './components/BlogScroll';
import Pricing from './components/Pricing';
import Footer from './components/Footer';





function App() {
  return (<>
    <Hero></Hero>
    <Main></Main>
    <BlogScroll></BlogScroll>
    <Pricing></Pricing>
<div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto leading-tight tracking-tight mb-8 sm:mb-12">
          Drop us a line or two, we are open for creative minds and collaborations!
        </h1>
        <div className="relative mb-12 sm:mb-16 md:mb-20">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full blur-xl opacity-70 z-0"></div>
          <a
            href="#"
            className="relative bg-black text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-medium text-base sm:text-lg hover:bg-gray-900 transition-colors z-10"
          >
            Get Rareblocks
          </a>
        </div>
      </main>
      <Footer />
    </div>
  </>
  )
}

export default App