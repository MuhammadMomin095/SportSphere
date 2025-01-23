import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
      <Link href="/" className="hover:text-gray-900">
        Home
      </Link>
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center space-x-2">
          <ChevronRight className="h-4 w-4" />
          <Link
            href={item.href}
            className={index === items.length - 1 ? "text-gray-900 font-medium" : "hover:text-gray-900"}
          >
            {item.label}
          </Link>
        </div>
      ))}
    </nav>
  )
}

