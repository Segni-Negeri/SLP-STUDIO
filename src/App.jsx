import React, { useState } from 'react'
import './App.css'
import Hero from './components/Hero'

import './styles/tailwind.css';
import Main from './components/Main';
import BlogScroll from './components/BlogScroll';



function App() {
  return (<>
    <Hero></Hero>
    <Main></Main>
    <BlogScroll></BlogScroll>
  </>
  )
}

export default App