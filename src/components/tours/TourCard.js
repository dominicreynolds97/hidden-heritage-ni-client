import { Link } from 'react-scroll'

export default function TourCard({ title, src, handleSelectTourType, tourTypeSelected, tourIndex }) {
  console.log(tourTypeSelected, tourIndex)
  return (
    <Link className="link" activeClass="active" to={tourIndex + 1 !== tourTypeSelected ? 'tour-detail' : 'tours'} spy={true} smooth={true} duration={500}>
      <div className="tour-card" onClick={() => handleSelectTourType(tourIndex + 1)}>
        <h3>{title}</h3>
        <img src={src} alt={title} />
      </div>
    </Link>
  )
}