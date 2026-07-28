import { Footer } from "../components/Footer"
import { NavBar } from "../components/NavBar"
import { About } from "../sections/About"
import { CTABanner } from "../sections/CTA"
import { HeroSection } from "../sections/HeroSection"
import { FeaturedProjects } from "../sections/Projects"
import { ServicesSelector } from "../sections/ServicesSelector"
import { Testimonials } from "../sections/Testimonials"
import { WhyChooseUs } from "../sections/WhyChooseUs"


const Home = () => {
  return (
    <>
    <NavBar/>
    <HeroSection/>
    <About/>
    <ServicesSelector/>
    <WhyChooseUs/>
    <FeaturedProjects/>
    <Testimonials/>
    <CTABanner/>
    <Footer/>
    </>
  )
}

export default Home