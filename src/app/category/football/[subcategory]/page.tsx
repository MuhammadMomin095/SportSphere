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
  "footballs": {
    id: "footballs",
    name: "Footballs",
    products: [
      { "id": "football-1", "name": "Adidas FIFA World Cup Ball", "price": 5999, "brand": "Adidas", "image": "/images/products/adidas-world-cup-ball.jpg", "description": "Official match ball used in the FIFA World Cup." },
      { "id": "football-2", "name": "Nike Premier League Strike Football", "price": 4999, "brand": "Nike", "image": "/images/products/nike-premier-ball.jpg", "description": "High-quality football with enhanced durability." },
      { "id": "football-3", "name": "Puma La Liga 1 Match Ball", "price": 5499, "brand": "Puma", "image": "/images/products/puma-la-liga-ball.jpg", "description": "Premium football used in La Liga matches." },
      { "id": "football-4", "name": "Mitre Impel Training Football", "price": 1999, "brand": "Mitre", "image": "/images/products/mitre-training-ball.jpg", "description": "Durable training ball for practice sessions." }
    ],
  },
  "football-shoes": {
    id: "football-shoes",
    name: "Football Shoes",
    products: [
      { "id": "shoes-1", "name": "Nike Mercurial Superfly 9", "price": 12999, "brand": "Nike", "image": "/images/products/nike-mercurial.jpg", "description": "Lightweight football shoes for speed and agility." },
      { "id": "shoes-2", "name": "Adidas Predator Edge", "price": 11999, "brand": "Adidas", "image": "/images/products/adidas-predator.jpg", "description": "Control-enhancing football shoes for precision play." },
      { "id": "shoes-3", "name": "Puma Future Z 1.3", "price": 10999, "brand": "Puma", "image": "/images/products/puma-future.jpg", "description": "Flexible and responsive shoes for quick movements." },
      { "id": "shoes-4", "name": "Under Armour Magnetico Select", "price": 8999, "brand": "Under Armour", "image": "/images/products/ua-magnetico.jpg", "description": "Comfortable football shoes with superior grip." }
    ],
  },
  socks: {
    id: "socks",
    name: "Socks",
    products: [
      { "id": "socks-1", "name": "Nike Grip Crew Football Socks", "price": 999, "brand": "Nike", "image": "/images/products/nike-football-socks.jpg", "description": "Anti-slip socks for enhanced foot stability." },
      { "id": "socks-2", "name": "Adidas Alphaskin Football Socks", "price": 899, "brand": "Adidas", "image": "/images/products/adidas-football-socks.jpg", "description": "Compression socks for maximum comfort and support." },
      { "id": "socks-3", "name": "Puma Performance Football Socks", "price": 799, "brand": "Puma", "image": "/images/products/puma-football-socks.jpg", "description": "Breathable socks designed for long matches." },
      { "id": "socks-4", "name": "Under Armour HeatGear Socks", "price": 699, "brand": "Under Armour", "image": "/images/products/ua-football-socks.jpg", "description": "Moisture-wicking socks to keep feet dry and cool." }
    ],
  },
  "football-accessories": {
    id: "football-accessories",
    name: "Football Accessories",
    products: [
      { "id": "accessory-1", "name": "Adidas Tiro Club Shin Guards", "price": 1299, "brand": "Adidas", "image": "/images/products/adidas-shin-guards.jpg", "description": "Lightweight shin guards for enhanced protection." },
      { "id": "accessory-2", "name": "Nike Football Pump", "price": 999, "brand": "Nike", "image": "/images/products/nike-football-pump.jpg", "description": "Compact and efficient pump for inflating footballs." },
      { "id": "accessory-3", "name": "Puma Training Bibs (Pack of 5)", "price": 1499, "brand": "Puma", "image": "/images/products/puma-training-bibs.jpg", "description": "Set of training bibs for practice sessions." },
      { "id": "accessory-4", "name": "Mitre Aircell Carbon Slip-in Shin Pads", "price": 1599, "brand": "Mitre", "image": "/images/products/mitre-shin-pads.jpg", "description": "Comfortable and impact-resistant shin pads." }
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

