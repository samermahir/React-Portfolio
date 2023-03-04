import React from 'react';
import Homepage from './components/Homepage';
import Sidenav from './components/Sidenav';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Title from './components/Title';
import About from './components/About';

function App() {

  return (
    <div className="App">
     <Sidenav /> 
      {/* <Homepage />
      <Projects />
      <About />
      <Contact /> */}
      <Footer />
      <Title />
    </div>
  )
}

export default App
