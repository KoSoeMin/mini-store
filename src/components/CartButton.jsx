import formatKyat from './formatKyat'
import useCart from './useCart'

function CartButton() {
  const { cartCount, cartTotal } = useCart()

  return (
    <a
      href="#cart-summary"
      className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-emerald-800 shadow-sm ring-1 ring-zinc-200 transition hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      aria-label="ဈေးခြင်းသို့ သွားရန်"
    >
      <span>ဈေးခြင်း</span>
      <span className="rounded-full bg-emerald-700 px-2 py-0.5 text-xs text-white">
        {cartCount}
      </span>
      <span className="hidden text-zinc-600 sm:inline">{formatKyat(cartTotal)}</span>
    </a>
  )
}

export default CartButton
