"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"
import { HeroCarousel } from "@/components/hero-carousel"
import { FeaturedCategories } from "@/components/featured-categories"
import { CategoryGrid } from "@/components/category-grid"
import { PromoSection } from "@/components/promo-section"
import About from "@/components/about"
import { FeaturedProducts } from "@/components/featured-products"
import { Testimonials } from "@/components/testimonials"
import type { ReactNode } from "react"

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
    <div className="bg-gradient-to-b from-gray-400 to-black text-white">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Featured Products */}
      <FadeInSection>
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-16">
          <FeaturedProducts />
        </div>
      </FadeInSection>

      {/* About Section */}
      <FadeInSection>
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-20">
          <About />
        </div>
      </FadeInSection>

      {/* Featured Categories */}
      <FadeInSection>
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-16">
          <FeaturedCategories />
        </div>
      </FadeInSection>

      {/* Promo Section */}
      <FadeInSection>
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-16">
          <PromoSection />
        </div>
      </FadeInSection>

      {/* Main Categories Section */}
      <FadeInSection>
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-16">
          <CategoryGrid />
        </div>
      </FadeInSection>

      {/* Testimonials */}
      <FadeInSection>
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-16">
          <Testimonials />
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

