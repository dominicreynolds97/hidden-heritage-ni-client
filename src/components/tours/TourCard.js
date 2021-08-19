export default function TourCard({ title, src, handleSelectTourType, tourIndex }) {
  return (
    <div className="tour-card" onClick={() => handleSelectTourType(tourIndex + 1)}>
      <h3>{title}</h3>
      <img src={src} alt={title} />
    </div>
  )
}