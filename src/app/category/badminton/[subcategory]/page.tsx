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
  shuttles: {
    id: "shuttles",
    name: "Shuttles",
    products: [
      { id: "shuttle-1", name: "Yonex Mavis 350 Nylon Shuttlecock", price: 599, brand: "Yonex", image: "/images/products/yonex-mavis-350.jpg", description: "High-quality nylon shuttlecock for recreational play." },
      { id: "shuttle-2", name: "Li-Ning A+300 Feather Shuttlecock", price: 1299, brand: "Li-Ning", image: "/images/products/li-ning-a300.jpg", description: "Premium feather shuttlecock for competitive play." },
      { id: "shuttle-3", name: "Victor Gold Champion Feather Shuttlecock", price: 1599, brand: "Victor", image: "/images/products/victor-gold.jpg", description: "Tournament-grade shuttlecock with high durability." },
      { id: "shuttle-4", name: "Carlton GT1 Feather Shuttlecock", price: 1999, brand: "Carlton", image: "/images/products/carlton-gt1.jpg", description: "Professional-grade shuttlecock with excellent flight stability." }
    ],
  },
  "badminton-grips": {
    id: "badminton-grips",
    name: "Badminton Grips",
    products: [
      { id: "grip-1", name: "Yonex AC102EX Super Grap", price: 299, brand: "Yonex", image: "/images/products/yonex-ac102.jpg", description: "Absorbent and durable overgrip for enhanced performance." },
      { id: "grip-2", name: "Li-Ning GP 20 Overgrip", price: 349, brand: "Li-Ning", image: "/images/products/li-ning-gp20.jpg", description: "Comfortable and sweat-absorbent badminton grip." },
      { id: "grip-3", name: "Victor Fishbone Grip", price: 399, brand: "Victor", image: "/images/products/victor-fishbone.jpg", description: "High-tackiness grip for superior control." },
      { id: "grip-4", name: "Wilson Pro Overgrip", price: 450, brand: "Wilson", image: "/images/products/wilson-pro.jpg", description: "Premium grip used by professionals worldwide." }
    ],
  },
  "badminton-bags-covers": {
    id: "badminton-bags-covers",
    name: "Badminton Bags Covers",
    products: [
      { id: "bag-1", name: "Yonex Pro Racquet Bag", price: 3499, brand: "Yonex", image: "/images/products/yonex-pro-bag.jpg", description: "Spacious racquet bag with thermal protection." },
      { id: "bag-2", name: "Li-Ning ABJS027 Backpack", price: 2999, brand: "Li-Ning", image: "/images/products/li-ning-backpack.jpg", description: "Stylish and durable badminton backpack." },
      { id: "bag-3", name: "Victor BR9608 Badminton Bag", price: 3799, brand: "Victor", image: "/images/products/victor-br9608.jpg", description: "Professional-grade bag with ample storage." },
      { id: "bag-4", name: "Carlton Tournament Bag", price: 2699, brand: "Carlton", image: "/images/products/carlton-bag.jpg", description: "Lightweight and practical tournament bag." }
    ],
  },
  "badminton-gutts": {
    id: "badminton-gutts",
    name: "Badminton Gutts",
    products: [
      { id: "gutts-1", name: "Yonex BG65 Badminton String", price: 699, brand: "Yonex", image: "/images/products/yonex-bg65.jpg", description: "Durable and high-performance string for all players." },
      { id: "gutts-2", name: "Li-Ning No.1 Badminton String", price: 799, brand: "Li-Ning", image: "/images/products/li-ning-no1.jpg", description: "Thin gauge string for maximum repulsion power." },
      { id: "gutts-3", name: "Victor VS-850 Badminton String", price: 899, brand: "Victor", image: "/images/products/victor-vs850.jpg", description: "Premium string for professional-level control." },
      { id: "gutts-4", name: "Carlton Xelerate 67 Badminton String", price: 749, brand: "Carlton", image: "/images/products/carlton-x67.jpg", description: "Excellent durability with crisp hitting feel." }
    ],
  },
  "badminton-edge-tape": {
    id: "badminton-edge-tape",
    name: "Badminton Edge Tape",
    products: [
      { id: "tape-1", name: "Yonex AC156 Edge Tape", price: 199, brand: "Yonex", image: "/images/products/yonex-ac156.jpg", description: "Protects racquet frame from scratches and damage." },
      { id: "tape-2", name: "Li-Ning Edge Guard Tape", price: 249, brand: "Li-Ning", image: "/images/products/li-ning-edge.jpg", description: "High-quality edge tape for long-lasting protection." },
      { id: "tape-3", name: "Victor VT-Edge Badminton Tape", price: 220, brand: "Victor", image: "/images/products/victor-edge.jpg", description: "Durable and easy-to-apply edge protection tape." },
      { id: "tape-4", name: "Wilson Pro Edge Tape", price: 275, brand: "Wilson", image: "/images/products/wilson-edge.jpg", description: "Professional-grade edge tape for serious players." }
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

