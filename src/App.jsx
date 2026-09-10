import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Strengths from './components/Strengths'
import Contact from './components/Contact'

export default function App() {
  const [solidNav, setSolidNav] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolidNav(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="app">
      <Navbar solid={solidNav} />
      <main>
        <Hero />
        <Projects />
        <About />
        <Strengths />
        <Contact />
      </main>
    </div>
  )
}
