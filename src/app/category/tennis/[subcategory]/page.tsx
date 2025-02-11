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
  "tennis-balls": {
    id: "tennis-balls",
    name: "Tennis Balls",
    products: [
      { "id": "tennis-ball-1", "name": "Wilson US Open Tennis Balls (Pack of 3)", "price": 999, "brand": "Wilson", "image": "/images/products/wilson-us-open.jpg", "description": "Official US Open tennis balls for tournament play." },
      { "id": "tennis-ball-2", "name": "Penn Championship Extra Duty Tennis Balls", "price": 899, "brand": "Penn", "image": "/images/products/penn-championship.jpg", "description": "Durable and consistent bounce for all surfaces." },
      { "id": "tennis-ball-3", "name": "Dunlop ATP Championship Tennis Balls", "price": 1199, "brand": "Dunlop", "image": "/images/products/dunlop-atp.jpg", "description": "High-performance tennis balls approved by ATP." },
      { "id": "tennis-ball-4", "name": "Babolat Gold All Court Tennis Balls", "price": 1099, "brand": "Babolat", "image": "/images/products/babolat-gold.jpg", "description": "Versatile tennis balls suitable for all court types." }
    ],
  },
  "tennis-grips": {
    id: "tennis-grips",
    name: "Tennis Grips",
    products: [
      { "id": "tennis-grip-1", "name": "Wilson Pro Overgrip (Pack of 3)", "price": 699, "brand": "Wilson", "image": "/images/products/wilson-overgrip.jpg", "description": "Comfortable and high-absorption overgrip." },
      { "id": "tennis-grip-2", "name": "Babolat VS Original Grip", "price": 899, "brand": "Babolat", "image": "/images/products/babolat-grip.jpg", "description": "Thin and tacky grip for ultimate feel." },
      { "id": "tennis-grip-3", "name": "Yonex Super Grap Overgrip", "price": 799, "brand": "Yonex", "image": "/images/products/yonex-grap.jpg", "description": "Durable and sweat-resistant overgrip." },
      { "id": "tennis-grip-4", "name": "Head Xtreme Soft Overgrip", "price": 749, "brand": "Head", "image": "/images/products/head-xtreme.jpg", "description": "Soft and moisture-wicking grip for better control." }
    ],
  },
  dampner: {
    id: "dampner",
    name: "Dampner",
    products: [
      { "id": "dampner-1", "name": "Wilson Shock Shield Vibration Dampener", "price": 499, "brand": "Wilson", "image": "/images/products/wilson-dampner.jpg", "description": "Reduces vibrations for improved comfort." },
      { "id": "dampner-2", "name": "Babolat Custom Damp Vibration Dampener", "price": 599, "brand": "Babolat", "image": "/images/products/babolat-dampner.jpg", "description": "Personalized vibration dampener for optimal feel." },
      { "id": "dampner-3", "name": "Head Smartsorb Dampener", "price": 499, "brand": "Head", "image": "/images/products/head-dampner.jpg", "description": "Absorbs shocks and enhances racquet control." },
      { "id": "dampner-4", "name": "Yonex Vibration Stopper Dampener", "price": 549, "brand": "Yonex", "image": "/images/products/yonex-dampner.jpg", "description": "Designed for reducing string vibrations." }
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

