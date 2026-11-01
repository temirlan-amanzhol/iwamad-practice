import { Link } from 'react-router'
import Card from './ui/Card.tsx'
import Tag from './ui/Tag.tsx'
import type { CampusEvent } from '../data/events.ts'
import { formatDate } from '../lib/formatDate.ts'

type EventCardProps = {
  event: CampusEvent
}

// One card in the grid. Everything it shows comes from the event prop
function EventCard({ event }: EventCardProps) {
  return (
    <Card as="article">
      <h2>{event.title}</h2>
      <p>
        <time dateTime={event.date}>{formatDate(event.date)}</time> · {event.place}
      </p>
      <div>
        <Tag>{event.seats} seats</Tag>
      </div>
      <p>
        <Link to={`/events/${event.id}`}>
          Details<span className="visually-hidden">: {event.title}</span>
        </Link>
      </p>
    </Card>
  )
}

export default EventCard
