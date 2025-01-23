import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#06141B] to-black  text-gray-100">
      <div className="container mx-auto px-24 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="font-bold mb-4">About Us</h3>
            <p className="text-sm text-gray-200">
              TheSportStore.pk is Pakistan's premier sports shopping website. Genuine Products, Competitive Prices,
              Local and International Brands.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-200 hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-200 hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-sm text-gray-200 hover:text-gray-900">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-sm text-gray-200 hover:text-gray-900">
                  Returns Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>Phone: (+92) 03-111-11-88-77</li>
              <li>WhatsApp: (+92) 0312 1125237</li>
              <li>Email: info@thesportstore.pk</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-200 hover:text-gray-900">
                Facebook
              </Link>
              <Link href="#" className="text-gray-200 hover:text-gray-900">
                Instagram
              </Link>
              <Link href="#" className="text-gray-200 hover:text-gray-900">
                Twitter
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-200">
          <p>&copy; 2023 TheSportStore.pk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


