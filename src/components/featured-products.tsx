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
    }, 3000)
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
    <section className="py-12">
      <div className="container mx-auto px-24">
        <h2 className="text-5xl font-bold text-center text-red-700 mb-8" style={{textShadow:"2px 2px 2px black"}}>Featured Products</h2>

        <div className="relative h-[500px] flex items-center justify-center">
          {/* Previous Product */}
          <div
            className="absolute border border-black left-0 top-1/2 -translate-y-1/2 transform -translate-x-1/4  w-[300px] h-[300px] transition-transform  duration-300 ease-in-out hover:scale-105 cursor-pointer"
            style={{ perspective: "1000px" }}
          >
            <div className="block w-72 h-72 opacity-100 scale-75 transform -rotate-y-30">
              <div className="relative w-72 h-72 rounded-full overflow-hidden">
                <Image
                  src={featuredProducts[prevIndex].image || "/placeholder.svg"}
                  alt={featuredProducts[prevIndex].name}
                  width={300}
                  height={300}
                  className="w-72 h-72 rounded-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Current Product */}
          <div className="relative border border-black  w-[400px] h-[400px] transition-transform transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
            <div className="block w-full h-full">
              <div className="relative w-full h-full rounded-full ">
                <Image
                  src={featuredProducts[currentIndex].image || "/placeholder.svg"}
                  alt={featuredProducts[currentIndex].name}
                  width={400}
                  height={400}
                  className="w-full h-full rounded-full object-contain transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white text-xl font-bold">{featuredProducts[currentIndex].name}</h3>
                  <p className="text-white/80">Rs. {featuredProducts[currentIndex].price}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Next Product */}
          <div
            className="absolute border border-black right-0 top-1/2 -translate-y-1/2 transform translate-x-1/4  w-[300px] h-[300px] transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer "
            style={{ perspective: "1000px" }}
          >
            <div className="block w-72 h-72 opacity-100 scale-75 transform rotate-y-30">
              <div className="relative w-72 rounded-full h-72  overflow-hidden">
                <Image
                  src={featuredProducts[nextIndex].image || "/placeholder.svg"}
                  alt={featuredProducts[nextIndex].name}
                  width={300}
                  height={300}
                  className="w-72 rounded-full h-72 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white/80 hover:text-white transition-colors"
            aria-label="Previous product"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white/80 hover:text-white transition-colors"
            aria-label="Next product"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {featuredProducts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-white/30"
              }`}
              aria-label={`Go to product ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

