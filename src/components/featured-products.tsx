"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ShoppingCart, Heart } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/providers/cart-provider"

const featuredProducts = [
  {
    id: "1",
    name: "Pro Cricket Bat",
    image: "/cricket.jpg",
    description: "Professional-grade cricket bat made from premium English willow.",
    rating: 4.8,
    reviews: 120,
  },
  {
    id: "2",
    name: "Elite Tennis Racket",
    image: "/tabletinus.jpg",
    description: "Lightweight and powerful tennis racket for advanced players.",
    rating: 4.6,
    reviews: 95,
  },
  {
    id: "3",
    name: "Official Match Football",
    image: "/footballs.jpg",
    description: "FIFA-approved match ball with superior air retention and shape.",
    rating: 4.9,
    reviews: 200,
  },
  {
    id: "4",
    name: "Pro Basketball",
    image: "/basketballs.jpg",
    description: "Official size and weight basketball with excellent grip and control.",
    rating: 4.7,
    reviews: 150,
  },
  {
    id: "5",
    name: "Premium Boxing Gloves",
    image: "/boxing.jpg",
    description: "Professional boxing gloves with superior padding and wrist support.",
    rating: 4.8,
    reviews: 80,
  },
]

export function FeaturedProducts() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)


  const moveToNextSlide = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex === featuredProducts.length - 1 ? 0 : prevIndex + 1))
  }, [])

  const moveToPrevSlide = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? featuredProducts.length - 1 : prevIndex - 1))
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      moveToNextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [moveToNextSlide])

  const getVisibleProducts = () => {
    const visibleIndices = [
      (currentIndex - 1 + featuredProducts.length) % featuredProducts.length,
      currentIndex,
      (currentIndex + 1) % featuredProducts.length,
    ]
    return visibleIndices.map((index) => featuredProducts[index])
  }

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-5xl font-bold text-center text-red-500 mb-12" style={{textShadow:"2px 2px 2px white"}}>Featured Products</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex justify-center items-stretch"
              initial={false}
              animate={{ x: `${-direction * 33.33}%` }}
              transition={{ duration: 0.5 }}
            >
              <AnimatePresence initial={false}>
                {getVisibleProducts().map((product, index) => (
                  <motion.div
                    key={product.id}
                    className={`w-full sm:w-80 md:w-96 px-4 transition-all duration-300  ${
                      index === 1 ? "scale-105 z-10" : "scale-95 opacity-80"
                    }`} 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: index === 1 ? 1.05 : 0.95 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    style={{
                      boxShadow: "10px 40px 40px rgba(255, 69, 0, 0.5)", 
                    }}
                  >
                    <div className="bg-gradient-to-br from-[#06141B] to-black rounded-xl shadow-lg overflow-hidden h-full flex flex-col">
                      <div className="relative h-64 sm:h-72" >
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          layout="fill"
                          objectFit="cover"
                        />
                        <div className="absolute top-2 right-2 bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-sm font-semibold">
                          ★ {product.rating}
                        </div>
                      </div>
                      <div className="p-6 flex-grow flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                          <p className="text-gray-600 mb-4">{product.description}</p>
                          <p className="text-sm text-gray-500">{product.reviews} reviews</p>
                        </div>
                        
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
          <button
            onClick={moveToPrevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 shadow-lg"
            aria-label="Previous product"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={moveToNextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 shadow-lg"
            aria-label="Next product"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </div>
    </section>
  )
}

