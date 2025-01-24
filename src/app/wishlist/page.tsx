"use client"

import { useCart } from "@/components/providers/cart-provider"
import { ProductCard } from "@/components/product-card"
import { categories } from "@/lib/data"

export default function WishlistPage() {
  const { wishlist } = useCart()

  const wishlistProducts = Object.values(categories)
    .flatMap((category) => Object.values(category.subcategories))
    .flatMap((subcategory) => subcategory.products)
    .filter((product) => wishlist.includes(product.id))

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Your Wishlist</h1>
      {wishlistProducts.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlistProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      )}
    </div>
  )
}

