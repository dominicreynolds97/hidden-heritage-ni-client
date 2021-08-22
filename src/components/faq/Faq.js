import { data } from './data'

export default function Faq() {
  return (
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      {data.map(q => (
        <div className="question">
          <h3>{q.question}</h3>
          <p>{q.answer}</p>
          {q.answer2 && <p>{q.answer2}</p>}
        </div>
      ))}
    </div>
  )
}