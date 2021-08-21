import emailjs from 'emailjs-com'
import { useState } from 'react'

const serviceId = process.env.SERVICE_ID
const templateId = process.env.TEMPLATE_ID
const userId = process.env.USER_ID

export default function BookingForm() {
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (checkForm(e)) return
    
    emailjs.sendForm(serviceId, templateId, e.target, userId)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  console.log(formErrors)

  const checkForm = (e) => {
    let err = false
    const newFormErrors = {...formErrors}
    if (!e.target.name.value) {
      newFormErrors.name = true
      err = true
    } else newFormErrors.name = false
    if (!e.target.email.value) {
      newFormErrors.email = true
      err = true
    } else newFormErrors.email = false
    if (!e.target.subject.value) {
      newFormErrors.subject = true
      err = true
    } else newFormErrors.subject = false
    if (!e.target.message.value) {
      newFormErrors.email = true
      err = true
    } else newFormErrors.email = false
    setFormErrors(newFormErrors)
    return err
  }
 
  return (
    <div className="booking-form">
      <h2>Contact & Bookings</h2>
      <form
        onSubmit={handleSubmit}
      >
        <label>Name</label>
        <input
          name="name"
          placeholder="Name"
          className={formErrors.name ? 'form-error' : ''}
        />
        <label>Email</label>
        <input
          name="email"
          type="email"
          placeholder="Email"
          className={formErrors.email ? 'form-error' : ''}
        />
        <label>Subject</label>
        <input
          name="subject"
          placeholder="Subject"
          className={formErrors.subject ? 'form-error' : ''}
        />
        <label>Message</label>
        <textarea
          name="message"
          placeholder="Message"
          className={formErrors.message ? 'form-error' : ''}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}