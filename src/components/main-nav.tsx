"use client"

import * as React from "react"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { categories } from "@/lib/data"

const mainNavItems = {
  SALE: { href: "/sale" },
  "SHOP BY SPORT": {
    items: Object.entries(categories).map(([key, category]) => ({
      name: category.name,
      href: `/categories/${key}`,
      subcategories: Object.entries(category.subcategories).map(([subKey, subcategory]) => ({
        name: subcategory.name,
        href: `/categories/${key}/${subKey}`,
      })),
    })),
  },
  FOOTWEAR: {
    items: [
      { name: "Running", href: "/footwear/running" },
      { name: "Football", href: "/footwear/football" },
      { name: "Cricket", href: "/footwear/cricket" },
      { name: "Tennis", href: "/footwear/tennis" },
    ],
  },
  SPORTSWEAR: {
    items: [
      { name: "Men's Clothing", href: "/sportswear/mens" },
      { name: "Women's Clothing", href: "/sportswear/womens" },
      { name: "Cricket Clothing", href: "/sportswear/cricket" },
      { name: "Football Clothing", href: "/sportswear/football" },
    ],
  },
  ACCESSORIES: { href: "/accessories" },
  BLOG: { href: "/blog" },
}

export function MainNav() {
  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto">
        <Accordion type="single" collapsible className="flex justify-between">
          {Object.entries(mainNavItems).map(([key, value]) => (
            <AccordionItem value={key} key={key} className="border-none">
              {"href" in value ? (
                <Link
                  href={value.href}
                  className="flex h-full items-center px-4 py-3 hover:bg-gray-800 transition-colors"
                >
                  {key}
                </Link>
              ) : (
                <>
                  <AccordionTrigger
                    className={cn("px-4 py-3 hover:bg-gray-800 transition-colors", "[&[data-state=open]]:bg-gray-800")}
                  >
                    {key}
                  </AccordionTrigger>
                  <AccordionContent className="absolute left-0 right-0 top-full bg-white text-black shadow-lg z-50 mt-0">
                    <div className="container mx-auto py-4">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {value.items.map((item) => (
                          <div key={item.href} className="space-y-2">
                            <Link href={item.href} className="font-semibold hover:text-blue-600 transition-colors">
                              {item.name}
                            </Link>
                            {"subcategories" in item && (
                              <ul className="space-y-1">
                                {item.subcategories.map((sub) => (
                                  <li key={sub.href}>
                                    <Link
                                      href={sub.href}
                                      className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                                    >
                                      {sub.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </AccordionContent>
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </nav>
  )
}

