"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const carouselItems = [
  {
    title: "Explore the World of Sports",
    description: "Discover a wide range of sports equipment and accessories.",
    image: "/aa.jpg?height=600&width=1600",
    content: "From football to tennis, we've got you covered.",
  },
  {
    title: "Premium Billiard Tables",
    description: "Experience the finest quality billiard tables for your game room.",
    image: "/mm.jpg?height=600&width=1600",
    content: "Professional-grade tables for both amateurs and experts.",
  },
  {
    title: "Sports for Everyone",
    description: "Find the perfect gear for your favorite sport.",
    image: "/fun.jpg?height=600&width=1600",
    content: "Equipments for all ages and skill levels.",
  },
]

export default function SportsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + carouselItems.length) % carouselItems.length)
  }

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length)
  }

  return (
    <header className="relative h-screen w-full overflow-hidden">
      {carouselItems.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image src={item.image || "/placeholder.svg"} alt={item.title} layout="fill" objectFit="cover" priority />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white p-8 max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                {item.title}
              </h1>
              <p className="text-2xl md:text-3xl mb-8 font-light italic">{item.description}</p>
              <p className="text-xl md:text-2xl font-medium bg-white bg-opacity-20 p-4 rounded-lg shadow-lg">
                {item.content}
              </p>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125" : "bg-gray-400 hover:bg-gray-200"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 transition-all duration-300 rounded-full p-2"
        onClick={goToPrevSlide}
      >
        <ChevronLeft className="w-8 h-8 text-white" />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 transition-all duration-300 rounded-full p-2"
        onClick={goToNextSlide}
      >
        <ChevronRight className="w-8 h-8 text-white" />
      </button>
    </header>
  )
}

