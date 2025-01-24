"use client"

import { useState } from "react"
import Image from "next/image"
import { useParams } from "next/navigation"
import { Heart, Minus, Plus, ShoppingCart } from "lucide-react"
import { useCart } from "@/components/providers/cart-provider"
import { useToast } from "@/hooks/use-toast"

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
      return <div>Product not found</div>
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
      <div className="container bg-gradient-to-r via-[#CCD0CF] from-[#9BA8AB] to-[#4A5C6A] mx-auto px-20 py-40">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="relative aspect-square border rounded-lg">
              <Image
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="flex gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 aspect-square border rounded-lg ${
                    selectedImage === index ? "border-blue-500" : ""
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-contain p-2"
                  />
                </button>
              ))}
            </div>
          </div>
  
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <p className="text-gray-600">{product.brand}</p>
            </div>
  
            <p className="text-2xl font-bold">Rs. {product.price.toLocaleString()}</p>
  
            <p className="text-gray-600">{product.description}</p>
  
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 border rounded-md">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-xl font-medium w-12 text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-2 border rounded-md">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
  
              <div className="flex gap-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-black text-white px-6 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </button>
                <button
                  onClick={handleToggleWishlist}
                  className="px-6 py-3 border rounded-md hover:bg-gray-100 transition-colors"
                >
                  <Heart className={`h-5 w-5 ${wishlist.includes(product.id) ? "fill-red-500" : ""}`} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  

