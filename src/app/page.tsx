"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { CategoryGrid } from "@/components/category-grid"
import type { ReactNode } from "react"
import SportsShowcase from "@/components/sports-showcase"
import { CategoryShowcase } from "@/components/category-showcase"
import LatestProducts from "@/components/latest-products"
import About from "@/components/about"
import HeroCarousel from "@/components/hero-carousel"
import Banner from "@/components/banner"
import SportsCarousel from "@/components/SportsCarousel"

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
    <div className="bg-black text-white">
        {/* Sports Carousel Section */}
      <FadeInSection>
        <div >
          <SportsCarousel />
        </div>
      </FadeInSection>


        {/* Hero Carousel Section */}
      <FadeInSection>
        <div >
          <HeroCarousel />
        </div>
      </FadeInSection>

        {/* Banner Section */}
      <FadeInSection>
        <div >
          <Banner />
        </div>
      </FadeInSection>


        {/* Sports Showcase Section */}
      <FadeInSection>
        <div>
          <SportsShowcase />
        </div>
      </FadeInSection>




        {/* Category Showcase Products */}
      <FadeInSection>
        <div className="bg-[#BDD715]" >
          <CategoryShowcase />
        </div>
      </FadeInSection>


  
      {/* Category Grid Section */}
      <FadeInSection>
        <div>
          <CategoryGrid />
        </div>
      </FadeInSection>




      {/* Latest Products Section */}
      <FadeInSection>
        <div>
          <LatestProducts />
        </div>
      </FadeInSection>



         {/* About Section */}
      <FadeInSection>
        <div>
          <About />
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

