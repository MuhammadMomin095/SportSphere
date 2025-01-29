import Link from "next/link"
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ShoppingBag,
  CreditCard,
  Truck,
  RotateCcw,
} from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-black via-[#0A0A0A] to-[#141414] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h3 className="text-[#BDD715] font-bold text-2xl">TheSportStore.pk</h3>
            <p className="text-sm leading-relaxed text-gray-300">
              Elevate your game with premium sports gear. We bring you authentic products from top local and
              international brands, ensuring quality and performance for every athlete.
            </p>
            <div className="pt-4">
              <Link href="/about" className="inline-flex items-center text-[#BDD715] hover:underline">
                Discover our story <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-[#BDD715] font-bold text-2xl">Quick Links</h3>
            <ul className="space-y-3">
              {[
                "New Arrivals",
                "Best Sellers",
                "Special Offers",
                "Brand Directory",
                "Size Guide",
                "Track Your Order",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm text-gray-300 hover:text-[#BDD715] transition-colors flex items-center"
                  >
                    <ArrowRight className="mr-2 w-4 h-4" /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-[#BDD715] font-bold text-2xl">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start">
                <MapPin className="mr-3 w-5 h-5 text-[#BDD715]" />
                <span>123 Sports Avenue, Karachi 75000, Pakistan</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 w-5 h-5 text-[#BDD715]" />
                <span>(+92) 03-111-11-88-77</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 w-5 h-5 text-[#BDD715]" />
                <span>info@thesportstore.pk</span>
              </li>
            </ul>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-[#BDD715] to-[#9AAF13] text-black px-6 py-2 rounded-full hover:from-[#9AAF13] hover:to-[#BDD715] transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-[#BDD715] font-bold text-2xl">We Promise</h3>
            <ul className="space-y-4">
              {[
                { icon: ShoppingBag, text: "100% Authentic Products" },
                { icon: CreditCard, text: "Secure Payment Options" },
                { icon: Truck, text: "Fast & Reliable Shipping" },
                { icon: RotateCcw, text: "Easy Returns & Exchanges" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center text-sm text-gray-300">
                  <Icon className="mr-3 w-5 h-5 text-[#BDD715]" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">&copy; 2023 TheSportStore.pk. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <Link href="/terms" className="text-sm text-gray-400 hover:text-[#BDD715] transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-[#BDD715] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/faq" className="text-sm text-gray-400 hover:text-[#BDD715] transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
      <div className="relative h-16 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-[2px] bg-gradient-to-r from-black via-[#BDD715] to-black"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black px-6 py-2 rounded-full">
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Twitter, label: "Twitter" },
              ].map(({ Icon, label }) => (
                <Link
                  key={label}
                  href="#"
                  aria-label={label}
                  className="text-[#BDD715] hover:text-white transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

