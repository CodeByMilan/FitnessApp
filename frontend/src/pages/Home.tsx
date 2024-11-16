
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import BMICalculator from './components/element/BMICalculator'
import Review from './components/element/Review'
import Services from './Services'


const Home = () => {
  return (
  <>
  <Navbar/>
  <Hero/>
  <BMICalculator/>
  <Review/>
  <Footer/>
  </>
  )
}

export default Home