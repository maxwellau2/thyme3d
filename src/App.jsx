import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Credits from './components/Credits'
import Carousell from './components/Carousell'
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Carousell></Carousell>
      <About></About>
      <Services></Services>
      <Contact></Contact>
      <Credits></Credits>
    </div>
  )
}

export default App
