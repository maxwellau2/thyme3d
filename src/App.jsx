import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Credits from './components/Credits'
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <About></About>
      <Services></Services>
      <Contact></Contact>
      <Credits></Credits>
    </div>
  )
}

export default App
