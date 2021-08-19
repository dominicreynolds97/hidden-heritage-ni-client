import { useState } from 'react'

export default function useForm(initialState) {
  const [formData, setFormdata] = useState(initialState)
  const [formErrors, setFormErrors] = useState(initialState)
  const handleChange = event => {
    setFormdata({ ...formData, [event.target.name]: event.target.value })
    setFormErrors({ ...formErrors, [event.target.name]: '' })
  }


  return {
    formData,
    formErrors,
    handleChange,
    setFormErrors,
    setFormdata,
  }
}