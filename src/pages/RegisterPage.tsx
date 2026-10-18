import { useState, type ChangeEvent, type FocusEvent, type SubmitEvent } from 'react'
import Button from '../components/ui/Button.tsx'
import Card from '../components/ui/Card.tsx'
import TextField from '../components/ui/TextField.tsx'
import {
  validateRegistration,
  type RegistrationValues,
} from '../lib/validateRegistration.ts'

type Field = keyof RegistrationValues

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
  // Fields the user has already left
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({})
  const [submitAttempted, setSubmitAttempted] = useState(false)
  const [registeredName, setRegisteredName] = useState<string | null>(null)

  // Computed from the values on every render – never stored in state
  const errors = validateRegistration(values)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    // name of the input = key in the values object
    const { name, type, value, checked } = event.target
    setValues((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
  }

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    const { name } = event.target
    setTouched((current) => ({ ...current, [name]: true }))
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitAttempted(true)

    if (Object.keys(errors).length === 0) {
      setRegisteredName(values.fullName.trim())
    }
  }

  // A field's error shows once the user has left it or pressed Create account
  function errorFor(field: Field) {
    return touched[field] || submitAttempted ? errors[field] : undefined
  }

  if (registeredName) {
    return (
      <Card>
        <h2>Register</h2>
        <p role="status">Thanks, {registeredName}. You are registered.</p>
      </Card>
    )
  }

  const termsError = errorFor('acceptTerms')

  return (
    <Card>
      <h2>Register</h2>
      {/* noValidate: our own messages instead of the browser's popups */}
      <form className="form" onSubmit={handleSubmit} noValidate>
        <TextField
          label="Full name"
          name="fullName"
          autoComplete="name"
          value={values.fullName}
          error={errorFor('fullName')}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          error={errorFor('email')}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          autoComplete="new-password"
          value={values.password}
          error={errorFor('password')}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <TextField
          label="Confirm password"
          name="confirmPassword"
          type="password"
          autoComplete="new-password"
          value={values.confirmPassword}
          error={errorFor('confirmPassword')}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <div className="field">
          <div className="check">
            <input
              id="acceptTerms"
              name="acceptTerms"
              type="checkbox"
              checked={values.acceptTerms}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={termsError ? true : undefined}
              aria-describedby={termsError ? 'acceptTerms-error' : undefined}
            />
            <label htmlFor="acceptTerms">I accept the terms</label>
          </div>
          {termsError && (
            <p id="acceptTerms-error" className="field-error">
              {termsError}
            </p>
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
