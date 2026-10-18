import { useState, type ChangeEvent, type SubmitEvent } from 'react'
import Button from '../components/ui/Button.tsx'
import Card from '../components/ui/Card.tsx'
import {
  validateRegistration,
  type RegistrationValues,
} from '../lib/validateRegistration.ts'

const initialValues: RegistrationValues = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
  acceptTerms: false,
}

function RegisterPage() {
  // All five values in one object, changed by one handleChange
  const [values, setValues] = useState<RegistrationValues>(initialValues)
  const [submitAttempted, setSubmitAttempted] = useState(false)
  const [registeredName, setRegisteredName] = useState<string | null>(null)

  // Computed from the values on every render – never stored in state
  const errors = validateRegistration(values)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    // name of the input = key in the values object
    const { name, type, value, checked } = event.target
    setValues((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitAttempted(true)

    if (Object.keys(errors).length === 0) {
      setRegisteredName(values.fullName.trim())
    }
  }

  if (registeredName) {
    return (
      <Card>
        <h2>Register</h2>
        <p role="status">Thanks, {registeredName}. You are registered.</p>
      </Card>
    )
  }

  return (
    <Card>
      <h2>Register</h2>
      {/* noValidate: our own messages instead of the browser's popups */}
      <form className="form" onSubmit={handleSubmit} noValidate>
        <div className="field">
          <label htmlFor="fullName">Full name</label>
          <input
            id="fullName"
            name="fullName"
            autoComplete="name"
            value={values.fullName}
            onChange={handleChange}
          />
          {submitAttempted && errors.fullName && <p className="field-error">{errors.fullName}</p>}
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
          />
          {submitAttempted && errors.email && <p className="field-error">{errors.email}</p>}
        </div>

        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            value={values.password}
            onChange={handleChange}
          />
          {submitAttempted && errors.password && <p className="field-error">{errors.password}</p>}
        </div>

        <div className="field">
          <label htmlFor="confirmPassword">Confirm password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            value={values.confirmPassword}
            onChange={handleChange}
          />
          {submitAttempted && errors.confirmPassword && (
            <p className="field-error">{errors.confirmPassword}</p>
          )}
        </div>

        <div className="field">
          <div className="check">
            <input
              id="acceptTerms"
              name="acceptTerms"
              type="checkbox"
              checked={values.acceptTerms}
              onChange={handleChange}
            />
            <label htmlFor="acceptTerms">I accept the terms</label>
          </div>
          {submitAttempted && errors.acceptTerms && (
            <p className="field-error">{errors.acceptTerms}</p>
          )}
        </div>

        <div>
          <Button type="submit">Create account</Button>
        </div>
      </form>
    </Card>
  )
}

export default RegisterPage
