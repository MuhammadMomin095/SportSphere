"use client"

import { useState, useRef } from "react"
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
  
  image: "/1.jpg",
  
  title: "Winter Sports",
  
  description: "Experience the thrill of snowboarding",
  
  },
  
  {
  
  id: 2,
  
  image: "/1.jpg",
  
  title: "Soccer",
  
  description: "Kick it like Griezmann",
  
  },
  
  {
  
  id: 3,
  
  image: "/1.jpg",
  
  title: "Rugby",
  
  description: "Master the game",
  
  },
  
  {
  
  id: 4,
  
  image: "/1.jpg",
  
  title: "Training",
  
  description: "Professional equipment",
  
  },
  
  {
  
  id: 5,
  
  image: "/1.jpg",
  
  title: "Fitness",
  
  description: "Stay active and healthy",
  
  },
  
  {
  
  id: 6,
  
  image: "/1.jpg",
  
  title: "Team Sports",
  
  description: "Join the community",
  
  },
  
  ]

  export default function HeroCarousel() {
    const [hoveredIds, setHoveredIds] = useState<number[]>([]); // Store multiple hovered IDs
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
  
    const nextSlide = () => {
      if (hoveredIds.length === 0) { // Only change slide if no image is hovered
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (carouselItems.length - 2));
      }
    };
  
    const prevSlide = () => {
      if (hoveredIds.length === 0) { // Only change slide if no image is hovered
        setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length - 2) % (carouselItems.length - 2));
      }
    };
  
    return (
      <div className="relative w-full  bg-white py-20">
        <div className="">
          <div className="relative">
            <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * (100/3)}%)` }}>
              {carouselItems.map((item, index) => {
                if (index < currentIndex || index >= currentIndex + 3) return null;
                const isHovered = hoveredIds.includes(item.id); // Check if item is hovered
                return (
                  <div key={item.id} className="w-1/3 px-0.5 flex-shrink-0">
                    <div
                      className="relative aspect-[4/5] overflow-hidden rounded-lg transition-all duration-300"
                      onMouseEnter={() => setHoveredIds([...hoveredIds, item.id])} // Add to hovered IDs
                      onMouseLeave={() => setHoveredIds(hoveredIds.filter(id => id !== item.id))} // Remove from hovered IDs
                      style={{
                        transform: isHovered ? "scale(1.2) translateZ(100px)" : "scale(1)",
                        zIndex: hoveredIds.indexOf(item.id) + 10, // Z-index based on hover order
                        opacity: hoveredIds.length === 0 || isHovered ? 1 : 0.7
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
  
            {/* ... navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md z-30 hover:bg-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md z-30 hover:bg-white"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    );
  }