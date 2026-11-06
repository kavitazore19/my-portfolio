import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  // useState: remembers the current theme ('dark' or 'light').
  // The function inside useState runs only once, on the first render:
  // it reads the saved theme from the browser, or falls back to 'dark'.
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  // useEffect: runs after every change of `theme`.
  // It touches things OUTSIDE React (the <html> tag and localStorage),
  // which is exactly what useEffect is for.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme) // CSS reads this
    localStorage.setItem('theme', theme) // remember the choice for next visit
  }, [theme])

  // Switch between dark and light
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Home />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
