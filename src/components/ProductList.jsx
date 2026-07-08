import products from '../data/products.json'
import ProductCard from './ProductCard'

function ProductList() {
  return (
    <section>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default ProductList
