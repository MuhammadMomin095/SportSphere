"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ShoppingCart, Heart } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useCart } from "@/components/providers/cart-provider"

const categories = {
  "basketballs": {
    id: "basketballs",
    name: "BasketBalls",
    products: [
      { "id": "basketball-1", "name": "Spalding NBA Official Game Ball", "price": 5999, "brand": "Spalding", "image": "/images/products/spalding-nba-ball.jpg", "description": "Official NBA basketball with premium leather cover." },
      { "id": "basketball-2", "name": "Wilson Evolution Indoor Basketball", "price": 4999, "brand": "Wilson", "image": "/images/products/wilson-evolution.jpg", "description": "High-quality indoor basketball with soft grip." },
      { "id": "basketball-3", "name": "Molten GG7X Basketball", "price": 5499, "brand": "Molten", "image": "/images/products/molten-gg7x.jpg", "description": "FIBA-approved basketball with deep channels for control." },
      { "id": "basketball-4", "name": "Nike Elite Championship Basketball", "price": 5299, "brand": "Nike", "image": "/images/products/nike-elite-basketball.jpg", "description": "Durable and high-performance basketball for professionals." }
    ],
  },
  "basketball-ring": {
    id: "basketball-ring",
    name: "Basketball Ring",
    products: [
      { "id": "ring-1", "name": "Spalding Heavy-Duty Basketball Rim", "price": 3999, "brand": "Spalding", "image": "/images/products/spalding-rim.jpg", "description": "Durable steel rim with breakaway mechanism." },
      { "id": "ring-2", "name": "Lifetime Slam-It Pro Rim", "price": 4499, "brand": "Lifetime", "image": "/images/products/lifetime-rim.jpg", "description": "Professional-grade basketball rim with spring action." },
      { "id": "ring-3", "name": "Silverback Breakaway Basketball Rim", "price": 4799, "brand": "Silverback", "image": "/images/products/silverback-rim.jpg", "description": "Heavy-duty breakaway rim for aggressive play." },
      { "id": "ring-4", "name": "Goalrilla Basketball Hoop Rim", "price": 5299, "brand": "Goalrilla", "image": "/images/products/goalrilla-rim.jpg", "description": "Premium adjustable rim for competitive play." }
    ],
  },
  "basketball-net": {
    id: "basketball-net",
    name: "basketball Net",
    products: [
      { "id": "net-1", "name": "Heavy-Duty Nylon Basketball Net", "price": 999, "brand": "Spalding", "image": "/images/products/spalding-net.jpg", "description": "Durable all-weather net for outdoor and indoor use." },
      { "id": "net-2", "name": "Glow-in-the-Dark Basketball Net", "price": 1199, "brand": "GlowHoop", "image": "/images/products/glow-net.jpg", "description": "Luminous basketball net for nighttime play." },
      { "id": "net-3", "name": "Chain Link Basketball Net", "price": 1599, "brand": "Lifetime", "image": "/images/products/chain-net.jpg", "description": "Heavy-duty metal net for rugged outdoor courts." },
      { "id": "net-4", "name": "Double-Thick Professional Basketball Net", "price": 1299, "brand": "Wilson", "image": "/images/products/wilson-net.jpg", "description": "Reinforced basketball net for long-lasting use." }
    ],
  },
}

export default function SubCategoryPage() {
  const params = useParams()
  const { addItem, toggleWishlist, wishlist } = useCart()
  const { toast } = useToast()
  const [sortBy, setSortBy] = useState("name")

  const subcategory = categories[params.subcategory as keyof typeof categories]

  if (!subcategory) {
    return <div>Category not found</div>
  }

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    })
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  const handleToggleWishlist = (product: any) => {
    toggleWishlist(product.id)
    toast({
      title: wishlist.includes(product.id) ? "Removed from wishlist" : "Added to wishlist",
      description: `${product.name} has been ${wishlist.includes(product.id) ? "removed from" : "added to"} your wishlist.`,
    })
  }

  const sortedProducts = [...subcategory.products].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name)
    if (sortBy === "price") return a.price - b.price
    return 0
  })

  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-black text-white overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/fitness-banner.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: "0.2",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">{subcategory.name}</h1>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-32 bg-white"
          style={{
            clipPath: "polygon(0 100%, 100% 0, 100% 100%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <div className="flex justify-end mb-8">
          <div className="flex items-center space-x-4">
            <label htmlFor="sort" className="text-gray-700">
              Sort by:
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border rounded-md px-2 py-1"
            >
              <option value="name">Name</option>
              <option value="price">Price</option>
            </select>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence>
            {sortedProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              >
                <Link href={`/product/${product.id}`}>
                  <div className="relative aspect-square">
                    <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg text-gray-800 group-hover:text-blue-600">{product.name}</h3>
                    <p className="text-gray-600">{product.brand}</p>
                    <p className="font-bold mt-2 text-2xl text-blue-600">Rs. {product.price.toLocaleString()}</p>
                  </div>
                </Link>
                <div className="flex gap-2 p-4 bg-gray-50">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleToggleWishlist(product)}
                    className="p-2 border rounded-md hover:bg-gray-100 transition-colors"
                  >
                    <Heart
                      className={`h-4 w-4 ${wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-600"}`}
                    />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}

