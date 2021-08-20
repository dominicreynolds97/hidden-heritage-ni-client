import fb from '../../images/facebook.svg'
import ig from '../../images/instagram.svg'

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <h3>Phone: +44 7887 955218</h3>
        <h3>Email: info@hiddenheritageni.com</h3>
        <div>
          <img src={fb} alt="facebook" />
          <img src={ig} alt="instagram" />
        </div>
      </div>
      <div className="container">
        <h3>&copy;https://www.hiddenheritageni.com/</h3>
        <h3>Special thanks to Dominic Reynolds for building this website</h3>
      </div>
    </div>
  )
}