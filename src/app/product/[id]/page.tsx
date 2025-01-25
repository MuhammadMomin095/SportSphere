"use client"

import { useState } from "react"
import Image from "next/image"
import { useParams } from "next/navigation"
import { Heart, Minus, Plus, ShoppingCart, Star } from "lucide-react"
import { useCart } from "@/components/providers/cart-provider"
import { useToast } from "@/hooks/use-toast"
import { motion, AnimatePresence } from "framer-motion"


const products = [
  {
    id: "tennis-1",
    name: "Wilson Pro Staff",
    price: 45000,
    brand: "Wilson",
    description: "Professional tennis racket used by top players",
    images: [
      "/tabletinus.jpg",
      "/1.jpg",
      "/tabletinus.jpg",
      "/1.jpg",
    ],
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "tennis-2",
    name: "Babolat Pure Drive",
    price: 42000,
    brand: "Babolat",
    description: "Power and control combined in one racket",
    images: [
      "/tabletinus.jpg",
      "/1.jpg",
      "/tabletinus.jpg",
      "/1.jpg",
    ],
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "boxing-mma-1",
    name: "Wilson Pro Staff",
    price: 45000,
    description: "Professional tennis racket used by top players",
    images: [
      "/boxing.jpg",
      "/1.jpg",
      "/boxing.jpg",
      "/1.jpg",
    ],
    brand: "Wilson",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "boxing-mma-2",
    name: "Babolat Pure Drive",
    price: 42000,
    description: "Professional tennis racket used by top players",
    images: [
      "/boxing.jpg",
      "/1.jpg",
      "/boxing.jpg",
      "/1.jpg",
    ],
    brand: "Babolat",
    rating: 4.8,
    reviews: 124,
  },


  {
    id: "cricket-1",
    name: "Wilson Pro Staff",
    price: 45000,
    description: "Professional tennis racket used by top players",
    images: [
      "/cricket.jpg",
      "/crickets.jpg",
      "/cricket.jpg",
      "/crickets.jpg",
    ],
    brand: "Wilson",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "cricket-2",
    name: "Babolat Pure Drive",
    price: 42000,
    description: "Professional tennis racket used by top players",
    images: [
      "/cricket.jpg",
      "/crickets.jpg",
      "/cricket.jpg",
      "/crickets.jpg",
    ],
    brand: "Babolat",
    rating: 4.8,
    reviews: 124,
  },

  {
    id: "valleyballs-1",
    name: "Wilson Pro Staff",
    price: 45000,
    description: "Professional tennis racket used by top players",
    images: [
      "/valleyball.jpg",
      "/1.jpg",
      "/valleyball.jpg",
      "/1.jpg",
    ],
    brand: "Wilson",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "valleyballs-2",
    name: "Babolat Pure Drive",
    price: 42000,
    description: "Professional tennis racket used by top players",
    images: [
      "/valleyball.jpg",
      "/1.jpg",
      "/valleyball.jpg",
      "/1.jpg",
    ],
    brand: "Babolat",
    rating: 4.8,
    reviews: 124,
  },

  {
    id: "snookers-1",
    name: "Wilson Pro Staff",
    price: 45000,
    description: "Professional tennis racket used by top players",
    images: [
      "/snooker.jpg",
      "/1.jpg",
      "/snooker.jpg",
      "/1.jpg",
    ],
    brand: "Wilson",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "snookers-2",
    name: "Babolat Pure Drive",
    price: 42000,
    description: "Professional tennis racket used by top players",
    images: [
      "/snooker.jpg",
      "/1.jpg",
      "/snooker.jpg",
      "/1.jpg",
    ],
    brand: "Babolat",
    rating: 4.8,
    reviews: 124,
  },

  {
    id: "FootBall-1",
    name: "Wilson Pro Staff",
    price: 45000,
    description: "Professional tennis racket used by top players",
    images: [
      "/football.jpg",
      "/1.jpg",
      "/fooballs.jpg",
      "/1.jpg",
    ],
    brand: "Wilson",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "FootBall-2",
    name: "Babolat Pure Drive",
    price: 42000,
    description: "Professional tennis racket used by top players",
    images: [
      "/football.jpg",
      "/footballs.jpg",
      "/football.jpg",
      "/footballs.jpg",
    ],
    brand: "Babolat",
    rating: 4.8,
    reviews: 124,
  },

  {
    id: "basketball-1",
    name: "Wilson NBA Ball",
    price: 8000,
    description: "Professional tennis racket used by top players",
    images: [
      "/basketball.jpg",
      "/1.jpg",
      "/basketball.jpg",
      "/1.jpg",
    ],
    brand: "Wilson",
    rating: 4.8,
    reviews: 124,
  },

  {
    id: "foosballtable-1",
    name: "Wilson Pro Staff",
    price: 45000,
    description: "Professional tennis racket used by top players",
    images: [
      "/patti.jpg",
      "/1.jpg",
      "/patti.jpg",
      "/1.jpg",
    ],
    brand: "Wilson",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "pattitable-2",
    name: "Babolat Pure Drive",
    price: 42000,
    description: "Professional tennis racket used by top players",
    images: [
      "/patti.jpg",
      "/1.jpg",
      "/patti.jpg",
      "/1.jpg",
    ],
    brand: "Babolat",
    rating: 4.8,
    reviews: 124,
  },

  {
    id: "Hockey-1",
    name: "Wilson Pro Staff",
    price: 45000,
   description: "Professional tennis racket used by top players",
    images: [
      "/hockey.jpg",
      "/1.jpg",
      "/hockey.jpg",
      "/1.jpg",
    ],
    brand: "Wilson",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "Hockey-2",
    name: "Babolat Pure Drive",
    price: 42000,
   description: "Professional tennis racket used by top players",
    images: [
      "/hockey.jpg",
      "/1.jpg",
      "/hockey.jpg",
      "/1.jpg",
    ],
    brand: "Babolat",
    rating: 4.8,
    reviews: 124,
  },

  {
    id: "Squash-1",
    name: "Wilson Pro Staff",
    price: 45000,
    description: "Professional tennis racket used by top players",
    images: [
      "/squash.jpg",
      "/1.jpg",
      "/squash.jpg",
      "/1.jpg",
    ],
    brand: "Wilson",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "Squash-2",
    name: "Babolat Pure Drive",
    price: 42000,
    description: "Professional tennis racket used by top players",
    images: [
      "/squash.jpg",
      "/1.jpg",
      "/squash.jpg",
      "/1.jpg",
    ],
    brand: "Babolat",
    rating: 4.8,
    reviews: 124,
  },

]




