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
    images: ["/ccc.jpg", "/ccc.jpg", "/ccc.jpg"],
    link: "/sports/winter-sports",
  },
  {
    id: "fitness",
    name: "Fitness & Gym",
    images: ["/2.jpg", "/1.jpg", "/1.jpg"],
    link: "/sports/fitness",
  },
  {
    id: "cycling",
    name: "Cycling",
    images: ["/boxing.jpg", "/boxing.jpg", "/boxing.jpg"],
    link: "/sports/cycling",
  },
  {
    id: "running",
    name: "Running",
    images: ["/1.jpg", "/2.jpg", "/2.jpg"],
    link: "/sports/running",
  },
  {
    id: "football",
    name: "Football",
    images: ["/gym.jpg", "/gym.jpg", "/gym.jpg"],
    link: "/sports/football",
  },
]

export default function SportsShowcase() {
  const [selectedSport, setSelectedSport] = useState<string>("winter-sports")
  const [currentImage, setCurrentImage] = useState<string | null>(null)
  const [hoveredSport, setHoveredSport] = useState<string | null>(null)
  const [imageIndex, setImageIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto rotate sports every 3 seconds
  useEffect(() => {
    if (isPaused) return

    const sportInterval = setInterval(() => {
      setSelectedSport((currentSport) => {
        const currentIndex = sports.findIndex((sport) => sport.id === currentSport)
        const nextIndex = (currentIndex + 1) % sports.length
        return sports[nextIndex].id
      })
    }, 3000)

    return () => clearInterval(sportInterval)
  }, [isPaused])

  // Rotate images within the selected sport every 1.5 seconds
  useEffect(() => {
    if (isPaused) return

    const selectedSportData = sports.find((sport) => sport.id === selectedSport)
    if (!selectedSportData) return

    const imageInterval = setInterval(() => {
      setImageIndex((current) => (current + 1) % selectedSportData.images.length)
    }, 3000)

    return () => clearInterval(imageInterval)
  }, [selectedSport, isPaused])

  // Update current image when selected sport or image index changes
  useEffect(() => {
    const sport = sports.find((s) => s.id === selectedSport)
    if (sport) {
      setCurrentImage(sport.images[imageIndex])
    }
  }, [selectedSport, imageIndex])

  const handleSportClick = (sportId: string) => {
    setSelectedSport(sportId)
    setHoveredSport(null)
    setImageIndex(0)
  }

  const handleSportHover = (sportId: string) => {
    setHoveredSport(sportId)
    setIsPaused(true)
    const sport = sports.find((s) => s.id === sportId)
    if (sport) {
      setCurrentImage(sport.images[0])
    }
  }

  const handleSportHoverLeave = () => {
    setHoveredSport(null)
    setIsPaused(false)
  }

  return (
    <div className="w-full min-h-screen bg-white relative py-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/3 w-4/5 h-full bg-gray-600 opacity-50 skew-x-12"></div>
      </div>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[300px,1fr] gap-8">
          <div className="space-y-8">
            <h2 className="text-6xl font-bold" style={{ textShadow: "2px 4px 2px #1F2937" }}>
              <span className="text-white">SHOP</span> <span className="text-[#BDD715]">BY SPORT</span>
            </h2>
            <div className="space-y-6">
              {sports.map((sport) => (
                <button
                  key={sport.id}
                  onClick={() => handleSportClick(sport.id)}
                  onMouseEnter={() => handleSportHover(sport.id)}
                  onMouseLeave={handleSportHoverLeave}
                  className={`text-2xl lg:text-4xl font-bold transition-all duration-300 w-full text-left flex items-center justify-between
                    ${selectedSport === sport.id ? "text-blue-600 scale-105" : "text-black"}
                    ${hoveredSport === sport.id ? "text-blue-600 scale-105" : ""}
                    hover:text-blue-600 hover:scale-105
                  `}
                  style={{ textShadow: "2px 2px 2px #c1c3c6" }}
                >
                  {sport.name}
                  {selectedSport === sport.id && <ChevronRight className="w-8 h-8 text-blue-600" />}
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

          <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full">
              <div className="relative w-[90%] h-[90%] mx-auto overflow-hidden rounded-lg"style={{boxShadow:"28px 28px 2px #1F2937, -28px -28px 2px #c1c3c6"}}>
                {currentImage && (
                  <Image
                    src={currentImage || "/placeholder.svg"}
                    alt={selectedSport}
                    fill
                    className="object-cover transition-opacity duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    priority
                    style={{boxShadow:"20px 20px 2px #1F2937"}}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

