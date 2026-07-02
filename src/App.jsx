import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import LogoStrip from './components/LogoStrip.jsx'
import Features from './components/Features.jsx'
import Workflow from './components/Workflow.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink font-body antialiased">
      <Nav />
      <Hero />
      <LogoStrip />
      <Features />
      <Workflow />
      <CTA />
      <Footer />
    </div>
  )
}
