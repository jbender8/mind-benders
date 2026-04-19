import { useState } from 'react'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
    setError('')
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formData.name.trim()) {
      setError('Please enter your name')
      return
    }
    if (!formData.email.trim()) {
      setError('Please enter your email')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address')
      return
    }
    if (!formData.message.trim()) {
      setError('Please enter a message')
      return
    }

    console.log('Form submitted:', formData)

    setFormData({ name: '', email: '', phone: '', message: '' })
    setIsSubmitted(true)

    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <div className="contact-form-container">
      <h3>Get In Touch</h3>
      <p>Have questions? We'd love to hear from you!</p>

      {isSubmitted && (
        <div className="success-message">
          ✓ Thank you! We've received your message and will get back to you soon.
        </div>
      )}

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your phone number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us what you'd like to know..."
            rows={5}
            required
          ></textarea>
        </div>

        {error && <div className="error-message">{error}</div>}

        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  )
}
