import useCart from '../context/useCart'
import { formatKyat } from '../utils/format'

function CartItem({ item }) {
  const { decreaseQuantity, increaseQuantity, removeFromCart } = useCart()

  return (
    <li className="flex gap-3 border-b border-zinc-200 py-4 last:border-b-0">
      <img
        src={item.image}
        alt={item.name}
        className="h-16 w-16 rounded-md bg-zinc-100 object-cover"
      />

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-semibold text-zinc-950">{item.name}</h3>
        <p className="mt-1 text-xs text-zinc-500">{formatKyat(item.price)}</p>
        <p className="mt-2 text-sm font-bold text-emerald-700">
          {formatKyat(item.price * item.quantity)}
        </p>
      </div>

      <div className="flex flex-col items-end justify-between gap-2">
        <button
          type="button"
          onClick={() => removeFromCart(item.id)}
          className="rounded-md p-1.5 text-zinc-500 transition hover:bg-red-50 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
          aria-label={`${item.name} ဖယ်ရှားရန်`}
        >
          x
        </button>

        <div className="flex items-center overflow-hidden rounded-md border border-zinc-200">
          <button
            type="button"
            onClick={() => decreaseQuantity(item.id)}
            className="grid h-8 w-8 place-items-center text-zinc-700 transition hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-label={`${item.name} အရေအတွက် လျှော့ရန်`}
          >
            -
          </button>
          <span className="grid h-8 min-w-9 place-items-center border-x border-zinc-200 px-2 text-sm font-semibold">
            {item.quantity}
          </span>
          <button
            type="button"
            onClick={() => increaseQuantity(item.id)}
            className="grid h-8 w-8 place-items-center text-zinc-700 transition hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-label={`${item.name} အရေအတွက် တိုးရန်`}
          >
            +
          </button>
        </div>
      </div>
    </li>
  )
}

export default CartItem
