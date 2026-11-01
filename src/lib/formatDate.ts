// '2026-10-22' -> '22 October 2026'. T00:00:00 keeps the date in local time,
// so it does not move to the day before in time zones behind UTC
export function formatDate(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
