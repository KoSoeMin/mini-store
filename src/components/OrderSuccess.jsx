import formatKyat from './formatKyat'

const DAW_MYA_YEE_VIBER_DISPLAY = '09447048824'
const DAW_MYA_YEE_VIBER_LINK = 'viber://chat?number=%2B959447048824'

function formatOrderDate(createdAt) {
  return new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(createdAt))
}

function OrderSuccess({ order }) {
  return (
    <div className="mt-4 space-y-3">
      <section className="rounded-lg border-2 border-emerald-700 bg-white p-4 text-zinc-950">
        <div className="border-b border-zinc-200 pb-3">
          <p className="text-base font-bold text-emerald-700">ဒေါ်မြရည် ကုန်စုံဆိုင်</p>
          <h3 className="mt-1 text-2xl font-bold leading-8">မှာယူမှု အကျဉ်းချုပ်</h3>
          <div className="mt-3 grid gap-2 text-base font-semibold">
            <div className="flex justify-between gap-3">
              <span className="text-zinc-500">အော်ဒါနံပါတ်</span>
              <span>{order.orderNumber}</span>
            </div>
            <div className="flex justify-between gap-3">
              <span className="text-zinc-500">ရက်စွဲ</span>
              <span>{formatOrderDate(order.createdAt)}</span>
            </div>
          </div>
        </div>

        <dl className="grid gap-2 border-b border-zinc-200 py-3 text-base">
          <div className="flex justify-between gap-3">
            <dt className="font-semibold text-zinc-500">အမည်</dt>
            <dd className="text-right font-bold">{order.customer.name}</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="font-semibold text-zinc-500">ဖုန်းနံပါတ်</dt>
            <dd className="font-bold">{order.customer.phone}</dd>
          </div>
          <div>
            <dt className="font-semibold text-zinc-500">ပို့ဆောင်ရန် လိပ်စာ</dt>
            <dd className="mt-1 text-lg font-bold leading-7">{order.customer.address}</dd>
          </div>
        </dl>

        <div className="py-3">
          <h4 className="text-lg font-bold">ပစ္စည်းစာရင်း</h4>
          <ul className="mt-2 divide-y divide-zinc-200">
            {order.items.map((item) => (
              <li key={item.id} className="grid gap-1 py-2 text-base">
                <div className="flex justify-between gap-3 font-semibold">
                  <span>{item.name}</span>
                  <span>x {item.quantity}</span>
                </div>
                <div className="flex justify-between gap-3 text-sm text-zinc-600">
                  <span>{formatKyat(item.price)}</span>
                  <span className="font-bold text-zinc-950">
                    {formatKyat(item.price * item.quantity)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between gap-3 rounded-md bg-emerald-700 p-3 text-xl font-bold text-white">
          <span>စုစုပေါင်း</span>
          <span>{formatKyat(order.total)}</span>
        </div>
      </section>

      <div className="rounded-lg bg-amber-50 p-4 text-center">
        <p className="text-base font-bold leading-7 text-amber-950">
          ဤစာမျက်နှာကို Screenshot ရိုက်ပြီး ဒေါ်မြရည်၏ Viber ({DAW_MYA_YEE_VIBER_DISPLAY})
          သို့ ပို့ပေးပါ။
        </p>
        <a
          href={DAW_MYA_YEE_VIBER_LINK}
          className="mt-3 inline-flex w-full justify-center rounded-md bg-violet-700 px-4 py-3 text-base font-bold text-white transition hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
        >
          Viber ဖွင့်ရန်
        </a>
      </div>
    </div>
  )
}

export default OrderSuccess
