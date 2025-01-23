import Link from "next/link"
import Image from "next/image"
import { Phone, ShoppingCart, Heart, Search, User } from "lucide-react"
import { MegaMenu } from "./mega-menu"



export function Header() {
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
                <span>Wish List (0)</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto bg-gradient-to-br from-[#06141B] to-black text-gray-100 px-4 py-4">
        <div className="flex items-center justify-between gap-8">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/1.jpg"
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
                className="w-full rounded-full border text-gray-800 border-gray-300 pl-4 pr-10 py-2"
              />
              <button className="absolute right-0 top-0 bottom-0 px-3">
                <Search className="h-5 w-5 text-gray-800" />
              </button>
            </div>
          </div>

          <Link href="/cart" className="flex items-center gap-2">
            <ShoppingCart className="h-6 w-6" />
            <span>0 item(s) - Rs. 0</span>
          </Link>
        </div>
      </div>

    <MegaMenu />
    </header>
  )
}

