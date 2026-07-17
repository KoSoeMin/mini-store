import { useState } from 'react'
import ProductList from './components/ProductList'
import CartButton from './components/CartButton'
import Cart from './components/Cart'
import OrderHistory from './components/OrderHistory'

function App() {
  const [isOrderHistoryOpen, setIsOrderHistoryOpen] = useState(false)

  return (
    <main className="min-h-screen bg-zinc-50">
      <header className="border-b border-zinc-200 bg-emerald-700">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-sm font-medium text-emerald-100">ဒေါ်မြရည် ကုန်စုံဆိုင်</p>
            <h1 className="mt-1 text-xl font-bold text-white sm:text-2xl">
              ရနိုင်သော ပစ္စည်းများ
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsOrderHistoryOpen(true)}
              className="rounded-md bg-emerald-800 px-3 py-2 text-sm font-semibold text-white transition hover:bg-emerald-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-700"
            >
              မှာယူမှုမှတ်တမ်း
            </button>
            <CartButton />
          </div>
        </div>
      </header>

      <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
        <ProductList />
        <Cart />
      </div>
      {isOrderHistoryOpen ? (
        <OrderHistory onClose={() => setIsOrderHistoryOpen(false)} />
      ) : null}
    </main>
  )
}

export default App
