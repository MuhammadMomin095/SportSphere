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
  "table-tennis": {
    id: "table-tennis",
    name: "Table-Tennis",
    products: [
      { "id": "tt-bat-1", "name": "Stiga Pro Carbon Table Tennis Bat", "price": 4999, "brand": "Stiga", "image": "/images/products/stiga-pro-carbon.jpg", "description": "High-quality carbon fiber bat for professional players." },
      { "id": "tt-bat-2", "name": "Butterfly Timo Boll Table Tennis Paddle", "price": 3999, "brand": "Butterfly", "image": "/images/products/butterfly-timo-boll.jpg", "description": "Timo Boll edition paddle for advanced players." },
      { "id": "tt-ball-1", "name": "DHS 3-Star Table Tennis Balls (Pack of 6)", "price": 699, "brand": "DHS", "image": "/images/products/dhs-3star-balls.jpg", "description": "Tournament-grade table tennis balls with excellent bounce." },
      { "id": "tt-table-1", "name": "Joola Inside Table Tennis Table", "price": 24999, "brand": "Joola", "image": "/images/products/joola-table.jpg", "description": "Indoor table tennis table with professional build quality." }
    ],
  },
  "carrom": {
    id: "carrom",
    name: "Carrom",
    products: [
      { "id": "carrom-board-1", "name": "Surco Tournament Carrom Board", "price": 5999, "brand": "Surco", "image": "/images/products/surco-carrom-board.jpg", "description": "Official-size wooden carrom board with smooth playing surface." },
      { "id": "carrom-coins-1", "name": "Synco Carrom Coins Set", "price": 799, "brand": "Synco", "image": "/images/products/synco-carrom-coins.jpg", "description": "Premium quality carrom coins for professional play." },
      { "id": "carrom-striker-1", "name": "Korners Champion Carrom Striker", "price": 499, "brand": "Korners", "image": "/images/products/korners-striker.jpg", "description": "Smooth and durable striker for accurate shots." },
      { "id": "carrom-powder-1", "name": "Jaspo Carrom Powder", "price": 299, "brand": "Jaspo", "image": "/images/products/jaspo-carrom-powder.jpg", "description": "Reduces friction for smooth carrom gameplay." }
    ],
  },
  foosball: {
    id: "foosball",
    name: "Foosball",
    products: [
      { "id": "foosball-table-1", "name": "Garlando G-500 Foosball Table", "price": 39999, "brand": "Garlando", "image": "/images/products/garlando-foosball.jpg", "description": "Premium foosball table with durable rods and smooth playfield." },
      { "id": "foosball-set-1", "name": "Warrior Pro Foosball Set", "price": 24999, "brand": "Warrior", "image": "/images/products/warrior-foosball.jpg", "description": "Tournament-grade foosball table for competitive play." },
      { "id": "foosball-players-1", "name": "Tornado Foosball Replacement Players", "price": 1999, "brand": "Tornado", "image": "/images/products/tornado-players.jpg", "description": "High-quality foosball players for table customization." },
      { "id": "foosball-balls-1", "name": "Kick Foosball Balls (Pack of 4)", "price": 599, "brand": "Kick", "image": "/images/products/kick-foosball-balls.jpg", "description": "Official-size foosball balls for smooth gameplay." }
    ],
  },
  "boxing": {
    id: "boxing",
    name: "Boxing",
    products: [
      { "id": "boxing-gloves-1", "name": "Everlast Pro Style Boxing Gloves", "price": 4999, "brand": "Everlast", "image": "/images/products/everlast-gloves.jpg", "description": "Durable and comfortable boxing gloves for training." },
      { "id": "boxing-bag-1", "name": "RDX Heavy Punching Bag", "price": 9999, "brand": "RDX", "image": "/images/products/rdx-punching-bag.jpg", "description": "High-quality punching bag for boxing practice." },
      { "id": "boxing-headgear-1", "name": "Venum Challenger 2.0 Headgear", "price": 5999, "brand": "Venum", "image": "/images/products/venum-headgear.jpg", "description": "Protective headgear for safe boxing training." },
      { "id": "boxing-wraps-1", "name": "Fairtex Hand Wraps", "price": 899, "brand": "Fairtex", "image": "/images/products/fairtex-wraps.jpg", "description": "Elastic hand wraps for wrist protection." }
    ],
  },
  "card-games": {
    id: "card-games",
    name: "Card Games",
    products: [
      { "id": "poker-set-1", "name": "Casino Grade Poker Set", "price": 2999, "brand": "CasinoPro", "image": "/images/products/casino-poker-set.jpg", "description": "Professional poker set with chips and cards." },
      { "id": "uno-cards-1", "name": "Uno Classic Card Game", "price": 599, "brand": "Uno", "image": "/images/products/uno-cards.jpg", "description": "Classic Uno game for family and friends." },
      { "id": "playing-cards-1", "name": "Bicycle Standard Playing Cards", "price": 499, "brand": "Bicycle", "image": "/images/products/bicycle-cards.jpg", "description": "Premium playing cards for all card games." },
      { "id": "rummy-set-1", "name": "Deluxe Rummy Card Game Set", "price": 1599, "brand": "RummyPro", "image": "/images/products/rummy-set.jpg", "description": "Complete Rummy set for competitive play." }
    ],
  },
  "board-games": {
    id: "board-games",
    name: "Board Games",
    products: [
      { "id": "chess-set-1", "name": "Wooden Chess Set", "price": 1999, "brand": "ClassicChess", "image": "/images/products/wooden-chess.jpg", "description": "Handcrafted wooden chess set with premium pieces." },
      { "id": "monopoly-game-1", "name": "Monopoly Classic Board Game", "price": 1999, "brand": "Hasbro", "image": "/images/products/monopoly.jpg", "description": "The classic game of real estate trading and strategy." },
      { "id": "scrabble-game-1", "name": "Scrabble Deluxe Edition", "price": 2499, "brand": "Mattel", "image": "/images/products/scrabble.jpg", "description": "Premium Scrabble board game for word lovers." },
      { "id": "ludo-game-1", "name": "Ludo King Board Game", "price": 999, "brand": "LudoKing", "image": "/images/products/ludo-king.jpg", "description": "Family-friendly Ludo board game." }
    ],
  },
  "dart-board": {
    id: "dart-board",
    name: "Dart Board",
    products: [
      { "id": "dartboard-1", "name": "Winmau Blade 5 Dartboard", "price": 4999, "brand": "Winmau", "image": "/images/products/winmau-blade5.jpg", "description": "Professional dartboard for tournament play." },
      { "id": "dart-set-1", "name": "Target Darts Professional Set", "price": 1999, "brand": "Target", "image": "/images/products/target-darts.jpg", "description": "Complete darts set for precision and accuracy." },
      { "id": "dart-cabinet-1", "name": "Viper Shot King Dartboard Cabinet", "price": 9999, "brand": "Viper", "image": "/images/products/viper-dart-cabinet.jpg", "description": "Wall-mounted dartboard with stylish cabinet." },
      { "id": "soft-tip-darts-1", "name": "Harrows Soft Tip Darts", "price": 1499, "brand": "Harrows", "image": "/images/products/harrows-soft-tip.jpg", "description": "Soft tip darts for electronic dartboards." }
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

