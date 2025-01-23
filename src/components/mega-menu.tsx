"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

const categories = [
  
  { name: "Tennis", href: "/categories/tennis" },
  { name: "Basketballs", href: "/categories/basketballs" },
  { name: "Footballs", href: "/categories/FootBall" },
  { name: "Cricket", href: "/categories/cricket" },
  { name: "Snookers", href: "/categories/snookers" },
  { name: "Boxing", href: "/categories/boxing-mma" },
  { name: "ValleyBalls", href: "/categories/valleyballs" },
  { name: "FoosballTable", href: "/categories/foosballtable" },
  { name: "Hockey", href: "/categories/Hockey" },
  { name: "Squash", href: "/categories/Squash" },
]

export function MegaMenu() {
  

  return (
    <nav className="bg-gradient-to-br from-[#06141B] to-black  text-white">
    <div className="container mx-auto ">
      <ul className="flex items-center justify-between">
        {categories.map((category) => (
          <li key={category.name}>
            <Link href={category.href} className="block px-4 py-3 hover:bg-gray-800">
              {category.name}
            </Link>
          </li>
        ))}
        <li>
          <Link href="/blog" className="block px-4 py-3 hover:bg-gray-800">
            BLOG
          </Link>
        </li>
      </ul>
    </div>
  </nav>
  )
}

