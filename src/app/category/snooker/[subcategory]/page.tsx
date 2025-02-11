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
  "snooker-tables": {
    id: "snooker-tables",
    name: "Snooker Tables",
    products: [
      { "id": "snooker-table-1", "name": "Riley Aristocrat Snooker Table", "price": 199999, "brand": "Riley", "image": "/images/products/riley-aristocrat.jpg", "description": "Professional-grade full-size snooker table." },
      { "id": "snooker-table-2", "name": "Strachan Supreme Snooker Table", "price": 149999, "brand": "Strachan", "image": "/images/products/strachan-supreme.jpg", "description": "Tournament standard snooker table with high-quality slate bed." },
      { "id": "snooker-table-3", "name": "Legends Club Snooker Table", "price": 99999, "brand": "Legends", "image": "/images/products/legends-club.jpg", "description": "High-durability snooker table for clubs and home use." },
      { "id": "snooker-table-4", "name": "Home Edition Snooker Table", "price": 59999, "brand": "HomeCue", "image": "/images/products/home-edition.jpg", "description": "Compact snooker table perfect for home entertainment." }
    ],
  },
  "snooker-sticks": {
    id: "snooker-sticks",
    name: "Snooker Sticks",
    products: [
      { "id": "snooker-stick-1", "name": "Peradon 3/4 Snooker Cue", "price": 8999, "brand": "Peradon", "image": "/images/products/peradon-cue.jpg", "description": "Premium ash wood snooker cue for professionals." },
      { "id": "snooker-stick-2", "name": "John Parris Champion Cue", "price": 12999, "brand": "John Parris", "image": "/images/products/parris-champion.jpg", "description": "Handmade snooker cue used by world champions." },
      { "id": "snooker-stick-3", "name": "Cue Craft Triumph Snooker Stick", "price": 7499, "brand": "Cue Craft", "image": "/images/products/cuecraft-triumph.jpg", "description": "Mid-range cue for serious snooker players." },
      { "id": "snooker-stick-4", "name": "Riley Signature Snooker Cue", "price": 5999, "brand": "Riley", "image": "/images/products/riley-signature.jpg", "description": "Quality snooker cue designed for club-level play." }
    ],
  },
  "snooker-balls": {
    id: "snooker-balls",
    name: "Snooker Balls",
    products: [
      { "id": "snooker-balls-1", "name": "Aramith Tournament Snooker Balls", "price": 14999, "brand": "Aramith", "image": "/images/products/aramith-tournament.jpg", "description": "Professional-grade snooker balls with high durability." },
      { "id": "snooker-balls-2", "name": "Strachan Premium Snooker Ball Set", "price": 9999, "brand": "Strachan", "image": "/images/products/strachan-balls.jpg", "description": "High-quality snooker balls for competitive play." },
      { "id": "snooker-balls-3", "name": "Legend Standard Snooker Balls", "price": 6999, "brand": "Legend", "image": "/images/products/legend-standard.jpg", "description": "Club-quality snooker balls for smooth play." },
      { "id": "snooker-balls-4", "name": "Home Edition Snooker Balls", "price": 3999, "brand": "HomeCue", "image": "/images/products/home-balls.jpg", "description": "Affordable snooker balls set for casual play." }
    ],
  },
  "snooker-gloves": {
    id: "snooker-gloves",
    name: "Snooker Gloves",
    products: [
      { "id": "snooker-gloves-1", "name": "Kamui Billiard Glove", "price": 1999, "brand": "Kamui", "image": "/images/products/kamui-glove.jpg", "description": "Premium snooker glove for enhanced cue control." },
      { "id": "snooker-gloves-2", "name": "Molinaro Snooker Glove", "price": 1599, "brand": "Molinaro", "image": "/images/products/molinaro-glove.jpg", "description": "Soft fabric glove designed for smooth cue action." },
      { "id": "snooker-gloves-3", "name": "Riley Precision Snooker Glove", "price": 1299, "brand": "Riley", "image": "/images/products/riley-glove.jpg", "description": "Breathable snooker glove for professional play." },
      { "id": "snooker-gloves-4", "name": "Longoni Professional Billiard Glove", "price": 1799, "brand": "Longoni", "image": "/images/products/longoni-glove.jpg", "description": "Ultra-smooth glove with anti-slip grip." }
    ],
  },
  "snooker-chalk": {
    id: "snooker-chalk",
    name: "Snooker Chalk",
    products: [
      { "id": "snooker-chalk-1", "name": "Master Snooker Chalk (Box of 12)", "price": 499, "brand": "Master", "image": "/images/products/master-chalk.jpg", "description": "High-quality chalk for consistent cue grip." },
      { "id": "snooker-chalk-2", "name": "Taom Pyro Snooker Chalk", "price": 1999, "brand": "Taom", "image": "/images/products/taom-pyro.jpg", "description": "Premium snooker chalk for reduced miscues." },
      { "id": "snooker-chalk-3", "name": "Blue Diamond Chalk (2 Pieces)", "price": 999, "brand": "Blue Diamond", "image": "/images/products/blue-diamond.jpg", "description": "Smooth and durable snooker chalk." },
      { "id": "snooker-chalk-4", "name": "Triangle Snooker Chalk (Pack of 6)", "price": 799, "brand": "Triangle", "image": "/images/products/triangle-chalk.jpg", "description": "Reliable snooker chalk for amateur and pro players." }
    ],
  },
  "chalk-covers": {
    id: "chalk-covers",
    name: "Chalk Covers",
    products: [
      { "id": "chalk-cover-1", "name": "Kamui Magnetic Chalk Cover", "price": 1299, "brand": "Kamui", "image": "/images/products/kamui-chalk-cover.jpg", "description": "Magnetic chalk cover to prevent mess and waste." },
      { "id": "chalk-cover-2", "name": "Longoni Snooker Chalk Holder", "price": 999, "brand": "Longoni", "image": "/images/products/longoni-chalk-cover.jpg", "description": "Durable snooker chalk holder with sleek design." },
      { "id": "chalk-cover-3", "name": "Riley Chalk Case", "price": 799, "brand": "Riley", "image": "/images/products/riley-chalk-cover.jpg", "description": "Compact chalk case for safe storage." },
      { "id": "chalk-cover-4", "name": "Leather Chalk Holder", "price": 599, "brand": "Generic", "image": "/images/products/leather-chalk-cover.jpg", "description": "Elegant leather chalk holder for snooker lovers." }
    ],
  },
  "snooker-cue-tips": {
    id: "snooker-cue-tips",
    name: "Snooker Cue Tips",
    products: [
      { "id": "cue-tip-1", "name": "Elk Master Cue Tips (Pack of 3)", "price": 499, "brand": "Elk Master", "image": "/images/products/elk-master-cue-tip.jpg", "description": "High-quality leather cue tips for enhanced grip." },
      { "id": "cue-tip-2", "name": "Kamui Black Cue Tip", "price": 1299, "brand": "Kamui", "image": "/images/products/kamui-black-tip.jpg", "description": "Professional-grade cue tip for precision shots." },
      { "id": "cue-tip-3", "name": "Triangle Pro Cue Tips (Pack of 5)", "price": 899, "brand": "Triangle", "image": "/images/products/triangle-cue-tip.jpg", "description": "Durable and consistent cue tips for smooth play." },
      { "id": "cue-tip-4", "name": "Blue Diamond Cue Tips", "price": 999, "brand": "Blue Diamond", "image": "/images/products/blue-diamond-tip.jpg", "description": "Premium cue tips for better ball control." }
    ],
  },
  "snooker-table-cover": {
    id: "snooker-table-cover",
    name: "Snooker Table Cover",
    products: [
      { "id": "table-cover-1", "name": "Heavy-Duty Waterproof Snooker Table Cover", "price": 2999, "brand": "Legends", "image": "/images/products/heavy-duty-cover.jpg", "description": "Protects your snooker table from dust and moisture." },
      { "id": "table-cover-2", "name": "PVC Snooker Table Cover", "price": 1999, "brand": "HomeCue", "image": "/images/products/pvc-table-cover.jpg", "description": "Durable and lightweight snooker table cover." },
      { "id": "table-cover-3", "name": "Strachan Professional Table Cover", "price": 3999, "brand": "Strachan", "image": "/images/products/strachan-cover.jpg", "description": "High-quality cover for professional snooker tables." },
      { "id": "table-cover-4", "name": "Custom-Fit Snooker Table Cover", "price": 3499, "brand": "CustomGear", "image": "/images/products/custom-fit-cover.jpg", "description": "Tailored fit snooker table cover for full protection." }
    ],
  },
  "light-hood": {
    id: "light-hood",
    name: "Light Hood",
    products: [
      { "id": "light-hood-1", "name": "Professional Snooker Table Light Hood", "price": 14999, "brand": "Legends", "image": "/images/products/pro-light-hood.jpg", "description": "Bright and evenly distributed lighting for snooker tables." },
      { "id": "light-hood-2", "name": "LED Snooker Table Lighting System", "price": 18999, "brand": "Strachan", "image": "/images/products/led-light-hood.jpg", "description": "Energy-efficient LED lighting for professional tables." },
      { "id": "light-hood-3", "name": "Riley Adjustable Light Hood", "price": 12999, "brand": "Riley", "image": "/images/products/riley-light-hood.jpg", "description": "Adjustable lighting hood for better visibility." },
      { "id": "light-hood-4", "name": "Classic Wooden Snooker Light Hood", "price": 15999, "brand": "ClassicCue", "image": "/images/products/wooden-light-hood.jpg", "description": "Traditional wooden snooker table light hood for a premium look." }
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

