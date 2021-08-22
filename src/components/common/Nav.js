import { Link } from 'react-scroll'
import { useEffect, useState } from 'react'
import logo from '../../images/HiddenHeritageLogo.png'

export default function Nav({ scrolled, setScrolled }) {
  const [logoHeight, setLogoHeight] = useState(100)

  const handleScroll = () => {
    const offset = window.scrollY
    offset <= 60 ? setLogoHeight(100 - offset) : setLogoHeight(40)
    // const vH = window.innerHeight
    // offset > vH ? setScrolled(true) : setScrolled(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  return (
    <div className={`nav ${scrolled && 'scrolled'}`}>
      <ul className="navbar">
        <div>
          <li className="navbar-item">
            <Link className="link" activeClass="active" to="home" offset={-100} spy={true} smooth={true} duration={500}>
              <img className="logo" style={{height: `${logoHeight}px`}} src={logo} alt="Home"/>
            </Link>
          </li>
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