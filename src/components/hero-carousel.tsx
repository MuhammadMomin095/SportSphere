"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: "1",
    image:
      "/aa.jpg",
    title: "New Collection",
    subtitle: "Shoes | Balls | Racket",
    link: "/categories/tennis",
  },
  {
    id: "2",
    image:
      "/cc.jpg",
    title: "Special Offers",
    subtitle: "Latest Sports Equipment",
    link: "/new-arrivals",
  },
  {
    id: 3,
    image:
      "/fun.jpg",
    title: "SPECIAL OFFERS",
    subtitle: "Up to 50% Off",
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
    <div className="relative bg-gradient-to-b from-[#06141B] via-[#4A5C6A] to-[#06141B]">
      <div className="overflow-hidden"style={{boxShadow:"10px 28px 20px #06141B, -10px -28px 20px #06141B"}}>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              <Link href={slide.link}>
                <div className="relative aspect-[21/9]">
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center">
                    <div className="space-y-4">
                      <h2 className="text-4xl font-bold text-white">{slide.title}</h2>
                      <p className="text-xl text-white">{slide.subtitle}</p>
                      <button className="bg-white text-black px-8 py-3 rounded-md hover:bg-gray-100">Shop Now</button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full">
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full">
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  )
}



