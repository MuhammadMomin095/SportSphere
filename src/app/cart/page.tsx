"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react"
import { useCart } from "@/components/providers/cart-provider"
import { motion, AnimatePresence } from "framer-motion"

export default function CartPage() {
  const { items, addItem, removeItem } = useCart()
  const [removingId, setRemovingId] = useState<string | null>(null)

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = items.length > 0 ? 200 : 0
  const total = subtotal + shipping

  const updateQuantity = (id: string, quantity: number) => {
    const item = items.find((i) => i.id === id)
    if (item) {
      if (quantity === 0) {
        setRemovingId(id)
        setTimeout(() => {
          removeItem(id)
          setRemovingId(null)
        }, 300)
      } else {
        addItem({ ...item, quantity })
      }
    }
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-24">
        <div className="container mx-auto px-4 py-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto text-center bg-white rounded-2xl shadow-xl p-8"
          >
            <ShoppingBag className="w-16 h-16 mx-auto text-gray-400 mb-6" />
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-8">Add some items to your cart to continue shopping.</p>
            <Link href="/categories">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Continue Shopping
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-24">
      <div className="container mx-auto px-4 lg:px-14 md:px-8 ">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/categories">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </motion.div>
          </Link>
          <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <AnimatePresence>
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  className={`flex gap-6 bg-white rounded-xl p-6 shadow-sm transition-opacity ${
                    removingId === item.id ? "opacity-50" : ""
                  }`}
                >
                  <div className="relative w-32 h-32 flex-shrink-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-600 mb-4">Rs. {item.price.toLocaleString()}</p>
                    <div className="flex items-center gap-3">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </motion.button>
                      <span className="w-12 text-center font-medium">{item.quantity}</span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </motion.button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => updateQuantity(item.id, 0)}
                      className="p-2 hover:bg-red-50 rounded-full text-red-500 transition-colors"
                    >
                      <Trash2 className="h-5 w-5" />
                    </motion.button>
                    <p className="text-lg font-semibold text-gray-800">
                      Rs. {(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="lg:sticky lg:top-24 h-fit">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-sm p-6"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium">Rs. {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-medium">Rs. {shipping.toLocaleString()}</span>
                </div>
                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between text-gray-800">
                    <span className="text-lg font-bold">Total</span>
                    <span className="text-lg font-bold">Rs. {total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              <Link href="/checkout">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full bg-blue-600 text-white text-center py-4 rounded-lg mt-6 font-semibold hover:bg-blue-700 transition-colors"
                >
                  Proceed to Checkout
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

