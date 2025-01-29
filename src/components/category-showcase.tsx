"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const categories = [
  {
    id: 1,
    name: "CRICKET BATS",
    subtitle: "PREMIUM QUALITY",
    image:
      "/Cricket.jpg",
    href: "/category/cricket-bats",
    gridArea: "span 2 / span 1",
  },
  {
    id: 2,
    name: "WEIGHTS AND DUMBBELLS",
    image: "/gym.jpg",
    href: "/category/weights",
    gridArea: "span 1 / span 1",
  },
  {
    id: 3,
    name: "SWIMMING ACCESSORIES",
    image: "/swimming.jpg",
    href: "/category/swimming",
    gridArea: "span 1 / span 1",
  },
  {
    id: 4,
    name: "SNOOKERS",
    subtitle: "Snookers",
    image: "/ccc.jpg",
    href: "/category/bags",
    gridArea: "span 2 / span 1",
  },
]

export function CategoryShowcase() {
  return (
    <section className="py-16 container mx-auto px-4 bg-[#BDD715]">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-12">
        {/* Cricket Bats - Large Left Panel */}
        <div className="md:col-span-1 md:row-span-2 relative h-[600px] group">
          <Link href="/category/cricket-bats">
            <div className="relative w-full h-full overflow-hidden"
              style={{boxShadow:"10px 10px 2px #1F2937"}}
              >
              <Image
                src="/Cricket.jpg"
                alt="Premium Cricket Bats"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-4xl font-bold mb-2">CRICKET BATS</h3>
                <p className="text-xl font-semibold text-red-500">PREMIUM QUALITY</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Center Column - Weights and Swimming */}
        <div className="md:col-span-1 space-y-6">
          {/* Weights and Dumbbells */}
          <Link href="/category/weights" className="block relative h-[290px] group">
            <div className="relative w-full h-full overflow-hidden"style={{boxShadow:"10px 10px 2px #1F2937"}}>
              <Image
                src="/gym.jpg"
                alt="Weights and Dumbbells"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold">WEIGHTS AND DUMBBELLS</h3>
              </div>
            </div>
          </Link>

          {/* Swimming Accessories */}
          <Link href="/category/swimming" className="block relative h-[290px] group">
            <div className="relative w-full h-full overflow-hidden"style={{boxShadow:"10px 10px 2px #1F2937"}}>
              <Image
                src="/swimming.jpg"
                alt="Swimming Accessories"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold">SWIMMING ACCESSORIES</h3>
              </div>
            </div>
          </Link>
        </div>

        {/* Camo Edition - Large Right Panel */}
        <div className="md:col-span-1 md:row-span-2 relative h-[600px] group">
          <Link href="/category/bags">
            <div className="relative w-full h-full overflow-hidden"style={{boxShadow:"10px 10px 2px #1F2937"}}>
              <Image
                src="/ccc.jpg"
                alt="Camo Edition Sports Bag"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-4xl font-bold mb-2">SNOOKERS</h3>
                <p className="text-xl font-semibold">Sports Bag</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

