"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ShoppingCart, Heart } from "lucide-react"
import { useCart } from "@/components/providers/cart-provider"
import { useToast } from "@/hooks/use-toast"
import { motion, AnimatePresence } from "framer-motion"

const categories = [

  {
    id: "boxing-mma",
    name: "Boxing-MMA",
    products: [
      {
        id: "boxing-mma-1",
        name: "Wilson Pro Staff",
        price: 45000,
        image:
          "/boxing.jpg",
        brand: "Wilson",
      },
      {
        id: "boxing-mma-2",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/boxing/1.jpg",
        brand: "Babolat",
      },
      {
        id: "boxing-mma-3",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/boxing/2.jpg",
        brand: "Babolat",
      },{
        id: "boxing-mma-4",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/boxing/3.jpg",
        brand: "Babolat",
      },{
        id: "boxing-mma-5",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/boxing/4.jpg",
        brand: "Babolat",
      },{
        id: "boxing-mma-6",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/boxing/5.jpg",
        brand: "Babolat",
      },
    ],
  },{
    id: "cricket",
    name: "Cricket Kits",
    products: [
      {
        id: "cricket-1",
        name: "Wilson Pro Staff",
        price: 45000,
        image:
          "/crickets.jpg",
        brand: "Wilson",
      },
      {
        id: "cricket-2",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/cricket.jpg",
        brand: "Babolat",
      },
    ],
  },{
    id: "valleyballs",
    name: "Valley Balls",
    products: [
      {
        id: "valleyballs-1",
        name: "Wilson Pro Staff",
        price: 45000,
        image:
          "/valleyball.jpg",
        brand: "Wilson",
      },
      {
        id: "valleyballs-2",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/valleyball.jpg",
        brand: "Babolat",
      },
    ],
  },{
    id: "snookers",
    name: "Snookers Accessories",
    products: [
      {
        id: "snookers-1",
        name: "Wilson Pro Staff",
        price: 45000,
        image:
          "/snooker/1.jpg",
        brand: "Wilson",
      },
      {
        id: "snookers-2",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/snooker/2.jpg",
        brand: "Babolat",
      },
      {
        id: "snookers-3",
        name: "Wilson Pro Staff",
        price: 45000,
        image:
          "/snooker/3.jpg",
        brand: "Wilson",
      },
      {
        id: "snookers-4",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/snooker/4.jpg",
        brand: "Babolat",
      },{
        id: "snookers-5",
        name: "Wilson Pro Staff",
        price: 45000,
        image:
          "/snooker/5.jpg",
        brand: "Wilson",
      },
      {
        id: "snookers-6",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/snooker/6.jpg",
        brand: "Babolat",
      },{
        id: "snookers-7",
        name: "Wilson Pro Staff",
        price: 45000,
        image:
          "/snooker/7.jpg",
        brand: "Wilson",
      },
      {
        id: "snookers-8",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/snooker/8.jpg",
        brand: "Babolat",
      },{
        id: "snookers-9",
        name: "Wilson Pro Staff",
        price: 45000,
        image:
          "/snooker/9.jpg",
        brand: "Wilson",
      },
      {
        id: "snookers-10",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/snooker/10.jpg",
        brand: "Babolat",
      },{
        id: "snookers-11",
        name: "Wilson Pro Staff",
        price: 45000,
        image:
          "/snooker/11.jpg",
        brand: "Wilson",
      },
      {
        id: "snookers-12",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/snooker/12.jpg",
        brand: "Babolat",
      },{
        id: "snookers-13",
        name: "Wilson Pro Staff",
        price: 45000,
        image:
          "/snooker/13.jpg",
        brand: "Wilson",
      },
      {
        id: "snookers-14",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/snooker/14.jpg",
        brand: "Babolat",
      },{
        id: "snookers-15",
        name: "Wilson Pro Staff",
        price: 45000,
        image:
          "/snooker/15.jpg",
        brand: "Wilson",
      },
      {
        id: "snookers-16",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/snooker/16.jpg",
        brand: "Babolat",
      },{
        id: "snookers-17",
        name: "Wilson Pro Staff",
        price: 45000,
        image:
          "/snooker/17.jpg",
        brand: "Wilson",
      },
    ],
  },
  {
    id: "FootBall",
    name: "Foot Balls",
    products: [
      {
        id: "FootBall-1",
        name: "Wilson Pro Staff",
        price: 45000,
        image:
          "/footballs.jpg",
        brand: "Wilson",
      },
      {
        id: "FootBall-2",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/footballs.jpg",
        brand: "Babolat",
      },
    ],
  },

  {
    id: "basketballs",
    name: "Basketball",
    products: [
      {
        id: "basketball-1",
        name: "Wilson NBA Ball",
        price: 8000,
        image:
          "/basketball.jpg",
        brand: "Wilson",
      },
      {
        id: "basketball-2",
        name: "Wilson NBA Ball",
        price: 8000,
        image:
          "/basketball/1.jpg",
        brand: "Wilson",
      },{
        id: "basketball-3",
        name: "Wilson NBA Ball",
        price: 8000,
        image:
          "/basketball/2.jpg",
        brand: "Wilson",
      },{
        id: "basketball-4",
        name: "Wilson NBA Ball",
        price: 8000,
        image:
          "/basketball/3.jpg",
        brand: "Wilson",
      },
    ],
  },

  {
    id: "tennis",
    name: "Tennis",
    products: [
      {
        id: "tennis-1",
        name: "Wilson Pro Staff",
        price: 45000,
        image:
          "/tinus/1.jpg",
        brand: "Wilson",
      },
      {
        id: "tennis-2",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/tinus/2.jpg",
        brand: "Babolat",
      },
      {
        id: "tennis-3",
        name: "Wilson Pro Staff",
        price: 45000,
        image:
          "/tinus/3.jpg",
        brand: "Wilson",
      },
      {
        id: "tennis-4",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/tinus/4.jpg",
        brand: "Babolat",
      },{
        id: "tennis-5",
        name: "Wilson Pro Staff",
        price: 45000,
        image:
          "/tinus/5.jpg",
        brand: "Wilson",
      },
      {
        id: "tennis-6",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/tinus/6.jpg",
        brand: "Babolat",
      },{
        id: "tennis-7",
        name: "Wilson Pro Staff",
        price: 45000,
        image:
          "/tinus/7.jpg",
        brand: "Wilson",
      },
      {
        id: "tennis-8",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/tinus/8.jpg",
        brand: "Babolat",
      },{
        id: "tennis-9",
        name: "Wilson Pro Staff",
        price: 45000,
        image:
          "/tinus/9.jpg",
        brand: "Wilson",
      },
      {
        id: "tennis-10",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/tinus/10.jpg",
        brand: "Babolat",
      },{
        id: "tennis-11",
        name: "Wilson Pro Staff",
        price: 45000,
        image:
          "/tinus/11.jpg",
        brand: "Wilson",
      },
      {
        id: "tennis-12",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/tinus/12.jpg",
        brand: "Babolat",
      },{
        id: "tennis-13",
        name: "Wilson Pro Staff",
        price: 45000,
        image:
          "/tinus/13.jpg",
        brand: "Wilson",
      },
      {
        id: "tennis-14",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/tinus/14.jpg",
        brand: "Babolat",
      },{
        id: "tennis-15",
        name: "Wilson Pro Staff",
        price: 45000,
        image:
          "/tinus/15.jpg",
        brand: "Wilson",
      },
      {
        id: "tennis-16",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/tinus/16.jpg",
        brand: "Babolat",
      },{
        id: "tennis-17",
        name: "Wilson Pro Staff",
        price: 45000,
        image:
          "/tinus/17.jpg",
        brand: "Wilson",
      },
    ],
  },
  {
    id: "foosballtable",
    name: "Foosball Tables",
    products: [
      {
        id: "foosballtable-1",
        name: "Wilson Pro Staff",
        price: 45000,
        image:
          "/patti.jpg",
        brand: "Wilson",
      },
      {
        id: "foosballtable-2",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/patti.jpg",
        brand: "Babolat",
      },
    ],
  }, {
    id: "Hockey",
    name: "Hockey Sticks",
    products: [
      {
        id: "Hockey-1",
        name: "Wilson Pro Staff",
        price: 45000,
        image:
          "/hockey.jpg",
        brand: "Wilson",
      },
      {
        id: "Hockey-2",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/hockey.jpg",
        brand: "Babolat",
      },
    ],
  }, {
    id: "Squash",
    name: "Squash Rackets",
    products: [
      {
        id: "Squash-1",
        name: "Wilson Pro Staff",
        price: 45000,
        image:
          "/squash.jpg",
        brand: "Wilson",
      },
      {
        id: "Squash-2",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/squash/1.jpg",
        brand: "Babolat",
      },
      {
        id: "Squash-3",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/squash/2.jpg",
        brand: "Babolat",
      },{
        id: "Squash-4",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/squash/3.jpg",
        brand: "Babolat",
      },{
        id: "Squash-5",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/squash/4.jpg",
        brand: "Babolat",
      },
    ],
  }, 



  {
    id: "Weights",
    name: "Gym Assessories",
    products: [
      {
        id: "gym-1",
        name: "Wilson Pro Staff",
        price: 45000,
        image:
          "/gym/1.jpg",
        brand: "Wilson",
      },
      {
        id: "gym-2",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/gym/2.jpg",
        brand: "Babolat",
      },
      {
        id: "gym-3",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/gym/3.jpg",
        brand: "Babolat",
      },{
        id: "gym-4",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/gym/4.jpg",
        brand: "Babolat",
      },{
        id: "gym-5",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/gym/5.jpg",
        brand: "Babolat",
      },
      {
        id: "gym-6",
        name: "Wilson Pro Staff",
        price: 45000,
        image:
          "/gym/6.jpg",
        brand: "Wilson",
      },
      {
        id: "gym-7",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/gym/7.jpg",
        brand: "Babolat",
      },
      {
        id: "gym-8",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/gym/8.jpg",
        brand: "Babolat",
      },{
        id: "gym-9",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/gym/9.jpg",
        brand: "Babolat",
      },{
        id: "gym-10",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/gym/10.jpg",
        brand: "Babolat",
      },
      {
        id: "gym-11",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/gym/11.jpg",
        brand: "Babolat",
      },{
        id: "gym-12",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/gym/12.jpg",
        brand: "Babolat",
      },{
        id: "gym-13",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/gym/13.jpg",
        brand: "Babolat",
      },{
        id: "gym-14",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/gym/14.jpg",
        brand: "Babolat",
      }
    ],
  }, 
  
  
  {
    id: "Indoor",
    name: "Indoor Games",
    products: [
      
      {
        id: "Indoor-1",
        name: "Wilson Pro Staff",
        price: 45000,
        image:
          "/indoor/1.jpg",
        brand: "Wilson",
      },
      {
        id: "Indoor-2",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/indoor/2.jpg",
        brand: "Babolat",
      },{
        id: "Indoor-3",
        name: "Wilson Pro Staff",
        price: 45000,
        image:
          "/indoor/3.jpg",
        brand: "Wilson",
      },
      {
        id: "Indoor-4",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/indoor/4.jpg",
        brand: "Babolat",
      },{
        id: "Indoor-5",
        name: "Wilson Pro Staff",
        price: 45000,
        image:
          "/indoor/5.jpg",
        brand: "Wilson",
      },
      {
        id: "Indoor-6",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/indoor/6.jpg",
        brand: "Babolat",
      },{
        id: "Indoor-7",
        name: "Wilson Pro Staff",
        price: 45000,
        image:
          "/indoor/7.jpg",
        brand: "Wilson",
      },
      {
        id: "Indoor-8",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/indoor/8.jpg",
        brand: "Babolat",
      },{
        id: "Indoor-9",
        name: "Wilson Pro Staff",
        price: 45000,
        image:
          "/indoor/9.jpg",
        brand: "Wilson",
      },
      {
        id: "Indoor-10",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/indoor/10.jpg",
        brand: "Babolat",
      },{
        id: "Indoor-11",
        name: "Wilson Pro Staff",
        price: 45000,
        image:
          "/indoor/11.jpg",
        brand: "Wilson",
      },
      {
        id: "Indoor-12",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/indoor/12.jpg",
        brand: "Babolat",
      },{
        id: "Indoor-13",
        name: "Wilson Pro Staff",
        price: 45000,
        image:
          "/indoor/13.jpg",
        brand: "Wilson",
      },
      {
        id: "Indoor-14",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/indoor/14.jpg",
        brand: "Babolat",
      },{
        id: "Indoor-15",
        name: "Wilson Pro Staff",
        price: 45000,
        image:
          "/indoor/15.jpg",
        brand: "Wilson",
      },
      {
        id: "Indoor-16",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/indoor/16.jpg",
        brand: "Babolat",
      },{
        id: "Indoor-17",
        name: "Wilson Pro Staff",
        price: 45000,
        image:
          "/indoor/17.jpg",
        brand: "Wilson",
      },
      {
        id: "Indoor-18",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/indoor/18.jpg",
        brand: "Babolat",
      },{
        id: "Indoor-19",
        name: "Wilson Pro Staff",
        price: 45000,
        image:
          "/indoor/19.jpg",
        brand: "Wilson",
      },
      {
        id: "Indoor-20",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/indoor/20.jpg",
        brand: "Babolat",
      },{
        id: "Indoor-21",
        name: "Wilson Pro Staff",
        price: 45000,
        image:
          "/indoor/21.jpg",
        brand: "Wilson",
      },
      {
        id: "Indoor-22",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/indoor/22.jpg",
        brand: "Babolat",
      },
      {
        id: "Indoor-23",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/indoor/23.jpg",
        brand: "Babolat",
      },{
        id: "Indoor-24",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/indoor/24.jpg",
        brand: "Babolat",
      },{
        id: "Indoor-25",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/indoor/25.jpg",
        brand: "Babolat",
      },{
        id: "Indoor-26",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/indoor/26.jpg",
        brand: "Babolat",
      },{
        id: "Indoor-27",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/indoor/27.jpg",
        brand: "Babolat",
      },
    ],
  },

 



]

export default function CategoryPage() {
  const params = useParams()
  const { addItem, toggleWishlist, wishlist } = useCart()
  const { toast } = useToast()
  const [sortBy, setSortBy] = useState("name")
  const [filterBrand, setFilterBrand] = useState("")

  const category = categories.find((c) => c.id === params.category)

  if (!category) {
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

  const sortedAndFilteredProducts = category.products
    .filter((product) => !filterBrand || product.brand === filterBrand)
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name)
      if (sortBy === "price") return a.price - b.price
      return 0
    })

  const uniqueBrands = Array.from(new Set(category.products.map((product) => product.brand)))

  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-black text-white overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/fun.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: "0.2",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">{category.name}</h1>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-32 bg-white"
          style={{
            clipPath: "polygon(0 100%, 100% 0, 100% 100%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
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
          <div className="flex items-center space-x-4">
            <label htmlFor="brand" className="text-gray-700">
              Filter by brand:
            </label>
            <select
              id="brand"
              value={filterBrand}
              onChange={(e) => setFilterBrand(e.target.value)}
              className="border rounded-md px-2 py-1"
            >
              <option value="">All Brands</option>
              {uniqueBrands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
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
            {sortedAndFilteredProducts.map((product) => (
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


