import leftArrow from '../../images/left-arrow.svg'

export default function LeftArrow({ previousSlide }) {
  return (
    <div className="back-arrow" onClick={previousSlide}>
      <img src={leftArrow} alt="previous"/>
    </div>
  )
}