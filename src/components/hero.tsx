import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="relative">
      <section
        className="relative bg-black text-white overflow-hidden"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%) " }}
        
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: "0.3",
            boxShadow: "10px 20px 40px rgba(255, 69, 0, 0.5)",
          }}
        />
        <div className="grid grid-cols-2">
            
        <div className="relative z-10 container mx-auto px-14 py-24 min-h-screen flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              SPORTFIT
              <span className="block text-lg md:text-xl tracking-wider text-orange-500 mt-2">
                YOUR ULTIMATE SPORTS EQUIPMENT STORE
              </span>
            </h1>

            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl">
              We Offer Premium Sports Equipment Including Professional Grade Balls, Training Gear, Performance Wear,
              Protective Equipment, And Accessories For All Sports
            </p>

            <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg rounded-full">
              <Link href="/shop">SHOP NOW!</Link>
            </Button>
          </div>
          </div>
          <img src="bb.jpg" />


          
        </div>
      </section>
    </div>
  )
}

