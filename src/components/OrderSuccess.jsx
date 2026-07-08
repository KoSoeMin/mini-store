import formatKyat from './formatKyat'

function OrderSuccess({ order }) {
  return (
    <div className="mt-4 space-y-4">
      <div className="rounded-md bg-emerald-50 p-4">
        <p className="text-sm font-semibold text-emerald-800">မှာယူမှု အောင်မြင်ပါသည်</p>
        <h3 className="mt-2 text-lg font-bold leading-7 text-emerald-950">
          ကျေးဇူးတင်ပါသည်။ ဒေါ်မြရည်မှ မကြာမီ ပြန်လည်ဖုန်းဆက်ပါမည်။
        </h3>
      </div>

      <div className="rounded-md border border-zinc-200 p-3">
        <h4 className="text-sm font-bold text-zinc-950">မှာယူမှု အကျဉ်းချုပ်</h4>
        <dl className="mt-3 space-y-2 text-sm">
          <div className="flex justify-between gap-3">
            <dt className="text-zinc-500">အမည်</dt>
            <dd className="font-semibold text-zinc-900">{order.customer.name}</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-zinc-500">ဖုန်းနံပါတ်</dt>
            <dd className="font-semibold text-zinc-900">{order.customer.phone}</dd>
          </div>
          <div>
            <dt className="text-zinc-500">လိပ်စာ</dt>
            <dd className="mt-1 text-zinc-900">{order.customer.address}</dd>
          </div>
        </dl>

        <ul className="mt-4 divide-y divide-zinc-100 border-t border-zinc-100">
          {order.items.map((item) => (
            <li key={item.id} className="flex justify-between gap-3 py-2 text-sm">
              <span className="text-zinc-700">
                {item.name} x {item.quantity}
              </span>
              <span className="font-semibold text-zinc-950">
                {formatKyat(item.price * item.quantity)}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-3 flex justify-between gap-3 rounded-md bg-zinc-50 p-3 text-base font-bold">
          <span>စုစုပေါင်း</span>
          <span>{formatKyat(order.total)}</span>
        </div>
      </div>
    </div>
  )
}

export default OrderSuccess
