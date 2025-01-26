"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, ShoppingCart, Heart, Search, User, Menu, X } from "lucide-react"
import { useCart } from "@/components/providers/cart-provider"
import { MegaMenu } from "./mega-menu"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const { itemCount, items, wishlist } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg" : ""}`}
    >
      <div className="bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">Call</span> (+92) 03-111-11-88-77
            </div>
            <div className="hidden md:flex items-center gap-4">
              <Link href="/login" className="flex items-center gap-1 hover:text-gray-300 transition-colors">
                <User className="h-4 w-4" />
                Login
              </Link>
              <Link href="/register" className="hover:text-gray-300 transition-colors">
                Register
              </Link>
              <Link href="/wishlist" className="flex items-center gap-1 hover:text-gray-300 transition-colors">
                <Heart className="h-4 w-4" />
                <span>Wish List ({wishlist.length})</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`py-4 transition-all duration-300 ${isScrolled ? "bg-white" : "bg-white bg-opacity-90 backdrop-blur-sm"}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex-shrink-0">
              <Image src="/2.jpg" alt="The Sport Store" width={120} height={40} className="h-10 w-auto" />
            </Link>

            <div className="flex-1 max-w-xl hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/cart"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <div className="relative">
                  <ShoppingCart className="h-6 w-6" />
                  {itemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {itemCount}
                    </span>
                  )}
                </div>
                <span className="hidden lg:inline">
                  {itemCount} item(s) - Rs.{" "}
                  {items.reduce((total, item) => total + item.price * item.quantity, 0).toLocaleString()}
                </span>
              </Link>
              <div className="hidden md:block">
                <MegaMenu />
              </div>
              <button
                className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col gap-4">
                <Link
                  href="/login"
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <User className="h-5 w-5" />
                  Login
                </Link>
                <Link href="/register" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Register
                </Link>
                <Link
                  href="/wishlist"
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Heart className="h-5 w-5" />
                  Wish List ({wishlist.length})
                </Link>
                <div className="relative mt-2">
                  <input
                    type="text"
                    placeholder="Search for products..."
                    className="w-full py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <MegaMenu />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

