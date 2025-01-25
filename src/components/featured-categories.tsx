"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Dumbbell, FishIcon as Swim, Heart } from "lucide-react"

const featuredCategories = [
  {
    title: "CARDIO EQUIPMENT",
    description: "Boost your endurance and burn calories with our top-of-the-line cardio machines.",
    image: "/cardio.jpg",
    link: "/categories/fitness/cardio",
    icon: Heart,
    items: ["Treadmills", "Exercise Bikes", "Ellipticals", "Rowing Machines"],
  },
  {
    title: "SWIMMING ACCESSORIES",
    description: "Dive into peak performance with our premium swimming gear and accessories.",
    image: "/swimming.jpg",
    link: "/categories/swimming/accessories",
    icon: Swim,
    items: ["Goggles", "Swim Caps", "Training Fins", "Waterproof Smartwatches"],
  },
  {
    title: "WEIGHTS AND DUMBBELLS",
    description: "Build strength and sculpt your body with our comprehensive range of weights.",
    image: "/gym.jpg",
    link: "/categories/fitness/weights",
    icon: Dumbbell,
    items: ["Dumbbells", "Barbells", "Kettlebells", "Weight Plates"],
  },
]

export function FeaturedCategories() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null)

  return (
    <section className="py-16 bg-gradient-to-br from-[#06141B] to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">Featured Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCategories.map((category, index) => (
            <Link
              key={index}
              href={category.link}
              className="group relative overflow-hidden rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6">
                  <category.icon className="text-red-500 w-10 h-10 mb-4" />
                  <h3 className="text-white text-2xl font-bold mb-2">{category.title}</h3>
                  {hoveredCategory === index && (
                    <div className="transform transition-all duration-300 ease-in-out translate-y-0 opacity-100">
                      <p className="text-gray-200 mb-4">{category.description}</p>
                      <ul className="text-gray-300 mb-4">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center">
                            <ArrowRight className="h-4 w-4 text-red-500 mr-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <span className="inline-flex items-center text-red-500 font-semibold">
                        Shop Now
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

