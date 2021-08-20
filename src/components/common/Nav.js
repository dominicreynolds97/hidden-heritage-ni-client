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
        <div>
          <li className="navbar-item"><Link className="link" activeClass="active" to="home" spy={true} smooth={true} duration={500}>Home</Link></li>
        </div>
        <div className="navbar-end">
          <li className="navbar-item"><Link className="link" activeClass="active" to="about" offset={-30} spy={true} smooth={true} duration={500}>About</Link></li>
          <li className="navbar-item"><Link className="link" activeClass="active" to="tours" offset={-50} spy={true} smooth={true} duration={500}>Tours</Link></li>
          <li className="navbar-item"><Link className="link" activeClass="active" to="faq" offset={-30} spy={true} smooth={true} duration={500}>FAQ</Link></li>
          <li className="navbar-item"><Link className="link" activeClass="active" to="bookings" spy={true} smooth={true} duration={500}>Contact & Bookings</Link></li>
        </div>
      </ul>
    </div>
  )
}