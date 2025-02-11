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
  "squash-rackets": {
    id: "squash-rackets",
    name: "Squash Rackets",
    products: [
      { "id": "squash-racket-1", "name": "Dunlop Hyperfibre XT Squash Racket", "price": 8999, "brand": "Dunlop", "image": "/images/products/dunlop-hyperfibre-racket.jpg", "description": "Lightweight and powerful squash racket for professionals." },
      { "id": "squash-racket-2", "name": "Head Graphene 360 Speed Racket", "price": 10999, "brand": "Head", "image": "/images/products/head-graphene-racket.jpg", "description": "Graphene-enhanced racket for excellent control and speed." },
      { "id": "squash-racket-3", "name": "Tecnifibre Carboflex 125 X-Speed", "price": 11999, "brand": "Tecnifibre", "image": "/images/products/tecnifibre-carboflex.jpg", "description": "Professional-grade squash racket with a balanced frame." },
      { "id": "squash-racket-4", "name": "Wilson Ultra Countervail Squash Racket", "price": 9999, "brand": "Wilson", "image": "/images/products/wilson-ultra-countervail.jpg", "description": "Countervail technology for reduced vibrations and power shots." }
    ],
  },
  "squash-balls": {
    id: "squash-balls",
    name: "Squash Balls",
    products: [
      { "id": "squash-ball-1", "name": "Dunlop Pro Double Yellow Dot Squash Ball", "price": 799, "brand": "Dunlop", "image": "/images/products/dunlop-pro-ball.jpg", "description": "Official tournament squash ball with double yellow dot." },
      { "id": "squash-ball-2", "name": "Head Prime Squash Ball", "price": 699, "brand": "Head", "image": "/images/products/head-prime-ball.jpg", "description": "Premium quality squash ball for fast-paced games." },
      { "id": "squash-ball-3", "name": "Tecnifibre Soft Squash Ball", "price": 599, "brand": "Tecnifibre", "image": "/images/products/tecnifibre-soft-ball.jpg", "description": "Soft touch ball for beginners and casual players." },
      { "id": "squash-ball-4", "name": "Wilson Pro Squash Ball", "price": 899, "brand": "Wilson", "image": "/images/products/wilson-pro-ball.jpg", "description": "Durable squash ball with consistent bounce and performance." }
    ],
  },
  "squash-grips": {
    id: "squash-grips",
    name: "Squash Grips",
    products: [
      { "id": "squash-grip-1", "name": "Karakal PU Super Grip", "price": 499, "brand": "Karakal", "image": "/images/products/karakal-pu-grip.jpg", "description": "Super absorbent grip for comfortable and firm hold." },
      { "id": "squash-grip-2", "name": "Dunlop Viper Dry Grip", "price": 599, "brand": "Dunlop", "image": "/images/products/dunlop-viper-grip.jpg", "description": "Textured grip for improved sweat absorption and durability." },
      { "id": "squash-grip-3", "name": "Head Hydrosorb Comfort Grip", "price": 699, "brand": "Head", "image": "/images/products/head-hydrosorb-grip.jpg", "description": "Cushioned grip for enhanced comfort and control." },
      { "id": "squash-grip-4", "name": "Wilson Cushion Pro Grip", "price": 499, "brand": "Wilson", "image": "/images/products/wilson-cushion-grip.jpg", "description": "Soft feel grip with excellent tackiness and durability." }
    ],
  },
  "squash-gutts": {
    id: "squash-gutts",
    name: "Squash Gutts",
    products: [
      { "id": "squash-gutt-1", "name": "Tecnifibre 305 Squash String", "price": 1199, "brand": "Tecnifibre", "image": "/images/products/tecnifibre-305-string.jpg", "description": "High-performance squash string with excellent control." },
      { "id": "squash-gutt-2", "name": "Ashaway SuperNick XL Squash String", "price": 1099, "brand": "Ashaway", "image": "/images/products/ashaway-supernick.jpg", "description": "Textured string for extra grip and spin on the ball." },
      { "id": "squash-gutt-3", "name": "Dunlop Precision Squash String", "price": 999, "brand": "Dunlop", "image": "/images/products/dunlop-precision-string.jpg", "description": "Durable and high-control string for all playing levels." },
      { "id": "squash-gutt-4", "name": "Wilson NXT Power Squash String", "price": 1299, "brand": "Wilson", "image": "/images/products/wilson-nxt-string.jpg", "description": "Premium squash string for powerful and accurate shots." }
    ],
  },
  "dampner": {
    id: "dampner",
    name: "Dampner",
    products: [
      { "id": "dampner-1", "name": "Head Smartsorb Vibration Dampener", "price": 499, "brand": "Head", "image": "/images/products/head-smartsorb.jpg", "description": "High-quality dampener to reduce racket vibrations." },
      { "id": "dampner-2", "name": "Wilson Shock Shield Dampener", "price": 399, "brand": "Wilson", "image": "/images/products/wilson-shock-shield.jpg", "description": "Reduces shock and improves comfort during play." },
      { "id": "dampner-3", "name": "Tecnifibre Vibra Clip Dampener", "price": 599, "brand": "Tecnifibre", "image": "/images/products/tecnifibre-vibra-clip.jpg", "description": "Lightweight vibration dampener for superior feel." },
      { "id": "dampner-4", "name": "Dunlop Sport Vibration Dampener", "price": 499, "brand": "Dunlop", "image": "/images/products/dunlop-vibration-dampener.jpg", "description": "Effective dampener to reduce racket string noise." }
    ],
  },
  "squash-accessories": {
    id: "squash-accessories",
    name: "Squash Accessories",
    products: [
      { "id": "squash-accessory-1", "name": "Dunlop Squash Kit Bag", "price": 3499, "brand": "Dunlop", "image": "/images/products/dunlop-kit-bag.jpg", "description": "Spacious squash bag to carry all essentials." },
      { "id": "squash-accessory-2", "name": "Head Protective Eyewear", "price": 2499, "brand": "Head", "image": "/images/products/head-protective-eyewear.jpg", "description": "Protective eyewear for safety during matches." },
      { "id": "squash-accessory-3", "name": "Wilson Wristbands & Headband Set", "price": 999, "brand": "Wilson", "image": "/images/products/wilson-wristbands.jpg", "description": "Sweat-absorbing wristbands and headband for comfort." },
      { "id": "squash-accessory-4", "name": "Tecnifibre Squash Ball Carry Case", "price": 799, "brand": "Tecnifibre", "image": "/images/products/tecnifibre-ball-case.jpg", "description": "Compact carry case for squash balls and accessories." }
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

