import { useState } from 'react'
import { formatKyat, formatOrderDate, toMyanmarNumerals } from '../utils/format'
import { getStoredOrders } from '../utils/orderStorage'

function OrderHistory({ onClose }) {
  const [orders] = useState(() => {
    const storedOrders = getStoredOrders()
    return [...storedOrders].sort(
      (firstOrder, secondOrder) =>
        new Date(secondOrder.createdAt) - new Date(firstOrder.createdAt),
    )
  })

  return (
    <section
      className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/50 p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-history-title"
    >
      <div className="mx-auto w-full max-w-3xl rounded-xl bg-zinc-50 p-4 shadow-xl sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-emerald-700">ဒေါ်မြရီ ကုန်စုံဆိုင်</p>
            <h2 id="order-history-title" className="mt-1 text-2xl font-bold text-zinc-950">
              မှာယူမှုမှတ်တမ်း
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md px-3 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            ပိတ်ရန်
          </button>
        </div>

        {orders.length === 0 ? (
          <p className="mt-6 rounded-lg bg-white p-5 text-sm leading-6 text-zinc-600 shadow-sm">
            ယခင်မှာယူမှုမှတ်တမ်း မရှိသေးပါ။
          </p>
        ) : (
          <div className="mt-6 space-y-4">
            {orders.map((order) => (
              <article key={order.id} className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-zinc-200">
                <div className="flex flex-wrap items-start justify-between gap-3 border-b border-zinc-200 pb-3">
                  <div>
                    <h3 className="font-bold text-zinc-950">မှာယူမှုအကျဉ်းချုပ်</h3>
                    <p className="mt-1 text-sm text-zinc-600">{order.orderNumber}</p>
                  </div>
                  <time className="text-sm font-semibold text-zinc-700" dateTime={order.createdAt}>
                    {formatOrderDate(order.createdAt)}
                  </time>
                </div>

                <dl className="grid gap-2 py-3 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="text-zinc-500">အမည်</dt>
                    <dd className="font-semibold text-zinc-950">{order.customer.name}</dd>
                  </div>
                  <div>
                    <dt className="text-zinc-500">ဖုန်းနံပါတ်</dt>
                    <dd className="font-semibold text-zinc-950">{toMyanmarNumerals(order.customer.phone)}</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-zinc-500">ပို့ဆောင်ရန်လိပ်စာ</dt>
                    <dd className="font-semibold text-zinc-950">{order.customer.address}</dd>
                  </div>
                </dl>

                <ul className="divide-y divide-zinc-100 border-y border-zinc-200">
                  {order.items.map((item) => (
                    <li key={item.id} className="flex items-center justify-between gap-3 py-3 text-sm">
                      <div>
                        <p className="font-semibold text-zinc-950">{item.name}</p>
                        <p className="mt-1 text-zinc-500">
                          {toMyanmarNumerals(item.quantity)} ခု × {formatKyat(item.price)}
                        </p>
                      </div>
                      <strong className="text-emerald-700">
                        {formatKyat(item.price * item.quantity)}
                      </strong>
                    </li>
                  ))}
                </ul>

                <div className="mt-3 flex justify-between gap-3 text-base font-bold text-zinc-950">
                  <span>စုစုပေါင်း</span>
                  <span>{formatKyat(order.total)}</span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default OrderHistory
