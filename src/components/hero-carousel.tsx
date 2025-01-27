"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: "1",
    image: "/aa.jpg",
    title: "New Collection",
    subtitle: "Shoes | Balls | Racket",
    link: "/categories/tennis",
  },
  {
    id: "2",
    image: "/cc.jpg",
    title: "Available in Store",
    subtitle: "Latest Sports Equipment",
    link: "/new-arrivals",
  },
  {
    id: 3,
    image: "/fun.jpg",
    title: "SPECIAL OFFERS",
    subtitle: "Basket Ball | Footballs | ValleyBalls",
    link: "/special-offers",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative">
    
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              <Link href={slide.link}>
                <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh]">
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center px-4">
                    <div className="space-y-4">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                        {slide.title}
                      </h2>
                      <p className="text-sm sm:text-lg md:text-xl text-white">
                        {slide.subtitle}
                      </p>
                      <button className="bg-white text-black px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-md hover:bg-gray-100 transition">
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
     

      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 p-1 sm:p-2 rounded-full hover:bg-white"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 p-1 sm:p-2 rounded-full hover:bg-white"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full transition-colors ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
