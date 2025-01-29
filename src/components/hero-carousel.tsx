"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselItem {
  id: number
  image: string
  title: string
  description: string
}

const carouselItems: CarouselItem[] = [
  {
    id: 1,
    image: "/table/1.jpg",
    title: "Winter Sports",
    description: "Experience the thrill of snowboarding",
  },
  {
    id: 2,
    image: "/table/2.jpg",
    title: "Soccer",
    description: "Kick it like Griezmann",
  },
  {
    id: 3,
    image: "/table/3.jpg",
    title: "Rugby",
    description: "Master the game",
  },
  {
    id: 4,
    image: "/table/4.jpg",
    title: "Training",
    description: "Professional equipment",
  },
  {
    id: 5,
    image: "/table/5.jpg",
    title: "Fitness",
    description: "Stay active and healthy",
  },
  {
    id: 6,
    image: "/table/6.jpg",
    title: "Team Sports",
    description: "Join the community",
  },
]

export default function HeroCarousel() {
  const [hoveredIds, setHoveredIds] = useState<number[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length)
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        prevSlide()
      } else if (event.key === "ArrowRight") {
        nextSlide()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [nextSlide, prevSlide]) // Added nextSlide and prevSlide to dependencies

  return (
    <div className="relative w-full bg-white py-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/3 w-2/3 h-full bg-gray-400 opacity-50 skew-x-12"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative">
        <div className="flex justify-center">
       <h2
    className="text-4xl text-black font-extrabold uppercase tracking-widest mb-4 w-[480px] h-[87px] flex justify-center items-center bg-transparent border-4 rounded-full border-gray-900"
    style={{
      boxShadow: "10px 10px 20px #1F2937",
      textShadow: "2px 4px 2px #c1c3c6",
    }}
  >
    FEATURED PRODUCTS
  </h2>
</div>
          <div
            className="flex transition-transform duration-300 ease-in-out mt-8"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {carouselItems.map((item, index) => {
              const isHovered = hoveredIds.includes(item.id)
              const isVisible = index >= currentIndex - 1 && index < currentIndex + 4
              return (
                <div
                  key={item.id}
                  className={`w-1/3 px-2 flex-shrink-0 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
                >
                  <div
                    className="relative aspect-[4/5] overflow-hidden rounded-lg transition-all duration-300"
                    onMouseEnter={() => setHoveredIds([...hoveredIds, item.id])}
                    onMouseLeave={() => setHoveredIds(hoveredIds.filter((id) => id !== item.id))}
                    style={{
                      transform: isHovered ? "scale(1.15)" : "scale(1)",
                      zIndex: isHovered ? 20 : 10,
                    }}
                  >
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${
                        isHovered ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                        <p className="text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md z-30 hover:bg-white"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md z-30 hover:bg-white"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}

