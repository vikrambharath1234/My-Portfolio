// Contact.jsx
// Contact details and a simple contact form.
// IMPORTANT: this form does NOT send emails. There is no backend or form service
// connected yet, so the form only checks the input and then tells the visitor honestly
// that the message was not sent. Visitors can use the email address instead.
import { useState } from 'react'
import { personal } from '../data/portfolioData.js'

// The starting values for every field.
const emptyForm = { name: '', email: '', subject: '', message: '' }

// Check the form values. It returns an object with one error message per problem field.
// An empty object means there are no problems.
function validateForm(values) {
  const errors = {}

  if (values.name.trim() === '') {
    errors.name = 'Please enter your name.'
  }

  // A simple email check: something@something.something
  if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }

  if (values.subject.trim() === '') {
    errors.subject = 'Please enter a subject.'
  }

  if (values.message.trim().length < 10) {
    errors.message = 'Please write a message of at least 10 characters.'
  }

  return errors
}

function Contact() {
  const [formValues, setFormValues] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  // statusMessage shows the honest result after the form is submitted.
  const [statusMessage, setStatusMessage] = useState('')

  // Update one field when the visitor types in it.
  function handleChange(event) {
    const { name, value } = event.target
    setFormValues({ ...formValues, [name]: value })
  }

  function handleSubmit(event) {
    event.preventDefault()

    const newErrors = validateForm(formValues)
    setErrors(newErrors)

    // If there are errors, stop here and show them.
    if (Object.keys(newErrors).length > 0) {
      setStatusMessage('')
      return
    }

    // The form is valid, but nothing is sent. Say that clearly.
    setStatusMessage(
      `Your message looks good, but this form is not connected to a message service yet, so it has not been sent. Please email me directly at ${personal.email}.`,
    )
    setFormValues(emptyForm)
  }

  return (
    <section id="contact" className="section section-alt">
      <div className="container contact-layout">
        <div>
          <h2 className="section-title">Let's Build Something Together</h2>
          <p className="section-subtitle">
            I am looking for an entry-level Java Full Stack Developer opportunity. Feel free to reach out.
          </p>

          <ul className="contact-details">
            <li>
              <strong>Email:</strong>{' '}
              <a href={`mailto:${personal.email}`}>{personal.email}</a>
            </li>
            <li>
              <strong>Phone:</strong> <a href={`tel:${personal.phone.replace(/\s/g, '')}`}>{personal.phone}</a>
            </li>
            <li>
              <strong>LinkedIn:</strong>{' '}
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
                linkedin.com/in/vikram-bharath
              </a>
            </li>
            <li>
              <strong>GitHub:</strong>{' '}
              <a href={personal.github} target="_blank" rel="noopener noreferrer">
                github.com/vikrambharath1234
              </a>
            </li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-field">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              value={formValues.name}
              onChange={handleChange}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'error-name' : undefined}
            />
            {errors.name && (
              <p id="error-name" className="form-error">
                {errors.name}
              </p>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              value={formValues.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'error-email' : undefined}
            />
            {errors.email && (
              <p id="error-email" className="form-error">
                {errors.email}
              </p>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="contact-subject">Subject</label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              value={formValues.subject}
              onChange={handleChange}
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={errors.subject ? 'error-subject' : undefined}
            />
            {errors.subject && (
              <p id="error-subject" className="form-error">
                {errors.subject}
              </p>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows="5"
              value={formValues.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'error-message' : undefined}
            ></textarea>
            {errors.message && (
              <p id="error-message" className="form-error">
                {errors.message}
              </p>
            )}
          </div>

          <button type="submit" className="button button-primary">
            Send Message
          </button>

          {statusMessage && (
            <p className="form-status" role="status">
              {statusMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
