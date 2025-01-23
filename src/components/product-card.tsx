"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/providers/cart-provider"
import { useToast } from "@/hooks/use-toast"
import { Heart, ShoppingCart } from "lucide-react"

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
}

export function ProductCard({ id, name, price, image }: ProductCardProps) {
  const { addItem } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    addItem({ id, name, price, quantity: 1 })
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart.`,
    })
  }

  return (
    <div className="group relative">
      <Link href={`/product/${id}`} className="block">
        <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={300}
            height={300}
            className="h-full w-full object-cover object-center transition-transform group-hover:scale-105"
          />
        </div>
        <h3 className="mt-4 text-lg font-medium">{name}</h3>
        <p className="mt-1 text-sm text-gray-500">Rs. {price}</p>
      </Link>
      <div className="mt-4 flex gap-2">
        <Button onClick={handleAddToCart} className="flex-1">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
        <Button variant="outline" size="icon">
          <Heart className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

