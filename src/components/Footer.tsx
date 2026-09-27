type FooterProps = {
  owner: string
  year: number
  note: string
}

function Footer({ owner, year, note }: FooterProps) {
  return (
    <footer className="site-footer">
      <p>
        &copy; {year} {owner}. {note}
      </p>
    </footer>
  )
}

export default Footer
