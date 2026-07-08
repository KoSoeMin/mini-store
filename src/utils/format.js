export function formatKyat(price) {
  return `${price.toLocaleString('en-US')} Kyat`
}

export function formatOrderDate(createdAt) {
  return new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(createdAt))
}
