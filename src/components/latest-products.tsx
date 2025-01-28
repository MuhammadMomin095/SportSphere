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
    
    <section className="py-16 bg-black relative overflow-hidden ">
        <div className="absolute inset-0 overflow-hidden">
        <div className="absolute  -right-1/4 w-3/4 h-full bg-[#BDD715] opacity-40 transform -rotate-12"></div>
        </div>
        <div className='flex justify-center '>
        <h2 className="text-4xl text-white font-bold uppercase tracking-widest mb-4  w-[427px] h-[87px] justify-center flex items-center bg-transparent border-4 border-gray-400" style={{ boxShadow: "10px 10px 20px #1F2937" }}>LATEST PRODUCT</h2>
        </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  mt-8">
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
                    <p className="text-[#BDD715] font-bold mb-2">Rs.{product.price.toLocaleString()}</p>
                    <h3 className="font-medium text-gray-300">{product.name}</h3>
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

