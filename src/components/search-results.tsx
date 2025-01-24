import Link from "next/link"
import Image from "next/image"

interface SearchResultsProps {
  results: Array<{
    id: string
    name: string
    price: number
    image: string
    brand: string
    categoryId: string
    categoryName: string
  }>
}

export function SearchResults({ results }: SearchResultsProps) {
  if (results.length === 0) return null

  return (
    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
      {results.map((product) => (
        <Link
          key={product.id}
          href={`/categories/${product.categoryId}/${product.id}`}
          className="flex items-center px-4 py-2 hover:bg-gray-100"
        >
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={40}
            height={40}
            className="object-contain mr-4"
          />
          <div>
            <div className="font-medium">{product.name}</div>
            <div className="text-sm text-gray-500">
              {product.brand} - {product.categoryName}
            </div>
            <div className="text-sm font-semibold">Rs. {product.price.toLocaleString()}</div>
          </div>
        </Link>
      ))}
    </div>
  )
}

