"use client"

import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ShoppingCart, Heart } from "lucide-react"

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
          "/boxing.jpg",
        brand: "Babolat",
      },
    ],
  },{
    id: "cricket",
    name: "Cricket KIts",
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
          "/snooker.jpg",
        brand: "Wilson",
      },
      {
        id: "snookers-2",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/ccc.jpg",
        brand: "Babolat",
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
          "/tabletinus.jpg",
        brand: "Wilson",
      },
      {
        id: "tennis-2",
        name: "Babolat Pure Drive",
        price: 42000,
        image:
          "/tabletinus.jpg",
        brand: "Babolat",
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
          "/squash.jpg",
        brand: "Babolat",
      },
    ],
  },

 



]

export default function CategoryPage() {
  const params = useParams()
  const category = categories.find((c) => c.id === params.category)

  if (!category) {
    return <div>Category not found</div>
  }

  return (
    <div className="container bg-gradient-to-r via-[#CCD0CF] from-[#9BA8AB] to-[#4A5C6A]  mx-auto px-20 py-32">
      <h1 className="text-4xl font-minibold mb-8"style={{textShadow:"2px 2px 2px black"}}>{category.name}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.products.map((product) => (
          <div key={product.id} className="group rounded-lg p-4">
            <Link href={`/product/${product.id}`}>
              <div className="relative aspect-square py-4 mb-4 transition-transform transform duration-300 ease-in-out hover:scale-105">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain"style={{ boxShadow: "2px 2px 2px #6141B, -2px -2px 2px #06141B" }} />
              </div>
              <h3 className="font-medium group-hover:text-blue-600">{product.name}</h3>
              <p className="text-gray-600">{product.brand}</p>
              <p className="font-bold mt-2">Rs. {product.price.toLocaleString()}</p>
            </Link>
            <div className="flex gap-2 mt-4">
              <button className="flex-1 bg-black text-white px-4 py-2 rounded-md flex items-center justify-center gap-2">
                <ShoppingCart className="h-4 w-4" />
                Add to Cart
              </button>
              <button className="p-2 border rounded-md">
                <Heart className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
