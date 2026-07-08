const ORDERS_STORAGE_KEY = 'daw-mya-yee-orders'

function getStoredOrders() {
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
