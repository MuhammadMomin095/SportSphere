import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface Product {
  id: string
  name: string
  price: number
  imageUrl: string
}

const products: Product[] = [
  {
    id: "1",
    name: "UT PRO PLAYERS",
    price: 35000.0,
    imageUrl:
      "/1.jpg",
  },
  {
    id: "2",
    name: "MB Hpro",
    price: 50000.0,
    imageUrl:
      "/1.jpg",
  },
  {
    id: "3",
    name: "MB Lala Edition",
    price: 30000.0,
    imageUrl:
      "/1.jpg",
  },
  {
    id: "4",
    name: "MB Special Edition",
    price: 65000.0,
    imageUrl:
      "/1.jpg",
  },
  {
    id: "5",
    name: "UT PRO PLAYERS",
    price: 35000.0,
    imageUrl:
      "/1.jpg",
  },
  {
    id: "6",
    name: "MB Hpro",
    price: 50000.0,
    imageUrl:
      "/1.jpg",
  },
  {
    id: "7",
    name: "MB Lala Edition",
    price: 30000.0,
    imageUrl:
      "/1.jpg",
  },
  {
    id: "8",
    name: "MB Special Edition",
    price: 65000.0,
    imageUrl:
      "/1.jpg",
  },
]

export default function LatestProducts() {
  return (
    <section className="">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-black mb-8">LATEST PRODUCTS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <Card className="h-full hover:shadow-lg hover:transition-transform duration-300 hover:scale-110">
                <CardContent className="p-4">
                  <div className="aspect-square relative mb-4">
                    <Image
                      src={product.imageUrl || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-red-600 font-bold mb-2">Rs.{product.price.toLocaleString()}</p>
                    <h3 className="font-medium text-gray-800">{product.name}</h3>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

