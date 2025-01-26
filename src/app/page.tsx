"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { CategoryGrid } from "@/components/category-grid"
import type { ReactNode } from "react"
import { BestSellers } from "@/components/best-sellers"
import { CategoryShowcase } from "@/components/category-showcase"
import LatestProducts from "@/components/latest-products"
import { HeroCarousel } from "@/components/hero-carousel"

const FadeInSection = ({ children }: { children: ReactNode }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
    >
      {children}
    </motion.div>
  )
}

export default function HomePage() {
  return (
    <div className="bg-white text-white">
      {/* Hero Carousel */}
      <HeroCarousel />




        {/* About Section */}
       <FadeInSection>
  <div
    className="container  mx-auto px-4 sm:px-6 lg:px-16 py-8  bg-cover bg-center"
    >
    <BestSellers />
  </div>
        </FadeInSection>




        {/* Featured Products */}
      <FadeInSection>
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-8 ">
          <CategoryShowcase />
        </div>
      </FadeInSection>


  
      {/* Main Categories Section */}
      <FadeInSection>
      <div className="container  mx-auto px-4 sm:px-6 lg:px-16 py-5  bg-cover bg-center">
          <CategoryGrid />
        </div>
      </FadeInSection>

      {/* Main Categories Section */}
      <FadeInSection>
      <div className="container  mx-auto px-4 sm:px-6 lg:px-16 py-5  bg-cover bg-center">
          <LatestProducts />
        </div>
      </FadeInSection>


      {/* Sports-themed Animation */}
      <div className="fixed bottom-0 left-0 w-full h-16 pointer-events-none">
        <motion.div
          className="absolute bottom-0 left-0 w-8 h-8 bg-white rounded-full"
          animate={{
            x: ["0%", "100%"],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  )
}

