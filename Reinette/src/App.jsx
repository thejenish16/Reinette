import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Achievement from './components/Achievement'
import Service from './components/Service'
import Project from './components/Project'
import Team from './components/Team'
import Review from './components/Review'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Achievement />
      <Service />
      <Project />
      <Team />
      <Review />
      <CTA />
      <Footer />
    </div>
  )
}
