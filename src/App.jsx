import ProductList from './components/ProductList'
import CartButton from './components/CartButton'
import Cart from './components/Cart'

function App() {
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
          <CartButton />
        </div>
      </header>

      <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
        <ProductList />
        <Cart />
      </div>
    </main>
  )
}

export default App
