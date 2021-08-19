import rightArrow from '../../images/right-arrow.svg'

export default function RightArrow({ nextSlide }) {
  return (
    <div className="next-arrow" onClick={nextSlide}>
      <img src={rightArrow} alt="next"/>
    </div>
  )
}