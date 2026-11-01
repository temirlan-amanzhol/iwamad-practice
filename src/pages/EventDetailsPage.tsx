import { Link, useParams } from 'react-router'
import Card from '../components/ui/Card.tsx'
import EventSignupForm from '../components/EventSignupForm.tsx'
import { events } from '../data/events.ts'
import { formatDate } from '../lib/formatDate.ts'

function EventDetailsPage() {
  // useParams gives the :eventId part of the URL as a string, so convert it before comparing
  const { eventId } = useParams()
  const event = events.find((item) => item.id === Number(eventId))

  if (!event) {
    return (
      <Card>
        <h1>Event not found</h1>
        <p>No event with id {eventId}.</p>
        <p className="back-link">
          <Link to="/events">← Back to events</Link>
        </p>
      </Card>
    )
  }

  return (
    <Card as="article">
      <h1>{event.title}</h1>
      <p>
        <time dateTime={event.date}>{formatDate(event.date)}</time> · {event.place}
      </p>
      {/* key: a different event gets a fresh form with its own seats */}
      <EventSignupForm key={event.id} event={event} />
      <p className="back-link">
        <Link to="/events">← Back to events</Link>
      </p>
    </Card>
  )
}

export default EventDetailsPage
