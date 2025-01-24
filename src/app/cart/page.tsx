"use client"

import Link from "next/link"
import Image from "next/image"
import { Minus, Plus, Trash2 } from "lucide-react"
import { useCart } from "@/components/providers/cart-provider"

export default function CartPage() {
  const { items, addItem, removeItem } = useCart()

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = items.length > 0 ? 200 : 0
  const total = subtotal + shipping

  const updateQuantity = (id: string, quantity: number) => {
    const item = items.find((i) => i.id === id)
    if (item) {
      if (quantity === 0) {
        removeItem(id)
      } else {
        addItem({ ...item, quantity })
      }
    }
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <p className="text-gray-600 mb-8">Add some items to your cart to continue shopping.</p>
        <Link href="/" className="inline-block bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800">
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4 border rounded-lg p-4">
              <div className="relative w-24 h-24">
                <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-contain" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-gray-600">Rs. {item.price.toLocaleString()}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-end justify-between">
                <button onClick={() => removeItem(item.id)} className="p-1 hover:bg-gray-100 rounded text-red-500">
                  <Trash2 className="h-4 w-4" />
                </button>
                <p className="font-medium">Rs. {(item.price * item.quantity).toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-6 h-fit">
          <h2 className="text-lg font-bold mb-4">Order Summary</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>Rs. {subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Rs. {shipping.toLocaleString()}</span>
            </div>
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>Rs. {total.toLocaleString()}</span>
              </div>
            </div>
          </div>
          <Link
            href="/checkout"
            className="block w-full bg-black text-white text-center py-3 rounded-md mt-6 hover:bg-gray-800"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  )
}

