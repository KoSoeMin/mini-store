import { useState } from 'react'
import formatKyat from './formatKyat'
import saveOrder from './orderStorage'
import useCart from './useCart'

function validateMyanmarPhone(phone) {
  const normalizedPhone = phone.replace(/[\s-]/g, '')

  return /^09\d{7,9}$/.test(normalizedPhone)
}

function CheckoutForm({ onCancel, onOrderComplete }) {
  const { cartItems, cartTotal, clearCart } = useCart()
  const [customer, setCustomer] = useState({
    name: '',
    phone: '',
    address: '',
  })
  const [phoneError, setPhoneError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target

    setCustomer((currentCustomer) => ({
      ...currentCustomer,
      [name]: value,
    }))

    if (name === 'phone') {
      setPhoneError('')
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const normalizedPhone = customer.phone.replace(/[\s-]/g, '')

    if (!validateMyanmarPhone(customer.phone)) {
      setPhoneError('ဖုန်းနံပါတ်သည် 09 ဖြင့်စပြီး ဂဏန်း 9 လုံးမှ 11 လုံးအတွင်း ဖြစ်ရမည်။')
      return
    }

    const createdAt = new Date()
    const orderId = createdAt.getTime()

    const order = {
      id: orderId,
      orderNumber: `DMY-${String(orderId).slice(-6)}`,
      customer: {
        ...customer,
        phone: normalizedPhone,
      },
      items: cartItems,
      total: cartTotal,
      createdAt: createdAt.toISOString(),
    }

    saveOrder(order)
    clearCart()
    onOrderComplete(order)
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4">
      <div className="rounded-md bg-emerald-50 p-3">
        <div className="flex items-center justify-between gap-3 text-base font-bold text-emerald-900">
          <span>မှာယူမည့် စုစုပေါင်း</span>
          <span>{formatKyat(cartTotal)}</span>
        </div>
      </div>

      <label className="block">
        <span className="text-sm font-semibold text-zinc-800">အမည်</span>
        <input
          type="text"
          name="name"
          value={customer.name}
          onChange={handleChange}
          required
          className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
        />
      </label>

      <label className="block">
        <span className="text-sm font-semibold text-zinc-800">ဖုန်းနံပါတ်</span>
        <input
          type="tel"
          name="phone"
          value={customer.phone}
          onChange={handleChange}
          required
          aria-invalid={phoneError ? 'true' : 'false'}
          className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
        />
        {phoneError ? (
          <span className="mt-1 block text-xs leading-5 text-red-600">
            {phoneError}
          </span>
        ) : null}
      </label>

      <label className="block">
        <span className="text-sm font-semibold text-zinc-800">ပို့ဆောင်ရန် လိပ်စာ</span>
        <textarea
          name="address"
          value={customer.address}
          onChange={handleChange}
          required
          rows={3}
          className="mt-1 w-full resize-none rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
        />
      </label>

      <div className="flex gap-2">
        <button
          type="submit"
          className="flex-1 rounded-md bg-emerald-700 px-3 py-2 text-sm font-semibold text-white transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        >
          အတည်ပြုရန်
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="rounded-md border border-zinc-300 px-3 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-400"
        >
          မလုပ်တော့ပါ
        </button>
      </div>
    </form>
  )
}

export default CheckoutForm
