"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { categories } from "@/lib/data"

interface MegaMenuProps {
  isSheet?: boolean
  closeSheet?: () => void
}

export function MegaMenu({ isSheet = false, closeSheet }: MegaMenuProps) {
  const [openCategory, setOpenCategory] = useState<string | null>(null)

  // Add console.log to debug the menu data
  console.log("MegaMenu categories:", categories)

  const handleCategoryClick = (key: string) => {
    if (isSheet) {
      setOpenCategory(openCategory === key ? null : key)
    }
  }

  const handleLinkClick = () => {
    if (isSheet && closeSheet) {
      closeSheet()
    }
  }

  return (
    <nav className={`bg-[#BDD715] text-white w-full ${isSheet ? "h-full" : ""}`}>
      <div className={`container mx-auto p-4 ${isSheet ? "h-full overflow-y-auto" : ""}`}>
        <ul className={`${isSheet ? "flex flex-col space-y-4" : "flex items-center justify-center space-x-4"}`}>
          {Object.entries(categories).map(([key, category]) => (
            <li
              key={key}
              className={`relative ${isSheet ? "" : "group"}`}
              onMouseEnter={() => !isSheet && setOpenCategory(key)}
              onMouseLeave={() => !isSheet && setOpenCategory(null)}
            >
              <button
                onClick={() => setOpenCategory(openCategory === key ? null : key)}
                className={`flex items-center px-4 py-3 hover:bg-[#606d0d] ${isSheet ? "w-full justify-between" : ""}`}
              >
                {category.name}
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${openCategory === key ? "rotate-180" : ""}`}
                />
              </button>
              {openCategory === key && (
                <div
                  className={`${isSheet ? "mt-2" : "absolute left-0 top-full w-64"} bg-white text-black shadow-lg z-50`}
                >
                  <div className="p-4">
                    <h3 className="font-bold mb-2">{category.name} Categories</h3>
                    <ul className="space-y-2">
                      {Object.entries(category.subcategories).map(([subKey, subcategory]) => (
                        <li key={subKey}>
                          <Link
                            href={`/category/${key}/${subKey}`}
                            className="block hover:text-blue-600"
                            onClick={closeSheet}
                          >
                            {subcategory.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </li>
          ))}
          <li>
            <Link href="/blog" className="flex items-center px-4 py-3 hover:bg-gray-800" onClick={handleLinkClick}>
              BLOG
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

