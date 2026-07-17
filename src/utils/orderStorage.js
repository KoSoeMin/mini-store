const ORDERS_STORAGE_KEY = 'daw-mya-yee-orders'

export function getStoredOrders() {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const storedOrders = window.localStorage.getItem(ORDERS_STORAGE_KEY)
    const parsedOrders = storedOrders ? JSON.parse(storedOrders) : []

    return Array.isArray(parsedOrders) ? parsedOrders : []
  } catch {
    return []
  }
}

export function saveOrder(order) {
  const orders = getStoredOrders()
  window.localStorage.setItem(
    ORDERS_STORAGE_KEY,
    JSON.stringify([...orders, order]),
  )
}
