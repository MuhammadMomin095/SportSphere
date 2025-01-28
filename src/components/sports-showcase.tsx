"use client"

import { useState, useEffect } from "react"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Sport {
  id: string
  name: string
  images: string[]
  link: string
}

const sports: Sport[] = [
  {
    id: "winter-sports",
    name: "Winter Sports",
    images: [
      "/1.jpg",
      "/2.jpg?height=800&width=1200",
      "/2.jpg?height=800&width=1200",
    ],
    link: "/sports/winter-sports",
  },
  {
    id: "fitness",
    name: "Fitness & Gym",
    images: [
      "/2.jpg?height=800&width=1200",
      "/1.jpg",
      "/2.jpg?height=800&width=1200",
    ],
    link: "/sports/fitness",
  },
  {
    id: "cycling",
    name: "Cycling",
    images: [
      "/2.jpg?height=800&width=1200",
      "/2.jpg?height=800&width=1200",
      "/1.jpg",
    ],
    link: "/sports/cycling",
  },
  {
    id: "running",
    name: "Running",
    images: [
      "/1.jpg",
      "/2.jpg?height=800&width=1200",
      "/2.jpg?height=800&width=1200",
    ],
    link: "/sports/running",
  },
  {
    id: "football",
    name: "Football",
    images: [
      "/2.jpg?height=800&width=1200",
      "/1.jpg",
      "/2.jpg?height=800&width=1200",
    ],
    link: "/sports/football",
  },
]

export default function SportsShowcase() {
  const [selectedSport, setSelectedSport] = useState<string>("running")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % sports.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(timer)
  }, [])

  // Update selected sport when currentImageIndex changes
  useEffect(() => {
    setSelectedSport(sports[currentImageIndex].id)
  }, [currentImageIndex])

  // Handle sport selection
  const handleSportClick = (sportId: string) => {
    setSelectedSport(sportId)
    const newIndex = sports.findIndex((sport) => sport.id === sportId)
    setCurrentImageIndex(newIndex)
  }

  return (
    <div className="w-full min-h-screen bg-white relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/3 w-5/12 h-full bg-gray-600 opacity-50 rotate-12"></div>
      </div>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[300px,1fr] gap-8">
          {/* Left side - Sport categories */}
          <div className="space-y-8">
            <h2 className="text-xl font-bold">SHOP BY SPORT</h2>
            <div className="space-y-6">
              {sports.map((sport) => (
                <button
                  key={sport.id}
                  onClick={() => handleSportClick(sport.id)}
                  className={`text-2xl lg:text-4xl font-bold hover:text-blue-600 transition-colors w-full text-left ${
                    selectedSport === sport.id ? "text-blue-600" : "text-black"
                  }`}
                >
                  {sport.name}
                </button>
              ))}
              <Link
                href="/sports"
                className="inline-flex items-center text-lg text-gray-600 hover:text-blue-600 transition-colors mt-4"
              >
                See all Sports <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Right side - Image showcase */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-[600px]">
            {/* Display 3 images with overlap effect */}
            {[0, 1, 2].map((offset) => {
              const index = (currentImageIndex + offset) % sports.length
              const sport = sports[index]
              return (
                <div
                  key={`${sport.id}-${offset}`}
                  className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out`}
                  style={{
                    transform: `translateX(${offset * 20}%) scale(${1 - offset * 0.05})`,
                    zIndex: 3 - offset,
                    opacity: 1 - offset * 0.2,
                  }}
                >
                  <div className="relative w-[450px] h-[450px] overflow-hidden rounded-lg">
                    <Image
                      src={sport.images[0] || "/2.jpg"}
                      alt={sport.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      priority={offset === 0}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
