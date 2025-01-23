import Image from "next/image"
import Link from "next/link"
import { HeroCarousel } from "@/components/hero-carousel"
import { FeaturedCategories } from "@/components/featured-categories"
import { CategoryGrid } from "@/components/category-grid"
import { PromoSection } from "@/components/promo-section"
import About from "@/components/about"
import { FeaturedProducts } from "@/components/featured-products"
import { Testimonials } from "@/components/testimonials"

export default function HomePage() {
  return (
    <div>
    <div className=" lg:px-20 relative bg-gradient-to-b from-gray-800 via-gray-300 to-gray-800 py-20">
    
      <div className="container relative mx-auto px-16 z-10 py-8">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Featured Categories / Promo Sections */}
      <div className="container mx-auto px-16 py-8">
        <PromoSection />
      </div>

      {/* Featured Categories with Shop Now buttons */}
      <div className="container mx-auto px-16 py-8">
        <FeaturedCategories />
      </div>
      </div>
      </div>


      {/* About Me */}
      <div className="relative bg-black min-h-screen">
      <Image src="/ee.jpg" alt="Background" layout="fill" objectFit="cover" quality={100} priority className="opacity-40" />
      <div className="container relative mx-auto px-16 z-10 py-8">
        <About />
      </div>
      </div>


      {/* Main Categories Section */}
      <div className="relative bg-gradient-to-b from-gray-800 via-gray-300 to-gray-800 min-h-screen">
      <div className="container mx-auto px-28 py-16 z-10 relative">
        <h2 className="text-5xl font-bold mb-8 text-center text-red-700 " style={{textShadow:"2px 2px 2px black"}}>Our Categories</h2>
        <CategoryGrid />
        </div>
        </div>





        <div className="relative bg-gradient-to-b from-gray-800 via-gray-300 to-gray-800  min-h-screen">
      
      <div className="container mx-auto px-14 py-16 z-10 relative">
      <FeaturedProducts />
      </div>
    </div>



    {/* About Me */}
    <div className="relative bg-gradient-to-b from-gray-800 to-gray-300 min-h-screen">
     
      <div className="container relative mx-auto px-16 z-10 py-8">
      <Testimonials />
      </div>
    </div>
   




      

    </div>
  )
}

