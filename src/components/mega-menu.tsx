"use client"

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"
import { Menu } from "lucide-react"

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
    <Sheet>
      <SheetTrigger className="lg:hidden p-2 hover:bg-[#2a9e95] rounded-md">
        <Menu className="w-6 h-6" />
      </SheetTrigger>
      <SheetContent side="right" className="bg-[#31B5AB] text-white w-full sm:max-w-md overflow-y-auto h-full">
        <SheetHeader>
          <SheetTitle className="text-2xl text-white font-bold">Categories</SheetTitle>
          <SheetDescription className="text-gray-100">Explore our categories below:</SheetDescription>
        </SheetHeader>
        <div className="mt-6 pb-20">
          <ul className="space-y-3">
            {categories.map((category) => (
              <li key={category.name}>
                <Link href={category.href} className="block px-4 py-3 hover:bg-[#2a9e95] rounded transition-colors">
                  {category.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/blog" className="block px-4 py-3 hover:bg-[#2a9e95] rounded transition-colors">
                BLOG
              </Link>
            </li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  )
}

