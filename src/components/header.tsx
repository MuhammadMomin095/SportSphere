"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, ShoppingCart, Heart, Search, User } from "lucide-react"
import { useCart } from "@/components/providers/cart-provider"
import { MegaMenu } from "./mega-menu"



export function Header() {
  const { itemCount, items } = useCart()
  return (
    <header className="border-b">
    <div className="bg-gray-100 py-2">
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

    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between gap-8">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/2.jpg"
            alt="The Sport Store"
            width={200}
            height={60}
            className="h-12 w-auto"
          />
        </Link>

        <div className="flex-1 max-w-xl">
          <div className="relative">
            <input
              type="search"
              placeholder="Search products..."
              className="w-full rounded-md border border-gray-300 pl-4 pr-10 py-2"
            />
            <button className="absolute right-0 top-0 bottom-0 px-3">
              <Search className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>

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
      </div>
    </div>

    <MegaMenu />
    </header>
  )
}

