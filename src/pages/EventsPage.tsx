import EventCard from '../components/EventCard.tsx'
import { events } from '../data/events.ts'

function EventsPage() {
  return (
    <section>
      <h1>Events</h1>
      {/* One EventCard per object in the array; key = the event id */}
      <div className="card-grid">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  )
}

export default EventsPage
