"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

const categories = [
  {
    name: "Boxing & MMA",
    image: "/boxing.jpg",
    href: "/categories/boxing-mma",
    description: "Gear up for the ring with our premium boxing gloves, punching bags, and MMA equipment.",
    popularItems: ["Boxing Gloves", "Punching Bags", "MMA Shorts"],
  },
  {
    name: "Cricket",
    image: "/crickets.jpg",
    href: "/categories/cricket",
    description: "From bats to balls, find everything you need for a perfect cricket match.",
    popularItems: ["Cricket Bats", "Cricket Balls", "Wicket Sets"],
  },
  {
    name: "Volleyball",
    image: "/volleyball.jpg",
    href: "/categories/valleyballs",
    description: "Spike your game with our selection of volleyballs, nets, and knee pads.",
    popularItems: ["Volleyballs", "Volleyball Nets", "Knee Pads"],
  },
  {
    name: "Snooker & Pool",
    image: "/snooker.jpg",
    href: "/categories/snookers",
    description: "Elevate your billiards game with our range of cues, balls, and tables.",
    popularItems: ["Snooker Cues", "Pool Tables", "Chalk"],
  },
  {
    name: "Football",
    image: "/football.jpg",
    href: "/categories/FootBall",
    description: "Score big with our selection of footballs, cleats, and training equipment.",
    popularItems: ["Footballs", "Soccer Cleats", "Goal Nets"],
  },
  {
    name: "Basketball",
    image: "/basketball.jpg",
    href: "/categories/basketballs",
    description: "Slam dunk your way to victory with our basketballs, hoops, and accessories.",
    popularItems: ["Basketballs", "Basketball Hoops", "Basketball Shoes"],
  },
  {
    name: "Table Tennis",
    image: "/tabletennis.jpg",
    href: "/categories/tennis",
    description: "Serve up some fun with our table tennis tables, paddles, and balls.",
    popularItems: ["Table Tennis Tables", "Paddles", "Ping Pong Balls"],
  },
  {
    name: "Foosball",
    image: "/patti.jpg",
    href: "/categories/foosballtable",
    description: "Bring the excitement home with our range of foosball tables and accessories.",
    popularItems: ["Foosball Tables", "Replacement Players", "Table Covers"],
  },
  {
    name: "Hockey",
    image: "/hockey.jpg",
    href: "/categories/Hockey",
    description: "Hit the ice or field with our selection of hockey sticks, pucks, and protective gear.",
    popularItems: ["Hockey Sticks", "Pucks", "Goalie Masks"],
  },
  {
    name: "Squash",
    image: "/squash.jpg",
    href: "/categories/Squash",
    description: "Dominate the court with our squash rackets, balls, and protective eyewear.",
    popularItems: ["Squash Rackets", "Squash Balls", "Protective Goggles"],
  },
  {
    name: "Indoor Games",
    image: "/indoor/15.jpg",
    href: "/categories/Indoor",
    description: "Dominate the court with our squash rackets, balls, and protective eyewear.",
    popularItems: ["Ludo", "Monopoly", "Chees"],
  },
]

export function CategoryGrid() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  return (
    <section className="py-16 bg-white relative overflow-hidden ">

<div className="absolute inset-0 overflow-hidden">
  <div className="absolute -left-1/3 w-2/3 h-full bg-gray-600 opacity-50 skew-x-12"></div>
</div>

<div className='flex justify-center '>
        <h2 className="text-4xl text-black font-bold uppercase tracking-widest mb-4  w-[427px] h-[87px] justify-center flex items-center bg-transparent border-4 rounded-full border-gray-900" style={{ boxShadow: "10px 10px 20px #1F2937" }}>OUR CATEGORIES</h2>
        </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  mt-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
              onMouseEnter={() => setHoveredCategory(category.name)}
              onMouseLeave={() => setHoveredCategory(null)}
              style={{boxShadow:"20px 20px 2px #1F2937"}}
            >
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                width={600}
                height={400}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-2">{category.name}</h3>
                {hoveredCategory === category.name && (
                  <div className="transform transition-all duration-300 ease-in-out translate-y-0 opacity-100">
                    <p className="text-gray-200 mb-4">{category.description}</p>
                    <ul className="text-gray-300 mb-4">
                      {category.popularItems.map((item, index) => (
                        <li key={index} className="flex items-center">
                          <ArrowRight className="h-4 w-4 text-[#BDD715] mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center text-[#BDD715] font-semibold">
                      Shop Now
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </span>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
        </div>
      </section>
  )
}

