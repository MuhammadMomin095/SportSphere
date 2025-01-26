"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Menu } from "lucide-react";

const categories = [
  { name: "Tennis", href: "/categories/tennis" },
  { name: "Basketballs", href: "/categories/basketballs" },
  { name: "Footballs", href: "/categories/FootBall" },
  { name: "Cricket", href: "/categories/cricket" },
  { name: "Snookers", href: "/categories/snookers" },
  { name: "Boxing", href: "/categories/boxing-mma" },
  { name: "ValleyBalls", href: "/categories/valleyballs" },
  { name: "FoosballTable", href: "/categories/foosballtable" },
  { name: "Hockey", href: "/categories/Hockey" },
  { name: "Squash", href: "/categories/Squash" },
];

export function MegaMenu() {
  return (
    <nav className="bg-gradient-to-br from-[#06141B] to-black text-white">
      <Sheet>
        {/* Hamburger Icon */}
        <SheetTrigger className="p-4">
          <Menu className="w-6 h-6" />
        </SheetTrigger>
        <SheetContent
          side="right"
          className="bg-gradient-to-b from-[#06141B] via-black to-[#06141B] text-white h-screen overflow-y-auto"
        >
          <SheetHeader>
            <SheetTitle className="text-2xl text-white font-bold">Categories</SheetTitle>
            <SheetDescription className="text-gray-400">
              Explore our categories below:
            </SheetDescription>
          </SheetHeader>
          <div className="mt-6">
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    href={category.href}
                    className="block px-4 py-3 hover:bg-gray-800 rounded"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/blog"
                  className="block px-4 py-3 hover:bg-gray-800 rounded"
                >
                  BLOG
                </Link>
              </li>
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
