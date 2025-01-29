"use client"

import { Button } from "@/components/ui/button"

export default function Banner() {
  return (
    <div className="relative min-h-[400px] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/bg2.jpg")',
          backgroundPosition: "center 20%",
        }}
      >
        <div className="absolute inset-0 bg-black/30" /> {/* Reduced overlay opacity */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-end justify-center h-full max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-xl text-right">
          {" "}
          {/* Adjusted max-width and alignment */}
          <h1
            className="text-5xl md:text-7xl font-extrabold text-white mb-6"
            style={{
              textShadow: "4px 6px 2px black",
              fontFamily: "'Bebas Neue', sans-serif", // You may need to import this font
            }}
          >
            IGNITE YOUR FORTUNE
          </h1>
          <p
            className="text-lg md:text-xl text-white/90 mb-8"
            style={{
              fontFamily: "'Montserrat', sans-serif", // You may need to import this font
              textShadow: "1px 1px 2px black",
            }}
          >
            Experience the thrill of the game with our premium lottery platform. Every number could be your winning
            moment.
          </p>
          <div className="space-x-4">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 text-lg rounded-full">
              Play Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/10 font-bold px-8 py-3 text-lg rounded-full"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

