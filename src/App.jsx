import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import FeatureSplit from './components/FeatureSplit'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import About from './components/About'
import ServiceArea from './components/ServiceArea'
import FishingBonus from './components/FishingBonus'
import FinalCTA from './components/FinalCTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MobileCTABar from './components/MobileCTABar'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyChooseUs />
        <FeatureSplit />
        <Gallery />
        <Reviews />
        <About />
        <ServiceArea />
        <FishingBonus />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  )
}
