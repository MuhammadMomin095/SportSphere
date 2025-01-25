"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function About() {
  return (
    <section className="py-16 ">
      <div className="containe mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <h2 className="text-4xl sm:text-5xl font-bold text-black leading-tight">
              About <span className="text-red-500">SportsPro</span>
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed">
              SportsPro is your ultimate destination for premium sports equipment and gear. With over two decades of
              experience, we've been empowering athletes of all levels with top-quality products from renowned brands.
            </p>
            <ul className="space-y-4">
              {[
                "Wide range of sports equipment",
                "Expert advice from sports professionals",
                "Quality assurance on all products",
                "Competitive pricing",
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-800">
                  <ArrowRight className="h-5 w-5 text-red-500 mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/about" className="inline-block">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                Learn More
              </button>
            </Link>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <Image
                src="/bb.jpg"
                alt="Various Sports Equipment"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-xl sm:text-2xl font-semibold">Empowering athletes with top-notch gear</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

