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
    images: ["/ccc.jpg", "/ccc.jpg", "/ccc.jpg"], // Replace with your actual image paths
    link: "/sports/winter-sports",
  },
  {
    id: "fitness",
    name: "Fitness & Gym",
    images: ["/2.jpg", "/1.jpg", "/1.jpg"], // Replace with your actual image paths
    link: "/sports/fitness",
  },
  {
    id: "cycling",
    name: "Cycling",
    images: ["/boxing.jpg", "/boxing.jpg", "/boxing.jpg"], // Replace with your actual image paths
    link: "/sports/cycling",
  },
  {
    id: "running",
    name: "Running",
    images: ["/1.jpg", "/2.jpg", "/2.jpg"], // Replace with your actual image paths
    link: "/sports/running",
  },
  {
    id: "football",
    name: "Football",
    images: ["/gym.jpg", "/gym.jpg", "/gym.jpg"], // Replace with your actual image paths
    link: "/sports/football",
  },
];

export default function SportsShowcase() {
  const [selectedSport, setSelectedSport] = useState<string>("running");
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [hoveredSport, setHoveredSport] = useState<string | null>(null);

  useEffect(() => {
    setCurrentImage(sports.find((sport) => sport.id === selectedSport)?.images?.[0] ?? "/placeholder.jpg");
  }, [selectedSport]);

  const handleSportClick = (sportId: string) => {
    setSelectedSport(sportId);
    setHoveredSport(null);
  };

  const handleSportHover = (sportId: string) => {
    setHoveredSport(sportId);
    setCurrentImage(sports.find((sport) => sport.id === sportId)?.images?.[0] ?? "/placeholder.jpg");
  };

  const handleSportHoverLeave = () => {
    setHoveredSport(null);
    setCurrentImage(sports.find((sport) => sport.id === selectedSport)?.images?.[0] ?? "/placeholder.jpg");
  };

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[300px,1fr] gap-8">
          <div className="space-y-8">
            <h2 className="text-xl font-bold">SHOP BY SPORT</h2>
            <div className="space-y-6">
              {sports.map((sport) => (
                <button
                  key={sport.id}
                  onClick={() => handleSportClick(sport.id)}
                  onMouseEnter={() => handleSportHover(sport.id)}
                  onMouseLeave={handleSportHoverLeave}
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

          <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full">
              <div className="relative w-[90%] h-[90%] mx-auto overflow-hidden rounded-lg">
                <Image
                  src={currentImage ?? "/placeholder.jpg"} // Use nullish coalescing here as well, just in case.
                  alt={selectedSport}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}