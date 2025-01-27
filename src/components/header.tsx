"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, ShoppingCart, Heart, Search, User } from "lucide-react"
import { useCart } from "@/components/providers/cart-provider"
import { MegaMenu } from "./mega-menu"
import { SearchResults } from "./search-results"
import { categories } from "@/lib/data"
import type { Category, Product } from "@/lib/types"

export function Header() {
  const { itemCount, items } = useCart()
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState<(Product & { categoryId: string; categoryName: string })[]>([])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase()
    setSearchTerm(term)

    
  }

  return (
    <header className="relative z-10">
      <div className="bg-gradient-to-b from-[#06141B] to-black text-white bg-opacity-80 backdrop-blur-sm py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>Call (+92) 03-111-11-88-77</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/login" className="flex items-center gap-1">
                <User className="h-4 w-4" />
                Login
              </Link>
              <Link href="/register">Register</Link>
              <Link href="/wishlist" className="flex items-center gap-1">
                <Heart className="h-4 w-4" />
                <span>Wish List ({items.length})</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-opacity-80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-8">
            <Link href="/" className="flex-shrink-0">
              <Image src="/2.jpg" alt="The Sport Store" width={200} height={60} className="h-12 w-auto" />
            </Link>

            <div className="flex-1 max-w-xl relative">
              <div className="relative">


              </div>
              <SearchResults results={searchResults} />
            </div>

            <div className="flex items-center gap-4">
              <Link href="/cart" className="flex items-center gap-2">
                <div className="relative">
                  <ShoppingCart className="h-6 w-6" />
                  {itemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {itemCount}
                    </span>
                  )}
                </div>
                <span>
                  {itemCount} item(s) - Rs.{" "}
                  {items.reduce((total, item) => total + item.price * item.quantity, 0).toLocaleString()}
                </span>
              </Link>
              <MegaMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

