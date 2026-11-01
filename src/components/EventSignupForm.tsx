import { useState, type ChangeEvent, type FocusEvent, type SubmitEvent } from 'react'
import Button from './ui/Button.tsx'
import TextField from './ui/TextField.tsx'
import type { CampusEvent } from '../data/events.ts'
import { validateSignup, type SignupValues } from '../lib/validateSignup.ts'

type EventSignupFormProps = {
  event: CampusEvent
}

type Field = keyof SignupValues

type Booking = {
  tickets: number
  name: string
}

const initialValues: SignupValues = { fullName: '', email: '', tickets: '1' }

function EventSignupForm({ event }: EventSignupFormProps) {
  // All three values in one object, changed by one handleChange
  const [values, setValues] = useState<SignupValues>(initialValues)
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({})
  const [submitAttempted, setSubmitAttempted] = useState(false)
  const [seatsLeft, setSeatsLeft] = useState(event.seats)
  const [lastBooking, setLastBooking] = useState<Booking | null>(null)

  // Computed from the values on every render – never stored in state
  const errors = validateSignup(values, seatsLeft)

  function handleChange(changeEvent: ChangeEvent<HTMLInputElement>) {
    const { name, value } = changeEvent.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  function handleBlur(blurEvent: FocusEvent<HTMLInputElement>) {
    const { name } = blurEvent.target
    setTouched((current) => ({ ...current, [name]: true }))
  }

  function handleSubmit(submitEvent: SubmitEvent<HTMLFormElement>) {
    submitEvent.preventDefault()
    setSubmitAttempted(true)

    if (Object.keys(errors).length > 0) {
      return
    }

    const tickets = Number(values.tickets)
    setSeatsLeft((current) => current - tickets)
    setLastBooking({ tickets, name: values.fullName.trim() })

    // Empty form for the next booking: no old values, no old error messages
    setValues(initialValues)
    setTouched({})
    setSubmitAttempted(false)
  }

  // A field's error shows once the user has left it or pressed Book
  function errorFor(field: Field) {
    return touched[field] || submitAttempted ? errors[field] : undefined
  }

  return (
    <section className="signup" aria-label="Book a seat">
      <h2>Book a seat</h2>
      <p>Seats left: {seatsLeft}</p>
      {lastBooking && (
        <p role="status">
          Booked: {lastBooking.tickets} for {lastBooking.name}.
        </p>
      )}

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
          label="Tickets"
          name="tickets"
          type="number"
          min={1}
          max={4}
          value={values.tickets}
          error={errorFor('tickets')}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <div>
          <Button type="submit">Book</Button>
        </div>
      </form>
    </section>
  )
}

export default EventSignupForm
