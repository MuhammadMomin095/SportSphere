"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const categories = [
  {
    name: "Boxing & MMA",
    image: "/boxing.jpg",
    href: "/categories/boxing-mma",
  },
  {
    name: "Cricket",
    image: "/crickets.jpg",
    href: "/categories/cricket",
  },
  {
    name: "Valley Balls",
    image: "/valleyball.jpg",
    href: "/categories/valleyballs",
  },
  {
    name: "Snookers",
    image: "/snooker.jpg",
    href: "/categories/snookers",
  },
  {
    name: "Foot Ball",
    image: "/football.jpg",
    href: "/categories/FootBall",
  },
  {
    name: "Basket Ball",
    image: "/basketball.jpg",
    href: "/categories/basketballs",
  },
  {
    name: "Table Tennis",
    image: "/tabletinus.jpg",
    href: "/categories/tennis",
  },
  {
    name: "Foosball Table",
    image: "/patti.jpg",
    href: "/categories/foosballtable",
  },
  {
    name: "Hockey",
    image: "/hockey.jpg",
    href: "/categories/Hockey",
  },
  {
    name: "Squash",
    image: "/squash.jpg",
    href: "/categories/Squash",
  },
]

export function CategoryGrid() {
  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link key={category.name} href={category.href} className="group relative overflow-hidden rounded-[44px] transition-transform transform duration-300 ease-in-out hover:scale-105"style={{ boxShadow: "20px 20px 20px #06141B, -20px -20px 20px #06141B" }}>
            <Image
              src={category.image || "/placeholder.svg"}
              alt={category.name}
              width={300}
              height={200}
              className="w-full h-80 object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h3 className="text-white text-3xl font-bold"style={{textShadow:"2px 4px 2px black"}}>{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

