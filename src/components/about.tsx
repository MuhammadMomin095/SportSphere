"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function About() {
  return (
    <section className="py-16 bg-black relative overflow-hidden ">
      {/* Clip-path background design */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-3/4 h-full bg-[#BDD715] opacity-40 transform rotate-12"></div>
        <div className="absolute -bottom-1/2 -right-1/4 w-3/4 h-full bg-[#BDD715] opacity-40 transform -rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              About <span className="text-[#BDD715]">SportsPro</span>
            </h2>
            <p className="text-gray-100 text-lg leading-relaxed">
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
                <li key={index} className="flex items-center text-gray-100">
                  <ArrowRight className="h-5 w-5 text-[#BDD715] mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/about" className="inline-block">
              <button className="bg-[#BDD715] hover:bg-[#9AB310] text-black font-bold px-8 py-3 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#BDD715] focus:ring-opacity-50">
                Learn More
              </button>
            </Link>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out" style={{boxShadow:"20px 20px 20px #BDD715, -20px -20px 20px #BDD715"}}>
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

        {/* Additional information */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "20+", label: "Years Experience" },
            { value: "50+", label: "Sports Categories" },
            { value: "1000+", label: "Products" },
            { value: "100K+", label: "Happy Customers" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out"style={{boxShadow:"5px 5px 10px #BDD715, -5px -5px 10px #BDD715"}}
            >
              <h3 className="text-[#BDD715] text-4xl font-bold mb-2">{item.value}</h3>
              <p className="text-white text-lg">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

