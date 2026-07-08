import { useState } from 'react'
import useCart from '../context/useCart'
import { formatKyat } from '../utils/format'
import CartItem from './CartItem'
import CheckoutForm from './CheckoutForm'
import ThankYou from './ThankYou'

function Cart() {
  const { cartItems, cartTotal, clearCart } = useCart()
  const [checkoutStep, setCheckoutStep] = useState('cart')
  const [completedOrder, setCompletedOrder] = useState(null)
  const hasItems = cartItems.length > 0
  const isCheckingOut = checkoutStep === 'checkout'
  const isComplete = checkoutStep === 'complete' && completedOrder

  return (
    <aside
      id="cart-summary"
      className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm lg:sticky lg:top-6"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-emerald-700">ဈေးခြင်း</p>
          <h2 className="mt-1 text-xl font-bold text-zinc-950">ရွေးထားသော ပစ္စည်းများ</h2>
        </div>

        {hasItems && !isCheckingOut ? (
          <button
            type="button"
            onClick={clearCart}
            className="rounded-md px-2 py-1 text-sm font-semibold text-red-600 transition hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            ရှင်းရန်
          </button>
        ) : null}
      </div>

      {isComplete ? (
        <ThankYou order={completedOrder} />
      ) : isCheckingOut ? (
        <CheckoutForm
          onCancel={() => setCheckoutStep('cart')}
          onOrderComplete={(order) => {
            setCompletedOrder(order)
            setCheckoutStep('complete')
          }}
        />
      ) : hasItems ? (
        <>
          <ul className="mt-2 divide-y divide-zinc-100">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>

          <div className="mt-4 rounded-md bg-emerald-50 p-3">
            <div className="flex items-center justify-between gap-3 text-base font-bold text-emerald-900">
              <span>စုစုပေါင်း</span>
              <span>{formatKyat(cartTotal)}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setCheckoutStep('checkout')}
            className="mt-4 w-full rounded-md bg-emerald-700 px-3 py-2 text-sm font-semibold text-white transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            အခုမှာယူရန်
          </button>
        </>
      ) : (
        <p className="mt-4 rounded-md bg-zinc-50 p-4 text-sm leading-6 text-zinc-600">
          ဈေးခြင်းထဲတွင် ပစ္စည်း မရှိသေးပါ။
        </p>
      )}
    </aside>
  )
}

export default Cart
