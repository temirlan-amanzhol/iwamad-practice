import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { expect, test } from 'vitest'
import { events } from '../data/events.ts'
import EventsPage from './EventsPage.tsx'

test('the events page shows one card per event', () => {
  // The cards contain Links, so they need a router around them
  render(
    <MemoryRouter>
      <EventsPage />
    </MemoryRouter>,
  )

  expect(screen.getAllByRole('article')).toHaveLength(events.length)
})
