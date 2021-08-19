import { BrowserRouter as Router } from 'react-router-dom'
import Nav from './components/common/Nav'
import Home from './components/home/Home'
import About from './components/about/About'
import Tours from './components/tours/Tours'
import Faq from './components/faq/Faq'
import BookingForm from './components/contact/BookingForm'
import { Element } from 'react-scroll'
import { useState } from 'react'
import Footer from './components/footer/Footer'

function App() {
  const [scrolled, setScrolled] = useState(false)
  return (
    <Router>
      <Element name="home"><Home/></Element>
      <Nav
        scrolled={scrolled}
        setScrolled={setScrolled}  
      />
      <Element name="about"><About scrolled={scrolled}/></Element>
      <Element name="tours"><Tours/></Element>
      <Element name="faq"><Faq/></Element>
      <Element name="bookings"><BookingForm/></Element>
      <Footer/>
    </Router>
  )
}

export default App