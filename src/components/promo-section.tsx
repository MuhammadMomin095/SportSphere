"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Tag, Star } from "lucide-react"

const promos = [
  {
    title: "New Arrivals",
    description:
      "Discover the latest in sports technology and fashion. Be the first to try our cutting-edge equipment and stylish apparel.",
    image: "/new-arrivals.jpg",
    link: "/new-arrivals",
    buttonText: "Shop Now",
    icon: Star,
    featuredItems: ["Smart Fitness Trackers", "Eco-friendly Yoga Mats", "Compression Wear", "Adjustable Dumbbells"],
  },
  {
    title: "Special Offers",
    description:
      "Unbeatable deals on premium sports gear. Limited-time discounts on top brands - don't miss out on these savings!",
    image: "/special-offers.jpg",
    link: "/special-offers",
    buttonText: "View Offers",
    icon: Tag,
    featuredItems: [
      "50% off Running Shoes",
      "Buy One Get One Free Protein Powders",
      "Clearance on Last Season's Apparel",
      "Bundle Deals on Home Gym Equipment",
    ],
  },
]

export function PromoSection() {
  const [hoveredPromo, setHoveredPromo] = useState<number | null>(null)

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-red-500 mb-12">Exclusive Promotions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {promos.map((promo, index) => (
            <Link
              key={index}
              href={promo.link}
              className="group relative overflow-hidden rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
              onMouseEnter={() => setHoveredPromo(index)}
              onMouseLeave={() => setHoveredPromo(null)}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={promo.image || "/placeholder.svg"}
                  alt={promo.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-8">
                  <promo.icon className="text-yellow-400 w-12 h-12 mb-4" />
                  <h3 className="text-white text-3xl font-bold mb-2">{promo.title}</h3>
                  {hoveredPromo === index && (
                    <div className="transform transition-all duration-300 ease-in-out translate-y-0 opacity-100">
                      <p className="text-gray-200 text-lg mb-4">{promo.description}</p>
                      <ul className="text-gray-300 mb-6">
                        {promo.featuredItems.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center mb-2">
                            <ArrowRight className="h-5 w-5 text-yellow-400 mr-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors inline-flex items-center">
                    {promo.buttonText}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

