import { useEffect, useMemo, useReducer } from 'react'
import CartContext from './cartContext'

const CART_STORAGE_KEY = 'daw-mya-yee-cart'

function getStoredCart() {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const storedCart = window.localStorage.getItem(CART_STORAGE_KEY)
    const parsedCart = storedCart ? JSON.parse(storedCart) : []

    return Array.isArray(parsedCart) ? parsedCart : []
  } catch {
    return []
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'add': {
      const existingItem = state.find((item) => item.id === action.product.id)

      if (existingItem) {
        return state.map((item) =>
          item.id === action.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }

      return [...state, { ...action.product, quantity: 1 }]
    }

    case 'remove':
      return state.filter((item) => item.id !== action.productId)

    case 'increase':
      return state.map((item) =>
        item.id === action.productId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      )

    case 'decrease':
      return state
        .map((item) =>
          item.id === action.productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0)

    case 'clear':
      return []

    default:
      return state
  }
}

function CartProvider({ children }) {
  const [cartItems, dispatch] = useReducer(cartReducer, [], getStoredCart)

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  const value = useMemo(() => {
    const cartTotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    )
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)

    return {
      cartItems,
      cartTotal,
      cartCount,
      addToCart: (product) => dispatch({ type: 'add', product }),
      removeFromCart: (productId) => dispatch({ type: 'remove', productId }),
      increaseQuantity: (productId) => dispatch({ type: 'increase', productId }),
      decreaseQuantity: (productId) => dispatch({ type: 'decrease', productId }),
      clearCart: () => dispatch({ type: 'clear' }),
    }
  }, [cartItems])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartProvider
