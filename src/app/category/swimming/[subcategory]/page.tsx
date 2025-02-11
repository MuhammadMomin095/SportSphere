"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ShoppingCart, Heart } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useCart } from "@/components/providers/cart-provider"

const categories = {
  "swimming-goggles": {
    id: "swimming-goggles",
    name: "Swimming Goggles",
    products: [
      { "id": "goggles-1", "name": "Speedo Anti-Fog Swimming Goggles", "price": 1499, "brand": "Speedo", "image": "/images/products/speedo-anti-fog-goggles.jpg", "description": "High-quality anti-fog goggles for clear underwater vision." },
      { "id": "goggles-2", "name": "Arena Professional Swim Goggles", "price": 1799, "brand": "Arena", "image": "/images/products/arena-professional-goggles.jpg", "description": "Professional-grade swim goggles with UV protection." },
      { "id": "goggles-3", "name": "Nike Adjustable Strap Goggles", "price": 1299, "brand": "Nike", "image": "/images/products/nike-adjustable-goggles.jpg", "description": "Comfortable goggles with an adjustable strap for a secure fit." },
      { "id": "goggles-4", "name": "TYR Polarized Swimming Goggles", "price": 1999, "brand": "TYR", "image": "/images/products/tyr-polarized-goggles.jpg", "description": "Polarized lenses to reduce glare and enhance visibility." }
    ],
  },
  "swimming-caps": {
    id: "swimming-caps",
    name: "Swimming Caps",
    products: [
      { "id": "cap-1", "name": "Speedo Silicone Swim Cap", "price": 999, "brand": "Speedo", "image": "/images/products/speedo-silicone-cap.jpg", "description": "Durable silicone cap for a snug fit and reduced drag." },
      { "id": "cap-2", "name": "Arena Long Hair Swim Cap", "price": 1299, "brand": "Arena", "image": "/images/products/arena-long-hair-cap.jpg", "description": "Designed for long hair with extra space and comfort." },
      { "id": "cap-3", "name": "Nike Stretchable Swimming Cap", "price": 899, "brand": "Nike", "image": "/images/products/nike-stretchable-cap.jpg", "description": "Stretchable material for a comfortable and secure fit." },
      { "id": "cap-4", "name": "TYR Waterproof Latex Swim Cap", "price": 1099, "brand": "TYR", "image": "/images/products/tyr-latex-cap.jpg", "description": "Waterproof latex cap to keep hair dry while swimming." }
    ],
  },
  swimwear: {
    id: "swimwear",
    name: "Swimwear",
    products: [
      { "id": "swimwear-1", "name": "Speedo Men's Swim Trunks", "price": 2499, "brand": "Speedo", "image": "/images/products/speedo-mens-swim-trunks.jpg", "description": "Comfortable and quick-dry swim trunks for men." },
      { "id": "swimwear-2", "name": "Arena Women's One-Piece Swimsuit", "price": 2899, "brand": "Arena", "image": "/images/products/arena-womens-onepiece.jpg", "description": "Chlorine-resistant one-piece swimsuit for women." },
      { "id": "swimwear-3", "name": "Nike Boys' Swim Shorts", "price": 1999, "brand": "Nike", "image": "/images/products/nike-boys-swim-shorts.jpg", "description": "Lightweight and stylish swim shorts for boys." },
      { "id": "swimwear-4", "name": "TYR Girls' Swimwear Set", "price": 2399, "brand": "TYR", "image": "/images/products/tyr-girls-swimwear-set.jpg", "description": "Swimwear set for girls with UV protection fabric." }
    ],
  },
  "swimming-ear-nose-plugs": {
    id: "swimming-ear-nose-plugs",
    name: "Swimming Ear & Nose Plugs",
    products: [
      { "id": "ear-nose-plug-1", "name": "Speedo Silicone Ear Plugs", "price": 699, "brand": "Speedo", "image": "/images/products/speedo-silicone-ear-plugs.jpg", "description": "Soft silicone ear plugs to prevent water entry." },
      { "id": "ear-nose-plug-2", "name": "Arena Nose Clip & Ear Plug Set", "price": 899, "brand": "Arena", "image": "/images/products/arena-nose-ear-set.jpg", "description": "Complete set for nose and ear protection while swimming." },
      { "id": "ear-nose-plug-3", "name": "Nike Ergonomic Nose Clip", "price": 499, "brand": "Nike", "image": "/images/products/nike-nose-clip.jpg", "description": "Ergonomic design for a secure and comfortable fit." },
      { "id": "ear-nose-plug-4", "name": "TYR Waterproof Ear Plugs", "price": 799, "brand": "TYR", "image": "/images/products/tyr-waterproof-ear-plugs.jpg", "description": "Waterproof ear plugs designed for competitive swimmers." }
    ],
  },
  "swimming-tube": {
    id: "swimming-tube",
    name: "Swimming Tube",
    products: [
      { "id": "swim-tube-1", "name": "Intex Inflatable Swim Tube", "price": 1599, "brand": "Intex", "image": "/images/products/intex-inflatable-swim-tube.jpg", "description": "Durable inflatable swim tube for pool and beach fun." },
      { "id": "swim-tube-2", "name": "Bestway Kids' Swim Ring", "price": 999, "brand": "Bestway", "image": "/images/products/bestway-kids-swim-ring.jpg", "description": "Colorful swim ring for kids to enjoy water safely." },
      { "id": "swim-tube-3", "name": "Speedo Professional Swim Tube", "price": 1899, "brand": "Speedo", "image": "/images/products/speedo-professional-swim-tube.jpg", "description": "High-quality swim tube for professional training." },
      { "id": "swim-tube-4", "name": "Arena Heavy-Duty Floating Tube", "price": 2199, "brand": "Arena", "image": "/images/products/arena-floating-tube.jpg", "description": "Heavy-duty floating tube for maximum durability." }
    ],
  },
  "swimming-jackets": {
    id: "swimming-jackets",
    name: "Swimming Jackets",
    products: [
      { "id": "swim-jacket-1", "name": "Speedo Adult Swimming Jacket", "price": 2999, "brand": "Speedo", "image": "/images/products/speedo-swim-jacket.jpg", "description": "Durable and comfortable swimming jacket for adults." },
      { "id": "swim-jacket-2", "name": "Arena Kids' Buoyancy Jacket", "price": 2499, "brand": "Arena", "image": "/images/products/arena-kids-swim-jacket.jpg", "description": "Buoyancy jacket designed for kids learning to swim." },
      { "id": "swim-jacket-3", "name": "Nike Neoprene Swim Jacket", "price": 3499, "brand": "Nike", "image": "/images/products/nike-neoprene-swim-jacket.jpg", "description": "Neoprene swimming jacket for enhanced warmth and floatation." },
      { "id": "swim-jacket-4", "name": "TYR Professional Life Vest", "price": 3999, "brand": "TYR", "image": "/images/products/tyr-professional-life-vest.jpg", "description": "Professional life vest with adjustable straps for a secure fit." }
    ],
  },
  "swimming-floaters": {
    id: "swimming-floaters",
    name: "Swimming Floaters",
    products: [
      { "id": "swim-floater-1", "name": "Speedo Arm Floaters for Kids", "price": 899, "brand": "Speedo", "image": "/images/products/speedo-arm-floaters.jpg", "description": "Inflatable arm floaters for kids' safety in water." },
      { "id": "swim-floater-2", "name": "Arena Foam Swimming Kickboard", "price": 1799, "brand": "Arena", "image": "/images/products/arena-kickboard.jpg", "description": "High-density foam kickboard for swim training." },
      { "id": "swim-floater-3", "name": "Nike Inflatable Swim Ring", "price": 1199, "brand": "Nike", "image": "/images/products/nike-swim-ring.jpg", "description": "Inflatable swim ring for pool relaxation and fun." },
      { "id": "swim-floater-4", "name": "Bestway Floating Seat for Toddlers", "price": 1599, "brand": "Bestway", "image": "/images/products/bestway-floating-seat.jpg", "description": "Floating seat with leg support for toddler safety in water." }
    ],
  },
  "swimming-pools": {
    id: "swimming-pools",
    name: "Swimming Pools",
    products: [
      { "id": "swim-pool-1", "name": "Intex Large Inflatable Pool", "price": 5999, "brand": "Intex", "image": "/images/products/intex-large-inflatable-pool.jpg", "description": "Large inflatable swimming pool for backyard fun." },
      { "id": "swim-pool-2", "name": "Bestway Family Pool with Filter", "price": 7999, "brand": "Bestway", "image": "/images/products/bestway-family-pool.jpg", "description": "Spacious family pool with built-in water filter." },
      { "id": "swim-pool-3", "name": "Summer Waves Metal Frame Pool", "price": 12999, "brand": "Summer Waves", "image": "/images/products/summer-waves-metal-pool.jpg", "description": "Metal frame pool for enhanced durability and stability." },
      { "id": "swim-pool-4", "name": "Intex Baby Pool with Sun Shade", "price": 3999, "brand": "Intex", "image": "/images/products/intex-baby-pool.jpg", "description": "Baby swimming pool with sunshade for outdoor fun." }
    ],
  },
  "swimming-flippers-fins": {
    id: "swimming-flippers-fins",
    name: "Swimming Flippers/Fins",
    products: [
      { "id": "swim-fin-1", "name": "Speedo Training Swim Fins", "price": 2799, "brand": "Speedo", "image": "/images/products/speedo-swim-fins.jpg", "description": "Short-blade swim fins designed for swim training." },
      { "id": "swim-fin-2", "name": "Arena Professional Diving Flippers", "price": 3499, "brand": "Arena", "image": "/images/products/arena-diving-flippers.jpg", "description": "Professional-grade diving flippers for deep-water swimming." },
      { "id": "swim-fin-3", "name": "Nike Lightweight Swim Fins", "price": 3199, "brand": "Nike", "image": "/images/products/nike-lightweight-fins.jpg", "description": "Lightweight and comfortable swim fins for enhanced speed." },
      { "id": "swim-fin-4", "name": "TYR Silicone Long Blade Fins", "price": 3999, "brand": "TYR", "image": "/images/products/tyr-long-blade-fins.jpg", "description": "Long-blade silicone swim fins for professional swimmers." }
    ],
  },
  "swimming-accessories": {
    id: "swimming-accessories",
    name: "Awimming Accessories",
    products: [
      { "id": "swim-accessory-1", "name": "Speedo Waterproof Swim Bag", "price": 1999, "brand": "Speedo", "image": "/images/products/speedo-waterproof-bag.jpg", "description": "Waterproof swim bag to carry essentials safely." },
      { "id": "swim-accessory-2", "name": "Arena Towel & Goggles Combo", "price": 2499, "brand": "Arena", "image": "/images/products/arena-towel-goggles.jpg", "description": "Set of microfiber towel and swim goggles for swimmers." },
      { "id": "swim-accessory-3", "name": "Nike Anti-Chlorine Shampoo", "price": 1499, "brand": "Nike", "image": "/images/products/nike-anti-chlorine-shampoo.jpg", "description": "Anti-chlorine shampoo for hair care after swimming." },
      { "id": "swim-accessory-4", "name": "TYR Swim Cap & Nose Clip Set", "price": 1899, "brand": "TYR", "image": "/images/products/tyr-swim-cap-noseclip.jpg", "description": "Combo set of swim cap and nose clip for a comfortable swim." }
    ],
  },
}

export default function SubCategoryPage() {
  const params = useParams()
  const { addItem, toggleWishlist, wishlist } = useCart()
  const { toast } = useToast()
  const [sortBy, setSortBy] = useState("name")

  const subcategory = categories[params.subcategory as keyof typeof categories]

  if (!subcategory) {
    return <div>Category not found</div>
  }

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    })
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  const handleToggleWishlist = (product: any) => {
    toggleWishlist(product.id)
    toast({
      title: wishlist.includes(product.id) ? "Removed from wishlist" : "Added to wishlist",
      description: `${product.name} has been ${wishlist.includes(product.id) ? "removed from" : "added to"} your wishlist.`,
    })
  }

  const sortedProducts = [...subcategory.products].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name)
    if (sortBy === "price") return a.price - b.price
    return 0
  })

  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-black text-white overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/fitness-banner.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: "0.2",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">{subcategory.name}</h1>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-32 bg-white"
          style={{
            clipPath: "polygon(0 100%, 100% 0, 100% 100%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <div className="flex justify-end mb-8">
          <div className="flex items-center space-x-4">
            <label htmlFor="sort" className="text-gray-700">
              Sort by:
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border rounded-md px-2 py-1"
            >
              <option value="name">Name</option>
              <option value="price">Price</option>
            </select>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence>
            {sortedProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              >
                <Link href={`/product/${product.id}`}>
                  <div className="relative aspect-square">
                    <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg text-gray-800 group-hover:text-blue-600">{product.name}</h3>
                    <p className="text-gray-600">{product.brand}</p>
                    <p className="font-bold mt-2 text-2xl text-blue-600">Rs. {product.price.toLocaleString()}</p>
                  </div>
                </Link>
                <div className="flex gap-2 p-4 bg-gray-50">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleToggleWishlist(product)}
                    className="p-2 border rounded-md hover:bg-gray-100 transition-colors"
                  >
                    <Heart
                      className={`h-4 w-4 ${wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-600"}`}
                    />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}

