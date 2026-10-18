import { NavLink } from 'react-router'
import Card from '../components/ui/Card.tsx'

function NotFound() {
  return (
    <Card>
      <h2>404 — Page not found</h2>
      <p>This page doesn't exist.</p>
      <p className="back-link">
        <NavLink to="/">← Go to the home page</NavLink>
      </p>
    </Card>
  )
}

export default NotFound
