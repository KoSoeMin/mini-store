import { useState } from 'react'
import useCart from '../context/useCart'
import { formatKyat } from '../utils/format'

function ProductCard({ product }) {
  const { addToCart } = useCart()
  const [imageError, setImageError] = useState(false)

  return (
    <article className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm">
      {imageError ? (
        <div
          className="flex aspect-square w-full items-center justify-center bg-gray-100 text-5xl font-bold text-gray-500"
          role="img"
          aria-label={`${product.name} ပုံမရရှိပါ`}
        >
          {product.name.charAt(0)}
        </div>
      ) : (
        <img
          src={product.image}
          alt={product.name}
          onError={() => setImageError(true)}
          className="aspect-square w-full bg-zinc-100 object-cover"
        />
      )}

      <div className="flex min-h-40 flex-col p-3 sm:p-4">
        <p className="text-xs font-medium text-zinc-500">{product.category}</p>
        <h2 className="mt-1 flex-1 text-sm font-semibold leading-6 text-zinc-950 sm:text-base">
          {product.name}
        </h2>
        <p className="mt-2 text-sm font-bold text-emerald-700 sm:text-base">
          {formatKyat(product.price)}
        </p>

        <button
          type="button"
          onClick={() => addToCart(product)}
          className="mt-3 rounded-md bg-emerald-700 px-3 py-2 text-sm font-semibold text-white transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        >
          ဈေးခြင်းထဲ ထည့်ရန်
        </button>
      </div>
    </article>
  )
}

export default ProductCard
