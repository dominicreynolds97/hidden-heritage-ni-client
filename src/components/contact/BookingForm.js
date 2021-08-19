import useForm from '../../hooks/useForm'

export default function BookingForm() {
  const { formData, formErrors, setFormErrors, handleChange } = useForm({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
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
          value={formData.name}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <label>Subject</label>
        <input
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <label>Message</label>
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}