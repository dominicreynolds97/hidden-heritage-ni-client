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
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

function App() {
  const [scrolled, setScrolled] = useState(false)
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.CAPTCHA_SECRET_KEY}
      useRecaptchaNet={true}
      scriptProps={{
        async: false, // optional, default to false,
        defer: false, // optional, default to false
        appendTo: 'head', // optional, default to "head", can be "head" or "body",
        nonce: undefined // optional, default undefined
      }}
    >
      <Router>
        <Element name="home"><Home /></Element>
        <Nav
          scrolled={scrolled}
          setScrolled={setScrolled}
        />
        <Element name="about"><About scrolled={scrolled} /></Element>
        <Element name="tours"><Tours /></Element>
        <Element name="faq"><Faq /></Element>
        <Element name="bookings"><BookingForm /></Element>
        <Footer />
      </Router>
    </GoogleReCaptchaProvider>
  )
}

export default App