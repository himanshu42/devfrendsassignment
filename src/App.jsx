import React from 'react'
import Head from './Components/Head/Head'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Commitment from './Pages/Commitment'
import ScrollToTopButton from './Pages/ScrollToTopButton'

const App = () => {
  return (
    <>
      <Head />
      <Home />
      <About />
      <Services />
      <Commitment />
      <ScrollToTopButton />
    </>
  )
}

export default App