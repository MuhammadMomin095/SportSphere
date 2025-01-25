"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: "1",
    name: "Shazia Mohamed",
    image: "/shazia-mohamed.jpg",
    text: "The Sport Store has completely transformed my fitness journey. Their wide range of high-quality equipment and expert advice helped me set up the perfect home gym. The customer service is unparalleled - they went above and beyond to ensure I had everything I needed.",
    rating: 5,
    position: "Fitness Enthusiast",
    purchasedItems: ["Adjustable Dumbbells", "Yoga Mat", "Resistance Bands"],
  },
  {
    id: "2",
    name: "Misbah Naqvi",
    image: "/misbah-naqvi.jpg",
    text: "As a professional athlete, I demand the best from my gear. The Sport Store consistently delivers top-notch products that enhance my performance. Their efficient delivery and responsive customer support make them my go-to for all my sporting needs. I've recommended them to all my teammates!",
    rating: 5,
    position: "Professional Soccer Player",
    purchasedItems: ["Pro Soccer Cleats", "Training Cones", "Compression Wear"],
  },
  {
    id: "3",
    name: "Burhan Ahmed",
    image: "/burhan-ahmed.jpg",
    text: "I've been a loyal customer of The Sport Store for years, and they never disappoint. Whether I'm shopping for my weekend hiking trips or my kids' school sports, I always find exactly what I need. The website is user-friendly, and their product descriptions are detailed and accurate.",
    rating: 4,
    position: "Outdoor Enthusiast & Parent",
    purchasedItems: ["Hiking Boots", "Kids' Soccer Kit", "Hydration Pack"],
  },
  {
    id: "4",
    name: "Bilal Khan",
    image: "/bilal-khan.jpg",
    text: "As a gym owner, I rely on The Sport Store for bulk orders of equipment. Their business support team is exceptional, offering competitive prices and always meeting our tight deadlines. The quality of their products has significantly improved our gym members' experience.",
    rating: 5,
    position: "Gym Owner",
    purchasedItems: ["Commercial Treadmills", "Weight Sets", "Gym Flooring"],
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-gradient-to-br from-[#06141B] to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">What Our Clients Say</h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl">
            <Quote className="text-red-500 w-12 h-12 mb-6 mx-auto" />
            <div className="text-center mb-8">
              <p className="text-lg md:text-xl text-gray-300 italic mb-6">"{testimonials[currentIndex].text}"</p>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${i < testimonials[currentIndex].rating ? "text-yellow-400" : "text-gray-600"}`}
                    fill={i < testimonials[currentIndex].rating ? "currentColor" : "none"}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={testimonials[currentIndex].image || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
                width={80}
                height={80}
                className="rounded-full border-4 border-red-500 mb-4"
              />
              <h3 className="font-bold text-xl text-white mb-1">{testimonials[currentIndex].name}</h3>
              <p className="text-red-400 mb-4">{testimonials[currentIndex].position}</p>
              <div className="text-sm text-gray-400">
                <span className="font-semibold">Recent Purchases: </span>
                {testimonials[currentIndex].purchasedItems.join(", ")}
              </div>
            </div>
          </div>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-1 ${index === currentIndex ? "bg-red-500" : "bg-gray-500"}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

