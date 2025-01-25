"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const featuredProducts = [
  {
    id: "1",
    name: "Cricket Bat",
    price: 2999,
    image: "/cricket.jpg",
  },
  {
    id: "2",
    name: "Tennis Racket",
    price: 1999,
    image: "/tabletinus.jpg",
  },
  {
    id: "3",
    name: "Football",
    price: 999,
    image: "/footballs.jpg",
  },
  {
    id: "4",
    name: "Basketball",
    price: 1499,
    image: "/basketballs.jpg",
  },
  {
    id: "5",
    name: "Boxing Gloves",
    price: 2499,
    image: "/boxing.jpg",
  },
]

export function FeaturedProducts() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredProducts.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const prevIndex = (currentIndex - 1 + featuredProducts.length) % featuredProducts.length
  const nextIndex = (currentIndex + 1) % featuredProducts.length

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredProducts.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + featuredProducts.length) % featuredProducts.length)
  }

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-red-500 mb-12">Featured Products</h2>

        <div className="relative h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
          {/* Previous Product */}
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 transform -translate-x-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 transition-all duration-300 ease-in-out opacity-60 hover:opacity-80 cursor-pointer"
            onClick={goToPrev}
          >
            <div className="relative w-full h-full bg-gradient-to-br from-[#06141B] to-black overflow-hidden shadow-lg transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <Image
                src={featuredProducts[prevIndex].image || "/placeholder.svg"}
                alt={featuredProducts[prevIndex].name}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>

          {/* Current Product */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 transition-all duration-300 ease-in-out z-10">
            <div className="relative w-full h-full  bg-gradient-to-br from-[#06141B] to-black overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <Image
                src={featuredProducts[currentIndex].image || "/placeholder.svg"}
                alt={featuredProducts[currentIndex].name}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl sm:text-2xl font-bold mb-1">{featuredProducts[currentIndex].name}</h3>
                <p className="text-white/90 text-lg sm:text-xl">
                  ₹{featuredProducts[currentIndex].price.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {/* Next Product */}
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 transform translate-x-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 transition-all duration-300 ease-in-out opacity-60 hover:opacity-80 cursor-pointer"
            onClick={goToNext}
          >
            <div className="relative w-full h-full bg-gradient-to-br from-[#06141B] to-black overflow-hidden shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-300">
              <Image
                src={featuredProducts[nextIndex].image || "/placeholder.svg"}
                alt={featuredProducts[nextIndex].name}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors duration-200"
            aria-label="Previous product"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors duration-200"
            aria-label="Next product"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {featuredProducts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to product ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

