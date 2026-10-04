import { NavLink } from 'react-router'

function NotFound() {
  return (
    <section className="card">
      <h2>404 — Page not found</h2>
      <p>This page doesn't exist.</p>
      <p className="back-link">
        <NavLink to="/">← Go to the home page</NavLink>
      </p>
    </section>
  )
}

export default NotFound
