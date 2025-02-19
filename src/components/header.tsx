"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, ShoppingCart, Heart, Search, MessageCircle, Menu } from "lucide-react"
import { useCart } from "@/components/providers/cart-provider"
import { MegaMenu } from "./mega-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const { itemCount, wishlist } = useCart()
  const [searchTerm, setSearchTerm] = useState("")
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  return (
    <header className="relative z-10">
      {/* Top Bar */}
      <div className="bg-[#BDD715] text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between text-sm">
            <div className="mb-2 sm:mb-0">
              <span>WELCOME TO MIRACLE FITNESS SPORTS</span>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/blogs">BLOGS</Link>
              <Link href="/track">TRACK ORDER</Link>
              <select className="bg-transparent border-none outline-none">
                <option value="AED">AED</option>
                <option value="USD">USD</option>
              </select>
              <Link href="/store">FIND STORE</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 w-full">
            <Link href="/" className="flex-shrink-0 transition-transform duration-300 ease-in-out hover:scale-125">
              <div className="relative w-56 h-20">
                <Image
                  src="/logo.png"
                  alt="Miracle Fitness Sports"
                  layout="fill"
                  objectFit="contain"
                  className="object-left"
                />
              </div>
            </Link>

            <div className="flex-1 w-full md:max-w-xl relative">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Category or Products"
                  className="w-full px-4 py-2 border rounded-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <div className="hidden md:flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  <div className="text-sm">
                    <div>Call Us</div>
                    <div className="font-semibold">+971 48 862 535</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  <div className="text-sm">
                    <div>Whatsapp</div>
                    <div className="font-semibold">+971 58 590 5109</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-8">
                <Link href="/wishlist" className="flex items-center gap-1">
                  <div className="relative">
                    <Heart className="h-6 w-6" />
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {wishlist.length}
                    </span>
                  </div>
                </Link>

                <Link href="/cart" className="flex items-center gap-1">
                  <div className="relative">
                    <ShoppingCart className="h-6 w-6" />
                    {itemCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {itemCount}
                      </span>
                    )}
                  </div>
                </Link>

                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                  <SheetTrigger asChild>
                    <button className="lg:hidden focus:outline-none">
                      <Menu className="h-6 w-6" />
                    </button>
                  </SheetTrigger>
                  <SheetContent side="left" className="p-0">
                    <MegaMenu isSheet={true} closeSheet={() => setIsSheetOpen(false)} />
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation (visible only on large screens) */}
      <div className="hidden lg:block">
        <MegaMenu />
      </div>
    </header>
  )
}

