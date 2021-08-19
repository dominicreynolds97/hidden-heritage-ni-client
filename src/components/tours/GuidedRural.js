import { guidedRuralData } from './data'

export default function GuidedRural() {
  return (
    <div className="guided-rural">
      <h2>Guided Rural Walks in County Down</h2>
      <div className="container">
        {guidedRuralData.map(data => (
          <div className="guided-rural-card">
            <h3>{data.title}</h3>
            <p>{data.text}</p>
            <img src={data.img} alt={data.title} />
          </div>
        ))}
      </div>
      <ul>
        <li>Reasonable to good level of fitness needed</li>
        <li>Approximately 3 hour circular hikes</li>
        <li>£18 Per adult</li>
        <li>£9 Under 18</li>
        <li>Usually an optional refreshment break at the end</li>
        <li><strong>Important</strong> - Appropriate footwear and wet weather clothing necessary, as some terain may be rocky, slippery, wet, muddy or uneven, as our climate is unpredictable</li>
        <li>Meet at caravan park meeting point - Time, date, exact location and advide on what to wear and bring will be provided in an email</li>
        <li>We will engage you in history, nature and storytelling along the way!</li>
      </ul>
    </div>
  )
}