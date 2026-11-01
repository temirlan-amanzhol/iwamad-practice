import { expect, it } from 'vitest'
import { validateSignup, type SignupValues } from './validateSignup.ts'

// One valid object. Each test changes only what its row in the handout says
const valid: SignupValues = {
  fullName: 'Aliya Nurlanovna',
  email: 'aliya@example.com',
  tickets: '2',
}

it('1 accepts the valid values', () => {
  const errors = validateSignup(valid, 10)
  expect(errors).toEqual({})
})

it('2 rejects zero tickets', () => {
  const errors = validateSignup({ ...valid, tickets: '0' }, 10)
  expect(errors.tickets).toBe('Choose 1 to 4 tickets')
})

it('3 rejects more than 4 tickets', () => {
  const errors = validateSignup({ ...valid, tickets: '5' }, 10)
  expect(errors.tickets).toBe('Choose 1 to 4 tickets')
})

it('4 rejects a ticket count that is not a whole number', () => {
  const errors = validateSignup({ ...valid, tickets: '1.5' }, 10)
  expect(errors.tickets).toBe('Choose 1 to 4 tickets')
})

it('5 accepts exactly 4 tickets', () => {
  const errors = validateSignup({ ...valid, tickets: '4' }, 10)
  expect(errors).toEqual({})
})

it('6 rejects more tickets than seats left', () => {
  const errors = validateSignup({ ...valid, tickets: '3' }, 2)
  expect(errors.tickets).toBe('Only 2 seats left')
})
