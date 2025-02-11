"use client"

import { useState, useEffect } from "react"
import { useCart } from "@/components/providers/cart-provider"
import { ProductCard } from "@/components/product-card"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, ShoppingBag, Trash2 } from "lucide-react"
import Link from "next/link"

// Define the product type
type Product = {
  id: string
  name: string
  price: number
  image: string
  brand: string
  description: string
}

// Sample products data (you should import this from your actual data source)
const products: Product[] = [
  {
    id: "tennis-1",
    name: "Wilson Pro Staff",
    price: 45000,
    image: "/tabletinus.jpg",
    brand: "Wilson",
    description: "Professional tennis racket",
  },
  {
    id: "boxing-mma-1",
    name: "Pro Boxing Gloves",
    price: 4500,
    image: "/boxing.jpg",
    brand: "FightMaster",
    description: "Professional boxing gloves",
  },
  {
    id: "tennis-1",
    name: "Wilson Pro Staff",
    price: 45000,
    brand: "Wilson",
    description: "Professional tennis racket used by top players",
    image: "/tabletinus.jpg",
     
    

  },
  {
    id: "tennis-2",
    name: "Babolat Pure Drive",
    price: 42000,
    brand: "Babolat",
    description: "Power and control combined in one racket",
    image: 
      "/tabletinus.jpg",
     
    

  },
  {
    id: "boxing-mma-1",
    name: "Wilson Pro Staff",
    price: 45000,
    description: "Professional tennis racket used by top players",
    image: 
      "/boxing.jpg",
      
    
    brand: "Wilson",

  },
  {
    id: "boxing-mma-2",
    name: "Babolat Pure Drive",
    price: 42000,
    description: "Professional tennis racket used by top players",
    image: 
      "/boxing.jpg",
      
    
    brand: "Babolat",

  },


  {
    id: "cricket-1",
    name: "Wilson Pro Staff",
    price: 45000,
    description: "Professional tennis racket used by top players",
    image: 
      "/cricket.jpg",
      
    
    brand: "Wilson",

  },
  {
    id: "cricket-2",
    name: "Babolat Pure Drive",
    price: 42000,
    description: "Professional tennis racket used by top players",
    image: 
      "/cricket.jpg",
      
    
    brand: "Babolat",

  },

  {
    id: "valleyballs-1",
    name: "Wilson Pro Staff",
    price: 45000,
    description: "Professional tennis racket used by top players",
    image: 
      "/valleyball.jpg",
      
    
    brand: "Wilson",

  },
  {
    id: "valleyballs-2",
    name: "Babolat Pure Drive",
    price: 42000,
    description: "Professional tennis racket used by top players",
    image: 
      "/valleyball.jpg",
      
    
    brand: "Babolat",

  },

  {
    id: "snookers-1",
    name: "Wilson Pro Staff",
    price: 45000,
    description: "Professional tennis racket used by top players",
    image: 
      "/snooker.jpg",
    
    brand: "Wilson",

  },
  {
    id: "snookers-2",
    name: "Babolat Pure Drive",
    price: 42000,
    description: "Professional tennis racket used by top players",
    image: 
      "/snooker.jpg",
    
    brand: "Babolat",

  },

  {
    id: "FootBall-1",
    name: "Wilson Pro Staff",
    price: 45000,
    description: "Professional tennis racket used by top players",
    image: 
      "/football.jpg",
     
    
    brand: "Wilson",

  },
  {
    id: "FootBall-2",
    name: "Babolat Pure Drive",
    price: 42000,
    description: "Professional tennis racket used by top players",
    image: 
      "/football.jpg",
   
    
    brand: "Babolat",

  },

  {
    id: "basketball-1",
    name: "Wilson NBA Ball",
    price: 8000,
    description: "Professional tennis racket used by top players",
    image: 
      "/basketball.jpg",
     
    
    brand: "Wilson",

  },

  {
    id: "foosballtable-1",
    name: "Wilson Pro Staff",
    price: 45000,
    description: "Professional tennis racket used by top players",
    image: 
      "/patti.jpg",
    
    
    brand: "Wilson",

  },
  {
    id: "pattitable-2",
    name: "Babolat Pure Drive",
    price: 42000,
    description: "Professional tennis racket used by top players",
    image: 
      "/patti.jpg",
    
    
    brand: "Babolat",

  },

  {
    id: "Hockey-1",
    name: "Wilson Pro Staff",
    price: 45000,
   description: "Professional tennis racket used by top players",
    image: 
      "/hockey.jpg",
     
    
    brand: "Wilson",

  },
  {
    id: "Hockey-2",
    name: "Babolat Pure Drive",
    price: 42000,
   description: "Professional tennis racket used by top players",
    image: 
      "/hockey.jpg",
     
    
    brand: "Babolat",

  },

  {
    id: "Squash-1",
    name: "Wilson Pro Staff",
    price: 45000,
    description: "Professional tennis racket used by top players",
    image: 
      "/squash.jpg",
    
    
    brand: "Wilson",

  },
  {
    id: "Squash-2",
    name: "Babolat Pure Drive",
    price: 42000,
    description: "Professional tennis racket used by top players",
    image: 
      "/squash.jpg",
      
    brand: "Babolat",

  },
  { id: "shuttle-1", name: "Yonex Mavis 350 Nylon Shuttlecock", price: 599, brand: "Yonex", image: "/images/products/yonex-mavis-350.jpg", description: "High-quality nylon shuttlecock for recreational play." },
      { id: "shuttle-2", name: "Li-Ning A+300 Feather Shuttlecock", price: 1299, brand: "Li-Ning", image: "/images/products/li-ning-a300.jpg", description: "Premium feather shuttlecock for competitive play." },
      { id: "shuttle-3", name: "Victor Gold Champion Feather Shuttlecock", price: 1599, brand: "Victor", image: "/images/products/victor-gold.jpg", description: "Tournament-grade shuttlecock with high durability." },
      { id: "shuttle-4", name: "Carlton GT1 Feather Shuttlecock", price: 1999, brand: "Carlton", image: "/images/products/carlton-gt1.jpg", description: "Professional-grade shuttlecock with excellent flight stability." },

      { id: "grip-1", name: "Yonex AC102EX Super Grap", price: 299, brand: "Yonex", image: "/images/products/yonex-ac102.jpg", description: "Absorbent and durable overgrip for enhanced performance." },
      { id: "grip-2", name: "Li-Ning GP 20 Overgrip", price: 349, brand: "Li-Ning", image: "/images/products/li-ning-gp20.jpg", description: "Comfortable and sweat-absorbent badminton grip." },
      { id: "grip-3", name: "Victor Fishbone Grip", price: 399, brand: "Victor", image: "/images/products/victor-fishbone.jpg", description: "High-tackiness grip for superior control." },
      { id: "grip-4", name: "Wilson Pro Overgrip", price: 450, brand: "Wilson", image: "/images/products/wilson-pro.jpg", description: "Premium grip used by professionals worldwide." },
      
      { id: "bag-1", name: "Yonex Pro Racquet Bag", price: 3499, brand: "Yonex", image: "/images/products/yonex-pro-bag.jpg", description: "Spacious racquet bag with thermal protection." },
      { id: "bag-2", name: "Li-Ning ABJS027 Backpack", price: 2999, brand: "Li-Ning", image: "/images/products/li-ning-backpack.jpg", description: "Stylish and durable badminton backpack." },
      { id: "bag-3", name: "Victor BR9608 Badminton Bag", price: 3799, brand: "Victor", image: "/images/products/victor-br9608.jpg", description: "Professional-grade bag with ample storage." },
      { id: "bag-4", name: "Carlton Tournament Bag", price: 2699, brand: "Carlton", image: "/images/products/carlton-bag.jpg", description: "Lightweight and practical tournament bag." },

      { id: "gutts-1", name: "Yonex BG65 Badminton String", price: 699, brand: "Yonex", image: "/images/products/yonex-bg65.jpg", description: "Durable and high-performance string for all players." },
      { id: "gutts-2", name: "Li-Ning No.1 Badminton String", price: 799, brand: "Li-Ning", image: "/images/products/li-ning-no1.jpg", description: "Thin gauge string for maximum repulsion power." },
      { id: "gutts-3", name: "Victor VS-850 Badminton String", price: 899, brand: "Victor", image: "/images/products/victor-vs850.jpg", description: "Premium string for professional-level control." },
      { id: "gutts-4", name: "Carlton Xelerate 67 Badminton String", price: 749, brand: "Carlton", image: "/images/products/carlton-x67.jpg", description: "Excellent durability with crisp hitting feel." },

      { id: "tape-1", name: "Yonex AC156 Edge Tape", price: 199, brand: "Yonex", image: "/images/products/yonex-ac156.jpg", description: "Protects racquet frame from scratches and damage." },
      { id: "tape-2", name: "Li-Ning Edge Guard Tape", price: 249, brand: "Li-Ning", image: "/images/products/li-ning-edge.jpg", description: "High-quality edge tape for long-lasting protection." },
      { id: "tape-3", name: "Victor VT-Edge Badminton Tape", price: 220, brand: "Victor", image: "/images/products/victor-edge.jpg", description: "Durable and easy-to-apply edge protection tape." },
      { id: "tape-4", name: "Wilson Pro Edge Tape", price: 275, brand: "Wilson", image: "/images/products/wilson-edge.jpg", description: "Professional-grade edge tape for serious players." }

  
]

export default function WishlistPage() {
  const { wishlist, toggleWishlist } = useCart()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Filter products that are in the wishlist
  const wishlistProducts = products.filter((product) => wishlist.includes(product.id))

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-8 py-40">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Your Wishlist ({wishlistProducts.length} items)</h1>
            <Heart className="w-8 h-8 text-red-500" />
          </div>
          <AnimatePresence>
            {wishlistProducts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center py-16"
              >
                <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-xl text-gray-600 mb-4">Your wishlist is empty.</p>
                <Link
                  href="/categories"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
                >
                  Explore Products
                </Link>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {wishlistProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative group">
                      <ProductCard id={product.id} name={product.name} price={product.price} image={product.image} />
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => toggleWishlist(product.id)}
                      >
                        <Trash2 className="w-5 h-5 text-red-500" />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

