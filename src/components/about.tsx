'use client'

import { Link } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  return (
    
    <section className="py-12">
      <div className="container mx-auto px-12">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <Image
              src="/bb.jpg"
              alt="Tattoo Machine"
              width={600}
              height={100}
              className="rounded-lg h-[550px] transition-transform transform duration-300 ease-in-out hover:scale-105 cursor-pointer"style={{ boxShadow: "14px 14px 62px #06141B, -8px -8px 62px #06141B" }}
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-red-700"style={{textShadow:"2px 2px 2px black"}}>About Us</h2>
            <p className="text-gray-200">
              Berger Tattoo Studio is a premier destination for high-quality tattoos and exceptional artistry. Our team of skilled artists is dedicated to bringing your vision to life with precision and creativity.
            </p>
            <Link href="about">
            <button
              className="bg-red-600 text-white px-6 py-2 rounded text-sm uppercase tracking-wider"
            >
              Learn More
            </button>
            </Link>
            
          </div>
        </div>
      </div>
    </section>
   

  )
}