export default function ProductPage() {
  const params = useParams()
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const { addItem, toggleWishlist, wishlist } = useCart()
  const { toast } = useToast()

  const product = products.find((p) => p.id === params.id)

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Product Not Found</h1>
        <p className="text-gray-600">Sorry, we couldn't find the product you're looking for.</p>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: quantity,
    })
    toast({
      title: "Added to cart",
      description: `${quantity} ${product.name} has been added to your cart.`,
    })
  }

  const handleToggleWishlist = () => {
    toggleWishlist(product.id)
    toast({
      title: wishlist.includes(product.id) ? "Removed from wishlist" : "Added to wishlist",
      description: `${product.name} has been ${wishlist.includes(product.id) ? "removed from" : "added to"} your wishlist.`,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-indigo-100">
      <div className="container mx-auto px-12 py-52">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <motion.div
              className="relative aspect-square rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
              />
            </motion.div>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 aspect-square rounded-md overflow-hidden ${
                    selectedImage === index ? "ring-2 ring-blue-500" : ""
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">{product.name}</h1>
              <p className="text-xl text-gray-600 mb-4">{product.brand}</p>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="ml-2 text-gray-600">({product.reviews} reviews)</span>
              </div>
              <p className="text-3xl font-bold text-blue-600">Rs. {product.price.toLocaleString()}</p>
            </div>

            <p className="text-gray-700 leading-relaxed">{product.description}</p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <motion.button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border rounded-md hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Minus className="h-5 w-5 text-gray-600" />
                </motion.button>
                <span className="text-2xl font-medium w-12 text-center">{quantity}</span>
                <motion.button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border rounded-md hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Plus className="h-5 w-5 text-gray-600" />
                </motion.button>
              </div>

              <div className="flex gap-4">
                <motion.button
                  onClick={handleAddToCart}
                  className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </motion.button>
                <motion.button
                  onClick={handleToggleWishlist}
                  className="px-6 py-3 border rounded-md hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Heart
                    className={`h-5 w-5 ${wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-600"}`}
                  />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
  

