export type SignupValues = { fullName: string; email: string; tickets: string }
export type SignupErrors = Partial<Record<keyof SignupValues, string>>

// Shape name@example.com: something, "@", something, ".", something – no spaces
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Pure function: reads the values, returns a new object, changes nothing.
// One message per invalid field, {} when everything is valid
export function validateSignup(values: SignupValues, seatsLeft: number): SignupErrors {
  const errors: SignupErrors = {}

  if (values.fullName.trim().length < 2) {
    errors.fullName = 'Enter your full name'
  }

  if (!emailPattern.test(values.email)) {
    errors.email = 'Enter a valid email, like name@example.com'
  }

  // The input gives text ('2'), so convert it – the same as the id from useParams.
  // Number('') is 0 and Number('1.5') is not an integer, so both fail the first check
  const tickets = Number(values.tickets)
  if (!Number.isInteger(tickets) || tickets < 1 || tickets > 4) {
    errors.tickets = 'Choose 1 to 4 tickets'
  } else if (tickets > seatsLeft) {
    errors.tickets = `Only ${seatsLeft} seats left`
  }

  return errors
}
