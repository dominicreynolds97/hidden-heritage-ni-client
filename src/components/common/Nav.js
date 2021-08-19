import { Link } from 'react-scroll'
import { useEffect } from 'react'

export default function Nav({ scrolled, setScrolled }) {

  const handleScroll = () => {
    const offset = window.scrollY
    const vH = window.innerHeight
    offset > vH ? setScrolled(true) : setScrolled(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  return (
    <div className={`nav ${scrolled && 'scrolled'}`}>
      <ul className="navbar">
        <li className="navbar-item"><Link className="link" activeClass="active" to="home" spy={true} smooth={true} duration={500}>Home</Link></li>
        <li className="navbar-item"><Link className="link" activeClass="active" to="about" spy={true} smooth={true} duration={500}>About</Link></li>
        <li className="navbar-item"><Link className="link" activeClass="active" to="tours" spy={true} smooth={true} duration={500}>Tours</Link></li>
        <li className="navbar-item"><Link className="link" activeClass="active" to="faq" spy={true} smooth={true} duration={500}>FAQ</Link></li>
        <li className="navbar-item"><Link className="link" activeClass="active" to="bookings" spy={true} smooth={true} duration={500}>Contact & Bookings</Link></li>
      </ul>
    </div>
  )
}